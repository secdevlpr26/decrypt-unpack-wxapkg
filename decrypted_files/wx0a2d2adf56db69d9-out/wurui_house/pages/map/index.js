var t = getApp();

Page({
    data: {
        map_width: 380,
        map_height: 380
    },
    onLoad: function() {
        var e = this;
        t.getLocationInfo(function(t) {
            console.log("map", t), e.setData({
                longitude: t.longitude,
                latitude: t.latitude,
                markers: [ {
                    id: 0,
                    iconPath: "../../resource/images/marker_checked.png",
                    longitude: t.longitude,
                    latitude: t.latitude,
                    width: 30,
                    height: 30
                } ]
            });
        }), wx.getSystemInfo({
            success: function(t) {
                console.log("getSystemInfo"), console.log(t.windowWidth), e.setData({
                    map_width: t.windowWidth,
                    map_height: t.windowWidth,
                    controls: [ {
                        id: 1,
                        iconPath: "../../resource/images/marker_checked.png",
                        position: {
                            left: t.windowWidth / 2 - 8,
                            top: t.windowWidth / 2 - 16,
                            width: 30,
                            height: 30
                        },
                        clickable: !0
                    } ]
                });
            }
        });
    },
    getLngLat: function() {
        var t = this;
        this.mapCtx = wx.createMapContext("map4select"), this.mapCtx.getCenterLocation({
            success: function(e) {
                console.log(e);
                var o = e.longitude + "," + e.latitude;
                console.log(e.longitude), t.setData({
                    longitude: e.longitude,
                    latitude: e.latitude,
                    map: o,
                    markers: [ {
                        id: 0,
                        iconPath: "../../resource/images/marker_checked.png",
                        longitude: e.longitude,
                        latitude: e.latitude,
                        width: 30,
                        height: 30
                    } ]
                });
            }
        });
    },
    regionchange: function(t) {
        console.log("ffffff");
    },
    markertap: function(t) {
        console.log(t);
    },
    getmap: function(t) {
        console.log("ffffffff"), this.getLngLat();
    }
});