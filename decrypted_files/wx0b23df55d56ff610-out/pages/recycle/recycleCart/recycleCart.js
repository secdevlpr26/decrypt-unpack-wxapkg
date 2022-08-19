var t = require("../../../comm/script/fetch"), e = (require("../../../comm/script/config"), 
require("../../../util/util"), require("../../../util/jwt.js"), require("../../../util/md5"), 
require("../../../component/message/message.js")), a = getApp();

Page({
    data: {
        height: 0,
        touchStartPageX: 0,
        touchEndPageX: 0,
        touchStartPageY: 0,
        touchEndPageY: 0,
        touchStartTimestamp: 0,
        touchEndTimestamp: 0,
        showCart: !1,
        showDetail: !1,
        emptyCart: !1,
        detailList: [],
        selectList: [],
        validList: [],
        invalidList: [],
        selectNum: 0,
        selectAllOn: !1,
        selectPrice: 0,
        curDel: "",
        delMode: !1
    },
    onLoad: function(t) {
        var e = this;
        this.setData({
            iconSize: 28 * a.globalData.winRate
        }), wx.getSystemInfo({
            success: function(t) {
                var a = t.windowWidth / 750, i = t.windowHeight - 140 * a;
                e.setData({
                    height: i + "px"
                });
            }
        }), this.getCartList();
    },
    onShow: function() {},
    onPullDownRefresh: function() {
        this.getCartList();
    },
    touchStart: function(t) {
        1 == t.touches.length && this.setData({
            touchStartPageX: t.changedTouches[0].pageX,
            touchStartPageY: t.changedTouches[0].pageY,
            touchStartTimestamp: t.timeStamp,
            startIdx: t.currentTarget.dataset.idx
        });
    },
    touchEnd: function(t) {
        var e = this.data.touchStartPageX, a = this.data.touchStartTimestamp, i = this.data.startIdx;
        if (this.setData({
            touchEndPageX: t.changedTouches[0].pageX,
            touchEndPageY: t.changedTouches[0].pageY,
            touchEndTimestamp: t.timeStamp,
            endIdx: t.currentTarget.dataset.idx
        }), t.currentTarget.dataset.idx == i && !(t.timeStamp - a > 500) && !(Math.abs(t.changedTouches[0].pageY - this.data.touchStartPageY) > 30) && (e - t.changedTouches[0].pageX > 40 && this.setData({
            curDel: t.currentTarget.dataset.idx
        }), t.changedTouches[0].pageX - e > 40)) {
            if (t.currentTarget.dataset.idx != this.data.curDel) return;
            this.setData({
                curDel: ""
            });
        }
    },
    getCartList: function() {
        var e = this, a = [], i = [], s = [];
        wx.showLoading({
            title: "获取数据中"
        }), t.getRecycleCart(function(t) {
            t.map(function(t, e, a) {
                a[e].now_price = Number(t.now_price), a[e].select = !1;
            }), t.forEach(function(t, e, s) {
                0 == t.shr_display ? (0 == e && (t.select = !0), a.push(t)) : i.push(t);
            }), e.setData({
                validList: a,
                invalidList: i
            }), wx.hideLoading(), 0 != a.length && (s.push(a[0]), e.setData({
                selectList: s
            })), e.resetStatus();
        }, function(t) {
            wx.hideLoading();
        });
    },
    toggleItemSelect: function(t) {
        var e = t.currentTarget.dataset.index, a = t.currentTarget.dataset.id, i = this.data.selectList, s = this.data.validList, c = 0;
        this.data.selectList.find(function(t, e, i) {
            return c = e, t.Id == a;
        }) ? (s[e].select = !1, i.splice(c, 1)) : (s[e].select = !0, i.push(s[e])), this.setData({
            validList: s,
            selectList: i
        }), this.resetStatus();
    },
    selectAll: function() {
        var t = this.data.validList;
        if (this.data.selectAllOn) t.map(function(t, e, a) {
            a[e].select = !1;
        }), this.setData({
            validList: t,
            selectList: []
        }); else {
            var e = 0;
            t.map(function(t, a, i) {
                i[a].select = !0, e += Number(t.now_price);
            }), this.setData({
                validList: t,
                selectList: t
            });
        }
        this.resetStatus();
    },
    delOneList: function(a) {
        if (!this.delMode) {
            wx.showLoading({
                title: "删除中"
            }), this.setData({
                delModeL: !0
            });
            var i = this, s = a.currentTarget.dataset.index, c = a.currentTarget.dataset.id, n = this.data.selectList, r = this.data.validList, o = c;
            t.recycleCartDel(o, function(t) {
                console.log("删除成功？"), !0 === r[s].select && n.forEach(function(t, e, a) {
                    t.Id != c || n.splice(e, 1);
                }), r.splice(s, 1), i.setData({
                    selectList: n,
                    validList: r,
                    curDel: "",
                    delMode: !1
                }), i.resetStatus(), wx.hideLoading();
            }, function(t) {
                wx.hideLoading(), e.show.call(i, {
                    content: "删除失败，请稍后再试",
                    icon: "tip"
                });
            });
        }
    },
    deleteInvalid: function(a) {
        if (!this.delMode) {
            wx.showLoading({
                title: "清除中"
            });
            var i = this, s = [];
            this.data.invalidList.forEach(function(t, e, a) {
                s.push(t.Id);
            });
            var c = s.join();
            t.recycleCartDel(c, function(t) {
                i.setData({
                    invalidList: [],
                    curDel: "",
                    delMode: !1
                }), wx.hideLoading();
            }, function(t) {
                wx.hideLoading(), e.show.call(i, {
                    content: "删除失败，请稍后再试",
                    icon: "tip"
                });
            });
        }
    },
    showDetailTap: function(e) {
        var a = this, i = e.currentTarget.dataset.id;
        t.showCartDetail(i, function(t) {
            a.setData({
                detailList: t,
                showDetail: !0
            });
        }, function(t) {});
    },
    hideDetailTap: function(t) {
        this.setData({
            showDetail: !1
        });
    },
    toHome: function() {
        wx.switchTab({
            url: "/pages/recycle/home/home"
        });
    },
    resetStatus: function() {
        var t = this.data.validList, e = this.data.invalidList, a = this.data.selectList;
        if (0 == t.length && 0 == e.length ? this.setData({
            showCart: !1,
            emptyCart: !0
        }) : this.setData({
            showCart: !0,
            emptyCart: !1
        }), 0 == a.length) this.setData({
            selectNum: 0,
            selectAllOn: !1,
            selectPrice: 0
        }); else {
            var i = 0;
            a.map(function(t, e, a) {
                i += Number(t.now_price);
            }), this.setData({
                selectNum: a.length,
                selectAllOn: !0,
                selectPrice: i
            });
        }
    },
    toOrder: function() {
        var t = this.data.selectList;
        if (0 != t.length) {
            var a = [];
            t.forEach(function(t, e, i) {
                var s = t.mould_id, c = t.MouldName, n = t.Pic, r = t.BrandName, o = t.now_price + "", d = t.now_price + "", l = t.attr_fault_information, h = t.recycler_id, u = t.Id, g = JSON.stringify({
                    attr_fault_data: l,
                    mid: s,
                    recycler_id: h,
                    expected_price: d,
                    cart_id: u
                });
                a.push(JSON.stringify({
                    mid: s,
                    mname: c,
                    mpic: n,
                    bname: r,
                    price: o,
                    attrFault: g
                }));
            }), a = a.join("分隔符"), wx.redirectTo({
                url: "../createOrder/createOrder?selectInfo=" + a
            });
        } else e.show.call(this, {
            content: "请至少选择一项",
            icon: "tip"
        });
    },
    resetCurDel: function() {
        this.setData({
            curDel: ""
        });
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});