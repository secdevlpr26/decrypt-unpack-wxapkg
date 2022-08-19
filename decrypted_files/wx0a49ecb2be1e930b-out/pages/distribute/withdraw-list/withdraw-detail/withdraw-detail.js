var a = getApp();

Page({
    data: {
        applyCash: {},
        statusStr: "",
        disposeDate: ""
    },
    onLoad: function(a) {
        this.getDetail(a.id);
    },
    getDetail: function(t) {
        var s = this;
        wx.request({
            url: a.globalData.comUrl + "dis_getApplyCash",
            data: {
                id: t
            },
            success: function(a) {
                var t = "", e = "";
                switch (a.data.content.applyCash.status) {
                  case 1:
                    t = "待审核";
                    break;

                  case 2:
                    t = "待打款", e = "审核时间：" + a.data.content.applyCash.disposeDate;
                    break;

                  case 3:
                    t = "已打款", e = "打款时间：" + a.data.content.applyCash.disposeDate;
                    break;

                  case 4:
                    t = "驳回", e = "驳回时间：" + a.data.content.applyCash.disposeDate;
                }
                s.setData({
                    applyCash: a.data.content.applyCash,
                    statusStr: t,
                    disposeDate: e
                });
            }
        });
    }
});