(function (app, $) {
    app.init_main_localization = function(){
        // Ініціалізація мовних налаштувань
        $.when($.ajax("../../localization_main.xml")
            .done (function(xml){
                console.log("DATA", xml);
                $localization_main = $(xml).find("localization-main");
            })
            .fail(function(error) {
                var msg = "ERR :: \"localization_main.xml\" is not found!";
                app.critical_error_handler(msg);
                throw new Error(msg);
            })
        );

    };
})(window.app || {}, jQuery);