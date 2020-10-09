// components/tab_bar/tab_bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
mess:{
  type:Array,
  value:[]
}
  },
  externalClasses:['messclass'],

  /**
   * 组件的初始数据
   */
  data: {
currindex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
handleclick(e){
  const index=e.currentTarget.dataset.index
this.setData({
  currindex: index,
 
  
})
this.triggerEvent('itemIndex',{index},{})

}
  }
})
