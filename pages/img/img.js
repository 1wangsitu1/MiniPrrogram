// pages/img/img.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
imgpath:''
  },

 
  pic(){

    wx.chooseImage({
     success:(res)=>{
console.log(res);
const path=res.tempFilePaths[0]
this.setData({
imgpath:path
})
     },
     fail(err){
console.log(
err
);

     }
    })
  },
  handimg(){
    console.log('图片加载完成');
    
  }
})