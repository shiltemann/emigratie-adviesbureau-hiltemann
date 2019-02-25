var mctabsGlobalOptions = {
    event: "click", //"click", or "mouseover"
    autoAdvance: 0, //set it 0 will disable autoAdvance
    persist: false,
    animate: 0, //duration in milliseconds. set it 0 to disable the transitional animation
    updateHash: true,
    license: "2510m"
};

/* McTabs(plain JavaScript version v2013.7.20 Copyright www.menucool.com */
var tabbers = function () {
    var offset = 50,
        delay = 50,
        a = "length",
        L = "data-ajax error: check its syntax. If its success function is declared, make sure the function is defined.";
    if (!Array.prototype.indexOf) Array.prototype.indexOf = function (d, c) {
        for (var b = c || 0, e = this[a]; b < e; b++)
            if (this[b] === d) return b;
        return -1
    };
    var b = [];
    b.getTabberById = function (d) {
        for (var c = 0; c < b[a]; c++)
            if (b[c].R() == d) return b[c];
        return null
    };
    b.a = function (c, a) {
        return a.nodeName == "BODY" || a.nodeType == 0 ? false : c == a ? true : b.a(c, a[g])
    };
    b.b = function (e, f) {
        if (e.indexOf(f[0]) == -1) return;
        for (var c = [], d, b = 1; b < f[a]; b++) {
            d = e.indexOf(f[b]);
            d != -1 && c.push(d)
        }
        c.sort().reverse();
        for (var b = 0; b < c[a]; b++) e.splice(c[b], 1)
    };
    b.c = function () {
        for (var e = [], m, n, c = 0; c < b[a]; c++) {
            m = b[c].P();
            e[c] = [];
            e[c][0] = b[c].R();
            for (var f = 0; f < b[a]; f++) {
                if (c == f) continue;
                n = b[f].P();
                b.a(m, n) && e[c].push(b[f].R())
            }
            b[e[c][0]] = b[c]
        }
        for (var c = e[a] - 1; c >= 0; c--) e[c][a] == 1 && e.splice(c, 1);
        for (var c = 0; c < e[a]; c++)
            for (var f = 0; f < e[a]; f++) c != f && b.b(e[c], e[f]);
        for (var k, g, j, i, l, c = 0; c < e[a]; c++) {
            k = b.getTabberById(e[c][0]);
            g = k.Q();
            for (var f = 1; f < e[c][a]; f++) {
                i = b.getTabberById(e[c][f]);
                l = i.P();
                for (var h = 0; h < g[a]; h++) {
                    j = d[o](g[h].b);
                    if (j && b.a(j, l)) {
                        i.S = j;
                        i.T = k;
                        if (g[h].c == null) g[h].c = [];
                        g[h].c.indexOf(i) == -1 && g[h].c.push(i)
                    }
                }
            }
        }
    };
    b.init = function () {
        for (var c = 0; c < b[a]; c++) b[c].J();
        this[a] = 0;
        H()
    };
    var d = document,
        o = "getElementById",
        q = "documentElement",
        C = "getElementsByTagName",
        t = "addEventListener",
        w = "attachEvent",
        g = "parentNode",
        c = window,
        B = "innerHTML",
        e = "style",
        r = "display",
        s = "zIndex",
        l = "location",
        u = "offsetHeight",
        k = "className",
        f = "getAttribute",
        v = "setAttribute",
        x = "hash",
        E = function (a) {
            if (a && a.stopPropagation) a.stopPropagation();
            else c.event.cancelBubble = true;
            var b = a ? a : c.event;
            b.preventDefault && b.preventDefault()
        }, p = function (a, c, b) {
            if (a[t]) a[t](c, b, false);
            else a[w] && a[w]("on" + c, b)
        }, y = function (a, c, d) {
            a.removeEventListener && a.removeEventListener(c, d, false);
            if (a.detachEvent) {
                var b = "on" + c;
                if (typeof a[b] === "undefined") a[b] = null;
                a.detachEvent(b, d)
            }
        }, M = function (c, d) {
            var b = {};
            for (var a in c) b[a] = c[a];
            for (var a in d) b[a] = d[a];
            return b
        }, cb = function () {
            var c = 50,
                b = navigator.userAgent,
                a;
            if ((a = b.indexOf("MSIE ")) != -1) c = parseInt(b.substring(a + 5, b.indexOf(".", a)));
            return c
        }, i = cb(),
        z = function (b, a) {
            if (b) {
                if (a > 1) a = 1;
                b.op = a;
                if (i < 9) b[e].filter = a < 1 ? "alpha(opacity=" + a * 100 + ")" : "";
                else b[e].opacity = a
            }
        }, F = function (c, a) {
            var b = new RegExp("(^| )" + a + "( |$)");
            return b.test(c[k]) ? true : false
        }, V = function (a, b) {
            if (!F(a, b))
                if (a[k] == "") a[k] = b;
                else a[k] += " " + b
        }, O = function (a, b) {
            var c = new RegExp("(^| )" + b + "( |$)");
            a[k] = a[k].replace(c, "$1");
            a[k] = a[k].replace(/ $/, "")
        }, N = function () {
            var a = 0,
                b = 0;
            if (typeof c.pageYOffset == "number") {
                b = c.pageYOffset;
                a = c.pageXOffset
            } else if (d.body && (d.body.scrollLeft || d.body.scrollTop)) {
                b = d.body.scrollTop;
                a = d.body.scrollLeft
            } else if (d[q] && (d[q].scrollLeft || d[q].scrollTop)) {
                b = d[q].scrollTop;
                a = d[q].scrollLeft
            }
            return [a, b]
        }, I = function (c, d) {
            var b = d == 0 ? c.offsetLeft : c.offsetTop,
                a = c.offsetParent;
            while (a != null) {
                b = d == 0 ? b + a.offsetLeft : b + a.offsetTop;
                a = a.offsetParent
            }
            return b
        }, Y = function () {
            var d = c[l].pathname;
            if (d.indexOf("/") != -1) d = d.split("/");
            var b = d[d[a] - 1] || "root";
            if (b.indexOf(".") != -1) b = b.substring(0, b.indexOf("."));
            if (b > 20) b = b.substring(b[a] - 19);
            return b
        }, U = Y(),
        P = function (a, b) {
            document.cookie = U + a + "=" + b + "; path=/"
        }, eb = [/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/, /.*([\w\-])\.(\w)(\w)\.[^.]+$/, /^(?:.*\.)?(\w)(\w)\.[^.]+$/, /.*([\w\-])([\w\-])\.com\.[^.]+$/, /^(\w)[^.]*(\w)+$/],
        gb = function (a) {
            return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/, "$1$3$2")
        }, fb = ["$1$2$3", "$1$2$3", "$1$24", "$1$23", "$1$22"],
        bb, Z = function () {
            for (var m = function (a) {
                return a[f]("data-tabber") ? a[f]("data-tabber") : a[g].nodeName != "BODY" ? m(a[g]) : null
            }, i, k, l, j, h = d[C]("a"), e = 0, q = h[a]; e < q; e++) {
                if (h[e].b) continue;
                if (h[e][f]("data-ri")) continue;
                i = h[e][f]("href");
                if (!i) continue;
                l = i.match(/#([^?]+)/);
                j = h[e][f]("data-ajax");
                if (l || j) {
                    if (j) i = j.match(/target:\s*['"]([\w|-]+)['"]/)[1];
                    else i = l[1];
                    var n = d[o](i);
                    if (n) {
                        k = m(n);
                        if (k) {
                            h[e][v]("data-ri", k);
                            p(h[e], "click", function (l) {
                                var d = this;
                                if (d === c) d = c.event.srcElement;
                                var k = d[f]("data-ri"),
                                    i = b.getTabberById(k),
                                    h = d[f]("data-ajax");
                                if (h) {
                                    var e = h.match(/target:\s*['"]([\w|-]+)['"]/)[1];
                                    try {
                                        var j = eval("(" + h + ")")
                                    } catch (l) {
                                        alert(L);
                                        return 0
                                    }
                                    var a = i.p(e);
                                    if (a) {
                                        a.a = M(a.a, j);
                                        if (typeof a.a.cache0 == "undefined") a.a.cache0 = a.a.cache === undefined ? 1 : a.a.cache;
                                        a.a.cache = false;
                                        a[v]("href", d[f]("href"))
                                    }
                                } else e = d[f]("href").match(/#([^?]+)/)[1];
                                var g = d[f]("data-scroll");
                                if (g == null) g = true;
                                i.z(e, g);
                                E(l);
                                return false
                            })
                        }
                    }
                }
            }
        }, j, m, D, n, h;
    j = m = null, D = n = 0, h = [0, 0];
    var K = function () {
        if (D) D = 0;
        else {
            j = m = null;
            h = [0, 0];
            n = 0;
            for (var c = 0, d = b[a]; c < d; c++) b[c].w()
        }
    };
    if ("onhashchange" in c && i > 8) p(c, "hashchange", K);
    else {
        var S = c[l][x];
        c.setInterval(function () {
            if (c[l][x] != S) {
                S = c[l][x];
                K()
            }
        }, 100)
    }
    var T = function (a, b) {
        this.a;
        this.b;
        this.c;
        this.d;
        this.e;
        this.f;
        this.g = 1;
        this.h;
        this.i;
        this.j;
        this.k = {};
        this.l = null;
        this.n(a.id, a[f]("data-options"));
        this.o(a, b)
    }, A = function (a, e) {
            if (a == c) a = c.event.srcElement;
            return e ? b.getTabberById(a[f]("data-tabber")) : [b.getTabberById(d[o](a.b)[g][f]("data-tabber")), a]
        }, W = function () {
            var a = A(this);
            a[0].D(a[1])
        }, X = function () {
            var a = A(this);
            clearTimeout(a[0].h);
            a[0].h = null
        }, Q = function () {
            var a = A(this, 1);
            if (a) a.f = 1
        }, R = function () {
            var a = A(this, 1);
            if (a) a.f = 0
        }, J = function (b) {
            var a = A(this);
            j = a[0].a.b;
            m = a[1].b;
            a[0].A(a[1], 1, a[1].b);
            E(b);
            return false
        }, G = function (e, d) {
            for (var c = [], b = 0; b < e[a]; b++) c[c[a]] = String.fromCharCode(e.charCodeAt(b) - (d ? d : 3));
            return c.join("")
        }, ab = function (c) {
            var b = gb(document.domain.replace("www.", "")),
                d = G(b, b[a]);
            try {
                bb = (new Function("$", "_", "_1", "_2", G(escape("%66%75%6E%63%74%69%6F%6E%20%61%5F%24%28%61%29%7B%72%65%74%75%72%6E%20%64%6E%33%28%61%2C%61%2E%6C%65%6E%67%74%68%29%3B%7D")))).call(this, d, c, b, Math.random())
            } catch (e) {}
        };
    T.prototype = {
        p: function (d) {
            for (var c, b = 0; b < this.d[a]; b++)
                if (this.d[b].b == d) {
                    c = this.d[b];
                    break
                }
            return c
        },
        q: function () {
            var b = new RegExp(U + this.idx + "=(\\d+)"),
                a = document.cookie.match(b);
            return a ? a[1] : this.r()
        },
        r: function () {
            for (var b = 0, c = this.d[a]; b < c; b++)
                if (F(this.d[b][g], "selected")) return b;
            return 0
        },
        s: function (b, a) {
            this.a.g.call(this, b, a, this.a.b)
        },
        t: function () {
            this.e = [];
            for (var b, c = 0; c < this.d[a]; c++) {
                b = d[o](this.d[c].b);
                if (b) {
                    if (c) b[e][r] = "none";
                    b.op = 1;
                    if (!this.m) {
                        this.m = b[g];
                        this.m[v]("data-tabber", this.a.b);
                        if (i < 8) this.m[e].zoom = 1
                    }
                    if (i < 9) b[e].zoom = 1;
                    if (i < 7) b[e].padding = "26px";
                    this.e.push(b);
                    var f = this;
                    if (this.a.c == "mouseover") {
                        p(this.d[c], "mouseover", W);
                        p(this.d[c], "mouseout", X);
                        this.d[c].onclick = function (a) {
                            E(a);
                            return false
                        }
                    } else p(this.d[c], "click", J)
                }
            }
        },
        n: function (b, a) {
            if (a) {
                if (typeof a === "string") a = eval("(" + a + ")");
                a = M(mctabsGlobalOptions, a)
            } else a = mctabsGlobalOptions;
            this.a = {
                a: a.license,
                b: b,
                c: a.event,
                d: a.autoAdvance,
                e: a.persist,
                f: i < 8 ? 0 : a.updateHash,
                g: function () {
                    typeof onTabSelect === "function" && onTabSelect(arguments[0], arguments[1], arguments[2])
                }
            };
            this.a.h = !! a.animate;
            this.a.i = this.a.h ? 20 / a.animate : .1
        },
        o: function (k, j) {
            this.idx = j;
            this.d = [];
            for (var i = k[C]("a"), d, b, e, c, g = 0; g < i[a]; g++) {
                b = i[g];
                e = b[f]("data-ajax");
                if (e == "") continue;
                else if (e) {
                    try {
                        c = eval("(" + e + ")")
                    } catch (l) {
                        alert(L);
                        c = null
                    }
                    c.cache = c.cache0 = c.cache === undefined ? 1 : c.cache;
                    b.a = c;
                    b.b = c.target;
                    this.d.push(b)
                } else {
                    b.a = 0;
                    d = b[f]("href");
                    if (d == null) continue;
                    var h = d.match(/#([^?]+)/);
                    if (h) {
                        d = h[1];
                        b.b = d;
                        this.d.push(b)
                    } else continue
                }
            }
            this.t()
        },
        w: function () {
            ab(this.a.a);
            this.y();
            this.a.d && this.O()
        },
        x: function (a) {
            if (a.id) {
                var b = this.p(a.id);
                if (b) return b
            }
            return a[g].nodeName != "BODY" ? this.x(a[g]) : null
        },
        y: function () {
            this.g = 1;
            var e = c[l].search.match(/data-scroll=(-?\w+)/);
            if (e) e = e[1];
            else e = false;
            var b = c[l][x];
            if (b && b[a] > 1) b = b.substr(1);
            var h = -1;
            if (b) {
                var i = d[o](b);
                if (i) {
                    var j = this.x(i);
                    if (j) h = this.z(b, e)
                }
            }
            this.g = true;
            var g = (new Function("a", "b", "c", "d", "e", "f", "g", "h", function (c) {
                for (var b = [], a = 0, d = c.length; a < d; a++) b[b.length] = String.fromCharCode(c.charCodeAt(a) - 4);
                return b.join("")
            }("zev$nAjyrgxmsr,|0}-zev$eAjyrgxmsr,f-zev$gAf2glevGshiEx,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-?\u0081?vixyvr$|/e,}_4a-/e,}_6a-/}_5a?\u0081?zev$qAh2e\u0080\u0080+:+0rAtevwiMrx,q2glevEx,4--?zev$vAQexl2verhsq,-0sA,hsgyqirx_l,+kvthpu+-a\u0080\u0080+px+-2vitpegi,j_r16a0f_r16a-2wtpmx,++-?mj,q%An,r/+9+0s--zev$wAl,+[hiz'w|yjohzl'yltpukly+-0LAl,+puulyO[TS+-?mj,v@25-g_4a_LaAw?ipwi$mj,v@26-e_4a_La/Aw?ipwi$mj,v@268-e_e2pirkxl15a_LaA+@fv3B@fv3BQw+/w?\u0081?vixyvr$_50ka?"))).apply(this, [this.e, fb, this.d, this.a, 0, eb, h, G]);
            this.g = g[0];
            if (g[1] < 1) {
                var f = this.a.e ? parseInt(this.q()) : this.r();
                if (f >= this.d[a]) f = 0;
                this.A(this.d[f], 0)
            }
            if (this.g === 1) this.g = 0
        },
        z: function (i, b) {
            var l = 0,
                g = d[o](i);
            if (g) {
                var e = this.x(g);
                if (e) {
                    var f = e.c;
                    if (typeof f != "undefined" && f[a])
                        for (var k = 0; k < f[a]; k++)
                            if (f[k].x(g)) return 2;
                    if (b == null) {
                        b = true;
                        if (j == null) b = e.b != i
                    }
                    if (b == "true" || b === true) var c = offset;
                    else if (b == "false" || b === false) c = -1.11;
                    else if (typeof b == "number") c = b;
                    else c = parseInt(b);
                    j = this.a.b;
                    m = i;
                    h = c == -1.11 ? [0, 0] : [g, c];
                    this.A(e, 1, i);
                    l = 1
                }
            }
            return l
        },
        A: function (e, h, g) {
            if (!e.b) return;
            var f = d[o](e.b);
            this.i = h;
            if (!f) return;
            this.j = f;
            if (this.a.f) {
                var b = c[l][x];
                if (b && b[a] > 1) b = b.substr(1);
                if (j == this.a.b && b != m) {
                    m = g ? g : e.b;
                    D = 1;
                    c[l][x] = "#" + m
                }
            }
            this.B(e, f)
        },
        B: function (b, d) {
            if (b.a) {
                var h = b.a.cache;
                if (!(h && b.b && this.k[b.b])) {
                    d[B] = '<div class="ajaxLoading">&nbsp;</div>&nbsp;';
                    d.firstChild[e].width = this.m.offsetWidth - 120 + "px";
                    n = 1;
                    this.M(b[f]("href"), b.a, d)
                }
            }
            this.C(d);
            for (var c = 0; c < this.d[a]; c++)
                if (this.d[c] == b) {
                    V(b[g], "selected");
                    this.i && this.a.e && P(this.idx, c);
                    if (i < 8) {
                        this.d[c][e][s] = 3;
                        this.m[e][s] = 0
                    }
                } else {
                    O(this.d[c][g], "selected");
                    if (i < 8) {
                        this.d[c][e][s] = 0;
                        this.m[e][s] = 0
                    }
                }
            if (i < 8) this.m[e][s] = 1;
            if (this.i && this.a.d && this.c)
                if (/\.\d\d1/.test(this.a.d.toString())) {
                    clearInterval(this.c);
                    this.c = null
                }
        },
        C: function (c) {
            if (this.a.h && !this.g) {
                j == this.a.b && this.F(this);
                this.H(c)
            } else {
                for (var b = 0; b < this.e[a]; b++)
                    if (this.e[b].id == c.id) {
                        j == this.a.b && this.F();
                        this.e[b][e][r] = "block";
                        this.a.h && z(this.e[b], 1);
                        !n && this.s(b, c);
                        h[0] && j == this.a.b && this.G()
                    } else this.e[b][e][r] = "none";
                n = 0
            }
        },
        D: function (a) {
            clearTimeout(this.h);
            var b = this;
            this.h = setTimeout(function () {
                j = b.a.b;
                m = a.b;
                b.A(a, 1, a.b)
            }, delay);
            return false
        },
        E: function (c) {
            for (var b = 0; b < this.e[a]; b++) {
                this.e[b][e][r] = this.e[b].id == c.id ? "block" : "none";
                this.a.h && z(this.e[b], this.e[b].id == c.id ? 1 : 0)
            }
            for (var b = 0; b < this.d[a]; b++)
                if (this.d[b].b == c.id) {
                    V(this.d[b][g], "selected");
                    this.i && this.a.e && P(this.idx, b)
                } else O(this.d[b][g], "selected")
        },
        F: function () {
            if (this.S) {
                this.T.F();
                this.T.E(this.S)
            }
        },
        G: function () {
            setTimeout(function () {
                if (h[0]) {
                    h[0].scrollIntoView();
                    var a = N();
                    c.scrollTo(a[0], a[1] - h[1]);
                    h = [0, 0]
                }
            }, 30)
        },
        H: function (c) {
            clearTimeout(this.b);
            this.b = null;
            for (var d = 0, b = 0; b < this.e[a]; b++)
                if (this.e[b].id != c.id) {
                    this.e[b][u] > 40 && this.m[v]("data-hm", this.e[b][u]);
                    if (this.e[b].op > 0) {
                        d = 1;
                        z(this.e[b], this.e[b].op - (this.e[b].op > .5 ? 1 : .5) * this.a.i)
                    }
                }
            if (d) {
                var g = this;
                this.b = setTimeout(function () {
                    g.H(c)
                }, 20)
            } else {
                this.m[e].height = this.m[f]("data-hm") + "px";
                c[e][r] = "block";
                for (var b = 0; b < this.e[a]; b++)
                    if (this.e[b].id != c.id) this.e[b][e][r] = "none";
                if (n == 0)
                    for (var b = 0; b < this.e[a]; b++) this.e[b].id == c.id && this.s(b, c);
                this.I(c)
            }
        },
        I: function (a) {
            clearTimeout(this.b);
            this.b = null;
            var d, b, f, g = 0,
                j = 0;
            if (a.op < 1) {
                z(a, a.op + (a.op > .5 ? 2 : .5) * this.a.i);
                g = 1
            }
            d = a[u];
            b = parseInt(this.m[e].height) || 40;
            f = d - b > 0 ? Math.ceil((d - b) / 5) : Math.floor((d - b) / 5);
            if (b + f != d) {
                this.m[e].height = b + f + "px";
                j = 1
            }
            if (a.op > .1 && h[0])
                if (h[0]) {
                    var k = N(),
                        m = [I(h[0], 0), I(h[0], 1)];
                    c.scrollTo(k[0], m[1] - h[1]);
                    h = [0, 0]
                }
            if (i < 8) this.p(a.id)[e][s] = 3;
            if (g || j) {
                var l = this;
                this.b = setTimeout(function () {
                    l.I(a)
                }, 20)
            } else this.m[e].height = "auto"; if (i < 8) this.m[e][s] = 1
        },
        J: function () {
            for (var b = 0; b < this.d[a]; b++) {
                y(this.d[b], "mouseover", W);
                y(this.d[b], "mouseout", X);
                y(this.m, "mouseover", Q);
                y(this.m, "mouseout", R);
                y(this.d[b], "click", J);
                z(this.e[b], 1);
                if (this.k[this.d[b].b]) this.k[this.d[b].b] = 0
            }
            var c = this;
            clearInterval(c.c);
            this.c = null
        },
        changeOptions: function (a) {
            this.n(this.a.b, a);
            this.J();
            this.t();
            this.w()
        },
        select: function (b, c) {
            if (typeof c === "undefined") c = null;
            j = null;
            if (typeof b == "number") {
                if (b < 0 || b >= this.d[a]) b = 0;
                this.z(this.d[b].b, c);
                var d = this.d[b]
            } else {
                this.z(b, c);
                d = this.p(b)
            }
            return d
        },
        M: function (k, d, b) {
            var m = 0,
                h = 0,
                p = 0,
                j = "html",
                o = 1,
                l = 0,
                e = this;
            if (d) {
                h = d.success || 0;
                j = d.responseType || "html";
                m = d.context && h ? d.context : 0;
                p = d.fail || 0;
                o = d.cache;
                l = d.id
            }
            this.l = this.N();
            if (!o && i < 9) k = k + (k.indexOf("?") == -1 ? "?" : "&") + (new Date).getMilliseconds();
            this.l.open("GET", k, true);
            this.l.onreadystatechange = function () {
                if (e.l && e.l.readyState == 4) {
                    if (e.j.id == b.id) {
                        if (e.l.status == 200) {
                            var i = j.toLowerCase() == "xml" ? e.l.responseXML : e.l.responseText;
                            if (j.toLowerCase() == "json") {
                                var r = i;
                                try {
                                    r = eval("(" + i + ")");
                                    i = r
                                } catch (s) {
                                    c.status = "json parsing failed or 404 error.";
                                    h = 0
                                }
                            }
                            if (l && j == "html") {
                                var k = function (e, b) {
                                    var d = null;
                                    if (b.id == e) return b;
                                    for (var c = 0, f = b.childNodes[a]; c < f; c++)
                                        if (b.childNodes[c].nodeType == 1) {
                                            d = k(e, b.childNodes[c]);
                                            if (d != null) break
                                        }
                                    return d
                                };
                                b[B] = i;
                                var q = k(l, b);
                                if (q) i = q[B]
                            }
                            if (h) i = h(i, m, e.p(b.id));
                            b[B] = i;
                            if (o) e.k[b.id] = 1;
                            n = 0;
                            if (b[g])
                                if (b[g][f]("data-hm") == null && i.indexOf("<img ") != -1) setTimeout(function () {
                                    b[g][v]("data-hm", b[u])
                                }, 40);
                                else b[g][v]("data-hm", b[u])
                        } else b[B] = p ? p(m) : "Failed to get data.";
                        e.C(b);
                        d.cache = d.cache0
                    }
                    e.l = null
                }
            };
            this.l.send(null)
        },
        N: function () {
            try {
                if (c.ActiveXObject) return new c.ActiveXObject("Microsoft.XMLHTTP")
            } catch (a) {}
            return new c.XMLHttpRequest
        },
        O: function () {
            if (this.e[a] > 1) {
                p(this.m, "mouseover", Q);
                p(this.m, "mouseout", R)
            }
            var b = this;
            this.c = setInterval(function () {
                if (b.m[u]) {
                    for (var d = 0, c = 0; c < b.e[a]; c++)
                        if (b.e[c][e][r] != "none") {
                            d = c;
                            break
                        }
                    var f = b.d[++d % b.e[a]];
                    !b.f && b.A(f, 0)
                }
            }, this.a.d * 1e3)
        },
        P: function () {
            return this.m
        },
        Q: function () {
            return this.d
        },
        R: function () {
            return this.a.b
        }
    };
    var db = function (f) {
        var b = false;

        function a() {
            if (b) return;
            b = true;
            setTimeout(f, 4)
        }
        if (d[t]) d[t]("DOMContentLoaded", a, false);
        else if (d[w]) {
            try {
                var g = c.frameElement != null
            } catch (h) {}
            if (d[q].doScroll && !g) {
                function e() {
                    if (b) return;
                    try {
                        d[q].doScroll("left");
                        a()
                    } catch (c) {
                        setTimeout(e, 10)
                    }
                }
                e()
            }
            d[w]("onreadystatechange", function () {
                document.readyState === "complete" && a()
            })
        }
        if (c[t]) c[t]("load", a, false);
        else c[w] && c[w]("onload", a)
    }, H = function () {
            for (var e = d[C]("ul"), c = 0, g = e[a]; c < g; c++) F(e[c], "mctabs") && e[c][C]("a")[a] > 0 && b.push(new T(e[c], c));
            b.c();
            for (var f = 0, h = b[a]; f < h; f++) b[f].w();
            Z()
        };
    db(H);
    return b
}()
