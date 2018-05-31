(function (app, $) {
    // Ініціалізація властивостей елементів керування процесом запуску алгоритму
    app.controls = {
        // Запуск ініціалізації подій для елементів панелі керування
        init: function() {
            var self = app,
                controls = app.controls;
            // Кнопка СТАРТ
            app.dom_elements.control_btn_start.on("click", function() {
                controls.make_btn_active(app.dom_elements.control_btn_start);
                controls.control_btn_start();
            });
            // Кнопка НАЗАД
            app.dom_elements.control_btn_back.on("click", function() {
                controls.make_btn_active(app.dom_elements.control_btn_back);
                controls.control_btn_back();
            });
            // Кнопка ПАУЗА
            app.dom_elements.control_btn_pause.on("click", function() {
                controls.make_btn_active(app.dom_elements.control_btn_pause);
                controls.control_btn_pause();
            });
            // Кнопка ВПЕРЕД
            app.dom_elements.control_btn_forward.on("click", function() {
                controls.make_btn_active(app.dom_elements.control_btn_forward);
                controls.control_btn_forward();
            });
            // Кнопка СТОП
            app.dom_elements.control_btn_stop.on("click", function() {
                controls.make_btn_active(app.dom_elements.control_btn_stop);
                controls.control_btn_stop();
            });
        },
        make_btn_active: function(btn){
            $("view_row control_btn").each(function(){
                $(this).removeClass("active");
            });
            btn.addClass("active");
        },
        control_btn_start: function() {// Кнопка СТАРТ
            var self = app;
            $("bst-structure root-bst").css({
                "animation": "root_to_left_node_1_1 2s ease-in-out 0s forwards",
            });
            console.log(app.procedures);
            app.procedures[app.animation.current_procedure.name].instructions[app.animation.current_procedure.instruction].function_instruction();
            app.animation.playAnimation = setInterval(function(){
                app.animation.start();
            }, 2000)

        },
        control_btn_back: function() {// Кнопка НАЗАД

        },
        control_btn_pause: function() {// Кнопка ПАУЗА

        },
        control_btn_forward: function() {// Кнопка ВПЕРЕД

        },
        control_btn_stop: function() {}

    };
})(window.app || {}, jQuery);