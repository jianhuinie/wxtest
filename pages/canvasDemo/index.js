//index.js
//获取应用实例
var app = getApp()
Page({
	data: {
		
	},
	onLoad: function () {
		var ctx = wx.createCanvasContext('my-canvas');
		ctx.setFillStyle('red');
		// ctx.fillRect(0, 0, 10, 10);
		ctx.setStrokeStyle('red');
		// ctx.strokeRect(10, 10, 10, 10);
		// const grd = ctx.createLinearGradient(0, 0, 200, 0);
		// grd.addColorStop(0, 'red');
		// grd.addColorStop(1, 'white');

		// ctx.setFillStyle(grd);
		// ctx.fillRect(10, 10, 150, 80);

		// const grd = ctx.createCircularGradient(75, 50, 50);
		// grd.addColorStop(0, 'red');
		// grd.addColorStop(1, 'white');

		// ctx.setFillStyle(grd);
		// ctx.fillRect(10, 10, 150, 80);
		// ctx.rect(10, 10, 150, 75);
		// ctx.fill();
		// ctx.setFillStyle('red');
		// ctx.fillRect(0, 0, 150, 200);
		// ctx.setFillStyle('blue');
		// ctx.fillRect(150, 0, 150, 200);
		// ctx.clearRect(10, 10, 150, 75);

		// ctx.beginPath();
		// ctx.setLineCap('butt');
		// ctx.setLineWidth(10);
		// ctx.moveTo(10, 30);
		// ctx.lineTo(150, 30);
		// ctx.stroke();

		// ctx.moveTo(10, 10);
		// ctx.lineTo(100, 10);
		// ctx.lineTo(100, 100);
		// ctx.closePath();
		// ctx.stroke();

		// ctx.beginPath();
		// ctx.arc(50, 50, 25, 0, 2 * Math.PI);
		// ctx.clip();
		// ctx.fill();

		// ctx.beginPath();
		// ctx.moveTo(20, 20);
		// ctx.quadraticCurveTo(20, 100, 200, 20);
		// ctx.setStrokeStyle('black')
		// ctx.stroke();

		// ctx.beginPath();
		// ctx.moveTo(20, 20);
		// ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
		// ctx.setStrokeStyle('black');
		// ctx.stroke();

		// ctx.setFillStyle('red');
		// ctx.setShadow(10, 50, 50, 'blue');
		// ctx.fillRect(10, 10, 150, 75);

		// ctx.strokeRect(10, 10, 25, 15);
		// ctx.scale(2, 2);
		// ctx.strokeRect(10, 10, 25, 15);
		// ctx.scale(2, 2);
		// ctx.strokeRect(10, 10, 25, 15);

		// ctx.strokeRect(100, 10, 150, 100);
		// ctx.rotate(20 * Math.PI / 180);
		// ctx.strokeRect(100, 10, 150, 100);
		// ctx.rotate(20 * Math.PI / 180);
		// ctx.strokeRect(100, 10, 150, 100);

		// ctx.strokeRect(10, 10, 150, 100)
		// ctx.translate(20, 20);
		// ctx.strokeRect(10, 10, 150, 100);
		// ctx.setFontSize(20);
		// ctx.fillText('20', 20, 20);
		// ctx.setStrokeStyle('red');

		// ctx.moveTo(150, 20);
		// ctx.lineTo(150, 170);
		// ctx.stroke();

		// ctx.setFontSize(15);
		// ctx.setTextAlign('left');
		// ctx.fillText('textAlign=left', 150, 60);

		// ctx.setTextAlign('center');
		// ctx.fillText('textAlign=center', 150, 80);

		// ctx.setStrokeStyle('red');
		// ctx.moveTo(5, 75);
		// ctx.lineTo(295, 75);
		// ctx.stroke();

		// ctx.setFontSize(20);

		// ctx.setTextBaseline('top');
		// ctx.fillText('top', 5, 75);

		// ctx.setTextBaseline('middle');
		// ctx.fillText('middle', 50, 75);

		// ctx.setFillStyle('red');
		// ctx.fillRect(10, 10, 150, 100);
		// ctx.setGlobalAlpha(0.2);
		// ctx.setFillStyle('blue');
		// ctx.fillRect(50, 50, 150, 100);
		// ctx.setFillStyle('yellow');
		// ctx.fillRect(100, 100, 150, 100);

		ctx.save();
		ctx.setFillStyle('blue');
		ctx.fillRect(10, 10, 150, 100);

		ctx.restore();
		ctx.fillRect(50, 50, 150, 100);


		ctx.draw();
	},
	
})
