/*
var playAnimation = setInterval(function(){
    app.animation.current_procedure.instruction++;
    try {
        app.procedures[app.animation.current_procedure.name].instructions[app.animation.current_procedure.instruction].action();
    } catch(e) {
        var msg = "ERR :: no function for current instruction is found!";
        app.error_handlers.critical_error_handler(msg);
        clearInterval(playAnimation);
        throw new Error(msg);
    }
}, 2000);
*/
(function (app, $) {
    // Запуск фнфмації при кліку на кнопку СТАРТ
    app.animation = {
        // Поточна процедурв
        current_procedure: {
            name: "",
            instruction: 0
        },
        New_Elem:{},
            call_New_Elem: function(){
        },
        playAnimation: "",
        start: function(){
            app.animation.current_procedure.instruction++;
            try {
                app.procedures[app.animation.current_procedure.name].instructions[app.animation.current_procedure.instruction].action();
            } catch(e) {
                var msg = app.localization_main.find("no_function_for_procedure").text();
                app.error_handlers.critical_error_handler(msg);
                clearInterval(app.animation.playAnimation);
                throw new Error(msg);
            }
        }
    };
})(window.app || {}, jQuery);