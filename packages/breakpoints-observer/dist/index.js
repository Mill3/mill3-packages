var BreakpointsObserver = (function(e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var a = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          r.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 1))
  );
})([
  function(e, t, r) {
    function n(e) {
      if (e)
        return (function(e) {
          for (var t in n.prototype) e[t] = n.prototype[t];
          return e;
        })(e);
    }
    (e.exports = n),
      (n.prototype.on = n.prototype.addEventListener = function(e, t) {
        return (
          (this._callbacks = this._callbacks || {}),
          (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
          this
        );
      }),
      (n.prototype.once = function(e, t) {
        function r() {
          this.off(e, r), t.apply(this, arguments);
        }
        return (r.fn = t), this.on(e, r), this;
      }),
      (n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(
        e,
        t
      ) {
        if (((this._callbacks = this._callbacks || {}), 0 == arguments.length))
          return (this._callbacks = {}), this;
        var r,
          n = this._callbacks["$" + e];
        if (!n) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + e], this;
        for (var a = 0; a < n.length; a++)
          if ((r = n[a]) === t || r.fn === t) {
            n.splice(a, 1);
            break;
          }
        return 0 === n.length && delete this._callbacks["$" + e], this;
      }),
      (n.prototype.emit = function(e) {
        this._callbacks = this._callbacks || {};
        for (
          var t = new Array(arguments.length - 1),
            r = this._callbacks["$" + e],
            n = 1;
          n < arguments.length;
          n++
        )
          t[n - 1] = arguments[n];
        if (r) {
          n = 0;
          for (var a = (r = r.slice(0)).length; n < a; ++n) r[n].apply(this, t);
        }
        return this;
      }),
      (n.prototype.listeners = function(e) {
        return (
          (this._callbacks = this._callbacks || {}),
          this._callbacks["$" + e] || []
        );
      }),
      (n.prototype.hasListeners = function(e) {
        return !!this.listeners(e).length;
      });
  },
  function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(0),
      a = r.n(n);
    var i = (function() {
      function e(e) {
        (this.isSpeedy = void 0 === e.speedy || e.speedy),
          (this.tags = []),
          (this.ctr = 0),
          (this.nonce = e.nonce),
          (this.key = e.key),
          (this.container = e.container),
          (this.before = null);
      }
      var t = e.prototype;
      return (
        (t.insert = function(e) {
          if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
            var t,
              r = (function(e) {
                var t = document.createElement("style");
                return (
                  t.setAttribute("data-emotion", e.key),
                  void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
                  t.appendChild(document.createTextNode("")),
                  t
                );
              })(this);
            (t =
              0 === this.tags.length
                ? this.before
                : this.tags[this.tags.length - 1].nextSibling),
              this.container.insertBefore(r, t),
              this.tags.push(r);
          }
          var n = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var a = (function(e) {
              if (e.sheet) return e.sheet;
              for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                  return document.styleSheets[t];
            })(n);
            try {
              var i = 105 === e.charCodeAt(1) && 64 === e.charCodeAt(0);
              a.insertRule(e, i ? 0 : a.cssRules.length);
            } catch (e) {
              0;
            }
          } else n.appendChild(document.createTextNode(e));
          this.ctr++;
        }),
        (t.flush = function() {
          this.tags.forEach(function(e) {
            return e.parentNode.removeChild(e);
          }),
            (this.tags = []),
            (this.ctr = 0);
        }),
        e
      );
    })();
    var s = function(e) {
      function t(e, t, n) {
        var a = t.trim().split(p);
        t = a;
        var i = a.length,
          s = e.length;
        switch (s) {
          case 0:
          case 1:
            var c = 0;
            for (e = 0 === s ? "" : e[0] + " "; c < i; ++c)
              t[c] = r(e, t[c], n).trim();
            break;
          default:
            var o = (c = 0);
            for (t = []; c < i; ++c)
              for (var l = 0; l < s; ++l)
                t[o++] = r(e[l] + " ", a[c], n).trim();
        }
        return t;
      }
      function r(e, t, r) {
        var n = t.charCodeAt(0);
        switch ((33 > n && (n = (t = t.trim()).charCodeAt(0)), n)) {
          case 38:
            return t.replace(b, "$1" + e.trim());
          case 58:
            return e.trim() + t.replace(b, "$1" + e.trim());
          default:
            if (0 < 1 * r && 0 < t.indexOf("\f"))
              return t.replace(
                b,
                (58 === e.charCodeAt(0) ? "" : "$1") + e.trim()
              );
        }
        return e + t;
      }
      function n(e, t, r, i) {
        var s = e + ";",
          c = 2 * t + 3 * r + 4 * i;
        if (944 === c) {
          e = s.indexOf(":", 9) + 1;
          var o = s.substring(e, s.length - 1).trim();
          return (
            (o = s.substring(0, e).trim() + o + ";"),
            1 === j || (2 === j && a(o, 1)) ? "-webkit-" + o + o : o
          );
        }
        if (0 === j || (2 === j && !a(s, 1))) return s;
        switch (c) {
          case 1015:
            return 97 === s.charCodeAt(10) ? "-webkit-" + s + s : s;
          case 951:
            return 116 === s.charCodeAt(3) ? "-webkit-" + s + s : s;
          case 963:
            return 110 === s.charCodeAt(5) ? "-webkit-" + s + s : s;
          case 1009:
            if (100 !== s.charCodeAt(4)) break;
          case 969:
          case 942:
            return "-webkit-" + s + s;
          case 978:
            return "-webkit-" + s + "-moz-" + s + s;
          case 1019:
          case 983:
            return "-webkit-" + s + "-moz-" + s + "-ms-" + s + s;
          case 883:
            if (45 === s.charCodeAt(8)) return "-webkit-" + s + s;
            if (0 < s.indexOf("image-set(", 11))
              return s.replace(_, "$1-webkit-$2") + s;
            break;
          case 932:
            if (45 === s.charCodeAt(4))
              switch (s.charCodeAt(5)) {
                case 103:
                  return (
                    "-webkit-box-" +
                    s.replace("-grow", "") +
                    "-webkit-" +
                    s +
                    "-ms-" +
                    s.replace("grow", "positive") +
                    s
                  );
                case 115:
                  return (
                    "-webkit-" +
                    s +
                    "-ms-" +
                    s.replace("shrink", "negative") +
                    s
                  );
                case 98:
                  return (
                    "-webkit-" +
                    s +
                    "-ms-" +
                    s.replace("basis", "preferred-size") +
                    s
                  );
              }
            return "-webkit-" + s + "-ms-" + s + s;
          case 964:
            return "-webkit-" + s + "-ms-flex-" + s + s;
          case 1023:
            if (99 !== s.charCodeAt(8)) break;
            return (
              "-webkit-box-pack" +
              (o = s
                .substring(s.indexOf(":", 15))
                .replace("flex-", "")
                .replace("space-between", "justify")) +
              "-webkit-" +
              s +
              "-ms-flex-pack" +
              o +
              s
            );
          case 1005:
            return h.test(s)
              ? s.replace(f, ":-webkit-") + s.replace(f, ":-moz-") + s
              : s;
          case 1e3:
            switch (
              ((t = (o = s.substring(13).trim()).indexOf("-") + 1),
              o.charCodeAt(0) + o.charCodeAt(t))
            ) {
              case 226:
                o = s.replace(m, "tb");
                break;
              case 232:
                o = s.replace(m, "tb-rl");
                break;
              case 220:
                o = s.replace(m, "lr");
                break;
              default:
                return s;
            }
            return "-webkit-" + s + "-ms-" + o + s;
          case 1017:
            if (-1 === s.indexOf("sticky", 9)) break;
          case 975:
            switch (
              ((t = (s = e).length - 10),
              (c =
                (o = (33 === s.charCodeAt(t) ? s.substring(0, t) : s)
                  .substring(e.indexOf(":", 7) + 1)
                  .trim()).charCodeAt(0) +
                (0 | o.charCodeAt(7))))
            ) {
              case 203:
                if (111 > o.charCodeAt(8)) break;
              case 115:
                s = s.replace(o, "-webkit-" + o) + ";" + s;
                break;
              case 207:
              case 102:
                s =
                  s.replace(
                    o,
                    "-webkit-" + (102 < c ? "inline-" : "") + "box"
                  ) +
                  ";" +
                  s.replace(o, "-webkit-" + o) +
                  ";" +
                  s.replace(o, "-ms-" + o + "box") +
                  ";" +
                  s;
            }
            return s + ";";
          case 938:
            if (45 === s.charCodeAt(5))
              switch (s.charCodeAt(6)) {
                case 105:
                  return (
                    (o = s.replace("-items", "")),
                    "-webkit-" + s + "-webkit-box-" + o + "-ms-flex-" + o + s
                  );
                case 115:
                  return (
                    "-webkit-" + s + "-ms-flex-item-" + s.replace(A, "") + s
                  );
                default:
                  return (
                    "-webkit-" +
                    s +
                    "-ms-flex-line-pack" +
                    s.replace("align-content", "").replace(A, "") +
                    s
                  );
              }
            break;
          case 973:
          case 989:
            if (45 !== s.charCodeAt(3) || 122 === s.charCodeAt(4)) break;
          case 931:
          case 953:
            if (!0 === x.test(e))
              return 115 === (o = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
                ? n(e.replace("stretch", "fill-available"), t, r, i).replace(
                    ":fill-available",
                    ":stretch"
                  )
                : s.replace(o, "-webkit-" + o) +
                    s.replace(o, "-moz-" + o.replace("fill-", "")) +
                    s;
            break;
          case 962:
            if (
              ((s =
                "-webkit-" +
                s +
                (102 === s.charCodeAt(5) ? "-ms-" + s : "") +
                s),
              211 === r + i &&
                105 === s.charCodeAt(13) &&
                0 < s.indexOf("transform", 10))
            )
              return (
                s
                  .substring(0, s.indexOf(";", 27) + 1)
                  .replace(d, "$1-webkit-$2") + s
              );
        }
        return s;
      }
      function a(e, t) {
        var r = e.indexOf(1 === t ? ":" : "{"),
          n = e.substring(0, 3 !== t ? r : 10);
        return (
          (r = e.substring(r + 1, e.length - 1)),
          L(2 !== t ? n : n.replace(C, "$1"), r, t)
        );
      }
      function i(e, t) {
        var r = n(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
        return r !== t + ";"
          ? r.replace(w, " or ($1)").substring(4)
          : "(" + t + ")";
      }
      function s(e, t, r, n, a, i, s, c, l, u) {
        for (var f, h = 0, d = t; h < z; ++h)
          switch ((f = E[h].call(o, e, d, r, n, a, i, s, c, l, u))) {
            case void 0:
            case !1:
            case !0:
            case null:
              break;
            default:
              d = f;
          }
        if (d !== t) return d;
      }
      function c(e) {
        return (
          void 0 !== (e = e.prefix) &&
            ((L = null),
            e
              ? "function" != typeof e
                ? (j = 1)
                : ((j = 2), (L = e))
              : (j = 0)),
          c
        );
      }
      function o(e, r) {
        var c = e;
        if ((33 > c.charCodeAt(0) && (c = c.trim()), (c = [c]), 0 < z)) {
          var o = s(-1, r, c, c, S, O, 0, 0, 0, 0);
          void 0 !== o && "string" == typeof o && (r = o);
        }
        var f = (function e(r, c, o, f, h) {
          for (
            var d,
              p,
              b,
              m,
              w,
              A = 0,
              C = 0,
              x = 0,
              _ = 0,
              E = 0,
              L = 0,
              R = (b = d = 0),
              G = 0,
              N = 0,
              M = 0,
              I = 0,
              T = o.length,
              W = T - 1,
              D = "",
              F = "",
              q = "",
              H = "";
            G < T;

          ) {
            if (
              ((p = o.charCodeAt(G)),
              G === W &&
                0 !== C + _ + x + A &&
                (0 !== C && (p = 47 === C ? 10 : 47),
                (_ = x = A = 0),
                T++,
                W++),
              0 === C + _ + x + A)
            ) {
              if (
                G === W &&
                (0 < N && (D = D.replace(u, "")), 0 < D.trim().length)
              ) {
                switch (p) {
                  case 32:
                  case 9:
                  case 59:
                  case 13:
                  case 10:
                    break;
                  default:
                    D += o.charAt(G);
                }
                p = 59;
              }
              switch (p) {
                case 123:
                  for (
                    d = (D = D.trim()).charCodeAt(0), b = 1, I = ++G;
                    G < T;

                  ) {
                    switch ((p = o.charCodeAt(G))) {
                      case 123:
                        b++;
                        break;
                      case 125:
                        b--;
                        break;
                      case 47:
                        switch ((p = o.charCodeAt(G + 1))) {
                          case 42:
                          case 47:
                            e: {
                              for (R = G + 1; R < W; ++R)
                                switch (o.charCodeAt(R)) {
                                  case 47:
                                    if (
                                      42 === p &&
                                      42 === o.charCodeAt(R - 1) &&
                                      G + 2 !== R
                                    ) {
                                      G = R + 1;
                                      break e;
                                    }
                                    break;
                                  case 10:
                                    if (47 === p) {
                                      G = R + 1;
                                      break e;
                                    }
                                }
                              G = R;
                            }
                        }
                        break;
                      case 91:
                        p++;
                      case 40:
                        p++;
                      case 34:
                      case 39:
                        for (; G++ < W && o.charCodeAt(G) !== p; );
                    }
                    if (0 === b) break;
                    G++;
                  }
                  switch (
                    ((b = o.substring(I, G)),
                    0 === d &&
                      (d = (D = D.replace(l, "").trim()).charCodeAt(0)),
                    d)
                  ) {
                    case 64:
                      switch (
                        (0 < N && (D = D.replace(u, "")), (p = D.charCodeAt(1)))
                      ) {
                        case 100:
                        case 109:
                        case 115:
                        case 45:
                          N = c;
                          break;
                        default:
                          N = $;
                      }
                      if (
                        ((I = (b = e(c, N, b, p, h + 1)).length),
                        0 < z &&
                          ((w = s(3, b, (N = t($, D, M)), c, S, O, I, p, h, f)),
                          (D = N.join("")),
                          void 0 !== w &&
                            0 === (I = (b = w.trim()).length) &&
                            ((p = 0), (b = ""))),
                        0 < I)
                      )
                        switch (p) {
                          case 115:
                            D = D.replace(y, i);
                          case 100:
                          case 109:
                          case 45:
                            b = D + "{" + b + "}";
                            break;
                          case 107:
                            (b = (D = D.replace(k, "$1 $2")) + "{" + b + "}"),
                              (b =
                                1 === j || (2 === j && a("@" + b, 3))
                                  ? "@-webkit-" + b + "@" + b
                                  : "@" + b);
                            break;
                          default:
                            (b = D + b), 112 === f && ((F += b), (b = ""));
                        }
                      else b = "";
                      break;
                    default:
                      b = e(c, t(c, D, M), b, f, h + 1);
                  }
                  (q += b),
                    (b = M = N = R = d = 0),
                    (D = ""),
                    (p = o.charCodeAt(++G));
                  break;
                case 125:
                case 59:
                  if (
                    1 < (I = (D = (0 < N ? D.replace(u, "") : D).trim()).length)
                  )
                    switch (
                      (0 === R &&
                        ((d = D.charCodeAt(0)),
                        45 === d || (96 < d && 123 > d)) &&
                        (I = (D = D.replace(" ", ":")).length),
                      0 < z &&
                        void 0 !==
                          (w = s(1, D, c, r, S, O, F.length, f, h, f)) &&
                        0 === (I = (D = w.trim()).length) &&
                        (D = "\0\0"),
                      (d = D.charCodeAt(0)),
                      (p = D.charCodeAt(1)),
                      d)
                    ) {
                      case 0:
                        break;
                      case 64:
                        if (105 === p || 99 === p) {
                          H += D + o.charAt(G);
                          break;
                        }
                      default:
                        58 !== D.charCodeAt(I - 1) &&
                          (F += n(D, d, p, D.charCodeAt(2)));
                    }
                  (M = N = R = d = 0), (D = ""), (p = o.charCodeAt(++G));
              }
            }
            switch (p) {
              case 13:
              case 10:
                47 === C
                  ? (C = 0)
                  : 0 === 1 + d &&
                    107 !== f &&
                    0 < D.length &&
                    ((N = 1), (D += "\0")),
                  0 < z * P && s(0, D, c, r, S, O, F.length, f, h, f),
                  (O = 1),
                  S++;
                break;
              case 59:
              case 125:
                if (0 === C + _ + x + A) {
                  O++;
                  break;
                }
              default:
                switch ((O++, (m = o.charAt(G)), p)) {
                  case 9:
                  case 32:
                    if (0 === _ + A + C)
                      switch (E) {
                        case 44:
                        case 58:
                        case 9:
                        case 32:
                          m = "";
                          break;
                        default:
                          32 !== p && (m = " ");
                      }
                    break;
                  case 0:
                    m = "\\0";
                    break;
                  case 12:
                    m = "\\f";
                    break;
                  case 11:
                    m = "\\v";
                    break;
                  case 38:
                    0 === _ + C + A && ((N = M = 1), (m = "\f" + m));
                    break;
                  case 108:
                    if (0 === _ + C + A + B && 0 < R)
                      switch (G - R) {
                        case 2:
                          112 === E && 58 === o.charCodeAt(G - 3) && (B = E);
                        case 8:
                          111 === L && (B = L);
                      }
                    break;
                  case 58:
                    0 === _ + C + A && (R = G);
                    break;
                  case 44:
                    0 === C + x + _ + A && ((N = 1), (m += "\r"));
                    break;
                  case 34:
                  case 39:
                    0 === C && (_ = _ === p ? 0 : 0 === _ ? p : _);
                    break;
                  case 91:
                    0 === _ + C + x && A++;
                    break;
                  case 93:
                    0 === _ + C + x && A--;
                    break;
                  case 41:
                    0 === _ + C + A && x--;
                    break;
                  case 40:
                    if (0 === _ + C + A) {
                      if (0 === d)
                        switch (2 * E + 3 * L) {
                          case 533:
                            break;
                          default:
                            d = 1;
                        }
                      x++;
                    }
                    break;
                  case 64:
                    0 === C + x + _ + A + R + b && (b = 1);
                    break;
                  case 42:
                  case 47:
                    if (!(0 < _ + A + x))
                      switch (C) {
                        case 0:
                          switch (2 * p + 3 * o.charCodeAt(G + 1)) {
                            case 235:
                              C = 47;
                              break;
                            case 220:
                              (I = G), (C = 42);
                          }
                          break;
                        case 42:
                          47 === p &&
                            42 === E &&
                            I + 2 !== G &&
                            (33 === o.charCodeAt(I + 2) &&
                              (F += o.substring(I, G + 1)),
                            (m = ""),
                            (C = 0));
                      }
                }
                0 === C && (D += m);
            }
            (L = E), (E = p), G++;
          }
          if (0 < (I = F.length)) {
            if (
              ((N = c),
              0 < z &&
                void 0 !== (w = s(2, F, N, r, S, O, I, f, h, f)) &&
                  0 === (F = w).length)
            )
              return H + F + q;
            if (((F = N.join(",") + "{" + F + "}"), 0 != j * B)) {
              switch ((2 !== j || a(F, 2) || (B = 0), B)) {
                case 111:
                  F = F.replace(g, ":-moz-$1") + F;
                  break;
                case 112:
                  F =
                    F.replace(v, "::-webkit-input-$1") +
                    F.replace(v, "::-moz-$1") +
                    F.replace(v, ":-ms-input-$1") +
                    F;
              }
              B = 0;
            }
          }
          return H + F + q;
        })($, c, r, 0, 0);
        return (
          0 < z &&
            void 0 !== (o = s(-2, f, c, c, S, O, f.length, 0, 0, 0)) && (f = o),
          "",
          (B = 0),
          (O = S = 1),
          f
        );
      }
      var l = /^\0+/g,
        u = /[\0\r\f]/g,
        f = /: */g,
        h = /zoo|gra/,
        d = /([,: ])(transform)/g,
        p = /,\r+?/g,
        b = /([\t\r\n ])*\f?&/g,
        k = /@(k\w+)\s*(\S*)\s*/,
        v = /::(place)/g,
        g = /:(read-only)/g,
        m = /[svh]\w+-[tblr]{2}/,
        y = /\(\s*(.*)\s*\)/g,
        w = /([\s\S]*?);/g,
        A = /-self|flex-/g,
        C = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
        x = /stretch|:\s*\w+\-(?:conte|avail)/,
        _ = /([^-])(image-set\()/,
        O = 1,
        S = 1,
        B = 0,
        j = 1,
        $ = [],
        E = [],
        z = 0,
        L = null,
        P = 0;
      return (
        (o.use = function e(t) {
          switch (t) {
            case void 0:
            case null:
              z = E.length = 0;
              break;
            default:
              if ("function" == typeof t) E[z++] = t;
              else if ("object" == typeof t)
                for (var r = 0, n = t.length; r < n; ++r) e(t[r]);
              else P = 0 | !!t;
          }
          return e;
        }),
        (o.set = c),
        void 0 !== e && c(e),
        o
      );
    };
    function c(e) {
      e && o.current.insert(e + "}");
    }
    var o = { current: null },
      l = function(e, t, r, n, a, i, s, l, u, f) {
        switch (e) {
          case 1:
            switch (t.charCodeAt(0)) {
              case 64:
                return o.current.insert(t + ";"), "";
              case 108:
                if (98 === t.charCodeAt(2)) return "";
            }
            break;
          case 2:
            if (0 === l) return t + "/*|*/";
            break;
          case 3:
            switch (l) {
              case 102:
              case 112:
                return o.current.insert(r[0] + t), "";
              default:
                return t + (0 === f ? "/*|*/" : "");
            }
          case -2:
            t.split("/*|*/}").forEach(c);
        }
      },
      u = function(e) {
        void 0 === e && (e = {});
        var t,
          r = e.key || "css";
        void 0 !== e.prefix && (t = { prefix: e.prefix });
        var n = new s(t);
        var a,
          c = {};
        a = e.container || document.head;
        var u,
          f = document.querySelectorAll("style[data-emotion-" + r + "]");
        Array.prototype.forEach.call(f, function(e) {
          e
            .getAttribute("data-emotion-" + r)
            .split(" ")
            .forEach(function(e) {
              c[e] = !0;
            }),
            e.parentNode !== a && a.appendChild(e);
        }),
          n.use(e.stylisPlugins)(l),
          (u = function(e, t, r, a) {
            var i = t.name;
            (o.current = r), n(e, t.styles), a && (h.inserted[i] = !0);
          });
        var h = {
          key: r,
          sheet: new i({
            key: r,
            container: a,
            nonce: e.nonce,
            speedy: e.speedy
          }),
          nonce: e.nonce,
          inserted: c,
          registered: {},
          insert: u
        };
        return h;
      };
    var f = function(e) {
        for (var t, r = e.length, n = r ^ r, a = 0; r >= 4; )
          (t =
            1540483477 *
              (65535 &
                (t =
                  (255 & e.charCodeAt(a)) |
                  ((255 & e.charCodeAt(++a)) << 8) |
                  ((255 & e.charCodeAt(++a)) << 16) |
                  ((255 & e.charCodeAt(++a)) << 24))) +
            (((1540483477 * (t >>> 16)) & 65535) << 16)),
            (n =
              (1540483477 * (65535 & n) +
                (((1540483477 * (n >>> 16)) & 65535) << 16)) ^
              (t =
                1540483477 * (65535 & (t ^= t >>> 24)) +
                (((1540483477 * (t >>> 16)) & 65535) << 16))),
            (r -= 4),
            ++a;
        switch (r) {
          case 3:
            n ^= (255 & e.charCodeAt(a + 2)) << 16;
          case 2:
            n ^= (255 & e.charCodeAt(a + 1)) << 8;
          case 1:
            n =
              1540483477 * (65535 & (n ^= 255 & e.charCodeAt(a))) +
              (((1540483477 * (n >>> 16)) & 65535) << 16);
        }
        return (
          (n =
            1540483477 * (65535 & (n ^= n >>> 13)) +
            (((1540483477 * (n >>> 16)) & 65535) << 16)),
          ((n ^= n >>> 15) >>> 0).toString(36)
        );
      },
      h = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
      };
    var d = /[A-Z]|^ms/g,
      p = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
      b = function(e) {
        return 45 === e.charCodeAt(1);
      },
      k = function(e) {
        return null != e && "boolean" != typeof e;
      },
      v = (function(e) {
        var t = {};
        return function(r) {
          return void 0 === t[r] && (t[r] = e(r)), t[r];
        };
      })(function(e) {
        return b(e) ? e : e.replace(d, "-$&").toLowerCase();
      }),
      g = function(e, t) {
        switch (e) {
          case "animation":
          case "animationName":
            if ("string" == typeof t)
              return t.replace(p, function(e, t, r) {
                return (y = { name: t, styles: r, next: y }), t;
              });
        }
        return 1 === h[e] || b(e) || "number" != typeof t || 0 === t
          ? t
          : t + "px";
      };
    function m(e, t, r, n) {
      if (null == r) return "";
      if (void 0 !== r.__emotion_styles) return r;
      switch (typeof r) {
        case "boolean":
          return "";
        case "object":
          if (1 === r.anim)
            return (y = { name: r.name, styles: r.styles, next: y }), r.name;
          if (void 0 !== r.styles) {
            var a = r.next;
            if (void 0 !== a)
              for (; void 0 !== a; )
                (y = { name: a.name, styles: a.styles, next: y }), (a = a.next);
            return r.styles + ";";
          }
          return (function(e, t, r) {
            var n = "";
            if (Array.isArray(r))
              for (var a = 0; a < r.length; a++) n += m(e, t, r[a], !1);
            else
              for (var i in r) {
                var s = r[i];
                if ("object" != typeof s)
                  null != t && void 0 !== t[s]
                    ? (n += i + "{" + t[s] + "}")
                    : k(s) && (n += v(i) + ":" + g(i, s) + ";");
                else if (
                  !Array.isArray(s) ||
                  "string" != typeof s[0] ||
                  (null != t && void 0 !== t[s[0]])
                ) {
                  var c = m(e, t, s, !1);
                  switch (i) {
                    case "animation":
                    case "animationName":
                      n += v(i) + ":" + c + ";";
                      break;
                    default:
                      n += i + "{" + c + "}";
                  }
                } else
                  for (var o = 0; o < s.length; o++)
                    k(s[o]) && (n += v(i) + ":" + g(i, s[o]) + ";");
              }
            return n;
          })(e, t, r);
        case "function":
          if (void 0 !== e) {
            var i = y,
              s = r(e);
            return (y = i), m(e, t, s, n);
          }
          break;
        case "string":
      }
      if (null == t) return r;
      var c = t[r];
      return void 0 === c || n ? r : c;
    }
    var y,
      w = /label:\s*([^\s;\n{]+)\s*;/g;
    var A = function(e, t, r) {
      if (
        1 === e.length &&
        "object" == typeof e[0] &&
        null !== e[0] &&
        void 0 !== e[0].styles
      )
        return e[0];
      var n = !0,
        a = "";
      y = void 0;
      var i = e[0];
      null == i || void 0 === i.raw
        ? ((n = !1), (a += m(r, t, i, !1)))
        : (a += i[0]);
      for (var s = 1; s < e.length; s++)
        (a += m(r, t, e[s], 46 === a.charCodeAt(a.length - 1))),
          n && (a += i[s]);
      w.lastIndex = 0;
      for (var c, o = ""; null !== (c = w.exec(a)); ) o += "-" + c[1];
      return { name: f(a) + o, styles: a, next: y };
    };
    function C(e, t, r) {
      var n = "";
      return (
        r.split(" ").forEach(function(r) {
          void 0 !== e[r] ? t.push(e[r]) : (n += r + " ");
        }),
        n
      );
    }
    var x = function(e, t, r) {
      var n = e.key + "-" + t.name;
      if (
        (!1 === r && void 0 === e.registered[n] && (e.registered[n] = t.styles),
        void 0 === e.inserted[t.name])
      ) {
        var a = t;
        do {
          e.insert("." + n, a, e.sheet, !0);
          a = a.next;
        } while (void 0 !== a);
      }
    };
    function _(e, t) {
      if (void 0 === e.inserted[t.name]) return e.insert("", t, e.sheet, !0);
    }
    function O(e, t, r) {
      var n = [],
        a = C(e, n, r);
      return n.length < 2 ? r : a + t(n);
    }
    var S = function e(t) {
        for (var r = "", n = 0; n < t.length; n++) {
          var a = t[n];
          if (null != a) {
            var i = void 0;
            switch (typeof a) {
              case "boolean":
                break;
              case "object":
                if (Array.isArray(a)) i = e(a);
                else
                  for (var s in ((i = ""), a))
                    a[s] && s && (i && (i += " "), (i += s));
                break;
              default:
                i = a;
            }
            i && (r && (r += " "), (r += i));
          }
        }
        return r;
      },
      B = (function(e) {
        var t = u(e);
        (t.sheet.speedy = function(e) {
          this.isSpeedy = e;
        }),
          (t.compat = !0);
        var r = function() {
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
            r[n] = arguments[n];
          var a = A(r, t.registered, void 0);
          return x(t, a, !1), t.key + "-" + a.name;
        };
        return {
          css: r,
          cx: function() {
            for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
              n[a] = arguments[a];
            return O(t.registered, r, S(n));
          },
          injectGlobal: function() {
            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
              r[n] = arguments[n];
            var a = A(r, t.registered);
            _(t, a);
          },
          keyframes: function() {
            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
              r[n] = arguments[n];
            var a = A(r, t.registered),
              i = "animation-" + a.name;
            return (
              _(t, {
                name: a.name,
                styles: "@keyframes " + i + "{" + a.styles + "}"
              }),
              i
            );
          },
          hydrate: function(e) {
            e.forEach(function(e) {
              t.inserted[e] = !0;
            });
          },
          flush: function() {
            (t.registered = {}), (t.inserted = {}), t.sheet.flush();
          },
          sheet: t.sheet,
          cache: t,
          getRegisteredStyles: C.bind(null, t.registered),
          merge: O.bind(null, t.registered, r)
        };
      })(),
      j =
        (B.flush,
        B.hydrate,
        B.cx,
        B.merge,
        B.getRegisteredStyles,
        B.injectGlobal,
        B.keyframes,
        B.css);
    B.sheet, B.cache;
    function $() {
      var e = (function(e, t) {
        t || (t = e.slice(0));
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })([
        "\n      &:after {\n        content: 'xs';\n        display: block;\n        @media (min-width: ",
        'px) {\n          content: "sm";\n        }\n        @media (min-width: ',
        'px) {\n          content: "md";\n        }\n        @media (min-width: ',
        'px) {\n          content: "lg";\n        }\n        @media (min-width: ',
        'px) {\n          content: "xl";\n        }\n        @media (min-width: ',
        'px) {\n          content: "xxl";\n        }\n      }\n    '
      ]);
      return (
        ($ = function() {
          return e;
        }),
        e
      );
    }
    function E(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function z(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    var L = ["xs", "sm", "md", "lg", "xl", "xxl"],
      P = [0, 576, 768, 992, 1200, 1441],
      R = (function() {
        function e() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : L,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : P;
          E(this, e),
            (this.orders = t),
            (this.widths = r),
            this.injectCSS(),
            (this._checkBreakpoint = this._checkBreakpoint.bind(this)),
            (this.breakpointsEmitter = new a.a()),
            (this.currentBreakpoint = this.getCurrentBreakpoint()),
            (this.lastBreakpoint = null),
            window.addEventListener("resize", this._checkBreakpoint);
        }
        var t, r, n;
        return (
          (t = e),
          (r = [
            {
              key: "injectCSS",
              value: function() {
                var e = document.body,
                  t = j(
                    $(),
                    this.widths[1],
                    this.widths[2],
                    this.widths[3],
                    this.widths[4],
                    this.widths[5]
                  );
                e.classList.add(t);
              }
            },
            {
              key: "getCurrentBreakpoint",
              value: function() {
                return window
                  .getComputedStyle(document.body, ":after")
                  .getPropertyValue("content")
                  .replace(/'|"/g, "");
              }
            },
            {
              key: "isBreakpoint",
              value: function(e) {
                return e === this.currentBreakpoint;
              }
            },
            {
              key: "isBreakpointDown",
              value: function(e) {
                return (
                  this.orders.indexOf(this.currentBreakpoint) <
                  this.orders.indexOf(e)
                );
              }
            },
            {
              key: "isBreakpointUp",
              value: function(e) {
                return (
                  this.orders.indexOf(this.currentBreakpoint) >=
                  this.orders.indexOf(e)
                );
              }
            },
            {
              key: "detachBreakpoints",
              value: function() {
                window.removeEventListener("load", this._checkBreakpoint),
                  window.removeEventListener("resize", this._checkBreakpoint),
                  (this.currentBreakpoint = null),
                  (this.lastBreakpoint = null),
                  (this._checkBreakpoint = null);
              }
            },
            {
              key: "_checkBreakpoint",
              value: function() {
                (this.currentBreakpoint = this.getCurrentBreakpoint()),
                  this.currentBreakpoint !== this.lastBreakpoint &&
                    ((this.lastBreakpoint = this.currentBreakpoint),
                    this._announce());
              }
            },
            {
              key: "_announce",
              value: function() {
                this.breakpointsEmitter.emit("change", this.currentBreakpoint);
              }
            },
            {
              key: "name",
              get: function() {
                return "Breakpoints decorator class";
              }
            }
          ]) && z(t.prototype, r),
          n && z(t, n),
          e
        );
      })();
    t.default = R;
  }
]);
export default BreakpointsObserver.default;
