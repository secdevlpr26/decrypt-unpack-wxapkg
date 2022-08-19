var t = getApp(), a = t.globalData.projectInfo, e = t.globalData.customizeTabId, o = {}, n = !0;

Page({
    data: {
        styleConfig: t.globalData.styleConfig,
        storeInfo: {},
        storeImg: [],
        productArr: [],
        tapIndex: 2,
        bottomHint: !0
    },
    onLoad: function() {
        a = t.globalData.projectInfo, e = t.globalData.customizeTabId, t.loginVzSystem();
        var o = this;
        o.getStoreId().then(function(t) {
            o.getStoreInfo(t);
        });
    },
    nav_tap: function(t) {
        var a = 0;
        a = "1" == t.currentTarget.dataset.index ? 1 : "2" == t.currentTarget.dataset.index ? 2 : 3, 
        this.setData({
            tapIndex: a
        });
    },
    getStoreId: function() {
        return new Promise(function(o, n) {
            wx.request({
                url: t.globalData.comUrl + "mctab_searchBranchInfo.action",
                data: {
                    appId: a.appId,
                    customizeTabId: e.LynxAbout_Merchant,
                    advertisement: 1,
                    current: 1
                },
                success: function(a) {
                    var e = t.getJsonData(a.data);
                    console.log(e.pageList[0]), o(e.pageList[0].id);
                }
            });
        });
    },
    formSubmit: function(a) {
        if (n) {
            n = !1;
            var e = /^1[3|4|5|8|7][0-9]\d{4,8}$/;
            if ("" == a.detail.value.name) return n = !0, void this.warn("姓名不能为空!");
            if ("" == a.detail.value.phone) return n = !0, void this.warn("请输入电话号码!");
            if (!e.test(a.detail.value.phone)) return n = !0, void this.warn("请输入正确的电话号码");
            if ("" == a.detail.value.detail) return n = !0, void this.warn("请输入\b反馈内容");
            wx.showToast({
                title: "正在提交...",
                icon: "loading",
                duration: 1e4,
                mask: !0
            });
            var o = new Date(), i = t.globalData.projectInfo.projectName + "," + a.detail.value.name + "," + a.detail.value.phone + "," + a.detail.value.detail, r = {
                storeName: a.detail.value.storeName,
                name: a.detail.value.name,
                phone: a.detail.value.phone,
                detail: a.detail.value.detail,
                imagePath: "",
                date: o.toLocaleDateString()
            }, s = wx.getStorageSync("customArr" + t.globalData.autoId) || [];
            s.push(r), wx.setStorageSync("customArr" + t.globalData.autoId, s), i += ",null", 
            wx.request({
                url: t.globalData.comUrl + "tabs_saveFlexiForm",
                data: {
                    projectId: t.globalData.projectInfo.appId,
                    customizeTabId: t.globalData.customizeTabId["Flexi-Form"],
                    token: "html5",
                    fieldKey: "店铺,姓名,电话,描述,附图说明",
                    fieldValue: i
                },
                success: function(t) {
                    wx.showToast({
                        title: "提交成功",
                        icon: "success",
                        duration: 2e3
                    });
                },
                fail: function(a) {
                    t.hint("提交失败"), wx.hideToast();
                },
                complete: function() {
                    n = !0;
                }
            });
        }
    },
    getStoreInfo: function(e) {
        var n = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getSingleBranchInfo.action",
            data: {
                appId: a.appId,
                tabContentId: e
            },
            success: function(a) {
                (o = t.getJsonData(a.data)).advertisingImage = t.modifyPicSize(o.advertisingImage, "_r750xp");
                for (var e = [ o.pic1, o.pic2, o.pic3, o.pic4, o.pic5 ], i = [], r = 0; r < e.length; r++) e[r] && i.push(e[r]);
                o.shortDescription = t.filterSpecialSymbol(o.shortDescription), n.setData({
                    storeInfo: o,
                    storeImg: i
                }), wx.setNavigationBarTitle({
                    title: o.branchName
                });
            },
            fail: function(a) {
                t.hint();
            }
        });
    },
    phonecall: function() {
        var t = this.data.storeInfo.phone;
        wx.makePhoneCall({
            phoneNumber: t
        });
    },
    locationtap: function() {
        var t = this, a = t.data.storeInfo.gdLatitude;
        a = (1 * a).toFixed(6);
        var e = t.data.storeInfo.gdLongitude;
        e = (1 * e).toFixed(6), wx.openLocation({
            latitude: parseFloat(a),
            longitude: parseFloat(e),
            name: t.data.storeInfo.branchName,
            address: t.data.storeInfo.address,
            scale: 28
        });
    },
    customtap: function() {
        wx.navigateTo({
            url: "/pages/store/custom/custom"
        });
    },
    onShareAppMessage: function() {
        var t = this;
        return {
            title: t.data.storeInfo.branchName,
            path: "/pages/store/store-o2o/store-detail/store-detail?tabContentId=" + t.data.storeInfo.id,
            success: function(t) {},
            fail: function(t) {}
        };
    },
    warn: function(t) {
        wx.showToast({
            title: t,
            image: "../../img/warn.png",
            duration: 2e3
        });
    }
});