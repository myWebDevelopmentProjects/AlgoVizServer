(function (app, $) {
    app.init_localization = function(){
        // Ініціалізація мовних налаштувань
        $.when($.ajax( app.local_path + "localization.xml" )
            .done (function(xml){
                console.log("DATA", xml);
                $localization_main = $(xml).find("localization");
                app.dom_elements.title_block.html($localization_main.find("index").find("title_block").find(app.settings.default_lang).text());
                app.dom_elements.content_of_page.html($localization_main.find("index").find("content_of_page").find(app.settings.default_lang).text());
            })
            .fail(function(error) {
                var msg = "ERR :: \"localization.xml\" is not found!";
                app.criticalErrorHandler(msg);
                throw new Error(msg);
            })
        );
    };
})(window.app || {}, jQuery);