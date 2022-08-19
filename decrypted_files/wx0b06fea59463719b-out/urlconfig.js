var a = {
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
    AboutUs: {
        url: "/pages/company/about",
        name: "关于我们"
    },
    CaseList: {
        url: "/pages/company/caselist",
        name: "案例列表"
    },
    CaseDetail: {
        url: "/pages/company/casedetail?id=$id",
        name: "案例详情",
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
    NewsList: {
        url: "/pages/company/newslist?classid=$id",
        name: "文章列表"
    },
    NewsDetail: {
        url: "/pages/company/newsdetail?id=$id",
        name: "文章详情",
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
    },
    CardDetails: {
        url: "/pages/company/businessCard/workbench?BusinessCardID=$businessCardID",
        name: "名片详情",
        isnav: !1
    },
    NormalCardDetails: {
        url: "/pages/company/businessCard/cardDetails?BusinessCardID=$businessCardID",
        name: "名片详情",
        isnav: !1
    },
    EditCard: {
        url: "/pages/company/businessCard/editCard",
        name: "名片编辑",
        isnav: !1
    },
    CardCase: {
        url: "/pages/company/businessCard/cardcase",
        name: "名片夹",
        isnav: !1
    },
    accessRecord: {
        url: "/pages/company/businessCard/accessRecord",
        name: "浏览记录",
        isnav: !1
    },
    shareCard: {
        url: "/pages/company/businessCard/shareCard",
        name: "分享海报",
        isnav: !1
    },
    upload: {
        url: "/pages/company/businessCard/upload",
        name: "图片裁剪",
        isnav: !1
    }
};

try {
    module.exports = a;
} catch (a) {}