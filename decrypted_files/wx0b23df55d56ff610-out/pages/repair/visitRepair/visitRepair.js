var t = require("../../../component/message/message.js"), e = require("../../../comm/script/fetch");

Page({
    onChange: function(t) {
        this.setData({
            selectMould: t,
            selectedPlan: {},
            selectedColor: {},
            selectedFault: {},
            colorList: [],
            planList: [],
            optionList: [],
            colors_hidden: !1,
            faults_hidden: !1,
            options_hidden: !1
        }), this.getFaultList(), this.getOptions();
    },
    data: {
        message: {},
        repairDesView_hidden: !0,
        maskHidden: !1,
        isFromHotfix: !1,
        colors_hidden: !1,
        faults_hidden: !1,
        options_hidden: !1,
        mouldName: "",
        brand_Name: "",
        selectMould: {},
        faultList: [],
        colorList: [],
        selectedFault: {},
        selectedColor: {},
        selectedPlan: {},
        planList: [],
        protectPlanList: [],
        explainList: []
    },
    onLoad: function(t) {
        var e = this;
        if ("1" === t.isFromHotfix) {
            var a = JSON.parse(t.hotfix), d = new Object();
            d.Id = a.MouldId, d.MouldName = a.MouldName, d.BrandId = a.BrandId, d.ProductId = a.ProductId, 
            d.BrandName = a.BrandName;
            var i = new Object();
            i.fault_id = a.fault_type_id, i.fault_name = a.fault_type_name;
            var o = new Object();
            o.ColorId = a.select_color_id, o.ColorName = a.select_color_name;
            var s = new Object();
            s.Id = a.warranty_id, s.name = a.warranty_name, a.warranty_info;
            var l = new Object();
            l.Id = a.RepairpriceId, l.faultType = a.fault_type_detail_name, l.Price = a.price, 
            l.RepairType = a.RepairType, l.brand_home_visit_fee = a.brand_home_visit_fee, l.brand_manual_fee = a.brand_manual_fee, 
            e.setData({
                selectMould: d,
                selectedFault: i,
                selectedColor: o,
                selectedOption: s,
                selectedPlan: l,
                faults_hidden: !0,
                colors_hidden: !0,
                options_hidden: !0
            }), e.getOptions(), e.getFaultList(), e.getColors(), e.getRepairMsg();
        } else e.setData({
            selectMould: JSON.parse(t.selectMould)
        }), e.getOptions(), e.getFaultList();
    },
    getFaultList: function() {
        var a = this;
        t.show.call(a, {
            icon: "loading",
            content: "加载中"
        }), a.setData({
            maskHidden: !1
        }), e.getfaultListByMouldId.call(a, a.data.selectMould.Id, function(e) {
            a.setData({
                faultList: e,
                selectedFault: a.data.selectedFault,
                faults_hidden: a.data.faults_hidden
            }), t.hide.call(a);
        }, function(e) {
            t.show.call(a, {
                content: e,
                icon: "tip"
            });
        }), setTimeout(function() {
            a.setData({
                maskHidden: !0
            });
        }, 400);
    },
    getColors: function() {
        var a = this;
        e.getColors.call(a, a.data.selectedFault.fault_id, a.data.selectMould.Id, function(t) {
            a.setData({
                colorList: t,
                selectedColor: a.data.selectedColor,
                colors_hidden: a.data.colors_hidden
            });
        }, function(e) {
            "参数错误" !== e && t.show.call(a, {
                content: e,
                icon: "tip"
            });
        });
    },
    getOptions: function() {
        var a = this;
        e.getWarrantyOption.call(a, a.data.selectMould.Id, function(t) {
            a.setData({
                optionList: t,
                selectedOption: a.data.selectedOption,
                options_hidden: a.data.options_hidden
            });
        }, function(e) {
            t.show.call(a, {
                content: e,
                icon: "tip"
            });
        });
    },
    getRepairMsg: function() {
        var a = this;
        e.getRepairMsg.call(a, a.data.selectMould.Id, a.data.selectedFault.fault_id, a.data.selectMould.BrandId, a.data.selectedColor.ColorId, a.data.selectMould.ProductId, "3x", a.data.selectedFault.faultName, a.data.selectedColor.ColorId, function(t) {
            a.setData({
                planList: t.repair,
                protectPlanList: t.honai_repair,
                selectedPlan: a.data.selectedPlan,
                explainList: t.explain
            });
        }, function(e) {
            t.show.call(a, {
                content: e,
                icon: "tip"
            });
        });
    },
    diplayRepairDesView: function() {
        this.setData({
            repairDesView_hidden: !this.data.repairDesView_hidden
        });
    },
    displayFaults: function() {
        this.setData({
            faults_hidden: !this.data.faults_hidden
        });
    },
    displayColors: function() {
        this.setData({
            colors_hidden: !this.data.colors_hidden
        });
    },
    displayOptions: function() {
        this.setData({
            options_hidden: !this.data.options_hidden
        });
    },
    chooseDevice: function(t) {
        wx.navigateTo({
            url: "../chooseDevice/chooseDevice"
        });
    },
    selectOption: function(t) {
        var e = this, a = t.currentTarget.dataset.idx, d = e.data.optionList[a];
        this.setData({
            selectedOption: d,
            options_hidden: !0
        });
    },
    selectFault: function(t) {
        var e = this, a = t.currentTarget.dataset.idx, d = e.data.faultList[a];
        this.setData({
            selectedFault: d,
            faults_hidden: !0,
            planList: [],
            selectedColor: {},
            colors_hidden: !1
        }), this.getColors();
    },
    selectColor: function(t) {
        var e = this, a = t.currentTarget.dataset.idx, d = e.data.colorList[a];
        this.setData({
            selectedColor: d,
            colors_hidden: !0
        }), this.getRepairMsg();
    },
    selectPlan: function(t) {
        var e = this, a = t.currentTarget.dataset.idx, d = e.data.planList[a];
        e.setData({
            selectedPlan: d
        });
    },
    next: function() {
        var t = this, e = JSON.stringify(t.data.selectedPlan);
        console.log(e), wx.navigateTo({
            url: "../createOrder/createOrder?mouldId=" + t.data.selectMould.Id + "&mouldName=" + t.data.selectMould.MouldName + "&color=" + this.data.selectedColor.ColorId + "&selectedPlan=" + e
        });
    }
});