var context = [
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0]
];
var Square = function () {
	this.data = [
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	];
	this.dir = 0;
	this.posX = 0;
	this.posY =0;
}
Square.prototype.rotate = function (num = 1) {
	this.dir = (this.dir + num) % 4;
	for(var i=0;i<this.data.length;i++){
		for(var j=0;j<this.data[0].length;j++){
			this.data[i][j] = this.rotates[this.dir][i][j]
		}
	}
}
var Square1 = function () {
	Square.call(this)
	this.rotates = [
		[
			[0,0,0,0],
			[1,1,1,1],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[0,1,0,0],
			[0,1,0,0],
			[0,1,0,0],
			[0,1,0,0]
		],
		[
			[0,0,0,0],
			[1,1,1,1],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[0,1,0,0],
			[0,1,0,0],
			[0,1,0,0],
			[0,1,0,0]
		]
	]
}
Square1.prototype = Square.prototype
var Square2 = function () {
	Square.call(this)
	this.rotates = [
		[
			[0,1,0,0],
			[1,1,1,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[1,0,0,0],
			[1,1,0,0],
			[1,0,0,0],
			[0,0,0,0]
		],
		[
			[1,1,1,0],
			[0,1,0,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[0,1,0,0],
			[1,1,0,0],
			[0,1,0,0],
			[0,0,0,0]
		]
	]
}
Square2.prototype = Square.prototype
var Square3 = function () {
	Square.call(this)
	this.rotates = [
		[
			[1,0,0,0],
			[1,1,1,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[1,1,0,0],
			[1,0,0,0],
			[1,0,0,0],
			[0,0,0,0]
		],
		[
			[1,1,1,0],
			[0,0,1,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[0,1,0,0],
			[0,1,0,0],
			[1,1,0,0],
			[0,0,0,0]
		]
	]
}
Square3.prototype = Square.prototype
var Square4 = function () {
	Square.call(this)
	this.rotates = [
		[
			[0,0,1,0],
			[1,1,1,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[1,0,0,0],
			[1,0,0,0],
			[1,1,0,0],
			[0,0,0,0]
		],
		[
			[1,1,1,0],
			[1,0,0,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[1,1,0,0],
			[0,1,0,0],
			[0,1,0,0],
			[0,0,0,0]
		]
	]
}
Square4.prototype = Square.prototype
var Square5 = function () {
	Square.call(this)
	this.rotates = [
		[
			[1,0,0,0],
			[1,1,0,0],
			[0,1,0,0],
			[0,0,0,0]
		],
		[
			[0,1,1,0],
			[1,1,0,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[1,0,0,0],
			[1,1,0,0],
			[0,1,0,0],
			[0,0,0,0]
		],
		[
			[0,1,1,0],
			[1,1,0,0],
			[0,0,0,0],
			[0,0,0,0]
		]
	]

}
Square5.prototype = Square.prototype
var Square6 = function () {
	Square.call(this)
	this.rotates = [
		[
			[0,1,0,0],
			[1,1,0,0],
			[1,0,0,0],
			[0,0,0,0]
		],
		[
			[1,1,0,0],
			[0,1,1,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[0,1,0,0],
			[1,1,0,0],
			[1,0,0,0],
			[0,0,0,0]
		],
		[
			[1,1,0,0],
			[0,1,1,0],
			[0,0,0,0],
			[0,0,0,0]
		]
	]

}
Square6.prototype = Square.prototype
var Square7 = function () {
	Square.call(this)
	this.rotates = [
		[
			[1,1,0,0],
			[1,1,0,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[1,1,0,0],
			[1,1,0,0],
			[0,0,0,0],
			[0,0,0,0]
		],[
			[1,1,0,0],
			[1,1,0,0],
			[0,0,0,0],
			[0,0,0,0]
		],[
			[1,1,0,0],
			[1,1,0,0],
			[0,0,0,0],
			[0,0,0,0]
		]
	]

}
Square7.prototype = Square.prototype

var SquareFactory = function () {
	var index = Math.round(Math.random()*6+1);
	var num = Math.round(Math.random()*3);
	switch (index) {
		case 1:
			var s = new Square1();
			break;
		case 2:
			var s = new Square2();
			break;
		case 3:
			var s = new Square3();
			break;
		case 4:
			var s = new Square4();
			break;
		case 5:
			var s = new Square5();
			break;
		case 6:
			var s = new Square6();
			break;
		case 7:
			var s = new Square7();
			break;
	}
	s.rotate(num)
	return s
}

var nextItem = SquareFactory();
var curItem = SquareFactory();
