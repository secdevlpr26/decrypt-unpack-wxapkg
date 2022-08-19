var e = require("../../../utils/util.js"), t = getApp();

Page({
    data: {
        appList: {}
    },
    scanCode: function() {
        wx.scanCode({
            onlyFromCamera: !1,
            success: function(e) {},
            fail: function() {},
            complete: function() {}
        });
    },
    getUserInfo: function(i) {
        var n = this;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=my",
            header: {
                Cookie: t.globalData.session_login_id
            },
            success: function(t) {
                if (1 == t.data.status) {
                    var a = t.data.result.user;
                    a.money = t.data.result.money, a.weidu_num = t.data.result.weidu_num, a.vip_endtime = e.timestampToLast(1e3 * a.vip_endtime), 
                    n.setData({
                        userInfo: t.data.result.user
                    }), i && i();
                }
            }
        });
    },
    setApplist: function() {
        var e = this.data.userInfo.uid, t = [ {
            categoryTitle: "个人中心",
            itemList: [ {
                itemTitle: "我的主页",
                itemIcon: "/images/tongcheng/mine/my-home.png",
                itemUrl: "/pages/index/user-detail/user-detail?tab=0&uid=" + e
            }, {
                itemTitle: "我的资料",
                itemIcon: "/images/tongcheng/mine/my-data.png",
                itemUrl: "/pages/mine/info/info"
            }, {
                itemTitle: "我的订单",
                itemIcon: "/images/tongcheng/mine/my-order.png",
                itemUrl: "/pages/mine/order/order"
            }, {
                itemTitle: "资金明细",
                itemIcon: "/images/tongcheng/mine/fund-details.png",
                itemUrl: "/pages/mine/fund-details/fund-details"
            } ]
        }, {
            categoryTitle: "同城信息",
            itemList: [ {
                itemTitle: "附近信息",
                itemIcon: "/images/tongcheng/mine/around-info.png",
                itemUrl: "/pages/index/index",
                itemType: "switchTab"
            }, {
                itemTitle: "发布信息",
                itemIcon: "/images/tongcheng/mine/release-info.png",
                itemUrl: "/pages/template-cart/template-sort/template-sort?type=1"
            }, {
                itemTitle: "收藏信息",
                itemIcon: "/images/tongcheng/mine/follow-info.png",
                itemUrl: "/pages/mine/favorites/favorites?tab=0"
            }, {
                itemTitle: "我的信息",
                itemIcon: "/images/tongcheng/mine/my-info.png",
                itemUrl: "/pages/mine/mine-info/mine-info"
            } ]
        }, {
            categoryTitle: "同城好店",
            itemList: [ {
                itemTitle: "附近店铺",
                itemIcon: "/images/tongcheng/mine/around-shop.png",
                itemUrl: "/pages/merch/merch",
                itemType: "switchTab"
            }, {
                itemTitle: "店铺入驻",
                itemIcon: "/images/tongcheng/mine/release-shop.png",
                itemUrl: "/pages/template-cart/template-sort/template-sort?type=2"
            }, {
                itemTitle: "关注店铺",
                itemIcon: "/images/tongcheng/mine/follow-shop.png",
                itemUrl: "/pages/mine/favorites/favorites?tab=1"
            }, {
                itemTitle: "我的店铺",
                itemIcon: "/images/tongcheng/mine/my-shop.png",
                itemUrl: "/pages/mine/mine-shop/mine-shop"
            } ]
        }, {
            categoryTitle: "抢红包",
            itemList: [ {
                itemTitle: "附近红包",
                itemIcon: "/images/tongcheng/mine/around-red-packets.png",
                itemUrl: "/pages/packet/packet",
                itemType: "switchTab"
            }, {
                itemTitle: "撒红包",
                itemIcon: "/images/tongcheng/mine/release-red-packets.png",
                itemUrl: "/pages/packet/release/release"
            }, {
                itemTitle: "我的红包",
                itemIcon: "/images/tongcheng/mine/my-red-packets.png",
                itemUrl: "/pages/index/user-detail/user-detail?tab=2&uid=" + e
            } ]
        }, {
            categoryTitle: "同城动态",
            itemList: [ {
                itemTitle: "附近说说",
                itemIcon: "/images/tongcheng/mine/around-talk.png",
                itemUrl: "/pages/nearby/index/index",
                itemType: "switchTab"
            }, {
                itemTitle: "发布说说",
                itemIcon: "/images/tongcheng/mine/release-talk.png",
                itemUrl: "/pages/nearby/release/release"
            }, {
                itemTitle: "我的说说",
                itemIcon: "/images/tongcheng/mine/my-talk.png",
                itemUrl: "/pages/index/user-detail/user-detail?tab=3&uid=" + e
            } ]
        }, {
            categoryTitle: "系统设置",
            itemList: [ {
                itemTitle: "升级VIP",
                itemIcon: "/images/tongcheng/mine/vip.png",
                itemUrl: "/pages/mine/vip/vip"
            }, {
                itemTitle: "分销二维码",
                itemIcon: "/images/tongcheng/mine/dist-qr.png",
                itemUrl: "/pages/mine/dist-qr/dist-qr"
            }, {
                itemTitle: "分销业绩",
                itemIcon: "/images/tongcheng/mine/dist-perf.png",
                itemUrl: "/pages/mine/dist-perf/dist-perf"
            }, {
                itemTitle: "发布须知",
                itemIcon: "/images/tongcheng/mine/notice.png",
                itemUrl: "/pages/mine/send-notice/send-notice"
            }, {
                itemTitle: "关于我们",
                itemIcon: "/images/tongcheng/mine/my-info.png",
                itemUrl: "/pages/mine/about/about"
            } ]
        } ];
        this.setData({
            appList: t
        });
    },
    withdrawals: function() {
        wx.showModal({
            title: "余额提现",
            content: "余额提现将在24小时内完成，请您耐心等待，余额将提现至您的微信号或支付宝账号中，请确认填写正确",
            success: function(e) {
                e.confirm && wx.request({
                    url: t.globalData.url + t.globalData.parameter + "&do=get_tixian",
                    method: "POST",
                    header: {
                        Cookie: t.globalData.session_login_id,
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        wx.showModal({
                            title: "提示",
                            content: e.data.result.message,
                            showCancel: !1
                        });
                    }
                });
            }
        });
    },
    onLoad: function(e) {},
    onReady: function() {},
    onShow: function() {
        var e = this;
        this.getUserInfo(function() {
            e.setApplist();
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});