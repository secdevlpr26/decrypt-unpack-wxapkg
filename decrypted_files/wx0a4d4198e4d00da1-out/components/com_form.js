function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
    return Array.from(e);
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, i) {
                try {
                    var a = t[o](i), s = a.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void r(e);
                }
                if (!a.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
            }
            return n("next");
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
}), exports.default = void 0;

var _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../lib/core.js"), _utils = require("./../lib/utils.js"), _com_pickerTime = require("./com_pickerTime.js"), _com_pickerTime2 = _interopRequireDefault(_com_pickerTime), com_form = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.$repeat = {
            currentCom: {
                com: "comPicker",
                props: ""
            }
        }, n.$props = {
            comPicker: {
                "xmlns:v-on": {
                    value: "",
                    for: "currentCom.items",
                    item: "item",
                    index: "index",
                    key: "key"
                },
                "xmlns:v-bind": {
                    value: "",
                    for: "currentCom.items",
                    item: "item",
                    index: "index",
                    key: "key"
                },
                "v-bind:vm.sync": {
                    value: "vm.time",
                    for: "currentCom.items",
                    item: "item",
                    index: "index",
                    key: "key"
                },
                "v-bind:formIndex.sync": {
                    value: "index",
                    type: "index",
                    for: "currentCom.items",
                    item: "item",
                    index: "index",
                    key: "key"
                },
                "v-bind:pageIndex.sync": {
                    value: "formIndex",
                    for: "currentCom.items",
                    item: "item",
                    index: "index",
                    key: "key"
                }
            }
        }, n.$events = {
            comPicker: {
                "v-on:closeData": "closeData"
            }
        }, n.components = {
            comPicker: _com_pickerTime2.default
        }, n.data = {
            vm: {},
            formIndex: ""
        }, n.events = {
            getFormVm: function(e, t) {
                console.log("getFormVm", e, t), this.vm = e, this.formIndex = t, this.$apply();
            }
        }, n.methods = {
            pickCancle: function(e, t) {
                this.$emit("handleForm", "showXia", {
                    formIndex: e,
                    index: t,
                    val: !1
                });
            },
            pickShow: function(e, t) {
                this.$emit("handleForm", "showXia", {
                    formIndex: e,
                    index: t,
                    val: !0
                });
            },
            inputFy: function(e, t, r) {
                this.$emit("handleForm", "name", {
                    formIndex: e,
                    index: t,
                    val: r.detail.value
                });
            },
            inputFp: function(e, t, r) {
                this.$emit("handleForm", "phone", {
                    formIndex: e,
                    index: t,
                    val: r.detail.value
                });
            },
            pickFunc: function(e, t, r) {
                this.$emit("handleForm", "pickIndex", {
                    formIndex: e,
                    index: t,
                    val: parseInt(r.detail.value)
                }), this.$emit("handleForm", "showXia", {
                    formIndex: e,
                    index: t,
                    val: !1
                });
            },
            inputCode: function(e, t) {
                this.$emit("handleForm", "writeCodeVal", {
                    formIndex: e,
                    val: t.detail.value
                });
            },
            getCode: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r, n, o, i, a, s, u = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (r = t.currentTarget.dataset.vm, n = t.currentTarget.dataset.formIndex, o = t.currentTarget.dataset.index, 
                            i = /^[1][3,4,5,7,8][0-9]{9}$/, i.test(r.phone[o])) {
                                e.next = 7;
                                break;
                            }
                            return this.$emit("ShowToast", "该手机号码不是有效号码"), e.abrupt("return");

                          case 7:
                            return this.$emit("handleForm", "timeOutCode", {
                                formIndex: n,
                                val: --r.timeOutCode
                            }), a = setInterval(function() {
                                u.$emit("handleForm", "timeOutCode", {
                                    formIndex: n,
                                    val: --r.timeOutCode
                                }), 0 == r.timeOutCode && (clearInterval(a), u.$emit("handleForm", "timeOutCode", {
                                    formIndex: n,
                                    val: 60
                                }));
                            }, 1e3), e.next = 11, _core.core.getUserCode(r.phone[o]);

                          case 11:
                            s = e.sent, s.isok ? this.$emit("handleForm", "getCodeVal", {
                                formIndex: n,
                                val: s.dataObj
                            }) : _core.tools.showModal(s.Msg, !1);

                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            sumbitFormFuc: function() {
                function e(e, r, n) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, n) {
                    var o, i, a, s;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            _core.core.formId(n.detail.formId), console.log("e1", n.detail), o = !1, t.items.forEach(function(e, t) {
                                "upload-img" == e.type && (n.detail.value[e.name] = r.uploadImgs[t] || []), "number" == e.type && e.isduanxin && (o = !0);
                            }), console.log("e2", n.detail), e.t0 = regeneratorRuntime.keys(n.detail.value);

                          case 6:
                            if ((e.t1 = e.t0()).done) {
                                e.next = 14;
                                break;
                            }
                            if (i = e.t1.value, "" != (a = n.detail.value[i])) {
                                e.next = 12;
                                break;
                            }
                            return this.$emit("ShowToast", "信息未填写完整"), e.abrupt("return");

                          case 12:
                            e.next = 6;
                            break;

                          case 14:
                            if (!o || "" != Number(r.writeCodeVal)) {
                                e.next = 17;
                                break;
                            }
                            return this.$emit("ShowToast", "信息未填写完整"), e.abrupt("return");

                          case 17:
                            if (Number(r.getCodeVal) == Number(r.writeCodeVal)) {
                                e.next = 20;
                                break;
                            }
                            return this.$emit("ShowToast", "验证码错误"), e.abrupt("return");

                          case 20:
                            return console.log(n.detail.value), e.next = 23, _core.core.formRequest(JSON.stringify(n.detail.value), t.title);

                          case 23:
                            s = e.sent, s.isok ? (this.$emit("ShowToast", "提交成功"), this.$emit("handleForm", "", {
                                formIndex: this.formIndex
                            }), this.$apply()) : this.$emit("ShowToast", "提交失败");

                          case 25:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            showData: function(e, t) {
                this.$emit("handleForm", "showPicker", {
                    formIndex: e,
                    index: t,
                    val: !0
                }), this.timeConfig(e);
            },
            closeData: function(e, t) {
                console.log("closeData", e, t), this.$emit("handleForm", "pickTime", {
                    formIndex: this.formIndex,
                    index: t,
                    val: e
                }), this.$emit("handleForm", "showPicker", {
                    formIndex: this.formIndex,
                    index: t,
                    val: !1
                });
            },
            changeImg: function() {
                function e(e, r, n, o) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, n, o) {
                    var i, a, s, u, c;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (i = t.upload[o] || [], !((a = i.length) >= n)) {
                                e.next = 5;
                                break;
                            }
                            return _core.tools.showModal("最多只能上传" + n + "张", !1), e.abrupt("return");

                          case 5:
                            return s = Number(n).sub(a), e.next = 8, _core.tools.chooseImg(s);

                          case 8:
                            if (u = e.sent, c = u.tempFilePaths, console.log("tempImg", c), !(c.length + a > n)) {
                                e.next = 14;
                                break;
                            }
                            return _core.tools.showModal("最多只能上传" + n + "张", !1), e.abrupt("return");

                          case 14:
                            return e.next = 16, this.uploadService(t, r, c, o);

                          case 16:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            deleImg: function(e, t, r, n) {
                var o = e.upload[r];
                o.splice(n, 1);
                var i = "";
                o.forEach(function(e) {
                    i += "<image src='" + e + "'></image>";
                }), console.log("imgs", i), this.$emit("handleForm", "upload", {
                    formIndex: t,
                    index: r,
                    val: o
                }), this.$emit("handleForm", "uploadImgs", {
                    formIndex: t,
                    index: r,
                    val: i
                });
            },
            preView: function(e, t, r) {
                _core.tools.preViewShow(t, e.upload[r]);
            }
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "timeConfig",
        value: function(e) {
            this.$emit("handleForm", "time", {
                formIndex: e,
                val: _utils.timeTools.formTimeSpan()
            });
        }
    }, {
        key: "uploadService",
        value: function() {
            function e(e, r, n, o) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, n, o) {
                var i, a, s, u, c, l, m;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        console.log(n, o), i = [], a = 0, s = n.length;

                      case 3:
                        if (!(a < s)) {
                            e.next = 12;
                            break;
                        }
                        return e.next = 6, _core.tools.uploadImg(n, a);

                      case 6:
                        u = e.sent, console.log("_g", u), u.errMsg.includes("uploadFile:ok") ? (c = JSON.parse(u.data), 
                        i.push(c.msg)) : _core.tools.showModal("上传失败", !1);

                      case 9:
                        a++, e.next = 3;
                        break;

                      case 12:
                        l = [].concat(_toConsumableArray(t.upload[o] || []), i), this.$emit("handleForm", "upload", {
                            formIndex: r,
                            index: o,
                            val: l
                        }), m = "", l.forEach(function(e) {
                            m += "<image src='" + e + "'></image>";
                        }), console.log("imgs", m), this.$emit("handleForm", "uploadImgs", {
                            formIndex: r,
                            index: o,
                            val: m
                        });

                      case 18:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.component);

exports.default = com_form;