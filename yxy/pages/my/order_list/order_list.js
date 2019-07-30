// pages/my/order_list/order_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navData: 0,
    tabData:0,
    showRecycle:false
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

  //订单导航
  binNav: function (e) {
    const that = this;
    if (that.data.navData === e.target.dataset.nav) {
      return false;
    } else {
      that.setData({
        navData: e.target.dataset.nav
      })
    }
  },

  //订单状态选项
  binTab: function (e) {
    const that = this;
    if (that.data.tabData === e.target.dataset.tab) {
      return false;
    } else {
      that.setData({
        tabData: e.target.dataset.tab
      })
    }
  },

  // 显示回收站
  bindRecycle: function () {
    this.setData({
      showRecycle: true
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