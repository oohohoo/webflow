$(function () {
    if (window.matchMedia('(min-width: 768px)').matches) {
        $(".horizontal-scroll").mousewheel(function (event, delta) {
            this.scrollLeft -= (delta * 1);
            event.preventDefault();
        });
        $(".horizontal-scroll > div").clone(true, true).appendTo(".horizontal-scroll").addClass('is-clone');
    }
});
$(function () {
    var doc = window.document,
        context = doc.querySelector('.horizontal-scroll'),
        clones = context.querySelectorAll('.is-clone'),
        disableScroll = false,
        scrollHeight = 0,
        scrollPos = 0,
        clonesHeight = 0,
        i = 0;

    function getScrollPos() {
        return (context.pageXOffset || context.scrollLeft) - (context.clientLeft || 0);
    }

    function setScrollPos(pos) {
        context.scrollLeft = pos;
    }

    function getClonesHeight() {
        clonesHeight = 0;
        for (i = 0; i < clones.length; i += 1) {
            clonesHeight = clonesHeight + clones[i].offsetWidth;
        }
        return clonesHeight;
    }

    function reCalc() {
        scrollPos = getScrollPos();
        scrollHeight = context.scrollWidth;
        clonesHeight = getClonesHeight();
        if (scrollPos <= 0) {
            setScrollPos(1);
        }
    }

    function scrollUpdate() {
        if (!disableScroll) {
            scrollPos = getScrollPos();
            if (clonesHeight + scrollPos >= scrollHeight) {
                setScrollPos(1);
                disableScroll = true;
            } else if (scrollPos <= 0) {
                setScrollPos(scrollHeight - clonesHeight);
                disableScroll = true;
            }
        }
        if (disableScroll) {
            window.setTimeout(function () {
                disableScroll = false;
            }, 10);
        }
    }

    function init() {
        reCalc();
        context.addEventListener('scroll', function () {
            window.requestAnimationFrame(scrollUpdate);
            window.requestAnimationFrame(reCalc);
        }, false);
        window.addEventListener('resize', function () {
            window.requestAnimationFrame(reCalc);
        }, false);
    }
    init();
});

/**/
$('.slide-block, .scroll-block').each(function () {
    if ($(this).children().length > 1) {
        $(this).addClass("two")
    }
    if ($(this).children().length > 2) {
        $(this).removeClass("two")
        $(this).addClass("triple")
    }
});
$('.two').each(function () {
    if ($(this).find('.slide-text').length === 1) {
        $(this).addClass('double');
    }
});


/**/

})(jQuery);
! function (a) {
"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a) {
function b(b) {
var g = b || window.event,
    h = i.call(arguments, 1),
    j = 0,
    l = 0,
    m = 0,
    n = 0,
    o = 0,
    p = 0;
if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
    if (1 === g.deltaMode) {
        var q = a.data(this, "mousewheel-line-height");
        j *= q, m *= q, l *= q
    } else if (2 === g.deltaMode) {
        var r = a.data(this, "mousewheel-page-height");
        j *= r, m *= r, l *= r
    }
    if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
        var s = this.getBoundingClientRect();
        o = b.clientX - s.left, p = b.clientY - s.top
    }
    return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
}
}

function c() {
f = null
}

function d(a, b) {
return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
}
var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
i = Array.prototype.slice;
if (a.event.fixHooks)
for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
var k = a.event.special.mousewheel = {
version: "3.1.12",
setup: function () {
    if (this.addEventListener)
        for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
    else this.onmousewheel = b;
    a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
},
teardown: function () {
    if (this.removeEventListener)
        for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
    else this.onmousewheel = null;
    a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
},
getLineHeight: function (b) {
    var c = a(b),
        d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
    return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
},
getPageHeight: function (b) {
    return a(b).height()
},
settings: {
    adjustOldDeltas: !0,
    normalizeOffset: !0
}
};
a.fn.extend({
mousewheel: function (a) {
    return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
},
unmousewheel: function (a) {
    return this.unbind("mousewheel", a)
}
})
});
(function (a, b) {
if ("function" == typeof define && define.amd) define([], b);
else if ("undefined" != typeof exports) b();
else {
b(), a.FileSaver = {
    exports: {}
}.exports
}
})(this, function () {
"use strict";

function b(a, b) {
return "undefined" == typeof b ? b = {
    autoBom: !1
} : "object" != typeof b && (console.warn("Depricated: Expected third argument to be a object"), b = {
    autoBom: !b
}), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
    type: a.type
}) : a
}

function c(b, c, d) {
var e = new XMLHttpRequest;
e.open("GET", b), e.responseType = "blob", e.onload = function () {
    a(e.response, c, d)
}, e.onerror = function () {
    console.error("could not download file")
}, e.send()
}

function d(a) {
var b = new XMLHttpRequest;
return b.open("HEAD", a, !1), b.send(), 200 <= b.status && 299 >= b.status
}

function e(a) {
try {
    a.dispatchEvent(new MouseEvent("click"))
} catch (c) {
    var b = document.createEvent("MouseEvents");
    b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b)
}
}
var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
a = f.saveAs || "object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype ? function (b, g, h) {
    var i = f.URL || f.webkitURL,
        j = document.createElement("a");
    g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
        i.revokeObjectURL(j.href)
    }, 4E4), setTimeout(function () {
        e(j)
    }, 0))
} : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
    if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);
    else if (d(f)) c(f, g, h);
    else {
        var i = document.createElement("a");
        i.href = f, i.target = "_blank", setTimeout(function () {
            e(i)
        })
    }
} : function (a, b, d, e) {
    if (e = e || open("", "_blank"), e && (e.document.title = e.document.body.innerText = "downloading..."), "string" == typeof a) return c(a, b, d);
    var g = "application/octet-stream" === a.type,
        h = /constructor/i.test(f.HTMLElement) || f.safari,
        i = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((i || g && h) && "object" == typeof FileReader) {
        var j = new FileReader;
        j.onloadend = function () {
            var a = j.result;
            a = i ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), e ? e.location.href = a : location = a, e = null
        }, j.readAsDataURL(a)
    } else {
        var k = f.URL || f.webkitURL,
            l = k.createObjectURL(a);
        e ? e.location = l : location.href = l, e = null, setTimeout(function () {
            k.revokeObjectURL(l)
        }, 4E4)
    }
};
f.saveAs = a.saveAs = a, "undefined" != typeof module && (module.exports = a)
});
! function (e) {
"object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : "undefined" != typeof window ? window.JSZipUtils = e() : "undefined" != typeof global ? global.JSZipUtils = e() : "undefined" != typeof self && (self.JSZipUtils = e())
}(function () {
return function o(i, f, u) {
function s(n, e) {
    if (!f[n]) {
        if (!i[n]) {
            var t = "function" == typeof require && require;
            if (!e && t) return t(n, !0);
            if (a) return a(n, !0);
            throw new Error("Cannot find module '" + n + "'")
        }
        var r = f[n] = {
            exports: {}
        };
        i[n][0].call(r.exports, function (e) {
            var t = i[n][1][e];
            return s(t || e)
        }, r, r.exports, o, i, f, u)
    }
    return f[n].exports
}
for (var a = "function" == typeof require && require, e = 0; e < u.length; e++) s(u[e]);
return s
}({
1: [function (e, t, n) {
    "use strict";
    var u = {};

    function r() {
        try {
            return new window.XMLHttpRequest
        } catch (e) {}
    }
    u._getBinaryFromXHR = function (e) {
        return e.response || e.responseText
    };
    var s = "undefined" != typeof window && window.ActiveXObject ? function () {
        return r() || function () {
            try {
                return new window.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }()
    } : r;
    u.getBinaryContent = function (t, n) {
        var e, r, o, i;
        "function" == typeof (n = n || {}) ? (i = n, n = {}) : "function" == typeof n.callback && (i = n.callback), i || "undefined" == typeof Promise ? (r = function (e) {
            i(null, e)
        }, o = function (e) {
            i(e, null)
        }) : e = new Promise(function (e, t) {
            r = e, o = t
        });
        try {
            var f = s();
            f.open("GET", t, !0), "responseType" in f && (f.responseType = "arraybuffer"), f.overrideMimeType && f.overrideMimeType("text/plain; charset=x-user-defined"), f.onreadystatechange = function (e) {
                if (4 === f.readyState)
                    if (200 === f.status || 0 === f.status) try {
                        r(u._getBinaryFromXHR(f))
                    } catch (e) {
                        o(new Error(e))
                    } else o(new Error("Ajax error for " + t + " : " + this.status + " " + this.statusText))
            }, n.progress && (f.onprogress = function (e) {
                n.progress({
                    path: t,
                    originalEvent: e,
                    percent: e.loaded / e.total * 100,
                    loaded: e.loaded,
                    total: e.total
                })
            }), f.send()
        } catch (e) {
            o(new Error(e), null)
        }
        return e
    }, t.exports = u
}, {}]
}, {}, [1])(1)
});