(function(){
    if (!window.app) {
        window.app = {};
    }
})();

(function(){
    window.app = {
        init: function(){
            console.log("init app decrease");
            $.ajax({
                type: "GET",
                url: "schema.xml",
                dataType: "xml",
                success: function (xml) { 
                    console.log($(xml).find("schema").find("structure").find("type").text());
                },
                error: function(response){
                    throw new Error("ERR :: no file found!"); 
                }
            });
        }
    };
})();

//
$(document).ready(function() {
    app.init();
});


