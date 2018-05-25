(function (app, $) {
    //
    app.settings =  {
        default_lang: "uk"

    };
    //
    app.localization = {};
    //
    app.initMainLocalization = function(){
        // Ініціалізація мовних налаштувань
        $.when($.ajax( app.global_path + "localization_main.xml" )
            .done (function(xml){
                console.log("DATA", xml);
                $localization_main = $(xml).find("localization-main");
            })
            .fail(function(error) {
                var msg = "ERR :: \"localization_main.xml\" is not found!";
                app.criticalErrorHandler(msg);
                throw new Error(msg);
            })
        );

    };

})(window.app || {}, jQuery);