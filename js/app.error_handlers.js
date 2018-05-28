(function (app, $) {
    // БЛОК ОБРОБКИ ПОМИЛОК -- ПОЧАТОК
    app.error_handlers = {
        // Помилки, з якими подальша робота застосунка можлива
        error_handler_regular: function (msg) {
            var self = app;
            //
            self.dom_element.error_msg.text(msg);
            self.dom_element.modal_window.fadeIn("slow");
            self.dom_element.btn_close_modal.on("click", function() {
                self.dom_element.modal_window.fadeOut("slow");
            });
        },
        // Помилки, без вирішення яких подальша робота застосунка неможлива
        critical_error_handler: function (msg) {
            var self = app;
            //
            self.dom_element.error_msg.text(msg);
            self.dom_element.modal_window.fadeIn("slow");
            self.dom_element.btn_close_modal.hide();
        }
    };
    // БЛОК ОБРОБКИ ПОМИЛОК -- КІНЕЦЬ
})(window.app || {}, jQuery);

