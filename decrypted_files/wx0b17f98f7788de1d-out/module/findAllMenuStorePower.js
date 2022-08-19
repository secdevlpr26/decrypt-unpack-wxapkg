module.exports = {
    getmenus: function(e) {
        return new Promise(function(t, o) {
            wx.getStorage({
                key: "storeId",
                success: function(o) {
                    wx.request({
                        url: e + "sksystemmodel/findAllMenuStorePower",
                        data: {
                            menuStorePowerStoreinfoStoreId: o.data
                        },
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            t(e);
                        }
                    });
                }
            });
        });
    },
    getindeximg: function(e) {
        return new Promise(function(t, o) {
            wx.getStorage({
                key: "storeId",
                success: function(o) {
                    wx.request({
                        url: e + "skstoremodel/selAdvertWX",
                        data: {
                            storeId: o.data
                        },
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            t(e);
                        }
                    });
                }
            });
        });
    }
};