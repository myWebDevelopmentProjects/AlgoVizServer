(function(){
    if (!window.app) {
        window.app = {};
    }
})();

(function(app){
    app.init = function(){
        console.log("init app");
        $("button").on("click", function(){
            console.log("i'm in");
            window.location.assign("?animation=bst_local", "_self");
        });
        
        $("button.js_index_link").on("click", function(){
            window.location.assign("/AlgoVizServer/", "_self");
        });
    };
    
})(window.app || {});

//
$(document).ready(function() {
    app.init();
});


