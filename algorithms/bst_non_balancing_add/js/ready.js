//
$(document).ready(function () {
    // Ініціалізація мовних налаштувань
    app.init_localization();
    //
    app.init.start();
    // ініціалізація подій для елементів сторінки
    $("back_btn").on("click", function () {
        window.location.assign("/AlgoVizServer/");
    });
    //
    $("control_btn.start").on("click", function(){
        app.start();
    });
});