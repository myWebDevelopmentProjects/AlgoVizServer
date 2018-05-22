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
        code += "<li>" + procedure.instructions[0].code + "</li";
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
                        app.errorHandler("Нема процедур!");
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
            var i = 0;
            var max = $procedure.length;
            while (i < max) {
                console.log($procedure[i].attributes);
                try {
                    //
                    var id = typeof $procedure[i].attributes.id !== "undefined" ?
                            $procedure[i].attributes.id.nodeValue : "empty";
                    var init = typeof $procedure[i].attributes.init !== "undefined" ?
                            $procedure[i].attributes.init.nodeValue : "empty";
                    var args = typeof $procedure[i].attributes.args !== "undefined" ?
                            $procedure[i].attributes.args.nodeValue : "empty";
                    var procedure = new Procedure(id, init, args);
                    //
                    var j = 0;
                    var $instructions = $procedure[i].getElementsByTagName("instruction");
                    console.log("find", $procedure[i].find("instruction"));
                    var maxElems = $instructions.length;
                    while (j < maxElems) {
                        var commentText =
                                typeof $instructions[j].getElementsByTagName("comment-text")[0] !== "undefined" ?
                                $instructions[j].getElementsByTagName("comment-text")[0].innerHTML : "empty";
                        var commentSound =
                                typeof $instructions[j].getElementsByTagName("comment-sound")[0] !== "undefined" ?
                                $instructions[j].getElementsByTagName("comment-sound")[0].innerHTML : "empty";
                        var codePart =
                                typeof $instructions[j].getElementsByTagName("code")[0] ?
                                $instructions[j].getElementsByTagName("code")[0].innerHTML : "empty";
                        procedure.instructions.push(new Instruction(codePart, commentText, commentSound));
                        j++;
                    }
                    app.procedures.push(procedure);
                } catch (error) {
                    app.errorHandler("ERR :: " + error);
                    throw new Error("ERR :: " + error)
                }
                i++;
            }
            this.initProcedureDisplay();
        }
    };
})(window.app || {}, jQuery);

//
$(document).ready(function () {
    app.init.start();
});


