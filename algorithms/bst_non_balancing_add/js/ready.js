//
$(document).ready(function () {
    // ����������� ������ �����������
    var url_localization_file = "../../localization.xml";
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
    //
    app.init.start();
    // ����������� ���� ��� �������� �������
    $("back-btn").on("click", function () {
        window.location.assign("/AlgoVizServer");
    });
    //
    $("control-btn.start").on("click", function(){
        app.start();
    });
});