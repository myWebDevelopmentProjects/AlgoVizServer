(function (app, $) {
    //
    app.settings =  {
        default_lang: "uk"

    };
    //
    app.paths = {
       global_path: window.location.hostname + "/",
       local_path: window.location.pathname
    };
    //
    app.localization = {};
    //
    app.initMainLocalization = function(){
        // Ініціалізація мовних налаштувань
        $.when($.ajax("localization_main.xml")
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