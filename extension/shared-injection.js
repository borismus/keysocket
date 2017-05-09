/**
 * shared-injection used for players that have API on web page side.
 * Extension can't execute web page JS functions in raw way from
 * the extension's scope. shared-injection inject JS code into
 * the page scope and communicate with it through messages bus
 * (window.postMessage).
 *
 * So, instead of defining `onKeyPress(key)` function, shared-injection
 * must be initialized calling injectionInit() and with the
 * handler function (similar to `onKeyPress(key)`) as it's argument.
 */

/**
 * Initialize injection. `keysocketEventHandler` is a function
 * that will handle keysocket event on the web page side.
 *
 * @param keysocketEventHandler
 */
function injectionInit(keysocketEventHandler)
{
    var handleKeysocketMessages = function () {
        window.addEventListener("message", function(e) {
            if (event.source !== window) {
                return;
            }

            if (event.data.type && (event.data.type === "keysocket-media-event")) {
                keysocketOnKeyPressed(event.data.command);
            }
        });
    };

    injectFunction(handleKeysocketMessages);

    injectCode('window.keysocketOnKeyPressed = ' + keysocketEventHandler);

    function injectFunction(injectionFunction) {
        injectCode('(' + injectionFunction + ')()');
    }

    function injectCode(injection) {
        var injectedScript = document.createElement('script');
        injectedScript.textContent = injection;
        (document.head || document.documentElement).appendChild(injectedScript);
        injectedScript.parentNode.removeChild(injectedScript);
    }
}

/**
 * Standard extension-side command handler. Used in shared.js
 * @param key string
 */
function onKeyPress(key) {
    window.postMessage({ type: "keysocket-media-event", command: key }, "*");
}