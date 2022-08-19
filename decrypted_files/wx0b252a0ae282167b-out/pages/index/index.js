var e, a = [], r = new Date(), i = (r.getFullYear(), r.getMonth(), r.getDate(), 
r.getHours()), d = r.getMinutes();

i < 10 && (i = "0" + i), d < 10 && (d = "0" + d);

var t = i + ":" + d, g = getApp();

Page({
    data: {
        array: [ "全部港区", "外一期", "外二期", "外四期", "外五期", "洋山港一期", "洋山港三期", "洋山港四期", "宜东", "张华浜" ],
        index: 0,
        time: t,
        data: "做箱日期",
        multiIndex: [ 0, 0 ],
        jy_user_id: "",
        list_data: "",
        multiArray: [ [ "全部", "上海市", "江苏省", "浙江省", "安徽省" ], [ "" ] ],
        objectMultiArray: [ {
            regid: "1",
            parid: "0",
            regname: "全部",
            regtype: "1",
            ageid: "0"
        }, {
            regid: "2",
            parid: "0",
            regname: "上海市",
            regtype: "1",
            ageid: "0"
        }, {
            regid: "3",
            parid: "0",
            regname: "江苏省",
            regtype: "1",
            ageid: "0"
        }, {
            regid: "4",
            parid: "0",
            regname: "浙江省",
            regtype: "1",
            ageid: "0"
        }, {
            regid: "5",
            parid: "0",
            regname: "安徽省",
            regtype: "1",
            ageid: "0"
        }, {
            regid: "36",
            parid: "2",
            regname: "上海市区",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "37",
            parid: "2",
            regname: "上海郊区",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "38",
            parid: "3",
            regname: "苏州市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "39",
            parid: "3",
            regname: "无锡市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "40",
            parid: "3",
            regname: "常州市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "41",
            parid: "3",
            regname: "南通市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "42",
            parid: "3",
            regname: "扬州市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "43",
            parid: "3",
            regname: "南京市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "44",
            parid: "3",
            regname: "镇江市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "45",
            parid: "3",
            regname: "盐城市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "46",
            parid: "3",
            regname: "泰州市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "47",
            parid: "3",
            regname: "徐州市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "48",
            parid: "3",
            regname: "宿迁市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "49",
            parid: "3",
            regname: "淮安市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "50",
            parid: "3",
            regname: "连云港市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "51",
            parid: "4",
            regname: "杭州市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "52",
            parid: "4",
            regname: "嘉兴市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "53",
            parid: "4",
            regname: "绍兴市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "54",
            parid: "4",
            regname: "金华市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "55",
            parid: "4",
            regname: "湖州市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "56",
            parid: "4",
            regname: "台州市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "57",
            parid: "4",
            regname: "丽水市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "58",
            parid: "4",
            regname: "衢州市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "59",
            parid: "4",
            regname: "温州市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "60",
            parid: "4",
            regname: "舟山市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "61",
            parid: "4",
            regname: "宁波市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "62",
            parid: "5",
            regname: "合肥市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "63",
            parid: "5",
            regname: "池州市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "64",
            parid: "5",
            regname: "亳州市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "65",
            parid: "5",
            regname: "六安市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "66",
            parid: "5",
            regname: "宿州市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "67",
            parid: "5",
            regname: "阜阳市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "68",
            parid: "5",
            regname: "滁州市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "69",
            parid: "5",
            regname: "黄山市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "70",
            parid: "5",
            regname: "安庆市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "71",
            parid: "5",
            regname: "铜陵市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "72",
            parid: "5",
            regname: "淮北市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "73",
            parid: "5",
            regname: "马鞍山市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "74",
            parid: "5",
            regname: "淮南市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "75",
            parid: "5",
            regname: "芜湖市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "76",
            parid: "5",
            regname: "蚌埠市",
            regtype: "2",
            ageid: "0"
        }, {
            regid: "77",
            parid: "5",
            regname: "宣城市",
            regtype: "2",
            ageid: "0"
        } ]
    },
    onLoad: function(a) {
        e = this, g.isOpenId(), wx.request({
            url: g.data.lost + "/index/indexlist",
            method: "POST",
            dataType: "html",
            data: {
                openid: wx.getStorageSync("openid")
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                var r = JSON.parse(a.data);
                e.setData({
                    list_data: r.result
                });
            }
        });
    },
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), wx.request({
            url: g.data.lost + "/index/indexlist",
            method: "POST",
            dataType: "html",
            data: {
                openid: wx.getStorageSync("openid")
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                var r = JSON.parse(a.data);
                e.setData({
                    list_data: r.result
                }), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    onShow: function() {
        this.onLoad();
    },
    resRst: function(a) {
        for (var r = new Array(), i = 0, d = 0; d < e.data.objectMultiArray.length; d++) e.data.objectMultiArray[d].parid == e.data.objectMultiArray[e.data.multiIndex[0]].regid && (r[i] = e.data.objectMultiArray[d].regname, 
        i++);
        var t = e.data.objectMultiArray[e.data.multiIndex[0]].regname, n = r[e.data.multiIndex[1]];
        wx.request({
            url: g.data.lost + "/index/indexlist",
            method: "POST",
            dataType: "html",
            data: {
                openid: wx.getStorageSync("openid"),
                port: e.data.array[e.data.index],
                do_box_time: e.data.data,
                prov: t,
                city: n
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                var r = JSON.parse(a.data);
                e.setData({
                    list_data: r.result
                });
            }
        });
    },
    jiedan: function(a) {
        e.data.list_data, a.currentTarget.dataset.index;
        wx.request({
            url: g.data.lost + "/index/orderTaking",
            method: "POST",
            dataType: "html",
            data: {
                openid: wx.getStorageSync("openid"),
                id: a.currentTarget.id
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                "接单成功" == e.data ? (wx.showToast({
                    title: "接单成功",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.switchTab({
                        url: "../order/order"
                    });
                }, 2e3)) : wx.showToast({
                    title: e.data,
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    bindPickerChang: function(e) {
        this.setData({
            index: e.detail.value
        });
    },
    bindPickerDate: function(e) {
        this.setData({
            data: e.detail.value
        });
    },
    bindMultiPickerChange: function(a) {
        e.setData({
            "multiIndex[0]": a.detail.value[0],
            "multiIndex[1]": a.detail.value[1]
        });
    },
    bindMultiPickerColumnChange: function(r) {
        switch (r.detail.column) {
          case 0:
            a = [];
            for (var i = 0; i < e.data.objectMultiArray.length; i++) e.data.objectMultiArray[i].parid == e.data.objectMultiArray[r.detail.value].regid && a.push(e.data.objectMultiArray[i].regname);
            e.setData({
                "multiArray[1]": a,
                "multiIndex[0]": r.detail.value,
                "multiIndex[1]": 0
            });
        }
    }
});