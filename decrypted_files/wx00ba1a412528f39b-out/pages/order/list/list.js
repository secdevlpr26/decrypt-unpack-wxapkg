var t = getApp(), e = require("../../../utils/api/order.js"), a = require("../../../utils/utils.js");

Page({
    data: {
        listStatus: 1,
        pageStatus: 1,
        error: !1,
        orderStatus: "",
        listHeight: 0,
        orderBlock: [],
        idx: 0
    },
    onLoad: function(t) {
        this.setData({
            orderStatus: t.status || "0_2_3_4_5_6_7_8"
        }), this.loadList(!0);
    },
    reloadHandler: function() {
        this.setData({
            pageStatus: 1
        }), this.loadList(!0);
    },
    loadList: function(t) {
        var a = this;
        this.setData({
            listStatus: 2
        }), e.getList({
            orderStatus: this.data.orderStatus,
            begin: 5 * a.data.idx,
            count: 5
        }, function(t) {
            for (var e = t.order_list || [], r = 0; r < e.length; ++r) for (var o = e[r], s = 0; s < o.product_list.length; ++s) {
                for (var n = o.product_list[s], i = n.sku_id.split(";"), d = [], u = 0; u < i.length; ++u) {
                    var l = i[u].split(":");
                    l && l[1] && d.push(l[1].replace(/^\$/, ""));
                }
                n.skuname_list = d;
            }
            var c = {
                listHeight: wx.getSystemInfoSync().windowHeight - 45,
                listStatus: e.length < 5 ? 3 : 1,
                pageStatus: 0
            };
            e.length > 0 && (c["orderBlock[" + a.data.idx++ + "]"] = e), a.setData(c);
        }, function(e) {
            t && a.setData({
                error: !0
            }), a.setData({
                listStatus: 1,
                pageStatus: 2
            });
        }, function() {
            t && a.setData({
                pageStatus: 2
            }), a.setData({
                listStatus: 1
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    scrollToLowerHandler: function() {
        3 != this.data.listStatus && this.loadList();
    },
    gotoDetailHandler: function(a) {
        var r = a.currentTarget.dataset.order;
        t.globalData._orderDetail = r, e.getDetail(r.out_trade_no, function(e) {
            e.express_content = e.express_content || {}, e.express_content.order_id = r.order_id, 
            e.express_content.track_no = r.track_no, t.globalData._orderDetail = e.order_info, 
            t.globalData._expressDetail = e.express_content;
        }, function(t) {}, function() {}, function() {
            wx.navigateTo({
                url: "/pages/order/detail/detail"
            });
        });
    },
    gotoExpress: function(r) {
        var o = r.currentTarget.dataset.id, s = r.currentTarget.dataset.track_no;
        t.globalData._expressDetail = {
            order_id: o,
            track_no: s
        }, e.getDetail(o, function(e) {
            e.express_content ? (e.express_content.order_id = o, e.express_content.track_no = s, 
            t.globalData._expressDetail = e.express_content) : a.alert("暂无物流信息");
        }, function(t) {}, function() {}, function() {
            wx.navigateTo({
                url: "/pages/order/express/express"
            });
        });
    },
    gotoOrderByStatus: function(t) {
        this.setData({
            pageStatus: 1,
            orderBlock: [],
            idx: 0,
            orderStatus: t || "0_2_3_4_5_6_7_8"
        }), this.loadList(!0);
    },
    gotoAllOrder: function() {
        this.gotoOrderByStatus("0_2_3_4_5_6_7_8");
    },
    gotoSellerSendOrder: function() {
        this.gotoOrderByStatus("2");
    },
    gotoBuyerConfirmGoodsOrder: function() {
        this.gotoOrderByStatus("3_4");
    },
    gotoFinishOrder: function() {
        this.gotoOrderByStatus("5");
    }
});