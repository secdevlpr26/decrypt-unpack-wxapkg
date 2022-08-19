var t, e = require("../../../comm/script/fetch"), i = require("../../../util/util"), n = (require("../../../util/jwt"), 
require("../../../component/message/message.js")), o = require("../../../utils/server");

Page({
    data: {
        isShow: !1,
        fromInfo: !1,
        ticketList: [],
        planId: "",
        cityId: "",
        curId: "",
        inputCode: "",
        curTicket: ""
    },
    onLoad: function(e) {
        wx.showLoading({
            title: "加载数据中"
        }), t = e, this.myCouponList(e);
    },
    onReady: function() {},
    onShow: function() {},
    itemBind: function(t) {
        var e = t.currentTarget.dataset;
        e.id != this.data.curId ? this.setData({
            curTicket: e,
            curId: e.id
        }) : this.setData({
            curTicket: {},
            curId: ""
        });
    },
    inputBind: function(t) {
        console.log(t);
        var e = t.detail.value;
        this.setData({
            inputCode: e
        });
    },
    addTicket: function(e) {
        var i = this, a = this.data.inputCode, s = getApp(), c = this;
        o.getJSON("/User/getCoupon", {
            user_id: s.globalData.userInfo.user_id,
            code: a
        }, function(e) {
            "400" != e.data.code ? c.myCouponList(t) : n.show.call(i, {
                content: e.data.msg,
                icon: "tip"
            });
        }), (void 0 == a || a.length < 1) && n.show.call(i, {
            content: "请输入兑换码",
            icon: "tip"
        });
    },
    formatTime: function(t) {
        t.map(function(t, e, n) {
            t.start_time = i.formatDate_imprecise(t.start_time), t.end_time = i.formatDate_imprecise(t.end_time);
        }), this.setData({
            ticketList: t,
            isShow: !0
        }), wx.hideLoading();
    },
    setSelectTicket: function() {
        var t = this;
        if (i.isEmpty(this.data.curTicket)) n.show.call(t, {
            content: "请选则您想使用的优惠券",
            icon: "tip"
        }); else {
            var e = getCurrentPages(), o = e[e.length - 2];
            "function" == typeof o.setTicket && (o.setTicket(this.data.curTicket), wx.navigateBack());
        }
    },
    getRepairCoupon: function() {
        var t = this;
        e.getRepairCoupon(this.data.planId, this.data.cityId, function(e) {
            t.formatRepairList(e);
        }, function() {
            wx.hideLoading(), n.show.call(t, {
                content: "获取数据失败",
                icon: "tip"
            });
        });
    },
    getTime: function(t) {
        if (console.log(t), t) {
            var e = t.getYear() + 1900, i = t.getMonth() + 1, n = t.getDate(), o = t.getHours(), a = t.getMinutes(), s = t.getSeconds();
            return e + "-" + this.bl(i) + "-" + this.bl(n) + " " + this.bl(o) + ":" + this.bl(a) + ":" + this.bl(s);
        }
        var e = (t = new Date()).getYear() + 1900, i = t.getMonth() + 1, n = t.getDate(), o = t.getHours(), a = t.getMinutes(), s = t.getSeconds();
        return e + "-" + this.bl(i) + "-" + this.bl(n) + " " + this.bl(o) + ":" + this.bl(a) + ":" + this.bl(s);
    },
    bl: function(t) {
        return t < 10 ? "0" + t : t;
    },
    select: function(t) {
        var e = t.currentTarget.dataset.index, i = this.data.listArr[e];
        wx.setStorage({
            key: "coupon",
            data: i
        }), wx.navigateBack({});
    },
    myCouponList: function(t) {
        var e = this, i = 0;
        t.price && (i = t.price);
        var n = getApp();
        o.getJSON("/User/getCouponList", {
            user_id: n.globalData.userInfo.user_id,
            price: i
        }, function(t) {
            if (wx.hideLoading(), console.log(t), 1 == t.data.status) {
                var i = t.data.result;
                if (e.setData({
                    isShow: !0
                }), i.length) {
                    for (var n = 0; n < i.length; n++) i[n].useEndTime = e.getTime(new Date(1e3 * parseInt(i[n].useEndTime))), 
                    i[n].money = parseInt(i[n].money);
                    e.setData({
                        listArr: i
                    });
                } else wx.showModal({
                    title: "提示",
                    content: "没有可使用优惠券",
                    showCancel: !1,
                    success: function(t) {
                        t.confirm;
                    }
                });
            } else wx.showModal({
                title: "提示",
                content: t.data.error_msg,
                showCancel: !1,
                success: function(t) {
                    t.confirm && console.log("用户点击确定");
                }
            });
        });
    },
    formatRepairList: function(t) {
        t.map(function(t, e, n) {
            t.start_time = i.formatDate_imprecise(t.start_time), t.end_time = i.formatDate_imprecise(t.end_time), 
            1 == t.type && (t.coupon_project = 10 * t.coupon_project);
        }), this.setData({
            ticketList: t,
            isShow: !0
        }), wx.hideLoading();
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});