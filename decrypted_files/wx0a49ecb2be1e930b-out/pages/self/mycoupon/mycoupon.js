var t = getApp();

Page({
    data: {
        couponInfo: {},
        showtab: 0,
        showtabtype: "",
        tabnav: {},
        unusedata: {},
        useddata: {},
        expiredata: {},
        startx: 0,
        endx: 0,
        critical: 20,
        marginleft: 0,
        unusesize: 0,
        usedsize: 0,
        expiredsize: 0,
        isShowNullMask: !1,
        imgArr_bg: [ "coupon_valid.png", "coupon_invalid.png", "coupon_invalid.png" ],
        imgArr_icon: [ "coupon-unuse.png", "coupon-used.png", "coupon-expired.png" ]
    },
    onLoad: function() {
        this.setData({
            tabnav: {
                tabnum: 3,
                tabitem: [ {
                    id: 1,
                    text: "未使用"
                }, {
                    id: 2,
                    text: "已使用"
                }, {
                    id: 3,
                    text: "已过期"
                } ]
            }
        }), this.fetchTabData(0);
    },
    fetchData: function(a) {
        var e = this;
        wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 1e4,
            mask: !0
        }), wx.request({
            url: t.globalData.comUrl + "act_getMemberActivityList.action",
            data: {
                memberId: t.getMemberId(),
                customizetabId: t.getCustomizeId("Activity"),
                memberStatus: a,
                status: a
            },
            success: function(a) {
                wx.hideToast();
                var s = t.getJsonData(a.data);
                if (s.length) {
                    for (var i = [], n = 0; n < s.length; n++) {
                        var o = s[n];
                        o.typeName = e.getCouponTypeName(o.type), "1" == o.type ? (o.amountReachedName = "满" + o.amountReached + "元可用", 
                        o.tipName = "满" + o.amountReached + "减" + o.discountAmount) : o.tipName = "优惠" + o.discountAmount + "元", 
                        o.tip = o.instructure && "" != o.instructure && "null" != o.instructure ? o.instructure : "", 
                        parseFloat(o.amountReached) > parseFloat(e.data.allPrice) ? o.isEffect = !1 : o.isEffect = !0, 
                        o.beginTime = o.beginTime.substring(0, 10), o.endTime = o.endTime.substring(0, 10), 
                        i.push(o);
                    }
                    e.setData({
                        couponInfo: i,
                        isShowNullMask: !1
                    });
                } else e.setData({
                    isShowNullMask: !0
                });
            },
            fail: function() {
                t.hint();
            }
        });
    },
    getCouponTypeName: function(t) {
        switch (Number(t)) {
          case 1:
            return "满减优惠";

          case 2:
            return "满包邮";

          case 3:
            return "限时秒杀";

          case 4:
            return "现金红包";

          case 5:
            return "拼团";

          default:
            return "";
        }
    },
    fetchTabData: function(t) {
        switch (this.setData({
            couponInfo: {},
            isShowNullMask: !1
        }), console.log(Number(t)), Number(t)) {
          case 0:
            this.fetchData("0");
            break;

          case 1:
            this.fetchData("1");
            break;

          case 2:
            this.fetchData("3");
            break;

          default:
            return;
        }
    },
    setTab: function(t) {
        var a = t.currentTarget.dataset;
        this.setData({
            showtab: Number(a.tabindex),
            showtabtype: a.type
        }), this.fetchTabData(a.tabindex);
    },
    scrollTouchstart: function(t) {
        var a = t.touches[0].pageX;
        this.setData({
            startx: a
        });
    },
    scrollTouchmove: function(t) {
        var a = t.touches[0].pageX, e = this.data;
        this.setData({
            endx: a
        }), a - e.startx < e.critical && a - e.startx > -e.critical && this.setData({
            marginleft: a - e.startx
        });
    },
    scrollTouchend: function(t) {
        var a = this.data;
        a.endx - a.startx > a.critical && a.showtab > 0 ? this.setData({
            showtab: a.showtab - 1
        }) : a.endx - a.startx < -a.critical && a.showtab < this.data.tabnav.tabnum - 1 && this.setData({
            showtab: a.showtab + 1
        }), this.fetchTabData(a.showtab), this.setData({
            startx: 0,
            endx: 0,
            marginleft: 0
        });
    },
    useCoupon: function(t) {
        wx.redirectTo({
            url: "../../store/store-detail/store-detail?tabContentId=" + t.currentTarget.dataset.id
        });
    }
});