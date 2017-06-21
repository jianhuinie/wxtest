var App = getApp();
const date = new Date();
const years = [];
const months = [];
const days = [];
const monthDaysMap = {
    '1': 31,
    '2': 28,
    '3': 31,
    '4': 30,
    '5': 31,
    '6': 31,
    '7': 30,
    '8': 31,
    '9': 30,
    '10': 31,
    '11': 30,
    '12': 31
}

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i);
}

for (let i = 1 ; i <= 12; i++) {
  months.push(i);
}

for (let i = 1 ; i <= 31; i++) {
  days.push(i);
}

Page({
    data: {
        picsArray: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 200,
        x: 30,
        y: 30,
        text: 'you are beautiful',
        checkboxes: [
            {name: 'USA', value: '美国'},
            {name: 'CHN', value: '中国', checked: 'true'},
            {name: 'BRA', value: '巴西'},
            {name: 'JPN', value: '日本'},
            {name: 'ENG', value: '英国'},
            {name: 'TUR', value: '法国'},
        ],
        pickerArray: ['美国', '中国', '巴西', '日本'],
        pickerIndex: 0,
        inputValue: 'qwer',
        radioItems: [
            {name: 'USA', value: '美国'},
            {name: 'CHN', value: '中国', checked: 'true'},
            {name: 'BRA', value: '巴西'},
            {name: 'JPN', value: '日本'},
            {name: 'ENG', value: '英国'},
            {name: 'TUR', value: '法国'},
        ],
        years: years,
        year: date.getFullYear(),
        months: months,
        month: 2,
        days: days,
        day: 2,
        year: date.getFullYear(),
    },
    onLoad: function () {

    },
    onReady: function () {
        wx.setNavigationBarTitle({
            title: '表单控件demo'
        });
    },
    sliderChange: function (e) {
        // console.log(e.detail);
    },
    checkboxChange: function (e) {
        console.log(e.detail)
    },
    pickerChange: function (e) {
        this.setData({
            pickerIndex: e.detail.value
        });
    },
    formSubmit: function (e) {
        console.log(e.detail);
        //需要加name属性作为键
    },
    formReset: function (e) {

    },
    inputChange: function (e) {
        this.setData({
            inputValue: e.detail.value
        });
    },
    radioChange: function (e) {
        console.log(e.detail.value);
    },
    pickerViewChange: function(e) {
        //只能选过去时间
        const val = e.detail.value;
        var me = this;
        var data = me.data;
        var year = data.month;
        var month = data.month;
        var day = data.day;
        var currentYear = this.data.years[val[0]];
        var currentMonth = this.data.months[val[1]];
        var currentDay = this.data.days[val[2]];
        var isRunnian = function (year) {
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        }
        if (year !== currentYear && currentYear === date.getFullYear()) {
            var tempArray = [];
            for (let i = 1 ; i <= date.getMonth() + 1; i++) {
                tempArray.push(i);
            }
            me.setData({
                months: tempArray
            });
        }
        if (month !== currentMonth || (year !== currentYear && currentMonth === 2)) {
            var tempArray = [];
            if (currentYear === date.getFullYear() && currentMonth === date.getMonth() + 1) {
                for (let i = 1 ; i <= date.getDate(); i++) {
                    tempArray.push(i);
                }
            }
            else {
                for (let i = 1 ; i <= monthDaysMap[currentMonth]; i++) {
                    tempArray.push(i);
                }
                if (isRunnian(currentYear) && currentMonth === 2) {
                    tempArray.push(29);
                }
            }
            me.setData({
                days: tempArray
            });
        }
        me.setData({
            year: currentYear,
            month: currentMonth,
            day: currentDay
        })
    }
})