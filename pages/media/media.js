var App = getApp();
function getRandomColor () {
  let rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
const audioSrcStr = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46';
Page({
    data: {
        audioSrc: '',
        audioPoster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
        audioName: '此时此刻',
        audioAuthor: '许巍',
        array: 
        [
            {
                mode: 'scaleToFill',
                text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
            }, 
            { 
                mode: 'aspectFit',
                text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
            },
            { 
                mode: 'aspectFill',
                text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
            }, 
            { 
                mode: 'top',
                text: 'top：不缩放图片，只显示图片的顶部区域' 
            }, 
            {      
                mode: 'bottom',
                text: 'bottom：不缩放图片，只显示图片的底部区域'
            },
            { 
                mode: 'center',
                text: 'center：不缩放图片，只显示图片的中间区域'
            }, 
            { 
                mode: 'left',
                text: 'left：不缩放图片，只显示图片的左边区域'
            }, 
            { 
                mode: 'right',
                text: 'right：不缩放图片，只显示图片的右边边区域'
            }, 
            { 
                mode: 'top left',
                text: 'top left：不缩放图片，只显示图片的左上边区域' 
            },
            { 
                mode: 'top right',
                text: 'top right：不缩放图片，只显示图片的右上边区域'
            }, 
            { 
                mode: 'bottom left',
                text: 'bottom left：不缩放图片，只显示图片的左下边区域'
            }, 
            { 
                mode: 'bottom right',
                text: 'bottom right：不缩放图片，只显示图片的右下边区域'
            }
        ],
        imgSrc: '../../resources/images/cat.jpg',
        tempValue: ''
    },
    inputValue: '',
    onLoad: function () {

    },
    onReady: function () {
        this.audioCxt = wx.createAudioContext("myAudio");
        this.audioCxt.setSrc(audioSrcStr);
        this.videoCxt = wx.createVideoContext('myVideo');
    },
    audioPlay: function () {
        this.audioCxt.play();
    },
    audioStop: function () {
        this.audioCxt.pause();
    },
    audioSeek: function () {
        this.audioCxt.seek(14);
    },
    playVideo: function () {
        this.videoCxt.play();
    },
    bindInputBlur: function (e) {
        this.inputValue = e.detail.value;
    },
    bindSendDanmu: function () {
        this.videoCxt.sendDanmu({
            text: this.inputValue,
            color: getRandomColor()
        });
        this.setData({
            tempValue: ''
        });
    }   
})