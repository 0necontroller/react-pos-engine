import M, { memo as v, forwardRef as oe, createElement as te, useCallback as de } from "react";
var K = { exports: {} }, V = {};
var ne;
function me() {
  if (ne) return V;
  ne = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.fragment");
  function l(o, a, i) {
    var r = null;
    if (i !== void 0 && (r = "" + i), a.key !== void 0 && (r = "" + a.key), "key" in a) {
      i = {};
      for (var d in a)
        d !== "key" && (i[d] = a[d]);
    } else i = a;
    return a = i.ref, {
      $$typeof: t,
      type: o,
      key: r,
      ref: a !== void 0 ? a : null,
      props: i
    };
  }
  return V.Fragment = s, V.jsx = l, V.jsxs = l, V;
}
var G = {};
var le;
function he() {
  return le || (le = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(n) {
      if (n == null) return null;
      if (typeof n == "function")
        return n.$$typeof === Y ? null : n.displayName || n.name || null;
      if (typeof n == "string") return n;
      switch (n) {
        case h:
          return "Fragment";
        case j:
          return "Profiler";
        case S:
          return "StrictMode";
        case D:
          return "Suspense";
        case f:
          return "SuspenseList";
        case _:
          return "Activity";
      }
      if (typeof n == "object")
        switch (typeof n.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), n.$$typeof) {
          case P:
            return "Portal";
          case A:
            return n.displayName || "Context";
          case E:
            return (n._context.displayName || "Context") + ".Consumer";
          case N:
            var x = n.render;
            return n = n.displayName, n || (n = x.displayName || x.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
          case m:
            return x = n.displayName || null, x !== null ? x : t(n.type) || "Memo";
          case C:
            x = n._payload, n = n._init;
            try {
              return t(n(x));
            } catch {
            }
        }
      return null;
    }
    function s(n) {
      return "" + n;
    }
    function l(n) {
      try {
        s(n);
        var x = !1;
      } catch {
        x = !0;
      }
      if (x) {
        x = console;
        var g = x.error, y = typeof Symbol == "function" && Symbol.toStringTag && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return g.call(
          x,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          y
        ), s(n);
      }
    }
    function o(n) {
      if (n === h) return "<>";
      if (typeof n == "object" && n !== null && n.$$typeof === C)
        return "<...>";
      try {
        var x = t(n);
        return x ? "<" + x + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var n = F.A;
      return n === null ? null : n.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function r(n) {
      if (W.call(n, "key")) {
        var x = Object.getOwnPropertyDescriptor(n, "key").get;
        if (x && x.isReactWarning) return !1;
      }
      return n.key !== void 0;
    }
    function d(n, x) {
      function g() {
        u || (u = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          x
        ));
      }
      g.isReactWarning = !0, Object.defineProperty(n, "key", {
        get: g,
        configurable: !0
      });
    }
    function p() {
      var n = t(this.type);
      return z[n] || (z[n] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), n = this.props.ref, n !== void 0 ? n : null;
    }
    function R(n, x, g, y, J, Q) {
      var $ = g.ref;
      return n = {
        $$typeof: b,
        type: n,
        key: x,
        props: g,
        _owner: y
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(n, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(n, "ref", { enumerable: !1, value: null }), n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(n, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(n, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.defineProperty(n, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    }
    function T(n, x, g, y, J, Q) {
      var $ = x.children;
      if ($ !== void 0)
        if (y)
          if (q($)) {
            for (y = 0; y < $.length; y++)
              I($[y]);
            Object.freeze && Object.freeze($);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else I($);
      if (W.call(x, "key")) {
        $ = t(n);
        var U = Object.keys(x).filter(function(pe) {
          return pe !== "key";
        });
        y = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", ae[$ + y] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          y,
          $,
          U,
          $
        ), ae[$ + y] = !0);
      }
      if ($ = null, g !== void 0 && (l(g), $ = "" + g), r(x) && (l(x.key), $ = "" + x.key), "key" in x) {
        g = {};
        for (var ee in x)
          ee !== "key" && (g[ee] = x[ee]);
      } else g = x;
      return $ && d(
        g,
        typeof n == "function" ? n.displayName || n.name || "Unknown" : n
      ), R(
        n,
        $,
        g,
        a(),
        J,
        Q
      );
    }
    function I(n) {
      L(n) ? n._store && (n._store.validated = 1) : typeof n == "object" && n !== null && n.$$typeof === C && (n._payload.status === "fulfilled" ? L(n._payload.value) && n._payload.value._store && (n._payload.value._store.validated = 1) : n._store && (n._store.validated = 1));
    }
    function L(n) {
      return typeof n == "object" && n !== null && n.$$typeof === b;
    }
    var k = M, b = /* @__PURE__ */ Symbol.for("react.transitional.element"), P = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), S = /* @__PURE__ */ Symbol.for("react.strict_mode"), j = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.consumer"), A = /* @__PURE__ */ Symbol.for("react.context"), N = /* @__PURE__ */ Symbol.for("react.forward_ref"), D = /* @__PURE__ */ Symbol.for("react.suspense"), f = /* @__PURE__ */ Symbol.for("react.suspense_list"), m = /* @__PURE__ */ Symbol.for("react.memo"), C = /* @__PURE__ */ Symbol.for("react.lazy"), _ = /* @__PURE__ */ Symbol.for("react.activity"), Y = /* @__PURE__ */ Symbol.for("react.client.reference"), F = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, q = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      react_stack_bottom_frame: function(n) {
        return n();
      }
    };
    var u, z = {}, H = k.react_stack_bottom_frame.bind(
      k,
      i
    )(), se = B(o(i)), ae = {};
    G.Fragment = h, G.jsx = function(n, x, g) {
      var y = 1e4 > F.recentlyCreatedOwnerStacks++;
      return T(
        n,
        x,
        g,
        !1,
        y ? Error("react-stack-top-frame") : H,
        y ? B(o(n)) : se
      );
    }, G.jsxs = function(n, x, g) {
      var y = 1e4 > F.recentlyCreatedOwnerStacks++;
      return T(
        n,
        x,
        g,
        !0,
        y ? Error("react-stack-top-frame") : H,
        y ? B(o(n)) : se
      );
    };
  })()), G;
}
var ie;
function fe() {
  return ie || (ie = 1, process.env.NODE_ENV === "production" ? K.exports = me() : K.exports = he()), K.exports;
}
var e = fe();
const X = {
  "58mm": { width: "58mm", name: "POS (58mm)" }
}, w = M.memo(
  ({ items: t, formatItemTotal: s, borderColor: l, hidePrice: o = !1 }) => /* @__PURE__ */ e.jsxs(
    "table",
    {
      style: {
        width: "100%",
        borderCollapse: "collapse",
        textAlign: "left",
        marginBottom: "10px",
        fontSize: "inherit"
      },
      children: [
        /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsxs(
          "tr",
          {
            style: {
              borderTop: `1px dashed ${l}`,
              borderBottom: `1px dashed ${l}`
            },
            children: [
              /* @__PURE__ */ e.jsx("th", { style: { textAlign: "left", padding: "3px 0", width: "15%" }, children: "QTY" }),
              /* @__PURE__ */ e.jsx(
                "th",
                {
                  style: {
                    textAlign: "left",
                    padding: "3px 0",
                    width: o ? "85%" : "60%"
                  },
                  children: "ITEM"
                }
              ),
              !o && /* @__PURE__ */ e.jsx("th", { style: { textAlign: "right", padding: "3px 0", width: "25%" }, children: "TOTAL" })
            ]
          }
        ) }),
        /* @__PURE__ */ e.jsx("tbody", { children: t.map((a, i) => /* @__PURE__ */ e.jsxs("tr", { children: [
          /* @__PURE__ */ e.jsx("td", { style: { textAlign: "left", padding: "2px 0" }, children: a.quantity }),
          /* @__PURE__ */ e.jsx("td", { style: { textAlign: "left", padding: "2px 0" }, children: a.name }),
          !o && /* @__PURE__ */ e.jsx("td", { style: { textAlign: "right", padding: "2px 0" }, children: s(a) })
        ] }, i)) })
      ]
    }
  )
), be = M.memo(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: o,
    formatItemTotal: a,
    showTaxBreakdown: i,
    alignStyle: r,
    currencyOpts: d
  }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("header", { style: { backgroundColor: "transparent", padding: "5px 0" }, children: [
      /* @__PURE__ */ e.jsx(
        "h1",
        {
          style: {
            fontSize: "1.4em",
            margin: "5px 0",
            color: s,
            textTransform: "uppercase"
          },
          children: o || "The React Store"
        }
      ),
      /* @__PURE__ */ e.jsxs("p", { style: { margin: "2px 0" }, children: [
        "Order #: ",
        t.id
      ] }),
      /* @__PURE__ */ e.jsxs(
        "p",
        {
          style: {
            margin: "5px 0 10px 0",
            borderBottom: `1px dashed ${l}`,
            paddingBottom: "5px"
          },
          children: [
            "Date: ",
            new Date(t.date).toLocaleDateString()
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(
      w,
      {
        items: t.items,
        formatItemTotal: a,
        borderColor: l
      }
    ),
    i && /* @__PURE__ */ e.jsxs(
      "footer",
      {
        style: {
          borderTop: `1px dashed ${l}`,
          paddingTop: "5px",
          textAlign: r
        },
        children: [
          /* @__PURE__ */ e.jsxs(
            "p",
            {
              style: {
                margin: "2px 0",
                display: "flex",
                justifyContent: "space-between"
              },
              children: [
                /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
                /* @__PURE__ */ e.jsx("span", { style: { fontWeight: "bold" }, children: c(t.subtotal, d) })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "p",
            {
              style: {
                margin: "2px 0",
                display: "flex",
                justifyContent: "space-between"
              },
              children: [
                /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
                /* @__PURE__ */ e.jsx("span", { style: { fontWeight: "bold" }, children: c(t.tax, d) })
              ]
            }
          )
        ]
      }
    )
  ] })
), ge = M.memo(
  ({
    order: t,
    primaryColor: s,
    headerText: l,
    borderColor: o,
    headerBgColor: a,
    formatItemTotal: i,
    sellerName: r,
    showSignature: d,
    textColor: p
  }) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        padding: "15mm 10mm",
        fontSize: "12px",
        minHeight: "270mm",
        border: `1px solid ${o}`,
        boxSizing: "border-box",
        color: p
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "header",
          {
            style: {
              borderBottom: `3px solid ${s}`,
              paddingBottom: "10px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: a
            },
            children: [
              /* @__PURE__ */ e.jsx("h1", { style: { fontSize: "24px", margin: 0, color: s }, children: "INVOICE" }),
              /* @__PURE__ */ e.jsxs("div", { style: { textAlign: "right" }, children: [
                /* @__PURE__ */ e.jsx("p", { style: { margin: "2px 0", fontWeight: "bold" }, children: l || "React Solutions Ltd." }),
                /* @__PURE__ */ e.jsx("p", { style: { margin: "2px 0", fontSize: "10px" }, children: t.customer.address }),
                /* @__PURE__ */ e.jsxs("p", { style: { margin: "2px 0", fontSize: "10px" }, children: [
                  "Invoice ID: ",
                  t.id
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "20px" }, children: [
          /* @__PURE__ */ e.jsx(
            "h2",
            {
              style: {
                fontSize: "16px",
                borderBottom: `1px solid ${o}`,
                paddingBottom: "5px",
                marginBottom: "10px",
                color: s
              },
              children: "Bill To:"
            }
          ),
          /* @__PURE__ */ e.jsx("p", { style: { margin: "2px 0", fontWeight: "bold" }, children: t.customer.name }),
          /* @__PURE__ */ e.jsx("p", { style: { margin: "2px 0" }, children: t.customer.address }),
          /* @__PURE__ */ e.jsx("p", { style: { margin: "2px 0" }, children: t.customer.phone })
        ] }),
        /* @__PURE__ */ e.jsx(
          w,
          {
            items: t.items,
            formatItemTotal: i,
            borderColor: o
          }
        ),
        d && /* @__PURE__ */ e.jsxs(
          "div",
          {
            style: {
              marginTop: "30px",
              borderTop: "1px dashed #ccc",
              paddingTop: "10px",
              display: "flex",
              justifyContent: "space-around",
              fontSize: "10px"
            },
            children: [
              /* @__PURE__ */ e.jsxs("div", { style: { textAlign: "center" }, children: [
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    style: {
                      height: "30px",
                      borderBottom: "1px solid #000",
                      marginBottom: "5px",
                      width: "150px"
                    }
                  }
                ),
                /* @__PURE__ */ e.jsx("p", { children: "Customer Signature" })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { style: { textAlign: "center" }, children: [
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    style: {
                      height: "30px",
                      borderBottom: "1px solid #000",
                      marginBottom: "5px",
                      width: "150px"
                    }
                  }
                ),
                /* @__PURE__ */ e.jsxs("p", { children: [
                  "Authorized by: ",
                  r
                ] })
              ] })
            ]
          }
        )
      ]
    }
  )
), ue = M.memo(
  ({ order: t, primaryColor: s, borderColor: l }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "header",
      {
        style: {
          borderBottom: `2px solid ${s}`,
          paddingBottom: "5px",
          marginBottom: "10px"
        },
        children: [
          /* @__PURE__ */ e.jsx("h1", { style: { fontSize: "1.6em", margin: "5px 0", color: s }, children: "KITCHEN ORDER TICKET" }),
          /* @__PURE__ */ e.jsxs("p", { style: { margin: "2px 0" }, children: [
            "Order #:",
            " ",
            /* @__PURE__ */ e.jsx("span", { style: { fontWeight: "bold", fontSize: "1.2em" }, children: t.id })
          ] }),
          /* @__PURE__ */ e.jsxs("p", { style: { margin: "2px 0" }, children: [
            "Time: ",
            (/* @__PURE__ */ new Date()).toLocaleTimeString()
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      w,
      {
        items: t.items,
        formatItemTotal: () => "",
        borderColor: l,
        hidePrice: !0
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "p",
      {
        style: {
          fontSize: "1.2em",
          marginTop: "20px",
          borderTop: `1px solid ${s}`,
          paddingTop: "5px"
        },
        children: [
          /* @__PURE__ */ e.jsx("span", { style: { fontWeight: "bold", color: "red" }, children: "NOTES:" }),
          " COOK WELL"
        ]
      }
    )
  ] })
), je = M.memo(
  ({
    layoutNum: t,
    order: s,
    primaryColor: l,
    borderColor: o,
    headerBgColor: a,
    showTaxBreakdown: i,
    alignStyle: r,
    currencyOpts: d
  }) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        padding: "10px",
        border: `1px dashed ${o}`,
        textAlign: "center",
        margin: "10px 0",
        backgroundColor: a
      },
      children: [
        /* @__PURE__ */ e.jsx(
          "h3",
          {
            style: { margin: "5px 0", color: l },
            children: `Layout ${t} - Modern POS Style`
          }
        ),
        /* @__PURE__ */ e.jsx(
          "p",
          {
            style: { margin: "2px 0", fontSize: "0.8em" },
            children: `Description for Layout ${t} goes here...`
          }
        ),
        /* @__PURE__ */ e.jsx(
          w,
          {
            items: s.items.slice(0, 2),
            formatItemTotal: (p) => c(p.price * p.quantity, d),
            borderColor: o
          }
        ),
        i && /* @__PURE__ */ e.jsx(
          "footer",
          {
            style: {
              borderTop: `1px dashed ${o}`,
              paddingTop: "5px",
              textAlign: r
            },
            children: /* @__PURE__ */ e.jsxs(
              "p",
              {
                style: {
                  margin: "2px 0",
                  display: "flex",
                  justifyContent: "space-between"
                },
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
                  /* @__PURE__ */ e.jsx("span", { style: { fontWeight: "bold" }, children: c(s.subtotal, d) })
                ]
              }
            )
          }
        )
      ]
    }
  )
), ye = v(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: o,
    formatItemTotal: a,
    showTaxBreakdown: i,
    currencyOpts: r
  }) => /* @__PURE__ */ e.jsxs("div", { className: "p-6 space-y-4 font-sans text-gray-800 text-left", children: [
    /* @__PURE__ */ e.jsxs(
      "header",
      {
        className: `pb-4 border-b-4 ${s.replace(
          "text-",
          "border-"
        )}`,
        children: [
          /* @__PURE__ */ e.jsx("h1", { className: `text-3xl font-extrabold ${s}`, children: o || "Modern Retail Co." }),
          /* @__PURE__ */ e.jsxs("div", { className: "text-sm mt-1 flex justify-between", children: [
            /* @__PURE__ */ e.jsxs("p", { children: [
              "Order ID: ",
              /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: t.id })
            ] }),
            /* @__PURE__ */ e.jsxs("p", { children: [
              "Date: ",
              new Date(t.date).toLocaleDateString()
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      w,
      {
        items: t.items,
        formatItemTotal: a,
        borderColor: l
      }
    ),
    i && /* @__PURE__ */ e.jsxs("footer", { className: "grid grid-cols-2 gap-4 pt-4 border-t border-solid border-gray-200", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "col-span-1 p-2 bg-gray-50 rounded-lg text-sm space-y-1", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: c(t.subtotal, r) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: c(t.tax, r) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `col-span-1 p-3 rounded-lg ${s.replace(
            "text-",
            "bg-"
          )} text-white font-bold flex flex-col items-center justify-center`,
          children: [
            /* @__PURE__ */ e.jsx("p", { className: "text-xs opacity-80", children: "TOTAL DUE" }),
            /* @__PURE__ */ e.jsx("p", { className: "text-2xl", children: c(t.total, r) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "text-xs pt-4 text-center text-gray-500", children: "Thank you for choosing us! Visit us at example.com" })
  ] })
);
const $e = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ne = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (s, l, o) => o ? o.toUpperCase() : l.toLowerCase()
), re = (t) => {
  const s = Ne(t);
  return s.charAt(0).toUpperCase() + s.slice(1);
}, ce = (...t) => t.filter((s, l, o) => !!s && s.trim() !== "" && o.indexOf(s) === l).join(" ").trim(), we = (t) => {
  for (const s in t)
    if (s.startsWith("aria-") || s === "role" || s === "title")
      return !0;
};
var ve = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Te = oe(
  ({
    color: t = "currentColor",
    size: s = 24,
    strokeWidth: l = 2,
    absoluteStrokeWidth: o,
    className: a = "",
    children: i,
    iconNode: r,
    ...d
  }, p) => te(
    "svg",
    {
      ref: p,
      ...ve,
      width: s,
      height: s,
      stroke: t,
      strokeWidth: o ? Number(l) * 24 / Number(s) : l,
      className: ce("lucide", a),
      ...!i && !we(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...r.map(([R, T]) => te(R, T)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
const xe = (t, s) => {
  const l = oe(
    ({ className: o, ...a }, i) => te(Te, {
      ref: i,
      iconNode: s,
      className: ce(
        `lucide-${$e(re(t))}`,
        `lucide-${t}`,
        o
      ),
      ...a
    })
  );
  return l.displayName = re(t), l;
};
const Se = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], ke = xe("calendar", Se);
const Ee = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
], Re = xe("shopping-cart", Ee), Ae = v(
  ({
    order: t,
    primaryColor: s,
    headerText: l,
    formatItemTotal: o,
    showTaxBreakdown: a,
    borderColor: i,
    alignStyle: r,
    currencyOpts: d
  }) => /* @__PURE__ */ e.jsxs("div", { className: "max-w-md w-full mx-auto p-6 space-y-5 font-mono text-gray-100 bg-gray-900/90 border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 backdrop-blur-sm transition duration-300 hover:shadow-emerald-900/50", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "pb-4 border-b-2 border-gray-700", children: [
      /* @__PURE__ */ e.jsxs(
        "h1",
        {
          className: `text-2xl font-black text-center tracking-wider ${s} drop-shadow-lg`,
          children: [
            /* @__PURE__ */ e.jsx(Re, { className: "inline w-6 h-6 mr-2 mb-1" }),
            "-- ",
            l || "SYNTHETIC RECEIPT",
            " --"
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between text-xs mt-3 text-gray-400", children: [
        /* @__PURE__ */ e.jsxs("span", { className: "flex items-center", children: [
          "ID:",
          " ",
          /* @__PURE__ */ e.jsx("span", { className: "ml-1 font-semibold text-gray-200", children: t.id })
        ] }),
        /* @__PURE__ */ e.jsxs("span", { className: "flex items-center", children: [
          /* @__PURE__ */ e.jsx(ke, { className: "inline w-3 h-3 mr-1" }),
          new Date(t.date).toLocaleDateString()
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(
      w,
      {
        items: t.items,
        formatItemTotal: o,
        borderColor: "border-gray-700"
      }
    ),
    a && /* @__PURE__ */ e.jsxs("footer", { className: "pt-4 border-t-2 border-gray-700", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 text-sm text-gray-300", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-100", children: c(t.subtotal, d) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-100", children: c(t.tax, d) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `flex justify-between mt-3 text-2xl font-extrabold ${s} pt-3 border-t border-gray-700`,
          children: [
            /* @__PURE__ */ e.jsx("span", { children: "TOTAL:" }),
            /* @__PURE__ */ e.jsx("span", { children: c(t.total, d) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `text-center text-xs pt-3 border-t border-dashed border-gray-700 ${s} uppercase tracking-widest`,
        children: "*** transaction complete ***"
      }
    )
  ] })
), _e = v(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: o,
    formatItemTotal: a,
    showTaxBreakdown: i,
    alignStyle: r,
    currencyOpts: d
  }) => /* @__PURE__ */ e.jsxs("div", { className: "p-6 space-y-4 font-serif text-gray-700 text-left border-2 border-gray-100", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "pb-4", children: [
      /* @__PURE__ */ e.jsx("h1", { className: `text-3xl font-light ${s} uppercase`, children: o || "Invoice Copy" }),
      /* @__PURE__ */ e.jsxs(
        "p",
        {
          className: `text-sm mt-1 pb-3 border-b-4 ${s.replace(
            "text-",
            "border-"
          )}`,
          children: [
            "Order Reference: ",
            /* @__PURE__ */ e.jsx("span", { className: "font-semibold", children: t.id })
          ]
        }
      )
    ] }),
    i && /* @__PURE__ */ e.jsxs("div", { className: "bg-gray-50 p-4 rounded-lg border border-gray-200", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-base font-semibold mb-2 border-b pb-1", children: "Payment Summary" }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between text-sm", children: [
        /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
        /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: c(t.subtotal, d) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between text-sm mt-1", children: [
        /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
        /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: c(t.tax, d) })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `flex justify-between text-xl font-bold mt-3 pt-2 border-t-2 ${s.replace(
            "text-",
            "border-"
          )}`,
          children: [
            /* @__PURE__ */ e.jsx("span", { children: "TOTAL DUE:" }),
            /* @__PURE__ */ e.jsx("span", { className: s, children: c(t.total, d) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("h2", { className: "text-lg font-semibold pt-2", children: [
      "Order Details (",
      t.items.length,
      " items)"
    ] }),
    /* @__PURE__ */ e.jsx(
      w,
      {
        items: t.items,
        formatItemTotal: a,
        borderColor: l
      }
    ),
    /* @__PURE__ */ e.jsxs("footer", { className: "text-sm pt-4 text-center italic text-gray-500", children: [
      "Processed on: ",
      new Date(t.date).toLocaleString()
    ] })
  ] })
), Le = v(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: o,
    formatItemTotal: a,
    showTaxBreakdown: i,
    alignStyle: r,
    currencyOpts: d
  }) => /* @__PURE__ */ e.jsxs("div", { className: "p-6 space-y-3 font-sans text-gray-800 text-left", children: [
    /* @__PURE__ */ e.jsxs(
      "header",
      {
        className: `pb-3 border-b-2 ${s.replace(
          "text-",
          "border-"
        )}`,
        children: [
          /* @__PURE__ */ e.jsx("h1", { className: `text-4xl font-black ${s} text-center`, children: o || "Flash Sale Receipt" }),
          /* @__PURE__ */ e.jsxs("p", { className: "mt-1 text-sm text-center", children: [
            "Order #: ",
            t.id,
            " | ",
            new Date(t.date).toLocaleDateString()
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      w,
      {
        items: t.items,
        formatItemTotal: a,
        borderColor: l
      }
    ),
    i && /* @__PURE__ */ e.jsxs("footer", { className: "pt-3 text-sm", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex justify-end items-center mt-1", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-1/4 text-right", children: "Subtotal:" }),
        /* @__PURE__ */ e.jsx("span", { className: "font-medium w-1/4 text-right", children: c(t.subtotal, d) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex justify-end items-center mt-1", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-1/4 text-right", children: "Tax:" }),
        /* @__PURE__ */ e.jsx("span", { className: "font-medium w-1/4 text-right", children: c(t.tax, d) })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `flex justify-end items-center mt-3 text-xl font-extrabold pt-2 border-t-4 border-double ${s.replace(
            "text-",
            "border-"
          )} space-x-4`,
          children: [
            /* @__PURE__ */ e.jsx("span", { className: "w-1/4 text-right", children: "TOTAL PAID:" }),
            /* @__PURE__ */ e.jsx("span", { className: "w-1/4 text-right", children: c(t.total, d) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "mt-5 p-3 text-center bg-yellow-100 border border-yellow-400 rounded-lg text-yellow-800",
        children: [
          /* @__PURE__ */ e.jsx("p", { className: "font-bold text-lg", children: "20% OFF YOUR NEXT ORDER!" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-sm", children: "Use code: SAVE20NOW" })
        ]
      }
    )
  ] })
), ze = v(
  ({
    order: t,
    primaryColor: s,
    headerText: l,
    formatItemTotal: o,
    showTaxBreakdown: a,
    borderColor: i,
    alignStyle: r,
    currencyOpts: d
  }) => {
    const p = t.subtotal > 0 ? (t.tax / t.subtotal * 100).toFixed(1) : "0.0";
    return /* @__PURE__ */ e.jsxs("div", { className: "p-8 space-y-4 font-serif text-gray-900 text-right bg-white border border-gray-300 shadow-md", children: [
      /* @__PURE__ */ e.jsxs("header", { className: "pb-4", children: [
        /* @__PURE__ */ e.jsx("h1", { className: `text-4xl font-bold ${s}`, children: l || "PURCHASE INVOICE" }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-sm mt-1", children: [
          /* @__PURE__ */ e.jsxs("p", { className: "font-semibold", children: [
            "ID: ",
            t.id
          ] }),
          /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-gray-500", children: [
            "Issued: ",
            new Date(t.date).toLocaleDateString()
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(
        w,
        {
          items: t.items,
          formatItemTotal: o,
          borderColor: "border-gray-300"
        }
      ),
      a && /* @__PURE__ */ e.jsxs("footer", { className: "pt-4 text-base", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-end mt-1 space-x-12", children: [
          /* @__PURE__ */ e.jsx("span", { className: "font-normal w-1/4 text-left", children: "Subtotal:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium w-1/4", children: c(t.subtotal, d) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-end mt-1 space-x-12", children: [
          /* @__PURE__ */ e.jsxs("span", { className: "font-normal w-1/4 text-left", children: [
            "Tax (",
            p,
            "%):"
          ] }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium w-1/4", children: c(t.tax, d) })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "flex justify-end mt-3 text-2xl font-extrabold pt-3 border-t-8 border-b-2 border-gray-900 space-x-12",
            children: [
              /* @__PURE__ */ e.jsx("span", { className: "w-1/4 text-left", children: "AMOUNT DUE:" }),
              /* @__PURE__ */ e.jsx("span", { className: "w-1/4", children: c(t.total, d) })
            ]
          }
        )
      ] })
    ] });
  }
), O = (t, s = "border") => t.replace("text-", `${s}-`), Z = (t) => t.replace("text-", "bg-"), Oe = v(
  ({
    order: t,
    primaryColor: s,
    headerText: l,
    formatItemTotal: o,
    showTaxBreakdown: a,
    alignStyle: i,
    currencyOpts: r
  }) => {
    const d = i === "left" ? "text-left" : i === "right" ? "text-right" : "text-center";
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `p-6 space-y-5 font-sans text-gray-800 ${d}`,
        children: [
          /* @__PURE__ */ e.jsxs(
            "header",
            {
              className: `pb-3 ${O(
                s,
                "border-b-4"
              )} border-solid`,
              children: [
                /* @__PURE__ */ e.jsx(
                  "h1",
                  {
                    className: `text-3xl font-bold ${s} tracking-tight uppercase`,
                    children: l || "Modern Commerce"
                  }
                ),
                /* @__PURE__ */ e.jsxs("div", { className: "text-sm mt-1 flex justify-between font-medium text-gray-500", children: [
                  /* @__PURE__ */ e.jsxs("span", { className: "text-left", children: [
                    "Order #: ",
                    t.id
                  ] }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-right", children: new Date(t.date).toLocaleDateString() })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            w,
            {
              items: t.items,
              formatItemTotal: o,
              borderColor: "border-gray-200"
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: `pt-4 border-t border-dashed border-gray-300 text-base flex flex-col items-${i}`,
              children: [
                a && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between w-full max-w-xs space-x-4", children: [
                    /* @__PURE__ */ e.jsx("span", { className: "text-left", children: "Subtotal:" }),
                    /* @__PURE__ */ e.jsx("span", { className: "font-medium text-right", children: c(t.subtotal, r) })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between w-full max-w-xs space-x-4 mt-1", children: [
                    /* @__PURE__ */ e.jsx("span", { className: "text-left", children: "Tax:" }),
                    /* @__PURE__ */ e.jsx("span", { className: "font-medium text-right", children: c(t.tax, r) })
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    className: `flex justify-between w-full max-w-xs mt-3 text-2xl font-bold pt-3 ${O(
                      s,
                      "border-t-2"
                    )}`,
                    children: [
                      /* @__PURE__ */ e.jsx("span", { className: "text-left", children: "TOTAL:" }),
                      /* @__PURE__ */ e.jsx("span", { className: `text-right ${s}`, children: c(t.total, r) })
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    );
  }
), Ie = v(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: o,
    formatItemTotal: a,
    showTaxBreakdown: i,
    alignStyle: r,
    currencyOpts: d
  }) => {
    const p = r === "left" ? "text-left" : r === "right" ? "text-right" : "text-center";
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `p-4 space-y-4 font-sans text-gray-800 ${p}`,
        children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: `inline-block px-6 py-2 text-xl font-bold uppercase rounded-full ${Z(
                s
              )} text-white shadow-md mb-4`,
              children: o || "Checkout Receipt"
            }
          ),
          /* @__PURE__ */ e.jsxs("header", { className: "pb-4 space-y-1 border-b border-dashed", children: [
            /* @__PURE__ */ e.jsxs("p", { className: "font-semibold text-lg", children: [
              "Transaction ID: ",
              /* @__PURE__ */ e.jsxs("span", { className: s, children: [
                "#",
                t.id
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-gray-500", children: [
              "Date: ",
              new Date(t.date).toLocaleDateString()
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(
            w,
            {
              items: t.items,
              formatItemTotal: a,
              borderColor: l
            }
          ),
          i && /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: `pt-4 border-t border-solid ${l} text-sm flex flex-col items-${r} w-full`,
              children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between w-full max-w-xs space-x-8", children: [
                  /* @__PURE__ */ e.jsx("span", { className: "text-left", children: "Subtotal:" }),
                  /* @__PURE__ */ e.jsx("span", { className: "font-medium text-right", children: c(t.subtotal, d) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between w-full max-w-xs space-x-8 mt-1", children: [
                  /* @__PURE__ */ e.jsx("span", { className: "text-left", children: "Tax:" }),
                  /* @__PURE__ */ e.jsx("span", { className: "font-medium text-right", children: c(t.tax, d) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: `pt-3 mt-3 text-2xl font-extrabold ${O(
                s,
                "border-t-4"
              )} border-double flex justify-between w-full max-w-xs mx-auto`,
              children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-left", children: "AMOUNT:" }),
                /* @__PURE__ */ e.jsx("span", { className: `text-right ${s}`, children: c(t.total, d) })
              ]
            }
          )
        ]
      }
    );
  }
), Ce = v(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: o,
    formatItemTotal: a,
    showTaxBreakdown: i,
    currencyOpts: r
  }) => /* @__PURE__ */ e.jsxs("div", { className: "p-4 space-y-4 font-sans text-gray-800 text-left", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "pb-4 border-b border-gray-300", children: [
      /* @__PURE__ */ e.jsx(
        "h1",
        {
          className: `text-2xl font-extrabold ${s} uppercase mb-2`,
          children: o || "Purchase Order"
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `grid grid-cols-2 gap-4 text-sm font-medium border-t-2 border-b-2 ${O(
            s
          )} py-2`,
          children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("span", { className: "font-bold", children: "Ref:" }),
              " ",
              t.id
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ e.jsx("span", { className: "font-bold", children: "Date:" }),
              " ",
              new Date(t.date).toLocaleDateString()
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(
      w,
      {
        items: t.items,
        formatItemTotal: a,
        borderColor: l
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `pt-4 border-t-2 ${l} text-base flex justify-end`,
        children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md space-y-2", children: [
          i && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: c(t.subtotal, r) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: c(t.tax, r) })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: `flex justify-between pt-2 mt-2 text-2xl font-bold border-t ${O(
                s
              )}`,
              children: [
                /* @__PURE__ */ e.jsx("span", { children: "TOTAL:" }),
                /* @__PURE__ */ e.jsx("span", { className: s, children: c(t.total, r) })
              ]
            }
          )
        ] })
      }
    )
  ] })
), Pe = v(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: o,
    formatItemTotal: a,
    showTaxBreakdown: i,
    alignStyle: r,
    currencyOpts: d
  }) => /* @__PURE__ */ e.jsxs("div", { className: `p-4 space-y-4 font-sans text-gray-800 text-${r}`, children: [
    /* @__PURE__ */ e.jsxs("header", { className: "pb-4 border-b border-dashed border-gray-400", children: [
      /* @__PURE__ */ e.jsx("h1", { className: `text-xl font-bold ${s} uppercase`, children: o || "SALES RECEIPT" }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-gray-500", children: [
        "Invoice: ",
        t.id
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(
      w,
      {
        items: t.items,
        formatItemTotal: a,
        borderColor: l
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `mt-6 p-4 rounded-lg shadow-inner ${Z(
          s
        ).replace("text-", "bg-")} bg-opacity-10 border ${O(
          s
        )}`,
        children: [
          /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-gray-600 mb-2", children: "SUMMARY" }),
          i && /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 border-b pb-2 mb-2 border-gray-300", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: c(t.subtotal, d) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: c(t.tax, d) })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between pt-1 text-2xl font-extrabold", children: [
            /* @__PURE__ */ e.jsx("span", { children: "AMOUNT DUE:" }),
            /* @__PURE__ */ e.jsx("span", { className: s, children: c(t.total, d) })
          ] })
        ]
      }
    )
  ] })
), De = v(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: o,
    formatItemTotal: a,
    showTaxBreakdown: i,
    currencyOpts: r
  }) => /* @__PURE__ */ e.jsxs("div", { className: "p-4 space-y-5 font-sans text-gray-800 text-left", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "pb-2 border-b-2 border-dashed border-gray-400", children: [
      /* @__PURE__ */ e.jsx("h1", { className: `text-2xl font-extrabold ${s} uppercase`, children: o || "Order Confirmation" }),
      /* @__PURE__ */ e.jsxs("div", { className: "text-sm mt-1 flex justify-between", children: [
        /* @__PURE__ */ e.jsxs("p", { children: [
          "Customer:",
          " ",
          /* @__PURE__ */ e.jsx("span", { className: "font-semibold", children: t.customer.name })
        ] }),
        /* @__PURE__ */ e.jsxs("p", { children: [
          "Ref: ",
          /* @__PURE__ */ e.jsx("span", { className: "font-semibold", children: t.id })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: t.items.map((d, p) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `py-2 border-b border-dashed ${l}`,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-base font-bold w-1/2", children: d.name }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-base font-bold w-1/4 text-right", children: [
              d.quantity,
              "x"
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-base font-bold w-1/4 text-right", children: a(d) })
          ] }),
          /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-gray-500 italic", children: [
            "@ ",
            c(d.price, r),
            " each"
          ] })
        ]
      },
      p
    )) }),
    /* @__PURE__ */ e.jsxs("div", { className: "pt-2", children: [
      i && /* @__PURE__ */ e.jsxs("div", { className: "text-base space-y-1", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: c(t.subtotal, r) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: c(t.tax, r) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `mt-3 pt-3 flex justify-between text-3xl font-extrabold ${O(
            s,
            "border-t-4"
          )}`,
          children: [
            /* @__PURE__ */ e.jsx("span", { children: "FINAL:" }),
            /* @__PURE__ */ e.jsx("span", { className: s, children: c(t.total, r) })
          ]
        }
      )
    ] })
  ] })
), Fe = v(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: o,
    formatItemTotal: a,
    showTaxBreakdown: i,
    currencyOpts: r
  }) => /* @__PURE__ */ e.jsxs("div", { className: "p-4 space-y-5 font-sans text-gray-800 text-left", children: [
    /* @__PURE__ */ e.jsxs(
      "header",
      {
        className: `py-3 px-4 ${Z(
          s
        )} text-white rounded-t-lg`,
        children: [
          /* @__PURE__ */ e.jsx("h1", { className: "text-xl font-extrabold", children: o || "Online Order Invoice" }),
          /* @__PURE__ */ e.jsxs("p", { className: "text-sm font-light mt-1", children: [
            "Order Date: ",
            new Date(t.date).toLocaleDateString()
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "p-3 border border-gray-300 rounded-md bg-gray-50 text-sm", children: [
      /* @__PURE__ */ e.jsx("p", { className: "font-bold mb-1 border-b border-gray-200 pb-1", children: "Shipping Details" }),
      /* @__PURE__ */ e.jsxs("p", { children: [
        "Recipient: ",
        t.customer.name
      ] }),
      /* @__PURE__ */ e.jsxs("p", { children: [
        "Address: ",
        t.customer.address
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "font-medium", children: [
        "Tracking ID:",
        " ",
        /* @__PURE__ */ e.jsx("span", { className: s, children: t.id.slice(0, 8).toUpperCase() })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(
      w,
      {
        items: t.items,
        formatItemTotal: a,
        borderColor: l
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "pt-2", children: [
      i && /* @__PURE__ */ e.jsxs("div", { className: "text-base space-y-1", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: c(t.subtotal, r) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: c(t.tax, r) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "mt-3 pt-3 flex justify-between text-2xl font-extrabold border-t-2 border-gray-400",
          children: [
            /* @__PURE__ */ e.jsx("span", { children: "TOTAL CHARGED:" }),
            /* @__PURE__ */ e.jsx("span", { className: s, children: c(t.total, r) })
          ]
        }
      )
    ] })
  ] })
), Be = v(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: o,
    formatItemTotal: a,
    showTaxBreakdown: i,
    currencyOpts: r
  }) => /* @__PURE__ */ e.jsxs("div", { className: "p-4 space-y-5 font-sans text-gray-800 text-left", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "pb-4 border-b border-gray-300", children: [
      /* @__PURE__ */ e.jsx("h1", { className: `text-xl font-normal ${s}`, children: o || "Receipt" }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [
        "Date: ",
        new Date(t.date).toLocaleDateString(),
        " | Ref: ",
        t.id
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(
      w,
      {
        items: t.items,
        formatItemTotal: a,
        borderColor: l
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "pt-2", children: [
      i && /* @__PURE__ */ e.jsxs("div", { className: "text-sm space-y-1", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-normal", children: c(t.subtotal, r) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-normal", children: c(t.tax, r) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "mt-3 pt-3 flex justify-between text-xl font-bold border-t-2 border-gray-400",
          children: [
            /* @__PURE__ */ e.jsx("span", { children: "Total:" }),
            /* @__PURE__ */ e.jsx("span", { className: s, children: c(t.total, r) })
          ]
        }
      )
    ] })
  ] })
), Me = v(
  ({
    order: t,
    primaryColor: s,
    headerText: l,
    formatItemTotal: o,
    showTaxBreakdown: a,
    currencyOpts: i
  }) => {
    const r = "text-amber-500";
    return /* @__PURE__ */ e.jsxs("div", { className: "p-4 space-y-5 font-sans text-gray-900 text-center", children: [
      /* @__PURE__ */ e.jsxs(
        "header",
        {
          className: `py-4 px-4 ${Z(
            s
          )} text-white shadow-lg rounded-b-xl`,
          children: [
            /* @__PURE__ */ e.jsx("h1", { className: "text-3xl font-black uppercase tracking-wider", children: l || "Tropical Sales" }),
            /* @__PURE__ */ e.jsxs(
              "p",
              {
                className: `text-sm mt-1 font-bold ${r.replace(
                  "text-",
                  "text-"
                )}`,
                children: [
                  "Order ID: ",
                  t.id
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "space-y-3 pt-4 border-t-4 border-double border-gray-300", children: t.items.map((d, p) => /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "flex justify-between items-center bg-white p-2 rounded-md shadow-sm border border-gray-200",
          children: [
            /* @__PURE__ */ e.jsxs("span", { className: "text-base font-bold text-left w-1/2", children: [
              d.quantity,
              "x ",
              d.name
            ] }),
            /* @__PURE__ */ e.jsx(
              "span",
              {
                className: `text-lg font-extrabold w-1/2 text-right ${s}`,
                children: o(d)
              }
            )
          ]
        },
        p
      )) }),
      /* @__PURE__ */ e.jsxs("div", { className: "pt-2", children: [
        a && /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `text-base space-y-1 border-t pt-2 border-dashed ${r.replace(
              "text-",
              "border-"
            )}`,
            children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
                /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: c(t.subtotal, i) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
                /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: c(t.tax, i) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `mt-3 pt-3 flex justify-between text-3xl font-black ${O(
              s,
              "border-t-8"
            )} border-double`,
            children: [
              /* @__PURE__ */ e.jsx("span", { children: "TOTAL:" }),
              /* @__PURE__ */ e.jsx("span", { className: s, children: c(t.total, i) })
            ]
          }
        )
      ] })
    ] });
  }
);
v(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: o,
    formatItemTotal: a,
    showTaxBreakdown: i,
    currencyOpts: r
  }) => /* @__PURE__ */ e.jsxs("div", { className: "p-2 space-y-2 font-mono text-gray-900 text-center text-sm", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "pb-2 border-b-2 border-dashed border-gray-400", children: [
      /* @__PURE__ */ e.jsx("h1", { className: `text-lg font-extrabold ${s} uppercase`, children: o || "Quick Receipt" }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-xs mt-1", children: [
        "TID: ",
        t.id,
        " | ",
        new Date(t.date).toLocaleDateString()
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "space-y-1", children: t.items.map((d, p) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `flex justify-between border-b border-dashed ${l}`,
        children: [
          /* @__PURE__ */ e.jsxs("span", { className: "w-1/2 text-left", children: [
            d.quantity,
            "x ",
            d.name
          ] }),
          /* @__PURE__ */ e.jsx("span", { className: "w-1/2 text-right font-medium", children: a(d) })
        ]
      },
      p
    )) }),
    /* @__PURE__ */ e.jsxs("div", { className: "pt-2", children: [
      i && /* @__PURE__ */ e.jsxs("div", { className: "text-xs space-y-1", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-normal", children: c(t.subtotal, r) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-normal", children: c(t.tax, r) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `mt-2 pt-2 flex justify-between text-base font-bold border-t border-solid ${O(
            s
          )}`,
          children: [
            /* @__PURE__ */ e.jsx("span", { children: "TOTAL PAID:" }),
            /* @__PURE__ */ e.jsx("span", { className: s, children: c(t.total, r) })
          ]
        }
      )
    ] })
  ] })
);
const We = ({
  order: t,
  layout: s = 1,
  alignment: l = "center",
  primaryColor: o = "#007BFF",
  textColor: a = "#000000",
  borderColor: i = "#CCCCCC",
  headerBgColor: r = "transparent",
  baseFontSize: d = 9,
  paperSize: p = "58mm",
  fontFamily: R = "Consolas, monospace",
  logoUrl: T = "",
  headerText: I = "",
  footerText: L = "",
  sellerName: k = "",
  showSignature: b = !1,
  showTaxBreakdown: P = !1,
  currency: h,
  locale: S,
  currencyDisplay: j
}) => {
  const E = l === "start" ? "left" : l === "end" ? "right" : "center", A = X["58mm"] || X["58mm"], N = { currency: h, locale: S, currencyDisplay: j }, D = de(
    (_) => c(_.price * _.quantity, N),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [h, S, j]
  ), f = {
    order: t,
    alignStyle: E,
    primaryColor: o,
    borderColor: i,
    headerBgColor: r,
    formatItemTotal: D,
    headerText: I,
    footerText: L,
    sellerName: k,
    showSignature: b,
    textColor: a,
    layout: s,
    alignment: l,
    baseFontSize: d,
    paperSize: p,
    fontFamily: R,
    logoUrl: T,
    showTaxBreakdown: P,
    customCss: "",
    currencyOpts: N
  };
  let m;
  switch (s) {
    case 1:
      m = /* @__PURE__ */ e.jsx(be, { ...f });
      break;
    case 2:
      m = /* @__PURE__ */ e.jsx(ye, { ...f });
      break;
    case 3:
      m = /* @__PURE__ */ e.jsx(Ae, { ...f });
      break;
    case 4:
      m = /* @__PURE__ */ e.jsx(ge, { ...f });
      break;
    case 5:
      m = /* @__PURE__ */ e.jsx(_e, { ...f });
      break;
    case 6:
      m = /* @__PURE__ */ e.jsx(ue, { ...f });
      break;
    case 7:
      m = /* @__PURE__ */ e.jsx(Le, { ...f });
      break;
    case 8:
      m = /* @__PURE__ */ e.jsx(ze, { ...f });
      break;
    case 9:
      m = /* @__PURE__ */ e.jsx(Oe, { ...f });
      break;
    case 10:
      m = /* @__PURE__ */ e.jsx(Ie, { ...f });
      break;
    case 11:
      m = /* @__PURE__ */ e.jsx(Ce, { ...f });
      break;
    case 12:
      m = /* @__PURE__ */ e.jsx(Pe, { ...f });
      break;
    case 13:
      m = /* @__PURE__ */ e.jsx(De, { ...f });
      break;
    case 14:
      m = /* @__PURE__ */ e.jsx(Fe, { ...f });
      break;
    case 15:
      m = /* @__PURE__ */ e.jsx(Be, { ...f });
      break;
    case 16:
      m = /* @__PURE__ */ e.jsx(Me, { ...f });
      break;
    default:
      m = /* @__PURE__ */ e.jsx(je, { layoutNum: s, ...f });
      break;
  }
  const C = s === 4 ? m : /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        ...A,
        // { width: '58mm' }
        fontFamily: R,
        fontSize: `${d}px`,
        color: a,
        lineHeight: "1.2",
        padding: "5px",
        margin: "0 auto",
        textAlign: E,
        boxSizing: "content-box"
      },
      children: [
        T && /* @__PURE__ */ e.jsx(
          "img",
          {
            src: T,
            alt: "Logo",
            style: {
              maxWidth: "100%",
              maxHeight: "50px",
              margin: "5px auto",
              display: "block"
            },
            onError: (_) => _.currentTarget.style.display = "none"
          }
        ),
        m,
        s !== 4 && s !== 6 && /* @__PURE__ */ e.jsxs(
          "h2",
          {
            style: {
              fontSize: "1.222em",
              margin: "5px 0",
              display: "flex",
              justifyContent: "space-between",
              borderTop: `1px solid ${o}`,
              borderBottom: `1px solid ${o}`,
              padding: "4px 0",
              color: o
            },
            children: [
              /* @__PURE__ */ e.jsx("span", { children: "GRAND TOTAL:" }),
              /* @__PURE__ */ e.jsx("span", { style: { fontWeight: "900" }, children: c(t.total, N) })
            ]
          }
        ),
        s !== 4 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("p", { style: { marginTop: "10px" }, children: L || "Thank you for shopping!" }),
          b && /* @__PURE__ */ e.jsxs(
            "div",
            {
              style: {
                marginTop: "20px",
                borderTop: "1px dashed #ccc",
                paddingTop: "10px",
                textAlign: "center",
                fontSize: "0.8em"
              },
              children: [
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    style: {
                      height: "15px",
                      borderBottom: "1px solid #000",
                      marginBottom: "5px",
                      width: "80%",
                      margin: "0 auto"
                    }
                  }
                ),
                /* @__PURE__ */ e.jsxs("p", { children: [
                  "Authorized: ",
                  k || "N/A"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ e.jsx("p", { style: { fontSize: "0.777em", margin: "5px 0" }, children: (/* @__PURE__ */ new Date()).toLocaleString() })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      id: "receipt-content-target-wrapper",
      style: { minWidth: "58mm", margin: "0 auto" },
      children: C
    }
  );
}, c = (t, s) => {
  const l = t / 100, o = s?.currency ?? "USD", a = s?.locale ?? "en-US", i = s?.currencyDisplay ?? "symbol";
  try {
    return new Intl.NumberFormat(a, {
      style: "currency",
      currency: o,
      currencyDisplay: i,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(l);
  } catch {
    return `${o} ${l.toFixed(2)}`;
  }
}, He = M.memo(We), Ue = (t, s, l, o) => {
  const a = l ? "" : '<th style="text-align: right; padding: 3px 0; width: 25%;">TOTAL</th>', i = t.map(
    (r) => `
    <tr>
        <td style="text-align: left; padding: 2px 0;">${r.quantity}</td>
        <td style="text-align: left; padding: 2px 0;">${r.name}</td>
        ${l ? "" : `<td style="text-align: right; padding: 2px 0;">${c(
      r.price * r.quantity,
      o
    )}</td>`}
    </tr>
  `
  ).join("");
  return `
    <table style="width: 100%; border-collapse: collapse; text-align: left; margin-bottom: 10px; font-size: inherit; color: inherit;">
        <thead>
            <tr style="border-top: 1px dashed ${s}; border-bottom: 1px dashed ${s};">
                <th style="text-align: left; padding: 3px 0; width: 15%;">QTY</th>
                <th style="text-align: left; padding: 3px 0; width: ${l ? "85%" : "60%"};">ITEM</th>
                ${a}
            </tr>
        </thead>
        <tbody>${i}</tbody>
    </table>
  `;
}, Ye = (t, s, l) => {
  const {
    layout: o,
    primaryColor: a,
    borderColor: i,
    headerText: r,
    headerBgColor: d,
    sellerName: p,
    showSignature: R,
    showTaxBreakdown: T,
    currency: I,
    locale: L,
    currencyDisplay: k
  } = s, b = { currency: I, locale: L, currencyDisplay: k }, P = o === 6, h = Ue(
    t.items,
    i,
    P,
    b
  ), S = (E, A) => `
    <h1 style="font-size: 1.4em; margin: 5px 0; color: ${A}; text-transform: uppercase;">${E || "The Store Name"}</h1>
  `, j = T ? `
    <footer style="border-top: 1px dashed ${i}; padding-top: 5px; text-align: ${l};">
      <p style="margin: 2px 0; display: flex; justify-content: space-between;"><span>Subtotal:</span><span style="font-weight: bold;">${c(
    t.subtotal,
    b
  )}</span></p>
      <p style="margin: 2px 0; display: flex; justify-content: space-between;"><span>Tax:</span><span style="font-weight: bold;">${c(
    t.tax,
    b
  )}</span></p>
    </footer>
  ` : "";
  switch (o) {
    case 1:
    // Classic POS
    case 2:
    // Detailed POS
    case 3:
      const E = o === 2 ? t.customFields.map(
        (u) => `<p style="font-size: 0.9em;">${u.key}: ${u.value}</p>`
      ).join("") : "";
      return `
        <header style="background-color: ${d}; padding: 5px 0;">
          ${S(r, a)}
          <p style="margin: 2px 0;">Order #: ${t.id}</p>
          <p style="margin: 5px 0 10px 0; border-bottom: 1px dashed ${i}; padding-bottom: 5px;">Date: ${new Date(
        t.date
      ).toLocaleDateString()}</p>
          ${E}
        </header>
        ${h}
        ${j}
      `;
    case 4: {
      const u = `
        <section style="margin-bottom: 20px;">
          <h2 style="font-size: 16px; border-bottom: 1px solid ${i}; padding-bottom: 5px; margin-bottom: 10px; color: ${a};">Bill To:</h2>
          <p style="margin: 2px 0; font-weight: bold;">${t.customer.name}</p>
          <p style="margin: 2px 0;">${t.customer.address}</p>
        </section>
      `, z = `
        <div style="margin-top: 50px; text-align: right; border-top: 1px solid ${i}; padding-top: 10px;">
          <p style="margin: 2px 0;">Subtotal: ${c(
        t.subtotal,
        b
      )}</p>
          <p style="margin: 2px 0;">Tax: ${c(t.tax, b)}</p>
          <h3 style="margin: 5px 0; color: ${a};">GRAND TOTAL: ${c(
        t.total,
        b
      )}</h3>
        </div>
      `, H = R ? `
        <div style="margin-top: 30px; border-top: 1px dashed #ccc; padding-top: 10px; display: flex; justify-content: space-around; font-size: 10px;">
          <div style="text-align: center;">
            <div style="height: 30px; border-bottom: 1px solid #000; margin-bottom: 5px; width: 150px;"></div>
            <p>Customer Signature</p>
          </div>
          <div style="text-align: center;">
            <div style="height: 30px; border-bottom: 1px solid #000; margin-bottom: 5px; width: 150px;"></div>
            <p>Authorized by: ${p || "N/A"}</p>
          </div>
        </div>
      ` : "";
      return `
        <div style="padding: 15mm 10mm; font-size: 12px; min-height: 270mm; box-sizing: border-box; text-align: left;">
          <header style="border-bottom: 3px solid ${a}; padding-bottom: 10px; margin-bottom: 20px; display: flex; justify-content: space-between; background-color: ${d}; color: ${a};">
            <h1 style="font-size: 24px; margin: 0;">INVOICE</h1>
            <div style="text-align: right; color: #000;">
                <p style="margin: 2px 0; font-weight: bold;">${r || "React Solutions Ltd."}</p>
                <p style="margin: 2px 0; font-size: 10px;">${t.customer.address}</p>
                <p style="margin: 2px 0; font-size: 10px;">Invoice ID: ${t.id}</p>
            </div>
          </header>
          ${u}
          ${h}
          ${z}
          ${H}
        </div>
      `;
    }
    case 5:
      const A = `
        <div style="border: 2px solid ${a}; padding: 10px; margin: 10px 0; text-align: ${l};">
            <h2 style="margin: 0 0 5px 0; font-size: 1.1em; color: ${a};">ORDER SUMMARY</h2>
            ${j}
        </div>
      `, N = `
        <h2 
          style="font-size: 1.6em; margin: 10px 0; padding: 5px 0; border-top: 3px double ${a}; text-align: ${l}; color: ${a}; font-weight: 900;"
        >
            TOTAL: ${c(t.total, b)}
        </h2>
      `;
      return `
        <header style="padding: 10px 0; background-color: ${d};">
          ${S(r, a)}
          <p style="margin: 2px 0; font-size: 0.9em;">Transaction ID: ${t.id}</p>
          <p style="margin: 2px 0; font-size: 0.9em;">Customer: ${t.customer.name}</p>
        </header>
        ${A}
        ${h}
        ${N}
      `;
    case 6: {
      const u = t.items.map(
        (z) => `
        <tr style="border-bottom: 1px dashed ${i};">
          <td style="text-align: left; padding: 5px 0; font-weight: bold; font-size: 1.2em; width: 10%;">${z.quantity}X</td>
          <td style="text-align: left; padding: 5px 0; font-weight: bold; font-size: 1.2em;">${z.name}</td>
        </tr>
      `
      ).join("");
      return `
        <header style="border-bottom: 2px solid ${a}; padding-bottom: 5px; margin-bottom: 10px;">
          <h1 style="font-size: 1.6em; margin: 5px 0; color: ${a};">KITCHEN ORDER TICKET</h1>
          <p style="margin: 2px 0;">Order #: <span style="font-weight: bold; font-size: 1.2em;">${t.id}</span></p>
        </header>
        <table style="width: 100%; border-collapse: collapse; text-align: left; margin-bottom: 10px; font-size: 1em;">
          <tbody>${u}</tbody>
        </table>
        <p style="font-size: 1.2em; margin-top: 20px; border-top: 1px solid ${a}; padding-top: 5px;">
          <span style="font-weight: bold; color: red;">NOTES:</span> COOK WELL
        </p>
      `;
    }
    case 7:
      const D = `
        <div style="background-color: #F0FFF0; border: 1px solid ${a}; padding: 8px; margin-bottom: 10px;">
            <h3 style="margin: 0; font-size: 1.1em; color: green;">🎉 SPECIAL OFFER! 🎉</h3>
            <p style="margin: 2px 0; font-size: 0.9em;">You saved ${c(
        t.tax / 2,
        b
      )} today!</p>
        </div>
      `;
      return `
        <header style="padding: 5px 0; border-bottom: 1px solid ${i}; margin-bottom: 10px;">
            ${S(r, a)}
            <p style="margin: 2px 0; font-size: 0.9em;">Date: ${new Date(
        t.date
      ).toLocaleDateString()}</p>
        </header>
        ${D}
        ${h}
        ${j}
        <h2 style="font-size: 1.5em; margin: 10px 0; color: ${a};">TOTAL: ${c(
        t.total,
        b
      )}</h2>
        <p style="font-size: 0.8em; margin-top: 10px;">Visit us online at example.com!</p>
      `;
    case 8:
      const f = `
        <div style="display: flex; justify-content: space-between; margin: 10px 0; font-size: 0.9em; border-bottom: 1px dashed ${i}; padding-bottom: 5px;">
            <div style="text-align: left;">
                <p style="margin: 2px 0;">Customer: ${t.customer.name}</p>
                <p style="margin: 2px 0;">Date: ${new Date(
        t.date
      ).toLocaleDateString()}</p>
            </div>
            <div style="text-align: right; font-weight: bold;">
                <p style="margin: 2px 0; color: ${a};">Order Ref: ${t.id}</p>
            </div>
        </div>
      `;
      return `
        <header style="background-color: ${d}; padding: 10px 5px; border-bottom: 3px solid ${a};">
          <p style="margin: 0; font-size: 0.9em; text-transform: uppercase; color: ${a};">${r || "INVOICE"}</p>
          <h1 style="font-size: 1.8em; margin: 5px 0 0 0; color: #000;">${p || "Finance Tracker"}</h1>
        </header>
        ${f}
        ${h}
        ${j}
      `;
    case 9:
      const m = `
        <h2 style="font-size: 1.5em; margin: 10px 0; padding-bottom: 5px; border-bottom: 3px double ${a}; color: ${a};">
            GRAND TOTAL: ${c(t.total, b)}
        </h2>
      `;
      return `
        <header style="padding: 10px 0; border-bottom: 3px solid ${a}; margin-bottom: 15px;">
            ${S(r, a)}
            <p style="margin: 2px 0; font-size: 0.9em;">Ref: ${t.id}</p>
        </header>
        <section style="margin-bottom: 15px;">
            <h3 style="font-size: 1em; border-bottom: 1px solid ${i}; padding-bottom: 5px; margin-bottom: 5px;">ITEMS</h3>
            ${h}
        </section>
        <section style="margin-top: 15px; border-top: 1px solid ${i}; padding-top: 5px;">
            ${j}
        </section>
        ${m}
      `;
    case 10:
      return `
        ${`
        <div style="padding: 10px; background-color: ${a}; border-radius: 10px 10px 0 0; text-align: ${l};">
          <p style="margin: 0; font-size: 0.8em; color: #fff;">TICKET NUMBER:</p>
          <h1 style="font-size: 1.6em; margin: 5px 0 0 0; color: #fff;">#${t.id}</h1>
        </div>
      `}
        <header style="padding: 10px 0; border-bottom: 2px solid ${i}; margin-bottom: 10px; text-align: ${l};">
          ${S(r, a)}
          <p style="margin: 2px 0;">Date: ${new Date(
        t.date
      ).toLocaleDateString()}</p>
        </header>
        ${h}
        ${j}
      `;
    case 11:
      return `
        ${`
        <header style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid ${a}; margin-bottom: 10px;">
            <div style="text-align: left;">
                <h1 style="font-size: 1.2em; margin: 0; color: ${a};">${r || "The Shop"}</h1>
                <p style="margin: 2px 0; font-size: 0.8em;">Receipt</p>
            </div>
            <div style="text-align: right;">
                <p style="margin: 2px 0; font-weight: bold;">Order: ${t.id}</p>
                <p style="margin: 2px 0; font-size: 0.8em;">${new Date(
        t.date
      ).toLocaleTimeString()}</p>
            </div>
        </header>
      `}
        ${h}
        ${j}
      `;
    case 12:
      const Y = `
        <div style="border: 1px solid ${a}; padding: 8px; margin: 10px 0; background-color: ${d};">
            ${j}
        </div>
        <h2 style="font-size: 1.5em; margin: 5px 0; color: ${a}; text-align: ${l};">TOTAL: ${c(
        t.total,
        b
      )}</h2>
      `;
      return `
        <header style="padding: 5px 0; margin-bottom: 10px; border-bottom: 1px dashed ${i};">
          ${S(r, a)}
          <p style="margin: 2px 0; font-size: 0.9em;">Transaction: ${t.id}</p>
        </header>
        ${h}
        ${Y}
      `;
    case 13:
      const F = `
        <div style="margin-top: 10px; padding: 5px 0; border-top: 1px solid ${i}; text-align: ${l};">
          <p style="font-weight: bold; font-size: 1.1em; color: ${a};">Total Payable:</p>
          <h2 style="font-size: 2em; margin: 2px 0; color: ${a};">${c(
        t.total,
        b
      )}</h2>
        </div>
      `;
      return `
        <header style="padding: 10px 0; border-bottom: 5px double ${a}; margin-bottom: 10px;">
          <h1 style="font-size: 1.6em; margin: 0; color: ${a};">${r || "Item Focus Receipt"}</h1>
          <p style="margin: 5px 0 0 0; font-size: 0.8em;">Order: ${t.id} | Date: ${new Date(t.date).toLocaleDateString()}</p>
        </header>
        <p style="margin: 5px 0; font-weight: bold; text-align: left;">Items Purchased:</p>
        ${h}
        ${j}
        ${F}
      `;
    case 14:
      const W = `
        <section style="margin-bottom: 15px; border: 1px dashed ${i}; padding: 8px; text-align: left;">
            <p style="margin: 2px 0; font-weight: bold;">Shipping To:</p>
            <p style="margin: 2px 0; font-size: 0.9em;">${t.customer.name}</p>
            <p style="margin: 2px 0; font-size: 0.9em;">${t.customer.address}</p>
            <p style="margin: 2px 0; font-size: 0.9em;">Tracking ID: ${t.id.slice(0, 8).toUpperCase()}</p>
        </section>
      `;
      return `
        <header style="padding: 10px 0; background-color: ${a}; color: #fff; margin-bottom: 15px; text-align: ${l};">
          <h1 style="font-size: 1.5em; margin: 0;">${r || "Online Order Receipt"}</h1>
          <p style="margin: 2px 0; font-size: 0.9em;">Order placed: ${new Date(
        t.date
      ).toLocaleDateString()}</p>
        </header>
        ${W}
        ${h}
        ${j}
      `;
    case 15:
      const q = `
        <header style="padding: 10px 0; margin-bottom: 15px; text-align: ${l};">
          <h1 style="font-size: 1.2em; margin: 0; text-transform: none;">${r || "Receipt"}</h1>
          <p style="margin: 5px 0; border-top: 1px dashed ${i}; padding-top: 5px; font-size: 0.9em;">
            TID: ${t.id} | ${new Date(
        t.date
      ).toLocaleDateString()}
          </p>
        </header>
      `, B = `
        <h2 style="font-size: 1.4em; margin: 5px 0; border-top: 1px dashed ${i}; padding-top: 5px; text-align: ${l};">
            Total: ${c(t.total, b)}
        </h2>
      `;
      return `
        ${q}
        ${h}
        <section style="margin-top: 10px; border-top: 1px dashed ${i}; padding-top: 5px;">
            ${j}
        </section>
        ${B}
      `;
    case 16: {
      const u = "#FF9800", z = `
        <header style="padding: 15px 0; background-color: ${a}; color: #fff; border-bottom: 3px solid ${u}; text-align: ${l};">
          <h1 style="font-size: 1.6em; margin: 0; text-transform: uppercase; letter-spacing: 2px;">${r || "TROPICAL SALES"}</h1>
          <p style="margin: 5px 0 0 0; font-size: 0.9em; font-weight: bold;">Order: ${t.id}</p>
        </header>
        <div style="background-color: ${u}20; padding: 5px; margin: 10px 0; text-align: ${l};">
            <p style="margin: 0; font-size: 0.9em; color: ${u}; font-weight: bold;">Thank You, ${t.customer.name}!</p>
        </div>
      `, H = `
        <div style="margin-top: 10px; padding: 8px; background-color: ${u}; color: #fff;">
            <h2 style="font-size: 1.8em; margin: 0; display: flex; justify-content: space-between;">
                <span>GRAND TOTAL</span>
                <span>${c(t.total, b)}</span>
            </h2>
        </div>
      `;
      return `
        ${z}
        ${h}
        ${j}
        ${H}
      `;
    }
    default:
      return `
        <header style="border-bottom: 1px solid ${i}; padding-bottom: 5px; margin-bottom: 10px; background-color: ${d}; text-align: ${l};">
          <h1 style="font-size: 1.4em; margin: 5px 0; color: ${a};">Layout ${o} - Custom Type</h1>
          <p style="margin: 2px 0;">(Fallback: No specific HTML structure defined.)</p>
        </header>
        ${h}
        ${j}
      `;
  }
}, Ve = (t, s) => {
  const {
    layout: l,
    alignment: o,
    primaryColor: a,
    textColor: i,
    borderColor: r,
    baseFontSize: d,
    paperSize: p,
    fontFamily: R,
    logoUrl: T,
    footerText: I,
    sellerName: L,
    showSignature: k,
    customCss: b,
    currency: P,
    locale: h,
    currencyDisplay: S
  } = s;
  return { printReceipt: de(() => {
    if (!t || !t.items.length) {
      console.error("Cannot print: Order data is missing or empty.");
      return;
    }
    const E = o === "start" ? "left" : o === "end" ? "right" : "center", A = X["58mm"] || X["58mm"], N = p === "a4" || p === "letter", D = window.screen.width, f = window.screen.height, m = Math.max(700, Math.floor(D * 0.5)), C = Math.max(600, Math.floor(f * 0.7)), _ = Ye(t, s, E), Y = T && !N ? `<img src="${T}" alt="Logo" style="max-width: 100%; max-height: 50px; margin: 5px auto; display: block;" onerror="this.style.display='none';">` : "", F = !N && l !== 6 ? `
        <!-- Consistent Total -->
        <h2 class="grand-total-style">
            <span>GRAND TOTAL:</span>
        </h2<span style="font-weight: 900;">${c(t.total, {
      currency: P,
      locale: h,
      currencyDisplay: S
    })}</span>>
    ` : "", W = N ? "" : `
      <p style="margin-top: 10px;">${I || "Thank you for shopping!"}</p>
      ${k ? `
        <div style="margin-top: 20px; border-top: 1px dashed #ccc; padding-top: 10px; text-align: center; font-size: 0.8em;">
          <div style="height: 15px; border-bottom: 1px solid #000; margin-bottom: 5px; width: 80%; margin: 0 auto;"></div>
          <p>Authorized: ${L || "N/A"}</p>
        </div>
      ` : ""}
      <p style="font-size: 0.777em; margin: 5px 0;">${(/* @__PURE__ */ new Date()).toLocaleString()}</p>
    `, q = N ? _ : `
        <div id="receipt-content-target">
            ${Y}
            ${_}
            ${F}
            ${W}
        </div>
    `, B = `
      <!DOCTYPE html>
      <html>
      <head>
          <title>Receipt Print</title>
          <style>
              @page {
                size: ${N ? p : "auto"};
                margin: ${N ? "15mm" : "0"};
              }
              body {
                margin: 0;
                padding: 0;
                font-family: ${R};
                color: ${i}; /* Global text color */
              }
              #receipt-content-target {
                  width: ${A.width};
                  max-width: ${A.width}; /* Crucial fix for big window stretching on POS sizes */
                  font-size: ${d}px;
                  line-height: 1.2;
                  padding: 5px;
                  margin: 0 auto;
                  text-align: ${E};
                  box-sizing: content-box;
              }
              /* Ensure A4/Letter size uses 100% width and default document margins */
              ${N ? `
                #receipt-content-target {
                    width: 100%;
                    max-width: 100%;
                    padding: 0;
                    margin: 0;
                    text-align: left; /* Default for documents */
                }
              ` : ""}

              table { width: 100%; border-collapse: collapse; text-align: left; margin-bottom: 10px; }
              th, td { padding: 2px 0; }

              /* Apply dynamic color to the Grand Total section */
              .grand-total-style {
                font-size: 1.222em;
                margin: 5px 0;
                display: flex;
                justify-content: space-between;
                border-top: 1px solid ${a};
                border-bottom: 1px solid ${a};
                padding: 4px 0;
                color: ${a};
              }

              @media print {
                  html, body { height: auto; overflow: hidden; }
              }

              /* --- Custom CSS Injection --- */
              ${b}
          </style>
      </head>
      <body>
        ${q}
      </body>
      </html>
    `, u = window.open(
      "",
      "_blank",
      `height=${C},width=${m}`
    );
    u ? (u.document.write(B), u.document.close(), u.onload = () => {
      u.print(), N || setTimeout(() => u.close(), 1e3);
    }) : console.warn(
      "Could not open print window. Check pop-up blocker settings."
    );
  }, [t, s]), ReceiptContent: He };
}, Ge = {
  "58mm": { width: "58mm", name: "POS (58mm)" },
  "80mm": { width: "80mm", name: "POS (80mm)" },
  "100mm": { width: "100mm", name: "Wide POS (100mm)" },
  a4: { width: "210mm", name: "Standard (A4)" },
  letter: { width: "216mm", name: "Letter (8.5in)" }
};
export {
  Ge as PAPER_SIZES,
  Ve as useReceiptPrint
};
