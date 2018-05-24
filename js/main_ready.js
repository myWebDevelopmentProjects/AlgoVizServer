//
$(document).ready(function () {
    // Ініціалізація мовних налаштувань
    $.when($.ajax( "../../localization.xml" )
            .done (function(data){
            console.log("DATA", data);
        })
            .fail (function() {
            var msg = "ERR :: localization.xml is not found!" + error;
            app.criticalErrorHandler(msg);
            throw new Error(msg);
        })
    );
});
