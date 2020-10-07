//注册页面
Page({
  //初始化数据
  data:{
    count:0,
    list:[]
  },
  increase(){
    this.setData({
     count: this.data.count+1
    })
  },
  descrease(){
   this.setData({
     count:this.data.count-1
   })
  },
  getUserInfo(e) {
    // 拿到用户信息进行下一步处理
    console.log(e);
    
    console.log(e.detail.userInfo)  
},
//监听页面的的生命周期
onLoad(){
  let that=this;
wx.request({
  url: 'http://152.136.185.210:8000/api/w6/recommend',
 
  success(res){
    console.log(res);
    that.setData({
      list:res.data.data.list
    })
  }
})
},
onHide(){

},//初次渲染完成
onReady(){},
onShow(){},
onUnload(){
  console.log('卸载了');
  
},
//监听wxml
handle(){
  console.log('发生了点击');
  
}
,
onPageScroll(obj){
//console.log(obj);

},
onReachBottom(){
  console.log('到底了');
  
},
onPullDownRefresh(){
console.log('页面刷新了');

}


})
//getApp()获取App()的实例对象
const app=getApp()
console.log(app.globleData.name);

