/// <reference path="libs/jquery-1.11.1.js" />

window.APP = (function (module, $) {
    "use strict";
    
    module.HELPER = (function (module, $) { 

        var submodule = {};

        var device = {};
    
        /**
          * @desc checks for touch support - uses touchevents  & msPointer events. Adds CSS class 'supports-touch' if true
          * @return boolean
        */
        device.supportsTouch = (function() {
            var isTouch = !!('ontouchstart' in window) || !!window.navigator.msMaxTouchPoints;
            if (isTouch) {
                var htmlTag = document.getElementsByTagName('html')[0];

                htmlTag.className = htmlTag.className.replace(/(?:^|\s)no-touch-support(?!\S)/, 'supports-touch');
            }
            return isTouch;
        })();

        /**
          * @desc checks html tag for specified CSS class
          * @param string version - the CSS class you want to check the existence of
          * @return boolean
        */
        device.isIE = function(version) {
            var cssClass = (version) ? version : 'ie',
                element = document.getElementsByTagName("html")[0];
            return element.className && new RegExp("(^|\\s)" + cssClass + "(\\s|$)").test(element.className);
        };
    
        submodule.DEVICE = device;
  
    
        /**
          * @desc validates a string as a valid email
          * @param string email - the string you want to validate
          * @return boolean
        */
        submodule.isEmail = function (email) {
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);    
        }
    
        /**
          * @desc pads out a number with zeros to a minimum length
          * @param int number - the number you want to convert
          * @param int size - minimum length of return string
          * @return string
        */
        submodule.pad = function (number, size) {
            var s = number + "";
            while (s.length < size) s = "0" + s;
            return s;
        };
    
        /**
          * @desc gets the value of a hash parameter
          * @param url - the string from which to extract the value
          * @param paramName - the name of the hash
          * @return string or null
        */
        submodule.getHashParameter = function (url, paramName) {
            var searchString = url.split("#");

            if (searchString.length < 2) {
                return null;
            }

            var i, val, params = searchString[1].split("&");

            for (i = 0; i < params.length; i++) {
                val = params[i].split("=");
                if (val[0] == paramName) {
                    return unescape(val[1]);
                }
            }
            return null;
        };
    
        /**
          * @desc get the value from a name/value pair
          * @param name - the name of the name/value pair
          * @param string - the string from which to extract the value
          * @return string or null
        */
        submodule.getParamFromString = function (name, string) {
            if (!name && !string) {
                return;
            }
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(string);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    
        /**
          * @desc shuffles the order of an Array
          * @param array - the array you want to shuffle 
          * @return shuffled array
        */
        submodule.shuffleArray = function (array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        };
        
        /**
          * @desc dependency for 'supports' function
        */
        _.supportsList = {};
        
        /**
          * @desc checks to see if the browser supports a certain css property
          * @param prop - The property you want to check against the browser
          * @return boolean indicating support
        */
        _.supports = function(prop) {
        
            if(_.supportsList[prop] == true || _.supportsList[prop] == false) {
                return _.supportsList[prop];
            }
        
            var div = document.createElement('div'),
                vendors = 'khtml ms o moz webkit'.split(' '), 
                len = vendors.length,
                propOriginal = prop,
                propFirstLetterLC = prop.replace(/^[A-Z]/, function(val) {
                    return val.toLowerCase();
                }),
                propFirstLetterUC = prop.replace(/^[a-z]/, function(val) {
                    return val.toUpperCase();
                }),
                isSupported = false;
        
            if (propOriginal in div.style) {
                _.supportsList[propOriginal] = true;
                isSupported = true;
            }
            if (propFirstLetterLC in div.style) {
                _.supportsList[propFirstLetterLC] = true;
                isSupported = true;
            }
        
            while(len--) {
                if ( vendors[len] + propFirstLetterUC in div.style ) {
                    _.supportsList[vendors[len] + propFirstLetterUC] = true;
                    isSupported = true;
                    break;
                }
            }
        
            if(isSupported === false) {
                _.supportsList[propOriginal] = false;
            }
            return isSupported;
        }
    
        return submodule;

    }(module, $));
    
    return module;
    

})(window.APP || {}, window.jQuery);


// make it safe to use console.log always
(function (b) { function c() { } for (var d = "assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","), a; a = d.pop() ;) { b[a] = b[a] || c } })((function () {
    try
    { console.log(); return window.console; } catch (err) { return window.console = {}; }
})());

/* Work around for mobile safari scaling bug */
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
    var viewportmeta = document.querySelector('meta[name="viewport"]');
    if (viewportmeta) {
        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
        document.body.addEventListener('gesturestart', function () {
            viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
        }, false);
    }
}
