/*
var playAnimation = setInterval(function(){
    app.animation.current_procedure.instruction++;
    try {
        app.procedures[app.animation.current_procedure.name].instructions[app.animation.current_procedure.instruction].function_instruction();
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
                app.procedures[app.animation.current_procedure.name].instructions[app.animation.current_procedure.instruction].function_instruction();
            } catch(e) {
                var msg = "ERR :: no function for current instruction is found!";
                app.error_handlers.critical_error_handler(msg);
                clearInterval(app.animation.playAnimation);
                throw new Error(msg);
            }
        }
    };
})(window.app || {}, jQuery);