// pages/my/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showSearch: false,
    navData: 0,

    compileShow: false, //管理      
    shopcarData: [], //购物车数据
    allsel: false, //全选      
    selarr: [], //选择的货物
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

  // 搜索框
  bindSearch: function () {
    this.setData({
      showSearch: true
    })
  },

  //收藏导航
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var shopcarData = [{ //购物车   
        id: '1',
        name: '折后i啊手动阀就是点击发送的金佛啊是是假的佛山折后i啊手动阀就是点击发送的金佛啊是是假的佛山',
        price: '230',
        check: false
      }, {
        id: '2',
        name: '啊哈额和福特好热惊讶所以就如同撒打发士大夫',
        price: '332',
        check: false
      }, {
        id: '3',
        name: '啊如何呀还是大范围推广哇额饿啊日hers的说法的事发生的',
        price: '120',
        check: false
      }, {
        id: '4',
        name: '阿桑的歌也会更好的反对犯得上的事发生的',
        price: '320',
        check: false
      }, {
        id: '5',
        name: '阿桑的歌微软噶士大夫啊士大夫但是飞洒地方士大夫撒',
        price: '630',
        check: false
      }], //这里我是把购物车的数据放到app.js里的，这里取出来，开发的时候视情况加载自己的数据
      selarr = this.data.selarr;
    for (let i = 0, len = shopcarData.length; i < len; i++) { //这里是对选中的商品的价格进行总结    
      if (shopcarData[i].check) {
        selarr.push(shopcarData[i]);
      }
    }
    this.setData({
      shopcarData: shopcarData,
      selarr: selarr
    });
    this.judgmentAll(); //判断是否全选
  },

  //点击全选  
  allcheckTap: function() {
    let shopcar = this.data.shopcarData,
      allsel = !this.data.allsel; //点击全选后allsel变化
    for (let i = 0, len = shopcar.length; i < len; i++) {
      shopcar[i].check = allsel; //所有商品的选中状态和allsel值一样
    }
    this.data.selarr = allsel ? shopcar : []; //如果选中状态为true那么所有商品为选中状态，将物品加入选中变量，否则为空    
    this.setData({
      allsel: allsel,
      shopcarData: shopcar,
      selarr: this.data.selarr
    });
  },
  //点击移除商品  
  deleteshopTap: function() {
    var allsel = this.data.allsel,
      shopcar = this.data.shopcarData,
      selarr = this.data.selarr;
    if (allsel) {
      shopcar = [];
      this.setData({
        allsel: false
      });
    } else {
      console.log(selarr);
      for (var i = 0, len = selarr.length; i < len; i++) { //将选中的商品从购物车移除        
        console.log(selarr[i].id);
        for (var lens = shopcar.length - 1, j = lens; j >= 0; j--) {
          console.log(shopcar[j].id);
          if (selarr[i].id == shopcar[j].id) {
            shopcar.splice(j, 1);
          }
        }
      }
    }
    this.setData({
      shopcarData: shopcar,
    });
  },
  //点击编辑按钮，是否显示删除的选项  
  compileTap: function() {
    this.setData({
      compileShow: !this.data.compileShow
    });
  },
  //点击单个选择按钮  
  checkTap: function(e) {
    let Index = e.currentTarget.dataset.index,
      shopcar = this.data.shopcarData,
      selarr = this.data.selarr;
    shopcar[Index].check = !shopcar[Index].check || false;
    if (shopcar[Index].check) {
      selarr.push(shopcar[Index]);
    } else {
      for (let i = 0, len = selarr.length; i < len; i++) {
        if (shopcar[Index].id == selarr[i].id) {
          selarr.splice(i, 1);
          break;
        }
      }
    }
    this.setData({
      shopcarData: shopcar,
      selarr: selarr
    });
    this.judgmentAll(); //每次按钮点击后都判断是否满足全选的条件  
  },

  //判断是否为全选  
  judgmentAll: function() {
    let shopcar = this.data.shopcarData,
      shoplen = shopcar.length,
      lenIndex = 0; //选中的物品的个数    
    for (let i = 0; i < shoplen; i++) { //计算购物车选中的商品的个数    
      shopcar[i].check && lenIndex++;
    }
    this.setData({
      allsel: lenIndex == shoplen //如果购物车选中的个数和购物车里货物的总数相同，则为全选，反之为未全选    
    });
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