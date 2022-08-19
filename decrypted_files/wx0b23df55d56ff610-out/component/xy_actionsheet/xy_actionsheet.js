Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../XYReserveTimeView/component"));

exports.default = {
    setDefaults: function() {
        return {
            theme: "ios",
            className: void 0,
            titleText: void 0,
            buttons: [],
            buttonClicked: function() {},
            cancelText: "取消",
            cancel: function() {}
        };
    },
    show: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = Object.assign({
            animateCss: void 0,
            visible: !1
        }, this.setDefaults(), t), n = new e.default({
            scope: "$wux.actionSheet",
            data: i,
            methods: {
                removeSheet: function(e) {
                    if (this.removed) return !1;
                    this.removed = !0, this.setHidden([ "weui-animate-slide-down", "weui-animate-fade-out" ]), 
                    "function" == typeof e && e(i.buttons);
                },
                showSheet: function() {
                    if (this.removed) return !1;
                    this.setVisible([ "weui-animate-slide-up", "weui-animate-fade-in" ]);
                },
                buttonClicked: function(e) {
                    var t = e.currentTarget.dataset.index;
                    !0 === i.buttonClicked(t, i.buttons[t]) && this.removeSheet();
                },
                destructiveButtonClicked: function() {
                    !0 === i.destructiveButtonClicked() && this.removeSheet();
                },
                cancel: function() {
                    this.removeSheet(i.cancel);
                }
            }
        });
        return n.showSheet(), n.cancel;
    }
};