(function (app, $) {
    app.init_localization = function(){
        // Ініціалізація мовних налаштувань
        $.when($.ajax("localization.xml")
            .done (function(xml){
                console.log("DATA", xml);
                $localization_main = $(xml).find("localization");
                //
                app.dom_elements.view_header_title_block_span.html($localization_main.find("index").find("view_header_title_block_span").text());
                app.dom_elements.back_btn_span.html($localization_main.find("index").find("back_btn_span").text());
                app.dom_elements.data_structure_title.html($localization_main.find("index").find("data_structure_title").text());
                app.dom_elements.comments_block_title.html($localization_main.find("index").find("comments_block_title").text());
                app.dom_elements.data_pseudocode_title.html($localization_main.find("index").find("data_pseudocode_title").text());
                app.dom_elements.procedures_block_title.html($localization_main.find("index").find("procedures_block_title").text());
                app.dom_elements.help_btn_title.html($localization_main.find("index").find("help_btn_title").text());
                app.dom_elements.control_btn_start_title.html($localization_main.find("index").find("control_btn_start_title").text());
                app.dom_elements.control_btn_back_title.html($localization_main.find("index").find("control_btn_back_title").text());
                app.dom_elements.control_btn_pause_title.html($localization_main.find("index").find("control_btn_pause_title").text());
                app.dom_elements.control_btn_forward_title.html($localization_main.find("index").find("control_btn_forward_title").text());
                app.dom_elements.control_btn_stop_title.html($localization_main.find("index").find("control_btn_stop_title").text());
            })
            .fail(function(error) {
                var msg = "ERR :: \"localization.xml\" is not found!";
                app.critical_error_handler(msg);
                throw new Error(msg);
            })
        );
    };
})(window.app || {}, jQuery);