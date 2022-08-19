require("../../../comm/script/fetch"), require("../../../util/util");

require("../../../component/message/message.js");

var e = require("../../../utils/server");

Page({
    data: {
        isDropDown: !1,
        emptyList: !1,
        showTip: !1,
        showRefresher: !1,
        isShow: !1,
        orderList: [],
        currentPage: 0,
        hasMore: !0,
        repairStatusTitles: [ "订单已取消", "订单处理中", "订单已预约", "工程师出发", "订单已维修", "订单已完成", "维修中", "门店维修中" ],
        recycleStatusTitles: [ "订单处理中", "已成功预约", "工程师上门中", "回收完成", "回收完成", "订单已取消", "订单状态未知" ]
    },
    onLoad: function(e) {
        var r = this;
        wx.showLoading({
            title: "加载中",
            mask: !0
        }), wx.showNavigationBarLoading(), r.setData({
            showTip: !1,
            showRefresher: !1,
            isShow: !1,
            orderList: [],
            currentPage: 0,
            hasMore: !0
        }), r.loadOrderList(!0);
    },
    onPullDownRefresh: function() {
        var e = this;
        wx.showNavigationBarLoading(), e.loadOrderList(!0);
    },
    onShow: function() {
        this.setData({
            showRefresher: !1
        });
    },
    loadOrderList: function(r) {
        var t = this;
        r ? t.setData({
            currentPage: 1
        }) : t.setData({
            currentPage: t.data.currentPage + 1
        });
        var a = this, o = getApp().globalData.userInfo.user_id;
        e.getJSON("/User/getOrderList/user_id/" + o + "/page/" + t.data.currentPage, function(e) {
            wx.hideLoading(), wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
            var r = e.data.result, o = a.data.orderList;
            for (var i in r) o.push(r[i]);
            wx.stopPullDownRefresh(), a.setData({
                orderList: r
            }), t.setData({
                isShow: !0,
                showTip: !0,
                hasMore: !1,
                showRefresher: !1
            });
        });
    },
    selectOrder: function(e) {
        var r = this, t = e.currentTarget.dataset.idx, a = r.data.orderList[t];
        "1" != r.data.orderList[t].type ? wx.navigateTo({
            url: "../../repair/orderDetail/orderDetail?id=" + a.order_id
        }) : wx.navigateTo({
            url: "../../recycle/orderDetail/orderDetail?id=" + a.order_id
        });
    },
    onReachBottom: function() {
        var e = this;
        e.data.hasMore && (wx.showNavigationBarLoading(), e.loadOrderList(!1));
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});