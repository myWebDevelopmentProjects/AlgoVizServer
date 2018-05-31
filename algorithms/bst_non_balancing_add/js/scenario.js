'use strict';
// Об'єкт Procedure - описує складові для кожної процедури
var Procedure = function (name, current, args) {
    return {
        current: current,
        args: args,
        instructions: []
    }
}
// Об'єкт Instruction - описує складові для кожної іструкції
function Instruction(code, commentText, commentAudio, functionDesc) {
    this.commentText = commentText;
    this.commentAudio = commentAudio;
    this.code = code;
    this.function_instruction = functionDesc !== "empty" ? function () { eval(functionDesc); } : "empty";
}
// Об'єкт Node - описує вузол двійкового дерева
function Node (value) {
    this.value = value;
    this.leftBranch = null;
    this.rightBranch = null;
}

// Опис властивостей та методів об'єкту застсоунка, що буде розбирати
// опис анімації, який задано в файлі schema.xml
(function (app, $) {
    // Всі процедури, які будуть застосовуватись для анімації на сторінці
    app.procedures = {};

    // Оновлення поля псевдокоду під час преходу між інструкціями
    app.update_pseudocode_field = function (procedure, instruction_num) {
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
        self.dom_element.pseudoCode.html(code);
        // Виведення першого коментаря стосовно початкової процедури алгоритму
        self.dom_element.textComment.html(procedure.instructions[instruction_num].commentText);
        // Виведення першого аудио коментаря стосовно початкової процедури алгоритму
        console.log(procedure.instructions[instruction_num].commentAudio);
        self.updateAudio(procedure.instructions[instruction_num].commentAudio);
        // self.dom_element.audioComment.attr("src", procedure.instructions[0].commentAudio);
    };
    // Ініціалізація створення списку процедур та вкладених в них інструкцій при завантаженні сторінки
    app.init = {
        start: function () {
            var self = app;
            // Ініціалізація процедур застосунка
            $.when($.ajax("schema.xml" )
                .done (function(xml){
                   //
                    var $procedure = $(xml).find("schema").find("procedure");
                    //
                    if ($procedure.length > 0) {
                        self.init.parse_procedures($procedure);
                    } else {
                        self.error_handlers.critical_error_handler(app.alorithm_page_localization.find("no_procedures_found").text());
                    }
                    //
                })
                .fail(function(error) {
                    var msg = "ERR :: schema.xml is not found!";
                    app.error_handlers.critical_error_handler(msg);
                    throw new Error(msg);
                })
            );
        },
        // Переведення всіх процедур до об'єкту app.procedures
        init_procedure_to_be_displayed: function () {
            var self = this;
            var procedureList = "<ul>";
            for (var procedure in app.procedures) {
                var currentProcedre = app.procedures[procedure];
                if (app.procedures[procedure].hasOwnProperty("current") && app.procedures[procedure].current === "true") {
                    // Виведення назви початкової процедури
                    $(".js_procedure_name").html(procedure + currentProcedre.args);
                    app.animation.current_procedure.name = procedure;
                    app.update_pseudocode_field(currentProcedre, 0);
                    procedureList += "<li class=\"current\"><span>"+ procedure +"</span></li>";
                } else {
                    procedureList += "<li><span>"+ procedure +"</span></li>";
                }
                procedureList += "</span></li>";
            }
            procedureList += "</ul>";
            app.dom_element.procedures.html(procedureList);
        },
        // Розбір кожної окремої процедури під час обробки файлу schema.xml,
        // в якій зберігається опис візуалізації алгоритму
        parse_procedures: function ($procedure) {
            var self = this;
            $procedure.each(function () {
                try {
                    //
                    var id = typeof $(this).attr("id") !== "undefined" ? $(this).attr("id") : "empty";
                    var current = typeof $(this).attr("current") !== "undefined" ? $(this).attr("current") : "empty";
                    var args = typeof $(this).attr("args") !== "undefined" ? $(this).attr("args") : "empty";
                    // додавання нової процедури до алгоритму
                    app.procedures[id] = new Procedure(id, current, args);
                    //
                    var $instructions = $(this).find("instruction");
                    $instructions.each(function(){
                        var commentText = typeof $(this).find("comment-text") !== "undefined" ? $(this).find("comment-text").text() : "empty";
                        var commentAudio = typeof $(this).find("comment-audio").attr("url") !== "undefined" ? $(this).find("comment-audio").attr("url") : "empty";
                        var codePart = typeof $(this).find("code") ? $(this).find("code").text() : "empty";
                        var functionDesc = typeof $(this).find("code") ? $(this).find("function-instruction").text() : "empty";
                        app.procedures[id].instructions.push(new Instruction(codePart, commentText, commentAudio, functionDesc));
                    });
                } catch (error) {
                    app.error_handlers.error_handler_regular("ERR :: " + error);
                    throw new Error("ERR :: " + error);
                }
            });
            // після завершення проходу по струтутрах процедур перехід до відображення початкової
            // процедури алгоритму
            self.init_procedure_to_be_displayed();
        }
    };
})(window.app || {}, jQuery);