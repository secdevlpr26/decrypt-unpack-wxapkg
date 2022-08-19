var a = !0, e = getApp(), t = "", n = "", i = require("../../utils/wxParse/wxParse.js");

Page({
    data: {
        hiddenAgreement: !0,
        isRead: !1,
        price: 0,
        branchInfo: {}
    },
    onLoad: function() {
        var a = this;
        t = e.globalData.projectInfo, n = e.globalData.customizeTabId, a.getUserInfo(), 
        wx.request({
            url: e.globalData.comUrl + "tabs_getZXAgreement.action",
            data: {
                customizeTabId: n.Member
            },
            success: function(t) {
                var n = e.getJsonData(t.data);
                i.wxParse("content", "html", n.content, a, 10);
            }
        });
    },
    formSubmit: function(i) {
        if (this.data.price, a) {
            a = !1;
            var o = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, s = /^(\w){6,15}$/;
            if ("" == i.detail.value.branchName) return a = !0, void this.warn("请为您的店铺取一个名字!");
            if ("" == i.detail.value.mainProject) return a = !0, void this.warn("请填入您的主营的项目!");
            if ("" == i.detail.value.name) return a = !0, void this.warn("请填入您的姓名!");
            if ("" == i.detail.value.phone) return a = !0, void this.warn("请输入您的联系方式!");
            if ("" == i.detail.value.email) return a = !0, void this.warn("邮箱不能为空");
            if (!o.test(i.detail.value.email)) return a = !0, void this.warn("邮箱格式有误");
            if ("" == i.detail.value.pwd) return a = !0, void this.warn("请填写密码");
            if (!s.test(i.detail.value.pwd)) return a = !0, void this.warn("密码需由6-15个字母、数字组成");
            if (!this.data.isRead) return a = !0, void this.warn("请先阅读入驻申请协议");
            wx.showToast({
                title: "正在提交...",
                icon: "loading",
                duration: 1e4,
                mask: !0
            });
            var r = {
                appId: t.appId,
                applyCustomizeTabId: n.LynxApplyFor_About_Merchant,
                customizetabId: n.LynxAbout_Merchant,
                memberId: e.getMemberId(),
                branchName: i.detail.value.branchName,
                mainProject: i.detail.value.mainProject,
                surname: i.detail.value.name,
                mobilePhone: i.detail.value.phone,
                email: i.detail.value.email,
                password: i.detail.value.pwd,
                shortDescription: i.detail.value.shortDescription
            }, c = this;
            wx.request({
                url: e.globalData.comUrl + "member_branchApply.action",
                data: r,
                success: function(a) {
                    var t = e.getJsonData(a.data);
                    1 == t.status && (0 == t.price ? wx.showToast({
                        title: "提交成功",
                        icon: "success",
                        duration: 2e3,
                        success: function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }
                    }) : (c.pay(t.price), c.setData({
                        price: t.price
                    })));
                },
                fail: function() {
                    e.hint("提交失败"), wx.hideToast();
                },
                complete: function() {
                    a = !0;
                }
            });
        }
    },
    pay: function(a) {
        var n = this;
        wx.login({
            success: function(i) {
                i.code && wx.request({
                    url: e.globalData.paymentUrl + "/WechatAlipay/MiniPayService2?jsoncallback=?",
                    data: {
                        projectId: t.appId,
                        nonce_str: "lfksf" + Math.round(1e5 * Math.random()),
                        memberId: e.getMemberId(),
                        body: "入驻商家",
                        attach: t.appId,
                        out_trade_no: "",
                        total_fee: (100 * a).toFixed(0),
                        trade_type: "JSAPI",
                        device_info: "888",
                        code: i.code
                    },
                    success: function(a) {
                        if (wx.hideToast(), "" != a.data) {
                            var e = n.getJsonData(a.data);
                            wx.requestPayment({
                                timeStamp: e.timeStamp,
                                nonceStr: e.nonceStr,
                                package: "prepay_id=" + e.prepay_id,
                                signType: "MD5",
                                paySign: e.sign,
                                success: function(a) {
                                    wx.showToast({
                                        title: "支付成功",
                                        icon: "success",
                                        duration: 2e3,
                                        mask: !0
                                    }), setTimeout(function() {
                                        wx.navigateBack({
                                            delta: 1
                                        });
                                    }, 2e3);
                                },
                                fail: function(a) {
                                    wx.showModal({
                                        title: "支付失败",
                                        showCancel: !1
                                    });
                                }
                            });
                        } else wx.showModal({
                            title: "支付失败",
                            showCancel: !1
                        });
                    }
                });
            }
        });
    },
    getUserInfo: function() {
        var a = this;
        wx.request({
            url: e.globalData.comUrl + "tabs_getMember.action",
            data: {
                memberId: e.getMemberId(),
                customizetabId: n.LynxApplyFor_About_Merchant,
                checkBranch: 1
            },
            success: function(t) {
                var n = e.getJsonData(t.data);
                n.activated ? wx.showModal({
                    title: "提示",
                    content: "商家入驻认证成功",
                    showCancel: !1,
                    success: function(a) {
                        a.confirm && wx.navigateBack({
                            delta: 1
                        });
                    }
                }) : (1 == n.isApply && wx.showModal({
                    title: "提示",
                    content: "正在申请中...",
                    showCancel: !1,
                    success: function(a) {
                        a.confirm && wx.navigateBack({
                            delta: 1
                        });
                    }
                }), 2 == n.isApply && (a.data.branchInfo.branchName = n.branchName, a.data.branchInfo.mainProject = n.mainProject, 
                a.data.branchInfo.shortDescription = n.shortDescription, a.data.branchInfo.surname = n.surname, 
                a.data.branchInfo.mobilePhone = n.mobilePhone, a.data.branchInfo.email = n.email, 
                a.data.branchInfo.password = n.password, a.setData({
                    branchInfo: a.data.branchInfo
                }), wx.showModal({
                    title: "提示",
                    content: "您已提交过申请，暂未支付",
                    confirmText: "继续支付",
                    cancelText: "重新申请",
                    success: function(e) {
                        e.confirm && a.pay(n.price);
                    }
                })));
            },
            fail: function() {
                e.hint();
            }
        });
    },
    showAgreement: function() {
        this.setData({
            hiddenAgreement: !this.data.hiddenAgreement
        });
    },
    suretap: function() {
        this.setData({
            isRead: !0,
            hiddenAgreement: !0
        });
    },
    check: function() {
        this.setData({
            isRead: !this.data.isRead
        });
    },
    getJsonData: function(a) {
        return JSON.parse(a.substring(1, a.length - 1));
    },
    warn: function(a) {
        wx.showModal({
            title: "提示",
            content: a,
            showCancel: !1
        });
    }
});