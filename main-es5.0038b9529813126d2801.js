function _defineProperty(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function _toArray(e) {
  return _arrayWithHoles(e) || _iterableToArray(e) || _nonIterableRest();
}
function _slicedToArray(e, t) {
  return (
    _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(e, t) {
  if (
    Symbol.iterator in Object(e) ||
    "[object Arguments]" === Object.prototype.toString.call(e)
  ) {
    var n = [],
      r = !0,
      i = !1,
      o = void 0;
    try {
      for (
        var a, s = e[Symbol.iterator]();
        !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t);
        r = !0
      );
    } catch (u) {
      (i = !0), (o = u);
    } finally {
      try {
        r || null == s.return || s.return();
      } finally {
        if (i) throw o;
      }
    }
    return n;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
function _toConsumableArray(e) {
  return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _iterableToArray(e) {
  if (
    Symbol.iterator in Object(e) ||
    "[object Arguments]" === Object.prototype.toString.call(e)
  )
    return Array.from(e);
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
    return n;
  }
}
function isNativeReflectConstruct() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;
  try {
    return (
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {})),
      !0
    );
  } catch (e) {
    return !1;
  }
}
function _construct(e, t, n) {
  return (_construct = isNativeReflectConstruct()
    ? Reflect.construct
    : function (e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var i = new (Function.bind.apply(e, r))();
        return n && _setPrototypeOf(i, n.prototype), i;
      }).apply(null, arguments);
}
function _possibleConstructorReturn(e, t) {
  return !t || ("object" != typeof t && "function" != typeof t)
    ? _assertThisInitialized(e)
    : t;
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _get(e, t, n) {
  return (_get =
    "undefined" != typeof Reflect && Reflect.get
      ? Reflect.get
      : function (e, t, n) {
          var r = _superPropBase(e, t);
          if (r) {
            var i = Object.getOwnPropertyDescriptor(r, t);
            return i.get ? i.get.call(n) : i.value;
          }
        })(e, t, n || e);
}
function _superPropBase(e, t) {
  for (
    ;
    !Object.prototype.hasOwnProperty.call(e, t) &&
    null !== (e = _getPrototypeOf(e));

  );
  return e;
}
function _getPrototypeOf(e) {
  return (_getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function _inherits(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && _setPrototypeOf(e, t);
}
function _setPrototypeOf(e, t) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function _createClass(e, t, n) {
  return (
    t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
  );
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (e, t, n) {
      e.exports = n("zUnb");
    },
    crnd: function (e, t) {
      function n(e) {
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (e.exports = n),
        (n.id = "crnd");
    },
    zUnb: function (e, t, n) {
      "use strict";
      function r(e) {
        return "function" == typeof e;
      }
      n.r(t);
      var i = !1,
        o = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(e) {
            if (e) {
              var t = new Error();
              console.warn(
                "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                  t.stack
              );
            } else
              i &&
                console.log(
                  "RxJS: Back to a better error behavior. Thank you. <3"
                );
            i = e;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return i;
          },
        };
      function a(e) {
        setTimeout(function () {
          throw e;
        }, 0);
      }
      var s = {
          closed: !0,
          next: function (e) {},
          error: function (e) {
            if (o.useDeprecatedSynchronousErrorHandling) throw e;
            a(e);
          },
          complete: function () {},
        },
        u =
          Array.isArray ||
          function (e) {
            return e && "number" == typeof e.length;
          };
      function l(e) {
        return null !== e && "object" == typeof e;
      }
      var c,
        h = (function () {
          function e(e) {
            return (
              Error.call(this),
              (this.message = e
                ? ""
                    .concat(
                      e.length,
                      " errors occurred during unsubscription:\n"
                    )
                    .concat(
                      e
                        .map(function (e, t) {
                          return "".concat(t + 1, ") ").concat(e.toString());
                        })
                        .join("\n  ")
                    )
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = e),
              this
            );
          }
          return (e.prototype = Object.create(Error.prototype)), e;
        })(),
        f =
          (((c = (function () {
            function e(t) {
              _classCallCheck(this, e),
                (this.closed = !1),
                (this._parentOrParents = null),
                (this._subscriptions = null),
                t && (this._unsubscribe = t);
            }
            return (
              _createClass(e, [
                {
                  key: "unsubscribe",
                  value: function () {
                    var t;
                    if (!this.closed) {
                      var n = this._parentOrParents,
                        i = this._unsubscribe,
                        o = this._subscriptions;
                      if (
                        ((this.closed = !0),
                        (this._parentOrParents = null),
                        (this._subscriptions = null),
                        n instanceof e)
                      )
                        n.remove(this);
                      else if (null !== n)
                        for (var a = 0; a < n.length; ++a) n[a].remove(this);
                      if (r(i))
                        try {
                          i.call(this);
                        } catch (v) {
                          t = v instanceof h ? d(v.errors) : [v];
                        }
                      if (u(o))
                        for (var s = -1, c = o.length; ++s < c; ) {
                          var f = o[s];
                          if (l(f))
                            try {
                              f.unsubscribe();
                            } catch (v) {
                              (t = t || []),
                                v instanceof h
                                  ? (t = t.concat(d(v.errors)))
                                  : t.push(v);
                            }
                        }
                      if (t) throw new h(t);
                    }
                  },
                },
                {
                  key: "add",
                  value: function (t) {
                    var n = t;
                    if (!t) return e.EMPTY;
                    switch (typeof t) {
                      case "function":
                        n = new e(t);
                      case "object":
                        if (
                          n === this ||
                          n.closed ||
                          "function" != typeof n.unsubscribe
                        )
                          return n;
                        if (this.closed) return n.unsubscribe(), n;
                        if (!(n instanceof e)) {
                          var r = n;
                          (n = new e())._subscriptions = [r];
                        }
                        break;
                      default:
                        throw new Error(
                          "unrecognized teardown " +
                            t +
                            " added to Subscription."
                        );
                    }
                    var i = n._parentOrParents;
                    if (null === i) n._parentOrParents = this;
                    else if (i instanceof e) {
                      if (i === this) return n;
                      n._parentOrParents = [i, this];
                    } else {
                      if (-1 !== i.indexOf(this)) return n;
                      i.push(this);
                    }
                    var o = this._subscriptions;
                    return (
                      null === o ? (this._subscriptions = [n]) : o.push(n), n
                    );
                  },
                },
                {
                  key: "remove",
                  value: function (e) {
                    var t = this._subscriptions;
                    if (t) {
                      var n = t.indexOf(e);
                      -1 !== n && t.splice(n, 1);
                    }
                  },
                },
              ]),
              e
            );
          })()).EMPTY = (function (e) {
            return (e.closed = !0), e;
          })(new c())),
          c);
      function d(e) {
        return e.reduce(function (e, t) {
          return e.concat(t instanceof h ? t.errors : t);
        }, []);
      }
      var v =
          "function" == typeof Symbol
            ? Symbol("rxSubscriber")
            : "@@rxSubscriber_" + Math.random(),
        p = (function (e) {
          function t(e, n, r) {
            var i;
            switch (
              (_classCallCheck(this, t),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this)
              )).syncErrorValue = null),
              (i.syncErrorThrown = !1),
              (i.syncErrorThrowable = !1),
              (i.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                i.destination = s;
                break;
              case 1:
                if (!e) {
                  i.destination = s;
                  break;
                }
                if ("object" == typeof e) {
                  e instanceof t
                    ? ((i.syncErrorThrowable = e.syncErrorThrowable),
                      (i.destination = e),
                      e.add(_assertThisInitialized(i)))
                    : ((i.syncErrorThrowable = !0),
                      (i.destination = new y(_assertThisInitialized(i), e)));
                  break;
                }
              default:
                (i.syncErrorThrowable = !0),
                  (i.destination = new y(_assertThisInitialized(i), e, n, r));
            }
            return i;
          }
          return (
            _inherits(t, e),
            _createClass(
              t,
              [
                {
                  key: v,
                  value: function () {
                    return this;
                  },
                },
                {
                  key: "next",
                  value: function (e) {
                    this.isStopped || this._next(e);
                  },
                },
                {
                  key: "error",
                  value: function (e) {
                    this.isStopped || ((this.isStopped = !0), this._error(e));
                  },
                },
                {
                  key: "complete",
                  value: function () {
                    this.isStopped || ((this.isStopped = !0), this._complete());
                  },
                },
                {
                  key: "unsubscribe",
                  value: function () {
                    this.closed ||
                      ((this.isStopped = !0),
                      _get(
                        _getPrototypeOf(t.prototype),
                        "unsubscribe",
                        this
                      ).call(this));
                  },
                },
                {
                  key: "_next",
                  value: function (e) {
                    this.destination.next(e);
                  },
                },
                {
                  key: "_error",
                  value: function (e) {
                    this.destination.error(e), this.unsubscribe();
                  },
                },
                {
                  key: "_complete",
                  value: function () {
                    this.destination.complete(), this.unsubscribe();
                  },
                },
                {
                  key: "_unsubscribeAndRecycle",
                  value: function () {
                    var e = this._parentOrParents;
                    return (
                      (this._parentOrParents = null),
                      this.unsubscribe(),
                      (this.closed = !1),
                      (this.isStopped = !1),
                      (this._parentOrParents = e),
                      this
                    );
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function (e, n, r) {
                    var i = new t(e, n, r);
                    return (i.syncErrorThrowable = !1), i;
                  },
                },
              ]
            ),
            t
          );
        })(f),
        y = (function (e) {
          function t(e, n, i, o) {
            var a, u;
            _classCallCheck(this, t),
              ((a = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this)
              ))._parentSubscriber = e);
            var l = _assertThisInitialized(a);
            return (
              r(n)
                ? (u = n)
                : n &&
                  ((u = n.next),
                  (i = n.error),
                  (o = n.complete),
                  n !== s &&
                    (r((l = Object.create(n)).unsubscribe) &&
                      a.add(l.unsubscribe.bind(l)),
                    (l.unsubscribe = a.unsubscribe.bind(
                      _assertThisInitialized(a)
                    )))),
              (a._context = l),
              (a._next = u),
              (a._error = i),
              (a._complete = o),
              a
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "next",
                value: function (e) {
                  if (!this.isStopped && this._next) {
                    var t = this._parentSubscriber;
                    o.useDeprecatedSynchronousErrorHandling &&
                    t.syncErrorThrowable
                      ? this.__tryOrSetError(t, this._next, e) &&
                        this.unsubscribe()
                      : this.__tryOrUnsub(this._next, e);
                  }
                },
              },
              {
                key: "error",
                value: function (e) {
                  if (!this.isStopped) {
                    var t = this._parentSubscriber,
                      n = o.useDeprecatedSynchronousErrorHandling;
                    if (this._error)
                      n && t.syncErrorThrowable
                        ? (this.__tryOrSetError(t, this._error, e),
                          this.unsubscribe())
                        : (this.__tryOrUnsub(this._error, e),
                          this.unsubscribe());
                    else if (t.syncErrorThrowable)
                      n
                        ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0))
                        : a(e),
                        this.unsubscribe();
                    else {
                      if ((this.unsubscribe(), n)) throw e;
                      a(e);
                    }
                  }
                },
              },
              {
                key: "complete",
                value: function () {
                  var e = this;
                  if (!this.isStopped) {
                    var t = this._parentSubscriber;
                    if (this._complete) {
                      var n = function () {
                        return e._complete.call(e._context);
                      };
                      o.useDeprecatedSynchronousErrorHandling &&
                      t.syncErrorThrowable
                        ? (this.__tryOrSetError(t, n), this.unsubscribe())
                        : (this.__tryOrUnsub(n), this.unsubscribe());
                    } else this.unsubscribe();
                  }
                },
              },
              {
                key: "__tryOrUnsub",
                value: function (e, t) {
                  try {
                    e.call(this._context, t);
                  } catch (n) {
                    if (
                      (this.unsubscribe(),
                      o.useDeprecatedSynchronousErrorHandling)
                    )
                      throw n;
                    a(n);
                  }
                },
              },
              {
                key: "__tryOrSetError",
                value: function (e, t, n) {
                  if (!o.useDeprecatedSynchronousErrorHandling)
                    throw new Error("bad call");
                  try {
                    t.call(this._context, n);
                  } catch (r) {
                    return o.useDeprecatedSynchronousErrorHandling
                      ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
                      : (a(r), !0);
                  }
                  return !1;
                },
              },
              {
                key: "_unsubscribe",
                value: function () {
                  var e = this._parentSubscriber;
                  (this._context = null),
                    (this._parentSubscriber = null),
                    e.unsubscribe();
                },
              },
            ]),
            t
          );
        })(p),
        g =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable";
      function m() {}
      function _() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return k(t);
      }
      function k(e) {
        return e
          ? 1 === e.length
            ? e[0]
            : function (t) {
                return e.reduce(function (e, t) {
                  return t(e);
                }, t);
              }
          : m;
      }
      var C,
        b =
          (((C = (function () {
            function e(t) {
              _classCallCheck(this, e),
                (this._isScalar = !1),
                t && (this._subscribe = t);
            }
            return (
              _createClass(e, [
                {
                  key: "lift",
                  value: function (t) {
                    var n = new e();
                    return (n.source = this), (n.operator = t), n;
                  },
                },
                {
                  key: "subscribe",
                  value: function (e, t, n) {
                    var r = this.operator,
                      i = (function (e, t, n) {
                        if (e) {
                          if (e instanceof p) return e;
                          if (e[v]) return e[v]();
                        }
                        return e || t || n ? new p(e, t, n) : new p(s);
                      })(e, t, n);
                    if (
                      (i.add(
                        r
                          ? r.call(i, this.source)
                          : this.source ||
                            (o.useDeprecatedSynchronousErrorHandling &&
                              !i.syncErrorThrowable)
                          ? this._subscribe(i)
                          : this._trySubscribe(i)
                      ),
                      o.useDeprecatedSynchronousErrorHandling &&
                        i.syncErrorThrowable &&
                        ((i.syncErrorThrowable = !1), i.syncErrorThrown))
                    )
                      throw i.syncErrorValue;
                    return i;
                  },
                },
                {
                  key: "_trySubscribe",
                  value: function (e) {
                    try {
                      return this._subscribe(e);
                    } catch (t) {
                      o.useDeprecatedSynchronousErrorHandling &&
                        ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                        (function (e) {
                          for (; e; ) {
                            var t = e,
                              n = t.closed,
                              r = t.destination,
                              i = t.isStopped;
                            if (n || i) return !1;
                            e = r && r instanceof p ? r : null;
                          }
                          return !0;
                        })(e)
                          ? e.error(t)
                          : console.warn(t);
                    }
                  },
                },
                {
                  key: "forEach",
                  value: function (e, t) {
                    var n = this;
                    return new (t = w(t))(function (t, r) {
                      var i;
                      i = n.subscribe(
                        function (t) {
                          try {
                            e(t);
                          } catch (n) {
                            r(n), i && i.unsubscribe();
                          }
                        },
                        r,
                        t
                      );
                    });
                  },
                },
                {
                  key: "_subscribe",
                  value: function (e) {
                    var t = this.source;
                    return t && t.subscribe(e);
                  },
                },
                {
                  key: g,
                  value: function () {
                    return this;
                  },
                },
                {
                  key: "pipe",
                  value: function () {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    return 0 === t.length ? this : k(t)(this);
                  },
                },
                {
                  key: "toPromise",
                  value: function (e) {
                    var t = this;
                    return new (e = w(e))(function (e, n) {
                      var r;
                      t.subscribe(
                        function (e) {
                          return (r = e);
                        },
                        function (e) {
                          return n(e);
                        },
                        function () {
                          return e(r);
                        }
                      );
                    });
                  },
                },
              ]),
              e
            );
          })()).create = function (e) {
            return new C(e);
          }),
          C);
      function w(e) {
        if ((e || (e = o.Promise || Promise), !e))
          throw new Error("no Promise impl found");
        return e;
      }
      var S,
        E = (function () {
          function e() {
            return (
              Error.call(this),
              (this.message = "object unsubscribed"),
              (this.name = "ObjectUnsubscribedError"),
              this
            );
          }
          return (e.prototype = Object.create(Error.prototype)), e;
        })(),
        T = (function (e) {
          function t(e, n) {
            var r;
            return (
              _classCallCheck(this, t),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this)
              )).subject = e),
              (r.subscriber = n),
              (r.closed = !1),
              r
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "unsubscribe",
                value: function () {
                  if (!this.closed) {
                    this.closed = !0;
                    var e = this.subject,
                      t = e.observers;
                    if (
                      ((this.subject = null),
                      t && 0 !== t.length && !e.isStopped && !e.closed)
                    ) {
                      var n = t.indexOf(this.subscriber);
                      -1 !== n && t.splice(n, 1);
                    }
                  }
                },
              },
            ]),
            t
          );
        })(f),
        A = (function (e) {
          function t(e) {
            var n;
            return (
              _classCallCheck(this, t),
              ((n = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              )).destination = e),
              n
            );
          }
          return _inherits(t, e), t;
        })(p),
        x =
          (((S = (function (e) {
            function t() {
              var e;
              return (
                _classCallCheck(this, t),
                ((e = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(t).call(this)
                )).observers = []),
                (e.closed = !1),
                (e.isStopped = !1),
                (e.hasError = !1),
                (e.thrownError = null),
                e
              );
            }
            return (
              _inherits(t, e),
              _createClass(t, [
                {
                  key: v,
                  value: function () {
                    return new A(this);
                  },
                },
                {
                  key: "lift",
                  value: function (e) {
                    var t = new P(this, this);
                    return (t.operator = e), t;
                  },
                },
                {
                  key: "next",
                  value: function (e) {
                    if (this.closed) throw new E();
                    if (!this.isStopped)
                      for (
                        var t = this.observers,
                          n = t.length,
                          r = t.slice(),
                          i = 0;
                        i < n;
                        i++
                      )
                        r[i].next(e);
                  },
                },
                {
                  key: "error",
                  value: function (e) {
                    if (this.closed) throw new E();
                    (this.hasError = !0),
                      (this.thrownError = e),
                      (this.isStopped = !0);
                    for (
                      var t = this.observers,
                        n = t.length,
                        r = t.slice(),
                        i = 0;
                      i < n;
                      i++
                    )
                      r[i].error(e);
                    this.observers.length = 0;
                  },
                },
                {
                  key: "complete",
                  value: function () {
                    if (this.closed) throw new E();
                    this.isStopped = !0;
                    for (
                      var e = this.observers,
                        t = e.length,
                        n = e.slice(),
                        r = 0;
                      r < t;
                      r++
                    )
                      n[r].complete();
                    this.observers.length = 0;
                  },
                },
                {
                  key: "unsubscribe",
                  value: function () {
                    (this.isStopped = !0),
                      (this.closed = !0),
                      (this.observers = null);
                  },
                },
                {
                  key: "_trySubscribe",
                  value: function (e) {
                    if (this.closed) throw new E();
                    return _get(
                      _getPrototypeOf(t.prototype),
                      "_trySubscribe",
                      this
                    ).call(this, e);
                  },
                },
                {
                  key: "_subscribe",
                  value: function (e) {
                    if (this.closed) throw new E();
                    return this.hasError
                      ? (e.error(this.thrownError), f.EMPTY)
                      : this.isStopped
                      ? (e.complete(), f.EMPTY)
                      : (this.observers.push(e), new T(this, e));
                  },
                },
                {
                  key: "asObservable",
                  value: function () {
                    var e = new b();
                    return (e.source = this), e;
                  },
                },
              ]),
              t
            );
          })(b)).create = function (e, t) {
            return new P(e, t);
          }),
          S),
        P = (function (e) {
          function t(e, n) {
            var r;
            return (
              _classCallCheck(this, t),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this)
              )).destination = e),
              (r.source = n),
              r
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "next",
                value: function (e) {
                  var t = this.destination;
                  t && t.next && t.next(e);
                },
              },
              {
                key: "error",
                value: function (e) {
                  var t = this.destination;
                  t && t.error && this.destination.error(e);
                },
              },
              {
                key: "complete",
                value: function () {
                  var e = this.destination;
                  e && e.complete && this.destination.complete();
                },
              },
              {
                key: "_subscribe",
                value: function (e) {
                  return this.source ? this.source.subscribe(e) : f.EMPTY;
                },
              },
            ]),
            t
          );
        })(x);
      function O(e) {
        return e && "function" == typeof e.schedule;
      }
      var R = (function (e) {
          function t(e, n, r) {
            var i;
            return (
              _classCallCheck(this, t),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this)
              )).parent = e),
              (i.outerValue = n),
              (i.outerIndex = r),
              (i.index = 0),
              i
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "_next",
                value: function (e) {
                  this.parent.notifyNext(
                    this.outerValue,
                    e,
                    this.outerIndex,
                    this.index++,
                    this
                  );
                },
              },
              {
                key: "_error",
                value: function (e) {
                  this.parent.notifyError(e, this), this.unsubscribe();
                },
              },
              {
                key: "_complete",
                value: function () {
                  this.parent.notifyComplete(this), this.unsubscribe();
                },
              },
            ]),
            t
          );
        })(p),
        I = function (e) {
          return function (t) {
            for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
            t.complete();
          };
        };
      var N =
          "function" == typeof Symbol && Symbol.iterator
            ? Symbol.iterator
            : "@@iterator",
        D = function (e) {
          return e && "number" == typeof e.length && "function" != typeof e;
        };
      function j(e) {
        return (
          !!e && "function" != typeof e.subscribe && "function" == typeof e.then
        );
      }
      var F = function (e) {
        if (e && "function" == typeof e[g])
          return (
            (r = e),
            function (e) {
              var t = r[g]();
              if ("function" != typeof t.subscribe)
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              return t.subscribe(e);
            }
          );
        if (D(e)) return I(e);
        if (j(e))
          return (
            (n = e),
            function (e) {
              return (
                n
                  .then(
                    function (t) {
                      e.closed || (e.next(t), e.complete());
                    },
                    function (t) {
                      return e.error(t);
                    }
                  )
                  .then(null, a),
                e
              );
            }
          );
        if (e && "function" == typeof e[N])
          return (
            (t = e),
            function (e) {
              for (var n = t[N](); ; ) {
                var r = n.next();
                if (r.done) {
                  e.complete();
                  break;
                }
                if ((e.next(r.value), e.closed)) break;
              }
              return (
                "function" == typeof n.return &&
                  e.add(function () {
                    n.return && n.return();
                  }),
                e
              );
            }
          );
        var t,
          n,
          r,
          i = l(e) ? "an invalid object" : "'".concat(e, "'");
        throw new TypeError(
          "You provided ".concat(i, " where a stream was expected.") +
            " You can provide an Observable, Promise, Array, or Iterable."
        );
      };
      function L(e, t, n, r) {
        var i =
          arguments.length > 4 && void 0 !== arguments[4]
            ? arguments[4]
            : new R(e, n, r);
        if (!i.closed) return t instanceof b ? t.subscribe(i) : F(t)(i);
      }
      var U = (function (e) {
        function t() {
          return (
            _classCallCheck(this, t),
            _possibleConstructorReturn(
              this,
              _getPrototypeOf(t).apply(this, arguments)
            )
          );
        }
        return (
          _inherits(t, e),
          _createClass(t, [
            {
              key: "notifyNext",
              value: function (e, t, n, r, i) {
                this.destination.next(t);
              },
            },
            {
              key: "notifyError",
              value: function (e, t) {
                this.destination.error(e);
              },
            },
            {
              key: "notifyComplete",
              value: function (e) {
                this.destination.complete();
              },
            },
          ]),
          t
        );
      })(p);
      function V(e, t) {
        return function (n) {
          if ("function" != typeof e)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return n.lift(new M(e, t));
        };
      }
      var M = (function () {
          function e(t, n) {
            _classCallCheck(this, e), (this.project = t), (this.thisArg = n);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new H(e, this.project, this.thisArg));
                },
              },
            ]),
            e
          );
        })(),
        H = (function (e) {
          function t(e, n, r) {
            var i;
            return (
              _classCallCheck(this, t),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              )).project = n),
              (i.count = 0),
              (i.thisArg = r || _assertThisInitialized(i)),
              i
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "_next",
                value: function (e) {
                  var t;
                  try {
                    t = this.project.call(this.thisArg, e, this.count++);
                  } catch (n) {
                    return void this.destination.error(n);
                  }
                  this.destination.next(t);
                },
              },
            ]),
            t
          );
        })(p);
      function z(e, t) {
        return new b(function (n) {
          var r = new f(),
            i = 0;
          return (
            r.add(
              t.schedule(function () {
                i !== e.length
                  ? (n.next(e[i++]), n.closed || r.add(this.schedule()))
                  : n.complete();
              })
            ),
            r
          );
        });
      }
      function q(e, t) {
        return t
          ? (function (e, t) {
              if (null != e) {
                if (
                  (function (e) {
                    return e && "function" == typeof e[g];
                  })(e)
                )
                  return (function (e, t) {
                    return new b(function (n) {
                      var r = new f();
                      return (
                        r.add(
                          t.schedule(function () {
                            var i = e[g]();
                            r.add(
                              i.subscribe({
                                next: function (e) {
                                  r.add(
                                    t.schedule(function () {
                                      return n.next(e);
                                    })
                                  );
                                },
                                error: function (e) {
                                  r.add(
                                    t.schedule(function () {
                                      return n.error(e);
                                    })
                                  );
                                },
                                complete: function () {
                                  r.add(
                                    t.schedule(function () {
                                      return n.complete();
                                    })
                                  );
                                },
                              })
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(e, t);
                if (j(e))
                  return (function (e, t) {
                    return new b(function (n) {
                      var r = new f();
                      return (
                        r.add(
                          t.schedule(function () {
                            return e.then(
                              function (e) {
                                r.add(
                                  t.schedule(function () {
                                    n.next(e),
                                      r.add(
                                        t.schedule(function () {
                                          return n.complete();
                                        })
                                      );
                                  })
                                );
                              },
                              function (e) {
                                r.add(
                                  t.schedule(function () {
                                    return n.error(e);
                                  })
                                );
                              }
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(e, t);
                if (D(e)) return z(e, t);
                if (
                  (function (e) {
                    return e && "function" == typeof e[N];
                  })(e) ||
                  "string" == typeof e
                )
                  return (function (e, t) {
                    if (!e) throw new Error("Iterable cannot be null");
                    return new b(function (n) {
                      var r,
                        i = new f();
                      return (
                        i.add(function () {
                          r && "function" == typeof r.return && r.return();
                        }),
                        i.add(
                          t.schedule(function () {
                            (r = e[N]()),
                              i.add(
                                t.schedule(function () {
                                  if (!n.closed) {
                                    var e, t;
                                    try {
                                      var i = r.next();
                                      (e = i.value), (t = i.done);
                                    } catch (o) {
                                      return void n.error(o);
                                    }
                                    t
                                      ? n.complete()
                                      : (n.next(e), this.schedule());
                                  }
                                })
                              );
                          })
                        ),
                        i
                      );
                    });
                  })(e, t);
              }
              throw new TypeError(
                ((null !== e && typeof e) || e) + " is not observable"
              );
            })(e, t)
          : e instanceof b
          ? e
          : new b(F(e));
      }
      function B(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : Number.POSITIVE_INFINITY;
        return "function" == typeof t
          ? function (r) {
              return r.pipe(
                B(function (n, r) {
                  return q(e(n, r)).pipe(
                    V(function (e, i) {
                      return t(n, e, r, i);
                    })
                  );
                }, n)
              );
            }
          : ("number" == typeof t && (n = t),
            function (t) {
              return t.lift(new W(e, n));
            });
      }
      var W = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Number.POSITIVE_INFINITY;
            _classCallCheck(this, e), (this.project = t), (this.concurrent = n);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new Q(e, this.project, this.concurrent));
                },
              },
            ]),
            e
          );
        })(),
        Q = (function (e) {
          function t(e, n) {
            var r,
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : Number.POSITIVE_INFINITY;
            return (
              _classCallCheck(this, t),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              )).project = n),
              (r.concurrent = i),
              (r.hasCompleted = !1),
              (r.buffer = []),
              (r.active = 0),
              (r.index = 0),
              r
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "_next",
                value: function (e) {
                  this.active < this.concurrent
                    ? this._tryNext(e)
                    : this.buffer.push(e);
                },
              },
              {
                key: "_tryNext",
                value: function (e) {
                  var t,
                    n = this.index++;
                  try {
                    t = this.project(e, n);
                  } catch (r) {
                    return void this.destination.error(r);
                  }
                  this.active++, this._innerSub(t, e, n);
                },
              },
              {
                key: "_innerSub",
                value: function (e, t, n) {
                  var r = new R(this, t, n),
                    i = this.destination;
                  i.add(r);
                  var o = L(this, e, void 0, void 0, r);
                  o !== r && i.add(o);
                },
              },
              {
                key: "_complete",
                value: function () {
                  (this.hasCompleted = !0),
                    0 === this.active &&
                      0 === this.buffer.length &&
                      this.destination.complete(),
                    this.unsubscribe();
                },
              },
              {
                key: "notifyNext",
                value: function (e, t, n, r, i) {
                  this.destination.next(t);
                },
              },
              {
                key: "notifyComplete",
                value: function (e) {
                  var t = this.buffer;
                  this.remove(e),
                    this.active--,
                    t.length > 0
                      ? this._next(t.shift())
                      : 0 === this.active &&
                        this.hasCompleted &&
                        this.destination.complete();
                },
              },
            ]),
            t
          );
        })(U);
      function K(e) {
        return e;
      }
      function Z() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : Number.POSITIVE_INFINITY;
        return B(K, e);
      }
      function G(e, t) {
        return t ? z(e, t) : new b(I(e));
      }
      function $() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var r = Number.POSITIVE_INFINITY,
          i = null,
          o = t[t.length - 1];
        return (
          O(o)
            ? ((i = t.pop()),
              t.length > 1 &&
                "number" == typeof t[t.length - 1] &&
                (r = t.pop()))
            : "number" == typeof o && (r = t.pop()),
          null === i && 1 === t.length && t[0] instanceof b
            ? t[0]
            : Z(r)(G(t, i))
        );
      }
      function J() {
        return function (e) {
          return e.lift(new X(e));
        };
      }
      var Y,
        X = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.connectable = t);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  var n = this.connectable;
                  n._refCount++;
                  var r = new ee(e, n),
                    i = t.subscribe(r);
                  return r.closed || (r.connection = n.connect()), i;
                },
              },
            ]),
            e
          );
        })(),
        ee = (function (e) {
          function t(e, n) {
            var r;
            return (
              _classCallCheck(this, t),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              )).connectable = n),
              r
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "_unsubscribe",
                value: function () {
                  var e = this.connectable;
                  if (e) {
                    this.connectable = null;
                    var t = e._refCount;
                    if (t <= 0) this.connection = null;
                    else if (((e._refCount = t - 1), t > 1))
                      this.connection = null;
                    else {
                      var n = this.connection,
                        r = e._connection;
                      (this.connection = null),
                        !r || (n && r !== n) || r.unsubscribe();
                    }
                  } else this.connection = null;
                },
              },
            ]),
            t
          );
        })(p),
        te = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: {
            value: (Y = (function (e) {
              function t(e, n) {
                var r;
                return (
                  _classCallCheck(this, t),
                  ((r = _possibleConstructorReturn(
                    this,
                    _getPrototypeOf(t).call(this)
                  )).source = e),
                  (r.subjectFactory = n),
                  (r._refCount = 0),
                  (r._isComplete = !1),
                  r
                );
              }
              return (
                _inherits(t, e),
                _createClass(t, [
                  {
                    key: "_subscribe",
                    value: function (e) {
                      return this.getSubject().subscribe(e);
                    },
                  },
                  {
                    key: "getSubject",
                    value: function () {
                      var e = this._subject;
                      return (
                        (e && !e.isStopped) ||
                          (this._subject = this.subjectFactory()),
                        this._subject
                      );
                    },
                  },
                  {
                    key: "connect",
                    value: function () {
                      var e = this._connection;
                      return (
                        e ||
                          ((this._isComplete = !1),
                          (e = this._connection = new f()).add(
                            this.source.subscribe(
                              new ne(this.getSubject(), this)
                            )
                          ),
                          e.closed &&
                            ((this._connection = null), (e = f.EMPTY))),
                        e
                      );
                    },
                  },
                  {
                    key: "refCount",
                    value: function () {
                      return J()(this);
                    },
                  },
                ]),
                t
              );
            })(b).prototype)._subscribe,
          },
          _isComplete: { value: Y._isComplete, writable: !0 },
          getSubject: { value: Y.getSubject },
          connect: { value: Y.connect },
          refCount: { value: Y.refCount },
        },
        ne = (function (e) {
          function t(e, n) {
            var r;
            return (
              _classCallCheck(this, t),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              )).connectable = n),
              r
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "_error",
                value: function (e) {
                  this._unsubscribe(),
                    _get(_getPrototypeOf(t.prototype), "_error", this).call(
                      this,
                      e
                    );
                },
              },
              {
                key: "_complete",
                value: function () {
                  (this.connectable._isComplete = !0),
                    this._unsubscribe(),
                    _get(_getPrototypeOf(t.prototype), "_complete", this).call(
                      this
                    );
                },
              },
              {
                key: "_unsubscribe",
                value: function () {
                  var e = this.connectable;
                  if (e) {
                    this.connectable = null;
                    var t = e._connection;
                    (e._refCount = 0),
                      (e._subject = null),
                      (e._connection = null),
                      t && t.unsubscribe();
                  }
                },
              },
            ]),
            t
          );
        })(A);
      function re(e, t) {
        return function (n) {
          var r;
          if (
            ((r =
              "function" == typeof e
                ? e
                : function () {
                    return e;
                  }),
            "function" == typeof t)
          )
            return n.lift(new ie(r, t));
          var i = Object.create(n, te);
          return (i.source = n), (i.subjectFactory = r), i;
        };
      }
      var ie = (function () {
        function e(t, n) {
          _classCallCheck(this, e),
            (this.subjectFactory = t),
            (this.selector = n);
        }
        return (
          _createClass(e, [
            {
              key: "call",
              value: function (e, t) {
                var n = this.selector,
                  r = this.subjectFactory(),
                  i = n(r).subscribe(e);
                return i.add(t.subscribe(r)), i;
              },
            },
          ]),
          e
        );
      })();
      function oe() {
        return new x();
      }
      function ae(e, t, n) {
        var r = (function (e) {
          return function () {
            if (e) {
              var t = e.apply(void 0, arguments);
              for (var n in t) this[n] = t[n];
            }
          };
        })(t);
        function i() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          if (this instanceof i) return r.apply(this, t), this;
          var o = _construct(i, t);
          return (a.annotation = o), a;
          function a(e, t, n) {
            for (
              var r = e.hasOwnProperty("__parameters__")
                ? e.__parameters__
                : Object.defineProperty(e, "__parameters__", { value: [] })
                    .__parameters__;
              r.length <= n;

            )
              r.push(null);
            return (r[n] = r[n] || []).push(o), e;
          }
        }
        return (
          n && (i.prototype = Object.create(n.prototype)),
          (i.prototype.ngMetadataName = e),
          (i.annotationCls = i),
          i
        );
      }
      var se = ae("Inject", function (e) {
          return { token: e };
        }),
        ue = ae("Optional"),
        le = ae("Self"),
        ce = ae("SkipSelf"),
        he = (function (e) {
          return (
            (e[(e.Default = 0)] = "Default"),
            (e[(e.Host = 1)] = "Host"),
            (e[(e.Self = 2)] = "Self"),
            (e[(e.SkipSelf = 4)] = "SkipSelf"),
            (e[(e.Optional = 8)] = "Optional"),
            e
          );
        })({});
      function fe(e) {
        for (var t in e) if (e[t] === fe) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function de(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function ve(e) {
        return {
          factory: e.factory,
          providers: e.providers || [],
          imports: e.imports || [],
        };
      }
      function pe(e) {
        return ye(e, e[me]) || ye(e, e[Ce]);
      }
      function ye(e, t) {
        return t && t.token === e ? t : null;
      }
      function ge(e) {
        return e && (e.hasOwnProperty(_e) || e.hasOwnProperty(be))
          ? e[_e]
          : null;
      }
      var me = fe({ "\u0275prov": fe }),
        _e = fe({ "\u0275inj": fe }),
        ke = fe({ "\u0275provFallback": fe }),
        Ce = fe({ ngInjectableDef: fe }),
        be = fe({ ngInjectorDef: fe });
      function we(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map(we).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return "".concat(e.overriddenName);
        if (e.name) return "".concat(e.name);
        var t = e.toString();
        if (null == t) return "" + t;
        var n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      function Se(e, t) {
        return null == e || "" === e
          ? null === t
            ? ""
            : t
          : null == t || "" === t
          ? e
          : e + " " + t;
      }
      var Ee = fe({ __forward_ref__: fe });
      function Te(e) {
        return (
          (e.__forward_ref__ = Te),
          (e.toString = function () {
            return we(this());
          }),
          e
        );
      }
      function Ae(e) {
        return "function" == typeof (t = e) &&
          t.hasOwnProperty(Ee) &&
          t.__forward_ref__ === Te
          ? e()
          : e;
        var t;
      }
      var xe,
        Pe = "undefined" != typeof globalThis && globalThis,
        Oe = "undefined" != typeof window && window,
        Re =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        Ie = "undefined" != typeof global && global,
        Ne = Pe || Ie || Oe || Re,
        De = fe({ "\u0275cmp": fe }),
        je = fe({ "\u0275dir": fe }),
        Fe = fe({ "\u0275pipe": fe }),
        Le = fe({ "\u0275mod": fe }),
        Ue = fe({ "\u0275loc": fe }),
        Ve = fe({ "\u0275fac": fe }),
        Me = fe({ __NG_ELEMENT_ID__: fe }),
        He = (function () {
          function e(t, n) {
            _classCallCheck(this, e),
              (this._desc = t),
              (this.ngMetadataName = "InjectionToken"),
              (this.ɵprov = void 0),
              "number" == typeof n
                ? (this.__NG_ELEMENT_ID__ = n)
                : void 0 !== n &&
                  (this.ɵprov = de({
                    token: this,
                    providedIn: n.providedIn || "root",
                    factory: n.factory,
                  }));
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return "InjectionToken ".concat(this._desc);
                },
              },
            ]),
            e
          );
        })(),
        ze = new He("INJECTOR", -1),
        qe = {},
        Be = /\n/gm,
        We = fe({ provide: String, useValue: fe }),
        Qe = void 0;
      function Ke(e) {
        var t = Qe;
        return (Qe = e), t;
      }
      function Ze(e) {
        var t = xe;
        return (xe = e), t;
      }
      function Ge(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : he.Default;
        if (void 0 === Qe)
          throw new Error("inject() must be called from an injection context");
        return null === Qe
          ? Je(e, void 0, t)
          : Qe.get(e, t & he.Optional ? null : void 0, t);
      }
      function $e(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : he.Default;
        return (xe || Ge)(Ae(e), t);
      }
      function Je(e, t, n) {
        var r = pe(e);
        if (r && "root" == r.providedIn)
          return void 0 === r.value ? (r.value = r.factory()) : r.value;
        if (n & he.Optional) return null;
        if (void 0 !== t) return t;
        throw new Error("Injector: NOT_FOUND [".concat(we(e), "]"));
      }
      function Ye(e) {
        for (var t = [], n = 0; n < e.length; n++) {
          var r = Ae(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length)
              throw new Error("Arguments array must have arguments.");
            for (var i = void 0, o = he.Default, a = 0; a < r.length; a++) {
              var s = r[a];
              s instanceof ue || "Optional" === s.ngMetadataName || s === ue
                ? (o |= he.Optional)
                : s instanceof ce || "SkipSelf" === s.ngMetadataName || s === ce
                ? (o |= he.SkipSelf)
                : s instanceof le || "Self" === s.ngMetadataName || s === le
                ? (o |= he.Self)
                : (i = s instanceof se || s === se ? s.token : s);
            }
            t.push($e(i, o));
          } else t.push($e(r));
        }
        return t;
      }
      var Xe = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "get",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : qe;
                  if (t === qe) {
                    var n = new Error(
                      "NullInjectorError: No provider for ".concat(we(e), "!")
                    );
                    throw ((n.name = "NullInjectorError"), n);
                  }
                  return t;
                },
              },
            ]),
            e
          );
        })(),
        et = function e() {
          _classCallCheck(this, e);
        },
        tt = function e() {
          _classCallCheck(this, e);
        };
      function nt(e, t) {
        e.forEach(function (e) {
          return Array.isArray(e) ? nt(e, t) : t(e);
        });
      }
      function rt(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function it(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      var ot = (function () {
          var e = { OnPush: 0, Default: 1 };
          return (e[e.OnPush] = "OnPush"), (e[e.Default] = "Default"), e;
        })(),
        at = (function () {
          var e = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (e[e.Emulated] = "Emulated"),
            (e[e.Native] = "Native"),
            (e[e.None] = "None"),
            (e[e.ShadowDom] = "ShadowDom"),
            e
          );
        })();
      function st(e) {
        return "" + { toString: e };
      }
      var ut = {},
        lt = [],
        ct = 0;
      function ht(e) {
        var t = e.type,
          n = t.prototype,
          r = {},
          i = {
            type: t,
            providersResolver: null,
            decls: e.decls,
            vars: e.vars,
            factory: null,
            template: e.template || null,
            consts: e.consts || null,
            ngContentSelectors: e.ngContentSelectors,
            hostBindings: e.hostBindings || null,
            hostVars: e.hostVars || 0,
            hostAttrs: e.hostAttrs || null,
            contentQueries: e.contentQueries || null,
            declaredInputs: r,
            inputs: null,
            outputs: null,
            exportAs: e.exportAs || null,
            onChanges: null,
            onInit: n.ngOnInit || null,
            doCheck: n.ngDoCheck || null,
            afterContentInit: n.ngAfterContentInit || null,
            afterContentChecked: n.ngAfterContentChecked || null,
            afterViewInit: n.ngAfterViewInit || null,
            afterViewChecked: n.ngAfterViewChecked || null,
            onDestroy: n.ngOnDestroy || null,
            onPush: e.changeDetection === ot.OnPush,
            directiveDefs: null,
            pipeDefs: null,
            selectors: e.selectors || lt,
            viewQuery: e.viewQuery || null,
            features: e.features || null,
            data: e.data || {},
            encapsulation: e.encapsulation || at.Emulated,
            id: "c",
            styles: e.styles || lt,
            _: null,
            setInput: null,
            schemas: e.schemas || null,
            tView: null,
          };
        return (
          (i._ = st(function () {
            var t = e.directives,
              n = e.features,
              o = e.pipes;
            (i.id += ct++),
              (i.inputs = yt(e.inputs, r)),
              (i.outputs = yt(e.outputs)),
              n &&
                n.forEach(function (e) {
                  return e(i);
                }),
              (i.directiveDefs = t
                ? function () {
                    return ("function" == typeof t ? t() : t).map(ft);
                  }
                : null),
              (i.pipeDefs = o
                ? function () {
                    return ("function" == typeof o ? o() : o).map(dt);
                  }
                : null);
          })),
          i
        );
      }
      function ft(e) {
        return (
          mt(e) ||
          (function (e) {
            return e[je] || null;
          })(e)
        );
      }
      function dt(e) {
        return (function (e) {
          return e[Fe] || null;
        })(e);
      }
      var vt = {};
      function pt(e) {
        var t = {
          type: e.type,
          bootstrap: e.bootstrap || lt,
          declarations: e.declarations || lt,
          imports: e.imports || lt,
          exports: e.exports || lt,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        };
        return (
          null != e.id &&
            st(function () {
              vt[e.id] = e.type;
            }),
          t
        );
      }
      function yt(e, t) {
        if (null == e) return ut;
        var n = {};
        for (var r in e)
          if (e.hasOwnProperty(r)) {
            var i = e[r],
              o = i;
            Array.isArray(i) && ((o = i[1]), (i = i[0])),
              (n[i] = r),
              t && (t[i] = o);
          }
        return n;
      }
      var gt = ht;
      function mt(e) {
        return e[De] || null;
      }
      function _t(e, t) {
        return e.hasOwnProperty(Ve) ? e[Ve] : null;
      }
      function kt(e, t) {
        var n = e[Le] || null;
        if (!n && !0 === t)
          throw new Error(
            "Type ".concat(we(e), " does not have '\u0275mod' property.")
          );
        return n;
      }
      function Ct(e) {
        return Array.isArray(e) && "object" == typeof e[1];
      }
      function bt(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function wt(e) {
        return 0 != (8 & e.flags);
      }
      function St(e) {
        return 2 == (2 & e.flags);
      }
      function Et(e) {
        return 1 == (1 & e.flags);
      }
      function Tt(e) {
        return null !== e.template;
      }
      function At(e) {
        return 0 != (512 & e[2]);
      }
      var xt = {
        lFrame: Wt(null),
        bindingsEnabled: !0,
        checkNoChangesMode: !1,
      };
      function Pt() {
        return xt.bindingsEnabled;
      }
      function Ot() {
        return xt.lFrame.lView;
      }
      function Rt() {
        return xt.lFrame.tView;
      }
      function It() {
        return xt.lFrame.previousOrParentTNode;
      }
      function Nt(e, t) {
        (xt.lFrame.previousOrParentTNode = e), (xt.lFrame.isParent = t);
      }
      function Dt() {
        return xt.lFrame.isParent;
      }
      function jt() {
        return xt.checkNoChangesMode;
      }
      function Ft(e) {
        xt.checkNoChangesMode = e;
      }
      function Lt() {
        var e = xt.lFrame,
          t = e.bindingRootIndex;
        return (
          -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        );
      }
      function Ut() {
        return xt.lFrame.bindingIndex++;
      }
      function Vt(e, t) {
        var n = xt.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e),
          (n.currentDirectiveIndex = t);
      }
      function Mt(e) {
        xt.lFrame.currentQueryIndex = e;
      }
      function Ht(e, t) {
        var n = Bt();
        (xt.lFrame = n), (n.previousOrParentTNode = t), (n.lView = e);
      }
      var zt = Qt;
      function qt(e, t) {
        var n = Bt(),
          r = e[1];
        (xt.lFrame = n),
          (n.previousOrParentTNode = t),
          (n.isParent = !0),
          (n.lView = e),
          (n.tView = r),
          (n.selectedIndex = 0),
          (n.contextLView = e),
          (n.elementDepthCount = 0),
          (n.currentDirectiveIndex = -1),
          (n.currentNamespace = null),
          (n.currentSanitizer = null),
          (n.bindingRootIndex = -1),
          (n.bindingIndex = r.bindingStartIndex),
          (n.currentQueryIndex = 0);
      }
      function Bt() {
        var e = xt.lFrame,
          t = null === e ? null : e.child;
        return null === t ? Wt(e) : t;
      }
      function Wt(e) {
        var t = {
          previousOrParentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: 0,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentSanitizer: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
        };
        return null !== e && (e.child = t), t;
      }
      function Qt() {
        xt.lFrame = xt.lFrame.parent;
      }
      function Kt() {
        return xt.lFrame.selectedIndex;
      }
      function Zt(e) {
        xt.lFrame.selectedIndex = e;
      }
      function Gt(e, t) {
        for (var n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          var i = e.data[n];
          i.afterContentInit &&
            (e.contentHooks || (e.contentHooks = [])).push(
              -n,
              i.afterContentInit
            ),
            i.afterContentChecked &&
              ((e.contentHooks || (e.contentHooks = [])).push(
                n,
                i.afterContentChecked
              ),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(
                n,
                i.afterContentChecked
              )),
            i.afterViewInit &&
              (e.viewHooks || (e.viewHooks = [])).push(-n, i.afterViewInit),
            i.afterViewChecked &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, i.afterViewChecked),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(
                n,
                i.afterViewChecked
              )),
            null != i.onDestroy &&
              (e.destroyHooks || (e.destroyHooks = [])).push(n, i.onDestroy);
        }
      }
      function $t(e, t, n) {
        Xt(e, t, 3, n);
      }
      function Jt(e, t, n, r) {
        (3 & e[2]) === n && Xt(e, t, n, r);
      }
      function Yt(e, t) {
        var n = e[2];
        (3 & n) === t && ((n &= 1023), (n += 1), (e[2] = n));
      }
      function Xt(e, t, n, r) {
        for (
          var i = null != r ? r : -1,
            o = 0,
            a = void 0 !== r ? 65535 & e[18] : 0;
          a < t.length;
          a++
        )
          if ("number" == typeof t[a + 1]) {
            if (((o = t[a]), null != r && o >= r)) break;
          } else
            t[a] < 0 && (e[18] += 65536),
              (o < i || -1 == i) &&
                (en(e, n, t, a), (e[18] = (4294901760 & e[18]) + a + 2)),
              a++;
      }
      function en(e, t, n, r) {
        var i = n[r] < 0,
          o = n[r + 1],
          a = e[i ? -n[r] : n[r]];
        i
          ? e[2] >> 10 < e[18] >> 16 &&
            (3 & e[2]) === t &&
            ((e[2] += 1024), o.call(a))
          : o.call(a);
      }
      var tn = function e(t, n, r) {
          _classCallCheck(this, e),
            (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        },
        nn = void 0;
      function rn(e) {
        return !!e.listen;
      }
      var on = {
        createRenderer: function (e, t) {
          return void 0 !== nn
            ? nn
            : "undefined" != typeof document
            ? document
            : void 0;
        },
      };
      function an(e, t, n) {
        for (var r = rn(e), i = 0; i < n.length; ) {
          var o = n[i];
          if ("number" == typeof o) {
            if (0 !== o) break;
            i++;
            var a = n[i++],
              s = n[i++],
              u = n[i++];
            r ? e.setAttribute(t, s, u, a) : t.setAttributeNS(a, s, u);
          } else {
            var l = o,
              c = n[++i];
            un(l)
              ? r && e.setProperty(t, l, c)
              : r
              ? e.setAttribute(t, l, c)
              : t.setAttribute(l, c),
              i++;
          }
        }
        return i;
      }
      function sn(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function un(e) {
        return 64 === e.charCodeAt(0);
      }
      function ln(e, t) {
        if (null === t || 0 === t.length);
        else if (null === e || 0 === e.length) e = t.slice();
        else
          for (var n = -1, r = 0; r < t.length; r++) {
            var i = t[r];
            "number" == typeof i
              ? (n = i)
              : 0 === n ||
                cn(e, n, i, null, -1 === n || 2 === n ? t[++r] : null);
          }
        return e;
      }
      function cn(e, t, n, r, i) {
        var o = 0,
          a = e.length;
        if (-1 === t) a = -1;
        else
          for (; o < e.length; ) {
            var s = e[o++];
            if ("number" == typeof s) {
              if (s === t) {
                a = -1;
                break;
              }
              if (s > t) {
                a = o - 1;
                break;
              }
            }
          }
        for (; o < e.length; ) {
          var u = e[o];
          if ("number" == typeof u) break;
          if (u === n) {
            if (null === r) return void (null !== i && (e[o + 1] = i));
            if (r === e[o + 1]) return void (e[o + 2] = i);
          }
          o++, null !== r && o++, null !== i && o++;
        }
        -1 !== a && (e.splice(a, 0, t), (o = a + 1)),
          e.splice(o++, 0, n),
          null !== r && e.splice(o++, 0, r),
          null !== i && e.splice(o++, 0, i);
      }
      function hn(e) {
        return -1 !== e;
      }
      function fn(e) {
        return 32767 & e;
      }
      function dn(e) {
        return e >> 16;
      }
      function vn(e, t) {
        for (var n = dn(e), r = t; n > 0; ) (r = r[15]), n--;
        return r;
      }
      function pn(e) {
        return "string" == typeof e ? e : null == e ? "" : "" + e;
      }
      function yn(e) {
        return "function" == typeof e
          ? e.name || e.toString()
          : "object" == typeof e && null != e && "function" == typeof e.type
          ? e.type.name || e.type.toString()
          : pn(e);
      }
      var gn = (
        ("undefined" != typeof requestAnimationFrame &&
          requestAnimationFrame) ||
        setTimeout
      ).bind(Ne);
      function mn(e) {
        return e instanceof Function ? e() : e;
      }
      var _n = !0;
      function kn(e) {
        var t = _n;
        return (_n = e), t;
      }
      var Cn = 0;
      function bn(e, t) {
        var n = Sn(e, t);
        if (-1 !== n) return n;
        var r = t[1];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          wn(r.data, e),
          wn(t, null),
          wn(r.blueprint, null));
        var i = En(e, t),
          o = e.injectorIndex;
        if (hn(i))
          for (var a = fn(i), s = vn(i, t), u = s[1].data, l = 0; l < 8; l++)
            t[o + l] = s[a + l] | u[a + l];
        return (t[o + 8] = i), o;
      }
      function wn(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function Sn(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null == t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function En(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        for (var n = t[6], r = 1; n && -1 === n.injectorIndex; )
          (n = (t = t[15]) ? t[6] : null), r++;
        return n ? n.injectorIndex | (r << 16) : -1;
      }
      function Tn(e, t, n) {
        !(function (e, t, n) {
          var r = "string" != typeof n ? n[Me] : n.charCodeAt(0) || 0;
          null == r && (r = n[Me] = Cn++);
          var i = 255 & r,
            o = 1 << i,
            a = 64 & i,
            s = 32 & i,
            u = t.data;
          128 & i
            ? a
              ? s
                ? (u[e + 7] |= o)
                : (u[e + 6] |= o)
              : s
              ? (u[e + 5] |= o)
              : (u[e + 4] |= o)
            : a
            ? s
              ? (u[e + 3] |= o)
              : (u[e + 2] |= o)
            : s
            ? (u[e + 1] |= o)
            : (u[e] |= o);
        })(e, t, n);
      }
      function An(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : he.Default,
          i = arguments.length > 4 ? arguments[4] : void 0;
        if (null !== e) {
          var o = (function (e) {
            if ("string" == typeof e) return e.charCodeAt(0) || 0;
            var t = e[Me];
            return "number" == typeof t && t > 0 ? 255 & t : t;
          })(n);
          if ("function" == typeof o) {
            Ht(t, e);
            try {
              var a = o();
              if (null != a || r & he.Optional) return a;
              throw new Error("No provider for ".concat(yn(n), "!"));
            } finally {
              zt();
            }
          } else if ("number" == typeof o) {
            if (-1 === o) return new Nn(e, t);
            var s = null,
              u = Sn(e, t),
              l = -1,
              c = r & he.Host ? t[16][6] : null;
            for (
              (-1 === u || r & he.SkipSelf) &&
              ((l = -1 === u ? En(e, t) : t[u + 8]),
              In(r, !1) ? ((s = t[1]), (u = fn(l)), (t = vn(l, t))) : (u = -1));
              -1 !== u;

            ) {
              l = t[u + 8];
              var h = t[1];
              if (Rn(o, u, h.data)) {
                var f = Pn(u, t, n, s, r, c);
                if (f !== xn) return f;
              }
              In(r, t[1].data[u + 8] === c) && Rn(o, u, t)
                ? ((s = h), (u = fn(l)), (t = vn(l, t)))
                : (u = -1);
            }
          }
        }
        if (
          (r & he.Optional && void 0 === i && (i = null),
          0 == (r & (he.Self | he.Host)))
        ) {
          var d = t[9],
            v = Ze(void 0);
          try {
            return d ? d.get(n, i, r & he.Optional) : Je(n, i, r & he.Optional);
          } finally {
            Ze(v);
          }
        }
        if (r & he.Optional) return i;
        throw new Error("NodeInjector: NOT_FOUND [".concat(yn(n), "]"));
      }
      var xn = {};
      function Pn(e, t, n, r, i, o) {
        var a = t[1],
          s = a.data[e + 8],
          u = (function (e, t, n, r, i) {
            for (
              var o = e.providerIndexes,
                a = t.data,
                s = 65535 & o,
                u = e.directiveStart,
                l = o >> 16,
                c = i ? s + l : e.directiveEnd,
                h = r ? s : s + l;
              h < c;
              h++
            ) {
              var f = a[h];
              if ((h < u && n === f) || (h >= u && f.type === n)) return h;
            }
            if (i) {
              var d = a[u];
              if (d && Tt(d) && d.type === n) return u;
            }
            return null;
          })(
            s,
            a,
            n,
            null == r ? St(s) && _n : r != a && 3 === s.type,
            i & he.Host && o === s
          );
        return null !== u ? On(t, a, u, s) : xn;
      }
      function On(e, t, n, r) {
        var i = e[n],
          o = t.data;
        if (i instanceof tn) {
          var a = i;
          if (a.resolving)
            throw new Error("Circular dep for ".concat(yn(o[n])));
          var s,
            u = kn(a.canSeeViewProviders);
          (a.resolving = !0), a.injectImpl && (s = Ze(a.injectImpl)), Ht(e, r);
          try {
            (i = e[n] = a.factory(void 0, o, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function (e, t, n) {
                  var r = t.onChanges,
                    i = t.onInit,
                    o = t.doCheck;
                  r &&
                    ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, r),
                    (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(
                      e,
                      r
                    )),
                    i &&
                      (n.preOrderHooks || (n.preOrderHooks = [])).push(-e, i),
                    o &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, o),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, o));
                })(n, o[n], t);
          } finally {
            a.injectImpl && Ze(s), kn(u), (a.resolving = !1), zt();
          }
        }
        return i;
      }
      function Rn(e, t, n) {
        var r = 64 & e,
          i = 32 & e;
        return !!(
          (128 & e
            ? r
              ? i
                ? n[t + 7]
                : n[t + 6]
              : i
              ? n[t + 5]
              : n[t + 4]
            : r
            ? i
              ? n[t + 3]
              : n[t + 2]
            : i
            ? n[t + 1]
            : n[t]) &
          (1 << e)
        );
      }
      function In(e, t) {
        return !(e & he.Self || (e & he.Host && t));
      }
      var Nn = (function () {
        function e(t, n) {
          _classCallCheck(this, e), (this._tNode = t), (this._lView = n);
        }
        return (
          _createClass(e, [
            {
              key: "get",
              value: function (e, t) {
                return An(this._tNode, this._lView, e, void 0, t);
              },
            },
          ]),
          e
        );
      })();
      function Dn(e) {
        return e.ngDebugContext;
      }
      function jn(e) {
        return e.ngOriginalError;
      }
      function Fn(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        e.error.apply(e, n);
      }
      var Ln = (function () {
          function e() {
            _classCallCheck(this, e), (this._console = console);
          }
          return (
            _createClass(e, [
              {
                key: "handleError",
                value: function (e) {
                  var t = this._findOriginalError(e),
                    n = this._findContext(e),
                    r = (function (e) {
                      return e.ngErrorLogger || Fn;
                    })(e);
                  r(this._console, "ERROR", e),
                    t && r(this._console, "ORIGINAL ERROR", t),
                    n && r(this._console, "ERROR CONTEXT", n);
                },
              },
              {
                key: "_findContext",
                value: function (e) {
                  return e ? (Dn(e) ? Dn(e) : this._findContext(jn(e))) : null;
                },
              },
              {
                key: "_findOriginalError",
                value: function (e) {
                  for (var t = jn(e); t && jn(t); ) t = jn(t);
                  return t;
                },
              },
            ]),
            e
          );
        })(),
        Un = (function () {
          function e(t) {
            _classCallCheck(this, e),
              (this.changingThisBreaksApplicationSecurity = t);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return (
                    "SafeValue must use [property]=binding: ".concat(
                      this.changingThisBreaksApplicationSecurity
                    ) + " (see http://g.co/ng/security#xss)"
                  );
                },
              },
            ]),
            e
          );
        })(),
        Vn = !0,
        Mn = !1;
      function Hn() {
        return (Mn = !0), Vn;
      }
      var zn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        qn =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,
        Bn = (function () {
          var e = {
            NONE: 0,
            HTML: 1,
            STYLE: 2,
            SCRIPT: 3,
            URL: 4,
            RESOURCE_URL: 5,
          };
          return (
            (e[e.NONE] = "NONE"),
            (e[e.HTML] = "HTML"),
            (e[e.STYLE] = "STYLE"),
            (e[e.SCRIPT] = "SCRIPT"),
            (e[e.URL] = "URL"),
            (e[e.RESOURCE_URL] = "RESOURCE_URL"),
            e
          );
        })();
      function Wn(e) {
        var t,
          n,
          r,
          i = (t = Ot()) && t[12];
        return i
          ? i.sanitize(Bn.URL, e) || ""
          : (function (e, t) {
              var n = (function (e) {
                return (e instanceof Un && e.getTypeName()) || null;
              })(e);
              if (null != n && "URL" !== n) {
                if ("ResourceURL" === n) return !0;
                throw new Error(
                  "Required a safe "
                    .concat("URL", ", got a ")
                    .concat(n, " (see http://g.co/ng/security#xss)")
                );
              }
              return "URL" === n;
            })(e)
          ? (r = e) instanceof Un
            ? r.changingThisBreaksApplicationSecurity
            : r
          : ((n = pn(e)),
            (n = String(n)).match(zn) || n.match(qn)
              ? n
              : (Hn() &&
                  console.warn(
                    "WARNING: sanitizing unsafe URL value ".concat(
                      n,
                      " (see http://g.co/ng/security#xss)"
                    )
                  ),
                "unsafe:" + n));
      }
      function Qn(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function Kn(e, t) {
        return Qn(t[e + 19]);
      }
      function Zn(e, t) {
        return Qn(t[e.index]);
      }
      function Gn(e, t) {
        return e.data[t + 19];
      }
      function $n(e, t) {
        var n = t[e];
        return Ct(n) ? n : n[0];
      }
      function Jn(e) {
        var t = (function (e) {
          return e.__ngContext__ || null;
        })(e);
        return t ? (Array.isArray(t) ? t : t.lView) : null;
      }
      function Yn(e) {
        return 128 == (128 & e[2]);
      }
      function Xn(e, t) {
        return null === e || null == t ? null : e[t];
      }
      function er(e) {
        e[18] = 0;
      }
      function tr(e, t) {
        e.__ngContext__ = t;
      }
      function nr(e) {
        throw new Error(
          "Multiple components match node with tagname ".concat(e.tagName)
        );
      }
      function rr() {
        throw new Error("Cannot mix multi providers and regular providers");
      }
      function ir(e, t, n) {
        for (var r = e.length; ; ) {
          var i = e.indexOf(t, n);
          if (-1 === i) return i;
          if (0 === i || e.charCodeAt(i - 1) <= 32) {
            var o = t.length;
            if (i + o === r || e.charCodeAt(i + o) <= 32) return i;
          }
          n = i + 1;
        }
      }
      function or(e, t, n) {
        for (var r = 0; r < e.length; ) {
          var i = e[r++];
          if (n && "class" === i) {
            if (-1 !== ir((i = e[r]).toLowerCase(), t, 0)) return !0;
          } else if (1 === i) {
            for (; r < e.length && "string" == typeof (i = e[r++]); )
              if (i.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function ar(e, t, n) {
        return t === (0 !== e.type || n ? e.tagName : "ng-template");
      }
      function sr(e, t, n) {
        for (
          var r = 4,
            i = e.attrs || [],
            o = (function (e) {
              for (var t = 0; t < e.length; t++) if (sn(e[t])) return t;
              return e.length;
            })(i),
            a = !1,
            s = 0;
          s < t.length;
          s++
        ) {
          var u = t[s];
          if ("number" != typeof u) {
            if (!a)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== u && !ar(e, u, n)) || ("" === u && 1 === t.length))
                ) {
                  if (ur(r)) return !1;
                  a = !0;
                }
              } else {
                var l = 8 & r ? u : t[++s];
                if (8 & r && null !== e.attrs) {
                  if (!or(e.attrs, l, n)) {
                    if (ur(r)) return !1;
                    a = !0;
                  }
                  continue;
                }
                var c = lr(
                  8 & r ? "class" : u,
                  i,
                  0 == e.type && "ng-template" !== e.tagName,
                  n
                );
                if (-1 === c) {
                  if (ur(r)) return !1;
                  a = !0;
                  continue;
                }
                if ("" !== l) {
                  var h;
                  h = c > o ? "" : i[c + 1].toLowerCase();
                  var f = 8 & r ? h : null;
                  if ((f && -1 !== ir(f, l, 0)) || (2 & r && l !== h)) {
                    if (ur(r)) return !1;
                    a = !0;
                  }
                }
              }
          } else {
            if (!a && !ur(r) && !ur(u)) return !1;
            if (a && ur(u)) continue;
            (a = !1), (r = u | (1 & r));
          }
        }
        return ur(r) || a;
      }
      function ur(e) {
        return 0 == (1 & e);
      }
      function lr(e, t, n, r) {
        if (null === t) return -1;
        var i = 0;
        if (r || !n) {
          for (var o = !1; i < t.length; ) {
            var a = t[i];
            if (a === e) return i;
            if (3 === a || 6 === a) o = !0;
            else {
              if (1 === a || 2 === a) {
                for (var s = t[++i]; "string" == typeof s; ) s = t[++i];
                continue;
              }
              if (4 === a) break;
              if (0 === a) {
                i += 4;
                continue;
              }
            }
            i += o ? 1 : 2;
          }
          return -1;
        }
        return (function (e, t) {
          var n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              if (e[n] === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function cr(e, t) {
        for (
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = 0;
          r < t.length;
          r++
        )
          if (sr(e, t[r], n)) return !0;
        return !1;
      }
      function hr(e, t) {
        return e ? ":not(" + t.trim() + ")" : t;
      }
      function fr(e) {
        for (var t = e[0], n = 1, r = 2, i = "", o = !1; n < e.length; ) {
          var a = e[n];
          if ("string" == typeof a)
            if (2 & r) {
              var s = e[++n];
              i += "[" + a + (s.length > 0 ? '="' + s + '"' : "") + "]";
            } else 8 & r ? (i += "." + a) : 4 & r && (i += " " + a);
          else
            "" === i || ur(a) || ((t += hr(o, i)), (i = "")),
              (r = a),
              (o = o || !ur(r));
          n++;
        }
        return "" !== i && (t += hr(o, i)), t;
      }
      var dr = {};
      function vr(e) {
        var t = e[3];
        return bt(t) ? t[3] : t;
      }
      function pr(e) {
        yr(Rt(), Ot(), Kt() + e, jt());
      }
      function yr(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[2])) {
            var i = e.preOrderCheckHooks;
            null !== i && $t(t, i, n);
          } else {
            var o = e.preOrderHooks;
            null !== o && Jt(t, o, 0, n);
          }
        Zt(n);
      }
      function gr(e, t) {
        var n = e.contentQueries;
        if (null !== n)
          for (var r = 0; r < n.length; r += 2) {
            var i = n[r],
              o = n[r + 1];
            if (-1 !== o) {
              var a = e.data[o];
              Mt(i), a.contentQueries(2, t[o], o);
            }
          }
      }
      function mr(e, t, n) {
        return rn(t)
          ? t.createElement(e, n)
          : null === n
          ? t.createElement(e)
          : t.createElementNS(n, e);
      }
      function _r(e, t, n, r, i, o, a, s, u, l) {
        var c = t.blueprint.slice();
        return (
          (c[0] = i),
          (c[2] = 140 | r),
          er(c),
          (c[3] = c[15] = e),
          (c[8] = n),
          (c[10] = a || (e && e[10])),
          (c[11] = s || (e && e[11])),
          (c[12] = u || (e && e[12]) || null),
          (c[9] = l || (e && e[9]) || null),
          (c[6] = o),
          (c[16] = 2 == t.type ? e[16] : c),
          c
        );
      }
      function kr(e, t, n, r, i, o) {
        var a = n + 19,
          s =
            e.data[a] ||
            (function (e, t, n, r, i, o) {
              var a = It(),
                s = Dt(),
                u = s ? a : a && a.parent,
                l = (e.data[n] = xr(0, u && u !== t ? u : null, r, n, i, o));
              return (
                null === e.firstChild && (e.firstChild = l),
                a &&
                  (!s || null != a.child || (null === l.parent && 2 !== a.type)
                    ? s || (a.next = l)
                    : (a.child = l)),
                l
              );
            })(e, t, a, r, i, o);
        return Nt(s, !0), s;
      }
      function Cr(e, t, n) {
        qt(t, t[6]);
        try {
          var r = e.viewQuery;
          null !== r && Jr(1, r, n);
          var i = e.template;
          null !== i && Sr(e, t, i, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && gr(e, t),
            e.staticViewQueries && Jr(2, e.viewQuery, n);
          var o = e.components;
          null !== o &&
            (function (e, t) {
              for (var n = 0; n < t.length; n++) Qr(e, t[n]);
            })(t, o);
        } finally {
          (t[2] &= -5), Qt();
        }
      }
      function br(e, t, n, r) {
        var i = t[2];
        if (256 != (256 & i)) {
          qt(t, t[6]);
          var o = jt();
          try {
            er(t),
              (xt.lFrame.bindingIndex = e.bindingStartIndex),
              null !== n && Sr(e, t, n, 2, r);
            var a = 3 == (3 & i);
            if (!o)
              if (a) {
                var s = e.preOrderCheckHooks;
                null !== s && $t(t, s, null);
              } else {
                var u = e.preOrderHooks;
                null !== u && Jt(t, u, 0, null), Yt(t, 0);
              }
            if (
              ((function (e) {
                for (var t = e[13]; null !== t; ) {
                  var n = void 0;
                  if (bt(t) && (n = t[2]) >> 1 == -1) {
                    for (var r = 9; r < t.length; r++) {
                      var i = t[r],
                        o = i[1];
                      Yn(i) && br(o, i, o.template, i[8]);
                    }
                    0 != (1 & n) && Br(t, e[16]);
                  }
                  t = t[4];
                }
              })(t),
              null !== e.contentQueries && gr(e, t),
              !o)
            )
              if (a) {
                var l = e.contentCheckHooks;
                null !== l && $t(t, l);
              } else {
                var c = e.contentHooks;
                null !== c && Jt(t, c, 1), Yt(t, 1);
              }
            !(function (e, t) {
              try {
                var n = e.expandoInstructions;
                if (null !== n)
                  for (
                    var r = e.expandoStartIndex, i = -1, o = 0;
                    o < n.length;
                    o++
                  ) {
                    var a = n[o];
                    "number" == typeof a
                      ? a <= 0
                        ? (Zt(0 - a), (i = r += 9 + n[++o]))
                        : (r += a)
                      : (null !== a && (Vt(r, i), a(2, t[i])), i++);
                  }
              } finally {
                Zt(-1);
              }
            })(e, t);
            var h = e.components;
            null !== h &&
              (function (e, t) {
                for (var n = 0; n < t.length; n++) Wr(e, t[n]);
              })(t, h);
            var f = e.viewQuery;
            if ((null !== f && Jr(2, f, r), !o))
              if (a) {
                var d = e.viewCheckHooks;
                null !== d && $t(t, d);
              } else {
                var v = e.viewHooks;
                null !== v && Jt(t, v, 2), Yt(t, 2);
              }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              o || (t[2] &= -73);
          } finally {
            Qt();
          }
        }
      }
      function wr(e, t, n, r) {
        var i = t[10],
          o = !jt(),
          a = 4 == (4 & t[2]);
        try {
          o && !a && i.begin && i.begin(), a && Cr(e, t, r), br(e, t, n, r);
        } finally {
          o && !a && i.end && i.end();
        }
      }
      function Sr(e, t, n, r, i) {
        var o = Kt();
        try {
          Zt(-1), 2 & r && t.length > 19 && yr(e, t, 0, jt()), n(r, i);
        } finally {
          Zt(o);
        }
      }
      function Er(e, t, n) {
        Pt() &&
          ((function (e, t, n, r) {
            var i = n.directiveStart,
              o = n.directiveEnd;
            e.firstCreatePass || bn(n, t), tr(r, t);
            for (var a = n.initialInputs, s = i; s < o; s++) {
              var u = e.data[s],
                l = Tt(u);
              l && Mr(t, n, u);
              var c = On(t, e, s, n);
              tr(c, t),
                null !== a && Hr(0, s - i, c, u, 0, a),
                l && ($n(n.index, t)[8] = c);
            }
          })(e, t, n, Zn(n, t)),
          128 == (128 & n.flags) &&
            (function (e, t, n) {
              var r = n.directiveStart,
                i = n.directiveEnd,
                o = e.expandoInstructions,
                a = e.firstCreatePass,
                s = n.index - 19;
              try {
                Zt(s);
                for (var u = r; u < i; u++) {
                  var l = e.data[u],
                    c = t[u];
                  null !== l.hostBindings ||
                  0 !== l.hostVars ||
                  null !== l.hostAttrs
                    ? Dr(l, c)
                    : a && o.push(null);
                }
              } finally {
                Zt(-1);
              }
            })(e, t, n));
      }
      function Tr(e) {
        return (
          e.tView ||
          (e.tView = Ar(
            1,
            -1,
            e.template,
            e.decls,
            e.vars,
            e.directiveDefs,
            e.pipeDefs,
            e.viewQuery,
            e.schemas,
            e.consts
          ))
        );
      }
      function Ar(e, t, n, r, i, o, a, s, u, l) {
        var c = 19 + r,
          h = c + i,
          f = (function (e, t) {
            for (var n = [], r = 0; r < t; r++) n.push(r < e ? null : dr);
            return n;
          })(c, h);
        return (f[1] = {
          type: e,
          id: t,
          blueprint: f,
          template: n,
          queries: null,
          viewQuery: s,
          node: null,
          data: f.slice().fill(null, c),
          bindingStartIndex: c,
          expandoStartIndex: h,
          expandoInstructions: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof o ? o() : o,
          pipeRegistry: "function" == typeof a ? a() : a,
          firstChild: null,
          schemas: u,
          consts: l,
        });
      }
      function xr(e, t, n, r, i, o) {
        return {
          type: n,
          index: r,
          injectorIndex: t ? t.injectorIndex : -1,
          directiveStart: -1,
          directiveEnd: -1,
          directiveStylingLast: -1,
          propertyBindings: null,
          flags: 0,
          providerIndexes: 0,
          tagName: i,
          attrs: o,
          mergedAttrs: null,
          localNames: null,
          initialInputs: void 0,
          inputs: null,
          outputs: null,
          tViews: null,
          next: null,
          projectionNext: null,
          child: null,
          parent: t,
          projection: null,
          styles: null,
          residualStyles: void 0,
          classes: null,
          residualClasses: void 0,
          classBindings: 0,
          styleBindings: 0,
        };
      }
      function Pr(e, t, n) {
        for (var r in e)
          if (e.hasOwnProperty(r)) {
            var i = e[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(t, i)
              : (n[r] = [t, i]);
          }
        return n;
      }
      function Or(e, t, n, r, i, o, a, s) {
        var u,
          l,
          c = Kn(n, t),
          h = Gn(e, n),
          f = h.inputs;
        if (!a && null != f && (u = f[r]))
          ti(e, t, u, r, i),
            St(h) &&
              (function (e, t) {
                var n = $n(t, e);
                16 & n[2] || (n[2] |= 64);
              })(t, n + 19);
        else if (3 === h.type) {
          r =
            "class" === (l = r)
              ? "className"
              : "for" === l
              ? "htmlFor"
              : "formaction" === l
              ? "formAction"
              : "innerHtml" === l
              ? "innerHTML"
              : "readonly" === l
              ? "readOnly"
              : "tabindex" === l
              ? "tabIndex"
              : l;
          var d = s ? s(h, t) : t[11];
          (i = null != o ? o(i, h.tagName || "", r) : i),
            rn(d)
              ? d.setProperty(c, r, i)
              : un(r) || (c.setProperty ? c.setProperty(r, i) : (c[r] = i));
        }
      }
      function Rr(e, t, n, r) {
        var i = !1;
        if (Pt()) {
          var o = (function (e, t, n) {
              var r = e.directiveRegistry,
                i = null;
              if (r)
                for (var o = 0; o < r.length; o++) {
                  var a = r[o];
                  cr(n, a.selectors, !1) &&
                    (i || (i = []),
                    Tn(bn(n, t), e, a.type),
                    Tt(a)
                      ? (2 & n.flags && nr(n), Fr(e, n), i.unshift(a))
                      : i.push(a));
                }
              return i;
            })(e, t, n),
            a = null === r ? null : { "": -1 };
          if (null !== o) {
            var s = 0;
            (i = !0), Ur(n, e.data.length, o.length);
            for (var u = 0; u < o.length; u++) {
              var l = o[u];
              l.providersResolver && l.providersResolver(l);
            }
            jr(e, n, o.length);
            for (var c = !1, h = !1, f = 0; f < o.length; f++) {
              var d = o[f];
              (n.mergedAttrs = ln(n.mergedAttrs, d.hostAttrs)),
                Vr(e, t, d),
                Lr(e.data.length - 1, d, a),
                null !== d.contentQueries && (n.flags |= 8),
                (null === d.hostBindings &&
                  null === d.hostAttrs &&
                  0 === d.hostVars) ||
                  (n.flags |= 128),
                !c &&
                  (d.onChanges || d.onInit || d.doCheck) &&
                  ((e.preOrderHooks || (e.preOrderHooks = [])).push(
                    n.index - 19
                  ),
                  (c = !0)),
                h ||
                  (!d.onChanges && !d.doCheck) ||
                  ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                    n.index - 19
                  ),
                  (h = !0)),
                Ir(e, d),
                (s += d.hostVars);
            }
            !(function (e, t) {
              for (
                var n = t.directiveEnd,
                  r = e.data,
                  i = t.attrs,
                  o = [],
                  a = null,
                  s = null,
                  u = t.directiveStart;
                u < n;
                u++
              ) {
                var l = r[u],
                  c = l.inputs;
                o.push(null !== i ? zr(c, i) : null),
                  (a = Pr(c, u, a)),
                  (s = Pr(l.outputs, u, s));
              }
              null !== a &&
                ((a.hasOwnProperty("class") || a.hasOwnProperty("className")) &&
                  (t.flags |= 16),
                a.hasOwnProperty("style") && (t.flags |= 32)),
                (t.initialInputs = o),
                (t.inputs = a),
                (t.outputs = s);
            })(e, n),
              Nr(e, t, s);
          }
          a &&
            (function (e, t, n) {
              if (t)
                for (var r = (e.localNames = []), i = 0; i < t.length; i += 2) {
                  var o = n[t[i + 1]];
                  if (null == o)
                    throw new Error(
                      "Export of name '".concat(t[i + 1], "' not found!")
                    );
                  r.push(t[i], o);
                }
            })(n, r, a);
        }
        return (n.mergedAttrs = ln(n.mergedAttrs, n.attrs)), i;
      }
      function Ir(e, t) {
        var n = e.expandoInstructions;
        n.push(t.hostBindings), 0 !== t.hostVars && n.push(t.hostVars);
      }
      function Nr(e, t, n) {
        for (var r = 0; r < n; r++)
          t.push(dr), e.blueprint.push(dr), e.data.push(null);
      }
      function Dr(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function jr(e, t, n) {
        var r = 19 - t.index,
          i = e.data.length - (65535 & t.providerIndexes);
        (e.expandoInstructions || (e.expandoInstructions = [])).push(r, i, n);
      }
      function Fr(e, t) {
        (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
      }
      function Lr(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (var r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          Tt(t) && (n[""] = e);
        }
      }
      function Ur(e, t, n) {
        (e.flags |= 1),
          (e.directiveStart = t),
          (e.directiveEnd = t + n),
          (e.providerIndexes = t);
      }
      function Vr(e, t, n) {
        e.data.push(n);
        var r = n.factory || (n.factory = _t(n.type)),
          i = new tn(r, Tt(n), null);
        e.blueprint.push(i), t.push(i);
      }
      function Mr(e, t, n) {
        var r = Zn(t, e),
          i = Tr(n),
          o = e[10],
          a = Kr(
            e,
            _r(e, i, null, n.onPush ? 64 : 16, r, t, o, o.createRenderer(r, n))
          );
        e[t.index] = a;
      }
      function Hr(e, t, n, r, i, o) {
        var a = o[t];
        if (null !== a)
          for (var s = r.setInput, u = 0; u < a.length; ) {
            var l = a[u++],
              c = a[u++],
              h = a[u++];
            null !== s ? r.setInput(n, h, l, c) : (n[c] = h);
          }
      }
      function zr(e, t) {
        for (var n = null, r = 0; r < t.length; ) {
          var i = t[r];
          if (0 !== i)
            if (5 !== i) {
              if ("number" == typeof i) break;
              e.hasOwnProperty(i) &&
                (null === n && (n = []), n.push(i, e[i], t[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function qr(e, t, n, r) {
        return new Array(e, !0, -2, t, null, null, r, n, null);
      }
      function Br(e, t) {
        for (var n = e[5], r = 0; r < n.length; r++) {
          var i = n[r],
            o = i[3][3][16];
          if (o !== t && 0 == (16 & o[2])) {
            var a = i[1];
            br(a, i, a.template, i[8]);
          }
        }
      }
      function Wr(e, t) {
        var n = $n(t, e);
        if (Yn(n) && 80 & n[2]) {
          var r = n[1];
          br(r, n, r.template, n[8]);
        }
      }
      function Qr(e, t) {
        var n = $n(t, e),
          r = n[1];
        !(function (e, t) {
          for (var n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n),
          Cr(r, n, n[8]);
      }
      function Kr(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function Zr(e) {
        for (; e; ) {
          e[2] |= 64;
          var t = vr(e);
          if (At(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function Gr(e, t, n) {
        var r = t[10];
        r.begin && r.begin();
        try {
          br(e, t, e.template, n);
        } catch (i) {
          throw (ei(t, i), i);
        } finally {
          r.end && r.end();
        }
      }
      function $r(e) {
        !(function (e) {
          for (var t = 0; t < e.components.length; t++) {
            var n = e.components[t],
              r = Jn(n),
              i = r[1];
            wr(i, r, i.template, n);
          }
        })(e[8]);
      }
      function Jr(e, t, n) {
        Mt(0), t(e, n);
      }
      var Yr = Promise.resolve(null);
      function Xr(e) {
        return e[7] || (e[7] = []);
      }
      function ei(e, t) {
        var n = e[9],
          r = n ? n.get(Ln, null) : null;
        r && r.handleError(t);
      }
      function ti(e, t, n, r, i) {
        for (var o = 0; o < n.length; ) {
          var a = n[o++],
            s = n[o++],
            u = t[a],
            l = e.data[a];
          null !== l.setInput ? l.setInput(u, i, r, s) : (u[s] = i);
        }
      }
      function ni(e, t) {
        var n = t[3];
        return -1 === e.index ? (bt(n) ? n : null) : n;
      }
      function ri(e, t) {
        var n = ni(e, t);
        return n ? vi(t[11], n[7]) : null;
      }
      function ii(e, t, n, r, i) {
        if (null != r) {
          var o,
            a = !1;
          bt(r) ? (o = r) : Ct(r) && ((a = !0), (r = r[0]));
          var s = Qn(r);
          0 === e && null !== n
            ? null == i
              ? fi(t, n, s)
              : hi(t, n, s, i || null)
            : 1 === e && null !== n
            ? hi(t, n, s, i || null)
            : 2 === e
            ? (function (e, t, n) {
                var r = vi(e, t);
                r &&
                  (function (e, t, n, r) {
                    rn(e) ? e.removeChild(t, n, r) : t.removeChild(n);
                  })(e, r, t, n);
              })(t, s, a)
            : 3 === e && t.destroyNode(s),
            null != o &&
              (function (e, t, n, r, i) {
                var o = n[7];
                o !== Qn(n) && ii(t, e, r, o, i);
                for (var a = 9; a < n.length; a++) {
                  var s = n[a];
                  mi(s[1], s, e, t, r, o);
                }
              })(t, e, o, n, i);
        }
      }
      function oi(e, t, n, r) {
        var i = ri(e.node, t);
        i && mi(e, t, t[11], n ? 1 : 2, i, r);
      }
      function ai(e, t) {
        var n = e[5],
          r = n.indexOf(t);
        n.splice(r, 1);
      }
      function si(e, t) {
        if (!(e.length <= 9)) {
          var n = 9 + t,
            r = e[n];
          if (r) {
            var i = r[17];
            null !== i && i !== e && ai(i, r), t > 0 && (e[n - 1][4] = r[4]);
            var o = it(e, 9 + t);
            oi(r[1], r, !1, null);
            var a = o[5];
            null !== a && a.detachView(o[1]),
              (r[3] = null),
              (r[4] = null),
              (r[2] &= -129);
          }
          return r;
        }
      }
      function ui(e, t) {
        if (!(256 & t[2])) {
          var n = t[11];
          rn(n) && n.destroyNode && mi(e, t, n, 3, null, null),
            (function (e) {
              var t = e[13];
              if (!t) return ci(e[1], e);
              for (; t; ) {
                var n = null;
                if (Ct(t)) n = t[13];
                else {
                  var r = t[9];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    Ct(t) && ci(t[1], t), (t = li(t, e));
                  null === t && (t = e), Ct(t) && ci(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function li(e, t) {
        var n;
        return Ct(e) && (n = e[6]) && 2 === n.type
          ? ni(n, e)
          : e[3] === t
          ? null
          : e[3];
      }
      function ci(e, t) {
        if (!(256 & t[2])) {
          (t[2] &= -129),
            (t[2] |= 256),
            (function (e, t) {
              var n;
              if (null != e && null != (n = e.destroyHooks))
                for (var r = 0; r < n.length; r += 2) {
                  var i = t[n[r]];
                  i instanceof tn || n[r + 1].call(i);
                }
            })(e, t),
            (function (e, t) {
              var n = e.cleanup;
              if (null !== n) {
                for (var r = t[7], i = 0; i < n.length - 1; i += 2)
                  if ("string" == typeof n[i]) {
                    var o = n[i + 1],
                      a = "function" == typeof o ? o(t) : Qn(t[o]),
                      s = r[n[i + 2]],
                      u = n[i + 3];
                    "boolean" == typeof u
                      ? a.removeEventListener(n[i], s, u)
                      : u >= 0
                      ? r[u]()
                      : r[-u].unsubscribe(),
                      (i += 2);
                  } else n[i].call(r[n[i + 1]]);
                t[7] = null;
              }
            })(e, t);
          var n = t[6];
          n && 3 === n.type && rn(t[11]) && t[11].destroy();
          var r = t[17];
          if (null !== r && bt(t[3])) {
            r !== t[3] && ai(r, t);
            var i = t[5];
            null !== i && i.detachView(e);
          }
        }
      }
      function hi(e, t, n, r) {
        rn(e) ? e.insertBefore(t, n, r) : t.insertBefore(n, r, !0);
      }
      function fi(e, t, n) {
        rn(e) ? e.appendChild(t, n) : t.appendChild(n);
      }
      function di(e, t, n, r) {
        null !== r ? hi(e, t, n, r) : fi(e, t, n);
      }
      function vi(e, t) {
        return rn(e) ? e.parentNode(t) : t.parentNode;
      }
      function pi(e, t, n, r) {
        var i = (function (e, t, n) {
          for (var r = t.parent; null != r && (4 === r.type || 5 === r.type); )
            r = (t = r).parent;
          if (null == r) {
            var i = n[6];
            return 2 === i.type ? ri(i, n) : n[0];
          }
          if (t && 5 === t.type && 4 & t.flags) return Zn(t, n).parentNode;
          if (2 & r.flags) {
            var o = e.data,
              a = o[o[r.index].directiveStart].encapsulation;
            if (a !== at.ShadowDom && a !== at.Native) return null;
          }
          return Zn(r, n);
        })(e, r, t);
        if (null != i) {
          var o = t[11],
            a = (function (e, t) {
              if (2 === e.type) {
                var n = ni(e, t);
                return null === n ? null : yi(n.indexOf(t, 9) - 9, n);
              }
              return 4 === e.type || 5 === e.type ? Zn(e, t) : null;
            })(r.parent || t[6], t);
          if (Array.isArray(n))
            for (var s = 0; s < n.length; s++) di(o, i, n[s], a);
          else di(o, i, n, a);
        }
      }
      function yi(e, t) {
        var n = 9 + e + 1;
        if (n < t.length) {
          var r = t[n],
            i = r[1].firstChild;
          if (null !== i)
            return (function e(t, n) {
              if (null !== n) {
                var r = n.type;
                if (3 === r) return Zn(n, t);
                if (0 === r) return yi(-1, t[n.index]);
                if (4 === r || 5 === r) {
                  var i = n.child;
                  if (null !== i) return e(t, i);
                  var o = t[n.index];
                  return bt(o) ? yi(-1, o) : Qn(o);
                }
                var a = t[16],
                  s = a[6],
                  u = vr(a),
                  l = s.projection[n.projection];
                return null != l ? e(u, l) : e(t, n.next);
              }
              return null;
            })(r, i);
        }
        return t[7];
      }
      function gi(e, t, n, r, i, o, a) {
        for (; null != n; ) {
          var s = r[n.index],
            u = n.type;
          a && 0 === t && (s && tr(Qn(s), r), (n.flags |= 4)),
            64 != (64 & n.flags) &&
              (4 === u || 5 === u
                ? (gi(e, t, n.child, r, i, o, !1), ii(t, e, i, s, o))
                : 1 === u
                ? _i(e, t, r, n, i, o)
                : ii(t, e, i, s, o)),
            (n = a ? n.projectionNext : n.next);
        }
      }
      function mi(e, t, n, r, i, o) {
        gi(n, r, e.node.child, t, i, o, !1);
      }
      function _i(e, t, n, r, i, o) {
        var a = n[16],
          s = a[6].projection[r.projection];
        if (Array.isArray(s))
          for (var u = 0; u < s.length; u++) ii(t, e, i, s[u], o);
        else gi(e, t, s, a[3], i, o, !0);
      }
      function ki(e, t, n) {
        rn(e) ? e.setAttribute(t, "style", n) : (t.style.cssText = n);
      }
      function Ci(e, t, n) {
        rn(e)
          ? "" === n
            ? e.removeAttribute(t, "class")
            : e.setAttribute(t, "class", n)
          : (t.className = n);
      }
      var bi,
        wi,
        Si,
        Ei = (function () {
          function e(t, n) {
            _classCallCheck(this, e),
              (this._lView = t),
              (this._cdRefInjectingView = n),
              (this._appRef = null),
              (this._viewContainerRef = null),
              (this._tViewNode = null);
          }
          return (
            _createClass(e, [
              {
                key: "destroy",
                value: function () {
                  if (this._appRef) this._appRef.detachView(this);
                  else if (this._viewContainerRef) {
                    var e = this._viewContainerRef.indexOf(this);
                    e > -1 && this._viewContainerRef.detach(e),
                      (this._viewContainerRef = null);
                  }
                  ui(this._lView[1], this._lView);
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  var t, n, r;
                  (t = this._lView[1]),
                    (r = e),
                    Xr((n = this._lView)).push(r),
                    t.firstCreatePass &&
                      (function (e) {
                        return e.cleanup || (e.cleanup = []);
                      })(t).push(n[7].length - 1, null);
                },
              },
              {
                key: "markForCheck",
                value: function () {
                  Zr(this._cdRefInjectingView || this._lView);
                },
              },
              {
                key: "detach",
                value: function () {
                  this._lView[2] &= -129;
                },
              },
              {
                key: "reattach",
                value: function () {
                  this._lView[2] |= 128;
                },
              },
              {
                key: "detectChanges",
                value: function () {
                  Gr(this._lView[1], this._lView, this.context);
                },
              },
              {
                key: "checkNoChanges",
                value: function () {
                  !(function (e, t, n) {
                    Ft(!0);
                    try {
                      Gr(e, t, n);
                    } finally {
                      Ft(!1);
                    }
                  })(this._lView[1], this._lView, this.context);
                },
              },
              {
                key: "attachToViewContainerRef",
                value: function (e) {
                  if (this._appRef)
                    throw new Error(
                      "This view is already attached directly to the ApplicationRef!"
                    );
                  this._viewContainerRef = e;
                },
              },
              {
                key: "detachFromAppRef",
                value: function () {
                  var e;
                  (this._appRef = null),
                    mi(this._lView[1], (e = this._lView), e[11], 2, null, null);
                },
              },
              {
                key: "attachToAppRef",
                value: function (e) {
                  if (this._viewContainerRef)
                    throw new Error(
                      "This view is already attached to a ViewContainer!"
                    );
                  this._appRef = e;
                },
              },
              {
                key: "rootNodes",
                get: function () {
                  var e = this._lView;
                  return null == e[0]
                    ? (function e(t, n, r, i) {
                        for (
                          var o =
                            arguments.length > 4 &&
                            void 0 !== arguments[4] &&
                            arguments[4];
                          null !== r;

                        ) {
                          var a = n[r.index];
                          if ((null !== a && i.push(Qn(a)), bt(a)))
                            for (var s = 9; s < a.length; s++) {
                              var u = a[s],
                                l = u[1].firstChild;
                              null !== l && e(u[1], u, l, i);
                            }
                          var c = r.type;
                          if (4 === c || 5 === c) e(t, n, r.child, i);
                          else if (1 === c) {
                            var h = n[16],
                              f = h[6],
                              d = vr(h),
                              v = f.projection[r.projection];
                            null !== v && null !== d && e(d[1], d, v, i, !0);
                          }
                          r = o ? r.projectionNext : r.next;
                        }
                        return i;
                      })(e[1], e, e[6].child, [])
                    : [];
                },
              },
              {
                key: "context",
                get: function () {
                  return this._lView[8];
                },
              },
              {
                key: "destroyed",
                get: function () {
                  return 256 == (256 & this._lView[2]);
                },
              },
            ]),
            e
          );
        })(),
        Ti = (function (e) {
          function t(e) {
            var n;
            return (
              _classCallCheck(this, t),
              ((n = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              ))._view = e),
              n
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "detectChanges",
                value: function () {
                  $r(this._view);
                },
              },
              {
                key: "checkNoChanges",
                value: function () {
                  !(function (e) {
                    Ft(!0);
                    try {
                      $r(e);
                    } finally {
                      Ft(!1);
                    }
                  })(this._view);
                },
              },
              {
                key: "context",
                get: function () {
                  return null;
                },
              },
            ]),
            t
          );
        })(Ei);
      function Ai(e, t, n) {
        return (
          bi ||
            (bi = (function (e) {
              function t() {
                return (
                  _classCallCheck(this, t),
                  _possibleConstructorReturn(
                    this,
                    _getPrototypeOf(t).apply(this, arguments)
                  )
                );
              }
              return _inherits(t, e), t;
            })(e)),
          new bi(Zn(t, n))
        );
      }
      function xi() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (function (e, t, n) {
          if (!n && St(e)) {
            var r = $n(e.index, t);
            return new Ei(r, r);
          }
          return 3 === e.type || 0 === e.type || 4 === e.type || 5 === e.type
            ? new Ei(t[16], t)
            : null;
        })(It(), Ot(), e);
      }
      var Pi = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.__NG_ELEMENT_ID__ = function () {
              return Oi();
            }),
            e
          );
        })(),
        Oi = xi,
        Ri = new He("Set Injector scope."),
        Ii = {},
        Ni = {},
        Di = [],
        ji = void 0;
      function Fi() {
        return void 0 === ji && (ji = new Xe()), ji;
      }
      function Li(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          r = arguments.length > 3 ? arguments[3] : void 0;
        return (t = t || Fi()), new Ui(e, n, t, r);
      }
      var Ui = (function () {
        function e(t, n, r) {
          var i = this,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null;
          _classCallCheck(this, e),
            (this.parent = r),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          var a = [];
          n &&
            nt(n, function (e) {
              return i.processProvider(e, t, n);
            }),
            nt([t], function (e) {
              return i.processInjectorType(e, [], a);
            }),
            this.records.set(ze, Mi(void 0, this));
          var s = this.records.get(Ri);
          (this.scope = null != s ? s.value : null),
            this.injectorDefTypes.forEach(function (e) {
              return i.get(e);
            }),
            (this.source = o || ("object" == typeof t ? null : we(t)));
        }
        return (
          _createClass(e, [
            {
              key: "destroy",
              value: function () {
                this.assertNotDestroyed(), (this._destroyed = !0);
                try {
                  this.onDestroy.forEach(function (e) {
                    return e.ngOnDestroy();
                  });
                } finally {
                  this.records.clear(),
                    this.onDestroy.clear(),
                    this.injectorDefTypes.clear();
                }
              },
            },
            {
              key: "get",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : qe,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : he.Default;
                this.assertNotDestroyed();
                var r,
                  i = Ke(this);
                try {
                  if (!(n & he.SkipSelf)) {
                    var o = this.records.get(e);
                    if (void 0 === o) {
                      var a =
                        ("function" == typeof (r = e) ||
                          ("object" == typeof r && r instanceof He)) &&
                        pe(e);
                      (o =
                        a && this.injectableDefInScope(a)
                          ? Mi(Vi(e), Ii)
                          : null),
                        this.records.set(e, o);
                    }
                    if (null != o) return this.hydrate(e, o);
                  }
                  return (n & he.Self ? Fi() : this.parent).get(
                    e,
                    (t = n & he.Optional && t === qe ? null : t)
                  );
                } catch (s) {
                  if ("NullInjectorError" === s.name) {
                    if (
                      ((s.ngTempTokenPath = s.ngTempTokenPath || []).unshift(
                        we(e)
                      ),
                      i)
                    )
                      throw s;
                    return (function (e, t, n, r) {
                      var i = e.ngTempTokenPath;
                      throw (
                        (t.__source && i.unshift(t.__source),
                        (e.message = (function (e, t, n) {
                          var r =
                            arguments.length > 3 && void 0 !== arguments[3]
                              ? arguments[3]
                              : null;
                          e =
                            e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
                              ? e.substr(2)
                              : e;
                          var i = we(t);
                          if (Array.isArray(t)) i = t.map(we).join(" -> ");
                          else if ("object" == typeof t) {
                            var o = [];
                            for (var a in t)
                              if (t.hasOwnProperty(a)) {
                                var s = t[a];
                                o.push(
                                  a +
                                    ":" +
                                    ("string" == typeof s
                                      ? JSON.stringify(s)
                                      : we(s))
                                );
                              }
                            i = "{".concat(o.join(", "), "}");
                          }
                          return ""
                            .concat(n)
                            .concat(r ? "(" + r + ")" : "", "[")
                            .concat(i, "]: ")
                            .concat(e.replace(Be, "\n  "));
                        })("\n" + e.message, i, "R3InjectorError", r)),
                        (e.ngTokenPath = i),
                        (e.ngTempTokenPath = null),
                        e)
                      );
                    })(s, e, 0, this.source);
                  }
                  throw s;
                } finally {
                  Ke(i);
                }
              },
            },
            {
              key: "toString",
              value: function () {
                var e = [];
                return (
                  this.records.forEach(function (t, n) {
                    return e.push(we(n));
                  }),
                  "R3Injector[".concat(e.join(", "), "]")
                );
              },
            },
            {
              key: "assertNotDestroyed",
              value: function () {
                if (this._destroyed)
                  throw new Error("Injector has already been destroyed.");
              },
            },
            {
              key: "processInjectorType",
              value: function (e, t, n) {
                var r = this;
                if (!(e = Ae(e))) return !1;
                var i = ge(e),
                  o = (null == i && e.ngModule) || void 0,
                  a = void 0 === o ? e : o,
                  s = -1 !== n.indexOf(a);
                if ((void 0 !== o && (i = ge(o)), null == i)) return !1;
                if (null != i.imports && !s) {
                  var u;
                  n.push(a);
                  try {
                    nt(i.imports, function (e) {
                      r.processInjectorType(e, t, n) &&
                        (void 0 === u && (u = []), u.push(e));
                    });
                  } finally {
                  }
                  if (void 0 !== u)
                    for (
                      var l = function (e) {
                          var t = u[e],
                            n = t.ngModule,
                            i = t.providers;
                          nt(i, function (e) {
                            return r.processProvider(e, n, i || Di);
                          });
                        },
                        c = 0;
                      c < u.length;
                      c++
                    )
                      l(c);
                }
                this.injectorDefTypes.add(a),
                  this.records.set(a, Mi(i.factory, Ii));
                var h = i.providers;
                if (null != h && !s) {
                  var f = e;
                  nt(h, function (e) {
                    return r.processProvider(e, f, h);
                  });
                }
                return void 0 !== o && void 0 !== e.providers;
              },
            },
            {
              key: "processProvider",
              value: function (e, t, n) {
                var r = zi((e = Ae(e))) ? e : Ae(e && e.provide),
                  i = (function (e, t, n) {
                    return Hi(e)
                      ? Mi(void 0, e.useValue)
                      : Mi(
                          (function (e, t, n) {
                            var r,
                              i = void 0;
                            if (zi(e)) return Vi(Ae(e));
                            if (Hi(e))
                              i = function () {
                                return Ae(e.useValue);
                              };
                            else if ((r = e) && r.useFactory)
                              i = function () {
                                return e.useFactory.apply(
                                  e,
                                  _toConsumableArray(Ye(e.deps || []))
                                );
                              };
                            else if (
                              (function (e) {
                                return !(!e || !e.useExisting);
                              })(e)
                            )
                              i = function () {
                                return $e(Ae(e.useExisting));
                              };
                            else {
                              var o = Ae(e && (e.useClass || e.provide));
                              if (
                                (o ||
                                  (function (e, t, n) {
                                    var r = "";
                                    throw (
                                      (e &&
                                        t &&
                                        (r =
                                          " - only instances of Provider and Type are allowed, got: [".concat(
                                            t
                                              .map(function (e) {
                                                return e == n
                                                  ? "?" + n + "?"
                                                  : "...";
                                              })
                                              .join(", "),
                                            "]"
                                          )),
                                      new Error(
                                        "Invalid provider for the NgModule '".concat(
                                          we(e),
                                          "'"
                                        ) + r
                                      ))
                                    );
                                  })(t, n, e),
                                !(function (e) {
                                  return !!e.deps;
                                })(e))
                              )
                                return Vi(o);
                              i = function () {
                                return _construct(
                                  o,
                                  _toConsumableArray(Ye(e.deps))
                                );
                              };
                            }
                            return i;
                          })(e, t, n),
                          Ii
                        );
                  })(e, t, n);
                if (zi(e) || !0 !== e.multi) {
                  var o = this.records.get(r);
                  o && void 0 !== o.multi && rr();
                } else {
                  var a = this.records.get(r);
                  a
                    ? void 0 === a.multi && rr()
                    : (((a = Mi(void 0, Ii, !0)).factory = function () {
                        return Ye(a.multi);
                      }),
                      this.records.set(r, a)),
                    (r = e),
                    a.multi.push(e);
                }
                this.records.set(r, i);
              },
            },
            {
              key: "hydrate",
              value: function (e, t) {
                var n;
                return (
                  t.value === Ni
                    ? (function (e) {
                        throw new Error(
                          "Cannot instantiate cyclic dependency! ".concat(e)
                        );
                      })(we(e))
                    : t.value === Ii &&
                      ((t.value = Ni), (t.value = t.factory())),
                  "object" == typeof t.value &&
                    t.value &&
                    null !== (n = t.value) &&
                    "object" == typeof n &&
                    "function" == typeof n.ngOnDestroy &&
                    this.onDestroy.add(t.value),
                  t.value
                );
              },
            },
            {
              key: "injectableDefInScope",
              value: function (e) {
                return (
                  !!e.providedIn &&
                  ("string" == typeof e.providedIn
                    ? "any" === e.providedIn || e.providedIn === this.scope
                    : this.injectorDefTypes.has(e.providedIn))
                );
              },
            },
            {
              key: "destroyed",
              get: function () {
                return this._destroyed;
              },
            },
          ]),
          e
        );
      })();
      function Vi(e) {
        var t = pe(e),
          n = null !== t ? t.factory : _t(e);
        if (null !== n) return n;
        var r = ge(e);
        if (null !== r) return r.factory;
        if (e instanceof He)
          throw new Error(
            "Token ".concat(we(e), " is missing a \u0275prov definition.")
          );
        if (e instanceof Function)
          return (function (e) {
            var t = e.length;
            if (t > 0) {
              var n = (function (e, t) {
                for (var n = [], r = 0; r < e; r++) n.push("?");
                return n;
              })(t);
              throw new Error(
                "Can't resolve all parameters for "
                  .concat(we(e), ": (")
                  .concat(n.join(", "), ").")
              );
            }
            var r = (function (e) {
              var t = e && (e[me] || e[Ce] || (e[ke] && e[ke]()));
              if (t) {
                var n = (function (e) {
                  if (e.hasOwnProperty("name")) return e.name;
                  var t = ("" + e).match(/^function\s*([^\s(]+)/);
                  return null === t ? "" : t[1];
                })(e);
                return (
                  console.warn(
                    'DEPRECATED: DI is instantiating a token "'.concat(
                      n,
                      '" that inherits its @Injectable decorator but does not provide one itself.\n'
                    ) +
                      'This will become an error in v10. Please add @Injectable() to the "'.concat(
                        n,
                        '" class.'
                      )
                  ),
                  t
                );
              }
              return null;
            })(e);
            return null !== r
              ? function () {
                  return r.factory(e);
                }
              : function () {
                  return new e();
                };
          })(e);
        throw new Error("unreachable");
      }
      function Mi(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function Hi(e) {
        return null !== e && "object" == typeof e && We in e;
      }
      function zi(e) {
        return "function" == typeof e;
      }
      var qi = function (e, t, n) {
          return Li({ name: n }, t, e, n);
        },
        Bi = (function () {
          var e = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, null, [
                {
                  key: "create",
                  value: function (e, t) {
                    return Array.isArray(e)
                      ? qi(e, t, "")
                      : qi(e.providers, e.parent, e.name || "");
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.THROW_IF_NOT_FOUND = qe),
            (e.NULL = new Xe()),
            (e.ɵprov = de({
              token: e,
              providedIn: "any",
              factory: function () {
                return $e(ze);
              },
            })),
            (e.__NG_ELEMENT_ID__ = -1),
            e
          );
        })(),
        Wi = new He("AnalyzeForEntryComponents"),
        Qi = new Map(),
        Ki = new Set();
      function Zi(e) {
        return "string" == typeof e ? e : e.text();
      }
      function Gi(e, t) {
        for (var n = e.styles, r = e.classes, i = 0, o = 0; o < t.length; o++) {
          var a = t[o];
          "number" == typeof a
            ? (i = a)
            : 1 == i
            ? (r = Se(r, a))
            : 2 == i && (n = Se(n, a + ": " + t[++o] + ";"));
        }
        null !== n && (e.styles = n), null !== r && (e.classes = r);
      }
      var $i = null;
      function Ji() {
        if (!$i) {
          var e = Ne.Symbol;
          if (e && e.iterator) $i = e.iterator;
          else
            for (
              var t = Object.getOwnPropertyNames(Map.prototype), n = 0;
              n < t.length;
              ++n
            ) {
              var r = t[n];
              "entries" !== r &&
                "size" !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                ($i = r);
            }
        }
        return $i;
      }
      function Yi(e, t) {
        return (
          e === t ||
          ("number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t))
        );
      }
      var Xi = (function () {
        function e(t) {
          _classCallCheck(this, e), (this.wrapped = t);
        }
        return (
          _createClass(e, null, [
            {
              key: "wrap",
              value: function (t) {
                return new e(t);
              },
            },
            {
              key: "unwrap",
              value: function (t) {
                return e.isWrapped(t) ? t.wrapped : t;
              },
            },
            {
              key: "isWrapped",
              value: function (t) {
                return t instanceof e;
              },
            },
          ]),
          e
        );
      })();
      function eo(e) {
        return (
          !!to(e) && (Array.isArray(e) || (!(e instanceof Map) && Ji() in e))
        );
      }
      function to(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function no(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function ro(e, t, n, r) {
        var i = Ot();
        return (
          no(i, Ut(), t) &&
            (function (e, t, n, r, i, o, a) {
              var s = Kn(e, i),
                u = i[11];
              if (null == n)
                rn(u) ? u.removeAttribute(s, t, a) : s.removeAttribute(t);
              else {
                var l = Gn(r, e),
                  c = null == o ? pn(n) : o(n, l.tagName || "", t);
                rn(u)
                  ? u.setAttribute(s, t, c, a)
                  : a
                  ? s.setAttributeNS(a, t, c)
                  : s.setAttribute(t, c);
              }
            })(Kt(), e, t, Rt(), i, n, r),
          ro
        );
      }
      function io(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : he.Default,
          n = Ot();
        return null == n ? $e(e, t) : An(It(), n, Ae(e), t);
      }
      function oo(e) {
        return (function (e, t) {
          if ("class" === t) return e.classes;
          if ("style" === t) return e.styles;
          var n = e.attrs;
          if (n)
            for (var r = n.length, i = 0; i < r; ) {
              var o = n[i];
              if (sn(o)) break;
              if (0 === o) i += 2;
              else if ("number" == typeof o)
                for (i++; i < r && "string" == typeof n[i]; ) i++;
              else {
                if (o === t) return n[i + 1];
                i += 2;
              }
            }
          return null;
        })(It(), e);
      }
      function ao() {
        throw new Error("invalid");
      }
      function so(e, t, n) {
        var r = Ot();
        if (no(r, Ut(), t)) {
          var i = Kt();
          Or(Rt(), r, i, e, t, n);
        }
        return so;
      }
      function uo(e, t, n, r, i) {
        var o = t.inputs,
          a = i ? "class" : "style";
        ti(e, n, o[a] || (i && o.className), a, r);
      }
      function lo(e, t, n, r) {
        var i = Ot(),
          o = Rt(),
          a = 19 + e,
          s = i[11],
          u = (i[a] = mr(t, s, xt.lFrame.currentNamespace)),
          l = o.firstCreatePass
            ? (function (e, t, n, r, i, o, a) {
                var s = t.consts,
                  u = Xn(s, o),
                  l = kr(t, n[6], e, 3, i, u);
                return (
                  Rr(t, n, l, Xn(s, a)),
                  null !== l.mergedAttrs && Gi(l, l.mergedAttrs),
                  null !== t.queries && t.queries.elementStart(t, l),
                  l
                );
              })(e, o, i, 0, t, n, r)
            : o.data[a];
        Nt(l, !0);
        var c = l.mergedAttrs;
        null !== c && an(s, u, c);
        var h = l.classes;
        null !== h && Ci(s, u, h);
        var f = l.styles;
        null !== f && ki(s, u, f),
          pi(o, i, u, l),
          0 === xt.lFrame.elementDepthCount && tr(u, i),
          xt.lFrame.elementDepthCount++,
          Et(l) &&
            (Er(o, i, l),
            (function (e, t, n) {
              if (wt(t))
                for (var r = t.directiveEnd, i = t.directiveStart; i < r; i++) {
                  var o = e.data[i];
                  o.contentQueries && o.contentQueries(1, n[i], i);
                }
            })(o, l, i)),
          null !== r &&
            (function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : Zn,
                r = t.localNames;
              if (null !== r)
                for (var i = t.index + 1, o = 0; o < r.length; o += 2) {
                  var a = r[o + 1],
                    s = -1 === a ? n(t, e) : e[a];
                  e[i++] = s;
                }
            })(i, l);
      }
      function co() {
        var e = It();
        Dt() ? (xt.lFrame.isParent = !1) : Nt((e = e.parent), !1);
        var t = e;
        xt.lFrame.elementDepthCount--;
        var n = Rt();
        n.firstCreatePass && (Gt(n, e), wt(e) && n.queries.elementEnd(e)),
          null !== t.classes &&
            (function (e) {
              return 0 != (16 & e.flags);
            })(t) &&
            uo(n, t, Ot(), t.classes, !0),
          null !== t.styles &&
            (function (e) {
              return 0 != (32 & e.flags);
            })(t) &&
            uo(n, t, Ot(), t.styles, !1);
      }
      function ho(e, t, n, r) {
        lo(e, t, n, r), co();
      }
      function fo(e) {
        return !!e && "function" == typeof e.then;
      }
      function vo(e) {
        return !!e && "function" == typeof e.subscribe;
      }
      function po(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = arguments.length > 3 ? arguments[3] : void 0,
          i = Ot(),
          o = Rt(),
          a = It();
        return (
          (function (e, t, n, r, i, o) {
            var a =
                arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              s = arguments.length > 7 ? arguments[7] : void 0,
              u = Et(r),
              l = e.firstCreatePass && (e.cleanup || (e.cleanup = [])),
              c = Xr(t),
              h = !0;
            if (3 === r.type) {
              var f = Zn(r, t),
                d = s ? s(f) : ut,
                v = d.target || f,
                p = c.length,
                y = s
                  ? function (e) {
                      return s(Qn(e[r.index])).target;
                    }
                  : r.index;
              if (rn(n)) {
                var g = null;
                if (
                  (!s &&
                    u &&
                    (g = (function (e, t, n, r) {
                      var i = e.cleanup;
                      if (null != i)
                        for (var o = 0; o < i.length - 1; o += 2) {
                          var a = i[o];
                          if (a === n && i[o + 1] === r) {
                            var s = t[7],
                              u = i[o + 2];
                            return s.length > u ? s[u] : null;
                          }
                          "string" == typeof a && (o += 2);
                        }
                      return null;
                    })(e, t, i, r.index)),
                  null !== g)
                )
                  ((g.__ngLastListenerFn__ || g).__ngNextListenerFn__ = o),
                    (g.__ngLastListenerFn__ = o),
                    (h = !1);
                else {
                  o = go(r, t, o, !1);
                  var m = n.listen(d.name || v, i, o);
                  c.push(o, m), l && l.push(i, y, p, p + 1);
                }
              } else
                (o = go(r, t, o, !0)),
                  v.addEventListener(i, o, a),
                  c.push(o),
                  l && l.push(i, y, p, a);
            }
            var _,
              k = r.outputs;
            if (h && null !== k && (_ = k[i])) {
              var C = _.length;
              if (C)
                for (var b = 0; b < C; b += 2) {
                  var w = t[_[b]][_[b + 1]].subscribe(o),
                    S = c.length;
                  c.push(o, w), l && l.push(i, r.index, S, -(S + 1));
                }
            }
          })(o, i, i[11], a, e, t, n, r),
          po
        );
      }
      function yo(e, t, n) {
        try {
          return !1 !== t(n);
        } catch (r) {
          return ei(e, r), !1;
        }
      }
      function go(e, t, n, r) {
        return function i(o) {
          if (o === Function) return n;
          var a = 2 & e.flags ? $n(e.index, t) : t;
          0 == (32 & t[2]) && Zr(a);
          for (var s = yo(t, n, o), u = i.__ngNextListenerFn__; u; )
            (s = yo(t, u, o) && s), (u = u.__ngNextListenerFn__);
          return r && !1 === s && (o.preventDefault(), (o.returnValue = !1)), s;
        };
      }
      function mo(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = Ot(),
          r = Rt(),
          i = e + 19,
          o = r.firstCreatePass ? kr(r, n[6], e, 3, null, null) : r.data[i],
          a = (n[i] = (function (e, t) {
            return rn(t) ? t.createText(e) : t.createTextNode(e);
          })(t, n[11]));
        pi(r, n, a, o), Nt(o, !1);
      }
      function _o(e) {
        return ko("", e, ""), _o;
      }
      function ko(e, t, n) {
        var r = Ot(),
          i = (function (e, t, n, r) {
            return no(e, Ut(), n) ? t + pn(n) + r : dr;
          })(r, e, t, n);
        return (
          i !== dr &&
            (function (e, t, n) {
              var r = Kn(t, e),
                i = e[11];
              rn(i) ? i.setValue(r, n) : (r.textContent = n);
            })(r, Kt(), i),
          ko
        );
      }
      function Co(e, t, n) {
        var r = Ot();
        if (no(r, Ut(), t)) {
          var i = Kt();
          Or(Rt(), r, i, e, t, n, !0);
        }
        return Co;
      }
      function bo(e, t) {
        var n = Jn(e)[1],
          r = n.data.length - 1;
        Gt(n, { directiveStart: r, directiveEnd: r + 1 });
      }
      var wo = (function () {
        function e(t, n, r) {
          _classCallCheck(this, e),
            (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        return (
          _createClass(e, [
            {
              key: "isFirstChange",
              value: function () {
                return this.firstChange;
              },
            },
          ]),
          e
        );
      })();
      function So(e) {
        e.type.prototype.ngOnChanges &&
          ((e.setInput = Eo),
          (e.onChanges = function () {
            var e = To(this),
              t = e && e.current;
            if (t) {
              var n = e.previous;
              if (n === ut) e.previous = t;
              else for (var r in t) n[r] = t[r];
              (e.current = null), this.ngOnChanges(t);
            }
          }));
      }
      function Eo(e, t, n, r) {
        var i =
            To(e) ||
            (function (e, t) {
              return (e.__ngSimpleChanges__ = t);
            })(e, { previous: ut, current: null }),
          o = i.current || (i.current = {}),
          a = i.previous,
          s = this.declaredInputs[n],
          u = a[s];
        (o[s] = new wo(u && u.currentValue, t, a === ut)), (e[r] = t);
      }
      function To(e) {
        return e.__ngSimpleChanges__ || null;
      }
      var Ao = function e() {
          _classCallCheck(this, e);
        },
        xo = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "resolveComponentFactory",
                value: function (e) {
                  throw (function (e) {
                    var t = Error(
                      "No component factory found for ".concat(
                        we(e),
                        ". Did you add it to @NgModule.entryComponents?"
                      )
                    );
                    return (t.ngComponent = e), t;
                  })(e);
                },
              },
            ]),
            e
          );
        })(),
        Po = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (e.NULL = new xo()), e;
        })(),
        Oo = (function () {
          var e = function e(t) {
            _classCallCheck(this, e), (this.nativeElement = t);
          };
          return (
            (e.__NG_ELEMENT_ID__ = function () {
              return Ro(e);
            }),
            e
          );
        })(),
        Ro = function (e) {
          return Ai(e, It(), Ot());
        },
        Io = function e() {
          _classCallCheck(this, e);
        },
        No = (function () {
          var e = { Important: 1, DashCase: 2 };
          return (
            (e[e.Important] = "Important"), (e[e.DashCase] = "DashCase"), e
          );
        })(),
        Do = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.__NG_ELEMENT_ID__ = function () {
              return jo();
            }),
            e
          );
        })(),
        jo = function () {
          var e = Ot(),
            t = $n(It().index, e);
          return (function (e) {
            var t = e[11];
            if (rn(t)) return t;
            throw new Error(
              "Cannot inject Renderer2 when the application uses Renderer3!"
            );
          })(Ct(t) ? t : e);
        },
        Fo = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.ɵprov = de({
              token: e,
              providedIn: "root",
              factory: function () {
                return null;
              },
            })),
            e
          );
        })(),
        Lo = new (function e(t) {
          _classCallCheck(this, e),
            (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        })("9.0.1"),
        Uo = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "supports",
                value: function (e) {
                  return eo(e);
                },
              },
              {
                key: "create",
                value: function (e) {
                  return new Mo(e);
                },
              },
            ]),
            e
          );
        })(),
        Vo = function (e, t) {
          return t;
        },
        Mo = (function () {
          function e(t) {
            _classCallCheck(this, e),
              (this.length = 0),
              (this._linkedRecords = null),
              (this._unlinkedRecords = null),
              (this._previousItHead = null),
              (this._itHead = null),
              (this._itTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._movesHead = null),
              (this._movesTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null),
              (this._identityChangesHead = null),
              (this._identityChangesTail = null),
              (this._trackByFn = t || Vo);
          }
          return (
            _createClass(e, [
              {
                key: "forEachItem",
                value: function (e) {
                  var t;
                  for (t = this._itHead; null !== t; t = t._next) e(t);
                },
              },
              {
                key: "forEachOperation",
                value: function (e) {
                  for (
                    var t = this._itHead,
                      n = this._removalsHead,
                      r = 0,
                      i = null;
                    t || n;

                  ) {
                    var o = !n || (t && t.currentIndex < Bo(n, r, i)) ? t : n,
                      a = Bo(o, r, i),
                      s = o.currentIndex;
                    if (o === n) r--, (n = n._nextRemoved);
                    else if (((t = t._next), null == o.previousIndex)) r++;
                    else {
                      i || (i = []);
                      var u = a - r,
                        l = s - r;
                      if (u != l) {
                        for (var c = 0; c < u; c++) {
                          var h = c < i.length ? i[c] : (i[c] = 0),
                            f = h + c;
                          l <= f && f < u && (i[c] = h + 1);
                        }
                        i[o.previousIndex] = l - u;
                      }
                    }
                    a !== s && e(o, a, s);
                  }
                },
              },
              {
                key: "forEachPreviousItem",
                value: function (e) {
                  var t;
                  for (
                    t = this._previousItHead;
                    null !== t;
                    t = t._nextPrevious
                  )
                    e(t);
                },
              },
              {
                key: "forEachAddedItem",
                value: function (e) {
                  var t;
                  for (t = this._additionsHead; null !== t; t = t._nextAdded)
                    e(t);
                },
              },
              {
                key: "forEachMovedItem",
                value: function (e) {
                  var t;
                  for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
                },
              },
              {
                key: "forEachRemovedItem",
                value: function (e) {
                  var t;
                  for (t = this._removalsHead; null !== t; t = t._nextRemoved)
                    e(t);
                },
              },
              {
                key: "forEachIdentityChange",
                value: function (e) {
                  var t;
                  for (
                    t = this._identityChangesHead;
                    null !== t;
                    t = t._nextIdentityChange
                  )
                    e(t);
                },
              },
              {
                key: "diff",
                value: function (e) {
                  if ((null == e && (e = []), !eo(e)))
                    throw new Error(
                      "Error trying to diff '".concat(
                        we(e),
                        "'. Only arrays and iterables are allowed"
                      )
                    );
                  return this.check(e) ? this : null;
                },
              },
              { key: "onDestroy", value: function () {} },
              {
                key: "check",
                value: function (e) {
                  var t = this;
                  this._reset();
                  var n,
                    r,
                    i,
                    o = this._itHead,
                    a = !1;
                  if (Array.isArray(e)) {
                    this.length = e.length;
                    for (var s = 0; s < this.length; s++)
                      (r = e[s]),
                        (i = this._trackByFn(s, r)),
                        null !== o && Yi(o.trackById, i)
                          ? (a && (o = this._verifyReinsertion(o, r, i, s)),
                            Yi(o.item, r) || this._addIdentityChange(o, r))
                          : ((o = this._mismatch(o, r, i, s)), (a = !0)),
                        (o = o._next);
                  } else
                    (n = 0),
                      (function (e, t) {
                        if (Array.isArray(e))
                          for (var n = 0; n < e.length; n++) t(e[n]);
                        else
                          for (var r, i = e[Ji()](); !(r = i.next()).done; )
                            t(r.value);
                      })(e, function (e) {
                        (i = t._trackByFn(n, e)),
                          null !== o && Yi(o.trackById, i)
                            ? (a && (o = t._verifyReinsertion(o, e, i, n)),
                              Yi(o.item, e) || t._addIdentityChange(o, e))
                            : ((o = t._mismatch(o, e, i, n)), (a = !0)),
                          (o = o._next),
                          n++;
                      }),
                      (this.length = n);
                  return this._truncate(o), (this.collection = e), this.isDirty;
                },
              },
              {
                key: "_reset",
                value: function () {
                  if (this.isDirty) {
                    var e, t;
                    for (
                      e = this._previousItHead = this._itHead;
                      null !== e;
                      e = e._next
                    )
                      e._nextPrevious = e._next;
                    for (e = this._additionsHead; null !== e; e = e._nextAdded)
                      e.previousIndex = e.currentIndex;
                    for (
                      this._additionsHead = this._additionsTail = null,
                        e = this._movesHead;
                      null !== e;
                      e = t
                    )
                      (e.previousIndex = e.currentIndex), (t = e._nextMoved);
                    (this._movesHead = this._movesTail = null),
                      (this._removalsHead = this._removalsTail = null),
                      (this._identityChangesHead = this._identityChangesTail =
                        null);
                  }
                },
              },
              {
                key: "_mismatch",
                value: function (e, t, n, r) {
                  var i;
                  return (
                    null === e
                      ? (i = this._itTail)
                      : ((i = e._prev), this._remove(e)),
                    null !==
                    (e =
                      null === this._linkedRecords
                        ? null
                        : this._linkedRecords.get(n, r))
                      ? (Yi(e.item, t) || this._addIdentityChange(e, t),
                        this._moveAfter(e, i, r))
                      : null !==
                        (e =
                          null === this._unlinkedRecords
                            ? null
                            : this._unlinkedRecords.get(n, null))
                      ? (Yi(e.item, t) || this._addIdentityChange(e, t),
                        this._reinsertAfter(e, i, r))
                      : (e = this._addAfter(new Ho(t, n), i, r)),
                    e
                  );
                },
              },
              {
                key: "_verifyReinsertion",
                value: function (e, t, n, r) {
                  var i =
                    null === this._unlinkedRecords
                      ? null
                      : this._unlinkedRecords.get(n, null);
                  return (
                    null !== i
                      ? (e = this._reinsertAfter(i, e._prev, r))
                      : e.currentIndex != r &&
                        ((e.currentIndex = r), this._addToMoves(e, r)),
                    e
                  );
                },
              },
              {
                key: "_truncate",
                value: function (e) {
                  for (; null !== e; ) {
                    var t = e._next;
                    this._addToRemovals(this._unlink(e)), (e = t);
                  }
                  null !== this._unlinkedRecords &&
                    this._unlinkedRecords.clear(),
                    null !== this._additionsTail &&
                      (this._additionsTail._nextAdded = null),
                    null !== this._movesTail &&
                      (this._movesTail._nextMoved = null),
                    null !== this._itTail && (this._itTail._next = null),
                    null !== this._removalsTail &&
                      (this._removalsTail._nextRemoved = null),
                    null !== this._identityChangesTail &&
                      (this._identityChangesTail._nextIdentityChange = null);
                },
              },
              {
                key: "_reinsertAfter",
                value: function (e, t, n) {
                  null !== this._unlinkedRecords &&
                    this._unlinkedRecords.remove(e);
                  var r = e._prevRemoved,
                    i = e._nextRemoved;
                  return (
                    null === r
                      ? (this._removalsHead = i)
                      : (r._nextRemoved = i),
                    null === i
                      ? (this._removalsTail = r)
                      : (i._prevRemoved = r),
                    this._insertAfter(e, t, n),
                    this._addToMoves(e, n),
                    e
                  );
                },
              },
              {
                key: "_moveAfter",
                value: function (e, t, n) {
                  return (
                    this._unlink(e),
                    this._insertAfter(e, t, n),
                    this._addToMoves(e, n),
                    e
                  );
                },
              },
              {
                key: "_addAfter",
                value: function (e, t, n) {
                  return (
                    this._insertAfter(e, t, n),
                    (this._additionsTail =
                      null === this._additionsTail
                        ? (this._additionsHead = e)
                        : (this._additionsTail._nextAdded = e)),
                    e
                  );
                },
              },
              {
                key: "_insertAfter",
                value: function (e, t, n) {
                  var r = null === t ? this._itHead : t._next;
                  return (
                    (e._next = r),
                    (e._prev = t),
                    null === r ? (this._itTail = e) : (r._prev = e),
                    null === t ? (this._itHead = e) : (t._next = e),
                    null === this._linkedRecords &&
                      (this._linkedRecords = new qo()),
                    this._linkedRecords.put(e),
                    (e.currentIndex = n),
                    e
                  );
                },
              },
              {
                key: "_remove",
                value: function (e) {
                  return this._addToRemovals(this._unlink(e));
                },
              },
              {
                key: "_unlink",
                value: function (e) {
                  null !== this._linkedRecords && this._linkedRecords.remove(e);
                  var t = e._prev,
                    n = e._next;
                  return (
                    null === t ? (this._itHead = n) : (t._next = n),
                    null === n ? (this._itTail = t) : (n._prev = t),
                    e
                  );
                },
              },
              {
                key: "_addToMoves",
                value: function (e, t) {
                  return e.previousIndex === t
                    ? e
                    : ((this._movesTail =
                        null === this._movesTail
                          ? (this._movesHead = e)
                          : (this._movesTail._nextMoved = e)),
                      e);
                },
              },
              {
                key: "_addToRemovals",
                value: function (e) {
                  return (
                    null === this._unlinkedRecords &&
                      (this._unlinkedRecords = new qo()),
                    this._unlinkedRecords.put(e),
                    (e.currentIndex = null),
                    (e._nextRemoved = null),
                    null === this._removalsTail
                      ? ((this._removalsTail = this._removalsHead = e),
                        (e._prevRemoved = null))
                      : ((e._prevRemoved = this._removalsTail),
                        (this._removalsTail = this._removalsTail._nextRemoved =
                          e)),
                    e
                  );
                },
              },
              {
                key: "_addIdentityChange",
                value: function (e, t) {
                  return (
                    (e.item = t),
                    (this._identityChangesTail =
                      null === this._identityChangesTail
                        ? (this._identityChangesHead = e)
                        : (this._identityChangesTail._nextIdentityChange = e)),
                    e
                  );
                },
              },
              {
                key: "isDirty",
                get: function () {
                  return (
                    null !== this._additionsHead ||
                    null !== this._movesHead ||
                    null !== this._removalsHead ||
                    null !== this._identityChangesHead
                  );
                },
              },
            ]),
            e
          );
        })(),
        Ho = function e(t, n) {
          _classCallCheck(this, e),
            (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        },
        zo = (function () {
          function e() {
            _classCallCheck(this, e), (this._head = null), (this._tail = null);
          }
          return (
            _createClass(e, [
              {
                key: "add",
                value: function (e) {
                  null === this._head
                    ? ((this._head = this._tail = e),
                      (e._nextDup = null),
                      (e._prevDup = null))
                    : ((this._tail._nextDup = e),
                      (e._prevDup = this._tail),
                      (e._nextDup = null),
                      (this._tail = e));
                },
              },
              {
                key: "get",
                value: function (e, t) {
                  var n;
                  for (n = this._head; null !== n; n = n._nextDup)
                    if (
                      (null === t || t <= n.currentIndex) &&
                      Yi(n.trackById, e)
                    )
                      return n;
                  return null;
                },
              },
              {
                key: "remove",
                value: function (e) {
                  var t = e._prevDup,
                    n = e._nextDup;
                  return (
                    null === t ? (this._head = n) : (t._nextDup = n),
                    null === n ? (this._tail = t) : (n._prevDup = t),
                    null === this._head
                  );
                },
              },
            ]),
            e
          );
        })(),
        qo = (function () {
          function e() {
            _classCallCheck(this, e), (this.map = new Map());
          }
          return (
            _createClass(e, [
              {
                key: "put",
                value: function (e) {
                  var t = e.trackById,
                    n = this.map.get(t);
                  n || ((n = new zo()), this.map.set(t, n)), n.add(e);
                },
              },
              {
                key: "get",
                value: function (e, t) {
                  var n = this.map.get(e);
                  return n ? n.get(e, t) : null;
                },
              },
              {
                key: "remove",
                value: function (e) {
                  var t = e.trackById;
                  return this.map.get(t).remove(e) && this.map.delete(t), e;
                },
              },
              {
                key: "clear",
                value: function () {
                  this.map.clear();
                },
              },
              {
                key: "isEmpty",
                get: function () {
                  return 0 === this.map.size;
                },
              },
            ]),
            e
          );
        })();
      function Bo(e, t, n) {
        var r = e.previousIndex;
        if (null === r) return r;
        var i = 0;
        return n && r < n.length && (i = n[r]), r + t + i;
      }
      var Wo = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "supports",
                value: function (e) {
                  return e instanceof Map || to(e);
                },
              },
              {
                key: "create",
                value: function () {
                  return new Qo();
                },
              },
            ]),
            e
          );
        })(),
        Qo = (function () {
          function e() {
            _classCallCheck(this, e),
              (this._records = new Map()),
              (this._mapHead = null),
              (this._appendAfter = null),
              (this._previousMapHead = null),
              (this._changesHead = null),
              (this._changesTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null);
          }
          return (
            _createClass(e, [
              {
                key: "forEachItem",
                value: function (e) {
                  var t;
                  for (t = this._mapHead; null !== t; t = t._next) e(t);
                },
              },
              {
                key: "forEachPreviousItem",
                value: function (e) {
                  var t;
                  for (
                    t = this._previousMapHead;
                    null !== t;
                    t = t._nextPrevious
                  )
                    e(t);
                },
              },
              {
                key: "forEachChangedItem",
                value: function (e) {
                  var t;
                  for (t = this._changesHead; null !== t; t = t._nextChanged)
                    e(t);
                },
              },
              {
                key: "forEachAddedItem",
                value: function (e) {
                  var t;
                  for (t = this._additionsHead; null !== t; t = t._nextAdded)
                    e(t);
                },
              },
              {
                key: "forEachRemovedItem",
                value: function (e) {
                  var t;
                  for (t = this._removalsHead; null !== t; t = t._nextRemoved)
                    e(t);
                },
              },
              {
                key: "diff",
                value: function (e) {
                  if (e) {
                    if (!(e instanceof Map || to(e)))
                      throw new Error(
                        "Error trying to diff '".concat(
                          we(e),
                          "'. Only maps and objects are allowed"
                        )
                      );
                  } else e = new Map();
                  return this.check(e) ? this : null;
                },
              },
              { key: "onDestroy", value: function () {} },
              {
                key: "check",
                value: function (e) {
                  var t = this;
                  this._reset();
                  var n = this._mapHead;
                  if (
                    ((this._appendAfter = null),
                    this._forEach(e, function (e, r) {
                      if (n && n.key === r)
                        t._maybeAddToChanges(n, e),
                          (t._appendAfter = n),
                          (n = n._next);
                      else {
                        var i = t._getOrCreateRecordForKey(r, e);
                        n = t._insertBeforeOrAppend(n, i);
                      }
                    }),
                    n)
                  ) {
                    n._prev && (n._prev._next = null), (this._removalsHead = n);
                    for (var r = n; null !== r; r = r._nextRemoved)
                      r === this._mapHead && (this._mapHead = null),
                        this._records.delete(r.key),
                        (r._nextRemoved = r._next),
                        (r.previousValue = r.currentValue),
                        (r.currentValue = null),
                        (r._prev = null),
                        (r._next = null);
                  }
                  return (
                    this._changesTail &&
                      (this._changesTail._nextChanged = null),
                    this._additionsTail &&
                      (this._additionsTail._nextAdded = null),
                    this.isDirty
                  );
                },
              },
              {
                key: "_insertBeforeOrAppend",
                value: function (e, t) {
                  if (e) {
                    var n = e._prev;
                    return (
                      (t._next = e),
                      (t._prev = n),
                      (e._prev = t),
                      n && (n._next = t),
                      e === this._mapHead && (this._mapHead = t),
                      (this._appendAfter = e),
                      e
                    );
                  }
                  return (
                    this._appendAfter
                      ? ((this._appendAfter._next = t),
                        (t._prev = this._appendAfter))
                      : (this._mapHead = t),
                    (this._appendAfter = t),
                    null
                  );
                },
              },
              {
                key: "_getOrCreateRecordForKey",
                value: function (e, t) {
                  if (this._records.has(e)) {
                    var n = this._records.get(e);
                    this._maybeAddToChanges(n, t);
                    var r = n._prev,
                      i = n._next;
                    return (
                      r && (r._next = i),
                      i && (i._prev = r),
                      (n._next = null),
                      (n._prev = null),
                      n
                    );
                  }
                  var o = new Ko(e);
                  return (
                    this._records.set(e, o),
                    (o.currentValue = t),
                    this._addToAdditions(o),
                    o
                  );
                },
              },
              {
                key: "_reset",
                value: function () {
                  if (this.isDirty) {
                    var e;
                    for (
                      this._previousMapHead = this._mapHead,
                        e = this._previousMapHead;
                      null !== e;
                      e = e._next
                    )
                      e._nextPrevious = e._next;
                    for (e = this._changesHead; null !== e; e = e._nextChanged)
                      e.previousValue = e.currentValue;
                    for (e = this._additionsHead; null != e; e = e._nextAdded)
                      e.previousValue = e.currentValue;
                    (this._changesHead = this._changesTail = null),
                      (this._additionsHead = this._additionsTail = null),
                      (this._removalsHead = null);
                  }
                },
              },
              {
                key: "_maybeAddToChanges",
                value: function (e, t) {
                  Yi(t, e.currentValue) ||
                    ((e.previousValue = e.currentValue),
                    (e.currentValue = t),
                    this._addToChanges(e));
                },
              },
              {
                key: "_addToAdditions",
                value: function (e) {
                  null === this._additionsHead
                    ? (this._additionsHead = this._additionsTail = e)
                    : ((this._additionsTail._nextAdded = e),
                      (this._additionsTail = e));
                },
              },
              {
                key: "_addToChanges",
                value: function (e) {
                  null === this._changesHead
                    ? (this._changesHead = this._changesTail = e)
                    : ((this._changesTail._nextChanged = e),
                      (this._changesTail = e));
                },
              },
              {
                key: "_forEach",
                value: function (e, t) {
                  e instanceof Map
                    ? e.forEach(t)
                    : Object.keys(e).forEach(function (n) {
                        return t(e[n], n);
                      });
                },
              },
              {
                key: "isDirty",
                get: function () {
                  return (
                    null !== this._additionsHead ||
                    null !== this._changesHead ||
                    null !== this._removalsHead
                  );
                },
              },
            ]),
            e
          );
        })(),
        Ko = function e(t) {
          _classCallCheck(this, e),
            (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        },
        Zo = (function () {
          var e = (function () {
            function e(t) {
              _classCallCheck(this, e), (this.factories = t);
            }
            return (
              _createClass(
                e,
                [
                  {
                    key: "find",
                    value: function (e) {
                      var t,
                        n = this.factories.find(function (t) {
                          return t.supports(e);
                        });
                      if (null != n) return n;
                      throw new Error(
                        "Cannot find a differ supporting object '"
                          .concat(e, "' of type '")
                          .concat((t = e).name || typeof t, "'")
                      );
                    },
                  },
                ],
                [
                  {
                    key: "create",
                    value: function (t, n) {
                      if (null != n) {
                        var r = n.factories.slice();
                        t = t.concat(r);
                      }
                      return new e(t);
                    },
                  },
                  {
                    key: "extend",
                    value: function (t) {
                      return {
                        provide: e,
                        useFactory: function (n) {
                          if (!n)
                            throw new Error(
                              "Cannot extend IterableDiffers without a parent injector"
                            );
                          return e.create(t, n);
                        },
                        deps: [[e, new ce(), new ue()]],
                      };
                    },
                  },
                ]
              ),
              e
            );
          })();
          return (
            (e.ɵprov = de({
              token: e,
              providedIn: "root",
              factory: function () {
                return new e([new Uo()]);
              },
            })),
            e
          );
        })(),
        Go = (function () {
          var e = (function () {
            function e(t) {
              _classCallCheck(this, e), (this.factories = t);
            }
            return (
              _createClass(
                e,
                [
                  {
                    key: "find",
                    value: function (e) {
                      var t = this.factories.find(function (t) {
                        return t.supports(e);
                      });
                      if (t) return t;
                      throw new Error(
                        "Cannot find a differ supporting object '".concat(
                          e,
                          "'"
                        )
                      );
                    },
                  },
                ],
                [
                  {
                    key: "create",
                    value: function (t, n) {
                      if (n) {
                        var r = n.factories.slice();
                        t = t.concat(r);
                      }
                      return new e(t);
                    },
                  },
                  {
                    key: "extend",
                    value: function (t) {
                      return {
                        provide: e,
                        useFactory: function (n) {
                          if (!n)
                            throw new Error(
                              "Cannot extend KeyValueDiffers without a parent injector"
                            );
                          return e.create(t, n);
                        },
                        deps: [[e, new ce(), new ue()]],
                      };
                    },
                  },
                ]
              ),
              e
            );
          })();
          return (
            (e.ɵprov = de({
              token: e,
              providedIn: "root",
              factory: function () {
                return new e([new Wo()]);
              },
            })),
            e
          );
        })(),
        $o = [new Wo()],
        Jo = new Zo([new Uo()]),
        Yo = new Go($o),
        Xo = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.__NG_ELEMENT_ID__ = function () {
              return ea(e, Oo);
            }),
            e
          );
        })(),
        ea = function (e, t) {
          return (function (e, t, n, r) {
            return (
              wi ||
                (wi = (function (e) {
                  function t(e, n, r) {
                    var i;
                    return (
                      _classCallCheck(this, t),
                      ((i = _possibleConstructorReturn(
                        this,
                        _getPrototypeOf(t).call(this)
                      ))._declarationView = e),
                      (i._declarationTContainer = n),
                      (i.elementRef = r),
                      i
                    );
                  }
                  return (
                    _inherits(t, e),
                    _createClass(t, [
                      {
                        key: "createEmbeddedView",
                        value: function (e) {
                          var t = this._declarationTContainer.tViews,
                            n = _r(
                              this._declarationView,
                              t,
                              e,
                              16,
                              null,
                              t.node
                            );
                          n[17] =
                            this._declarationView[
                              this._declarationTContainer.index
                            ];
                          var r = this._declarationView[5];
                          null !== r && (n[5] = r.createEmbeddedView(t)),
                            Cr(t, n, e);
                          var i = new Ei(n);
                          return (i._tViewNode = n[6]), i;
                        },
                      },
                    ]),
                    t
                  );
                })(e)),
              0 === n.type ? new wi(r, n, Ai(t, n, r)) : null
            );
          })(e, t, It(), Ot());
        },
        ta = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.__NG_ELEMENT_ID__ = function () {
              return na(e, Oo);
            }),
            e
          );
        })(),
        na = function (e, t) {
          return (function (e, t, n, r) {
            var i;
            Si ||
              (Si = (function (e) {
                function n(e, t, r) {
                  var i;
                  return (
                    _classCallCheck(this, n),
                    ((i = _possibleConstructorReturn(
                      this,
                      _getPrototypeOf(n).call(this)
                    ))._lContainer = e),
                    (i._hostTNode = t),
                    (i._hostView = r),
                    i
                  );
                }
                return (
                  _inherits(n, e),
                  _createClass(n, [
                    {
                      key: "clear",
                      value: function () {
                        for (; this.length > 0; ) this.remove(this.length - 1);
                      },
                    },
                    {
                      key: "get",
                      value: function (e) {
                        return (
                          (null !== this._lContainer[8] &&
                            this._lContainer[8][e]) ||
                          null
                        );
                      },
                    },
                    {
                      key: "createEmbeddedView",
                      value: function (e, t, n) {
                        var r = e.createEmbeddedView(t || {});
                        return this.insert(r, n), r;
                      },
                    },
                    {
                      key: "createComponent",
                      value: function (e, t, n, r, i) {
                        var o = n || this.parentInjector;
                        if (!i && null == e.ngModule && o) {
                          var a = o.get(et, null);
                          a && (i = a);
                        }
                        var s = e.create(o, r, void 0, i);
                        return this.insert(s.hostView, t), s;
                      },
                    },
                    {
                      key: "insert",
                      value: function (e, t) {
                        var n = e._lView,
                          r = n[1];
                        if (e.destroyed)
                          throw new Error(
                            "Cannot insert a destroyed View in a ViewContainer!"
                          );
                        if ((this.allocateContainerIfNeeded(), bt(n[3]))) {
                          var i = this.indexOf(e);
                          if (-1 !== i) this.detach(i);
                          else {
                            var o = n[3],
                              a = new Si(o, o[6], o[3]);
                            a.detach(a.indexOf(e));
                          }
                        }
                        var s = this._adjustIndex(t);
                        return (
                          (function (e, t, n, r) {
                            var i = 9 + r,
                              o = n.length;
                            r > 0 && (n[i - 1][4] = t),
                              r < o - 9
                                ? ((t[4] = n[i]), rt(n, 9 + r, t))
                                : (n.push(t), (t[4] = null)),
                              (t[3] = n);
                            var a = t[17];
                            null !== a &&
                              n !== a &&
                              (function (e, t) {
                                var n = e[5],
                                  r = t[3][3][16];
                                16 != (16 & r[2]) && t[16] !== r && (e[2] |= 1),
                                  null === n ? (e[5] = [t]) : n.push(t);
                              })(a, t);
                            var s = t[5];
                            null !== s && s.insertView(e), (t[2] |= 128);
                          })(r, n, this._lContainer, s),
                          oi(r, n, !0, yi(s, this._lContainer)),
                          e.attachToViewContainerRef(this),
                          rt(this._lContainer[8], s, e),
                          e
                        );
                      },
                    },
                    {
                      key: "move",
                      value: function (e, t) {
                        if (e.destroyed)
                          throw new Error(
                            "Cannot move a destroyed View in a ViewContainer!"
                          );
                        return this.insert(e, t);
                      },
                    },
                    {
                      key: "indexOf",
                      value: function (e) {
                        var t = this._lContainer[8];
                        return null !== t ? t.indexOf(e) : -1;
                      },
                    },
                    {
                      key: "remove",
                      value: function (e) {
                        this.allocateContainerIfNeeded();
                        var t = this._adjustIndex(e, -1);
                        (function (e, t) {
                          var n = si(e, t);
                          n && ui(n[1], n);
                        })(this._lContainer, t),
                          it(this._lContainer[8], t);
                      },
                    },
                    {
                      key: "detach",
                      value: function (e) {
                        this.allocateContainerIfNeeded();
                        var t = this._adjustIndex(e, -1),
                          n = si(this._lContainer, t);
                        return n && null != it(this._lContainer[8], t)
                          ? new Ei(n)
                          : null;
                      },
                    },
                    {
                      key: "_adjustIndex",
                      value: function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0;
                        return null == e ? this.length + t : e;
                      },
                    },
                    {
                      key: "allocateContainerIfNeeded",
                      value: function () {
                        null === this._lContainer[8] &&
                          (this._lContainer[8] = []);
                      },
                    },
                    {
                      key: "element",
                      get: function () {
                        return Ai(t, this._hostTNode, this._hostView);
                      },
                    },
                    {
                      key: "injector",
                      get: function () {
                        return new Nn(this._hostTNode, this._hostView);
                      },
                    },
                    {
                      key: "parentInjector",
                      get: function () {
                        var e = En(this._hostTNode, this._hostView),
                          t = vn(e, this._hostView),
                          n = (function (e, t, n) {
                            if (n.parent && -1 !== n.parent.injectorIndex) {
                              for (
                                var r = n.parent.injectorIndex, i = n.parent;
                                null != i.parent && r == i.parent.injectorIndex;

                              )
                                i = i.parent;
                              return i;
                            }
                            for (var o = dn(e), a = t, s = t[6]; o > 1; )
                              (s = (a = a[15])[6]), o--;
                            return s;
                          })(e, this._hostView, this._hostTNode);
                        return hn(e) && null != n
                          ? new Nn(n, t)
                          : new Nn(null, this._hostView);
                      },
                    },
                    {
                      key: "length",
                      get: function () {
                        return this._lContainer.length - 9;
                      },
                    },
                  ]),
                  n
                );
              })(e));
            var o = r[n.index];
            if (bt(o))
              (function (e, t) {
                e[2] = -2;
              })((i = o));
            else {
              var a;
              if (4 === n.type) a = Qn(o);
              else if (((a = r[11].createComment("")), At(r))) {
                var s = r[11],
                  u = Zn(n, r);
                hi(
                  s,
                  vi(s, u),
                  a,
                  (function (e, t) {
                    return rn(e) ? e.nextSibling(t) : t.nextSibling;
                  })(s, u)
                );
              } else pi(r[1], r, a, n);
              (r[n.index] = i = qr(o, r, a, n)), Kr(r, i);
            }
            return new Si(i, n, r);
          })(e, t, It(), Ot());
        },
        ra = {};
      function ia(e) {
        var t = [];
        for (var n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      var oa = new He("SCHEDULER_TOKEN", {
          providedIn: "root",
          factory: function () {
            return gn;
          },
        }),
        aa = (function (e) {
          function t(e, n) {
            var r;
            return (
              _classCallCheck(this, t),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this)
              )).componentDef = e),
              (r.ngModule = n),
              (r.componentType = e.type),
              (r.selector = e.selectors.map(fr).join(",")),
              (r.ngContentSelectors = e.ngContentSelectors
                ? e.ngContentSelectors
                : []),
              (r.isBoundToModule = !!n),
              r
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "create",
                value: function (e, t, n, r) {
                  var i,
                    o,
                    a = (r = r || this.ngModule)
                      ? (function (e, t) {
                          return {
                            get: function (n, r, i) {
                              var o = e.get(n, ra, i);
                              return o !== ra || r === ra ? o : t.get(n, r, i);
                            },
                          };
                        })(e, r.injector)
                      : e,
                    s = a.get(Io, on),
                    u = a.get(Fo, null),
                    l = s.createRenderer(null, this.componentDef),
                    c = this.componentDef.selectors[0][0] || "div",
                    h = n
                      ? (function (e, t, n) {
                          if (rn(e))
                            return e.selectRootElement(t, n === at.ShadowDom);
                          var r = "string" == typeof t ? e.querySelector(t) : t;
                          return (r.textContent = ""), r;
                        })(l, n, this.componentDef.encapsulation)
                      : mr(
                          c,
                          s.createRenderer(null, this.componentDef),
                          (function (e) {
                            var t = e.toLowerCase();
                            return "svg" === t
                              ? "http://www.w3.org/2000/svg"
                              : "math" === t
                              ? "http://www.w3.org/1998/MathML/"
                              : null;
                          })(c)
                        ),
                    f = this.componentDef.onPush ? 576 : 528,
                    d =
                      "string" == typeof n &&
                      /^#root-ng-internal-isolated-\d+/.test(n),
                    v = {
                      components: [],
                      scheduler: gn,
                      clean: Yr,
                      playerHandler: null,
                      flags: 0,
                    },
                    p = Ar(0, -1, null, 1, 0, null, null, null, null, null),
                    y = _r(null, p, v, f, null, null, s, l, u, a),
                    g = n && h ? Lo.full : null;
                  qt(y, null);
                  try {
                    var m = (function (e, t, n, r, i, o, a) {
                      var s = n[1];
                      n[19] = e;
                      var u = kr(s, null, 0, 3, null, null),
                        l = (u.mergedAttrs = t.hostAttrs);
                      null !== l &&
                        (Gi(u, l),
                        null !== e &&
                          (an(i, e, l),
                          null !== u.classes && Ci(i, e, u.classes),
                          null !== u.styles && ki(i, e, u.styles)));
                      var c = r.createRenderer(e, t);
                      null !== e &&
                        o &&
                        (rn(i)
                          ? i.setAttribute(e, "ng-version", o)
                          : e.setAttribute("ng-version", o));
                      var h = _r(
                        n,
                        Tr(t),
                        null,
                        t.onPush ? 64 : 16,
                        n[19],
                        u,
                        r,
                        c,
                        null
                      );
                      return (
                        s.firstCreatePass &&
                          (Tn(bn(u, n), s, t.type),
                          Fr(s, u),
                          Ur(u, n.length, 1)),
                        Kr(n, h),
                        (n[19] = h)
                      );
                    })(h, this.componentDef, y, s, l, g);
                    (o = Gn(y[1], 0)),
                      t &&
                        (o.projection = t.map(function (e) {
                          return Array.from(e);
                        })),
                      (i = (function (e, t, n, r, i) {
                        var o = n[1],
                          a = (function (e, t, n) {
                            var r = It();
                            e.firstCreatePass &&
                              (n.providersResolver && n.providersResolver(n),
                              jr(e, r, 1),
                              Vr(e, t, n));
                            var i = On(t, e, t.length - 1, r);
                            tr(i, t);
                            var o = Zn(r, t);
                            return o && tr(o, t), i;
                          })(o, n, t);
                        r.components.push(a),
                          (e[8] = a),
                          i &&
                            i.forEach(function (e) {
                              return e(a, t);
                            }),
                          t.contentQueries &&
                            t.contentQueries(1, a, n.length - 1);
                        var s = It();
                        if (
                          o.firstCreatePass &&
                          (null !== t.hostBindings || null !== t.hostAttrs)
                        ) {
                          Zt(s.index - 19);
                          var u = n[1];
                          Ir(u, t), Nr(u, n, t.hostVars), Dr(t, a);
                        }
                        return a;
                      })(m, this.componentDef, y, v, [bo])),
                      Cr(p, y, null);
                  } finally {
                    Qt();
                  }
                  var _ = new sa(this.componentType, i, Ai(Oo, o, y), y, o);
                  return (n && !d) || (_.hostView._tViewNode.child = o), _;
                },
              },
              {
                key: "inputs",
                get: function () {
                  return ia(this.componentDef.inputs);
                },
              },
              {
                key: "outputs",
                get: function () {
                  return ia(this.componentDef.outputs);
                },
              },
            ]),
            t
          );
        })(Ao),
        sa = (function (e) {
          function t(e, n, r, i, o) {
            var a, s, u, l;
            return (
              _classCallCheck(this, t),
              ((a = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this)
              )).location = r),
              (a._rootLView = i),
              (a._tNode = o),
              (a.destroyCbs = []),
              (a.instance = n),
              (a.hostView = a.changeDetectorRef = new Ti(i)),
              (a.hostView._tViewNode =
                ((s = i[1]),
                (u = i),
                null == (l = s.node) &&
                  (s.node = l = xr(0, null, 2, -1, null, null)),
                (u[6] = l))),
              (a.componentType = e),
              a
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "destroy",
                value: function () {
                  this.destroyCbs &&
                    (this.destroyCbs.forEach(function (e) {
                      return e();
                    }),
                    (this.destroyCbs = null),
                    !this.hostView.destroyed && this.hostView.destroy());
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  this.destroyCbs && this.destroyCbs.push(e);
                },
              },
              {
                key: "injector",
                get: function () {
                  return new Nn(this._tNode, this._rootLView);
                },
              },
            ]),
            t
          );
        })(
          (function () {
            return function e() {
              _classCallCheck(this, e);
            };
          })()
        ),
        ua = void 0,
        la = [
          "en",
          [["a", "p"], ["AM", "PM"], ua],
          [["AM", "PM"], ua, ua],
          [
            ["S", "M", "T", "W", "T", "F", "S"],
            ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          ],
          ua,
          [
            ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          ],
          ua,
          [
            ["B", "A"],
            ["BC", "AD"],
            ["Before Christ", "Anno Domini"],
          ],
          0,
          [6, 0],
          ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
          ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
          ["{1}, {0}", ua, "{1} 'at' {0}", ua],
          [
            ".",
            ",",
            ";",
            "%",
            "+",
            "-",
            "E",
            "\xd7",
            "\u2030",
            "\u221e",
            "NaN",
            ":",
          ],
          ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
          "USD",
          "$",
          "US Dollar",
          {},
          function (e) {
            var t = Math.floor(Math.abs(e)),
              n = e.toString().replace(/^[^.]*\.?/, "").length;
            return 1 === t && 0 === n ? 1 : 5;
          },
        ],
        ca = {};
      function ha(e) {
        return (
          e in ca ||
            (ca[e] =
              Ne.ng &&
              Ne.ng.common &&
              Ne.ng.common.locales &&
              Ne.ng.common.locales[e]),
          ca[e]
        );
      }
      var fa = (function () {
        var e = {
          LocaleId: 0,
          DayPeriodsFormat: 1,
          DayPeriodsStandalone: 2,
          DaysFormat: 3,
          DaysStandalone: 4,
          MonthsFormat: 5,
          MonthsStandalone: 6,
          Eras: 7,
          FirstDayOfWeek: 8,
          WeekendRange: 9,
          DateFormat: 10,
          TimeFormat: 11,
          DateTimeFormat: 12,
          NumberSymbols: 13,
          NumberFormats: 14,
          CurrencyCode: 15,
          CurrencySymbol: 16,
          CurrencyName: 17,
          Currencies: 18,
          PluralCase: 19,
          ExtraData: 20,
        };
        return (
          (e[e.LocaleId] = "LocaleId"),
          (e[e.DayPeriodsFormat] = "DayPeriodsFormat"),
          (e[e.DayPeriodsStandalone] = "DayPeriodsStandalone"),
          (e[e.DaysFormat] = "DaysFormat"),
          (e[e.DaysStandalone] = "DaysStandalone"),
          (e[e.MonthsFormat] = "MonthsFormat"),
          (e[e.MonthsStandalone] = "MonthsStandalone"),
          (e[e.Eras] = "Eras"),
          (e[e.FirstDayOfWeek] = "FirstDayOfWeek"),
          (e[e.WeekendRange] = "WeekendRange"),
          (e[e.DateFormat] = "DateFormat"),
          (e[e.TimeFormat] = "TimeFormat"),
          (e[e.DateTimeFormat] = "DateTimeFormat"),
          (e[e.NumberSymbols] = "NumberSymbols"),
          (e[e.NumberFormats] = "NumberFormats"),
          (e[e.CurrencyCode] = "CurrencyCode"),
          (e[e.CurrencySymbol] = "CurrencySymbol"),
          (e[e.CurrencyName] = "CurrencyName"),
          (e[e.Currencies] = "Currencies"),
          (e[e.PluralCase] = "PluralCase"),
          (e[e.ExtraData] = "ExtraData"),
          e
        );
      })();
      function da(e) {
        var t;
        null == (t = e) &&
          (function (e, t, n, r) {
            throw new Error(
              "ASSERTION ERROR: ".concat("Expected localeId to be defined") +
                " [Expected=> null != ".concat(t, " <=Actual]")
            );
          })(0, t),
          "string" == typeof e && e.toLowerCase().replace(/_/g, "-");
      }
      var va = new Map(),
        pa = {
          provide: Po,
          useClass: (function (e) {
            function t(e) {
              var n;
              return (
                _classCallCheck(this, t),
                ((n = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(t).call(this)
                )).ngModule = e),
                n
              );
            }
            return (
              _inherits(t, e),
              _createClass(t, [
                {
                  key: "resolveComponentFactory",
                  value: function (e) {
                    var t = mt(e);
                    return new aa(t, this.ngModule);
                  },
                },
              ]),
              t
            );
          })(Po),
          deps: [et],
        },
        ya = (function (e) {
          function t(e, n) {
            var r;
            _classCallCheck(this, t),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this)
              ))._parent = n),
              (r._bootstrapComponents = []),
              (r.injector = _assertThisInitialized(r)),
              (r.destroyCbs = []);
            var i = kt(e),
              o = e[Ue] || null;
            return (
              o && da(o),
              (r._bootstrapComponents = mn(i.bootstrap)),
              (r._r3Injector = Li(
                e,
                n,
                [{ provide: et, useValue: _assertThisInitialized(r) }, pa],
                we(e)
              )),
              (r.instance = r.get(e)),
              r
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "get",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : Bi.THROW_IF_NOT_FOUND,
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : he.Default;
                  return e === Bi || e === et || e === ze
                    ? this
                    : this._r3Injector.get(e, t, n);
                },
              },
              {
                key: "destroy",
                value: function () {
                  var e = this._r3Injector;
                  !e.destroyed && e.destroy(),
                    this.destroyCbs.forEach(function (e) {
                      return e();
                    }),
                    (this.destroyCbs = null);
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  this.destroyCbs.push(e);
                },
              },
              {
                key: "componentFactoryResolver",
                get: function () {
                  return this.get(Po);
                },
              },
            ]),
            t
          );
        })(et),
        ga = (function (e) {
          function t(e) {
            var n;
            return (
              _classCallCheck(this, t),
              ((n = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this)
              )).moduleType = e),
              null !== kt(e) &&
                (function e(t) {
                  if (null !== t.ɵmod.id) {
                    var n = t.ɵmod.id;
                    (function (e, t, n) {
                      if (t && t !== n)
                        throw new Error(
                          "Duplicate module registered for "
                            .concat(e, " - ")
                            .concat(we(t), " vs ")
                            .concat(we(t.name))
                        );
                    })(n, va.get(n), t),
                      va.set(n, t);
                  }
                  var r = t.ɵmod.imports;
                  r instanceof Function && (r = r()),
                    r &&
                      r.forEach(function (t) {
                        return e(t);
                      });
                })(e),
              n
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "create",
                value: function (e) {
                  return new ya(this.moduleType, e);
                },
              },
            ]),
            t
          );
        })(tt);
      function ma(e, t, n, r, i, o) {
        var a = t + n;
        return no(e, a, i)
          ? (function (e, t, n) {
              return (e[t] = n);
            })(e, a + 1, o ? r.call(o, i) : r(i))
          : (function (e, t) {
              return e[t];
            })(e, a + 1);
      }
      var _a = (function (e) {
          function t() {
            var e,
              n =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (
              _classCallCheck(this, t),
              ((e = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this)
              )).__isAsync = n),
              e
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "emit",
                value: function (e) {
                  _get(_getPrototypeOf(t.prototype), "next", this).call(
                    this,
                    e
                  );
                },
              },
              {
                key: "subscribe",
                value: function (e, n, r) {
                  var i,
                    o = function (e) {
                      return null;
                    },
                    a = function () {
                      return null;
                    };
                  e && "object" == typeof e
                    ? ((i = this.__isAsync
                        ? function (t) {
                            setTimeout(function () {
                              return e.next(t);
                            });
                          }
                        : function (t) {
                            e.next(t);
                          }),
                      e.error &&
                        (o = this.__isAsync
                          ? function (t) {
                              setTimeout(function () {
                                return e.error(t);
                              });
                            }
                          : function (t) {
                              e.error(t);
                            }),
                      e.complete &&
                        (a = this.__isAsync
                          ? function () {
                              setTimeout(function () {
                                return e.complete();
                              });
                            }
                          : function () {
                              e.complete();
                            }))
                    : ((i = this.__isAsync
                        ? function (t) {
                            setTimeout(function () {
                              return e(t);
                            });
                          }
                        : function (t) {
                            e(t);
                          }),
                      n &&
                        (o = this.__isAsync
                          ? function (e) {
                              setTimeout(function () {
                                return n(e);
                              });
                            }
                          : function (e) {
                              n(e);
                            }),
                      r &&
                        (a = this.__isAsync
                          ? function () {
                              setTimeout(function () {
                                return r();
                              });
                            }
                          : function () {
                              r();
                            }));
                  var s = _get(
                    _getPrototypeOf(t.prototype),
                    "subscribe",
                    this
                  ).call(this, i, o, a);
                  return e instanceof f && e.add(s), s;
                },
              },
            ]),
            t
          );
        })(x),
        ka = new He("Application Initializer"),
        Ca = (function () {
          var e = (function () {
            function e(t) {
              var n = this;
              _classCallCheck(this, e),
                (this.appInits = t),
                (this.initialized = !1),
                (this.done = !1),
                (this.donePromise = new Promise(function (e, t) {
                  (n.resolve = e), (n.reject = t);
                }));
            }
            return (
              _createClass(e, [
                {
                  key: "runInitializers",
                  value: function () {
                    var e = this;
                    if (!this.initialized) {
                      var t = [],
                        n = function () {
                          (e.done = !0), e.resolve();
                        };
                      if (this.appInits)
                        for (var r = 0; r < this.appInits.length; r++) {
                          var i = this.appInits[r]();
                          fo(i) && t.push(i);
                        }
                      Promise.all(t)
                        .then(function () {
                          n();
                        })
                        .catch(function (t) {
                          e.reject(t);
                        }),
                        0 === t.length && n(),
                        (this.initialized = !0);
                    }
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function (t) {
              return new (t || e)($e(ka, 8));
            }),
            (e.ɵprov = de({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        ba = new He("AppId"),
        wa = {
          provide: ba,
          useFactory: function () {
            return "".concat(Sa()).concat(Sa()).concat(Sa());
          },
          deps: [],
        };
      function Sa() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      var Ea = new He("Platform Initializer"),
        Ta = new He("Platform ID"),
        Aa = new He("appBootstrapListener"),
        xa = (function () {
          var e = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, [
                {
                  key: "log",
                  value: function (e) {
                    console.log(e);
                  },
                },
                {
                  key: "warn",
                  value: function (e) {
                    console.warn(e);
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = de({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Pa = new He("LocaleId"),
        Oa = new He("DefaultCurrencyCode"),
        Ra = function e(t, n) {
          _classCallCheck(this, e),
            (this.ngModuleFactory = t),
            (this.componentFactories = n);
        },
        Ia = function (e) {
          return new ga(e);
        },
        Na = Ia,
        Da = function (e) {
          return Promise.resolve(Ia(e));
        },
        ja = function (e) {
          var t = Ia(e),
            n = mn(kt(e).declarations).reduce(function (e, t) {
              var n = mt(t);
              return n && e.push(new aa(n)), e;
            }, []);
          return new Ra(t, n);
        },
        Fa = ja,
        La = function (e) {
          return Promise.resolve(ja(e));
        },
        Ua = (function () {
          var e = (function () {
            function e() {
              _classCallCheck(this, e),
                (this.compileModuleSync = Na),
                (this.compileModuleAsync = Da),
                (this.compileModuleAndAllComponentsSync = Fa),
                (this.compileModuleAndAllComponentsAsync = La);
            }
            return (
              _createClass(e, [
                { key: "clearCache", value: function () {} },
                { key: "clearCacheFor", value: function (e) {} },
                { key: "getModuleId", value: function (e) {} },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = de({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Va = new He("compilerOptions"),
        Ma = Promise.resolve(0);
      function Ha(e) {
        "undefined" == typeof Zone
          ? Ma.then(function () {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
      }
      var za = (function () {
        function e(t) {
          var n,
            r,
            i = t.enableLongStackTrace,
            o = void 0 !== i && i,
            a = t.shouldCoalesceEventChangeDetection,
            s = void 0 !== a && a;
          if (
            (_classCallCheck(this, e),
            (this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new _a(!1)),
            (this.onMicrotaskEmpty = new _a(!1)),
            (this.onStable = new _a(!1)),
            (this.onError = new _a(!1)),
            "undefined" == typeof Zone)
          )
            throw new Error("In this configuration Angular requires Zone.js");
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec &&
              (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            o &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            (this.shouldCoalesceEventChangeDetection = s),
            (this.lastRequestAnimationFrameId = -1),
            (this.nativeRequestAnimationFrame = (function () {
              var e = Ne.requestAnimationFrame,
                t = Ne.cancelAnimationFrame;
              if ("undefined" != typeof Zone && e && t) {
                var n = e[Zone.__symbol__("OriginalDelegate")];
                n && (e = n);
                var r = t[Zone.__symbol__("OriginalDelegate")];
                r && (t = r);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (r =
              !!(n = this).shouldCoalesceEventChangeDetection &&
              n.nativeRequestAnimationFrame &&
              function () {
                !(function (e) {
                  -1 === e.lastRequestAnimationFrameId &&
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(Ne, function () {
                        (e.lastRequestAnimationFrameId = -1), Qa(e), Wa(e);
                      })),
                    Qa(e));
                })(n);
              }),
            (n._inner = n._inner.fork({
              name: "angular",
              properties: { isAngularZone: !0, maybeDelayChangeDetection: r },
              onInvokeTask: function (e, t, i, o, a, s) {
                try {
                  return Ka(n), e.invokeTask(i, o, a, s);
                } finally {
                  r && "eventTask" === o.type && r(), Za(n);
                }
              },
              onInvoke: function (e, t, r, i, o, a, s) {
                try {
                  return Ka(n), e.invoke(r, i, o, a, s);
                } finally {
                  Za(n);
                }
              },
              onHasTask: function (e, t, r, i) {
                e.hasTask(r, i),
                  t === r &&
                    ("microTask" == i.change
                      ? ((n._hasPendingMicrotasks = i.microTask), Qa(n), Wa(n))
                      : "macroTask" == i.change &&
                        (n.hasPendingMacrotasks = i.macroTask));
              },
              onHandleError: function (e, t, r, i) {
                return (
                  e.handleError(r, i),
                  n.runOutsideAngular(function () {
                    return n.onError.emit(i);
                  }),
                  !1
                );
              },
            }));
        }
        return (
          _createClass(
            e,
            [
              {
                key: "run",
                value: function (e, t, n) {
                  return this._inner.run(e, t, n);
                },
              },
              {
                key: "runTask",
                value: function (e, t, n, r) {
                  var i = this._inner,
                    o = i.scheduleEventTask("NgZoneEvent: " + r, e, Ba, qa, qa);
                  try {
                    return i.runTask(o, t, n);
                  } finally {
                    i.cancelTask(o);
                  }
                },
              },
              {
                key: "runGuarded",
                value: function (e, t, n) {
                  return this._inner.runGuarded(e, t, n);
                },
              },
              {
                key: "runOutsideAngular",
                value: function (e) {
                  return this._outer.run(e);
                },
              },
            ],
            [
              {
                key: "isInAngularZone",
                value: function () {
                  return !0 === Zone.current.get("isAngularZone");
                },
              },
              {
                key: "assertInAngularZone",
                value: function () {
                  if (!e.isInAngularZone())
                    throw new Error(
                      "Expected to be in Angular Zone, but it is not!"
                    );
                },
              },
              {
                key: "assertNotInAngularZone",
                value: function () {
                  if (e.isInAngularZone())
                    throw new Error(
                      "Expected to not be in Angular Zone, but it is!"
                    );
                },
              },
            ]
          ),
          e
        );
      })();
      function qa() {}
      var Ba = {};
      function Wa(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(function () {
                  return e.onStable.emit(null);
                });
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Qa(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          (e.shouldCoalesceEventChangeDetection &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function Ka(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function Za(e) {
        e._nesting--, Wa(e);
      }
      var Ga,
        $a = (function () {
          function e() {
            _classCallCheck(this, e),
              (this.hasPendingMicrotasks = !1),
              (this.hasPendingMacrotasks = !1),
              (this.isStable = !0),
              (this.onUnstable = new _a()),
              (this.onMicrotaskEmpty = new _a()),
              (this.onStable = new _a()),
              (this.onError = new _a());
          }
          return (
            _createClass(e, [
              {
                key: "run",
                value: function (e, t, n) {
                  return e.apply(t, n);
                },
              },
              {
                key: "runGuarded",
                value: function (e, t, n) {
                  return e.apply(t, n);
                },
              },
              {
                key: "runOutsideAngular",
                value: function (e) {
                  return e();
                },
              },
              {
                key: "runTask",
                value: function (e, t, n, r) {
                  return e.apply(t, n);
                },
              },
            ]),
            e
          );
        })(),
        Ja = (function () {
          var e = (function () {
            function e(t) {
              var n = this;
              _classCallCheck(this, e),
                (this._ngZone = t),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                t.run(function () {
                  n.taskTrackingZone =
                    "undefined" == typeof Zone
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            return (
              _createClass(e, [
                {
                  key: "_watchAngularEvents",
                  value: function () {
                    var e = this;
                    this._ngZone.onUnstable.subscribe({
                      next: function () {
                        (e._didWork = !0), (e._isZoneStable = !1);
                      },
                    }),
                      this._ngZone.runOutsideAngular(function () {
                        e._ngZone.onStable.subscribe({
                          next: function () {
                            za.assertNotInAngularZone(),
                              Ha(function () {
                                (e._isZoneStable = !0),
                                  e._runCallbacksIfReady();
                              });
                          },
                        });
                      });
                  },
                },
                {
                  key: "increasePendingRequestCount",
                  value: function () {
                    return (
                      (this._pendingCount += 1),
                      (this._didWork = !0),
                      this._pendingCount
                    );
                  },
                },
                {
                  key: "decreasePendingRequestCount",
                  value: function () {
                    if (((this._pendingCount -= 1), this._pendingCount < 0))
                      throw new Error("pending async requests below zero");
                    return this._runCallbacksIfReady(), this._pendingCount;
                  },
                },
                {
                  key: "isStable",
                  value: function () {
                    return (
                      this._isZoneStable &&
                      0 === this._pendingCount &&
                      !this._ngZone.hasPendingMacrotasks
                    );
                  },
                },
                {
                  key: "_runCallbacksIfReady",
                  value: function () {
                    var e = this;
                    if (this.isStable())
                      Ha(function () {
                        for (; 0 !== e._callbacks.length; ) {
                          var t = e._callbacks.pop();
                          clearTimeout(t.timeoutId), t.doneCb(e._didWork);
                        }
                        e._didWork = !1;
                      });
                    else {
                      var t = this.getPendingTasks();
                      (this._callbacks = this._callbacks.filter(function (e) {
                        return (
                          !e.updateCb ||
                          !e.updateCb(t) ||
                          (clearTimeout(e.timeoutId), !1)
                        );
                      })),
                        (this._didWork = !0);
                    }
                  },
                },
                {
                  key: "getPendingTasks",
                  value: function () {
                    return this.taskTrackingZone
                      ? this.taskTrackingZone.macroTasks.map(function (e) {
                          return {
                            source: e.source,
                            creationLocation: e.creationLocation,
                            data: e.data,
                          };
                        })
                      : [];
                  },
                },
                {
                  key: "addCallback",
                  value: function (e, t, n) {
                    var r = this,
                      i = -1;
                    t &&
                      t > 0 &&
                      (i = setTimeout(function () {
                        (r._callbacks = r._callbacks.filter(function (e) {
                          return e.timeoutId !== i;
                        })),
                          e(r._didWork, r.getPendingTasks());
                      }, t)),
                      this._callbacks.push({
                        doneCb: e,
                        timeoutId: i,
                        updateCb: n,
                      });
                  },
                },
                {
                  key: "whenStable",
                  value: function (e, t, n) {
                    if (n && !this.taskTrackingZone)
                      throw new Error(
                        'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                      );
                    this.addCallback(e, t, n), this._runCallbacksIfReady();
                  },
                },
                {
                  key: "getPendingRequestCount",
                  value: function () {
                    return this._pendingCount;
                  },
                },
                {
                  key: "findProviders",
                  value: function (e, t, n) {
                    return [];
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function (t) {
              return new (t || e)($e(za));
            }),
            (e.ɵprov = de({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Ya = (function () {
          var e = (function () {
            function e() {
              _classCallCheck(this, e),
                (this._applications = new Map()),
                Xa.addToWindow(this);
            }
            return (
              _createClass(e, [
                {
                  key: "registerApplication",
                  value: function (e, t) {
                    this._applications.set(e, t);
                  },
                },
                {
                  key: "unregisterApplication",
                  value: function (e) {
                    this._applications.delete(e);
                  },
                },
                {
                  key: "unregisterAllApplications",
                  value: function () {
                    this._applications.clear();
                  },
                },
                {
                  key: "getTestability",
                  value: function (e) {
                    return this._applications.get(e) || null;
                  },
                },
                {
                  key: "getAllTestabilities",
                  value: function () {
                    return Array.from(this._applications.values());
                  },
                },
                {
                  key: "getAllRootElements",
                  value: function () {
                    return Array.from(this._applications.keys());
                  },
                },
                {
                  key: "findTestabilityInTree",
                  value: function (e) {
                    var t =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1];
                    return Xa.findTestabilityInTree(this, e, t);
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = de({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Xa = new ((function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              { key: "addToWindow", value: function (e) {} },
              {
                key: "findTestabilityInTree",
                value: function (e, t, n) {
                  return null;
                },
              },
            ]),
            e
          );
        })())(),
        es = function (e, t, n) {
          var r = new ga(n);
          if (0 === Qi.size) return Promise.resolve(r);
          var i,
            o,
            a =
              ((i = e
                .get(Va, [])
                .concat(t)
                .map(function (e) {
                  return e.providers;
                })),
              (o = []),
              i.forEach(function (e) {
                return e && o.push.apply(o, _toConsumableArray(e));
              }),
              o);
          if (0 === a.length) return Promise.resolve(r);
          var s = (function () {
              var e = Ne.ng;
              if (!e || !e.ɵcompilerFacade)
                throw new Error(
                  "Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping."
                );
              return e.ɵcompilerFacade;
            })(),
            u = Bi.create({ providers: a }).get(s.ResourceLoader);
          return (function (e) {
            var t = [],
              n = new Map();
            function r(e) {
              var t = n.get(e);
              if (!t) {
                var r = (function (e) {
                  return Promise.resolve(u.get(e));
                })(e);
                n.set(e, (t = r.then(Zi)));
              }
              return t;
            }
            return (
              Qi.forEach(function (e, n) {
                var i = [];
                e.templateUrl &&
                  i.push(
                    r(e.templateUrl).then(function (t) {
                      e.template = t;
                    })
                  );
                var o = e.styleUrls,
                  a = e.styles || (e.styles = []),
                  s = e.styles.length;
                o &&
                  o.forEach(function (t, n) {
                    a.push(""),
                      i.push(
                        r(t).then(function (r) {
                          (a[s + n] = r),
                            o.splice(o.indexOf(t), 1),
                            0 == o.length && (e.styleUrls = void 0);
                        })
                      );
                  });
                var u = Promise.all(i).then(function () {
                  return (function (e) {
                    Ki.delete(e);
                  })(n);
                });
                t.push(u);
              }),
              (Qi = new Map()),
              Promise.all(t).then(function () {})
            );
          })().then(function () {
            return r;
          });
        },
        ts = new He("AllowMultipleToken"),
        ns = function e(t, n) {
          _classCallCheck(this, e), (this.name = t), (this.token = n);
        };
      function rs(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          r = "Platform: ".concat(t),
          i = new He(r);
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            o = is();
          if (!o || o.injector.get(ts, !1))
            if (e) e(n.concat(t).concat({ provide: i, useValue: !0 }));
            else {
              var a = n
                .concat(t)
                .concat(
                  { provide: i, useValue: !0 },
                  { provide: Ri, useValue: "platform" }
                );
              !(function (e) {
                if (Ga && !Ga.destroyed && !Ga.injector.get(ts, !1))
                  throw new Error(
                    "There can be only one platform. Destroy the previous one to create a new one."
                  );
                Ga = e.get(os);
                var t = e.get(Ea, null);
                t &&
                  t.forEach(function (e) {
                    return e();
                  });
              })(Bi.create({ providers: a, name: r }));
            }
          return (function (e) {
            var t = is();
            if (!t) throw new Error("No platform exists!");
            if (!t.injector.get(e, null))
              throw new Error(
                "A platform with a different configuration has been created. Please destroy it first."
              );
            return t;
          })(i);
        };
      }
      function is() {
        return Ga && !Ga.destroyed ? Ga : null;
      }
      var os = (function () {
        var e = (function () {
          function e(t) {
            _classCallCheck(this, e),
              (this._injector = t),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          return (
            _createClass(e, [
              {
                key: "bootstrapModuleFactory",
                value: function (e, t) {
                  var n,
                    r,
                    i = this,
                    o =
                      ((n = t ? t.ngZone : void 0),
                      (r = (t && t.ngZoneEventCoalescing) || !1),
                      "noop" === n
                        ? new $a()
                        : ("zone.js" === n ? void 0 : n) ||
                          new za({
                            enableLongStackTrace: Hn(),
                            shouldCoalesceEventChangeDetection: r,
                          })),
                    a = [{ provide: za, useValue: o }];
                  return o.run(function () {
                    var t = Bi.create({
                        providers: a,
                        parent: i.injector,
                        name: e.moduleType.name,
                      }),
                      n = e.create(t),
                      r = n.injector.get(Ln, null);
                    if (!r)
                      throw new Error(
                        "No ErrorHandler. Is platform module (BrowserModule) included?"
                      );
                    return (
                      n.onDestroy(function () {
                        return ls(i._modules, n);
                      }),
                      o.runOutsideAngular(function () {
                        return o.onError.subscribe({
                          next: function (e) {
                            r.handleError(e);
                          },
                        });
                      }),
                      (function (e, t, r) {
                        try {
                          var o =
                            ((a = n.injector.get(Ca)).runInitializers(),
                            a.donePromise.then(function () {
                              return (
                                da(n.injector.get(Pa, "en-US") || "en-US"),
                                i._moduleDoBootstrap(n),
                                n
                              );
                            }));
                          return fo(o)
                            ? o.catch(function (n) {
                                throw (
                                  (t.runOutsideAngular(function () {
                                    return e.handleError(n);
                                  }),
                                  n)
                                );
                              })
                            : o;
                        } catch (s) {
                          throw (
                            (t.runOutsideAngular(function () {
                              return e.handleError(s);
                            }),
                            s)
                          );
                        }
                        var a;
                      })(r, o)
                    );
                  });
                },
              },
              {
                key: "bootstrapModule",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [],
                    r = as({}, n);
                  return es(this.injector, r, e).then(function (e) {
                    return t.bootstrapModuleFactory(e, r);
                  });
                },
              },
              {
                key: "_moduleDoBootstrap",
                value: function (e) {
                  var t = e.injector.get(us);
                  if (e._bootstrapComponents.length > 0)
                    e._bootstrapComponents.forEach(function (e) {
                      return t.bootstrap(e);
                    });
                  else {
                    if (!e.instance.ngDoBootstrap)
                      throw new Error(
                        "The module ".concat(
                          we(e.instance.constructor),
                          ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. '
                        ) + "Please define one of these."
                      );
                    e.instance.ngDoBootstrap(t);
                  }
                  this._modules.push(e);
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  this._destroyListeners.push(e);
                },
              },
              {
                key: "destroy",
                value: function () {
                  if (this._destroyed)
                    throw new Error("The platform has already been destroyed!");
                  this._modules.slice().forEach(function (e) {
                    return e.destroy();
                  }),
                    this._destroyListeners.forEach(function (e) {
                      return e();
                    }),
                    (this._destroyed = !0);
                },
              },
              {
                key: "injector",
                get: function () {
                  return this._injector;
                },
              },
              {
                key: "destroyed",
                get: function () {
                  return this._destroyed;
                },
              },
            ]),
            e
          );
        })();
        return (
          (e.ɵfac = function (t) {
            return new (t || e)($e(Bi));
          }),
          (e.ɵprov = de({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function as(e, t) {
        return Array.isArray(t)
          ? t.reduce(as, e)
          : Object.assign(Object.assign({}, e), t);
      }
      var ss,
        us =
          (((ss = (function () {
            function e(t, n, r, i, o, a) {
              var s = this;
              _classCallCheck(this, e),
                (this._zone = t),
                (this._console = n),
                (this._injector = r),
                (this._exceptionHandler = i),
                (this._componentFactoryResolver = o),
                (this._initStatus = a),
                (this._bootstrapListeners = []),
                (this._views = []),
                (this._runningTick = !1),
                (this._enforceNoNewChanges = !1),
                (this._stable = !0),
                (this.componentTypes = []),
                (this.components = []),
                (this._enforceNoNewChanges = Hn()),
                this._zone.onMicrotaskEmpty.subscribe({
                  next: function () {
                    s._zone.run(function () {
                      s.tick();
                    });
                  },
                });
              var u = new b(function (e) {
                  (s._stable =
                    s._zone.isStable &&
                    !s._zone.hasPendingMacrotasks &&
                    !s._zone.hasPendingMicrotasks),
                    s._zone.runOutsideAngular(function () {
                      e.next(s._stable), e.complete();
                    });
                }),
                l = new b(function (e) {
                  var t;
                  s._zone.runOutsideAngular(function () {
                    t = s._zone.onStable.subscribe(function () {
                      za.assertNotInAngularZone(),
                        Ha(function () {
                          s._stable ||
                            s._zone.hasPendingMacrotasks ||
                            s._zone.hasPendingMicrotasks ||
                            ((s._stable = !0), e.next(!0));
                        });
                    });
                  });
                  var n = s._zone.onUnstable.subscribe(function () {
                    za.assertInAngularZone(),
                      s._stable &&
                        ((s._stable = !1),
                        s._zone.runOutsideAngular(function () {
                          e.next(!1);
                        }));
                  });
                  return function () {
                    t.unsubscribe(), n.unsubscribe();
                  };
                });
              this.isStable = $(
                u,
                l.pipe(function (e) {
                  return J()(re(oe)(e));
                })
              );
            }
            return (
              _createClass(e, [
                {
                  key: "bootstrap",
                  value: function (e, t) {
                    var n,
                      r = this;
                    if (!this._initStatus.done)
                      throw new Error(
                        "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
                      );
                    (n =
                      e instanceof Ao
                        ? e
                        : this._componentFactoryResolver.resolveComponentFactory(
                            e
                          )),
                      this.componentTypes.push(n.componentType);
                    var i = n.isBoundToModule ? void 0 : this._injector.get(et),
                      o = n.create(Bi.NULL, [], t || n.selector, i);
                    o.onDestroy(function () {
                      r._unloadComponent(o);
                    });
                    var a = o.injector.get(Ja, null);
                    return (
                      a &&
                        o.injector
                          .get(Ya)
                          .registerApplication(o.location.nativeElement, a),
                      this._loadComponent(o),
                      Hn() &&
                        this._console.log(
                          "Angular is running in the development mode. Call enableProdMode() to enable the production mode."
                        ),
                      o
                    );
                  },
                },
                {
                  key: "tick",
                  value: function () {
                    var e = this;
                    if (this._runningTick)
                      throw new Error(
                        "ApplicationRef.tick is called recursively"
                      );
                    try {
                      this._runningTick = !0;
                      var t = !0,
                        n = !1,
                        r = void 0;
                      try {
                        for (
                          var i, o = this._views[Symbol.iterator]();
                          !(t = (i = o.next()).done);
                          t = !0
                        )
                          i.value.detectChanges();
                      } catch (h) {
                        (n = !0), (r = h);
                      } finally {
                        try {
                          t || null == o.return || o.return();
                        } finally {
                          if (n) throw r;
                        }
                      }
                      if (this._enforceNoNewChanges) {
                        var a = !0,
                          s = !1,
                          u = void 0;
                        try {
                          for (
                            var l, c = this._views[Symbol.iterator]();
                            !(a = (l = c.next()).done);
                            a = !0
                          )
                            l.value.checkNoChanges();
                        } catch (h) {
                          (s = !0), (u = h);
                        } finally {
                          try {
                            a || null == c.return || c.return();
                          } finally {
                            if (s) throw u;
                          }
                        }
                      }
                    } catch (f) {
                      this._zone.runOutsideAngular(function () {
                        return e._exceptionHandler.handleError(f);
                      });
                    } finally {
                      this._runningTick = !1;
                    }
                  },
                },
                {
                  key: "attachView",
                  value: function (e) {
                    var t = e;
                    this._views.push(t), t.attachToAppRef(this);
                  },
                },
                {
                  key: "detachView",
                  value: function (e) {
                    var t = e;
                    ls(this._views, t), t.detachFromAppRef();
                  },
                },
                {
                  key: "_loadComponent",
                  value: function (e) {
                    this.attachView(e.hostView),
                      this.tick(),
                      this.components.push(e),
                      this._injector
                        .get(Aa, [])
                        .concat(this._bootstrapListeners)
                        .forEach(function (t) {
                          return t(e);
                        });
                  },
                },
                {
                  key: "_unloadComponent",
                  value: function (e) {
                    this.detachView(e.hostView), ls(this.components, e);
                  },
                },
                {
                  key: "ngOnDestroy",
                  value: function () {
                    this._views.slice().forEach(function (e) {
                      return e.destroy();
                    });
                  },
                },
                {
                  key: "viewCount",
                  get: function () {
                    return this._views.length;
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || ss)(
              $e(za),
              $e(xa),
              $e(Bi),
              $e(Ln),
              $e(Po),
              $e(Ca)
            );
          }),
          (ss.ɵprov = de({ token: ss, factory: ss.ɵfac })),
          ss);
      function ls(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      var cs = function e() {
          _classCallCheck(this, e);
        },
        hs = function e() {
          _classCallCheck(this, e);
        },
        fs = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" },
        ds = (function () {
          var e = (function () {
            function e(t, n) {
              _classCallCheck(this, e),
                (this._compiler = t),
                (this._config = n || fs);
            }
            return (
              _createClass(e, [
                {
                  key: "load",
                  value: function (e) {
                    return this.loadAndCompile(e);
                  },
                },
                {
                  key: "loadAndCompile",
                  value: function (e) {
                    var t = this,
                      r = _slicedToArray(e.split("#"), 2),
                      i = r[0],
                      o = r[1];
                    return (
                      void 0 === o && (o = "default"),
                      n("crnd")(i)
                        .then(function (e) {
                          return e[o];
                        })
                        .then(function (e) {
                          return vs(e, i, o);
                        })
                        .then(function (e) {
                          return t._compiler.compileModuleAsync(e);
                        })
                    );
                  },
                },
                {
                  key: "loadFactory",
                  value: function (e) {
                    var t = _slicedToArray(e.split("#"), 2),
                      r = t[0],
                      i = t[1],
                      o = "NgFactory";
                    return (
                      void 0 === i && ((i = "default"), (o = "")),
                      n("crnd")(
                        this._config.factoryPathPrefix +
                          r +
                          this._config.factoryPathSuffix
                      )
                        .then(function (e) {
                          return e[i + o];
                        })
                        .then(function (e) {
                          return vs(e, r, i);
                        })
                    );
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function (t) {
              return new (t || e)($e(Ua), $e(hs, 8));
            }),
            (e.ɵprov = de({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      function vs(e, t, n) {
        if (!e)
          throw new Error("Cannot find '".concat(n, "' in '").concat(t, "'"));
        return e;
      }
      var ps = rs(null, "core", [
          { provide: Ta, useValue: "unknown" },
          { provide: os, deps: [Bi] },
          { provide: Ya, deps: [] },
          { provide: xa, deps: [] },
        ]),
        ys = [
          { provide: us, useClass: us, deps: [za, xa, Bi, Ln, Po, Ca] },
          {
            provide: oa,
            deps: [za],
            useFactory: function (e) {
              var t = [];
              return (
                e.onStable.subscribe(function () {
                  for (; t.length; ) t.pop()();
                }),
                function (e) {
                  t.push(e);
                }
              );
            },
          },
          { provide: Ca, useClass: Ca, deps: [[new ue(), ka]] },
          { provide: Ua, useClass: Ua, deps: [] },
          wa,
          {
            provide: Zo,
            useFactory: function () {
              return Jo;
            },
            deps: [],
          },
          {
            provide: Go,
            useFactory: function () {
              return Yo;
            },
            deps: [],
          },
          {
            provide: Pa,
            useFactory: function (e) {
              return (
                da(
                  (e =
                    e ||
                    ("undefined" != typeof $localize && $localize.locale) ||
                    "en-US")
                ),
                e
              );
            },
            deps: [[new se(Pa), new ue(), new ce()]],
          },
          { provide: Oa, useValue: "USD" },
        ],
        gs = (function () {
          var e = function e(t) {
            _classCallCheck(this, e);
          };
          return (
            (e.ɵmod = pt({ type: e })),
            (e.ɵinj = ve({
              factory: function (t) {
                return new (t || e)($e(us));
              },
              providers: ys,
            })),
            e
          );
        })(),
        ms = null;
      function _s() {
        return ms;
      }
      var ks,
        Cs = new He("DocumentToken"),
        bs =
          (((ks = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function (e) {
            return new (e || ks)();
          }),
          (ks.ɵprov = de({ factory: ws, token: ks, providedIn: "platform" })),
          ks);
      function ws() {
        return $e(Ts);
      }
      var Ss,
        Es = new He("Location Initialized"),
        Ts =
          (((Ss = (function (e) {
            function t(e) {
              var n;
              return (
                _classCallCheck(this, t),
                ((n = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(t).call(this)
                ))._doc = e),
                n._init(),
                n
              );
            }
            return (
              _inherits(t, e),
              _createClass(t, [
                {
                  key: "_init",
                  value: function () {
                    (this.location = _s().getLocation()),
                      (this._history = _s().getHistory());
                  },
                },
                {
                  key: "getBaseHrefFromDOM",
                  value: function () {
                    return _s().getBaseHref(this._doc);
                  },
                },
                {
                  key: "onPopState",
                  value: function (e) {
                    _s()
                      .getGlobalEventTarget(this._doc, "window")
                      .addEventListener("popstate", e, !1);
                  },
                },
                {
                  key: "onHashChange",
                  value: function (e) {
                    _s()
                      .getGlobalEventTarget(this._doc, "window")
                      .addEventListener("hashchange", e, !1);
                  },
                },
                {
                  key: "pushState",
                  value: function (e, t, n) {
                    As()
                      ? this._history.pushState(e, t, n)
                      : (this.location.hash = n);
                  },
                },
                {
                  key: "replaceState",
                  value: function (e, t, n) {
                    As()
                      ? this._history.replaceState(e, t, n)
                      : (this.location.hash = n);
                  },
                },
                {
                  key: "forward",
                  value: function () {
                    this._history.forward();
                  },
                },
                {
                  key: "back",
                  value: function () {
                    this._history.back();
                  },
                },
                {
                  key: "getState",
                  value: function () {
                    return this._history.state;
                  },
                },
                {
                  key: "href",
                  get: function () {
                    return this.location.href;
                  },
                },
                {
                  key: "protocol",
                  get: function () {
                    return this.location.protocol;
                  },
                },
                {
                  key: "hostname",
                  get: function () {
                    return this.location.hostname;
                  },
                },
                {
                  key: "port",
                  get: function () {
                    return this.location.port;
                  },
                },
                {
                  key: "pathname",
                  get: function () {
                    return this.location.pathname;
                  },
                  set: function (e) {
                    this.location.pathname = e;
                  },
                },
                {
                  key: "search",
                  get: function () {
                    return this.location.search;
                  },
                },
                {
                  key: "hash",
                  get: function () {
                    return this.location.hash;
                  },
                },
              ]),
              t
            );
          })(bs)).ɵfac = function (e) {
            return new (e || Ss)($e(Cs));
          }),
          (Ss.ɵprov = de({ factory: xs, token: Ss, providedIn: "platform" })),
          Ss);
      function As() {
        return !!window.history.pushState;
      }
      function xs() {
        return new Ts($e(Cs));
      }
      function Ps(e, t) {
        if (0 == e.length) return t;
        if (0 == t.length) return e;
        var n = 0;
        return (
          e.endsWith("/") && n++,
          t.startsWith("/") && n++,
          2 == n ? e + t.substring(1) : 1 == n ? e + t : e + "/" + t
        );
      }
      function Os(e) {
        var t = e.match(/#|\?|$/),
          n = (t && t.index) || e.length;
        return e.slice(0, n - ("/" === e[n - 1] ? 1 : 0)) + e.slice(n);
      }
      function Rs(e) {
        return e && "?" !== e[0] ? "?" + e : e;
      }
      var Is,
        Ns =
          (((Is = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function (e) {
            return new (e || Is)();
          }),
          (Is.ɵprov = de({ factory: Ds, token: Is, providedIn: "root" })),
          Is);
      function Ds(e) {
        var t = $e(Cs).location;
        return new Vs($e(bs), (t && t.origin) || "");
      }
      var js,
        Fs,
        Ls,
        Us = new He("appBaseHref"),
        Vs =
          (((Ls = (function (e) {
            function t(e, n) {
              var r;
              if (
                (_classCallCheck(this, t),
                ((r = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(t).call(this)
                ))._platformLocation = e),
                null == n && (n = r._platformLocation.getBaseHrefFromDOM()),
                null == n)
              )
                throw new Error(
                  "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."
                );
              return (r._baseHref = n), _possibleConstructorReturn(r);
            }
            return (
              _inherits(t, e),
              _createClass(t, [
                {
                  key: "onPopState",
                  value: function (e) {
                    this._platformLocation.onPopState(e),
                      this._platformLocation.onHashChange(e);
                  },
                },
                {
                  key: "getBaseHref",
                  value: function () {
                    return this._baseHref;
                  },
                },
                {
                  key: "prepareExternalUrl",
                  value: function (e) {
                    return Ps(this._baseHref, e);
                  },
                },
                {
                  key: "path",
                  value: function () {
                    var e =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0],
                      t =
                        this._platformLocation.pathname +
                        Rs(this._platformLocation.search),
                      n = this._platformLocation.hash;
                    return n && e ? "".concat(t).concat(n) : t;
                  },
                },
                {
                  key: "pushState",
                  value: function (e, t, n, r) {
                    var i = this.prepareExternalUrl(n + Rs(r));
                    this._platformLocation.pushState(e, t, i);
                  },
                },
                {
                  key: "replaceState",
                  value: function (e, t, n, r) {
                    var i = this.prepareExternalUrl(n + Rs(r));
                    this._platformLocation.replaceState(e, t, i);
                  },
                },
                {
                  key: "forward",
                  value: function () {
                    this._platformLocation.forward();
                  },
                },
                {
                  key: "back",
                  value: function () {
                    this._platformLocation.back();
                  },
                },
              ]),
              t
            );
          })(Ns)).ɵfac = function (e) {
            return new (e || Ls)($e(bs), $e(Us, 8));
          }),
          (Ls.ɵprov = de({ token: Ls, factory: Ls.ɵfac })),
          Ls),
        Ms =
          (((Fs = (function (e) {
            function t(e, n) {
              var r;
              return (
                _classCallCheck(this, t),
                ((r = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(t).call(this)
                ))._platformLocation = e),
                (r._baseHref = ""),
                null != n && (r._baseHref = n),
                r
              );
            }
            return (
              _inherits(t, e),
              _createClass(t, [
                {
                  key: "onPopState",
                  value: function (e) {
                    this._platformLocation.onPopState(e),
                      this._platformLocation.onHashChange(e);
                  },
                },
                {
                  key: "getBaseHref",
                  value: function () {
                    return this._baseHref;
                  },
                },
                {
                  key: "path",
                  value: function () {
                    arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    var e = this._platformLocation.hash;
                    return (
                      null == e && (e = "#"), e.length > 0 ? e.substring(1) : e
                    );
                  },
                },
                {
                  key: "prepareExternalUrl",
                  value: function (e) {
                    var t = Ps(this._baseHref, e);
                    return t.length > 0 ? "#" + t : t;
                  },
                },
                {
                  key: "pushState",
                  value: function (e, t, n, r) {
                    var i = this.prepareExternalUrl(n + Rs(r));
                    0 == i.length && (i = this._platformLocation.pathname),
                      this._platformLocation.pushState(e, t, i);
                  },
                },
                {
                  key: "replaceState",
                  value: function (e, t, n, r) {
                    var i = this.prepareExternalUrl(n + Rs(r));
                    0 == i.length && (i = this._platformLocation.pathname),
                      this._platformLocation.replaceState(e, t, i);
                  },
                },
                {
                  key: "forward",
                  value: function () {
                    this._platformLocation.forward();
                  },
                },
                {
                  key: "back",
                  value: function () {
                    this._platformLocation.back();
                  },
                },
              ]),
              t
            );
          })(Ns)).ɵfac = function (e) {
            return new (e || Fs)($e(bs), $e(Us, 8));
          }),
          (Fs.ɵprov = de({ token: Fs, factory: Fs.ɵfac })),
          Fs),
        Hs =
          (((js = (function () {
            function e(t, n) {
              var r = this;
              _classCallCheck(this, e),
                (this._subject = new _a()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = t);
              var i = this._platformStrategy.getBaseHref();
              (this._platformLocation = n),
                (this._baseHref = Os(qs(i))),
                this._platformStrategy.onPopState(function (e) {
                  r._subject.emit({
                    url: r.path(!0),
                    pop: !0,
                    state: e.state,
                    type: e.type,
                  });
                });
            }
            return (
              _createClass(e, [
                {
                  key: "path",
                  value: function () {
                    var e =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    return this.normalize(this._platformStrategy.path(e));
                  },
                },
                {
                  key: "getState",
                  value: function () {
                    return this._platformLocation.getState();
                  },
                },
                {
                  key: "isCurrentPathEqualTo",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "";
                    return this.path() == this.normalize(e + Rs(t));
                  },
                },
                {
                  key: "normalize",
                  value: function (t) {
                    return e.stripTrailingSlash(
                      (function (e, t) {
                        return e && t.startsWith(e) ? t.substring(e.length) : t;
                      })(this._baseHref, qs(t))
                    );
                  },
                },
                {
                  key: "prepareExternalUrl",
                  value: function (e) {
                    return (
                      e && "/" !== e[0] && (e = "/" + e),
                      this._platformStrategy.prepareExternalUrl(e)
                    );
                  },
                },
                {
                  key: "go",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "",
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null;
                    this._platformStrategy.pushState(n, "", e, t),
                      this._notifyUrlChangeListeners(
                        this.prepareExternalUrl(e + Rs(t)),
                        n
                      );
                  },
                },
                {
                  key: "replaceState",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "",
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null;
                    this._platformStrategy.replaceState(n, "", e, t),
                      this._notifyUrlChangeListeners(
                        this.prepareExternalUrl(e + Rs(t)),
                        n
                      );
                  },
                },
                {
                  key: "forward",
                  value: function () {
                    this._platformStrategy.forward();
                  },
                },
                {
                  key: "back",
                  value: function () {
                    this._platformStrategy.back();
                  },
                },
                {
                  key: "onUrlChange",
                  value: function (e) {
                    var t = this;
                    this._urlChangeListeners.push(e),
                      this.subscribe(function (e) {
                        t._notifyUrlChangeListeners(e.url, e.state);
                      });
                  },
                },
                {
                  key: "_notifyUrlChangeListeners",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "",
                      t = arguments.length > 1 ? arguments[1] : void 0;
                    this._urlChangeListeners.forEach(function (n) {
                      return n(e, t);
                    });
                  },
                },
                {
                  key: "subscribe",
                  value: function (e, t, n) {
                    return this._subject.subscribe({
                      next: e,
                      error: t,
                      complete: n,
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || js)($e(Ns), $e(bs));
          }),
          (js.normalizeQueryParams = Rs),
          (js.joinWithSlash = Ps),
          (js.stripTrailingSlash = Os),
          (js.ɵprov = de({ factory: zs, token: js, providedIn: "root" })),
          js);
      function zs() {
        return new Hs($e(Ns), $e(bs));
      }
      function qs(e) {
        return e.replace(/\/index.html$/, "");
      }
      var Bs,
        Ws = (function () {
          var e = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
          return (
            (e[e.Zero] = "Zero"),
            (e[e.One] = "One"),
            (e[e.Two] = "Two"),
            (e[e.Few] = "Few"),
            (e[e.Many] = "Many"),
            (e[e.Other] = "Other"),
            e
          );
        })(),
        Qs = function e() {
          _classCallCheck(this, e);
        },
        Ks =
          (((Bs = (function (e) {
            function t(e) {
              var n;
              return (
                _classCallCheck(this, t),
                ((n = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(t).call(this)
                )).locale = e),
                n
              );
            }
            return (
              _inherits(t, e),
              _createClass(t, [
                {
                  key: "getPluralCategory",
                  value: function (e, t) {
                    switch (
                      (function (e) {
                        return (function (e) {
                          var t = (function (e) {
                              return e.toLowerCase().replace(/_/g, "-");
                            })(e),
                            n = ha(t);
                          if (n) return n;
                          var r = t.split("-")[0];
                          if ((n = ha(r))) return n;
                          if ("en" === r) return la;
                          throw new Error(
                            'Missing locale data for the locale "'.concat(
                              e,
                              '".'
                            )
                          );
                        })(e)[fa.PluralCase];
                      })(t || this.locale)(e)
                    ) {
                      case Ws.Zero:
                        return "zero";
                      case Ws.One:
                        return "one";
                      case Ws.Two:
                        return "two";
                      case Ws.Few:
                        return "few";
                      case Ws.Many:
                        return "many";
                      default:
                        return "other";
                    }
                  },
                },
              ]),
              t
            );
          })(Qs)).ɵfac = function (e) {
            return new (e || Bs)($e(Pa));
          }),
          (Bs.ɵprov = de({ token: Bs, factory: Bs.ɵfac })),
          Bs);
      function Zs(e, t) {
        t = encodeURIComponent(t);
        var n = !0,
          r = !1,
          i = void 0;
        try {
          for (
            var o, a = e.split(";")[Symbol.iterator]();
            !(n = (o = a.next()).done);
            n = !0
          ) {
            var s = o.value,
              u = s.indexOf("="),
              l = _slicedToArray(
                -1 == u ? [s, ""] : [s.slice(0, u), s.slice(u + 1)],
                2
              ),
              c = l[0],
              h = l[1];
            if (c.trim() === t) return decodeURIComponent(h);
          }
        } catch (f) {
          (r = !0), (i = f);
        } finally {
          try {
            n || null == a.return || a.return();
          } finally {
            if (r) throw i;
          }
        }
        return null;
      }
      var Gs,
        $s,
        Js,
        Ys,
        Xs = (function () {
          function e(t, n, r, i) {
            _classCallCheck(this, e),
              (this.$implicit = t),
              (this.ngForOf = n),
              (this.index = r),
              (this.count = i);
          }
          return (
            _createClass(e, [
              {
                key: "first",
                get: function () {
                  return 0 === this.index;
                },
              },
              {
                key: "last",
                get: function () {
                  return this.index === this.count - 1;
                },
              },
              {
                key: "even",
                get: function () {
                  return this.index % 2 == 0;
                },
              },
              {
                key: "odd",
                get: function () {
                  return !this.even;
                },
              },
            ]),
            e
          );
        })(),
        eu =
          (((Gs = (function () {
            function e(t, n, r) {
              _classCallCheck(this, e),
                (this._viewContainer = t),
                (this._template = n),
                (this._differs = r),
                (this._ngForOf = null),
                (this._ngForOfDirty = !0),
                (this._differ = null);
            }
            return (
              _createClass(
                e,
                [
                  {
                    key: "ngDoCheck",
                    value: function () {
                      if (this._ngForOfDirty) {
                        this._ngForOfDirty = !1;
                        var e = this._ngForOf;
                        if (!this._differ && e)
                          try {
                            this._differ = this._differs
                              .find(e)
                              .create(this.ngForTrackBy);
                          } catch (r) {
                            throw new Error(
                              "Cannot find a differ supporting object '"
                                .concat(e, "' of type '")
                                .concat(
                                  (t = e).name || typeof t,
                                  "'. NgFor only supports binding to Iterables such as Arrays."
                                )
                            );
                          }
                      }
                      var t;
                      if (this._differ) {
                        var n = this._differ.diff(this._ngForOf);
                        n && this._applyChanges(n);
                      }
                    },
                  },
                  {
                    key: "_applyChanges",
                    value: function (e) {
                      var t = this,
                        n = [];
                      e.forEachOperation(function (e, r, i) {
                        if (null == e.previousIndex) {
                          var o = t._viewContainer.createEmbeddedView(
                              t._template,
                              new Xs(null, t._ngForOf, -1, -1),
                              null === i ? void 0 : i
                            ),
                            a = new tu(e, o);
                          n.push(a);
                        } else if (null == i)
                          t._viewContainer.remove(null === r ? void 0 : r);
                        else if (null !== r) {
                          var s = t._viewContainer.get(r);
                          t._viewContainer.move(s, i);
                          var u = new tu(e, s);
                          n.push(u);
                        }
                      });
                      for (var r = 0; r < n.length; r++)
                        this._perViewChange(n[r].view, n[r].record);
                      for (
                        var i = 0, o = this._viewContainer.length;
                        i < o;
                        i++
                      ) {
                        var a = this._viewContainer.get(i);
                        (a.context.index = i),
                          (a.context.count = o),
                          (a.context.ngForOf = this._ngForOf);
                      }
                      e.forEachIdentityChange(function (e) {
                        t._viewContainer.get(e.currentIndex).context.$implicit =
                          e.item;
                      });
                    },
                  },
                  {
                    key: "_perViewChange",
                    value: function (e, t) {
                      e.context.$implicit = t.item;
                    },
                  },
                  {
                    key: "ngForOf",
                    set: function (e) {
                      (this._ngForOf = e), (this._ngForOfDirty = !0);
                    },
                  },
                  {
                    key: "ngForTrackBy",
                    set: function (e) {
                      Hn() &&
                        null != e &&
                        "function" != typeof e &&
                        console &&
                        console.warn &&
                        console.warn(
                          "trackBy must be a function, but received ".concat(
                            JSON.stringify(e),
                            ". "
                          ) +
                            "See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."
                        ),
                        (this._trackByFn = e);
                    },
                    get: function () {
                      return this._trackByFn;
                    },
                  },
                  {
                    key: "ngForTemplate",
                    set: function (e) {
                      e && (this._template = e);
                    },
                  },
                ],
                [
                  {
                    key: "ngTemplateContextGuard",
                    value: function (e, t) {
                      return !0;
                    },
                  },
                ]
              ),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || Gs)(io(ta), io(Xo), io(Zo));
          }),
          (Gs.ɵdir = gt({
            type: Gs,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
          })),
          Gs),
        tu = function e(t, n) {
          _classCallCheck(this, e), (this.record = t), (this.view = n);
        },
        nu = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "createSubscription",
                value: function (e, t) {
                  return e.subscribe({
                    next: t,
                    error: function (e) {
                      throw e;
                    },
                  });
                },
              },
              {
                key: "dispose",
                value: function (e) {
                  e.unsubscribe();
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  e.unsubscribe();
                },
              },
            ]),
            e
          );
        })(),
        ru = new ((function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "createSubscription",
                value: function (e, t) {
                  return e.then(t, function (e) {
                    throw e;
                  });
                },
              },
              { key: "dispose", value: function (e) {} },
              { key: "onDestroy", value: function (e) {} },
            ]),
            e
          );
        })())(),
        iu = new nu(),
        ou =
          (((Ys = (function () {
            function e(t) {
              _classCallCheck(this, e),
                (this._ref = t),
                (this._latestValue = null),
                (this._latestReturnedValue = null),
                (this._subscription = null),
                (this._obj = null),
                (this._strategy = null);
            }
            return (
              _createClass(e, [
                {
                  key: "ngOnDestroy",
                  value: function () {
                    this._subscription && this._dispose();
                  },
                },
                {
                  key: "transform",
                  value: function (e) {
                    return this._obj
                      ? e !== this._obj
                        ? (this._dispose(), this.transform(e))
                        : Yi(this._latestValue, this._latestReturnedValue)
                        ? this._latestReturnedValue
                        : ((this._latestReturnedValue = this._latestValue),
                          Xi.wrap(this._latestValue))
                      : (e && this._subscribe(e),
                        (this._latestReturnedValue = this._latestValue),
                        this._latestValue);
                  },
                },
                {
                  key: "_subscribe",
                  value: function (e) {
                    var t = this;
                    (this._obj = e),
                      (this._strategy = this._selectStrategy(e)),
                      (this._subscription = this._strategy.createSubscription(
                        e,
                        function (n) {
                          return t._updateLatestValue(e, n);
                        }
                      ));
                  },
                },
                {
                  key: "_selectStrategy",
                  value: function (t) {
                    if (fo(t)) return ru;
                    if (vo(t)) return iu;
                    throw Error(
                      "InvalidPipeArgument: '"
                        .concat(t, "' for pipe '")
                        .concat(we(e), "'")
                    );
                  },
                },
                {
                  key: "_dispose",
                  value: function () {
                    this._strategy.dispose(this._subscription),
                      (this._latestValue = null),
                      (this._latestReturnedValue = null),
                      (this._subscription = null),
                      (this._obj = null);
                  },
                },
                {
                  key: "_updateLatestValue",
                  value: function (e, t) {
                    e === this._obj &&
                      ((this._latestValue = t), this._ref.markForCheck());
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || Ys)(
              (function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : he.Default,
                  t = xi(!0);
                if (null != t || e & he.Optional) return t;
                throw new Error("No provider for ChangeDetectorRef!");
              })()
            );
          }),
          (Ys.ɵpipe = {
            type: (Js = { name: "async", type: Ys, pure: !1 }).type,
            name: Js.name,
            factory: null,
            pure: !1 !== Js.pure,
            onDestroy: Js.type.prototype.ngOnDestroy || null,
          }),
          Ys),
        au =
          ((($s = function e() {
            _classCallCheck(this, e);
          }).ɵmod = pt({ type: $s })),
          ($s.ɵinj = ve({
            factory: function (e) {
              return new (e || $s)();
            },
            providers: [{ provide: Qs, useClass: Ks }],
          })),
          $s);
      function su(e) {
        return "browser" === e;
      }
      var uu,
        lu,
        cu,
        hu,
        fu,
        du =
          (((uu = function e() {
            _classCallCheck(this, e);
          }).ɵprov = de({
            token: uu,
            providedIn: "root",
            factory: function () {
              return new vu($e(Cs), window, $e(Ln));
            },
          })),
          uu),
        vu = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.document = t),
              (this.window = n),
              (this.errorHandler = r),
              (this.offset = function () {
                return [0, 0];
              });
          }
          return (
            _createClass(e, [
              {
                key: "setOffset",
                value: function (e) {
                  this.offset = Array.isArray(e)
                    ? function () {
                        return e;
                      }
                    : e;
                },
              },
              {
                key: "getScrollPosition",
                value: function () {
                  return this.supportScrollRestoration()
                    ? [this.window.scrollX, this.window.scrollY]
                    : [0, 0];
                },
              },
              {
                key: "scrollToPosition",
                value: function (e) {
                  this.supportScrollRestoration() &&
                    this.window.scrollTo(e[0], e[1]);
                },
              },
              {
                key: "scrollToAnchor",
                value: function (e) {
                  if (this.supportScrollRestoration()) {
                    e =
                      this.window.CSS && this.window.CSS.escape
                        ? this.window.CSS.escape(e)
                        : e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1");
                    try {
                      var t = this.document.querySelector("#".concat(e));
                      if (t) return void this.scrollToElement(t);
                      var n = this.document.querySelector(
                        "[name='".concat(e, "']")
                      );
                      if (n) return void this.scrollToElement(n);
                    } catch (r) {
                      this.errorHandler.handleError(r);
                    }
                  }
                },
              },
              {
                key: "setHistoryScrollRestoration",
                value: function (e) {
                  if (this.supportScrollRestoration()) {
                    var t = this.window.history;
                    t && t.scrollRestoration && (t.scrollRestoration = e);
                  }
                },
              },
              {
                key: "scrollToElement",
                value: function (e) {
                  var t = e.getBoundingClientRect(),
                    n = t.left + this.window.pageXOffset,
                    r = t.top + this.window.pageYOffset,
                    i = this.offset();
                  this.window.scrollTo(n - i[0], r - i[1]);
                },
              },
              {
                key: "supportScrollRestoration",
                value: function () {
                  try {
                    return !!this.window && !!this.window.scrollTo;
                  } catch (e) {
                    return !1;
                  }
                },
              },
            ]),
            e
          );
        })(),
        pu = (function (e) {
          function t() {
            return (
              _classCallCheck(this, t),
              _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).apply(this, arguments)
              )
            );
          }
          return (
            _inherits(t, e),
            _createClass(
              t,
              [
                {
                  key: "getProperty",
                  value: function (e, t) {
                    return e[t];
                  },
                },
                {
                  key: "log",
                  value: function (e) {
                    window.console &&
                      window.console.log &&
                      window.console.log(e);
                  },
                },
                {
                  key: "logGroup",
                  value: function (e) {
                    window.console &&
                      window.console.group &&
                      window.console.group(e);
                  },
                },
                {
                  key: "logGroupEnd",
                  value: function () {
                    window.console &&
                      window.console.groupEnd &&
                      window.console.groupEnd();
                  },
                },
                {
                  key: "onAndCancel",
                  value: function (e, t, n) {
                    return (
                      e.addEventListener(t, n, !1),
                      function () {
                        e.removeEventListener(t, n, !1);
                      }
                    );
                  },
                },
                {
                  key: "dispatchEvent",
                  value: function (e, t) {
                    e.dispatchEvent(t);
                  },
                },
                {
                  key: "remove",
                  value: function (e) {
                    return e.parentNode && e.parentNode.removeChild(e), e;
                  },
                },
                {
                  key: "getValue",
                  value: function (e) {
                    return e.value;
                  },
                },
                {
                  key: "createElement",
                  value: function (e, t) {
                    return (t = t || this.getDefaultDocument()).createElement(
                      e
                    );
                  },
                },
                {
                  key: "createHtmlDocument",
                  value: function () {
                    return document.implementation.createHTMLDocument(
                      "fakeTitle"
                    );
                  },
                },
                {
                  key: "getDefaultDocument",
                  value: function () {
                    return document;
                  },
                },
                {
                  key: "isElementNode",
                  value: function (e) {
                    return e.nodeType === Node.ELEMENT_NODE;
                  },
                },
                {
                  key: "isShadowRoot",
                  value: function (e) {
                    return e instanceof DocumentFragment;
                  },
                },
                {
                  key: "getGlobalEventTarget",
                  value: function (e, t) {
                    return "window" === t
                      ? window
                      : "document" === t
                      ? e
                      : "body" === t
                      ? e.body
                      : null;
                  },
                },
                {
                  key: "getHistory",
                  value: function () {
                    return window.history;
                  },
                },
                {
                  key: "getLocation",
                  value: function () {
                    return window.location;
                  },
                },
                {
                  key: "getBaseHref",
                  value: function (e) {
                    var t,
                      n =
                        yu || (yu = document.querySelector("base"))
                          ? yu.getAttribute("href")
                          : null;
                    return null == n
                      ? null
                      : ((t = n),
                        lu || (lu = document.createElement("a")),
                        lu.setAttribute("href", t),
                        "/" === lu.pathname.charAt(0)
                          ? lu.pathname
                          : "/" + lu.pathname);
                  },
                },
                {
                  key: "resetBaseElement",
                  value: function () {
                    yu = null;
                  },
                },
                {
                  key: "getUserAgent",
                  value: function () {
                    return window.navigator.userAgent;
                  },
                },
                {
                  key: "performanceNow",
                  value: function () {
                    return window.performance && window.performance.now
                      ? window.performance.now()
                      : new Date().getTime();
                  },
                },
                {
                  key: "supportsCookies",
                  value: function () {
                    return !0;
                  },
                },
                {
                  key: "getCookie",
                  value: function (e) {
                    return Zs(document.cookie, e);
                  },
                },
              ],
              [
                {
                  key: "makeCurrent",
                  value: function () {
                    var e;
                    (e = new t()), ms || (ms = e);
                  },
                },
              ]
            ),
            t
          );
        })(
          (function (e) {
            function t() {
              return (
                _classCallCheck(this, t),
                _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))
              );
            }
            return (
              _inherits(t, e),
              _createClass(t, [
                {
                  key: "supportsDOMEvents",
                  value: function () {
                    return !0;
                  },
                },
              ]),
              t
            );
          })(
            (function () {
              return function e() {
                _classCallCheck(this, e);
              };
            })()
          )
        ),
        yu = null,
        gu = new He("TRANSITION_ID"),
        mu = [
          {
            provide: ka,
            useFactory: function (e, t, n) {
              return function () {
                n.get(Ca).donePromise.then(function () {
                  var n = _s();
                  Array.prototype.slice
                    .apply(t.querySelectorAll("style[ng-transition]"))
                    .filter(function (t) {
                      return t.getAttribute("ng-transition") === e;
                    })
                    .forEach(function (e) {
                      return n.remove(e);
                    });
                });
              };
            },
            deps: [gu, Cs, Bi],
            multi: !0,
          },
        ],
        _u = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(
              e,
              [
                {
                  key: "addToWindow",
                  value: function (e) {
                    (Ne.getAngularTestability = function (t) {
                      var n =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1],
                        r = e.findTestabilityInTree(t, n);
                      if (null == r)
                        throw new Error(
                          "Could not find testability for element."
                        );
                      return r;
                    }),
                      (Ne.getAllAngularTestabilities = function () {
                        return e.getAllTestabilities();
                      }),
                      (Ne.getAllAngularRootElements = function () {
                        return e.getAllRootElements();
                      }),
                      Ne.frameworkStabilizers || (Ne.frameworkStabilizers = []),
                      Ne.frameworkStabilizers.push(function (e) {
                        var t = Ne.getAllAngularTestabilities(),
                          n = t.length,
                          r = !1,
                          i = function (t) {
                            (r = r || t), 0 == --n && e(r);
                          };
                        t.forEach(function (e) {
                          e.whenStable(i);
                        });
                      });
                  },
                },
                {
                  key: "findTestabilityInTree",
                  value: function (e, t, n) {
                    if (null == t) return null;
                    var r = e.getTestability(t);
                    return null != r
                      ? r
                      : n
                      ? _s().isShadowRoot(t)
                        ? this.findTestabilityInTree(e, t.host, !0)
                        : this.findTestabilityInTree(e, t.parentElement, !0)
                      : null;
                  },
                },
              ],
              [
                {
                  key: "init",
                  value: function () {
                    var t;
                    (t = new e()), (Xa = t);
                  },
                },
              ]
            ),
            e
          );
        })(),
        ku = new He("EventManagerPlugins"),
        Cu =
          (((cu = (function () {
            function e(t, n) {
              var r = this;
              _classCallCheck(this, e),
                (this._zone = n),
                (this._eventNameToPlugin = new Map()),
                t.forEach(function (e) {
                  return (e.manager = r);
                }),
                (this._plugins = t.slice().reverse());
            }
            return (
              _createClass(e, [
                {
                  key: "addEventListener",
                  value: function (e, t, n) {
                    return this._findPluginFor(t).addEventListener(e, t, n);
                  },
                },
                {
                  key: "addGlobalEventListener",
                  value: function (e, t, n) {
                    return this._findPluginFor(t).addGlobalEventListener(
                      e,
                      t,
                      n
                    );
                  },
                },
                {
                  key: "getZone",
                  value: function () {
                    return this._zone;
                  },
                },
                {
                  key: "_findPluginFor",
                  value: function (e) {
                    var t = this._eventNameToPlugin.get(e);
                    if (t) return t;
                    for (var n = this._plugins, r = 0; r < n.length; r++) {
                      var i = n[r];
                      if (i.supports(e))
                        return this._eventNameToPlugin.set(e, i), i;
                    }
                    throw new Error(
                      "No event manager plugin found for event ".concat(e)
                    );
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || cu)($e(ku), $e(za));
          }),
          (cu.ɵprov = de({ token: cu, factory: cu.ɵfac })),
          cu),
        bu = (function () {
          function e(t) {
            _classCallCheck(this, e), (this._doc = t);
          }
          return (
            _createClass(e, [
              {
                key: "addGlobalEventListener",
                value: function (e, t, n) {
                  var r = _s().getGlobalEventTarget(this._doc, e);
                  if (!r)
                    throw new Error(
                      "Unsupported event target "
                        .concat(r, " for event ")
                        .concat(t)
                    );
                  return this.addEventListener(r, t, n);
                },
              },
            ]),
            e
          );
        })(),
        wu =
          (((fu = (function () {
            function e() {
              _classCallCheck(this, e), (this._stylesSet = new Set());
            }
            return (
              _createClass(e, [
                {
                  key: "addStyles",
                  value: function (e) {
                    var t = this,
                      n = new Set();
                    e.forEach(function (e) {
                      t._stylesSet.has(e) || (t._stylesSet.add(e), n.add(e));
                    }),
                      this.onStylesAdded(n);
                  },
                },
                { key: "onStylesAdded", value: function (e) {} },
                {
                  key: "getAllStyles",
                  value: function () {
                    return Array.from(this._stylesSet);
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || fu)();
          }),
          (fu.ɵprov = de({ token: fu, factory: fu.ɵfac })),
          fu),
        Su =
          (((hu = (function (e) {
            function t(e) {
              var n;
              return (
                _classCallCheck(this, t),
                ((n = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(t).call(this)
                ))._doc = e),
                (n._hostNodes = new Set()),
                (n._styleNodes = new Set()),
                n._hostNodes.add(e.head),
                n
              );
            }
            return (
              _inherits(t, e),
              _createClass(t, [
                {
                  key: "_addStylesToHost",
                  value: function (e, t) {
                    var n = this;
                    e.forEach(function (e) {
                      var r = n._doc.createElement("style");
                      (r.textContent = e), n._styleNodes.add(t.appendChild(r));
                    });
                  },
                },
                {
                  key: "addHost",
                  value: function (e) {
                    this._addStylesToHost(this._stylesSet, e),
                      this._hostNodes.add(e);
                  },
                },
                {
                  key: "removeHost",
                  value: function (e) {
                    this._hostNodes.delete(e);
                  },
                },
                {
                  key: "onStylesAdded",
                  value: function (e) {
                    var t = this;
                    this._hostNodes.forEach(function (n) {
                      return t._addStylesToHost(e, n);
                    });
                  },
                },
                {
                  key: "ngOnDestroy",
                  value: function () {
                    this._styleNodes.forEach(function (e) {
                      return _s().remove(e);
                    });
                  },
                },
              ]),
              t
            );
          })(wu)).ɵfac = function (e) {
            return new (e || hu)($e(Cs));
          }),
          (hu.ɵprov = de({ token: hu, factory: hu.ɵfac })),
          hu),
        Eu = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        Tu = /%COMP%/g;
      function Au(e, t, n) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          Array.isArray(i) ? Au(e, i, n) : ((i = i.replace(Tu, e)), n.push(i));
        }
        return n;
      }
      function xu(e) {
        return function (t) {
          if ("__ngUnwrap__" === t) return e;
          !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
        };
      }
      var Pu,
        Ou,
        Ru,
        Iu,
        Nu =
          (((Pu = (function () {
            function e(t, n, r) {
              _classCallCheck(this, e),
                (this.eventManager = t),
                (this.sharedStylesHost = n),
                (this.appId = r),
                (this.rendererByCompId = new Map()),
                (this.defaultRenderer = new Du(t));
            }
            return (
              _createClass(e, [
                {
                  key: "createRenderer",
                  value: function (e, t) {
                    if (!e || !t) return this.defaultRenderer;
                    switch (t.encapsulation) {
                      case at.Emulated:
                        var n = this.rendererByCompId.get(t.id);
                        return (
                          n ||
                            ((n = new ju(
                              this.eventManager,
                              this.sharedStylesHost,
                              t,
                              this.appId
                            )),
                            this.rendererByCompId.set(t.id, n)),
                          n.applyToHost(e),
                          n
                        );
                      case at.Native:
                      case at.ShadowDom:
                        return new Fu(
                          this.eventManager,
                          this.sharedStylesHost,
                          e,
                          t
                        );
                      default:
                        if (!this.rendererByCompId.has(t.id)) {
                          var r = Au(t.id, t.styles, []);
                          this.sharedStylesHost.addStyles(r),
                            this.rendererByCompId.set(
                              t.id,
                              this.defaultRenderer
                            );
                        }
                        return this.defaultRenderer;
                    }
                  },
                },
                { key: "begin", value: function () {} },
                { key: "end", value: function () {} },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || Pu)($e(Cu), $e(Su), $e(ba));
          }),
          (Pu.ɵprov = de({ token: Pu, factory: Pu.ɵfac })),
          Pu),
        Du = (function () {
          function e(t) {
            _classCallCheck(this, e),
              (this.eventManager = t),
              (this.data = Object.create(null));
          }
          return (
            _createClass(e, [
              { key: "destroy", value: function () {} },
              {
                key: "createElement",
                value: function (e, t) {
                  return t
                    ? document.createElementNS(Eu[t] || t, e)
                    : document.createElement(e);
                },
              },
              {
                key: "createComment",
                value: function (e) {
                  return document.createComment(e);
                },
              },
              {
                key: "createText",
                value: function (e) {
                  return document.createTextNode(e);
                },
              },
              {
                key: "appendChild",
                value: function (e, t) {
                  e.appendChild(t);
                },
              },
              {
                key: "insertBefore",
                value: function (e, t, n) {
                  e && e.insertBefore(t, n);
                },
              },
              {
                key: "removeChild",
                value: function (e, t) {
                  e && e.removeChild(t);
                },
              },
              {
                key: "selectRootElement",
                value: function (e, t) {
                  var n = "string" == typeof e ? document.querySelector(e) : e;
                  if (!n)
                    throw new Error(
                      'The selector "'.concat(e, '" did not match any elements')
                    );
                  return t || (n.textContent = ""), n;
                },
              },
              {
                key: "parentNode",
                value: function (e) {
                  return e.parentNode;
                },
              },
              {
                key: "nextSibling",
                value: function (e) {
                  return e.nextSibling;
                },
              },
              {
                key: "setAttribute",
                value: function (e, t, n, r) {
                  if (r) {
                    t = r + ":" + t;
                    var i = Eu[r];
                    i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n);
                  } else e.setAttribute(t, n);
                },
              },
              {
                key: "removeAttribute",
                value: function (e, t, n) {
                  if (n) {
                    var r = Eu[n];
                    r
                      ? e.removeAttributeNS(r, t)
                      : e.removeAttribute("".concat(n, ":").concat(t));
                  } else e.removeAttribute(t);
                },
              },
              {
                key: "addClass",
                value: function (e, t) {
                  e.classList.add(t);
                },
              },
              {
                key: "removeClass",
                value: function (e, t) {
                  e.classList.remove(t);
                },
              },
              {
                key: "setStyle",
                value: function (e, t, n, r) {
                  r & No.DashCase
                    ? e.style.setProperty(
                        t,
                        n,
                        r & No.Important ? "important" : ""
                      )
                    : (e.style[t] = n);
                },
              },
              {
                key: "removeStyle",
                value: function (e, t, n) {
                  n & No.DashCase
                    ? e.style.removeProperty(t)
                    : (e.style[t] = "");
                },
              },
              {
                key: "setProperty",
                value: function (e, t, n) {
                  e[t] = n;
                },
              },
              {
                key: "setValue",
                value: function (e, t) {
                  e.nodeValue = t;
                },
              },
              {
                key: "listen",
                value: function (e, t, n) {
                  return "string" == typeof e
                    ? this.eventManager.addGlobalEventListener(e, t, xu(n))
                    : this.eventManager.addEventListener(e, t, xu(n));
                },
              },
            ]),
            e
          );
        })(),
        ju = (function (e) {
          function t(e, n, r, i) {
            var o;
            _classCallCheck(this, t),
              ((o = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              )).component = r);
            var a,
              s = Au(i + "-" + r.id, r.styles, []);
            return (
              n.addStyles(s),
              (o.contentAttr = "_ngcontent-%COMP%".replace(Tu, i + "-" + r.id)),
              (o.hostAttr =
                ((a = i + "-" + r.id), "_nghost-%COMP%".replace(Tu, a))),
              o
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "applyToHost",
                value: function (e) {
                  _get(_getPrototypeOf(t.prototype), "setAttribute", this).call(
                    this,
                    e,
                    this.hostAttr,
                    ""
                  );
                },
              },
              {
                key: "createElement",
                value: function (e, n) {
                  var r = _get(
                    _getPrototypeOf(t.prototype),
                    "createElement",
                    this
                  ).call(this, e, n);
                  return (
                    _get(
                      _getPrototypeOf(t.prototype),
                      "setAttribute",
                      this
                    ).call(this, r, this.contentAttr, ""),
                    r
                  );
                },
              },
            ]),
            t
          );
        })(Du),
        Fu = (function (e) {
          function t(e, n, r, i) {
            var o;
            _classCallCheck(this, t),
              ((o = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              )).sharedStylesHost = n),
              (o.hostEl = r),
              (o.component = i),
              (o.shadowRoot =
                i.encapsulation === at.ShadowDom
                  ? r.attachShadow({ mode: "open" })
                  : r.createShadowRoot()),
              o.sharedStylesHost.addHost(o.shadowRoot);
            for (var a = Au(i.id, i.styles, []), s = 0; s < a.length; s++) {
              var u = document.createElement("style");
              (u.textContent = a[s]), o.shadowRoot.appendChild(u);
            }
            return o;
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "nodeOrShadowRoot",
                value: function (e) {
                  return e === this.hostEl ? this.shadowRoot : e;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.sharedStylesHost.removeHost(this.shadowRoot);
                },
              },
              {
                key: "appendChild",
                value: function (e, n) {
                  return _get(
                    _getPrototypeOf(t.prototype),
                    "appendChild",
                    this
                  ).call(this, this.nodeOrShadowRoot(e), n);
                },
              },
              {
                key: "insertBefore",
                value: function (e, n, r) {
                  return _get(
                    _getPrototypeOf(t.prototype),
                    "insertBefore",
                    this
                  ).call(this, this.nodeOrShadowRoot(e), n, r);
                },
              },
              {
                key: "removeChild",
                value: function (e, n) {
                  return _get(
                    _getPrototypeOf(t.prototype),
                    "removeChild",
                    this
                  ).call(this, this.nodeOrShadowRoot(e), n);
                },
              },
              {
                key: "parentNode",
                value: function (e) {
                  return this.nodeOrShadowRoot(
                    _get(_getPrototypeOf(t.prototype), "parentNode", this).call(
                      this,
                      this.nodeOrShadowRoot(e)
                    )
                  );
                },
              },
            ]),
            t
          );
        })(Du),
        Lu =
          (((Ou = (function (e) {
            function t(e) {
              return (
                _classCallCheck(this, t),
                _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(t).call(this, e)
                )
              );
            }
            return (
              _inherits(t, e),
              _createClass(t, [
                {
                  key: "supports",
                  value: function (e) {
                    return !0;
                  },
                },
                {
                  key: "addEventListener",
                  value: function (e, t, n) {
                    var r = this;
                    return (
                      e.addEventListener(t, n, !1),
                      function () {
                        return r.removeEventListener(e, t, n);
                      }
                    );
                  },
                },
                {
                  key: "removeEventListener",
                  value: function (e, t, n) {
                    return e.removeEventListener(t, n);
                  },
                },
              ]),
              t
            );
          })(bu)).ɵfac = function (e) {
            return new (e || Ou)($e(Cs));
          }),
          (Ou.ɵprov = de({ token: Ou, factory: Ou.ɵfac })),
          Ou),
        Uu = ["alt", "control", "meta", "shift"],
        Vu = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        Mu = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock",
        },
        Hu = {
          alt: function (e) {
            return e.altKey;
          },
          control: function (e) {
            return e.ctrlKey;
          },
          meta: function (e) {
            return e.metaKey;
          },
          shift: function (e) {
            return e.shiftKey;
          },
        },
        zu =
          (((Ru = (function (e) {
            function t(e) {
              return (
                _classCallCheck(this, t),
                _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(t).call(this, e)
                )
              );
            }
            return (
              _inherits(t, e),
              _createClass(
                t,
                [
                  {
                    key: "supports",
                    value: function (e) {
                      return null != t.parseEventName(e);
                    },
                  },
                  {
                    key: "addEventListener",
                    value: function (e, n, r) {
                      var i = t.parseEventName(n),
                        o = t.eventCallback(
                          i.fullKey,
                          r,
                          this.manager.getZone()
                        );
                      return this.manager
                        .getZone()
                        .runOutsideAngular(function () {
                          return _s().onAndCancel(e, i.domEventName, o);
                        });
                    },
                  },
                ],
                [
                  {
                    key: "parseEventName",
                    value: function (e) {
                      var n = e.toLowerCase().split("."),
                        r = n.shift();
                      if (0 === n.length || ("keydown" !== r && "keyup" !== r))
                        return null;
                      var i = t._normalizeKey(n.pop()),
                        o = "";
                      if (
                        (Uu.forEach(function (e) {
                          var t = n.indexOf(e);
                          t > -1 && (n.splice(t, 1), (o += e + "."));
                        }),
                        (o += i),
                        0 != n.length || 0 === i.length)
                      )
                        return null;
                      var a = {};
                      return (a.domEventName = r), (a.fullKey = o), a;
                    },
                  },
                  {
                    key: "getEventFullKey",
                    value: function (e) {
                      var t = "",
                        n = (function (e) {
                          var t = e.key;
                          if (null == t) {
                            if (null == (t = e.keyIdentifier))
                              return "Unidentified";
                            t.startsWith("U+") &&
                              ((t = String.fromCharCode(
                                parseInt(t.substring(2), 16)
                              )),
                              3 === e.location &&
                                Mu.hasOwnProperty(t) &&
                                (t = Mu[t]));
                          }
                          return Vu[t] || t;
                        })(e);
                      return (
                        " " === (n = n.toLowerCase())
                          ? (n = "space")
                          : "." === n && (n = "dot"),
                        Uu.forEach(function (r) {
                          r != n && (0, Hu[r])(e) && (t += r + ".");
                        }),
                        (t += n)
                      );
                    },
                  },
                  {
                    key: "eventCallback",
                    value: function (e, n, r) {
                      return function (i) {
                        t.getEventFullKey(i) === e &&
                          r.runGuarded(function () {
                            return n(i);
                          });
                      };
                    },
                  },
                  {
                    key: "_normalizeKey",
                    value: function (e) {
                      switch (e) {
                        case "esc":
                          return "escape";
                        default:
                          return e;
                      }
                    },
                  },
                ]
              ),
              t
            );
          })(bu)).ɵfac = function (e) {
            return new (e || Ru)($e(Cs));
          }),
          (Ru.ɵprov = de({ token: Ru, factory: Ru.ɵfac })),
          Ru),
        qu = rs(ps, "browser", [
          { provide: Ta, useValue: "browser" },
          {
            provide: Ea,
            useValue: function () {
              pu.makeCurrent(), _u.init();
            },
            multi: !0,
          },
          {
            provide: Cs,
            useFactory: function () {
              return (
                (function (e) {
                  nn = e;
                })(document),
                document
              );
            },
            deps: [],
          },
        ]),
        Bu = [
          [],
          { provide: Ri, useValue: "root" },
          {
            provide: Ln,
            useFactory: function () {
              return new Ln();
            },
            deps: [],
          },
          { provide: ku, useClass: Lu, multi: !0, deps: [Cs, za, Ta] },
          { provide: ku, useClass: zu, multi: !0, deps: [Cs] },
          [],
          { provide: Nu, useClass: Nu, deps: [Cu, Su, ba] },
          { provide: Io, useExisting: Nu },
          { provide: wu, useExisting: Su },
          { provide: Su, useClass: Su, deps: [Cs] },
          { provide: Ja, useClass: Ja, deps: [za] },
          { provide: Cu, useClass: Cu, deps: [ku, za] },
          [],
        ],
        Wu =
          (((Iu = (function () {
            function e(t) {
              if ((_classCallCheck(this, e), t))
                throw new Error(
                  "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
                );
            }
            return (
              _createClass(e, null, [
                {
                  key: "withServerTransition",
                  value: function (t) {
                    return {
                      ngModule: e,
                      providers: [
                        { provide: ba, useValue: t.appId },
                        { provide: gu, useExisting: ba },
                        mu,
                      ],
                    };
                  },
                },
              ]),
              e
            );
          })()).ɵmod = pt({ type: Iu })),
          (Iu.ɵinj = ve({
            factory: function (e) {
              return new (e || Iu)($e(Iu, 12));
            },
            providers: Bu,
            imports: [au, gs],
          })),
          Iu);
      function Qu() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var r = t[t.length - 1];
        return O(r) ? (t.pop(), z(t, r)) : G(t);
      }
      function Ku(e, t) {
        return B(e, t, 1);
      }
      function Zu(e, t) {
        return function (n) {
          return n.lift(new Gu(e, t));
        };
      }
      "undefined" != typeof window && window;
      var Gu = (function () {
          function e(t, n) {
            _classCallCheck(this, e), (this.predicate = t), (this.thisArg = n);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new $u(e, this.predicate, this.thisArg));
                },
              },
            ]),
            e
          );
        })(),
        $u = (function (e) {
          function t(e, n, r) {
            var i;
            return (
              _classCallCheck(this, t),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              )).predicate = n),
              (i.thisArg = r),
              (i.count = 0),
              i
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "_next",
                value: function (e) {
                  var t;
                  try {
                    t = this.predicate.call(this.thisArg, e, this.count++);
                  } catch (n) {
                    return void this.destination.error(n);
                  }
                  t && this.destination.next(e);
                },
              },
            ]),
            t
          );
        })(p),
        Ju = function e() {
          _classCallCheck(this, e);
        },
        Yu = function e() {
          _classCallCheck(this, e);
        },
        Xu = (function () {
          function e(t) {
            var n = this;
            _classCallCheck(this, e),
              (this.normalizedNames = new Map()),
              (this.lazyUpdate = null),
              t
                ? (this.lazyInit =
                    "string" == typeof t
                      ? function () {
                          (n.headers = new Map()),
                            t.split("\n").forEach(function (e) {
                              var t = e.indexOf(":");
                              if (t > 0) {
                                var r = e.slice(0, t),
                                  i = r.toLowerCase(),
                                  o = e.slice(t + 1).trim();
                                n.maybeSetNormalizedName(r, i),
                                  n.headers.has(i)
                                    ? n.headers.get(i).push(o)
                                    : n.headers.set(i, [o]);
                              }
                            });
                        }
                      : function () {
                          (n.headers = new Map()),
                            Object.keys(t).forEach(function (e) {
                              var r = t[e],
                                i = e.toLowerCase();
                              "string" == typeof r && (r = [r]),
                                r.length > 0 &&
                                  (n.headers.set(i, r),
                                  n.maybeSetNormalizedName(e, i));
                            });
                        })
                : (this.headers = new Map());
          }
          return (
            _createClass(e, [
              {
                key: "has",
                value: function (e) {
                  return this.init(), this.headers.has(e.toLowerCase());
                },
              },
              {
                key: "get",
                value: function (e) {
                  this.init();
                  var t = this.headers.get(e.toLowerCase());
                  return t && t.length > 0 ? t[0] : null;
                },
              },
              {
                key: "keys",
                value: function () {
                  return this.init(), Array.from(this.normalizedNames.values());
                },
              },
              {
                key: "getAll",
                value: function (e) {
                  return this.init(), this.headers.get(e.toLowerCase()) || null;
                },
              },
              {
                key: "append",
                value: function (e, t) {
                  return this.clone({ name: e, value: t, op: "a" });
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  return this.clone({ name: e, value: t, op: "s" });
                },
              },
              {
                key: "delete",
                value: function (e, t) {
                  return this.clone({ name: e, value: t, op: "d" });
                },
              },
              {
                key: "maybeSetNormalizedName",
                value: function (e, t) {
                  this.normalizedNames.has(t) || this.normalizedNames.set(t, e);
                },
              },
              {
                key: "init",
                value: function () {
                  var t = this;
                  this.lazyInit &&
                    (this.lazyInit instanceof e
                      ? this.copyFrom(this.lazyInit)
                      : this.lazyInit(),
                    (this.lazyInit = null),
                    this.lazyUpdate &&
                      (this.lazyUpdate.forEach(function (e) {
                        return t.applyUpdate(e);
                      }),
                      (this.lazyUpdate = null)));
                },
              },
              {
                key: "copyFrom",
                value: function (e) {
                  var t = this;
                  e.init(),
                    Array.from(e.headers.keys()).forEach(function (n) {
                      t.headers.set(n, e.headers.get(n)),
                        t.normalizedNames.set(n, e.normalizedNames.get(n));
                    });
                },
              },
              {
                key: "clone",
                value: function (t) {
                  var n = new e();
                  return (
                    (n.lazyInit =
                      this.lazyInit && this.lazyInit instanceof e
                        ? this.lazyInit
                        : this),
                    (n.lazyUpdate = (this.lazyUpdate || []).concat([t])),
                    n
                  );
                },
              },
              {
                key: "applyUpdate",
                value: function (e) {
                  var t = e.name.toLowerCase();
                  switch (e.op) {
                    case "a":
                    case "s":
                      var n = e.value;
                      if (("string" == typeof n && (n = [n]), 0 === n.length))
                        return;
                      this.maybeSetNormalizedName(e.name, t);
                      var r =
                        ("a" === e.op ? this.headers.get(t) : void 0) || [];
                      r.push.apply(r, _toConsumableArray(n)),
                        this.headers.set(t, r);
                      break;
                    case "d":
                      var i = e.value;
                      if (i) {
                        var o = this.headers.get(t);
                        if (!o) return;
                        0 ===
                        (o = o.filter(function (e) {
                          return -1 === i.indexOf(e);
                        })).length
                          ? (this.headers.delete(t),
                            this.normalizedNames.delete(t))
                          : this.headers.set(t, o);
                      } else
                        this.headers.delete(t), this.normalizedNames.delete(t);
                  }
                },
              },
              {
                key: "forEach",
                value: function (e) {
                  var t = this;
                  this.init(),
                    Array.from(this.normalizedNames.keys()).forEach(function (
                      n
                    ) {
                      return e(t.normalizedNames.get(n), t.headers.get(n));
                    });
                },
              },
            ]),
            e
          );
        })(),
        el = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "encodeKey",
                value: function (e) {
                  return tl(e);
                },
              },
              {
                key: "encodeValue",
                value: function (e) {
                  return tl(e);
                },
              },
              {
                key: "decodeKey",
                value: function (e) {
                  return decodeURIComponent(e);
                },
              },
              {
                key: "decodeValue",
                value: function (e) {
                  return decodeURIComponent(e);
                },
              },
            ]),
            e
          );
        })();
      function tl(e) {
        return encodeURIComponent(e)
          .replace(/%40/gi, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/gi, "$")
          .replace(/%2C/gi, ",")
          .replace(/%3B/gi, ";")
          .replace(/%2B/gi, "+")
          .replace(/%3D/gi, "=")
          .replace(/%3F/gi, "?")
          .replace(/%2F/gi, "/");
      }
      var nl = (function () {
        function e() {
          var t = this,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          if (
            (_classCallCheck(this, e),
            (this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = n.encoder || new el()),
            n.fromString)
          ) {
            if (n.fromObject)
              throw new Error("Cannot specify both fromString and fromObject.");
            this.map = (function (e, t) {
              var n = new Map();
              return (
                e.length > 0 &&
                  e.split("&").forEach(function (e) {
                    var r = e.indexOf("="),
                      i = _slicedToArray(
                        -1 == r
                          ? [t.decodeKey(e), ""]
                          : [
                              t.decodeKey(e.slice(0, r)),
                              t.decodeValue(e.slice(r + 1)),
                            ],
                        2
                      ),
                      o = i[0],
                      a = i[1],
                      s = n.get(o) || [];
                    s.push(a), n.set(o, s);
                  }),
                n
              );
            })(n.fromString, this.encoder);
          } else
            n.fromObject
              ? ((this.map = new Map()),
                Object.keys(n.fromObject).forEach(function (e) {
                  var r = n.fromObject[e];
                  t.map.set(e, Array.isArray(r) ? r : [r]);
                }))
              : (this.map = null);
        }
        return (
          _createClass(e, [
            {
              key: "has",
              value: function (e) {
                return this.init(), this.map.has(e);
              },
            },
            {
              key: "get",
              value: function (e) {
                this.init();
                var t = this.map.get(e);
                return t ? t[0] : null;
              },
            },
            {
              key: "getAll",
              value: function (e) {
                return this.init(), this.map.get(e) || null;
              },
            },
            {
              key: "keys",
              value: function () {
                return this.init(), Array.from(this.map.keys());
              },
            },
            {
              key: "append",
              value: function (e, t) {
                return this.clone({ param: e, value: t, op: "a" });
              },
            },
            {
              key: "set",
              value: function (e, t) {
                return this.clone({ param: e, value: t, op: "s" });
              },
            },
            {
              key: "delete",
              value: function (e, t) {
                return this.clone({ param: e, value: t, op: "d" });
              },
            },
            {
              key: "toString",
              value: function () {
                var e = this;
                return (
                  this.init(),
                  this.keys()
                    .map(function (t) {
                      var n = e.encoder.encodeKey(t);
                      return e.map
                        .get(t)
                        .map(function (t) {
                          return n + "=" + e.encoder.encodeValue(t);
                        })
                        .join("&");
                    })
                    .filter(function (e) {
                      return "" !== e;
                    })
                    .join("&")
                );
              },
            },
            {
              key: "clone",
              value: function (t) {
                var n = new e({ encoder: this.encoder });
                return (
                  (n.cloneFrom = this.cloneFrom || this),
                  (n.updates = (this.updates || []).concat([t])),
                  n
                );
              },
            },
            {
              key: "init",
              value: function () {
                var e = this;
                null === this.map && (this.map = new Map()),
                  null !== this.cloneFrom &&
                    (this.cloneFrom.init(),
                    this.cloneFrom.keys().forEach(function (t) {
                      return e.map.set(t, e.cloneFrom.map.get(t));
                    }),
                    this.updates.forEach(function (t) {
                      switch (t.op) {
                        case "a":
                        case "s":
                          var n =
                            ("a" === t.op ? e.map.get(t.param) : void 0) || [];
                          n.push(t.value), e.map.set(t.param, n);
                          break;
                        case "d":
                          if (void 0 === t.value) {
                            e.map.delete(t.param);
                            break;
                          }
                          var r = e.map.get(t.param) || [],
                            i = r.indexOf(t.value);
                          -1 !== i && r.splice(i, 1),
                            r.length > 0
                              ? e.map.set(t.param, r)
                              : e.map.delete(t.param);
                      }
                    }),
                    (this.cloneFrom = this.updates = null));
              },
            },
          ]),
          e
        );
      })();
      function rl(e) {
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer;
      }
      function il(e) {
        return "undefined" != typeof Blob && e instanceof Blob;
      }
      function ol(e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      }
      var al = (function () {
          function e(t, n, r, i) {
            var o;
            if (
              (_classCallCheck(this, e),
              (this.url = n),
              (this.body = null),
              (this.reportProgress = !1),
              (this.withCredentials = !1),
              (this.responseType = "json"),
              (this.method = t.toUpperCase()),
              (function (e) {
                switch (e) {
                  case "DELETE":
                  case "GET":
                  case "HEAD":
                  case "OPTIONS":
                  case "JSONP":
                    return !1;
                  default:
                    return !0;
                }
              })(this.method) || i
                ? ((this.body = void 0 !== r ? r : null), (o = i))
                : (o = r),
              o &&
                ((this.reportProgress = !!o.reportProgress),
                (this.withCredentials = !!o.withCredentials),
                o.responseType && (this.responseType = o.responseType),
                o.headers && (this.headers = o.headers),
                o.params && (this.params = o.params)),
              this.headers || (this.headers = new Xu()),
              this.params)
            ) {
              var a = this.params.toString();
              if (0 === a.length) this.urlWithParams = n;
              else {
                var s = n.indexOf("?");
                this.urlWithParams =
                  n + (-1 === s ? "?" : s < n.length - 1 ? "&" : "") + a;
              }
            } else (this.params = new nl()), (this.urlWithParams = n);
          }
          return (
            _createClass(e, [
              {
                key: "serializeBody",
                value: function () {
                  return null === this.body
                    ? null
                    : rl(this.body) ||
                      il(this.body) ||
                      ol(this.body) ||
                      "string" == typeof this.body
                    ? this.body
                    : this.body instanceof nl
                    ? this.body.toString()
                    : "object" == typeof this.body ||
                      "boolean" == typeof this.body ||
                      Array.isArray(this.body)
                    ? JSON.stringify(this.body)
                    : this.body.toString();
                },
              },
              {
                key: "detectContentTypeHeader",
                value: function () {
                  return null === this.body
                    ? null
                    : ol(this.body)
                    ? null
                    : il(this.body)
                    ? this.body.type || null
                    : rl(this.body)
                    ? null
                    : "string" == typeof this.body
                    ? "text/plain"
                    : this.body instanceof nl
                    ? "application/x-www-form-urlencoded;charset=UTF-8"
                    : "object" == typeof this.body ||
                      "number" == typeof this.body ||
                      Array.isArray(this.body)
                    ? "application/json"
                    : null;
                },
              },
              {
                key: "clone",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n = t.method || this.method,
                    r = t.url || this.url,
                    i = t.responseType || this.responseType,
                    o = void 0 !== t.body ? t.body : this.body,
                    a =
                      void 0 !== t.withCredentials
                        ? t.withCredentials
                        : this.withCredentials,
                    s =
                      void 0 !== t.reportProgress
                        ? t.reportProgress
                        : this.reportProgress,
                    u = t.headers || this.headers,
                    l = t.params || this.params;
                  return (
                    void 0 !== t.setHeaders &&
                      (u = Object.keys(t.setHeaders).reduce(function (e, n) {
                        return e.set(n, t.setHeaders[n]);
                      }, u)),
                    t.setParams &&
                      (l = Object.keys(t.setParams).reduce(function (e, n) {
                        return e.set(n, t.setParams[n]);
                      }, l)),
                    new e(n, r, o, {
                      params: l,
                      headers: u,
                      reportProgress: s,
                      responseType: i,
                      withCredentials: a,
                    })
                  );
                },
              },
            ]),
            e
          );
        })(),
        sl = (function () {
          var e = {
            Sent: 0,
            UploadProgress: 1,
            ResponseHeader: 2,
            DownloadProgress: 3,
            Response: 4,
            User: 5,
          };
          return (
            (e[e.Sent] = "Sent"),
            (e[e.UploadProgress] = "UploadProgress"),
            (e[e.ResponseHeader] = "ResponseHeader"),
            (e[e.DownloadProgress] = "DownloadProgress"),
            (e[e.Response] = "Response"),
            (e[e.User] = "User"),
            e
          );
        })(),
        ul = function e(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 200,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "OK";
          _classCallCheck(this, e),
            (this.headers = t.headers || new Xu()),
            (this.status = void 0 !== t.status ? t.status : n),
            (this.statusText = t.statusText || r),
            (this.url = t.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        },
        ll = (function (e) {
          function t() {
            var e,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            return (
              _classCallCheck(this, t),
              ((e = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, n)
              )).type = sl.ResponseHeader),
              e
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "clone",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return new t({
                    headers: e.headers || this.headers,
                    status: void 0 !== e.status ? e.status : this.status,
                    statusText: e.statusText || this.statusText,
                    url: e.url || this.url || void 0,
                  });
                },
              },
            ]),
            t
          );
        })(ul),
        cl = (function (e) {
          function t() {
            var e,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            return (
              _classCallCheck(this, t),
              ((e = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, n)
              )).type = sl.Response),
              (e.body = void 0 !== n.body ? n.body : null),
              e
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "clone",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return new t({
                    body: void 0 !== e.body ? e.body : this.body,
                    headers: e.headers || this.headers,
                    status: void 0 !== e.status ? e.status : this.status,
                    statusText: e.statusText || this.statusText,
                    url: e.url || this.url || void 0,
                  });
                },
              },
            ]),
            t
          );
        })(ul),
        hl = (function (e) {
          function t(e) {
            var n;
            return (
              _classCallCheck(this, t),
              ((n = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e, 0, "Unknown Error")
              )).name = "HttpErrorResponse"),
              (n.ok = !1),
              (n.message =
                n.status >= 200 && n.status < 300
                  ? "Http failure during parsing for ".concat(
                      e.url || "(unknown url)"
                    )
                  : "Http failure response for "
                      .concat(e.url || "(unknown url)", ": ")
                      .concat(e.status, " ")
                      .concat(e.statusText)),
              (n.error = e.error || null),
              n
            );
          }
          return _inherits(t, e), t;
        })(ul);
      function fl(e, t) {
        return {
          body: t,
          headers: e.headers,
          observe: e.observe,
          params: e.params,
          reportProgress: e.reportProgress,
          responseType: e.responseType,
          withCredentials: e.withCredentials,
        };
      }
      var dl,
        vl,
        pl,
        yl,
        gl,
        ml,
        _l,
        kl,
        Cl,
        bl =
          (((dl = (function () {
            function e(t) {
              _classCallCheck(this, e), (this.handler = t);
            }
            return (
              _createClass(e, [
                {
                  key: "request",
                  value: function (e, t) {
                    var n,
                      r = this,
                      i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {};
                    if (e instanceof al) n = e;
                    else {
                      var o = void 0;
                      o =
                        i.headers instanceof Xu ? i.headers : new Xu(i.headers);
                      var a = void 0;
                      i.params &&
                        (a =
                          i.params instanceof nl
                            ? i.params
                            : new nl({ fromObject: i.params })),
                        (n = new al(e, t, void 0 !== i.body ? i.body : null, {
                          headers: o,
                          params: a,
                          reportProgress: i.reportProgress,
                          responseType: i.responseType || "json",
                          withCredentials: i.withCredentials,
                        }));
                    }
                    var s = Qu(n).pipe(
                      Ku(function (e) {
                        return r.handler.handle(e);
                      })
                    );
                    if (e instanceof al || "events" === i.observe) return s;
                    var u = s.pipe(
                      Zu(function (e) {
                        return e instanceof cl;
                      })
                    );
                    switch (i.observe || "body") {
                      case "body":
                        switch (n.responseType) {
                          case "arraybuffer":
                            return u.pipe(
                              V(function (e) {
                                if (
                                  null !== e.body &&
                                  !(e.body instanceof ArrayBuffer)
                                )
                                  throw new Error(
                                    "Response is not an ArrayBuffer."
                                  );
                                return e.body;
                              })
                            );
                          case "blob":
                            return u.pipe(
                              V(function (e) {
                                if (
                                  null !== e.body &&
                                  !(e.body instanceof Blob)
                                )
                                  throw new Error("Response is not a Blob.");
                                return e.body;
                              })
                            );
                          case "text":
                            return u.pipe(
                              V(function (e) {
                                if (
                                  null !== e.body &&
                                  "string" != typeof e.body
                                )
                                  throw new Error("Response is not a string.");
                                return e.body;
                              })
                            );
                          case "json":
                          default:
                            return u.pipe(
                              V(function (e) {
                                return e.body;
                              })
                            );
                        }
                      case "response":
                        return u;
                      default:
                        throw new Error(
                          "Unreachable: unhandled observe type ".concat(
                            i.observe,
                            "}"
                          )
                        );
                    }
                  },
                },
                {
                  key: "delete",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return this.request("DELETE", e, t);
                  },
                },
                {
                  key: "get",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return this.request("GET", e, t);
                  },
                },
                {
                  key: "head",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return this.request("HEAD", e, t);
                  },
                },
                {
                  key: "jsonp",
                  value: function (e, t) {
                    return this.request("JSONP", e, {
                      params: new nl().append(t, "JSONP_CALLBACK"),
                      observe: "body",
                      responseType: "json",
                    });
                  },
                },
                {
                  key: "options",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return this.request("OPTIONS", e, t);
                  },
                },
                {
                  key: "patch",
                  value: function (e, t) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                    return this.request("PATCH", e, fl(n, t));
                  },
                },
                {
                  key: "post",
                  value: function (e, t) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                    return this.request("POST", e, fl(n, t));
                  },
                },
                {
                  key: "put",
                  value: function (e, t) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                    return this.request("PUT", e, fl(n, t));
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || dl)($e(Ju));
          }),
          (dl.ɵprov = de({ token: dl, factory: dl.ɵfac })),
          dl),
        wl = (function () {
          function e(t, n) {
            _classCallCheck(this, e), (this.next = t), (this.interceptor = n);
          }
          return (
            _createClass(e, [
              {
                key: "handle",
                value: function (e) {
                  return this.interceptor.intercept(e, this.next);
                },
              },
            ]),
            e
          );
        })(),
        Sl = new He("HTTP_INTERCEPTORS"),
        El =
          (((vl = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, [
                {
                  key: "intercept",
                  value: function (e, t) {
                    return t.handle(e);
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || vl)();
          }),
          (vl.ɵprov = de({ token: vl, factory: vl.ɵfac })),
          vl),
        Tl = /^\)\]\}',?\n/,
        Al = function e() {
          _classCallCheck(this, e);
        },
        xl =
          (((yl = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, [
                {
                  key: "build",
                  value: function () {
                    return new XMLHttpRequest();
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || yl)();
          }),
          (yl.ɵprov = de({ token: yl, factory: yl.ɵfac })),
          yl),
        Pl =
          (((pl = (function () {
            function e(t) {
              _classCallCheck(this, e), (this.xhrFactory = t);
            }
            return (
              _createClass(e, [
                {
                  key: "handle",
                  value: function (e) {
                    var t = this;
                    if ("JSONP" === e.method)
                      throw new Error(
                        "Attempted to construct Jsonp request without JsonpClientModule installed."
                      );
                    return new b(function (n) {
                      var r = t.xhrFactory.build();
                      if (
                        (r.open(e.method, e.urlWithParams),
                        e.withCredentials && (r.withCredentials = !0),
                        e.headers.forEach(function (e, t) {
                          return r.setRequestHeader(e, t.join(","));
                        }),
                        e.headers.has("Accept") ||
                          r.setRequestHeader(
                            "Accept",
                            "application/json, text/plain, */*"
                          ),
                        !e.headers.has("Content-Type"))
                      ) {
                        var i = e.detectContentTypeHeader();
                        null !== i && r.setRequestHeader("Content-Type", i);
                      }
                      if (e.responseType) {
                        var o = e.responseType.toLowerCase();
                        r.responseType = "json" !== o ? o : "text";
                      }
                      var a = e.serializeBody(),
                        s = null,
                        u = function () {
                          if (null !== s) return s;
                          var t = 1223 === r.status ? 204 : r.status,
                            n = r.statusText || "OK",
                            i = new Xu(r.getAllResponseHeaders()),
                            o =
                              (function (e) {
                                return "responseURL" in e && e.responseURL
                                  ? e.responseURL
                                  : /^X-Request-URL:/m.test(
                                      e.getAllResponseHeaders()
                                    )
                                  ? e.getResponseHeader("X-Request-URL")
                                  : null;
                              })(r) || e.url;
                          return (s = new ll({
                            headers: i,
                            status: t,
                            statusText: n,
                            url: o,
                          }));
                        },
                        l = function () {
                          var t = u(),
                            i = t.headers,
                            o = t.status,
                            a = t.statusText,
                            s = t.url,
                            l = null;
                          204 !== o &&
                            (l =
                              void 0 === r.response
                                ? r.responseText
                                : r.response),
                            0 === o && (o = l ? 200 : 0);
                          var c = o >= 200 && o < 300;
                          if (
                            "json" === e.responseType &&
                            "string" == typeof l
                          ) {
                            var h = l;
                            l = l.replace(Tl, "");
                            try {
                              l = "" !== l ? JSON.parse(l) : null;
                            } catch (f) {
                              (l = h),
                                c && ((c = !1), (l = { error: f, text: l }));
                            }
                          }
                          c
                            ? (n.next(
                                new cl({
                                  body: l,
                                  headers: i,
                                  status: o,
                                  statusText: a,
                                  url: s || void 0,
                                })
                              ),
                              n.complete())
                            : n.error(
                                new hl({
                                  error: l,
                                  headers: i,
                                  status: o,
                                  statusText: a,
                                  url: s || void 0,
                                })
                              );
                        },
                        c = function (e) {
                          var t = u().url,
                            i = new hl({
                              error: e,
                              status: r.status || 0,
                              statusText: r.statusText || "Unknown Error",
                              url: t || void 0,
                            });
                          n.error(i);
                        },
                        h = !1,
                        f = function (t) {
                          h || (n.next(u()), (h = !0));
                          var i = {
                            type: sl.DownloadProgress,
                            loaded: t.loaded,
                          };
                          t.lengthComputable && (i.total = t.total),
                            "text" === e.responseType &&
                              r.responseText &&
                              (i.partialText = r.responseText),
                            n.next(i);
                        },
                        d = function (e) {
                          var t = { type: sl.UploadProgress, loaded: e.loaded };
                          e.lengthComputable && (t.total = e.total), n.next(t);
                        };
                      return (
                        r.addEventListener("load", l),
                        r.addEventListener("error", c),
                        e.reportProgress &&
                          (r.addEventListener("progress", f),
                          null !== a &&
                            r.upload &&
                            r.upload.addEventListener("progress", d)),
                        r.send(a),
                        n.next({ type: sl.Sent }),
                        function () {
                          r.removeEventListener("error", c),
                            r.removeEventListener("load", l),
                            e.reportProgress &&
                              (r.removeEventListener("progress", f),
                              null !== a &&
                                r.upload &&
                                r.upload.removeEventListener("progress", d)),
                            r.abort();
                        }
                      );
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || pl)($e(Al));
          }),
          (pl.ɵprov = de({ token: pl, factory: pl.ɵfac })),
          pl),
        Ol = new He("XSRF_COOKIE_NAME"),
        Rl = new He("XSRF_HEADER_NAME"),
        Il = function e() {
          _classCallCheck(this, e);
        },
        Nl =
          (((Cl = (function () {
            function e(t, n, r) {
              _classCallCheck(this, e),
                (this.doc = t),
                (this.platform = n),
                (this.cookieName = r),
                (this.lastCookieString = ""),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            return (
              _createClass(e, [
                {
                  key: "getToken",
                  value: function () {
                    if ("server" === this.platform) return null;
                    var e = this.doc.cookie || "";
                    return (
                      e !== this.lastCookieString &&
                        (this.parseCount++,
                        (this.lastToken = Zs(e, this.cookieName)),
                        (this.lastCookieString = e)),
                      this.lastToken
                    );
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || Cl)($e(Cs), $e(Ta), $e(Ol));
          }),
          (Cl.ɵprov = de({ token: Cl, factory: Cl.ɵfac })),
          Cl),
        Dl =
          (((kl = (function () {
            function e(t, n) {
              _classCallCheck(this, e),
                (this.tokenService = t),
                (this.headerName = n);
            }
            return (
              _createClass(e, [
                {
                  key: "intercept",
                  value: function (e, t) {
                    var n = e.url.toLowerCase();
                    if (
                      "GET" === e.method ||
                      "HEAD" === e.method ||
                      n.startsWith("http://") ||
                      n.startsWith("https://")
                    )
                      return t.handle(e);
                    var r = this.tokenService.getToken();
                    return (
                      null === r ||
                        e.headers.has(this.headerName) ||
                        (e = e.clone({
                          headers: e.headers.set(this.headerName, r),
                        })),
                      t.handle(e)
                    );
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || kl)($e(Il), $e(Rl));
          }),
          (kl.ɵprov = de({ token: kl, factory: kl.ɵfac })),
          kl),
        jl =
          (((_l = (function () {
            function e(t, n) {
              _classCallCheck(this, e),
                (this.backend = t),
                (this.injector = n),
                (this.chain = null);
            }
            return (
              _createClass(e, [
                {
                  key: "handle",
                  value: function (e) {
                    if (null === this.chain) {
                      var t = this.injector.get(Sl, []);
                      this.chain = t.reduceRight(function (e, t) {
                        return new wl(e, t);
                      }, this.backend);
                    }
                    return this.chain.handle(e);
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || _l)($e(Yu), $e(Bi));
          }),
          (_l.ɵprov = de({ token: _l, factory: _l.ɵfac })),
          _l),
        Fl =
          (((ml = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, null, [
                {
                  key: "disable",
                  value: function () {
                    return {
                      ngModule: e,
                      providers: [{ provide: Dl, useClass: El }],
                    };
                  },
                },
                {
                  key: "withOptions",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      ngModule: e,
                      providers: [
                        t.cookieName
                          ? { provide: Ol, useValue: t.cookieName }
                          : [],
                        t.headerName
                          ? { provide: Rl, useValue: t.headerName }
                          : [],
                      ],
                    };
                  },
                },
              ]),
              e
            );
          })()).ɵmod = pt({ type: ml })),
          (ml.ɵinj = ve({
            factory: function (e) {
              return new (e || ml)();
            },
            providers: [
              Dl,
              { provide: Sl, useExisting: Dl, multi: !0 },
              { provide: Il, useClass: Nl },
              { provide: Ol, useValue: "XSRF-TOKEN" },
              { provide: Rl, useValue: "X-XSRF-TOKEN" },
            ],
          })),
          ml),
        Ll =
          (((gl = function e() {
            _classCallCheck(this, e);
          }).ɵmod = pt({ type: gl })),
          (gl.ɵinj = ve({
            factory: function (e) {
              return new (e || gl)();
            },
            providers: [
              bl,
              { provide: Ju, useClass: jl },
              Pl,
              { provide: Yu, useExisting: Pl },
              xl,
              { provide: Al, useExisting: xl },
            ],
            imports: [
              [
                Fl.withOptions({
                  cookieName: "XSRF-TOKEN",
                  headerName: "X-XSRF-TOKEN",
                }),
              ],
            ],
          })),
          gl),
        Ul = new b(function (e) {
          return e.complete();
        });
      function Vl(e) {
        return e
          ? (function (e) {
              return new b(function (t) {
                return e.schedule(function () {
                  return t.complete();
                });
              });
            })(e)
          : Ul;
      }
      function Ml(e) {
        return new b(function (t) {
          var n;
          try {
            n = e();
          } catch (r) {
            return void t.error(r);
          }
          return (n ? q(n) : Vl()).subscribe(t);
        });
      }
      function Hl(e, t) {
        return new b(
          t
            ? function (n) {
                return t.schedule(zl, 0, { error: e, subscriber: n });
              }
            : function (t) {
                return t.error(e);
              }
        );
      }
      function zl(e) {
        var t = e.error;
        e.subscriber.error(t);
      }
      function ql(e, t, n, i) {
        return (
          r(n) && ((i = n), (n = void 0)),
          i
            ? ql(e, t, n).pipe(
                V(function (e) {
                  return u(e) ? i.apply(void 0, _toConsumableArray(e)) : i(e);
                })
              )
            : new b(function (r) {
                !(function e(t, n, r, i, o) {
                  var a;
                  if (
                    (function (e) {
                      return (
                        e &&
                        "function" == typeof e.addEventListener &&
                        "function" == typeof e.removeEventListener
                      );
                    })(t)
                  ) {
                    var s = t;
                    t.addEventListener(n, r, o),
                      (a = function () {
                        return s.removeEventListener(n, r, o);
                      });
                  } else if (
                    (function (e) {
                      return (
                        e &&
                        "function" == typeof e.on &&
                        "function" == typeof e.off
                      );
                    })(t)
                  ) {
                    var u = t;
                    t.on(n, r),
                      (a = function () {
                        return u.off(n, r);
                      });
                  } else if (
                    (function (e) {
                      return (
                        e &&
                        "function" == typeof e.addListener &&
                        "function" == typeof e.removeListener
                      );
                    })(t)
                  ) {
                    var l = t;
                    t.addListener(n, r),
                      (a = function () {
                        return l.removeListener(n, r);
                      });
                  } else {
                    if (!t || !t.length)
                      throw new TypeError("Invalid event target");
                    for (var c = 0, h = t.length; c < h; c++)
                      e(t[c], n, r, i, o);
                  }
                  i.add(a);
                })(
                  e,
                  t,
                  function (e) {
                    r.next(
                      arguments.length > 1
                        ? Array.prototype.slice.call(arguments)
                        : e
                    );
                  },
                  r,
                  n
                );
              })
        );
      }
      function Bl() {
        return Z(1);
      }
      function Wl() {
        return Bl()(Qu.apply(void 0, arguments));
      }
      var Ql = new b(m);
      function Kl(e, t) {
        return "function" == typeof t
          ? function (n) {
              return n.pipe(
                Kl(function (n, r) {
                  return q(e(n, r)).pipe(
                    V(function (e, i) {
                      return t(n, e, r, i);
                    })
                  );
                })
              );
            }
          : function (t) {
              return t.lift(new Zl(e));
            };
      }
      var Zl = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.project = t);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new Gl(e, this.project));
                },
              },
            ]),
            e
          );
        })(),
        Gl = (function (e) {
          function t(e, n) {
            var r;
            return (
              _classCallCheck(this, t),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              )).project = n),
              (r.index = 0),
              r
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "_next",
                value: function (e) {
                  var t,
                    n = this.index++;
                  try {
                    t = this.project(e, n);
                  } catch (r) {
                    return void this.destination.error(r);
                  }
                  this._innerSub(t, e, n);
                },
              },
              {
                key: "_innerSub",
                value: function (e, t, n) {
                  var r = this.innerSubscription;
                  r && r.unsubscribe();
                  var i = new R(this, t, n),
                    o = this.destination;
                  o.add(i),
                    (this.innerSubscription = L(this, e, void 0, void 0, i)),
                    this.innerSubscription !== i &&
                      o.add(this.innerSubscription);
                },
              },
              {
                key: "_complete",
                value: function () {
                  var e = this.innerSubscription;
                  (e && !e.closed) ||
                    _get(_getPrototypeOf(t.prototype), "_complete", this).call(
                      this
                    ),
                    this.unsubscribe();
                },
              },
              {
                key: "_unsubscribe",
                value: function () {
                  this.innerSubscription = null;
                },
              },
              {
                key: "notifyComplete",
                value: function (e) {
                  this.destination.remove(e),
                    (this.innerSubscription = null),
                    this.isStopped &&
                      _get(
                        _getPrototypeOf(t.prototype),
                        "_complete",
                        this
                      ).call(this);
                },
              },
              {
                key: "notifyNext",
                value: function (e, t, n, r, i) {
                  this.destination.next(t);
                },
              },
            ]),
            t
          );
        })(U),
        $l = (function () {
          function e() {
            return (
              Error.call(this),
              (this.message = "argument out of range"),
              (this.name = "ArgumentOutOfRangeError"),
              this
            );
          }
          return (e.prototype = Object.create(Error.prototype)), e;
        })();
      function Jl(e) {
        return function (t) {
          return 0 === e ? Vl() : t.lift(new Yl(e));
        };
      }
      var Yl = (function () {
          function e(t) {
            if ((_classCallCheck(this, e), (this.total = t), this.total < 0))
              throw new $l();
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new Xl(e, this.total));
                },
              },
            ]),
            e
          );
        })(),
        Xl = (function (e) {
          function t(e, n) {
            var r;
            return (
              _classCallCheck(this, t),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              )).total = n),
              (r.count = 0),
              r
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "_next",
                value: function (e) {
                  var t = this.total,
                    n = ++this.count;
                  n <= t &&
                    (this.destination.next(e),
                    n === t &&
                      (this.destination.complete(), this.unsubscribe()));
                },
              },
            ]),
            t
          );
        })(p);
      function ec(e, t, n) {
        return function (r) {
          return r.lift(new ic(e, t, n));
        };
      }
      var tc,
        nc,
        rc,
        ic = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.nextOrObserver = t),
              (this.error = n),
              (this.complete = r);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(
                    new oc(e, this.nextOrObserver, this.error, this.complete)
                  );
                },
              },
            ]),
            e
          );
        })(),
        oc = (function (e) {
          function t(e, n, i, o) {
            var a;
            return (
              _classCallCheck(this, t),
              ((a = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              ))._tapNext = m),
              (a._tapError = m),
              (a._tapComplete = m),
              (a._tapError = i || m),
              (a._tapComplete = o || m),
              r(n)
                ? ((a._context = _assertThisInitialized(a)), (a._tapNext = n))
                : n &&
                  ((a._context = n),
                  (a._tapNext = n.next || m),
                  (a._tapError = n.error || m),
                  (a._tapComplete = n.complete || m)),
              a
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "_next",
                value: function (e) {
                  try {
                    this._tapNext.call(this._context, e);
                  } catch (t) {
                    return void this.destination.error(t);
                  }
                  this.destination.next(e);
                },
              },
              {
                key: "_error",
                value: function (e) {
                  try {
                    this._tapError.call(this._context, e);
                  } catch (e) {
                    return void this.destination.error(e);
                  }
                  this.destination.error(e);
                },
              },
              {
                key: "_complete",
                value: function () {
                  try {
                    this._tapComplete.call(this._context);
                  } catch (e) {
                    return void this.destination.error(e);
                  }
                  return this.destination.complete();
                },
              },
            ]),
            t
          );
        })(p),
        ac = (function (e) {
          function t(e, n) {
            var r;
            return (
              _classCallCheck(this, t),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e, n)
              )).scheduler = e),
              (r.work = n),
              (r.pending = !1),
              r
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "schedule",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0;
                  if (this.closed) return this;
                  this.state = e;
                  var n = this.id,
                    r = this.scheduler;
                  return (
                    null != n && (this.id = this.recycleAsyncId(r, n, t)),
                    (this.pending = !0),
                    (this.delay = t),
                    (this.id = this.id || this.requestAsyncId(r, this.id, t)),
                    this
                  );
                },
              },
              {
                key: "requestAsyncId",
                value: function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0;
                  return setInterval(e.flush.bind(e, this), n);
                },
              },
              {
                key: "recycleAsyncId",
                value: function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0;
                  if (null !== n && this.delay === n && !1 === this.pending)
                    return t;
                  clearInterval(t);
                },
              },
              {
                key: "execute",
                value: function (e, t) {
                  if (this.closed)
                    return new Error("executing a cancelled action");
                  this.pending = !1;
                  var n = this._execute(e, t);
                  if (n) return n;
                  !1 === this.pending &&
                    null != this.id &&
                    (this.id = this.recycleAsyncId(
                      this.scheduler,
                      this.id,
                      null
                    ));
                },
              },
              {
                key: "_execute",
                value: function (e, t) {
                  var n = !1,
                    r = void 0;
                  try {
                    this.work(e);
                  } catch (i) {
                    (n = !0), (r = (!!i && i) || new Error(i));
                  }
                  if (n) return this.unsubscribe(), r;
                },
              },
              {
                key: "_unsubscribe",
                value: function () {
                  var e = this.id,
                    t = this.scheduler,
                    n = t.actions,
                    r = n.indexOf(this);
                  (this.work = null),
                    (this.state = null),
                    (this.pending = !1),
                    (this.scheduler = null),
                    -1 !== r && n.splice(r, 1),
                    null != e && (this.id = this.recycleAsyncId(t, e, null)),
                    (this.delay = null);
                },
              },
            ]),
            t
          );
        })(
          (function (e) {
            function t(e, n) {
              return (
                _classCallCheck(this, t),
                _possibleConstructorReturn(this, _getPrototypeOf(t).call(this))
              );
            }
            return (
              _inherits(t, e),
              _createClass(t, [
                {
                  key: "schedule",
                  value: function (e) {
                    arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    return this;
                  },
                },
              ]),
              t
            );
          })(f)
        ),
        sc = (function () {
          var e = (function () {
            function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : e.now;
              _classCallCheck(this, e),
                (this.SchedulerAction = t),
                (this.now = n);
            }
            return (
              _createClass(e, [
                {
                  key: "schedule",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      n = arguments.length > 2 ? arguments[2] : void 0;
                    return new this.SchedulerAction(this, e).schedule(n, t);
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.now = function () {
              return Date.now();
            }),
            e
          );
        })(),
        uc = new ((function (e) {
          function t(e) {
            var n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : sc.now;
            return (
              _classCallCheck(this, t),
              ((n = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e, function () {
                  return t.delegate && t.delegate !== _assertThisInitialized(n)
                    ? t.delegate.now()
                    : r();
                })
              )).actions = []),
              (n.active = !1),
              (n.scheduled = void 0),
              n
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "schedule",
                value: function (e) {
                  var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    r = arguments.length > 2 ? arguments[2] : void 0;
                  return t.delegate && t.delegate !== this
                    ? t.delegate.schedule(e, n, r)
                    : _get(_getPrototypeOf(t.prototype), "schedule", this).call(
                        this,
                        e,
                        n,
                        r
                      );
                },
              },
              {
                key: "flush",
                value: function (e) {
                  var t = this.actions;
                  if (this.active) t.push(e);
                  else {
                    var n;
                    this.active = !0;
                    do {
                      if ((n = e.execute(e.state, e.delay))) break;
                    } while ((e = t.shift()));
                    if (((this.active = !1), n)) {
                      for (; (e = t.shift()); ) e.unsubscribe();
                      throw n;
                    }
                  }
                },
              },
            ]),
            t
          );
        })(sc))(ac),
        lc =
          (((tc = (function () {
            function e(t, n, r) {
              _classCallCheck(this, e),
                (this.kind = t),
                (this.value = n),
                (this.error = r),
                (this.hasValue = "N" === t);
            }
            return (
              _createClass(
                e,
                [
                  {
                    key: "observe",
                    value: function (e) {
                      switch (this.kind) {
                        case "N":
                          return e.next && e.next(this.value);
                        case "E":
                          return e.error && e.error(this.error);
                        case "C":
                          return e.complete && e.complete();
                      }
                    },
                  },
                  {
                    key: "do",
                    value: function (e, t, n) {
                      switch (this.kind) {
                        case "N":
                          return e && e(this.value);
                        case "E":
                          return t && t(this.error);
                        case "C":
                          return n && n();
                      }
                    },
                  },
                  {
                    key: "accept",
                    value: function (e, t, n) {
                      return e && "function" == typeof e.next
                        ? this.observe(e)
                        : this.do(e, t, n);
                    },
                  },
                  {
                    key: "toObservable",
                    value: function () {
                      switch (this.kind) {
                        case "N":
                          return Qu(this.value);
                        case "E":
                          return Hl(this.error);
                        case "C":
                          return Vl();
                      }
                      throw new Error("unexpected notification kind value");
                    },
                  },
                ],
                [
                  {
                    key: "createNext",
                    value: function (t) {
                      return void 0 !== t
                        ? new e("N", t)
                        : e.undefinedValueNotification;
                    },
                  },
                  {
                    key: "createError",
                    value: function (t) {
                      return new e("E", void 0, t);
                    },
                  },
                  {
                    key: "createComplete",
                    value: function () {
                      return e.completeNotification;
                    },
                  },
                ]
              ),
              e
            );
          })()).completeNotification = new tc("C")),
          (tc.undefinedValueNotification = new tc("N", void 0)),
          tc),
        cc = (function () {
          function e(t, n) {
            _classCallCheck(this, e), (this.delay = t), (this.scheduler = n);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new hc(e, this.delay, this.scheduler));
                },
              },
            ]),
            e
          );
        })(),
        hc = (function (e) {
          function t(e, n, r) {
            var i;
            return (
              _classCallCheck(this, t),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              )).delay = n),
              (i.scheduler = r),
              (i.queue = []),
              (i.active = !1),
              (i.errored = !1),
              i
            );
          }
          return (
            _inherits(t, e),
            _createClass(
              t,
              [
                {
                  key: "_schedule",
                  value: function (e) {
                    (this.active = !0),
                      this.destination.add(
                        e.schedule(t.dispatch, this.delay, {
                          source: this,
                          destination: this.destination,
                          scheduler: e,
                        })
                      );
                  },
                },
                {
                  key: "scheduleNotification",
                  value: function (e) {
                    if (!0 !== this.errored) {
                      var t = this.scheduler,
                        n = new fc(t.now() + this.delay, e);
                      this.queue.push(n),
                        !1 === this.active && this._schedule(t);
                    }
                  },
                },
                {
                  key: "_next",
                  value: function (e) {
                    this.scheduleNotification(lc.createNext(e));
                  },
                },
                {
                  key: "_error",
                  value: function (e) {
                    (this.errored = !0),
                      (this.queue = []),
                      this.destination.error(e),
                      this.unsubscribe();
                  },
                },
                {
                  key: "_complete",
                  value: function () {
                    this.scheduleNotification(lc.createComplete()),
                      this.unsubscribe();
                  },
                },
              ],
              [
                {
                  key: "dispatch",
                  value: function (e) {
                    for (
                      var t = e.source,
                        n = t.queue,
                        r = e.scheduler,
                        i = e.destination;
                      n.length > 0 && n[0].time - r.now() <= 0;

                    )
                      n.shift().notification.observe(i);
                    if (n.length > 0) {
                      var o = Math.max(0, n[0].time - r.now());
                      this.schedule(e, o);
                    } else this.unsubscribe(), (t.active = !1);
                  },
                },
              ]
            ),
            t
          );
        })(p),
        fc = function e(t, n) {
          _classCallCheck(this, e), (this.time = t), (this.notification = n);
        },
        dc = "Service workers are disabled or not supported by this browser",
        vc = (function () {
          function e(t) {
            if ((_classCallCheck(this, e), (this.serviceWorker = t), t)) {
              var n = ql(t, "controllerchange").pipe(
                  V(function () {
                    return t.controller;
                  })
                ),
                r = Wl(
                  Ml(function () {
                    return Qu(t.controller);
                  }),
                  n
                );
              (this.worker = r.pipe(
                Zu(function (e) {
                  return !!e;
                })
              )),
                (this.registration = this.worker.pipe(
                  Kl(function () {
                    return t.getRegistration();
                  })
                ));
              var i = ql(t, "message")
                .pipe(
                  V(function (e) {
                    return e.data;
                  })
                )
                .pipe(
                  Zu(function (e) {
                    return e && e.type;
                  })
                )
                .pipe(re(new x()));
              i.connect(), (this.events = i);
            } else
              this.worker =
                this.events =
                this.registration =
                  Ml(function () {
                    return Hl(
                      new Error(
                        "Service workers are disabled or not supported by this browser"
                      )
                    );
                  });
          }
          return (
            _createClass(e, [
              {
                key: "postMessage",
                value: function (e, t) {
                  return this.worker
                    .pipe(
                      Jl(1),
                      ec(function (n) {
                        n.postMessage(Object.assign({ action: e }, t));
                      })
                    )
                    .toPromise()
                    .then(function () {});
                },
              },
              {
                key: "postMessageWithStatus",
                value: function (e, t, n) {
                  var r = this.waitForStatus(n),
                    i = this.postMessage(e, t);
                  return Promise.all([r, i]).then(function () {});
                },
              },
              {
                key: "generateNonce",
                value: function () {
                  return Math.round(1e7 * Math.random());
                },
              },
              {
                key: "eventsOfType",
                value: function (e) {
                  return this.events.pipe(
                    Zu(function (t) {
                      return t.type === e;
                    })
                  );
                },
              },
              {
                key: "nextEventOfType",
                value: function (e) {
                  return this.eventsOfType(e).pipe(Jl(1));
                },
              },
              {
                key: "waitForStatus",
                value: function (e) {
                  return this.eventsOfType("STATUS")
                    .pipe(
                      Zu(function (t) {
                        return t.nonce === e;
                      }),
                      Jl(1),
                      V(function (e) {
                        if (!e.status) throw new Error(e.error);
                      })
                    )
                    .toPromise();
                },
              },
              {
                key: "isEnabled",
                get: function () {
                  return !!this.serviceWorker;
                },
              },
            ]),
            e
          );
        })(),
        pc =
          (((rc = (function () {
            function e(t) {
              if (
                (_classCallCheck(this, e),
                (this.sw = t),
                (this.subscriptionChanges = new x()),
                !t.isEnabled)
              )
                return (
                  (this.messages = Ql),
                  (this.notificationClicks = Ql),
                  void (this.subscription = Ql)
                );
              (this.messages = this.sw.eventsOfType("PUSH").pipe(
                V(function (e) {
                  return e.data;
                })
              )),
                (this.notificationClicks = this.sw
                  .eventsOfType("NOTIFICATION_CLICK")
                  .pipe(
                    V(function (e) {
                      return e.data;
                    })
                  )),
                (this.pushManager = this.sw.registration.pipe(
                  V(function (e) {
                    return e.pushManager;
                  })
                ));
              var n = this.pushManager.pipe(
                Kl(function (e) {
                  return e.getSubscription();
                })
              );
              this.subscription = $(n, this.subscriptionChanges);
            }
            return (
              _createClass(e, [
                {
                  key: "requestSubscription",
                  value: function (e) {
                    var t = this;
                    if (!this.sw.isEnabled)
                      return Promise.reject(new Error(dc));
                    for (
                      var n = { userVisibleOnly: !0 },
                        r = this.decodeBase64(
                          e.serverPublicKey
                            .replace(/_/g, "/")
                            .replace(/-/g, "+")
                        ),
                        i = new Uint8Array(new ArrayBuffer(r.length)),
                        o = 0;
                      o < r.length;
                      o++
                    )
                      i[o] = r.charCodeAt(o);
                    return (
                      (n.applicationServerKey = i),
                      this.pushManager
                        .pipe(
                          Kl(function (e) {
                            return e.subscribe(n);
                          }),
                          Jl(1)
                        )
                        .toPromise()
                        .then(function (e) {
                          return t.subscriptionChanges.next(e), e;
                        })
                    );
                  },
                },
                {
                  key: "unsubscribe",
                  value: function () {
                    var e = this;
                    return this.sw.isEnabled
                      ? this.subscription
                          .pipe(
                            Jl(1),
                            Kl(function (t) {
                              if (null === t)
                                throw new Error(
                                  "Not subscribed to push notifications."
                                );
                              return t.unsubscribe().then(function (t) {
                                if (!t) throw new Error("Unsubscribe failed!");
                                e.subscriptionChanges.next(null);
                              });
                            })
                          )
                          .toPromise()
                      : Promise.reject(new Error(dc));
                  },
                },
                {
                  key: "decodeBase64",
                  value: function (e) {
                    return atob(e);
                  },
                },
                {
                  key: "isEnabled",
                  get: function () {
                    return this.sw.isEnabled;
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || rc)($e(vc));
          }),
          (rc.ɵprov = de({ token: rc, factory: rc.ɵfac })),
          rc),
        yc =
          (((nc = (function () {
            function e(t) {
              if ((_classCallCheck(this, e), (this.sw = t), !t.isEnabled))
                return (this.available = Ql), void (this.activated = Ql);
              (this.available = this.sw.eventsOfType("UPDATE_AVAILABLE")),
                (this.activated = this.sw.eventsOfType("UPDATE_ACTIVATED"));
            }
            return (
              _createClass(e, [
                {
                  key: "checkForUpdate",
                  value: function () {
                    if (!this.sw.isEnabled)
                      return Promise.reject(new Error(dc));
                    var e = this.sw.generateNonce();
                    return this.sw.postMessageWithStatus(
                      "CHECK_FOR_UPDATES",
                      { statusNonce: e },
                      e
                    );
                  },
                },
                {
                  key: "activateUpdate",
                  value: function () {
                    if (!this.sw.isEnabled)
                      return Promise.reject(new Error(dc));
                    var e = this.sw.generateNonce();
                    return this.sw.postMessageWithStatus(
                      "ACTIVATE_UPDATE",
                      { statusNonce: e },
                      e
                    );
                  },
                },
                {
                  key: "isEnabled",
                  get: function () {
                    return this.sw.isEnabled;
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || nc)($e(vc));
          }),
          (nc.ɵprov = de({ token: nc, factory: nc.ɵfac })),
          nc),
        gc = function e() {
          _classCallCheck(this, e);
        },
        mc = new He("NGSW_REGISTER_SCRIPT");
      function _c(e, t, n, r) {
        return function () {
          if (su(r) && "serviceWorker" in navigator && !1 !== n.enabled) {
            var i;
            if (
              (navigator.serviceWorker.addEventListener(
                "controllerchange",
                function () {
                  null !== navigator.serviceWorker.controller &&
                    navigator.serviceWorker.controller.postMessage({
                      action: "INITIALIZE",
                    });
                }
              ),
              "function" == typeof n.registrationStrategy)
            )
              i = n.registrationStrategy();
            else {
              var o = _toArray(
                  (n.registrationStrategy || "registerWhenStable").split(":")
                ),
                a = o[0],
                s = o.slice(1);
              switch (a) {
                case "registerImmediately":
                  i = Qu(null);
                  break;
                case "registerWithDelay":
                  i = Qu(null).pipe(
                    (function (e) {
                      var t,
                        n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : uc,
                        r =
                          (t = e) instanceof Date && !isNaN(+t)
                            ? +e - n.now()
                            : Math.abs(e);
                      return function (e) {
                        return e.lift(new cc(r, n));
                      };
                    })(+s[0] || 0)
                  );
                  break;
                case "registerWhenStable":
                  i = e.get(us).isStable.pipe(
                    Zu(function (e) {
                      return e;
                    })
                  );
                  break;
                default:
                  throw new Error(
                    "Unknown ServiceWorker registration strategy: ".concat(
                      n.registrationStrategy
                    )
                  );
              }
            }
            i.pipe(Jl(1)).subscribe(function () {
              return navigator.serviceWorker
                .register(t, { scope: n.scope })
                .catch(function (e) {
                  return console.error(
                    "Service worker registration failed with:",
                    e
                  );
                });
            });
          }
        };
      }
      function kc(e, t) {
        return new vc(
          su(t) && !1 !== e.enabled ? navigator.serviceWorker : void 0
        );
      }
      var Cc,
        bc =
          (((Cc = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, null, [
                {
                  key: "register",
                  value: function (t) {
                    var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return {
                      ngModule: e,
                      providers: [
                        { provide: mc, useValue: t },
                        { provide: gc, useValue: n },
                        { provide: vc, useFactory: kc, deps: [gc, Ta] },
                        {
                          provide: ka,
                          useFactory: _c,
                          deps: [Bi, mc, gc, Ta],
                          multi: !0,
                        },
                      ],
                    };
                  },
                },
              ]),
              e
            );
          })()).ɵmod = pt({ type: Cc })),
          (Cc.ɵinj = ve({
            factory: function (e) {
              return new (e || Cc)();
            },
            providers: [pc, yc],
          })),
          Cc),
        wc = (function (e) {
          function t(e) {
            var n;
            return (
              _classCallCheck(this, t),
              ((n = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this)
              ))._value = e),
              n
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "_subscribe",
                value: function (e) {
                  var n = _get(
                    _getPrototypeOf(t.prototype),
                    "_subscribe",
                    this
                  ).call(this, e);
                  return n && !n.closed && e.next(this._value), n;
                },
              },
              {
                key: "getValue",
                value: function () {
                  if (this.hasError) throw this.thrownError;
                  if (this.closed) throw new E();
                  return this._value;
                },
              },
              {
                key: "next",
                value: function (e) {
                  _get(_getPrototypeOf(t.prototype), "next", this).call(
                    this,
                    (this._value = e)
                  );
                },
              },
              {
                key: "value",
                get: function () {
                  return this.getValue();
                },
              },
            ]),
            t
          );
        })(x),
        Sc = (function () {
          function e() {
            return (
              Error.call(this),
              (this.message = "no elements in sequence"),
              (this.name = "EmptyError"),
              this
            );
          }
          return (e.prototype = Object.create(Error.prototype)), e;
        })(),
        Ec = {},
        Tc = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.resultSelector = t);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new Ac(e, this.resultSelector));
                },
              },
            ]),
            e
          );
        })(),
        Ac = (function (e) {
          function t(e, n) {
            var r;
            return (
              _classCallCheck(this, t),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              )).resultSelector = n),
              (r.active = 0),
              (r.values = []),
              (r.observables = []),
              r
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "_next",
                value: function (e) {
                  this.values.push(Ec), this.observables.push(e);
                },
              },
              {
                key: "_complete",
                value: function () {
                  var e = this.observables,
                    t = e.length;
                  if (0 === t) this.destination.complete();
                  else {
                    (this.active = t), (this.toRespond = t);
                    for (var n = 0; n < t; n++) {
                      var r = e[n];
                      this.add(L(this, r, r, n));
                    }
                  }
                },
              },
              {
                key: "notifyComplete",
                value: function (e) {
                  0 == (this.active -= 1) && this.destination.complete();
                },
              },
              {
                key: "notifyNext",
                value: function (e, t, n, r, i) {
                  var o = this.values,
                    a = this.toRespond
                      ? o[n] === Ec
                        ? --this.toRespond
                        : this.toRespond
                      : 0;
                  (o[n] = t),
                    0 === a &&
                      (this.resultSelector
                        ? this._tryResultSelector(o)
                        : this.destination.next(o.slice()));
                },
              },
              {
                key: "_tryResultSelector",
                value: function (e) {
                  var t;
                  try {
                    t = this.resultSelector.apply(this, e);
                  } catch (n) {
                    return void this.destination.error(n);
                  }
                  this.destination.next(t);
                },
              },
            ]),
            t
          );
        })(U);
      function xc(e) {
        return function (t) {
          return 0 === e ? Vl() : t.lift(new Pc(e));
        };
      }
      var Pc = (function () {
          function e(t) {
            if ((_classCallCheck(this, e), (this.total = t), this.total < 0))
              throw new $l();
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new Oc(e, this.total));
                },
              },
            ]),
            e
          );
        })(),
        Oc = (function (e) {
          function t(e, n) {
            var r;
            return (
              _classCallCheck(this, t),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              )).total = n),
              (r.ring = new Array()),
              (r.count = 0),
              r
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "_next",
                value: function (e) {
                  var t = this.ring,
                    n = this.total,
                    r = this.count++;
                  t.length < n ? t.push(e) : (t[r % n] = e);
                },
              },
              {
                key: "_complete",
                value: function () {
                  var e = this.destination,
                    t = this.count;
                  if (t > 0)
                    for (
                      var n =
                          this.count >= this.total ? this.total : this.count,
                        r = this.ring,
                        i = 0;
                      i < n;
                      i++
                    ) {
                      var o = t++ % n;
                      e.next(r[o]);
                    }
                  e.complete();
                },
              },
            ]),
            t
          );
        })(p);
      function Rc() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dc;
        return function (t) {
          return t.lift(new Ic(e));
        };
      }
      var Ic = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.errorFactory = t);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new Nc(e, this.errorFactory));
                },
              },
            ]),
            e
          );
        })(),
        Nc = (function (e) {
          function t(e, n) {
            var r;
            return (
              _classCallCheck(this, t),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              )).errorFactory = n),
              (r.hasValue = !1),
              r
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "_next",
                value: function (e) {
                  (this.hasValue = !0), this.destination.next(e);
                },
              },
              {
                key: "_complete",
                value: function () {
                  if (this.hasValue) return this.destination.complete();
                  var e;
                  try {
                    e = this.errorFactory();
                  } catch (t) {
                    e = t;
                  }
                  this.destination.error(e);
                },
              },
            ]),
            t
          );
        })(p);
      function Dc() {
        return new Sc();
      }
      function jc() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return function (t) {
          return t.lift(new Fc(e));
        };
      }
      var Fc = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.defaultValue = t);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new Lc(e, this.defaultValue));
                },
              },
            ]),
            e
          );
        })(),
        Lc = (function (e) {
          function t(e, n) {
            var r;
            return (
              _classCallCheck(this, t),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              )).defaultValue = n),
              (r.isEmpty = !0),
              r
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "_next",
                value: function (e) {
                  (this.isEmpty = !1), this.destination.next(e);
                },
              },
              {
                key: "_complete",
                value: function () {
                  this.isEmpty && this.destination.next(this.defaultValue),
                    this.destination.complete();
                },
              },
            ]),
            t
          );
        })(p);
      function Uc(e, t) {
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(
            e
              ? Zu(function (t, n) {
                  return e(t, n, r);
                })
              : K,
            xc(1),
            n
              ? jc(t)
              : Rc(function () {
                  return new Sc();
                })
          );
        };
      }
      function Vc(e) {
        return function (t) {
          var n = new Mc(e),
            r = t.lift(n);
          return (n.caught = r);
        };
      }
      var Mc = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.selector = t);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new Hc(e, this.selector, this.caught));
                },
              },
            ]),
            e
          );
        })(),
        Hc = (function (e) {
          function t(e, n, r) {
            var i;
            return (
              _classCallCheck(this, t),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              )).selector = n),
              (i.caught = r),
              i
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "error",
                value: function (e) {
                  if (!this.isStopped) {
                    var n;
                    try {
                      n = this.selector(e, this.caught);
                    } catch (o) {
                      return void _get(
                        _getPrototypeOf(t.prototype),
                        "error",
                        this
                      ).call(this, o);
                    }
                    this._unsubscribeAndRecycle();
                    var r = new R(this, void 0, void 0);
                    this.add(r);
                    var i = L(this, n, void 0, void 0, r);
                    i !== r && this.add(i);
                  }
                },
              },
            ]),
            t
          );
        })(U);
      function zc(e, t) {
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(
            e
              ? Zu(function (t, n) {
                  return e(t, n, r);
                })
              : K,
            Jl(1),
            n
              ? jc(t)
              : Rc(function () {
                  return new Sc();
                })
          );
        };
      }
      var qc = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.predicate = t),
              (this.thisArg = n),
              (this.source = r);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(
                    new Bc(e, this.predicate, this.thisArg, this.source)
                  );
                },
              },
            ]),
            e
          );
        })(),
        Bc = (function (e) {
          function t(e, n, r, i) {
            var o;
            return (
              _classCallCheck(this, t),
              ((o = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              )).predicate = n),
              (o.thisArg = r),
              (o.source = i),
              (o.index = 0),
              (o.thisArg = r || _assertThisInitialized(o)),
              o
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "notifyComplete",
                value: function (e) {
                  this.destination.next(e), this.destination.complete();
                },
              },
              {
                key: "_next",
                value: function (e) {
                  var t = !1;
                  try {
                    t = this.predicate.call(
                      this.thisArg,
                      e,
                      this.index++,
                      this.source
                    );
                  } catch (n) {
                    return void this.destination.error(n);
                  }
                  t || this.notifyComplete(!1);
                },
              },
              {
                key: "_complete",
                value: function () {
                  this.notifyComplete(!0);
                },
              },
            ]),
            t
          );
        })(p);
      function Wc(e, t) {
        var n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new Kc(e, t, n));
          }
        );
      }
      var Qc,
        Kc = (function () {
          function e(t, n) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            _classCallCheck(this, e),
              (this.accumulator = t),
              (this.seed = n),
              (this.hasSeed = r);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(
                    new Zc(e, this.accumulator, this.seed, this.hasSeed)
                  );
                },
              },
            ]),
            e
          );
        })(),
        Zc = (function (e) {
          function t(e, n, r, i) {
            var o;
            return (
              _classCallCheck(this, t),
              ((o = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              )).accumulator = n),
              (o._seed = r),
              (o.hasSeed = i),
              (o.index = 0),
              o
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "_next",
                value: function (e) {
                  if (this.hasSeed) return this._tryNext(e);
                  (this.seed = e), this.destination.next(e);
                },
              },
              {
                key: "_tryNext",
                value: function (e) {
                  var t,
                    n = this.index++;
                  try {
                    t = this.accumulator(this.seed, e, n);
                  } catch (r) {
                    this.destination.error(r);
                  }
                  (this.seed = t), this.destination.next(t);
                },
              },
              {
                key: "seed",
                get: function () {
                  return this._seed;
                },
                set: function (e) {
                  (this.hasSeed = !0), (this._seed = e);
                },
              },
            ]),
            t
          );
        })(p),
        Gc = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.callback = t);
          }
          return (
            _createClass(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new $c(e, this.callback));
                },
              },
            ]),
            e
          );
        })(),
        $c = (function (e) {
          function t(e, n) {
            var r;
            return (
              _classCallCheck(this, t),
              (r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e)
              )).add(new f(n)),
              r
            );
          }
          return _inherits(t, e), t;
        })(p),
        Jc = function e(t, n) {
          _classCallCheck(this, e), (this.id = t), (this.url = n);
        },
        Yc = (function (e) {
          function t(e, n) {
            var r,
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "imperative",
              o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
            return (
              _classCallCheck(this, t),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e, n)
              )).navigationTrigger = i),
              (r.restoredState = o),
              r
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "toString",
                value: function () {
                  return "NavigationStart(id: "
                    .concat(this.id, ", url: '")
                    .concat(this.url, "')");
                },
              },
            ]),
            t
          );
        })(Jc),
        Xc = (function (e) {
          function t(e, n, r) {
            var i;
            return (
              _classCallCheck(this, t),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e, n)
              )).urlAfterRedirects = r),
              i
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "toString",
                value: function () {
                  return "NavigationEnd(id: "
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "')");
                },
              },
            ]),
            t
          );
        })(Jc),
        eh = (function (e) {
          function t(e, n, r) {
            var i;
            return (
              _classCallCheck(this, t),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e, n)
              )).reason = r),
              i
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "toString",
                value: function () {
                  return "NavigationCancel(id: "
                    .concat(this.id, ", url: '")
                    .concat(this.url, "')");
                },
              },
            ]),
            t
          );
        })(Jc),
        th = (function (e) {
          function t(e, n, r) {
            var i;
            return (
              _classCallCheck(this, t),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e, n)
              )).error = r),
              i
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "toString",
                value: function () {
                  return "NavigationError(id: "
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', error: ")
                    .concat(this.error, ")");
                },
              },
            ]),
            t
          );
        })(Jc),
        nh = (function (e) {
          function t(e, n, r, i) {
            var o;
            return (
              _classCallCheck(this, t),
              ((o = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e, n)
              )).urlAfterRedirects = r),
              (o.state = i),
              o
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "toString",
                value: function () {
                  return "RoutesRecognized(id: "
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ")");
                },
              },
            ]),
            t
          );
        })(Jc),
        rh = (function (e) {
          function t(e, n, r, i) {
            var o;
            return (
              _classCallCheck(this, t),
              ((o = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e, n)
              )).urlAfterRedirects = r),
              (o.state = i),
              o
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "toString",
                value: function () {
                  return "GuardsCheckStart(id: "
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ")");
                },
              },
            ]),
            t
          );
        })(Jc),
        ih = (function (e) {
          function t(e, n, r, i, o) {
            var a;
            return (
              _classCallCheck(this, t),
              ((a = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e, n)
              )).urlAfterRedirects = r),
              (a.state = i),
              (a.shouldActivate = o),
              a
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "toString",
                value: function () {
                  return "GuardsCheckEnd(id: "
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ", shouldActivate: ")
                    .concat(this.shouldActivate, ")");
                },
              },
            ]),
            t
          );
        })(Jc),
        oh = (function (e) {
          function t(e, n, r, i) {
            var o;
            return (
              _classCallCheck(this, t),
              ((o = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e, n)
              )).urlAfterRedirects = r),
              (o.state = i),
              o
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "toString",
                value: function () {
                  return "ResolveStart(id: "
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ")");
                },
              },
            ]),
            t
          );
        })(Jc),
        ah = (function (e) {
          function t(e, n, r, i) {
            var o;
            return (
              _classCallCheck(this, t),
              ((o = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e, n)
              )).urlAfterRedirects = r),
              (o.state = i),
              o
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "toString",
                value: function () {
                  return "ResolveEnd(id: "
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ")");
                },
              },
            ]),
            t
          );
        })(Jc),
        sh = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.route = t);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return "RouteConfigLoadStart(path: ".concat(
                    this.route.path,
                    ")"
                  );
                },
              },
            ]),
            e
          );
        })(),
        uh = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.route = t);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return "RouteConfigLoadEnd(path: ".concat(
                    this.route.path,
                    ")"
                  );
                },
              },
            ]),
            e
          );
        })(),
        lh = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.snapshot = t);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return "ChildActivationStart(path: '".concat(
                    (this.snapshot.routeConfig &&
                      this.snapshot.routeConfig.path) ||
                      "",
                    "')"
                  );
                },
              },
            ]),
            e
          );
        })(),
        ch = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.snapshot = t);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return "ChildActivationEnd(path: '".concat(
                    (this.snapshot.routeConfig &&
                      this.snapshot.routeConfig.path) ||
                      "",
                    "')"
                  );
                },
              },
            ]),
            e
          );
        })(),
        hh = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.snapshot = t);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return "ActivationStart(path: '".concat(
                    (this.snapshot.routeConfig &&
                      this.snapshot.routeConfig.path) ||
                      "",
                    "')"
                  );
                },
              },
            ]),
            e
          );
        })(),
        fh = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.snapshot = t);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return "ActivationEnd(path: '".concat(
                    (this.snapshot.routeConfig &&
                      this.snapshot.routeConfig.path) ||
                      "",
                    "')"
                  );
                },
              },
            ]),
            e
          );
        })(),
        dh = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.routerEvent = t),
              (this.position = n),
              (this.anchor = r);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return "Scroll(anchor: '"
                    .concat(this.anchor, "', position: '")
                    .concat(
                      this.position
                        ? ""
                            .concat(this.position[0], ", ")
                            .concat(this.position[1])
                        : null,
                      "')"
                    );
                },
              },
            ]),
            e
          );
        })(),
        vh =
          (((Qc = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function (e) {
            return new (e || Qc)();
          }),
          (Qc.ɵcmp = ht({
            type: Qc,
            selectors: [["ng-component"]],
            decls: 1,
            vars: 0,
            template: function (e, t) {
              1 & e && ho(0, "router-outlet");
            },
            directives: function () {
              return [Sd];
            },
            encapsulation: 2,
          })),
          Qc),
        ph = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.params = t || {});
          }
          return (
            _createClass(e, [
              {
                key: "has",
                value: function (e) {
                  return this.params.hasOwnProperty(e);
                },
              },
              {
                key: "get",
                value: function (e) {
                  if (this.has(e)) {
                    var t = this.params[e];
                    return Array.isArray(t) ? t[0] : t;
                  }
                  return null;
                },
              },
              {
                key: "getAll",
                value: function (e) {
                  if (this.has(e)) {
                    var t = this.params[e];
                    return Array.isArray(t) ? t : [t];
                  }
                  return [];
                },
              },
              {
                key: "keys",
                get: function () {
                  return Object.keys(this.params);
                },
              },
            ]),
            e
          );
        })();
      function yh(e) {
        return new ph(e);
      }
      function gh(e) {
        var t = Error("NavigationCancelingError: " + e);
        return (t.ngNavigationCancelingError = !0), t;
      }
      function mh(e, t, n) {
        var r = n.path.split("/");
        if (r.length > e.length) return null;
        if ("full" === n.pathMatch && (t.hasChildren() || r.length < e.length))
          return null;
        for (var i = {}, o = 0; o < r.length; o++) {
          var a = r[o],
            s = e[o];
          if (a.startsWith(":")) i[a.substring(1)] = s;
          else if (a !== s.path) return null;
        }
        return { consumed: e.slice(0, r.length), posParams: i };
      }
      var _h = function e(t, n) {
        _classCallCheck(this, e), (this.routes = t), (this.module = n);
      };
      function kh(e) {
        for (
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = 0;
          n < e.length;
          n++
        ) {
          var r = e[n];
          Ch(r, bh(t, r));
        }
      }
      function Ch(e, t) {
        if (!e)
          throw new Error(
            "\n      Invalid configuration of route '".concat(
              t,
              "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "
            )
          );
        if (Array.isArray(e))
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': Array cannot be specified"
            )
          );
        if (
          !e.component &&
          !e.children &&
          !e.loadChildren &&
          e.outlet &&
          "primary" !== e.outlet
        )
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': a componentless route without children or loadChildren cannot have a named outlet set"
            )
          );
        if (e.redirectTo && e.children)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': redirectTo and children cannot be used together"
            )
          );
        if (e.redirectTo && e.loadChildren)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': redirectTo and loadChildren cannot be used together"
            )
          );
        if (e.children && e.loadChildren)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': children and loadChildren cannot be used together"
            )
          );
        if (e.redirectTo && e.component)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': redirectTo and component cannot be used together"
            )
          );
        if (e.path && e.matcher)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': path and matcher cannot be used together"
            )
          );
        if (
          void 0 === e.redirectTo &&
          !e.component &&
          !e.children &&
          !e.loadChildren
        )
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "'. One of the following must be provided: component, redirectTo, children or loadChildren"
            )
          );
        if (void 0 === e.path && void 0 === e.matcher)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': routes must have either a path or a matcher specified"
            )
          );
        if ("string" == typeof e.path && "/" === e.path.charAt(0))
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': path cannot start with a slash"
            )
          );
        if ("" === e.path && void 0 !== e.redirectTo && void 0 === e.pathMatch)
          throw new Error(
            "Invalid configuration of route '{path: \""
              .concat(t, '", redirectTo: "')
              .concat(
                e.redirectTo,
                "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'."
              )
          );
        if (
          void 0 !== e.pathMatch &&
          "full" !== e.pathMatch &&
          "prefix" !== e.pathMatch
        )
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': pathMatch can only be set to 'prefix' or 'full'"
            )
          );
        e.children && kh(e.children, t);
      }
      function bh(e, t) {
        return t
          ? e || t.path
            ? e && !t.path
              ? "".concat(e, "/")
              : !e && t.path
              ? t.path
              : "".concat(e, "/").concat(t.path)
            : ""
          : e;
      }
      function wh(e) {
        var t = e.children && e.children.map(wh),
          n = t
            ? Object.assign(Object.assign({}, e), { children: t })
            : Object.assign({}, e);
        return (
          !n.component &&
            (t || n.loadChildren) &&
            n.outlet &&
            "primary" !== n.outlet &&
            (n.component = vh),
          n
        );
      }
      function Sh(e, t) {
        var n,
          r = Object.keys(e),
          i = Object.keys(t);
        if (!r || !i || r.length != i.length) return !1;
        for (var o = 0; o < r.length; o++)
          if (!Eh(e[(n = r[o])], t[n])) return !1;
        return !0;
      }
      function Eh(e, t) {
        return Array.isArray(e) && Array.isArray(t)
          ? e.length == t.length &&
              e.every(function (e) {
                return t.indexOf(e) > -1;
              })
          : e === t;
      }
      function Th(e) {
        return Array.prototype.concat.apply([], e);
      }
      function Ah(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function xh(e, t) {
        for (var n in e) e.hasOwnProperty(n) && t(e[n], n);
      }
      function Ph(e) {
        return vo(e) ? e : fo(e) ? q(Promise.resolve(e)) : Qu(e);
      }
      function Oh(e, t, n) {
        return n
          ? (function (e, t) {
              return Sh(e, t);
            })(e.queryParams, t.queryParams) &&
              (function e(t, n) {
                if (!Dh(t.segments, n.segments)) return !1;
                if (t.numberOfChildren !== n.numberOfChildren) return !1;
                for (var r in n.children) {
                  if (!t.children[r]) return !1;
                  if (!e(t.children[r], n.children[r])) return !1;
                }
                return !0;
              })(e.root, t.root)
          : (function (e, t) {
              return (
                Object.keys(t).length <= Object.keys(e).length &&
                Object.keys(t).every(function (n) {
                  return Eh(e[n], t[n]);
                })
              );
            })(e.queryParams, t.queryParams) &&
              (function e(t, n) {
                return (function t(n, r, i) {
                  if (n.segments.length > i.length)
                    return (
                      !!Dh(n.segments.slice(0, i.length), i) && !r.hasChildren()
                    );
                  if (n.segments.length === i.length) {
                    if (!Dh(n.segments, i)) return !1;
                    for (var o in r.children) {
                      if (!n.children[o]) return !1;
                      if (!e(n.children[o], r.children[o])) return !1;
                    }
                    return !0;
                  }
                  var a = i.slice(0, n.segments.length),
                    s = i.slice(n.segments.length);
                  return (
                    !!Dh(n.segments, a) &&
                    !!n.children.primary &&
                    t(n.children.primary, r, s)
                  );
                })(t, n, n.segments);
              })(e.root, t.root);
      }
      var Rh = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.root = t),
              (this.queryParams = n),
              (this.fragment = r);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return Uh.serialize(this);
                },
              },
              {
                key: "queryParamMap",
                get: function () {
                  return (
                    this._queryParamMap ||
                      (this._queryParamMap = yh(this.queryParams)),
                    this._queryParamMap
                  );
                },
              },
            ]),
            e
          );
        })(),
        Ih = (function () {
          function e(t, n) {
            var r = this;
            _classCallCheck(this, e),
              (this.segments = t),
              (this.children = n),
              (this.parent = null),
              xh(n, function (e, t) {
                return (e.parent = r);
              });
          }
          return (
            _createClass(e, [
              {
                key: "hasChildren",
                value: function () {
                  return this.numberOfChildren > 0;
                },
              },
              {
                key: "toString",
                value: function () {
                  return Vh(this);
                },
              },
              {
                key: "numberOfChildren",
                get: function () {
                  return Object.keys(this.children).length;
                },
              },
            ]),
            e
          );
        })(),
        Nh = (function () {
          function e(t, n) {
            _classCallCheck(this, e), (this.path = t), (this.parameters = n);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return Wh(this);
                },
              },
              {
                key: "parameterMap",
                get: function () {
                  return (
                    this._parameterMap ||
                      (this._parameterMap = yh(this.parameters)),
                    this._parameterMap
                  );
                },
              },
            ]),
            e
          );
        })();
      function Dh(e, t) {
        return (
          e.length === t.length &&
          e.every(function (e, n) {
            return e.path === t[n].path;
          })
        );
      }
      function jh(e, t) {
        var n = [];
        return (
          xh(e.children, function (e, r) {
            "primary" === r && (n = n.concat(t(e, r)));
          }),
          xh(e.children, function (e, r) {
            "primary" !== r && (n = n.concat(t(e, r)));
          }),
          n
        );
      }
      var Fh = function e() {
          _classCallCheck(this, e);
        },
        Lh = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "parse",
                value: function (e) {
                  var t = new $h(e);
                  return new Rh(
                    t.parseRootSegment(),
                    t.parseQueryParams(),
                    t.parseFragment()
                  );
                },
              },
              {
                key: "serialize",
                value: function (e) {
                  var t, n, r;
                  return ""
                    .concat(
                      "/".concat(
                        (function e(t, n) {
                          if (!t.hasChildren()) return Vh(t);
                          if (n) {
                            var r = t.children.primary
                                ? e(t.children.primary, !1)
                                : "",
                              i = [];
                            return (
                              xh(t.children, function (t, n) {
                                "primary" !== n &&
                                  i.push("".concat(n, ":").concat(e(t, !1)));
                              }),
                              i.length > 0
                                ? "".concat(r, "(").concat(i.join("//"), ")")
                                : r
                            );
                          }
                          var o = jh(t, function (n, r) {
                            return "primary" === r
                              ? [e(t.children.primary, !1)]
                              : ["".concat(r, ":").concat(e(n, !1))];
                          });
                          return ""
                            .concat(Vh(t), "/(")
                            .concat(o.join("//"), ")");
                        })(e.root, !0)
                      ),
                      ((n = e.queryParams),
                      (r = Object.keys(n).map(function (e) {
                        var t = n[e];
                        return Array.isArray(t)
                          ? t
                              .map(function (t) {
                                return "".concat(Hh(e), "=").concat(Hh(t));
                              })
                              .join("&")
                          : "".concat(Hh(e), "=").concat(Hh(t));
                      })),
                      r.length ? "?".concat(r.join("&")) : "")
                    )
                    .concat(
                      "string" == typeof e.fragment
                        ? "#".concat(((t = e.fragment), encodeURI(t)))
                        : ""
                    );
                },
              },
            ]),
            e
          );
        })(),
        Uh = new Lh();
      function Vh(e) {
        return e.segments
          .map(function (e) {
            return Wh(e);
          })
          .join("/");
      }
      function Mh(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function Hh(e) {
        return Mh(e).replace(/%3B/gi, ";");
      }
      function zh(e) {
        return Mh(e)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function qh(e) {
        return decodeURIComponent(e);
      }
      function Bh(e) {
        return qh(e.replace(/\+/g, "%20"));
      }
      function Wh(e) {
        return "".concat(zh(e.path)).concat(
          ((t = e.parameters),
          Object.keys(t)
            .map(function (e) {
              return ";".concat(zh(e), "=").concat(zh(t[e]));
            })
            .join(""))
        );
        var t;
      }
      var Qh = /^[^\/()?;=#]+/;
      function Kh(e) {
        var t = e.match(Qh);
        return t ? t[0] : "";
      }
      var Zh = /^[^=?&#]+/,
        Gh = /^[^?&#]+/,
        $h = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.url = t), (this.remaining = t);
          }
          return (
            _createClass(e, [
              {
                key: "parseRootSegment",
                value: function () {
                  return (
                    this.consumeOptional("/"),
                    "" === this.remaining ||
                    this.peekStartsWith("?") ||
                    this.peekStartsWith("#")
                      ? new Ih([], {})
                      : new Ih([], this.parseChildren())
                  );
                },
              },
              {
                key: "parseQueryParams",
                value: function () {
                  var e = {};
                  if (this.consumeOptional("?"))
                    do {
                      this.parseQueryParam(e);
                    } while (this.consumeOptional("&"));
                  return e;
                },
              },
              {
                key: "parseFragment",
                value: function () {
                  return this.consumeOptional("#")
                    ? decodeURIComponent(this.remaining)
                    : null;
                },
              },
              {
                key: "parseChildren",
                value: function () {
                  if ("" === this.remaining) return {};
                  this.consumeOptional("/");
                  var e = [];
                  for (
                    this.peekStartsWith("(") || e.push(this.parseSegment());
                    this.peekStartsWith("/") &&
                    !this.peekStartsWith("//") &&
                    !this.peekStartsWith("/(");

                  )
                    this.capture("/"), e.push(this.parseSegment());
                  var t = {};
                  this.peekStartsWith("/(") &&
                    (this.capture("/"), (t = this.parseParens(!0)));
                  var n = {};
                  return (
                    this.peekStartsWith("(") && (n = this.parseParens(!1)),
                    (e.length > 0 || Object.keys(t).length > 0) &&
                      (n.primary = new Ih(e, t)),
                    n
                  );
                },
              },
              {
                key: "parseSegment",
                value: function () {
                  var e = Kh(this.remaining);
                  if ("" === e && this.peekStartsWith(";"))
                    throw new Error(
                      "Empty path url segment cannot have parameters: '".concat(
                        this.remaining,
                        "'."
                      )
                    );
                  return (
                    this.capture(e), new Nh(qh(e), this.parseMatrixParams())
                  );
                },
              },
              {
                key: "parseMatrixParams",
                value: function () {
                  for (var e = {}; this.consumeOptional(";"); )
                    this.parseParam(e);
                  return e;
                },
              },
              {
                key: "parseParam",
                value: function (e) {
                  var t = Kh(this.remaining);
                  if (t) {
                    this.capture(t);
                    var n = "";
                    if (this.consumeOptional("=")) {
                      var r = Kh(this.remaining);
                      r && ((n = r), this.capture(n));
                    }
                    e[qh(t)] = qh(n);
                  }
                },
              },
              {
                key: "parseQueryParam",
                value: function (e) {
                  var t = (function (e) {
                    var t = e.match(Zh);
                    return t ? t[0] : "";
                  })(this.remaining);
                  if (t) {
                    this.capture(t);
                    var n = "";
                    if (this.consumeOptional("=")) {
                      var r = (function (e) {
                        var t = e.match(Gh);
                        return t ? t[0] : "";
                      })(this.remaining);
                      r && ((n = r), this.capture(n));
                    }
                    var i = Bh(t),
                      o = Bh(n);
                    if (e.hasOwnProperty(i)) {
                      var a = e[i];
                      Array.isArray(a) || ((a = [a]), (e[i] = a)), a.push(o);
                    } else e[i] = o;
                  }
                },
              },
              {
                key: "parseParens",
                value: function (e) {
                  var t = {};
                  for (
                    this.capture("(");
                    !this.consumeOptional(")") && this.remaining.length > 0;

                  ) {
                    var n = Kh(this.remaining),
                      r = this.remaining[n.length];
                    if ("/" !== r && ")" !== r && ";" !== r)
                      throw new Error(
                        "Cannot parse url '".concat(this.url, "'")
                      );
                    var i = void 0;
                    n.indexOf(":") > -1
                      ? ((i = n.substr(0, n.indexOf(":"))),
                        this.capture(i),
                        this.capture(":"))
                      : e && (i = "primary");
                    var o = this.parseChildren();
                    (t[i] =
                      1 === Object.keys(o).length ? o.primary : new Ih([], o)),
                      this.consumeOptional("//");
                  }
                  return t;
                },
              },
              {
                key: "peekStartsWith",
                value: function (e) {
                  return this.remaining.startsWith(e);
                },
              },
              {
                key: "consumeOptional",
                value: function (e) {
                  return (
                    !!this.peekStartsWith(e) &&
                    ((this.remaining = this.remaining.substring(e.length)), !0)
                  );
                },
              },
              {
                key: "capture",
                value: function (e) {
                  if (!this.consumeOptional(e))
                    throw new Error('Expected "'.concat(e, '".'));
                },
              },
            ]),
            e
          );
        })(),
        Jh = (function () {
          function e(t) {
            _classCallCheck(this, e), (this._root = t);
          }
          return (
            _createClass(e, [
              {
                key: "parent",
                value: function (e) {
                  var t = this.pathFromRoot(e);
                  return t.length > 1 ? t[t.length - 2] : null;
                },
              },
              {
                key: "children",
                value: function (e) {
                  var t = Yh(e, this._root);
                  return t
                    ? t.children.map(function (e) {
                        return e.value;
                      })
                    : [];
                },
              },
              {
                key: "firstChild",
                value: function (e) {
                  var t = Yh(e, this._root);
                  return t && t.children.length > 0
                    ? t.children[0].value
                    : null;
                },
              },
              {
                key: "siblings",
                value: function (e) {
                  var t = Xh(e, this._root);
                  return t.length < 2
                    ? []
                    : t[t.length - 2].children
                        .map(function (e) {
                          return e.value;
                        })
                        .filter(function (t) {
                          return t !== e;
                        });
                },
              },
              {
                key: "pathFromRoot",
                value: function (e) {
                  return Xh(e, this._root).map(function (e) {
                    return e.value;
                  });
                },
              },
              {
                key: "root",
                get: function () {
                  return this._root.value;
                },
              },
            ]),
            e
          );
        })();
      function Yh(e, t) {
        if (e === t.value) return t;
        var n = !0,
          r = !1,
          i = void 0;
        try {
          for (
            var o, a = t.children[Symbol.iterator]();
            !(n = (o = a.next()).done);
            n = !0
          ) {
            var s = Yh(e, o.value);
            if (s) return s;
          }
        } catch (u) {
          (r = !0), (i = u);
        } finally {
          try {
            n || null == a.return || a.return();
          } finally {
            if (r) throw i;
          }
        }
        return null;
      }
      function Xh(e, t) {
        if (e === t.value) return [t];
        var n = !0,
          r = !1,
          i = void 0;
        try {
          for (
            var o, a = t.children[Symbol.iterator]();
            !(n = (o = a.next()).done);
            n = !0
          ) {
            var s = Xh(e, o.value);
            if (s.length) return s.unshift(t), s;
          }
        } catch (u) {
          (r = !0), (i = u);
        } finally {
          try {
            n || null == a.return || a.return();
          } finally {
            if (r) throw i;
          }
        }
        return [];
      }
      var ef = (function () {
        function e(t, n) {
          _classCallCheck(this, e), (this.value = t), (this.children = n);
        }
        return (
          _createClass(e, [
            {
              key: "toString",
              value: function () {
                return "TreeNode(".concat(this.value, ")");
              },
            },
          ]),
          e
        );
      })();
      function tf(e) {
        var t = {};
        return (
          e &&
            e.children.forEach(function (e) {
              return (t[e.value.outlet] = e);
            }),
          t
        );
      }
      var nf = (function (e) {
        function t(e, n) {
          var r;
          return (
            _classCallCheck(this, t),
            ((r = _possibleConstructorReturn(
              this,
              _getPrototypeOf(t).call(this, e)
            )).snapshot = n),
            lf(_assertThisInitialized(r), e),
            r
          );
        }
        return (
          _inherits(t, e),
          _createClass(t, [
            {
              key: "toString",
              value: function () {
                return this.snapshot.toString();
              },
            },
          ]),
          t
        );
      })(Jh);
      function rf(e, t) {
        var n = (function (e, t) {
            var n = new sf(
              [],
              {},
              {},
              "",
              {},
              "primary",
              t,
              null,
              e.root,
              -1,
              {}
            );
            return new uf("", new ef(n, []));
          })(e, t),
          r = new wc([new Nh("", {})]),
          i = new wc({}),
          o = new wc({}),
          a = new wc({}),
          s = new wc(""),
          u = new of(r, i, a, s, o, "primary", t, n.root);
        return (u.snapshot = n.root), new nf(new ef(u, []), n);
      }
      var of = (function () {
        function e(t, n, r, i, o, a, s, u) {
          _classCallCheck(this, e),
            (this.url = t),
            (this.params = n),
            (this.queryParams = r),
            (this.fragment = i),
            (this.data = o),
            (this.outlet = a),
            (this.component = s),
            (this._futureSnapshot = u);
        }
        return (
          _createClass(e, [
            {
              key: "toString",
              value: function () {
                return this.snapshot
                  ? this.snapshot.toString()
                  : "Future(".concat(this._futureSnapshot, ")");
              },
            },
            {
              key: "routeConfig",
              get: function () {
                return this._futureSnapshot.routeConfig;
              },
            },
            {
              key: "root",
              get: function () {
                return this._routerState.root;
              },
            },
            {
              key: "parent",
              get: function () {
                return this._routerState.parent(this);
              },
            },
            {
              key: "firstChild",
              get: function () {
                return this._routerState.firstChild(this);
              },
            },
            {
              key: "children",
              get: function () {
                return this._routerState.children(this);
              },
            },
            {
              key: "pathFromRoot",
              get: function () {
                return this._routerState.pathFromRoot(this);
              },
            },
            {
              key: "paramMap",
              get: function () {
                return (
                  this._paramMap ||
                    (this._paramMap = this.params.pipe(
                      V(function (e) {
                        return yh(e);
                      })
                    )),
                  this._paramMap
                );
              },
            },
            {
              key: "queryParamMap",
              get: function () {
                return (
                  this._queryParamMap ||
                    (this._queryParamMap = this.queryParams.pipe(
                      V(function (e) {
                        return yh(e);
                      })
                    )),
                  this._queryParamMap
                );
              },
            },
          ]),
          e
        );
      })();
      function af(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "emptyOnly",
          n = e.pathFromRoot,
          r = 0;
        if ("always" !== t)
          for (r = n.length - 1; r >= 1; ) {
            var i = n[r],
              o = n[r - 1];
            if (i.routeConfig && "" === i.routeConfig.path) r--;
            else {
              if (o.component) break;
              r--;
            }
          }
        return (function (e) {
          return e.reduce(
            function (e, t) {
              return {
                params: Object.assign(Object.assign({}, e.params), t.params),
                data: Object.assign(Object.assign({}, e.data), t.data),
                resolve: Object.assign(
                  Object.assign({}, e.resolve),
                  t._resolvedData
                ),
              };
            },
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      var sf = (function () {
          function e(t, n, r, i, o, a, s, u, l, c, h) {
            _classCallCheck(this, e),
              (this.url = t),
              (this.params = n),
              (this.queryParams = r),
              (this.fragment = i),
              (this.data = o),
              (this.outlet = a),
              (this.component = s),
              (this.routeConfig = u),
              (this._urlSegment = l),
              (this._lastPathIndex = c),
              (this._resolve = h);
          }
          return (
            _createClass(e, [
              {
                key: "toString",
                value: function () {
                  return "Route(url:'"
                    .concat(
                      this.url
                        .map(function (e) {
                          return e.toString();
                        })
                        .join("/"),
                      "', path:'"
                    )
                    .concat(
                      this.routeConfig ? this.routeConfig.path : "",
                      "')"
                    );
                },
              },
              {
                key: "root",
                get: function () {
                  return this._routerState.root;
                },
              },
              {
                key: "parent",
                get: function () {
                  return this._routerState.parent(this);
                },
              },
              {
                key: "firstChild",
                get: function () {
                  return this._routerState.firstChild(this);
                },
              },
              {
                key: "children",
                get: function () {
                  return this._routerState.children(this);
                },
              },
              {
                key: "pathFromRoot",
                get: function () {
                  return this._routerState.pathFromRoot(this);
                },
              },
              {
                key: "paramMap",
                get: function () {
                  return (
                    this._paramMap || (this._paramMap = yh(this.params)),
                    this._paramMap
                  );
                },
              },
              {
                key: "queryParamMap",
                get: function () {
                  return (
                    this._queryParamMap ||
                      (this._queryParamMap = yh(this.queryParams)),
                    this._queryParamMap
                  );
                },
              },
            ]),
            e
          );
        })(),
        uf = (function (e) {
          function t(e, n) {
            var r;
            return (
              _classCallCheck(this, t),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, n)
              )).url = e),
              lf(_assertThisInitialized(r), n),
              r
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "toString",
                value: function () {
                  return cf(this._root);
                },
              },
            ]),
            t
          );
        })(Jh);
      function lf(e, t) {
        (t.value._routerState = e),
          t.children.forEach(function (t) {
            return lf(e, t);
          });
      }
      function cf(e) {
        var t =
          e.children.length > 0
            ? " { ".concat(e.children.map(cf).join(", "), " } ")
            : "";
        return "".concat(e.value).concat(t);
      }
      function hf(e) {
        if (e.snapshot) {
          var t = e.snapshot,
            n = e._futureSnapshot;
          (e.snapshot = n),
            Sh(t.queryParams, n.queryParams) ||
              e.queryParams.next(n.queryParams),
            t.fragment !== n.fragment && e.fragment.next(n.fragment),
            Sh(t.params, n.params) || e.params.next(n.params),
            (function (e, t) {
              if (e.length !== t.length) return !1;
              for (var n = 0; n < e.length; ++n) if (!Sh(e[n], t[n])) return !1;
              return !0;
            })(t.url, n.url) || e.url.next(n.url),
            Sh(t.data, n.data) || e.data.next(n.data);
        } else
          (e.snapshot = e._futureSnapshot), e.data.next(e._futureSnapshot.data);
      }
      function ff(e, t) {
        var n, r;
        return (
          Sh(e.params, t.params) &&
          Dh((n = e.url), (r = t.url)) &&
          n.every(function (e, t) {
            return Sh(e.parameters, r[t].parameters);
          }) &&
          !(!e.parent != !t.parent) &&
          (!e.parent || ff(e.parent, t.parent))
        );
      }
      function df(e) {
        return (
          "object" == typeof e && null != e && !e.outlets && !e.segmentPath
        );
      }
      function vf(e, t, n, r, i) {
        var o = {};
        return (
          r &&
            xh(r, function (e, t) {
              o[t] = Array.isArray(e)
                ? e.map(function (e) {
                    return "".concat(e);
                  })
                : "".concat(e);
            }),
          new Rh(
            n.root === e
              ? t
              : (function e(t, n, r) {
                  var i = {};
                  return (
                    xh(t.children, function (t, o) {
                      i[o] = t === n ? r : e(t, n, r);
                    }),
                    new Ih(t.segments, i)
                  );
                })(n.root, e, t),
            o,
            i
          )
        );
      }
      var pf = (function () {
          function e(t, n, r) {
            if (
              (_classCallCheck(this, e),
              (this.isAbsolute = t),
              (this.numberOfDoubleDots = n),
              (this.commands = r),
              t && r.length > 0 && df(r[0]))
            )
              throw new Error("Root segment cannot have matrix parameters");
            var i = r.find(function (e) {
              return "object" == typeof e && null != e && e.outlets;
            });
            if (i && i !== Ah(r))
              throw new Error("{outlets:{}} has to be the last command");
          }
          return (
            _createClass(e, [
              {
                key: "toRoot",
                value: function () {
                  return (
                    this.isAbsolute &&
                    1 === this.commands.length &&
                    "/" == this.commands[0]
                  );
                },
              },
            ]),
            e
          );
        })(),
        yf = function e(t, n, r) {
          _classCallCheck(this, e),
            (this.segmentGroup = t),
            (this.processChildren = n),
            (this.index = r);
        };
      function gf(e) {
        return "object" == typeof e && null != e && e.outlets
          ? e.outlets.primary
          : "".concat(e);
      }
      function mf(e, t, n) {
        if (
          (e || (e = new Ih([], {})),
          0 === e.segments.length && e.hasChildren())
        )
          return _f(e, t, n);
        var r = (function (e, t, n) {
            for (
              var r = 0,
                i = t,
                o = { match: !1, pathIndex: 0, commandIndex: 0 };
              i < e.segments.length;

            ) {
              if (r >= n.length) return o;
              var a = e.segments[i],
                s = gf(n[r]),
                u = r < n.length - 1 ? n[r + 1] : null;
              if (i > 0 && void 0 === s) break;
              if (s && u && "object" == typeof u && void 0 === u.outlets) {
                if (!wf(s, u, a)) return o;
                r += 2;
              } else {
                if (!wf(s, {}, a)) return o;
                r++;
              }
              i++;
            }
            return { match: !0, pathIndex: i, commandIndex: r };
          })(e, t, n),
          i = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < e.segments.length) {
          var o = new Ih(e.segments.slice(0, r.pathIndex), {});
          return (
            (o.children.primary = new Ih(
              e.segments.slice(r.pathIndex),
              e.children
            )),
            _f(o, 0, i)
          );
        }
        return r.match && 0 === i.length
          ? new Ih(e.segments, {})
          : r.match && !e.hasChildren()
          ? kf(e, t, n)
          : r.match
          ? _f(e, 0, i)
          : kf(e, t, n);
      }
      function _f(e, t, n) {
        if (0 === n.length) return new Ih(e.segments, {});
        var r = (function (e) {
            return "object" != typeof e[0]
              ? { primary: e }
              : void 0 === e[0].outlets
              ? { primary: e }
              : e[0].outlets;
          })(n),
          i = {};
        return (
          xh(r, function (n, r) {
            null !== n && (i[r] = mf(e.children[r], t, n));
          }),
          xh(e.children, function (e, t) {
            void 0 === r[t] && (i[t] = e);
          }),
          new Ih(e.segments, i)
        );
      }
      function kf(e, t, n) {
        for (var r = e.segments.slice(0, t), i = 0; i < n.length; ) {
          if ("object" == typeof n[i] && void 0 !== n[i].outlets) {
            var o = Cf(n[i].outlets);
            return new Ih(r, o);
          }
          if (0 === i && df(n[0]))
            r.push(new Nh(e.segments[t].path, n[0])), i++;
          else {
            var a = gf(n[i]),
              s = i < n.length - 1 ? n[i + 1] : null;
            a && s && df(s)
              ? (r.push(new Nh(a, bf(s))), (i += 2))
              : (r.push(new Nh(a, {})), i++);
          }
        }
        return new Ih(r, {});
      }
      function Cf(e) {
        var t = {};
        return (
          xh(e, function (e, n) {
            null !== e && (t[n] = kf(new Ih([], {}), 0, e));
          }),
          t
        );
      }
      function bf(e) {
        var t = {};
        return (
          xh(e, function (e, n) {
            return (t[n] = "".concat(e));
          }),
          t
        );
      }
      function wf(e, t, n) {
        return e == n.path && Sh(t, n.parameters);
      }
      var Sf = (function () {
        function e(t, n, r, i) {
          _classCallCheck(this, e),
            (this.routeReuseStrategy = t),
            (this.futureState = n),
            (this.currState = r),
            (this.forwardEvent = i);
        }
        return (
          _createClass(e, [
            {
              key: "activate",
              value: function (e) {
                var t = this.futureState._root,
                  n = this.currState ? this.currState._root : null;
                this.deactivateChildRoutes(t, n, e),
                  hf(this.futureState.root),
                  this.activateChildRoutes(t, n, e);
              },
            },
            {
              key: "deactivateChildRoutes",
              value: function (e, t, n) {
                var r = this,
                  i = tf(t);
                e.children.forEach(function (e) {
                  var t = e.value.outlet;
                  r.deactivateRoutes(e, i[t], n), delete i[t];
                }),
                  xh(i, function (e, t) {
                    r.deactivateRouteAndItsChildren(e, n);
                  });
              },
            },
            {
              key: "deactivateRoutes",
              value: function (e, t, n) {
                var r = e.value,
                  i = t ? t.value : null;
                if (r === i)
                  if (r.component) {
                    var o = n.getContext(r.outlet);
                    o && this.deactivateChildRoutes(e, t, o.children);
                  } else this.deactivateChildRoutes(e, t, n);
                else i && this.deactivateRouteAndItsChildren(t, n);
              },
            },
            {
              key: "deactivateRouteAndItsChildren",
              value: function (e, t) {
                this.routeReuseStrategy.shouldDetach(e.value.snapshot)
                  ? this.detachAndStoreRouteSubtree(e, t)
                  : this.deactivateRouteAndOutlet(e, t);
              },
            },
            {
              key: "detachAndStoreRouteSubtree",
              value: function (e, t) {
                var n = t.getContext(e.value.outlet);
                if (n && n.outlet) {
                  var r = n.outlet.detach(),
                    i = n.children.onOutletDeactivated();
                  this.routeReuseStrategy.store(e.value.snapshot, {
                    componentRef: r,
                    route: e,
                    contexts: i,
                  });
                }
              },
            },
            {
              key: "deactivateRouteAndOutlet",
              value: function (e, t) {
                var n = this,
                  r = t.getContext(e.value.outlet);
                if (r) {
                  var i = tf(e),
                    o = e.value.component ? r.children : t;
                  xh(i, function (e, t) {
                    return n.deactivateRouteAndItsChildren(e, o);
                  }),
                    r.outlet &&
                      (r.outlet.deactivate(), r.children.onOutletDeactivated());
                }
              },
            },
            {
              key: "activateChildRoutes",
              value: function (e, t, n) {
                var r = this,
                  i = tf(t);
                e.children.forEach(function (e) {
                  r.activateRoutes(e, i[e.value.outlet], n),
                    r.forwardEvent(new fh(e.value.snapshot));
                }),
                  e.children.length &&
                    this.forwardEvent(new ch(e.value.snapshot));
              },
            },
            {
              key: "activateRoutes",
              value: function (e, t, n) {
                var r = e.value,
                  i = t ? t.value : null;
                if ((hf(r), r === i))
                  if (r.component) {
                    var o = n.getOrCreateContext(r.outlet);
                    this.activateChildRoutes(e, t, o.children);
                  } else this.activateChildRoutes(e, t, n);
                else if (r.component) {
                  var a = n.getOrCreateContext(r.outlet);
                  if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                    var s = this.routeReuseStrategy.retrieve(r.snapshot);
                    this.routeReuseStrategy.store(r.snapshot, null),
                      a.children.onOutletReAttached(s.contexts),
                      (a.attachRef = s.componentRef),
                      (a.route = s.route.value),
                      a.outlet &&
                        a.outlet.attach(s.componentRef, s.route.value),
                      Ef(s.route);
                  } else {
                    var u = (function (e) {
                        for (var t = e.parent; t; t = t.parent) {
                          var n = t.routeConfig;
                          if (n && n._loadedConfig) return n._loadedConfig;
                          if (n && n.component) return null;
                        }
                        return null;
                      })(r.snapshot),
                      l = u ? u.module.componentFactoryResolver : null;
                    (a.attachRef = null),
                      (a.route = r),
                      (a.resolver = l),
                      a.outlet && a.outlet.activateWith(r, l),
                      this.activateChildRoutes(e, null, a.children);
                  }
                } else this.activateChildRoutes(e, null, n);
              },
            },
          ]),
          e
        );
      })();
      function Ef(e) {
        hf(e.value), e.children.forEach(Ef);
      }
      function Tf(e) {
        return "function" == typeof e;
      }
      function Af(e) {
        return e instanceof Rh;
      }
      var xf = function e(t) {
          _classCallCheck(this, e), (this.segmentGroup = t || null);
        },
        Pf = function e(t) {
          _classCallCheck(this, e), (this.urlTree = t);
        };
      function Of(e) {
        return new b(function (t) {
          return t.error(new xf(e));
        });
      }
      function Rf(e) {
        return new b(function (t) {
          return t.error(new Pf(e));
        });
      }
      function If(e) {
        return new b(function (t) {
          return t.error(
            new Error(
              "Only absolute redirects can have named outlets. redirectTo: '".concat(
                e,
                "'"
              )
            )
          );
        });
      }
      var Nf = (function () {
        function e(t, n, r, i, o) {
          _classCallCheck(this, e),
            (this.configLoader = n),
            (this.urlSerializer = r),
            (this.urlTree = i),
            (this.config = o),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(et));
        }
        return (
          _createClass(e, [
            {
              key: "apply",
              value: function () {
                var e = this;
                return this.expandSegmentGroup(
                  this.ngModule,
                  this.config,
                  this.urlTree.root,
                  "primary"
                )
                  .pipe(
                    V(function (t) {
                      return e.createUrlTree(
                        t,
                        e.urlTree.queryParams,
                        e.urlTree.fragment
                      );
                    })
                  )
                  .pipe(
                    Vc(function (t) {
                      if (t instanceof Pf)
                        return (e.allowRedirects = !1), e.match(t.urlTree);
                      if (t instanceof xf) throw e.noMatchError(t);
                      throw t;
                    })
                  );
              },
            },
            {
              key: "match",
              value: function (e) {
                var t = this;
                return this.expandSegmentGroup(
                  this.ngModule,
                  this.config,
                  e.root,
                  "primary"
                )
                  .pipe(
                    V(function (n) {
                      return t.createUrlTree(n, e.queryParams, e.fragment);
                    })
                  )
                  .pipe(
                    Vc(function (e) {
                      if (e instanceof xf) throw t.noMatchError(e);
                      throw e;
                    })
                  );
              },
            },
            {
              key: "noMatchError",
              value: function (e) {
                return new Error(
                  "Cannot match any routes. URL Segment: '".concat(
                    e.segmentGroup,
                    "'"
                  )
                );
              },
            },
            {
              key: "createUrlTree",
              value: function (e, t, n) {
                var r = e.segments.length > 0 ? new Ih([], { primary: e }) : e;
                return new Rh(r, t, n);
              },
            },
            {
              key: "expandSegmentGroup",
              value: function (e, t, n, r) {
                return 0 === n.segments.length && n.hasChildren()
                  ? this.expandChildren(e, t, n).pipe(
                      V(function (e) {
                        return new Ih([], e);
                      })
                    )
                  : this.expandSegment(e, n, t, n.segments, r, !0);
              },
            },
            {
              key: "expandChildren",
              value: function (e, t, n) {
                var r = this;
                return (function (n, i) {
                  if (0 === Object.keys(n).length) return Qu({});
                  var o = [],
                    a = [],
                    s = {};
                  return (
                    xh(n, function (n, i) {
                      var u,
                        l,
                        c = ((u = i),
                        (l = n),
                        r.expandSegmentGroup(e, t, l, u)).pipe(
                          V(function (e) {
                            return (s[i] = e);
                          })
                        );
                      "primary" === i ? o.push(c) : a.push(c);
                    }),
                    Qu.apply(null, o.concat(a)).pipe(
                      Bl(),
                      Uc(),
                      V(function () {
                        return s;
                      })
                    )
                  );
                })(n.children);
              },
            },
            {
              key: "expandSegment",
              value: function (e, t, n, r, i, o) {
                var a = this;
                return Qu.apply(void 0, _toConsumableArray(n)).pipe(
                  V(function (s) {
                    return a
                      .expandSegmentAgainstRoute(e, t, n, s, r, i, o)
                      .pipe(
                        Vc(function (e) {
                          if (e instanceof xf) return Qu(null);
                          throw e;
                        })
                      );
                  }),
                  Bl(),
                  zc(function (e) {
                    return !!e;
                  }),
                  Vc(function (e, n) {
                    if (e instanceof Sc || "EmptyError" === e.name) {
                      if (a.noLeftoversInUrl(t, r, i))
                        return Qu(new Ih([], {}));
                      throw new xf(t);
                    }
                    throw e;
                  })
                );
              },
            },
            {
              key: "noLeftoversInUrl",
              value: function (e, t, n) {
                return 0 === t.length && !e.children[n];
              },
            },
            {
              key: "expandSegmentAgainstRoute",
              value: function (e, t, n, r, i, o, a) {
                return Lf(r) !== o
                  ? Of(t)
                  : void 0 === r.redirectTo
                  ? this.matchSegmentAgainstRoute(e, t, r, i)
                  : a && this.allowRedirects
                  ? this.expandSegmentAgainstRouteUsingRedirect(
                      e,
                      t,
                      n,
                      r,
                      i,
                      o
                    )
                  : Of(t);
              },
            },
            {
              key: "expandSegmentAgainstRouteUsingRedirect",
              value: function (e, t, n, r, i, o) {
                return "**" === r.path
                  ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(
                      e,
                      n,
                      r,
                      o
                    )
                  : this.expandRegularSegmentAgainstRouteUsingRedirect(
                      e,
                      t,
                      n,
                      r,
                      i,
                      o
                    );
              },
            },
            {
              key: "expandWildCardWithParamsAgainstRouteUsingRedirect",
              value: function (e, t, n, r) {
                var i = this,
                  o = this.applyRedirectCommands([], n.redirectTo, {});
                return n.redirectTo.startsWith("/")
                  ? Rf(o)
                  : this.lineralizeSegments(n, o).pipe(
                      B(function (n) {
                        var o = new Ih(n, {});
                        return i.expandSegment(e, o, t, n, r, !1);
                      })
                    );
              },
            },
            {
              key: "expandRegularSegmentAgainstRouteUsingRedirect",
              value: function (e, t, n, r, i, o) {
                var a = this,
                  s = Df(t, r, i),
                  u = s.matched,
                  l = s.consumedSegments,
                  c = s.lastChild,
                  h = s.positionalParamSegments;
                if (!u) return Of(t);
                var f = this.applyRedirectCommands(l, r.redirectTo, h);
                return r.redirectTo.startsWith("/")
                  ? Rf(f)
                  : this.lineralizeSegments(r, f).pipe(
                      B(function (r) {
                        return a.expandSegment(
                          e,
                          t,
                          n,
                          r.concat(i.slice(c)),
                          o,
                          !1
                        );
                      })
                    );
              },
            },
            {
              key: "matchSegmentAgainstRoute",
              value: function (e, t, n, r) {
                var i = this;
                if ("**" === n.path)
                  return n.loadChildren
                    ? this.configLoader.load(e.injector, n).pipe(
                        V(function (e) {
                          return (n._loadedConfig = e), new Ih(r, {});
                        })
                      )
                    : Qu(new Ih(r, {}));
                var o = Df(t, n, r),
                  a = o.matched,
                  s = o.consumedSegments,
                  u = o.lastChild;
                if (!a) return Of(t);
                var l = r.slice(u);
                return this.getChildConfig(e, n, r).pipe(
                  B(function (e) {
                    var n = e.module,
                      r = e.routes,
                      o = (function (e, t, n, r) {
                        return n.length > 0 &&
                          (function (e, t, n) {
                            return n.some(function (n) {
                              return Ff(e, t, n) && "primary" !== Lf(n);
                            });
                          })(e, n, r)
                          ? {
                              segmentGroup: jf(
                                new Ih(
                                  t,
                                  (function (e, t) {
                                    var n = {};
                                    n.primary = t;
                                    var r = !0,
                                      i = !1,
                                      o = void 0;
                                    try {
                                      for (
                                        var a, s = e[Symbol.iterator]();
                                        !(r = (a = s.next()).done);
                                        r = !0
                                      ) {
                                        var u = a.value;
                                        "" === u.path &&
                                          "primary" !== Lf(u) &&
                                          (n[Lf(u)] = new Ih([], {}));
                                      }
                                    } catch (l) {
                                      (i = !0), (o = l);
                                    } finally {
                                      try {
                                        r || null == s.return || s.return();
                                      } finally {
                                        if (i) throw o;
                                      }
                                    }
                                    return n;
                                  })(r, new Ih(n, e.children))
                                )
                              ),
                              slicedSegments: [],
                            }
                          : 0 === n.length &&
                            (function (e, t, n) {
                              return n.some(function (n) {
                                return Ff(e, t, n);
                              });
                            })(e, n, r)
                          ? {
                              segmentGroup: jf(
                                new Ih(
                                  e.segments,
                                  (function (e, t, n, r) {
                                    var i = {},
                                      o = !0,
                                      a = !1,
                                      s = void 0;
                                    try {
                                      for (
                                        var u, l = n[Symbol.iterator]();
                                        !(o = (u = l.next()).done);
                                        o = !0
                                      ) {
                                        var c = u.value;
                                        Ff(e, t, c) &&
                                          !r[Lf(c)] &&
                                          (i[Lf(c)] = new Ih([], {}));
                                      }
                                    } catch (h) {
                                      (a = !0), (s = h);
                                    } finally {
                                      try {
                                        o || null == l.return || l.return();
                                      } finally {
                                        if (a) throw s;
                                      }
                                    }
                                    return Object.assign(
                                      Object.assign({}, r),
                                      i
                                    );
                                  })(e, n, r, e.children)
                                )
                              ),
                              slicedSegments: n,
                            }
                          : { segmentGroup: e, slicedSegments: n };
                      })(t, s, l, r),
                      a = o.segmentGroup,
                      u = o.slicedSegments;
                    return 0 === u.length && a.hasChildren()
                      ? i.expandChildren(n, r, a).pipe(
                          V(function (e) {
                            return new Ih(s, e);
                          })
                        )
                      : 0 === r.length && 0 === u.length
                      ? Qu(new Ih(s, {}))
                      : i.expandSegment(n, a, r, u, "primary", !0).pipe(
                          V(function (e) {
                            return new Ih(s.concat(e.segments), e.children);
                          })
                        );
                  })
                );
              },
            },
            {
              key: "getChildConfig",
              value: function (e, t, n) {
                var r = this;
                return t.children
                  ? Qu(new _h(t.children, e))
                  : t.loadChildren
                  ? void 0 !== t._loadedConfig
                    ? Qu(t._loadedConfig)
                    : (function (e, t, n) {
                        var r,
                          i = t.canLoad;
                        return i && 0 !== i.length
                          ? q(i)
                              .pipe(
                                V(function (r) {
                                  var i,
                                    o = e.get(r);
                                  if (
                                    (function (e) {
                                      return e && Tf(e.canLoad);
                                    })(o)
                                  )
                                    i = o.canLoad(t, n);
                                  else {
                                    if (!Tf(o))
                                      throw new Error("Invalid CanLoad guard");
                                    i = o(t, n);
                                  }
                                  return Ph(i);
                                })
                              )
                              .pipe(
                                Bl(),
                                ((r = function (e) {
                                  return !0 === e;
                                }),
                                function (e) {
                                  return e.lift(new qc(r, void 0, e));
                                })
                              )
                          : Qu(!0);
                      })(e.injector, t, n).pipe(
                        B(function (n) {
                          return n
                            ? r.configLoader.load(e.injector, t).pipe(
                                V(function (e) {
                                  return (t._loadedConfig = e), e;
                                })
                              )
                            : (function (e) {
                                return new b(function (t) {
                                  return t.error(
                                    gh(
                                      "Cannot load children because the guard of the route \"path: '".concat(
                                        e.path,
                                        "'\" returned false"
                                      )
                                    )
                                  );
                                });
                              })(t);
                        })
                      )
                  : Qu(new _h([], e));
              },
            },
            {
              key: "lineralizeSegments",
              value: function (e, t) {
                for (var n = [], r = t.root; ; ) {
                  if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
                    return Qu(n);
                  if (r.numberOfChildren > 1 || !r.children.primary)
                    return If(e.redirectTo);
                  r = r.children.primary;
                }
              },
            },
            {
              key: "applyRedirectCommands",
              value: function (e, t, n) {
                return this.applyRedirectCreatreUrlTree(
                  t,
                  this.urlSerializer.parse(t),
                  e,
                  n
                );
              },
            },
            {
              key: "applyRedirectCreatreUrlTree",
              value: function (e, t, n, r) {
                var i = this.createSegmentGroup(e, t.root, n, r);
                return new Rh(
                  i,
                  this.createQueryParams(
                    t.queryParams,
                    this.urlTree.queryParams
                  ),
                  t.fragment
                );
              },
            },
            {
              key: "createQueryParams",
              value: function (e, t) {
                var n = {};
                return (
                  xh(e, function (e, r) {
                    if ("string" == typeof e && e.startsWith(":")) {
                      var i = e.substring(1);
                      n[r] = t[i];
                    } else n[r] = e;
                  }),
                  n
                );
              },
            },
            {
              key: "createSegmentGroup",
              value: function (e, t, n, r) {
                var i = this,
                  o = this.createSegments(e, t.segments, n, r),
                  a = {};
                return (
                  xh(t.children, function (t, o) {
                    a[o] = i.createSegmentGroup(e, t, n, r);
                  }),
                  new Ih(o, a)
                );
              },
            },
            {
              key: "createSegments",
              value: function (e, t, n, r) {
                var i = this;
                return t.map(function (t) {
                  return t.path.startsWith(":")
                    ? i.findPosParam(e, t, r)
                    : i.findOrReturn(t, n);
                });
              },
            },
            {
              key: "findPosParam",
              value: function (e, t, n) {
                var r = n[t.path.substring(1)];
                if (!r)
                  throw new Error(
                    "Cannot redirect to '"
                      .concat(e, "'. Cannot find '")
                      .concat(t.path, "'.")
                  );
                return r;
              },
            },
            {
              key: "findOrReturn",
              value: function (e, t) {
                var n = 0,
                  r = !0,
                  i = !1,
                  o = void 0;
                try {
                  for (
                    var a, s = t[Symbol.iterator]();
                    !(r = (a = s.next()).done);
                    r = !0
                  ) {
                    var u = a.value;
                    if (u.path === e.path) return t.splice(n), u;
                    n++;
                  }
                } catch (l) {
                  (i = !0), (o = l);
                } finally {
                  try {
                    r || null == s.return || s.return();
                  } finally {
                    if (i) throw o;
                  }
                }
                return e;
              },
            },
          ]),
          e
        );
      })();
      function Df(e, t, n) {
        if ("" === t.path)
          return "full" === t.pathMatch && (e.hasChildren() || n.length > 0)
            ? {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              }
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              };
        var r = (t.matcher || mh)(n, e, t);
        return r
          ? {
              matched: !0,
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              positionalParamSegments: r.posParams,
            }
          : {
              matched: !1,
              consumedSegments: [],
              lastChild: 0,
              positionalParamSegments: {},
            };
      }
      function jf(e) {
        if (1 === e.numberOfChildren && e.children.primary) {
          var t = e.children.primary;
          return new Ih(e.segments.concat(t.segments), t.children);
        }
        return e;
      }
      function Ff(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path &&
          void 0 !== n.redirectTo
        );
      }
      function Lf(e) {
        return e.outlet || "primary";
      }
      var Uf = function e(t) {
          _classCallCheck(this, e),
            (this.path = t),
            (this.route = this.path[this.path.length - 1]);
        },
        Vf = function e(t, n) {
          _classCallCheck(this, e), (this.component = t), (this.route = n);
        };
      function Mf(e, t, n) {
        var r = (function (e) {
          if (!e) return null;
          for (var t = e.parent; t; t = t.parent) {
            var n = t.routeConfig;
            if (n && n._loadedConfig) return n._loadedConfig;
          }
          return null;
        })(t);
        return (r ? r.module.injector : n).get(e);
      }
      function Hf(e, t, n) {
        var r = tf(e),
          i = e.value;
        xh(r, function (e, r) {
          Hf(e, i.component ? (t ? t.children.getContext(r) : null) : t, n);
        }),
          n.canDeactivateChecks.push(
            new Vf(
              i.component && t && t.outlet && t.outlet.isActivated
                ? t.outlet.component
                : null,
              i
            )
          );
      }
      var zf = Symbol("INITIAL_VALUE");
      function qf() {
        return Kl(function (e) {
          return function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var r = null,
              i = null;
            return (
              O(t[t.length - 1]) && (i = t.pop()),
              "function" == typeof t[t.length - 1] && (r = t.pop()),
              1 === t.length && u(t[0]) && (t = t[0]),
              G(t, i).lift(new Tc(r))
            );
          }
            .apply(
              void 0,
              _toConsumableArray(
                e.map(function (e) {
                  return e.pipe(
                    Jl(1),
                    (function () {
                      for (
                        var e = arguments.length, t = new Array(e), n = 0;
                        n < e;
                        n++
                      )
                        t[n] = arguments[n];
                      var r = t[t.length - 1];
                      return O(r)
                        ? (t.pop(),
                          function (e) {
                            return Wl(t, e, r);
                          })
                        : function (e) {
                            return Wl(t, e);
                          };
                    })(zf)
                  );
                })
              )
            )
            .pipe(
              Wc(function (e, t) {
                var n = !1;
                return t.reduce(function (e, r, i) {
                  if (e !== zf) return e;
                  if ((r === zf && (n = !0), !n)) {
                    if (!1 === r) return r;
                    if (i === t.length - 1 || Af(r)) return r;
                  }
                  return e;
                }, e);
              }, zf),
              Zu(function (e) {
                return e !== zf;
              }),
              V(function (e) {
                return Af(e) ? e : !0 === e;
              }),
              Jl(1)
            );
        });
      }
      function Bf(e, t) {
        return null !== e && t && t(new hh(e)), Qu(!0);
      }
      function Wf(e, t) {
        return null !== e && t && t(new lh(e)), Qu(!0);
      }
      function Qf(e, t, n) {
        var r = t.routeConfig ? t.routeConfig.canActivate : null;
        return r && 0 !== r.length
          ? Qu(
              r.map(function (r) {
                return Ml(function () {
                  var i,
                    o = Mf(r, t, n);
                  if (
                    (function (e) {
                      return e && Tf(e.canActivate);
                    })(o)
                  )
                    i = Ph(o.canActivate(t, e));
                  else {
                    if (!Tf(o)) throw new Error("Invalid CanActivate guard");
                    i = Ph(o(t, e));
                  }
                  return i.pipe(zc());
                });
              })
            ).pipe(qf())
          : Qu(!0);
      }
      function Kf(e, t, n) {
        var r = t[t.length - 1],
          i = t
            .slice(0, t.length - 1)
            .reverse()
            .map(function (e) {
              return (function (e) {
                var t = e.routeConfig ? e.routeConfig.canActivateChild : null;
                return t && 0 !== t.length ? { node: e, guards: t } : null;
              })(e);
            })
            .filter(function (e) {
              return null !== e;
            })
            .map(function (t) {
              return Ml(function () {
                return Qu(
                  t.guards.map(function (i) {
                    var o,
                      a = Mf(i, t.node, n);
                    if (
                      (function (e) {
                        return e && Tf(e.canActivateChild);
                      })(a)
                    )
                      o = Ph(a.canActivateChild(r, e));
                    else {
                      if (!Tf(a))
                        throw new Error("Invalid CanActivateChild guard");
                      o = Ph(a(r, e));
                    }
                    return o.pipe(zc());
                  })
                ).pipe(qf());
              });
            });
        return Qu(i).pipe(qf());
      }
      var Zf = function e() {
          _classCallCheck(this, e);
        },
        Gf = (function () {
          function e(t, n, r, i, o, a) {
            _classCallCheck(this, e),
              (this.rootComponentType = t),
              (this.config = n),
              (this.urlTree = r),
              (this.url = i),
              (this.paramsInheritanceStrategy = o),
              (this.relativeLinkResolution = a);
          }
          return (
            _createClass(e, [
              {
                key: "recognize",
                value: function () {
                  try {
                    var e = Yf(
                        this.urlTree.root,
                        [],
                        [],
                        this.config,
                        this.relativeLinkResolution
                      ).segmentGroup,
                      t = this.processSegmentGroup(this.config, e, "primary"),
                      n = new sf(
                        [],
                        Object.freeze({}),
                        Object.freeze(
                          Object.assign({}, this.urlTree.queryParams)
                        ),
                        this.urlTree.fragment,
                        {},
                        "primary",
                        this.rootComponentType,
                        null,
                        this.urlTree.root,
                        -1,
                        {}
                      ),
                      r = new ef(n, t),
                      i = new uf(this.url, r);
                    return this.inheritParamsAndData(i._root), Qu(i);
                  } catch (o) {
                    return new b(function (e) {
                      return e.error(o);
                    });
                  }
                },
              },
              {
                key: "inheritParamsAndData",
                value: function (e) {
                  var t = this,
                    n = e.value,
                    r = af(n, this.paramsInheritanceStrategy);
                  (n.params = Object.freeze(r.params)),
                    (n.data = Object.freeze(r.data)),
                    e.children.forEach(function (e) {
                      return t.inheritParamsAndData(e);
                    });
                },
              },
              {
                key: "processSegmentGroup",
                value: function (e, t, n) {
                  return 0 === t.segments.length && t.hasChildren()
                    ? this.processChildren(e, t)
                    : this.processSegment(e, t, t.segments, n);
                },
              },
              {
                key: "processChildren",
                value: function (e, t) {
                  var n,
                    r = this,
                    i = jh(t, function (t, n) {
                      return r.processSegmentGroup(e, t, n);
                    });
                  return (
                    (n = {}),
                    i.forEach(function (e) {
                      var t = n[e.value.outlet];
                      if (t) {
                        var r = t.url
                            .map(function (e) {
                              return e.toString();
                            })
                            .join("/"),
                          i = e.value.url
                            .map(function (e) {
                              return e.toString();
                            })
                            .join("/");
                        throw new Error(
                          "Two segments cannot have the same outlet name: '"
                            .concat(r, "' and '")
                            .concat(i, "'.")
                        );
                      }
                      n[e.value.outlet] = e.value;
                    }),
                    i.sort(function (e, t) {
                      return "primary" === e.value.outlet
                        ? -1
                        : "primary" === t.value.outlet
                        ? 1
                        : e.value.outlet.localeCompare(t.value.outlet);
                    }),
                    i
                  );
                },
              },
              {
                key: "processSegment",
                value: function (e, t, n, r) {
                  var i = !0,
                    o = !1,
                    a = void 0;
                  try {
                    for (
                      var s, u = e[Symbol.iterator]();
                      !(i = (s = u.next()).done);
                      i = !0
                    ) {
                      var l = s.value;
                      try {
                        return this.processSegmentAgainstRoute(l, t, n, r);
                      } catch (c) {
                        if (!(c instanceof Zf)) throw c;
                      }
                    }
                  } catch (h) {
                    (o = !0), (a = h);
                  } finally {
                    try {
                      i || null == u.return || u.return();
                    } finally {
                      if (o) throw a;
                    }
                  }
                  if (this.noLeftoversInUrl(t, n, r)) return [];
                  throw new Zf();
                },
              },
              {
                key: "noLeftoversInUrl",
                value: function (e, t, n) {
                  return 0 === t.length && !e.children[n];
                },
              },
              {
                key: "processSegmentAgainstRoute",
                value: function (e, t, n, r) {
                  if (e.redirectTo) throw new Zf();
                  if ((e.outlet || "primary") !== r) throw new Zf();
                  var i,
                    o = [],
                    a = [];
                  if ("**" === e.path) {
                    var s = n.length > 0 ? Ah(n).parameters : {};
                    i = new sf(
                      n,
                      s,
                      Object.freeze(
                        Object.assign({}, this.urlTree.queryParams)
                      ),
                      this.urlTree.fragment,
                      td(e),
                      r,
                      e.component,
                      e,
                      $f(t),
                      Jf(t) + n.length,
                      nd(e)
                    );
                  } else {
                    var u = (function (e, t, n) {
                      if ("" === t.path) {
                        if (
                          "full" === t.pathMatch &&
                          (e.hasChildren() || n.length > 0)
                        )
                          throw new Zf();
                        return {
                          consumedSegments: [],
                          lastChild: 0,
                          parameters: {},
                        };
                      }
                      var r = (t.matcher || mh)(n, e, t);
                      if (!r) throw new Zf();
                      var i = {};
                      xh(r.posParams, function (e, t) {
                        i[t] = e.path;
                      });
                      var o =
                        r.consumed.length > 0
                          ? Object.assign(
                              Object.assign({}, i),
                              r.consumed[r.consumed.length - 1].parameters
                            )
                          : i;
                      return {
                        consumedSegments: r.consumed,
                        lastChild: r.consumed.length,
                        parameters: o,
                      };
                    })(t, e, n);
                    (o = u.consumedSegments),
                      (a = n.slice(u.lastChild)),
                      (i = new sf(
                        o,
                        u.parameters,
                        Object.freeze(
                          Object.assign({}, this.urlTree.queryParams)
                        ),
                        this.urlTree.fragment,
                        td(e),
                        r,
                        e.component,
                        e,
                        $f(t),
                        Jf(t) + o.length,
                        nd(e)
                      ));
                  }
                  var l = (function (e) {
                      return e.children
                        ? e.children
                        : e.loadChildren
                        ? e._loadedConfig.routes
                        : [];
                    })(e),
                    c = Yf(t, o, a, l, this.relativeLinkResolution),
                    h = c.segmentGroup,
                    f = c.slicedSegments;
                  if (0 === f.length && h.hasChildren()) {
                    var d = this.processChildren(l, h);
                    return [new ef(i, d)];
                  }
                  if (0 === l.length && 0 === f.length) return [new ef(i, [])];
                  var v = this.processSegment(l, h, f, "primary");
                  return [new ef(i, v)];
                },
              },
            ]),
            e
          );
        })();
      function $f(e) {
        for (var t = e; t._sourceSegment; ) t = t._sourceSegment;
        return t;
      }
      function Jf(e) {
        for (
          var t = e, n = t._segmentIndexShift ? t._segmentIndexShift : 0;
          t._sourceSegment;

        )
          n += (t = t._sourceSegment)._segmentIndexShift
            ? t._segmentIndexShift
            : 0;
        return n - 1;
      }
      function Yf(e, t, n, r, i) {
        if (
          n.length > 0 &&
          (function (e, t, n) {
            return n.some(function (n) {
              return Xf(e, t, n) && "primary" !== ed(n);
            });
          })(e, n, r)
        ) {
          var o = new Ih(
            t,
            (function (e, t, n, r) {
              var i = {};
              (i.primary = r),
                (r._sourceSegment = e),
                (r._segmentIndexShift = t.length);
              var o = !0,
                a = !1,
                s = void 0;
              try {
                for (
                  var u, l = n[Symbol.iterator]();
                  !(o = (u = l.next()).done);
                  o = !0
                ) {
                  var c = u.value;
                  if ("" === c.path && "primary" !== ed(c)) {
                    var h = new Ih([], {});
                    (h._sourceSegment = e),
                      (h._segmentIndexShift = t.length),
                      (i[ed(c)] = h);
                  }
                }
              } catch (f) {
                (a = !0), (s = f);
              } finally {
                try {
                  o || null == l.return || l.return();
                } finally {
                  if (a) throw s;
                }
              }
              return i;
            })(e, t, r, new Ih(n, e.children))
          );
          return (
            (o._sourceSegment = e),
            (o._segmentIndexShift = t.length),
            { segmentGroup: o, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function (e, t, n) {
            return n.some(function (n) {
              return Xf(e, t, n);
            });
          })(e, n, r)
        ) {
          var a = new Ih(
            e.segments,
            (function (e, t, n, r, i, o) {
              var a = {},
                s = !0,
                u = !1,
                l = void 0;
              try {
                for (
                  var c, h = r[Symbol.iterator]();
                  !(s = (c = h.next()).done);
                  s = !0
                ) {
                  var f = c.value;
                  if (Xf(e, n, f) && !i[ed(f)]) {
                    var d = new Ih([], {});
                    (d._sourceSegment = e),
                      (d._segmentIndexShift =
                        "legacy" === o ? e.segments.length : t.length),
                      (a[ed(f)] = d);
                  }
                }
              } catch (v) {
                (u = !0), (l = v);
              } finally {
                try {
                  s || null == h.return || h.return();
                } finally {
                  if (u) throw l;
                }
              }
              return Object.assign(Object.assign({}, i), a);
            })(e, t, n, r, e.children, i)
          );
          return (
            (a._sourceSegment = e),
            (a._segmentIndexShift = t.length),
            { segmentGroup: a, slicedSegments: n }
          );
        }
        var s = new Ih(e.segments, e.children);
        return (
          (s._sourceSegment = e),
          (s._segmentIndexShift = t.length),
          { segmentGroup: s, slicedSegments: n }
        );
      }
      function Xf(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path &&
          void 0 === n.redirectTo
        );
      }
      function ed(e) {
        return e.outlet || "primary";
      }
      function td(e) {
        return e.data || {};
      }
      function nd(e) {
        return e.resolve || {};
      }
      function rd(e, t, n, r) {
        var i = Mf(e, t, r);
        return Ph(i.resolve ? i.resolve(t, n) : i(t, n));
      }
      function id(e) {
        return function (t) {
          return t.pipe(
            Kl(function (t) {
              var n = e(t);
              return n
                ? q(n).pipe(
                    V(function () {
                      return t;
                    })
                  )
                : q([t]);
            })
          );
        };
      }
      var od = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "shouldDetach",
                value: function (e) {
                  return !1;
                },
              },
              { key: "store", value: function (e, t) {} },
              {
                key: "shouldAttach",
                value: function (e) {
                  return !1;
                },
              },
              {
                key: "retrieve",
                value: function (e) {
                  return null;
                },
              },
              {
                key: "shouldReuseRoute",
                value: function (e, t) {
                  return e.routeConfig === t.routeConfig;
                },
              },
            ]),
            e
          );
        })(),
        ad = new He("ROUTES"),
        sd = (function () {
          function e(t, n, r, i) {
            _classCallCheck(this, e),
              (this.loader = t),
              (this.compiler = n),
              (this.onLoadStartListener = r),
              (this.onLoadEndListener = i);
          }
          return (
            _createClass(e, [
              {
                key: "load",
                value: function (e, t) {
                  var n = this;
                  return (
                    this.onLoadStartListener && this.onLoadStartListener(t),
                    this.loadModuleFactory(t.loadChildren).pipe(
                      V(function (r) {
                        n.onLoadEndListener && n.onLoadEndListener(t);
                        var i = r.create(e);
                        return new _h(Th(i.injector.get(ad)).map(wh), i);
                      })
                    )
                  );
                },
              },
              {
                key: "loadModuleFactory",
                value: function (e) {
                  var t = this;
                  return "string" == typeof e
                    ? q(this.loader.load(e))
                    : Ph(e()).pipe(
                        B(function (e) {
                          return e instanceof tt
                            ? Qu(e)
                            : q(t.compiler.compileModuleAsync(e));
                        })
                      );
                },
              },
            ]),
            e
          );
        })(),
        ud = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "shouldProcessUrl",
                value: function (e) {
                  return !0;
                },
              },
              {
                key: "extract",
                value: function (e) {
                  return e;
                },
              },
              {
                key: "merge",
                value: function (e, t) {
                  return e;
                },
              },
            ]),
            e
          );
        })();
      function ld(e) {
        throw e;
      }
      function cd(e, t, n) {
        return t.parse("/");
      }
      function hd(e, t) {
        return Qu(null);
      }
      var fd,
        dd,
        vd,
        pd =
          (((vd = (function () {
            function e(t, n, r, i, o, a, s, u) {
              var l = this;
              _classCallCheck(this, e),
                (this.rootComponentType = t),
                (this.urlSerializer = n),
                (this.rootContexts = r),
                (this.location = i),
                (this.config = u),
                (this.lastSuccessfulNavigation = null),
                (this.currentNavigation = null),
                (this.navigationId = 0),
                (this.isNgZoneEnabled = !1),
                (this.events = new x()),
                (this.errorHandler = ld),
                (this.malformedUriErrorHandler = cd),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.hooks = {
                  beforePreactivation: hd,
                  afterPreactivation: hd,
                }),
                (this.urlHandlingStrategy = new ud()),
                (this.routeReuseStrategy = new od()),
                (this.onSameUrlNavigation = "ignore"),
                (this.paramsInheritanceStrategy = "emptyOnly"),
                (this.urlUpdateStrategy = "deferred"),
                (this.relativeLinkResolution = "legacy"),
                (this.ngModule = o.get(et)),
                (this.console = o.get(xa));
              var c = o.get(za);
              (this.isNgZoneEnabled = c instanceof za),
                this.resetConfig(u),
                (this.currentUrlTree = new Rh(new Ih([], {}), {}, null)),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.configLoader = new sd(
                  a,
                  s,
                  function (e) {
                    return l.triggerEvent(new sh(e));
                  },
                  function (e) {
                    return l.triggerEvent(new uh(e));
                  }
                )),
                (this.routerState = rf(
                  this.currentUrlTree,
                  this.rootComponentType
                )),
                (this.transitions = new wc({
                  id: 0,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  extractedUrl: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  urlAfterRedirects: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  rawUrl: this.currentUrlTree,
                  extras: {},
                  resolve: null,
                  reject: null,
                  promise: Promise.resolve(!0),
                  source: "imperative",
                  restoredState: null,
                  currentSnapshot: this.routerState.snapshot,
                  targetSnapshot: null,
                  currentRouterState: this.routerState,
                  targetRouterState: null,
                  guards: { canActivateChecks: [], canDeactivateChecks: [] },
                  guardsResult: null,
                })),
                (this.navigations = this.setupNavigations(this.transitions)),
                this.processNavigations();
            }
            return (
              _createClass(e, [
                {
                  key: "setupNavigations",
                  value: function (e) {
                    var t = this,
                      n = this.events;
                    return e.pipe(
                      Zu(function (e) {
                        return 0 !== e.id;
                      }),
                      V(function (e) {
                        return Object.assign(Object.assign({}, e), {
                          extractedUrl: t.urlHandlingStrategy.extract(e.rawUrl),
                        });
                      }),
                      Kl(function (e) {
                        var r,
                          i,
                          o,
                          a,
                          s = !1,
                          u = !1;
                        return Qu(e).pipe(
                          ec(function (e) {
                            t.currentNavigation = {
                              id: e.id,
                              initialUrl: e.currentRawUrl,
                              extractedUrl: e.extractedUrl,
                              trigger: e.source,
                              extras: e.extras,
                              previousNavigation: t.lastSuccessfulNavigation
                                ? Object.assign(
                                    Object.assign(
                                      {},
                                      t.lastSuccessfulNavigation
                                    ),
                                    { previousNavigation: null }
                                  )
                                : null,
                            };
                          }),
                          Kl(function (e) {
                            var r,
                              i,
                              o,
                              a,
                              s =
                                !t.navigated ||
                                e.extractedUrl.toString() !==
                                  t.browserUrlTree.toString();
                            if (
                              ("reload" === t.onSameUrlNavigation || s) &&
                              t.urlHandlingStrategy.shouldProcessUrl(e.rawUrl)
                            )
                              return Qu(e).pipe(
                                Kl(function (e) {
                                  var r = t.transitions.getValue();
                                  return (
                                    n.next(
                                      new Yc(
                                        e.id,
                                        t.serializeUrl(e.extractedUrl),
                                        e.source,
                                        e.restoredState
                                      )
                                    ),
                                    r !== t.transitions.getValue() ? Ul : [e]
                                  );
                                }),
                                Kl(function (e) {
                                  return Promise.resolve(e);
                                }),
                                ((r = t.ngModule.injector),
                                (i = t.configLoader),
                                (o = t.urlSerializer),
                                (a = t.config),
                                function (e) {
                                  return e.pipe(
                                    Kl(function (e) {
                                      return (function (e, t, n, r, i) {
                                        return new Nf(e, t, n, r, i).apply();
                                      })(r, i, o, e.extractedUrl, a).pipe(
                                        V(function (t) {
                                          return Object.assign(
                                            Object.assign({}, e),
                                            { urlAfterRedirects: t }
                                          );
                                        })
                                      );
                                    })
                                  );
                                }),
                                ec(function (e) {
                                  t.currentNavigation = Object.assign(
                                    Object.assign({}, t.currentNavigation),
                                    { finalUrl: e.urlAfterRedirects }
                                  );
                                }),
                                (function (e, n, r, i, o) {
                                  return function (r) {
                                    return r.pipe(
                                      B(function (r) {
                                        return (function (e, t, n, r) {
                                          var i =
                                              arguments.length > 4 &&
                                              void 0 !== arguments[4]
                                                ? arguments[4]
                                                : "emptyOnly",
                                            o =
                                              arguments.length > 5 &&
                                              void 0 !== arguments[5]
                                                ? arguments[5]
                                                : "legacy";
                                          return new Gf(
                                            e,
                                            t,
                                            n,
                                            r,
                                            i,
                                            o
                                          ).recognize();
                                        })(
                                          e,
                                          n,
                                          r.urlAfterRedirects,
                                          ((a = r.urlAfterRedirects),
                                          t.serializeUrl(a)),
                                          i,
                                          o
                                        ).pipe(
                                          V(function (e) {
                                            return Object.assign(
                                              Object.assign({}, r),
                                              { targetSnapshot: e }
                                            );
                                          })
                                        );
                                        var a;
                                      })
                                    );
                                  };
                                })(
                                  t.rootComponentType,
                                  t.config,
                                  0,
                                  t.paramsInheritanceStrategy,
                                  t.relativeLinkResolution
                                ),
                                ec(function (e) {
                                  "eager" === t.urlUpdateStrategy &&
                                    (e.extras.skipLocationChange ||
                                      t.setBrowserUrl(
                                        e.urlAfterRedirects,
                                        !!e.extras.replaceUrl,
                                        e.id,
                                        e.extras.state
                                      ),
                                    (t.browserUrlTree = e.urlAfterRedirects));
                                }),
                                ec(function (e) {
                                  var r = new nh(
                                    e.id,
                                    t.serializeUrl(e.extractedUrl),
                                    t.serializeUrl(e.urlAfterRedirects),
                                    e.targetSnapshot
                                  );
                                  n.next(r);
                                })
                              );
                            if (
                              s &&
                              t.rawUrlTree &&
                              t.urlHandlingStrategy.shouldProcessUrl(
                                t.rawUrlTree
                              )
                            ) {
                              var u = e.id,
                                l = e.extractedUrl,
                                c = e.source,
                                h = e.restoredState,
                                f = e.extras,
                                d = new Yc(u, t.serializeUrl(l), c, h);
                              n.next(d);
                              var v = rf(l, t.rootComponentType).snapshot;
                              return Qu(
                                Object.assign(Object.assign({}, e), {
                                  targetSnapshot: v,
                                  urlAfterRedirects: l,
                                  extras: Object.assign(Object.assign({}, f), {
                                    skipLocationChange: !1,
                                    replaceUrl: !1,
                                  }),
                                })
                              );
                            }
                            return (
                              (t.rawUrlTree = e.rawUrl),
                              (t.browserUrlTree = e.urlAfterRedirects),
                              e.resolve(null),
                              Ul
                            );
                          }),
                          id(function (e) {
                            var n = e.targetSnapshot,
                              r = e.id,
                              i = e.extractedUrl,
                              o = e.rawUrl,
                              a = e.extras,
                              s = a.skipLocationChange,
                              u = a.replaceUrl;
                            return t.hooks.beforePreactivation(n, {
                              navigationId: r,
                              appliedUrlTree: i,
                              rawUrlTree: o,
                              skipLocationChange: !!s,
                              replaceUrl: !!u,
                            });
                          }),
                          ec(function (e) {
                            var n = new rh(
                              e.id,
                              t.serializeUrl(e.extractedUrl),
                              t.serializeUrl(e.urlAfterRedirects),
                              e.targetSnapshot
                            );
                            t.triggerEvent(n);
                          }),
                          V(function (e) {
                            return Object.assign(Object.assign({}, e), {
                              guards:
                                ((n = e.targetSnapshot),
                                (r = e.currentSnapshot),
                                (i = t.rootContexts),
                                (o = n._root),
                                (function e(t, n, r, i) {
                                  var o =
                                      arguments.length > 4 &&
                                      void 0 !== arguments[4]
                                        ? arguments[4]
                                        : {
                                            canDeactivateChecks: [],
                                            canActivateChecks: [],
                                          },
                                    a = tf(n);
                                  return (
                                    t.children.forEach(function (t) {
                                      !(function (t, n, r, i) {
                                        var o =
                                            arguments.length > 4 &&
                                            void 0 !== arguments[4]
                                              ? arguments[4]
                                              : {
                                                  canDeactivateChecks: [],
                                                  canActivateChecks: [],
                                                },
                                          a = t.value,
                                          s = n ? n.value : null,
                                          u = r
                                            ? r.getContext(t.value.outlet)
                                            : null;
                                        if (
                                          s &&
                                          a.routeConfig === s.routeConfig
                                        ) {
                                          var l = (function (e, t, n) {
                                            if ("function" == typeof n)
                                              return n(e, t);
                                            switch (n) {
                                              case "pathParamsChange":
                                                return !Dh(e.url, t.url);
                                              case "pathParamsOrQueryParamsChange":
                                                return (
                                                  !Dh(e.url, t.url) ||
                                                  !Sh(
                                                    e.queryParams,
                                                    t.queryParams
                                                  )
                                                );
                                              case "always":
                                                return !0;
                                              case "paramsOrQueryParamsChange":
                                                return (
                                                  !ff(e, t) ||
                                                  !Sh(
                                                    e.queryParams,
                                                    t.queryParams
                                                  )
                                                );
                                              case "paramsChange":
                                              default:
                                                return !ff(e, t);
                                            }
                                          })(
                                            s,
                                            a,
                                            a.routeConfig.runGuardsAndResolvers
                                          );
                                          l
                                            ? o.canActivateChecks.push(
                                                new Uf(i)
                                              )
                                            : ((a.data = s.data),
                                              (a._resolvedData =
                                                s._resolvedData)),
                                            e(
                                              t,
                                              n,
                                              a.component
                                                ? u
                                                  ? u.children
                                                  : null
                                                : r,
                                              i,
                                              o
                                            ),
                                            l &&
                                              o.canDeactivateChecks.push(
                                                new Vf(
                                                  (u &&
                                                    u.outlet &&
                                                    u.outlet.component) ||
                                                    null,
                                                  s
                                                )
                                              );
                                        } else
                                          s && Hf(n, u, o),
                                            o.canActivateChecks.push(new Uf(i)),
                                            e(
                                              t,
                                              null,
                                              a.component
                                                ? u
                                                  ? u.children
                                                  : null
                                                : r,
                                              i,
                                              o
                                            );
                                      })(
                                        t,
                                        a[t.value.outlet],
                                        r,
                                        i.concat([t.value]),
                                        o
                                      ),
                                        delete a[t.value.outlet];
                                    }),
                                    xh(a, function (e, t) {
                                      return Hf(e, r.getContext(t), o);
                                    }),
                                    o
                                  );
                                })(o, r ? r._root : null, i, [o.value])),
                            });
                            var n, r, i, o;
                          }),
                          (function (e, t) {
                            return function (n) {
                              return n.pipe(
                                B(function (n) {
                                  var r = n.targetSnapshot,
                                    i = n.currentSnapshot,
                                    o = n.guards,
                                    a = o.canActivateChecks,
                                    s = o.canDeactivateChecks;
                                  return 0 === s.length && 0 === a.length
                                    ? Qu(
                                        Object.assign(Object.assign({}, n), {
                                          guardsResult: !0,
                                        })
                                      )
                                    : (function (e, t, n, r) {
                                        return q(e).pipe(
                                          B(function (e) {
                                            return (function (e, t, n, r, i) {
                                              var o =
                                                t && t.routeConfig
                                                  ? t.routeConfig.canDeactivate
                                                  : null;
                                              return o && 0 !== o.length
                                                ? Qu(
                                                    o.map(function (o) {
                                                      var a,
                                                        s = Mf(o, t, i);
                                                      if (
                                                        (function (e) {
                                                          return (
                                                            e &&
                                                            Tf(e.canDeactivate)
                                                          );
                                                        })(s)
                                                      )
                                                        a = Ph(
                                                          s.canDeactivate(
                                                            e,
                                                            t,
                                                            n,
                                                            r
                                                          )
                                                        );
                                                      else {
                                                        if (!Tf(s))
                                                          throw new Error(
                                                            "Invalid CanDeactivate guard"
                                                          );
                                                        a = Ph(s(e, t, n, r));
                                                      }
                                                      return a.pipe(zc());
                                                    })
                                                  ).pipe(qf())
                                                : Qu(!0);
                                            })(e.component, e.route, n, t, r);
                                          }),
                                          zc(function (e) {
                                            return !0 !== e;
                                          }, !0)
                                        );
                                      })(s, r, i, e).pipe(
                                        B(function (n) {
                                          return n && "boolean" == typeof n
                                            ? (function (e, t, n, r) {
                                                return q(t).pipe(
                                                  Ku(function (t) {
                                                    return q([
                                                      Wf(t.route.parent, r),
                                                      Bf(t.route, r),
                                                      Kf(e, t.path, n),
                                                      Qf(e, t.route, n),
                                                    ]).pipe(
                                                      Bl(),
                                                      zc(function (e) {
                                                        return !0 !== e;
                                                      }, !0)
                                                    );
                                                  }),
                                                  zc(function (e) {
                                                    return !0 !== e;
                                                  }, !0)
                                                );
                                              })(r, a, e, t)
                                            : Qu(n);
                                        }),
                                        V(function (e) {
                                          return Object.assign(
                                            Object.assign({}, n),
                                            { guardsResult: e }
                                          );
                                        })
                                      );
                                })
                              );
                            };
                          })(t.ngModule.injector, function (e) {
                            return t.triggerEvent(e);
                          }),
                          ec(function (e) {
                            if (Af(e.guardsResult)) {
                              var n = gh(
                                'Redirecting to "'.concat(
                                  t.serializeUrl(e.guardsResult),
                                  '"'
                                )
                              );
                              throw ((n.url = e.guardsResult), n);
                            }
                          }),
                          ec(function (e) {
                            var n = new ih(
                              e.id,
                              t.serializeUrl(e.extractedUrl),
                              t.serializeUrl(e.urlAfterRedirects),
                              e.targetSnapshot,
                              !!e.guardsResult
                            );
                            t.triggerEvent(n);
                          }),
                          Zu(function (e) {
                            if (!e.guardsResult) {
                              t.resetUrlToCurrentUrlTree();
                              var r = new eh(
                                e.id,
                                t.serializeUrl(e.extractedUrl),
                                ""
                              );
                              return n.next(r), e.resolve(!1), !1;
                            }
                            return !0;
                          }),
                          id(function (e) {
                            if (e.guards.canActivateChecks.length)
                              return Qu(e).pipe(
                                ec(function (e) {
                                  var n = new oh(
                                    e.id,
                                    t.serializeUrl(e.extractedUrl),
                                    t.serializeUrl(e.urlAfterRedirects),
                                    e.targetSnapshot
                                  );
                                  t.triggerEvent(n);
                                }),
                                ((n = t.paramsInheritanceStrategy),
                                (r = t.ngModule.injector),
                                function (e) {
                                  return e.pipe(
                                    B(function (e) {
                                      var t = e.targetSnapshot,
                                        i = e.guards.canActivateChecks;
                                      return i.length
                                        ? q(i).pipe(
                                            Ku(function (e) {
                                              return (function (e, t, n, r) {
                                                return (function (e, t, n, r) {
                                                  var i = Object.keys(e);
                                                  if (0 === i.length)
                                                    return Qu({});
                                                  if (1 === i.length) {
                                                    var o = i[0];
                                                    return rd(
                                                      e[o],
                                                      t,
                                                      n,
                                                      r
                                                    ).pipe(
                                                      V(function (e) {
                                                        return _defineProperty(
                                                          {},
                                                          o,
                                                          e
                                                        );
                                                      })
                                                    );
                                                  }
                                                  var a = {};
                                                  return q(i)
                                                    .pipe(
                                                      B(function (i) {
                                                        return rd(
                                                          e[i],
                                                          t,
                                                          n,
                                                          r
                                                        ).pipe(
                                                          V(function (e) {
                                                            return (
                                                              (a[i] = e), e
                                                            );
                                                          })
                                                        );
                                                      })
                                                    )
                                                    .pipe(
                                                      Uc(),
                                                      V(function () {
                                                        return a;
                                                      })
                                                    );
                                                })(e._resolve, e, t, r).pipe(
                                                  V(function (t) {
                                                    return (
                                                      (e._resolvedData = t),
                                                      (e.data = Object.assign(
                                                        Object.assign(
                                                          {},
                                                          e.data
                                                        ),
                                                        af(e, n).resolve
                                                      )),
                                                      null
                                                    );
                                                  })
                                                );
                                              })(e.route, t, n, r);
                                            }),
                                            (function (e, t) {
                                              return arguments.length >= 2
                                                ? function (n) {
                                                    return _(
                                                      Wc(e, t),
                                                      xc(1),
                                                      jc(t)
                                                    )(n);
                                                  }
                                                : function (t) {
                                                    return _(
                                                      Wc(function (t, n, r) {
                                                        return e(t, n, r + 1);
                                                      }),
                                                      xc(1)
                                                    )(t);
                                                  };
                                            })(function (e, t) {
                                              return e;
                                            }),
                                            V(function (t) {
                                              return e;
                                            })
                                          )
                                        : Qu(e);
                                    })
                                  );
                                }),
                                ec(function (e) {
                                  var n = new ah(
                                    e.id,
                                    t.serializeUrl(e.extractedUrl),
                                    t.serializeUrl(e.urlAfterRedirects),
                                    e.targetSnapshot
                                  );
                                  t.triggerEvent(n);
                                })
                              );
                            var n, r;
                          }),
                          id(function (e) {
                            var n = e.targetSnapshot,
                              r = e.id,
                              i = e.extractedUrl,
                              o = e.rawUrl,
                              a = e.extras,
                              s = a.skipLocationChange,
                              u = a.replaceUrl;
                            return t.hooks.afterPreactivation(n, {
                              navigationId: r,
                              appliedUrlTree: i,
                              rawUrlTree: o,
                              skipLocationChange: !!s,
                              replaceUrl: !!u,
                            });
                          }),
                          V(function (e) {
                            var n = (function (e, t, n) {
                              var r = (function e(t, n, r) {
                                if (
                                  r &&
                                  t.shouldReuseRoute(n.value, r.value.snapshot)
                                ) {
                                  var i = r.value;
                                  i._futureSnapshot = n.value;
                                  var o = (function (t, n, r) {
                                    return n.children.map(function (n) {
                                      var i = !0,
                                        o = !1,
                                        a = void 0;
                                      try {
                                        for (
                                          var s,
                                            u = r.children[Symbol.iterator]();
                                          !(i = (s = u.next()).done);
                                          i = !0
                                        ) {
                                          var l = s.value;
                                          if (
                                            t.shouldReuseRoute(
                                              l.value.snapshot,
                                              n.value
                                            )
                                          )
                                            return e(t, n, l);
                                        }
                                      } catch (c) {
                                        (o = !0), (a = c);
                                      } finally {
                                        try {
                                          i || null == u.return || u.return();
                                        } finally {
                                          if (o) throw a;
                                        }
                                      }
                                      return e(t, n);
                                    });
                                  })(t, n, r);
                                  return new ef(i, o);
                                }
                                var a = t.retrieve(n.value);
                                if (a) {
                                  var s = a.route;
                                  return (
                                    (function e(t, n) {
                                      if (
                                        t.value.routeConfig !==
                                        n.value.routeConfig
                                      )
                                        throw new Error(
                                          "Cannot reattach ActivatedRouteSnapshot created from a different route"
                                        );
                                      if (
                                        t.children.length !== n.children.length
                                      )
                                        throw new Error(
                                          "Cannot reattach ActivatedRouteSnapshot with a different number of children"
                                        );
                                      n.value._futureSnapshot = t.value;
                                      for (
                                        var r = 0;
                                        r < t.children.length;
                                        ++r
                                      )
                                        e(t.children[r], n.children[r]);
                                    })(n, s),
                                    s
                                  );
                                }
                                var u,
                                  l = new of(
                                    new wc((u = n.value).url),
                                    new wc(u.params),
                                    new wc(u.queryParams),
                                    new wc(u.fragment),
                                    new wc(u.data),
                                    u.outlet,
                                    u.component,
                                    u
                                  ),
                                  c = n.children.map(function (n) {
                                    return e(t, n);
                                  });
                                return new ef(l, c);
                              })(e, t._root, n ? n._root : void 0);
                              return new nf(r, t);
                            })(
                              t.routeReuseStrategy,
                              e.targetSnapshot,
                              e.currentRouterState
                            );
                            return Object.assign(Object.assign({}, e), {
                              targetRouterState: n,
                            });
                          }),
                          ec(function (e) {
                            (t.currentUrlTree = e.urlAfterRedirects),
                              (t.rawUrlTree = t.urlHandlingStrategy.merge(
                                t.currentUrlTree,
                                e.rawUrl
                              )),
                              (t.routerState = e.targetRouterState),
                              "deferred" === t.urlUpdateStrategy &&
                                (e.extras.skipLocationChange ||
                                  t.setBrowserUrl(
                                    t.rawUrlTree,
                                    !!e.extras.replaceUrl,
                                    e.id,
                                    e.extras.state
                                  ),
                                (t.browserUrlTree = e.urlAfterRedirects));
                          }),
                          ((i = t.rootContexts),
                          (o = t.routeReuseStrategy),
                          (a = function (e) {
                            return t.triggerEvent(e);
                          }),
                          V(function (e) {
                            return (
                              new Sf(
                                o,
                                e.targetRouterState,
                                e.currentRouterState,
                                a
                              ).activate(i),
                              e
                            );
                          })),
                          ec({
                            next: function () {
                              s = !0;
                            },
                            complete: function () {
                              s = !0;
                            },
                          }),
                          ((r = function () {
                            if (!s && !u) {
                              t.resetUrlToCurrentUrlTree();
                              var r = new eh(
                                e.id,
                                t.serializeUrl(e.extractedUrl),
                                "Navigation ID "
                                  .concat(
                                    e.id,
                                    " is not equal to the current navigation id "
                                  )
                                  .concat(t.navigationId)
                              );
                              n.next(r), e.resolve(!1);
                            }
                            t.currentNavigation = null;
                          }),
                          function (e) {
                            return e.lift(new Gc(r));
                          }),
                          Vc(function (r) {
                            if (
                              ((u = !0),
                              (s = r) && s.ngNavigationCancelingError)
                            ) {
                              var i = Af(r.url);
                              i ||
                                ((t.navigated = !0),
                                t.resetStateAndUrl(
                                  e.currentRouterState,
                                  e.currentUrlTree,
                                  e.rawUrl
                                ));
                              var o = new eh(
                                e.id,
                                t.serializeUrl(e.extractedUrl),
                                r.message
                              );
                              n.next(o),
                                i
                                  ? setTimeout(function () {
                                      var n = t.urlHandlingStrategy.merge(
                                        r.url,
                                        t.rawUrlTree
                                      );
                                      return t.scheduleNavigation(
                                        n,
                                        "imperative",
                                        null,
                                        {
                                          skipLocationChange:
                                            e.extras.skipLocationChange,
                                          replaceUrl:
                                            "eager" === t.urlUpdateStrategy,
                                        },
                                        {
                                          resolve: e.resolve,
                                          reject: e.reject,
                                          promise: e.promise,
                                        }
                                      );
                                    }, 0)
                                  : e.resolve(!1);
                            } else {
                              t.resetStateAndUrl(
                                e.currentRouterState,
                                e.currentUrlTree,
                                e.rawUrl
                              );
                              var a = new th(
                                e.id,
                                t.serializeUrl(e.extractedUrl),
                                r
                              );
                              n.next(a);
                              try {
                                e.resolve(t.errorHandler(r));
                              } catch (l) {
                                e.reject(l);
                              }
                            }
                            var s;
                            return Ul;
                          })
                        );
                      })
                    );
                  },
                },
                {
                  key: "resetRootComponentType",
                  value: function (e) {
                    (this.rootComponentType = e),
                      (this.routerState.root.component =
                        this.rootComponentType);
                  },
                },
                {
                  key: "getTransition",
                  value: function () {
                    var e = this.transitions.value;
                    return (e.urlAfterRedirects = this.browserUrlTree), e;
                  },
                },
                {
                  key: "setTransition",
                  value: function (e) {
                    this.transitions.next(
                      Object.assign(Object.assign({}, this.getTransition()), e)
                    );
                  },
                },
                {
                  key: "initialNavigation",
                  value: function () {
                    this.setUpLocationChangeListener(),
                      0 === this.navigationId &&
                        this.navigateByUrl(this.location.path(!0), {
                          replaceUrl: !0,
                        });
                  },
                },
                {
                  key: "setUpLocationChangeListener",
                  value: function () {
                    var e = this;
                    this.locationSubscription ||
                      (this.locationSubscription = this.location.subscribe(
                        function (t) {
                          var n = e.parseUrl(t.url),
                            r =
                              "popstate" === t.type ? "popstate" : "hashchange",
                            i =
                              t.state && t.state.navigationId ? t.state : null;
                          setTimeout(function () {
                            e.scheduleNavigation(n, r, i, { replaceUrl: !0 });
                          }, 0);
                        }
                      ));
                  },
                },
                {
                  key: "getCurrentNavigation",
                  value: function () {
                    return this.currentNavigation;
                  },
                },
                {
                  key: "triggerEvent",
                  value: function (e) {
                    this.events.next(e);
                  },
                },
                {
                  key: "resetConfig",
                  value: function (e) {
                    kh(e),
                      (this.config = e.map(wh)),
                      (this.navigated = !1),
                      (this.lastSuccessfulId = -1);
                  },
                },
                {
                  key: "ngOnDestroy",
                  value: function () {
                    this.dispose();
                  },
                },
                {
                  key: "dispose",
                  value: function () {
                    this.locationSubscription &&
                      (this.locationSubscription.unsubscribe(),
                      (this.locationSubscription = null));
                  },
                },
                {
                  key: "createUrlTree",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      n = t.relativeTo,
                      r = t.queryParams,
                      i = t.fragment,
                      o = t.preserveQueryParams,
                      a = t.queryParamsHandling,
                      s = t.preserveFragment;
                    Hn() &&
                      o &&
                      console &&
                      console.warn &&
                      console.warn(
                        "preserveQueryParams is deprecated, use queryParamsHandling instead."
                      );
                    var u = n || this.routerState.root,
                      l = s ? this.currentUrlTree.fragment : i,
                      c = null;
                    if (a)
                      switch (a) {
                        case "merge":
                          c = Object.assign(
                            Object.assign({}, this.currentUrlTree.queryParams),
                            r
                          );
                          break;
                        case "preserve":
                          c = this.currentUrlTree.queryParams;
                          break;
                        default:
                          c = r || null;
                      }
                    else c = o ? this.currentUrlTree.queryParams : r || null;
                    return (
                      null !== c && (c = this.removeEmptyProps(c)),
                      (function (e, t, n, r, i) {
                        if (0 === n.length) return vf(t.root, t.root, t, r, i);
                        var o = (function (e) {
                          if (
                            "string" == typeof e[0] &&
                            1 === e.length &&
                            "/" === e[0]
                          )
                            return new pf(!0, 0, e);
                          var t = 0,
                            n = !1,
                            r = e.reduce(function (e, r, i) {
                              if ("object" == typeof r && null != r) {
                                if (r.outlets) {
                                  var o = {};
                                  return (
                                    xh(r.outlets, function (e, t) {
                                      o[t] =
                                        "string" == typeof e ? e.split("/") : e;
                                    }),
                                    [].concat(_toConsumableArray(e), [
                                      { outlets: o },
                                    ])
                                  );
                                }
                                if (r.segmentPath)
                                  return [].concat(_toConsumableArray(e), [
                                    r.segmentPath,
                                  ]);
                              }
                              return "string" != typeof r
                                ? [].concat(_toConsumableArray(e), [r])
                                : 0 === i
                                ? (r.split("/").forEach(function (r, i) {
                                    (0 == i && "." === r) ||
                                      (0 == i && "" === r
                                        ? (n = !0)
                                        : ".." === r
                                        ? t++
                                        : "" != r && e.push(r));
                                  }),
                                  e)
                                : [].concat(_toConsumableArray(e), [r]);
                            }, []);
                          return new pf(n, t, r);
                        })(n);
                        if (o.toRoot())
                          return vf(t.root, new Ih([], {}), t, r, i);
                        var a = (function (e, t, n) {
                            if (e.isAbsolute) return new yf(t.root, !0, 0);
                            if (-1 === n.snapshot._lastPathIndex)
                              return new yf(n.snapshot._urlSegment, !0, 0);
                            var r = df(e.commands[0]) ? 0 : 1;
                            return (function (e, t, n) {
                              for (var r = e, i = t, o = n; o > i; ) {
                                if (((o -= i), !(r = r.parent)))
                                  throw new Error("Invalid number of '../'");
                                i = r.segments.length;
                              }
                              return new yf(r, !1, i - o);
                            })(
                              n.snapshot._urlSegment,
                              n.snapshot._lastPathIndex + r,
                              e.numberOfDoubleDots
                            );
                          })(o, t, e),
                          s = a.processChildren
                            ? _f(a.segmentGroup, a.index, o.commands)
                            : mf(a.segmentGroup, a.index, o.commands);
                        return vf(a.segmentGroup, s, t, r, i);
                      })(u, this.currentUrlTree, e, c, l)
                    );
                  },
                },
                {
                  key: "navigateByUrl",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { skipLocationChange: !1 };
                    Hn() &&
                      this.isNgZoneEnabled &&
                      !za.isInAngularZone() &&
                      this.console.warn(
                        "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
                      );
                    var n = Af(e) ? e : this.parseUrl(e),
                      r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
                    return this.scheduleNavigation(r, "imperative", null, t);
                  },
                },
                {
                  key: "navigate",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { skipLocationChange: !1 };
                    return (
                      (function (e) {
                        for (var t = 0; t < e.length; t++) {
                          var n = e[t];
                          if (null == n)
                            throw new Error(
                              "The requested path contains "
                                .concat(n, " segment at index ")
                                .concat(t)
                            );
                        }
                      })(e),
                      this.navigateByUrl(this.createUrlTree(e, t), t)
                    );
                  },
                },
                {
                  key: "serializeUrl",
                  value: function (e) {
                    return this.urlSerializer.serialize(e);
                  },
                },
                {
                  key: "parseUrl",
                  value: function (e) {
                    var t;
                    try {
                      t = this.urlSerializer.parse(e);
                    } catch (n) {
                      t = this.malformedUriErrorHandler(
                        n,
                        this.urlSerializer,
                        e
                      );
                    }
                    return t;
                  },
                },
                {
                  key: "isActive",
                  value: function (e, t) {
                    if (Af(e)) return Oh(this.currentUrlTree, e, t);
                    var n = this.parseUrl(e);
                    return Oh(this.currentUrlTree, n, t);
                  },
                },
                {
                  key: "removeEmptyProps",
                  value: function (e) {
                    return Object.keys(e).reduce(function (t, n) {
                      var r = e[n];
                      return null != r && (t[n] = r), t;
                    }, {});
                  },
                },
                {
                  key: "processNavigations",
                  value: function () {
                    var e = this;
                    this.navigations.subscribe(
                      function (t) {
                        (e.navigated = !0),
                          (e.lastSuccessfulId = t.id),
                          e.events.next(
                            new Xc(
                              t.id,
                              e.serializeUrl(t.extractedUrl),
                              e.serializeUrl(e.currentUrlTree)
                            )
                          ),
                          (e.lastSuccessfulNavigation = e.currentNavigation),
                          (e.currentNavigation = null),
                          t.resolve(!0);
                      },
                      function (t) {
                        e.console.warn("Unhandled Navigation Error: ");
                      }
                    );
                  },
                },
                {
                  key: "scheduleNavigation",
                  value: function (e, t, n, r, i) {
                    var o,
                      a,
                      s,
                      u = this.getTransition();
                    if (
                      u &&
                      "imperative" !== t &&
                      "imperative" === u.source &&
                      u.rawUrl.toString() === e.toString()
                    )
                      return Promise.resolve(!0);
                    if (
                      u &&
                      "hashchange" == t &&
                      "popstate" === u.source &&
                      u.rawUrl.toString() === e.toString()
                    )
                      return Promise.resolve(!0);
                    if (
                      u &&
                      "popstate" == t &&
                      "hashchange" === u.source &&
                      u.rawUrl.toString() === e.toString()
                    )
                      return Promise.resolve(!0);
                    i
                      ? ((o = i.resolve), (a = i.reject), (s = i.promise))
                      : (s = new Promise(function (e, t) {
                          (o = e), (a = t);
                        }));
                    var l = ++this.navigationId;
                    return (
                      this.setTransition({
                        id: l,
                        source: t,
                        restoredState: n,
                        currentUrlTree: this.currentUrlTree,
                        currentRawUrl: this.rawUrlTree,
                        rawUrl: e,
                        extras: r,
                        resolve: o,
                        reject: a,
                        promise: s,
                        currentSnapshot: this.routerState.snapshot,
                        currentRouterState: this.routerState,
                      }),
                      s.catch(function (e) {
                        return Promise.reject(e);
                      })
                    );
                  },
                },
                {
                  key: "setBrowserUrl",
                  value: function (e, t, n, r) {
                    var i = this.urlSerializer.serialize(e);
                    (r = r || {}),
                      this.location.isCurrentPathEqualTo(i) || t
                        ? this.location.replaceState(
                            i,
                            "",
                            Object.assign(Object.assign({}, r), {
                              navigationId: n,
                            })
                          )
                        : this.location.go(
                            i,
                            "",
                            Object.assign(Object.assign({}, r), {
                              navigationId: n,
                            })
                          );
                  },
                },
                {
                  key: "resetStateAndUrl",
                  value: function (e, t, n) {
                    (this.routerState = e),
                      (this.currentUrlTree = t),
                      (this.rawUrlTree = this.urlHandlingStrategy.merge(
                        this.currentUrlTree,
                        n
                      )),
                      this.resetUrlToCurrentUrlTree();
                  },
                },
                {
                  key: "resetUrlToCurrentUrlTree",
                  value: function () {
                    this.location.replaceState(
                      this.urlSerializer.serialize(this.rawUrlTree),
                      "",
                      { navigationId: this.lastSuccessfulId }
                    );
                  },
                },
                {
                  key: "url",
                  get: function () {
                    return this.serializeUrl(this.currentUrlTree);
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            ao();
          }),
          (vd.ɵdir = gt({ type: vd })),
          vd),
        yd =
          (((dd = (function () {
            function e(t, n, r, i, o) {
              _classCallCheck(this, e),
                (this.router = t),
                (this.route = n),
                (this.commands = []),
                null == r && i.setAttribute(o.nativeElement, "tabindex", "0");
            }
            return (
              _createClass(e, [
                {
                  key: "onClick",
                  value: function () {
                    var e = {
                      skipLocationChange: md(this.skipLocationChange),
                      replaceUrl: md(this.replaceUrl),
                    };
                    return this.router.navigateByUrl(this.urlTree, e), !0;
                  },
                },
                {
                  key: "routerLink",
                  set: function (e) {
                    this.commands =
                      null != e ? (Array.isArray(e) ? e : [e]) : [];
                  },
                },
                {
                  key: "preserveQueryParams",
                  set: function (e) {
                    Hn() &&
                      console &&
                      console.warn &&
                      console.warn(
                        "preserveQueryParams is deprecated!, use queryParamsHandling instead."
                      ),
                      (this.preserve = e);
                  },
                },
                {
                  key: "urlTree",
                  get: function () {
                    return this.router.createUrlTree(this.commands, {
                      relativeTo: this.route,
                      queryParams: this.queryParams,
                      fragment: this.fragment,
                      preserveQueryParams: md(this.preserve),
                      queryParamsHandling: this.queryParamsHandling,
                      preserveFragment: md(this.preserveFragment),
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || dd)(
              io(pd),
              io(of),
              oo("tabindex"),
              io(Do),
              io(Oo)
            );
          }),
          (dd.ɵdir = gt({
            type: dd,
            selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
            hostBindings: function (e, t) {
              1 & e &&
                po("click", function (e) {
                  return t.onClick();
                });
            },
            inputs: {
              routerLink: "routerLink",
              preserveQueryParams: "preserveQueryParams",
              queryParams: "queryParams",
              fragment: "fragment",
              queryParamsHandling: "queryParamsHandling",
              preserveFragment: "preserveFragment",
              skipLocationChange: "skipLocationChange",
              replaceUrl: "replaceUrl",
              state: "state",
            },
          })),
          dd),
        gd =
          (((fd = (function () {
            function e(t, n, r) {
              var i = this;
              _classCallCheck(this, e),
                (this.router = t),
                (this.route = n),
                (this.locationStrategy = r),
                (this.commands = []),
                (this.subscription = t.events.subscribe(function (e) {
                  e instanceof Xc && i.updateTargetUrlAndHref();
                }));
            }
            return (
              _createClass(e, [
                {
                  key: "ngOnChanges",
                  value: function (e) {
                    this.updateTargetUrlAndHref();
                  },
                },
                {
                  key: "ngOnDestroy",
                  value: function () {
                    this.subscription.unsubscribe();
                  },
                },
                {
                  key: "onClick",
                  value: function (e, t, n, r) {
                    if (0 !== e || t || n || r) return !0;
                    if (
                      "string" == typeof this.target &&
                      "_self" != this.target
                    )
                      return !0;
                    var i = {
                      skipLocationChange: md(this.skipLocationChange),
                      replaceUrl: md(this.replaceUrl),
                      state: this.state,
                    };
                    return this.router.navigateByUrl(this.urlTree, i), !1;
                  },
                },
                {
                  key: "updateTargetUrlAndHref",
                  value: function () {
                    this.href = this.locationStrategy.prepareExternalUrl(
                      this.router.serializeUrl(this.urlTree)
                    );
                  },
                },
                {
                  key: "routerLink",
                  set: function (e) {
                    this.commands =
                      null != e ? (Array.isArray(e) ? e : [e]) : [];
                  },
                },
                {
                  key: "preserveQueryParams",
                  set: function (e) {
                    Hn() &&
                      console &&
                      console.warn &&
                      console.warn(
                        "preserveQueryParams is deprecated, use queryParamsHandling instead."
                      ),
                      (this.preserve = e);
                  },
                },
                {
                  key: "urlTree",
                  get: function () {
                    return this.router.createUrlTree(this.commands, {
                      relativeTo: this.route,
                      queryParams: this.queryParams,
                      fragment: this.fragment,
                      preserveQueryParams: md(this.preserve),
                      queryParamsHandling: this.queryParamsHandling,
                      preserveFragment: md(this.preserveFragment),
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || fd)(io(pd), io(of), io(Ns));
          }),
          (fd.ɵdir = gt({
            type: fd,
            selectors: [
              ["a", "routerLink", ""],
              ["area", "routerLink", ""],
            ],
            hostVars: 2,
            hostBindings: function (e, t) {
              1 & e &&
                po("click", function (e) {
                  return t.onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey);
                }),
                2 & e && (Co("href", t.href, Wn), ro("target", t.target));
            },
            inputs: {
              routerLink: "routerLink",
              preserveQueryParams: "preserveQueryParams",
              target: "target",
              queryParams: "queryParams",
              fragment: "fragment",
              queryParamsHandling: "queryParamsHandling",
              preserveFragment: "preserveFragment",
              skipLocationChange: "skipLocationChange",
              replaceUrl: "replaceUrl",
              state: "state",
            },
            features: [((So.ngInherit = !0), So)],
          })),
          fd);
      function md(e) {
        return "" === e || !!e;
      }
      var _d,
        kd,
        Cd,
        bd = function e() {
          _classCallCheck(this, e),
            (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new wd()),
            (this.attachRef = null);
        },
        wd = (function () {
          function e() {
            _classCallCheck(this, e), (this.contexts = new Map());
          }
          return (
            _createClass(e, [
              {
                key: "onChildOutletCreated",
                value: function (e, t) {
                  var n = this.getOrCreateContext(e);
                  (n.outlet = t), this.contexts.set(e, n);
                },
              },
              {
                key: "onChildOutletDestroyed",
                value: function (e) {
                  var t = this.getContext(e);
                  t && (t.outlet = null);
                },
              },
              {
                key: "onOutletDeactivated",
                value: function () {
                  var e = this.contexts;
                  return (this.contexts = new Map()), e;
                },
              },
              {
                key: "onOutletReAttached",
                value: function (e) {
                  this.contexts = e;
                },
              },
              {
                key: "getOrCreateContext",
                value: function (e) {
                  var t = this.getContext(e);
                  return t || ((t = new bd()), this.contexts.set(e, t)), t;
                },
              },
              {
                key: "getContext",
                value: function (e) {
                  return this.contexts.get(e) || null;
                },
              },
            ]),
            e
          );
        })(),
        Sd =
          (((_d = (function () {
            function e(t, n, r, i, o) {
              _classCallCheck(this, e),
                (this.parentContexts = t),
                (this.location = n),
                (this.resolver = r),
                (this.changeDetector = o),
                (this.activated = null),
                (this._activatedRoute = null),
                (this.activateEvents = new _a()),
                (this.deactivateEvents = new _a()),
                (this.name = i || "primary"),
                t.onChildOutletCreated(this.name, this);
            }
            return (
              _createClass(e, [
                {
                  key: "ngOnDestroy",
                  value: function () {
                    this.parentContexts.onChildOutletDestroyed(this.name);
                  },
                },
                {
                  key: "ngOnInit",
                  value: function () {
                    if (!this.activated) {
                      var e = this.parentContexts.getContext(this.name);
                      e &&
                        e.route &&
                        (e.attachRef
                          ? this.attach(e.attachRef, e.route)
                          : this.activateWith(e.route, e.resolver || null));
                    }
                  },
                },
                {
                  key: "detach",
                  value: function () {
                    if (!this.activated)
                      throw new Error("Outlet is not activated");
                    this.location.detach();
                    var e = this.activated;
                    return (
                      (this.activated = null), (this._activatedRoute = null), e
                    );
                  },
                },
                {
                  key: "attach",
                  value: function (e, t) {
                    (this.activated = e),
                      (this._activatedRoute = t),
                      this.location.insert(e.hostView);
                  },
                },
                {
                  key: "deactivate",
                  value: function () {
                    if (this.activated) {
                      var e = this.component;
                      this.activated.destroy(),
                        (this.activated = null),
                        (this._activatedRoute = null),
                        this.deactivateEvents.emit(e);
                    }
                  },
                },
                {
                  key: "activateWith",
                  value: function (e, t) {
                    if (this.isActivated)
                      throw new Error(
                        "Cannot activate an already activated outlet"
                      );
                    this._activatedRoute = e;
                    var n = (t = t || this.resolver).resolveComponentFactory(
                        e._futureSnapshot.routeConfig.component
                      ),
                      r = this.parentContexts.getOrCreateContext(
                        this.name
                      ).children,
                      i = new Ed(e, r, this.location.injector);
                    (this.activated = this.location.createComponent(
                      n,
                      this.location.length,
                      i
                    )),
                      this.changeDetector.markForCheck(),
                      this.activateEvents.emit(this.activated.instance);
                  },
                },
                {
                  key: "isActivated",
                  get: function () {
                    return !!this.activated;
                  },
                },
                {
                  key: "component",
                  get: function () {
                    if (!this.activated)
                      throw new Error("Outlet is not activated");
                    return this.activated.instance;
                  },
                },
                {
                  key: "activatedRoute",
                  get: function () {
                    if (!this.activated)
                      throw new Error("Outlet is not activated");
                    return this._activatedRoute;
                  },
                },
                {
                  key: "activatedRouteData",
                  get: function () {
                    return this._activatedRoute
                      ? this._activatedRoute.snapshot.data
                      : {};
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || _d)(io(wd), io(ta), io(Po), oo("name"), io(Pi));
          }),
          (_d.ɵdir = gt({
            type: _d,
            selectors: [["router-outlet"]],
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
            },
            exportAs: ["outlet"],
          })),
          _d),
        Ed = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.route = t),
              (this.childContexts = n),
              (this.parent = r);
          }
          return (
            _createClass(e, [
              {
                key: "get",
                value: function (e, t) {
                  return e === of
                    ? this.route
                    : e === wd
                    ? this.childContexts
                    : this.parent.get(e, t);
                },
              },
            ]),
            e
          );
        })(),
        Td = function e() {
          _classCallCheck(this, e);
        },
        Ad = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "preload",
                value: function (e, t) {
                  return Qu(null);
                },
              },
            ]),
            e
          );
        })(),
        xd =
          (((Cd = (function () {
            function e(t, n, r, i, o) {
              _classCallCheck(this, e),
                (this.router = t),
                (this.injector = i),
                (this.preloadingStrategy = o),
                (this.loader = new sd(
                  n,
                  r,
                  function (e) {
                    return t.triggerEvent(new sh(e));
                  },
                  function (e) {
                    return t.triggerEvent(new uh(e));
                  }
                ));
            }
            return (
              _createClass(e, [
                {
                  key: "setUpPreloading",
                  value: function () {
                    var e = this;
                    this.subscription = this.router.events
                      .pipe(
                        Zu(function (e) {
                          return e instanceof Xc;
                        }),
                        Ku(function () {
                          return e.preload();
                        })
                      )
                      .subscribe(function () {});
                  },
                },
                {
                  key: "preload",
                  value: function () {
                    var e = this.injector.get(et);
                    return this.processRoutes(e, this.router.config);
                  },
                },
                {
                  key: "ngOnDestroy",
                  value: function () {
                    this.subscription.unsubscribe();
                  },
                },
                {
                  key: "processRoutes",
                  value: function (e, t) {
                    var n = [],
                      r = !0,
                      i = !1,
                      o = void 0;
                    try {
                      for (
                        var a, s = t[Symbol.iterator]();
                        !(r = (a = s.next()).done);
                        r = !0
                      ) {
                        var u = a.value;
                        if (u.loadChildren && !u.canLoad && u._loadedConfig) {
                          var l = u._loadedConfig;
                          n.push(this.processRoutes(l.module, l.routes));
                        } else
                          u.loadChildren && !u.canLoad
                            ? n.push(this.preloadConfig(e, u))
                            : u.children &&
                              n.push(this.processRoutes(e, u.children));
                      }
                    } catch (c) {
                      (i = !0), (o = c);
                    } finally {
                      try {
                        r || null == s.return || s.return();
                      } finally {
                        if (i) throw o;
                      }
                    }
                    return q(n).pipe(
                      Z(),
                      V(function (e) {})
                    );
                  },
                },
                {
                  key: "preloadConfig",
                  value: function (e, t) {
                    var n = this;
                    return this.preloadingStrategy.preload(t, function () {
                      return n.loader.load(e.injector, t).pipe(
                        B(function (e) {
                          return (
                            (t._loadedConfig = e),
                            n.processRoutes(e.module, e.routes)
                          );
                        })
                      );
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || Cd)($e(pd), $e(cs), $e(Ua), $e(Bi), $e(Td));
          }),
          (Cd.ɵprov = de({ token: Cd, factory: Cd.ɵfac })),
          Cd),
        Pd =
          (((kd = (function () {
            function e(t, n) {
              var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              _classCallCheck(this, e),
                (this.router = t),
                (this.viewportScroller = n),
                (this.options = r),
                (this.lastId = 0),
                (this.lastSource = "imperative"),
                (this.restoredId = 0),
                (this.store = {}),
                (r.scrollPositionRestoration =
                  r.scrollPositionRestoration || "disabled"),
                (r.anchorScrolling = r.anchorScrolling || "disabled");
            }
            return (
              _createClass(e, [
                {
                  key: "init",
                  value: function () {
                    "disabled" !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.setHistoryScrollRestoration(
                        "manual"
                      ),
                      (this.routerEventsSubscription =
                        this.createScrollEvents()),
                      (this.scrollEventsSubscription =
                        this.consumeScrollEvents());
                  },
                },
                {
                  key: "createScrollEvents",
                  value: function () {
                    var e = this;
                    return this.router.events.subscribe(function (t) {
                      t instanceof Yc
                        ? ((e.store[e.lastId] =
                            e.viewportScroller.getScrollPosition()),
                          (e.lastSource = t.navigationTrigger),
                          (e.restoredId = t.restoredState
                            ? t.restoredState.navigationId
                            : 0))
                        : t instanceof Xc &&
                          ((e.lastId = t.id),
                          e.scheduleScrollEvent(
                            t,
                            e.router.parseUrl(t.urlAfterRedirects).fragment
                          ));
                    });
                  },
                },
                {
                  key: "consumeScrollEvents",
                  value: function () {
                    var e = this;
                    return this.router.events.subscribe(function (t) {
                      t instanceof dh &&
                        (t.position
                          ? "top" === e.options.scrollPositionRestoration
                            ? e.viewportScroller.scrollToPosition([0, 0])
                            : "enabled" ===
                                e.options.scrollPositionRestoration &&
                              e.viewportScroller.scrollToPosition(t.position)
                          : t.anchor && "enabled" === e.options.anchorScrolling
                          ? e.viewportScroller.scrollToAnchor(t.anchor)
                          : "disabled" !==
                              e.options.scrollPositionRestoration &&
                            e.viewportScroller.scrollToPosition([0, 0]));
                    });
                  },
                },
                {
                  key: "scheduleScrollEvent",
                  value: function (e, t) {
                    this.router.triggerEvent(
                      new dh(
                        e,
                        "popstate" === this.lastSource
                          ? this.store[this.restoredId]
                          : null,
                        t
                      )
                    );
                  },
                },
                {
                  key: "ngOnDestroy",
                  value: function () {
                    this.routerEventsSubscription &&
                      this.routerEventsSubscription.unsubscribe(),
                      this.scrollEventsSubscription &&
                        this.scrollEventsSubscription.unsubscribe();
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            ao();
          }),
          (kd.ɵdir = gt({ type: kd })),
          kd),
        Od = new He("ROUTER_CONFIGURATION"),
        Rd = new He("ROUTER_FORROOT_GUARD"),
        Id = [
          Hs,
          { provide: Fh, useClass: Lh },
          {
            provide: pd,
            useFactory: function (e, t, n, r, i, o, a, s) {
              var u =
                  arguments.length > 8 && void 0 !== arguments[8]
                    ? arguments[8]
                    : {},
                l = arguments.length > 9 ? arguments[9] : void 0,
                c = arguments.length > 10 ? arguments[10] : void 0,
                h = new pd(null, t, n, r, i, o, a, Th(s));
              if (
                (l && (h.urlHandlingStrategy = l),
                c && (h.routeReuseStrategy = c),
                u.errorHandler && (h.errorHandler = u.errorHandler),
                u.malformedUriErrorHandler &&
                  (h.malformedUriErrorHandler = u.malformedUriErrorHandler),
                u.enableTracing)
              ) {
                var f = _s();
                h.events.subscribe(function (e) {
                  f.logGroup("Router Event: ".concat(e.constructor.name)),
                    f.log(e.toString()),
                    f.log(e),
                    f.logGroupEnd();
                });
              }
              return (
                u.onSameUrlNavigation &&
                  (h.onSameUrlNavigation = u.onSameUrlNavigation),
                u.paramsInheritanceStrategy &&
                  (h.paramsInheritanceStrategy = u.paramsInheritanceStrategy),
                u.urlUpdateStrategy &&
                  (h.urlUpdateStrategy = u.urlUpdateStrategy),
                u.relativeLinkResolution &&
                  (h.relativeLinkResolution = u.relativeLinkResolution),
                h
              );
            },
            deps: [
              us,
              Fh,
              wd,
              Hs,
              Bi,
              cs,
              Ua,
              ad,
              Od,
              [
                (function () {
                  return function e() {
                    _classCallCheck(this, e);
                  };
                })(),
                new ue(),
              ],
              [
                (function () {
                  return function e() {
                    _classCallCheck(this, e);
                  };
                })(),
                new ue(),
              ],
            ],
          },
          wd,
          {
            provide: of,
            useFactory: function (e) {
              return e.routerState.root;
            },
            deps: [pd],
          },
          { provide: cs, useClass: ds },
          xd,
          Ad,
          (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, [
                {
                  key: "preload",
                  value: function (e, t) {
                    return t().pipe(
                      Vc(function () {
                        return Qu(null);
                      })
                    );
                  },
                },
              ]),
              e
            );
          })(),
          { provide: Od, useValue: { enableTracing: !1 } },
        ];
      function Nd() {
        return new ns("Router", pd);
      }
      var Dd,
        jd =
          (((Dd = (function () {
            function e(t, n) {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, null, [
                {
                  key: "forRoot",
                  value: function (t, n) {
                    return {
                      ngModule: e,
                      providers: [
                        Id,
                        Vd(t),
                        {
                          provide: Rd,
                          useFactory: Ud,
                          deps: [[pd, new ue(), new ce()]],
                        },
                        { provide: Od, useValue: n || {} },
                        {
                          provide: Ns,
                          useFactory: Ld,
                          deps: [bs, [new se(Us), new ue()], Od],
                        },
                        { provide: Pd, useFactory: Fd, deps: [pd, du, Od] },
                        {
                          provide: Td,
                          useExisting:
                            n && n.preloadingStrategy
                              ? n.preloadingStrategy
                              : Ad,
                        },
                        { provide: ns, multi: !0, useFactory: Nd },
                        [
                          Hd,
                          {
                            provide: ka,
                            multi: !0,
                            useFactory: zd,
                            deps: [Hd],
                          },
                          { provide: Qd, useFactory: qd, deps: [Hd] },
                          { provide: Aa, multi: !0, useExisting: Qd },
                        ],
                      ],
                    };
                  },
                },
                {
                  key: "forChild",
                  value: function (t) {
                    return { ngModule: e, providers: [Vd(t)] };
                  },
                },
              ]),
              e
            );
          })()).ɵmod = pt({ type: Dd })),
          (Dd.ɵinj = ve({
            factory: function (e) {
              return new (e || Dd)($e(Rd, 8), $e(pd, 8));
            },
          })),
          Dd);
      function Fd(e, t, n) {
        return n.scrollOffset && t.setOffset(n.scrollOffset), new Pd(e, t, n);
      }
      function Ld(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return n.useHash ? new Ms(e, t) : new Vs(e, t);
      }
      function Ud(e) {
        if (e)
          throw new Error(
            "RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead."
          );
        return "guarded";
      }
      function Vd(e) {
        return [
          { provide: Wi, multi: !0, useValue: e },
          { provide: ad, multi: !0, useValue: e },
        ];
      }
      var Md,
        Hd =
          (((Md = (function () {
            function e(t) {
              _classCallCheck(this, e),
                (this.injector = t),
                (this.initNavigation = !1),
                (this.resultOfPreactivationDone = new x());
            }
            return (
              _createClass(e, [
                {
                  key: "appInitializer",
                  value: function () {
                    var e = this;
                    return this.injector
                      .get(Es, Promise.resolve(null))
                      .then(function () {
                        var t = null,
                          n = new Promise(function (e) {
                            return (t = e);
                          }),
                          r = e.injector.get(pd),
                          i = e.injector.get(Od);
                        if (e.isLegacyDisabled(i) || e.isLegacyEnabled(i))
                          t(!0);
                        else if ("disabled" === i.initialNavigation)
                          r.setUpLocationChangeListener(), t(!0);
                        else {
                          if ("enabled" !== i.initialNavigation)
                            throw new Error(
                              "Invalid initialNavigation options: '".concat(
                                i.initialNavigation,
                                "'"
                              )
                            );
                          (r.hooks.afterPreactivation = function () {
                            return e.initNavigation
                              ? Qu(null)
                              : ((e.initNavigation = !0),
                                t(!0),
                                e.resultOfPreactivationDone);
                          }),
                            r.initialNavigation();
                        }
                        return n;
                      });
                  },
                },
                {
                  key: "bootstrapListener",
                  value: function (e) {
                    var t = this.injector.get(Od),
                      n = this.injector.get(xd),
                      r = this.injector.get(Pd),
                      i = this.injector.get(pd),
                      o = this.injector.get(us);
                    e === o.components[0] &&
                      (this.isLegacyEnabled(t)
                        ? i.initialNavigation()
                        : this.isLegacyDisabled(t) &&
                          i.setUpLocationChangeListener(),
                      n.setUpPreloading(),
                      r.init(),
                      i.resetRootComponentType(o.componentTypes[0]),
                      this.resultOfPreactivationDone.next(null),
                      this.resultOfPreactivationDone.complete());
                  },
                },
                {
                  key: "isLegacyEnabled",
                  value: function (e) {
                    return (
                      "legacy_enabled" === e.initialNavigation ||
                      !0 === e.initialNavigation ||
                      void 0 === e.initialNavigation
                    );
                  },
                },
                {
                  key: "isLegacyDisabled",
                  value: function (e) {
                    return (
                      "legacy_disabled" === e.initialNavigation ||
                      !1 === e.initialNavigation
                    );
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || Md)($e(Bi));
          }),
          (Md.ɵprov = de({ token: Md, factory: Md.ɵfac })),
          Md);
      function zd(e) {
        return e.appInitializer.bind(e);
      }
      function qd(e) {
        return e.bootstrapListener.bind(e);
      }
      var Bd,
        Wd,
        Qd = new He("Router Initializer"),
        Kd =
          (((Wd = (function () {
            function e(t) {
              _classCallCheck(this, e), (this.swUpdate = t);
            }
            return (
              _createClass(e, [
                {
                  key: "ngOnInit",
                  value: function () {
                    this.swUpdate.isEnabled &&
                      this.swUpdate.available.subscribe(function () {
                        confirm("New version available. Load New Version?") &&
                          window.location.reload();
                      });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || Wd)(io(yc));
          }),
          (Wd.ɵcmp = ht({
            type: Wd,
            selectors: [["app-root"]],
            decls: 14,
            vars: 0,
            consts: [
              [1, "l-header"],
              [1, "top-menu", "disable-link-styles"],
              [1, "logo-small-container"],
              [1, "v-center-block-parent"],
              [
                "src",
                "/pruebaRepo/assets/main-page-logo-small-hat.png",
                1,
                "v-center-block",
                "logo-small",
                "angular-university-logo",
              ],
              ["routerLink", "/lessons"],
              [1, "course-header"],
              [
                "src",
                "/pruebaRepo/assets/angular-pwa-course.png",
                1,
                "course-logo",
                "pwa-logo",
              ],
            ],
            template: function (e, t) {
              1 & e &&
                (lo(0, "header", 0),
                lo(1, "ul", 1),
                lo(2, "li", 2),
                lo(3, "a", 3),
                ho(4, "img", 4),
                co(),
                co(),
                lo(5, "li"),
                lo(6, "a", 5),
                mo(7, "Lessons"),
                co(),
                co(),
                co(),
                co(),
                lo(8, "main"),
                lo(9, "div", 6),
                lo(10, "h3"),
                mo(11, "Angular PWA Course"),
                co(),
                ho(12, "img", 7),
                co(),
                ho(13, "router-outlet"),
                co());
            },
            directives: [gd, Sd],
            styles: [
              ".l-header[_ngcontent-%COMP%]{display:block}main[_ngcontent-%COMP%]{padding-top:50px;margin:0 auto;width:300px}.course-header[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:30px}.course-header[_ngcontent-%COMP%], .course-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center}.pwa-logo[_ngcontent-%COMP%]{height:140px}  body{background:#fff}",
            ],
          })),
          Wd),
        Zd =
          (((Bd = (function () {
            function e(t) {
              _classCallCheck(this, e), (this.http = t);
            }
            return (
              _createClass(e, [
                {
                  key: "loadAllLessons",
                  value: function () {
                    return this.http.get("/api/lessons").pipe(
                      V(function (e) {
                        return e.lessons;
                      })
                    );
                  },
                },
                {
                  key: "findLessonById",
                  value: function (e) {
                    return this.http.get("/api/lessons/" + e);
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || Bd)($e(bl));
          }),
          (Bd.ɵprov = de({ token: Bd, factory: Bd.ɵfac })),
          Bd);
      function Gd(e, t) {
        return new b(function (n) {
          var r = e.length;
          if (0 !== r)
            for (
              var i = new Array(r),
                o = 0,
                a = 0,
                s = function (s) {
                  var u = q(e[s]),
                    l = !1;
                  n.add(
                    u.subscribe({
                      next: function (e) {
                        l || ((l = !0), a++), (i[s] = e);
                      },
                      error: function (e) {
                        return n.error(e);
                      },
                      complete: function () {
                        (++o !== r && l) ||
                          (a === r &&
                            n.next(
                              t
                                ? t.reduce(function (e, t, n) {
                                    return (e[t] = i[n]), e;
                                  }, {})
                                : i
                            ),
                          n.complete());
                      },
                    })
                  );
                },
                u = 0;
              u < r;
              u++
            )
              s(u);
          else n.complete();
        });
      }
      function $d(e) {
        return null == e || 0 === e.length;
      }
      var Jd =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        Yd = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, null, [
              {
                key: "min",
                value: function (e) {
                  return function (t) {
                    if ($d(t.value) || $d(e)) return null;
                    var n = parseFloat(t.value);
                    return !isNaN(n) && n < e
                      ? { min: { min: e, actual: t.value } }
                      : null;
                  };
                },
              },
              {
                key: "max",
                value: function (e) {
                  return function (t) {
                    if ($d(t.value) || $d(e)) return null;
                    var n = parseFloat(t.value);
                    return !isNaN(n) && n > e
                      ? { max: { max: e, actual: t.value } }
                      : null;
                  };
                },
              },
              {
                key: "required",
                value: function (e) {
                  return $d(e.value) ? { required: !0 } : null;
                },
              },
              {
                key: "requiredTrue",
                value: function (e) {
                  return !0 === e.value ? null : { required: !0 };
                },
              },
              {
                key: "email",
                value: function (e) {
                  return $d(e.value)
                    ? null
                    : Jd.test(e.value)
                    ? null
                    : { email: !0 };
                },
              },
              {
                key: "minLength",
                value: function (e) {
                  return function (t) {
                    if ($d(t.value)) return null;
                    var n = t.value ? t.value.length : 0;
                    return n < e
                      ? { minlength: { requiredLength: e, actualLength: n } }
                      : null;
                  };
                },
              },
              {
                key: "maxLength",
                value: function (e) {
                  return function (t) {
                    var n = t.value ? t.value.length : 0;
                    return n > e
                      ? { maxlength: { requiredLength: e, actualLength: n } }
                      : null;
                  };
                },
              },
              {
                key: "pattern",
                value: function (t) {
                  return t
                    ? ("string" == typeof t
                        ? ((r = ""),
                          "^" !== t.charAt(0) && (r += "^"),
                          (r += t),
                          "$" !== t.charAt(t.length - 1) && (r += "$"),
                          (n = new RegExp(r)))
                        : ((r = t.toString()), (n = t)),
                      function (e) {
                        if ($d(e.value)) return null;
                        var t = e.value;
                        return n.test(t)
                          ? null
                          : { pattern: { requiredPattern: r, actualValue: t } };
                      })
                    : e.nullValidator;
                  var n, r;
                },
              },
              {
                key: "nullValidator",
                value: function (e) {
                  return null;
                },
              },
              {
                key: "compose",
                value: function (e) {
                  if (!e) return null;
                  var t = e.filter(Xd);
                  return 0 == t.length
                    ? null
                    : function (e) {
                        return tv(
                          (function (e, t) {
                            return t.map(function (t) {
                              return t(e);
                            });
                          })(e, t)
                        );
                      };
                },
              },
              {
                key: "composeAsync",
                value: function (e) {
                  if (!e) return null;
                  var t = e.filter(Xd);
                  return 0 == t.length
                    ? null
                    : function (e) {
                        return (function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          if (1 === t.length) {
                            var r = t[0];
                            if (u(r)) return Gd(r, null);
                            if (
                              l(r) &&
                              Object.getPrototypeOf(r) === Object.prototype
                            ) {
                              var i = Object.keys(r);
                              return Gd(
                                i.map(function (e) {
                                  return r[e];
                                }),
                                i
                              );
                            }
                          }
                          if ("function" == typeof t[t.length - 1]) {
                            var o = t.pop();
                            return Gd(
                              (t = 1 === t.length && u(t[0]) ? t[0] : t),
                              null
                            ).pipe(
                              V(function (e) {
                                return o.apply(void 0, _toConsumableArray(e));
                              })
                            );
                          }
                          return Gd(t, null);
                        })(
                          (function (e, t) {
                            return t.map(function (t) {
                              return t(e);
                            });
                          })(e, t).map(ev)
                        ).pipe(V(tv));
                      };
                },
              },
            ]),
            e
          );
        })();
      function Xd(e) {
        return null != e;
      }
      function ev(e) {
        var t = fo(e) ? q(e) : e;
        if (!vo(t))
          throw new Error(
            "Expected validator to return Promise or Observable."
          );
        return t;
      }
      function tv(e) {
        var t = {};
        return (
          e.forEach(function (e) {
            t = null != e ? Object.assign(Object.assign({}, t), e) : t;
          }),
          0 === Object.keys(t).length ? null : t
        );
      }
      function nv(e) {
        return e.validate
          ? function (t) {
              return e.validate(t);
            }
          : e;
      }
      function rv(e) {
        return e.validate
          ? function (t) {
              return e.validate(t);
            }
          : e;
      }
      var iv,
        ov =
          (((iv = (function () {
            function e() {
              _classCallCheck(this, e), (this._accessors = []);
            }
            return (
              _createClass(e, [
                {
                  key: "add",
                  value: function (e, t) {
                    this._accessors.push([e, t]);
                  },
                },
                {
                  key: "remove",
                  value: function (e) {
                    for (var t = this._accessors.length - 1; t >= 0; --t)
                      if (this._accessors[t][1] === e)
                        return void this._accessors.splice(t, 1);
                  },
                },
                {
                  key: "select",
                  value: function (e) {
                    var t = this;
                    this._accessors.forEach(function (n) {
                      t._isSameGroup(n, e) &&
                        n[1] !== e &&
                        n[1].fireUncheck(e.value);
                    });
                  },
                },
                {
                  key: "_isSameGroup",
                  value: function (e, t) {
                    return (
                      !!e[0].control &&
                      e[0]._parent === t._control._parent &&
                      e[1].name === t.name
                    );
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || iv)();
          }),
          (iv.ɵprov = de({ token: iv, factory: iv.ɵfac })),
          iv);
      function av(e) {
        var t,
          n = uv(e) ? e.validators : e;
        return Array.isArray(n)
          ? null != (t = n)
            ? Yd.compose(t.map(nv))
            : null
          : n || null;
      }
      function sv(e, t) {
        var n,
          r = uv(t) ? t.asyncValidators : e;
        return Array.isArray(r)
          ? null != (n = r)
            ? Yd.composeAsync(n.map(rv))
            : null
          : r || null;
      }
      function uv(e) {
        return null != e && !Array.isArray(e) && "object" == typeof e;
      }
      var lv,
        cv,
        hv,
        fv = (function () {
          function e(t, n) {
            _classCallCheck(this, e),
              (this.validator = t),
              (this.asyncValidator = n),
              (this._onCollectionChange = function () {}),
              (this.pristine = !0),
              (this.touched = !1),
              (this._onDisabledChange = []);
          }
          return (
            _createClass(e, [
              {
                key: "setValidators",
                value: function (e) {
                  this.validator = av(e);
                },
              },
              {
                key: "setAsyncValidators",
                value: function (e) {
                  this.asyncValidator = sv(e);
                },
              },
              {
                key: "clearValidators",
                value: function () {
                  this.validator = null;
                },
              },
              {
                key: "clearAsyncValidators",
                value: function () {
                  this.asyncValidator = null;
                },
              },
              {
                key: "markAsTouched",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (this.touched = !0),
                    this._parent &&
                      !e.onlySelf &&
                      this._parent.markAsTouched(e);
                },
              },
              {
                key: "markAllAsTouched",
                value: function () {
                  this.markAsTouched({ onlySelf: !0 }),
                    this._forEachChild(function (e) {
                      return e.markAllAsTouched();
                    });
                },
              },
              {
                key: "markAsUntouched",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (this.touched = !1),
                    (this._pendingTouched = !1),
                    this._forEachChild(function (e) {
                      e.markAsUntouched({ onlySelf: !0 });
                    }),
                    this._parent &&
                      !e.onlySelf &&
                      this._parent._updateTouched(e);
                },
              },
              {
                key: "markAsDirty",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (this.pristine = !1),
                    this._parent && !e.onlySelf && this._parent.markAsDirty(e);
                },
              },
              {
                key: "markAsPristine",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (this.pristine = !0),
                    (this._pendingDirty = !1),
                    this._forEachChild(function (e) {
                      e.markAsPristine({ onlySelf: !0 });
                    }),
                    this._parent &&
                      !e.onlySelf &&
                      this._parent._updatePristine(e);
                },
              },
              {
                key: "markAsPending",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (this.status = "PENDING"),
                    !1 !== e.emitEvent && this.statusChanges.emit(this.status),
                    this._parent &&
                      !e.onlySelf &&
                      this._parent.markAsPending(e);
                },
              },
              {
                key: "disable",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = this._parentMarkedDirty(e.onlySelf);
                  (this.status = "DISABLED"),
                    (this.errors = null),
                    this._forEachChild(function (t) {
                      t.disable(
                        Object.assign(Object.assign({}, e), { onlySelf: !0 })
                      );
                    }),
                    this._updateValue(),
                    !1 !== e.emitEvent &&
                      (this.valueChanges.emit(this.value),
                      this.statusChanges.emit(this.status)),
                    this._updateAncestors(
                      Object.assign(Object.assign({}, e), {
                        skipPristineCheck: t,
                      })
                    ),
                    this._onDisabledChange.forEach(function (e) {
                      return e(!0);
                    });
                },
              },
              {
                key: "enable",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = this._parentMarkedDirty(e.onlySelf);
                  (this.status = "VALID"),
                    this._forEachChild(function (t) {
                      t.enable(
                        Object.assign(Object.assign({}, e), { onlySelf: !0 })
                      );
                    }),
                    this.updateValueAndValidity({
                      onlySelf: !0,
                      emitEvent: e.emitEvent,
                    }),
                    this._updateAncestors(
                      Object.assign(Object.assign({}, e), {
                        skipPristineCheck: t,
                      })
                    ),
                    this._onDisabledChange.forEach(function (e) {
                      return e(!1);
                    });
                },
              },
              {
                key: "_updateAncestors",
                value: function (e) {
                  this._parent &&
                    !e.onlySelf &&
                    (this._parent.updateValueAndValidity(e),
                    e.skipPristineCheck || this._parent._updatePristine(),
                    this._parent._updateTouched());
                },
              },
              {
                key: "setParent",
                value: function (e) {
                  this._parent = e;
                },
              },
              {
                key: "updateValueAndValidity",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  this._setInitialStatus(),
                    this._updateValue(),
                    this.enabled &&
                      (this._cancelExistingSubscription(),
                      (this.errors = this._runValidator()),
                      (this.status = this._calculateStatus()),
                      ("VALID" !== this.status && "PENDING" !== this.status) ||
                        this._runAsyncValidator(e.emitEvent)),
                    !1 !== e.emitEvent &&
                      (this.valueChanges.emit(this.value),
                      this.statusChanges.emit(this.status)),
                    this._parent &&
                      !e.onlySelf &&
                      this._parent.updateValueAndValidity(e);
                },
              },
              {
                key: "_updateTreeValidity",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : { emitEvent: !0 };
                  this._forEachChild(function (t) {
                    return t._updateTreeValidity(e);
                  }),
                    this.updateValueAndValidity({
                      onlySelf: !0,
                      emitEvent: e.emitEvent,
                    });
                },
              },
              {
                key: "_setInitialStatus",
                value: function () {
                  this.status = this._allControlsDisabled()
                    ? "DISABLED"
                    : "VALID";
                },
              },
              {
                key: "_runValidator",
                value: function () {
                  return this.validator ? this.validator(this) : null;
                },
              },
              {
                key: "_runAsyncValidator",
                value: function (e) {
                  var t = this;
                  if (this.asyncValidator) {
                    this.status = "PENDING";
                    var n = ev(this.asyncValidator(this));
                    this._asyncValidationSubscription = n.subscribe(function (
                      n
                    ) {
                      return t.setErrors(n, { emitEvent: e });
                    });
                  }
                },
              },
              {
                key: "_cancelExistingSubscription",
                value: function () {
                  this._asyncValidationSubscription &&
                    this._asyncValidationSubscription.unsubscribe();
                },
              },
              {
                key: "setErrors",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  (this.errors = e),
                    this._updateControlsErrors(!1 !== t.emitEvent);
                },
              },
              {
                key: "get",
                value: function (e) {
                  return (function (e, t, n) {
                    if (null == t) return null;
                    if (
                      (Array.isArray(t) || (t = t.split(".")),
                      Array.isArray(t) && 0 === t.length)
                    )
                      return null;
                    var r = e;
                    return (
                      t.forEach(function (e) {
                        r =
                          r instanceof vv
                            ? r.controls.hasOwnProperty(e)
                              ? r.controls[e]
                              : null
                            : (r instanceof pv && r.at(e)) || null;
                      }),
                      r
                    );
                  })(this, e);
                },
              },
              {
                key: "getError",
                value: function (e, t) {
                  var n = t ? this.get(t) : this;
                  return n && n.errors ? n.errors[e] : null;
                },
              },
              {
                key: "hasError",
                value: function (e, t) {
                  return !!this.getError(e, t);
                },
              },
              {
                key: "_updateControlsErrors",
                value: function (e) {
                  (this.status = this._calculateStatus()),
                    e && this.statusChanges.emit(this.status),
                    this._parent && this._parent._updateControlsErrors(e);
                },
              },
              {
                key: "_initObservables",
                value: function () {
                  (this.valueChanges = new _a()),
                    (this.statusChanges = new _a());
                },
              },
              {
                key: "_calculateStatus",
                value: function () {
                  return this._allControlsDisabled()
                    ? "DISABLED"
                    : this.errors
                    ? "INVALID"
                    : this._anyControlsHaveStatus("PENDING")
                    ? "PENDING"
                    : this._anyControlsHaveStatus("INVALID")
                    ? "INVALID"
                    : "VALID";
                },
              },
              {
                key: "_anyControlsHaveStatus",
                value: function (e) {
                  return this._anyControls(function (t) {
                    return t.status === e;
                  });
                },
              },
              {
                key: "_anyControlsDirty",
                value: function () {
                  return this._anyControls(function (e) {
                    return e.dirty;
                  });
                },
              },
              {
                key: "_anyControlsTouched",
                value: function () {
                  return this._anyControls(function (e) {
                    return e.touched;
                  });
                },
              },
              {
                key: "_updatePristine",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (this.pristine = !this._anyControlsDirty()),
                    this._parent &&
                      !e.onlySelf &&
                      this._parent._updatePristine(e);
                },
              },
              {
                key: "_updateTouched",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (this.touched = this._anyControlsTouched()),
                    this._parent &&
                      !e.onlySelf &&
                      this._parent._updateTouched(e);
                },
              },
              {
                key: "_isBoxedValue",
                value: function (e) {
                  return (
                    "object" == typeof e &&
                    null !== e &&
                    2 === Object.keys(e).length &&
                    "value" in e &&
                    "disabled" in e
                  );
                },
              },
              {
                key: "_registerOnCollectionChange",
                value: function (e) {
                  this._onCollectionChange = e;
                },
              },
              {
                key: "_setUpdateStrategy",
                value: function (e) {
                  uv(e) && null != e.updateOn && (this._updateOn = e.updateOn);
                },
              },
              {
                key: "_parentMarkedDirty",
                value: function (e) {
                  return (
                    !e &&
                    this._parent &&
                    this._parent.dirty &&
                    !this._parent._anyControlsDirty()
                  );
                },
              },
              {
                key: "parent",
                get: function () {
                  return this._parent;
                },
              },
              {
                key: "valid",
                get: function () {
                  return "VALID" === this.status;
                },
              },
              {
                key: "invalid",
                get: function () {
                  return "INVALID" === this.status;
                },
              },
              {
                key: "pending",
                get: function () {
                  return "PENDING" == this.status;
                },
              },
              {
                key: "disabled",
                get: function () {
                  return "DISABLED" === this.status;
                },
              },
              {
                key: "enabled",
                get: function () {
                  return "DISABLED" !== this.status;
                },
              },
              {
                key: "dirty",
                get: function () {
                  return !this.pristine;
                },
              },
              {
                key: "untouched",
                get: function () {
                  return !this.touched;
                },
              },
              {
                key: "updateOn",
                get: function () {
                  return this._updateOn
                    ? this._updateOn
                    : this.parent
                    ? this.parent.updateOn
                    : "change";
                },
              },
              {
                key: "root",
                get: function () {
                  for (var e = this; e._parent; ) e = e._parent;
                  return e;
                },
              },
            ]),
            e
          );
        })(),
        dv = (function (e) {
          function t() {
            var e,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              r = arguments.length > 1 ? arguments[1] : void 0,
              i = arguments.length > 2 ? arguments[2] : void 0;
            return (
              _classCallCheck(this, t),
              ((e = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, av(r), sv(i, r))
              ))._onChange = []),
              e._applyFormState(n),
              e._setUpdateStrategy(r),
              e.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
              e._initObservables(),
              e
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "setValue",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  (this.value = this._pendingValue = e),
                    this._onChange.length &&
                      !1 !== n.emitModelToViewChange &&
                      this._onChange.forEach(function (e) {
                        return e(t.value, !1 !== n.emitViewToModelChange);
                      }),
                    this.updateValueAndValidity(n);
                },
              },
              {
                key: "patchValue",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  this.setValue(e, t);
                },
              },
              {
                key: "reset",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  this._applyFormState(e),
                    this.markAsPristine(t),
                    this.markAsUntouched(t),
                    this.setValue(this.value, t),
                    (this._pendingChange = !1);
                },
              },
              { key: "_updateValue", value: function () {} },
              {
                key: "_anyControls",
                value: function (e) {
                  return !1;
                },
              },
              {
                key: "_allControlsDisabled",
                value: function () {
                  return this.disabled;
                },
              },
              {
                key: "registerOnChange",
                value: function (e) {
                  this._onChange.push(e);
                },
              },
              {
                key: "_clearChangeFns",
                value: function () {
                  (this._onChange = []),
                    (this._onDisabledChange = []),
                    (this._onCollectionChange = function () {});
                },
              },
              {
                key: "registerOnDisabledChange",
                value: function (e) {
                  this._onDisabledChange.push(e);
                },
              },
              { key: "_forEachChild", value: function (e) {} },
              {
                key: "_syncPendingControls",
                value: function () {
                  return !(
                    "submit" !== this.updateOn ||
                    (this._pendingDirty && this.markAsDirty(),
                    this._pendingTouched && this.markAsTouched(),
                    !this._pendingChange) ||
                    (this.setValue(this._pendingValue, {
                      onlySelf: !0,
                      emitModelToViewChange: !1,
                    }),
                    0)
                  );
                },
              },
              {
                key: "_applyFormState",
                value: function (e) {
                  this._isBoxedValue(e)
                    ? ((this.value = this._pendingValue = e.value),
                      e.disabled
                        ? this.disable({ onlySelf: !0, emitEvent: !1 })
                        : this.enable({ onlySelf: !0, emitEvent: !1 }))
                    : (this.value = this._pendingValue = e);
                },
              },
            ]),
            t
          );
        })(fv),
        vv = (function (e) {
          function t(e, n, r) {
            var i;
            return (
              _classCallCheck(this, t),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, av(n), sv(r, n))
              )).controls = e),
              i._initObservables(),
              i._setUpdateStrategy(n),
              i._setUpControls(),
              i.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
              i
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "registerControl",
                value: function (e, t) {
                  return this.controls[e]
                    ? this.controls[e]
                    : ((this.controls[e] = t),
                      t.setParent(this),
                      t._registerOnCollectionChange(this._onCollectionChange),
                      t);
                },
              },
              {
                key: "addControl",
                value: function (e, t) {
                  this.registerControl(e, t),
                    this.updateValueAndValidity(),
                    this._onCollectionChange();
                },
              },
              {
                key: "removeControl",
                value: function (e) {
                  this.controls[e] &&
                    this.controls[e]._registerOnCollectionChange(
                      function () {}
                    ),
                    delete this.controls[e],
                    this.updateValueAndValidity(),
                    this._onCollectionChange();
                },
              },
              {
                key: "setControl",
                value: function (e, t) {
                  this.controls[e] &&
                    this.controls[e]._registerOnCollectionChange(
                      function () {}
                    ),
                    delete this.controls[e],
                    t && this.registerControl(e, t),
                    this.updateValueAndValidity(),
                    this._onCollectionChange();
                },
              },
              {
                key: "contains",
                value: function (e) {
                  return (
                    this.controls.hasOwnProperty(e) && this.controls[e].enabled
                  );
                },
              },
              {
                key: "setValue",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  this._checkAllValuesPresent(e),
                    Object.keys(e).forEach(function (r) {
                      t._throwIfControlMissing(r),
                        t.controls[r].setValue(e[r], {
                          onlySelf: !0,
                          emitEvent: n.emitEvent,
                        });
                    }),
                    this.updateValueAndValidity(n);
                },
              },
              {
                key: "patchValue",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  Object.keys(e).forEach(function (r) {
                    t.controls[r] &&
                      t.controls[r].patchValue(e[r], {
                        onlySelf: !0,
                        emitEvent: n.emitEvent,
                      });
                  }),
                    this.updateValueAndValidity(n);
                },
              },
              {
                key: "reset",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  this._forEachChild(function (n, r) {
                    n.reset(e[r], { onlySelf: !0, emitEvent: t.emitEvent });
                  }),
                    this._updatePristine(t),
                    this._updateTouched(t),
                    this.updateValueAndValidity(t);
                },
              },
              {
                key: "getRawValue",
                value: function () {
                  return this._reduceChildren({}, function (e, t, n) {
                    return (
                      (e[n] = t instanceof dv ? t.value : t.getRawValue()), e
                    );
                  });
                },
              },
              {
                key: "_syncPendingControls",
                value: function () {
                  var e = this._reduceChildren(!1, function (e, t) {
                    return !!t._syncPendingControls() || e;
                  });
                  return e && this.updateValueAndValidity({ onlySelf: !0 }), e;
                },
              },
              {
                key: "_throwIfControlMissing",
                value: function (e) {
                  if (!Object.keys(this.controls).length)
                    throw new Error(
                      "\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
                    );
                  if (!this.controls[e])
                    throw new Error(
                      "Cannot find form control with name: ".concat(e, ".")
                    );
                },
              },
              {
                key: "_forEachChild",
                value: function (e) {
                  var t = this;
                  Object.keys(this.controls).forEach(function (n) {
                    return e(t.controls[n], n);
                  });
                },
              },
              {
                key: "_setUpControls",
                value: function () {
                  var e = this;
                  this._forEachChild(function (t) {
                    t.setParent(e),
                      t._registerOnCollectionChange(e._onCollectionChange);
                  });
                },
              },
              {
                key: "_updateValue",
                value: function () {
                  this.value = this._reduceValue();
                },
              },
              {
                key: "_anyControls",
                value: function (e) {
                  var t = this,
                    n = !1;
                  return (
                    this._forEachChild(function (r, i) {
                      n = n || (t.contains(i) && e(r));
                    }),
                    n
                  );
                },
              },
              {
                key: "_reduceValue",
                value: function () {
                  var e = this;
                  return this._reduceChildren({}, function (t, n, r) {
                    return (n.enabled || e.disabled) && (t[r] = n.value), t;
                  });
                },
              },
              {
                key: "_reduceChildren",
                value: function (e, t) {
                  var n = e;
                  return (
                    this._forEachChild(function (e, r) {
                      n = t(n, e, r);
                    }),
                    n
                  );
                },
              },
              {
                key: "_allControlsDisabled",
                value: function () {
                  for (
                    var e = 0, t = Object.keys(this.controls);
                    e < t.length;
                    e++
                  ) {
                    var n = t[e];
                    if (this.controls[n].enabled) return !1;
                  }
                  return Object.keys(this.controls).length > 0 || this.disabled;
                },
              },
              {
                key: "_checkAllValuesPresent",
                value: function (e) {
                  this._forEachChild(function (t, n) {
                    if (void 0 === e[n])
                      throw new Error(
                        "Must supply a value for form control with name: '".concat(
                          n,
                          "'."
                        )
                      );
                  });
                },
              },
            ]),
            t
          );
        })(fv),
        pv = (function (e) {
          function t(e, n, r) {
            var i;
            return (
              _classCallCheck(this, t),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, av(n), sv(r, n))
              )).controls = e),
              i._initObservables(),
              i._setUpdateStrategy(n),
              i._setUpControls(),
              i.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
              i
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "at",
                value: function (e) {
                  return this.controls[e];
                },
              },
              {
                key: "push",
                value: function (e) {
                  this.controls.push(e),
                    this._registerControl(e),
                    this.updateValueAndValidity(),
                    this._onCollectionChange();
                },
              },
              {
                key: "insert",
                value: function (e, t) {
                  this.controls.splice(e, 0, t),
                    this._registerControl(t),
                    this.updateValueAndValidity();
                },
              },
              {
                key: "removeAt",
                value: function (e) {
                  this.controls[e] &&
                    this.controls[e]._registerOnCollectionChange(
                      function () {}
                    ),
                    this.controls.splice(e, 1),
                    this.updateValueAndValidity();
                },
              },
              {
                key: "setControl",
                value: function (e, t) {
                  this.controls[e] &&
                    this.controls[e]._registerOnCollectionChange(
                      function () {}
                    ),
                    this.controls.splice(e, 1),
                    t &&
                      (this.controls.splice(e, 0, t), this._registerControl(t)),
                    this.updateValueAndValidity(),
                    this._onCollectionChange();
                },
              },
              {
                key: "setValue",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  this._checkAllValuesPresent(e),
                    e.forEach(function (e, r) {
                      t._throwIfControlMissing(r),
                        t
                          .at(r)
                          .setValue(e, {
                            onlySelf: !0,
                            emitEvent: n.emitEvent,
                          });
                    }),
                    this.updateValueAndValidity(n);
                },
              },
              {
                key: "patchValue",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  e.forEach(function (e, r) {
                    t.at(r) &&
                      t
                        .at(r)
                        .patchValue(e, {
                          onlySelf: !0,
                          emitEvent: n.emitEvent,
                        });
                  }),
                    this.updateValueAndValidity(n);
                },
              },
              {
                key: "reset",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  this._forEachChild(function (n, r) {
                    n.reset(e[r], { onlySelf: !0, emitEvent: t.emitEvent });
                  }),
                    this._updatePristine(t),
                    this._updateTouched(t),
                    this.updateValueAndValidity(t);
                },
              },
              {
                key: "getRawValue",
                value: function () {
                  return this.controls.map(function (e) {
                    return e instanceof dv ? e.value : e.getRawValue();
                  });
                },
              },
              {
                key: "clear",
                value: function () {
                  this.controls.length < 1 ||
                    (this._forEachChild(function (e) {
                      return e._registerOnCollectionChange(function () {});
                    }),
                    this.controls.splice(0),
                    this.updateValueAndValidity());
                },
              },
              {
                key: "_syncPendingControls",
                value: function () {
                  var e = this.controls.reduce(function (e, t) {
                    return !!t._syncPendingControls() || e;
                  }, !1);
                  return e && this.updateValueAndValidity({ onlySelf: !0 }), e;
                },
              },
              {
                key: "_throwIfControlMissing",
                value: function (e) {
                  if (!this.controls.length)
                    throw new Error(
                      "\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
                    );
                  if (!this.at(e))
                    throw new Error(
                      "Cannot find form control at index ".concat(e)
                    );
                },
              },
              {
                key: "_forEachChild",
                value: function (e) {
                  this.controls.forEach(function (t, n) {
                    e(t, n);
                  });
                },
              },
              {
                key: "_updateValue",
                value: function () {
                  var e = this;
                  this.value = this.controls
                    .filter(function (t) {
                      return t.enabled || e.disabled;
                    })
                    .map(function (e) {
                      return e.value;
                    });
                },
              },
              {
                key: "_anyControls",
                value: function (e) {
                  return this.controls.some(function (t) {
                    return t.enabled && e(t);
                  });
                },
              },
              {
                key: "_setUpControls",
                value: function () {
                  var e = this;
                  this._forEachChild(function (t) {
                    return e._registerControl(t);
                  });
                },
              },
              {
                key: "_checkAllValuesPresent",
                value: function (e) {
                  this._forEachChild(function (t, n) {
                    if (void 0 === e[n])
                      throw new Error(
                        "Must supply a value for form control at index: ".concat(
                          n,
                          "."
                        )
                      );
                  });
                },
              },
              {
                key: "_allControlsDisabled",
                value: function () {
                  var e = !0,
                    t = !1,
                    n = void 0;
                  try {
                    for (
                      var r, i = this.controls[Symbol.iterator]();
                      !(e = (r = i.next()).done);
                      e = !0
                    ) {
                      if (r.value.enabled) return !1;
                    }
                  } catch (o) {
                    (t = !0), (n = o);
                  } finally {
                    try {
                      e || null == i.return || i.return();
                    } finally {
                      if (t) throw n;
                    }
                  }
                  return this.controls.length > 0 || this.disabled;
                },
              },
              {
                key: "_registerControl",
                value: function (e) {
                  e.setParent(this),
                    e._registerOnCollectionChange(this._onCollectionChange);
                },
              },
              {
                key: "length",
                get: function () {
                  return this.controls.length;
                },
              },
            ]),
            t
          );
        })(fv),
        yv = new He("NgModelWithFormControlWarning"),
        gv =
          (((hv = function e() {
            _classCallCheck(this, e);
          }).ɵmod = pt({ type: hv })),
          (hv.ɵinj = ve({
            factory: function (e) {
              return new (e || hv)();
            },
          })),
          hv),
        mv =
          (((cv = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, [
                {
                  key: "group",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      n = this._reduceControls(e),
                      r = null,
                      i = null,
                      o = void 0;
                    return (
                      null != t &&
                        ((function (e) {
                          return (
                            void 0 !== e.asyncValidators ||
                            void 0 !== e.validators ||
                            void 0 !== e.updateOn
                          );
                        })(t)
                          ? ((r = null != t.validators ? t.validators : null),
                            (i =
                              null != t.asyncValidators
                                ? t.asyncValidators
                                : null),
                            (o = null != t.updateOn ? t.updateOn : void 0))
                          : ((r = null != t.validator ? t.validator : null),
                            (i =
                              null != t.asyncValidator
                                ? t.asyncValidator
                                : null))),
                      new vv(n, {
                        asyncValidators: i,
                        updateOn: o,
                        validators: r,
                      })
                    );
                  },
                },
                {
                  key: "control",
                  value: function (e, t, n) {
                    return new dv(e, t, n);
                  },
                },
                {
                  key: "array",
                  value: function (e, t, n) {
                    var r = this,
                      i = e.map(function (e) {
                        return r._createControl(e);
                      });
                    return new pv(i, t, n);
                  },
                },
                {
                  key: "_reduceControls",
                  value: function (e) {
                    var t = this,
                      n = {};
                    return (
                      Object.keys(e).forEach(function (r) {
                        n[r] = t._createControl(e[r]);
                      }),
                      n
                    );
                  },
                },
                {
                  key: "_createControl",
                  value: function (e) {
                    return e instanceof dv || e instanceof vv || e instanceof pv
                      ? e
                      : Array.isArray(e)
                      ? this.control(
                          e[0],
                          e.length > 1 ? e[1] : null,
                          e.length > 2 ? e[2] : null
                        )
                      : this.control(e);
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || cv)();
          }),
          (cv.ɵprov = de({ token: cv, factory: cv.ɵfac })),
          cv),
        _v =
          (((lv = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, null, [
                {
                  key: "withConfig",
                  value: function (t) {
                    return {
                      ngModule: e,
                      providers: [
                        {
                          provide: yv,
                          useValue: t.warnOnNgModelWithFormControl,
                        },
                      ],
                    };
                  },
                },
              ]),
              e
            );
          })()).ɵmod = pt({ type: lv })),
          (lv.ɵinj = ve({
            factory: function (e) {
              return new (e || lv)();
            },
            providers: [mv, ov],
            imports: [gv],
          })),
          lv),
        kv = function e() {
          _classCallCheck(this, e);
        };
      function Cv(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return { type: 2, steps: e, options: t };
      }
      function bv(e) {
        return { type: 6, styles: e, offset: null };
      }
      function wv(e) {
        Promise.resolve(null).then(e);
      }
      var Sv = (function () {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
            _classCallCheck(this, e),
              (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._onDestroyFns = []),
              (this._started = !1),
              (this._destroyed = !1),
              (this._finished = !1),
              (this.parentPlayer = null),
              (this.totalTime = t + n);
          }
          return (
            _createClass(e, [
              {
                key: "_onFinish",
                value: function () {
                  this._finished ||
                    ((this._finished = !0),
                    this._onDoneFns.forEach(function (e) {
                      return e();
                    }),
                    (this._onDoneFns = []));
                },
              },
              {
                key: "onStart",
                value: function (e) {
                  this._onStartFns.push(e);
                },
              },
              {
                key: "onDone",
                value: function (e) {
                  this._onDoneFns.push(e);
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  this._onDestroyFns.push(e);
                },
              },
              {
                key: "hasStarted",
                value: function () {
                  return this._started;
                },
              },
              { key: "init", value: function () {} },
              {
                key: "play",
                value: function () {
                  this.hasStarted() ||
                    (this._onStart(), this.triggerMicrotask()),
                    (this._started = !0);
                },
              },
              {
                key: "triggerMicrotask",
                value: function () {
                  var e = this;
                  wv(function () {
                    return e._onFinish();
                  });
                },
              },
              {
                key: "_onStart",
                value: function () {
                  this._onStartFns.forEach(function (e) {
                    return e();
                  }),
                    (this._onStartFns = []);
                },
              },
              { key: "pause", value: function () {} },
              { key: "restart", value: function () {} },
              {
                key: "finish",
                value: function () {
                  this._onFinish();
                },
              },
              {
                key: "destroy",
                value: function () {
                  this._destroyed ||
                    ((this._destroyed = !0),
                    this.hasStarted() || this._onStart(),
                    this.finish(),
                    this._onDestroyFns.forEach(function (e) {
                      return e();
                    }),
                    (this._onDestroyFns = []));
                },
              },
              { key: "reset", value: function () {} },
              { key: "setPosition", value: function (e) {} },
              {
                key: "getPosition",
                value: function () {
                  return 0;
                },
              },
              {
                key: "triggerCallback",
                value: function (e) {
                  var t = "start" == e ? this._onStartFns : this._onDoneFns;
                  t.forEach(function (e) {
                    return e();
                  }),
                    (t.length = 0);
                },
              },
            ]),
            e
          );
        })(),
        Ev = (function () {
          function e(t) {
            var n = this;
            _classCallCheck(this, e),
              (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._finished = !1),
              (this._started = !1),
              (this._destroyed = !1),
              (this._onDestroyFns = []),
              (this.parentPlayer = null),
              (this.totalTime = 0),
              (this.players = t);
            var r = 0,
              i = 0,
              o = 0,
              a = this.players.length;
            0 == a
              ? wv(function () {
                  return n._onFinish();
                })
              : this.players.forEach(function (e) {
                  e.onDone(function () {
                    ++r == a && n._onFinish();
                  }),
                    e.onDestroy(function () {
                      ++i == a && n._onDestroy();
                    }),
                    e.onStart(function () {
                      ++o == a && n._onStart();
                    });
                }),
              (this.totalTime = this.players.reduce(function (e, t) {
                return Math.max(e, t.totalTime);
              }, 0));
          }
          return (
            _createClass(e, [
              {
                key: "_onFinish",
                value: function () {
                  this._finished ||
                    ((this._finished = !0),
                    this._onDoneFns.forEach(function (e) {
                      return e();
                    }),
                    (this._onDoneFns = []));
                },
              },
              {
                key: "init",
                value: function () {
                  this.players.forEach(function (e) {
                    return e.init();
                  });
                },
              },
              {
                key: "onStart",
                value: function (e) {
                  this._onStartFns.push(e);
                },
              },
              {
                key: "_onStart",
                value: function () {
                  this.hasStarted() ||
                    ((this._started = !0),
                    this._onStartFns.forEach(function (e) {
                      return e();
                    }),
                    (this._onStartFns = []));
                },
              },
              {
                key: "onDone",
                value: function (e) {
                  this._onDoneFns.push(e);
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  this._onDestroyFns.push(e);
                },
              },
              {
                key: "hasStarted",
                value: function () {
                  return this._started;
                },
              },
              {
                key: "play",
                value: function () {
                  this.parentPlayer || this.init(),
                    this._onStart(),
                    this.players.forEach(function (e) {
                      return e.play();
                    });
                },
              },
              {
                key: "pause",
                value: function () {
                  this.players.forEach(function (e) {
                    return e.pause();
                  });
                },
              },
              {
                key: "restart",
                value: function () {
                  this.players.forEach(function (e) {
                    return e.restart();
                  });
                },
              },
              {
                key: "finish",
                value: function () {
                  this._onFinish(),
                    this.players.forEach(function (e) {
                      return e.finish();
                    });
                },
              },
              {
                key: "destroy",
                value: function () {
                  this._onDestroy();
                },
              },
              {
                key: "_onDestroy",
                value: function () {
                  this._destroyed ||
                    ((this._destroyed = !0),
                    this._onFinish(),
                    this.players.forEach(function (e) {
                      return e.destroy();
                    }),
                    this._onDestroyFns.forEach(function (e) {
                      return e();
                    }),
                    (this._onDestroyFns = []));
                },
              },
              {
                key: "reset",
                value: function () {
                  this.players.forEach(function (e) {
                    return e.reset();
                  }),
                    (this._destroyed = !1),
                    (this._finished = !1),
                    (this._started = !1);
                },
              },
              {
                key: "setPosition",
                value: function (e) {
                  var t = e * this.totalTime;
                  this.players.forEach(function (e) {
                    var n = e.totalTime ? Math.min(1, t / e.totalTime) : 1;
                    e.setPosition(n);
                  });
                },
              },
              {
                key: "getPosition",
                value: function () {
                  var e = 0;
                  return (
                    this.players.forEach(function (t) {
                      var n = t.getPosition();
                      e = Math.min(n, e);
                    }),
                    e
                  );
                },
              },
              {
                key: "beforeDestroy",
                value: function () {
                  this.players.forEach(function (e) {
                    e.beforeDestroy && e.beforeDestroy();
                  });
                },
              },
              {
                key: "triggerCallback",
                value: function (e) {
                  var t = "start" == e ? this._onStartFns : this._onDoneFns;
                  t.forEach(function (e) {
                    return e();
                  }),
                    (t.length = 0);
                },
              },
            ]),
            e
          );
        })();
      function Tv() {
        return "undefined" != typeof process;
      }
      function Av(e) {
        switch (e.length) {
          case 0:
            return new Sv();
          case 1:
            return e[0];
          default:
            return new Ev(e);
        }
      }
      function xv(e, t, n, r) {
        var i =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
          o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
          a = [],
          s = [],
          u = -1,
          l = null;
        if (
          (r.forEach(function (e) {
            var n = e.offset,
              r = n == u,
              c = (r && l) || {};
            Object.keys(e).forEach(function (n) {
              var r = n,
                s = e[n];
              if ("offset" !== n)
                switch (((r = t.normalizePropertyName(r, a)), s)) {
                  case "!":
                    s = i[n];
                    break;
                  case "*":
                    s = o[n];
                    break;
                  default:
                    s = t.normalizeStyleValue(n, r, s, a);
                }
              c[r] = s;
            }),
              r || s.push(c),
              (l = c),
              (u = n);
          }),
          a.length)
        ) {
          var c = "\n - ";
          throw new Error(
            "Unable to animate due to the following errors:"
              .concat(c)
              .concat(a.join(c))
          );
        }
        return s;
      }
      function Pv(e, t, n, r) {
        switch (t) {
          case "start":
            e.onStart(function () {
              return r(n && Ov(n, "start", e));
            });
            break;
          case "done":
            e.onDone(function () {
              return r(n && Ov(n, "done", e));
            });
            break;
          case "destroy":
            e.onDestroy(function () {
              return r(n && Ov(n, "destroy", e));
            });
        }
      }
      function Ov(e, t, n) {
        var r = n.totalTime,
          i = Rv(
            e.element,
            e.triggerName,
            e.fromState,
            e.toState,
            t || e.phaseName,
            null == r ? e.totalTime : r,
            !!n.disabled
          ),
          o = e._data;
        return null != o && (i._data = o), i;
      }
      function Rv(e, t, n, r) {
        var i =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          a = arguments.length > 6 ? arguments[6] : void 0;
        return {
          element: e,
          triggerName: t,
          fromState: n,
          toState: r,
          phaseName: i,
          totalTime: o,
          disabled: !!a,
        };
      }
      function Iv(e, t, n) {
        var r;
        return (
          e instanceof Map
            ? (r = e.get(t)) || e.set(t, (r = n))
            : (r = e[t]) || (r = e[t] = n),
          r
        );
      }
      function Nv(e) {
        var t = e.indexOf(":");
        return [e.substring(1, t), e.substr(t + 1)];
      }
      var Dv = function (e, t) {
          return !1;
        },
        jv = function (e, t) {
          return !1;
        },
        Fv = function (e, t, n) {
          return [];
        },
        Lv = Tv();
      (Lv || "undefined" != typeof Element) &&
        ((Dv = function (e, t) {
          return e.contains(t);
        }),
        (jv = (function () {
          if (Lv || Element.prototype.matches)
            return function (e, t) {
              return e.matches(t);
            };
          var e = Element.prototype,
            t =
              e.matchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector ||
              e.oMatchesSelector ||
              e.webkitMatchesSelector;
          return t
            ? function (e, n) {
                return t.apply(e, [n]);
              }
            : jv;
        })()),
        (Fv = function (e, t, n) {
          var r = [];
          if (n) r.push.apply(r, _toConsumableArray(e.querySelectorAll(t)));
          else {
            var i = e.querySelector(t);
            i && r.push(i);
          }
          return r;
        }));
      var Uv = null,
        Vv = !1;
      function Mv(e) {
        Uv ||
          ((Uv = ("undefined" != typeof document ? document.body : null) || {}),
          (Vv = !!Uv.style && "WebkitAppearance" in Uv.style));
        var t = !0;
        return (
          Uv.style &&
            !(function (e) {
              return "ebkit" == e.substring(1, 6);
            })(e) &&
            !(t = e in Uv.style) &&
            Vv &&
            (t =
              "Webkit" + e.charAt(0).toUpperCase() + e.substr(1) in Uv.style),
          t
        );
      }
      var Hv = jv,
        zv = Dv,
        qv = Fv;
      function Bv(e) {
        var t = {};
        return (
          Object.keys(e).forEach(function (n) {
            var r = n.replace(/([a-z])([A-Z])/g, "$1-$2");
            t[r] = e[n];
          }),
          t
        );
      }
      var Wv,
        Qv =
          (((Wv = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, [
                {
                  key: "validateStyleProperty",
                  value: function (e) {
                    return Mv(e);
                  },
                },
                {
                  key: "matchesElement",
                  value: function (e, t) {
                    return Hv(e, t);
                  },
                },
                {
                  key: "containsElement",
                  value: function (e, t) {
                    return zv(e, t);
                  },
                },
                {
                  key: "query",
                  value: function (e, t, n) {
                    return qv(e, t, n);
                  },
                },
                {
                  key: "computeStyle",
                  value: function (e, t, n) {
                    return n || "";
                  },
                },
                {
                  key: "animate",
                  value: function (e, t, n, r, i) {
                    return (
                      arguments.length > 5 &&
                        void 0 !== arguments[5] &&
                        arguments[5],
                      arguments.length > 6 && arguments[6],
                      new Sv(n, r)
                    );
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || Wv)();
          }),
          (Wv.ɵprov = de({ token: Wv, factory: Wv.ɵfac })),
          Wv),
        Kv = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (e.NOOP = new Qv()), e;
        })();
      function Zv(e) {
        if ("number" == typeof e) return e;
        var t = e.match(/^(-?[\.\d]+)(m?s)/);
        return !t || t.length < 2 ? 0 : Gv(parseFloat(t[1]), t[2]);
      }
      function Gv(e, t) {
        switch (t) {
          case "s":
            return 1e3 * e;
          default:
            return e;
        }
      }
      function $v(e, t, n) {
        return e.hasOwnProperty("duration")
          ? e
          : (function (e, t, n) {
              var r,
                i = 0,
                o = "";
              if ("string" == typeof e) {
                var a = e.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === a)
                  return (
                    t.push(
                      'The provided timing value "'.concat(e, '" is invalid.')
                    ),
                    { duration: 0, delay: 0, easing: "" }
                  );
                r = Gv(parseFloat(a[1]), a[2]);
                var s = a[3];
                null != s && (i = Gv(parseFloat(s), a[4]));
                var u = a[5];
                u && (o = u);
              } else r = e;
              if (!n) {
                var l = !1,
                  c = t.length;
                r < 0 &&
                  (t.push(
                    "Duration values below 0 are not allowed for this animation step."
                  ),
                  (l = !0)),
                  i < 0 &&
                    (t.push(
                      "Delay values below 0 are not allowed for this animation step."
                    ),
                    (l = !0)),
                  l &&
                    t.splice(
                      c,
                      0,
                      'The provided timing value "'.concat(e, '" is invalid.')
                    );
              }
              return { duration: r, delay: i, easing: o };
            })(e, t, n);
      }
      function Jv(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          Object.keys(e).forEach(function (n) {
            t[n] = e[n];
          }),
          t
        );
      }
      function Yv(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (t) for (var r in e) n[r] = e[r];
        else Jv(e, n);
        return n;
      }
      function Xv(e, t, n) {
        return n ? t + ":" + n + ";" : "";
      }
      function ep(e) {
        for (var t = "", n = 0; n < e.style.length; n++) {
          var r = e.style.item(n);
          t += Xv(0, r, e.style.getPropertyValue(r));
        }
        for (var i in e.style)
          e.style.hasOwnProperty(i) &&
            !i.startsWith("_") &&
            (t += Xv(
              0,
              i.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
              e.style[i]
            ));
        e.setAttribute("style", t);
      }
      function tp(e, t, n) {
        e.style &&
          (Object.keys(t).forEach(function (r) {
            var i = lp(r);
            n && !n.hasOwnProperty(r) && (n[r] = e.style[i]),
              (e.style[i] = t[r]);
          }),
          Tv() && ep(e));
      }
      function np(e, t) {
        e.style &&
          (Object.keys(t).forEach(function (t) {
            var n = lp(t);
            e.style[n] = "";
          }),
          Tv() && ep(e));
      }
      function rp(e) {
        return Array.isArray(e) ? (1 == e.length ? e[0] : Cv(e)) : e;
      }
      var ip = new RegExp("{{\\s*(.+?)\\s*}}", "g");
      function op(e) {
        var t = [];
        if ("string" == typeof e) {
          for (var n; (n = ip.exec(e)); ) t.push(n[1]);
          ip.lastIndex = 0;
        }
        return t;
      }
      function ap(e, t, n) {
        var r = e.toString(),
          i = r.replace(ip, function (e, r) {
            var i = t[r];
            return (
              t.hasOwnProperty(r) ||
                (n.push(
                  "Please provide a value for the animation param ".concat(r)
                ),
                (i = "")),
              i.toString()
            );
          });
        return i == r ? e : i;
      }
      function sp(e) {
        for (var t = [], n = e.next(); !n.done; )
          t.push(n.value), (n = e.next());
        return t;
      }
      var up = /-+([a-z0-9])/g;
      function lp(e) {
        return e.replace(up, function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t[1].toUpperCase();
        });
      }
      function cp(e, t) {
        return 0 === e || 0 === t;
      }
      function hp(e, t, n) {
        var r = Object.keys(n);
        if (r.length && t.length) {
          var i = t[0],
            o = [];
          if (
            (r.forEach(function (e) {
              i.hasOwnProperty(e) || o.push(e), (i[e] = n[e]);
            }),
            o.length)
          )
            for (
              var a = function () {
                  var n = t[s];
                  o.forEach(function (t) {
                    n[t] = dp(e, t);
                  });
                },
                s = 1;
              s < t.length;
              s++
            )
              a();
        }
        return t;
      }
      function fp(e, t, n) {
        switch (t.type) {
          case 7:
            return e.visitTrigger(t, n);
          case 0:
            return e.visitState(t, n);
          case 1:
            return e.visitTransition(t, n);
          case 2:
            return e.visitSequence(t, n);
          case 3:
            return e.visitGroup(t, n);
          case 4:
            return e.visitAnimate(t, n);
          case 5:
            return e.visitKeyframes(t, n);
          case 6:
            return e.visitStyle(t, n);
          case 8:
            return e.visitReference(t, n);
          case 9:
            return e.visitAnimateChild(t, n);
          case 10:
            return e.visitAnimateRef(t, n);
          case 11:
            return e.visitQuery(t, n);
          case 12:
            return e.visitStagger(t, n);
          default:
            throw new Error(
              "Unable to resolve animation metadata node #".concat(t.type)
            );
        }
      }
      function dp(e, t) {
        return window.getComputedStyle(e)[t];
      }
      var vp = new Set(["true", "1"]),
        pp = new Set(["false", "0"]);
      function yp(e, t) {
        var n = vp.has(e) || pp.has(e),
          r = vp.has(t) || pp.has(t);
        return function (i, o) {
          var a = "*" == e || e == i,
            s = "*" == t || t == o;
          return (
            !a && n && "boolean" == typeof i && (a = i ? vp.has(e) : pp.has(e)),
            !s && r && "boolean" == typeof o && (s = o ? vp.has(t) : pp.has(t)),
            a && s
          );
        };
      }
      var gp = new RegExp("s*:selfs*,?", "g");
      function mp(e, t, n) {
        return new _p(e).build(t, n);
      }
      var _p = (function () {
          function e(t) {
            _classCallCheck(this, e), (this._driver = t);
          }
          return (
            _createClass(e, [
              {
                key: "build",
                value: function (e, t) {
                  var n = new kp(t);
                  return (
                    this._resetContextStyleTimingState(n), fp(this, rp(e), n)
                  );
                },
              },
              {
                key: "_resetContextStyleTimingState",
                value: function (e) {
                  (e.currentQuerySelector = ""),
                    (e.collectedStyles = {}),
                    (e.collectedStyles[""] = {}),
                    (e.currentTime = 0);
                },
              },
              {
                key: "visitTrigger",
                value: function (e, t) {
                  var n = this,
                    r = (t.queryCount = 0),
                    i = (t.depCount = 0),
                    o = [],
                    a = [];
                  return (
                    "@" == e.name.charAt(0) &&
                      t.errors.push(
                        "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"
                      ),
                    e.definitions.forEach(function (e) {
                      if ((n._resetContextStyleTimingState(t), 0 == e.type)) {
                        var s = e,
                          u = s.name;
                        u
                          .toString()
                          .split(/\s*,\s*/)
                          .forEach(function (e) {
                            (s.name = e), o.push(n.visitState(s, t));
                          }),
                          (s.name = u);
                      } else if (1 == e.type) {
                        var l = n.visitTransition(e, t);
                        (r += l.queryCount), (i += l.depCount), a.push(l);
                      } else
                        t.errors.push(
                          "only state() and transition() definitions can sit inside of a trigger()"
                        );
                    }),
                    {
                      type: 7,
                      name: e.name,
                      states: o,
                      transitions: a,
                      queryCount: r,
                      depCount: i,
                      options: null,
                    }
                  );
                },
              },
              {
                key: "visitState",
                value: function (e, t) {
                  var n = this.visitStyle(e.styles, t),
                    r = (e.options && e.options.params) || null;
                  if (n.containsDynamicStyles) {
                    var i = new Set(),
                      o = r || {};
                    if (
                      (n.styles.forEach(function (e) {
                        if (Cp(e)) {
                          var t = e;
                          Object.keys(t).forEach(function (e) {
                            op(t[e]).forEach(function (e) {
                              o.hasOwnProperty(e) || i.add(e);
                            });
                          });
                        }
                      }),
                      i.size)
                    ) {
                      var a = sp(i.values());
                      t.errors.push(
                        'state("'
                          .concat(
                            e.name,
                            '", ...) must define default values for all the following style substitutions: '
                          )
                          .concat(a.join(", "))
                      );
                    }
                  }
                  return {
                    type: 0,
                    name: e.name,
                    style: n,
                    options: r ? { params: r } : null,
                  };
                },
              },
              {
                key: "visitTransition",
                value: function (e, t) {
                  (t.queryCount = 0), (t.depCount = 0);
                  var n,
                    r,
                    i,
                    o = fp(this, rp(e.animation), t);
                  return {
                    type: 1,
                    matchers:
                      ((n = e.expr),
                      (r = t.errors),
                      (i = []),
                      "string" == typeof n
                        ? n.split(/\s*,\s*/).forEach(function (e) {
                            return (function (e, t, n) {
                              if (":" == e[0]) {
                                var r = (function (e, t) {
                                  switch (e) {
                                    case ":enter":
                                      return "void => *";
                                    case ":leave":
                                      return "* => void";
                                    case ":increment":
                                      return function (e, t) {
                                        return parseFloat(t) > parseFloat(e);
                                      };
                                    case ":decrement":
                                      return function (e, t) {
                                        return parseFloat(t) < parseFloat(e);
                                      };
                                    default:
                                      return (
                                        t.push(
                                          'The transition alias value "'.concat(
                                            e,
                                            '" is not supported'
                                          )
                                        ),
                                        "* => *"
                                      );
                                  }
                                })(e, n);
                                if ("function" == typeof r)
                                  return void t.push(r);
                                e = r;
                              }
                              var i = e.match(
                                /^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/
                              );
                              if (null == i || i.length < 4)
                                return (
                                  n.push(
                                    'The provided transition expression "'.concat(
                                      e,
                                      '" is not supported'
                                    )
                                  ),
                                  t
                                );
                              var o = i[1],
                                a = i[2],
                                s = i[3];
                              t.push(yp(o, s)),
                                "<" != a[0] ||
                                  ("*" == o && "*" == s) ||
                                  t.push(yp(s, o));
                            })(e, i, r);
                          })
                        : i.push(n),
                      i),
                    animation: o,
                    queryCount: t.queryCount,
                    depCount: t.depCount,
                    options: bp(e.options),
                  };
                },
              },
              {
                key: "visitSequence",
                value: function (e, t) {
                  var n = this;
                  return {
                    type: 2,
                    steps: e.steps.map(function (e) {
                      return fp(n, e, t);
                    }),
                    options: bp(e.options),
                  };
                },
              },
              {
                key: "visitGroup",
                value: function (e, t) {
                  var n = this,
                    r = t.currentTime,
                    i = 0,
                    o = e.steps.map(function (e) {
                      t.currentTime = r;
                      var o = fp(n, e, t);
                      return (i = Math.max(i, t.currentTime)), o;
                    });
                  return (
                    (t.currentTime = i),
                    { type: 3, steps: o, options: bp(e.options) }
                  );
                },
              },
              {
                key: "visitAnimate",
                value: function (e, t) {
                  var n,
                    r = (function (e, t) {
                      var n = null;
                      if (e.hasOwnProperty("duration")) n = e;
                      else if ("number" == typeof e)
                        return wp($v(e, t).duration, 0, "");
                      var r = e;
                      if (
                        r.split(/\s+/).some(function (e) {
                          return "{" == e.charAt(0) && "{" == e.charAt(1);
                        })
                      ) {
                        var i = wp(0, 0, "");
                        return (i.dynamic = !0), (i.strValue = r), i;
                      }
                      return wp(
                        (n = n || $v(r, t)).duration,
                        n.delay,
                        n.easing
                      );
                    })(e.timings, t.errors);
                  t.currentAnimateTimings = r;
                  var i = e.styles ? e.styles : bv({});
                  if (5 == i.type) n = this.visitKeyframes(i, t);
                  else {
                    var o = e.styles,
                      a = !1;
                    if (!o) {
                      a = !0;
                      var s = {};
                      r.easing && (s.easing = r.easing), (o = bv(s));
                    }
                    t.currentTime += r.duration + r.delay;
                    var u = this.visitStyle(o, t);
                    (u.isEmptyStep = a), (n = u);
                  }
                  return (
                    (t.currentAnimateTimings = null),
                    { type: 4, timings: r, style: n, options: null }
                  );
                },
              },
              {
                key: "visitStyle",
                value: function (e, t) {
                  var n = this._makeStyleAst(e, t);
                  return this._validateStyleAst(n, t), n;
                },
              },
              {
                key: "_makeStyleAst",
                value: function (e, t) {
                  var n = [];
                  Array.isArray(e.styles)
                    ? e.styles.forEach(function (e) {
                        "string" == typeof e
                          ? "*" == e
                            ? n.push(e)
                            : t.errors.push(
                                "The provided style string value ".concat(
                                  e,
                                  " is not allowed."
                                )
                              )
                          : n.push(e);
                      })
                    : n.push(e.styles);
                  var r = !1,
                    i = null;
                  return (
                    n.forEach(function (e) {
                      if (Cp(e)) {
                        var t = e,
                          n = t.easing;
                        if ((n && ((i = n), delete t.easing), !r))
                          for (var o in t)
                            if (t[o].toString().indexOf("{{") >= 0) {
                              r = !0;
                              break;
                            }
                      }
                    }),
                    {
                      type: 6,
                      styles: n,
                      easing: i,
                      offset: e.offset,
                      containsDynamicStyles: r,
                      options: null,
                    }
                  );
                },
              },
              {
                key: "_validateStyleAst",
                value: function (e, t) {
                  var n = this,
                    r = t.currentAnimateTimings,
                    i = t.currentTime,
                    o = t.currentTime;
                  r && o > 0 && (o -= r.duration + r.delay),
                    e.styles.forEach(function (e) {
                      "string" != typeof e &&
                        Object.keys(e).forEach(function (r) {
                          if (n._driver.validateStyleProperty(r)) {
                            var a,
                              s,
                              u,
                              l,
                              c,
                              h = t.collectedStyles[t.currentQuerySelector],
                              f = h[r],
                              d = !0;
                            f &&
                              (o != i &&
                                o >= f.startTime &&
                                i <= f.endTime &&
                                (t.errors.push(
                                  'The CSS property "'
                                    .concat(
                                      r,
                                      '" that exists between the times of "'
                                    )
                                    .concat(f.startTime, 'ms" and "')
                                    .concat(
                                      f.endTime,
                                      'ms" is also being animated in a parallel animation between the times of "'
                                    )
                                    .concat(o, 'ms" and "')
                                    .concat(i, 'ms"')
                                ),
                                (d = !1)),
                              (o = f.startTime)),
                              d && (h[r] = { startTime: o, endTime: i }),
                              t.options &&
                                ((a = e[r]),
                                (s = t.options),
                                (u = t.errors),
                                (l = s.params || {}),
                                (c = op(a)).length &&
                                  c.forEach(function (e) {
                                    l.hasOwnProperty(e) ||
                                      u.push(
                                        "Unable to resolve the local animation param ".concat(
                                          e,
                                          " in the given list of values"
                                        )
                                      );
                                  }));
                          } else
                            t.errors.push(
                              'The provided animation property "'.concat(
                                r,
                                '" is not a supported CSS property for animations'
                              )
                            );
                        });
                    });
                },
              },
              {
                key: "visitKeyframes",
                value: function (e, t) {
                  var n = this,
                    r = { type: 5, styles: [], options: null };
                  if (!t.currentAnimateTimings)
                    return (
                      t.errors.push(
                        "keyframes() must be placed inside of a call to animate()"
                      ),
                      r
                    );
                  var i = 0,
                    o = [],
                    a = !1,
                    s = !1,
                    u = 0,
                    l = e.steps.map(function (e) {
                      var r = n._makeStyleAst(e, t),
                        l =
                          null != r.offset
                            ? r.offset
                            : (function (e) {
                                if ("string" == typeof e) return null;
                                var t = null;
                                if (Array.isArray(e))
                                  e.forEach(function (e) {
                                    if (Cp(e) && e.hasOwnProperty("offset")) {
                                      var n = e;
                                      (t = parseFloat(n.offset)),
                                        delete n.offset;
                                    }
                                  });
                                else if (Cp(e) && e.hasOwnProperty("offset")) {
                                  var n = e;
                                  (t = parseFloat(n.offset)), delete n.offset;
                                }
                                return t;
                              })(r.styles),
                        c = 0;
                      return (
                        null != l && (i++, (c = r.offset = l)),
                        (s = s || c < 0 || c > 1),
                        (a = a || c < u),
                        (u = c),
                        o.push(c),
                        r
                      );
                    });
                  s &&
                    t.errors.push(
                      "Please ensure that all keyframe offsets are between 0 and 1"
                    ),
                    a &&
                      t.errors.push(
                        "Please ensure that all keyframe offsets are in order"
                      );
                  var c = e.steps.length,
                    h = 0;
                  i > 0 && i < c
                    ? t.errors.push(
                        "Not all style() steps within the declared keyframes() contain offsets"
                      )
                    : 0 == i && (h = 1 / (c - 1));
                  var f = c - 1,
                    d = t.currentTime,
                    v = t.currentAnimateTimings,
                    p = v.duration;
                  return (
                    l.forEach(function (e, i) {
                      var a = h > 0 ? (i == f ? 1 : h * i) : o[i],
                        s = a * p;
                      (t.currentTime = d + v.delay + s),
                        (v.duration = s),
                        n._validateStyleAst(e, t),
                        (e.offset = a),
                        r.styles.push(e);
                    }),
                    r
                  );
                },
              },
              {
                key: "visitReference",
                value: function (e, t) {
                  return {
                    type: 8,
                    animation: fp(this, rp(e.animation), t),
                    options: bp(e.options),
                  };
                },
              },
              {
                key: "visitAnimateChild",
                value: function (e, t) {
                  return t.depCount++, { type: 9, options: bp(e.options) };
                },
              },
              {
                key: "visitAnimateRef",
                value: function (e, t) {
                  return {
                    type: 10,
                    animation: this.visitReference(e.animation, t),
                    options: bp(e.options),
                  };
                },
              },
              {
                key: "visitQuery",
                value: function (e, t) {
                  var n = t.currentQuerySelector,
                    r = e.options || {};
                  t.queryCount++, (t.currentQuery = e);
                  var i = _slicedToArray(
                      (function (e) {
                        var t = !!e.split(/\s*,\s*/).find(function (e) {
                          return ":self" == e;
                        });
                        return (
                          t && (e = e.replace(gp, "")),
                          [
                            (e = e
                              .replace(/@\*/g, ".ng-trigger")
                              .replace(/@\w+/g, function (e) {
                                return ".ng-trigger-" + e.substr(1);
                              })
                              .replace(/:animating/g, ".ng-animating")),
                            t,
                          ]
                        );
                      })(e.selector),
                      2
                    ),
                    o = i[0],
                    a = i[1];
                  (t.currentQuerySelector = n.length ? n + " " + o : o),
                    Iv(t.collectedStyles, t.currentQuerySelector, {});
                  var s = fp(this, rp(e.animation), t);
                  return (
                    (t.currentQuery = null),
                    (t.currentQuerySelector = n),
                    {
                      type: 11,
                      selector: o,
                      limit: r.limit || 0,
                      optional: !!r.optional,
                      includeSelf: a,
                      animation: s,
                      originalSelector: e.selector,
                      options: bp(e.options),
                    }
                  );
                },
              },
              {
                key: "visitStagger",
                value: function (e, t) {
                  t.currentQuery ||
                    t.errors.push(
                      "stagger() can only be used inside of query()"
                    );
                  var n =
                    "full" === e.timings
                      ? { duration: 0, delay: 0, easing: "full" }
                      : $v(e.timings, t.errors, !0);
                  return {
                    type: 12,
                    animation: fp(this, rp(e.animation), t),
                    timings: n,
                    options: null,
                  };
                },
              },
            ]),
            e
          );
        })(),
        kp = function e(t) {
          _classCallCheck(this, e),
            (this.errors = t),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = {}),
            (this.options = null);
        };
      function Cp(e) {
        return !Array.isArray(e) && "object" == typeof e;
      }
      function bp(e) {
        var t;
        return (
          e
            ? (e = Jv(e)).params && (e.params = (t = e.params) ? Jv(t) : null)
            : (e = {}),
          e
        );
      }
      function wp(e, t, n) {
        return { duration: e, delay: t, easing: n };
      }
      function Sp(e, t, n, r, i, o) {
        var a =
            arguments.length > 6 && void 0 !== arguments[6]
              ? arguments[6]
              : null,
          s = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        return {
          type: 1,
          element: e,
          keyframes: t,
          preStyleProps: n,
          postStyleProps: r,
          duration: i,
          delay: o,
          totalTime: i + o,
          easing: a,
          subTimeline: s,
        };
      }
      var Ep = (function () {
          function e() {
            _classCallCheck(this, e), (this._map = new Map());
          }
          return (
            _createClass(e, [
              {
                key: "consume",
                value: function (e) {
                  var t = this._map.get(e);
                  return t ? this._map.delete(e) : (t = []), t;
                },
              },
              {
                key: "append",
                value: function (e, t) {
                  var n,
                    r = this._map.get(e);
                  r || this._map.set(e, (r = [])),
                    (n = r).push.apply(n, _toConsumableArray(t));
                },
              },
              {
                key: "has",
                value: function (e) {
                  return this._map.has(e);
                },
              },
              {
                key: "clear",
                value: function () {
                  this._map.clear();
                },
              },
            ]),
            e
          );
        })(),
        Tp = new RegExp(":enter", "g"),
        Ap = new RegExp(":leave", "g");
      function xp(e, t, n, r, i) {
        var o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
          a =
            arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {},
          s = arguments.length > 7 ? arguments[7] : void 0,
          u = arguments.length > 8 ? arguments[8] : void 0,
          l =
            arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : [];
        return new Pp().buildKeyframes(e, t, n, r, i, o, a, s, u, l);
      }
      var Pp = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "buildKeyframes",
                value: function (e, t, n, r, i, o, a, s, u) {
                  var l =
                    arguments.length > 9 && void 0 !== arguments[9]
                      ? arguments[9]
                      : [];
                  u = u || new Ep();
                  var c = new Rp(e, t, u, r, i, l, []);
                  (c.options = s),
                    c.currentTimeline.setStyles([o], null, c.errors, s),
                    fp(this, n, c);
                  var h = c.timelines.filter(function (e) {
                    return e.containsAnimation();
                  });
                  if (h.length && Object.keys(a).length) {
                    var f = h[h.length - 1];
                    f.allowOnlyTimelineStyles() ||
                      f.setStyles([a], null, c.errors, s);
                  }
                  return h.length
                    ? h.map(function (e) {
                        return e.buildKeyframes();
                      })
                    : [Sp(t, [], [], [], 0, 0, "", !1)];
                },
              },
              { key: "visitTrigger", value: function (e, t) {} },
              { key: "visitState", value: function (e, t) {} },
              { key: "visitTransition", value: function (e, t) {} },
              {
                key: "visitAnimateChild",
                value: function (e, t) {
                  var n = t.subInstructions.consume(t.element);
                  if (n) {
                    var r = t.createSubContext(e.options),
                      i = t.currentTimeline.currentTime,
                      o = this._visitSubInstructions(n, r, r.options);
                    i != o && t.transformIntoNewTimeline(o);
                  }
                  t.previousNode = e;
                },
              },
              {
                key: "visitAnimateRef",
                value: function (e, t) {
                  var n = t.createSubContext(e.options);
                  n.transformIntoNewTimeline(),
                    this.visitReference(e.animation, n),
                    t.transformIntoNewTimeline(n.currentTimeline.currentTime),
                    (t.previousNode = e);
                },
              },
              {
                key: "_visitSubInstructions",
                value: function (e, t, n) {
                  var r = t.currentTimeline.currentTime,
                    i = null != n.duration ? Zv(n.duration) : null,
                    o = null != n.delay ? Zv(n.delay) : null;
                  return (
                    0 !== i &&
                      e.forEach(function (e) {
                        var n = t.appendInstructionToTimeline(e, i, o);
                        r = Math.max(r, n.duration + n.delay);
                      }),
                    r
                  );
                },
              },
              {
                key: "visitReference",
                value: function (e, t) {
                  t.updateOptions(e.options, !0),
                    fp(this, e.animation, t),
                    (t.previousNode = e);
                },
              },
              {
                key: "visitSequence",
                value: function (e, t) {
                  var n = this,
                    r = t.subContextCount,
                    i = t,
                    o = e.options;
                  if (
                    o &&
                    (o.params || o.delay) &&
                    ((i = t.createSubContext(o)).transformIntoNewTimeline(),
                    null != o.delay)
                  ) {
                    6 == i.previousNode.type &&
                      (i.currentTimeline.snapshotCurrentStyles(),
                      (i.previousNode = Op));
                    var a = Zv(o.delay);
                    i.delayNextStep(a);
                  }
                  e.steps.length &&
                    (e.steps.forEach(function (e) {
                      return fp(n, e, i);
                    }),
                    i.currentTimeline.applyStylesToKeyframe(),
                    i.subContextCount > r && i.transformIntoNewTimeline()),
                    (t.previousNode = e);
                },
              },
              {
                key: "visitGroup",
                value: function (e, t) {
                  var n = this,
                    r = [],
                    i = t.currentTimeline.currentTime,
                    o = e.options && e.options.delay ? Zv(e.options.delay) : 0;
                  e.steps.forEach(function (a) {
                    var s = t.createSubContext(e.options);
                    o && s.delayNextStep(o),
                      fp(n, a, s),
                      (i = Math.max(i, s.currentTimeline.currentTime)),
                      r.push(s.currentTimeline);
                  }),
                    r.forEach(function (e) {
                      return t.currentTimeline.mergeTimelineCollectedStyles(e);
                    }),
                    t.transformIntoNewTimeline(i),
                    (t.previousNode = e);
                },
              },
              {
                key: "_visitTiming",
                value: function (e, t) {
                  if (e.dynamic) {
                    var n = e.strValue;
                    return $v(
                      t.params ? ap(n, t.params, t.errors) : n,
                      t.errors
                    );
                  }
                  return {
                    duration: e.duration,
                    delay: e.delay,
                    easing: e.easing,
                  };
                },
              },
              {
                key: "visitAnimate",
                value: function (e, t) {
                  var n = (t.currentAnimateTimings = this._visitTiming(
                      e.timings,
                      t
                    )),
                    r = t.currentTimeline;
                  n.delay &&
                    (t.incrementTime(n.delay), r.snapshotCurrentStyles());
                  var i = e.style;
                  5 == i.type
                    ? this.visitKeyframes(i, t)
                    : (t.incrementTime(n.duration),
                      this.visitStyle(i, t),
                      r.applyStylesToKeyframe()),
                    (t.currentAnimateTimings = null),
                    (t.previousNode = e);
                },
              },
              {
                key: "visitStyle",
                value: function (e, t) {
                  var n = t.currentTimeline,
                    r = t.currentAnimateTimings;
                  !r &&
                    n.getCurrentStyleProperties().length &&
                    n.forwardFrame();
                  var i = (r && r.easing) || e.easing;
                  e.isEmptyStep
                    ? n.applyEmptyStep(i)
                    : n.setStyles(e.styles, i, t.errors, t.options),
                    (t.previousNode = e);
                },
              },
              {
                key: "visitKeyframes",
                value: function (e, t) {
                  var n = t.currentAnimateTimings,
                    r = t.currentTimeline.duration,
                    i = n.duration,
                    o = t.createSubContext().currentTimeline;
                  (o.easing = n.easing),
                    e.styles.forEach(function (e) {
                      o.forwardTime((e.offset || 0) * i),
                        o.setStyles(e.styles, e.easing, t.errors, t.options),
                        o.applyStylesToKeyframe();
                    }),
                    t.currentTimeline.mergeTimelineCollectedStyles(o),
                    t.transformIntoNewTimeline(r + i),
                    (t.previousNode = e);
                },
              },
              {
                key: "visitQuery",
                value: function (e, t) {
                  var n = this,
                    r = t.currentTimeline.currentTime,
                    i = e.options || {},
                    o = i.delay ? Zv(i.delay) : 0;
                  o &&
                    (6 === t.previousNode.type ||
                      (0 == r &&
                        t.currentTimeline.getCurrentStyleProperties()
                          .length)) &&
                    (t.currentTimeline.snapshotCurrentStyles(),
                    (t.previousNode = Op));
                  var a = r,
                    s = t.invokeQuery(
                      e.selector,
                      e.originalSelector,
                      e.limit,
                      e.includeSelf,
                      !!i.optional,
                      t.errors
                    );
                  t.currentQueryTotal = s.length;
                  var u = null;
                  s.forEach(function (r, i) {
                    t.currentQueryIndex = i;
                    var s = t.createSubContext(e.options, r);
                    o && s.delayNextStep(o),
                      r === t.element && (u = s.currentTimeline),
                      fp(n, e.animation, s),
                      s.currentTimeline.applyStylesToKeyframe(),
                      (a = Math.max(a, s.currentTimeline.currentTime));
                  }),
                    (t.currentQueryIndex = 0),
                    (t.currentQueryTotal = 0),
                    t.transformIntoNewTimeline(a),
                    u &&
                      (t.currentTimeline.mergeTimelineCollectedStyles(u),
                      t.currentTimeline.snapshotCurrentStyles()),
                    (t.previousNode = e);
                },
              },
              {
                key: "visitStagger",
                value: function (e, t) {
                  var n = t.parentContext,
                    r = t.currentTimeline,
                    i = e.timings,
                    o = Math.abs(i.duration),
                    a = o * (t.currentQueryTotal - 1),
                    s = o * t.currentQueryIndex;
                  switch (i.duration < 0 ? "reverse" : i.easing) {
                    case "reverse":
                      s = a - s;
                      break;
                    case "full":
                      s = n.currentStaggerTime;
                  }
                  var u = t.currentTimeline;
                  s && u.delayNextStep(s);
                  var l = u.currentTime;
                  fp(this, e.animation, t),
                    (t.previousNode = e),
                    (n.currentStaggerTime =
                      r.currentTime -
                      l +
                      (r.startTime - n.currentTimeline.startTime));
                },
              },
            ]),
            e
          );
        })(),
        Op = {},
        Rp = (function () {
          function e(t, n, r, i, o, a, s, u) {
            _classCallCheck(this, e),
              (this._driver = t),
              (this.element = n),
              (this.subInstructions = r),
              (this._enterClassName = i),
              (this._leaveClassName = o),
              (this.errors = a),
              (this.timelines = s),
              (this.parentContext = null),
              (this.currentAnimateTimings = null),
              (this.previousNode = Op),
              (this.subContextCount = 0),
              (this.options = {}),
              (this.currentQueryIndex = 0),
              (this.currentQueryTotal = 0),
              (this.currentStaggerTime = 0),
              (this.currentTimeline = u || new Ip(this._driver, n, 0)),
              s.push(this.currentTimeline);
          }
          return (
            _createClass(e, [
              {
                key: "updateOptions",
                value: function (e, t) {
                  var n = this;
                  if (e) {
                    var r = e,
                      i = this.options;
                    null != r.duration && (i.duration = Zv(r.duration)),
                      null != r.delay && (i.delay = Zv(r.delay));
                    var o = r.params;
                    if (o) {
                      var a = i.params;
                      a || (a = this.options.params = {}),
                        Object.keys(o).forEach(function (e) {
                          (t && a.hasOwnProperty(e)) ||
                            (a[e] = ap(o[e], a, n.errors));
                        });
                    }
                  }
                },
              },
              {
                key: "_copyOptions",
                value: function () {
                  var e = {};
                  if (this.options) {
                    var t = this.options.params;
                    if (t) {
                      var n = (e.params = {});
                      Object.keys(t).forEach(function (e) {
                        n[e] = t[e];
                      });
                    }
                  }
                  return e;
                },
              },
              {
                key: "createSubContext",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    i = n || this.element,
                    o = new e(
                      this._driver,
                      i,
                      this.subInstructions,
                      this._enterClassName,
                      this._leaveClassName,
                      this.errors,
                      this.timelines,
                      this.currentTimeline.fork(i, r || 0)
                    );
                  return (
                    (o.previousNode = this.previousNode),
                    (o.currentAnimateTimings = this.currentAnimateTimings),
                    (o.options = this._copyOptions()),
                    o.updateOptions(t),
                    (o.currentQueryIndex = this.currentQueryIndex),
                    (o.currentQueryTotal = this.currentQueryTotal),
                    (o.parentContext = this),
                    this.subContextCount++,
                    o
                  );
                },
              },
              {
                key: "transformIntoNewTimeline",
                value: function (e) {
                  return (
                    (this.previousNode = Op),
                    (this.currentTimeline = this.currentTimeline.fork(
                      this.element,
                      e
                    )),
                    this.timelines.push(this.currentTimeline),
                    this.currentTimeline
                  );
                },
              },
              {
                key: "appendInstructionToTimeline",
                value: function (e, t, n) {
                  var r = {
                      duration: null != t ? t : e.duration,
                      delay:
                        this.currentTimeline.currentTime +
                        (null != n ? n : 0) +
                        e.delay,
                      easing: "",
                    },
                    i = new Np(
                      this._driver,
                      e.element,
                      e.keyframes,
                      e.preStyleProps,
                      e.postStyleProps,
                      r,
                      e.stretchStartingKeyframe
                    );
                  return this.timelines.push(i), r;
                },
              },
              {
                key: "incrementTime",
                value: function (e) {
                  this.currentTimeline.forwardTime(
                    this.currentTimeline.duration + e
                  );
                },
              },
              {
                key: "delayNextStep",
                value: function (e) {
                  e > 0 && this.currentTimeline.delayNextStep(e);
                },
              },
              {
                key: "invokeQuery",
                value: function (e, t, n, r, i, o) {
                  var a = [];
                  if ((r && a.push(this.element), e.length > 0)) {
                    e = (e = e.replace(Tp, "." + this._enterClassName)).replace(
                      Ap,
                      "." + this._leaveClassName
                    );
                    var s = this._driver.query(this.element, e, 1 != n);
                    0 !== n &&
                      (s =
                        n < 0
                          ? s.slice(s.length + n, s.length)
                          : s.slice(0, n)),
                      a.push.apply(a, _toConsumableArray(s));
                  }
                  return (
                    i ||
                      0 != a.length ||
                      o.push(
                        '`query("'
                          .concat(
                            t,
                            '")` returned zero elements. (Use `query("'
                          )
                          .concat(
                            t,
                            '", { optional: true })` if you wish to allow this.)'
                          )
                      ),
                    a
                  );
                },
              },
              {
                key: "params",
                get: function () {
                  return this.options.params;
                },
              },
            ]),
            e
          );
        })(),
        Ip = (function () {
          function e(t, n, r, i) {
            _classCallCheck(this, e),
              (this._driver = t),
              (this.element = n),
              (this.startTime = r),
              (this._elementTimelineStylesLookup = i),
              (this.duration = 0),
              (this._previousKeyframe = {}),
              (this._currentKeyframe = {}),
              (this._keyframes = new Map()),
              (this._styleSummary = {}),
              (this._pendingStyles = {}),
              (this._backFill = {}),
              (this._currentEmptyStepKeyframe = null),
              this._elementTimelineStylesLookup ||
                (this._elementTimelineStylesLookup = new Map()),
              (this._localTimelineStyles = Object.create(this._backFill, {})),
              (this._globalTimelineStyles =
                this._elementTimelineStylesLookup.get(n)),
              this._globalTimelineStyles ||
                ((this._globalTimelineStyles = this._localTimelineStyles),
                this._elementTimelineStylesLookup.set(
                  n,
                  this._localTimelineStyles
                )),
              this._loadKeyframe();
          }
          return (
            _createClass(e, [
              {
                key: "containsAnimation",
                value: function () {
                  switch (this._keyframes.size) {
                    case 0:
                      return !1;
                    case 1:
                      return this.getCurrentStyleProperties().length > 0;
                    default:
                      return !0;
                  }
                },
              },
              {
                key: "getCurrentStyleProperties",
                value: function () {
                  return Object.keys(this._currentKeyframe);
                },
              },
              {
                key: "delayNextStep",
                value: function (e) {
                  var t =
                    1 == this._keyframes.size &&
                    Object.keys(this._pendingStyles).length;
                  this.duration || t
                    ? (this.forwardTime(this.currentTime + e),
                      t && this.snapshotCurrentStyles())
                    : (this.startTime += e);
                },
              },
              {
                key: "fork",
                value: function (t, n) {
                  return (
                    this.applyStylesToKeyframe(),
                    new e(
                      this._driver,
                      t,
                      n || this.currentTime,
                      this._elementTimelineStylesLookup
                    )
                  );
                },
              },
              {
                key: "_loadKeyframe",
                value: function () {
                  this._currentKeyframe &&
                    (this._previousKeyframe = this._currentKeyframe),
                    (this._currentKeyframe = this._keyframes.get(
                      this.duration
                    )),
                    this._currentKeyframe ||
                      ((this._currentKeyframe = Object.create(
                        this._backFill,
                        {}
                      )),
                      this._keyframes.set(
                        this.duration,
                        this._currentKeyframe
                      ));
                },
              },
              {
                key: "forwardFrame",
                value: function () {
                  (this.duration += 1), this._loadKeyframe();
                },
              },
              {
                key: "forwardTime",
                value: function (e) {
                  this.applyStylesToKeyframe(),
                    (this.duration = e),
                    this._loadKeyframe();
                },
              },
              {
                key: "_updateStyle",
                value: function (e, t) {
                  (this._localTimelineStyles[e] = t),
                    (this._globalTimelineStyles[e] = t),
                    (this._styleSummary[e] = {
                      time: this.currentTime,
                      value: t,
                    });
                },
              },
              {
                key: "allowOnlyTimelineStyles",
                value: function () {
                  return (
                    this._currentEmptyStepKeyframe !== this._currentKeyframe
                  );
                },
              },
              {
                key: "applyEmptyStep",
                value: function (e) {
                  var t = this;
                  e && (this._previousKeyframe.easing = e),
                    Object.keys(this._globalTimelineStyles).forEach(function (
                      e
                    ) {
                      (t._backFill[e] = t._globalTimelineStyles[e] || "*"),
                        (t._currentKeyframe[e] = "*");
                    }),
                    (this._currentEmptyStepKeyframe = this._currentKeyframe);
                },
              },
              {
                key: "setStyles",
                value: function (e, t, n, r) {
                  var i = this;
                  t && (this._previousKeyframe.easing = t);
                  var o = (r && r.params) || {},
                    a = (function (e, t) {
                      var n,
                        r = {};
                      return (
                        e.forEach(function (e) {
                          "*" === e
                            ? (n = n || Object.keys(t)).forEach(function (e) {
                                r[e] = "*";
                              })
                            : Yv(e, !1, r);
                        }),
                        r
                      );
                    })(e, this._globalTimelineStyles);
                  Object.keys(a).forEach(function (e) {
                    var t = ap(a[e], o, n);
                    (i._pendingStyles[e] = t),
                      i._localTimelineStyles.hasOwnProperty(e) ||
                        (i._backFill[e] =
                          i._globalTimelineStyles.hasOwnProperty(e)
                            ? i._globalTimelineStyles[e]
                            : "*"),
                      i._updateStyle(e, t);
                  });
                },
              },
              {
                key: "applyStylesToKeyframe",
                value: function () {
                  var e = this,
                    t = this._pendingStyles,
                    n = Object.keys(t);
                  0 != n.length &&
                    ((this._pendingStyles = {}),
                    n.forEach(function (n) {
                      e._currentKeyframe[n] = t[n];
                    }),
                    Object.keys(this._localTimelineStyles).forEach(function (
                      t
                    ) {
                      e._currentKeyframe.hasOwnProperty(t) ||
                        (e._currentKeyframe[t] = e._localTimelineStyles[t]);
                    }));
                },
              },
              {
                key: "snapshotCurrentStyles",
                value: function () {
                  var e = this;
                  Object.keys(this._localTimelineStyles).forEach(function (t) {
                    var n = e._localTimelineStyles[t];
                    (e._pendingStyles[t] = n), e._updateStyle(t, n);
                  });
                },
              },
              {
                key: "getFinalKeyframe",
                value: function () {
                  return this._keyframes.get(this.duration);
                },
              },
              {
                key: "mergeTimelineCollectedStyles",
                value: function (e) {
                  var t = this;
                  Object.keys(e._styleSummary).forEach(function (n) {
                    var r = t._styleSummary[n],
                      i = e._styleSummary[n];
                    (!r || i.time > r.time) && t._updateStyle(n, i.value);
                  });
                },
              },
              {
                key: "buildKeyframes",
                value: function () {
                  var e = this;
                  this.applyStylesToKeyframe();
                  var t = new Set(),
                    n = new Set(),
                    r = 1 === this._keyframes.size && 0 === this.duration,
                    i = [];
                  this._keyframes.forEach(function (o, a) {
                    var s = Yv(o, !0);
                    Object.keys(s).forEach(function (e) {
                      var r = s[e];
                      "!" == r ? t.add(e) : "*" == r && n.add(e);
                    }),
                      r || (s.offset = a / e.duration),
                      i.push(s);
                  });
                  var o = t.size ? sp(t.values()) : [],
                    a = n.size ? sp(n.values()) : [];
                  if (r) {
                    var s = i[0],
                      u = Jv(s);
                    (s.offset = 0), (u.offset = 1), (i = [s, u]);
                  }
                  return Sp(
                    this.element,
                    i,
                    o,
                    a,
                    this.duration,
                    this.startTime,
                    this.easing,
                    !1
                  );
                },
              },
              {
                key: "currentTime",
                get: function () {
                  return this.startTime + this.duration;
                },
              },
              {
                key: "properties",
                get: function () {
                  var e = [];
                  for (var t in this._currentKeyframe) e.push(t);
                  return e;
                },
              },
            ]),
            e
          );
        })(),
        Np = (function (e) {
          function t(e, n, r, i, o, a) {
            var s,
              u =
                arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            return (
              _classCallCheck(this, t),
              ((s = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, e, n, a.delay)
              )).element = n),
              (s.keyframes = r),
              (s.preStyleProps = i),
              (s.postStyleProps = o),
              (s._stretchStartingKeyframe = u),
              (s.timings = {
                duration: a.duration,
                delay: a.delay,
                easing: a.easing,
              }),
              s
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "containsAnimation",
                value: function () {
                  return this.keyframes.length > 1;
                },
              },
              {
                key: "buildKeyframes",
                value: function () {
                  var e = this.keyframes,
                    t = this.timings,
                    n = t.delay,
                    r = t.duration,
                    i = t.easing;
                  if (this._stretchStartingKeyframe && n) {
                    var o = [],
                      a = r + n,
                      s = n / a,
                      u = Yv(e[0], !1);
                    (u.offset = 0), o.push(u);
                    var l = Yv(e[0], !1);
                    (l.offset = Dp(s)), o.push(l);
                    for (var c = e.length - 1, h = 1; h <= c; h++) {
                      var f = Yv(e[h], !1);
                      (f.offset = Dp((n + f.offset * r) / a)), o.push(f);
                    }
                    (r = a), (n = 0), (i = ""), (e = o);
                  }
                  return Sp(
                    this.element,
                    e,
                    this.preStyleProps,
                    this.postStyleProps,
                    r,
                    n,
                    i,
                    !0
                  );
                },
              },
            ]),
            t
          );
        })(Ip);
      function Dp(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
          n = Math.pow(10, t - 1);
        return Math.round(e * n) / n;
      }
      var jp = function e() {
          _classCallCheck(this, e);
        },
        Fp = (function (e) {
          function t() {
            return (
              _classCallCheck(this, t),
              _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).apply(this, arguments)
              )
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "normalizePropertyName",
                value: function (e, t) {
                  return lp(e);
                },
              },
              {
                key: "normalizeStyleValue",
                value: function (e, t, n, r) {
                  var i = "",
                    o = n.toString().trim();
                  if (Lp[t] && 0 !== n && "0" !== n)
                    if ("number" == typeof n) i = "px";
                    else {
                      var a = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
                      a &&
                        0 == a[1].length &&
                        r.push(
                          "Please provide a CSS unit value for "
                            .concat(e, ":")
                            .concat(n)
                        );
                    }
                  return o + i;
                },
              },
            ]),
            t
          );
        })(jp),
        Lp = (function (e) {
          var t = {};
          return (
            e.forEach(function (e) {
              return (t[e] = !0);
            }),
            t
          );
        })(
          "width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(
            ","
          )
        );
      function Up(e, t, n, r, i, o, a, s, u, l, c, h, f) {
        return {
          type: 0,
          element: e,
          triggerName: t,
          isRemovalTransition: i,
          fromState: n,
          fromStyles: o,
          toState: r,
          toStyles: a,
          timelines: s,
          queriedElements: u,
          preStyleProps: l,
          postStyleProps: c,
          totalTime: h,
          errors: f,
        };
      }
      var Vp = {},
        Mp = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this._triggerName = t),
              (this.ast = n),
              (this._stateStyles = r);
          }
          return (
            _createClass(e, [
              {
                key: "match",
                value: function (e, t, n, r) {
                  return (function (e, t, n, r, i) {
                    return e.some(function (e) {
                      return e(t, n, r, i);
                    });
                  })(this.ast.matchers, e, t, n, r);
                },
              },
              {
                key: "buildStyles",
                value: function (e, t, n) {
                  var r = this._stateStyles["*"],
                    i = this._stateStyles[e],
                    o = r ? r.buildStyles(t, n) : {};
                  return i ? i.buildStyles(t, n) : o;
                },
              },
              {
                key: "build",
                value: function (e, t, n, r, i, o, a, s, u, l) {
                  var c = [],
                    h = (this.ast.options && this.ast.options.params) || Vp,
                    f = this.buildStyles(n, (a && a.params) || Vp, c),
                    d = (s && s.params) || Vp,
                    v = this.buildStyles(r, d, c),
                    p = new Set(),
                    y = new Map(),
                    g = new Map(),
                    m = "void" === r,
                    _ = { params: Object.assign(Object.assign({}, h), d) },
                    k = l
                      ? []
                      : xp(e, t, this.ast.animation, i, o, f, v, _, u, c),
                    C = 0;
                  if (
                    (k.forEach(function (e) {
                      C = Math.max(e.duration + e.delay, C);
                    }),
                    c.length)
                  )
                    return Up(
                      t,
                      this._triggerName,
                      n,
                      r,
                      m,
                      f,
                      v,
                      [],
                      [],
                      y,
                      g,
                      C,
                      c
                    );
                  k.forEach(function (e) {
                    var n = e.element,
                      r = Iv(y, n, {});
                    e.preStyleProps.forEach(function (e) {
                      return (r[e] = !0);
                    });
                    var i = Iv(g, n, {});
                    e.postStyleProps.forEach(function (e) {
                      return (i[e] = !0);
                    }),
                      n !== t && p.add(n);
                  });
                  var b = sp(p.values());
                  return Up(t, this._triggerName, n, r, m, f, v, k, b, y, g, C);
                },
              },
            ]),
            e
          );
        })(),
        Hp = (function () {
          function e(t, n) {
            _classCallCheck(this, e),
              (this.styles = t),
              (this.defaultParams = n);
          }
          return (
            _createClass(e, [
              {
                key: "buildStyles",
                value: function (e, t) {
                  var n = {},
                    r = Jv(this.defaultParams);
                  return (
                    Object.keys(e).forEach(function (t) {
                      var n = e[t];
                      null != n && (r[t] = n);
                    }),
                    this.styles.styles.forEach(function (e) {
                      if ("string" != typeof e) {
                        var i = e;
                        Object.keys(i).forEach(function (e) {
                          var o = i[e];
                          o.length > 1 && (o = ap(o, r, t)), (n[e] = o);
                        });
                      }
                    }),
                    n
                  );
                },
              },
            ]),
            e
          );
        })(),
        zp = (function () {
          function e(t, n) {
            var r = this;
            _classCallCheck(this, e),
              (this.name = t),
              (this.ast = n),
              (this.transitionFactories = []),
              (this.states = {}),
              n.states.forEach(function (e) {
                r.states[e.name] = new Hp(
                  e.style,
                  (e.options && e.options.params) || {}
                );
              }),
              qp(this.states, "true", "1"),
              qp(this.states, "false", "0"),
              n.transitions.forEach(function (e) {
                r.transitionFactories.push(new Mp(t, e, r.states));
              }),
              (this.fallbackTransition = new Mp(
                t,
                {
                  type: 1,
                  animation: { type: 2, steps: [], options: null },
                  matchers: [
                    function (e, t) {
                      return !0;
                    },
                  ],
                  options: null,
                  queryCount: 0,
                  depCount: 0,
                },
                this.states
              ));
          }
          return (
            _createClass(e, [
              {
                key: "matchTransition",
                value: function (e, t, n, r) {
                  return (
                    this.transitionFactories.find(function (i) {
                      return i.match(e, t, n, r);
                    }) || null
                  );
                },
              },
              {
                key: "matchStyles",
                value: function (e, t, n) {
                  return this.fallbackTransition.buildStyles(e, t, n);
                },
              },
              {
                key: "containsQueries",
                get: function () {
                  return this.ast.queryCount > 0;
                },
              },
            ]),
            e
          );
        })();
      function qp(e, t, n) {
        e.hasOwnProperty(t)
          ? e.hasOwnProperty(n) || (e[n] = e[t])
          : e.hasOwnProperty(n) && (e[t] = e[n]);
      }
      var Bp = new Ep(),
        Wp = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.bodyNode = t),
              (this._driver = n),
              (this._normalizer = r),
              (this._animations = {}),
              (this._playersById = {}),
              (this.players = []);
          }
          return (
            _createClass(e, [
              {
                key: "register",
                value: function (e, t) {
                  var n = [],
                    r = mp(this._driver, t, n);
                  if (n.length)
                    throw new Error(
                      "Unable to build the animation due to the following errors: ".concat(
                        n.join("\n")
                      )
                    );
                  this._animations[e] = r;
                },
              },
              {
                key: "_buildPlayer",
                value: function (e, t, n) {
                  var r = e.element,
                    i = xv(0, this._normalizer, 0, e.keyframes, t, n);
                  return this._driver.animate(
                    r,
                    i,
                    e.duration,
                    e.delay,
                    e.easing,
                    [],
                    !0
                  );
                },
              },
              {
                key: "create",
                value: function (e, t) {
                  var n,
                    r = this,
                    i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    o = [],
                    a = this._animations[e],
                    s = new Map();
                  if (
                    (a
                      ? (n = xp(
                          this._driver,
                          t,
                          a,
                          "ng-enter",
                          "ng-leave",
                          {},
                          {},
                          i,
                          Bp,
                          o
                        )).forEach(function (e) {
                          var t = Iv(s, e.element, {});
                          e.postStyleProps.forEach(function (e) {
                            return (t[e] = null);
                          });
                        })
                      : (o.push(
                          "The requested animation doesn't exist or has already been destroyed"
                        ),
                        (n = [])),
                    o.length)
                  )
                    throw new Error(
                      "Unable to create the animation due to the following errors: ".concat(
                        o.join("\n")
                      )
                    );
                  s.forEach(function (e, t) {
                    Object.keys(e).forEach(function (n) {
                      e[n] = r._driver.computeStyle(t, n, "*");
                    });
                  });
                  var u = Av(
                    n.map(function (e) {
                      var t = s.get(e.element);
                      return r._buildPlayer(e, {}, t);
                    })
                  );
                  return (
                    (this._playersById[e] = u),
                    u.onDestroy(function () {
                      return r.destroy(e);
                    }),
                    this.players.push(u),
                    u
                  );
                },
              },
              {
                key: "destroy",
                value: function (e) {
                  var t = this._getPlayer(e);
                  t.destroy(), delete this._playersById[e];
                  var n = this.players.indexOf(t);
                  n >= 0 && this.players.splice(n, 1);
                },
              },
              {
                key: "_getPlayer",
                value: function (e) {
                  var t = this._playersById[e];
                  if (!t)
                    throw new Error(
                      "Unable to find the timeline player referenced by ".concat(
                        e
                      )
                    );
                  return t;
                },
              },
              {
                key: "listen",
                value: function (e, t, n, r) {
                  var i = Rv(t, "", "", "");
                  return Pv(this._getPlayer(e), n, i, r), function () {};
                },
              },
              {
                key: "command",
                value: function (e, t, n, r) {
                  if ("register" != n)
                    if ("create" != n) {
                      var i = this._getPlayer(e);
                      switch (n) {
                        case "play":
                          i.play();
                          break;
                        case "pause":
                          i.pause();
                          break;
                        case "reset":
                          i.reset();
                          break;
                        case "restart":
                          i.restart();
                          break;
                        case "finish":
                          i.finish();
                          break;
                        case "init":
                          i.init();
                          break;
                        case "setPosition":
                          i.setPosition(parseFloat(r[0]));
                          break;
                        case "destroy":
                          this.destroy(e);
                      }
                    } else this.create(e, t, r[0] || {});
                  else this.register(e, r[0]);
                },
              },
            ]),
            e
          );
        })(),
        Qp = [],
        Kp = {
          namespaceId: "",
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1,
        },
        Zp = {
          namespaceId: "",
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0,
        },
        Gp = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
            _classCallCheck(this, e), (this.namespaceId = n);
            var r,
              i = t && t.hasOwnProperty("value");
            if (((this.value = null != (r = i ? t.value : t) ? r : null), i)) {
              var o = Jv(t);
              delete o.value, (this.options = o);
            } else this.options = {};
            this.options.params || (this.options.params = {});
          }
          return (
            _createClass(e, [
              {
                key: "absorbOptions",
                value: function (e) {
                  var t = e.params;
                  if (t) {
                    var n = this.options.params;
                    Object.keys(t).forEach(function (e) {
                      null == n[e] && (n[e] = t[e]);
                    });
                  }
                },
              },
              {
                key: "params",
                get: function () {
                  return this.options.params;
                },
              },
            ]),
            e
          );
        })(),
        $p = new Gp("void"),
        Jp = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.id = t),
              (this.hostElement = n),
              (this._engine = r),
              (this.players = []),
              (this._triggers = {}),
              (this._queue = []),
              (this._elementListeners = new Map()),
              (this._hostClassName = "ng-tns-" + t),
              iy(n, this._hostClassName);
          }
          return (
            _createClass(e, [
              {
                key: "listen",
                value: function (e, t, n, r) {
                  var i,
                    o = this;
                  if (!this._triggers.hasOwnProperty(t))
                    throw new Error(
                      'Unable to listen on the animation trigger event "'
                        .concat(n, '" because the animation trigger "')
                        .concat(t, "\" doesn't exist!")
                    );
                  if (null == n || 0 == n.length)
                    throw new Error(
                      'Unable to listen on the animation trigger "'.concat(
                        t,
                        '" because the provided event is undefined!'
                      )
                    );
                  if ("start" != (i = n) && "done" != i)
                    throw new Error(
                      'The provided animation trigger event "'
                        .concat(n, '" for the animation trigger "')
                        .concat(t, '" is not supported!')
                    );
                  var a = Iv(this._elementListeners, e, []),
                    s = { name: t, phase: n, callback: r };
                  a.push(s);
                  var u = Iv(this._engine.statesByElement, e, {});
                  return (
                    u.hasOwnProperty(t) ||
                      (iy(e, "ng-trigger"),
                      iy(e, "ng-trigger-" + t),
                      (u[t] = $p)),
                    function () {
                      o._engine.afterFlush(function () {
                        var e = a.indexOf(s);
                        e >= 0 && a.splice(e, 1), o._triggers[t] || delete u[t];
                      });
                    }
                  );
                },
              },
              {
                key: "register",
                value: function (e, t) {
                  return !this._triggers[e] && ((this._triggers[e] = t), !0);
                },
              },
              {
                key: "_getTrigger",
                value: function (e) {
                  var t = this._triggers[e];
                  if (!t)
                    throw new Error(
                      'The provided animation trigger "'.concat(
                        e,
                        '" has not been registered!'
                      )
                    );
                  return t;
                },
              },
              {
                key: "trigger",
                value: function (e, t, n) {
                  var r = this,
                    i =
                      !(arguments.length > 3 && void 0 !== arguments[3]) ||
                      arguments[3],
                    o = this._getTrigger(t),
                    a = new Xp(this.id, t, e),
                    s = this._engine.statesByElement.get(e);
                  s ||
                    (iy(e, "ng-trigger"),
                    iy(e, "ng-trigger-" + t),
                    this._engine.statesByElement.set(e, (s = {})));
                  var u = s[t],
                    l = new Gp(n, this.id);
                  if (
                    (!(n && n.hasOwnProperty("value")) &&
                      u &&
                      l.absorbOptions(u.options),
                    (s[t] = l),
                    u || (u = $p),
                    "void" === l.value || u.value !== l.value)
                  ) {
                    var c = Iv(this._engine.playersByElement, e, []);
                    c.forEach(function (e) {
                      e.namespaceId == r.id &&
                        e.triggerName == t &&
                        e.queued &&
                        e.destroy();
                    });
                    var h = o.matchTransition(u.value, l.value, e, l.params),
                      f = !1;
                    if (!h) {
                      if (!i) return;
                      (h = o.fallbackTransition), (f = !0);
                    }
                    return (
                      this._engine.totalQueuedPlayers++,
                      this._queue.push({
                        element: e,
                        triggerName: t,
                        transition: h,
                        fromState: u,
                        toState: l,
                        player: a,
                        isFallbackTransition: f,
                      }),
                      f ||
                        (iy(e, "ng-animate-queued"),
                        a.onStart(function () {
                          oy(e, "ng-animate-queued");
                        })),
                      a.onDone(function () {
                        var t = r.players.indexOf(a);
                        t >= 0 && r.players.splice(t, 1);
                        var n = r._engine.playersByElement.get(e);
                        if (n) {
                          var i = n.indexOf(a);
                          i >= 0 && n.splice(i, 1);
                        }
                      }),
                      this.players.push(a),
                      c.push(a),
                      a
                    );
                  }
                  if (
                    !(function (e, t) {
                      var n = Object.keys(e),
                        r = Object.keys(t);
                      if (n.length != r.length) return !1;
                      for (var i = 0; i < n.length; i++) {
                        var o = n[i];
                        if (!t.hasOwnProperty(o) || e[o] !== t[o]) return !1;
                      }
                      return !0;
                    })(u.params, l.params)
                  ) {
                    var d = [],
                      v = o.matchStyles(u.value, u.params, d),
                      p = o.matchStyles(l.value, l.params, d);
                    d.length
                      ? this._engine.reportError(d)
                      : this._engine.afterFlush(function () {
                          np(e, v), tp(e, p);
                        });
                  }
                },
              },
              {
                key: "deregister",
                value: function (e) {
                  var t = this;
                  delete this._triggers[e],
                    this._engine.statesByElement.forEach(function (t, n) {
                      delete t[e];
                    }),
                    this._elementListeners.forEach(function (n, r) {
                      t._elementListeners.set(
                        r,
                        n.filter(function (t) {
                          return t.name != e;
                        })
                      );
                    });
                },
              },
              {
                key: "clearElementCache",
                value: function (e) {
                  this._engine.statesByElement.delete(e),
                    this._elementListeners.delete(e);
                  var t = this._engine.playersByElement.get(e);
                  t &&
                    (t.forEach(function (e) {
                      return e.destroy();
                    }),
                    this._engine.playersByElement.delete(e));
                },
              },
              {
                key: "_signalRemovalForInnerTriggers",
                value: function (e, t) {
                  var n = this,
                    r = this._engine.driver.query(e, ".ng-trigger", !0);
                  r.forEach(function (e) {
                    if (!e.__ng_removed) {
                      var r = n._engine.fetchNamespacesByElement(e);
                      r.size
                        ? r.forEach(function (n) {
                            return n.triggerLeaveAnimation(e, t, !1, !0);
                          })
                        : n.clearElementCache(e);
                    }
                  }),
                    this._engine.afterFlushAnimationsDone(function () {
                      return r.forEach(function (e) {
                        return n.clearElementCache(e);
                      });
                    });
                },
              },
              {
                key: "triggerLeaveAnimation",
                value: function (e, t, n, r) {
                  var i = this,
                    o = this._engine.statesByElement.get(e);
                  if (o) {
                    var a = [];
                    if (
                      (Object.keys(o).forEach(function (t) {
                        if (i._triggers[t]) {
                          var n = i.trigger(e, t, "void", r);
                          n && a.push(n);
                        }
                      }),
                      a.length)
                    )
                      return (
                        this._engine.markElementAsRemoved(this.id, e, !0, t),
                        n &&
                          Av(a).onDone(function () {
                            return i._engine.processLeaveNode(e);
                          }),
                        !0
                      );
                  }
                  return !1;
                },
              },
              {
                key: "prepareLeaveAnimationListeners",
                value: function (e) {
                  var t = this,
                    n = this._elementListeners.get(e);
                  if (n) {
                    var r = new Set();
                    n.forEach(function (n) {
                      var i = n.name;
                      if (!r.has(i)) {
                        r.add(i);
                        var o = t._triggers[i].fallbackTransition,
                          a = t._engine.statesByElement.get(e)[i] || $p,
                          s = new Gp("void"),
                          u = new Xp(t.id, i, e);
                        t._engine.totalQueuedPlayers++,
                          t._queue.push({
                            element: e,
                            triggerName: i,
                            transition: o,
                            fromState: a,
                            toState: s,
                            player: u,
                            isFallbackTransition: !0,
                          });
                      }
                    });
                  }
                },
              },
              {
                key: "removeNode",
                value: function (e, t) {
                  var n = this,
                    r = this._engine;
                  if (
                    (e.childElementCount &&
                      this._signalRemovalForInnerTriggers(e, t),
                    !this.triggerLeaveAnimation(e, t, !0))
                  ) {
                    var i = !1;
                    if (r.totalAnimations) {
                      var o = r.players.length
                        ? r.playersByQueriedElement.get(e)
                        : [];
                      if (o && o.length) i = !0;
                      else
                        for (var a = e; (a = a.parentNode); )
                          if (r.statesByElement.get(a)) {
                            i = !0;
                            break;
                          }
                    }
                    if ((this.prepareLeaveAnimationListeners(e), i))
                      r.markElementAsRemoved(this.id, e, !1, t);
                    else {
                      var s = e.__ng_removed;
                      (s && s !== Kp) ||
                        (r.afterFlush(function () {
                          return n.clearElementCache(e);
                        }),
                        r.destroyInnerAnimations(e),
                        r._onRemovalComplete(e, t));
                    }
                  }
                },
              },
              {
                key: "insertNode",
                value: function (e, t) {
                  iy(e, this._hostClassName);
                },
              },
              {
                key: "drainQueuedTransitions",
                value: function (e) {
                  var t = this,
                    n = [];
                  return (
                    this._queue.forEach(function (r) {
                      var i = r.player;
                      if (!i.destroyed) {
                        var o = r.element,
                          a = t._elementListeners.get(o);
                        a &&
                          a.forEach(function (t) {
                            if (t.name == r.triggerName) {
                              var n = Rv(
                                o,
                                r.triggerName,
                                r.fromState.value,
                                r.toState.value
                              );
                              (n._data = e),
                                Pv(r.player, t.phase, n, t.callback);
                            }
                          }),
                          i.markedForDestroy
                            ? t._engine.afterFlush(function () {
                                i.destroy();
                              })
                            : n.push(r);
                      }
                    }),
                    (this._queue = []),
                    n.sort(function (e, n) {
                      var r = e.transition.ast.depCount,
                        i = n.transition.ast.depCount;
                      return 0 == r || 0 == i
                        ? r - i
                        : t._engine.driver.containsElement(e.element, n.element)
                        ? 1
                        : -1;
                    })
                  );
                },
              },
              {
                key: "destroy",
                value: function (e) {
                  this.players.forEach(function (e) {
                    return e.destroy();
                  }),
                    this._signalRemovalForInnerTriggers(this.hostElement, e);
                },
              },
              {
                key: "elementContainsData",
                value: function (e) {
                  var t = !1;
                  return (
                    this._elementListeners.has(e) && (t = !0),
                    (t =
                      !!this._queue.find(function (t) {
                        return t.element === e;
                      }) || t)
                  );
                },
              },
            ]),
            e
          );
        })(),
        Yp = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.bodyNode = t),
              (this.driver = n),
              (this._normalizer = r),
              (this.players = []),
              (this.newHostElements = new Map()),
              (this.playersByElement = new Map()),
              (this.playersByQueriedElement = new Map()),
              (this.statesByElement = new Map()),
              (this.disabledNodes = new Set()),
              (this.totalAnimations = 0),
              (this.totalQueuedPlayers = 0),
              (this._namespaceLookup = {}),
              (this._namespaceList = []),
              (this._flushFns = []),
              (this._whenQuietFns = []),
              (this.namespacesByHostElement = new Map()),
              (this.collectedEnterElements = []),
              (this.collectedLeaveElements = []),
              (this.onRemovalComplete = function (e, t) {});
          }
          return (
            _createClass(e, [
              {
                key: "_onRemovalComplete",
                value: function (e, t) {
                  this.onRemovalComplete(e, t);
                },
              },
              {
                key: "createNamespace",
                value: function (e, t) {
                  var n = new Jp(e, t, this);
                  return (
                    t.parentNode
                      ? this._balanceNamespaceList(n, t)
                      : (this.newHostElements.set(t, n),
                        this.collectEnterElement(t)),
                    (this._namespaceLookup[e] = n)
                  );
                },
              },
              {
                key: "_balanceNamespaceList",
                value: function (e, t) {
                  var n = this._namespaceList.length - 1;
                  if (n >= 0) {
                    for (var r = !1, i = n; i >= 0; i--)
                      if (
                        this.driver.containsElement(
                          this._namespaceList[i].hostElement,
                          t
                        )
                      ) {
                        this._namespaceList.splice(i + 1, 0, e), (r = !0);
                        break;
                      }
                    r || this._namespaceList.splice(0, 0, e);
                  } else this._namespaceList.push(e);
                  return this.namespacesByHostElement.set(t, e), e;
                },
              },
              {
                key: "register",
                value: function (e, t) {
                  var n = this._namespaceLookup[e];
                  return n || (n = this.createNamespace(e, t)), n;
                },
              },
              {
                key: "registerTrigger",
                value: function (e, t, n) {
                  var r = this._namespaceLookup[e];
                  r && r.register(t, n) && this.totalAnimations++;
                },
              },
              {
                key: "destroy",
                value: function (e, t) {
                  var n = this;
                  if (e) {
                    var r = this._fetchNamespace(e);
                    this.afterFlush(function () {
                      n.namespacesByHostElement.delete(r.hostElement),
                        delete n._namespaceLookup[e];
                      var t = n._namespaceList.indexOf(r);
                      t >= 0 && n._namespaceList.splice(t, 1);
                    }),
                      this.afterFlushAnimationsDone(function () {
                        return r.destroy(t);
                      });
                  }
                },
              },
              {
                key: "_fetchNamespace",
                value: function (e) {
                  return this._namespaceLookup[e];
                },
              },
              {
                key: "fetchNamespacesByElement",
                value: function (e) {
                  var t = new Set(),
                    n = this.statesByElement.get(e);
                  if (n)
                    for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                      var o = n[r[i]].namespaceId;
                      if (o) {
                        var a = this._fetchNamespace(o);
                        a && t.add(a);
                      }
                    }
                  return t;
                },
              },
              {
                key: "trigger",
                value: function (e, t, n, r) {
                  if (ey(t)) {
                    var i = this._fetchNamespace(e);
                    if (i) return i.trigger(t, n, r), !0;
                  }
                  return !1;
                },
              },
              {
                key: "insertNode",
                value: function (e, t, n, r) {
                  if (ey(t)) {
                    var i = t.__ng_removed;
                    if (i && i.setForRemoval) {
                      (i.setForRemoval = !1), (i.setForMove = !0);
                      var o = this.collectedLeaveElements.indexOf(t);
                      o >= 0 && this.collectedLeaveElements.splice(o, 1);
                    }
                    if (e) {
                      var a = this._fetchNamespace(e);
                      a && a.insertNode(t, n);
                    }
                    r && this.collectEnterElement(t);
                  }
                },
              },
              {
                key: "collectEnterElement",
                value: function (e) {
                  this.collectedEnterElements.push(e);
                },
              },
              {
                key: "markElementAsDisabled",
                value: function (e, t) {
                  t
                    ? this.disabledNodes.has(e) ||
                      (this.disabledNodes.add(e), iy(e, "ng-animate-disabled"))
                    : this.disabledNodes.has(e) &&
                      (this.disabledNodes.delete(e),
                      oy(e, "ng-animate-disabled"));
                },
              },
              {
                key: "removeNode",
                value: function (e, t, n, r) {
                  if (ey(t)) {
                    var i = e ? this._fetchNamespace(e) : null;
                    if (
                      (i
                        ? i.removeNode(t, r)
                        : this.markElementAsRemoved(e, t, !1, r),
                      n)
                    ) {
                      var o = this.namespacesByHostElement.get(t);
                      o && o.id !== e && o.removeNode(t, r);
                    }
                  } else this._onRemovalComplete(t, r);
                },
              },
              {
                key: "markElementAsRemoved",
                value: function (e, t, n, r) {
                  this.collectedLeaveElements.push(t),
                    (t.__ng_removed = {
                      namespaceId: e,
                      setForRemoval: r,
                      hasAnimation: n,
                      removedBeforeQueried: !1,
                    });
                },
              },
              {
                key: "listen",
                value: function (e, t, n, r, i) {
                  return ey(t)
                    ? this._fetchNamespace(e).listen(t, n, r, i)
                    : function () {};
                },
              },
              {
                key: "_buildInstruction",
                value: function (e, t, n, r, i) {
                  return e.transition.build(
                    this.driver,
                    e.element,
                    e.fromState.value,
                    e.toState.value,
                    n,
                    r,
                    e.fromState.options,
                    e.toState.options,
                    t,
                    i
                  );
                },
              },
              {
                key: "destroyInnerAnimations",
                value: function (e) {
                  var t = this,
                    n = this.driver.query(e, ".ng-trigger", !0);
                  n.forEach(function (e) {
                    return t.destroyActiveAnimationsForElement(e);
                  }),
                    0 != this.playersByQueriedElement.size &&
                      (n = this.driver.query(e, ".ng-animating", !0)).forEach(
                        function (e) {
                          return t.finishActiveQueriedAnimationOnElement(e);
                        }
                      );
                },
              },
              {
                key: "destroyActiveAnimationsForElement",
                value: function (e) {
                  var t = this.playersByElement.get(e);
                  t &&
                    t.forEach(function (e) {
                      e.queued ? (e.markedForDestroy = !0) : e.destroy();
                    });
                },
              },
              {
                key: "finishActiveQueriedAnimationOnElement",
                value: function (e) {
                  var t = this.playersByQueriedElement.get(e);
                  t &&
                    t.forEach(function (e) {
                      return e.finish();
                    });
                },
              },
              {
                key: "whenRenderingDone",
                value: function () {
                  var e = this;
                  return new Promise(function (t) {
                    if (e.players.length)
                      return Av(e.players).onDone(function () {
                        return t();
                      });
                    t();
                  });
                },
              },
              {
                key: "processLeaveNode",
                value: function (e) {
                  var t = this,
                    n = e.__ng_removed;
                  if (n && n.setForRemoval) {
                    if (((e.__ng_removed = Kp), n.namespaceId)) {
                      this.destroyInnerAnimations(e);
                      var r = this._fetchNamespace(n.namespaceId);
                      r && r.clearElementCache(e);
                    }
                    this._onRemovalComplete(e, n.setForRemoval);
                  }
                  this.driver.matchesElement(e, ".ng-animate-disabled") &&
                    this.markElementAsDisabled(e, !1),
                    this.driver
                      .query(e, ".ng-animate-disabled", !0)
                      .forEach(function (e) {
                        t.markElementAsDisabled(e, !1);
                      });
                },
              },
              {
                key: "flush",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : -1,
                    n = [];
                  if (
                    (this.newHostElements.size &&
                      (this.newHostElements.forEach(function (t, n) {
                        return e._balanceNamespaceList(t, n);
                      }),
                      this.newHostElements.clear()),
                    this.totalAnimations && this.collectedEnterElements.length)
                  )
                    for (var r = 0; r < this.collectedEnterElements.length; r++)
                      iy(this.collectedEnterElements[r], "ng-star-inserted");
                  if (
                    this._namespaceList.length &&
                    (this.totalQueuedPlayers ||
                      this.collectedLeaveElements.length)
                  ) {
                    var i = [];
                    try {
                      n = this._flushAnimations(i, t);
                    } finally {
                      for (var o = 0; o < i.length; o++) i[o]();
                    }
                  } else
                    for (var a = 0; a < this.collectedLeaveElements.length; a++)
                      this.processLeaveNode(this.collectedLeaveElements[a]);
                  if (
                    ((this.totalQueuedPlayers = 0),
                    (this.collectedEnterElements.length = 0),
                    (this.collectedLeaveElements.length = 0),
                    this._flushFns.forEach(function (e) {
                      return e();
                    }),
                    (this._flushFns = []),
                    this._whenQuietFns.length)
                  ) {
                    var s = this._whenQuietFns;
                    (this._whenQuietFns = []),
                      n.length
                        ? Av(n).onDone(function () {
                            s.forEach(function (e) {
                              return e();
                            });
                          })
                        : s.forEach(function (e) {
                            return e();
                          });
                  }
                },
              },
              {
                key: "reportError",
                value: function (e) {
                  throw new Error(
                    "Unable to process animations due to the following failed trigger transitions\n ".concat(
                      e.join("\n")
                    )
                  );
                },
              },
              {
                key: "_flushAnimations",
                value: function (e, t) {
                  var n = this,
                    r = new Ep(),
                    i = [],
                    o = new Map(),
                    a = [],
                    s = new Map(),
                    u = new Map(),
                    l = new Map(),
                    c = new Set();
                  this.disabledNodes.forEach(function (e) {
                    c.add(e);
                    for (
                      var t = n.driver.query(e, ".ng-animate-queued", !0),
                        r = 0;
                      r < t.length;
                      r++
                    )
                      c.add(t[r]);
                  });
                  var h = this.bodyNode,
                    f = Array.from(this.statesByElement.keys()),
                    d = ry(f, this.collectedEnterElements),
                    v = new Map(),
                    p = 0;
                  d.forEach(function (e, t) {
                    var n = "ng-enter" + p++;
                    v.set(t, n),
                      e.forEach(function (e) {
                        return iy(e, n);
                      });
                  });
                  for (
                    var y = [], g = new Set(), m = new Set(), _ = 0;
                    _ < this.collectedLeaveElements.length;
                    _++
                  ) {
                    var k = this.collectedLeaveElements[_],
                      C = k.__ng_removed;
                    C &&
                      C.setForRemoval &&
                      (y.push(k),
                      g.add(k),
                      C.hasAnimation
                        ? this.driver
                            .query(k, ".ng-star-inserted", !0)
                            .forEach(function (e) {
                              return g.add(e);
                            })
                        : m.add(k));
                  }
                  var b = new Map(),
                    w = ry(f, Array.from(g));
                  w.forEach(function (e, t) {
                    var n = "ng-leave" + p++;
                    b.set(t, n),
                      e.forEach(function (e) {
                        return iy(e, n);
                      });
                  }),
                    e.push(function () {
                      d.forEach(function (e, t) {
                        var n = v.get(t);
                        e.forEach(function (e) {
                          return oy(e, n);
                        });
                      }),
                        w.forEach(function (e, t) {
                          var n = b.get(t);
                          e.forEach(function (e) {
                            return oy(e, n);
                          });
                        }),
                        y.forEach(function (e) {
                          n.processLeaveNode(e);
                        });
                    });
                  for (
                    var S = [], E = [], T = this._namespaceList.length - 1;
                    T >= 0;
                    T--
                  )
                    this._namespaceList[T].drainQueuedTransitions(t).forEach(
                      function (e) {
                        var t = e.player,
                          o = e.element;
                        if ((S.push(t), n.collectedEnterElements.length)) {
                          var c = o.__ng_removed;
                          if (c && c.setForMove) return void t.destroy();
                        }
                        var f = !h || !n.driver.containsElement(h, o),
                          d = b.get(o),
                          p = v.get(o),
                          y = n._buildInstruction(e, r, p, d, f);
                        if (!y.errors || !y.errors.length)
                          return f
                            ? (t.onStart(function () {
                                return np(o, y.fromStyles);
                              }),
                              t.onDestroy(function () {
                                return tp(o, y.toStyles);
                              }),
                              void i.push(t))
                            : e.isFallbackTransition
                            ? (t.onStart(function () {
                                return np(o, y.fromStyles);
                              }),
                              t.onDestroy(function () {
                                return tp(o, y.toStyles);
                              }),
                              void i.push(t))
                            : (y.timelines.forEach(function (e) {
                                return (e.stretchStartingKeyframe = !0);
                              }),
                              r.append(o, y.timelines),
                              a.push({ instruction: y, player: t, element: o }),
                              y.queriedElements.forEach(function (e) {
                                return Iv(s, e, []).push(t);
                              }),
                              y.preStyleProps.forEach(function (e, t) {
                                var n = Object.keys(e);
                                if (n.length) {
                                  var r = u.get(t);
                                  r || u.set(t, (r = new Set())),
                                    n.forEach(function (e) {
                                      return r.add(e);
                                    });
                                }
                              }),
                              void y.postStyleProps.forEach(function (e, t) {
                                var n = Object.keys(e),
                                  r = l.get(t);
                                r || l.set(t, (r = new Set())),
                                  n.forEach(function (e) {
                                    return r.add(e);
                                  });
                              }));
                        E.push(y);
                      }
                    );
                  if (E.length) {
                    var A = [];
                    E.forEach(function (e) {
                      A.push(
                        "@".concat(e.triggerName, " has failed due to:\n")
                      ),
                        e.errors.forEach(function (e) {
                          return A.push("- ".concat(e, "\n"));
                        });
                    }),
                      S.forEach(function (e) {
                        return e.destroy();
                      }),
                      this.reportError(A);
                  }
                  var x = new Map(),
                    P = new Map();
                  a.forEach(function (e) {
                    var t = e.element;
                    r.has(t) &&
                      (P.set(t, t),
                      n._beforeAnimationBuild(
                        e.player.namespaceId,
                        e.instruction,
                        x
                      ));
                  }),
                    i.forEach(function (e) {
                      var t = e.element;
                      n._getPreviousPlayers(
                        t,
                        !1,
                        e.namespaceId,
                        e.triggerName,
                        null
                      ).forEach(function (e) {
                        Iv(x, t, []).push(e), e.destroy();
                      });
                    });
                  var O = y.filter(function (e) {
                      return sy(e, u, l);
                    }),
                    R = new Map();
                  ny(R, this.driver, m, l, "*").forEach(function (e) {
                    sy(e, u, l) && O.push(e);
                  });
                  var I = new Map();
                  d.forEach(function (e, t) {
                    ny(I, n.driver, new Set(e), u, "!");
                  }),
                    O.forEach(function (e) {
                      var t = R.get(e),
                        n = I.get(e);
                      R.set(e, Object.assign(Object.assign({}, t), n));
                    });
                  var N = [],
                    D = [],
                    j = {};
                  a.forEach(function (e) {
                    var t = e.element,
                      a = e.player,
                      s = e.instruction;
                    if (r.has(t)) {
                      if (c.has(t))
                        return (
                          a.onDestroy(function () {
                            return tp(t, s.toStyles);
                          }),
                          (a.disabled = !0),
                          a.overrideTotalTime(s.totalTime),
                          void i.push(a)
                        );
                      var u = j;
                      if (P.size > 1) {
                        for (var l = t, h = []; (l = l.parentNode); ) {
                          var f = P.get(l);
                          if (f) {
                            u = f;
                            break;
                          }
                          h.push(l);
                        }
                        h.forEach(function (e) {
                          return P.set(e, u);
                        });
                      }
                      var d = n._buildAnimation(a.namespaceId, s, x, o, I, R);
                      if ((a.setRealPlayer(d), u === j)) N.push(a);
                      else {
                        var v = n.playersByElement.get(u);
                        v && v.length && (a.parentPlayer = Av(v)), i.push(a);
                      }
                    } else
                      np(t, s.fromStyles),
                        a.onDestroy(function () {
                          return tp(t, s.toStyles);
                        }),
                        D.push(a),
                        c.has(t) && i.push(a);
                  }),
                    D.forEach(function (e) {
                      var t = o.get(e.element);
                      if (t && t.length) {
                        var n = Av(t);
                        e.setRealPlayer(n);
                      }
                    }),
                    i.forEach(function (e) {
                      e.parentPlayer
                        ? e.syncPlayerEvents(e.parentPlayer)
                        : e.destroy();
                    });
                  for (var F = 0; F < y.length; F++) {
                    var L = y[F],
                      U = L.__ng_removed;
                    if ((oy(L, "ng-leave"), !U || !U.hasAnimation)) {
                      var V = [];
                      if (s.size) {
                        var M = s.get(L);
                        M && M.length && V.push.apply(V, _toConsumableArray(M));
                        for (
                          var H = this.driver.query(L, ".ng-animating", !0),
                            z = 0;
                          z < H.length;
                          z++
                        ) {
                          var q = s.get(H[z]);
                          q &&
                            q.length &&
                            V.push.apply(V, _toConsumableArray(q));
                        }
                      }
                      var B = V.filter(function (e) {
                        return !e.destroyed;
                      });
                      B.length ? ay(this, L, B) : this.processLeaveNode(L);
                    }
                  }
                  return (
                    (y.length = 0),
                    N.forEach(function (e) {
                      n.players.push(e),
                        e.onDone(function () {
                          e.destroy();
                          var t = n.players.indexOf(e);
                          n.players.splice(t, 1);
                        }),
                        e.play();
                    }),
                    N
                  );
                },
              },
              {
                key: "elementContainsData",
                value: function (e, t) {
                  var n = !1,
                    r = t.__ng_removed;
                  return (
                    r && r.setForRemoval && (n = !0),
                    this.playersByElement.has(t) && (n = !0),
                    this.playersByQueriedElement.has(t) && (n = !0),
                    this.statesByElement.has(t) && (n = !0),
                    this._fetchNamespace(e).elementContainsData(t) || n
                  );
                },
              },
              {
                key: "afterFlush",
                value: function (e) {
                  this._flushFns.push(e);
                },
              },
              {
                key: "afterFlushAnimationsDone",
                value: function (e) {
                  this._whenQuietFns.push(e);
                },
              },
              {
                key: "_getPreviousPlayers",
                value: function (e, t, n, r, i) {
                  var o = [];
                  if (t) {
                    var a = this.playersByQueriedElement.get(e);
                    a && (o = a);
                  } else {
                    var s = this.playersByElement.get(e);
                    if (s) {
                      var u = !i || "void" == i;
                      s.forEach(function (e) {
                        e.queued || ((u || e.triggerName == r) && o.push(e));
                      });
                    }
                  }
                  return (
                    (n || r) &&
                      (o = o.filter(function (e) {
                        return !(
                          (n && n != e.namespaceId) ||
                          (r && r != e.triggerName)
                        );
                      })),
                    o
                  );
                },
              },
              {
                key: "_beforeAnimationBuild",
                value: function (e, t, n) {
                  var r = this,
                    i = t.element,
                    o = t.isRemovalTransition ? void 0 : e,
                    a = t.isRemovalTransition ? void 0 : t.triggerName,
                    s = !0,
                    u = !1,
                    l = void 0;
                  try {
                    for (
                      var c,
                        h = function () {
                          var e = c.value.element,
                            s = e !== i,
                            u = Iv(n, e, []);
                          r._getPreviousPlayers(e, s, o, a, t.toState).forEach(
                            function (e) {
                              var t = e.getRealPlayer();
                              t.beforeDestroy && t.beforeDestroy(),
                                e.destroy(),
                                u.push(e);
                            }
                          );
                        },
                        f = t.timelines[Symbol.iterator]();
                      !(s = (c = f.next()).done);
                      s = !0
                    )
                      h();
                  } catch (d) {
                    (u = !0), (l = d);
                  } finally {
                    try {
                      s || null == f.return || f.return();
                    } finally {
                      if (u) throw l;
                    }
                  }
                  np(i, t.fromStyles);
                },
              },
              {
                key: "_buildAnimation",
                value: function (e, t, n, r, i, o) {
                  var a = this,
                    s = t.triggerName,
                    u = t.element,
                    l = [],
                    c = new Set(),
                    h = new Set(),
                    f = t.timelines.map(function (t) {
                      var f = t.element;
                      c.add(f);
                      var d = f.__ng_removed;
                      if (d && d.removedBeforeQueried)
                        return new Sv(t.duration, t.delay);
                      var v,
                        p,
                        y = f !== u,
                        g = ((v = (n.get(f) || Qp).map(function (e) {
                          return e.getRealPlayer();
                        })),
                        (p = []),
                        (function e(t, n) {
                          for (var r = 0; r < t.length; r++) {
                            var i = t[r];
                            i instanceof Ev ? e(i.players, n) : n.push(i);
                          }
                        })(v, p),
                        p).filter(function (e) {
                          return !!e.element && e.element === f;
                        }),
                        m = i.get(f),
                        _ = o.get(f),
                        k = xv(0, a._normalizer, 0, t.keyframes, m, _),
                        C = a._buildPlayer(t, k, g);
                      if ((t.subTimeline && r && h.add(f), y)) {
                        var b = new Xp(e, s, f);
                        b.setRealPlayer(C), l.push(b);
                      }
                      return C;
                    });
                  l.forEach(function (e) {
                    Iv(a.playersByQueriedElement, e.element, []).push(e),
                      e.onDone(function () {
                        return (function (e, t, n) {
                          var r;
                          if (e instanceof Map) {
                            if ((r = e.get(t))) {
                              if (r.length) {
                                var i = r.indexOf(n);
                                r.splice(i, 1);
                              }
                              0 == r.length && e.delete(t);
                            }
                          } else if ((r = e[t])) {
                            if (r.length) {
                              var o = r.indexOf(n);
                              r.splice(o, 1);
                            }
                            0 == r.length && delete e[t];
                          }
                          return r;
                        })(a.playersByQueriedElement, e.element, e);
                      });
                  }),
                    c.forEach(function (e) {
                      return iy(e, "ng-animating");
                    });
                  var d = Av(f);
                  return (
                    d.onDestroy(function () {
                      c.forEach(function (e) {
                        return oy(e, "ng-animating");
                      }),
                        tp(u, t.toStyles);
                    }),
                    h.forEach(function (e) {
                      Iv(r, e, []).push(d);
                    }),
                    d
                  );
                },
              },
              {
                key: "_buildPlayer",
                value: function (e, t, n) {
                  return t.length > 0
                    ? this.driver.animate(
                        e.element,
                        t,
                        e.duration,
                        e.delay,
                        e.easing,
                        n
                      )
                    : new Sv(e.duration, e.delay);
                },
              },
              {
                key: "queuedPlayers",
                get: function () {
                  var e = [];
                  return (
                    this._namespaceList.forEach(function (t) {
                      t.players.forEach(function (t) {
                        t.queued && e.push(t);
                      });
                    }),
                    e
                  );
                },
              },
            ]),
            e
          );
        })(),
        Xp = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.namespaceId = t),
              (this.triggerName = n),
              (this.element = r),
              (this._player = new Sv()),
              (this._containsRealPlayer = !1),
              (this._queuedCallbacks = {}),
              (this.destroyed = !1),
              (this.markedForDestroy = !1),
              (this.disabled = !1),
              (this.queued = !0),
              (this.totalTime = 0);
          }
          return (
            _createClass(e, [
              {
                key: "setRealPlayer",
                value: function (e) {
                  var t = this;
                  this._containsRealPlayer ||
                    ((this._player = e),
                    Object.keys(this._queuedCallbacks).forEach(function (n) {
                      t._queuedCallbacks[n].forEach(function (t) {
                        return Pv(e, n, void 0, t);
                      });
                    }),
                    (this._queuedCallbacks = {}),
                    (this._containsRealPlayer = !0),
                    this.overrideTotalTime(e.totalTime),
                    (this.queued = !1));
                },
              },
              {
                key: "getRealPlayer",
                value: function () {
                  return this._player;
                },
              },
              {
                key: "overrideTotalTime",
                value: function (e) {
                  this.totalTime = e;
                },
              },
              {
                key: "syncPlayerEvents",
                value: function (e) {
                  var t = this,
                    n = this._player;
                  n.triggerCallback &&
                    e.onStart(function () {
                      return n.triggerCallback("start");
                    }),
                    e.onDone(function () {
                      return t.finish();
                    }),
                    e.onDestroy(function () {
                      return t.destroy();
                    });
                },
              },
              {
                key: "_queueEvent",
                value: function (e, t) {
                  Iv(this._queuedCallbacks, e, []).push(t);
                },
              },
              {
                key: "onDone",
                value: function (e) {
                  this.queued && this._queueEvent("done", e),
                    this._player.onDone(e);
                },
              },
              {
                key: "onStart",
                value: function (e) {
                  this.queued && this._queueEvent("start", e),
                    this._player.onStart(e);
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  this.queued && this._queueEvent("destroy", e),
                    this._player.onDestroy(e);
                },
              },
              {
                key: "init",
                value: function () {
                  this._player.init();
                },
              },
              {
                key: "hasStarted",
                value: function () {
                  return !this.queued && this._player.hasStarted();
                },
              },
              {
                key: "play",
                value: function () {
                  !this.queued && this._player.play();
                },
              },
              {
                key: "pause",
                value: function () {
                  !this.queued && this._player.pause();
                },
              },
              {
                key: "restart",
                value: function () {
                  !this.queued && this._player.restart();
                },
              },
              {
                key: "finish",
                value: function () {
                  this._player.finish();
                },
              },
              {
                key: "destroy",
                value: function () {
                  (this.destroyed = !0), this._player.destroy();
                },
              },
              {
                key: "reset",
                value: function () {
                  !this.queued && this._player.reset();
                },
              },
              {
                key: "setPosition",
                value: function (e) {
                  this.queued || this._player.setPosition(e);
                },
              },
              {
                key: "getPosition",
                value: function () {
                  return this.queued ? 0 : this._player.getPosition();
                },
              },
              {
                key: "triggerCallback",
                value: function (e) {
                  var t = this._player;
                  t.triggerCallback && t.triggerCallback(e);
                },
              },
            ]),
            e
          );
        })();
      function ey(e) {
        return e && 1 === e.nodeType;
      }
      function ty(e, t) {
        var n = e.style.display;
        return (e.style.display = null != t ? t : "none"), n;
      }
      function ny(e, t, n, r, i) {
        var o = [];
        n.forEach(function (e) {
          return o.push(ty(e));
        });
        var a = [];
        r.forEach(function (n, r) {
          var o = {};
          n.forEach(function (e) {
            var n = (o[e] = t.computeStyle(r, e, i));
            (n && 0 != n.length) || ((r.__ng_removed = Zp), a.push(r));
          }),
            e.set(r, o);
        });
        var s = 0;
        return (
          n.forEach(function (e) {
            return ty(e, o[s++]);
          }),
          a
        );
      }
      function ry(e, t) {
        var n = new Map();
        if (
          (e.forEach(function (e) {
            return n.set(e, []);
          }),
          0 == t.length)
        )
          return n;
        var r = new Set(t),
          i = new Map();
        return (
          t.forEach(function (e) {
            var t = (function e(t) {
              if (!t) return 1;
              var o = i.get(t);
              if (o) return o;
              var a = t.parentNode;
              return (o = n.has(a) ? a : r.has(a) ? 1 : e(a)), i.set(t, o), o;
            })(e);
            1 !== t && n.get(t).push(e);
          }),
          n
        );
      }
      function iy(e, t) {
        if (e.classList) e.classList.add(t);
        else {
          var n = e.$$classes;
          n || (n = e.$$classes = {}), (n[t] = !0);
        }
      }
      function oy(e, t) {
        if (e.classList) e.classList.remove(t);
        else {
          var n = e.$$classes;
          n && delete n[t];
        }
      }
      function ay(e, t, n) {
        Av(n).onDone(function () {
          return e.processLeaveNode(t);
        });
      }
      function sy(e, t, n) {
        var r = n.get(e);
        if (!r) return !1;
        var i = t.get(e);
        return (
          i
            ? r.forEach(function (e) {
                return i.add(e);
              })
            : t.set(e, r),
          n.delete(e),
          !0
        );
      }
      var uy = (function () {
        function e(t, n, r) {
          var i = this;
          _classCallCheck(this, e),
            (this.bodyNode = t),
            (this._driver = n),
            (this._triggerCache = {}),
            (this.onRemovalComplete = function (e, t) {}),
            (this._transitionEngine = new Yp(t, n, r)),
            (this._timelineEngine = new Wp(t, n, r)),
            (this._transitionEngine.onRemovalComplete = function (e, t) {
              return i.onRemovalComplete(e, t);
            });
        }
        return (
          _createClass(e, [
            {
              key: "registerTrigger",
              value: function (e, t, n, r, i) {
                var o = e + "-" + r,
                  a = this._triggerCache[o];
                if (!a) {
                  var s = [],
                    u = mp(this._driver, i, s);
                  if (s.length)
                    throw new Error(
                      'The animation trigger "'
                        .concat(
                          r,
                          '" has failed to build due to the following errors:\n - '
                        )
                        .concat(s.join("\n - "))
                    );
                  (a = (function (e, t) {
                    return new zp(e, t);
                  })(r, u)),
                    (this._triggerCache[o] = a);
                }
                this._transitionEngine.registerTrigger(t, r, a);
              },
            },
            {
              key: "register",
              value: function (e, t) {
                this._transitionEngine.register(e, t);
              },
            },
            {
              key: "destroy",
              value: function (e, t) {
                this._transitionEngine.destroy(e, t);
              },
            },
            {
              key: "onInsert",
              value: function (e, t, n, r) {
                this._transitionEngine.insertNode(e, t, n, r);
              },
            },
            {
              key: "onRemove",
              value: function (e, t, n, r) {
                this._transitionEngine.removeNode(e, t, r || !1, n);
              },
            },
            {
              key: "disableAnimations",
              value: function (e, t) {
                this._transitionEngine.markElementAsDisabled(e, t);
              },
            },
            {
              key: "process",
              value: function (e, t, n, r) {
                if ("@" == n.charAt(0)) {
                  var i = _slicedToArray(Nv(n), 2),
                    o = i[0],
                    a = i[1];
                  this._timelineEngine.command(o, t, a, r);
                } else this._transitionEngine.trigger(e, t, n, r);
              },
            },
            {
              key: "listen",
              value: function (e, t, n, r, i) {
                if ("@" == n.charAt(0)) {
                  var o = _slicedToArray(Nv(n), 2),
                    a = o[0],
                    s = o[1];
                  return this._timelineEngine.listen(a, t, s, i);
                }
                return this._transitionEngine.listen(e, t, n, r, i);
              },
            },
            {
              key: "flush",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : -1;
                this._transitionEngine.flush(e);
              },
            },
            {
              key: "whenRenderingDone",
              value: function () {
                return this._transitionEngine.whenRenderingDone();
              },
            },
            {
              key: "players",
              get: function () {
                return this._transitionEngine.players.concat(
                  this._timelineEngine.players
                );
              },
            },
          ]),
          e
        );
      })();
      function ly(e, t) {
        var n = null,
          r = null;
        return (
          Array.isArray(t) && t.length
            ? ((n = hy(t[0])), t.length > 1 && (r = hy(t[t.length - 1])))
            : t && (n = hy(t)),
          n || r ? new cy(e, n, r) : null
        );
      }
      var cy = (function () {
        var e = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this._element = t),
              (this._startStyles = n),
              (this._endStyles = r),
              (this._state = 0);
            var i = e.initialStylesByElement.get(t);
            i || e.initialStylesByElement.set(t, (i = {})),
              (this._initialStyles = i);
          }
          return (
            _createClass(e, [
              {
                key: "start",
                value: function () {
                  this._state < 1 &&
                    (this._startStyles &&
                      tp(this._element, this._startStyles, this._initialStyles),
                    (this._state = 1));
                },
              },
              {
                key: "finish",
                value: function () {
                  this.start(),
                    this._state < 2 &&
                      (tp(this._element, this._initialStyles),
                      this._endStyles &&
                        (tp(this._element, this._endStyles),
                        (this._endStyles = null)),
                      (this._state = 1));
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.finish(),
                    this._state < 3 &&
                      (e.initialStylesByElement.delete(this._element),
                      this._startStyles &&
                        (np(this._element, this._startStyles),
                        (this._endStyles = null)),
                      this._endStyles &&
                        (np(this._element, this._endStyles),
                        (this._endStyles = null)),
                      tp(this._element, this._initialStyles),
                      (this._state = 3));
                },
              },
            ]),
            e
          );
        })();
        return (e.initialStylesByElement = new WeakMap()), e;
      })();
      function hy(e) {
        for (var t = null, n = Object.keys(e), r = 0; r < n.length; r++) {
          var i = n[r];
          fy(i) && ((t = t || {})[i] = e[i]);
        }
        return t;
      }
      function fy(e) {
        return "display" === e || "position" === e;
      }
      var dy = (function () {
        function e(t, n, r, i, o, a, s) {
          var u = this;
          _classCallCheck(this, e),
            (this._element = t),
            (this._name = n),
            (this._duration = r),
            (this._delay = i),
            (this._easing = o),
            (this._fillMode = a),
            (this._onDoneFn = s),
            (this._finished = !1),
            (this._destroyed = !1),
            (this._startTime = 0),
            (this._position = 0),
            (this._eventFn = function (e) {
              return u._handleCallback(e);
            });
        }
        return (
          _createClass(e, [
            {
              key: "apply",
              value: function () {
                var e, t, n;
                (e = this._element),
                  (t = ""
                    .concat(this._duration, "ms ")
                    .concat(this._easing, " ")
                    .concat(this._delay, "ms 1 normal ")
                    .concat(this._fillMode, " ")
                    .concat(this._name)),
                  (n = _y(e, "").trim()).length &&
                    ((function (e, t) {
                      for (var n = 0; n < e.length; n++) e.charAt(n);
                    })(n),
                    (t = "".concat(n, ", ").concat(t))),
                  my(e, "", t),
                  gy(this._element, this._eventFn, !1),
                  (this._startTime = Date.now());
              },
            },
            {
              key: "pause",
              value: function () {
                vy(this._element, this._name, "paused");
              },
            },
            {
              key: "resume",
              value: function () {
                vy(this._element, this._name, "running");
              },
            },
            {
              key: "setPosition",
              value: function (e) {
                var t = py(this._element, this._name);
                (this._position = e * this._duration),
                  my(
                    this._element,
                    "Delay",
                    "-".concat(this._position, "ms"),
                    t
                  );
              },
            },
            {
              key: "getPosition",
              value: function () {
                return this._position;
              },
            },
            {
              key: "_handleCallback",
              value: function (e) {
                var t = e._ngTestManualTimestamp || Date.now(),
                  n = 1e3 * parseFloat(e.elapsedTime.toFixed(3));
                e.animationName == this._name &&
                  Math.max(t - this._startTime, 0) >= this._delay &&
                  n >= this._duration &&
                  this.finish();
              },
            },
            {
              key: "finish",
              value: function () {
                this._finished ||
                  ((this._finished = !0),
                  this._onDoneFn(),
                  gy(this._element, this._eventFn, !0));
              },
            },
            {
              key: "destroy",
              value: function () {
                var e, t, n, r;
                this._destroyed ||
                  ((this._destroyed = !0),
                  this.finish(),
                  (e = this._element),
                  (t = this._name),
                  (n = _y(e, "").split(",")),
                  (r = yy(n, t)) >= 0 &&
                    (n.splice(r, 1), my(e, "", n.join(","))));
              },
            },
          ]),
          e
        );
      })();
      function vy(e, t, n) {
        my(e, "PlayState", n, py(e, t));
      }
      function py(e, t) {
        var n = _y(e, "");
        return n.indexOf(",") > 0 ? yy(n.split(","), t) : yy([n], t);
      }
      function yy(e, t) {
        for (var n = 0; n < e.length; n++) if (e[n].indexOf(t) >= 0) return n;
        return -1;
      }
      function gy(e, t, n) {
        n
          ? e.removeEventListener("animationend", t)
          : e.addEventListener("animationend", t);
      }
      function my(e, t, n, r) {
        var i = "animation" + t;
        if (null != r) {
          var o = e.style[i];
          if (o.length) {
            var a = o.split(",");
            (a[r] = n), (n = a.join(","));
          }
        }
        e.style[i] = n;
      }
      function _y(e, t) {
        return e.style["animation" + t];
      }
      var ky = (function () {
          function e(t, n, r, i, o, a, s, u) {
            _classCallCheck(this, e),
              (this.element = t),
              (this.keyframes = n),
              (this.animationName = r),
              (this._duration = i),
              (this._delay = o),
              (this._finalStyles = s),
              (this._specialStyles = u),
              (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._onDestroyFns = []),
              (this._started = !1),
              (this.currentSnapshot = {}),
              (this._state = 0),
              (this.easing = a || "linear"),
              (this.totalTime = i + o),
              this._buildStyler();
          }
          return (
            _createClass(e, [
              {
                key: "onStart",
                value: function (e) {
                  this._onStartFns.push(e);
                },
              },
              {
                key: "onDone",
                value: function (e) {
                  this._onDoneFns.push(e);
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  this._onDestroyFns.push(e);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.init(),
                    this._state >= 4 ||
                      ((this._state = 4),
                      this._styler.destroy(),
                      this._flushStartFns(),
                      this._flushDoneFns(),
                      this._specialStyles && this._specialStyles.destroy(),
                      this._onDestroyFns.forEach(function (e) {
                        return e();
                      }),
                      (this._onDestroyFns = []));
                },
              },
              {
                key: "_flushDoneFns",
                value: function () {
                  this._onDoneFns.forEach(function (e) {
                    return e();
                  }),
                    (this._onDoneFns = []);
                },
              },
              {
                key: "_flushStartFns",
                value: function () {
                  this._onStartFns.forEach(function (e) {
                    return e();
                  }),
                    (this._onStartFns = []);
                },
              },
              {
                key: "finish",
                value: function () {
                  this.init(),
                    this._state >= 3 ||
                      ((this._state = 3),
                      this._styler.finish(),
                      this._flushStartFns(),
                      this._specialStyles && this._specialStyles.finish(),
                      this._flushDoneFns());
                },
              },
              {
                key: "setPosition",
                value: function (e) {
                  this._styler.setPosition(e);
                },
              },
              {
                key: "getPosition",
                value: function () {
                  return this._styler.getPosition();
                },
              },
              {
                key: "hasStarted",
                value: function () {
                  return this._state >= 2;
                },
              },
              {
                key: "init",
                value: function () {
                  this._state >= 1 ||
                    ((this._state = 1),
                    this._styler.apply(),
                    this._delay && this._styler.pause());
                },
              },
              {
                key: "play",
                value: function () {
                  this.init(),
                    this.hasStarted() ||
                      (this._flushStartFns(),
                      (this._state = 2),
                      this._specialStyles && this._specialStyles.start()),
                    this._styler.resume();
                },
              },
              {
                key: "pause",
                value: function () {
                  this.init(), this._styler.pause();
                },
              },
              {
                key: "restart",
                value: function () {
                  this.reset(), this.play();
                },
              },
              {
                key: "reset",
                value: function () {
                  this._styler.destroy(),
                    this._buildStyler(),
                    this._styler.apply();
                },
              },
              {
                key: "_buildStyler",
                value: function () {
                  var e = this;
                  this._styler = new dy(
                    this.element,
                    this.animationName,
                    this._duration,
                    this._delay,
                    this.easing,
                    "forwards",
                    function () {
                      return e.finish();
                    }
                  );
                },
              },
              {
                key: "triggerCallback",
                value: function (e) {
                  var t = "start" == e ? this._onStartFns : this._onDoneFns;
                  t.forEach(function (e) {
                    return e();
                  }),
                    (t.length = 0);
                },
              },
              {
                key: "beforeDestroy",
                value: function () {
                  var e = this;
                  this.init();
                  var t = {};
                  if (this.hasStarted()) {
                    var n = this._state >= 3;
                    Object.keys(this._finalStyles).forEach(function (r) {
                      "offset" != r &&
                        (t[r] = n ? e._finalStyles[r] : dp(e.element, r));
                    });
                  }
                  this.currentSnapshot = t;
                },
              },
            ]),
            e
          );
        })(),
        Cy = (function (e) {
          function t(e, n) {
            var r;
            return (
              _classCallCheck(this, t),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this)
              )).element = e),
              (r._startingStyles = {}),
              (r.__initialized = !1),
              (r._styles = Bv(n)),
              r
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "init",
                value: function () {
                  var e = this;
                  !this.__initialized &&
                    this._startingStyles &&
                    ((this.__initialized = !0),
                    Object.keys(this._styles).forEach(function (t) {
                      e._startingStyles[t] = e.element.style[t];
                    }),
                    _get(_getPrototypeOf(t.prototype), "init", this).call(
                      this
                    ));
                },
              },
              {
                key: "play",
                value: function () {
                  var e = this;
                  this._startingStyles &&
                    (this.init(),
                    Object.keys(this._styles).forEach(function (t) {
                      return e.element.style.setProperty(t, e._styles[t]);
                    }),
                    _get(_getPrototypeOf(t.prototype), "play", this).call(
                      this
                    ));
                },
              },
              {
                key: "destroy",
                value: function () {
                  var e = this;
                  this._startingStyles &&
                    (Object.keys(this._startingStyles).forEach(function (t) {
                      var n = e._startingStyles[t];
                      n
                        ? e.element.style.setProperty(t, n)
                        : e.element.style.removeProperty(t);
                    }),
                    (this._startingStyles = null),
                    _get(_getPrototypeOf(t.prototype), "destroy", this).call(
                      this
                    ));
                },
              },
            ]),
            t
          );
        })(Sv),
        by = (function () {
          function e() {
            _classCallCheck(this, e),
              (this._count = 0),
              (this._head = document.querySelector("head")),
              (this._warningIssued = !1);
          }
          return (
            _createClass(e, [
              {
                key: "validateStyleProperty",
                value: function (e) {
                  return Mv(e);
                },
              },
              {
                key: "matchesElement",
                value: function (e, t) {
                  return Hv(e, t);
                },
              },
              {
                key: "containsElement",
                value: function (e, t) {
                  return zv(e, t);
                },
              },
              {
                key: "query",
                value: function (e, t, n) {
                  return qv(e, t, n);
                },
              },
              {
                key: "computeStyle",
                value: function (e, t, n) {
                  return window.getComputedStyle(e)[t];
                },
              },
              {
                key: "buildKeyframeElement",
                value: function (e, t, n) {
                  n = n.map(function (e) {
                    return Bv(e);
                  });
                  var r = "@keyframes ".concat(t, " {\n"),
                    i = "";
                  n.forEach(function (e) {
                    i = " ";
                    var t = parseFloat(e.offset);
                    (r += "".concat(i).concat(100 * t, "% {\n")),
                      (i += " "),
                      Object.keys(e).forEach(function (t) {
                        var n = e[t];
                        switch (t) {
                          case "offset":
                            return;
                          case "easing":
                            return void (
                              n &&
                              (r += ""
                                .concat(i, "animation-timing-function: ")
                                .concat(n, ";\n"))
                            );
                          default:
                            return void (r += ""
                              .concat(i)
                              .concat(t, ": ")
                              .concat(n, ";\n"));
                        }
                      }),
                      (r += "".concat(i, "}\n"));
                  }),
                    (r += "}\n");
                  var o = document.createElement("style");
                  return (o.innerHTML = r), o;
                },
              },
              {
                key: "animate",
                value: function (e, t, n, r, i) {
                  var o =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : [],
                    a = arguments.length > 6 ? arguments[6] : void 0;
                  a && this._notifyFaultyScrubber();
                  var s = o.filter(function (e) {
                      return e instanceof ky;
                    }),
                    u = {};
                  cp(n, r) &&
                    s.forEach(function (e) {
                      var t = e.currentSnapshot;
                      Object.keys(t).forEach(function (e) {
                        return (u[e] = t[e]);
                      });
                    });
                  var l = (function (e) {
                    var t = {};
                    return (
                      e &&
                        (Array.isArray(e) ? e : [e]).forEach(function (e) {
                          Object.keys(e).forEach(function (n) {
                            "offset" != n && "easing" != n && (t[n] = e[n]);
                          });
                        }),
                      t
                    );
                  })((t = hp(e, t, u)));
                  if (0 == n) return new Cy(e, l);
                  var c = "gen_css_kf_".concat(this._count++),
                    h = this.buildKeyframeElement(e, c, t);
                  document.querySelector("head").appendChild(h);
                  var f = ly(e, t),
                    d = new ky(e, t, c, n, r, i, l, f);
                  return (
                    d.onDestroy(function () {
                      var e;
                      (e = h).parentNode.removeChild(e);
                    }),
                    d
                  );
                },
              },
              {
                key: "_notifyFaultyScrubber",
                value: function () {
                  this._warningIssued ||
                    (console.warn(
                      "@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n",
                      "  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."
                    ),
                    (this._warningIssued = !0));
                },
              },
            ]),
            e
          );
        })(),
        wy = (function () {
          function e(t, n, r, i) {
            _classCallCheck(this, e),
              (this.element = t),
              (this.keyframes = n),
              (this.options = r),
              (this._specialStyles = i),
              (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._onDestroyFns = []),
              (this._initialized = !1),
              (this._finished = !1),
              (this._started = !1),
              (this._destroyed = !1),
              (this.time = 0),
              (this.parentPlayer = null),
              (this.currentSnapshot = {}),
              (this._duration = r.duration),
              (this._delay = r.delay || 0),
              (this.time = this._duration + this._delay);
          }
          return (
            _createClass(e, [
              {
                key: "_onFinish",
                value: function () {
                  this._finished ||
                    ((this._finished = !0),
                    this._onDoneFns.forEach(function (e) {
                      return e();
                    }),
                    (this._onDoneFns = []));
                },
              },
              {
                key: "init",
                value: function () {
                  this._buildPlayer(), this._preparePlayerBeforeStart();
                },
              },
              {
                key: "_buildPlayer",
                value: function () {
                  var e = this;
                  if (!this._initialized) {
                    this._initialized = !0;
                    var t = this.keyframes;
                    (this.domPlayer = this._triggerWebAnimation(
                      this.element,
                      t,
                      this.options
                    )),
                      (this._finalKeyframe = t.length ? t[t.length - 1] : {}),
                      this.domPlayer.addEventListener("finish", function () {
                        return e._onFinish();
                      });
                  }
                },
              },
              {
                key: "_preparePlayerBeforeStart",
                value: function () {
                  this._delay
                    ? this._resetDomPlayerState()
                    : this.domPlayer.pause();
                },
              },
              {
                key: "_triggerWebAnimation",
                value: function (e, t, n) {
                  return e.animate(t, n);
                },
              },
              {
                key: "onStart",
                value: function (e) {
                  this._onStartFns.push(e);
                },
              },
              {
                key: "onDone",
                value: function (e) {
                  this._onDoneFns.push(e);
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  this._onDestroyFns.push(e);
                },
              },
              {
                key: "play",
                value: function () {
                  this._buildPlayer(),
                    this.hasStarted() ||
                      (this._onStartFns.forEach(function (e) {
                        return e();
                      }),
                      (this._onStartFns = []),
                      (this._started = !0),
                      this._specialStyles && this._specialStyles.start()),
                    this.domPlayer.play();
                },
              },
              {
                key: "pause",
                value: function () {
                  this.init(), this.domPlayer.pause();
                },
              },
              {
                key: "finish",
                value: function () {
                  this.init(),
                    this._specialStyles && this._specialStyles.finish(),
                    this._onFinish(),
                    this.domPlayer.finish();
                },
              },
              {
                key: "reset",
                value: function () {
                  this._resetDomPlayerState(),
                    (this._destroyed = !1),
                    (this._finished = !1),
                    (this._started = !1);
                },
              },
              {
                key: "_resetDomPlayerState",
                value: function () {
                  this.domPlayer && this.domPlayer.cancel();
                },
              },
              {
                key: "restart",
                value: function () {
                  this.reset(), this.play();
                },
              },
              {
                key: "hasStarted",
                value: function () {
                  return this._started;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this._destroyed ||
                    ((this._destroyed = !0),
                    this._resetDomPlayerState(),
                    this._onFinish(),
                    this._specialStyles && this._specialStyles.destroy(),
                    this._onDestroyFns.forEach(function (e) {
                      return e();
                    }),
                    (this._onDestroyFns = []));
                },
              },
              {
                key: "setPosition",
                value: function (e) {
                  this.domPlayer.currentTime = e * this.time;
                },
              },
              {
                key: "getPosition",
                value: function () {
                  return this.domPlayer.currentTime / this.time;
                },
              },
              {
                key: "beforeDestroy",
                value: function () {
                  var e = this,
                    t = {};
                  this.hasStarted() &&
                    Object.keys(this._finalKeyframe).forEach(function (n) {
                      "offset" != n &&
                        (t[n] = e._finished
                          ? e._finalKeyframe[n]
                          : dp(e.element, n));
                    }),
                    (this.currentSnapshot = t);
                },
              },
              {
                key: "triggerCallback",
                value: function (e) {
                  var t = "start" == e ? this._onStartFns : this._onDoneFns;
                  t.forEach(function (e) {
                    return e();
                  }),
                    (t.length = 0);
                },
              },
              {
                key: "totalTime",
                get: function () {
                  return this._delay + this._duration;
                },
              },
            ]),
            e
          );
        })(),
        Sy = (function () {
          function e() {
            _classCallCheck(this, e),
              (this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(
                Ey().toString()
              )),
              (this._cssKeyframesDriver = new by());
          }
          return (
            _createClass(e, [
              {
                key: "validateStyleProperty",
                value: function (e) {
                  return Mv(e);
                },
              },
              {
                key: "matchesElement",
                value: function (e, t) {
                  return Hv(e, t);
                },
              },
              {
                key: "containsElement",
                value: function (e, t) {
                  return zv(e, t);
                },
              },
              {
                key: "query",
                value: function (e, t, n) {
                  return qv(e, t, n);
                },
              },
              {
                key: "computeStyle",
                value: function (e, t, n) {
                  return window.getComputedStyle(e)[t];
                },
              },
              {
                key: "overrideWebAnimationsSupport",
                value: function (e) {
                  this._isNativeImpl = e;
                },
              },
              {
                key: "animate",
                value: function (e, t, n, r, i) {
                  var o =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : [],
                    a = arguments.length > 6 ? arguments[6] : void 0;
                  if (!a && !this._isNativeImpl)
                    return this._cssKeyframesDriver.animate(e, t, n, r, i, o);
                  var s = {
                    duration: n,
                    delay: r,
                    fill: 0 == r ? "both" : "forwards",
                  };
                  i && (s.easing = i);
                  var u = {},
                    l = o.filter(function (e) {
                      return e instanceof wy;
                    });
                  cp(n, r) &&
                    l.forEach(function (e) {
                      var t = e.currentSnapshot;
                      Object.keys(t).forEach(function (e) {
                        return (u[e] = t[e]);
                      });
                    });
                  var c = ly(
                    e,
                    (t = hp(
                      e,
                      (t = t.map(function (e) {
                        return Yv(e, !1);
                      })),
                      u
                    ))
                  );
                  return new wy(e, t, s, c);
                },
              },
            ]),
            e
          );
        })();
      function Ey() {
        return (
          ("undefined" != typeof window &&
            void 0 !== window.document &&
            Element.prototype.animate) ||
          {}
        );
      }
      var Ty,
        Ay =
          (((Ty = (function (e) {
            function t(e, n) {
              var r;
              return (
                _classCallCheck(this, t),
                ((r = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(t).call(this)
                ))._nextAnimationId = 0),
                (r._renderer = e.createRenderer(n.body, {
                  id: "0",
                  encapsulation: at.None,
                  styles: [],
                  data: { animation: [] },
                })),
                r
              );
            }
            return (
              _inherits(t, e),
              _createClass(t, [
                {
                  key: "build",
                  value: function (e) {
                    var t = this._nextAnimationId.toString();
                    this._nextAnimationId++;
                    var n = Array.isArray(e) ? Cv(e) : e;
                    return (
                      Oy(this._renderer, null, t, "register", [n]),
                      new xy(t, this._renderer)
                    );
                  },
                },
              ]),
              t
            );
          })(kv)).ɵfac = function (e) {
            return new (e || Ty)($e(Io), $e(Cs));
          }),
          (Ty.ɵprov = de({ token: Ty, factory: Ty.ɵfac })),
          Ty),
        xy = (function (e) {
          function t(e, n) {
            var r;
            return (
              _classCallCheck(this, t),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this)
              ))._id = e),
              (r._renderer = n),
              r
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "create",
                value: function (e, t) {
                  return new Py(this._id, e, t || {}, this._renderer);
                },
              },
            ]),
            t
          );
        })(
          (function () {
            return function e() {
              _classCallCheck(this, e);
            };
          })()
        ),
        Py = (function () {
          function e(t, n, r, i) {
            _classCallCheck(this, e),
              (this.id = t),
              (this.element = n),
              (this._renderer = i),
              (this.parentPlayer = null),
              (this._started = !1),
              (this.totalTime = 0),
              this._command("create", r);
          }
          return (
            _createClass(e, [
              {
                key: "_listen",
                value: function (e, t) {
                  return this._renderer.listen(
                    this.element,
                    "@@".concat(this.id, ":").concat(e),
                    t
                  );
                },
              },
              {
                key: "_command",
                value: function (e) {
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  return Oy(this._renderer, this.element, this.id, e, n);
                },
              },
              {
                key: "onDone",
                value: function (e) {
                  this._listen("done", e);
                },
              },
              {
                key: "onStart",
                value: function (e) {
                  this._listen("start", e);
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  this._listen("destroy", e);
                },
              },
              {
                key: "init",
                value: function () {
                  this._command("init");
                },
              },
              {
                key: "hasStarted",
                value: function () {
                  return this._started;
                },
              },
              {
                key: "play",
                value: function () {
                  this._command("play"), (this._started = !0);
                },
              },
              {
                key: "pause",
                value: function () {
                  this._command("pause");
                },
              },
              {
                key: "restart",
                value: function () {
                  this._command("restart");
                },
              },
              {
                key: "finish",
                value: function () {
                  this._command("finish");
                },
              },
              {
                key: "destroy",
                value: function () {
                  this._command("destroy");
                },
              },
              {
                key: "reset",
                value: function () {
                  this._command("reset");
                },
              },
              {
                key: "setPosition",
                value: function (e) {
                  this._command("setPosition", e);
                },
              },
              {
                key: "getPosition",
                value: function () {
                  return 0;
                },
              },
            ]),
            e
          );
        })();
      function Oy(e, t, n, r, i) {
        return e.setProperty(t, "@@".concat(n, ":").concat(r), i);
      }
      var Ry,
        Iy,
        Ny,
        Dy,
        jy =
          (((Ry = (function () {
            function e(t, n, r) {
              _classCallCheck(this, e),
                (this.delegate = t),
                (this.engine = n),
                (this._zone = r),
                (this._currentId = 0),
                (this._microtaskId = 1),
                (this._animationCallbacksBuffer = []),
                (this._rendererCache = new Map()),
                (this._cdRecurDepth = 0),
                (this.promise = Promise.resolve(0)),
                (n.onRemovalComplete = function (e, t) {
                  t && t.parentNode(e) && t.removeChild(e.parentNode, e);
                });
            }
            return (
              _createClass(e, [
                {
                  key: "createRenderer",
                  value: function (e, t) {
                    var n = this,
                      r = this.delegate.createRenderer(e, t);
                    if (!(e && t && t.data && t.data.animation)) {
                      var i = this._rendererCache.get(r);
                      return (
                        i ||
                          ((i = new Fy("", r, this.engine)),
                          this._rendererCache.set(r, i)),
                        i
                      );
                    }
                    var o = t.id,
                      a = t.id + "-" + this._currentId;
                    return (
                      this._currentId++,
                      this.engine.register(a, e),
                      t.data.animation.forEach(function t(r) {
                        Array.isArray(r)
                          ? r.forEach(t)
                          : n.engine.registerTrigger(o, a, e, r.name, r);
                      }),
                      new Ly(this, a, r, this.engine)
                    );
                  },
                },
                {
                  key: "begin",
                  value: function () {
                    this._cdRecurDepth++,
                      this.delegate.begin && this.delegate.begin();
                  },
                },
                {
                  key: "_scheduleCountTask",
                  value: function () {
                    var e = this;
                    this.promise.then(function () {
                      e._microtaskId++;
                    });
                  },
                },
                {
                  key: "scheduleListenerCallback",
                  value: function (e, t, n) {
                    var r = this;
                    e >= 0 && e < this._microtaskId
                      ? this._zone.run(function () {
                          return t(n);
                        })
                      : (0 == this._animationCallbacksBuffer.length &&
                          Promise.resolve(null).then(function () {
                            r._zone.run(function () {
                              r._animationCallbacksBuffer.forEach(function (e) {
                                var t = _slicedToArray(e, 2);
                                (0, t[0])(t[1]);
                              }),
                                (r._animationCallbacksBuffer = []);
                            });
                          }),
                        this._animationCallbacksBuffer.push([t, n]));
                  },
                },
                {
                  key: "end",
                  value: function () {
                    var e = this;
                    this._cdRecurDepth--,
                      0 == this._cdRecurDepth &&
                        this._zone.runOutsideAngular(function () {
                          e._scheduleCountTask(),
                            e.engine.flush(e._microtaskId);
                        }),
                      this.delegate.end && this.delegate.end();
                  },
                },
                {
                  key: "whenRenderingDone",
                  value: function () {
                    return this.engine.whenRenderingDone();
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || Ry)($e(Io), $e(uy), $e(za));
          }),
          (Ry.ɵprov = de({ token: Ry, factory: Ry.ɵfac })),
          Ry),
        Fy = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.namespaceId = t),
              (this.delegate = n),
              (this.engine = r),
              (this.destroyNode = this.delegate.destroyNode
                ? function (e) {
                    return n.destroyNode(e);
                  }
                : null);
          }
          return (
            _createClass(e, [
              {
                key: "destroy",
                value: function () {
                  this.engine.destroy(this.namespaceId, this.delegate),
                    this.delegate.destroy();
                },
              },
              {
                key: "createElement",
                value: function (e, t) {
                  return this.delegate.createElement(e, t);
                },
              },
              {
                key: "createComment",
                value: function (e) {
                  return this.delegate.createComment(e);
                },
              },
              {
                key: "createText",
                value: function (e) {
                  return this.delegate.createText(e);
                },
              },
              {
                key: "appendChild",
                value: function (e, t) {
                  this.delegate.appendChild(e, t),
                    this.engine.onInsert(this.namespaceId, t, e, !1);
                },
              },
              {
                key: "insertBefore",
                value: function (e, t, n) {
                  this.delegate.insertBefore(e, t, n),
                    this.engine.onInsert(this.namespaceId, t, e, !0);
                },
              },
              {
                key: "removeChild",
                value: function (e, t, n) {
                  this.engine.onRemove(this.namespaceId, t, this.delegate, n);
                },
              },
              {
                key: "selectRootElement",
                value: function (e, t) {
                  return this.delegate.selectRootElement(e, t);
                },
              },
              {
                key: "parentNode",
                value: function (e) {
                  return this.delegate.parentNode(e);
                },
              },
              {
                key: "nextSibling",
                value: function (e) {
                  return this.delegate.nextSibling(e);
                },
              },
              {
                key: "setAttribute",
                value: function (e, t, n, r) {
                  this.delegate.setAttribute(e, t, n, r);
                },
              },
              {
                key: "removeAttribute",
                value: function (e, t, n) {
                  this.delegate.removeAttribute(e, t, n);
                },
              },
              {
                key: "addClass",
                value: function (e, t) {
                  this.delegate.addClass(e, t);
                },
              },
              {
                key: "removeClass",
                value: function (e, t) {
                  this.delegate.removeClass(e, t);
                },
              },
              {
                key: "setStyle",
                value: function (e, t, n, r) {
                  this.delegate.setStyle(e, t, n, r);
                },
              },
              {
                key: "removeStyle",
                value: function (e, t, n) {
                  this.delegate.removeStyle(e, t, n);
                },
              },
              {
                key: "setProperty",
                value: function (e, t, n) {
                  "@" == t.charAt(0) && "@.disabled" == t
                    ? this.disableAnimations(e, !!n)
                    : this.delegate.setProperty(e, t, n);
                },
              },
              {
                key: "setValue",
                value: function (e, t) {
                  this.delegate.setValue(e, t);
                },
              },
              {
                key: "listen",
                value: function (e, t, n) {
                  return this.delegate.listen(e, t, n);
                },
              },
              {
                key: "disableAnimations",
                value: function (e, t) {
                  this.engine.disableAnimations(e, t);
                },
              },
              {
                key: "data",
                get: function () {
                  return this.delegate.data;
                },
              },
            ]),
            e
          );
        })(),
        Ly = (function (e) {
          function t(e, n, r, i) {
            var o;
            return (
              _classCallCheck(this, t),
              ((o = _possibleConstructorReturn(
                this,
                _getPrototypeOf(t).call(this, n, r, i)
              )).factory = e),
              (o.namespaceId = n),
              o
            );
          }
          return (
            _inherits(t, e),
            _createClass(t, [
              {
                key: "setProperty",
                value: function (e, t, n) {
                  "@" == t.charAt(0)
                    ? "." == t.charAt(1) && "@.disabled" == t
                      ? this.disableAnimations(e, (n = void 0 === n || !!n))
                      : this.engine.process(this.namespaceId, e, t.substr(1), n)
                    : this.delegate.setProperty(e, t, n);
                },
              },
              {
                key: "listen",
                value: function (e, t, n) {
                  var r,
                    i,
                    o = this;
                  if ("@" == t.charAt(0)) {
                    var a,
                      s = (function (e) {
                        switch (e) {
                          case "body":
                            return document.body;
                          case "document":
                            return document;
                          case "window":
                            return window;
                          default:
                            return e;
                        }
                      })(e),
                      u = t.substr(1),
                      l = "";
                    return (
                      "@" != u.charAt(0) &&
                        ((i = (r = u).indexOf(".")),
                        (u = (a = _slicedToArray(
                          [r.substring(0, i), r.substr(i + 1)],
                          2
                        ))[0]),
                        (l = a[1])),
                      this.engine.listen(
                        this.namespaceId,
                        s,
                        u,
                        l,
                        function (e) {
                          o.factory.scheduleListenerCallback(
                            e._data || -1,
                            n,
                            e
                          );
                        }
                      )
                    );
                  }
                  return this.delegate.listen(e, t, n);
                },
              },
            ]),
            t
          );
        })(Fy),
        Uy =
          (((Iy = (function (e) {
            function t(e, n, r) {
              return (
                _classCallCheck(this, t),
                _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(t).call(this, e.body, n, r)
                )
              );
            }
            return _inherits(t, e), t;
          })(uy)).ɵfac = function (e) {
            return new (e || Iy)($e(Cs), $e(Kv), $e(jp));
          }),
          (Iy.ɵprov = de({ token: Iy, factory: Iy.ɵfac })),
          Iy),
        Vy = [
          {
            provide: Kv,
            useFactory: function () {
              return "function" == typeof Ey() ? new Sy() : new by();
            },
          },
          {
            provide: new He("AnimationModuleType"),
            useValue: "BrowserAnimations",
          },
          { provide: kv, useClass: Ay },
          {
            provide: jp,
            useFactory: function () {
              return new Fp();
            },
          },
          { provide: uy, useClass: Uy },
          {
            provide: Io,
            useFactory: function (e, t, n) {
              return new jy(e, t, n);
            },
            deps: [Nu, uy, za],
          },
        ],
        My =
          (((Dy = function e() {
            _classCallCheck(this, e);
          }).ɵmod = pt({ type: Dy })),
          (Dy.ɵinj = ve({
            factory: function (e) {
              return new (e || Dy)();
            },
            providers: Vy,
            imports: [Wu],
          })),
          Dy),
        Hy =
          (((Ny = (function () {
            function e(t) {
              _classCallCheck(this, e), (this.http = t);
            }
            return (
              _createClass(e, [
                {
                  key: "addPushSubscriber",
                  value: function (e) {
                    return this.http.post("/api/notifications", e);
                  },
                },
                {
                  key: "send",
                  value: function () {
                    return this.http.post("/api/newsletter", null);
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || Ny)($e(bl));
          }),
          (Ny.ɵprov = de({ token: Ny, factory: Ny.ɵfac })),
          Ny),
        zy = function (e) {
          return ["/lessons", e];
        };
      function qy(e, t) {
        if (
          (1 & e &&
            (lo(0, "tr", 6),
            lo(1, "td", 7),
            mo(2),
            co(),
            lo(3, "td", 8),
            lo(4, "i", 9),
            mo(5, "access_time"),
            co(),
            lo(6, "span"),
            mo(7),
            co(),
            co(),
            co()),
          2 & e)
        ) {
          var n = t.$implicit;
          so(
            "routerLink",
            ((r = zy), (i = n.id), ma(Ot(), Lt(), 3, r, i, void 0))
          ),
            pr(2),
            _o(n.description),
            pr(5),
            _o(n.duration);
        }
        var r, i;
      }
      var By,
        Wy,
        Qy,
        Ky = [
          {
            path: "",
            component:
              ((By = (function () {
                function e(t, n, r) {
                  _classCallCheck(this, e),
                    (this.lessonsService = t),
                    (this.swPush = n),
                    (this.newsletterService = r),
                    (this.VAPID_PUBLIC_KEY =
                      "BLnVk1MBGFBW4UxL44fuoM2xxQ4o9CuxocVzKn9UVmnXZEyPCTEFjI4sALMB8qN5ee67yZ6MeQWjd5iyS8lINAg");
                }
                return (
                  _createClass(e, [
                    {
                      key: "ngOnInit",
                      value: function () {
                        this.loadLessons();
                      },
                    },
                    {
                      key: "loadLessons",
                      value: function () {
                        this.lessons$ = this.lessonsService
                          .loadAllLessons()
                          .pipe(
                            Vc(function (e) {
                              return Qu([]);
                            })
                          );
                      },
                    },
                    {
                      key: "subscribeToNotifications",
                      value: function () {
                        var e = this;
                        this.swPush
                          .requestSubscription({
                            serverPublicKey: this.VAPID_PUBLIC_KEY,
                          })
                          .then(function (t) {
                            (e.sub = t),
                              console.log("Notification Subscription: ", t),
                              e.newsletterService
                                .addPushSubscriber(t)
                                .subscribe(
                                  function () {
                                    return console.log(
                                      "Sent push subscription object to server."
                                    );
                                  },
                                  function (e) {
                                    return console.log(
                                      "Could not send subscription object to server, reason: ",
                                      e
                                    );
                                  }
                                );
                          })
                          .catch(function (e) {
                            return console.error(
                              "Could not subscribe to notifications",
                              e
                            );
                          });
                      },
                    },
                    {
                      key: "sendNewsletter",
                      value: function () {
                        console.log(
                          "Sending Newsletter to all Subscribers ..."
                        ),
                          this.newsletterService.send().subscribe();
                      },
                    },
                  ]),
                  e
                );
              })()),
              (By.ɵfac = function (e) {
                return new (e || By)(io(Zd), io(pc), io(Hy));
              }),
              (By.ɵcmp = ht({
                type: By,
                selectors: [["lessons"]],
                decls: 12,
                vars: 4,
                consts: [
                  [1, "lessons-list-container", "v-h-center-block-parent"],
                  [1, "buttons"],
                  [1, "button", "button-primary", 3, "disabled", "click"],
                  [1, "button", "button-danger", 3, "click"],
                  [1, "table", "lessons-list", "card", "card-strong"],
                  [3, "routerLink", 4, "ngFor", "ngForOf"],
                  [3, "routerLink"],
                  [1, "lesson-title"],
                  [1, "duration"],
                  [1, "md-icon", "duration-icon"],
                ],
                template: function (e, t) {
                  var n, r, i;
                  1 & e &&
                    (lo(0, "div", 0),
                    lo(1, "div", 1),
                    lo(2, "button", 2),
                    po("click", function (e) {
                      return t.subscribeToNotifications();
                    }),
                    mo(3, " Subscribe "),
                    co(),
                    lo(4, "button", 3),
                    po("click", function (e) {
                      return t.sendNewsletter();
                    }),
                    mo(5, " Send "),
                    co(),
                    co(),
                    lo(6, "h2"),
                    mo(7, "All Lessons - V11"),
                    co(),
                    lo(8, "table", 4),
                    lo(9, "tbody"),
                    (function (e, t, n, r, i, o, a, s) {
                      var u = Ot(),
                        l = Rt(),
                        c = l.firstCreatePass
                          ? (function (e, t, n, r, i, o, a, s, u) {
                              var l = t.consts,
                                c = kr(t, n[6], 10, 0, "tr", Xn(l, 5));
                              Rr(t, n, c, Xn(l, void 0)), Gt(t, c);
                              var h = (c.tViews = Ar(
                                  2,
                                  -1,
                                  r,
                                  8,
                                  5,
                                  t.directiveRegistry,
                                  t.pipeRegistry,
                                  null,
                                  t.schemas,
                                  l
                                )),
                                f = xr(0, null, 2, -1, null, null);
                              return (
                                (f.injectorIndex = c.injectorIndex),
                                (h.node = f),
                                null !== t.queries &&
                                  (t.queries.template(t, c),
                                  (h.queries = t.queries.embeddedTView(c))),
                                c
                              );
                            })(0, l, u, t)
                          : l.data[29];
                      Nt(c, !1);
                      var h = u[11].createComment("");
                      pi(l, u, h, c),
                        tr(h, u),
                        Kr(u, (u[29] = qr(h, u, h, c))),
                        Et(c) && Er(l, u, c);
                    })(0, qy),
                    (function (e, t) {
                      var n,
                        r = Rt();
                      r.firstCreatePass
                        ? ((n = (function (e, t) {
                            if (t)
                              for (var n = t.length - 1; n >= 0; n--) {
                                var r = t[n];
                                if ("async" === r.name) return r;
                              }
                            throw new Error(
                              "The pipe 'async' could not be found!"
                            );
                          })(0, r.pipeRegistry)),
                          (r.data[30] = n),
                          n.onDestroy &&
                            (r.destroyHooks || (r.destroyHooks = [])).push(
                              30,
                              n.onDestroy
                            ))
                        : (n = r.data[30]);
                      var i = (n.factory || (n.factory = _t(n.type)))();
                      !(function (e, t, n, r) {
                        30 >= e.data.length &&
                          ((e.data[30] = null), (e.blueprint[30] = null)),
                          (t[30] = r);
                      })(r, Ot(), 0, i);
                    })(),
                    co(),
                    co(),
                    co()),
                    2 & e &&
                      (pr(2),
                      so("disabled", t.sub),
                      pr(8),
                      so(
                        "ngForOf",
                        ((n = t.lessons$),
                        (r = Ot()),
                        (i = r[30]),
                        (function (e, t) {
                          return (
                            Xi.isWrapped(t) &&
                              ((t = Xi.unwrap(t)),
                              (e[xt.lFrame.bindingIndex] = dr)),
                            t
                          );
                        })(
                          r,
                          (function (e, t) {
                            return e[1].data[30].pure;
                          })(r)
                            ? ma(r, Lt(), 2, i.transform, n, i)
                            : i.transform(n)
                        ))
                      ));
                },
                directives: [eu, yd],
                pipes: [ou],
                styles: [
                  ".buttons[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-align:center}.buttons[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}",
                ],
              })),
              By),
          },
        ],
        Zy =
          (((Qy = function e() {
            _classCallCheck(this, e);
          }).ɵmod = pt({ type: Qy })),
          (Qy.ɵinj = ve({
            factory: function (e) {
              return new (e || Qy)();
            },
            imports: [[jd.forRoot(Ky)], jd],
          })),
          Qy),
        Gy =
          (((Wy = function e() {
            _classCallCheck(this, e);
          }).ɵmod = pt({ type: Wy, bootstrap: [Kd] })),
          (Wy.ɵinj = ve({
            factory: function (e) {
              return new (e || Wy)();
            },
            providers: [Zd, Hy],
            imports: [
              [
                Wu.withServerTransition({ appId: "serverApp" }),
                Ll,
                My,
                Zy,
                _v,
                bc.register("/pruebaRepo/ngsw-worker.js", {
                  enabled: !0,
                  registrationStrategy: "registerImmediately",
                }),
              ],
            ],
          })),
          Wy);
      (function () {
        if (Mn)
          throw new Error("Cannot enable prod mode after platform setup.");
        Vn = !1;
      })(),
        document.addEventListener("DOMContentLoaded", function () {
          qu().bootstrapModule(Gy);
        });
    },
  },
  [[0, 0]],
]);
