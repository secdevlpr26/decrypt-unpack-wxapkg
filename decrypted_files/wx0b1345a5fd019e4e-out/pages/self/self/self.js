var a = getApp(), t = a.globalData.projectInfo, e = a.globalData.customizeTabId, o = "";

Page({
    data: {
        showCustomizeTabId: {},
        styleConfig: a.globalData.styleConfig,
        userInfo: {},
        memberId: "",
        iconPath: "",
        nickName: "",
        cartHasPro: !1,
        hideInfoTabs: !0,
        isPerson: a.globalData.isPerson,
        isShowMemRights: !1,
        phone: "",
        orderCount: {}
    },
    onLoad: function() {
        t = a.globalData.projectInfo, e = a.globalData.customizeTabId, wx.showLoading({
            title: "加载中..."
        }), a.loginVzSystem();
        var o = this;
        a.globalData.isWeb || wx.getSetting({
            success: function(t) {
                console.log(t), t.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(t) {
                        console.log(t), a.globalData.wxUserInfo = t.userInfo, o.setData({
                            iconPath: t.userInfo.avatarUrl,
                            nickName: t.userInfo.nickName
                        }), wx.request({
                            url: a.globalData.comUrl + "tabs_updateMember.action",
                            data: {
                                appId: a.globalData.projectInfo.appId,
                                memberId: a.getMemberId(),
                                headPortrait: t.userInfo.avatarUrl,
                                surname: t.userInfo.nickName
                            }
                        });
                    }
                });
            }
        }), o.setData({
            hideInfoTabs: a.globalData.projectInfo.hideInfoTabs,
            isQuery: a.globalData.isQuery
        }), o.getCustomizeTabList();
    },
    animal: function() {
        clearInterval(o);
        var a = this, t = wx.createAnimation({
            duration: 18e3,
            timingFunction: "linear"
        }), e = wx.createAnimation({
            duration: 18e3,
            timingFunction: "linear"
        });
        this.animation = t, t.translateY(-200).step(), this.setData({
            animationData: t.export()
        }), setTimeout(function() {
            e.translateY(0).step(), this.setData({
                animationData: e.export()
            });
        }.bind(this), 18e3), o = setInterval(function() {
            t.translateY(-200).step(), a.setData({
                animationData: t.export()
            }), setTimeout(function() {
                e.translateY(0).step(), a.setData({
                    animationData: e.export()
                });
            }.bind(this), 18e3);
        }, 36e3);
    },
    onShow: function() {
        var t = this;
        t.animal();
        var e = wx.getStorageSync("mobilePhone" + a.globalData.autoId);
        t.setData({
            phone: e
        }), a.globalData.wxUserInfo && a.globalData.wxUserInfo.avatarUrl ? this.setData({
            iconPath: a.globalData.wxUserInfo.avatarUrl,
            nickName: a.globalData.wxUserInfo.nickName
        }) : this.setData({
            iconPath: "/img/head.png"
        });
        var o = wx.getStorageSync("cartData" + a.globalData.autoId);
        o && o.length > 0 ? t.setData({
            cartHasPro: !0
        }) : t.setData({
            cartHasPro: !1
        });
        var n = a.getMemberId();
        t.getOrderCount(), n ? (t.setData({
            memberId: n
        }), t.getUserInfo()) : wx.hideToast();
    },
    getOrderCount: function() {
        var e = this;
        wx.request({
            url: a.globalData.comUrl + "tabs_getAppOrderCount.action",
            data: {
                projectId: t.appId,
                memberId: a.getMemberId()
            },
            success: function(a) {
                console.log(a.data.content), e.setData({
                    orderCount: a.data.content
                });
            }
        });
    },
    getCustomizeTabList: function() {
        var e = this;
        wx.request({
            url: a.globalData.comUrl + "tabs_getCustomizeTabList.action",
            data: {
                appId: t.appId
            },
            success: function(t) {
                for (var o = a.getJsonData(t.data), n = 0; n < o.length; n++) {
                    o[n];
                    switch (o[n].sysTabNameTag ? o[n].sysTabNameTag : o[n].sysTabName) {
                      case "ZXMarketModuleOrder":
                        e.data.showCustomizeTabId.ZXMarketModuleOrder = !0;
                        break;

                      case "LynxAbout_Merchant":
                        e.data.showCustomizeTabId.LynxAbout_Merchant = !0;
                        break;

                      case "LynxPhoto_Info_Post_Tab":
                        e.data.showCustomizeTabId.LynxPhoto_Info_Post_Tab = !0;
                        break;

                      case "Activity":
                        e.data.showCustomizeTabId.Activity = !0;
                        break;

                      case "LynxApplyFor_About_Merchant":
                        e.data.showCustomizeTabId.LynxApplyFor_About_Merchant = !0;
                        break;

                      case "Flexi-Form":
                        e.data.showCustomizeTabId["Flexi-Form"] = !0;
                        break;

                      case "Activity-Group":
                        e.data.showCustomizeTabId["Activity-Group"] = !0;
                        break;

                      case "CardNo":
                        e.data.showCustomizeTabId.CardNo = !0;
                        break;

                      case "Activity-Distribution":
                        e.data.showCustomizeTabId["Activity-Distribution"] = !0, e.setData({
                            actDistribution: a.globalData.actDistribution
                        });
                    }
                }
                e.setData({
                    showCustomizeTabId: e.data.showCustomizeTabId,
                    isShowMemRights: !e.data.showCustomizeTabId["Activity-Group"]
                }), wx.hideLoading();
            }
        });
    },
    getUserInfo: function() {
        var t = this;
        wx.request({
            url: a.globalData.comUrl + "tabs_getMember.action",
            data: {
                memberId: t.data.memberId,
                customizetabId: e.LynxApplyFor_About_Merchant,
                checkBranch: 1
            },
            success: function(e) {
                var o = a.getJsonData(e.data);
                o.userName.length < 1 && (o.userName = a.globalData.wxUserInfo.nickName), wx.setStorageSync("scoreRule" + a.globalData.autoId, o.scoreRule), 
                wx.setStorageSync("memberId" + a.globalData.autoId, o.id), wx.setStorageSync("mobilePhone", o.mobilePhone), 
                wx.setStorageSync("nickname", o.userName), t.setData({
                    userInfo: o,
                    phone: o.mobilePhone
                }), wx.hideToast();
            },
            fail: function() {
                a.hint();
            }
        });
    },
    headtap: function() {
        wx.navigateTo({
            url: "/pages/self/acountInformation/acountInformation"
        });
    },
    toOrderList: function(t) {
        a.getMemberId() ? wx.navigateTo({
            url: "/pages/self/myOrder/myOrder?index=" + t.currentTarget.dataset.index
        }) : wx.navigateTo({
            url: "/pages/login/login"
        });
    },
    catetap: function() {
        1 == this.data.isPerson ? wx.navigateTo({
            url: "/pages/product/product"
        }) : wx.switchTab({
            url: "/pages/product/product"
        });
    },
    toCart: function() {
        wx.navigateTo({
            url: "/pages/self/cart/cart?from=self"
        });
    },
    toMyCustom: function() {
        a.getMemberId() ? wx.navigateTo({
            url: "/pages/self/myCustom/myCustom"
        }) : wx.navigateTo({
            url: "/pages/login/login"
        });
    },
    toCollect: function() {
        a.getMemberId() ? wx.navigateTo({
            url: "/pages/self/collect/collect"
        }) : wx.navigateTo({
            url: "/pages/login/login"
        });
    },
    cardtap: function() {
        a.getMemberId() ? wx.navigateTo({
            url: "/pages/self/card/card?cardNo=" + this.data.userInfo.cardNo
        }) : wx.navigateTo({
            url: "/pages/login/login"
        });
    },
    toSupply: function() {
        a.getMemberId() ? wx.navigateTo({
            url: "/pages/self/mySupply/mySupply"
        }) : wx.navigateTo({
            url: "/pages/login/login"
        });
    },
    toMyBeforehand: function() {
        a.getMemberId() ? wx.navigateTo({
            url: "/pages/self/myBeforehand/myBeforehand"
        }) : wx.navigateTo({
            url: "/pages/login/login"
        });
    },
    memRigtap: function() {
        a.getMemberId() ? wx.navigateTo({
            url: "/pages/self/memRights/memRights"
        }) : wx.navigateTo({
            url: "/pages/login/login"
        });
    },
    toStore: function() {
        wx.navigateTo({
            url: "/pages/store/store"
        });
    },
    jointap: function() {
        a.getMemberId() ? this.data.userInfo.activated ? wx.showModal({
            title: "提示",
            content: "商家入驻认证成功",
            showCancel: !1
        }) : 1 == this.data.userInfo.isApply ? wx.showModal({
            title: "提示",
            content: "正在申请中...",
            showCancel: !1
        }) : wx.navigateTo({
            url: "/pages/join/join"
        }) : wx.navigateTo({
            url: "/pages/login/login"
        });
    },
    abouttap: function() {
        wx.navigateTo({
            url: "/pages/about-us/about-us"
        });
    },
    toMyGroup: function() {
        a.getMemberId() ? wx.navigateTo({
            url: "/pages/packages/group/my-group/my-group"
        }) : wx.navigateTo({
            url: "/pages/login/login"
        });
    },
    coupontap: function() {
        a.getMemberId() ? wx.navigateTo({
            url: "/pages/self/mycoupon/mycoupon"
        }) : wx.navigateTo({
            url: "/pages/login/login"
        });
    },
    bindphone: function() {
        wx.navigateTo({
            url: "/pages/self/bindPhone/bindPhone"
        });
    },
    bindGetUserInfo: function(t) {
        this.setData({
            iconPath: t.detail.userInfo.avatarUrl,
            nickName: t.detail.userInfo.nickName
        }), a.globalData.wxUserInfo = t.detail.userInfo, wx.request({
            url: a.globalData.comUrl + "tabs_updateMember.action",
            data: {
                appId: a.globalData.projectInfo.appId,
                memberId: a.getMemberId(),
                headPortrait: t.detail.userInfo.avatarUrl,
                surname: t.detail.userInfo.nickName
            }
        });
    },
    updataUserInfo: function() {
        var e = this;
        wx.request({
            url: a.globalData.comUrl + "tabs_updateMember.actionL",
            data: {
                appId: t.appId,
                memberId: e.data.memberId,
                headPortrait: ""
            },
            success: function(a) {
                e.success("头像上传成功");
            },
            fail: function(a) {
                e.warn("头像上传失败");
            }
        });
    },
    toDistribute: function() {
        a.getMemberId() ? wx.navigateTo({
            url: "/pages/packages/distribute/distribute?type=" + this.data.userInfo.type
        }) : wx.navigateTo({
            url: "/pages/login/login"
        });
    },
    getPhoneNumber: function(t) {
        var e = this;
        wx.login({
            success: function(o) {
                wx.request({
                    url: a.globalData.paymentUrl + "/WechatAlipay/GetOpenId",
                    data: {
                        projectId: a.globalData.projectInfo.appId,
                        code: o.code,
                        iv: t.detail.iv,
                        encryptedData: t.detail.encryptedData
                    },
                    success: function(t) {
                        if (t.data.length > 0) {
                            var o = a.getJsonData(t.data);
                            e.setData({
                                phone: o.mobilePhone
                            }), wx.setStorageSync("mobilePhone" + a.globalData.autoId, t.data.mobilePhone), 
                            wx.request({
                                url: a.globalData.comUrl + "member_bindMobilePhone.action",
                                data: {
                                    appId: a.globalData.projectInfo.appId,
                                    mobilePhone: o.mobilePhone,
                                    memberId: a.getMemberId()
                                },
                                success: function(t) {
                                    "1" == t.code && wx.setStorageSync("mobilePhone" + a.globalData.autoId, o.mobilePhone);
                                }
                            });
                        }
                    },
                    fail: function(a) {}
                });
            }
        });
    },
    cancelAuth: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    deleteCache: function() {
        wx.removeStorage({
            key: "memberId" + a.globalData.autoId
        }), wx.removeStorage({
            key: "openId" + a.globalData.autoId,
            success: function(a) {
                wx.showModal({
                    title: "清除成功"
                });
            }
        });
    },
    exit: function() {
        var t = this;
        wx.showModal({
            title: "确定退出登录？",
            success: function(e) {
                e.confirm && (t.setData({
                    userInfo: {},
                    memberId: ""
                }), wx.setStorageSync("memberId" + a.globalData.autoId, ""));
            }
        });
    },
    warn: function(a) {
        wx.showToast({
            title: a,
            image: "../../../../img/warn.png",
            duration: 2e3
        });
    },
    success: function(a) {
        wx.showToast({
            title: a,
            icon: "success",
            duration: 2e3
        });
    }
});