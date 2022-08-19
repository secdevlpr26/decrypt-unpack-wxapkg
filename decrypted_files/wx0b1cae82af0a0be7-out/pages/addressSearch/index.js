var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/api"));

getApp();

Page({
    data: {
        addressList: [],
        isDefault: !1,
        value: ""
    },
    onLoad: function(e) {},
    searchAddr: function(a) {
        var t = this, s = a.detail.value;
        return s = s.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, ""), s = s.replace(/(^\s+)|\s+$/g, ""), 
        console.log(s), e.default.searchAddr("/serviceAddress/searchAddress", {
            keyword: s
        }).then(function(e) {
            t.setData({
                addressList: e.result
            });
        }), s;
    },
    deleteSearch: function() {
        this.setData({
            value: "",
            addressList: []
        });
    },
    selectAddr: function(e) {
        var a = e.currentTarget.dataset.index;
        wx.setStorageSync("search_addr", this.data.addressList[a]), wx.navigateBack();
    }
});