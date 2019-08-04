// pages/RouteDetails/RouteDetails.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/1.jpg',
      '../../images/1.jpg',
      '../../images/1.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },
  //回到顶部
  goTop: function(e) { // 一键回到顶部
    app.goTop();
  },
  //查看详情
  showRule01: function() {
    console.log(1),
    this.setData({
      isRuleTrue01: true
    })
  },
  // 查看详情
  hideRule01: function() {
    this.setData({
      isRuleTrue01: false,
    })
  },
  //弹窗打开规则提示
  showRule: function() {
    console.log("show")
    this.setData({
      isRuleTrue: true
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