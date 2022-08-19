var e = getApp(), t = e.globalData.config.base;

Page({
    data: {
        addRessList: [],
        deleteIndex: 0
    },
    onShareAppMessage: function() {
        return {
            title: e.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    onLoad: function(e) {
        this.getAddressInfo();
    },
    onReady: function() {},
    onShow: function() {},
    toAddress: function(e) {
        var t = "";
        t = "edit" == e.currentTarget.dataset.name ? "../address/address?id=" + this.data.addRessList[e.currentTarget.dataset.index].address_id : "../address/address", 
        wx.redirectTo({
            url: t
        });
    },
    deleteAddress: function(t) {
        var a = t.currentTarget.dataset.index, s = this, d = e.globalData.userKey, i = s.data.addRessList[a].address_id;
        wx.showActionSheet({
            itemList: [ "确认删除" ],
            success: function(e) {
                0 == e.tapIndex && s.deleteRequest(d, i, function(e) {
                    if ("删除地址成功" == e.data.data || 0 == e.data.error) {
                        var t = s.data.addRessList;
                        t.splice(a, 1), s.setData({
                            addRessList: t
                        }), s.getAddressInfo();
                    }
                });
            },
            fail: function(e) {}
        });
    },
    getAddressInfo: function() {
        var a = e.globalData.userKey, s = this;
        wx.request({
            url: t + "Mobile/UserApi/address_list",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: a
            },
            success: function(e) {
                s.setData({
                    addRessList: e.data
                });
            }
        });
    },
    deleteRequest: function(e, a, s) {
        wx.request({
            url: t + "/Mobile/UserApi/del_address",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: e,
                id: a
            },
            success: function(e) {
                s && s(e);
            }
        });
    },
    setDefault: function(a) {
        var s = a.currentTarget.dataset.index, d = this, i = e.globalData.userKey, r = d.data.addRessList[s].address_id;
        wx.request({
            url: t + "Mobile/UserApi/set_default",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: i,
                id: r
            },
            success: function(e) {
                if (console.log(e), 0 == e.data.error) {
                    var t = d.data.addRessList;
                    t.forEach(function(e, t) {
                        e.is_default = t != s ? 0 : 1;
                    }), d.setData({
                        addRessList: t
                    });
                }
            }
        });
    }
});