var e = require("../../../comm/script/fetch"), t = require("../../../util/util"), i = require("../../../component/message/message.js"), a = require("../../../utils/server");

Page({
    data: {
        message: {},
        isShow: !1,
        orderId: "",
        order: {},
        createDateTime: "",
        reservedDateTime: "",
        statusTitles: [ "订单处理中", "订单已预约", "工程师出发", "回收完成", "回收完成", "订单已取消" ],
        statusIcons: [ "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/order_created.png", "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/order_assigned.png", "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/order_setoff.png", "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/order_done.png", "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/order_done.png", "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/order_cancelled.png" ]
    },
    onShareAppMessage: function(e) {
        return {
            path: "/pages/repair/orderDetail/orderDetail?id=" + this.data.orderId,
            success: function(e) {},
            fail: function(e) {}
        };
    },
    onLoad: function(e) {
        var t = this;
        wx.showLoading({
            title: "加载中",
            mask: !0
        }), wx.showNavigationBarLoading(), t.setData({
            orderId: e.id
        });
        var i = e, o = this;
        console.log(i);
        var r = i.id;
        a.getJSON("/User/getROrderDetail?order_id=" + r, {}, function(e) {
            if (t.setData({
                isShow: !0
            }), wx.stopPullDownRefresh(), wx.hideNavigationBarLoading(), wx.hideLoading(), 1 == e.data.status) {
                var i = e.data.result;
                i.colorname || (i.colorname = ""), i.couponname || (i.couponname = ""), i.desc || (i.desc = ""), 
                i.addTime = o.getTime(new Date(1e3 * parseInt(i.addTime))), i.price = parseFloat(i.couponPrice) + parseFloat(i.totalPrice), 
                o.setData({
                    info: i
                });
            }
        });
    },
    getTime: function(e) {
        if (console.log(e), e) {
            var t = e.getYear() + 1900, i = e.getMonth() + 1, a = e.getDate(), o = e.getHours(), r = e.getMinutes(), n = e.getSeconds();
            return t + "-" + this.bl(i) + "-" + this.bl(a) + " " + this.bl(o) + ":" + this.bl(r) + ":" + this.bl(n);
        }
        var t = (e = new Date()).getYear() + 1900, i = e.getMonth() + 1, a = e.getDate(), o = e.getHours(), r = e.getMinutes(), n = e.getSeconds();
        return t + "-" + this.bl(i) + "-" + this.bl(a) + " " + this.bl(o) + ":" + this.bl(r) + ":" + this.bl(n);
    },
    bl: function(e) {
        return e < 10 ? "0" + e : e;
    },
    onPullDownRefresh: function() {
        var e = this;
        wx.showNavigationBarLoading(), e.getOrderDetail();
    },
    getOrderDetail: function() {
        var t = this;
        e.getOrderDetail.call(t, t.data.orderId, function(e) {
            t.processOrderData(e), t.updateLocations(e.status, e.RepairPerson), wx.hideLoading(), 
            t.setData({
                isShow: !0
            }), wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
        }, function(e) {
            wx.stopPullDownRefresh(), wx.hideLoading(), wx.hideNavigationBarLoading(), i.show.call(t, {
                content: e,
                icon: "tip"
            });
        });
    },
    updateLocations: function(e, t) {
        3 === e && (this.updateMyLocation(), this.updateWorkerLocation(t));
    },
    updateMyLocation: function() {
        wx.getLocation({
            type: "gcj02",
            success: function(e) {}
        });
    },
    updateWorkerLocation: function(t) {
        var a = this;
        e.getWorkerLocation.call(a, t, function(e) {
            a.setData({
                workerLoc: {
                    lng: e.longitude,
                    lat: e.latitude,
                    markers: [ {
                        iconPath: "../../../img/mark.png",
                        longitude: e.longitude,
                        latitude: e.latitude,
                        width: 24,
                        height: 31
                    } ]
                }
            });
        }, function(e) {
            wx.hideLoading(), i.show.call(a, {
                icon: "tip",
                content: e
            });
        });
    },
    processOrderData: function(e) {
        var i = e.status;
        e.statusTitle = this.data.statusTitles[i] ? this.data.statusTitles[i] : "订单状态未知", 
        e.statusIcon = this.data.statusIcons[i] ? this.data.statusIcons[i] : "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/order_cancelled.png";
        var a = t.formatDate_imprecise(e.createTime) + " " + t.getTime_noSecond(e.createTime), o = t.formatDate_imprecise(e.reserveTime) + " " + t.getTime_noSecond(e.reserveTime) + "-" + t.getTime_noSecond(e.reserveTime2), r = e.statusTitle;
        switch (i) {
          case 0:
            r = "";
            break;

          case 1:
            r = "请注意客服来电，与您进一步确认维修信息";
            break;

          case 2:
            r = "预约上门时间为：" + o;
            break;

          case 3:
            r = "工程师正在上门中，工程师" + e.rName + "（工号）已出发";
            break;

          case 4:
          case 5:
            r = 0 === e.payStatus ? "设备已维修完成，等待您的确认支付" : "免费上门保修日期截至" + e.WarrantyPeriod;
            break;

          default:
            r = "";
        }
        e.statusDesc = r, this.setData({
            order: e,
            createDateTime: a,
            reserveDateTime: o
        }), this.formatCouponAmount();
    },
    connectEngineer: function() {
        var e = this.data.info.customer_phone + "";
        wx.makePhoneCall({
            phoneNumber: e
        });
    },
    connectService: function() {
        wx.makePhoneCall({
            phoneNumber: getApp().globalData.userInfo.mobile1
        });
    },
    pay: function() {
        var e = this.data.info.order_id, t = this.data.info.order_amount;
        wx.navigateTo({
            url: "../../pay/pay?orderid=" + e + "&order_amount=" + t
        });
    },
    formatCouponAmount: function() {
        var e = this.data.order;
        e.coupon.amount = e.coupon.amount.toFixed(2), this.setData({
            order: e
        });
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});