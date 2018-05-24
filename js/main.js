(function (app, $) {
    // Помилки, з якими подальша робота застосунка можлива
    app.errorHandler = function (msg) {
        var self = this;
        //
        self.element.error_msg.text(msg);
        self.element.modal_window.fadeIn("slow");
        self.element.btn_close_modal.on("click", function() {
            self.element.modal_window.fadeOut("slow");
        });
    };
    // Помилки, без вирішення яких подальша робота застосунка неможлива
    app.criticalErrorHandler = function (msg) {
        var self = this;
        //
        self.element.error_msg.text(msg);
        self.element.modal_window.fadeIn("slow");
        self.element.btn_close_modal.hide();
    };

    //
    app.updateAudio = function(sourceUrl) {
        var self = this;
        //
        self.element.audio.empty();
        $("mp3_src").attr("src", sourceUrl).appendTo(self.element.audio);
    };
})(window.app || {}, jQuery);

