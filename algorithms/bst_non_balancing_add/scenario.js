//

var Procedure = function (name, init, args) {
    this.name = name;
    this.init = init;
    this.args = args;
    this.instructions = [];
}

function Instruction(code, commentText, commentSound) {
    this.commentText = commentText;
    this.commentSound = commentSound;
    this.code = code;
}

(function (app, $) {
    //
    app.procedures = [];
    //
    app.updatePseudocodeField = function (procedure) {
        var code = "<ol>";
        console.log(procedure);
        // Виведення всіх рядків псевдокоду даної процедури
        var i = 0, max = procedure.instructions.length;
        while(i < max) {
            code += "<li>" + procedure.instructions[i].code + "</li>";
            i++;
        }
        code += "</ol>";
        console.log(code);
        $("data-pseudocode active-field").html(code);

    }
    //
    window.app.init = {
        start: function () {
            var self = this;
            console.log("init app decrease");

            $("back-btn").on("click", function () {
                window.location.assign("/AlgoVizServer");
            });

            $.ajax({
                type: "GET",
                url: "schema.xml",
                dataType: "xml",
                success: function (xml) {
                    console.log($(xml).find("schema").find("structure").find("type").text());
                    var $procedure = $(xml).find("schema").find("procedure");
                    if ($procedure.length > 0) {
                        self.parseProcedures($procedure);
                        app.errorHandler("є процедур!");
                    } else {
                        app.errorHandler("Нема процедур!");
                    }

                },
                error: function (response) {
                    throw new Error("ERR :: no file found!");
                }
            });
        },
        initProcedureDisplay: function () {
            self = this;
            for (procedure in app.procedures) {
                if (app.procedures[procedure].hasOwnProperty("init") && app.procedures[procedure].init === "true") {
                    var currentProcedre = app.procedures[procedure];
                    // Виведення назви початкової процедури
                    $(".js_procedure_name").html(currentProcedre.name + currentProcedre.args);
                    app.updatePseudocodeField(currentProcedre);
                }
            }
        },
        parseProcedures: function ($procedure) {
            var self = this;
            $procedure.each(function () {
                try {
                    //
                    var id = typeof $(this).attr("id") !== "undefined" ? $(this).attr("id") : "empty";
                    var init = typeof $(this).attr("init") !== "undefined" ? $(this).attr("init") : "empty";
                    var args = typeof $(this).attr("args") !== "undefined" ? $(this).attr("args") : "empty";
                    var procedure = new Procedure(id, init, args);
                    // додавання нової процедури до алгоритму
                    app.procedures.push(procedure); 
                    //
                    var $instructions = $(this).find("instruction");
                    $instructions.each(function(){
                        var commentText = typeof $(this).find("comment-text") !== "undefined" ? $(this).find("comment-text").text() : "empty";
                        var commentSound = typeof $(this).find("comment-sound") !== "undefined" ? $(this).find("comment-sound").text() : "empty";
                        var codePart = typeof $(this).find("code") ? $(this).find("code").text() : "empty";
                        app.procedures[app.procedures.length - 1].instructions.push(new Instruction(codePart, commentText, commentSound));
                    });
                } catch (error) {
                    app.errorHandler("ERR :: " + error);
                    throw new Error("ERR :: " + error);
                }
            });
            // після завершення проходу по тсрутутрах процедур перехід до відображення початкової 
            // процедури алгоритму
            this.initProcedureDisplay();
        }
    };
})(window.app || {}, jQuery);

//
$(document).ready(function () {
    app.init.start();
});


