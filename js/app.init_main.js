(function (app, $) {
    // Ою'єкт, де бдуть зберігатись всі мовні налаштування
    app.localization_main = {};
    // Ыныцыалызацыя мовних налаштувань загальних для всых шаблоныв
    app.init_main = function(){
        // Ініціалізація мовних налаштувань
        $.when($.ajax("../../localization_main.xml")
            .done (function(xml){
                console.log("DATA", xml);
                app.localization_main = $(xml).find("localization-main");
                app.dom_element.copy_block.html($(xml).find("copy_block").text());
                // Якщо початково список елементів для додавання у структуру порожній
                if ( app.arrItems.length > 0 ) {
                    // викликається створення візуадьного списку елементів
                    app.makeListOfItems();
                } else {
                    // інакше запускається процедура введення значень елементів користувачем
                    app.customInputListOfItems();
                }
            })
            .fail(function(error) {
                var msg = "ERR :: \"localization_main.xml\" is not found!";
                app.error_handlers.critical_error_handler(msg);
                throw new Error(msg);
            })
        );
    };

    // Створення візуадьного списку елементів
    app.makeListOfItems = function() {
        console.log(app.arrItems);

    }

    // Процедура введення значень елементів користувачем
    app.customInputListOfItems = function() {

    }

})(window.app || {}, jQuery);