var a = new (require("../../utils/qqmap-wx-jssdk.min.js"))({
    key: "SXOBZ-7KQW3-W7N3B-3SIWN-DF5EE-QSFFU"
}), t = require("../../wxParse/wxParse.js"), e = getApp();

Page({
    data: {
        info: "",
        newCategorys: [],
        topmargin: 0,
        workAge: 0,
        latitude: 0,
        longitude: 0,
        year: 0,
        markers: [ {
            iconPath: "../../images/weizhi.png",
            id: 0,
            latitude: 0,
            longitude: 0,
            width: 80,
            height: 80
        } ]
    },
    onLoad: function() {
        var a = this;
        if (wx.getSystemInfo({
            success: function(t) {
                var e = t.windowWidth;
                a.setData({
                    topmargin: e / 2
                });
            }
        }), a.setData({
            year: new Date().getFullYear()
        }), this.getLawyerInfo(), 0 == a.data.latitude) try {
            var t = wx.getStorageSync(a.data.info.officeName);
            t ? a.setData({
                latitude: t.lat,
                longitude: t.lng,
                markers: [ {
                    id: "1",
                    latitude: t.lat,
                    longitude: t.lng,
                    width: 50,
                    height: 50,
                    iconPath: "../../images/weizhi.png",
                    title: a.data.info.officeName
                } ]
            }) : a.geocoder();
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            a.geocoder();
        }
    },
    geocoder: function() {
        var t = this;
        a.geocoder({
            address: this.data.info.address,
            success: function(e) {
                0 == e.status ? t.updateLocation(t.data.info.officeName, e.result.location) : a.geocoder({
                    address: this.data.info.officeName,
                    success: function(a) {
                        t.updateLocation(t.data.info.officeName, a.result.location);
                    },
                    fail: function(a) {}
                });
            },
            fail: function(e) {
                a.geocoder({
                    address: t.data.info.officeName,
                    success: function(a) {
                        t.updateLocation(t.data.info.officeName, a.result.location);
                    },
                    fail: function(a) {}
                });
            }
        });
    },
    updateLocation: function(a, t) {
        wx.setStorage({
            key: this.data.info.officeName,
            data: t
        }), this.setData({
            latitude: t.lat,
            longitude: t.lng,
            markers: [ {
                id: "1",
                latitude: t.lat,
                longitude: t.lng,
                width: 50,
                height: 50,
                iconPath: "../../images/weizhi.png",
                title: e.globalData.info.officeName
            } ]
        });
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), this.getLawyerInfo();
    },
    getLawyerInfo: function() {
        var a = this;
        e.apiRequestGet({
            urlMethod: "api/Users/getUserInfo",
            data: {},
            success: function(e) {
                if (null != e.data.introduction && e.data.introduction.length > 0) {
                    var i = e.data.introduction.replace(new RegExp("</h2>", "gm"), "</h2><div style='display: flex;flex-direction: column;margin:15px 0px 25px 0px;'><div style='width:44px;height:2px;background-color:#4480f6;'/> <div style='margin-left:40px;height:1px;background-color:#eee;'/></div>");
                    t.wxParse("content", "html", i, a, 5);
                }
                null != e.data.tel && e.data.tel.length > 13 && (e.data.tel = e.data.tel.substring(0, 11)), 
                a.setData({
                    info: e.data
                }), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), wx.hideLoading();
            },
            fail: function(a) {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), wx.hideLoading();
            }
        });
    },
    to2DimensionArr: function(a, t) {
        var e = new Array();
        if (void 0 == a) return e;
        for (var i = null, n = 0; n < a.length; n++) {
            var o = a[n];
            n % t != 0 && null != i || (i = new Array(), e.push(i)), i.push(o);
        }
        return e;
    },
    onShareAppMessage: function(a) {
        return {
            success: function(a) {},
            fail: function(a) {}
        };
    },
    saveNumber: function() {
        wx.addPhoneContact({
            lastName: e.globalData.info.officeName.substring(0, 1),
            firstName: e.globalData.info.officeName.substring(1, e.globalData.info.officeName.length),
            mobilePhoneNumber: e.globalData.info.tel,
            organization: e.globalData.info.officeName,
            success: function() {},
            fail: function(a) {}
        });
    },
    goback: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    callClick: function() {
        wx.makePhoneCall({
            phoneNumber: e.globalData.info.tel,
            success: function() {},
            fail: function() {}
        });
    }
});