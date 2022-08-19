var e = require("../comm/script/config"), r = require("./util"), a = require("./base64.js"), s = require("./hmacsha256.js"), i = getApp();

module.exports = {
    jwtToken: function() {
        if (r.isEmpty(i.globalData.hwxUserInfo) || !i.globalData.hwxUserInfo) return null;
        var t = {
            typ: "JWT",
            alg: "HS256"
        }, u = i.globalData.timeDifference, n = parseInt(new Date().getTime() / 1e3), m = Number(n) + Number(u), o = Number(m) + Number(600), b = i.globalData.hwxUserInfo, l = {
            sub: "userapp",
            iat: m,
            exp: o,
            username: b.UserName ? b.UserName : "",
            iss: "hiweixiu",
            userid: b.Id ? b.Id : ""
        }, c = a.base64encode(JSON.stringify(t)), f = a.base64encode(JSON.stringify(l));
        return c + "." + f + "." + s.b64_hmac_sha256(e.jwtKey, c + "." + f);
    }
};