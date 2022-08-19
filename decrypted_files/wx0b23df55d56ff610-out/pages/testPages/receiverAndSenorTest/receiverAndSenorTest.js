Page({
    data: {
        dataArr: [],
        faultArr: [],
        btnClicked: !1
    },
    onLoad: function(a) {
        if (a.dataArr) {
            var t = a.dataArr.split("，");
            this.setData({
                dataArr: t
            });
        }
    },
    call112: function() {
        wx.makePhoneCall({
            phoneNumber: "112"
        }), this.setData({
            btnClicked: !this.data.btnClicked
        });
    },
    setResult: function() {
        var a = this.data.dataArr;
        a.push(JSON.stringify({
            name: "听筒",
            val: "0"
        }), JSON.stringify({
            name: "距离感应器",
            val: "0"
        }));
        var t = a.join("，");
        wx.redirectTo({
            url: "../artificialTest/artificialTest?dataArr=" + t
        });
    },
    checkboxChange: function(a) {
        var t = [ {
            name: "听筒",
            val: 0
        }, {
            name: "距离感应器",
            val: 0
        } ];
        a.detail.value.forEach(function(a, r, i) {
            t.map(function(t, r, i) {
                r == a && (t.val = 1);
            });
        }), this.setData({
            faultArr: t
        });
    },
    submitErr: function() {
        if (0 != this.data.faultArr.length) {
            var a = this.data.dataArr, t = this.data.faultArr;
            t.map(function(a, r, i) {
                t[r] = JSON.stringify(a);
            });
            var r = (a = a.concat(t)).join("，");
            wx.redirectTo({
                url: "../artificialTest/artificialTest?dataArr=" + r
            });
        } else wx.showModal({
            title: "提示",
            content: "请至少选择一项",
            showCancel: !1
        });
    },
    errItemBind: function(a) {
        var t = a.currentTarget.dataset.index, r = "[]" === JSON.stringify(this.data.faultArr) ? [ {
            name: "听筒",
            val: "0"
        }, {
            name: "距离感应器",
            val: "0"
        } ] : this.data.faultArr;
        r.map(function(a, i, n) {
            i == t && (a.val = "0" == a.val ? "1" : "0", r[i] = a);
        }), this.setData({
            faultArr: r
        });
    },
    errBtnBind: function() {
        var a = !1, t = this.data.faultArr;
        if (t.map(function(t, r, i) {
            1 == t.val && (a = !0);
        }), a) {
            var r = this.data.dataArr;
            t.map(function(a, r, i) {
                t[r] = JSON.stringify(a);
            });
            var i = (r = r.concat(t)).join("，");
            wx.redirectTo({
                url: "../artificialTest/artificialTest?dataArr=" + i
            });
        } else wx.showModal({
            title: "提示",
            content: "请至少选择一项",
            showCancel: !1
        });
    }
});