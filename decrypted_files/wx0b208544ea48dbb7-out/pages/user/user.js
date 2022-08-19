var n = getApp(), o = n.globalData.config.base;

Page({
    data: {
        menu_list: [ {
            id: "mySale",
            name: "我的分销",
            open: !0,
            icon: "./icons/fx.png",
            pages: [ {
                title: "我的佣金",
                icon: "./icons/brokerage.png",
                url: "fx-mymoney"
            }, {
                title: "我的消费记录",
                icon: "./icons/consume.png",
                url: "fx-consumeList"
            }, {
                title: "我的提现记录",
                icon: "./icons/tixian.png",
                url: "fx-cashlist"
            }, {
                title: "我的下级分销商",
                icon: "./icons/junior.png",
                url: "fx-downgrade"
            }, {
                title: "我的分销",
                icon: "./icons/share.png",
                url: "beagent"
            }, {
                title: "我的商城订单",
                icon: "./icons/order_01.png",
                url: "fx-shoporder"
            } ]
        }, {
            id: "myMall",
            name: "我的商城",
            open: !1,
            icon: "./icons/sc.png",
            pages: [ {
                title: "我的商城首页",
                icon: "./icons/page.png",
                url: "index"
            }, {
                title: "我的收藏",
                icon: "./icons/collect_01.png",
                url: "record"
            }, {
                title: "管理我的收货地址",
                icon: "./icons/address.png",
                url: "addressbook"
            }, {
                title: "关于我们",
                icon: "./icons/weguan.png",
                url: "contact"
            }, {
                title: "售后服务",
                icon: "./icons/record.png",
                url: "express"
            } ]
        }, {
            id: "shop",
            name: "店铺",
            open: !1,
            icon: "./icons/shop.png",
            pages: [ {
                title: "所有店铺列表",
                icon: "./icons/join.png",
                url: "store"
            }, {
                title: "申请店铺入驻",
                icon: "./icons/junior.png",
                url: "join"
            }, {
                title: "我收藏的店铺",
                icon: "./icons/collect.png",
                url: "collectstore"
            } ]
        } ]
    },
    onShareAppMessage: function() {
        return {
            title: n.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    onLoad: function(o) {
        this.setData({
            "menu_list[0].show": n.globalData.show,
            "menu_list[1].show": !0,
            "menu_list[0].open": n.globalData.show,
            "menu_list[1].open": !n.globalData.show,
            "menu_list[2].show": n.globalData.show
        }), console.log("menu_list", this.data.menu_list);
    },
    widgetsToggle: function(n) {
        for (var o = n.currentTarget.id, t = this.data.menu_list, e = 0, i = t.length; e < i; ++e) t[e].id == o ? t[e].open = !t[e].open : t[e].open = !1;
        this.setData({
            menu_list: t
        });
    },
    jump: function(n) {
        var o = n.currentTarget.dataset.url;
        console.log(o), "index" == o ? wx.switchTab({
            url: "../" + o + "/" + o
        }) : wx.navigateTo({
            url: "../" + o + "/" + o
        });
    },
    onReady: function() {
        var o = n.globalData.userInfo;
        this.setData({
            userInfo: {
                avatar: o.userInfo.avatarUrl,
                name: o.userInfo.nickName
            }
        });
    },
    onShow: function() {
        this.getOrderNum();
    },
    onHide: function() {},
    onUnload: function() {},
    toAftersale: function() {
        wx.navigateTo({
            url: "../aftersalelist/aftersalelist"
        });
    },
    toExpress: function() {
        wx.navigateTo({
            url: "../express/express"
        });
    },
    toAddressBook: function() {
        wx.navigateTo({
            url: "../addressbook/addressbook"
        });
    },
    toRecord: function() {
        wx.navigateTo({
            url: "../record/record"
        });
    },
    toOrderList: function(n) {
        var o = n.currentTarget.dataset.type;
        wx.navigateTo({
            url: "../orderlist/orderlist?type=" + o
        });
    },
    onContactTap: function() {
        wx.navigateTo({
            url: "../contact/contact"
        });
    },
    ondraw: function() {
        wx.navigateTo({
            url: "../discount/discount"
        });
    },
    onserver: function() {
        wx.navigateTo({
            url: "../service/service"
        });
    },
    toJoin: function() {
        wx.navigateTo({
            url: "../join/join"
        });
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    getOrderNum: function() {
        var t = this, e = n.globalData.userKey;
        wx.request({
            url: o + "Mobile/UserApi/order_status",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: e
            },
            success: function(n) {
                if (0 == n.data.error) {
                    var o = n.data.data;
                    t.setData({
                        daifukuanNum: o.WAITPAY,
                        daifahuoNum: o.WAITSEND,
                        daishouhuoNum: o.WAITRECEIVE,
                        daipingjiaNum: o.WAITCCOMMENT,
                        shouhouNum: o.back
                    });
                }
            }
        });
    }
});