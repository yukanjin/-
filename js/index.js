var nextDivs = [];
var gameDivs = [];
var curData = curItem.data;
var nextData = nextItem.data;
var score = 0;
var timer,end;
// 初始化游戏界面
var init = function () {
	for(var i=0;i<context.length;i++){
		var gameDiv = [];
		for (var j = 0;j<context[0].length;j++) {
			var div =document.createElement('div');
			div.className = 'none';
			div.style.top = (i*20) + 'px';
			div.style.left = (j*20) + 'px';
			document.getElementById('game').appendChild(div);
			gameDiv.push(div);
		}
		gameDivs.push(gameDiv);
	}
}

// 定义下一个方块显示区域的样式
var initNext = function () {
	for(var i=0;i<curData.length;i++){
		var nextDiv = [];
		for (var j = 0;j<curData[0].length;j++) {
			var div =document.createElement('div');
			div.className = 'none';
			div.style.top = (i*20) + 'px';
			div.style.left = (j*20) + 'px';
			document.getElementById('next').appendChild(div);
			nextDiv.push(div);
		}
		nextDivs.push(nextDiv);
	}
}

// 渲染游戏界面
var refresh = function () {
	for(var i=0;i<gameDivs.length;i++) {
		for(var j=0;j<gameDivs[0].length;j++){
			if(context[i][j] == 0){
				gameDivs[i][j].className = 'none';
			} else if(context[i][j] == 1){
				gameDivs[i][j].className = 'current';
			} else if(context[i][j] == 2){
				gameDivs[i][j].className = 'done';
			}
		}
	}
}

// 渲染nextDiv界面
var refreshNext = function () {
	for(var i=0;i<nextDivs.length;i++) {
		for(var j=0;j<nextDivs[0].length;j++){
			if(nextData[i][j] == 0){
				nextDivs[i][j].className = 'none';
			} else if(nextData[i][j] == 1){
				nextDivs[i][j].className = 'current';
			} else if(nextData[i][j] == 2){
				nextDivs[i][j].className = 'done';
			}
		}
	}
}

// 把方块置入游戏界面
var start = function () {
	for (var i=curItem.posY;i<curItem.posY+4;i++){
		for(var j=curItem.posX+3;j<curItem.posX+7;j++){
			if(context[i][j] != 2){
				context[i][j]=curData[i-curItem.posY][j-curItem.posX-3];
			}
			
		}
	}
	refresh();
}

// 游戏运行
var run = function () {
	timer = setInterval(function(){
		isEnd();
		if(end==true){
			for (var i=context.length-1;i>=0;i--){
				for(var j=context[0].length-1;j>=0;j--){
					if(context[i][j] == 1){
						context[i][j] = 2;
					}
				}
			}
			curData = nextData;
			curItem = nextItem;
			nextItem = SquareFactory();
			nextData = nextItem.data;
			gameOver();
			if(isFirst == true){
				context = [
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
				]
				return;
			}
			remove();
			refreshNext();
			start();
		}else{
			for (var i=context.length-2;i>=0;i--){
				for(var j=context[0].length-1;j>=0;j--){
					if(context[i][j] == 1){
						context[i+1][j] = 1;
						context[i][j] = 0;
						
					}
				}
			}
		}
		curItem.posY += 1;
		refresh();
	},200)	
}


// 控制方块移动和旋转
var bindKeyEvent = function () {
	document.onkeydown = function (e) {
		if(e.keyCode == 38){ // up
			toRotate();
		}else if(e.keyCode == 39){ //right
			right();
		}else if(e.keyCode == 40){ //down
			down();
		}else if(e.keyCode == 37){ //left
			left();
		}else if(e.keyCode == 32){ //space
			
		}
	}
}

//让方块直接落到底部
var down = function () {
	do{
		for (var i=context.length-2;i>=0;i--){
			for(var j=context[0].length-1;j>=0;j--){
				if(context[i][j] == 1){
					context[i+1][j] = 1;
					context[i][j] = 0;
				}
			}
		}
		isEnd();
	}while(end == false)
	
}

// 让方块右移
var right = function () {
	check();
	if(local == 'right'){
		return;
	}
	for (var i=context.length-1;i>=0;i--){
		for(var j=context[0].length-1;j>=0;j--){
			if(context[i][j] == 1){
				context[i][j+1] = 1;
				context[i][j] = 0;
			}
		}
	}	
	curItem.posX += 1;	
}

// 让方块左移
var left = function () {
	check();
	if(local == 'left'){
		return;
	}
	for (var i=context.length-1;i>=0;i--){
		for(var j=0;j<context[0].length;j++){
			if(context[i][j] == 1){
				context[i][j-1] = 1;
				context[i][j] = 0;
			}
		}
	}
	curItem.posX -= 1;	
}

// 旋转
var toRotate = function () {
	for(var i=context.length-1;i>=0;i--){
		for(var j=0;j<context[0].length;j++){
			if(context[i][j] == 1){
				context[i][j] = 0;
			}
		}
	}
	curItem.rotate();
	start();
}

// 是否超出左右边界
var local;
var check = function () {
	for (var i=context.length-1;i>=0;i--){
		for(var j=context[0].length-1;j>=0;j--){
			if(context[i][j] == 1){
				if(j == context[0].length-1 || context[i][j+1] == 2){
					local = 'right';
					return;
				}else if(j == 0 || context[i][j-1] == 2){
					local = 'left';
					return;
				}else{
					local = 'center';
				}
			}
		}
	}
}


// 判断是否已经触底
var isEnd = function () {
	end = false;
	for (var i=context.length-1;i>=0;i--){
		for(var j=context[0].length-1;j>=0;j--){
			if(i == context.length-1 && context[i][j] == 1){
				end = true;
				curItem.posY = 0;
				curItem.posX = 0;
				return;
			}else if(context[i][j] == 1 && context[i+1][j] == 2){
				end = true;
				curItem.posY = 0;
				curItem.posX = 0;
				return;
			}
		}
	}
}

//顶部被填充，游戏结束
var storage = window.localStorage;
document.getElementById('highest').innerText = storage.highest
var gameOver = function () {
	if(context[0].some(function (args) {
		return args == 2
	})){
		window.clearInterval(timer);
		isFirst = true;
		btn_start.disabled = '';
    	btn_stop.disabled = 'disabled';
    	alert('游戏结束，您的得分为'+score+'分')
    	if(storage.highest < score){
    		storage.highest = score;
    	}
    	document.getElementById('highest').innerText = storage.highest
	}
}

// 消除填满区域并计算得分
var remove = function () {
	var emptyRow = [0,0,0,0,0,0,0,0,0,0];
	var removed = 0;
	for (var i=0;i<context.length;i++){
		if(context[i].every(function (aa) {
			return aa == 2;
		})){
			context.splice(i,1);
			removed++;
		}
	}
	for(var i=0;i<removed;i++){
		context.unshift(emptyRow)
	}
	switch(removed){
		case 1:
			score += 10;
			break;
		case 2:
			score += 25;
			break;
		case 3:
			score += 40;
			break;
		case 4:
			score += 60;
	}
	document.getElementById('score').innerText = score;
}

bindKeyEvent();
init();
initNext();
var btn_start = document.getElementById('start');
var btn_stop = document.getElementById('stop');
var isFirst = true;
btn_start.onclick = function () {
	if(isFirst){
		refresh();
    	refreshNext();
    	isFirst = !isFirst;
    	document.getElementById('score').innerText = 0;
	}	
	start();
    run();
    btn_start.disabled = 'disabled';
    btn_stop.disabled = '';
}
btn_stop.onclick = function () {
	btn_start.disabled = '';
    btn_stop.disabled = 'disabled';
    window.clearInterval(timer);
}

