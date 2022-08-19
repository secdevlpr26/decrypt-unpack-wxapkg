var a = getApp();

Page({
    data: {
        bankList: [],
        searchBankList: [],
        hidden: !0
    },
    onLoad: function(t) {
        var n = this;
        wx.request({
            url: a.globalData.comUrl + "dis_getBankList",
            success: function(a) {
                n.setData({
                    bankList: a.data.content
                });
            }
        });
    },
    bindInput: function(a) {
        var t = a.detail.value, n = [];
        if (t.length > 0) {
            for (var i = 0; i < this.data.bankList.length; i++) {
                var e = this.data.bankList[i];
                -1 != e.bankName.search(t) && n.push(e);
            }
            this.setData({
                searchBankList: n,
                hidden: !1
            });
        }
    },
    radioChange: function(t) {
        console.log(t);
        for (var n = 0; n < this.data.bankList.length; n++) {
            var i = this.data.bankList[n];
            if (i.id == t.detail.value) {
                wx.setStorageSync("accountType" + a.globalData.autoId, i);
                break;
            }
        }
        wx.navigateBack({
            beta: 1
        });
    },
    onShow: function() {}
});