'use strict';

var Procedure = function (name, current, args) {
    this.name = name;
    this.current = current;
    this.args = args;
    this.instructions = [];
}

function Instruction(code, commentText, commentAudio) {
    this.commentText = commentText;
    this.commentAudio = commentAudio;
    this.code = code;
}

(function (app, $) {
    //
    app.procedures = [];
    // Поточна процедурв
    app.currentProcedure = {
        name: "",
        instruction: 0
    };
    //
    app.updatePseudocodeField = function (procedure) {
        var self = this;
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
        // 
        self.element.pseudoCode.html(code);
        // Виведення першого коментаря стосовно початкової процедури алгоритму
        self.element.textComment.html(procedure.instructions[0].commentText);
        // Виведення першого аудио коментаря стосовно початкової процедури алгоритму
        console.log(procedure.instructions[0].commentAudio);
        self.updateAudio(procedure.instructions[0].commentAudio);
        // self.element.audioComment.attr("src", procedure.instructions[0].commentAudio);
    };
    //
    app.start = function(){
        var self = this;
       console.log(this.procedures);
    }
    //
    app.init = {
        start: function () {
            var self = this;
            //
            console.log("init app decrease");
            //
            $.ajax({
                type: "GET",
                url: "schema.xml",
                dataType: "xml",
                success: function (xml) {
                    //
                    var $page_title = $(xml).find("schema").find("main-settings").find("page-title");
                    var $procedure = $(xml).find("schema").find("procedure");
                    //
                    self.parsePageTitle($page_title);
                    //
                    if ($procedure.length > 0) {
                        self.parseProcedures($procedure);
                    } else {
                        app.criticalErrorHandler("Нема процедур!");
                    }
                    //
                },
                error: function (response) {
                    var msg = "ERR :: schema.xml is not found!";
                    app.criticalErrorHandler(msg);
                    throw new Error(msg);
                }
            });
        },
        parsePageTitle: function($page_title){
            console.log("title", $page_title.length);
            if ($page_title.length === 0) {
                console.log("не знайдено заголовку сторінки!");
                app.criticalErrorHandler("не знайдено заголовку сторынки! ");
                return false;
            }
            console.log("title", $page_title.text());
            return false;
        },
        initProcedureDisplay: function () {
            var self = this;
            var procedureList = "<ul>";
            for (var procedure in app.procedures) {
                if (app.procedures[procedure].hasOwnProperty("current") && app.procedures[procedure].current === "true") {
                    var currentProcedre = app.procedures[procedure];
                    // Виведення назви початкової процедури
                    $(".js_procedure_name").html(currentProcedre.name + currentProcedre.args);
                    app.updatePseudocodeField(currentProcedre);
                }
                procedureList += "<li><span>"+ app.procedures[procedure].name +"</span></li>";
            }
            procedureList += "</ul>";
            app.element.procedures.html(procedureList);
            app.element.procedures.find("li:nth-child(1)").addClass("current");
        },
        makeProcedureCurrent: function(procedure){
            var self = this;
            var procedureList = "<ul>";
            for (var procedure in app.procedures) {
                if (app.procedures[procedure].hasOwnProperty("current") && app.procedures[procedure].current === "true") {
                    var currentProcedre = app.procedures[procedure];
                    // Виведення назви початкової процедури
                    $(".js_procedure_name").html(currentProcedre.name + currentProcedre.args);
                    app.updatePseudocodeField(currentProcedre);
                }
                procedureList += "<li><span>"+ app.procedures[procedure].name +"</span></li>";
            }
            procedureList += "</ul>";
            app.element.procedures.html(procedureList);
            app.element.procedures.find("li:nth-child(1)").addClass("current");
        },
        parseProcedures: function ($procedure) {
            var self = this;
            $procedure.each(function () {
                try {
                    //
                    var id = typeof $(this).attr("id") !== "undefined" ? $(this).attr("id") : "empty";
                    var current = typeof $(this).attr("current") !== "undefined" ? $(this).attr("current") : "empty";
                    var args = typeof $(this).attr("args") !== "undefined" ? $(this).attr("args") : "empty";
                    var procedure = new Procedure(id, current, args);
                    // додавання нової процедури до алгоритму
                    app.procedures.push(procedure); 
                    //
                    var $instructions = $(this).find("instruction");
                    $instructions.each(function(){
                        var commentText = typeof $(this).find("comment-text") !== "undefined" ? $(this).find("comment-text").text() : "empty";
                        var commentAudio = typeof $(this).find("comment-audio").attr("url") !== "undefined" ? $(this).find("comment-audio").attr("url") : "empty";
                        var codePart = typeof $(this).find("code") ? $(this).find("code").text() : "empty";
                        app.procedures[app.procedures.length - 1].instructions.push(new Instruction(codePart, commentText, commentAudio));
                    });
                } catch (error) {
                    app.errorHandler("ERR :: " + error);
                    throw new Error("ERR :: " + error);
                }
            });
            // після завершення проходу по тсрутутрах процедур перехід до відображення початкової 
            // процедури алгоритму
            self.initProcedureDisplay();
        }
    };
})(window.app || {}, jQuery);