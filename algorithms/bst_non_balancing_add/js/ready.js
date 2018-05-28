//
$(document).ready(function () {
    // Ініціалізація мовних налаштувань
    app.init_localization();
    // Початок розбору сценарію
    app.init.start();
    // Активація елементів керування анімацією алгоритмів
    app.controls.init();
    // Ініціалізація подій для елементів сторінки
    $("back_btn").on("click", function () {
        window.location.assign("/AlgoVizServer/");
    });
    //
});