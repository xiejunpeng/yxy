// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showSearch: false,

    tabTxt: ['推荐排序', '销量'], //分类
    tab: [true, true],
    paixuList: [{ 'id': '1', 'title': '低价优先' }, { 'id': '2', 'title': '高价优先' }],
    paixu_id: 0,//排序
    paixu_txt: '',
    xiaoliang_id: 0,//销量
    xiaoliang_txt: '',
  },

  // 选项卡
  filterTab: function (e) {
    var data = [true, true], index = e.currentTarget.dataset.index;
    data[index] = !this.data.tab[index];
    this.setData({
      tab: data
    })
  },

  //筛选项点击操作
  filter: function (e) {
    var self = this, id = e.currentTarget.dataset.id, txt = e.currentTarget.dataset.txt, tabTxt = this.data.tabTxt;
    switch (e.currentTarget.dataset.index) {
      case '0':
        tabTxt[0] = txt;
        self.setData({
          tab: [true, true],
          tabTxt: tabTxt,
          paixu_id: id,
          paixu_txt: txt
        });
        break;
      case '1':
        tabTxt[1] = txt;
        self.setData({
          tab: [true, true],
          tabTxt: tabTxt,
          xiaoliang_id: id,
          xiaoliang_txt: txt
        });
        break;
    }
    //数据筛选
    self.getDataList();
  },

  //加载数据
  getDataList: function () {
    //调用数据接口，获取数据
  },


  // 返回顶部
  goTop: function () {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },
  onRouteDetails(){
    // wx.navigateTo({
    //   url: '/pages/RouteDetails/RouteDetails',
    // })
    // wx.navigateTo({
    //   url: '/pages/hotelDetails/hotelDetails',
    // })
    wx.navigateTo({
      url: '/pages/ticketDetails/ticketDetails',
    })
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