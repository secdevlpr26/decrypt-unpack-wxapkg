var t = require("../../../comm/script/fetch"), a = (require("../../../comm/script/config"), 
require("../../../util/util"));

require("../../../util/md5"), require("../../../component/message/message.js"), 
getApp();

var e = require("../../../utils/server");

Page({
    data: {
        news: !1,
        mid: "",
        mname: "",
        mpic: "",
        bname: "",
        bid: "",
        price: "",
        recycler_id: "",
        info: [],
        otherFault: [],
        progressNum: "",
        progressRate: "",
        curId: "",
        editId: "",
        faultIdList: [],
        length: 1,
        showOther: !1,
        faultList: [],
        otherFaultList: [],
        tipList: {},
        disabled: !0,
        scrollTop: 0,
        winRate: "",
        showMask: !1,
        showView: !1,
        selectInfo: [],
        attr_fault_data: ""
    },
    onLoad: function(t) {
        var a = this;
        e.getJSON("/Goods/goodsInfo", {
            id: t.goods_id
        }, function(t) {
            a.setData({
                goods: t.data.result.goods
            }), a.setData({
                spec: t.data.result.goods.goods_spec_list
            }), a.setData({
                info: t.data.result.goods.goods_spec_list
            }), a.setData({
                other: t.data.result.goods.other
            }), a.setData({
                price: t.data.result.spec_goods_price
            }), a.setData({
                editId: t.data.result.goods.goods_spec_list[0].id
            }), a.setData({
                progressRate: 100 / t.data.result.goods.goods_spec_list.length
            }), t.data.result.goods.other.count;
        }), a.setData({
            showView: !0
        });
    },
    getFaultList: function(a) {
        var e = this, i = [];
        t.getRecycleFault(a, function(t) {
            t[0].child.map(function(t, a, e) {
                t.attr_fault_info = t.attr_fault_info.split("（")[0];
            }), t.length > 1 && (t[1].child.map(function(t, a, e) {
                t.attr_fault_info = t.attr_fault_info.split("（")[0];
            }), i = t.pop());
            t.length;
            e.setData({
                info: t,
                otherFault: i,
                curId: t[0].id
            }), e.setData({
                showView: !0
            }), wx.hideLoading();
        }, function(t) {});
    },
    onShareAppMessage: function() {},
    topItemTap: function(t) {
        var a = this, e = t.currentTarget.dataset.fid;
        return void (t.currentTarget.dataset.index >= this.data.length || a.setData({
            editId: e
        }));
    },
    downBlockItemTap: function(t) {
        var a = t.currentTarget.dataset.fid, e = t.currentTarget.dataset.fname, i = t.currentTarget.dataset.detailid, s = t.currentTarget.dataset.info, r = t.currentTarget.dataset.idx, d = t.currentTarget.dataset.index, o = this.data.faultList, n = this.data.length, l = this.data.spec.length;
        if (o.length + 1 > r && l > r + 1 ? this.setData({
            editId: this.data.spec[r + 1].id
        }) : this.setData({
            editId: ""
        }), o[r]) o[r] = {
            fid: a,
            fname: e,
            detailid: i,
            info: s,
            idx: r,
            index: d
        }, this.setData({
            faultList: o,
            editId: ""
        }); else {
            if (r < l - 1) {
                var u = this.data.info[Number(r) + 1].id;
                this.setData({
                    curId: u,
                    scrollTop: 100 * (Number(r) + 1) * this.data.winRate
                });
            } else this.setData({
                curId: "",
                showOther: !0,
                disabled: !1
            });
            o[r] = {
                fid: a,
                fname: e,
                detailid: i,
                info: s,
                idx: r,
                index: d
            }, n++, this.setData({
                faultList: o,
                length: n,
                progressNum: this.data.progressRate * (r + 1)
            });
        }
        this.setData({
            news: !1,
            nindex: 0
        });
        for (var c = this.data.faultList, i = 0; i < c.length; i++) "未拆封未激活" == c[i].info && this.setData({
            news: !0,
            nindex: c[i].idx,
            disabled: !1,
            progressNum: 100
        });
    },
    otherFaultItemTap: function(t) {
        var e = t.currentTarget.dataset.fid, i = t.currentTarget.dataset.fname, s = t.currentTarget.dataset.detailid, r = t.currentTarget.dataset.info, d = t.currentTarget.dataset.index, o = this.data.otherFaultList;
        a.isEmpty(o[d] || !!o[d]) ? (o[d] = {
            fid: e,
            fname: i,
            detailid: s,
            info: r,
            index: d
        }, this.setData({
            otherFaultList: o
        })) : (delete o[d], this.setData({
            otherFaultList: o
        }));
    },
    tipTap: function(t) {
        var a = t.currentTarget.dataset.finfo, e = t.currentTarget.dataset.photopath, i = "undefined" != t.currentTarget.dataset.photoinfo ? t.currentTarget.dataset.photoinfo : "";
        this.setData({
            tipList: {
                imgUrl: e,
                title: a,
                content: i
            },
            showMask: !0
        });
    },
    iconTap: function(t) {
        this.setData({
            showMask: !1
        });
    },
    toResultBtnTap: function() {
        wx.showLoading({
            title: "估价中",
            mask: !0
        });
        for (var t = this.data.otherFaultList, a = this.data.faultList, e = 0, i = 0; i < t.length; i++) t[i] && (t[i].price = this.data.price[t[i].detailid].price, 
        e += parseInt(this.data.price[t[i].detailid].price), console.log(this.data.price[t[i].detailid].price));
        for (i = 0; i < a.length; i++) a[i].price = this.data.price[a[i].detailid].price, 
        console.log(this.data.price[a[i].detailid].price), e += parseInt(this.data.price[a[i].detailid].price);
        return t = JSON.stringify(t), a = JSON.stringify(a), wx.navigateTo({
            url: "../resultPage/resultPage?goods_id=" + this.data.goods.goods_id + "&otherFaultList=" + t + "&faultList=" + a + "&price=" + e
        }), void wx.hideLoading();
    },
    getAppraisePrice: function() {
        var a = this, e = this.data.mid, i = [];
        this.data.faultList.forEach(function(t) {
            i.push(t.detailid);
        }), this.data.otherFaultList.forEach(function(t) {
            i.push(t.detailid);
        });
        var s = i.join(",");
        this.setData({
            attr_fault_data: s
        }), t.getAppraisePrice(e, s, function(t) {
            a.setData({
                price: Number(t.price),
                recycler_id: t.recycler_id
            }), a.toResultPage();
        }, function(t) {});
    },
    toResultPage: function() {
        var t = this.data.mid, a = this.data.mname, e = this.data.mpic, i = this.data.bname, s = this.data.bid, r = this.data.price, d = this.data.attr_fault_data, o = this.data.recycler_id, n = this.data.selectInfo.join("分隔符");
        wx.navigateTo({
            url: "../resultPage/resultPage?mid=" + t + "&mname=" + a + "&mpic=" + e + "&bid=" + s + "&bname=" + i + "&price=" + r + "&attr_fault_data=" + d + "&recycler_id=" + o + "&selectInfoStr=" + n
        }), wx.hideLoading();
    },
    resetAll: function() {
        var t = this.data.info[0].id;
        this.setData({
            curId: t,
            editId: "",
            faultList: [],
            otherFaultList: [],
            progressNum: 0,
            length: 1,
            attr_fault_data: "",
            showOther: !1,
            scrollTop: 0,
            disabled: !0
        });
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});