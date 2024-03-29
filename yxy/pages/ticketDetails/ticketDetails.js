// pages/RouteDetails/RouteDetails.js
import api from "../../api/api.js"
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
    scroll_top: 0,
    main_arr: [],
    title: [
      "图文详情", "酒店设施", "预定须知"
    ],
    main_index: 0,
    currentIndex: 0
  },
  // 返回上一页
  callbacks() {
    // console.log("1"),
    wx.navigateBack({})
  },
  // 返回首页
  backHome() {
    wx.navigateBack({
      delta: 2
    })
  },
  //回到顶部
  goTop: function(e) { // 一键回到顶部
    app.goTop();
  },
  //立即购买弹窗打开规则提示
  showRule: function() {
    this.setData({
      isRuleTrue: true
    })
  },
  // 立即购买弹窗点击关闭按钮：
  hideRule: function() {
    this.setData({
      isRuleTrue: false,
    })
  },
  //客服弹窗
  showRule02: function() {
    this.setData({
      isRuleTrue02: true
    })
  },
  // 客服弹窗
  hideRule02: function() {
    this.setData({
      isRuleTrue02: false,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.request({
      url: api.hotel_pic,
      data: {
        hId: 72
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        // that.setData({
        //   imgUrls: res.data
        // })
      }
    })
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
    var that = this; //选项卡 滑动切换 点击切换
    var query = wx.createSelectorQuery() //创建节点查询器 query
    query.select('#affix').boundingClientRect() //这段代码的意思是选择Id= the - id的节点，获取节点位置信息的查询请求
    query.exec(function(res) {
      //console.log(res[0]); // #affix节点的上边界坐
      that.setData({
        menuTop: res[0].top
      })
    });

    //
    query.selectAll('.mainOption').boundingClientRect() //查找节点并获取节点位置信息的查询请求
    query.exec(function(res) {
      // console.log(res);
      // console.log(res[1]);
      that.setData({
        main_arr: res[1]
      })
    });
  },
  // 2.监听页面滚动距离scrollTop
  onPageScroll: function(e) {
    // console.log(e.scrollTop);
    this.setData({
      scroll_top: e.scrollTop
    })
    var that = this;
    // 3.当页面滚动距离scrollTop > menuTop菜单栏距离文档顶部的距离时，菜单栏固定定位
    if (e.scrollTop > that.data.menuTop) {
      that.setData({
        menuFixed: true
      })
    } else {
      that.setData({
        menuFixed: false
      })
    }

    this.data.scroll_top > this.data.main_arr[0].top - 120 ? this.setData({
      main_index: 0
    }) : ""
    this.data.scroll_top > this.data.main_arr[1].top - 120 ? this.setData({
      main_index: 1
    }) : ""
    this.data.scroll_top > this.data.main_arr[2].top - 120 ? this.setData({
      main_index: 2
    }) : ""
  },
  //用户点击tab时调用
  titleClick: function(e) {
    this.setData({
      main_index: e.currentTarget.dataset.ind
    })
    wx.pageScrollTo({
      scrollTop: this.data.main_arr[this.data.main_index].top - 120
    })

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