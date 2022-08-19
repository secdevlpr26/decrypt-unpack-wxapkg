function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
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

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), com_pickerTime = function(e) {
    function t() {
        var e, r, o, n;
        _classCallCheck(this, t);
        for (var s = arguments.length, u = Array(s), a = 0; a < s; a++) u[a] = arguments[a];
        return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(u))), 
        o.components = {}, o.data = {
            timeArray: "",
            DateTime: ""
        }, o.methods = {
            Timeshow: function(e, t, r) {
                console.log("Timeshow", e, t, r);
                var o = {}, n = this.timeArray || "";
                1 == Number(e) ? (o = this.DateTime || r.years[r.value[0]] + "年" + r.months[r.value[1]] + "月" + r.days[r.value[2]] + "日" + r.hours[r.value[3]] + "时" + r.mins[r.value[4]] + "分", 
                "" == n && (n = Number(r.years[r.value[0]]) + "/" + Number(r.months[r.value[1]]) + "/" + Number(r.days[r.value[2]]) + "/" + Number(r.hours[r.value[3]]) + "/" + Number(r.mins[r.value[4]]))) : o = "请选择时间", 
                this.$emit("closeData", o, t, n);
            },
            bindChange: function(e, t) {
                var r = t.detail.value, o = e.years[r[0]] + "年" + e.months[r[1]] + "月" + e.days[r[2]] + "日" + e.hours[r[3]] + "时" + e.mins[r[4]] + "分";
                this.DateTime = o, this.timeArray = Number(e.years[r[0]]) + "/" + Number(e.months[r[1]]) + "/" + Number(e.days[r[2]]) + "/" + Number(e.hours[r[3]]) + "/" + Number(e.mins[r[4]]);
            }
        }, n = r, _possibleConstructorReturn(o, n);
    }
    return _inherits(t, e), t;
}(_wepy2.default.component);

exports.default = com_pickerTime;