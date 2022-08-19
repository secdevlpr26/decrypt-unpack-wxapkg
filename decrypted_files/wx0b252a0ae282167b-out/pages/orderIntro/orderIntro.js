var e, a = getApp();

Page({
    data: {
        array: [ "A请选择寄单地址", "B原创--凌海路13817461987", "C原创--张杨北路15221730828", "D原创--华东路15902138014", "E原创--外四/越海路17721333905", "F原创--芦潮港15821111139", "G原创--港城路15000021161", "H原创--五洲大道58378088", "I原创--浦西立昌18916639060", "J原创--洋山码头13301798150", "K原创--芦潮港危库17721213761", "L办公室", "M加油站" ],
        objectArray: [ {
            id: 0,
            name: "A请选择寄单地址"
        }, {
            id: 1,
            name: "B原创--凌海路13817461987"
        }, {
            id: 2,
            name: "C原创--张杨北路15221730828"
        }, {
            id: 3,
            name: "D原创--华东路15902138014"
        }, {
            id: 4,
            name: "E原创--外四/越海路17721333905"
        }, {
            id: 5,
            name: "F原创--芦潮港15821111139"
        }, {
            id: 6,
            name: "G原创--港城路15000021161"
        }, {
            id: 7,
            name: "H原创--五洲大道58378088"
        }, {
            id: 8,
            name: "I原创--浦西立昌18916639060"
        }, {
            id: 9,
            name: "J原创--洋山码头13301798150"
        }, {
            id: 10,
            name: "K原创--芦潮港危库17721213761"
        }, {
            id: 11,
            name: "L办公室"
        }, {
            id: 12,
            name: "M加油站"
        } ],
        index: 0,
        orderid: "",
        result: "",
        btn: 0
    },
    onLoad: function(t) {
        (e = this).setData({
            orderid: t.id
        }), wx.request({
            url: a.data.lost + "/index/orderIntro2",
            method: "GET",
            dataType: "html",
            data: {
                id: e.data.orderid,
                openid: wx.getStorageSync("openid")
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                var t = JSON.parse(a.data);
                e.setData({
                    result: t.result
                }), "" == t.result.gongchang || "0" == t.result.gongchang ? e.setData({
                    btn: 1
                }) : "" == t.result.lichang || "0" == t.result.lichang ? e.setData({
                    btn: 2
                }) : "" == t.result.chayan || "0" == t.result.chayan ? e.setData({
                    btn: 3
                }) : "" != t.result.jingang && "0" != t.result.jingang || e.setData({
                    btn: 4
                });
                for (var d in t.sendaddr) t.sendaddr[d] == t.result.sendAddr && e.setData({
                    index: d
                });
            }
        });
    },
    bindPickerChange: function(t) {
        e = this;
        var d = t.detail.value;
        e.setData({
            index: t.detail.value
        }), wx.request({
            url: a.data.lost + "/index/editAddr",
            method: "GET",
            dataType: "html",
            data: {
                id: e.data.orderid,
                openid: wx.getStorageSync("openid"),
                sendAddr: d
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                wx.showToast({
                    title: e.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    onPiao: function(a) {
        wx.navigateTo({
            url: "../xiaopiao/xiaopiao?id=" + e.data.orderid
        });
    },
    save: function(t) {
        wx.showModal({
            title: "",
            content: "您确定提交吗",
            success: function(d) {
                d.confirm && wx.request({
                    url: a.data.lost + "/index/orderSave",
                    method: "POST",
                    dataType: "html",
                    data: {
                        id: e.data.orderid,
                        type: t.currentTarget.id
                    },
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        "1" == a.data ? wx.navigateTo({
                            url: "../orderIntro/orderIntro?id=" + e.data.orderid
                        }) : wx.showToast({
                            title: "服务器繁忙",
                            icon: "none",
                            duration: 2e3
                        });
                    }
                });
            }
        });
    },
    onPreRecordedReceipt: function(a) {
        wx.navigateTo({
            url: "../orderUploadzxd/orderUploadzxd?id=" + e.data.orderid
        });
    },
    onSealNumber: function(a) {
        wx.navigateTo({
            url: "../orderUpload/orderUpload?id=" + e.data.orderid
        });
    }
});