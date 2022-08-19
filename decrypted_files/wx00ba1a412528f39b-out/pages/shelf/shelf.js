getApp();

var i = require("../../utils/api/cgi.js"), t = require("../../utils/utils.js");

Page({
    data: {
        shelfid: "",
        module_infos: [],
        gift_info: {},
        banner: "",
        status: 1,
        name: "",
        nickname: "",
        showOnlyEid5: !1,
        errMsg: "",
        errDetail: ""
    },
    onLoad: function(i) {
        var t = "";
        try {
            i.shelfid ? (t = i.shelfid, wx.setStorage({
                key: "shelfid",
                data: t
            })) : t = wx.getStorageSync("shelfid") || "";
        } catch (i) {}
        console.log("shelfid:", t), this.setData({
            options: i,
            shelfid: t
        }), this.loadList();
    },
    reloadHanlder: function() {
        this.loadList();
    },
    loadList: function() {
        var t = this, e = this.data.shelfid ? "?shelf_id=" + this.data.shelfid : "";
        this.setData({
            status: 1
        }), console.log("load param: " + e), i.get({
            url: "/bizmall/wxopen_mallshelf" + e,
            hideLoading: !0,
            success: function(i) {
                console.log(i);
                var e = i.shelf_info, a = e.module_infos, s = !1, n = null, o = {};
                a.forEach(function(i) {
                    1 == i.eid ? i.group_info.product_list.forEach(function(i) {
                        i.base_attr.low_priceStr = (i.base_attr.low_price / 100).toFixed(2), i.base_attr.ori_priceStr = (i.base_attr.ori_price / 100).toFixed(2);
                    }) : 5 == i.eid ? (s = !0, n = i) : 8 == i.eid && (o = i.gift_info, console.log("礼品卡：", o));
                }), s && (a = [ n ]), t.setData({
                    status: 2,
                    module_infos: a,
                    showOnlyEid5: s,
                    banner: e.banner,
                    name: e.name,
                    nickname: i.nickname,
                    imgUrl: i.imgUrl,
                    gift_info: o
                });
            },
            fail: function(i) {
                var e = "加载失败", a = "";
                i && i.base_resp ? -13 == i.base_resp.ret ? e = "该小店没有已发布货架" : a = i.base_resp.ret : a = "Resp empty", 
                t.setData({
                    status: 4,
                    errMsg: e,
                    errDetail: a
                });
            },
            error: function(i) {
                t.setData({
                    status: 3,
                    errMsg: "网络错误",
                    errDetail: !!i && i.errMsg || ""
                });
            }
        });
    },
    onShareAppMessage: function() {
        var i = this.data.shelfid ? "?shelf_id=" + this.data.shelfid : "";
        return {
            title: this.data.name || "小店",
            path: "/pages/shelf/shelf" + i,
            success: function(i) {},
            fail: function(i) {}
        };
    },
    goGiftCard: function() {
        wx.navigateToMiniProgram ? wx.navigateToMiniProgram({
            appId: this.data.gift_info.appid,
            path: "/pages/index/index?appid=" + this.data.gift_info.appid + "&page_id=" + this.data.gift_info.page_id,
            success: function(i) {
                console.log("打开礼品卡成功", i);
            },
            fail: function() {
                t.alert("打开礼品卡失败。");
            }
        }) : t.alert("您当前的微信客户端版本不支持打开礼品卡，请升级微信到最新版本。");
    }
});