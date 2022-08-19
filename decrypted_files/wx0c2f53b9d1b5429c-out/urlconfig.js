var e = {
    README: {
        intro: "README 为此文件的格式说明，不会显示在小程序的链接组件中",
        url: "页面地址，如 /pages/index",
        name: "页面名称，如首页",
        isnav: "值为 true 或 false,当为 false 时，不会显示在小程序的链接组件中，为什么需要这样？因为产品详情页等，不应该出现在链接组件中，但系统又需要有相应的配置才能正常工作"
    },
    HomeIndex: {
        url: "/pages/shop/index",
        name: "首页"
    },
    UserCenter: {
        url: "/pages/company/mycenter",
        name: "用户中心"
    },
    ShopCart: {
        url: "/pages/shop/shopcart",
        name: "购物车"
    },
    ProductList: {
        url: "/pages/shop/productlist?classid=$id",
        name: "产品列表",
        isnav: !1
    },
    ProductDetail: {
        url: "/pages/shop/productdetail?id=$id",
        name: "产品详情",
        isnav: !1
    },
    mycoupon: {
        url: "/pages/company/mycoupon",
        name: "优惠券列表"
    },
    couponCenter: {
        url: "/pages/company/couponcenter",
        name: "领券中心"
    },
    recharge: {
        url: "/pages/shop/recharge",
        name: "会员充值"
    },
    OneKeyPhoneCall: {
        url: "/pages/OneKeyPhoneCall",
        name: "一键拨号"
    },
    OneKeyNav: {
        url: "/pages/OneKeyNav",
        name: "一键导航"
    }
};

try {
    module.exports = e;
} catch (e) {}