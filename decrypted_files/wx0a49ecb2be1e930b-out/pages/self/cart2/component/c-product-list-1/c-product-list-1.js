var t = getApp(), a = t.globalData.projectInfo, o = t.globalData.customizeTabId, e = 1, s = 1;

Component({
    properties: {},
    data: {
        isPerson: t.globalData.isPerson,
        proList: [],
        hiddenMerchant: !0,
        bottomHint: !1,
        actDistribution: {}
    },
    attached: function() {
        var e = this;
        a = t.globalData.projectInfo, o = t.globalData.customizeTabId;
        var s = wx.getStorageSync("memberType" + t.globalData.autoId);
        this.setData({
            memberType: s
        }), t.globalData.actDistribution && this.setData({
            actDistribution: t.globalData.actDistribution
        }), e.getProCategory();
    },
    methods: {
        getProCategory: function() {
            var r = this;
            wx.request({
                url: t.globalData.comUrl + "tabs_getAppProductByCity.action",
                data: {
                    appId: a.appId,
                    customizeTabId: o.LynxProductList,
                    count: 4,
                    current: e,
                    jsoncallback: "",
                    productName: "",
                    sortName: "readTimes",
                    sortType: "desc",
                    isGroup: t.globalData.isGroup
                },
                success: function(t) {
                    var a = t.data.substring(1).slice(0, -1), o = JSON.parse(a);
                    s = o.pages, r.setData({
                        proList: r.data.proList.concat(o.pageList)
                    });
                }
            });
        },
        onReachBottom: function() {
            e < s && (e++, this.getProCategory());
        }
    }
});