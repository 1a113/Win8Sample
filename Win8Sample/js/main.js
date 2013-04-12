// main.js
require.config({
    baseUrl: '/js',
    paths: {
        underscore: 'underscore/underscore'
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    }
});


define('activated', function () {
    
    "use strict";

    function activated(callback) {
        if (!window.appActivated) {
            window.setTimeout(activated, 16.7); // recheck every 60 ms.
        } else {
            callback(1);
        }

        return activated;
    }

    activated.load = function (name, req, onLoad, config) {
        if (config.isBuild) {
            onLoad(null);
        } else {
            activated(onLoad);
        }
    };
    
    return activated;
});

require(['underscore', 'activated!'], function (_) {
    console.log(_);
});
