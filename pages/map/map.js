var App = getApp();
function getRandomColor () {
    let rgb = [];
    for (let i = 0 ; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16);
        color = color.length == 1 ? '0' + color : color;
        rgb.push(color);
    }
    return '#' + rgb.join('');
}
Page({
    data: {
        markers: [
            {
                iconPath: "/resources/images/qq.svg",
                id: 0,
                latitude: '23.099994',
                longitude: '113.324520',
                width: 50,
                height: 50
            }
        ],
        polyline: [
            {
                points: [
                    {
                        longitude: 113.3245211,
                        latitude: 23.10229
                    },
                    {
                        longitude: 113.324520,
                        latitude: 23.21229
                    }
                ],
                color:"#FF0000DD",
                width: 2,
                dottedLine: true
            }
        ],
        controls: [
            {
                id: 1,
                iconPath: '/resources/images/qq.svg',
                position: {
                    left: 0,
                    top: 300 - 50,
                    width: 50,
                    height: 50
                },
                clickable: true
            }
        ]   
    },
    onLoad: function () {
        var me = this;
        wx.getLocation({
            type: 'wgs84',
            success: function (res) {
                console.log(res);
            }
        });
    },
    onReady: function () {
        
    },
    regionchange: function (e) {
        console.log(e.type);
    },
    markertap: function (e) {
        console.log(e.markerId);
    },
    controltap: function (e) {
        console.log(e.controlId);
    } 
})