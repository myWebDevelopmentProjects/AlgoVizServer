(function (app, $) {
    //
    app.element = {
        pseudoCode: $("data-pseudocode active-field"),
        textComment: $("comments-block active-field"),
        procedures: $("procedures-block active-field"),
        audio: $(".audio-comment"),
        error_msg: $(".js-error-msg"),
        modal_window: $("modal-window"),
        btn_close_modal: $("btn-close-modal")
    };
})(window.app || {}, jQuery);

