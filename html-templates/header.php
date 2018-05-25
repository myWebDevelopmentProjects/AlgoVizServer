<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>AlgoVizServer</title>
        <link rel="icon" type="image/x_icon" href="/AlgoVizServer/favicon.ico">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="/AlgoVizServer/css/main.css" >
        <script src="/AlgoVizServer/js/jquery/jquery-3.3.1.min.js"></script>
        <script src="/AlgoVizServer/js/jquery/jquery-ui.min.js"></script>
        <script src="/AlgoVizServer/js/app.js" defer></script>
        <script defer>
            (function (app, $) {
                //
                app.global_path = "<?php echo $_SERVER['SERVER_NAME'] . "/AlgoVizServer/"; ?>";
                //
                app.local_path = "<?php echo $_SERVER['REQUEST_URI']; ?>";
            })(window.app || {}, jQuery);
        </script>
        <script src="/AlgoVizServer/js/structure/element.js" defer></script>
        <script src="/AlgoVizServer/js/settings.js" defer></script>
        <script src="/AlgoVizServer/js/main.js" defer></script>

        <script src="/AlgoVizServer/js/main_ready.js" defer></script>
    </head>
    <body>
        <modal_window>
            <screen_error class="_config">
                <error_title class="title"><error_title_icon></error_title_icon><span>ПОМИЛКА!</span></error_title>
                <error-msg class="js-error-msg">DEFAULT</error-msg>
                <btn_close_modal><btn_close_icon></btn_close_icon><span>ЗАКРИТИ</span></btn_close_modal>
            </screen_error>
        </modal_window>