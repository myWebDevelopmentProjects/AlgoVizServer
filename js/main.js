(function (app, $) {
    // Функція для оновлення аудіофайлу коментарів
    app.updateAudio = function(sourceUrl) {
        var self = this;
        //
        self.dom_element.audio.empty();
        var $source = $("<source/>")
        $source.attr("src", sourceUrl).appendTo(self.dom_element.audio);
    };

    // елементи для послідовного доавання в структкру дерева
    app.arrItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18, 19, 20];

})(window.app || {}, jQuery);

