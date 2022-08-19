var e = wx.getExtConfigSync ? wx.getExtConfigSync() : {};

console.log(wx.getExtConfigSync()), e.base = e.base || "https://ck3497.yimeixinxijishu.com/", 
e.appid = e.appid || "wx0b208544ea48dbb7", e.secret = e.secret || "f11684ca57f8c7e1ded22efc07511cef", 
e.title = e.title || "我们的营养家", App({
    onLaunch: function() {
        this.globalData.userKey = wx.getStorageSync("userkey"), this.globalData.userInfo = wx.getStorageSync("userinfo");
        var e = wx.getStorageSync("logs") || [];
        e.unshift(Date.now()), wx.setStorageSync("logs", e);
        var t = this;
        wx.request({
            url: t.globalData.config.base + "Mobile/Api/index",
            method: "GET",
            header: {
                "content-type": "application"
            },
            success: function(e) {
                console.log(e, "显示"), "123456" != e.data.msg[0].value && (t.globalData.show = !0);
            }
        });
    },
    onShow: function() {
        var e = this;
        wx.checkSession({
            success: function() {
                "" != e.globalData.userKey && "" != e.globalData.userInfo || e.Login();
            },
            fail: function() {
                e.Login();
            }
        });
    },
    Login: function() {
        var e = this;
        wx.login({
            success: function(t) {
                var o = t.code;
                wx.getUserInfo({
                    success: function(t) {
                        var a = {
                            encryptData: t.encryptData,
                            encryptedData: t.encryptedData,
                            iv: t.iv,
                            rawData: t.rawData,
                            signature: t.signature,
                            code: o
                        };
                        wx.request({
                            url: e.globalData.config.base + "Mobile/Api/getuser",
                            method: "GET",
                            data: {
                                userData: JSON.stringify(a)
                            },
                            header: {
                                "content-type": "application"
                            },
                            success: function(o) {
                                wx.setStorageSync("userkey", o.data), wx.setStorageSync("userinfo", t), e.globalData.userKey = o.data, 
                                e.globalData.userInfo = t;
                            },
                            fail: function(e) {}
                        });
                    }
                });
            }
        });
    },
    globalData: {
        userInfo: null,
        userCode: null,
        userKey: null,
        linkType: {
            0: "../goods/goods",
            1: "../goodslist/goodslist",
            2: "../coupon/coupon",
            3: "../dateils/dateils",
            4: "../orderlist/orderlist",
            5: "../discount/discount",
            6: "../record/record",
            7: "../collectstore/collectstore",
            8: "../addressbook/addressbook",
            9: "../express/express",
            10: "../contact/contact",
            11: "../join/join",
            12: ""
        },
        config: e,
        show: !1
    }
});