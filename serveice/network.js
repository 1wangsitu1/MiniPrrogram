export function request(config){
return new Promise((resolve,reject)=>{
wx.request({
  url:config.url,
  data:config.data||{},
  method:config.method||{},
  success(res){
resolve(res)
  },
  fail(err){
reject(err)
  }
})
})
}