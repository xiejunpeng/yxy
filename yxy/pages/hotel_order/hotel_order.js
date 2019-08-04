// pages/hotel_order/hotel_order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isRuleTrue: false,
    imgscr: '../images/item01.jpg',
  },
  //弹窗打开规则提示
  showRule: function() {
    console.log("show")
    // console.log(this)

    this.data.isRuleTrue == false ?
      this.setData({
        isRuleTrue: true,
        imgscr: '../images/item02.jpg'
      }) : this.setData({
        isRuleTrue: false,
        imgscr: '../images/item01.jpg'
      })
  },
  // 弹窗点击关闭按钮：
  hideRule: function() {
    console.log("hide")
    this.setData({
      isRuleTrue: false,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})