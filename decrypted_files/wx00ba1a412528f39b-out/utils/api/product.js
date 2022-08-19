Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getFeeTxt = function(t) {
    var e = {
        CNY: "￥",
        USD: "$"
    };
    return t = t.toUpperCase(), e[t] || "$";
};

getApp();

var t = require("./cgi.js");

exports.getDetail = function(e, i, o, n, r) {
    t.get({
        url: "/bizmall/wxopen_malldetail?action=get_detail&pid=" + e,
        hideLoading: !0,
        success: function(t) {
            i && i(t);
        },
        fail: function(t) {
            o && o(t);
        },
        error: function() {
            n && n();
        },
        complete: function() {
            r && r();
        }
    });
}, exports.getExpressFee = function(e, i, o, n, r) {
    t.post({
        url: "/bizmall/wxopen_mallexpress?action=get_express_fee",
        data: e,
        success: function(t) {
            i && i(t);
        },
        fail: function(t) {
            o && o(t);
        },
        error: function() {
            n && n();
        },
        complete: function() {
            r && r();
        }
    });
}, exports.preSubmit = function(e, i, o, n, r) {
    e.list || (e.list = []);
    var u = [], s = !0, c = !1, l = void 0;
    try {
        for (var a, f = e.item_list[Symbol.iterator](); !(s = (a = f.next()).done); s = !0) {
            var p = a.value;
            u.push({
                product_id: p.product_id || "",
                buy_count: 1 * p.buy_count,
                sku_id_info: p.sku_id_info,
                outer_id: p.outer_id || "",
                url: ""
            });
        }
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        c = !0, l = t;
    } finally {
        try {
            !s && f.return && f.return();
        } finally {
            if (c) throw l;
        }
    }
    t.post({
        url: "/bizmall/wxopen_mallorder?action=presubmit",
        data: {
            pre_submit_info: JSON.stringify({
                is_cart: e.is_cart || 0,
                item_list: u
            })
        },
        success: function(t) {
            i && i(t);
        },
        fail: function(t) {
            o && o(t);
        },
        error: function() {
            n && n();
        },
        complete: function() {
            r && r();
        }
    });
}, exports.submit = function(e, i, o, n, r) {
    console.log("submit:", e), t.post({
        url: "/bizmall/wxopen_mallorder?action=submit",
        data: {
            submit_info: JSON.stringify(e)
        },
        success: function(t) {
            i && i(t);
        },
        fail: function(t) {
            o && o(t);
        },
        error: function() {
            n && n();
        },
        complete: function() {
            r && r();
        }
    });
};