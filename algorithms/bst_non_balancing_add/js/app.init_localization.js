(function (app, $) {
    // Зберігання локальних мовних налаштувань
    app.alorithm_page_localization = {};
    
    app.init_localization = function(){
        // Ініціалізація мовних налаштувань
        $.when($.ajax("localization.xml")
            .done (function(xml){
                console.log("DATA", xml);
                app.alorithm_page_localization = $(xml).find("localization");
                //
                app.dom_elements.view_header_title_block_span.html(app.alorithm_page_localization.find("index").find("view_header_title_block_span").text());
                app.dom_elements.back_btn_span.html(app.alorithm_page_localization.find("index").find("back_btn_span").text());
                app.dom_elements.data_structure_title.html(app.alorithm_page_localization.find("index").find("data_structure_title").text());
                app.dom_elements.comments_block_title.html(app.alorithm_page_localization.find("index").find("comments_block_title").text());
                app.dom_elements.data_pseudocode_title.html(app.alorithm_page_localization.find("index").find("data_pseudocode_title").text());
                app.dom_elements.procedures_block_title.html(app.alorithm_page_localization.find("index").find("procedures_block_title").text());
                app.dom_elements.help_btn_title.html(app.alorithm_page_localization.find("index").find("help_btn_title").text());
                app.dom_elements.control_btn_start_title.html(app.alorithm_page_localization.find("index").find("control_btn_start_title").text());
                app.dom_elements.control_btn_back_title.html(app.alorithm_page_localization.find("index").find("control_btn_back_title").text());
                app.dom_elements.control_btn_pause_title.html(app.alorithm_page_localization.find("index").find("control_btn_pause_title").text());
                app.dom_elements.control_btn_forward_title.html(app.alorithm_page_localization.find("index").find("control_btn_forward_title").text());
                app.dom_elements.control_btn_stop_title.html(app.alorithm_page_localization.find("index").find("control_btn_stop_title").text());
            })
            .fail(function(error) {
                var msg = "ERR :: \"localization.xml\" is not found!";
                app.error_handlers.critical_error_handler(msg);
                throw new Error(msg);
            })
        );
    };
})(window.app || {}, jQuery);