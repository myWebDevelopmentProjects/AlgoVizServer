(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 758,
	height: 310,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.bst_element_02 = function() {
	this.initialize();

	// Layer 1
	this.value_txt = new cjs.Text("2", "14px 'Century Gothic'");
	this.value_txt.name = "value_txt";
	this.value_txt.textAlign = "center";
	this.value_txt.lineHeight = 16;
	this.value_txt.lineWidth = 21;
	this.value_txt.setTransform(10.7,1.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(204,204,204,0.098)"],[0,1],0,0,0,0,0,9).s().p("Ag8AhQgagOABgTQgBgSAagOQAZgOAjAAQAjAAAaAOQAaAOgBASQABATgaAOQgaAOgjAAQgjAAgZgOg");
	this.shape.setTransform(12.9,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4D4D4D").p("ACDAAQAAA3gmAmQgnAng2AAQg1AAgngnQgmgnAAg2QAAg1AmgnQAngmA1AAQA2AAAnAmQAmAnAAA1g");
	this.shape_1.setTransform(13.2,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#B3B3B3","#9D9D9D","#808080"],[0.043,0.29,0.631,1],0,0,0,0,0,13.6).s().p("AhcBdQgmgnAAg2QAAg1AmgnQAngnA1AAQA2AAAnAnQAmAnAAA1QAAA2gmAnQgnAng2AAQg1AAgngng");
	this.shape_2.setTransform(13.2,13.2);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.value_txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,28.4,28.4);


(lib.bst_element_01 = function() {
	this.initialize();

	// Layer 1
	this.value_txt = new cjs.Text("1", "14px 'Century Gothic'");
	this.value_txt.name = "value_txt";
	this.value_txt.textAlign = "center";
	this.value_txt.lineHeight = 16;
	this.value_txt.lineWidth = 21;
	this.value_txt.setTransform(10.7,1.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(204,204,204,0.098)"],[0,1],0,0,0,0,0,9).s().p("Ag8AhQgagOABgTQgBgSAagOQAZgOAjAAQAjAAAaAOQAaAOgBASQABATgaAOQgaAOgjAAQgjAAgZgOg");
	this.shape.setTransform(12.9,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4D4D4D").p("ACDAAQAAA3gmAmQgnAng2AAQg1AAgngnQgmgnAAg2QAAg1AmgnQAngmA1AAQA2AAAnAmQAmAnAAA1g");
	this.shape_1.setTransform(13.2,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#B3B3B3","#9D9D9D","#808080"],[0.043,0.29,0.631,1],0,0,0,0,0,13.6).s().p("AhcBdQgmgnAAg2QAAg1AmgnQAngnA1AAQA2AAAnAnQAmAnAAA1QAAA2gmAnQgnAng2AAQg1AAgngng");
	this.shape_2.setTransform(13.2,13.2);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.value_txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,28.4,28.4);


(lib.bst_element_00 = function() {
	this.initialize();

	// Layer 1
	this.value_txt = new cjs.Text("0", "14px 'Century Gothic'");
	this.value_txt.name = "value_txt";
	this.value_txt.textAlign = "center";
	this.value_txt.lineHeight = 16;
	this.value_txt.lineWidth = 21;
	this.value_txt.setTransform(10.7,1.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(204,204,204,0.098)"],[0,1],0,0,0,0,0,9).s().p("Ag8AhQgagOABgTQgBgSAagOQAZgOAjAAQAjAAAaAOQAaAOgBASQABATgaAOQgaAOgjAAQgjAAgZgOg");
	this.shape.setTransform(12.9,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4D4D4D").p("ACDAAQAAA3gmAmQgnAng2AAQg1AAgngnQgmgnAAg2QAAg1AmgnQAngmA1AAQA2AAAnAmQAmAnAAA1g");
	this.shape_1.setTransform(13.2,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#B3B3B3","#9D9D9D","#808080"],[0.043,0.29,0.631,1],0,0,0,0,0,13.6).s().p("AhcBdQgmgnAAg2QAAg1AmgnQAngnA1AAQA2AAAnAnQAmAnAAA1QAAA2gmAnQgnAng2AAQg1AAgngng");
	this.shape_2.setTransform(13.2,13.2);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.value_txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,28.4,28.4);


// stage content:
(lib.add_elements_by_increase_order = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// titile_icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383838").s().p("AhGg9ICNAAIhHB7g");
	this.shape.setTransform(15,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// title_txt
	this.text = new cjs.Text("ДЕРЕВО ДВІЙКОГОВО ПОШУКУ - BST", "bold 18px 'Century Gothic'", "#383838");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 691;
	this.text.setTransform(389.3,3.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(15));

	// title_bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").p("EA7OAAtQAABTAAACQgIAjgqAAMh0jAAAQgxAAgLgKQgKgLAAgxIAAipQAAg2AKgQQANgUAvAAMB0jAAAQAqAAAIAjQAAACAABTg");
	this.shape_1.setTransform(379,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D9E021","#8CC63F"],[0.012,1],0.1,-16.5,0.1,16.5).s().p("Eg6HACkQgxABgLgKQgJgLgBgyIAAioQABg2AJgPQAOgVAuAAMB0jAAAQArABAGAiIAABWIAABYIAABUQgGAkgrgBg");
	this.shape_2.setTransform(379,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_2},{t:this.shape_1}]},5).to({state:[{t:this.shape_2},{t:this.shape_1}]},5).wait(1));

	// elements_txt
	this.text_1 = new cjs.Text("Елементи", "12px 'Myriad Pro'");
	this.text_1.lineHeight = 14;
	this.text_1.setTransform(7.9,39.8);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(15));

	// elements
	this.elem_02 = new lib.bst_element_02();
	this.elem_02.setTransform(149.1,53,1,1,0,0,0,13.2,13.2);

	this.elem_01 = new lib.bst_element_01();
	this.elem_01.setTransform(117.1,53,1,1,0,0,0,13.2,13.2);

	this.elem_00 = new lib.bst_element_00();
	this.elem_00.setTransform(85.1,53,1,1,0,0,0,13.2,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.elem_00,p:{x:85.1,y:53}},{t:this.elem_01,p:{x:117.1,y:53}},{t:this.elem_02,p:{x:149.1,y:53}}]}).to({state:[{t:this.elem_00,p:{x:361,y:92}},{t:this.elem_01,p:{x:117.1,y:53}},{t:this.elem_02,p:{x:149.1,y:53}}]},4).to({state:[{t:this.elem_00,p:{x:361,y:92}},{t:this.elem_01,p:{x:311,y:131}},{t:this.elem_02,p:{x:149.1,y:53}}]},5).to({state:[{t:this.elem_00,p:{x:361,y:92}},{t:this.elem_01,p:{x:311,y:131}},{t:this.elem_02,p:{x:405,y:131}}]},5).wait(1));

	// bg
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").p("EA7OAWgQAABTAAACQgIAjgqAAMh0jAAAQgxAAgLgKQgKgLAAgxMAAAguPQAAg2AKgQQANgUAvAAMB0jAAAQAqAAAIAjQAAACAABTg");
	this.shape_3.setTransform(379,156);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("Eg6HAYXQgxABgLgKQgJgLgBgyMAAAguOQABg2AJgPQAOgVAuAAMB0jAAAQArABAGAiIAABWMAAAAs+IAABUQgGAkgrgBg");
	this.shape_4.setTransform(379,156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},4).to({state:[{t:this.shape_4},{t:this.shape_3}]},5).to({state:[{t:this.shape_4},{t:this.shape_3}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(376.9,154,761.1,314);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;