/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-scriptasync-setclasses !*/
! function(e, n, s) {
    function a(e, n) {
        return typeof e === n
    }

    function t() {
        var e, n, s, t, o, i, c;
        for (var f in l)
            if (l.hasOwnProperty(f)) {
                if (e = [], n = l[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (s = 0; s < n.options.aliases.length; s++) e.push(n.options.aliases[s].toLowerCase());
                for (t = a(n.fn, "function") ? n.fn() : n.fn, o = 0; o < e.length; o++) i = e[o], c = i.split("."), 1 === c.length ? Modernizr[c[0]] = t : (!Modernizr[c[0]] || Modernizr[c[0]] instanceof Boolean || (Modernizr[c[0]] = new Boolean(Modernizr[c[0]])), Modernizr[c[0]][c[1]] = t), r.push((t ? "" : "no-") + c.join("-"))
            }
    }

    function o(e) {
        var n = f.className,
            s = Modernizr._config.classPrefix || "";
        if (u && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var a = new RegExp("(^|\\s)" + s + "no-js(\\s|$)");
            n = n.replace(a, "$1" + s + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + s + e.join(" " + s), u ? f.className.baseVal = n : f.className = n)
    }

    function i() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : u ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }
    var r = [],
        l = [],
        c = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var s = this;
                setTimeout(function() {
                    n(s[e])
                }, 0)
            },
            addTest: function(e, n, s) {
                l.push({
                    name: e,
                    fn: n,
                    options: s
                })
            },
            addAsyncTest: function(e) {
                l.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = c, Modernizr = new Modernizr;
    var f = n.documentElement,
        u = "svg" === f.nodeName.toLowerCase();
    Modernizr.addTest("scriptasync", "async" in i("script")), t(), o(r), delete c.addTest, delete c.addAsyncTest;
    for (var p = 0; p < Modernizr._q.length; p++) Modernizr._q[p]();
    e.Modernizr = Modernizr
}(window, document);