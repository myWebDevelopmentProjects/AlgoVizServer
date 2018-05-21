(function () {
    if (!window.app) {
        window.app = {};
    }
})();

(function () {
    window.app = {
        init: function () {
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
                    var $procedure = $(xml).find("schema").find("procedures");
                    if ($procedure.length > 0) {
                        self.parseProcedures($procedure);
                    }
                    console.log($(xml).find("schema").find("procedure").length);
                },
                error: function (response) {
                    throw new Error("ERR :: no file found!");
                }
            });
        },
        procedures: [],
        parseProcedures: function ($procedure) {
            var self = this;
            var i = 0,
                    max = $procedure.length;
            while (i < max) {
                console.log($procedure[i].attributes);
                try {
                    var procedure = {
                        name: $procedure[i].attributes.id.nodeValue,
                        arguments: $procedure[i].attributes.arguments.nodeValue,
                        instructions: []
                    };
                    var j = 0,
                            instructions = $procedure[i].instruction.length;
                    while (typeof $procedure[i].instruction[j] !== "undefined") {
                        procedure.instructions.push($procedure[i].instruction[j].code);
                        j++;
                    }
                    app.procedures.push(procedure);
                } catch (error) {
                    throw new Error("ERR :: " + error)
                }
                i++;
            }
            console.log(app.procedures);
        }
    };
})();

//
$(document).ready(function () {
    app.init();
});


