function t(t, a, e, r) {
    this.arrbillNo = t, this.arrPackages = a, this.arrGW = e, this.arrMEAS = r;
}

function a() {
    this.details = [];
}

var e, r = getApp();

Page({
    data: {
        orderid: "",
        result: "",
        rst: "",
        buttonClicked: "",
        count: "",
        info: {}
    },
    init: function() {
        this.setData({
            info: new a()
        });
    },
    onLoad: function(a) {
        this.init(), (e = this).setData({
            orderid: a.id
        }), wx.request({
            url: r.data.lost + "/index/orderUploadzxd2",
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
                var r = JSON.parse(a.data);
                if ("0" == r.result) wx.showToast({
                    title: "操作异常",
                    icon: "none",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateTo({
                        url: "../orderIntro/orderIntro?id=" + e.data.orderid
                    });
                }, 1800); else if (e.setData({
                    result: r.result,
                    count: r.count,
                    rst: r.rst
                }), "0" == r.count) {
                    var i = e.data.info;
                    i.details.push(new t(r.result.bl_num, r.result.pcs, r.result.kgs, r.result.volume)), 
                    e.setData({
                        info: i
                    });
                } else {
                    var s = e.data.info;
                    s.details.push(new t(r.result.bl_num, r.result.pcs, r.result.kgs, r.result.volume));
                    for (var o = 0; o < r.count; o++) s.details.push(new t(r.rst[o].bl_num, r.rst[o].pcs, r.rst[o].kgs, r.rst[o].volume));
                    e.setData({
                        info: s
                    });
                }
            }
        });
    },
    formSubmit: function(t) {
        if (e.setData({
            buttonClicked: !0
        }), e.data.info.details.length > 0) {
            for (var a = "", i = "", s = "", o = "", n = 0; n < e.data.info.details.length; n++) a += e.data.info.details[n].arrbillNo + "|", 
            i += e.data.info.details[n].arrPackages + "|", s += e.data.info.details[n].arrGW + "|", 
            o += e.data.info.details[n].arrMEAS + "|";
            t.detail.value.arrbillNo = a.substr(0, a.length - 1), t.detail.value.arrPackages = i.substr(0, i.length - 1), 
            t.detail.value.arrGW = s.substr(0, s.length - 1), t.detail.value.arrMEAS = o.substr(0, o.length - 1);
        } else t.detail.value.arrbillNo = "", t.detail.value.arrPackages = "", t.detail.value.arrGW = "", 
        t.detail.value.arrMEAS = "";
        t.detail.value.orderid = e.data.orderid, t.detail.value.openid = wx.getStorageSync("openid"), 
        wx.request({
            url: r.data.lost + "/index/orderUploadzxdSend2",
            method: "POST",
            dataType: "html",
            data: t.detail.value,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                "预录成功" == a.data ? wx.request({
                    url: r.data.lost + "/index/orderUploadzxdForm2",
                    method: "POST",
                    dataType: "html",
                    data: t.detail.value,
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        "预录成功" == t.data ? (wx.showToast({
                            title: "预录成功",
                            icon: "success",
                            duration: 2e3
                        }), setTimeout(function() {
                            wx.navigateTo({
                                url: "../orderIntro/orderIntro?id=" + e.data.orderid
                            });
                        }, 2e3)) : (e.setData({
                            buttonClicked: ""
                        }), wx.showToast({
                            title: t.data,
                            icon: "none",
                            duration: 2e3
                        }));
                    }
                }) : (e.setData({
                    buttonClicked: ""
                }), wx.showToast({
                    title: a.data,
                    icon: "none",
                    duration: 2e3
                }));
            }
        });
    },
    addItem: function(a) {
        var e = this.data.info;
        e.details.push(new t()), this.setData({
            info: e
        });
    },
    removeItem: function(t) {
        var a = this.data.info;
        a.details.pop(), this.setData({
            info: a
        });
    },
    setArrbillNo: function(t) {
        var a = parseInt(t.currentTarget.id.replace("arrbillNo-", "")), e = t.detail.value, r = this.data.info;
        r.details[a].arrbillNo = e, this.setData({
            info: r
        });
    },
    setArrPackages: function(t) {
        var a = parseInt(t.currentTarget.id.replace("arrPackages-", "")), e = t.detail.value, r = this.data.info;
        r.details[a].arrPackages = e, this.setData({
            info: r
        });
    },
    setArrGW: function(t) {
        var a = parseInt(t.currentTarget.id.replace("arrGW-", "")), e = t.detail.value, r = this.data.info;
        r.details[a].arrGW = e, this.setData({
            info: r
        });
    },
    setArrMEAS: function(t) {
        var a = parseInt(t.currentTarget.id.replace("arrMEAS-", "")), e = t.detail.value, r = this.data.info;
        r.details[a].arrMEAS = e, this.setData({
            info: r
        });
    }
});