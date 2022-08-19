function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new _promisePolyfill2.default(function(e, r) {
            function o(a, n) {
                try {
                    var s = t[a](n), i = s.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void r(e);
                }
                if (!s.done) return _promisePolyfill2.default.resolve(i).then(function(e) {
                    o("next", e);
                }, function(e) {
                    o("throw", e);
                });
                e(i);
            }
            return o("next");
        });
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var o = t[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, r, o) {
        return r && e(t.prototype, r), o && e(t, o), t;
    };
}(), _wepy = require("./npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy);

require("./npm/wepy-async-function/index.js");

var _promisePolyfill = require("./npm/promise-polyfill/promise.js"), _promisePolyfill2 = _interopRequireDefault(_promisePolyfill), _core = require("./lib/core.js");

global.independentUpdate = !0;

var ALD_PATH = global.independentUpdate ? "./ald-stat/ald-stat.js" : "./ald-stat/san.js", aldstat = require(ALD_PATH), _default = function(e) {
    function t() {
        _classCallCheck(this, t);
        var e = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.config = {
            pages: [ "pages/index/index", "pages/index/miniapp", "pages/index/overdue" ],
            subPackages: [ {
                root: "pages/news",
                pages: [ "news", "newsLst" ]
            }, {
                root: "pages/good",
                pages: [ "good", "goodOrder", "goodOlt", "goodList", "goodSub", "goodSubLst", "goodProLst", "goodShopCar", "goodSearch", "goodType", "goodValue", "goodValueLst", "goodProItem" ]
            }, {
                root: "pages/bargain",
                pages: [ "bargain", "bargainOrder", "barSuccess", "bargainList" ]
            }, {
                root: "pages/my",
                pages: [ "myaddress", "mysavePrice", "storeValue", "storePay", "storeSuccess", "myLogistics", "bindPhone", "myInfo", "myVipInfo", "myBargainAddress", "afterSale/serveType", "afterSale/selectOrder", "afterSale/appeal", "afterSale/appealResult", "afterSale/returnCargo" ]
            }, {
                root: "pages/group",
                pages: [ "group", "groupOrder", "groupOtl", "groupSuccess", "groupList", "groupMyShare", "groupInvite", "grouping" ]
            }, {
                root: "pages/group2",
                pages: [ "group2", "group2Order", "group2Dlt", "group2Share", "group2List" ]
            }, {
                root: "pages/live",
                pages: [ "live", "video" ]
            }, {
                root: "pages/discount",
                pages: [ "couponLst", "couponCenter", "reduction", "reductionLst" ]
            }, {
                root: "pages/integral",
                pages: [ "integral", "interRecord", "interDlt", "interOrder", "interSuccess", "interLst" ]
            }, {
                root: "pages/sellCenter",
                pages: [ "sell", "sellIndivi", "sellMain", "sellPostCash", "sellRecord", "sellSuccess", "sellShow", "sellSecond", "sellProLst", "sellRemark" ]
            }, {
                root: "pages/im",
                pages: [ "chat", "contact" ]
            }, {
                root: "pages/miaoSha",
                pages: [ "more", "detail", "order" ]
            }, {
                root: "pages/auth",
                pages: [ "auth" ]
            }, {
                root: "pages/agent",
                pages: [ "levelChoose", "myAgent", "myAssets", "withdrawCash", "withdrawRecord", "detailList" ]
            }, {
                root: "pages/luckDraw",
                pages: [ "luckDraw", "awardRecord" ]
            }, {
                root: "pages/reward",
                pages: [ "myUser", "rewardWallet", "levelSelect", "myReward", "recharge", "inviteFriend", "rewardList" ]
            }, {
                root: "pages/album",
                pages: [ "album", "albumDetail", "scan" ]
            } ],
            window: {
                backgroundTextStyle: "dark",
                navigationBarBackgroundColor: "#fff",
                navigationBarTitleText: "",
                navigationBarTextStyle: "black"
            },
            navigateToMiniProgramAppIdList: [ "" ],
            permission: {
                "scope.userLocation": {
                    desc: "你的位置信息将用于小程序位置接口的效果展示"
                }
            },
            requiredBackgroundModes: [ "audio" ]
        }, e.globalData = {
            ws: !1,
            wxState: !1,
            msgQueue: [],
            goodCat: [],
            coupHidden: !1,
            aid: "",
            pages: "",
            userInfo: "",
            address: {},
            logo: "",
            encrypted: {},
            hasMusicComs: !1,
            appLimit: !1,
            appLimitArr: [ "wx81", "24c5", "4729", "38db", "84" ],
            isAgent: !1,
            agentUserInfo: "",
            levelArrId: [],
            levelNum: 0,
            todayIsTip: !1,
            xcxName: ""
        }, e.use("promisify"), e;
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLaunch",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, o, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (console.log("加载程序", t), _core.tools.getSystem(), global.independentUpdate) {
                            e.next = 12;
                            break;
                        }
                        if (!(r = wx.getExtConfigSync())) {
                            e.next = 8;
                            break;
                        }
                        this.globalData.appid = r.appid, e.next = 10;
                        break;

                      case 8:
                        return wx.showModal({
                            title: "提示",
                            content: "小程序未绑定公众号，不能使用！",
                            showCancel: !1
                        }), e.abrupt("return");

                      case 10:
                        e.next = 14;
                        break;

                      case 12:
                        o = wx.getAccountInfoSync(), this.globalData.appid = o.miniProgram.appId;

                      case 14:
                        return this.globalData.appid == this.globalData.appLimitArr.join("") && (this.globalData.appLimit = !0), 
                        e.next = 17, wx.getStorageSync("tipTime");

                      case 17:
                        if (e.t0 = e.sent, e.t0) {
                            e.next = 20;
                            break;
                        }
                        e.t0 = "";

                      case 20:
                        a = e.t0, this.globalData.isTip = !(a && !_core.tools.judgeTimeIsOverdue(a, 3) || 1089 == t.scene);

                      case 22:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShow",
        value: function() {
            this.globalData.wxState = !1;
        }
    }, {
        key: "onHide",
        value: function() {
            this.globalData.wxState = !0, wx.pauseBackgroundAudio();
        }
    } ]), t;
}(_wepy2.default.app);

App(require("./npm/wepy/lib/wepy.js").default.$createApp(_default, {
    noPromiseAPI: [ "createSelectorQuery" ]
})), require("./_wepylogs.js");