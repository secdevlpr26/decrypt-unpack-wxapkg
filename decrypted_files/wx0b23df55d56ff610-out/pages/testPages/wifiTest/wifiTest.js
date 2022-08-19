Page({
    data: {
        networkType: "",
        bluetooth: "",
        dataArr: [],
        faultArr: []
    },
    onLoad: function(t) {
        var a = this;
        if (wx.getNetworkType({
            success: function(t) {
                var e = t.networkType.toUpperCase();
                a.setData({
                    networkType: e
                });
            }
        }), wx.onNetworkStatusChange(function(t) {
            var e = t.networkType;
            a.setData({
                networkType: e
            });
        }), wx.openBluetoothAdapter({
            success: function(t) {
                wx.getBluetoothAdapterState({
                    success: function(t) {
                        var e = t.available;
                        a.setData({
                            bluetooth: e
                        });
                    },
                    fail: function(t) {
                        console.log("err"), console.log(t);
                    }
                });
            },
            fail: function(t) {
                wx.showModal({
                    title: "提示",
                    content: "请确保您的蓝牙是打开状态",
                    showCancel: !1
                });
            }
        }), wx.onBluetoothAdapterStateChange(function(t) {
            var e = t.available;
            a.setData({
                bluetooth: e
            });
        }), t.dataArr) {
            var e = t.dataArr.split("，");
            this.setData({
                dataArr: e
            }), console.log(e);
        }
    },
    setResult: function() {
        var t = this.data.dataArr;
        t.push(JSON.stringify({
            name: "WIFI",
            val: "0"
        }), JSON.stringify({
            name: "蓝牙",
            val: "0"
        }));
        var a = t.join("，");
        wx.redirectTo({
            url: "../labaAndMikeTest/labaAndMikeTest?dataArr=" + a
        });
    },
    checkboxChange: function(t) {
        var a = [ {
            name: "WIFI",
            val: "0"
        }, {
            name: "蓝牙",
            val: "0"
        } ];
        t.detail.value.forEach(function(t, e, n) {
            a.map(function(a, e, n) {
                e == t && (a.val = 1);
            });
        }), this.setData({
            faultArr: a
        });
    },
    submitErr: function() {
        if (0 != this.data.faultArr.length) {
            var t = this.data.dataArr, a = this.data.faultArr;
            a.map(function(t, e, n) {
                a[e] = JSON.stringify(t);
            });
            var e = (t = t.concat(a)).join("，");
            wx.redirectTo({
                url: "../labaAndMikeTest/labaAndMikeTest?dataArr=" + e
            });
        } else wx.showModal({
            title: "提示",
            content: "请至少选择一项",
            showCancel: !1
        });
    },
    errItemBind: function(t) {
        var a = t.currentTarget.dataset.index, e = "[]" === JSON.stringify(this.data.faultArr) ? [ {
            name: "WIFI",
            val: "0"
        }, {
            name: "蓝牙",
            val: "0"
        } ] : this.data.faultArr;
        e.map(function(t, n, r) {
            n == a && (t.val = "0" == t.val ? "1" : "0", e[n] = t);
        }), this.setData({
            faultArr: e
        });
    },
    errBtnBind: function() {
        var t = !1, a = this.data.faultArr;
        if (a.map(function(a, e, n) {
            1 == a.val && (t = !0);
        }), t) {
            var e = this.data.dataArr;
            a.map(function(t, e, n) {
                a[e] = JSON.stringify(t);
            });
            var n = (e = e.concat(a)).join("，");
            wx.redirectTo({
                url: "../labaAndMikeTest/labaAndMikeTest?dataArr=" + n
            });
        } else wx.showModal({
            title: "提示",
            content: "请至少选择一项",
            showCancel: !1
        });
    }
});