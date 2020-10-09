
const app=getApp()//获取APP产生的示例对象 
Page({
  tan(){
  wx.showToast({
    title: 'hello World',
    duration:1500,
    icon:'loading',
    image:'../../assets/tabbar/angel.gif'
  })
    
  },
/*   load 不会消失必须手动调用hideloading(),toast过一会会消失 */
  load(){
    wx.showLoading({
      title: '正在加载',
    })
  },
  bottom(){
    wx.showActionSheet({
      itemList: ['拍照','从相册中选取'],
      success (res) {
        /* console.log(res.tapIndex) */
        switch(res.tapIndex){
          case 0:
          console.log('拍照');
          break;
          case 1:
            console.log('选取');
            break;
            
          
        }
      },
    })
  },
  onShareAppMessage: function () {
    return {
      title: '我的小程序',
      path: '../about',
      imageUrl:'../../assets/picture/8.jpg'
    }
  }
})