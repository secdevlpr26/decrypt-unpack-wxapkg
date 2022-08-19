var a = getApp();

Page({
    data: {
        listData: [],
        showbtn: !0,
        page: 2,
        pagesize: 8
    },
    onLoad: function() {
        var t = this, e = a.globalData.operator;
        console.log(e), wx.request({
            url: "https://open.flames-tech.cn/plugin/cusReport-api/customer-stock",
            data: {
                key: e.key,
                page: 1,
                pagesize: t.data.pagesize
            },
            header: {
                token: a.globalData.token
            },
            success: function(a) {
                console.log(a), 1 == a.data.state && a.data.list && a.data.list.length > 0 && (a.data.list.forEach(function(a) {
                    a.name = a.name.substring(0, 8);
                }), t.setData({
                    listData: a.data.list
                }));
            },
            fail: function(a) {
                console.log(a);
            }
        });
    },
    look: function(a) {
        wx.showModal({
            content: a.currentTarget.dataset.remarks,
            showCancel: !1,
            success: function(a) {
                a.confirm ? console.log("用户点击确定") : a.cancel && console.log("用户点击取消");
            }
        });
    },
    click: function(t) {
        var e = this, o = a.globalData.operator;
        console.log(o), wx.request({
            url: "https://open.flames-tech.cn/plugin/cusReport-api/customer-stock",
            data: {
                key: o.key,
                page: e.data.page,
                pagesize: e.data.pagesize
            },
            header: {
                token: a.globalData.token
            },
            success: function(a) {
                if (console.log(a), 1 == a.data.state && a.data.list && a.data.list.length > 0) {
                    var t = e.data.listData.concat(a.data.list);
                    console.log(t);
                    var o = e.data.page + 1;
                    a.data.list.forEach(function(a) {
                        a.name = a.name.substring(0, 8);
                    }), e.setData({
                        listData: t,
                        page: o
                    });
                } else e.setData({
                    showbtn: !1
                });
            },
            fail: function(a) {
                console.log(a);
            }
        });
    }
});