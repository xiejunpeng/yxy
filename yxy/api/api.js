const baseUrl = "https://small.yuoun.com/";
const imageUrl ="https://res.yuoun.com/"

export default {
    //商家登录
    login: `${baseUrl}Controller/IHandler.ashx?mod=Brands&parm=GetBrandsModel`,
    //商家登录  uuid:商家ID;

    //搜索
    search: `${baseUrl}Controller/IHandler.ashx?mod=index&parm=GetSearchPage_Tourism`,
    // 参数名	    类型	  说明
    // BRId        int            商家Id
    // keyword     string         关键字，为空""

    //首页
    lunbo: `${baseUrl}Controller/IHandler.ashx?mod=Advert&parm=GetAdvertList`,
    //轮播图  BRid:97或517;cid默认为1

    kuaijie: `${baseUrl}Controller/IHandler.ashx?mod=Advert&parm=GetCategoryIcon`,
    //快捷入口 BRid:97或517;Iswd默认为0

    theme: `${baseUrl}Controller/IHandler.ashx?mod=index&parm=Get_Theme`,
    //获取主题 BRid:97或517

    theme_info: `${baseUrl}Controller/IHandler.ashx?mod=index&parm=Get_Product`,
    //获取主题产品对应信息  跳转类型 typeid: 1线路 ，2酒店， 3景点，4商品  allID：
    // cateId: cateId

    search_product: `${baseUrl}Controller/IHandler.ashx?mod=index&parm=Get_ProductSearch`,
    //获取主题产品对应信息  跳转类型 typeid: 1线路 ，2酒店， 3景点，4商品  allID：  ; cateId: cateId 
    // 参数：  ThemeID(主题ID) 、Addmodel(绑定类型)、Page（默认为0）、BRID（商家ID）、ProductName(筛选条件)、cateId(判断绑定分类字段)

    //线路
    line: `${baseUrl}Controller/IHandler.ashx?mod=Touring&parm=GetTouringMold`,
    //线路详情接口  tId:1358

    line_pic: `${baseUrl}Controller/IHandler.ashx?mod=Touring&parm=GetTourImg`,
    //线路封面图片接口  tId:1358

    line_package: `${baseUrl}Controller/IHandler.ashx?mod=Touring&parm=GetTourDateList`,
    //线路套餐接口  tId:1358

    line_trip: `${baseUrl}Controller/IHandler.ashx?mod=Touring&parm=GetTripList`,
    //线路行程接口  tId:1358

    line_you_like: `${baseUrl}Controller/IHandler.ashx?mod=Touring&parm=GetTouringByRand`,
    //线路猜你喜欢接口  BRId:97

    merchants_shop: `${baseUrl}Controller/IHandler.ashx?mod=Brands&parm=GetBrands`,
    //商家店铺相关接口  BRId:97


    //酒店
    hotel_pic: `${baseUrl}Controller/IHandler.ashx?mod=Hotel&parm=GetHotelImg`,
    // 酒店图片接口   
    // 参数名	类型	说明
    // hId	Int	酒店ID

    hotel_detail: `${baseUrl}Controller/IHandler.ashx?mod=Hotel&parm=GetHotelMold`,
    //酒店详情接口
    // 参数名	类型	说明
    // hId	    Int	   景点ID

    hotel_package: `${baseUrl}Controller/IHandler.ashx?mod=Hotel&parm=GetRoomDateList`,
    //酒店套餐接口
    // 参数名	类型	说明
    // hId    	Int	   线路ID


    //景点
    view_pic: `${baseUrl}Controller/IHandler.ashx?mod=Spot&parm=GetSpotImg`,
    //景点图片接口 
    // 参数名	类型	说明
    // sId	Int	景点ID

    view_detail: `${baseUrl}Controller/IHandler.ashx?mod=Spot&parm=GetSpot`,
    // 景点详情接口
    // 参数名	     类型	       说明
    // sId           Int	      景点ID

    view_type: `${baseUrl}Controller/IHandler.ashx?mod=Spot&parm=GetPartsList`,
    // 景点门票类型
    // 参数名       类型           说明
    // sId          Int           景点ID

    view_all: `${baseUrl}Controller/IHandler.ashx?mod=Ticket&parm=GetTicketList`,
    // 景点门票所有套餐
    // 参数名       类型           说明
    // sId          Int           线路ID


    //收藏
    iscollection: `${baseUrl}Controller/IHandler.ashx?mod=Collection&parm=Isexit_Collection`,
    //判断是否已经收藏过接口
    // 参数名	类型	  说明
    // tId     int       线路ID
    // hId     int       酒店Id
    // sId     int       景点Id
    // 返回succuss=true表示已经收藏，success =false未收藏

    collection: `${baseUrl}Controller/IHandler.ashx?mod=Collection&parm=Add_Collection`,
    //收藏或取消收藏接口
    // 参数名	类型	  说明
    // tId     int       线路ID
    // hId     int       酒店Id
    // sId     int       景点Id
    // 返回succuss=true表示收藏，success =false取消收藏

    //收藏页
    collection_list: `${baseUrl}Controller/IHandler.ashx?mod=Collection&parm=GetPage_Collection`,
    // 收藏列表接口
    // BRId    int      商家Id
    // typeid       int         1为线路，2为酒店，3为景点门票
    // current       Int         页数

    //微信分享接口
    weixin_share: `${baseUrl}Controller/IHandler.ashx?mod=WxOpen&parm=ExportSignature`,
    // 请求方式：get

    //手机验证
    isexist: `${baseUrl}/Controller/IHandler.ashx?mod=WxOpen&parm=ExitesBRMId`,
    // 是否已经存在认证接口
    // 请求方式：get
    // 参数：无
    // 返回值success：true表示已经认证，false表示未认证

    sendcode: `${baseUrl}/Controller/IHandler.ashx?mod=WxOpen&parm=SendCode`,
    // 短信发送接口
    // 请求方式：post
    // 参数名     类型	     说明
    // phone      string     手机号
    // 返回值success：true表示发送成功，false表示发送失败


    // 接口
    chenkcode: `${baseUrl}/Controller/IHandler.ashx?mod=WxOpen&parm=Register`,
    // 请求方式：post
    // 参数名     类型	     说明
    // phone      string     手机号
    // BRId         int        商家Id
    // code       string     接受的验证码
    // 返回值success：true表示验证成功，false表示验证失败

    //下单页
    // push_order: `${baseUrl}`, //线路下单接口  

    insurance: `${baseUrl}Controller/IHandler.ashx?mod=Touring&parm=GetTouringInsurance`,
    //线路保险接口   tId:1358

    submit_order: `${baseUrl}Controller/IHandler.ashx?mod=Order&parm=Add_Order`,
    //线路提交订单接口post   
    // 参数：
    // BRId           int          商家ID
    // tId	          Int	       线路ID
    // dateId        Int            选择套餐Id
    // date           string       选择日期
    // contacts     string       联系人
    // mobile       string       联系人手机号
    // bigman      string      成人数量
    // smallman    string     儿童数量
    // realman      string      房间数量
    // insurance    string      选择的保险Id，多个用“,”隔开
    // receiveId     int           默认为0,优惠券Id
    // full              string      默认为空,满就送
    // papername  string    游客姓名，多个用“,”隔开
    // paperno      string     游客身份证号，多个用“,”隔开
    // phone        string      游客手机号，多个用“,”隔开


    submit_hotel_order: `${baseUrl}Controller/IHandler.ashx?mod=Hotel&parm=Add_HotelOrder`,
    //酒店提交订单接口post   post
    // 参数：
    // BRId           int          商家ID
    // hId	        Int      	酒店ID
    // roomdateId      Int     	房间套餐ID
    // date           string       开始日期
    // gdate          string       离开日期
    // contacts     string       联系人
    // mobile       string       联系人手机号
    // email         string       邮箱
    // num           int          订购数量
    // receiveId     int           默认为0,优惠券Id
    // full              string      默认为空,满就送

    submit_view_order: `${baseUrl}Controller/IHandler.ashx?mod=Ticket&parm=Add_TicketOrder`,
    //景点提交订单接口post   post
    // 参数：
    // BRId           int          商家ID
    // tId	           Int      	门票ID
    // date           string       选择日期
    // contacts     string          联系人
    // mobile       string         联系人手机号
    // num           int            订购数量
    // receiveId     int           默认为0,优惠券Id
    // full          string        默认为空,满就送

    get_order: `${baseUrl}/Controller/IHandler.ashx?mod=Order&parm=GetOrder`,
    //获取订单详情接口  id:订单号

    payment: `${baseUrl}/Controller/IHandler.ashx?mod=WxPay&parm=Get_wxJsApiParam`,
    //支付接口
    // 请求方式：post
    // 参数名	类型	   说明
    // Id	  string 	 订单号
    // title   string  	线路/门票名称
    // BRId     int      商家ID

    //个人中心页
    //订单列表
    order_list: `${baseUrl}/Controller/IHandler.ashx?mod=Order&parm=GetPage_Order`,
    // 请求方式：get
    // 参数名	类型	说明
    // mId     int    322
    // typeid		Int	   商品类型，0为全部，1为线路，2为酒店，3为景点门票
    // state    Int    订单状态：0为全部，1为未支付，2是取消订单，3是已支付待消费，4是待评价，5是已完成
    // current  Int    页数为空或0时，默认为1

    //订单详情接口
    order_detail: `${baseUrl}/Controller/IHandler.ashx?mod=Order&parm=GetOrderModel`,
    // 请求方式：get
    // 参数名	类型	  说明
    // Id      string     订单号
    // typeid		Int	   商品类型，0为全部，1为线路，2为酒店，3为景点门票

    //取消订单接口
    cancel_order: `${baseUrl}/Controller/IHandler.ashx?mod=Order&parm=UpdateState`,
    // 请求方式：post
    // 参数名	类型	  说明
    // Id      string     订单号


    //获取用户的接口
    user: `${baseUrl}/Controller/IHandler.ashx?mod=Member&parm=GetMember`,
    //请求方式： get


    //分类列表接口
    classlist: `${baseUrl}/Controller/IHandler.ashx?mod=Touring&parm=GetPage_CateTouring`,
    // 参数名 类型 说明
    // cateId int 一级分类Id
    // cateId2  int   二级分类Id
    // BRId int 商家Id
    // tname string 搜索名称


    //请求线路类型游客具体信息
    // 订单游客列表接口
    tourists_info: `${baseUrl}/Controller/IHandler.ashx?mod=Order&parm=GetPaper`,
    // 请求方式：post
    // 参数名	类型	  说明
    // Id      string     订单号
    // 返回字段说明：姓名-PaperName 身份证号-PaperNo 电话-Phone


    // 订单已购买保险列表的接口
    insurance_info: `${baseUrl}/Controller/IHandler.ashx?mod=Order&parm=GetOrderInsurance`,
    // 请求方式：get
    // 参数名	类型	  说明
    // Id      string     订单号
    // 返回字段说明：保险名-InsuranceName 保险价格-Price 说明-Explain


    //核销接口
    // 判断是否为核销员：
    verifier: `${baseUrl}/Controller/IHandler.ashx?mod=Order&parm=ExistsMember`,
    // 参数名：typeid (对应获取产品方法的typeid)   allID (对应获取产品方法的allID)

    // 核销：
    validation: `${baseUrl}/Controller/IHandler.ashx?mod=Order&parm=UpdateTicketStatus`,
    // 参数名：Id  (订单ID)   typeid (对应获取产品方法的typeid)   allID (对应获取产品方法的allID)


    //分销接口
    //判断用户是否是分销商
    isdistributors: `${baseUrl}/Controller/IHandler.ashx?mod=Distribute&parm=IsExist_BRM`,
    // 返回值success：
    // true表示已经存在该分销员,BRMId是分销员Id ，mId是用户的Id，
    // false表示不是分销员

    // 提交申请为分销商
    todistributors: `${baseUrl}/Controller/IHandler.ashx?mod=Distribute&parm=ApplyBRM`,
    // 请求方式：post
    // 参数名     类型	     说明
    // BRMId      string    会员Id
    // 返回值success：
    // true表示已经存在该分销员,BRMId是分销员Id ，mId是用户的Id
    // false表示失败，BRMId为0是，表示还没验证手机

    // 验证手机并申请为分销商
    bedistributors: `${baseUrl}/Controller/IHandler.ashx?mod=Distribute&parm=RegisterBRM`,
    // 请求方式：post
    // 参数名     类型	     说明
    // phone      string     手机号
    // BRId       int        商家Id
    // code       string     接受的验证码
    // BRMId      string     会员Id
    // 返回值success：
    // true表示已经存在该分销员,BRMId是分销员Id ，mId是用户的Id
    // false表示失败，重新获取验证码



    // 分销员基本信息及收益接口
    distributors_basic: `${baseUrl}/Controller/IHandler.ashx?mod=Member&parm=GetBRMMember`,
    // 参数名     类型	     说明
    // BRMId      int       会员Id(可指定获取相关分销员的信息)
    // 返回值data：
    // 总佣金金额：TotalAmount 
    // 可提现金额：LastAmount 
    // 待核算金额：CashAmount
    // 已经成功提现金额：SuccessAmount

    // 获取团队人数
    team_number: `${baseUrl}/Controller/IHandler.ashx?mod=Member&parm=GetBRMCount`,
    // 参数名     类型	     说明
    // BRMId       int     会员Id
    // 返回值success：
    // count,表示人数

    // 获取转发次数
    share_count: `${baseUrl}/Controller/IHandler.ashx?mod=Member&parm=GetShareCount`,
    // 参数名     类型	     说明
    // BRMId       int     会员Id
    // 返回值success：
    // count,表示转发次数

    // 获取累计访问
    visit_times: `${baseUrl}/Controller/IHandler.ashx?mod=Member&parm=GetVisitorCount`,
    // 参数名     类型	     说明
    // BRMId       int     会员Id
    // 返回值success：
    // count,表示转发次数  

    // 获取下单次数
    order_number: `${baseUrl}/Controller/IHandler.ashx?mod=Member&parm=GetOrderCount`,
    // 参数名     类型	     说明
    // BRMId       int     会员Id
    // 返回值success：
    // count,表示下单次数次数

    //分销员每天流量数据
    traffic: `${baseUrl}/Controller/IHandler.ashx?mod=Member&parm=GetBRMCountList`,
    // 参数名     类型	     说明
    // BRMId      int       会员Id
    // 日期：day 
    // 团队人数：BRMCount 
    // 转发次数：ShareCount
    // 访问量：VisCount
    // 订单数：OrderCount


    //收入明细数据
    check_detail: `${baseUrl}/Controller/IHandler.ashx?mod=Member&parm=GetMEOrderList`,
    // 参数名     类型	     说明
    // BRMId      int       会员Id（默认值5952有数据）



    //我的粉丝页面
    // 团队数据
    myfans: `${baseUrl}/Controller/IHandler.ashx?mod=Member&parm=GetPage_Member`,
    // 参数名     类型	     说明
    // BRMId      int       会员Id（默认值17991有数据）
    // Name       string    搜索标题(可为空搜索全部)


    // 收益明细页面-有效记录
    effective: `${baseUrl}/Controller/IHandler.ashx?mod=Distribute&parm=GetPage_Check`,
    // 参数名     类型	     说明
    // BRMId      int       会员Id（默认值17791有数据）
    // 返回说明
    // 收益类型：Mold  0 表示待核算订单 1:佣金收入,2：提现,3:退款修正,4：业绩奖励
    //0,1,3属于订单类型；2属于提现类型
    // 订单号（提现单号）：RelationNo

    // 订单名称：Title
    // 订单类型:TypeName
    // 订单金额：LastAmount
    // 佣金分成：Rate
    // 核算时间：AddTime

    // 到账号码：Account
    // 到账方式：Bank
    // 提现状态：Status
    // 0表示待审核，1提现中,2转账失败,3.已拒绝,4已完成
    // 凭证图片地址:Voucher
    // 申请时间：AddDate
    // 金额：CosAmount
    // 金额正负:CosMold 0表示负；1表示正
    // 余额：BalanAmount


    // 收益明细页面-其他（也包含了提现记录）
    other: `${baseUrl}/Controller/IHandler.ashx?mod=Distribute&parm=GetPage_Cash`,
    // 参数名     类型	   说明
    // BRMId      int     会员Id（默认值17791有数据）
    // Status     int     状态：-1表示其他记录，0表示待审核，1提现中,2转账失败,3.已拒绝,4已完成，5全部

    // 提现单号 ：RelationNo
    // 到账号码：Account
    // 到账方式：Bank
    // 提现状态：Status
    // 凭证图片地址:Voucher
    // 申请时间：AddDate
    // 金额：CosAmount
    // 金额正负:CosMold 0表示负；1表示正
    // 余额：BalanAmount


    // 收益明细页面-佣金记录
    commission: `${baseUrl}/Controller/IHandler.ashx?mod=Distribute&parm=GetPage_Order`,
    // 参数名     类型	     说明
    // BRMId      int       会员Id（默认值17791有数据）
    // Status      int      0 表示全部 1:佣金记录,2：退款修正

    // 收益类型：Mold  0 表示待核算订单 1:佣金收入,2：提现,3:退款修正,4：业绩奖励
    //0,1,3属于订单类型；2属于提现类型
    // 订单号（提现单号）：RelationNo

    // 订单名称：Title
    // 订单类型:TypeName
    // 订单金额：LastAmount
    // 佣金分成：Rate
    // 核算时间：AddTime

    // 金额：CosAmount
    // 金额正负:CosMold 0表示负；1表示正
    // 余额：BalanAmount


    // 提现接口
    withdrawal: `${baseUrl}/Controller/IHandler.ashx?mod=Percent&parm=Add_Cash`,
    // 参数名     类型	     说明
    // BRMId      string    会员Id
    // Mold       string    类型 0表示支付宝，1表银行
    // cardno     string    账号
    // cash       int       金额
    //pname      string     姓名
    //BRId        string    店铺ID

}