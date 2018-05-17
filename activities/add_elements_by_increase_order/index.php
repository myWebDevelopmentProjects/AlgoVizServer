<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>add_elements_by_increase_order</title>

<script src="../../js/createjs/easeljs-0.7.1.min.js"></script>
<script src="../../js/createjs/tweenjs-0.5.1.min.js"></script>
<script src="../../js/createjs/movieclip-0.7.1.min.js"></script>
<script src="js/add_elements_by_increase_order.js"></script>

<script>
var canvas, stage, exportRoot;

function init() {
	canvas = document.getElementById("canvas");
	exportRoot = new lib.add_elements_by_increase_order();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}
</script>
</head>

<body onload="init();" style="background-color:#D4D4D4">
    <button>Основний розділ</button>
	<canvas id="canvas" width="758" height="310" style="background-color:#FFFFFF"></canvas>
</body>
</html>
