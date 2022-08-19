var t = getApp(), n = t.globalData.config.base;

Page({
    data: {
        isShow: !1,
        etitInfo: {
            shop: "",
            info: "",
            name: "",
            phone: ""
        },
        canScroll: !0,
        classList: [],
        typeIndex: 0,
        isConsent: !0
    },
    onLoad: function(t) {
        var n = this;
        wx.getSystemInfo({
            success: function(t) {
                n.setData({
                    clientHeight: t.windowHeight
                });
            }
        });
    },
    onReady: function() {
        this.getClass();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: t.globalData.config.title,
            path: "/pages/join/join",
            success: function(t) {},
            fail: function(t) {}
        };
    },
    switchConsent: function() {
        var t = this.data.isConsent;
        this.setData({
            isConsent: !t
        });
    },
    agreementShow: function() {
        console.log("1"), this.setData({
            isShow: !0
        });
    },
    agreementHide: function() {
        this.setData({
            isShow: !1
        });
    },
    getClass: function() {
        var t = this;
        wx.request({
            url: n + "Mobile/Api/getshopClass",
            method: "GET",
            header: {
                "content-type": "application"
            },
            success: function(n) {
                t.setData({
                    classList: n.data.data
                });
            }
        });
    },
    choiceType: function(t) {
        var n = t.detail.value;
        this.setData({
            typeIndex: n
        });
    },
    editAddinfo: function(t) {
        var n = t.currentTarget.dataset.type, e = this.data.etitInfo, s = t.detail.value;
        e[n] = s, this.setData({
            etitInfo: e
        });
    },
    submit: function() {
        var t = /^1(3|4|5|7|8)\d{9}$/, e = this.data.etitInfo.shop, s = this.data.classList[this.data.typeIndex].id, o = this.data.etitInfo.info, a = this.data.etitInfo.name, i = this.data.etitInfo.phone, c = this.data.isConsent;
        console.log("============数据", c), c ? e && s && o && a && t.test(i) ? wx.request({
            url: n + "Mobile/Api/addStoreApply",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                act: "add",
                shop_name: e,
                shop_class: s,
                shop_contact: a,
                shop_mobile: i,
                shop_desc: o
            },
            success: function(t) {
                "添加成功" != t.data.data && 0 != t.data.error || wx.showToast({
                    title: "申请成功",
                    icon: "success",
                    duration: 3e3,
                    success: function() {
                        setTimeout(function() {
                            wx.navigateBack({
                                url: "../user/user?consent=isConsent"
                            });
                        }, 2e3);
                    }
                });
            }
        }) : wx.showModal({
            title: "提示",
            content: "输入的信息有误",
            showCancel: !1,
            success: function(t) {}
        }) : wx.showModal({
            title: "提示",
            content: "请同意申请协议",
            showCancel: !1,
            success: function(t) {}
        });
    }
});