var t = getApp();

Page({
    data: {
        cityList: [],
        initialList: [ "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z" ],
        hotCityList: [ "北京" ],
        curCity: "",
        winHeight: "",
        toView: ""
    },
    onLoad: function() {
        var a = this;
        wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    winHeight: t.windowHeight
                });
            }
        }), this.setData({
            curCity: t.globalData.city.cityName
        }), this.getHotCity(), this.getAllcity();
    },
    getHotCity: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_gethotCityList.action",
            success: function(i) {
                var e = t.getJsonData(i.data);
                a.setData({
                    hotCityList: e
                });
            }
        });
    },
    getAllcity: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getCityByPinyin.action",
            success: function(i) {
                var e = t.getJsonData(i.data)[0], s = [];
                for (var c in e) s.push(e[c]);
                a.setData({
                    cityList: s
                });
            }
        });
    },
    initialtap: function(t) {
        this.setData({
            toView: t.currentTarget.dataset.init
        });
    },
    citytap: function(a) {
        0 == a.currentTarget.dataset.info ? (t.globalData.city = {
            cityName: "全国"
        }, this.setData({
            curCity: "全国"
        })) : (t.globalData.city = a.currentTarget.dataset.info, this.setData({
            curCity: a.currentTarget.dataset.info.cityName
        })), wx.navigateBack({
            beta: 1
        });
    }
});