var t = getApp(), a = "";

Page({
    data: {
        iconPath: "",
        nickName: "",
        styleConfig: t.globalData.styleConfig,
        detail: "",
        hideLogin: !1,
        disType: 0,
        mobilePhone: "",
        check: !1,
        amount: 0,
        QRCodeImage: "",
        hideQRCode: !0,
        isLoading: !0,
        activated: "",
        operationType: ""
    },
    onLoad: function(e) {
        a = t.globalData.customizeTabId, this.getUserInfo(), t.globalData.wxUserInfo && t.globalData.wxUserInfo.avatarUrl ? this.setData({
            iconPath: t.globalData.wxUserInfo.avatarUrl,
            nickName: t.globalData.wxUserInfo.nickName
        }) : this.setData({
            iconPath: "../../img/head.png"
        }), this.checkDistribuction();
        var i = wx.getStorageSync("mobilePhone" + t.globalData.autoId);
        i && this.setData({
            mobilePhone: i
        });
    },
    onShow: function() {
        this.getDistributeDetail();
    },
    getUserInfo: function() {
        var e = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getMember.action",
            data: {
                memberId: t.getMemberId(),
                customizetabId: a.LynxApplyFor_About_Merchant,
                checkBranch: 1
            },
            success: function(a) {
                var i = t.getJsonData(a.data);
                e.setData({
                    disType: i.type,
                    mobilePhone: i.mobilePhone,
                    activated: i.activated,
                    hideLogin: !("3" != i.type || !i.activated)
                });
            },
            fail: function() {
                t.hint();
            }
        });
    },
    getDistributeDetail: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "dis_distributeCentreInit",
            data: {
                memberId: t.getMemberId()
            },
            success: function(t) {
                a.setData({
                    detail: t.data.content,
                    amount: t.data.amount
                });
            },
            fail: function() {
                t.hint();
            }
        });
    },
    checkDistribuction: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "dis_checkDistribuction.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                memberId: t.getMemberId()
            },
            success: function(e) {
                var i = t.getJsonData(e.data);
                a.setData({
                    check: i.check,
                    amount: i.amount,
                    activityDistribution: i.activityDistribution,
                    isLoading: !1,
                    operationType: i.activityDistribution.operationType
                });
            },
            fail: function() {
                t.hint(), a.setData({
                    isLoading: !1
                });
            }
        });
    },
    toApplyCash: function() {
        wx.navigateTo({
            url: "applycash/applycash"
        });
    },
    getPhoneNumber: function(a) {
        var e = this;
        wx.login({
            success: function(i) {
                wx.request({
                    url: t.globalData.paymentUrl + "/WechatAlipay/GetOpenId",
                    data: {
                        projectId: t.globalData.projectInfo.appId,
                        code: i.code,
                        iv: a.detail.iv,
                        encryptedData: a.detail.encryptedData
                    },
                    success: function(a) {
                        if (a.data.length > 0) {
                            var i = t.getJsonData(a.data);
                            e.setData({
                                mobilePhone: i.mobilePhone
                            }), wx.setStorageSync("mobilePhone" + t.globalData.autoId, a.data.mobilePhone), 
                            e.apply();
                        }
                    },
                    fail: function(t) {}
                });
            }
        });
    },
    apply: function() {
        var a = this;
        a.data.check || a.data.amount > 0 && wx.showModal({
            title: "提示",
            content: "需购物满" + a.data.amount + "元才可以申请分销",
            confirmText: "去购物",
            success: function(t) {
                t.confirm && wx.switchTab({
                    url: "../product/product"
                });
            }
        }), wx.request({
            url: t.globalData.comUrl + "member_distributorApply.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                memberId: t.getMemberId(),
                mobilePhone: a.data.mobilePhone
            },
            success: function(e) {
                console.log(e.data);
                var i = t.getJsonData(e.data);
                1 == a.data.operationType ? wx.showToast({
                    title: "提交成功",
                    icon: "success",
                    success: function() {
                        setTimeout(function() {
                            wx.navigateBack({
                                beta: 1
                            });
                        }, 2e3);
                    }
                }) : 2 == a.data.operationType ? 1 == i.status && (wx.showToast({
                    title: "申请成功",
                    icon: "success"
                }), a.setData({
                    hideLogin: !0
                }), a.getDistributeDetail()) : 1 == i.status ? (wx.showToast({
                    title: "申请成功",
                    icon: "success"
                }), a.setData({
                    hideLogin: !0
                }), a.getDistributeDetail()) : wx.showModal({
                    title: "提示",
                    content: "需要购买" + a.data.activityDistribution.amount + "元钱才能成为分销商",
                    showCancel: !1
                });
            }
        });
    },
    ruletap: function() {
        wx.navigateTo({
            url: "distribute-rule/distribute-rule"
        });
    },
    toDistributeFee: function() {
        wx.navigateTo({
            url: "distribute-fee/distribute-fee"
        });
    },
    toDistributionOrder: function() {
        wx.navigateTo({
            url: "distribute-order/distribute-order"
        });
    },
    toWithdrawList: function() {
        wx.navigateTo({
            url: "withdraw-list/withdraw-list"
        });
    },
    toDistributePro: function() {
        wx.navigateTo({
            url: "../distribute/distribute-product/distribute-product"
        });
    },
    toQRCode: function() {
        wx.navigateTo({
            url: "distribute-qrcode/distribute-qrcode"
        });
    }
});