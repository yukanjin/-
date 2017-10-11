var Square = function () {
	this.data = [
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	];
	this.dir = 0;
}
Square.prototype.rotate = function (num = 1) {
	this.dir = this.dir + num;
	if(this.dir == 4){
		this.dir = 0
	}
	for(var i=0;i<this.data.length;i++){
		for(var j=0;j<this.data[0].length;j++){
			this.data[i][j] = this.rotates[this.dir][i][j]
		}
	}
}
var Square1 = function () {
	square.call(this)
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
	square1.prototype = square.prototype
}
var Square1 = function () {
	square.call(this)
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
	square1.prototype = square.prototype
}
var Square2 = function () {
	square.call(this)
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
	square2.prototype = square.prototype
}
var Square3 = function () {
	square.call(this)
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
	square3.prototype = square.prototype
}
var Square4 = function () {
	square.call(this)
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
	square4.prototype = square.prototype
}
var Square5 = function () {
	square.call(this)
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
	square5.prototype = square.prototype
}
var Square6 = function () {
	square.call(this)
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
	square6.prototype = square.prototype
}
var Square7 = function () {
	square.call(this)
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
	square7.prototype = square.prototype
}

var squareFactory = function () {
	var index = Math.round(Math.random()*6+1);
	var num = Math.round(Math.random()*3);
	switch (index) {
		case 1:
			var s = Square1();
			break;
		case 2:
			var s = Square2();
			break;
		case 3:
			var s = Square3();
			break;
		case 4:
			var s = Square4();
			break;
		case 5:
			var s = Square5();
			break;
		case 6:
			var s = Square6();
			break;
		case 7:
			var s = Square7();
			break;
	}
	s.rotate(num);
}

