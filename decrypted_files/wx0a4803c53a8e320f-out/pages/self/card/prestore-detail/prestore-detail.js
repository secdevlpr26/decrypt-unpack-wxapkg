var t = getApp();

Page({
    data: {
        detailList: [],
        detailNull: !1
    },
    onShow: function() {},
    onLoad: function() {
        var e = this;
        wx.request({
            url: t.globalData.comUrl + "mctab_getMoneyRecord.action",
            data: {
                memberId: t.getMemberId(),
                type: "1",
                current: "1"
            },
            success: function(a) {
                console.log(a.data);
                for (var i = t.getJsonData(a.data), n = 0; n < i.pageList.length; n++) 1 == i.pageList[n].kind ? i.pageList[n].money = "+ " + i.pageList[n].money : 4 == i.pageList[n].kind && (i.pageList[n].money = "- " + i.pageList[n].money);
                i.pageList.length, e.setData({
                    detailList: i.pageList
                });
            }
        });
    }
});