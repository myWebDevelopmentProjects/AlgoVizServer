'use strict';
// Об'єкт Procedure - описує складові для кожної процедури
var Procedure = function (name, current, args) {
    this.name = name;
    this.current = current;
    this.args = args;
    this.instructions = [];
}
// Об'єкт Instruction - описує складові для кожної іструкції
function Instruction(code, commentText, commentAudio) {
    this.commentText = commentText;
    this.commentAudio = commentAudio;
    this.code = code;
}

(function (app, $) {
    // Всі процедури, які будуть застосовуватись для анімації на сторінці
    app.procedures = [];
    // Поточна процедурв
    app.currentProcedure = {
        name: "",
        instruction: 0
    };
    // Оновлення поля псевдокоду під час преходу між інструкціями
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
        // Виведення HTML-представлення псевдокоду
        self.element.pseudoCode.html(code);
        // Виведення першого коментаря стосовно початкової процедури алгоритму
        self.element.textComment.html(procedure.instructions[0].commentText);
        // Виведення першого аудио коментаря стосовно початкової процедури алгоритму
        console.log(procedure.instructions[0].commentAudio);
        self.updateAudio(procedure.instructions[0].commentAudio);
        // self.element.audioComment.attr("src", procedure.instructions[0].commentAudio);
    };
    // Запуск анімації після завантаження елементів сторінки
    app.start = function(){
        var self = this;
       console.log(this.procedures);
        $("bst-structure root-bst").css({
            "animation": "root_to_left_node_1_1 2s ease-in-out 0s forwards",
        });
    }
    // Ініціалізація створення списку процедур та вкладених в них інструкцій при завантаженні сторінки
    app.init = {
        start: function () {
            var self = this;
            // Ініціалізація процедур застосунка
            $.when($.ajax("schema.xml" )
                .done (function(xml){
                   //
                    var $procedure = $(xml).find("schema").find("procedure");
                    //
                    if ($procedure.length > 0) {
                        self.parseProcedures($procedure);
                    } else {
                        app.critical_error_handler("Нема процедур!");
                    }
                    //
                })
                .fail(function(error) {
                    var msg = "ERR :: schema.xml is not found!";
                    app.critical_error_handler(msg);
                    throw new Error(msg);
                })
            );
        },
        // Переведення всіх процедур до об'єкту app.procedures
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
        // Переведення процедури в активну, тобто поточна процедура буде виділятись зміною елементів інтерфейсу
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
        // Розбір кожної окремої процедури під час обробки файлу schema.xml,
        // в якій зберігається опис візуалізації алгоритму
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
            // після завершення проходу по струтутрах процедур перехід до відображення початкової
            // процедури алгоритму
            self.initProcedureDisplay();
        }
    };
})(window.app || {}, jQuery);