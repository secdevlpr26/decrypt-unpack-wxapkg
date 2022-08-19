var e = getApp();

Component({
    properties: {
        grid: {
            type: Number,
            value: 5,
            observer: function(e, a) {}
        },
        barData: {
            type: Object,
            value: [ {
                icon: "../../images/tab-bar/icon-home.png",
                iconSel: "../../images/tab-bar/icon-home-sel.png",
                text: "首页",
                path: "/pages/home/home"
            }, {
                icon: "../../images/tab-bar/icon-sale.png",
                iconSel: "../../images/tab-bar/icon-sale-sel.png",
                text: "下单",
                path: "/pages/order/order"
            }, {
                icon: "../../images/tab-bar/icon-member.png",
                iconSel: "../../images/tab-bar/icon-member-sel.png",
                text: "我的",
                path: "/pages/member/member"
            } ],
            observer: function(e, a) {}
        }
    },
    data: {
        grid: 5,
        route: "",
        isIpx: e.globalData.isIpx
    },
    ready: function() {
        var e = getCurrentPages();
        this.setData({
            route: "/" + e[e.length - 1].route
        });
    }
});