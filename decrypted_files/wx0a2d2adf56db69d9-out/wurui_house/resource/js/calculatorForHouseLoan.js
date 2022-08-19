var r = function(r, e) {
    return (Math.round(r * Math.pow(10, e)) / Math.pow(10, e)).toFixed(e);
}, e = {
    getRepayPerMouPriceAi: function(r, e, p) {
        var a = Math.pow(1 + e, p);
        return r * e * a / (a - 1);
    },
    getRepayInterestPerMouAi: function(r, e, p, a) {
        var A = [ Math.pow(1 + p, r), Math.pow(1 + p, a) ], o = A[0], t = A[1];
        return e * p * (o - t * (o - 1) / (t - 1));
    }
};

module.exports = {
    calculate: function(p, a, A) {
        var o = {
            repayPerMouObjAi: {
                repayInterestPerMouArrAi: [],
                repayPrincipalPerMouArrAi: [],
                balanceArrAi: [],
                totalRepaidArrAi: [],
                totalRepayPerMouArrAi: []
            },
            repayPerMouObjAp: {
                repayInterestPerMouArrAp: [],
                repayPerMouPriceArrAp: [],
                balanceArrAp: [],
                totalRepaidArrAp: [],
                totalRepayPerMouArrAp: []
            }
        }, t = e.getRepayPerMouPriceAi(p, a, A), u = p, i = 0, P = p / A, M = P * a, y = p, n = 0;
        !function() {
            for (var M = 0; M < A; M++) {
                var l = e.getRepayInterestPerMouAi(M, p, a, A), b = t - l, c = (u -= b) + (i += t);
                o.repayPerMouObjAi.repayInterestPerMouArrAi.push(r(l, 2)), o.repayPerMouObjAi.repayPrincipalPerMouArrAi.push(r(b, 2)), 
                o.repayPerMouObjAi.balanceArrAi.push(r(u, 2)), o.repayPerMouObjAi.totalRepaidArrAi.push(r(i, 2)), 
                o.repayPerMouObjAi.totalRepayPerMouArrAi.push(r(c, 2));
                var s = p * a * (1 - (M - 1) / A), j = P + s, O = (y -= P) + (n += j);
                o.repayPerMouObjAp.repayInterestPerMouArrAp.push(r(s, 2)), o.repayPerMouObjAp.repayPerMouPriceArrAp.push(r(j, 2)), 
                o.repayPerMouObjAp.balanceArrAp.push(r(y, 2)), o.repayPerMouObjAp.totalRepaidArrAp.push(r(n, 2)), 
                o.repayPerMouObjAp.totalRepayPerMouArrAp.push(r(O, 2));
            }
        }();
        var l = t * A, b = l - p, c = o.repayPerMouObjAp.totalRepaidArrAp[o.repayPerMouObjAp.totalRepaidArrAp.length - 1], s = c - p;
        return {
            loanTotal: r(p, 2),
            totalInterestAi: r(b, 2),
            totalRepayAi: r(l, 2),
            repayPerMouAi: r(t, 2),
            totalInterestAp: r(s, 2),
            totalRepayPriceAp: r(c, 2),
            repayPrincipalPerMouAp: r(P, 2),
            repayPerMouthAp: r(o.repayPerMouObjAp.repayPerMouPriceArrAp[0], 2),
            decreasePerMouAp: r(M, 2),
            repayPerMouObjAi: o.repayPerMouObjAi,
            repayPerMouObjAp: o.repayPerMouObjAp
        };
    }
};