module.exports = function(e) {
    var t = this;
    this.page = e.page, this.page.currentAddrId = 0, this.app = getApp(), this.onSelected = e.onSelected, 
    this.page.showAddrAddPanel = function(e) {
        t.page.setData({
            showAddrAddPanel: !0
        }), e && e.currentTarget.dataset.isnew && t.page.setData({
            currentAddr: {}
        });
    }, this.page.hideAddrAddPanel = function() {
        t.page.setData({
            showAddrAddPanel: !1,
            selectedArea: "",
            currentAddr: {}
        });
    }, this.page.onAddrRegionChange = function(e) {
        var d = new Array();
        for (var a in e.detail.value) d.push(e.detail.value[a]);
        t.page.setData({
            selectedArea: d.join(",")
        });
    }, this.page.closeCurrentPage = function(e) {
        t.page.data.showAddrAddPanel ? t.page.setData({
            showAddrAddPanel: !t.page.data.showAddrAddPanel
        }) : t.page.setData({
            showAddrManage: !1,
            textareaFlag: !this.data.textareaFlag
        });
    }, this.loadUserAddrList = function(e) {
        t.app.sendRequest({
            url: "/index.php?c=front/Useraddr&a=GetList",
            method: "POST",
            hideLoading: !0,
            success: function(d) {
                if (d.success) {
                    for (var a in d.list) d.list[a].AreaList = d.list[a].ProvinceName + "," + d.list[a].CityName + "," + d.list[a].DistrictName;
                    t.page.setData({
                        userAddrList: d.list
                    }), e && e();
                } else t.app.showModal({
                    title: "提示",
                    content: "操作失败：" + d.msg
                });
            },
            fail: function(e) {
                t.app.showModal({
                    title: "提示",
                    content: "操作失败：" + e
                });
            }
        });
    }, this.findAddrById = function(e) {
        var d = null;
        for (var a in t.page.data.userAddrList) if (t.page.data.userAddrList[a].ID == e) {
            d = t.page.data.userAddrList[a];
            break;
        }
        return d;
    }, this.setCurrentAddrId = function(e) {
        t.page.setData({
            currentAddrId: e
        });
    }, this.setCurrentAddrById = function(e) {
        if (0 !== e) {
            var d = t.findAddrById(e);
            t.setCurrentAddrId(e), t.onSelected && t.onSelected(d);
        } else t.setCurrentAddrId(0);
    }, this.page.onAddrItemSelected = function(e) {
        var d = e.currentTarget.dataset.addrid;
        t.setCurrentAddrById(d), t.page.setData({
            showAddrManage: !1,
            textareaFlag: !this.data.textareaFlag
        });
    }, this.page.onSetDefaultAddr = function(e) {
        var d = e.currentTarget.dataset.addrid;
        for (var a in t.page.data.userAddrList) t.page.data.userAddrList[a].IsDefault = "0";
        t.findAddrById(d).IsDefault = "1", t.page.setData({
            userAddrList: t.page.data.userAddrList
        }), t.app.sendRequest({
            url: "/index.php?c=front/useraddr&a=setDefaultAddr&addrID=" + d,
            method: "POST",
            hideLoading: !0,
            success: function(e) {
                e.success || t.app.showModal({
                    title: "提示",
                    content: "操作失败：" + e.msg
                });
            },
            fail: function(e) {
                t.app.showModal({
                    title: "提示",
                    content: "操作失败：" + e
                });
            }
        });
    }, this.page.editAddrItem = function(e) {
        var d = e.currentTarget.dataset.addrid, a = t.findAddrById(d);
        t.page.setData({
            currentAddr: a
        }), t.page.showAddrAddPanel();
    }, this.page.delAddrItem = function(e) {
        var d = e.currentTarget.dataset.addrid, a = function() {
            t.app.sendRequest({
                url: "/index.php?c=front/useraddr&a=delete&addrID=" + d,
                method: "POST",
                success: function(e) {
                    e.success ? t.loadUserAddrList(function() {
                        d == t.page.data.currentAddrId && (0 !== t.page.data.userAddrList.length ? t.setCurrentAddrById(t.page.data.userAddrList[0].ID) : (t.page.setData({
                            defaultAddr: ""
                        }), t.setCurrentAddrById(0)));
                    }) : t.app.showModal({
                        title: "提示",
                        content: "操作失败：" + e.msg
                    });
                },
                fail: function(e) {
                    t.app.showModal({
                        title: "提示",
                        content: "操作失败：" + e
                    });
                }
            });
        };
        t.app.showModal({
            title: "提示",
            content: "确认删除？",
            showCancel: !0,
            confirm: function() {
                a();
            }
        });
    }, this.page.onAddrEditFormSubmit = function(e) {
        new Array();
        var d = e.detail.value;
        d.RealName ? d.ContactNumber ? 0 != /^((1\d{10})|(\d{3,4}\-\d{6,9}))$/.test(d.ContactNumber) ? d.PostCode && 0 == /^\d{6}$/.test(d.PostCode) ? t.app.showModal({
            title: "提示",
            content: "邮编不正确"
        }) : d.AreaList ? d.Address ? t.app.sendRequest({
            url: "/index.php?c=front/WxApp/ShopApi&a=saveUserAddr",
            method: "POST",
            data: d,
            success: function(e) {
                e.success ? (t.page.setData({
                    showAddrAddPanel: !1,
                    selectedArea: ""
                }), t.loadUserAddrList(function() {
                    d.AddrId == t.page.data.currentAddrId && t.setCurrentAddrById(d.AddrId), t.page.setData({
                        currentAddr: ""
                    });
                })) : t.app.showModal({
                    title: "提示",
                    content: "操作失败：" + e.msg
                });
            },
            fail: function(e) {
                t.app.showModal({
                    title: "提示",
                    content: "操作失败：" + e
                });
            }
        }) : t.app.showModal({
            title: "提示",
            content: "请输入详细地址"
        }) : t.app.showModal({
            title: "提示",
            content: "请选择地区"
        }) : t.app.showModal({
            title: "提示",
            content: "电话格式不正确，请填写座机或手机号码，座机格式如 区号-电话号码"
        }) : t.app.showModal({
            title: "提示",
            content: "请输入收货人电话"
        }) : t.app.showModal({
            title: "提示",
            content: "请输入收货人姓名"
        });
    }, this.page.chooseAddress = function(e) {
        wx.chooseAddress ? wx.chooseAddress({
            success: function(e) {
                var d = {
                    RealName: e.userName,
                    ContactNumber: e.telNumber,
                    AreaList: e.provinceName + "," + e.cityName + "," + e.countyName,
                    Address: e.detailInfo,
                    AddrId: ""
                };
                t.app.sendRequest({
                    url: "/index.php?c=front/WxApp/ShopApi&a=saveUserAddr",
                    method: "POST",
                    data: d,
                    success: function(e) {
                        e.success ? (t.page.setData({
                            showAddrAddPanel: !1,
                            selectedArea: ""
                        }), t.loadUserAddrList(function() {
                            d.AddrId == t.page.data.currentAddrId && t.setCurrentAddrById(d.AddrId), t.page.setData({
                                currentAddr: ""
                            });
                        })) : t.app.showModal({
                            title: "提示",
                            content: "操作失败：" + e.msg
                        });
                    },
                    fail: function(e) {
                        t.app.showModal({
                            title: "提示",
                            content: "操作失败：" + e
                        });
                    }
                });
            },
            fail: function(e) {}
        }) : console.log("当前微信版本不支持chooseAddress");
    };
};