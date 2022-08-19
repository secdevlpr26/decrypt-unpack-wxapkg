var t = new (require("../../utils/qqmap-wx-jssdk.min.js"))({
    key: "SXOBZ-7KQW3-W7N3B-3SIWN-DF5EE-QSFFU"
}), e = getApp();

Page({
    data: {
        latitude: 0,
        longitude: 0,
        info: "",
        otherTel: "",
        markers: [ {
            iconPath: "../../images/weizhi.png",
            id: 0,
            latitude: 0,
            longitude: 0,
            width: 80,
            height: 80
        } ],
        tels: []
    },
    onShow: function() {
        this.setData({
            info: e.globalData.info,
            otherTel: e.globalData.otherTel
        });
        var t = [];
        if (null != this.data.otherTel && this.data.otherTel.length > 13 ? t = this.data.otherTel.split(",") : null != this.data.otherTel && this.data.otherTel.length > 3 && t.push(this.data.otherTel), 
        this.setData({
            tels: t
        }), 0 == this.data.latitude) try {
            var a = wx.getStorageSync(this.data.info.officeName);
            a ? this.setData({
                latitude: a.lat,
                longitude: a.lng,
                markers: [ {
                    id: "1",
                    latitude: a.lat,
                    longitude: a.lng,
                    width: 50,
                    height: 50,
                    iconPath: "../../images/weizhi.png",
                    title: e.globalData.info.officeName
                } ]
            }) : this.geocoder();
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            this.geocoder();
        }
    },
    geocoder: function() {
        var e = this;
        t.geocoder({
            address: this.data.info.address,
            success: function(a) {
                0 == a.status ? e.updateLocation(e.data.info.officeName, a.result.location) : t.geocoder({
                    address: e.data.info.officeName,
                    success: function(t) {
                        e.updateLocation(e.data.info.officeName, t.result.location);
                    },
                    fail: function(t) {}
                });
            },
            fail: function(a) {
                t.geocoder({
                    address: e.data.info.officeName,
                    success: function(t) {
                        e.updateLocation(e.data.info.officeName, t.result.location);
                    },
                    fail: function(t) {}
                });
            }
        });
    },
    updateLocation: function(t, a) {
        wx.setStorage({
            key: t,
            data: a
        }), this.setData({
            latitude: a.lat,
            longitude: a.lng,
            markers: [ {
                id: "1",
                latitude: a.lat,
                longitude: a.lng,
                width: 50,
                height: 50,
                iconPath: "../../images/weizhi.png",
                title: e.globalData.info.officeName
            } ]
        });
    },
    goToTheAddress: function() {
        wx.openLocation({
            latitude: this.data.latitude,
            longitude: this.data.longitude,
            name: "",
            address: e.globalData.info.address,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    callPhone: function(t) {
        wx.makePhoneCall({
            phoneNumber: t.currentTarget.dataset.name
        });
    },
    onShareAppMessage: function(t) {
        return {
            success: function(t) {},
            fail: function(t) {}
        };
    }
});