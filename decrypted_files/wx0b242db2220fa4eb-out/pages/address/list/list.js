var t = require("../../../utils/server");

Page({
    add: function() {
        wx.navigateTo({
            url: "../add/add"
        });
    },
    onShow: function() {
        this.loadData();
    },
    setDefault: function(e) {
        for (var a = this, s = parseInt(e.currentTarget.dataset.index), d = a.data.addressObjects, r = 0; r < d.length; r++) d[r].is_default = r == s;
        var i = getApp().globalData.userInfo.user_id, n = d[s].address_id;
        t.getJSON("/User/setDefaultAddress/user_id/" + i + "/address_id/" + n, function(t) {
            1 == t.data.status && a.setData({
                addressObjects: d
            });
        });
    },
    edit: function(t) {
        var e = parseInt(t.currentTarget.dataset.index), a = this.data.addressObjects[e].address_id;
        wx.navigateTo({
            url: "../edit/index?objectId=" + a
        });
    },
    delete: function(e) {
        var a = this, s = parseInt(e.currentTarget.dataset.index), d = a.data.addressObjects[s], r = getApp().globalData.userInfo.user_id, i = d.address_id;
        wx.showModal({
            title: "确认",
            content: "要删除这个地址吗？",
            success: function(e) {
                e.confirm && t.getJSON("/User/del_address/user_id/" + r + "/id/" + i, function(t) {
                    wx.showToast({
                        title: t.data.msg,
                        icon: "success",
                        duration: 2e3
                    }), a.loadData();
                });
            }
        });
    },
    loadData: function() {
        var e = this, a = getApp().globalData.userInfo.user_id;
        t.getJSON("/User/getAddressList/user_id/" + a, function(t) {
            var a = t.data.result;
            e.setData({
                addressObjects: a
            });
        });
    }
});