var e = require("../../../comm/script/fetch"), t = require("../../../util/util"), a = require("../../../component/message/message.js"), i = require("../../../utils/server");

Page({
    data: {
        message: {},
        isShow: !1,
        orderId: "",
        order: {},
        map: {
            lat: 0,
            lng: 0,
            workerMarker: {
                id: 0,
                iconPath: "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/loc_marker.png",
                latitude: 0,
                longitude: 0
            },
            userMarker: {
                id: 1,
                iconPath: "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/loc_marker.png",
                latitude: 0,
                longitude: 0
            }
        },
        statusTitles: [ "订单已取消", "订单处理中", "订单已预约", "工程师出发", "维修完成待支付", "维修完成", "维修中", "门店维修中" ],
        statusIcons: [ "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/order_cancelled.png", "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/order_created.png", "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/order_assigned.png", "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/order_setoff.png", "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/order_unpaid.png", "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/order_done.png", "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/order_setoff.png", "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/order_setoff.png" ],
        reserveDateTime: "",
        createDateTime: ""
    },
    home: function(e) {
        var t = this.data.info.order_id;
        wx.showModal({
            title: "提示",
            showCancel: !0,
            content: "确定已现金支付,客服将人工电话审核？",
            success: function(e) {
                e.confirm && i.getJSON("/User/xjPay", {
                    orderid: t
                }, function(e) {
                    wx.showToast({
                        title: e.data.msg
                    }), setTimeout(function() {
                        wx.navigateBack({
                            delta: 1,
                            success: function(e) {},
                            fail: function(e) {},
                            complete: function(e) {}
                        });
                    }, 2e3);
                });
            }
        });
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
        var a = e, o = this;
        console.log(a);
        var n = a.id;
        o.setData({
            orderid: n
        }), i.getJSON("/User/getOrderDetail?order_id=" + n, {}, function(e) {
            if (t.setData({
                isShow: !0
            }), wx.stopPullDownRefresh(), wx.hideNavigationBarLoading(), wx.hideLoading(), 1 == e.data.status) {
                var a = e.data.result;
                a.colorname || (a.colorname = ""), a.couponname || (a.couponname = ""), a.desc || (a.desc = ""), 
                a.addTime = o.getTime(new Date(1e3 * parseInt(a.addTime))), a.price = parseFloat(a.couponPrice) + parseFloat(a.totalPrice), 
                o.setData({
                    info: a
                });
            }
        });
    },
    getTime: function(e) {
        if (console.log(e), e) {
            var t = e.getYear() + 1900, a = e.getMonth() + 1, i = e.getDate(), o = e.getHours(), n = e.getMinutes(), r = e.getSeconds();
            return t + "-" + this.bl(a) + "-" + this.bl(i) + " " + this.bl(o) + ":" + this.bl(n) + ":" + this.bl(r);
        }
        var t = (e = new Date()).getYear() + 1900, a = e.getMonth() + 1, i = e.getDate(), o = e.getHours(), n = e.getMinutes(), r = e.getSeconds();
        return t + "-" + this.bl(a) + "-" + this.bl(i) + " " + this.bl(o) + ":" + this.bl(n) + ":" + this.bl(r);
    },
    bl: function(e) {
        return e < 10 ? "0" + e : e;
    },
    onPullDownRefresh: function() {
        var e = this, t = this, a = e.data.orderid;
        e.setData({
            orderid: a
        }), i.getJSON("/User/getOrderDetail?order_id=" + a, {}, function(a) {
            if (t.setData({
                isShow: !0
            }), wx.stopPullDownRefresh(), wx.hideNavigationBarLoading(), wx.hideLoading(), 1 == a.data.status) {
                var i = a.data.result;
                i.colorname || (i.colorname = ""), i.couponname || (i.couponname = ""), i.desc || (i.desc = ""), 
                i.addTime = e.getTime(new Date(1e3 * parseInt(i.addTime))), i.price = parseFloat(i.couponPrice) + parseFloat(i.totalPrice), 
                e.setData({
                    info: i
                });
            }
        });
    },
    getOrderDetail: function() {
        var t = this;
        e.getOrderDetail.call(t, t.data.orderId, function(e) {
            t.processOrderData(e), t.updateLocations(e.status, e.RepairPerson), wx.hideLoading(), 
            t.setData({
                isShow: !0
            }), wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
        }, function(e) {
            wx.stopPullDownRefresh(), wx.hideLoading(), wx.hideNavigationBarLoading(), a.show.call(t, {
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
        var i = this;
        e.getWorkerLocation.call(i, t, function(e) {
            i.setData({
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
            wx.hideLoading(), a.show.call(i, {
                icon: "tip",
                content: e
            });
        });
    },
    processOrderData: function(e) {
        var a = e.status;
        e.statusTitle = this.data.statusTitles[a] ? this.data.statusTitles[a] : "订单状态未知", 
        e.statusIcon = this.data.statusIcons[a] ? this.data.statusIcons[a] : "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/order_cancelled.png";
        var i = t.formatDate_imprecise(e.createTime) + " " + t.getTime_noSecond(e.createTime), o = t.formatDate_imprecise(e.reserveTime) + " " + t.getTime_noSecond(e.reserveTime) + "-" + t.getTime_noSecond(e.reserveTime2), n = e.statusTitle;
        switch (a) {
          case 0:
            n = "";
            break;

          case 1:
            n = "请注意客服来电，与您进一步确认维修信息";
            break;

          case 2:
            n = "预约上门时间为：" + o;
            break;

          case 3:
            n = "工程师正在上门中，工程师" + e.rName + "（工号）已出发";
            break;

          case 4:
          case 5:
            n = 0 === e.payStatus ? "设备已维修完成，等待您的确认支付" : "免费上门保修日期截至" + e.WarrantyPeriod;
            break;

          default:
            n = "";
        }
        e.statusDesc = n, this.setData({
            order: e,
            createDateTime: i,
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
            phoneNumber: getApp().globalData.userInfo.mobile1 + ""
        });
    },
    pay: function() {
        var e = this.data.info.order_id, t = this.data.info.order_amount;
        wx.navigateTo({
            url: "../../pay/pay?orderid=" + e + "&order_amount=" + t
        });
    },
    confirm: function() {
        var e = this.data.info.order_id, t = (this.data.info.order_amount, e), a = getApp();
        console.log("order id : " + t), i.getJSON("/User/xianConfirm/user_id/2/order_id/" + t, function(e) {
            wx.hideToast(), a.globalData.wxdata = e.data.result, wx.showToast({
                title: "确认成功"
            }), setTimeout(function() {
                wx.navigateBack({});
            }, 1e3);
        });
    },
    pay1: function() {
        var e = this.data.info.order_id, t = (this.data.info.order_amount, this), a = e, o = getApp();
        console.log("order id : " + a), i.getJSON("/Cart/getWXPayData3/user_id/2/order_id/" + a, function(e) {
            wx.hideToast(), o.globalData.wxdata = e.data.result, t.pay2();
        });
    },
    pay2: function() {
        var e = getApp().globalData.wxdata.wdata, t = e.timeStamp + "", a = e.nonceStr + "", i = e.package, o = e.sign;
        wx.requestPayment({
            nonceStr: a,
            package: i,
            signType: "MD5",
            timeStamp: t,
            paySign: o,
            success: function(e) {
                console.log(e), wx.navigateTo({
                    url: "../pay_success/pay_success"
                });
            },
            fail: function(e) {
                console.log(e), wx.showToast({
                    title: "支付失败",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1,
                        success: function(e) {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, 2e3);
            }
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