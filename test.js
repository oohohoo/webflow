/*!
 * Flip 3.6.2
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function (e) {
    "use strict";

    function n(t) {
        var e = t.ownerDocument || t;
        !(C in t.style) && "msTransform" in t.style && (F = (C = "msTransform") + "Origin");
        for (; e.parentNode && (e = e.parentNode););
        if (w = window, m = new B, e) {
            a = (b = e).documentElement, S = e.body;
            var n = e.createElement("div"),
                i = e.createElement("div");
            S.appendChild(n), n.appendChild(i), n.style.position = "static", n.style[C] = "translate3d(0,0,1px)", g = i.offsetParent !== n, S.removeChild(n)
        }
        return e
    }

    function r() {
        return w.pageYOffset || b.scrollTop || a.scrollTop || S.scrollTop || 0
    }

    function s() {
        return w.pageXOffset || b.scrollLeft || a.scrollLeft || S.scrollLeft || 0
    }

    function t(t) {
        return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
    }

    function v(e, i) {
        if (e.parentNode && (b || n(e))) {
            var r = t(e),
                a = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                o = r ? i ? "rect" : "g" : "div",
                s = 2 !== i ? 0 : 100,
                l = 3 === i ? 100 : 0,
                p = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                u = b.createElementNS ? b.createElementNS(a.replace(/^https/, "http"), o) : b.createElement(o);
            return i && (r ? (h = h || v(e), u.setAttribute("width", .01), u.setAttribute("height", .01), u.setAttribute("transform", "translate(" + s + "," + l + ")"), h.appendChild(u)) : (d || ((d = v(e)).style.cssText = p), u.style.cssText = p + "width:0.1px;height:0.1px;top:" + l + "px;left:" + s + "px", d.appendChild(u))), u
        }
        throw "Need document and parent."
    }

    function x(e, n) {
        var i, r, a, o, s, l, p = t(e),
            u = e === p,
            c = p ? E : I,
            f = e.parentNode;
        if (e === w) return e;
        if (c.length || c.push(v(e, 1), v(e, 2), v(e, 3)), i = p ? h : d, p) a = u ? {
            x: 0,
            y: 0
        } : e.getBBox(), s = (r = e.transform ? e.transform.baseVal : {}).numberOfItems ? (o = (r = 1 < r.numberOfItems ? function _consolidate(t) {
            for (var e = new B, n = 0; n < t.numberOfItems; n++) e.multiply(t.getItem(n).matrix);
            return e
        }(r) : r.getItem(0).matrix).a * a.x + r.c * a.y, r.b * a.x + r.d * a.y) : (r = m, o = a.x, a.y), n && "g" === e.tagName.toLowerCase() && (o = s = 0), (u ? p : f).appendChild(i), i.setAttribute("transform", "matrix(" + r.a + "," + r.b + "," + r.c + "," + r.d + "," + (r.e + o) + "," + (r.f + s) + ")");
        else {
            if (o = s = 0, g)
                for (r = e.offsetParent, a = e;
                    (a = a && a.parentNode) && a !== r && a.parentNode;) 4 < (w.getComputedStyle(a)[C] + "").length && (o = a.offsetLeft, s = a.offsetTop, a = 0);
            if ("absolute" !== (l = w.getComputedStyle(e)).position)
                for (r = e.offsetParent; f && f !== r;) o += f.scrollLeft || 0, s += f.scrollTop || 0, f = f.parentNode;
            (a = i.style).top = e.offsetTop - s + "px", a.left = e.offsetLeft - o + "px", a[C] = l[C], a[F] = l[F], a.position = "fixed" === l.position ? "fixed" : "absolute", e.parentNode.appendChild(i)
        }
        return i
    }

    function y(t, e, n, i, r, a, o) {
        return t.a = e, t.b = n, t.c = i, t.d = r, t.e = a, t.f = o, t
    }
    var b, w, a, S, d, h, m, g, i, C = "transform",
        F = C + "Origin",
        E = [],
        I = [],
        B = ((i = Matrix2D.prototype).inverse = function inverse() {
            var t = this.a,
                e = this.b,
                n = this.c,
                i = this.d,
                r = this.e,
                a = this.f,
                o = t * i - e * n || 1e-10;
            return y(this, i / o, -e / o, -n / o, t / o, (n * a - i * r) / o, -(t * a - e * r) / o)
        }, i.multiply = function multiply(t) {
            var e = this.a,
                n = this.b,
                i = this.c,
                r = this.d,
                a = this.e,
                o = this.f,
                s = t.a,
                l = t.c,
                p = t.b,
                u = t.d,
                c = t.e,
                f = t.f;
            return y(this, s * e + p * i, s * n + p * r, l * e + u * i, l * n + u * r, a + c * e + f * i, o + c * n + f * r)
        }, i.clone = function clone() {
            return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f)
        }, i.equals = function equals(t) {
            var e = this.a,
                n = this.b,
                i = this.c,
                r = this.d,
                a = this.e,
                o = this.f;
            return e === t.a && n === t.b && i === t.c && r === t.d && a === t.e && o === t.f
        }, i.apply = function apply(t, e) {
            void 0 === e && (e = {});
            var n = t.x,
                i = t.y,
                r = this.a,
                a = this.b,
                o = this.c,
                s = this.d,
                l = this.e,
                p = this.f;
            return e.x = n * r + i * o + l || 0, e.y = n * a + i * s + p || 0, e
        }, Matrix2D);

    function Matrix2D(t, e, n, i, r, a) {
        void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === i && (i = 1), void 0 === r && (r = 0), void 0 === a && (a = 0), y(this, t, e, n, i, r, a)
    }

    function getGlobalMatrix(e, i, a, o) {
        if (!e || !e.parentNode || (b || n(e)).documentElement === e) return new B;
        var l = function _forceNonZeroScale(t) {
                for (var e, n; t && t !== S;)(n = t._gsap) && n.uncache && n.get(t, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), e ? e.push(n) : e = [n]), t = t.parentNode;
                return e
            }(e),
            p = t(e) ? E : I,
            u = x(e, a),
            c = p[0].getBoundingClientRect(),
            f = p[1].getBoundingClientRect(),
            d = p[2].getBoundingClientRect(),
            h = u.parentNode,
            m = !o && function _isFixed(t) {
                return "fixed" === w.getComputedStyle(t).position || ((t = t.parentNode) && 1 === t.nodeType ? _isFixed(t) : void 0)
            }(e),
            g = new B((f.left - c.left) / 100, (f.top - c.top) / 100, (d.left - c.left) / 100, (d.top - c.top) / 100, c.left + (m ? 0 : s()), c.top + (m ? 0 : r()));
        if (h.removeChild(u), l)
            for (c = l.length; c--;)(f = l[c]).scaleX = f.scaleY = 0, f.renderTransform(1, f);
        return i ? g.inverse() : g
    }

    function K(t) {
        return _(t)[0] || console.warn("Element not found:", t)
    }

    function L(t) {
        return Math.round(1e4 * t) / 1e4 || 0
    }

    function M(t, e, n) {
        return t.forEach(function (t) {
            return t.classList[n](e)
        })
    }

    function P(t) {
        return t.replace(/([A-Z])/g, "-$1").toLowerCase()
    }

    function U() {
        return String.fromCharCode.apply(null, arguments)
    }

    function X(t, e) {
        var n, i = {};
        for (n in t) e[n] || (i[n] = t[n]);
        return i
    }

    function Z(t) {
        var e = W[t] = function _listToArray(t) {
            return "string" == typeof t ? t.split(" ").join("").split(",") : t
        }(t);
        return k[t] = e.concat(A), e
    }

    function aa(t, e, n) {
        return t.forEach(function (t) {
            return t.d = function _getDOMDepth(t, e, n) {
                void 0 === n && (n = 0);
                for (var i = t.parentNode, r = 1e3 * Math.pow(10, n) * (e ? -1 : 1), a = e ? 900 * -r : 0; t;) a += r, t = t.previousSibling;
                return i ? a + _getDOMDepth(i, e, n + 1) : a
            }(n ? t.element : t.t, e)
        }), t.sort(function (t, e) {
            return t.d - e.d
        }), t
    }

    function ba(t, e) {
        for (var n, i, r = t.element.style, a = t.css = t.css || [], o = e.length; o--;) i = r[n = e[o]] || r.getPropertyValue(n), a.push(i ? n : l[n] || (l[n] = P(n)), i);
        return r
    }

    function ca(t) {
        var e = t.css,
            n = t.element.style,
            i = 0;
        for (t.cache.uncache = 1; i < e.length; i += 2) e[i + 1] ? n[e[i]] = e[i + 1] : n.removeProperty(e[i])
    }

    function ea(t, e) {
        var n, i, a = t.element,
            o = t.width,
            l = t.height,
            p = t.uncache,
            u = t.getProp,
            c = a.style;
        if ("object" != typeof e && (e = t), "absolute" !== u("position")) {
            if (i = "none" === u("display"), t.isVisible && !i || (i && (ba(t, ["display"]).display = e.display), t.matrix = e.matrix, t.width = o = t.width || e.width, t.height = l = t.height || e.height), c.position = "absolute", c.width = o + "px", c.height = l + "px", c.top || (c.top = "0px"), c.left || (c.left = "0px"), p) n = new nt(a);
            else if (n = X(t, T), t.simple) {
                var f = a.getBoundingClientRect();
                n.matrix = new B(1, 0, 0, 1, f.left + s(), f.top + r())
            } else n.matrix = getGlobalMatrix(a, !1, !1, !0);
            n = tt(n, t, !0), t.x = parseFloat(n.x), t.y = parseFloat(n.y)
        }
        return a
    }

    function ia(t, e) {
        var n, i = t.style || t;
        for (n in e) i[n] = e[n]
    }

    function la(t) {
        return t.map(function (t) {
            return t.element
        })
    }

    function ma(t, e, n) {
        return t && e.length && n.add(t(la(e), n, new et(e, 0, !0)), 0)
    }

    function oa(t, e) {
        return t instanceof et ? t : new et(t, e)
    }

    function pa(t, e, n) {
        var i = t.idLookup[n],
            r = t.alt[n];
        return !r.isVisible || (e.getElementState(r.element) || r).isVisible && i.isVisible ? i : r
    }

    function qa(t, e, n, i) {
        if (Q) {
            t instanceof et && e instanceof et || console.warn("Not a valid state object.");
            n = n || {};
            var r, a, o, s, l, p, u, c, f, d, h, m = n.clearProps,
                g = n.onEnter,
                x = n.onLeave,
                y = n.absolute,
                b = n.custom,
                w = n.delay,
                v = n.paused,
                S = n.repeat,
                C = n.repeatDelay,
                U = n.yoyo,
                F = n.toggleClass,
                E = n.nested,
                L = n.zIndex,
                I = n.scale,
                B = n.fade,
                T = n.stagger,
                k = n.spin,
                P = ("props" in n ? n : t).props,
                _ = X(n, H),
                N = j.timeline({
                    delay: w,
                    paused: v,
                    repeat: S,
                    repeatDelay: C,
                    yoyo: U
                }),
                V = _,
                A = [],
                O = [],
                Y = [],
                D = [],
                G = !0 === k ? 1 : k || 0,
                R = "function" == typeof k ? k : function () {
                    return G
                },
                z = t.interrupted || e.interrupted,
                q = N[1 !== i ? "to" : "from"];
            for (a in i || (e = new et(e.targets, P).fit(e, I)), e.idLookup) l = (h = e.alt[a] ? pa(e, t, a) : e.idLookup[a]).element, d = t.idLookup[a], t.alt[a] && l === d.element && (d = t.alt[a]), d ? (p = {
                t: l,
                b: d,
                a: h,
                sd: d.element === l ? 0 : h.isVisible ? 1 : -1
            }, Y.push(p), p.sd && (p.sd < 0 && (p.b = h, p.a = d), B && Y.push(p.swap = {
                t: d.element,
                b: p.b,
                a: p.a,
                sd: -1 * p.sd,
                swap: p
            })), l._flip = d.element._flip = N) : h.isVisible && (Y.push({
                t: l,
                b: X(h, {
                    isVisible: 1
                }),
                a: h,
                sd: 0
            }), l._flip = N);
            for (P && (W[P] || Z(P)).forEach(function (e) {
                    return _[e] = function (t) {
                        return Y[t].a.props[e]
                    }
                }), Y.finalStates = f = [], y && aa(Y, !0).forEach(function (t) {
                    return (t.a.isVisible || t.b.isVisible) && ea(t.sd < 0 ? t.b : t.a, t.b)
                }), aa(Y), s = 0; s < Y.length; s++) l = (p = Y[s]).t, !E || p.sd < 0 || (p.a.matrix = getGlobalMatrix(l, !1, !1, !0)), p.sd || p.b.isVisible && p.a.isVisible ? (p.sd < 0 ? (u = new nt(l, P, t.simple), tt(u, p.a, I, 0, 0, u), u.matrix = getGlobalMatrix(l, !1, !1, !0), u.css = p.b.css, p.a = u, B && (l.style.opacity = z ? p.b.opacity : p.a.opacity), T && D.push(l)) : 0 < p.sd && B && (l.style.opacity = z ? p.a.opacity - p.b.opacity : "0"), tt(p.a, p.b, I, P)) : p.b.isVisible ? p.a.isVisible || (p.b.css = p.a.css, O.push(p.b), Y.splice(s--, 1), y && E && tt(p.a, p.b, I, P)) : (p.a.isVisible && A.push(p.a), Y.splice(s--, 1)), f.push(p.a);
            if (I ? (_.scaleX = function (t) {
                    return Y[t].a.scaleX
                }, _.scaleY = function (t) {
                    return Y[t].a.scaleY
                }) : (_.width = function (t) {
                    return Y[t].a.width + "px"
                }, _.height = function (t) {
                    return Y[t].a.height + "px"
                }, _.autoRound = n.autoRound || !1), _.x = function (t) {
                    return Y[t].a.x + "px"
                }, _.y = function (t) {
                    return Y[t].a.y + "px"
                }, _.rotation = function (t) {
                    return Y[t].a.rotation + (k ? 360 * R(t, c[t], c) : 0)
                }, _.skewX = function (t) {
                    return Y[t].a.skewX
                }, c = Y.map(function (t) {
                    return t.t
                }), !L && 0 !== L || (_.modifiers = {
                    zIndex: function zIndex() {
                        return L
                    }
                }, _.zIndex = L, _.immediateRender = !1 !== n.immediateRender), B && (_.opacity = function (t) {
                    return Y[t].sd < 0 ? 0 : 0 < Y[t].sd ? Y[t].a.opacity : "+=0"
                }), D.length) {
                T = j.utils.distribute(T);
                var K = c.slice(D.length);
                _.stagger = function (t, e) {
                    return T(~D.indexOf(e) ? c.indexOf(Y[t].swap.t) : t, e, K)
                }
            }
            if ($.forEach(function (t) {
                    return n[t] && N.eventCallback(t, n[t], n[t + "Params"])
                }), b && c.length)
                for (a in V = X(_, H), "scale" in b && (b.scaleX = b.scaleY = b.scale, delete b.scale), b)(r = X(b[a], J))[a] = _[a], !("duration" in r) && "duration" in _ && (r.duration = _.duration), r.stagger = _.stagger, q.call(N, c, r, 0), delete V[a];
            return (c.length || O.length || A.length) && (F && N.add(function () {
                return M(c, F, N._zTime < 0 ? "remove" : "add")
            }, 0) && !v && M(c, F, "add"), c.length && q.call(N, c, V, 0)), ma(g, A, N), ma(x, O, N), o = N.duration(), N.call(function () {
                var t = N.time() >= o;
                t && function _setFinalStates(t, e) {
                    for (var n = t.length; n--;) t[n].a.cache.uncache = 1;
                    e || t.finalStates.forEach(ca)
                }(Y, !m), F && M(c, F, t ? "remove" : "add")
            }), N
        }
    }

    function ra(t) {
        for (var e, n = t.idLookup = {}, i = t.alt = {}, r = t.elementStates, a = r.length; a--;) n[(e = r[a]).id] ? i[e.id] = e : n[e.id] = e
    }
    var _, j, u, o, c = 1,
        N = 180 / Math.PI,
        V = Math.PI / 180,
        T = {},
        l = {},
        k = {},
        $ = "onStart,onUpdate,onComplete,onReverseComplete,onInterrupt".split(","),
        A = "transform,transformOrigin,width,height,position,top,left,opacity,zIndex".split(","),
        H = {
            zIndex: 1,
            clear: 1,
            simple: 1,
            spin: 1,
            clearProps: 1,
            targets: 1,
            toggleClass: 1,
            onComplete: 1,
            onUpdate: 1,
            onInterrupt: 1,
            onStart: 1,
            delay: 1,
            repeat: 1,
            repeatDelay: 1,
            yoyo: 1,
            scale: 1,
            fade: 1,
            absolute: 1,
            props: 1,
            onEnter: 1,
            onLeave: 1,
            custom: 1,
            paused: 1,
            nested: 1
        },
        J = {
            zIndex: 1,
            simple: 1,
            clearProps: 1,
            scale: 1,
            absolute: 1,
            fitChild: 1,
            getVars: 1,
            props: 1
        },
        p = "Flip",
        f = U(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
        Q = function (t) {
            for (var e = 0 === (window ? window.location.href : "").indexOf(U(102, 105, 108, 101, 58, 47, 47)) || -1 !== t.indexOf(U(108, 111, 99, 97, 108, 104, 111, 115, 116)) || -1 !== t.indexOf(U(49, 50, 55, 46, 48, 32, 48, 46, 49)), n = [f, U(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), U(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), U(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), U(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), U(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), U(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), U(99, 100, 112, 110, 46, 105, 111), U(112, 101, 110, 115, 46, 105, 111), U(103, 97, 110, 110, 111, 110, 46, 116, 118), U(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), U(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), U(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), U(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), U(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), U(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), U(112, 108, 110, 107, 114, 46, 99, 111), U(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), U(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), U(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), U(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), U(99, 115, 98, 46, 97, 112, 112), U(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), U(99, 111, 100, 105, 101, 114, 46, 105, 111), U(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), U(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), U(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), U(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], i = n.length; - 1 < --i;)
                if (-1 !== t.indexOf(n[i])) return !0;
            return e && window && window.console && console.log(U(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + p + U(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), e || !(window.location.href = "https://" + f + U(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47) + "?plugin=" + p + "&source="")
        }(window ? window.location.host : ""),
        W = {},
        O = function _parseElementState(t, e, n, i) {
            return t instanceof nt ? t : t instanceof et ? function _findElStateInState(t, e) {
                return e && t.idLookup[O(e).id] || t.elementStates[0]
            }(t, i) : new nt("string" == typeof t ? K(t) || console.warn(t + " not found") : t, e, n)
        },
        tt = function _fit(t, e, n, i, a, o) {
            var l, p, u, c, f, d, h, m = t.element,
                g = t.cache,
                x = t.parent,
                y = t.x,
                b = t.y,
                w = e.width,
                v = e.height,
                S = e.scaleX,
                C = e.scaleY,
                M = e.rotation,
                U = o && m.style.cssText,
                F = o && m.getBBox && m.getAttribute("transform"),
                E = t,
                I = e.matrix,
                X = I.e,
                B = I.f,
                T = t.width !== w || t.height !== v || t.scaleX !== S || t.scaleY !== C || t.rotation !== M,
                k = !T && t.simple && e.simple && !a;
            return k ? (S = C = 1, M = l = 0) : (d = (f = function _getInverseGlobalMatrix(t) {
                var e = t._gsap || j.core.getCache(t);
                return e.gmCache === j.ticker.frame ? e.gMatrix : (e.gmCache = j.ticker.frame, e.gMatrix = getGlobalMatrix(t, !0, !1, !0))
            }(x)).clone().multiply(e.ctm ? e.matrix.clone().multiply(e.ctm) : e.matrix), M = L(Math.atan2(d.b, d.a) * N), l = L(Math.atan2(d.c, d.d) * N + M) % 360, S = Math.sqrt(Math.pow(d.a, 2) + Math.pow(d.b, 2)), C = Math.sqrt(Math.pow(d.c, 2) + Math.pow(d.d, 2)) * Math.cos(l * V), a && (a = _(a)[0], c = j.getProperty(a), h = a.getBBox && "function" == typeof a.getBBox && a.getBBox(), E = {
                scaleX: c("scaleX"),
                scaleY: c("scaleY"),
                width: h ? h.width : Math.ceil(parseFloat(c("width", "px"))),
                height: h ? h.height : parseFloat(c("height", "px"))
            }), g.rotation = M + "deg", g.skewX = l + "deg"), n ? (S *= w / (E.width || 1e-9), C *= v / (E.height || 1e-9), g.scaleX = S, g.scaleY = C) : (w *= S / E.scaleX, v *= C / E.scaleY, m.style.width = w + "px", m.style.height = v + "px"), "fixed" === t.position && (X -= s(), B -= r()), "fixed" === e.position && (X += s(), B += r()), i && ia(m, e.props), k ? (y += X - t.matrix.e, b += B - t.matrix.f) : T || x !== e.parent ? (g.renderTransform(1, g), d = getGlobalMatrix(a || m, !1, !1, !0), p = f.apply({
                x: d.e,
                y: d.f
            }), u = f.apply({
                x: X,
                y: B
            }), y += L(u.x - p.x), b += L(u.y - p.y)) : (f.e = f.f = 0, u = f.apply({
                x: X - t.matrix.e,
                y: B - t.matrix.f
            }), y += L(u.x), b += L(u.y)), !o || o instanceof nt ? (g.x = y + "px", g.y = b + "px", g.renderTransform(1, g)) : (m.style.cssText = U, m.getBBox && m.setAttribute("transform", F || ""), g.uncache = 1), o && (o.x = y, o.y = b, o.rotation = M, o.skewX = l, n ? (o.scaleX = S, o.scaleY = C) : (o.width = w, o.height = v)), o || g
        },
        et = ((o = FlipState.prototype).update = function update(t) {
            var e = this;
            return this.elementStates = this.targets.map(function (t) {
                return new nt(t, e.props, e.simple)
            }), ra(this), this.killFlips(t), this.recordInlineStyles(), this
        }, o.fit = function fit(t, e, n) {
            for (var i, r, a = aa(this.elementStates.slice(0), !1, !0), o = (t || this).idLookup, s = 0; s < a.length; s++) i = a[s], n && (i.matrix = getGlobalMatrix(i.element, !1, !1, !0)), (r = o[i.id]) && tt(i, r, e, !0, 0, i), i.matrix = getGlobalMatrix(i.element, !1, !1, !0);
            return this
        }, o.getProperty = function getProperty(t, e) {
            var n = this.getElementState(t) || T;
            return e in n ? n[e] : (n.props || T)[e]
        }, o.recordInlineStyles = function recordInlineStyles() {
            for (var t = k[this.props] || A, e = this.elementStates.length; e--;) ba(this.elementStates[e], t)
        }, o.killFlips = function killFlips(e) {
            var n;
            this.targets.forEach(function (t) {
                (t = t._flip) && t.progress() < 1 && !t.paused() && (n = 1, t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), e && t.progress(1), t.kill())
            }), n && e && this.elementStates.forEach(function (t) {
                var e = t.element.getBoundingClientRect();
                t.isVisible = e.width || e.height || e.top || e.left, t.uncache = 1
            }), this.interrupted = !!n
        }, o.getElementState = function getElementState(t) {
            return this.elementStates[this.targets.indexOf(K(t))]
        }, o.makeAbsolute = function makeAbsolute() {
            return aa(this.elementStates.slice(0), !0, !0).map(ea)
        }, FlipState);

    function FlipState(t, e, n) {
        this.props = e && e.props, this.simple = !(!e || !e.simple), n ? (this.targets = la(t), this.elementStates = t, ra(this)) : (this.targets = _(t), this.update(!e || !1 !== e.clear))
    }
    var nt = (ElementState.prototype.update = function update(t, e) {
        var n = this.element,
            i = j.getProperty(n),
            a = j.core.getCache(n),
            o = n.getBoundingClientRect(),
            l = n.getBBox && "function" == typeof n.getBBox && n.getBBox(),
            p = e ? new B(1, 0, 0, 1, o.left + s(), o.top + r()) : getGlobalMatrix(n, !1, !1, !0);
        this.getProp = i, this.element = n, this.id = function _getID(t) {
            var e = t.getAttribute("data-flip-id");
            return e || t.setAttribute("data-flip-id", e = "auto-" + c++), e
        }(n), this.matrix = p, this.cache = a, this.bounds = o, this.isVisible = !!(o.width || o.height || o.left || o.top), this.display = i("display"), this.position = i("position"), this.parent = n.parentNode, this.x = i("x"), this.y = i("y"), this.scaleX = a.scaleX, this.scaleY = a.scaleY, this.rotation = i("rotation"), this.skewX = i("skewX"), this.opacity = i("opacity"), this.width = l ? l.width : u(parseFloat(i("width", "px")) + .04), this.height = l ? l.height : parseFloat(i("height", "px")), t && function _recordProps(t, e) {
            for (var n = j.getProperty(t.element, null, "native"), i = t.props = {}, r = e.length; r--;) i[e[r]] = (n(e[r]) + "").trim();
            i.zIndex && (i.zIndex = parseFloat(i.zIndex) || 0)
        }(this, W[t] || Z(t)), this.ctm = function _getCTMInverse(t) {
            return t.getCTM && "svg" === t.nodeName.toLowerCase() && t.getCTM().inverse()
        }(n), this.simple = e || 1 === L(p.a) && !L(p.b) && !L(p.c) && 1 === L(p.d), this.uncache = 0
    }, ElementState);

    function ElementState(t, e, n) {
        this.element = t, this.update(e, n)
    }
    var Y = (Flip.getState = function getState(t, e) {
        return oa(t, "string" == typeof e ? {
            props: e
        } : e)
    }, Flip.from = function from(t, e) {
        return "clearProps" in (e = e || {}) || (e.clearProps = !0), qa(t, oa(e.targets || t.targets, {
            props: e.props || t.props,
            simple: e.simple,
            clear: !!e.clear
        }), e, -1)
    }, Flip.to = function to(t, e) {
        return qa(t, oa(e.targets || t.targets, {
            props: e.props || t.props,
            simple: e.simple,
            clear: !!e.clear
        }), e, 1)
    }, Flip.fromTo = function fromTo(t, e, n) {
        return qa(t, e, n)
    }, Flip.fit = function fit(t, e, n) {
        if (Q) {
            var i = n ? X(n, J) : {},
                r = n || i,
                a = r.absolute,
                o = r.scale,
                s = r.getVars,
                l = r.props,
                p = r.runBackwards,
                u = r.onComplete,
                c = r.simple,
                f = n && n.fitChild && K(n.fitChild),
                d = O(e, l, c, t),
                h = O(t, 0, c, d),
                m = l ? k[l] : A;
            return l && ia(i, d.props), p && (ba(h, m), "immediateRender" in i || (i.immediateRender = !0), i.onComplete = function () {
                ca(h), u && u.apply(this, arguments)
            }), a && ea(h, d), i = tt(h, d, o || f, l, f, i.duration || s ? i : 0), s ? i : i.duration ? j.to(h.element, i) : null
        }
    }, Flip.makeAbsolute = function makeAbsolute(t, e) {
        return (t instanceof et ? t : new et(t, e)).makeAbsolute()
    }, Flip.isFlipping = function isFlipping(t) {
        var e = Flip.getByTarget(t);
        return !!e && e.isActive()
    }, Flip.getByTarget = function getByTarget(t) {
        return (K(t) || T)._flip
    }, Flip.getElementState = function getElementState(t, e) {
        return new nt(K(t), e)
    }, Flip.convertCoordinates = function convertCoordinates(t, e, n) {
        var i = getGlobalMatrix(e, !0, !0).multiply(getGlobalMatrix(t));
        return n ? i.apply(n) : i
    }, Flip.register = function register(t) {
        j = t, n(document.body || document.documentElement), _ = j.utils.toArray, u = j.utils.snap(.1)
    }, Flip);

    function Flip() {}
    "undefined" != typeof window && window.gsap && window.gsap.registerPlugin(Y), e.Flip = Y, e.default = Y;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});