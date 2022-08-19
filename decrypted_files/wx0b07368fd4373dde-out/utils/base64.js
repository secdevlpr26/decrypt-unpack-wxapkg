!function() {
    var r = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/" ], n = function(r) {
        for (var n = new Array(); r > 0; ) {
            var t = r % 2;
            r = Math.floor(r / 2), n.push(t);
        }
        return n.reverse(), n;
    }, t = function(r) {
        for (var n = 0, t = 0, a = r.length - 1; a >= 0; --a) 1 == r[a] && (n += Math.pow(2, t)), 
        ++t;
        return n;
    }, a = function(r, n) {
        for (var t = 8 - (r + 1) + 6 * (r - 1) - n.length; --t >= 0; ) n.unshift(0);
        for (var a = [], o = r; --o >= 0; ) a.push(1);
        a.push(0);
        for (var c = 0, e = 8 - (r + 1); c < e; ++c) a.push(n[c]);
        for (var f = 0; f < r - 1; ++f) {
            a.push(1), a.push(0);
            for (var h = 6; --h >= 0; ) a.push(n[c++]);
        }
        return a;
    }, o = {
        encoder: function(o) {
            for (var c = [], e = [], f = 0, h = o.length; f < h; ++f) {
                var s = o.charCodeAt(f), u = n(s);
                if (s < 128) {
                    for (var v = 8 - u.length; --v >= 0; ) u.unshift(0);
                    e = e.concat(u);
                } else s >= 128 && s <= 2047 ? e = e.concat(a(2, u)) : s >= 2048 && s <= 65535 ? e = e.concat(a(3, u)) : s >= 65536 && s <= 2097151 ? e = e.concat(a(4, u)) : s >= 2097152 && s <= 67108863 ? e = e.concat(a(5, u)) : s >= 4e6 && s <= 2147483647 && (e = e.concat(a(6, u)));
            }
            for (var i = 0, f = 0, h = e.length; f < h; f += 6) {
                var l = f + 6 - h;
                2 == l ? i = 2 : 4 == l && (i = 4);
                for (var g = i; --g >= 0; ) e.push(0);
                c.push(t(e.slice(f, f + 6)));
            }
            for (var p = "", f = 0, h = c.length; f < h; ++f) p += r[c[f]];
            for (var f = 0, h = i / 2; f < h; ++f) p += "=";
            return p;
        },
        decoder: function(a) {
            var o = a.length, c = 0;
            "=" == a.charAt(o - 1) && ("=" == a.charAt(o - 2) ? (c = 4, a = a.substring(0, o - 2)) : (c = 2, 
            a = a.substring(0, o - 1)));
            for (var e = [], f = 0, h = a.length; f < h; ++f) for (var s = a.charAt(f), u = 0, v = r.length; u < v; ++u) if (s == r[u]) {
                var i = n(u), l = i.length;
                if (6 - l > 0) for (var g = 6 - l; g > 0; --g) i.unshift(0);
                e = e.concat(i);
                break;
            }
            c > 0 && (e = e.slice(0, e.length - c));
            for (var p = [], A = [], f = 0, h = e.length; f < h; ) if (0 == e[f]) p = p.concat(t(e.slice(f, f + 8))), 
            f += 8; else {
                for (var d = 0; f < h && 1 == e[f]; ) ++d, ++f;
                for (A = A.concat(e.slice(f + 1, f + 8 - d)), f += 8 - d; d > 1; ) A = A.concat(e.slice(f + 2, f + 8)), 
                f += 8, --d;
                p = p.concat(t(A)), A = [];
            }
            return p;
        }
    };
    window.BASE64 = o;
}();