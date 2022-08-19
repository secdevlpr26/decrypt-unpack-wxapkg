require("../../../comm/script/config");

var i = require("../../../utils/wxParse/wxParse.js"), t = require("../../../utils/server"), e = require("../../../comm/script/fetch"), a = require("../../../util/util"), n = require("../../../component/message/message.js");

getApp();

Page({
    data: {
        topImgList: [ {
            imgUrl: "https://pic.hiweixiu.com/images/mobile/embedded/img1.jpg"
        }, {
            imgUrl: "https://pic.hiweixiu.com/images/mobile/embedded/img2.jpg"
        } ],
        faultList: [ {
            faultId: "34",
            faultName: "屏幕",
            imgList: [ {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/pingmu_02.jpg",
                height: "939"
            }, {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/pingmu_03.jpg",
                height: "723"
            }, {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/pingmu_04.jpg",
                height: "883"
            }, {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/pingmu_05.jpg",
                height: "431"
            }, {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/pingmu_06.jpg",
                height: "459"
            } ]
        }, {
            faultId: "57",
            faultName: "按键",
            imgList: [ {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/anjian_02.jpg",
                height: "596"
            }, {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/anjian_03.png",
                height: "595"
            }, {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/anjian_04.jpg",
                height: "595"
            }, {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/anjian_05.png",
                height: "522"
            }, {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/anjian_06.jpg",
                height: "597"
            } ]
        }, {
            faultId: "37",
            faultName: "外壳/边框",
            imgList: [ {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/biankuangwaike_01.jpg",
                height: "726"
            }, {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/biankuangwaike_02.jpg",
                height: "739"
            }, {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/biankuangwaike_03.jpg",
                height: "521"
            }, {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/biankuangwaike_04.jpg",
                height: "705"
            }, {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/biankuangwaike_05.jpg",
                height: "691"
            } ]
        }, {
            faultId: "63",
            faultName: "声音",
            imgList: [ {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/shengyin_01.jpg",
                height: "596"
            }, {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/shengyin_02.jpg",
                height: "595"
            }, {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/shengyin_03.jpg",
                height: "595"
            }, {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/shengyin_04.jpg",
                height: "1079"
            } ]
        }, {
            faultId: "68",
            faultName: "摄像与拍照",
            imgList: [ {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/shexiangtou_01.jpg",
                height: "682"
            }, {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/shexiangtou_02.jpg",
                height: "859"
            }, {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/shexiangtou_03.jpg",
                height: "874"
            }, {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/shexiangtou_04.jpg",
                height: "632"
            } ]
        }, {
            faultId: "84",
            faultName: "电池或不开机",
            imgList: [ {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/dianchi_01.jpg",
                height: "590"
            }, {
                imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/weixiudetail/dianchi_03.jpg",
                height: "808"
            } ]
        }, {
            faultId: "154",
            faultName: "其他"
        } ],
        serviceDtailList: [ {
            imgUrl: "https://xcx006.ycdongxu.com/imgs/fuwu1.jpg",
            note: "进门穿鞋套"
        }, {
            imgUrl: "https://xcx006.ycdongxu.com/imgs/fuwu2.jpg",
            note: "维修装备"
        }, {
            imgUrl: "https://xcx006.ycdongxu.com/imgs/fuwu3.jpg",
            note: "工具摆放"
        }, {
            imgUrl: "https://xcx006.ycdongxu.com/imgs/fuwu4.jpg",
            note: "全程录像"
        }, {
            imgUrl: "https://xcx006.ycdongxu.com/imgs/fuwu5.jpg",
            note: "微笑服务"
        }, {
            imgUrl: "https://xcx006.ycdongxu.com/imgs/fuwu6.jpg",
            note: "专业技术"
        } ],
        ensureList: [ {
            imgUrl: "https://pic.hiweixiu.com/images/mobile/embedded/baozhang1.png",
            title: "人员保障",
            content: "所有专职工程师均通过岗前专业规范化 培训，具备一年以上维修服务经验。"
        }, {
            imgUrl: "https://pic.hiweixiu.com/images/mobile/embedded/baozhang2.png",
            title: "品质保障",
            content: "魅族、金立等品牌官方 授权维修服务商，所有配件均经过 专业检测合格后投入使用。"
        }, {
            imgUrl: "https://pic.hiweixiu.com/images/mobile/embedded/baozhang3.png",
            title: "隐私保障",
            content: "服务过程中，未经客户允许，不擅自翻看客户手机；全程视频录像，一对一当面维修。"
        }, {
            imgUrl: "https://pic.hiweixiu.com/images/mobile/embedded/baozhang4.png",
            title: "售后保障",
            content: "针对维修配件提供180天免费质保服务，为您排除后顾之忧！"
        } ],
        cityUrl: "https://pic.hiweixiu.com/images/mobile/embedded/chengshi.png",
        repairDesView_hidden: !0,
        info: {},
        explainList: [],
        optionList: [],
        planList: [],
        colorList: [],
        repairMsg: [],
        committed: [ {
            name: "免费上门"
        }, {
            name: "20分钟快修"
        }, {
            name: "修完后付款"
        } ],
        currentColorId: "",
        currentOptionId: "",
        currentPlanId: "",
        currentPlanIndex: "",
        currentPrice: "--",
        currentfaultList: [],
        markInfo: {
            mark_info: "暂无"
        },
        top: 0,
        windowHeight: "",
        detail_url: "",
        mouldname: "",
        platform: "",
        animate: !1,
        fromHotFix: !1
    },
    imgLoad: function() {
        "android" != this.data.platform && this.setData({
            animate: !0
        });
    },
    onShareAppMessage: function(i) {
        return console.log("/pages/repair/faultDetail/faultDetail?faultInfo=" + this.data.faultInfo + "&phone=" + this.data.model_id), 
        {
            path: "/pages/repair/faultDetail/faultDetail?faultInfo=" + this.data.faultInfo + "&phone=" + this.data.model_id,
            success: function(i) {},
            fail: function(i) {}
        };
    },
    onLoad: function(e) {
        wx.setStorage({
            key: "coupon",
            data: void 0
        });
        var a = this, n = this;
        this.setData({
            model_id: e.phone,
            type1: e.type
        });
        var o = e.model;
        void 0 == o && (o = "");
        var r = e.phone;
        void 0 == r && (r = ""), this.setData({
            faultInfo: e.faultInfo
        }), t.getJSON("/Goods/getRepair", {
            id: r,
            model: o,
            faultInfo: e.faultInfo
        }, function(t) {
            wx.hideNavigationBarLoading(), a.setData({
                type: t.data.type,
                config: t.data.config
            }), a.setData({
                model: t.data.model
            }), a.setData({
                spec: t.data.spec_list
            }), a.setData({
                colorList: t.data.color
            }), t.data.color.length > 0 && a.setData({
                currentColorId: t.data.color[0].id
            }), t.data.modelId && a.setData({
                model_id: t.data.modelId
            }), t.data.spec_list.spec_item && t.data.spec_list.spec_item.length > 0 && a.setData({
                currentPlanId: t.data.spec_list.spec_item[0].id,
                currentPlanIndex: 0,
                currentPrice: t.data.spec_list.spec_item[0].price
            });
            var o = e.spec;
            if (void 0 != o) {
                a.setData({
                    spec_id: o
                });
                for (var r = 0; r < t.data.spec_list.spec_item.length; r++) o == t.data.spec_list.spec_item[r].id && a.setData({
                    currentPlanId: t.data.spec_list.spec_item[r].id,
                    currentPlanIndex: r,
                    currentPrice: t.data.spec_list.spec_item[r].price
                });
            }
            i.wxParse("article", "html", t.data.type.content, n, 5);
        });
        l = (d = wx.getSystemInfoSync()).windowWidth / 750;
        this.setData({
            windowHeight: d.windowHeight - 100 * l + "px",
            platform: d.platform
        });
        var c = getApp();
        return void c.getOpenId(function() {
            var i = getApp().globalData.openid;
            t.getJSON("/User/validateOpenid", {
                openid: i
            }, function(i) {
                200 == i.data.code ? getApp().globalData.userInfo = i.data.data : "400" == i.data.code && (console.log("need register"), 
                c.register(function() {}));
            });
        });
        var d, l;
    },
    setOption: function(i) {
        var t = this, e = i.currentTarget.dataset.id;
        this.setData({
            currentOptionId: e
        }), t.data.currentPlanId ? "2" != t.data.currentOptionId ? t.setData({
            currentPrice: t.data.planList[t.data.currentPlanIndex].Price
        }) : t.setData({
            currentPrice: t.data.protectPlanList[t.data.currentPlanIndex].Price
        }) : "2" != t.data.currentOptionId ? t.getCurrentPrice(t.data.planList) : t.getCurrentPrice(t.data.protectPlanList);
    },
    setColor: function(i) {
        var t = i.currentTarget.dataset.colorid;
        this.setData({
            currentColorId: t
        });
    },
    setPlan: function(i) {
        var t = i.currentTarget.dataset;
        this.setData({
            currentPlanId: t.id,
            currentPlanIndex: t.index,
            currentPrice: t.price
        });
    },
    getColors: function() {
        var i = this;
        e.getColors.call(i, i.data.info.faultid, i.data.info.mouldid || i.data.info.id, function(t) {
            i.setData({
                colorList: t,
                currentColorId: t[0].ColorId
            }), i.getRepairMsg();
        }, function(t) {
            "参数错误" != t && (wx.hideLoading(), n.show.call(i, {
                content: t,
                icon: "tip"
            }));
        });
    },
    getOptions: function() {
        var i = this;
        e.getWarrantyOption.call(i, i.data.info.mouldid || i.data.info.id, function(t) {
            a.isEmpty(t) || i.setData({
                optionList: t,
                currentOptionId: t[0].Id
            });
        }, function(t) {
            wx.hideLoading(), n.show.call(i, {
                content: t,
                icon: "tip"
            });
        });
    },
    getRepairMsg: function() {
        var i = this;
        e.getRepairMsg.call(i, i.data.info.mouldid || i.data.info.id, i.data.info.faultid, i.data.info.brandid, i.data.currentColorId, i.data.info.productid, "3x", i.data.info.faultname, i.data.currentColorId, function(t) {
            if (a.isEmpty(t.repair) ? (wx.hideLoading(), n.show.call(i, {
                content: "暂不支持当前故障，请选择其他机型",
                icon: "tip"
            })) : i.setData({
                markInfo: t.mark_info
            }), i.setData({
                planList: t.repair,
                protectPlanList: t.honai_repair,
                explainList: t.explain,
                committed: t.committed.characteristic
            }), wx.hideNavigationBarLoading(), i.data.fromHotFix) {
                var e = i.data.info.planid;
                return i.data.planList.forEach(function(t, a, n) {
                    t.Id == e && i.setData({
                        currentPlanId: t.Id,
                        currentPlanIndex: a,
                        currentPrice: t.Price
                    });
                }), void wx.hideLoading();
            }
            a.isEmpty(t.repair) || (i.getCurrentPrice(t.repair), wx.hideLoading());
        }, function(t) {
            wx.hideLoading(), n.show.call(i, {
                content: t,
                icon: "tip"
            });
        });
    },
    diplayRepairDesView: function() {
        this.setData({
            repairDesView_hidden: !this.data.repairDesView_hidden
        });
    },
    next: function() {
        var i = this;
        if ("" === i.data.currentPlanIndex) return i.setData({
            top: 0
        }), void n.show.call(i, {
            content: "请选择服务项目",
            icon: "tip"
        });
        var t = this.data.model_id, e = this.data.spec.spec_item[this.data.currentPlanIndex];
        e = JSON.stringify(e), wx.navigateTo({
            url: "../createOrder/createOrder?model_id=" + t + "&spec_id=" + this.data.spec.id + "&spec_item_id=" + e + "&price=" + this.data.currentPrice + "&color_id=" + i.data.currentColorId
        });
    },
    goToChooseDevice: function() {
        wx.redirectTo({
            url: "../chooseDevice/chooseDevice?faultInfo=" + this.data.faultInfo + "&id=" + this.data.type1
        });
    },
    getCurrentPrice: function(i) {
        var t = this, e = [];
        if (i.length > 1) {
            i.forEach(function(i, t, a) {
                e.push(Math.floor(i.Price));
            });
            var a = (e = e.sort(function(i, t) {
                return i - t;
            })).pop(), n = e.shift();
            a != n ? t.setData({
                currentPrice: n.toFixed(2) + "~" + a.toFixed(2)
            }) : t.setData({
                currentPrice: n.toFixed(2)
            });
        } else t.setData({
            currentPrice: i[0].Price
        });
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});