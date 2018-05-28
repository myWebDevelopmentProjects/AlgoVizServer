'use strict';
// Об'єкт Procedure - описує складові для кожної процедури
var Procedure = function (name, current, args) {
    this.name = name;
    this.current = current;
    this.args = args;
    this.instructions = [];
}
// Об'єкт Instruction - описує складові для кожної іструкції
function Instruction(code, commentText, commentAudio, functionDesc) {
    this.commentText = commentText;
    this.commentAudio = commentAudio;
    this.code = code;
    this.function = function () { eval(functionDesc); };
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
    app.procedures = [];
    // Поточна процедурв
    app.current_procedure = {
        name: "",
        instruction: 0
    };
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
                if (app.procedures[procedure].hasOwnProperty("current") && app.procedures[procedure].current === "true") {
                    var currentProcedre = app.procedures[procedure];
                    // Виведення назви початкової процедури
                    $(".js_procedure_name").html(currentProcedre.name + currentProcedre.args);
                    app.update_pseudocode_field(currentProcedre, 0);
                }
                procedureList += "<li><span>"+ app.procedures[procedure].name +"</span></li>";
            }
            procedureList += "</ul>";
            app.dom_element.procedures.html(procedureList);
            app.dom_element.procedures.find("li:nth-child(1)").addClass("current");
        },
        // Переведення процедури в активну, тобто поточна процедура буде виділятись зміною елементів інтерфейсу
        make_procedure_to_be_current: function(procedure){
            var self = this;
            var procedureList = "<ul>";
            for (var procedure in app.procedures) {
                if (app.procedures[procedure].hasOwnProperty("current") && app.procedures[procedure].current === "true") {
                    var currentProcedre = app.procedures[procedure];
                    // Виведення назви початкової процедури
                    $(".js_procedure_name").html(currentProcedre.name + currentProcedre.args);
                    app.update_pseudocode_field(currentProcedre, 0);
                    app.current_procedure.name = currentProcedre.name;
                }
                procedureList += "<li><span>"+ app.procedures[procedure].name +"</span></li>";
            }
            procedureList += "</ul>";
            app.dom_element.procedures.html(procedureList);
            app.dom_element.procedures.find("li:nth-child(1)").addClass("current");
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
                    var procedure = new Procedure(id, current, args);
                    // додавання нової процедури до алгоритму
                    app.procedures.push(procedure); 
                    //
                    var $instructions = $(this).find("instruction");
                    $instructions.each(function(){
                        var commentText = typeof $(this).find("comment-text") !== "undefined" ? $(this).find("comment-text").text() : "empty";
                        var commentAudio = typeof $(this).find("comment-audio").attr("url") !== "undefined" ? $(this).find("comment-audio").attr("url") : "empty";
                        var codePart = typeof $(this).find("code") ? $(this).find("code").text() : "empty";
                        var functionDesc = typeof $(this).find("code") ? $(this).find("function").text() : "empty";
                        app.procedures[app.procedures.length - 1].instructions.push(new Instruction(codePart, commentText, commentAudio, functionDesc));
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
    // Ініціалізація властивостей елементів керування процесом запуску алгоритму
    app.controls = {
        // Запуск ініціалізації подій для елементів панелі керування
        init: function() {
            var self = app,
                controls = app.controls;
            // Кнопка СТАРТ
            app.dom_elements.control_btn_start.on("click", function() {
                controls.make_btn_active(app.dom_elements.control_btn_start);
                controls.control_btn_start();
            });
            // Кнопка НАЗАД
            app.dom_elements.control_btn_back.on("click", function() {
                controls.make_btn_active(app.dom_elements.control_btn_back);
                controls.control_btn_back();
            });
            // Кнопка ПАУЗА
            app.dom_elements.control_btn_pause.on("click", function() {
                controls.make_btn_active(app.dom_elements.control_btn_pause);
                controls.control_btn_pause();
            });
            // Кнопка ВПЕРЕД
            app.dom_elements.control_btn_forward.on("click", function() {
                controls.make_btn_active(app.dom_elements.control_btn_forward);
                controls.control_btn_forward();
            });
            // Кнопка СТОП
            app.dom_elements.control_btn_stop.on("click", function() {
                controls.make_btn_active(app.dom_elements.control_btn_stop);
                controls.control_btn_stop();
            });
        },
        make_btn_active: function(btn){
            $("view_row control_btn").each(function(){
                $(this).removeClass("active");
            });
            btn.addClass("active");
        },
        control_btn_start: function() {// Кнопка СТАРТ
            var self = this;
                $("bst-structure root-bst").css({
                "animation": "root_to_left_node_1_1 2s ease-in-out 0s forwards",
            });
        },
        control_btn_back: function() {// Кнопка НАЗАД

        },
        control_btn_pause: function() {// Кнопка ПАУЗА

        },
        control_btn_forward: function() {// Кнопка ВПЕРЕД

        },
        control_btn_stop: function() {}

    };
})(window.app || {}, jQuery);