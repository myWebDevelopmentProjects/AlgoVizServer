(function (app, $) {
    app.init_localization = function(){
        // Ініціалізація мовних налаштувань
        $.when($.ajax("localization.xml" )
            .done (function(xml){
                console.log("DATA", xml);
                $localization_main = $(xml).find("localization");
                app.dom_elements.title_block.html($localization_main.find("index").find("title_block").text());
                app.dom_elements.content_of_page.html($localization_main.find("index").find("content_of_page").text());
            })
            .fail(function(error) {
                var msg = "ERR :: \"localization.xml\" is not found!";
                app.critical_error_handler(msg);
                throw new Error(msg);
            })
        );
    };
})(window.app || {}, jQuery);