(function () {
    if (!window.app) {
        window.app = {};
    }
})();


(function (app, $) {
    app.errorHandler = function (msg) {
        $(".js_error").text(msg);
    }
})(window.app || {}, jQuery); 