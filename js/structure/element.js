(function (app, $) {
    //
    app.element = {
        pseudoCode: $("data_pseudocode active_field"),
        textComment: $("comments_block active_field"),
        procedures: $("procedures_block active_field"),
        audio: $(".audio-comment"),
        error_msg: $(".js-error-msg"),
        modal_window: $("modal_window"),
        btn_close_modal: $("btn_close_modal"),
        copy_block: $("copy_block")
    };
})(window.app || {}, jQuery);

