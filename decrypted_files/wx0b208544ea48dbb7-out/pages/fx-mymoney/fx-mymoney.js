var a = getApp(), t = a.globalData.config.base;

Page({
    onShow: function() {
        console.log("fx-mymoney");
        var a = this;
        e.getBalance(a), a.setData({
            curTab: "bank"
        });
    },
    changeMoney: function(a) {
        var t = this, e = a.detail.value, s = t.data.submitObj || {};
        s.balance = e, t.setData({
            submitObj: s
        });
    },
    changeMobile: function(a) {
        var t = this, e = a.detail.value, s = t.data.submitObj || {};
        s.mobile = e, t.setData({
            submitObj: s
        });
    },
    changeName: function(a) {
        var t = this, e = a.detail.value, s = t.data.submitObj || {};
        s.cash_name = e, t.setData({
            submitObj: s
        });
    },
    changeTabInput: function(a) {
        var t = this, e = a.currentTarget.dataset.key, s = a.detail.value, n = t.data.submitObj || {};
        n[e] = s, t.setData({
            submitObj: n
        });
    },
    submit: function() {
        var a = this;
        e.submit(a);
    },
    changetab: function(a) {
        var t = this, e = a.currentTarget.dataset.key;
        t.setData({
            curTab: e
        });
    }
});

var e = {
    getBalance: function(e) {
        var s = a.globalData.userKey;
        wx.request({
            url: t + "/Mobile/UserApi/getdsalebalance?",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: s
            },
            success: function(a) {
                e.setData({
                    summary: a.data.data
                });
            }
        });
    },
    submit: function(s) {
        var n, u, c = a.globalData.userKey, i = s.data.submitObj, o = s.data.curTab;
        "bank" === o ? (n = 0, u = i[o + "count"]) : "wechat" === o ? (n = 1, u = i[o + "count"]) : "zhifubao" === o && (n = 2, 
        u = i[o + "count"]);
        var b = {
            cashtype: n,
            cash_user: u,
            cash_name: i.cash_name,
            balance: i.balance,
            userkey: c,
            mobile: i.mobile
        };
        wx.request({
            url: t + "/Mobile/UserApi/cashbalance?",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: b,
            success: function(a) {
                0 === a.data.error && (wx.showToast({
                    title: "提交申请成功",
                    icon: "success",
                    duration: 3e3,
                    success: function() {
                        setTimeout(function() {
                            wx.navigateBack({
                                url: "../user/user"
                            });
                        }, 2e3);
                    }
                }), e.getBalance(s));
            }
        });
    }
};