Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        title: {
            type: String,
            value: "标题"
        },
        content: {
            type: String,
            value: "弹窗内容"
        },
        confirmText: {
            type: String,
            value: "确定"
        }
    },
    data: {
        isShow: !1
    },
    methods: {
        hideDialog: function() {
            this.setData({
                isShow: !this.data.isShow
            });
        },
        showDialog: function() {
            this.setData({
                isShow: !this.data.isShow
            });
        },
        confirmEvent: function() {
            this.triggerEvent("confirmEvent");
        },
        getPhoneNumber: function(t) {
            this.triggerEvent("getPhoneNumber", t);
        }
    }
});