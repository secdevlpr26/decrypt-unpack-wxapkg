var t, e, a = getApp();

Page({
    data: {
        currentTab: 0,
        mobile: "",
        money: "",
        userinfo: "",
        allmoney: ""
    },
    onLoad: function(i) {
        t = this, e = wx.getStorageSync("mobile"), wx.request({
            url: a.data.lost + "/index/userinfo",
            method: "GET",
            dataType: "html",
            data: {
                mobile: e
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                var a = JSON.parse(e.data);
                0 == a.userinfo.certification ? t.setData({
                    certification: "未认证"
                }) : 1 == a.userinfo.certification ? t.setData({
                    certification: "已认证"
                }) : -1 == a.userinfo.certification && t.setData({
                    certification: "待审核"
                }), t.setData({
                    money: a.money,
                    mobile: a.userinfo.mobile,
                    userinfo: a.userinfo
                });
            }
        });
    },
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), wx.request({
            url: a.data.lost + "/index/userinfo",
            method: "GET",
            dataType: "html",
            data: {
                mobile: wx.getStorageSync("mobile")
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                var a = JSON.parse(e.data);
                0 == a.userinfo.certification ? t.setData({
                    certification: "未认证"
                }) : 1 == a.userinfo.certification ? t.setData({
                    certification: "已认证"
                }) : -1 == a.userinfo.certification && t.setData({
                    certification: "待审核"
                }), t.setData({
                    money: a.money,
                    mobile: a.userinfo.mobile,
                    userinfo: a.userinfo
                }), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    onShow: function() {
        this.onLoad();
    },
    formSubmit: function(e) {
        var i;
        if ("" == e.detail.value.number) return wx.showToast({
            title: "请输入提现金额",
            icon: "none",
            duration: 1e3
        }), !1;
        if (!/^\d+$/.test(e.detail.value.number)) return wx.showToast({
            title: "请输入整数",
            icon: "none",
            duration: 1e3
        }), !1;
        if (e.detail.value.number > t.data.money) return wx.showToast({
            title: "提现金额超出",
            icon: "none",
            duration: 1e3
        }), !1;
        if ("0" == t.data.currentTab) {
            if (i = 1, "" == e.detail.value.bank_name) return wx.showToast({
                title: "请输入银行卡姓名",
                icon: "none",
                duration: 1e3
            }), !1;
            if ("" == e.detail.value.bank_account) return wx.showToast({
                title: "请输入卡号",
                icon: "none",
                duration: 1e3
            }), !1;
            if ("" == e.detail.value.bank_addr) return wx.showToast({
                title: "请输入开户行地址",
                icon: "none",
                duration: 1e3
            }), !1;
        } else if (i = 2, "" == e.detail.value.alipay) return wx.showToast({
            title: "请输入支付宝账号",
            icon: "none",
            duration: 1e3
        }), !1;
        e.detail.value.type = i, e.detail.value.jy_user_id = wx.getStorageSync("jy_user_id"), 
        wx.request({
            url: a.data.lost + "/index/withform",
            method: "POST",
            dataType: "html",
            data: e.detail.value,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                "1" == t.data ? (wx.showToast({
                    title: "提交成功",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.switchTab({
                        url: "../info/info"
                    });
                }, 2e3)) : wx.showToast({
                    title: "提交失败",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    all: function(e) {
        t.setData({
            allmoney: t.data.money
        });
    },
    swiperTab: function(t) {
        this.setData({
            currentTba: t.detail.current
        });
    },
    clickTab: function(t) {
        var e = this;
        if (this.data.currentTab === t.target.dataset.current) return !1;
        e.setData({
            currentTab: t.target.dataset.current
        });
    },
    onQuestion: function(t) {
        wx.navigateTo({
            url: "../question/question"
        });
    },
    stopTouchMove: function() {
        return !1;
    }
});