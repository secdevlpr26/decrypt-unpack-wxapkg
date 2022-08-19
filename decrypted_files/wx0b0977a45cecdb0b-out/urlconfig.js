var e = {
    README: {
        intro: "README 为此文件的格式说明，不会显示在小程序的链接组件中",
        url: "页面地址，如 /pages/index",
        name: "页面名称，如首页",
        isnav: "值为 true 或 false,当为 false 时，不会显示在小程序的链接组件中，为什么需要这样？因为产品详情页等，不应该出现在链接组件中，但系统又需要有相应的配置才能正常工作"
    },
    HomeIndex: {
        url: "/pages/company/index",
        name: "首页"
    },
    UserCenter: {
        url: "/pages/company/mycenter",
        name: "用户中心"
    },
    AboutUs: {
        url: "/pages/company/about",
        name: "关于我们"
    },
    "reserve-by-product": {
        url: "/pages/company/reserve-by-product?productid=$id",
        name: "预约表单",
        isnav: !1
    },
    ProductList: {
        url: "/pages/company/productlist?classid=$id",
        name: "产品列表"
    },
    ProductDetail: {
        url: "/pages/company/productdetail?id=$id",
        name: "产品详情",
        isnav: !1
    },
    PersonList: {
        url: "/pages/company/personlist",
        name: "老师"
    },
    myreserve: {
        url: "/pages/company/myreserve",
        name: "我的预约",
        isnav: !1
    },
    NewsList: {
        url: "/pages/company/newslist",
        name: "文章列表"
    },
    NewsDetail: {
        url: "/pages/company/newsdetail?id=$id",
        name: "文章详情",
        isnav: !1
    },
    mycoupon: {
        url: "/pages/company/mycoupon",
        name: "优惠券列表"
    },
    noticedetail: {
        url: "/pages/company/noticedetail",
        name: "公告详情",
        isnav: !1
    },
    OneKeyPhoneCall: {
        url: "/pages/OneKeyPhoneCall",
        name: "一键拨号"
    },
    OneKeyNav: {
        url: "/pages/OneKeyNav",
        name: "一键导航"
    },
    CustomPage: {
        url: "/pages/company/custompage?id=$id",
        name: "自定义页",
        isnav: !1
    }
};

try {
    module.exports = e;
} catch (e) {}