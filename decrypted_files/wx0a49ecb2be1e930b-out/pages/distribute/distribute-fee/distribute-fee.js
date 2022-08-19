var t = getApp(), a = require("../../../utils/wxcharts.js"), e = null;

Page({
    data: {
        timeList: [],
        moneyList: [],
        showComboBox: !1,
        searchTime: "theweek",
        searchTxt: "本周",
        detailList: [],
        inCome: ""
    },
    onLoad: function() {
        this.getSaleRecord(), this.getDistributorIncome();
    },
    drawChart: function() {
        var t = 320;
        try {
            t = wx.getSystemInfoSync().windowWidth;
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            console.error("getSystemInfoSync failed!");
        }
        var o = this.createSimulationData();
        e = new a({
            canvasId: "lineCanvas",
            type: "line",
            categories: o.categories,
            animation: !0,
            series: [ {
                name: "",
                data: o.data,
                format: function(t, a) {
                    return t.toFixed(2) + "万";
                }
            } ],
            xAxis: {
                disableGrid: !0
            },
            yAxis: {
                title: "佣金收入明细 (元)",
                format: function(t) {
                    return t.toFixed(2);
                },
                min: 0
            },
            width: t,
            height: 200,
            dataLabel: !1,
            dataPointShape: !0,
            extra: {
                lineStyle: "curve"
            }
        });
    },
    getSaleRecord: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "dis_getSaleRecord.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                current: 1,
                parentMemberId: t.getMemberId(),
                searchTime: a.data.searchTime
            },
            success: function(e) {
                var o = t.getJsonData(e.data), s = [], i = [];
                o.dataList = o.dataList.reverse();
                for (var r = 0; r < o.dataList.length; r++) s.push(o.dataList[r].orderTime), i.push(o.dataList[r].lineMoney);
                a.setData({
                    timeList: s,
                    moneyList: i,
                    detailList: o.dataList2
                }), a.drawChart();
            }
        });
    },
    getDistributorIncome: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "dis_getDistributorIncome",
            data: {
                memberId: t.getMemberId()
            },
            success: function(t) {
                a.setData({
                    inCome: t.data.content.distributorIncome
                });
            }
        });
    },
    touchHandler: function(t) {
        console.log(e.getCurrentDataIndex(t)), e.showToolTip(t, {
            format: function(t, a) {
                return a + " " + t.name + ":" + t.data;
            }
        });
    },
    createSimulationData: function() {
        for (var t = this, a = [], e = [], o = 0; o < 60; o++) a.push("2016-" + (o + 1)), 
        e.push(10 * Math.random() + 16);
        return {
            categories: t.data.timeList,
            data: t.data.moneyList
        };
    },
    updateData: function() {
        var t = this.createSimulationData(), a = [ {
            name: "",
            data: t.data,
            format: function(t, a) {
                return t.toFixed(2) + "万";
            }
        } ];
        e.updateData({
            categories: t.categories,
            series: a
        });
    },
    isShowComoBox: function() {
        this.setData({
            showComboBox: !this.data.showComboBox
        });
    },
    selectSearchType: function(t) {
        var a = t.currentTarget.dataset.time;
        switch (a) {
          case "1days":
            this.setData({
                searchTime: a,
                searchTxt: "最近1天",
                showComboBox: !this.data.showComboBox
            }), this.getSaleRecord();
            break;

          case "3days":
            this.setData({
                searchTime: a,
                searchTxt: "最近3天",
                showComboBox: !this.data.showComboBox
            }), this.getSaleRecord();
            break;

          case "theweek":
            this.setData({
                searchTime: a,
                searchTxt: "本周",
                showComboBox: !this.data.showComboBox
            }), this.getSaleRecord();
            break;

          case "themonth":
            this.setData({
                searchTime: a,
                searchTxt: "本月",
                showComboBox: !this.data.showComboBox
            }), this.getSaleRecord();
            break;

          case "thequarter":
            this.setData({
                searchTime: a,
                searchTxt: "本自然季度",
                showComboBox: !this.data.showComboBox
            }), this.getSaleRecord();
            break;

          case "":
            this.setData({
                showComboBox: !this.data.showComboBox
            });
        }
    },
    toWithdrawList: function() {
        wx.navigateTo({
            url: "../withdraw-list/withdraw-list"
        });
    }
});