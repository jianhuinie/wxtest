//index.js
//获取应用实例
var app = getApp()
Page({
	data: {
		motto: 'Hello World',
		userInfo: {},
		maleFlag: 0,
		showText: '热爱生活的小女生',
		hobbies: [
			'篮球',
			'游泳',
			'羽毛球'
		],
		personA: {
			fullName: '聂建辉',
			age: 23
		}
	},
	//事件处理函数
	bindViewTap: function() {
		wx.navigateTo({
			url: '../logs/logs'
		})
	},
	onLoad: function () {
		//先触发onLoad 然后onShow 再触发onReady
		console.log('onLoad');
		var that = this;
		//调用应用实例的方法获取全局数据
		app.getUserInfo(function(userInfo){
			//更新数据
			console.log(userInfo);
			that.setData({
				userInfo:userInfo
			});
		});
	},
	onReady: function () {
		console.log('ready');
	},
	onShareAppMessage: function () {
		return {
			title: '转发小程序',
			path: '/pages/index/index'
		}
	},
	changeText: function () {
		if (this.data.maleFlag) {
			this.setData({
				showText: '热爱生活的小女生',
				maleFlag: 0
			});
		}
		else {
			this.setData({
				showText: '热爱生活的小骚年',
				maleFlag: 1
			});
		}
		console.log(getCurrentPages());
	},
	switchChange: function (e) {
		//必须通过setData 改变数据
		console.log(e.detail.value);
	}
})
