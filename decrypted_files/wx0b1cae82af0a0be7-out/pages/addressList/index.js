var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../utils/api"));

getApp();

Page({
    data: {
        addressList: [],
        selectStatus: !1,
        defaultId: null
    },
    onLoad: function(t) {
        "select" == t.status && this.setData({
            selectStatus: !0
        });
    },
    onShow: function() {
        var e = this;
        this.data.defaultId = null, t.default.addressList("/serviceAddress/list").then(function(t) {
            t.result.list.forEach(function(t) {
                t.isDefault && (e.data.defaultId = t.id);
            }), e.setData({
                addressList: t.result.list
            });
        });
    },
    selectAddr: function(e) {
        this.data.selectStatus && t.default.updateDefaultAddr("/serviceAddress/updateDefault", {
            addressId: e.currentTarget.dataset.id
        }).then(function(t) {
            wx.navigateBack();
        });
    },
    defaultAddr: function(e) {
        var d = this, a = e.currentTarget.dataset.id;
        a != this.data.defaultId && (wx.showLoading({
            title: "加载中"
        }), t.default.updateDefaultAddr("/serviceAddress/updateDefault", {
            addressId: a
        }).then(function(t) {
            setTimeout(function() {
                wx.hideLoading();
            }, 300), d.data.defaultId = a, d.data.addressList.forEach(function(t) {
                t.isDefault = t.id == a;
            }), d.setData({
                addressList: d.data.addressList
            });
        }));
    },
    editAddr: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../addressDetail/index?id=" + e
        });
    },
    deleteAddr: function(e) {
        var d = e.currentTarget.dataset.id, a = e.currentTarget.dataset.index, s = this;
        wx.showModal({
            title: "提示",
            content: "确定要删除此地址吗？",
            confirmColor: "#26a2ff",
            success: function(e) {
                e.confirm && t.default.updateDefaultAddr("/serviceAddress/delete", {
                    addressId: d
                }).then(function(t) {
                    s.data.addressList.splice(a, 1), s.setData({
                        addressList: s.data.addressList
                    }), console.log(s.data.addressList);
                });
            }
        });
    }
});