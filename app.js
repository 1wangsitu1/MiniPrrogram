
//注册小程序
App({
globleData:{
  token:''
},
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    let that=this
   const token= wx.getStorageSync('token')
  if(token&&token.length!=0){
    /* 验证token是否过期 */
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'POST',
      header:{token},
      success:(data)=>{
if(!data.data.errcode){
  console.log('token有效');
  this.globleData.token=token
  
}
else{
  this.firstlogin()
}

      },
    
    })
  }
  else{
    /*  登录操作 */
  this.firstlogin()
  }
},
firstlogin(){
  wx.login({
    //code有效期只有五分钟
    success:(res)=>{
      const code=res.code
    wx.request({
      url: 'http://123.207.32.32:3000/login',
      method:'POST',
      data:{code},
      success:(data)=>{
console.log('登录成功');

const token=data.data.token
this.globleData.token=token
wx.setStorage({
  data: token,
  key: 'token',
})

      }
    })
      
    }
  })
},



  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log(options);
    
    console.log('显示');
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('隐藏');
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globleData:{
    name:'like',
    age:22
  }
})
