var a = getApp(), t = a.globalData.projectInfo, e = a.globalData.customizeTabId, o = 1, n = 1;

Page({
    data: {
        showCustomizeTabId: {},
        styleConfig: a.globalData.styleConfig,
        userInfo: {},
        memberId: "",
        iconPath: "",
        nickName: "",
        cartHasPro: !1,
        hiddenOrder: !0,
        isPerson: a.globalData.isPerson,
        proList: [],
        phone: "",
        orderCount: {}
    },
    onLoad: function() {
        var o = this;
        console.log(a.globalData.isQuery), t = a.globalData.projectInfo, e = a.globalData.customizeTabId;
        var n = wx.getStorageSync("memberType" + a.globalData.autoId);
        this.setData({
            memberType: n
        }), a.globalData.actDistribution && this.setData({
            actDistribution: a.globalData.actDistribution
        }), a.globalData.isWeb || wx.getSetting({
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
        }), o.getProCategory(), o.setData({
            hideInfoTabs: a.globalData.projectInfo.hideInfoTabs,
            isQuery: a.globalData.isQuery
        }), o.getCustomizeTabList();
    },
    onShow: function() {
        var t = this, e = wx.getStorageSync("mobilePhone" + a.globalData.autoId);
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

                      case "Member":
                        e.data.showCustomizeTabId.Member = !0;
                        break;

                      case "Video_Gallery":
                        e.data.showCustomizeTabId.Video_Gallery = !0;
                        break;

                      case "Activity-Distribution":
                        e.data.showCustomizeTabId["Activity-Distribution"] = !0, e.setData({
                            actDistribution: a.globalData.actDistribution
                        });
                    }
                }
                e.setData({
                    showCustomizeTabId: e.data.showCustomizeTabId
                });
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
    getProCategory: function() {
        var s = this;
        wx.request({
            url: a.globalData.comUrl + "tabs_getAppProductByCity.action",
            data: {
                appId: t.appId,
                customizeTabId: e.LynxProductList,
                count: 4,
                current: o,
                jsoncallback: "",
                productName: "",
                sortName: "readTimes",
                sortType: "desc",
                isGroup: a.globalData.isGroup
            },
            success: function(a) {
                var t = a.data.substring(1).slice(0, -1), e = JSON.parse(t);
                n = e.pages, s.setData({
                    proList: s.data.proList.concat(e.pageList)
                });
            }
        });
    },
    getStoreHidden: function() {
        var t = this;
        wx.request({
            url: a.globalData.comUrl + "tabs_getCustomizeTabsById.action",
            data: {
                appId: projectInfo.appId,
                customizeTabId: e.LynxAbout_Merchant
            },
            success: function(e) {
                var o = a.getJsonData(e.data);
                t.setData({
                    isStoreHidden: o.isDeleted
                });
            }
        });
    },
    headtap: function() {
        wx.navigateTo({
            url: "/pages/self/acountInformation/acountInformation"
        });
    },
    toProductDetail: function(a) {
        wx.navigateTo({
            url: "/pages/product/pro-detail/pro-detail?productId=" + a.currentTarget.dataset.pid
        });
    },
    toOrderList: function(t) {
        a.getMemberId() ? wx.navigateTo({
            url: "/pages/self/myOrder/myOrder?index=" + t.currentTarget.dataset.index
        }) : wx.navigateTo({
            url: "/pages/login/login"
        });
    },
    toCart: function() {
        wx.navigateTo({
            url: "/pages/self/cart/cart?from=self"
        });
    },
    catetap: function() {
        wx.navigateTo({
            url: "/pages/product/product"
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
    toMyGroup: function() {
        wx.navigateTo({
            url: "/pages/group/my-group/my-group"
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
        1 == a.globalData.isPerson ? wx.switchTab({
            url: "/pages/about-us/about-us"
        }) : wx.navigateTo({
            url: "/pages/about-us/about-us"
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
    onReachBottom: function() {
        o < n && (o++, this.getProCategory());
    },
    onPullDownRefresh: function() {
        this.setData({
            proList: []
        }), this.onLoad(), this.onShow();
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
            url: "/pages/distribute/distribute?type=" + this.data.userInfo.type
        }) : wx.navigateTo({
            url: "/pages/login/login"
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