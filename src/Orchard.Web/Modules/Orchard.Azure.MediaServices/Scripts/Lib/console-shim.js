/*
** NOTE: This file is generated by Gulp and should not be edited directly!
** Any changes made directly to this file will be overwritten next time its asset group is processed by Gulp.
*/

/**
 * @preserve console-shim 1.0.2
 * https://github.com/kayahr/console-shim
 * Copyright (C) 2011 Klaus Reimer <k@ailis.de>
 * Licensed under the MIT license
 * (See http://www.opensource.org/licenses/mit-license)
 */
 
 
(function(){
"use strict";

/**
 * Returns a function which calls the specified function in the specified
 * scope.
 *
 * @param {Function} func
 *            The function to call.
 * @param {Object} scope
 *            The scope to call the function in.
 * @param {...*} args
 *            Additional arguments to pass to the bound function.
 * @returns {function(...[*]): undefined}
 *            The bound function.
 */
var bind = function(func, scope, args)
{
    var fixedArgs = Array.prototype.slice.call(arguments, 2);
    return function()
    {
        var args = fixedArgs.concat(Array.prototype.slice.call(arguments, 0));
        (/** @type {Function} */ func).apply(scope, args);
    };
};

// Create console if not present
if (!window["console"]) window.console = /** @type {Console} */ ({});
var console = (/** @type {Object} */ window.console);

// Implement console log if needed
if (!console["log"])
{
    // Use log4javascript if present
    if (window["log4javascript"])
    {
        var log = log4javascript.getDefaultLogger();
        console.log = bind(log.info, log);
        console.debug = bind(log.debug, log);
        console.info = bind(log.info, log);
        console.warn = bind(log.warn, log);
        console.error = bind(log.error, log);
    }
    
    // Use empty dummy implementation to ignore logging
    else
    {
        console.log = (/** @param {...*} args */ function(args) {});
    }
}

// Implement other log levels to console.log if missing
if (!console["debug"]) console.debug = console.log;
if (!console["info"]) console.info = console.log;
if (!console["warn"]) console.warn = console.log;
if (!console["error"]) console.error = console.log;

// Wrap the log methods in IE (<=9) because their argument handling is wrong
// This wrapping is also done if the __consoleShimTest__ symbol is set. This
// is needed for unit testing.
if (window["__consoleShimTest__"] != null || 
    eval("/*@cc_on @_jscript_version <= 9@*/"))
{
    /**
     * Wraps the call to a real IE logging method. Modifies the arguments so
     * parameters which are not represented by a placeholder are properly
     * printed with a space character as separator.
     *
     * @param {...*} args
     *            The function arguments. First argument is the log function
     *            to call, the other arguments are the log arguments.
     */
    var wrap = function(args)
    {
        var i, max, match, log;
        
        // Convert argument list to real array
        args = Array.prototype.slice.call(arguments, 0);
        
        // First argument is the log method to call
        log = args.shift();
        
        max = args.length;
        if (max > 1 && window["__consoleShimTest__"] !== false)
        {
            // When first parameter is not a string then add a format string to
            // the argument list so we are able to modify it in the next stop
            if (typeof(args[0]) != "string")
            {
                args.unshift("%o");
                max += 1;
            }
            
            // For each additional parameter which has no placeholder in the
            // format string we add another placeholder separated with a
            // space character.
            match = args[0].match(/%[a-z]/g);
            for (i = match ? match.length + 1 : 1; i < max; i += 1)
            {
                args[0] += " %o";
            }
        }
        Function.apply.call(log, console, args);
    };
    
    // Wrap the native log methods of IE to fix argument output problems
    console.log = bind(wrap, window, console.log);
    console.debug = bind(wrap, window, console.debug);
    console.info = bind(wrap, window, console.info);
    console.warn = bind(wrap, window, console.warn);
    console.error = bind(wrap, window, console.error);
}

// Implement console.assert if missing
if (!console["assert"])
{
    console["assert"] = function()
    {
        var args = Array.prototype.slice.call(arguments, 0);
        var expr = args.shift();
        if (!expr)
        {
            args[0] = "Assertion failed: " + args[0];
            console.error.apply(console, args);
        }
    };
}

// Linking console.dir and console.dirxml to the console.log method if
// missing. Hopefully the browser already logs objects and DOM nodes as a
// tree.
if (!console["dir"]) console["dir"] = console.log;
if (!console["dirxml"]) console["dirxml"] = console.log;

// Linking console.exception to console.error. This is not the same but
// at least some error message is displayed.
if (!console["exception"]) console["exception"] = console.error;

// Implement console.time and console.timeEnd if one of them is missing
if (!console["time"] || !console["timeEnd"])
{
    var timers = {};
    console["time"] = function(id)
    {
        timers[id] = new Date().getTime();
    };
    console["timeEnd"] = function(id)
    {
        var start = timers[id];
        if (start)
        {
            console.log(id + ": " + (new Date().getTime() - start) + "ms");
            delete timers[id];
        }
    };
}

// Implement console.table if missing
if (!console["table"])
{
    console["table"] = function(data, columns)
    {
        var i, iMax, row, j, jMax, k;
        
        // Do nothing if data has wrong type or no data was specified
        if (!data || !(data instanceof Array) || !data.length) return;
        
        // Auto-calculate columns array if not set
        if (!columns || !(columns instanceof Array))
        {
            columns = [];
            for (k in data[0])
            {
                if (!data[0].hasOwnProperty(k)) continue;
                columns.push(k);
            }
        }
        
        for (i = 0, iMax = data.length; i < iMax; i += 1)
        {
            row = [];
            for (j = 0, jMax = columns.length; j < jMax; j += 1)
            {
                row.push(data[i][columns[j]]);
            }
            
            Function.apply.call(console.log, console, row);
        }
    };
}

// Dummy implementations of other console features to prevent error messages
// in browsers not supporting it.
if (!console["clear"]) console["clear"] = function() {};
if (!console["trace"]) console["trace"] = function() {};
if (!console["group"]) console["group"] = function() {};
if (!console["groupCollapsed"]) console["groupCollapsed"] = function() {};
if (!console["groupEnd"]) console["groupEnd"] = function() {};
if (!console["timeStamp"]) console["timeStamp"] = function() {};
if (!console["profile"]) console["profile"] = function() {};
if (!console["profileEnd"]) console["profileEnd"] = function() {};
if (!console["count"]) console["count"] = function() {};

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnNvbGUtc2hpbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb25zb2xlLXNoaW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQHByZXNlcnZlIGNvbnNvbGUtc2hpbSAxLjAuMlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20va2F5YWhyL2NvbnNvbGUtc2hpbVxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTEgS2xhdXMgUmVpbWVyIDxrQGFpbGlzLmRlPlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICogKFNlZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlKVxyXG4gKi9cclxuIFxyXG4gXHJcbihmdW5jdGlvbigpe1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2ggY2FsbHMgdGhlIHNwZWNpZmllZCBmdW5jdGlvbiBpbiB0aGUgc3BlY2lmaWVkXHJcbiAqIHNjb3BlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jXHJcbiAqICAgICAgICAgICAgVGhlIGZ1bmN0aW9uIHRvIGNhbGwuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxyXG4gKiAgICAgICAgICAgIFRoZSBzY29wZSB0byBjYWxsIHRoZSBmdW5jdGlvbiBpbi5cclxuICogQHBhcmFtIHsuLi4qfSBhcmdzXHJcbiAqICAgICAgICAgICAgQWRkaXRpb25hbCBhcmd1bWVudHMgdG8gcGFzcyB0byB0aGUgYm91bmQgZnVuY3Rpb24uXHJcbiAqIEByZXR1cm5zIHtmdW5jdGlvbiguLi5bKl0pOiB1bmRlZmluZWR9XHJcbiAqICAgICAgICAgICAgVGhlIGJvdW5kIGZ1bmN0aW9uLlxyXG4gKi9cclxudmFyIGJpbmQgPSBmdW5jdGlvbihmdW5jLCBzY29wZSwgYXJncylcclxue1xyXG4gICAgdmFyIGZpeGVkQXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBhcmdzID0gZml4ZWRBcmdzLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApKTtcclxuICAgICAgICAoLyoqIEB0eXBlIHtGdW5jdGlvbn0gKi8gZnVuYykuYXBwbHkoc2NvcGUsIGFyZ3MpO1xyXG4gICAgfTtcclxufTtcclxuXHJcbi8vIENyZWF0ZSBjb25zb2xlIGlmIG5vdCBwcmVzZW50XHJcbmlmICghd2luZG93W1wiY29uc29sZVwiXSkgd2luZG93LmNvbnNvbGUgPSAvKiogQHR5cGUge0NvbnNvbGV9ICovICh7fSk7XHJcbnZhciBjb25zb2xlID0gKC8qKiBAdHlwZSB7T2JqZWN0fSAqLyB3aW5kb3cuY29uc29sZSk7XHJcblxyXG4vLyBJbXBsZW1lbnQgY29uc29sZSBsb2cgaWYgbmVlZGVkXHJcbmlmICghY29uc29sZVtcImxvZ1wiXSlcclxue1xyXG4gICAgLy8gVXNlIGxvZzRqYXZhc2NyaXB0IGlmIHByZXNlbnRcclxuICAgIGlmICh3aW5kb3dbXCJsb2c0amF2YXNjcmlwdFwiXSlcclxuICAgIHtcclxuICAgICAgICB2YXIgbG9nID0gbG9nNGphdmFzY3JpcHQuZ2V0RGVmYXVsdExvZ2dlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nID0gYmluZChsb2cuaW5mbywgbG9nKTtcclxuICAgICAgICBjb25zb2xlLmRlYnVnID0gYmluZChsb2cuZGVidWcsIGxvZyk7XHJcbiAgICAgICAgY29uc29sZS5pbmZvID0gYmluZChsb2cuaW5mbywgbG9nKTtcclxuICAgICAgICBjb25zb2xlLndhcm4gPSBiaW5kKGxvZy53YXJuLCBsb2cpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IgPSBiaW5kKGxvZy5lcnJvciwgbG9nKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gVXNlIGVtcHR5IGR1bW15IGltcGxlbWVudGF0aW9uIHRvIGlnbm9yZSBsb2dnaW5nXHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2cgPSAoLyoqIEBwYXJhbSB7Li4uKn0gYXJncyAqLyBmdW5jdGlvbihhcmdzKSB7fSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEltcGxlbWVudCBvdGhlciBsb2cgbGV2ZWxzIHRvIGNvbnNvbGUubG9nIGlmIG1pc3NpbmdcclxuaWYgKCFjb25zb2xlW1wiZGVidWdcIl0pIGNvbnNvbGUuZGVidWcgPSBjb25zb2xlLmxvZztcclxuaWYgKCFjb25zb2xlW1wiaW5mb1wiXSkgY29uc29sZS5pbmZvID0gY29uc29sZS5sb2c7XHJcbmlmICghY29uc29sZVtcIndhcm5cIl0pIGNvbnNvbGUud2FybiA9IGNvbnNvbGUubG9nO1xyXG5pZiAoIWNvbnNvbGVbXCJlcnJvclwiXSkgY29uc29sZS5lcnJvciA9IGNvbnNvbGUubG9nO1xyXG5cclxuLy8gV3JhcCB0aGUgbG9nIG1ldGhvZHMgaW4gSUUgKDw9OSkgYmVjYXVzZSB0aGVpciBhcmd1bWVudCBoYW5kbGluZyBpcyB3cm9uZ1xyXG4vLyBUaGlzIHdyYXBwaW5nIGlzIGFsc28gZG9uZSBpZiB0aGUgX19jb25zb2xlU2hpbVRlc3RfXyBzeW1ib2wgaXMgc2V0LiBUaGlzXHJcbi8vIGlzIG5lZWRlZCBmb3IgdW5pdCB0ZXN0aW5nLlxyXG5pZiAod2luZG93W1wiX19jb25zb2xlU2hpbVRlc3RfX1wiXSAhPSBudWxsIHx8IFxyXG4gICAgZXZhbChcIi8qQGNjX29uIEBfanNjcmlwdF92ZXJzaW9uIDw9IDlAKi9cIikpXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogV3JhcHMgdGhlIGNhbGwgdG8gYSByZWFsIElFIGxvZ2dpbmcgbWV0aG9kLiBNb2RpZmllcyB0aGUgYXJndW1lbnRzIHNvXHJcbiAgICAgKiBwYXJhbWV0ZXJzIHdoaWNoIGFyZSBub3QgcmVwcmVzZW50ZWQgYnkgYSBwbGFjZWhvbGRlciBhcmUgcHJvcGVybHlcclxuICAgICAqIHByaW50ZWQgd2l0aCBhIHNwYWNlIGNoYXJhY3RlciBhcyBzZXBhcmF0b3IuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHsuLi4qfSBhcmdzXHJcbiAgICAgKiAgICAgICAgICAgIFRoZSBmdW5jdGlvbiBhcmd1bWVudHMuIEZpcnN0IGFyZ3VtZW50IGlzIHRoZSBsb2cgZnVuY3Rpb25cclxuICAgICAqICAgICAgICAgICAgdG8gY2FsbCwgdGhlIG90aGVyIGFyZ3VtZW50cyBhcmUgdGhlIGxvZyBhcmd1bWVudHMuXHJcbiAgICAgKi9cclxuICAgIHZhciB3cmFwID0gZnVuY3Rpb24oYXJncylcclxuICAgIHtcclxuICAgICAgICB2YXIgaSwgbWF4LCBtYXRjaCwgbG9nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENvbnZlcnQgYXJndW1lbnQgbGlzdCB0byByZWFsIGFycmF5XHJcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRmlyc3QgYXJndW1lbnQgaXMgdGhlIGxvZyBtZXRob2QgdG8gY2FsbFxyXG4gICAgICAgIGxvZyA9IGFyZ3Muc2hpZnQoKTtcclxuICAgICAgICBcclxuICAgICAgICBtYXggPSBhcmdzLmxlbmd0aDtcclxuICAgICAgICBpZiAobWF4ID4gMSAmJiB3aW5kb3dbXCJfX2NvbnNvbGVTaGltVGVzdF9fXCJdICE9PSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIFdoZW4gZmlyc3QgcGFyYW1ldGVyIGlzIG5vdCBhIHN0cmluZyB0aGVuIGFkZCBhIGZvcm1hdCBzdHJpbmcgdG9cclxuICAgICAgICAgICAgLy8gdGhlIGFyZ3VtZW50IGxpc3Qgc28gd2UgYXJlIGFibGUgdG8gbW9kaWZ5IGl0IGluIHRoZSBuZXh0IHN0b3BcclxuICAgICAgICAgICAgaWYgKHR5cGVvZihhcmdzWzBdKSAhPSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcmdzLnVuc2hpZnQoXCIlb1wiKTtcclxuICAgICAgICAgICAgICAgIG1heCArPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBGb3IgZWFjaCBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aGljaCBoYXMgbm8gcGxhY2Vob2xkZXIgaW4gdGhlXHJcbiAgICAgICAgICAgIC8vIGZvcm1hdCBzdHJpbmcgd2UgYWRkIGFub3RoZXIgcGxhY2Vob2xkZXIgc2VwYXJhdGVkIHdpdGggYVxyXG4gICAgICAgICAgICAvLyBzcGFjZSBjaGFyYWN0ZXIuXHJcbiAgICAgICAgICAgIG1hdGNoID0gYXJnc1swXS5tYXRjaCgvJVthLXpdL2cpO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSBtYXRjaCA/IG1hdGNoLmxlbmd0aCArIDEgOiAxOyBpIDwgbWF4OyBpICs9IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbMF0gKz0gXCIgJW9cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBGdW5jdGlvbi5hcHBseS5jYWxsKGxvZywgY29uc29sZSwgYXJncyk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvLyBXcmFwIHRoZSBuYXRpdmUgbG9nIG1ldGhvZHMgb2YgSUUgdG8gZml4IGFyZ3VtZW50IG91dHB1dCBwcm9ibGVtc1xyXG4gICAgY29uc29sZS5sb2cgPSBiaW5kKHdyYXAsIHdpbmRvdywgY29uc29sZS5sb2cpO1xyXG4gICAgY29uc29sZS5kZWJ1ZyA9IGJpbmQod3JhcCwgd2luZG93LCBjb25zb2xlLmRlYnVnKTtcclxuICAgIGNvbnNvbGUuaW5mbyA9IGJpbmQod3JhcCwgd2luZG93LCBjb25zb2xlLmluZm8pO1xyXG4gICAgY29uc29sZS53YXJuID0gYmluZCh3cmFwLCB3aW5kb3csIGNvbnNvbGUud2Fybik7XHJcbiAgICBjb25zb2xlLmVycm9yID0gYmluZCh3cmFwLCB3aW5kb3csIGNvbnNvbGUuZXJyb3IpO1xyXG59XHJcblxyXG4vLyBJbXBsZW1lbnQgY29uc29sZS5hc3NlcnQgaWYgbWlzc2luZ1xyXG5pZiAoIWNvbnNvbGVbXCJhc3NlcnRcIl0pXHJcbntcclxuICAgIGNvbnNvbGVbXCJhc3NlcnRcIl0gPSBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xyXG4gICAgICAgIHZhciBleHByID0gYXJncy5zaGlmdCgpO1xyXG4gICAgICAgIGlmICghZXhwcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFyZ3NbMF0gPSBcIkFzc2VydGlvbiBmYWlsZWQ6IFwiICsgYXJnc1swXTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvci5hcHBseShjb25zb2xlLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBMaW5raW5nIGNvbnNvbGUuZGlyIGFuZCBjb25zb2xlLmRpcnhtbCB0byB0aGUgY29uc29sZS5sb2cgbWV0aG9kIGlmXHJcbi8vIG1pc3NpbmcuIEhvcGVmdWxseSB0aGUgYnJvd3NlciBhbHJlYWR5IGxvZ3Mgb2JqZWN0cyBhbmQgRE9NIG5vZGVzIGFzIGFcclxuLy8gdHJlZS5cclxuaWYgKCFjb25zb2xlW1wiZGlyXCJdKSBjb25zb2xlW1wiZGlyXCJdID0gY29uc29sZS5sb2c7XHJcbmlmICghY29uc29sZVtcImRpcnhtbFwiXSkgY29uc29sZVtcImRpcnhtbFwiXSA9IGNvbnNvbGUubG9nO1xyXG5cclxuLy8gTGlua2luZyBjb25zb2xlLmV4Y2VwdGlvbiB0byBjb25zb2xlLmVycm9yLiBUaGlzIGlzIG5vdCB0aGUgc2FtZSBidXRcclxuLy8gYXQgbGVhc3Qgc29tZSBlcnJvciBtZXNzYWdlIGlzIGRpc3BsYXllZC5cclxuaWYgKCFjb25zb2xlW1wiZXhjZXB0aW9uXCJdKSBjb25zb2xlW1wiZXhjZXB0aW9uXCJdID0gY29uc29sZS5lcnJvcjtcclxuXHJcbi8vIEltcGxlbWVudCBjb25zb2xlLnRpbWUgYW5kIGNvbnNvbGUudGltZUVuZCBpZiBvbmUgb2YgdGhlbSBpcyBtaXNzaW5nXHJcbmlmICghY29uc29sZVtcInRpbWVcIl0gfHwgIWNvbnNvbGVbXCJ0aW1lRW5kXCJdKVxyXG57XHJcbiAgICB2YXIgdGltZXJzID0ge307XHJcbiAgICBjb25zb2xlW1widGltZVwiXSA9IGZ1bmN0aW9uKGlkKVxyXG4gICAge1xyXG4gICAgICAgIHRpbWVyc1tpZF0gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIH07XHJcbiAgICBjb25zb2xlW1widGltZUVuZFwiXSA9IGZ1bmN0aW9uKGlkKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBzdGFydCA9IHRpbWVyc1tpZF07XHJcbiAgICAgICAgaWYgKHN0YXJ0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaWQgKyBcIjogXCIgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydCkgKyBcIm1zXCIpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGltZXJzW2lkXTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBJbXBsZW1lbnQgY29uc29sZS50YWJsZSBpZiBtaXNzaW5nXHJcbmlmICghY29uc29sZVtcInRhYmxlXCJdKVxyXG57XHJcbiAgICBjb25zb2xlW1widGFibGVcIl0gPSBmdW5jdGlvbihkYXRhLCBjb2x1bW5zKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBpLCBpTWF4LCByb3csIGosIGpNYXgsIGs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBkYXRhIGhhcyB3cm9uZyB0eXBlIG9yIG5vIGRhdGEgd2FzIHNwZWNpZmllZFxyXG4gICAgICAgIGlmICghZGF0YSB8fCAhKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkgfHwgIWRhdGEubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQXV0by1jYWxjdWxhdGUgY29sdW1ucyBhcnJheSBpZiBub3Qgc2V0XHJcbiAgICAgICAgaWYgKCFjb2x1bW5zIHx8ICEoY29sdW1ucyBpbnN0YW5jZW9mIEFycmF5KSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbHVtbnMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChrIGluIGRhdGFbMF0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0YVswXS5oYXNPd25Qcm9wZXJ0eShrKSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zLnB1c2goayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChpID0gMCwgaU1heCA9IGRhdGEubGVuZ3RoOyBpIDwgaU1heDsgaSArPSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcm93ID0gW107XHJcbiAgICAgICAgICAgIGZvciAoaiA9IDAsIGpNYXggPSBjb2x1bW5zLmxlbmd0aDsgaiA8IGpNYXg7IGogKz0gMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm93LnB1c2goZGF0YVtpXVtjb2x1bW5zW2pdXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEZ1bmN0aW9uLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gRHVtbXkgaW1wbGVtZW50YXRpb25zIG9mIG90aGVyIGNvbnNvbGUgZmVhdHVyZXMgdG8gcHJldmVudCBlcnJvciBtZXNzYWdlc1xyXG4vLyBpbiBicm93c2VycyBub3Qgc3VwcG9ydGluZyBpdC5cclxuaWYgKCFjb25zb2xlW1wiY2xlYXJcIl0pIGNvbnNvbGVbXCJjbGVhclwiXSA9IGZ1bmN0aW9uKCkge307XHJcbmlmICghY29uc29sZVtcInRyYWNlXCJdKSBjb25zb2xlW1widHJhY2VcIl0gPSBmdW5jdGlvbigpIHt9O1xyXG5pZiAoIWNvbnNvbGVbXCJncm91cFwiXSkgY29uc29sZVtcImdyb3VwXCJdID0gZnVuY3Rpb24oKSB7fTtcclxuaWYgKCFjb25zb2xlW1wiZ3JvdXBDb2xsYXBzZWRcIl0pIGNvbnNvbGVbXCJncm91cENvbGxhcHNlZFwiXSA9IGZ1bmN0aW9uKCkge307XHJcbmlmICghY29uc29sZVtcImdyb3VwRW5kXCJdKSBjb25zb2xlW1wiZ3JvdXBFbmRcIl0gPSBmdW5jdGlvbigpIHt9O1xyXG5pZiAoIWNvbnNvbGVbXCJ0aW1lU3RhbXBcIl0pIGNvbnNvbGVbXCJ0aW1lU3RhbXBcIl0gPSBmdW5jdGlvbigpIHt9O1xyXG5pZiAoIWNvbnNvbGVbXCJwcm9maWxlXCJdKSBjb25zb2xlW1wicHJvZmlsZVwiXSA9IGZ1bmN0aW9uKCkge307XHJcbmlmICghY29uc29sZVtcInByb2ZpbGVFbmRcIl0pIGNvbnNvbGVbXCJwcm9maWxlRW5kXCJdID0gZnVuY3Rpb24oKSB7fTtcclxuaWYgKCFjb25zb2xlW1wiY291bnRcIl0pIGNvbnNvbGVbXCJjb3VudFwiXSA9IGZ1bmN0aW9uKCkge307XHJcblxyXG59KSgpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
