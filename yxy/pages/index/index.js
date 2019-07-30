// pages/index/index.js
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

    showSearch: false,
    showEr:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  // 搜索框
  bindSearch: function () {
    this.setData({
      showSearch: true
    })
  },

  // 二维码
  binEr: function () {
    this.setData({
      showEr: true
    })
  },

  // 关闭二维码
  btClose: function () {
    this.setData({
      showEr: false
    })
  },
  // 点击更多跳转
  onclickPath(){
    wx.navigateTo({
      url: '/pages/list/list',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})