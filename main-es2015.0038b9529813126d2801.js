(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (t, e, n) {
      t.exports = n("zUnb");
    },
    crnd: function (t, e) {
      function n(t) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (t.exports = n),
        (n.id = "crnd");
    },
    zUnb: function (t, e, n) {
      "use strict";
      function r(t) {
        return "function" == typeof t;
      }
      n.r(e);
      let s = !1;
      const i = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
          if (t) {
            const t = new Error();
            console.warn(
              "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                t.stack
            );
          } else
            s &&
              console.log(
                "RxJS: Back to a better error behavior. Thank you. <3"
              );
          s = t;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return s;
        },
      };
      function o(t) {
        setTimeout(() => {
          throw t;
        }, 0);
      }
      const a = {
          closed: !0,
          next(t) {},
          error(t) {
            if (i.useDeprecatedSynchronousErrorHandling) throw t;
            o(t);
          },
          complete() {},
        },
        l = (() =>
          Array.isArray || ((t) => t && "number" == typeof t.length))();
      function u(t) {
        return null !== t && "object" == typeof t;
      }
      const c = (() => {
        function t(t) {
          return (
            Error.call(this),
            (this.message = t
              ? `${t.length} errors occurred during unsubscription:\n${t
                  .map((t, e) => `${e + 1}) ${t.toString()}`)
                  .join("\n  ")}`
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = t),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      let h = (() => {
        class t {
          constructor(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && (this._unsubscribe = t);
          }
          unsubscribe() {
            let e;
            if (this.closed) return;
            let {
              _parentOrParents: n,
              _unsubscribe: s,
              _subscriptions: i,
            } = this;
            if (
              ((this.closed = !0),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              n instanceof t)
            )
              n.remove(this);
            else if (null !== n)
              for (let t = 0; t < n.length; ++t) n[t].remove(this);
            if (r(s))
              try {
                s.call(this);
              } catch (o) {
                e = o instanceof c ? d(o.errors) : [o];
              }
            if (l(i)) {
              let t = -1,
                n = i.length;
              for (; ++t < n; ) {
                const n = i[t];
                if (u(n))
                  try {
                    n.unsubscribe();
                  } catch (o) {
                    (e = e || []),
                      o instanceof c ? (e = e.concat(d(o.errors))) : e.push(o);
                  }
              }
            }
            if (e) throw new c(e);
          }
          add(e) {
            let n = e;
            if (!e) return t.EMPTY;
            switch (typeof e) {
              case "function":
                n = new t(e);
              case "object":
                if (
                  n === this ||
                  n.closed ||
                  "function" != typeof n.unsubscribe
                )
                  return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof t)) {
                  const e = n;
                  (n = new t()), (n._subscriptions = [e]);
                }
                break;
              default:
                throw new Error(
                  "unrecognized teardown " + e + " added to Subscription."
                );
            }
            let { _parentOrParents: r } = n;
            if (null === r) n._parentOrParents = this;
            else if (r instanceof t) {
              if (r === this) return n;
              n._parentOrParents = [r, this];
            } else {
              if (-1 !== r.indexOf(this)) return n;
              r.push(this);
            }
            const s = this._subscriptions;
            return null === s ? (this._subscriptions = [n]) : s.push(n), n;
          }
          remove(t) {
            const e = this._subscriptions;
            if (e) {
              const n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }
          }
        }
        return (
          (t.EMPTY = (function (t) {
            return (t.closed = !0), t;
          })(new t())),
          t
        );
      })();
      function d(t) {
        return t.reduce((t, e) => t.concat(e instanceof c ? e.errors : e), []);
      }
      const p = (() =>
        "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random())();
      class f extends h {
        constructor(t, e, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = a;
              break;
            case 1:
              if (!t) {
                this.destination = a;
                break;
              }
              if ("object" == typeof t) {
                t instanceof f
                  ? ((this.syncErrorThrowable = t.syncErrorThrowable),
                    (this.destination = t),
                    t.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new m(this, t)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new m(this, t, e, n));
          }
        }
        [p]() {
          return this;
        }
        static create(t, e, n) {
          const r = new f(t, e, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(t) {
          this.isStopped || this._next(t);
        }
        error(t) {
          this.isStopped || ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          this.destination.error(t), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: t } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = t),
            this
          );
        }
      }
      class m extends f {
        constructor(t, e, n, s) {
          let i;
          super(), (this._parentSubscriber = t);
          let o = this;
          r(e)
            ? (i = e)
            : e &&
              ((i = e.next),
              (n = e.error),
              (s = e.complete),
              e !== a &&
                ((o = Object.create(e)),
                r(o.unsubscribe) && this.add(o.unsubscribe.bind(o)),
                (o.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = o),
            (this._next = i),
            (this._error = n),
            (this._complete = s);
        }
        next(t) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: e } = this;
            i.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
              ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, t);
          }
        }
        error(t) {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this,
              { useDeprecatedSynchronousErrorHandling: n } = i;
            if (this._error)
              n && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
            else if (e.syncErrorThrowable)
              n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : o(t),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw t;
              o(t);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this;
            if (this._complete) {
              const e = () => this._complete.call(this._context);
              i.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, e), this.unsubscribe())
                : (this.__tryOrUnsub(e), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(t, e) {
          try {
            t.call(this._context, e);
          } catch (n) {
            if ((this.unsubscribe(), i.useDeprecatedSynchronousErrorHandling))
              throw n;
            o(n);
          }
        }
        __tryOrSetError(t, e, n) {
          if (!i.useDeprecatedSynchronousErrorHandling)
            throw new Error("bad call");
          try {
            e.call(this._context, n);
          } catch (r) {
            return i.useDeprecatedSynchronousErrorHandling
              ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
              : (o(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: t } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            t.unsubscribe();
        }
      }
      const g = (() =>
        ("function" == typeof Symbol && Symbol.observable) || "@@observable")();
      function y() {}
      function _(...t) {
        return v(t);
      }
      function v(t) {
        return t
          ? 1 === t.length
            ? t[0]
            : function (e) {
                return t.reduce((t, e) => e(t), e);
              }
          : y;
      }
      let w = (() => {
        class t {
          constructor(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          lift(e) {
            const n = new t();
            return (n.source = this), (n.operator = e), n;
          }
          subscribe(t, e, n) {
            const { operator: r } = this,
              s = (function (t, e, n) {
                if (t) {
                  if (t instanceof f) return t;
                  if (t[p]) return t[p]();
                }
                return t || e || n ? new f(t, e, n) : new f(a);
              })(t, e, n);
            if (
              (s.add(
                r
                  ? r.call(s, this.source)
                  : this.source ||
                    (i.useDeprecatedSynchronousErrorHandling &&
                      !s.syncErrorThrowable)
                  ? this._subscribe(s)
                  : this._trySubscribe(s)
              ),
              i.useDeprecatedSynchronousErrorHandling &&
                s.syncErrorThrowable &&
                ((s.syncErrorThrowable = !1), s.syncErrorThrown))
            )
              throw s.syncErrorValue;
            return s;
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              i.useDeprecatedSynchronousErrorHandling &&
                ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function (t) {
                  for (; t; ) {
                    const { closed: e, destination: n, isStopped: r } = t;
                    if (e || r) return !1;
                    t = n && n instanceof f ? n : null;
                  }
                  return !0;
                })(t)
                  ? t.error(e)
                  : console.warn(e);
            }
          }
          forEach(t, e) {
            return new (e = b(e))((e, n) => {
              let r;
              r = this.subscribe(
                (e) => {
                  try {
                    t(e);
                  } catch (s) {
                    n(s), r && r.unsubscribe();
                  }
                },
                n,
                e
              );
            });
          }
          _subscribe(t) {
            const { source: e } = this;
            return e && e.subscribe(t);
          }
          [g]() {
            return this;
          }
          pipe(...t) {
            return 0 === t.length ? this : v(t)(this);
          }
          toPromise(t) {
            return new (t = b(t))((t, e) => {
              let n;
              this.subscribe(
                (t) => (n = t),
                (t) => e(t),
                () => t(n)
              );
            });
          }
        }
        return (t.create = (e) => new t(e)), t;
      })();
      function b(t) {
        if ((t || (t = i.Promise || Promise), !t))
          throw new Error("no Promise impl found");
        return t;
      }
      const S = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = "object unsubscribed"),
            (this.name = "ObjectUnsubscribedError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      class C extends h {
        constructor(t, e) {
          super(),
            (this.subject = t),
            (this.subscriber = e),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const t = this.subject,
            e = t.observers;
          if (
            ((this.subject = null),
            !e || 0 === e.length || t.isStopped || t.closed)
          )
            return;
          const n = e.indexOf(this.subscriber);
          -1 !== n && e.splice(n, 1);
        }
      }
      class E extends f {
        constructor(t) {
          super(t), (this.destination = t);
        }
      }
      let T = (() => {
        class t extends w {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [p]() {
            return new E(this);
          }
          lift(t) {
            const e = new x(this, this);
            return (e.operator = t), e;
          }
          next(t) {
            if (this.closed) throw new S();
            if (!this.isStopped) {
              const { observers: e } = this,
                n = e.length,
                r = e.slice();
              for (let s = 0; s < n; s++) r[s].next(t);
            }
          }
          error(t) {
            if (this.closed) throw new S();
            (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
            const { observers: e } = this,
              n = e.length,
              r = e.slice();
            for (let s = 0; s < n; s++) r[s].error(t);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new S();
            this.isStopped = !0;
            const { observers: t } = this,
              e = t.length,
              n = t.slice();
            for (let r = 0; r < e; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(t) {
            if (this.closed) throw new S();
            return super._trySubscribe(t);
          }
          _subscribe(t) {
            if (this.closed) throw new S();
            return this.hasError
              ? (t.error(this.thrownError), h.EMPTY)
              : this.isStopped
              ? (t.complete(), h.EMPTY)
              : (this.observers.push(t), new C(this, t));
          }
          asObservable() {
            const t = new w();
            return (t.source = this), t;
          }
        }
        return (t.create = (t, e) => new x(t, e)), t;
      })();
      class x extends T {
        constructor(t, e) {
          super(), (this.destination = t), (this.source = e);
        }
        next(t) {
          const { destination: e } = this;
          e && e.next && e.next(t);
        }
        error(t) {
          const { destination: e } = this;
          e && e.error && this.destination.error(t);
        }
        complete() {
          const { destination: t } = this;
          t && t.complete && this.destination.complete();
        }
        _subscribe(t) {
          const { source: e } = this;
          return e ? this.source.subscribe(t) : h.EMPTY;
        }
      }
      function k(t) {
        return t && "function" == typeof t.schedule;
      }
      class A extends f {
        constructor(t, e, n) {
          super(),
            (this.parent = t),
            (this.outerValue = e),
            (this.outerIndex = n),
            (this.index = 0);
        }
        _next(t) {
          this.parent.notifyNext(
            this.outerValue,
            t,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(t) {
          this.parent.notifyError(t, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      const P = (t) => (e) => {
        for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
        e.complete();
      };
      function O() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      }
      const I = O(),
        R = (t) => t && "number" == typeof t.length && "function" != typeof t;
      function N(t) {
        return (
          !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        );
      }
      const D = (t) => {
        if (t && "function" == typeof t[g])
          return (
            (r = t),
            (t) => {
              const e = r[g]();
              if ("function" != typeof e.subscribe)
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              return e.subscribe(t);
            }
          );
        if (R(t)) return P(t);
        if (N(t))
          return (
            (n = t),
            (t) => (
              n
                .then(
                  (e) => {
                    t.closed || (t.next(e), t.complete());
                  },
                  (e) => t.error(e)
                )
                .then(null, o),
              t
            )
          );
        if (t && "function" == typeof t[I])
          return (
            (e = t),
            (t) => {
              const n = e[I]();
              for (;;) {
                const e = n.next();
                if (e.done) {
                  t.complete();
                  break;
                }
                if ((t.next(e.value), t.closed)) break;
              }
              return (
                "function" == typeof n.return &&
                  t.add(() => {
                    n.return && n.return();
                  }),
                t
              );
            }
          );
        {
          const e = u(t) ? "an invalid object" : `'${t}'`;
          throw new TypeError(
            `You provided ${e} where a stream was expected.` +
              " You can provide an Observable, Promise, Array, or Iterable."
          );
        }
        var e, n, r;
      };
      function j(t, e, n, r, s = new A(t, n, r)) {
        if (!s.closed) return e instanceof w ? e.subscribe(s) : D(e)(s);
      }
      class F extends f {
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
        notifyError(t, e) {
          this.destination.error(t);
        }
        notifyComplete(t) {
          this.destination.complete();
        }
      }
      function L(t, e) {
        return function (n) {
          if ("function" != typeof t)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return n.lift(new U(t, e));
        };
      }
      class U {
        constructor(t, e) {
          (this.project = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new V(t, this.project, this.thisArg));
        }
      }
      class V extends f {
        constructor(t, e, n) {
          super(t),
            (this.project = e),
            (this.count = 0),
            (this.thisArg = n || this);
        }
        _next(t) {
          let e;
          try {
            e = this.project.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      function M(t, e) {
        return new w((n) => {
          const r = new h();
          let s = 0;
          return (
            r.add(
              e.schedule(function () {
                s !== t.length
                  ? (n.next(t[s++]), n.closed || r.add(this.schedule()))
                  : n.complete();
              })
            ),
            r
          );
        });
      }
      function $(t, e) {
        return e
          ? (function (t, e) {
              if (null != t) {
                if (
                  (function (t) {
                    return t && "function" == typeof t[g];
                  })(t)
                )
                  return (function (t, e) {
                    return new w((n) => {
                      const r = new h();
                      return (
                        r.add(
                          e.schedule(() => {
                            const s = t[g]();
                            r.add(
                              s.subscribe({
                                next(t) {
                                  r.add(e.schedule(() => n.next(t)));
                                },
                                error(t) {
                                  r.add(e.schedule(() => n.error(t)));
                                },
                                complete() {
                                  r.add(e.schedule(() => n.complete()));
                                },
                              })
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (N(t))
                  return (function (t, e) {
                    return new w((n) => {
                      const r = new h();
                      return (
                        r.add(
                          e.schedule(() =>
                            t.then(
                              (t) => {
                                r.add(
                                  e.schedule(() => {
                                    n.next(t),
                                      r.add(e.schedule(() => n.complete()));
                                  })
                                );
                              },
                              (t) => {
                                r.add(e.schedule(() => n.error(t)));
                              }
                            )
                          )
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (R(t)) return M(t, e);
                if (
                  (function (t) {
                    return t && "function" == typeof t[I];
                  })(t) ||
                  "string" == typeof t
                )
                  return (function (t, e) {
                    if (!t) throw new Error("Iterable cannot be null");
                    return new w((n) => {
                      const r = new h();
                      let s;
                      return (
                        r.add(() => {
                          s && "function" == typeof s.return && s.return();
                        }),
                        r.add(
                          e.schedule(() => {
                            (s = t[I]()),
                              r.add(
                                e.schedule(function () {
                                  if (n.closed) return;
                                  let t, e;
                                  try {
                                    const n = s.next();
                                    (t = n.value), (e = n.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  e
                                    ? n.complete()
                                    : (n.next(t), this.schedule());
                                })
                              );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
              }
              throw new TypeError(
                ((null !== t && typeof t) || t) + " is not observable"
              );
            })(t, e)
          : t instanceof w
          ? t
          : new w(D(t));
      }
      function H(t, e, n = Number.POSITIVE_INFINITY) {
        return "function" == typeof e
          ? (r) =>
              r.pipe(
                H((n, r) => $(t(n, r)).pipe(L((t, s) => e(n, t, r, s))), n)
              )
          : ("number" == typeof e && (n = e), (e) => e.lift(new q(t, n)));
      }
      class q {
        constructor(t, e = Number.POSITIVE_INFINITY) {
          (this.project = t), (this.concurrent = e);
        }
        call(t, e) {
          return e.subscribe(new z(t, this.project, this.concurrent));
        }
      }
      class z extends F {
        constructor(t, e, n = Number.POSITIVE_INFINITY) {
          super(t),
            (this.project = e),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(t) {
          this.active < this.concurrent
            ? this._tryNext(t)
            : this.buffer.push(t);
        }
        _tryNext(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(e, t, n);
        }
        _innerSub(t, e, n) {
          const r = new A(this, e, n),
            s = this.destination;
          s.add(r);
          const i = j(this, t, void 0, void 0, r);
          i !== r && s.add(i);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
        notifyComplete(t) {
          const e = this.buffer;
          this.remove(t),
            this.active--,
            e.length > 0
              ? this._next(e.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
      function B(t) {
        return t;
      }
      function Q(t = Number.POSITIVE_INFINITY) {
        return H(B, t);
      }
      function W(t, e) {
        return e ? M(t, e) : new w(P(t));
      }
      function K(...t) {
        let e = Number.POSITIVE_INFINITY,
          n = null,
          r = t[t.length - 1];
        return (
          k(r)
            ? ((n = t.pop()),
              t.length > 1 &&
                "number" == typeof t[t.length - 1] &&
                (e = t.pop()))
            : "number" == typeof r && (e = t.pop()),
          null === n && 1 === t.length && t[0] instanceof w
            ? t[0]
            : Q(e)(W(t, n))
        );
      }
      function Z() {
        return function (t) {
          return t.lift(new G(t));
        };
      }
      class G {
        constructor(t) {
          this.connectable = t;
        }
        call(t, e) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new J(t, n),
            s = e.subscribe(r);
          return r.closed || (r.connection = n.connect()), s;
        }
      }
      class J extends f {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _unsubscribe() {
          const { connectable: t } = this;
          if (!t) return void (this.connection = null);
          this.connectable = null;
          const e = t._refCount;
          if (e <= 0) return void (this.connection = null);
          if (((t._refCount = e - 1), e > 1))
            return void (this.connection = null);
          const { connection: n } = this,
            r = t._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
      class Y extends w {
        constructor(t, e) {
          super(),
            (this.source = t),
            (this.subjectFactory = e),
            (this._refCount = 0),
            (this._isComplete = !1);
        }
        _subscribe(t) {
          return this.getSubject().subscribe(t);
        }
        getSubject() {
          const t = this._subject;
          return (
            (t && !t.isStopped) || (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        connect() {
          let t = this._connection;
          return (
            t ||
              ((this._isComplete = !1),
              (t = this._connection = new h()),
              t.add(this.source.subscribe(new tt(this.getSubject(), this))),
              t.closed && ((this._connection = null), (t = h.EMPTY))),
            t
          );
        }
        refCount() {
          return Z()(this);
        }
      }
      const X = (() => {
        const t = Y.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: t._subscribe },
          _isComplete: { value: t._isComplete, writable: !0 },
          getSubject: { value: t.getSubject },
          connect: { value: t.connect },
          refCount: { value: t.refCount },
        };
      })();
      class tt extends E {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _error(t) {
          this._unsubscribe(), super._error(t);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const t = this.connectable;
          if (t) {
            this.connectable = null;
            const e = t._connection;
            (t._refCount = 0),
              (t._subject = null),
              (t._connection = null),
              e && e.unsubscribe();
          }
        }
      }
      function et(t, e) {
        return function (n) {
          let r;
          if (
            ((r =
              "function" == typeof t
                ? t
                : function () {
                    return t;
                  }),
            "function" == typeof e)
          )
            return n.lift(new nt(r, e));
          const s = Object.create(n, X);
          return (s.source = n), (s.subjectFactory = r), s;
        };
      }
      class nt {
        constructor(t, e) {
          (this.subjectFactory = t), (this.selector = e);
        }
        call(t, e) {
          const { selector: n } = this,
            r = this.subjectFactory(),
            s = n(r).subscribe(t);
          return s.add(e.subscribe(r)), s;
        }
      }
      function rt() {
        return new T();
      }
      function st(t, e, n) {
        const r = (function (t) {
          return function (...e) {
            if (t) {
              const n = t(...e);
              for (const t in n) this[t] = n[t];
            }
          };
        })(e);
        function s(...t) {
          if (this instanceof s) return r.apply(this, t), this;
          const e = new s(...t);
          return (n.annotation = e), n;
          function n(t, n, r) {
            const s = t.hasOwnProperty("__parameters__")
              ? t.__parameters__
              : Object.defineProperty(t, "__parameters__", { value: [] })
                  .__parameters__;
            for (; s.length <= r; ) s.push(null);
            return (s[r] = s[r] || []).push(e), t;
          }
        }
        return (
          n && (s.prototype = Object.create(n.prototype)),
          (s.prototype.ngMetadataName = t),
          (s.annotationCls = s),
          s
        );
      }
      const it = st("Inject", (t) => ({ token: t })),
        ot = st("Optional"),
        at = st("Self"),
        lt = st("SkipSelf");
      var ut = (function (t) {
        return (
          (t[(t.Default = 0)] = "Default"),
          (t[(t.Host = 1)] = "Host"),
          (t[(t.Self = 2)] = "Self"),
          (t[(t.SkipSelf = 4)] = "SkipSelf"),
          (t[(t.Optional = 8)] = "Optional"),
          t
        );
      })({});
      function ct(t) {
        for (let e in t) if (t[e] === ct) return e;
        throw Error("Could not find renamed property on target object.");
      }
      function ht(t) {
        return {
          token: t.token,
          providedIn: t.providedIn || null,
          factory: t.factory,
          value: void 0,
        };
      }
      function dt(t) {
        return {
          factory: t.factory,
          providers: t.providers || [],
          imports: t.imports || [],
        };
      }
      function pt(t) {
        return ft(t, t[gt]) || ft(t, t[vt]);
      }
      function ft(t, e) {
        return e && e.token === t ? e : null;
      }
      function mt(t) {
        return t && (t.hasOwnProperty(yt) || t.hasOwnProperty(wt))
          ? t[yt]
          : null;
      }
      const gt = ct({ "\u0275prov": ct }),
        yt = ct({ "\u0275inj": ct }),
        _t = ct({ "\u0275provFallback": ct }),
        vt = ct({ ngInjectableDef: ct }),
        wt = ct({ ngInjectorDef: ct });
      function bt(t) {
        if ("string" == typeof t) return t;
        if (Array.isArray(t)) return "[" + t.map(bt).join(", ") + "]";
        if (null == t) return "" + t;
        if (t.overriddenName) return `${t.overriddenName}`;
        if (t.name) return `${t.name}`;
        const e = t.toString();
        if (null == e) return "" + e;
        const n = e.indexOf("\n");
        return -1 === n ? e : e.substring(0, n);
      }
      function St(t, e) {
        return null == t || "" === t
          ? null === e
            ? ""
            : e
          : null == e || "" === e
          ? t
          : t + " " + e;
      }
      const Ct = ct({ __forward_ref__: ct });
      function Et(t) {
        return (
          (t.__forward_ref__ = Et),
          (t.toString = function () {
            return bt(this());
          }),
          t
        );
      }
      function Tt(t) {
        return "function" == typeof (e = t) &&
          e.hasOwnProperty(Ct) &&
          e.__forward_ref__ === Et
          ? t()
          : t;
        var e;
      }
      const xt = "undefined" != typeof globalThis && globalThis,
        kt = "undefined" != typeof window && window,
        At =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        Pt = "undefined" != typeof global && global,
        Ot = xt || Pt || kt || At,
        It = ct({ "\u0275cmp": ct }),
        Rt = ct({ "\u0275dir": ct }),
        Nt = ct({ "\u0275pipe": ct }),
        Dt = ct({ "\u0275mod": ct }),
        jt = ct({ "\u0275loc": ct }),
        Ft = ct({ "\u0275fac": ct }),
        Lt = ct({ __NG_ELEMENT_ID__: ct });
      class Ut {
        constructor(t, e) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.??prov = void 0),
            "number" == typeof e
              ? (this.__NG_ELEMENT_ID__ = e)
              : void 0 !== e &&
                (this.??prov = ht({
                  token: this,
                  providedIn: e.providedIn || "root",
                  factory: e.factory,
                }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const Vt = new Ut("INJECTOR", -1),
        Mt = {},
        $t = /\n/gm,
        Ht = ct({ provide: String, useValue: ct });
      let qt,
        zt = void 0;
      function Bt(t) {
        const e = zt;
        return (zt = t), e;
      }
      function Qt(t) {
        const e = qt;
        return (qt = t), e;
      }
      function Wt(t, e = ut.Default) {
        if (void 0 === zt)
          throw new Error("inject() must be called from an injection context");
        return null === zt
          ? Zt(t, void 0, e)
          : zt.get(t, e & ut.Optional ? null : void 0, e);
      }
      function Kt(t, e = ut.Default) {
        return (qt || Wt)(Tt(t), e);
      }
      function Zt(t, e, n) {
        const r = pt(t);
        if (r && "root" == r.providedIn)
          return void 0 === r.value ? (r.value = r.factory()) : r.value;
        if (n & ut.Optional) return null;
        if (void 0 !== e) return e;
        throw new Error(`Injector: NOT_FOUND [${bt(t)}]`);
      }
      function Gt(t) {
        const e = [];
        for (let n = 0; n < t.length; n++) {
          const r = Tt(t[n]);
          if (Array.isArray(r)) {
            if (0 === r.length)
              throw new Error("Arguments array must have arguments.");
            let t = void 0,
              n = ut.Default;
            for (let e = 0; e < r.length; e++) {
              const s = r[e];
              s instanceof ot || "Optional" === s.ngMetadataName || s === ot
                ? (n |= ut.Optional)
                : s instanceof lt || "SkipSelf" === s.ngMetadataName || s === lt
                ? (n |= ut.SkipSelf)
                : s instanceof at || "Self" === s.ngMetadataName || s === at
                ? (n |= ut.Self)
                : (t = s instanceof it || s === it ? s.token : s);
            }
            e.push(Kt(t, n));
          } else e.push(Kt(r));
        }
        return e;
      }
      class Jt {
        get(t, e = Mt) {
          if (e === Mt) {
            const e = new Error(`NullInjectorError: No provider for ${bt(t)}!`);
            throw ((e.name = "NullInjectorError"), e);
          }
          return e;
        }
      }
      class Yt {}
      class Xt {}
      function te(t, e) {
        t.forEach((t) => (Array.isArray(t) ? te(t, e) : e(t)));
      }
      function ee(t, e, n) {
        e >= t.length ? t.push(n) : t.splice(e, 0, n);
      }
      function ne(t, e) {
        return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
      }
      const re = (function () {
          var t = { OnPush: 0, Default: 1 };
          return (t[t.OnPush] = "OnPush"), (t[t.Default] = "Default"), t;
        })(),
        se = (function () {
          var t = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (t[t.Emulated] = "Emulated"),
            (t[t.Native] = "Native"),
            (t[t.None] = "None"),
            (t[t.ShadowDom] = "ShadowDom"),
            t
          );
        })();
      function ie(t) {
        return "" + { toString: t };
      }
      const oe = {},
        ae = [];
      let le = 0;
      function ue(t) {
        const e = t.type,
          n = e.prototype,
          r = {},
          s = {
            type: e,
            providersResolver: null,
            decls: t.decls,
            vars: t.vars,
            factory: null,
            template: t.template || null,
            consts: t.consts || null,
            ngContentSelectors: t.ngContentSelectors,
            hostBindings: t.hostBindings || null,
            hostVars: t.hostVars || 0,
            hostAttrs: t.hostAttrs || null,
            contentQueries: t.contentQueries || null,
            declaredInputs: r,
            inputs: null,
            outputs: null,
            exportAs: t.exportAs || null,
            onChanges: null,
            onInit: n.ngOnInit || null,
            doCheck: n.ngDoCheck || null,
            afterContentInit: n.ngAfterContentInit || null,
            afterContentChecked: n.ngAfterContentChecked || null,
            afterViewInit: n.ngAfterViewInit || null,
            afterViewChecked: n.ngAfterViewChecked || null,
            onDestroy: n.ngOnDestroy || null,
            onPush: t.changeDetection === re.OnPush,
            directiveDefs: null,
            pipeDefs: null,
            selectors: t.selectors || ae,
            viewQuery: t.viewQuery || null,
            features: t.features || null,
            data: t.data || {},
            encapsulation: t.encapsulation || se.Emulated,
            id: "c",
            styles: t.styles || ae,
            _: null,
            setInput: null,
            schemas: t.schemas || null,
            tView: null,
          };
        return (
          (s._ = ie(() => {
            const e = t.directives,
              n = t.features,
              i = t.pipes;
            (s.id += le++),
              (s.inputs = fe(t.inputs, r)),
              (s.outputs = fe(t.outputs)),
              n && n.forEach((t) => t(s)),
              (s.directiveDefs = e
                ? () => ("function" == typeof e ? e() : e).map(ce)
                : null),
              (s.pipeDefs = i
                ? () => ("function" == typeof i ? i() : i).map(he)
                : null);
          })),
          s
        );
      }
      function ce(t) {
        return (
          ye(t) ||
          (function (t) {
            return t[Rt] || null;
          })(t)
        );
      }
      function he(t) {
        return (function (t) {
          return t[Nt] || null;
        })(t);
      }
      const de = {};
      function pe(t) {
        const e = {
          type: t.type,
          bootstrap: t.bootstrap || ae,
          declarations: t.declarations || ae,
          imports: t.imports || ae,
          exports: t.exports || ae,
          transitiveCompileScopes: null,
          schemas: t.schemas || null,
          id: t.id || null,
        };
        return (
          null != t.id &&
            ie(() => {
              de[t.id] = t.type;
            }),
          e
        );
      }
      function fe(t, e) {
        if (null == t) return oe;
        const n = {};
        for (const r in t)
          if (t.hasOwnProperty(r)) {
            let s = t[r],
              i = s;
            Array.isArray(s) && ((i = s[1]), (s = s[0])),
              (n[s] = r),
              e && (e[s] = i);
          }
        return n;
      }
      const me = ue;
      function ge(t) {
        return {
          type: t.type,
          name: t.name,
          factory: null,
          pure: !1 !== t.pure,
          onDestroy: t.type.prototype.ngOnDestroy || null,
        };
      }
      function ye(t) {
        return t[It] || null;
      }
      function _e(t, e) {
        return t.hasOwnProperty(Ft) ? t[Ft] : null;
      }
      function ve(t, e) {
        const n = t[Dt] || null;
        if (!n && !0 === e)
          throw new Error(`Type ${bt(t)} does not have '\u0275mod' property.`);
        return n;
      }
      function we(t) {
        return Array.isArray(t) && "object" == typeof t[1];
      }
      function be(t) {
        return Array.isArray(t) && !0 === t[1];
      }
      function Se(t) {
        return 0 != (8 & t.flags);
      }
      function Ce(t) {
        return 2 == (2 & t.flags);
      }
      function Ee(t) {
        return 1 == (1 & t.flags);
      }
      function Te(t) {
        return null !== t.template;
      }
      function xe(t) {
        return 0 != (512 & t[2]);
      }
      const ke = {
        lFrame: ze(null),
        bindingsEnabled: !0,
        checkNoChangesMode: !1,
      };
      function Ae() {
        return ke.bindingsEnabled;
      }
      function Pe() {
        return ke.lFrame.lView;
      }
      function Oe() {
        return ke.lFrame.tView;
      }
      function Ie() {
        return ke.lFrame.previousOrParentTNode;
      }
      function Re(t, e) {
        (ke.lFrame.previousOrParentTNode = t), (ke.lFrame.isParent = e);
      }
      function Ne() {
        return ke.lFrame.isParent;
      }
      function De() {
        return ke.checkNoChangesMode;
      }
      function je(t) {
        ke.checkNoChangesMode = t;
      }
      function Fe() {
        const t = ke.lFrame;
        let e = t.bindingRootIndex;
        return (
          -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e
        );
      }
      function Le() {
        return ke.lFrame.bindingIndex++;
      }
      function Ue(t, e) {
        const n = ke.lFrame;
        (n.bindingIndex = n.bindingRootIndex = t),
          (n.currentDirectiveIndex = e);
      }
      function Ve(t) {
        ke.lFrame.currentQueryIndex = t;
      }
      function Me(t, e) {
        const n = qe();
        (ke.lFrame = n), (n.previousOrParentTNode = e), (n.lView = t);
      }
      const $e = Be;
      function He(t, e) {
        const n = qe(),
          r = t[1];
        (ke.lFrame = n),
          (n.previousOrParentTNode = e),
          (n.isParent = !0),
          (n.lView = t),
          (n.tView = r),
          (n.selectedIndex = 0),
          (n.contextLView = t),
          (n.elementDepthCount = 0),
          (n.currentDirectiveIndex = -1),
          (n.currentNamespace = null),
          (n.currentSanitizer = null),
          (n.bindingRootIndex = -1),
          (n.bindingIndex = r.bindingStartIndex),
          (n.currentQueryIndex = 0);
      }
      function qe() {
        const t = ke.lFrame,
          e = null === t ? null : t.child;
        return null === e ? ze(t) : e;
      }
      function ze(t) {
        const e = {
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
          parent: t,
          child: null,
        };
        return null !== t && (t.child = e), e;
      }
      function Be() {
        ke.lFrame = ke.lFrame.parent;
      }
      function Qe() {
        return ke.lFrame.selectedIndex;
      }
      function We(t) {
        ke.lFrame.selectedIndex = t;
      }
      function Ke(t, e) {
        for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
          const e = t.data[n];
          e.afterContentInit &&
            (t.contentHooks || (t.contentHooks = [])).push(
              -n,
              e.afterContentInit
            ),
            e.afterContentChecked &&
              ((t.contentHooks || (t.contentHooks = [])).push(
                n,
                e.afterContentChecked
              ),
              (t.contentCheckHooks || (t.contentCheckHooks = [])).push(
                n,
                e.afterContentChecked
              )),
            e.afterViewInit &&
              (t.viewHooks || (t.viewHooks = [])).push(-n, e.afterViewInit),
            e.afterViewChecked &&
              ((t.viewHooks || (t.viewHooks = [])).push(n, e.afterViewChecked),
              (t.viewCheckHooks || (t.viewCheckHooks = [])).push(
                n,
                e.afterViewChecked
              )),
            null != e.onDestroy &&
              (t.destroyHooks || (t.destroyHooks = [])).push(n, e.onDestroy);
        }
      }
      function Ze(t, e, n) {
        Ye(t, e, 3, n);
      }
      function Ge(t, e, n, r) {
        (3 & t[2]) === n && Ye(t, e, n, r);
      }
      function Je(t, e) {
        let n = t[2];
        (3 & n) === e && ((n &= 1023), (n += 1), (t[2] = n));
      }
      function Ye(t, e, n, r) {
        const s = null != r ? r : -1;
        let i = 0;
        for (let o = void 0 !== r ? 65535 & t[18] : 0; o < e.length; o++)
          if ("number" == typeof e[o + 1]) {
            if (((i = e[o]), null != r && i >= r)) break;
          } else
            e[o] < 0 && (t[18] += 65536),
              (i < s || -1 == s) &&
                (Xe(t, n, e, o), (t[18] = (4294901760 & t[18]) + o + 2)),
              o++;
      }
      function Xe(t, e, n, r) {
        const s = n[r] < 0,
          i = n[r + 1],
          o = t[s ? -n[r] : n[r]];
        s
          ? t[2] >> 10 < t[18] >> 16 &&
            (3 & t[2]) === e &&
            ((t[2] += 1024), i.call(o))
          : i.call(o);
      }
      class tn {
        constructor(t, e, n) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = e),
            (this.injectImpl = n);
        }
      }
      let en = void 0;
      function nn(t) {
        return !!t.listen;
      }
      const rn = {
        createRenderer: (t, e) =>
          void 0 !== en
            ? en
            : "undefined" != typeof document
            ? document
            : void 0,
      };
      function sn(t, e, n) {
        const r = nn(t);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if ("number" == typeof i) {
            if (0 !== i) break;
            s++;
            const o = n[s++],
              a = n[s++],
              l = n[s++];
            r ? t.setAttribute(e, a, l, o) : e.setAttributeNS(o, a, l);
          } else {
            const o = i,
              a = n[++s];
            an(o)
              ? r && t.setProperty(e, o, a)
              : r
              ? t.setAttribute(e, o, a)
              : e.setAttribute(o, a),
              s++;
          }
        }
        return s;
      }
      function on(t) {
        return 3 === t || 4 === t || 6 === t;
      }
      function an(t) {
        return 64 === t.charCodeAt(0);
      }
      function ln(t, e) {
        if (null === e || 0 === e.length);
        else if (null === t || 0 === t.length) t = e.slice();
        else {
          let n = -1;
          for (let r = 0; r < e.length; r++) {
            const s = e[r];
            "number" == typeof s
              ? (n = s)
              : 0 === n ||
                un(t, n, s, null, -1 === n || 2 === n ? e[++r] : null);
          }
        }
        return t;
      }
      function un(t, e, n, r, s) {
        let i = 0,
          o = t.length;
        if (-1 === e) o = -1;
        else
          for (; i < t.length; ) {
            const n = t[i++];
            if ("number" == typeof n) {
              if (n === e) {
                o = -1;
                break;
              }
              if (n > e) {
                o = i - 1;
                break;
              }
            }
          }
        for (; i < t.length; ) {
          const e = t[i];
          if ("number" == typeof e) break;
          if (e === n) {
            if (null === r) return void (null !== s && (t[i + 1] = s));
            if (r === t[i + 1]) return void (t[i + 2] = s);
          }
          i++, null !== r && i++, null !== s && i++;
        }
        -1 !== o && (t.splice(o, 0, e), (i = o + 1)),
          t.splice(i++, 0, n),
          null !== r && t.splice(i++, 0, r),
          null !== s && t.splice(i++, 0, s);
      }
      function cn(t) {
        return -1 !== t;
      }
      function hn(t) {
        return 32767 & t;
      }
      function dn(t) {
        return t >> 16;
      }
      function pn(t, e) {
        let n = dn(t),
          r = e;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      function fn(t) {
        return "string" == typeof t ? t : null == t ? "" : "" + t;
      }
      function mn(t) {
        return "function" == typeof t
          ? t.name || t.toString()
          : "object" == typeof t && null != t && "function" == typeof t.type
          ? t.type.name || t.type.toString()
          : fn(t);
      }
      const gn = (() =>
        (
          ("undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(Ot))();
      function yn(t) {
        return t instanceof Function ? t() : t;
      }
      let _n = !0;
      function vn(t) {
        const e = _n;
        return (_n = t), e;
      }
      let wn = 0;
      function bn(t, e) {
        const n = Cn(t, e);
        if (-1 !== n) return n;
        const r = e[1];
        r.firstCreatePass &&
          ((t.injectorIndex = e.length),
          Sn(r.data, t),
          Sn(e, null),
          Sn(r.blueprint, null));
        const s = En(t, e),
          i = t.injectorIndex;
        if (cn(s)) {
          const t = hn(s),
            n = pn(s, e),
            r = n[1].data;
          for (let s = 0; s < 8; s++) e[i + s] = n[t + s] | r[t + s];
        }
        return (e[i + 8] = s), i;
      }
      function Sn(t, e) {
        t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
      }
      function Cn(t, e) {
        return -1 === t.injectorIndex ||
          (t.parent && t.parent.injectorIndex === t.injectorIndex) ||
          null == e[t.injectorIndex + 8]
          ? -1
          : t.injectorIndex;
      }
      function En(t, e) {
        if (t.parent && -1 !== t.parent.injectorIndex)
          return t.parent.injectorIndex;
        let n = e[6],
          r = 1;
        for (; n && -1 === n.injectorIndex; )
          (n = (e = e[15]) ? e[6] : null), r++;
        return n ? n.injectorIndex | (r << 16) : -1;
      }
      function Tn(t, e, n) {
        !(function (t, e, n) {
          let r = "string" != typeof n ? n[Lt] : n.charCodeAt(0) || 0;
          null == r && (r = n[Lt] = wn++);
          const s = 255 & r,
            i = 1 << s,
            o = 64 & s,
            a = 32 & s,
            l = e.data;
          128 & s
            ? o
              ? a
                ? (l[t + 7] |= i)
                : (l[t + 6] |= i)
              : a
              ? (l[t + 5] |= i)
              : (l[t + 4] |= i)
            : o
            ? a
              ? (l[t + 3] |= i)
              : (l[t + 2] |= i)
            : a
            ? (l[t + 1] |= i)
            : (l[t] |= i);
        })(t, e, n);
      }
      function xn(t, e, n, r = ut.Default, s) {
        if (null !== t) {
          const s = (function (t) {
            if ("string" == typeof t) return t.charCodeAt(0) || 0;
            const e = t[Lt];
            return "number" == typeof e && e > 0 ? 255 & e : e;
          })(n);
          if ("function" == typeof s) {
            Me(e, t);
            try {
              const t = s();
              if (null != t || r & ut.Optional) return t;
              throw new Error(`No provider for ${mn(n)}!`);
            } finally {
              $e();
            }
          } else if ("number" == typeof s) {
            if (-1 === s) return new Rn(t, e);
            let i = null,
              o = Cn(t, e),
              a = -1,
              l = r & ut.Host ? e[16][6] : null;
            for (
              (-1 === o || r & ut.SkipSelf) &&
              ((a = -1 === o ? En(t, e) : e[o + 8]),
              In(r, !1) ? ((i = e[1]), (o = hn(a)), (e = pn(a, e))) : (o = -1));
              -1 !== o;

            ) {
              a = e[o + 8];
              const t = e[1];
              if (On(s, o, t.data)) {
                const t = An(o, e, n, i, r, l);
                if (t !== kn) return t;
              }
              In(r, e[1].data[o + 8] === l) && On(s, o, e)
                ? ((i = t), (o = hn(a)), (e = pn(a, e)))
                : (o = -1);
            }
          }
        }
        if (
          (r & ut.Optional && void 0 === s && (s = null),
          0 == (r & (ut.Self | ut.Host)))
        ) {
          const t = e[9],
            i = Qt(void 0);
          try {
            return t ? t.get(n, s, r & ut.Optional) : Zt(n, s, r & ut.Optional);
          } finally {
            Qt(i);
          }
        }
        if (r & ut.Optional) return s;
        throw new Error(`NodeInjector: NOT_FOUND [${mn(n)}]`);
      }
      const kn = {};
      function An(t, e, n, r, s, i) {
        const o = e[1],
          a = o.data[t + 8],
          l = (function (t, e, n, r, s) {
            const i = t.providerIndexes,
              o = e.data,
              a = 65535 & i,
              l = t.directiveStart,
              u = i >> 16,
              c = s ? a + u : t.directiveEnd;
            for (let h = r ? a : a + u; h < c; h++) {
              const t = o[h];
              if ((h < l && n === t) || (h >= l && t.type === n)) return h;
            }
            if (s) {
              const t = o[l];
              if (t && Te(t) && t.type === n) return l;
            }
            return null;
          })(
            a,
            o,
            n,
            null == r ? Ce(a) && _n : r != o && 3 === a.type,
            s & ut.Host && i === a
          );
        return null !== l ? Pn(e, o, l, a) : kn;
      }
      function Pn(t, e, n, r) {
        let s = t[n];
        const i = e.data;
        if (s instanceof tn) {
          const o = s;
          if (o.resolving) throw new Error(`Circular dep for ${mn(i[n])}`);
          const a = vn(o.canSeeViewProviders);
          let l;
          (o.resolving = !0), o.injectImpl && (l = Qt(o.injectImpl)), Me(t, r);
          try {
            (s = t[n] = o.factory(void 0, i, t, r)),
              e.firstCreatePass &&
                n >= r.directiveStart &&
                (function (t, e, n) {
                  const { onChanges: r, onInit: s, doCheck: i } = e;
                  r &&
                    ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, r),
                    (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(
                      t,
                      r
                    )),
                    s &&
                      (n.preOrderHooks || (n.preOrderHooks = [])).push(-t, s),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(t, i));
                })(n, i[n], e);
          } finally {
            o.injectImpl && Qt(l), vn(a), (o.resolving = !1), $e();
          }
        }
        return s;
      }
      function On(t, e, n) {
        const r = 64 & t,
          s = 32 & t;
        let i;
        return (
          (i =
            128 & t
              ? r
                ? s
                  ? n[e + 7]
                  : n[e + 6]
                : s
                ? n[e + 5]
                : n[e + 4]
              : r
              ? s
                ? n[e + 3]
                : n[e + 2]
              : s
              ? n[e + 1]
              : n[e]),
          !!(i & (1 << t))
        );
      }
      function In(t, e) {
        return !(t & ut.Self || (t & ut.Host && e));
      }
      class Rn {
        constructor(t, e) {
          (this._tNode = t), (this._lView = e);
        }
        get(t, e) {
          return xn(this._tNode, this._lView, t, void 0, e);
        }
      }
      function Nn(t) {
        return t.ngDebugContext;
      }
      function Dn(t) {
        return t.ngOriginalError;
      }
      function jn(t, ...e) {
        t.error(...e);
      }
      class Fn {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const e = this._findOriginalError(t),
            n = this._findContext(t),
            r = (function (t) {
              return t.ngErrorLogger || jn;
            })(t);
          r(this._console, "ERROR", t),
            e && r(this._console, "ORIGINAL ERROR", e),
            n && r(this._console, "ERROR CONTEXT", n);
        }
        _findContext(t) {
          return t ? (Nn(t) ? Nn(t) : this._findContext(Dn(t))) : null;
        }
        _findOriginalError(t) {
          let e = Dn(t);
          for (; e && Dn(e); ) e = Dn(e);
          return e;
        }
      }
      class Ln {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return (
            `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` +
            " (see http://g.co/ng/security#xss)"
          );
        }
      }
      let Un = !0,
        Vn = !1;
      function Mn() {
        return (Vn = !0), Un;
      }
      const $n = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Hn =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,
        qn = (function () {
          var t = {
            NONE: 0,
            HTML: 1,
            STYLE: 2,
            SCRIPT: 3,
            URL: 4,
            RESOURCE_URL: 5,
          };
          return (
            (t[t.NONE] = "NONE"),
            (t[t.HTML] = "HTML"),
            (t[t.STYLE] = "STYLE"),
            (t[t.SCRIPT] = "SCRIPT"),
            (t[t.URL] = "URL"),
            (t[t.RESOURCE_URL] = "RESOURCE_URL"),
            t
          );
        })();
      function zn(t) {
        const e = (function () {
          const t = Pe();
          return t && t[12];
        })();
        return e
          ? e.sanitize(qn.URL, t) || ""
          : (function (t, e) {
              const n = (function (t) {
                return (t instanceof Ln && t.getTypeName()) || null;
              })(t);
              if (null != n && n !== e) {
                if ("ResourceURL" === n && "URL" === e) return !0;
                throw new Error(
                  `Required a safe ${e}, got a ${n} (see http://g.co/ng/security#xss)`
                );
              }
              return n === e;
            })(t, "URL")
          ? (r = t) instanceof Ln
            ? r.changingThisBreaksApplicationSecurity
            : r
          : ((n = fn(t)),
            (n = String(n)).match($n) || n.match(Hn)
              ? n
              : (Mn() &&
                  console.warn(
                    `WARNING: sanitizing unsafe URL value ${n} (see http://g.co/ng/security#xss)`
                  ),
                "unsafe:" + n));
        var n, r;
      }
      function Bn(t) {
        for (; Array.isArray(t); ) t = t[0];
        return t;
      }
      function Qn(t, e) {
        return Bn(e[t + 19]);
      }
      function Wn(t, e) {
        return Bn(e[t.index]);
      }
      function Kn(t, e) {
        return t.data[e + 19];
      }
      function Zn(t, e) {
        const n = e[t];
        return we(n) ? n : n[0];
      }
      function Gn(t) {
        const e = (function (t) {
          return t.__ngContext__ || null;
        })(t);
        return e ? (Array.isArray(e) ? e : e.lView) : null;
      }
      function Jn(t) {
        return 128 == (128 & t[2]);
      }
      function Yn(t, e) {
        return null === t || null == e ? null : t[e];
      }
      function Xn(t) {
        t[18] = 0;
      }
      function tr(t, e) {
        t.__ngContext__ = e;
      }
      function er(t) {
        throw new Error(
          `Multiple components match node with tagname ${t.tagName}`
        );
      }
      function nr() {
        throw new Error("Cannot mix multi providers and regular providers");
      }
      function rr(t, e, n) {
        let r = t.length;
        for (;;) {
          const s = t.indexOf(e, n);
          if (-1 === s) return s;
          if (0 === s || t.charCodeAt(s - 1) <= 32) {
            const n = e.length;
            if (s + n === r || t.charCodeAt(s + n) <= 32) return s;
          }
          n = s + 1;
        }
      }
      function sr(t, e, n) {
        let r = 0;
        for (; r < t.length; ) {
          let s = t[r++];
          if (n && "class" === s) {
            if (((s = t[r]), -1 !== rr(s.toLowerCase(), e, 0))) return !0;
          } else if (1 === s) {
            for (; r < t.length && "string" == typeof (s = t[r++]); )
              if (s.toLowerCase() === e) return !0;
            return !1;
          }
        }
        return !1;
      }
      function ir(t, e, n) {
        return e === (0 !== t.type || n ? t.tagName : "ng-template");
      }
      function or(t, e, n) {
        let r = 4;
        const s = t.attrs || [],
          i = (function (t) {
            for (let e = 0; e < t.length; e++) if (on(t[e])) return e;
            return t.length;
          })(s);
        let o = !1;
        for (let a = 0; a < e.length; a++) {
          const l = e[a];
          if ("number" != typeof l) {
            if (!o)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== l && !ir(t, l, n)) || ("" === l && 1 === e.length))
                ) {
                  if (ar(r)) return !1;
                  o = !0;
                }
              } else {
                const u = 8 & r ? l : e[++a];
                if (8 & r && null !== t.attrs) {
                  if (!sr(t.attrs, u, n)) {
                    if (ar(r)) return !1;
                    o = !0;
                  }
                  continue;
                }
                const c = lr(
                  8 & r ? "class" : l,
                  s,
                  0 == t.type && "ng-template" !== t.tagName,
                  n
                );
                if (-1 === c) {
                  if (ar(r)) return !1;
                  o = !0;
                  continue;
                }
                if ("" !== u) {
                  let t;
                  t = c > i ? "" : s[c + 1].toLowerCase();
                  const e = 8 & r ? t : null;
                  if ((e && -1 !== rr(e, u, 0)) || (2 & r && u !== t)) {
                    if (ar(r)) return !1;
                    o = !0;
                  }
                }
              }
          } else {
            if (!o && !ar(r) && !ar(l)) return !1;
            if (o && ar(l)) continue;
            (o = !1), (r = l | (1 & r));
          }
        }
        return ar(r) || o;
      }
      function ar(t) {
        return 0 == (1 & t);
      }
      function lr(t, e, n, r) {
        if (null === e) return -1;
        let s = 0;
        if (r || !n) {
          let n = !1;
          for (; s < e.length; ) {
            const r = e[s];
            if (r === t) return s;
            if (3 === r || 6 === r) n = !0;
            else {
              if (1 === r || 2 === r) {
                let t = e[++s];
                for (; "string" == typeof t; ) t = e[++s];
                continue;
              }
              if (4 === r) break;
              if (0 === r) {
                s += 4;
                continue;
              }
            }
            s += n ? 1 : 2;
          }
          return -1;
        }
        return (function (t, e) {
          let n = t.indexOf(4);
          if (n > -1)
            for (n++; n < t.length; ) {
              if (t[n] === e) return n;
              n++;
            }
          return -1;
        })(e, t);
      }
      function ur(t, e, n = !1) {
        for (let r = 0; r < e.length; r++) if (or(t, e[r], n)) return !0;
        return !1;
      }
      function cr(t, e) {
        return t ? ":not(" + e.trim() + ")" : e;
      }
      function hr(t) {
        let e = t[0],
          n = 1,
          r = 2,
          s = "",
          i = !1;
        for (; n < t.length; ) {
          let o = t[n];
          if ("string" == typeof o)
            if (2 & r) {
              const e = t[++n];
              s += "[" + o + (e.length > 0 ? '="' + e + '"' : "") + "]";
            } else 8 & r ? (s += "." + o) : 4 & r && (s += " " + o);
          else
            "" === s || ar(o) || ((e += cr(i, s)), (s = "")),
              (r = o),
              (i = i || !ar(r));
          n++;
        }
        return "" !== s && (e += cr(i, s)), e;
      }
      const dr = {};
      function pr(t) {
        const e = t[3];
        return be(e) ? e[3] : e;
      }
      function fr(t) {
        mr(Oe(), Pe(), Qe() + t, De());
      }
      function mr(t, e, n, r) {
        if (!r)
          if (3 == (3 & e[2])) {
            const r = t.preOrderCheckHooks;
            null !== r && Ze(e, r, n);
          } else {
            const r = t.preOrderHooks;
            null !== r && Ge(e, r, 0, n);
          }
        We(n);
      }
      function gr(t, e) {
        const n = t.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const s = n[r],
              i = n[r + 1];
            if (-1 !== i) {
              const n = t.data[i];
              Ve(s), n.contentQueries(2, e[i], i);
            }
          }
      }
      function yr(t, e, n) {
        return nn(e)
          ? e.createElement(t, n)
          : null === n
          ? e.createElement(t)
          : e.createElementNS(n, t);
      }
      function _r(t, e, n, r, s, i, o, a, l, u) {
        const c = e.blueprint.slice();
        return (
          (c[0] = s),
          (c[2] = 140 | r),
          Xn(c),
          (c[3] = c[15] = t),
          (c[8] = n),
          (c[10] = o || (t && t[10])),
          (c[11] = a || (t && t[11])),
          (c[12] = l || (t && t[12]) || null),
          (c[9] = u || (t && t[9]) || null),
          (c[6] = i),
          (c[16] = 2 == e.type ? t[16] : c),
          c
        );
      }
      function vr(t, e, n, r, s, i) {
        const o = n + 19,
          a =
            t.data[o] ||
            (function (t, e, n, r, s, i) {
              const o = Ie(),
                a = Ne(),
                l = a ? o : o && o.parent,
                u = (t.data[n] = Ar(0, l && l !== e ? l : null, r, n, s, i));
              return (
                null === t.firstChild && (t.firstChild = u),
                o &&
                  (!a || null != o.child || (null === u.parent && 2 !== o.type)
                    ? a || (o.next = u)
                    : (o.child = u)),
                u
              );
            })(t, e, o, r, s, i);
        return Re(a, !0), a;
      }
      function wr(t, e, n) {
        He(e, e[6]);
        try {
          const r = t.viewQuery;
          null !== r && Jr(1, r, n);
          const s = t.template;
          null !== s && Cr(t, e, s, 1, n),
            t.firstCreatePass && (t.firstCreatePass = !1),
            t.staticContentQueries && gr(t, e),
            t.staticViewQueries && Jr(2, t.viewQuery, n);
          const i = t.components;
          null !== i &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) Qr(t, e[n]);
            })(e, i);
        } finally {
          (e[2] &= -5), Be();
        }
      }
      function br(t, e, n, r) {
        const s = e[2];
        if (256 == (256 & s)) return;
        He(e, e[6]);
        const i = De();
        try {
          Xn(e),
            (ke.lFrame.bindingIndex = t.bindingStartIndex),
            null !== n && Cr(t, e, n, 2, r);
          const o = 3 == (3 & s);
          if (!i)
            if (o) {
              const n = t.preOrderCheckHooks;
              null !== n && Ze(e, n, null);
            } else {
              const n = t.preOrderHooks;
              null !== n && Ge(e, n, 0, null), Je(e, 0);
            }
          if (
            ((function (t) {
              let e = t[13];
              for (; null !== e; ) {
                let n;
                if (be(e) && (n = e[2]) >> 1 == -1) {
                  for (let t = 9; t < e.length; t++) {
                    const n = e[t],
                      r = n[1];
                    Jn(n) && br(r, n, r.template, n[8]);
                  }
                  0 != (1 & n) && zr(e, t[16]);
                }
                e = e[4];
              }
            })(e),
            null !== t.contentQueries && gr(t, e),
            !i)
          )
            if (o) {
              const n = t.contentCheckHooks;
              null !== n && Ze(e, n);
            } else {
              const n = t.contentHooks;
              null !== n && Ge(e, n, 1), Je(e, 1);
            }
          !(function (t, e) {
            try {
              const n = t.expandoInstructions;
              if (null !== n) {
                let r = t.expandoStartIndex,
                  s = -1,
                  i = -1;
                for (let t = 0; t < n.length; t++) {
                  const o = n[t];
                  "number" == typeof o
                    ? o <= 0
                      ? ((i = 0 - o), We(i), (r += 9 + n[++t]), (s = r))
                      : (r += o)
                    : (null !== o && (Ue(r, s), o(2, e[s])), s++);
                }
              }
            } finally {
              We(-1);
            }
          })(t, e);
          const a = t.components;
          null !== a &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) Br(t, e[n]);
            })(e, a);
          const l = t.viewQuery;
          if ((null !== l && Jr(2, l, r), !i))
            if (o) {
              const n = t.viewCheckHooks;
              null !== n && Ze(e, n);
            } else {
              const n = t.viewHooks;
              null !== n && Ge(e, n, 2), Je(e, 2);
            }
          !0 === t.firstUpdatePass && (t.firstUpdatePass = !1),
            i || (e[2] &= -73);
        } finally {
          Be();
        }
      }
      function Sr(t, e, n, r) {
        const s = e[10],
          i = !De(),
          o = 4 == (4 & e[2]);
        try {
          i && !o && s.begin && s.begin(), o && wr(t, e, r), br(t, e, n, r);
        } finally {
          i && !o && s.end && s.end();
        }
      }
      function Cr(t, e, n, r, s) {
        const i = Qe();
        try {
          We(-1), 2 & r && e.length > 19 && mr(t, e, 0, De()), n(r, s);
        } finally {
          We(i);
        }
      }
      function Er(t, e, n) {
        Ae() &&
          ((function (t, e, n, r) {
            const s = n.directiveStart,
              i = n.directiveEnd;
            t.firstCreatePass || bn(n, e), tr(r, e);
            const o = n.initialInputs;
            for (let a = s; a < i; a++) {
              const r = t.data[a],
                i = Te(r);
              i && Mr(e, n, r);
              const l = Pn(e, t, a, n);
              tr(l, e),
                null !== o && $r(0, a - s, l, r, 0, o),
                i && (Zn(n.index, e)[8] = l);
            }
          })(t, e, n, Wn(n, e)),
          128 == (128 & n.flags) &&
            (function (t, e, n) {
              const r = n.directiveStart,
                s = n.directiveEnd,
                i = t.expandoInstructions,
                o = t.firstCreatePass,
                a = n.index - 19;
              try {
                We(a);
                for (let n = r; n < s; n++) {
                  const r = t.data[n],
                    s = e[n];
                  null !== r.hostBindings ||
                  0 !== r.hostVars ||
                  null !== r.hostAttrs
                    ? Dr(r, s)
                    : o && i.push(null);
                }
              } finally {
                We(-1);
              }
            })(t, e, n));
      }
      function Tr(t, e, n = Wn) {
        const r = e.localNames;
        if (null !== r) {
          let s = e.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const o = r[i + 1],
              a = -1 === o ? n(e, t) : t[o];
            t[s++] = a;
          }
        }
      }
      function xr(t) {
        return (
          t.tView ||
          (t.tView = kr(
            1,
            -1,
            t.template,
            t.decls,
            t.vars,
            t.directiveDefs,
            t.pipeDefs,
            t.viewQuery,
            t.schemas,
            t.consts
          ))
        );
      }
      function kr(t, e, n, r, s, i, o, a, l, u) {
        const c = 19 + r,
          h = c + s,
          d = (function (t, e) {
            const n = [];
            for (let r = 0; r < e; r++) n.push(r < t ? null : dr);
            return n;
          })(c, h);
        return (d[1] = {
          type: t,
          id: e,
          blueprint: d,
          template: n,
          queries: null,
          viewQuery: a,
          node: null,
          data: d.slice().fill(null, c),
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
          directiveRegistry: "function" == typeof i ? i() : i,
          pipeRegistry: "function" == typeof o ? o() : o,
          firstChild: null,
          schemas: l,
          consts: u,
        });
      }
      function Ar(t, e, n, r, s, i) {
        return {
          type: n,
          index: r,
          injectorIndex: e ? e.injectorIndex : -1,
          directiveStart: -1,
          directiveEnd: -1,
          directiveStylingLast: -1,
          propertyBindings: null,
          flags: 0,
          providerIndexes: 0,
          tagName: s,
          attrs: i,
          mergedAttrs: null,
          localNames: null,
          initialInputs: void 0,
          inputs: null,
          outputs: null,
          tViews: null,
          next: null,
          projectionNext: null,
          child: null,
          parent: e,
          projection: null,
          styles: null,
          residualStyles: void 0,
          classes: null,
          residualClasses: void 0,
          classBindings: 0,
          styleBindings: 0,
        };
      }
      function Pr(t, e, n) {
        for (let r in t)
          if (t.hasOwnProperty(r)) {
            const s = t[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(e, s)
              : (n[r] = [e, s]);
          }
        return n;
      }
      function Or(t, e, n, r, s, i, o, a) {
        const l = Qn(n, e),
          u = Kn(t, n);
        let c,
          h = u.inputs;
        if (!o && null != h && (c = h[r]))
          es(t, e, c, r, s),
            Ce(u) &&
              (function (t, e) {
                const n = Zn(e, t);
                16 & n[2] || (n[2] |= 64);
              })(e, n + 19);
        else if (3 === u.type) {
          r =
            "class" === (d = r)
              ? "className"
              : "for" === d
              ? "htmlFor"
              : "formaction" === d
              ? "formAction"
              : "innerHtml" === d
              ? "innerHTML"
              : "readonly" === d
              ? "readOnly"
              : "tabindex" === d
              ? "tabIndex"
              : d;
          const t = a ? a(u, e) : e[11];
          (s = null != i ? i(s, u.tagName || "", r) : s),
            nn(t)
              ? t.setProperty(l, r, s)
              : an(r) || (l.setProperty ? l.setProperty(r, s) : (l[r] = s));
        }
        var d;
      }
      function Ir(t, e, n, r) {
        let s = !1;
        if (Ae()) {
          const i = (function (t, e, n) {
              const r = t.directiveRegistry;
              let s = null;
              if (r)
                for (let i = 0; i < r.length; i++) {
                  const o = r[i];
                  ur(n, o.selectors, !1) &&
                    (s || (s = []),
                    Tn(bn(n, e), t, o.type),
                    Te(o)
                      ? (2 & n.flags && er(n), Fr(t, n), s.unshift(o))
                      : s.push(o));
                }
              return s;
            })(t, e, n),
            o = null === r ? null : { "": -1 };
          if (null !== i) {
            let r = 0;
            (s = !0), Ur(n, t.data.length, i.length);
            for (let t = 0; t < i.length; t++) {
              const e = i[t];
              e.providersResolver && e.providersResolver(e);
            }
            jr(t, n, i.length);
            let a = !1,
              l = !1;
            for (let s = 0; s < i.length; s++) {
              const u = i[s];
              (n.mergedAttrs = ln(n.mergedAttrs, u.hostAttrs)),
                Vr(t, e, u),
                Lr(t.data.length - 1, u, o),
                null !== u.contentQueries && (n.flags |= 8),
                (null === u.hostBindings &&
                  null === u.hostAttrs &&
                  0 === u.hostVars) ||
                  (n.flags |= 128),
                !a &&
                  (u.onChanges || u.onInit || u.doCheck) &&
                  ((t.preOrderHooks || (t.preOrderHooks = [])).push(
                    n.index - 19
                  ),
                  (a = !0)),
                l ||
                  (!u.onChanges && !u.doCheck) ||
                  ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(
                    n.index - 19
                  ),
                  (l = !0)),
                Rr(t, u),
                (r += u.hostVars);
            }
            !(function (t, e) {
              const n = e.directiveEnd,
                r = t.data,
                s = e.attrs,
                i = [];
              let o = null,
                a = null;
              for (let l = e.directiveStart; l < n; l++) {
                const t = r[l],
                  e = t.inputs;
                i.push(null !== s ? Hr(e, s) : null),
                  (o = Pr(e, l, o)),
                  (a = Pr(t.outputs, l, a));
              }
              null !== o &&
                ((o.hasOwnProperty("class") || o.hasOwnProperty("className")) &&
                  (e.flags |= 16),
                o.hasOwnProperty("style") && (e.flags |= 32)),
                (e.initialInputs = i),
                (e.inputs = o),
                (e.outputs = a);
            })(t, n),
              Nr(t, e, r);
          }
          o &&
            (function (t, e, n) {
              if (e) {
                const r = (t.localNames = []);
                for (let t = 0; t < e.length; t += 2) {
                  const s = n[e[t + 1]];
                  if (null == s)
                    throw new Error(`Export of name '${e[t + 1]}' not found!`);
                  r.push(e[t], s);
                }
              }
            })(n, r, o);
        }
        return (n.mergedAttrs = ln(n.mergedAttrs, n.attrs)), s;
      }
      function Rr(t, e) {
        const n = t.expandoInstructions;
        n.push(e.hostBindings), 0 !== e.hostVars && n.push(e.hostVars);
      }
      function Nr(t, e, n) {
        for (let r = 0; r < n; r++)
          e.push(dr), t.blueprint.push(dr), t.data.push(null);
      }
      function Dr(t, e) {
        null !== t.hostBindings && t.hostBindings(1, e);
      }
      function jr(t, e, n) {
        const r = 19 - e.index,
          s = t.data.length - (65535 & e.providerIndexes);
        (t.expandoInstructions || (t.expandoInstructions = [])).push(r, s, n);
      }
      function Fr(t, e) {
        (e.flags |= 2), (t.components || (t.components = [])).push(e.index);
      }
      function Lr(t, e, n) {
        if (n) {
          if (e.exportAs)
            for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
          Te(e) && (n[""] = t);
        }
      }
      function Ur(t, e, n) {
        (t.flags |= 1),
          (t.directiveStart = e),
          (t.directiveEnd = e + n),
          (t.providerIndexes = e);
      }
      function Vr(t, e, n) {
        t.data.push(n);
        const r = n.factory || (n.factory = _e(n.type)),
          s = new tn(r, Te(n), null);
        t.blueprint.push(s), e.push(s);
      }
      function Mr(t, e, n) {
        const r = Wn(e, t),
          s = xr(n),
          i = t[10],
          o = Wr(
            t,
            _r(t, s, null, n.onPush ? 64 : 16, r, e, i, i.createRenderer(r, n))
          );
        t[e.index] = o;
      }
      function $r(t, e, n, r, s, i) {
        const o = i[e];
        if (null !== o) {
          const t = r.setInput;
          for (let e = 0; e < o.length; ) {
            const s = o[e++],
              i = o[e++],
              a = o[e++];
            null !== t ? r.setInput(n, a, s, i) : (n[i] = a);
          }
        }
      }
      function Hr(t, e) {
        let n = null,
          r = 0;
        for (; r < e.length; ) {
          const s = e[r];
          if (0 !== s)
            if (5 !== s) {
              if ("number" == typeof s) break;
              t.hasOwnProperty(s) &&
                (null === n && (n = []), n.push(s, t[s], e[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function qr(t, e, n, r) {
        return new Array(t, !0, -2, e, null, null, r, n, null);
      }
      function zr(t, e) {
        const n = t[5];
        for (let r = 0; r < n.length; r++) {
          const t = n[r],
            s = t[3][3][16];
          if (s !== e && 0 == (16 & s[2])) {
            const e = t[1];
            br(e, t, e.template, t[8]);
          }
        }
      }
      function Br(t, e) {
        const n = Zn(e, t);
        if (Jn(n) && 80 & n[2]) {
          const t = n[1];
          br(t, n, t.template, n[8]);
        }
      }
      function Qr(t, e) {
        const n = Zn(e, t),
          r = n[1];
        !(function (t, e) {
          for (let n = e.length; n < t.blueprint.length; n++)
            e.push(t.blueprint[n]);
        })(r, n),
          wr(r, n, n[8]);
      }
      function Wr(t, e) {
        return t[13] ? (t[14][4] = e) : (t[13] = e), (t[14] = e), e;
      }
      function Kr(t) {
        for (; t; ) {
          t[2] |= 64;
          const e = pr(t);
          if (xe(t) && !e) return t;
          t = e;
        }
        return null;
      }
      function Zr(t, e, n) {
        const r = e[10];
        r.begin && r.begin();
        try {
          br(t, e, t.template, n);
        } catch (s) {
          throw (ts(e, s), s);
        } finally {
          r.end && r.end();
        }
      }
      function Gr(t) {
        !(function (t) {
          for (let e = 0; e < t.components.length; e++) {
            const n = t.components[e],
              r = Gn(n),
              s = r[1];
            Sr(s, r, s.template, n);
          }
        })(t[8]);
      }
      function Jr(t, e, n) {
        Ve(0), e(t, n);
      }
      const Yr = (() => Promise.resolve(null))();
      function Xr(t) {
        return t[7] || (t[7] = []);
      }
      function ts(t, e) {
        const n = t[9],
          r = n ? n.get(Fn, null) : null;
        r && r.handleError(e);
      }
      function es(t, e, n, r, s) {
        for (let i = 0; i < n.length; ) {
          const o = n[i++],
            a = n[i++],
            l = e[o],
            u = t.data[o];
          null !== u.setInput ? u.setInput(l, s, r, a) : (l[a] = s);
        }
      }
      function ns(t, e) {
        const n = e[3];
        return -1 === t.index ? (be(n) ? n : null) : n;
      }
      function rs(t, e) {
        const n = ns(t, e);
        return n ? fs(e[11], n[7]) : null;
      }
      function ss(t, e, n, r, s) {
        if (null != r) {
          let i,
            o = !1;
          be(r) ? (i = r) : we(r) && ((o = !0), (r = r[0]));
          const a = Bn(r);
          0 === t && null !== n
            ? null == s
              ? ds(e, n, a)
              : hs(e, n, a, s || null)
            : 1 === t && null !== n
            ? hs(e, n, a, s || null)
            : 2 === t
            ? (function (t, e, n) {
                const r = fs(t, e);
                r &&
                  (function (t, e, n, r) {
                    nn(t) ? t.removeChild(e, n, r) : e.removeChild(n);
                  })(t, r, e, n);
              })(e, a, o)
            : 3 === t && e.destroyNode(a),
            null != i &&
              (function (t, e, n, r, s) {
                const i = n[7];
                i !== Bn(n) && ss(e, t, r, i, s);
                for (let o = 9; o < n.length; o++) {
                  const s = n[o];
                  _s(s[1], s, t, e, r, i);
                }
              })(e, t, i, n, s);
        }
      }
      function is(t, e, n, r) {
        const s = rs(t.node, e);
        s && _s(t, e, e[11], n ? 1 : 2, s, r);
      }
      function os(t, e) {
        const n = t[5],
          r = n.indexOf(e);
        n.splice(r, 1);
      }
      function as(t, e) {
        if (t.length <= 9) return;
        const n = 9 + e,
          r = t[n];
        if (r) {
          const s = r[17];
          null !== s && s !== t && os(s, r), e > 0 && (t[n - 1][4] = r[4]);
          const i = ne(t, 9 + e);
          is(r[1], r, !1, null);
          const o = i[5];
          null !== o && o.detachView(i[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -129);
        }
        return r;
      }
      function ls(t, e) {
        if (!(256 & e[2])) {
          const n = e[11];
          nn(n) && n.destroyNode && _s(t, e, n, 3, null, null),
            (function (t) {
              let e = t[13];
              if (!e) return cs(t[1], t);
              for (; e; ) {
                let n = null;
                if (we(e)) n = e[13];
                else {
                  const t = e[9];
                  t && (n = t);
                }
                if (!n) {
                  for (; e && !e[4] && e !== t; )
                    we(e) && cs(e[1], e), (e = us(e, t));
                  null === e && (e = t), we(e) && cs(e[1], e), (n = e && e[4]);
                }
                e = n;
              }
            })(e);
        }
      }
      function us(t, e) {
        let n;
        return we(t) && (n = t[6]) && 2 === n.type
          ? ns(n, t)
          : t[3] === e
          ? null
          : t[3];
      }
      function cs(t, e) {
        if (!(256 & e[2])) {
          (e[2] &= -129),
            (e[2] |= 256),
            (function (t, e) {
              let n;
              if (null != t && null != (n = t.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const t = e[n[r]];
                  t instanceof tn || n[r + 1].call(t);
                }
            })(t, e),
            (function (t, e) {
              const n = t.cleanup;
              if (null !== n) {
                const t = e[7];
                for (let r = 0; r < n.length - 1; r += 2)
                  if ("string" == typeof n[r]) {
                    const s = n[r + 1],
                      i = "function" == typeof s ? s(e) : Bn(e[s]),
                      o = t[n[r + 2]],
                      a = n[r + 3];
                    "boolean" == typeof a
                      ? i.removeEventListener(n[r], o, a)
                      : a >= 0
                      ? t[a]()
                      : t[-a].unsubscribe(),
                      (r += 2);
                  } else n[r].call(t[n[r + 1]]);
                e[7] = null;
              }
            })(t, e);
          const n = e[6];
          n && 3 === n.type && nn(e[11]) && e[11].destroy();
          const r = e[17];
          if (null !== r && be(e[3])) {
            r !== e[3] && os(r, e);
            const n = e[5];
            null !== n && n.detachView(t);
          }
        }
      }
      function hs(t, e, n, r) {
        nn(t) ? t.insertBefore(e, n, r) : e.insertBefore(n, r, !0);
      }
      function ds(t, e, n) {
        nn(t) ? t.appendChild(e, n) : e.appendChild(n);
      }
      function ps(t, e, n, r) {
        null !== r ? hs(t, e, n, r) : ds(t, e, n);
      }
      function fs(t, e) {
        return nn(t) ? t.parentNode(e) : e.parentNode;
      }
      function ms(t, e, n, r) {
        const s = (function (t, e, n) {
          let r = e.parent;
          for (; null != r && (4 === r.type || 5 === r.type); )
            r = (e = r).parent;
          if (null == r) {
            const t = n[6];
            return 2 === t.type ? rs(t, n) : n[0];
          }
          if (e && 5 === e.type && 4 & e.flags) return Wn(e, n).parentNode;
          if (2 & r.flags) {
            const e = t.data,
              n = e[e[r.index].directiveStart].encapsulation;
            if (n !== se.ShadowDom && n !== se.Native) return null;
          }
          return Wn(r, n);
        })(t, r, e);
        if (null != s) {
          const t = e[11],
            i = (function (t, e) {
              if (2 === t.type) {
                const n = ns(t, e);
                return null === n ? null : gs(n.indexOf(e, 9) - 9, n);
              }
              return 4 === t.type || 5 === t.type ? Wn(t, e) : null;
            })(r.parent || e[6], e);
          if (Array.isArray(n))
            for (let e = 0; e < n.length; e++) ps(t, s, n[e], i);
          else ps(t, s, n, i);
        }
      }
      function gs(t, e) {
        const n = 9 + t + 1;
        if (n < e.length) {
          const t = e[n],
            r = t[1].firstChild;
          if (null !== r)
            return (function t(e, n) {
              if (null !== n) {
                const r = n.type;
                if (3 === r) return Wn(n, e);
                if (0 === r) return gs(-1, e[n.index]);
                if (4 === r || 5 === r) {
                  const r = n.child;
                  if (null !== r) return t(e, r);
                  {
                    const t = e[n.index];
                    return be(t) ? gs(-1, t) : Bn(t);
                  }
                }
                {
                  const r = e[16],
                    s = r[6],
                    i = pr(r),
                    o = s.projection[n.projection];
                  return null != o ? t(i, o) : t(e, n.next);
                }
              }
              return null;
            })(t, r);
        }
        return e[7];
      }
      function ys(t, e, n, r, s, i, o) {
        for (; null != n; ) {
          const a = r[n.index],
            l = n.type;
          o && 0 === e && (a && tr(Bn(a), r), (n.flags |= 4)),
            64 != (64 & n.flags) &&
              (4 === l || 5 === l
                ? (ys(t, e, n.child, r, s, i, !1), ss(e, t, s, a, i))
                : 1 === l
                ? vs(t, e, r, n, s, i)
                : ss(e, t, s, a, i)),
            (n = o ? n.projectionNext : n.next);
        }
      }
      function _s(t, e, n, r, s, i) {
        ys(n, r, t.node.child, e, s, i, !1);
      }
      function vs(t, e, n, r, s, i) {
        const o = n[16],
          a = o[6].projection[r.projection];
        if (Array.isArray(a))
          for (let l = 0; l < a.length; l++) ss(e, t, s, a[l], i);
        else ys(t, e, a, o[3], s, i, !0);
      }
      function ws(t, e, n) {
        nn(t) ? t.setAttribute(e, "style", n) : (e.style.cssText = n);
      }
      function bs(t, e, n) {
        nn(t)
          ? "" === n
            ? t.removeAttribute(e, "class")
            : t.setAttribute(e, "class", n)
          : (e.className = n);
      }
      class Ss {
        constructor(t, e) {
          (this._lView = t),
            (this._cdRefInjectingView = e),
            (this._appRef = null),
            (this._viewContainerRef = null),
            (this._tViewNode = null);
        }
        get rootNodes() {
          const t = this._lView;
          return null == t[0]
            ? (function t(e, n, r, s, i = !1) {
                for (; null !== r; ) {
                  const o = n[r.index];
                  if ((null !== o && s.push(Bn(o)), be(o)))
                    for (let e = 9; e < o.length; e++) {
                      const n = o[e],
                        r = n[1].firstChild;
                      null !== r && t(n[1], n, r, s);
                    }
                  const a = r.type;
                  if (4 === a || 5 === a) t(e, n, r.child, s);
                  else if (1 === a) {
                    const e = n[16],
                      i = e[6],
                      o = pr(e);
                    let a = i.projection[r.projection];
                    null !== a && null !== o && t(o[1], o, a, s, !0);
                  }
                  r = i ? r.projectionNext : r.next;
                }
                return s;
              })(t[1], t, t[6].child, [])
            : [];
        }
        get context() {
          return this._lView[8];
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._viewContainerRef) {
            const t = this._viewContainerRef.indexOf(this);
            t > -1 && this._viewContainerRef.detach(t),
              (this._viewContainerRef = null);
          }
          ls(this._lView[1], this._lView);
        }
        onDestroy(t) {
          var e, n, r;
          (e = this._lView[1]),
            (r = t),
            Xr((n = this._lView)).push(r),
            e.firstCreatePass &&
              (function (t) {
                return t.cleanup || (t.cleanup = []);
              })(e).push(n[7].length - 1, null);
        }
        markForCheck() {
          Kr(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          Zr(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function (t, e, n) {
            je(!0);
            try {
              Zr(t, e, n);
            } finally {
              je(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef(t) {
          if (this._appRef)
            throw new Error(
              "This view is already attached directly to the ApplicationRef!"
            );
          this._viewContainerRef = t;
        }
        detachFromAppRef() {
          var t;
          (this._appRef = null),
            _s(this._lView[1], (t = this._lView), t[11], 2, null, null);
        }
        attachToAppRef(t) {
          if (this._viewContainerRef)
            throw new Error(
              "This view is already attached to a ViewContainer!"
            );
          this._appRef = t;
        }
      }
      class Cs extends Ss {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          Gr(this._view);
        }
        checkNoChanges() {
          !(function (t) {
            je(!0);
            try {
              Gr(t);
            } finally {
              je(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      let Es, Ts, xs;
      function ks(t, e, n) {
        return Es || (Es = class extends t {}), new Es(Wn(e, n));
      }
      function As(t = !1) {
        return (function (t, e, n) {
          if (!n && Ce(t)) {
            const n = Zn(t.index, e);
            return new Ss(n, n);
          }
          return 3 === t.type || 0 === t.type || 4 === t.type || 5 === t.type
            ? new Ss(e[16], e)
            : null;
        })(Ie(), Pe(), t);
      }
      let Ps = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => Os()), t;
      })();
      const Os = As,
        Is = new Ut("Set Injector scope."),
        Rs = {},
        Ns = {},
        Ds = [];
      let js = void 0;
      function Fs() {
        return void 0 === js && (js = new Jt()), js;
      }
      function Ls(t, e = null, n = null, r) {
        return (e = e || Fs()), new Us(t, n, e, r);
      }
      class Us {
        constructor(t, e, n, r = null) {
          (this.parent = n),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const s = [];
          e && te(e, (n) => this.processProvider(n, t, e)),
            te([t], (t) => this.processInjectorType(t, [], s)),
            this.records.set(Vt, Ms(void 0, this));
          const i = this.records.get(Is);
          (this.scope = null != i ? i.value : null),
            this.injectorDefTypes.forEach((t) => this.get(t)),
            (this.source = r || ("object" == typeof t ? null : bt(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((t) => t.ngOnDestroy());
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }
        get(t, e = Mt, n = ut.Default) {
          this.assertNotDestroyed();
          const r = Bt(this);
          try {
            if (!(n & ut.SkipSelf)) {
              let e = this.records.get(t);
              if (void 0 === e) {
                const n =
                  ("function" == typeof (s = t) ||
                    ("object" == typeof s && s instanceof Ut)) &&
                  pt(t);
                (e = n && this.injectableDefInScope(n) ? Ms(Vs(t), Rs) : null),
                  this.records.set(t, e);
              }
              if (null != e) return this.hydrate(t, e);
            }
            return (n & ut.Self ? Fs() : this.parent).get(
              t,
              (e = n & ut.Optional && e === Mt ? null : e)
            );
          } catch (i) {
            if ("NullInjectorError" === i.name) {
              if (
                ((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(bt(t)),
                r)
              )
                throw i;
              return (function (t, e, n, r) {
                const s = t.ngTempTokenPath;
                throw (
                  (e.__source && s.unshift(e.__source),
                  (t.message = (function (t, e, n, r = null) {
                    t =
                      t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1)
                        ? t.substr(2)
                        : t;
                    let s = bt(e);
                    if (Array.isArray(e)) s = e.map(bt).join(" -> ");
                    else if ("object" == typeof e) {
                      let t = [];
                      for (let n in e)
                        if (e.hasOwnProperty(n)) {
                          let r = e[n];
                          t.push(
                            n +
                              ":" +
                              ("string" == typeof r ? JSON.stringify(r) : bt(r))
                          );
                        }
                      s = `{${t.join(", ")}}`;
                    }
                    return `${n}${r ? "(" + r + ")" : ""}[${s}]: ${t.replace(
                      $t,
                      "\n  "
                    )}`;
                  })("\n" + t.message, s, n, r)),
                  (t.ngTokenPath = s),
                  (t.ngTempTokenPath = null),
                  t)
                );
              })(i, t, "R3InjectorError", this.source);
            }
            throw i;
          } finally {
            Bt(r);
          }
          var s;
        }
        toString() {
          const t = [];
          return (
            this.records.forEach((e, n) => t.push(bt(n))),
            `R3Injector[${t.join(", ")}]`
          );
        }
        assertNotDestroyed() {
          if (this._destroyed)
            throw new Error("Injector has already been destroyed.");
        }
        processInjectorType(t, e, n) {
          if (!(t = Tt(t))) return !1;
          let r = mt(t);
          const s = (null == r && t.ngModule) || void 0,
            i = void 0 === s ? t : s,
            o = -1 !== n.indexOf(i);
          if ((void 0 !== s && (r = mt(s)), null == r)) return !1;
          if (null != r.imports && !o) {
            let t;
            n.push(i);
            try {
              te(r.imports, (r) => {
                this.processInjectorType(r, e, n) &&
                  (void 0 === t && (t = []), t.push(r));
              });
            } finally {
            }
            if (void 0 !== t)
              for (let e = 0; e < t.length; e++) {
                const { ngModule: n, providers: r } = t[e];
                te(r, (t) => this.processProvider(t, n, r || Ds));
              }
          }
          this.injectorDefTypes.add(i), this.records.set(i, Ms(r.factory, Rs));
          const a = r.providers;
          if (null != a && !o) {
            const e = t;
            te(a, (t) => this.processProvider(t, e, a));
          }
          return void 0 !== s && void 0 !== t.providers;
        }
        processProvider(t, e, n) {
          let r = Hs((t = Tt(t))) ? t : Tt(t && t.provide);
          const s = (function (t, e, n) {
            return $s(t)
              ? Ms(void 0, t.useValue)
              : Ms(
                  (function (t, e, n) {
                    let r = void 0;
                    if (Hs(t)) return Vs(Tt(t));
                    if ($s(t)) r = () => Tt(t.useValue);
                    else if ((s = t) && s.useFactory)
                      r = () => t.useFactory(...Gt(t.deps || []));
                    else if (
                      (function (t) {
                        return !(!t || !t.useExisting);
                      })(t)
                    )
                      r = () => Kt(Tt(t.useExisting));
                    else {
                      const s = Tt(t && (t.useClass || t.provide));
                      if (
                        (s ||
                          (function (t, e, n) {
                            let r = "";
                            throw (
                              (t &&
                                e &&
                                (r = ` - only instances of Provider and Type are allowed, got: [${e
                                  .map((t) => (t == n ? "?" + n + "?" : "..."))
                                  .join(", ")}]`),
                              new Error(
                                `Invalid provider for the NgModule '${bt(t)}'` +
                                  r
                              ))
                            );
                          })(e, n, t),
                        !(function (t) {
                          return !!t.deps;
                        })(t))
                      )
                        return Vs(s);
                      r = () => new s(...Gt(t.deps));
                    }
                    var s;
                    return r;
                  })(t, e, n),
                  Rs
                );
          })(t, e, n);
          if (Hs(t) || !0 !== t.multi) {
            const t = this.records.get(r);
            t && void 0 !== t.multi && nr();
          } else {
            let e = this.records.get(r);
            e
              ? void 0 === e.multi && nr()
              : ((e = Ms(void 0, Rs, !0)),
                (e.factory = () => Gt(e.multi)),
                this.records.set(r, e)),
              (r = t),
              e.multi.push(t);
          }
          this.records.set(r, s);
        }
        hydrate(t, e) {
          var n;
          return (
            e.value === Ns
              ? (function (t) {
                  throw new Error(`Cannot instantiate cyclic dependency! ${t}`);
                })(bt(t))
              : e.value === Rs && ((e.value = Ns), (e.value = e.factory())),
            "object" == typeof e.value &&
              e.value &&
              null !== (n = e.value) &&
              "object" == typeof n &&
              "function" == typeof n.ngOnDestroy &&
              this.onDestroy.add(e.value),
            e.value
          );
        }
        injectableDefInScope(t) {
          return (
            !!t.providedIn &&
            ("string" == typeof t.providedIn
              ? "any" === t.providedIn || t.providedIn === this.scope
              : this.injectorDefTypes.has(t.providedIn))
          );
        }
      }
      function Vs(t) {
        const e = pt(t),
          n = null !== e ? e.factory : _e(t);
        if (null !== n) return n;
        const r = mt(t);
        if (null !== r) return r.factory;
        if (t instanceof Ut)
          throw new Error(`Token ${bt(t)} is missing a \u0275prov definition.`);
        if (t instanceof Function)
          return (function (t) {
            const e = t.length;
            if (e > 0) {
              const n = (function (t, e) {
                const n = [];
                for (let r = 0; r < t; r++) n.push("?");
                return n;
              })(e);
              throw new Error(
                `Can't resolve all parameters for ${bt(t)}: (${n.join(", ")}).`
              );
            }
            const n = (function (t) {
              const e = t && (t[gt] || t[vt] || (t[_t] && t[_t]()));
              if (e) {
                const n = (function (t) {
                  if (t.hasOwnProperty("name")) return t.name;
                  const e = ("" + t).match(/^function\s*([^\s(]+)/);
                  return null === e ? "" : e[1];
                })(t);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\n` +
                      `This will become an error in v10. Please add @Injectable() to the "${n}" class.`
                  ),
                  e
                );
              }
              return null;
            })(t);
            return null !== n ? () => n.factory(t) : () => new t();
          })(t);
        throw new Error("unreachable");
      }
      function Ms(t, e, n = !1) {
        return { factory: t, value: e, multi: n ? [] : void 0 };
      }
      function $s(t) {
        return null !== t && "object" == typeof t && Ht in t;
      }
      function Hs(t) {
        return "function" == typeof t;
      }
      const qs = function (t, e, n) {
        return Ls({ name: n }, e, t, n);
      };
      let zs = (() => {
        class t {
          static create(t, e) {
            return Array.isArray(t)
              ? qs(t, e, "")
              : qs(t.providers, t.parent, t.name || "");
          }
        }
        return (
          (t.THROW_IF_NOT_FOUND = Mt),
          (t.NULL = new Jt()),
          (t.??prov = ht({
            token: t,
            providedIn: "any",
            factory: () => Kt(Vt),
          })),
          (t.__NG_ELEMENT_ID__ = -1),
          t
        );
      })();
      const Bs = new Ut("AnalyzeForEntryComponents");
      let Qs = new Map();
      const Ws = new Set();
      function Ks(t) {
        return "string" == typeof t ? t : t.text();
      }
      function Zs(t, e) {
        let n = t.styles,
          r = t.classes,
          s = 0;
        for (let i = 0; i < e.length; i++) {
          const t = e[i];
          "number" == typeof t
            ? (s = t)
            : 1 == s
            ? (r = St(r, t))
            : 2 == s && (n = St(n, t + ": " + e[++i] + ";"));
        }
        null !== n && (t.styles = n), null !== r && (t.classes = r);
      }
      let Gs = null;
      function Js() {
        if (!Gs) {
          const t = Ot.Symbol;
          if (t && t.iterator) Gs = t.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let e = 0; e < t.length; ++e) {
              const n = t[e];
              "entries" !== n &&
                "size" !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (Gs = n);
            }
          }
        }
        return Gs;
      }
      function Ys(t, e) {
        return (
          t === e ||
          ("number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e))
        );
      }
      class Xs {
        constructor(t) {
          this.wrapped = t;
        }
        static wrap(t) {
          return new Xs(t);
        }
        static unwrap(t) {
          return Xs.isWrapped(t) ? t.wrapped : t;
        }
        static isWrapped(t) {
          return t instanceof Xs;
        }
      }
      function ti(t) {
        return (
          !!ei(t) && (Array.isArray(t) || (!(t instanceof Map) && Js() in t))
        );
      }
      function ei(t) {
        return null !== t && ("function" == typeof t || "object" == typeof t);
      }
      function ni(t, e, n) {
        return !Object.is(t[e], n) && ((t[e] = n), !0);
      }
      function ri(t, e, n, r) {
        const s = Pe();
        return (
          ni(s, Le(), e) &&
            (function (t, e, n, r, s, i, o) {
              const a = Qn(t, s),
                l = s[11];
              if (null == n)
                nn(l) ? l.removeAttribute(a, e, o) : a.removeAttribute(e);
              else {
                const s = Kn(r, t),
                  u = null == i ? fn(n) : i(n, s.tagName || "", e);
                nn(l)
                  ? l.setAttribute(a, e, u, o)
                  : o
                  ? a.setAttributeNS(o, e, u)
                  : a.setAttribute(e, u);
              }
            })(Qe(), t, e, Oe(), s, n, r),
          ri
        );
      }
      function si(t, e = ut.Default) {
        const n = Pe();
        return null == n ? Kt(t, e) : xn(Ie(), n, Tt(t), e);
      }
      function ii(t) {
        return (function (t, e) {
          if ("class" === e) return t.classes;
          if ("style" === e) return t.styles;
          const n = t.attrs;
          if (n) {
            const t = n.length;
            let r = 0;
            for (; r < t; ) {
              const s = n[r];
              if (on(s)) break;
              if (0 === s) r += 2;
              else if ("number" == typeof s)
                for (r++; r < t && "string" == typeof n[r]; ) r++;
              else {
                if (s === e) return n[r + 1];
                r += 2;
              }
            }
          }
          return null;
        })(Ie(), t);
      }
      function oi() {
        throw new Error("invalid");
      }
      function ai(t, e, n) {
        const r = Pe();
        if (ni(r, Le(), e)) {
          const s = Qe();
          Or(Oe(), r, s, t, e, n);
        }
        return ai;
      }
      function li(t, e, n, r, s) {
        const i = e.inputs,
          o = s ? "class" : "style";
        es(t, n, i[o] || (s && i.className), o, r);
      }
      function ui(t, e, n, r) {
        const s = Pe(),
          i = Oe(),
          o = 19 + t,
          a = s[11],
          l = (s[o] = yr(e, a, ke.lFrame.currentNamespace)),
          u = i.firstCreatePass
            ? (function (t, e, n, r, s, i, o) {
                const a = e.consts,
                  l = Yn(a, i),
                  u = vr(e, n[6], t, 3, s, l);
                return (
                  Ir(e, n, u, Yn(a, o)),
                  null !== u.mergedAttrs && Zs(u, u.mergedAttrs),
                  null !== e.queries && e.queries.elementStart(e, u),
                  u
                );
              })(t, i, s, 0, e, n, r)
            : i.data[o];
        Re(u, !0);
        const c = u.mergedAttrs;
        null !== c && sn(a, l, c);
        const h = u.classes;
        null !== h && bs(a, l, h);
        const d = u.styles;
        null !== d && ws(a, l, d),
          ms(i, s, l, u),
          0 === ke.lFrame.elementDepthCount && tr(l, s),
          ke.lFrame.elementDepthCount++,
          Ee(u) &&
            (Er(i, s, u),
            (function (t, e, n) {
              if (Se(e)) {
                const r = e.directiveEnd;
                for (let s = e.directiveStart; s < r; s++) {
                  const e = t.data[s];
                  e.contentQueries && e.contentQueries(1, n[s], s);
                }
              }
            })(i, u, s)),
          null !== r && Tr(s, u);
      }
      function ci() {
        let t = Ie();
        Ne() ? (ke.lFrame.isParent = !1) : ((t = t.parent), Re(t, !1));
        const e = t;
        ke.lFrame.elementDepthCount--;
        const n = Oe();
        n.firstCreatePass && (Ke(n, t), Se(t) && n.queries.elementEnd(t)),
          null !== e.classes &&
            (function (t) {
              return 0 != (16 & t.flags);
            })(e) &&
            li(n, e, Pe(), e.classes, !0),
          null !== e.styles &&
            (function (t) {
              return 0 != (32 & t.flags);
            })(e) &&
            li(n, e, Pe(), e.styles, !1);
      }
      function hi(t, e, n, r) {
        ui(t, e, n, r), ci();
      }
      function di(t) {
        return !!t && "function" == typeof t.then;
      }
      function pi(t) {
        return !!t && "function" == typeof t.subscribe;
      }
      function fi(t, e, n = !1, r) {
        const s = Pe(),
          i = Oe(),
          o = Ie();
        return (
          (function (t, e, n, r, s, i, o = !1, a) {
            const l = Ee(r),
              u = t.firstCreatePass && (t.cleanup || (t.cleanup = [])),
              c = Xr(e);
            let h = !0;
            if (3 === r.type) {
              const d = Wn(r, e),
                p = a ? a(d) : oe,
                f = p.target || d,
                m = c.length,
                g = a ? (t) => a(Bn(t[r.index])).target : r.index;
              if (nn(n)) {
                let o = null;
                if (
                  (!a &&
                    l &&
                    (o = (function (t, e, n, r) {
                      const s = t.cleanup;
                      if (null != s)
                        for (let i = 0; i < s.length - 1; i += 2) {
                          const t = s[i];
                          if (t === n && s[i + 1] === r) {
                            const t = e[7],
                              n = s[i + 2];
                            return t.length > n ? t[n] : null;
                          }
                          "string" == typeof t && (i += 2);
                        }
                      return null;
                    })(t, e, s, r.index)),
                  null !== o)
                )
                  ((o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i),
                    (o.__ngLastListenerFn__ = i),
                    (h = !1);
                else {
                  i = gi(r, e, i, !1);
                  const t = n.listen(p.name || f, s, i);
                  c.push(i, t), u && u.push(s, g, m, m + 1);
                }
              } else
                (i = gi(r, e, i, !0)),
                  f.addEventListener(s, i, o),
                  c.push(i),
                  u && u.push(s, g, m, o);
            }
            const d = r.outputs;
            let p;
            if (h && null !== d && (p = d[s])) {
              const t = p.length;
              if (t)
                for (let n = 0; n < t; n += 2) {
                  const t = e[p[n]][p[n + 1]].subscribe(i),
                    o = c.length;
                  c.push(i, t), u && u.push(s, r.index, o, -(o + 1));
                }
            }
          })(i, s, s[11], o, t, e, n, r),
          fi
        );
      }
      function mi(t, e, n) {
        try {
          return !1 !== e(n);
        } catch (r) {
          return ts(t, r), !1;
        }
      }
      function gi(t, e, n, r) {
        return function s(i) {
          if (i === Function) return n;
          const o = 2 & t.flags ? Zn(t.index, e) : e;
          0 == (32 & e[2]) && Kr(o);
          let a = mi(e, n, i),
            l = s.__ngNextListenerFn__;
          for (; l; ) (a = mi(e, l, i) && a), (l = l.__ngNextListenerFn__);
          return r && !1 === a && (i.preventDefault(), (i.returnValue = !1)), a;
        };
      }
      function yi(t, e = "") {
        const n = Pe(),
          r = Oe(),
          s = t + 19,
          i = r.firstCreatePass ? vr(r, n[6], t, 3, null, null) : r.data[s],
          o = (n[s] = (function (t, e) {
            return nn(e) ? e.createText(t) : e.createTextNode(t);
          })(e, n[11]));
        ms(r, n, o, i), Re(i, !1);
      }
      function _i(t) {
        return vi("", t, ""), _i;
      }
      function vi(t, e, n) {
        const r = Pe(),
          s = (function (t, e, n, r) {
            return ni(t, Le(), n) ? e + fn(n) + r : dr;
          })(r, t, e, n);
        return (
          s !== dr &&
            (function (t, e, n) {
              const r = Qn(e, t),
                s = t[11];
              nn(s) ? s.setValue(r, n) : (r.textContent = n);
            })(r, Qe(), s),
          vi
        );
      }
      function wi(t, e, n) {
        const r = Pe();
        if (ni(r, Le(), e)) {
          const s = Qe();
          Or(Oe(), r, s, t, e, n, !0);
        }
        return wi;
      }
      function bi(t, e) {
        const n = Gn(t)[1],
          r = n.data.length - 1;
        Ke(n, { directiveStart: r, directiveEnd: r + 1 });
      }
      class Si {
        constructor(t, e, n) {
          (this.previousValue = t),
            (this.currentValue = e),
            (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function Ci() {
        return (Ei.ngInherit = !0), Ei;
      }
      function Ei(t) {
        t.type.prototype.ngOnChanges &&
          ((t.setInput = Ti),
          (t.onChanges = function () {
            const t = xi(this),
              e = t && t.current;
            if (e) {
              const n = t.previous;
              if (n === oe) t.previous = e;
              else for (let t in e) n[t] = e[t];
              (t.current = null), this.ngOnChanges(e);
            }
          }));
      }
      function Ti(t, e, n, r) {
        const s =
            xi(t) ||
            (function (t, e) {
              return (t.__ngSimpleChanges__ = e);
            })(t, { previous: oe, current: null }),
          i = s.current || (s.current = {}),
          o = s.previous,
          a = this.declaredInputs[n],
          l = o[a];
        (i[a] = new Si(l && l.currentValue, e, o === oe)), (t[r] = e);
      }
      function xi(t) {
        return t.__ngSimpleChanges__ || null;
      }
      class ki {}
      class Ai {
        resolveComponentFactory(t) {
          throw (function (t) {
            const e = Error(
              `No component factory found for ${bt(
                t
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (e.ngComponent = t), e;
          })(t);
        }
      }
      let Pi = (() => {
          class t {}
          return (t.NULL = new Ai()), t;
        })(),
        Oi = (() => {
          class t {
            constructor(t) {
              this.nativeElement = t;
            }
          }
          return (t.__NG_ELEMENT_ID__ = () => Ii(t)), t;
        })();
      const Ii = function (t) {
        return ks(t, Ie(), Pe());
      };
      class Ri {}
      const Ni = (function () {
        var t = { Important: 1, DashCase: 2 };
        return (t[t.Important] = "Important"), (t[t.DashCase] = "DashCase"), t;
      })();
      let Di = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => ji()), t;
      })();
      const ji = function () {
        const t = Pe(),
          e = Zn(Ie().index, t);
        return (function (t) {
          const e = t[11];
          if (nn(e)) return e;
          throw new Error(
            "Cannot inject Renderer2 when the application uses Renderer3!"
          );
        })(we(e) ? e : t);
      };
      let Fi = (() => {
        class t {}
        return (
          (t.??prov = ht({ token: t, providedIn: "root", factory: () => null })),
          t
        );
      })();
      class Li {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const Ui = new Li("9.0.1");
      class Vi {
        constructor() {}
        supports(t) {
          return ti(t);
        }
        create(t) {
          return new $i(t);
        }
      }
      const Mi = (t, e) => e;
      class $i {
        constructor(t) {
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
            (this._trackByFn = t || Mi);
        }
        forEachItem(t) {
          let e;
          for (e = this._itHead; null !== e; e = e._next) t(e);
        }
        forEachOperation(t) {
          let e = this._itHead,
            n = this._removalsHead,
            r = 0,
            s = null;
          for (; e || n; ) {
            const i = !n || (e && e.currentIndex < Bi(n, r, s)) ? e : n,
              o = Bi(i, r, s),
              a = i.currentIndex;
            if (i === n) r--, (n = n._nextRemoved);
            else if (((e = e._next), null == i.previousIndex)) r++;
            else {
              s || (s = []);
              const t = o - r,
                e = a - r;
              if (t != e) {
                for (let n = 0; n < t; n++) {
                  const r = n < s.length ? s[n] : (s[n] = 0),
                    i = r + n;
                  e <= i && i < t && (s[n] = r + 1);
                }
                s[i.previousIndex] = e - t;
              }
            }
            o !== a && t(i, o, a);
          }
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachMovedItem(t) {
          let e;
          for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        forEachIdentityChange(t) {
          let e;
          for (
            e = this._identityChangesHead;
            null !== e;
            e = e._nextIdentityChange
          )
            t(e);
        }
        diff(t) {
          if ((null == t && (t = []), !ti(t)))
            throw new Error(
              `Error trying to diff '${bt(
                t
              )}'. Only arrays and iterables are allowed`
            );
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e,
            n,
            r,
            s = this._itHead,
            i = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let e = 0; e < this.length; e++)
              (n = t[e]),
                (r = this._trackByFn(e, n)),
                null !== s && Ys(s.trackById, r)
                  ? (i && (s = this._verifyReinsertion(s, n, r, e)),
                    Ys(s.item, n) || this._addIdentityChange(s, n))
                  : ((s = this._mismatch(s, n, r, e)), (i = !0)),
                (s = s._next);
          } else
            (e = 0),
              (function (t, e) {
                if (Array.isArray(t))
                  for (let n = 0; n < t.length; n++) e(t[n]);
                else {
                  const n = t[Js()]();
                  let r;
                  for (; !(r = n.next()).done; ) e(r.value);
                }
              })(t, (t) => {
                (r = this._trackByFn(e, t)),
                  null !== s && Ys(s.trackById, r)
                    ? (i && (s = this._verifyReinsertion(s, t, r, e)),
                      Ys(s.item, t) || this._addIdentityChange(s, t))
                    : ((s = this._mismatch(s, t, r, e)), (i = !0)),
                  (s = s._next),
                  e++;
              }),
              (this.length = e);
          return this._truncate(s), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t, e;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = e
            )
              (t.previousIndex = t.currentIndex), (e = t._nextMoved);
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, e, n, r) {
          let s;
          return (
            null === t ? (s = this._itTail) : ((s = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._linkedRecords
                ? null
                : this._linkedRecords.get(n, r))
              ? (Ys(t.item, e) || this._addIdentityChange(t, e),
                this._moveAfter(t, s, r))
              : null !==
                (t =
                  null === this._unlinkedRecords
                    ? null
                    : this._unlinkedRecords.get(n, null))
              ? (Ys(t.item, e) || this._addIdentityChange(t, e),
                this._reinsertAfter(t, s, r))
              : (t = this._addAfter(new Hi(e, n), s, r)),
            t
          );
        }
        _verifyReinsertion(t, e, n, r) {
          let s =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(n, null);
          return (
            null !== s
              ? (t = this._reinsertAfter(s, t._prev, r))
              : t.currentIndex != r &&
                ((t.currentIndex = r), this._addToMoves(t, r)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const e = t._next;
            this._addToRemovals(this._unlink(t)), (t = e);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, e, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const r = t._prevRemoved,
            s = t._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _moveAfter(t, e, n) {
          return (
            this._unlink(t),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _addAfter(t, e, n) {
          return (
            this._insertAfter(t, e, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, e, n) {
          const r = null === e ? this._itHead : e._next;
          return (
            (t._next = r),
            (t._prev = e),
            null === r ? (this._itTail = t) : (r._prev = t),
            null === e ? (this._itHead = t) : (e._next = t),
            null === this._linkedRecords && (this._linkedRecords = new zi()),
            this._linkedRecords.put(t),
            (t.currentIndex = n),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const e = t._prev,
            n = t._next;
          return (
            null === e ? (this._itHead = n) : (e._next = n),
            null === n ? (this._itTail = e) : (n._prev = e),
            t
          );
        }
        _addToMoves(t, e) {
          return t.previousIndex === e
            ? t
            : ((this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
              t);
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new zi()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, e) {
          return (
            (t.item = e),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class Hi {
        constructor(t, e) {
          (this.item = t),
            (this.trackById = e),
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
        }
      }
      class qi {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, e) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if ((null === e || e <= n.currentIndex) && Ys(n.trackById, t))
              return n;
          return null;
        }
        remove(t) {
          const e = t._prevDup,
            n = t._nextDup;
          return (
            null === e ? (this._head = n) : (e._nextDup = n),
            null === n ? (this._tail = e) : (n._prevDup = e),
            null === this._head
          );
        }
      }
      class zi {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const e = t.trackById;
          let n = this.map.get(e);
          n || ((n = new qi()), this.map.set(e, n)), n.add(t);
        }
        get(t, e) {
          const n = this.map.get(t);
          return n ? n.get(t, e) : null;
        }
        remove(t) {
          const e = t.trackById;
          return this.map.get(e).remove(t) && this.map.delete(e), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Bi(t, e, n) {
        const r = t.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + e + s;
      }
      class Qi {
        constructor() {}
        supports(t) {
          return t instanceof Map || ei(t);
        }
        create() {
          return new Wi();
        }
      }
      class Wi {
        constructor() {
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
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let e;
          for (e = this._mapHead; null !== e; e = e._next) t(e);
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachChangedItem(t) {
          let e;
          for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || ei(t)))
              throw new Error(
                `Error trying to diff '${bt(
                  t
                )}'. Only maps and objects are allowed`
              );
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (t, n) => {
              if (e && e.key === n)
                this._maybeAddToChanges(e, t),
                  (this._appendAfter = e),
                  (e = e._next);
              else {
                const r = this._getOrCreateRecordForKey(n, t);
                e = this._insertBeforeOrAppend(e, r);
              }
            }),
            e)
          ) {
            e._prev && (e._prev._next = null), (this._removalsHead = e);
            for (let t = e; null !== t; t = t._nextRemoved)
              t === this._mapHead && (this._mapHead = null),
                this._records.delete(t.key),
                (t._nextRemoved = t._next),
                (t.previousValue = t.currentValue),
                (t.currentValue = null),
                (t._prev = null),
                (t._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, e) {
          if (t) {
            const n = t._prev;
            return (
              (e._next = t),
              (e._prev = n),
              (t._prev = e),
              n && (n._next = e),
              t === this._mapHead && (this._mapHead = e),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = e), (e._prev = this._appendAfter))
              : (this._mapHead = e),
            (this._appendAfter = e),
            null
          );
        }
        _getOrCreateRecordForKey(t, e) {
          if (this._records.has(t)) {
            const n = this._records.get(t);
            this._maybeAddToChanges(n, e);
            const r = n._prev,
              s = n._next;
            return (
              r && (r._next = s),
              s && (s._prev = r),
              (n._next = null),
              (n._prev = null),
              n
            );
          }
          const n = new Ki(t);
          return (
            this._records.set(t, n),
            (n.currentValue = e),
            this._addToAdditions(n),
            n
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, e) {
          Ys(e, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = e),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, e) {
          t instanceof Map
            ? t.forEach(e)
            : Object.keys(t).forEach((n) => e(t[n], n));
        }
      }
      class Ki {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      let Zi = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (null != n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      "Cannot extend IterableDiffers without a parent injector"
                    );
                  return t.create(e, n);
                },
                deps: [[t, new lt(), new ot()]],
              };
            }
            find(t) {
              const e = this.factories.find((e) => e.supports(t));
              if (null != e) return e;
              throw new Error(
                `Cannot find a differ supporting object '${t}' of type '${
                  ((n = t), n.name || typeof n)
                }'`
              );
              var n;
            }
          }
          return (
            (t.??prov = ht({
              token: t,
              providedIn: "root",
              factory: () => new t([new Vi()]),
            })),
            t
          );
        })(),
        Gi = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      "Cannot extend KeyValueDiffers without a parent injector"
                    );
                  return t.create(e, n);
                },
                deps: [[t, new lt(), new ot()]],
              };
            }
            find(t) {
              const e = this.factories.find((e) => e.supports(t));
              if (e) return e;
              throw new Error(`Cannot find a differ supporting object '${t}'`);
            }
          }
          return (
            (t.??prov = ht({
              token: t,
              providedIn: "root",
              factory: () => new t([new Qi()]),
            })),
            t
          );
        })();
      const Ji = [new Qi()],
        Yi = new Zi([new Vi()]),
        Xi = new Gi(Ji);
      let to = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => eo(t, Oi)), t;
      })();
      const eo = function (t, e) {
        return (function (t, e, n, r) {
          return (
            Ts ||
              (Ts = class extends t {
                constructor(t, e, n) {
                  super(),
                    (this._declarationView = t),
                    (this._declarationTContainer = e),
                    (this.elementRef = n);
                }
                createEmbeddedView(t) {
                  const e = this._declarationTContainer.tViews,
                    n = _r(this._declarationView, e, t, 16, null, e.node);
                  n[17] =
                    this._declarationView[this._declarationTContainer.index];
                  const r = this._declarationView[5];
                  null !== r && (n[5] = r.createEmbeddedView(e)), wr(e, n, t);
                  const s = new Ss(n);
                  return (s._tViewNode = n[6]), s;
                }
              }),
            0 === n.type ? new Ts(r, n, ks(e, n, r)) : null
          );
        })(t, e, Ie(), Pe());
      };
      let no = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => ro(t, Oi)), t;
      })();
      const ro = function (t, e) {
          return (function (t, e, n, r) {
            let s;
            xs ||
              (xs = class extends t {
                constructor(t, e, n) {
                  super(),
                    (this._lContainer = t),
                    (this._hostTNode = e),
                    (this._hostView = n);
                }
                get element() {
                  return ks(e, this._hostTNode, this._hostView);
                }
                get injector() {
                  return new Rn(this._hostTNode, this._hostView);
                }
                get parentInjector() {
                  const t = En(this._hostTNode, this._hostView),
                    e = pn(t, this._hostView),
                    n = (function (t, e, n) {
                      if (n.parent && -1 !== n.parent.injectorIndex) {
                        const t = n.parent.injectorIndex;
                        let e = n.parent;
                        for (
                          ;
                          null != e.parent && t == e.parent.injectorIndex;

                        )
                          e = e.parent;
                        return e;
                      }
                      let r = dn(t),
                        s = e,
                        i = e[6];
                      for (; r > 1; ) (s = s[15]), (i = s[6]), r--;
                      return i;
                    })(t, this._hostView, this._hostTNode);
                  return cn(t) && null != n
                    ? new Rn(n, e)
                    : new Rn(null, this._hostView);
                }
                clear() {
                  for (; this.length > 0; ) this.remove(this.length - 1);
                }
                get(t) {
                  return (
                    (null !== this._lContainer[8] && this._lContainer[8][t]) ||
                    null
                  );
                }
                get length() {
                  return this._lContainer.length - 9;
                }
                createEmbeddedView(t, e, n) {
                  const r = t.createEmbeddedView(e || {});
                  return this.insert(r, n), r;
                }
                createComponent(t, e, n, r, s) {
                  const i = n || this.parentInjector;
                  if (!s && null == t.ngModule && i) {
                    const t = i.get(Yt, null);
                    t && (s = t);
                  }
                  const o = t.create(i, r, void 0, s);
                  return this.insert(o.hostView, e), o;
                }
                insert(t, e) {
                  const n = t._lView,
                    r = n[1];
                  if (t.destroyed)
                    throw new Error(
                      "Cannot insert a destroyed View in a ViewContainer!"
                    );
                  if ((this.allocateContainerIfNeeded(), be(n[3]))) {
                    const e = this.indexOf(t);
                    if (-1 !== e) this.detach(e);
                    else {
                      const e = n[3],
                        r = new xs(e, e[6], e[3]);
                      r.detach(r.indexOf(t));
                    }
                  }
                  const s = this._adjustIndex(e);
                  return (
                    (function (t, e, n, r) {
                      const s = 9 + r,
                        i = n.length;
                      r > 0 && (n[s - 1][4] = e),
                        r < i - 9
                          ? ((e[4] = n[s]), ee(n, 9 + r, e))
                          : (n.push(e), (e[4] = null)),
                        (e[3] = n);
                      const o = e[17];
                      null !== o &&
                        n !== o &&
                        (function (t, e) {
                          const n = t[5],
                            r = e[3][3][16];
                          16 != (16 & r[2]) && e[16] !== r && (t[2] |= 1),
                            null === n ? (t[5] = [e]) : n.push(e);
                        })(o, e);
                      const a = e[5];
                      null !== a && a.insertView(t), (e[2] |= 128);
                    })(r, n, this._lContainer, s),
                    is(r, n, !0, gs(s, this._lContainer)),
                    t.attachToViewContainerRef(this),
                    ee(this._lContainer[8], s, t),
                    t
                  );
                }
                move(t, e) {
                  if (t.destroyed)
                    throw new Error(
                      "Cannot move a destroyed View in a ViewContainer!"
                    );
                  return this.insert(t, e);
                }
                indexOf(t) {
                  const e = this._lContainer[8];
                  return null !== e ? e.indexOf(t) : -1;
                }
                remove(t) {
                  this.allocateContainerIfNeeded();
                  const e = this._adjustIndex(t, -1);
                  (function (t, e) {
                    const n = as(t, e);
                    n && ls(n[1], n);
                  })(this._lContainer, e),
                    ne(this._lContainer[8], e);
                }
                detach(t) {
                  this.allocateContainerIfNeeded();
                  const e = this._adjustIndex(t, -1),
                    n = as(this._lContainer, e);
                  return n && null != ne(this._lContainer[8], e)
                    ? new Ss(n)
                    : null;
                }
                _adjustIndex(t, e = 0) {
                  return null == t ? this.length + e : t;
                }
                allocateContainerIfNeeded() {
                  null === this._lContainer[8] && (this._lContainer[8] = []);
                }
              });
            const i = r[n.index];
            if (be(i))
              (s = i),
                (function (t, e) {
                  t[2] = -2;
                })(s);
            else {
              let t;
              if (4 === n.type) t = Bn(i);
              else if (((t = r[11].createComment("")), xe(r))) {
                const e = r[11],
                  s = Wn(n, r);
                hs(
                  e,
                  fs(e, s),
                  t,
                  (function (t, e) {
                    return nn(t) ? t.nextSibling(e) : e.nextSibling;
                  })(e, s)
                );
              } else ms(r[1], r, t, n);
              (r[n.index] = s = qr(i, r, t, n)), Wr(r, s);
            }
            return new xs(s, n, r);
          })(t, e, Ie(), Pe());
        },
        so = {};
      function io(t) {
        const e = [];
        for (let n in t)
          t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n });
        return e;
      }
      const oo = new Ut("SCHEDULER_TOKEN", {
        providedIn: "root",
        factory: () => gn,
      });
      class ao extends ki {
        constructor(t, e) {
          super(),
            (this.componentDef = t),
            (this.ngModule = e),
            (this.componentType = t.type),
            (this.selector = t.selectors.map(hr).join(",")),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!e);
        }
        get inputs() {
          return io(this.componentDef.inputs);
        }
        get outputs() {
          return io(this.componentDef.outputs);
        }
        create(t, e, n, r) {
          const s = (r = r || this.ngModule)
              ? (function (t, e) {
                  return {
                    get: (n, r, s) => {
                      const i = t.get(n, so, s);
                      return i !== so || r === so ? i : e.get(n, r, s);
                    },
                  };
                })(t, r.injector)
              : t,
            i = s.get(Ri, rn),
            o = s.get(Fi, null),
            a = i.createRenderer(null, this.componentDef),
            l = this.componentDef.selectors[0][0] || "div",
            u = n
              ? (function (t, e, n) {
                  if (nn(t)) return t.selectRootElement(e, n === se.ShadowDom);
                  let r = "string" == typeof e ? t.querySelector(e) : e;
                  return (r.textContent = ""), r;
                })(a, n, this.componentDef.encapsulation)
              : yr(
                  l,
                  i.createRenderer(null, this.componentDef),
                  (function (t) {
                    const e = t.toLowerCase();
                    return "svg" === e
                      ? "http://www.w3.org/2000/svg"
                      : "math" === e
                      ? "http://www.w3.org/1998/MathML/"
                      : null;
                  })(l)
                ),
            c = this.componentDef.onPush ? 576 : 528,
            h =
              "string" == typeof n && /^#root-ng-internal-isolated-\d+/.test(n),
            d = {
              components: [],
              scheduler: gn,
              clean: Yr,
              playerHandler: null,
              flags: 0,
            },
            p = kr(0, -1, null, 1, 0, null, null, null, null, null),
            f = _r(null, p, d, c, null, null, i, a, o, s),
            m = n && u ? Ui.full : null;
          let g, y;
          He(f, null);
          try {
            const t = (function (t, e, n, r, s, i, o) {
              const a = n[1];
              n[19] = t;
              const l = vr(a, null, 0, 3, null, null),
                u = (l.mergedAttrs = e.hostAttrs);
              null !== u &&
                (Zs(l, u),
                null !== t &&
                  (sn(s, t, u),
                  null !== l.classes && bs(s, t, l.classes),
                  null !== l.styles && ws(s, t, l.styles)));
              const c = r.createRenderer(t, e);
              null !== t &&
                i &&
                (nn(s)
                  ? s.setAttribute(t, "ng-version", i)
                  : t.setAttribute("ng-version", i));
              const h = _r(
                n,
                xr(e),
                null,
                e.onPush ? 64 : 16,
                n[19],
                l,
                r,
                c,
                null
              );
              return (
                a.firstCreatePass &&
                  (Tn(bn(l, n), a, e.type), Fr(a, l), Ur(l, n.length, 1)),
                Wr(n, h),
                (n[19] = h)
              );
            })(u, this.componentDef, f, i, a, m);
            (y = Kn(f[1], 0)),
              e && (y.projection = e.map((t) => Array.from(t))),
              (g = (function (t, e, n, r, s) {
                const i = n[1],
                  o = (function (t, e, n) {
                    const r = Ie();
                    t.firstCreatePass &&
                      (n.providersResolver && n.providersResolver(n),
                      jr(t, r, 1),
                      Vr(t, e, n));
                    const s = Pn(e, t, e.length - 1, r);
                    tr(s, e);
                    const i = Wn(r, e);
                    return i && tr(i, e), s;
                  })(i, n, e);
                r.components.push(o),
                  (t[8] = o),
                  s && s.forEach((t) => t(o, e)),
                  e.contentQueries && e.contentQueries(1, o, n.length - 1);
                const a = Ie();
                if (
                  i.firstCreatePass &&
                  (null !== e.hostBindings || null !== e.hostAttrs)
                ) {
                  We(a.index - 19);
                  const t = n[1];
                  Rr(t, e), Nr(t, n, e.hostVars), Dr(e, o);
                }
                return o;
              })(t, this.componentDef, f, d, [bi])),
              wr(p, f, null);
          } finally {
            Be();
          }
          const _ = new lo(this.componentType, g, ks(Oi, y, f), f, y);
          return (n && !h) || (_.hostView._tViewNode.child = y), _;
        }
      }
      class lo extends class {} {
        constructor(t, e, n, r, s) {
          super(),
            (this.location = n),
            (this._rootLView = r),
            (this._tNode = s),
            (this.destroyCbs = []),
            (this.instance = e),
            (this.hostView = this.changeDetectorRef = new Cs(r)),
            (this.hostView._tViewNode = (function (t, e, n, r) {
              let s = t.node;
              return (
                null == s && (t.node = s = Ar(0, null, 2, -1, null, null)),
                (r[6] = s)
              );
            })(r[1], 0, 0, r)),
            (this.componentType = t);
        }
        get injector() {
          return new Rn(this._tNode, this._rootLView);
        }
        destroy() {
          this.destroyCbs &&
            (this.destroyCbs.forEach((t) => t()),
            (this.destroyCbs = null),
            !this.hostView.destroyed && this.hostView.destroy());
        }
        onDestroy(t) {
          this.destroyCbs && this.destroyCbs.push(t);
        }
      }
      const uo = void 0;
      var co = [
        "en",
        [["a", "p"], ["AM", "PM"], uo],
        [["AM", "PM"], uo, uo],
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
        uo,
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
        uo,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", uo, "{1} 'at' {0}", uo],
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
        function (t) {
          let e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === e && 0 === n ? 1 : 5;
        },
      ];
      let ho = {};
      function po(t) {
        return (
          t in ho ||
            (ho[t] =
              Ot.ng &&
              Ot.ng.common &&
              Ot.ng.common.locales &&
              Ot.ng.common.locales[t]),
          ho[t]
        );
      }
      const fo = (function () {
        var t = {
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
          (t[t.LocaleId] = "LocaleId"),
          (t[t.DayPeriodsFormat] = "DayPeriodsFormat"),
          (t[t.DayPeriodsStandalone] = "DayPeriodsStandalone"),
          (t[t.DaysFormat] = "DaysFormat"),
          (t[t.DaysStandalone] = "DaysStandalone"),
          (t[t.MonthsFormat] = "MonthsFormat"),
          (t[t.MonthsStandalone] = "MonthsStandalone"),
          (t[t.Eras] = "Eras"),
          (t[t.FirstDayOfWeek] = "FirstDayOfWeek"),
          (t[t.WeekendRange] = "WeekendRange"),
          (t[t.DateFormat] = "DateFormat"),
          (t[t.TimeFormat] = "TimeFormat"),
          (t[t.DateTimeFormat] = "DateTimeFormat"),
          (t[t.NumberSymbols] = "NumberSymbols"),
          (t[t.NumberFormats] = "NumberFormats"),
          (t[t.CurrencyCode] = "CurrencyCode"),
          (t[t.CurrencySymbol] = "CurrencySymbol"),
          (t[t.CurrencyName] = "CurrencyName"),
          (t[t.Currencies] = "Currencies"),
          (t[t.PluralCase] = "PluralCase"),
          (t[t.ExtraData] = "ExtraData"),
          t
        );
      })();
      let mo = "en-US";
      function go(t) {
        var e, n;
        (n = "Expected localeId to be defined"),
          null == (e = t) &&
            (function (t, e, n, r) {
              throw new Error(
                `ASSERTION ERROR: ${t}` + ` [Expected=> null != ${e} <=Actual]`
              );
            })(n, e),
          "string" == typeof t && (mo = t.toLowerCase().replace(/_/g, "-"));
      }
      const yo = new Map(),
        _o = {
          provide: Pi,
          useClass: class extends Pi {
            constructor(t) {
              super(), (this.ngModule = t);
            }
            resolveComponentFactory(t) {
              const e = ye(t);
              return new ao(e, this.ngModule);
            }
          },
          deps: [Yt],
        };
      class vo extends Yt {
        constructor(t, e) {
          super(),
            (this._parent = e),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []);
          const n = ve(t),
            r = t[jt] || null;
          r && go(r),
            (this._bootstrapComponents = yn(n.bootstrap)),
            (this._r3Injector = Ls(
              t,
              e,
              [{ provide: Yt, useValue: this }, _o],
              bt(t)
            )),
            (this.instance = this.get(t));
        }
        get(t, e = zs.THROW_IF_NOT_FOUND, n = ut.Default) {
          return t === zs || t === Yt || t === Vt
            ? this
            : this._r3Injector.get(t, e, n);
        }
        get componentFactoryResolver() {
          return this.get(Pi);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((t) => t()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class wo extends Xt {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== ve(t) &&
              (function t(e) {
                if (null !== e.??mod.id) {
                  const t = e.??mod.id;
                  (function (t, e, n) {
                    if (e && e !== n)
                      throw new Error(
                        `Duplicate module registered for ${t} - ${bt(
                          e
                        )} vs ${bt(e.name)}`
                      );
                  })(t, yo.get(t), e),
                    yo.set(t, e);
                }
                let n = e.??mod.imports;
                n instanceof Function && (n = n()), n && n.forEach((e) => t(e));
              })(t);
        }
        create(t) {
          return new vo(this.moduleType, t);
        }
      }
      function bo(t, e, n, r, s, i) {
        const o = e + n;
        return ni(t, o, s)
          ? (function (t, e, n) {
              return (t[e] = n);
            })(t, o + 1, i ? r.call(i, s) : r(s))
          : (function (t, e) {
              return t[e];
            })(t, o + 1);
      }
      class So extends T {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, e, n) {
          let r,
            s = (t) => null,
            i = () => null;
          t && "object" == typeof t
            ? ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t.next(e));
                  }
                : (e) => {
                    t.next(e);
                  }),
              t.error &&
                (s = this.__isAsync
                  ? (e) => {
                      setTimeout(() => t.error(e));
                    }
                  : (e) => {
                      t.error(e);
                    }),
              t.complete &&
                (i = this.__isAsync
                  ? () => {
                      setTimeout(() => t.complete());
                    }
                  : () => {
                      t.complete();
                    }))
            : ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t(e));
                  }
                : (e) => {
                    t(e);
                  }),
              e &&
                (s = this.__isAsync
                  ? (t) => {
                      setTimeout(() => e(t));
                    }
                  : (t) => {
                      e(t);
                    }),
              n &&
                (i = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const o = super.subscribe(r, s, i);
          return t instanceof h && t.add(o), o;
        }
      }
      const Co = new Ut("Application Initializer");
      let Eo = (() => {
        class t {
          constructor(t) {
            (this.appInits = t),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((t, e) => {
                (this.resolve = t), (this.reject = e);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const t = [],
              e = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let n = 0; n < this.appInits.length; n++) {
                const e = this.appInits[n]();
                di(e) && t.push(e);
              }
            Promise.all(t)
              .then(() => {
                e();
              })
              .catch((t) => {
                this.reject(t);
              }),
              0 === t.length && e(),
              (this.initialized = !0);
          }
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)(Kt(Co, 8));
          }),
          (t.??prov = ht({ token: t, factory: t.??fac })),
          t
        );
      })();
      const To = new Ut("AppId"),
        xo = {
          provide: To,
          useFactory: function () {
            return `${ko()}${ko()}${ko()}`;
          },
          deps: [],
        };
      function ko() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Ao = new Ut("Platform Initializer"),
        Po = new Ut("Platform ID"),
        Oo = new Ut("appBootstrapListener");
      let Io = (() => {
        class t {
          log(t) {
            console.log(t);
          }
          warn(t) {
            console.warn(t);
          }
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)();
          }),
          (t.??prov = ht({ token: t, factory: t.??fac })),
          t
        );
      })();
      const Ro = new Ut("LocaleId"),
        No = new Ut("DefaultCurrencyCode");
      class Do {
        constructor(t, e) {
          (this.ngModuleFactory = t), (this.componentFactories = e);
        }
      }
      const jo = function (t) {
          return new wo(t);
        },
        Fo = jo,
        Lo = function (t) {
          return Promise.resolve(jo(t));
        },
        Uo = function (t) {
          const e = jo(t),
            n = yn(ve(t).declarations).reduce((t, e) => {
              const n = ye(e);
              return n && t.push(new ao(n)), t;
            }, []);
          return new Do(e, n);
        },
        Vo = Uo,
        Mo = function (t) {
          return Promise.resolve(Uo(t));
        };
      let $o = (() => {
        class t {
          constructor() {
            (this.compileModuleSync = Fo),
              (this.compileModuleAsync = Lo),
              (this.compileModuleAndAllComponentsSync = Vo),
              (this.compileModuleAndAllComponentsAsync = Mo);
          }
          clearCache() {}
          clearCacheFor(t) {}
          getModuleId(t) {}
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)();
          }),
          (t.??prov = ht({ token: t, factory: t.??fac })),
          t
        );
      })();
      const Ho = new Ut("compilerOptions"),
        qo = (() => Promise.resolve(0))();
      function zo(t) {
        "undefined" == typeof Zone
          ? qo.then(() => {
              t && t.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", t);
      }
      class Bo {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: e = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new So(!1)),
            (this.onMicrotaskEmpty = new So(!1)),
            (this.onStable = new So(!1)),
            (this.onError = new So(!1)),
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
            t &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            (this.shouldCoalesceEventChangeDetection = e),
            (this.lastRequestAnimationFrameId = -1),
            (this.nativeRequestAnimationFrame = (function () {
              let t = Ot.requestAnimationFrame,
                e = Ot.cancelAnimationFrame;
              if ("undefined" != typeof Zone && t && e) {
                const n = t[Zone.__symbol__("OriginalDelegate")];
                n && (t = n);
                const r = e[Zone.__symbol__("OriginalDelegate")];
                r && (e = r);
              }
              return {
                nativeRequestAnimationFrame: t,
                nativeCancelAnimationFrame: e,
              };
            })().nativeRequestAnimationFrame),
            (function (t) {
              const e =
                !!t.shouldCoalesceEventChangeDetection &&
                t.nativeRequestAnimationFrame &&
                (() => {
                  !(function (t) {
                    -1 === t.lastRequestAnimationFrameId &&
                      ((t.lastRequestAnimationFrameId =
                        t.nativeRequestAnimationFrame.call(Ot, () => {
                          (t.lastRequestAnimationFrameId = -1), Zo(t), Ko(t);
                        })),
                      Zo(t));
                  })(t);
                });
              t._inner = t._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0, maybeDelayChangeDetection: e },
                onInvokeTask: (n, r, s, i, o, a) => {
                  try {
                    return Go(t), n.invokeTask(s, i, o, a);
                  } finally {
                    e && "eventTask" === i.type && e(), Jo(t);
                  }
                },
                onInvoke: (e, n, r, s, i, o, a) => {
                  try {
                    return Go(t), e.invoke(r, s, i, o, a);
                  } finally {
                    Jo(t);
                  }
                },
                onHasTask: (e, n, r, s) => {
                  e.hasTask(r, s),
                    n === r &&
                      ("microTask" == s.change
                        ? ((t._hasPendingMicrotasks = s.microTask),
                          Zo(t),
                          Ko(t))
                        : "macroTask" == s.change &&
                          (t.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (e, n, r, s) => (
                  e.handleError(r, s),
                  t.runOutsideAngular(() => t.onError.emit(s)),
                  !1
                ),
              });
            })(this);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!Bo.isInAngularZone())
            throw new Error("Expected to be in Angular Zone, but it is not!");
        }
        static assertNotInAngularZone() {
          if (Bo.isInAngularZone())
            throw new Error("Expected to not be in Angular Zone, but it is!");
        }
        run(t, e, n) {
          return this._inner.run(t, e, n);
        }
        runTask(t, e, n, r) {
          const s = this._inner,
            i = s.scheduleEventTask("NgZoneEvent: " + r, t, Wo, Qo, Qo);
          try {
            return s.runTask(i, e, n);
          } finally {
            s.cancelTask(i);
          }
        }
        runGuarded(t, e, n) {
          return this._inner.runGuarded(t, e, n);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      function Qo() {}
      const Wo = {};
      function Ko(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
          try {
            t._nesting++, t.onMicrotaskEmpty.emit(null);
          } finally {
            if ((t._nesting--, !t.hasPendingMicrotasks))
              try {
                t.runOutsideAngular(() => t.onStable.emit(null));
              } finally {
                t.isStable = !0;
              }
          }
      }
      function Zo(t) {
        t.hasPendingMicrotasks = !!(
          t._hasPendingMicrotasks ||
          (t.shouldCoalesceEventChangeDetection &&
            -1 !== t.lastRequestAnimationFrameId)
        );
      }
      function Go(t) {
        t._nesting++,
          t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
      }
      function Jo(t) {
        t._nesting--, Ko(t);
      }
      class Yo {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new So()),
            (this.onMicrotaskEmpty = new So()),
            (this.onStable = new So()),
            (this.onError = new So());
        }
        run(t, e, n) {
          return t.apply(e, n);
        }
        runGuarded(t, e, n) {
          return t.apply(e, n);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, e, n, r) {
          return t.apply(e, n);
        }
      }
      let Xo = (() => {
          class t {
            constructor(t) {
              (this._ngZone = t),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                t.run(() => {
                  this.taskTrackingZone =
                    "undefined" == typeof Zone
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      Bo.assertNotInAngularZone(),
                        zo(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                zo(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let t = this._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let t = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (e) =>
                    !e.updateCb ||
                    !e.updateCb(t) ||
                    (clearTimeout(e.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((t) => ({
                    source: t.source,
                    creationLocation: t.creationLocation,
                    data: t.data,
                  }))
                : [];
            }
            addCallback(t, e, n) {
              let r = -1;
              e &&
                e > 0 &&
                (r = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (t) => t.timeoutId !== r
                  )),
                    t(this._didWork, this.getPendingTasks());
                }, e)),
                this._callbacks.push({ doneCb: t, timeoutId: r, updateCb: n });
            }
            whenStable(t, e, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(t, e, n), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(t, e, n) {
              return [];
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)(Kt(Bo));
            }),
            (t.??prov = ht({ token: t, factory: t.??fac })),
            t
          );
        })(),
        ta = (() => {
          class t {
            constructor() {
              (this._applications = new Map()), ra.addToWindow(this);
            }
            registerApplication(t, e) {
              this._applications.set(t, e);
            }
            unregisterApplication(t) {
              this._applications.delete(t);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(t) {
              return this._applications.get(t) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(t, e = !0) {
              return ra.findTestabilityInTree(this, t, e);
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)();
            }),
            (t.??prov = ht({ token: t, factory: t.??fac })),
            t
          );
        })();
      class ea {
        addToWindow(t) {}
        findTestabilityInTree(t, e, n) {
          return null;
        }
      }
      let na,
        ra = new ea(),
        sa = function (t, e, n) {
          const r = new wo(n);
          if (0 === Qs.size) return Promise.resolve(r);
          const s = (function (t) {
            const e = [];
            return t.forEach((t) => t && e.push(...t)), e;
          })(
            t
              .get(Ho, [])
              .concat(e)
              .map((t) => t.providers)
          );
          if (0 === s.length) return Promise.resolve(r);
          const i = (function () {
              const t = Ot.ng;
              if (!t || !t.??compilerFacade)
                throw new Error(
                  "Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping."
                );
              return t.??compilerFacade;
            })(),
            o = zs.create({ providers: s }).get(i.ResourceLoader);
          return (function (t) {
            const e = [],
              n = new Map();
            function r(t) {
              let e = n.get(t);
              if (!e) {
                const r = ((t) => Promise.resolve(o.get(t)))(t);
                n.set(t, (e = r.then(Ks)));
              }
              return e;
            }
            return (
              Qs.forEach((t, n) => {
                const s = [];
                t.templateUrl &&
                  s.push(
                    r(t.templateUrl).then((e) => {
                      t.template = e;
                    })
                  );
                const i = t.styleUrls,
                  o = t.styles || (t.styles = []),
                  a = t.styles.length;
                i &&
                  i.forEach((e, n) => {
                    o.push(""),
                      s.push(
                        r(e).then((r) => {
                          (o[a + n] = r),
                            i.splice(i.indexOf(e), 1),
                            0 == i.length && (t.styleUrls = void 0);
                        })
                      );
                  });
                const l = Promise.all(s).then(() =>
                  (function (t) {
                    Ws.delete(t);
                  })(n)
                );
                e.push(l);
              }),
              (Qs = new Map()),
              Promise.all(e).then(() => {})
            );
          })().then(() => r);
        };
      const ia = new Ut("AllowMultipleToken");
      class oa {
        constructor(t, e) {
          (this.name = t), (this.token = e);
        }
      }
      function aa(t, e, n = []) {
        const r = `Platform: ${e}`,
          s = new Ut(r);
        return (e = []) => {
          let i = la();
          if (!i || i.injector.get(ia, !1))
            if (t) t(n.concat(e).concat({ provide: s, useValue: !0 }));
            else {
              const t = n
                .concat(e)
                .concat(
                  { provide: s, useValue: !0 },
                  { provide: Is, useValue: "platform" }
                );
              !(function (t) {
                if (na && !na.destroyed && !na.injector.get(ia, !1))
                  throw new Error(
                    "There can be only one platform. Destroy the previous one to create a new one."
                  );
                na = t.get(ua);
                const e = t.get(Ao, null);
                e && e.forEach((t) => t());
              })(zs.create({ providers: t, name: r }));
            }
          return (function (t) {
            const e = la();
            if (!e) throw new Error("No platform exists!");
            if (!e.injector.get(t, null))
              throw new Error(
                "A platform with a different configuration has been created. Please destroy it first."
              );
            return e;
          })(s);
        };
      }
      function la() {
        return na && !na.destroyed ? na : null;
      }
      let ua = (() => {
        class t {
          constructor(t) {
            (this._injector = t),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(t, e) {
            const n = (function (t, e) {
                let n;
                return (
                  (n =
                    "noop" === t
                      ? new Yo()
                      : ("zone.js" === t ? void 0 : t) ||
                        new Bo({
                          enableLongStackTrace: Mn(),
                          shouldCoalesceEventChangeDetection: e,
                        })),
                  n
                );
              })(e ? e.ngZone : void 0, (e && e.ngZoneEventCoalescing) || !1),
              r = [{ provide: Bo, useValue: n }];
            return n.run(() => {
              const e = zs.create({
                  providers: r,
                  parent: this.injector,
                  name: t.moduleType.name,
                }),
                s = t.create(e),
                i = s.injector.get(Fn, null);
              if (!i)
                throw new Error(
                  "No ErrorHandler. Is platform module (BrowserModule) included?"
                );
              return (
                s.onDestroy(() => da(this._modules, s)),
                n.runOutsideAngular(() =>
                  n.onError.subscribe({
                    next: (t) => {
                      i.handleError(t);
                    },
                  })
                ),
                (function (t, e, n) {
                  try {
                    const r = n();
                    return di(r)
                      ? r.catch((n) => {
                          throw (
                            (e.runOutsideAngular(() => t.handleError(n)), n)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (e.runOutsideAngular(() => t.handleError(r)), r);
                  }
                })(i, n, () => {
                  const t = s.injector.get(Eo);
                  return (
                    t.runInitializers(),
                    t.donePromise.then(
                      () => (
                        go(s.injector.get(Ro, "en-US") || "en-US"),
                        this._moduleDoBootstrap(s),
                        s
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(t, e = []) {
            const n = ca({}, e);
            return sa(this.injector, n, t).then((t) =>
              this.bootstrapModuleFactory(t, n)
            );
          }
          _moduleDoBootstrap(t) {
            const e = t.injector.get(ha);
            if (t._bootstrapComponents.length > 0)
              t._bootstrapComponents.forEach((t) => e.bootstrap(t));
            else {
              if (!t.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${bt(
                    t.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` +
                    "Please define one of these."
                );
              t.instance.ngDoBootstrap(e);
            }
            this._modules.push(t);
          }
          onDestroy(t) {
            this._destroyListeners.push(t);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed)
              throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach((t) => t.destroy()),
              this._destroyListeners.forEach((t) => t()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)(Kt(zs));
          }),
          (t.??prov = ht({ token: t, factory: t.??fac })),
          t
        );
      })();
      function ca(t, e) {
        return Array.isArray(e)
          ? e.reduce(ca, t)
          : Object.assign(Object.assign({}, t), e);
      }
      let ha = (() => {
        class t {
          constructor(t, e, n, r, s, i) {
            (this._zone = t),
              (this._console = e),
              (this._injector = n),
              (this._exceptionHandler = r),
              (this._componentFactoryResolver = s),
              (this._initStatus = i),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._enforceNoNewChanges = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._enforceNoNewChanges = Mn()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                },
              });
            const o = new w((t) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete();
                  });
              }),
              a = new w((t) => {
                let e;
                this._zone.runOutsideAngular(() => {
                  e = this._zone.onStable.subscribe(() => {
                    Bo.assertNotInAngularZone(),
                      zo(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), t.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  Bo.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        t.next(!1);
                      }));
                });
                return () => {
                  e.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = K(
              o,
              a.pipe((t) => Z()(et(rt)(t)))
            );
          }
          bootstrap(t, e) {
            if (!this._initStatus.done)
              throw new Error(
                "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
              );
            let n;
            (n =
              t instanceof ki
                ? t
                : this._componentFactoryResolver.resolveComponentFactory(t)),
              this.componentTypes.push(n.componentType);
            const r = n.isBoundToModule ? void 0 : this._injector.get(Yt),
              s = n.create(zs.NULL, [], e || n.selector, r);
            s.onDestroy(() => {
              this._unloadComponent(s);
            });
            const i = s.injector.get(Xo, null);
            return (
              i &&
                s.injector
                  .get(ta)
                  .registerApplication(s.location.nativeElement, i),
              this._loadComponent(s),
              Mn() &&
                this._console.log(
                  "Angular is running in the development mode. Call enableProdMode() to enable the production mode."
                ),
              s
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error("ApplicationRef.tick is called recursively");
            try {
              this._runningTick = !0;
              for (let t of this._views) t.detectChanges();
              if (this._enforceNoNewChanges)
                for (let t of this._views) t.checkNoChanges();
            } catch (t) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(t)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(t) {
            const e = t;
            this._views.push(e), e.attachToAppRef(this);
          }
          detachView(t) {
            const e = t;
            da(this._views, e), e.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get(Oo, [])
                .concat(this._bootstrapListeners)
                .forEach((e) => e(t));
          }
          _unloadComponent(t) {
            this.detachView(t.hostView), da(this.components, t);
          }
          ngOnDestroy() {
            this._views.slice().forEach((t) => t.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)(Kt(Bo), Kt(Io), Kt(zs), Kt(Fn), Kt(Pi), Kt(Eo));
          }),
          (t.??prov = ht({ token: t, factory: t.??fac })),
          t
        );
      })();
      function da(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      class pa {}
      class fa {}
      const ma = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" };
      let ga = (() => {
        class t {
          constructor(t, e) {
            (this._compiler = t), (this._config = e || ma);
          }
          load(t) {
            return this.loadAndCompile(t);
          }
          loadAndCompile(t) {
            let [e, r] = t.split("#");
            return (
              void 0 === r && (r = "default"),
              n("crnd")(e)
                .then((t) => t[r])
                .then((t) => ya(t, e, r))
                .then((t) => this._compiler.compileModuleAsync(t))
            );
          }
          loadFactory(t) {
            let [e, r] = t.split("#"),
              s = "NgFactory";
            return (
              void 0 === r && ((r = "default"), (s = "")),
              n("crnd")(
                this._config.factoryPathPrefix +
                  e +
                  this._config.factoryPathSuffix
              )
                .then((t) => t[r + s])
                .then((t) => ya(t, e, r))
            );
          }
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)(Kt($o), Kt(fa, 8));
          }),
          (t.??prov = ht({ token: t, factory: t.??fac })),
          t
        );
      })();
      function ya(t, e, n) {
        if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
        return t;
      }
      const _a = aa(null, "core", [
          { provide: Po, useValue: "unknown" },
          { provide: ua, deps: [zs] },
          { provide: ta, deps: [] },
          { provide: Io, deps: [] },
        ]),
        va = [
          { provide: ha, useClass: ha, deps: [Bo, Io, zs, Fn, Pi, Eo] },
          {
            provide: oo,
            deps: [Bo],
            useFactory: function (t) {
              let e = [];
              return (
                t.onStable.subscribe(() => {
                  for (; e.length; ) e.pop()();
                }),
                function (t) {
                  e.push(t);
                }
              );
            },
          },
          { provide: Eo, useClass: Eo, deps: [[new ot(), Co]] },
          { provide: $o, useClass: $o, deps: [] },
          xo,
          {
            provide: Zi,
            useFactory: function () {
              return Yi;
            },
            deps: [],
          },
          {
            provide: Gi,
            useFactory: function () {
              return Xi;
            },
            deps: [],
          },
          {
            provide: Ro,
            useFactory: function (t) {
              return (
                go(
                  (t =
                    t ||
                    ("undefined" != typeof $localize && $localize.locale) ||
                    "en-US")
                ),
                t
              );
            },
            deps: [[new it(Ro), new ot(), new lt()]],
          },
          { provide: No, useValue: "USD" },
        ];
      let wa = (() => {
          class t {
            constructor(t) {}
          }
          return (
            (t.??mod = pe({ type: t })),
            (t.??inj = dt({
              factory: function (e) {
                return new (e || t)(Kt(ha));
              },
              providers: va,
            })),
            t
          );
        })(),
        ba = null;
      function Sa() {
        return ba;
      }
      const Ca = new Ut("DocumentToken");
      let Ea = (() => {
        class t {}
        return (
          (t.??fac = function (e) {
            return new (e || t)();
          }),
          (t.??prov = ht({ factory: Ta, token: t, providedIn: "platform" })),
          t
        );
      })();
      function Ta() {
        return Kt(ka);
      }
      const xa = new Ut("Location Initialized");
      let ka = (() => {
        class t extends Ea {
          constructor(t) {
            super(), (this._doc = t), this._init();
          }
          _init() {
            (this.location = Sa().getLocation()),
              (this._history = Sa().getHistory());
          }
          getBaseHrefFromDOM() {
            return Sa().getBaseHref(this._doc);
          }
          onPopState(t) {
            Sa()
              .getGlobalEventTarget(this._doc, "window")
              .addEventListener("popstate", t, !1);
          }
          onHashChange(t) {
            Sa()
              .getGlobalEventTarget(this._doc, "window")
              .addEventListener("hashchange", t, !1);
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(t) {
            this.location.pathname = t;
          }
          pushState(t, e, n) {
            Aa() ? this._history.pushState(t, e, n) : (this.location.hash = n);
          }
          replaceState(t, e, n) {
            Aa()
              ? this._history.replaceState(t, e, n)
              : (this.location.hash = n);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)(Kt(Ca));
          }),
          (t.??prov = ht({ factory: Pa, token: t, providedIn: "platform" })),
          t
        );
      })();
      function Aa() {
        return !!window.history.pushState;
      }
      function Pa() {
        return new ka(Kt(Ca));
      }
      function Oa(t, e) {
        if (0 == t.length) return e;
        if (0 == e.length) return t;
        let n = 0;
        return (
          t.endsWith("/") && n++,
          e.startsWith("/") && n++,
          2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
        );
      }
      function Ia(t) {
        const e = t.match(/#|\?|$/),
          n = (e && e.index) || t.length;
        return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n);
      }
      function Ra(t) {
        return t && "?" !== t[0] ? "?" + t : t;
      }
      let Na = (() => {
        class t {}
        return (
          (t.??fac = function (e) {
            return new (e || t)();
          }),
          (t.??prov = ht({ factory: Da, token: t, providedIn: "root" })),
          t
        );
      })();
      function Da(t) {
        const e = Kt(Ca).location;
        return new Fa(Kt(Ea), (e && e.origin) || "");
      }
      const ja = new Ut("appBaseHref");
      let Fa = (() => {
          class t extends Na {
            constructor(t, e) {
              if (
                (super(),
                (this._platformLocation = t),
                null == e && (e = this._platformLocation.getBaseHrefFromDOM()),
                null == e)
              )
                throw new Error(
                  "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."
                );
              this._baseHref = e;
            }
            onPopState(t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(t) {
              return Oa(this._baseHref, t);
            }
            path(t = !1) {
              const e =
                  this._platformLocation.pathname +
                  Ra(this._platformLocation.search),
                n = this._platformLocation.hash;
              return n && t ? `${e}${n}` : e;
            }
            pushState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + Ra(r));
              this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + Ra(r));
              this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)(Kt(Ea), Kt(ja, 8));
            }),
            (t.??prov = ht({ token: t, factory: t.??fac })),
            t
          );
        })(),
        La = (() => {
          class t extends Na {
            constructor(t, e) {
              super(),
                (this._platformLocation = t),
                (this._baseHref = ""),
                null != e && (this._baseHref = e);
            }
            onPopState(t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(t = !1) {
              let e = this._platformLocation.hash;
              return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e;
            }
            prepareExternalUrl(t) {
              const e = Oa(this._baseHref, t);
              return e.length > 0 ? "#" + e : e;
            }
            pushState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + Ra(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + Ra(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)(Kt(Ea), Kt(ja, 8));
            }),
            (t.??prov = ht({ token: t, factory: t.??fac })),
            t
          );
        })(),
        Ua = (() => {
          class t {
            constructor(t, e) {
              (this._subject = new So()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = t);
              const n = this._platformStrategy.getBaseHref();
              (this._platformLocation = e),
                (this._baseHref = Ia(Ma(n))),
                this._platformStrategy.onPopState((t) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: t.state,
                    type: t.type,
                  });
                });
            }
            path(t = !1) {
              return this.normalize(this._platformStrategy.path(t));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(t, e = "") {
              return this.path() == this.normalize(t + Ra(e));
            }
            normalize(e) {
              return t.stripTrailingSlash(
                (function (t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e;
                })(this._baseHref, Ma(e))
              );
            }
            prepareExternalUrl(t) {
              return (
                t && "/" !== t[0] && (t = "/" + t),
                this._platformStrategy.prepareExternalUrl(t)
              );
            }
            go(t, e = "", n = null) {
              this._platformStrategy.pushState(n, "", t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + Ra(e)),
                  n
                );
            }
            replaceState(t, e = "", n = null) {
              this._platformStrategy.replaceState(n, "", t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + Ra(e)),
                  n
                );
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            onUrlChange(t) {
              this._urlChangeListeners.push(t),
                this.subscribe((t) => {
                  this._notifyUrlChangeListeners(t.url, t.state);
                });
            }
            _notifyUrlChangeListeners(t = "", e) {
              this._urlChangeListeners.forEach((n) => n(t, e));
            }
            subscribe(t, e, n) {
              return this._subject.subscribe({
                next: t,
                error: e,
                complete: n,
              });
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)(Kt(Na), Kt(Ea));
            }),
            (t.normalizeQueryParams = Ra),
            (t.joinWithSlash = Oa),
            (t.stripTrailingSlash = Ia),
            (t.??prov = ht({ factory: Va, token: t, providedIn: "root" })),
            t
          );
        })();
      function Va() {
        return new Ua(Kt(Na), Kt(Ea));
      }
      function Ma(t) {
        return t.replace(/\/index.html$/, "");
      }
      const $a = (function () {
        var t = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
        return (
          (t[t.Zero] = "Zero"),
          (t[t.One] = "One"),
          (t[t.Two] = "Two"),
          (t[t.Few] = "Few"),
          (t[t.Many] = "Many"),
          (t[t.Other] = "Other"),
          t
        );
      })();
      class Ha {}
      let qa = (() => {
        class t extends Ha {
          constructor(t) {
            super(), (this.locale = t);
          }
          getPluralCategory(t, e) {
            switch (
              (function (t) {
                return (function (t) {
                  const e = (function (t) {
                    return t.toLowerCase().replace(/_/g, "-");
                  })(t);
                  let n = po(e);
                  if (n) return n;
                  const r = e.split("-")[0];
                  if (((n = po(r)), n)) return n;
                  if ("en" === r) return co;
                  throw new Error(`Missing locale data for the locale "${t}".`);
                })(t)[fo.PluralCase];
              })(e || this.locale)(t)
            ) {
              case $a.Zero:
                return "zero";
              case $a.One:
                return "one";
              case $a.Two:
                return "two";
              case $a.Few:
                return "few";
              case $a.Many:
                return "many";
              default:
                return "other";
            }
          }
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)(Kt(Ro));
          }),
          (t.??prov = ht({ token: t, factory: t.??fac })),
          t
        );
      })();
      function za(t, e) {
        e = encodeURIComponent(e);
        for (const n of t.split(";")) {
          const t = n.indexOf("="),
            [r, s] = -1 == t ? [n, ""] : [n.slice(0, t), n.slice(t + 1)];
          if (r.trim() === e) return decodeURIComponent(s);
        }
        return null;
      }
      class Ba {
        constructor(t, e, n, r) {
          (this.$implicit = t),
            (this.ngForOf = e),
            (this.index = n),
            (this.count = r);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let Qa = (() => {
        class t {
          constructor(t, e, n) {
            (this._viewContainer = t),
              (this._template = e),
              (this._differs = n),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(t) {
            (this._ngForOf = t), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(t) {
            Mn() &&
              null != t &&
              "function" != typeof t &&
              console &&
              console.warn &&
              console.warn(
                `trackBy must be a function, but received ${JSON.stringify(
                  t
                )}. ` +
                  "See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."
              ),
              (this._trackByFn = t);
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(t) {
            t && (this._template = t);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const n = this._ngForOf;
              if (!this._differ && n)
                try {
                  this._differ = this._differs
                    .find(n)
                    .create(this.ngForTrackBy);
                } catch (e) {
                  throw new Error(
                    `Cannot find a differ supporting object '${n}' of type '${
                      ((t = n), t.name || typeof t)
                    }'. NgFor only supports binding to Iterables such as Arrays.`
                  );
                }
            }
            var t;
            if (this._differ) {
              const t = this._differ.diff(this._ngForOf);
              t && this._applyChanges(t);
            }
          }
          _applyChanges(t) {
            const e = [];
            t.forEachOperation((t, n, r) => {
              if (null == t.previousIndex) {
                const n = this._viewContainer.createEmbeddedView(
                    this._template,
                    new Ba(null, this._ngForOf, -1, -1),
                    null === r ? void 0 : r
                  ),
                  s = new Wa(t, n);
                e.push(s);
              } else if (null == r)
                this._viewContainer.remove(null === n ? void 0 : n);
              else if (null !== n) {
                const s = this._viewContainer.get(n);
                this._viewContainer.move(s, r);
                const i = new Wa(t, s);
                e.push(i);
              }
            });
            for (let n = 0; n < e.length; n++)
              this._perViewChange(e[n].view, e[n].record);
            for (let n = 0, r = this._viewContainer.length; n < r; n++) {
              const t = this._viewContainer.get(n);
              (t.context.index = n),
                (t.context.count = r),
                (t.context.ngForOf = this._ngForOf);
            }
            t.forEachIdentityChange((t) => {
              this._viewContainer.get(t.currentIndex).context.$implicit =
                t.item;
            });
          }
          _perViewChange(t, e) {
            t.context.$implicit = e.item;
          }
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)(si(no), si(to), si(Zi));
          }),
          (t.??dir = me({
            type: t,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
          })),
          t
        );
      })();
      class Wa {
        constructor(t, e) {
          (this.record = t), (this.view = e);
        }
      }
      class Ka {
        createSubscription(t, e) {
          return t.subscribe({
            next: e,
            error: (t) => {
              throw t;
            },
          });
        }
        dispose(t) {
          t.unsubscribe();
        }
        onDestroy(t) {
          t.unsubscribe();
        }
      }
      class Za {
        createSubscription(t, e) {
          return t.then(e, (t) => {
            throw t;
          });
        }
        dispose(t) {}
        onDestroy(t) {}
      }
      const Ga = new Za(),
        Ja = new Ka();
      let Ya = (() => {
          class t {
            constructor(t) {
              (this._ref = t),
                (this._latestValue = null),
                (this._latestReturnedValue = null),
                (this._subscription = null),
                (this._obj = null),
                (this._strategy = null);
            }
            ngOnDestroy() {
              this._subscription && this._dispose();
            }
            transform(t) {
              return this._obj
                ? t !== this._obj
                  ? (this._dispose(), this.transform(t))
                  : Ys(this._latestValue, this._latestReturnedValue)
                  ? this._latestReturnedValue
                  : ((this._latestReturnedValue = this._latestValue),
                    Xs.wrap(this._latestValue))
                : (t && this._subscribe(t),
                  (this._latestReturnedValue = this._latestValue),
                  this._latestValue);
            }
            _subscribe(t) {
              (this._obj = t),
                (this._strategy = this._selectStrategy(t)),
                (this._subscription = this._strategy.createSubscription(
                  t,
                  (e) => this._updateLatestValue(t, e)
                ));
            }
            _selectStrategy(e) {
              if (di(e)) return Ga;
              if (pi(e)) return Ja;
              throw Error(`InvalidPipeArgument: '${e}' for pipe '${bt(t)}'`);
            }
            _dispose() {
              this._strategy.dispose(this._subscription),
                (this._latestValue = null),
                (this._latestReturnedValue = null),
                (this._subscription = null),
                (this._obj = null);
            }
            _updateLatestValue(t, e) {
              t === this._obj &&
                ((this._latestValue = e), this._ref.markForCheck());
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)(
                (function (t = ut.Default) {
                  const e = As(!0);
                  if (null != e || t & ut.Optional) return e;
                  throw new Error("No provider for ChangeDetectorRef!");
                })()
              );
            }),
            (t.??pipe = ge({ name: "async", type: t, pure: !1 })),
            t
          );
        })(),
        Xa = (() => {
          class t {}
          return (
            (t.??mod = pe({ type: t })),
            (t.??inj = dt({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [{ provide: Ha, useClass: qa }],
            })),
            t
          );
        })();
      function tl(t) {
        return "browser" === t;
      }
      let el = (() => {
        class t {}
        return (
          (t.??prov = ht({
            token: t,
            providedIn: "root",
            factory: () => new nl(Kt(Ca), window, Kt(Fn)),
          })),
          t
        );
      })();
      class nl {
        constructor(t, e, n) {
          (this.document = t),
            (this.window = e),
            (this.errorHandler = n),
            (this.offset = () => [0, 0]);
        }
        setOffset(t) {
          this.offset = Array.isArray(t) ? () => t : t;
        }
        getScrollPosition() {
          return this.supportScrollRestoration()
            ? [this.window.scrollX, this.window.scrollY]
            : [0, 0];
        }
        scrollToPosition(t) {
          this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1]);
        }
        scrollToAnchor(t) {
          if (this.supportScrollRestoration()) {
            t =
              this.window.CSS && this.window.CSS.escape
                ? this.window.CSS.escape(t)
                : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1");
            try {
              const e = this.document.querySelector(`#${t}`);
              if (e) return void this.scrollToElement(e);
              const n = this.document.querySelector(`[name='${t}']`);
              if (n) return void this.scrollToElement(n);
            } catch (e) {
              this.errorHandler.handleError(e);
            }
          }
        }
        setHistoryScrollRestoration(t) {
          if (this.supportScrollRestoration()) {
            const e = this.window.history;
            e && e.scrollRestoration && (e.scrollRestoration = t);
          }
        }
        scrollToElement(t) {
          const e = t.getBoundingClientRect(),
            n = e.left + this.window.pageXOffset,
            r = e.top + this.window.pageYOffset,
            s = this.offset();
          this.window.scrollTo(n - s[0], r - s[1]);
        }
        supportScrollRestoration() {
          try {
            return !!this.window && !!this.window.scrollTo;
          } catch (t) {
            return !1;
          }
        }
      }
      class rl extends class extends class {} {
        constructor() {
          super();
        }
        supportsDOMEvents() {
          return !0;
        }
      } {
        static makeCurrent() {
          var t;
          (t = new rl()), ba || (ba = t);
        }
        getProperty(t, e) {
          return t[e];
        }
        log(t) {
          window.console && window.console.log && window.console.log(t);
        }
        logGroup(t) {
          window.console && window.console.group && window.console.group(t);
        }
        logGroupEnd() {
          window.console &&
            window.console.groupEnd &&
            window.console.groupEnd();
        }
        onAndCancel(t, e, n) {
          return (
            t.addEventListener(e, n, !1),
            () => {
              t.removeEventListener(e, n, !1);
            }
          );
        }
        dispatchEvent(t, e) {
          t.dispatchEvent(e);
        }
        remove(t) {
          return t.parentNode && t.parentNode.removeChild(t), t;
        }
        getValue(t) {
          return t.value;
        }
        createElement(t, e) {
          return (e = e || this.getDefaultDocument()).createElement(t);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
        getGlobalEventTarget(t, e) {
          return "window" === e
            ? window
            : "document" === e
            ? t
            : "body" === e
            ? t.body
            : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(t) {
          const e =
            il || ((il = document.querySelector("base")), il)
              ? il.getAttribute("href")
              : null;
          return null == e
            ? null
            : ((n = e),
              sl || (sl = document.createElement("a")),
              sl.setAttribute("href", n),
              "/" === sl.pathname.charAt(0) ? sl.pathname : "/" + sl.pathname);
          var n;
        }
        resetBaseElement() {
          il = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(t) {
          return za(document.cookie, t);
        }
      }
      let sl,
        il = null;
      const ol = new Ut("TRANSITION_ID"),
        al = [
          {
            provide: Co,
            useFactory: function (t, e, n) {
              return () => {
                n.get(Eo).donePromise.then(() => {
                  const n = Sa();
                  Array.prototype.slice
                    .apply(e.querySelectorAll("style[ng-transition]"))
                    .filter((e) => e.getAttribute("ng-transition") === t)
                    .forEach((t) => n.remove(t));
                });
              };
            },
            deps: [ol, Ca, zs],
            multi: !0,
          },
        ];
      class ll {
        static init() {
          var t;
          (t = new ll()), (ra = t);
        }
        addToWindow(t) {
          (Ot.getAngularTestability = (e, n = !0) => {
            const r = t.findTestabilityInTree(e, n);
            if (null == r)
              throw new Error("Could not find testability for element.");
            return r;
          }),
            (Ot.getAllAngularTestabilities = () => t.getAllTestabilities()),
            (Ot.getAllAngularRootElements = () => t.getAllRootElements()),
            Ot.frameworkStabilizers || (Ot.frameworkStabilizers = []),
            Ot.frameworkStabilizers.push((t) => {
              const e = Ot.getAllAngularTestabilities();
              let n = e.length,
                r = !1;
              const s = function (e) {
                (r = r || e), n--, 0 == n && t(r);
              };
              e.forEach(function (t) {
                t.whenStable(s);
              });
            });
        }
        findTestabilityInTree(t, e, n) {
          if (null == e) return null;
          const r = t.getTestability(e);
          return null != r
            ? r
            : n
            ? Sa().isShadowRoot(e)
              ? this.findTestabilityInTree(t, e.host, !0)
              : this.findTestabilityInTree(t, e.parentElement, !0)
            : null;
        }
      }
      const ul = new Ut("EventManagerPlugins");
      let cl = (() => {
        class t {
          constructor(t, e) {
            (this._zone = e),
              (this._eventNameToPlugin = new Map()),
              t.forEach((t) => (t.manager = this)),
              (this._plugins = t.slice().reverse());
          }
          addEventListener(t, e, n) {
            return this._findPluginFor(e).addEventListener(t, e, n);
          }
          addGlobalEventListener(t, e, n) {
            return this._findPluginFor(e).addGlobalEventListener(t, e, n);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(t) {
            const e = this._eventNameToPlugin.get(t);
            if (e) return e;
            const n = this._plugins;
            for (let r = 0; r < n.length; r++) {
              const e = n[r];
              if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e;
            }
            throw new Error(`No event manager plugin found for event ${t}`);
          }
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)(Kt(ul), Kt(Bo));
          }),
          (t.??prov = ht({ token: t, factory: t.??fac })),
          t
        );
      })();
      class hl {
        constructor(t) {
          this._doc = t;
        }
        addGlobalEventListener(t, e, n) {
          const r = Sa().getGlobalEventTarget(this._doc, t);
          if (!r)
            throw new Error(`Unsupported event target ${r} for event ${e}`);
          return this.addEventListener(r, e, n);
        }
      }
      let dl = (() => {
          class t {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(t) {
              const e = new Set();
              t.forEach((t) => {
                this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t));
              }),
                this.onStylesAdded(e);
            }
            onStylesAdded(t) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)();
            }),
            (t.??prov = ht({ token: t, factory: t.??fac })),
            t
          );
        })(),
        pl = (() => {
          class t extends dl {
            constructor(t) {
              super(),
                (this._doc = t),
                (this._hostNodes = new Set()),
                (this._styleNodes = new Set()),
                this._hostNodes.add(t.head);
            }
            _addStylesToHost(t, e) {
              t.forEach((t) => {
                const n = this._doc.createElement("style");
                (n.textContent = t), this._styleNodes.add(e.appendChild(n));
              });
            }
            addHost(t) {
              this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t);
            }
            removeHost(t) {
              this._hostNodes.delete(t);
            }
            onStylesAdded(t) {
              this._hostNodes.forEach((e) => this._addStylesToHost(t, e));
            }
            ngOnDestroy() {
              this._styleNodes.forEach((t) => Sa().remove(t));
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)(Kt(Ca));
            }),
            (t.??prov = ht({ token: t, factory: t.??fac })),
            t
          );
        })();
      const fl = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        ml = /%COMP%/g;
      function gl(t, e, n) {
        for (let r = 0; r < e.length; r++) {
          let s = e[r];
          Array.isArray(s) ? gl(t, s, n) : ((s = s.replace(ml, t)), n.push(s));
        }
        return n;
      }
      function yl(t) {
        return (e) => {
          if ("__ngUnwrap__" === e) return t;
          !1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
        };
      }
      let _l = (() => {
        class t {
          constructor(t, e, n) {
            (this.eventManager = t),
              (this.sharedStylesHost = e),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new vl(t));
          }
          createRenderer(t, e) {
            if (!t || !e) return this.defaultRenderer;
            switch (e.encapsulation) {
              case se.Emulated: {
                let n = this.rendererByCompId.get(e.id);
                return (
                  n ||
                    ((n = new wl(
                      this.eventManager,
                      this.sharedStylesHost,
                      e,
                      this.appId
                    )),
                    this.rendererByCompId.set(e.id, n)),
                  n.applyToHost(t),
                  n
                );
              }
              case se.Native:
              case se.ShadowDom:
                return new bl(this.eventManager, this.sharedStylesHost, t, e);
              default:
                if (!this.rendererByCompId.has(e.id)) {
                  const t = gl(e.id, e.styles, []);
                  this.sharedStylesHost.addStyles(t),
                    this.rendererByCompId.set(e.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)(Kt(cl), Kt(pl), Kt(To));
          }),
          (t.??prov = ht({ token: t, factory: t.??fac })),
          t
        );
      })();
      class vl {
        constructor(t) {
          (this.eventManager = t), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(t, e) {
          return e
            ? document.createElementNS(fl[e] || e, t)
            : document.createElement(t);
        }
        createComment(t) {
          return document.createComment(t);
        }
        createText(t) {
          return document.createTextNode(t);
        }
        appendChild(t, e) {
          t.appendChild(e);
        }
        insertBefore(t, e, n) {
          t && t.insertBefore(e, n);
        }
        removeChild(t, e) {
          t && t.removeChild(e);
        }
        selectRootElement(t, e) {
          let n = "string" == typeof t ? document.querySelector(t) : t;
          if (!n)
            throw new Error(`The selector "${t}" did not match any elements`);
          return e || (n.textContent = ""), n;
        }
        parentNode(t) {
          return t.parentNode;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        setAttribute(t, e, n, r) {
          if (r) {
            e = r + ":" + e;
            const s = fl[r];
            s ? t.setAttributeNS(s, e, n) : t.setAttribute(e, n);
          } else t.setAttribute(e, n);
        }
        removeAttribute(t, e, n) {
          if (n) {
            const r = fl[n];
            r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${n}:${e}`);
          } else t.removeAttribute(e);
        }
        addClass(t, e) {
          t.classList.add(e);
        }
        removeClass(t, e) {
          t.classList.remove(e);
        }
        setStyle(t, e, n, r) {
          r & Ni.DashCase
            ? t.style.setProperty(e, n, r & Ni.Important ? "important" : "")
            : (t.style[e] = n);
        }
        removeStyle(t, e, n) {
          n & Ni.DashCase ? t.style.removeProperty(e) : (t.style[e] = "");
        }
        setProperty(t, e, n) {
          t[e] = n;
        }
        setValue(t, e) {
          t.nodeValue = e;
        }
        listen(t, e, n) {
          return "string" == typeof t
            ? this.eventManager.addGlobalEventListener(t, e, yl(n))
            : this.eventManager.addEventListener(t, e, yl(n));
        }
      }
      class wl extends vl {
        constructor(t, e, n, r) {
          super(t), (this.component = n);
          const s = gl(r + "-" + n.id, n.styles, []);
          e.addStyles(s),
            (this.contentAttr = "_ngcontent-%COMP%".replace(
              ml,
              r + "-" + n.id
            )),
            (this.hostAttr = (function (t) {
              return "_nghost-%COMP%".replace(ml, t);
            })(r + "-" + n.id));
        }
        applyToHost(t) {
          super.setAttribute(t, this.hostAttr, "");
        }
        createElement(t, e) {
          const n = super.createElement(t, e);
          return super.setAttribute(n, this.contentAttr, ""), n;
        }
      }
      class bl extends vl {
        constructor(t, e, n, r) {
          super(t),
            (this.sharedStylesHost = e),
            (this.hostEl = n),
            (this.component = r),
            (this.shadowRoot =
              r.encapsulation === se.ShadowDom
                ? n.attachShadow({ mode: "open" })
                : n.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const s = gl(r.id, r.styles, []);
          for (let i = 0; i < s.length; i++) {
            const t = document.createElement("style");
            (t.textContent = s[i]), this.shadowRoot.appendChild(t);
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(t, e) {
          return super.appendChild(this.nodeOrShadowRoot(t), e);
        }
        insertBefore(t, e, n) {
          return super.insertBefore(this.nodeOrShadowRoot(t), e, n);
        }
        removeChild(t, e) {
          return super.removeChild(this.nodeOrShadowRoot(t), e);
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(t))
          );
        }
      }
      let Sl = (() => {
        class t extends hl {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return !0;
          }
          addEventListener(t, e, n) {
            return (
              t.addEventListener(e, n, !1),
              () => this.removeEventListener(t, e, n)
            );
          }
          removeEventListener(t, e, n) {
            return t.removeEventListener(e, n);
          }
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)(Kt(Ca));
          }),
          (t.??prov = ht({ token: t, factory: t.??fac })),
          t
        );
      })();
      const Cl = ["alt", "control", "meta", "shift"],
        El = {
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
        Tl = {
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
        xl = {
          alt: (t) => t.altKey,
          control: (t) => t.ctrlKey,
          meta: (t) => t.metaKey,
          shift: (t) => t.shiftKey,
        };
      let kl = (() => {
        class t extends hl {
          constructor(t) {
            super(t);
          }
          supports(e) {
            return null != t.parseEventName(e);
          }
          addEventListener(e, n, r) {
            const s = t.parseEventName(n),
              i = t.eventCallback(s.fullKey, r, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() => Sa().onAndCancel(e, s.domEventName, i));
          }
          static parseEventName(e) {
            const n = e.toLowerCase().split("."),
              r = n.shift();
            if (0 === n.length || ("keydown" !== r && "keyup" !== r))
              return null;
            const s = t._normalizeKey(n.pop());
            let i = "";
            if (
              (Cl.forEach((t) => {
                const e = n.indexOf(t);
                e > -1 && (n.splice(e, 1), (i += t + "."));
              }),
              (i += s),
              0 != n.length || 0 === s.length)
            )
              return null;
            const o = {};
            return (o.domEventName = r), (o.fullKey = i), o;
          }
          static getEventFullKey(t) {
            let e = "",
              n = (function (t) {
                let e = t.key;
                if (null == e) {
                  if (((e = t.keyIdentifier), null == e)) return "Unidentified";
                  e.startsWith("U+") &&
                    ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
                    3 === t.location && Tl.hasOwnProperty(e) && (e = Tl[e]));
                }
                return El[e] || e;
              })(t);
            return (
              (n = n.toLowerCase()),
              " " === n ? (n = "space") : "." === n && (n = "dot"),
              Cl.forEach((r) => {
                r != n && (0, xl[r])(t) && (e += r + ".");
              }),
              (e += n),
              e
            );
          }
          static eventCallback(e, n, r) {
            return (s) => {
              t.getEventFullKey(s) === e && r.runGuarded(() => n(s));
            };
          }
          static _normalizeKey(t) {
            switch (t) {
              case "esc":
                return "escape";
              default:
                return t;
            }
          }
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)(Kt(Ca));
          }),
          (t.??prov = ht({ token: t, factory: t.??fac })),
          t
        );
      })();
      const Al = aa(_a, "browser", [
          { provide: Po, useValue: "browser" },
          {
            provide: Ao,
            useValue: function () {
              rl.makeCurrent(), ll.init();
            },
            multi: !0,
          },
          {
            provide: Ca,
            useFactory: function () {
              return (
                (function (t) {
                  en = t;
                })(document),
                document
              );
            },
            deps: [],
          },
        ]),
        Pl = [
          [],
          { provide: Is, useValue: "root" },
          {
            provide: Fn,
            useFactory: function () {
              return new Fn();
            },
            deps: [],
          },
          { provide: ul, useClass: Sl, multi: !0, deps: [Ca, Bo, Po] },
          { provide: ul, useClass: kl, multi: !0, deps: [Ca] },
          [],
          { provide: _l, useClass: _l, deps: [cl, pl, To] },
          { provide: Ri, useExisting: _l },
          { provide: dl, useExisting: pl },
          { provide: pl, useClass: pl, deps: [Ca] },
          { provide: Xo, useClass: Xo, deps: [Bo] },
          { provide: cl, useClass: cl, deps: [ul, Bo] },
          [],
        ];
      let Ol = (() => {
        class t {
          constructor(t) {
            if (t)
              throw new Error(
                "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
              );
          }
          static withServerTransition(e) {
            return {
              ngModule: t,
              providers: [
                { provide: To, useValue: e.appId },
                { provide: ol, useExisting: To },
                al,
              ],
            };
          }
        }
        return (
          (t.??mod = pe({ type: t })),
          (t.??inj = dt({
            factory: function (e) {
              return new (e || t)(Kt(t, 12));
            },
            providers: Pl,
            imports: [Xa, wa],
          })),
          t
        );
      })();
      function Il(...t) {
        let e = t[t.length - 1];
        return k(e) ? (t.pop(), M(t, e)) : W(t);
      }
      function Rl(t, e) {
        return H(t, e, 1);
      }
      function Nl(t, e) {
        return function (n) {
          return n.lift(new Dl(t, e));
        };
      }
      "undefined" != typeof window && window;
      class Dl {
        constructor(t, e) {
          (this.predicate = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new jl(t, this.predicate, this.thisArg));
        }
      }
      class jl extends f {
        constructor(t, e, n) {
          super(t), (this.predicate = e), (this.thisArg = n), (this.count = 0);
        }
        _next(t) {
          let e;
          try {
            e = this.predicate.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          e && this.destination.next(t);
        }
      }
      class Fl {}
      class Ll {}
      class Ul {
        constructor(t) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            t
              ? (this.lazyInit =
                  "string" == typeof t
                    ? () => {
                        (this.headers = new Map()),
                          t.split("\n").forEach((t) => {
                            const e = t.indexOf(":");
                            if (e > 0) {
                              const n = t.slice(0, e),
                                r = n.toLowerCase(),
                                s = t.slice(e + 1).trim();
                              this.maybeSetNormalizedName(n, r),
                                this.headers.has(r)
                                  ? this.headers.get(r).push(s)
                                  : this.headers.set(r, [s]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(t).forEach((e) => {
                            let n = t[e];
                            const r = e.toLowerCase();
                            "string" == typeof n && (n = [n]),
                              n.length > 0 &&
                                (this.headers.set(r, n),
                                this.maybeSetNormalizedName(e, r));
                          });
                      })
              : (this.headers = new Map());
        }
        has(t) {
          return this.init(), this.headers.has(t.toLowerCase());
        }
        get(t) {
          this.init();
          const e = this.headers.get(t.toLowerCase());
          return e && e.length > 0 ? e[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(t) {
          return this.init(), this.headers.get(t.toLowerCase()) || null;
        }
        append(t, e) {
          return this.clone({ name: t, value: e, op: "a" });
        }
        set(t, e) {
          return this.clone({ name: t, value: e, op: "s" });
        }
        delete(t, e) {
          return this.clone({ name: t, value: e, op: "d" });
        }
        maybeSetNormalizedName(t, e) {
          this.normalizedNames.has(e) || this.normalizedNames.set(e, t);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof Ul
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
              (this.lazyUpdate = null)));
        }
        copyFrom(t) {
          t.init(),
            Array.from(t.headers.keys()).forEach((e) => {
              this.headers.set(e, t.headers.get(e)),
                this.normalizedNames.set(e, t.normalizedNames.get(e));
            });
        }
        clone(t) {
          const e = new Ul();
          return (
            (e.lazyInit =
              this.lazyInit && this.lazyInit instanceof Ul
                ? this.lazyInit
                : this),
            (e.lazyUpdate = (this.lazyUpdate || []).concat([t])),
            e
          );
        }
        applyUpdate(t) {
          const e = t.name.toLowerCase();
          switch (t.op) {
            case "a":
            case "s":
              let n = t.value;
              if (("string" == typeof n && (n = [n]), 0 === n.length)) return;
              this.maybeSetNormalizedName(t.name, e);
              const r = ("a" === t.op ? this.headers.get(e) : void 0) || [];
              r.push(...n), this.headers.set(e, r);
              break;
            case "d":
              const s = t.value;
              if (s) {
                let t = this.headers.get(e);
                if (!t) return;
                (t = t.filter((t) => -1 === s.indexOf(t))),
                  0 === t.length
                    ? (this.headers.delete(e), this.normalizedNames.delete(e))
                    : this.headers.set(e, t);
              } else this.headers.delete(e), this.normalizedNames.delete(e);
          }
        }
        forEach(t) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((e) =>
              t(this.normalizedNames.get(e), this.headers.get(e))
            );
        }
      }
      class Vl {
        encodeKey(t) {
          return Ml(t);
        }
        encodeValue(t) {
          return Ml(t);
        }
        decodeKey(t) {
          return decodeURIComponent(t);
        }
        decodeValue(t) {
          return decodeURIComponent(t);
        }
      }
      function Ml(t) {
        return encodeURIComponent(t)
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
      class $l {
        constructor(t = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = t.encoder || new Vl()),
            t.fromString)
          ) {
            if (t.fromObject)
              throw new Error("Cannot specify both fromString and fromObject.");
            this.map = (function (t, e) {
              const n = new Map();
              return (
                t.length > 0 &&
                  t.split("&").forEach((t) => {
                    const r = t.indexOf("="),
                      [s, i] =
                        -1 == r
                          ? [e.decodeKey(t), ""]
                          : [
                              e.decodeKey(t.slice(0, r)),
                              e.decodeValue(t.slice(r + 1)),
                            ],
                      o = n.get(s) || [];
                    o.push(i), n.set(s, o);
                  }),
                n
              );
            })(t.fromString, this.encoder);
          } else
            t.fromObject
              ? ((this.map = new Map()),
                Object.keys(t.fromObject).forEach((e) => {
                  const n = t.fromObject[e];
                  this.map.set(e, Array.isArray(n) ? n : [n]);
                }))
              : (this.map = null);
        }
        has(t) {
          return this.init(), this.map.has(t);
        }
        get(t) {
          this.init();
          const e = this.map.get(t);
          return e ? e[0] : null;
        }
        getAll(t) {
          return this.init(), this.map.get(t) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(t, e) {
          return this.clone({ param: t, value: e, op: "a" });
        }
        set(t, e) {
          return this.clone({ param: t, value: e, op: "s" });
        }
        delete(t, e) {
          return this.clone({ param: t, value: e, op: "d" });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((t) => {
                const e = this.encoder.encodeKey(t);
                return this.map
                  .get(t)
                  .map((t) => e + "=" + this.encoder.encodeValue(t))
                  .join("&");
              })
              .filter((t) => "" !== t)
              .join("&")
          );
        }
        clone(t) {
          const e = new $l({ encoder: this.encoder });
          return (
            (e.cloneFrom = this.cloneFrom || this),
            (e.updates = (this.updates || []).concat([t])),
            e
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((t) => this.map.set(t, this.cloneFrom.map.get(t))),
              this.updates.forEach((t) => {
                switch (t.op) {
                  case "a":
                  case "s":
                    const e =
                      ("a" === t.op ? this.map.get(t.param) : void 0) || [];
                    e.push(t.value), this.map.set(t.param, e);
                    break;
                  case "d":
                    if (void 0 === t.value) {
                      this.map.delete(t.param);
                      break;
                    }
                    {
                      let e = this.map.get(t.param) || [];
                      const n = e.indexOf(t.value);
                      -1 !== n && e.splice(n, 1),
                        e.length > 0
                          ? this.map.set(t.param, e)
                          : this.map.delete(t.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      function Hl(t) {
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer;
      }
      function ql(t) {
        return "undefined" != typeof Blob && t instanceof Blob;
      }
      function zl(t) {
        return "undefined" != typeof FormData && t instanceof FormData;
      }
      class Bl {
        constructor(t, e, n, r) {
          let s;
          if (
            ((this.url = e),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = "json"),
            (this.method = t.toUpperCase()),
            (function (t) {
              switch (t) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP":
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || r
              ? ((this.body = void 0 !== n ? n : null), (s = r))
              : (s = n),
            s &&
              ((this.reportProgress = !!s.reportProgress),
              (this.withCredentials = !!s.withCredentials),
              s.responseType && (this.responseType = s.responseType),
              s.headers && (this.headers = s.headers),
              s.params && (this.params = s.params)),
            this.headers || (this.headers = new Ul()),
            this.params)
          ) {
            const t = this.params.toString();
            if (0 === t.length) this.urlWithParams = e;
            else {
              const n = e.indexOf("?");
              this.urlWithParams =
                e + (-1 === n ? "?" : n < e.length - 1 ? "&" : "") + t;
            }
          } else (this.params = new $l()), (this.urlWithParams = e);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Hl(this.body) ||
              ql(this.body) ||
              zl(this.body) ||
              "string" == typeof this.body
            ? this.body
            : this.body instanceof $l
            ? this.body.toString()
            : "object" == typeof this.body ||
              "boolean" == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body
            ? null
            : zl(this.body)
            ? null
            : ql(this.body)
            ? this.body.type || null
            : Hl(this.body)
            ? null
            : "string" == typeof this.body
            ? "text/plain"
            : this.body instanceof $l
            ? "application/x-www-form-urlencoded;charset=UTF-8"
            : "object" == typeof this.body ||
              "number" == typeof this.body ||
              Array.isArray(this.body)
            ? "application/json"
            : null;
        }
        clone(t = {}) {
          const e = t.method || this.method,
            n = t.url || this.url,
            r = t.responseType || this.responseType,
            s = void 0 !== t.body ? t.body : this.body,
            i =
              void 0 !== t.withCredentials
                ? t.withCredentials
                : this.withCredentials,
            o =
              void 0 !== t.reportProgress
                ? t.reportProgress
                : this.reportProgress;
          let a = t.headers || this.headers,
            l = t.params || this.params;
          return (
            void 0 !== t.setHeaders &&
              (a = Object.keys(t.setHeaders).reduce(
                (e, n) => e.set(n, t.setHeaders[n]),
                a
              )),
            t.setParams &&
              (l = Object.keys(t.setParams).reduce(
                (e, n) => e.set(n, t.setParams[n]),
                l
              )),
            new Bl(e, n, s, {
              params: l,
              headers: a,
              reportProgress: o,
              responseType: r,
              withCredentials: i,
            })
          );
        }
      }
      const Ql = (function () {
        var t = {
          Sent: 0,
          UploadProgress: 1,
          ResponseHeader: 2,
          DownloadProgress: 3,
          Response: 4,
          User: 5,
        };
        return (
          (t[t.Sent] = "Sent"),
          (t[t.UploadProgress] = "UploadProgress"),
          (t[t.ResponseHeader] = "ResponseHeader"),
          (t[t.DownloadProgress] = "DownloadProgress"),
          (t[t.Response] = "Response"),
          (t[t.User] = "User"),
          t
        );
      })();
      class Wl {
        constructor(t, e = 200, n = "OK") {
          (this.headers = t.headers || new Ul()),
            (this.status = void 0 !== t.status ? t.status : e),
            (this.statusText = t.statusText || n),
            (this.url = t.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class Kl extends Wl {
        constructor(t = {}) {
          super(t), (this.type = Ql.ResponseHeader);
        }
        clone(t = {}) {
          return new Kl({
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class Zl extends Wl {
        constructor(t = {}) {
          super(t),
            (this.type = Ql.Response),
            (this.body = void 0 !== t.body ? t.body : null);
        }
        clone(t = {}) {
          return new Zl({
            body: void 0 !== t.body ? t.body : this.body,
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class Gl extends Wl {
        constructor(t) {
          super(t, 0, "Unknown Error"),
            (this.name = "HttpErrorResponse"),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${t.url || "(unknown url)"}`
                : `Http failure response for ${t.url || "(unknown url)"}: ${
                    t.status
                  } ${t.statusText}`),
            (this.error = t.error || null);
        }
      }
      function Jl(t, e) {
        return {
          body: e,
          headers: t.headers,
          observe: t.observe,
          params: t.params,
          reportProgress: t.reportProgress,
          responseType: t.responseType,
          withCredentials: t.withCredentials,
        };
      }
      let Yl = (() => {
        class t {
          constructor(t) {
            this.handler = t;
          }
          request(t, e, n = {}) {
            let r;
            if (t instanceof Bl) r = t;
            else {
              let s = void 0;
              s = n.headers instanceof Ul ? n.headers : new Ul(n.headers);
              let i = void 0;
              n.params &&
                (i =
                  n.params instanceof $l
                    ? n.params
                    : new $l({ fromObject: n.params })),
                (r = new Bl(t, e, void 0 !== n.body ? n.body : null, {
                  headers: s,
                  params: i,
                  reportProgress: n.reportProgress,
                  responseType: n.responseType || "json",
                  withCredentials: n.withCredentials,
                }));
            }
            const s = Il(r).pipe(Rl((t) => this.handler.handle(t)));
            if (t instanceof Bl || "events" === n.observe) return s;
            const i = s.pipe(Nl((t) => t instanceof Zl));
            switch (n.observe || "body") {
              case "body":
                switch (r.responseType) {
                  case "arraybuffer":
                    return i.pipe(
                      L((t) => {
                        if (null !== t.body && !(t.body instanceof ArrayBuffer))
                          throw new Error("Response is not an ArrayBuffer.");
                        return t.body;
                      })
                    );
                  case "blob":
                    return i.pipe(
                      L((t) => {
                        if (null !== t.body && !(t.body instanceof Blob))
                          throw new Error("Response is not a Blob.");
                        return t.body;
                      })
                    );
                  case "text":
                    return i.pipe(
                      L((t) => {
                        if (null !== t.body && "string" != typeof t.body)
                          throw new Error("Response is not a string.");
                        return t.body;
                      })
                    );
                  case "json":
                  default:
                    return i.pipe(L((t) => t.body));
                }
              case "response":
                return i;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${n.observe}}`
                );
            }
          }
          delete(t, e = {}) {
            return this.request("DELETE", t, e);
          }
          get(t, e = {}) {
            return this.request("GET", t, e);
          }
          head(t, e = {}) {
            return this.request("HEAD", t, e);
          }
          jsonp(t, e) {
            return this.request("JSONP", t, {
              params: new $l().append(e, "JSONP_CALLBACK"),
              observe: "body",
              responseType: "json",
            });
          }
          options(t, e = {}) {
            return this.request("OPTIONS", t, e);
          }
          patch(t, e, n = {}) {
            return this.request("PATCH", t, Jl(n, e));
          }
          post(t, e, n = {}) {
            return this.request("POST", t, Jl(n, e));
          }
          put(t, e, n = {}) {
            return this.request("PUT", t, Jl(n, e));
          }
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)(Kt(Fl));
          }),
          (t.??prov = ht({ token: t, factory: t.??fac })),
          t
        );
      })();
      class Xl {
        constructor(t, e) {
          (this.next = t), (this.interceptor = e);
        }
        handle(t) {
          return this.interceptor.intercept(t, this.next);
        }
      }
      const tu = new Ut("HTTP_INTERCEPTORS");
      let eu = (() => {
        class t {
          intercept(t, e) {
            return e.handle(t);
          }
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)();
          }),
          (t.??prov = ht({ token: t, factory: t.??fac })),
          t
        );
      })();
      const nu = /^\)\]\}',?\n/;
      class ru {}
      let su = (() => {
          class t {
            constructor() {}
            build() {
              return new XMLHttpRequest();
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)();
            }),
            (t.??prov = ht({ token: t, factory: t.??fac })),
            t
          );
        })(),
        iu = (() => {
          class t {
            constructor(t) {
              this.xhrFactory = t;
            }
            handle(t) {
              if ("JSONP" === t.method)
                throw new Error(
                  "Attempted to construct Jsonp request without JsonpClientModule installed."
                );
              return new w((e) => {
                const n = this.xhrFactory.build();
                if (
                  (n.open(t.method, t.urlWithParams),
                  t.withCredentials && (n.withCredentials = !0),
                  t.headers.forEach((t, e) =>
                    n.setRequestHeader(t, e.join(","))
                  ),
                  t.headers.has("Accept") ||
                    n.setRequestHeader(
                      "Accept",
                      "application/json, text/plain, */*"
                    ),
                  !t.headers.has("Content-Type"))
                ) {
                  const e = t.detectContentTypeHeader();
                  null !== e && n.setRequestHeader("Content-Type", e);
                }
                if (t.responseType) {
                  const e = t.responseType.toLowerCase();
                  n.responseType = "json" !== e ? e : "text";
                }
                const r = t.serializeBody();
                let s = null;
                const i = () => {
                    if (null !== s) return s;
                    const e = 1223 === n.status ? 204 : n.status,
                      r = n.statusText || "OK",
                      i = new Ul(n.getAllResponseHeaders()),
                      o =
                        (function (t) {
                          return "responseURL" in t && t.responseURL
                            ? t.responseURL
                            : /^X-Request-URL:/m.test(t.getAllResponseHeaders())
                            ? t.getResponseHeader("X-Request-URL")
                            : null;
                        })(n) || t.url;
                    return (
                      (s = new Kl({
                        headers: i,
                        status: e,
                        statusText: r,
                        url: o,
                      })),
                      s
                    );
                  },
                  o = () => {
                    let { headers: r, status: s, statusText: o, url: a } = i(),
                      l = null;
                    204 !== s &&
                      (l = void 0 === n.response ? n.responseText : n.response),
                      0 === s && (s = l ? 200 : 0);
                    let u = s >= 200 && s < 300;
                    if ("json" === t.responseType && "string" == typeof l) {
                      const t = l;
                      l = l.replace(nu, "");
                      try {
                        l = "" !== l ? JSON.parse(l) : null;
                      } catch (c) {
                        (l = t), u && ((u = !1), (l = { error: c, text: l }));
                      }
                    }
                    u
                      ? (e.next(
                          new Zl({
                            body: l,
                            headers: r,
                            status: s,
                            statusText: o,
                            url: a || void 0,
                          })
                        ),
                        e.complete())
                      : e.error(
                          new Gl({
                            error: l,
                            headers: r,
                            status: s,
                            statusText: o,
                            url: a || void 0,
                          })
                        );
                  },
                  a = (t) => {
                    const { url: r } = i(),
                      s = new Gl({
                        error: t,
                        status: n.status || 0,
                        statusText: n.statusText || "Unknown Error",
                        url: r || void 0,
                      });
                    e.error(s);
                  };
                let l = !1;
                const u = (r) => {
                    l || (e.next(i()), (l = !0));
                    let s = { type: Ql.DownloadProgress, loaded: r.loaded };
                    r.lengthComputable && (s.total = r.total),
                      "text" === t.responseType &&
                        n.responseText &&
                        (s.partialText = n.responseText),
                      e.next(s);
                  },
                  c = (t) => {
                    let n = { type: Ql.UploadProgress, loaded: t.loaded };
                    t.lengthComputable && (n.total = t.total), e.next(n);
                  };
                return (
                  n.addEventListener("load", o),
                  n.addEventListener("error", a),
                  t.reportProgress &&
                    (n.addEventListener("progress", u),
                    null !== r &&
                      n.upload &&
                      n.upload.addEventListener("progress", c)),
                  n.send(r),
                  e.next({ type: Ql.Sent }),
                  () => {
                    n.removeEventListener("error", a),
                      n.removeEventListener("load", o),
                      t.reportProgress &&
                        (n.removeEventListener("progress", u),
                        null !== r &&
                          n.upload &&
                          n.upload.removeEventListener("progress", c)),
                      n.abort();
                  }
                );
              });
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)(Kt(ru));
            }),
            (t.??prov = ht({ token: t, factory: t.??fac })),
            t
          );
        })();
      const ou = new Ut("XSRF_COOKIE_NAME"),
        au = new Ut("XSRF_HEADER_NAME");
      class lu {}
      let uu = (() => {
          class t {
            constructor(t, e, n) {
              (this.doc = t),
                (this.platform = e),
                (this.cookieName = n),
                (this.lastCookieString = ""),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ("server" === this.platform) return null;
              const t = this.doc.cookie || "";
              return (
                t !== this.lastCookieString &&
                  (this.parseCount++,
                  (this.lastToken = za(t, this.cookieName)),
                  (this.lastCookieString = t)),
                this.lastToken
              );
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)(Kt(Ca), Kt(Po), Kt(ou));
            }),
            (t.??prov = ht({ token: t, factory: t.??fac })),
            t
          );
        })(),
        cu = (() => {
          class t {
            constructor(t, e) {
              (this.tokenService = t), (this.headerName = e);
            }
            intercept(t, e) {
              const n = t.url.toLowerCase();
              if (
                "GET" === t.method ||
                "HEAD" === t.method ||
                n.startsWith("http://") ||
                n.startsWith("https://")
              )
                return e.handle(t);
              const r = this.tokenService.getToken();
              return (
                null === r ||
                  t.headers.has(this.headerName) ||
                  (t = t.clone({ headers: t.headers.set(this.headerName, r) })),
                e.handle(t)
              );
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)(Kt(lu), Kt(au));
            }),
            (t.??prov = ht({ token: t, factory: t.??fac })),
            t
          );
        })(),
        hu = (() => {
          class t {
            constructor(t, e) {
              (this.backend = t), (this.injector = e), (this.chain = null);
            }
            handle(t) {
              if (null === this.chain) {
                const t = this.injector.get(tu, []);
                this.chain = t.reduceRight(
                  (t, e) => new Xl(t, e),
                  this.backend
                );
              }
              return this.chain.handle(t);
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)(Kt(Ll), Kt(zs));
            }),
            (t.??prov = ht({ token: t, factory: t.??fac })),
            t
          );
        })(),
        du = (() => {
          class t {
            static disable() {
              return {
                ngModule: t,
                providers: [{ provide: cu, useClass: eu }],
              };
            }
            static withOptions(e = {}) {
              return {
                ngModule: t,
                providers: [
                  e.cookieName ? { provide: ou, useValue: e.cookieName } : [],
                  e.headerName ? { provide: au, useValue: e.headerName } : [],
                ],
              };
            }
          }
          return (
            (t.??mod = pe({ type: t })),
            (t.??inj = dt({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [
                cu,
                { provide: tu, useExisting: cu, multi: !0 },
                { provide: lu, useClass: uu },
                { provide: ou, useValue: "XSRF-TOKEN" },
                { provide: au, useValue: "X-XSRF-TOKEN" },
              ],
            })),
            t
          );
        })(),
        pu = (() => {
          class t {}
          return (
            (t.??mod = pe({ type: t })),
            (t.??inj = dt({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [
                Yl,
                { provide: Fl, useClass: hu },
                iu,
                { provide: Ll, useExisting: iu },
                su,
                { provide: ru, useExisting: su },
              ],
              imports: [
                [
                  du.withOptions({
                    cookieName: "XSRF-TOKEN",
                    headerName: "X-XSRF-TOKEN",
                  }),
                ],
              ],
            })),
            t
          );
        })();
      const fu = new w((t) => t.complete());
      function mu(t) {
        return t
          ? (function (t) {
              return new w((e) => t.schedule(() => e.complete()));
            })(t)
          : fu;
      }
      function gu(t) {
        return new w((e) => {
          let n;
          try {
            n = t();
          } catch (r) {
            return void e.error(r);
          }
          return (n ? $(n) : mu()).subscribe(e);
        });
      }
      function yu(t, e) {
        return new w(
          e
            ? (n) => e.schedule(_u, 0, { error: t, subscriber: n })
            : (e) => e.error(t)
        );
      }
      function _u({ error: t, subscriber: e }) {
        e.error(t);
      }
      function vu(t, e, n, s) {
        return (
          r(n) && ((s = n), (n = void 0)),
          s
            ? vu(t, e, n).pipe(L((t) => (l(t) ? s(...t) : s(t))))
            : new w((r) => {
                !(function t(e, n, r, s, i) {
                  let o;
                  if (
                    (function (t) {
                      return (
                        t &&
                        "function" == typeof t.addEventListener &&
                        "function" == typeof t.removeEventListener
                      );
                    })(e)
                  ) {
                    const t = e;
                    e.addEventListener(n, r, i),
                      (o = () => t.removeEventListener(n, r, i));
                  } else if (
                    (function (t) {
                      return (
                        t &&
                        "function" == typeof t.on &&
                        "function" == typeof t.off
                      );
                    })(e)
                  ) {
                    const t = e;
                    e.on(n, r), (o = () => t.off(n, r));
                  } else if (
                    (function (t) {
                      return (
                        t &&
                        "function" == typeof t.addListener &&
                        "function" == typeof t.removeListener
                      );
                    })(e)
                  ) {
                    const t = e;
                    e.addListener(n, r), (o = () => t.removeListener(n, r));
                  } else {
                    if (!e || !e.length)
                      throw new TypeError("Invalid event target");
                    for (let o = 0, a = e.length; o < a; o++)
                      t(e[o], n, r, s, i);
                  }
                  s.add(o);
                })(
                  t,
                  e,
                  function (t) {
                    r.next(
                      arguments.length > 1
                        ? Array.prototype.slice.call(arguments)
                        : t
                    );
                  },
                  r,
                  n
                );
              })
        );
      }
      function wu() {
        return Q(1);
      }
      function bu(...t) {
        return wu()(Il(...t));
      }
      const Su = new w(y);
      function Cu(t, e) {
        return "function" == typeof e
          ? (n) =>
              n.pipe(Cu((n, r) => $(t(n, r)).pipe(L((t, s) => e(n, t, r, s)))))
          : (e) => e.lift(new Eu(t));
      }
      class Eu {
        constructor(t) {
          this.project = t;
        }
        call(t, e) {
          return e.subscribe(new Tu(t, this.project));
        }
      }
      class Tu extends F {
        constructor(t, e) {
          super(t), (this.project = e), (this.index = 0);
        }
        _next(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(e, t, n);
        }
        _innerSub(t, e, n) {
          const r = this.innerSubscription;
          r && r.unsubscribe();
          const s = new A(this, e, n),
            i = this.destination;
          i.add(s),
            (this.innerSubscription = j(this, t, void 0, void 0, s)),
            this.innerSubscription !== s && i.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: t } = this;
          (t && !t.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = null;
        }
        notifyComplete(t) {
          this.destination.remove(t),
            (this.innerSubscription = null),
            this.isStopped && super._complete();
        }
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
      }
      const xu = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = "argument out of range"),
            (this.name = "ArgumentOutOfRangeError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      function ku(t) {
        return (e) => (0 === t ? mu() : e.lift(new Au(t)));
      }
      class Au {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new xu();
        }
        call(t, e) {
          return e.subscribe(new Pu(t, this.total));
        }
      }
      class Pu extends f {
        constructor(t, e) {
          super(t), (this.total = e), (this.count = 0);
        }
        _next(t) {
          const e = this.total,
            n = ++this.count;
          n <= e &&
            (this.destination.next(t),
            n === e && (this.destination.complete(), this.unsubscribe()));
        }
      }
      function Ou(t, e, n) {
        return function (r) {
          return r.lift(new Iu(t, e, n));
        };
      }
      class Iu {
        constructor(t, e, n) {
          (this.nextOrObserver = t), (this.error = e), (this.complete = n);
        }
        call(t, e) {
          return e.subscribe(
            new Ru(t, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class Ru extends f {
        constructor(t, e, n, s) {
          super(t),
            (this._tapNext = y),
            (this._tapError = y),
            (this._tapComplete = y),
            (this._tapError = n || y),
            (this._tapComplete = s || y),
            r(e)
              ? ((this._context = this), (this._tapNext = e))
              : e &&
                ((this._context = e),
                (this._tapNext = e.next || y),
                (this._tapError = e.error || y),
                (this._tapComplete = e.complete || y));
        }
        _next(t) {
          try {
            this._tapNext.call(this._context, t);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.next(t);
        }
        _error(t) {
          try {
            this._tapError.call(this._context, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.error(t);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (t) {
            return void this.destination.error(t);
          }
          return this.destination.complete();
        }
      }
      class Nu extends h {
        constructor(t, e) {
          super();
        }
        schedule(t, e = 0) {
          return this;
        }
      }
      class Du extends Nu {
        constructor(t, e) {
          super(t, e),
            (this.scheduler = t),
            (this.work = e),
            (this.pending = !1);
        }
        schedule(t, e = 0) {
          if (this.closed) return this;
          this.state = t;
          const n = this.id,
            r = this.scheduler;
          return (
            null != n && (this.id = this.recycleAsyncId(r, n, e)),
            (this.pending = !0),
            (this.delay = e),
            (this.id = this.id || this.requestAsyncId(r, this.id, e)),
            this
          );
        }
        requestAsyncId(t, e, n = 0) {
          return setInterval(t.flush.bind(t, this), n);
        }
        recycleAsyncId(t, e, n = 0) {
          if (null !== n && this.delay === n && !1 === this.pending) return e;
          clearInterval(e);
        }
        execute(t, e) {
          if (this.closed) return new Error("executing a cancelled action");
          this.pending = !1;
          const n = this._execute(t, e);
          if (n) return n;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(t, e) {
          let n = !1,
            r = void 0;
          try {
            this.work(t);
          } catch (s) {
            (n = !0), (r = (!!s && s) || new Error(s));
          }
          if (n) return this.unsubscribe(), r;
        }
        _unsubscribe() {
          const t = this.id,
            e = this.scheduler,
            n = e.actions,
            r = n.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== r && n.splice(r, 1),
            null != t && (this.id = this.recycleAsyncId(e, t, null)),
            (this.delay = null);
        }
      }
      let ju = (() => {
        class t {
          constructor(e, n = t.now) {
            (this.SchedulerAction = e), (this.now = n);
          }
          schedule(t, e = 0, n) {
            return new this.SchedulerAction(this, t).schedule(n, e);
          }
        }
        return (t.now = () => Date.now()), t;
      })();
      class Fu extends ju {
        constructor(t, e = ju.now) {
          super(t, () =>
            Fu.delegate && Fu.delegate !== this ? Fu.delegate.now() : e()
          ),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(t, e = 0, n) {
          return Fu.delegate && Fu.delegate !== this
            ? Fu.delegate.schedule(t, e, n)
            : super.schedule(t, e, n);
        }
        flush(t) {
          const { actions: e } = this;
          if (this.active) return void e.push(t);
          let n;
          this.active = !0;
          do {
            if ((n = t.execute(t.state, t.delay))) break;
          } while ((t = e.shift()));
          if (((this.active = !1), n)) {
            for (; (t = e.shift()); ) t.unsubscribe();
            throw n;
          }
        }
      }
      const Lu = new Fu(Du);
      let Uu = (() => {
        class t {
          constructor(t, e, n) {
            (this.kind = t),
              (this.value = e),
              (this.error = n),
              (this.hasValue = "N" === t);
          }
          observe(t) {
            switch (this.kind) {
              case "N":
                return t.next && t.next(this.value);
              case "E":
                return t.error && t.error(this.error);
              case "C":
                return t.complete && t.complete();
            }
          }
          do(t, e, n) {
            switch (this.kind) {
              case "N":
                return t && t(this.value);
              case "E":
                return e && e(this.error);
              case "C":
                return n && n();
            }
          }
          accept(t, e, n) {
            return t && "function" == typeof t.next
              ? this.observe(t)
              : this.do(t, e, n);
          }
          toObservable() {
            switch (this.kind) {
              case "N":
                return Il(this.value);
              case "E":
                return yu(this.error);
              case "C":
                return mu();
            }
            throw new Error("unexpected notification kind value");
          }
          static createNext(e) {
            return void 0 !== e ? new t("N", e) : t.undefinedValueNotification;
          }
          static createError(e) {
            return new t("E", void 0, e);
          }
          static createComplete() {
            return t.completeNotification;
          }
        }
        return (
          (t.completeNotification = new t("C")),
          (t.undefinedValueNotification = new t("N", void 0)),
          t
        );
      })();
      class Vu {
        constructor(t, e) {
          (this.delay = t), (this.scheduler = e);
        }
        call(t, e) {
          return e.subscribe(new Mu(t, this.delay, this.scheduler));
        }
      }
      class Mu extends f {
        constructor(t, e, n) {
          super(t),
            (this.delay = e),
            (this.scheduler = n),
            (this.queue = []),
            (this.active = !1),
            (this.errored = !1);
        }
        static dispatch(t) {
          const e = t.source,
            n = e.queue,
            r = t.scheduler,
            s = t.destination;
          for (; n.length > 0 && n[0].time - r.now() <= 0; )
            n.shift().notification.observe(s);
          if (n.length > 0) {
            const e = Math.max(0, n[0].time - r.now());
            this.schedule(t, e);
          } else this.unsubscribe(), (e.active = !1);
        }
        _schedule(t) {
          (this.active = !0),
            this.destination.add(
              t.schedule(Mu.dispatch, this.delay, {
                source: this,
                destination: this.destination,
                scheduler: t,
              })
            );
        }
        scheduleNotification(t) {
          if (!0 === this.errored) return;
          const e = this.scheduler,
            n = new $u(e.now() + this.delay, t);
          this.queue.push(n), !1 === this.active && this._schedule(e);
        }
        _next(t) {
          this.scheduleNotification(Uu.createNext(t));
        }
        _error(t) {
          (this.errored = !0),
            (this.queue = []),
            this.destination.error(t),
            this.unsubscribe();
        }
        _complete() {
          this.scheduleNotification(Uu.createComplete()), this.unsubscribe();
        }
      }
      class $u {
        constructor(t, e) {
          (this.time = t), (this.notification = e);
        }
      }
      const Hu =
        "Service workers are disabled or not supported by this browser";
      class qu {
        constructor(t) {
          if (((this.serviceWorker = t), t)) {
            const e = vu(t, "controllerchange").pipe(L(() => t.controller)),
              n = bu(
                gu(() => Il(t.controller)),
                e
              );
            (this.worker = n.pipe(Nl((t) => !!t))),
              (this.registration = this.worker.pipe(
                Cu(() => t.getRegistration())
              ));
            const r = vu(t, "message")
              .pipe(L((t) => t.data))
              .pipe(Nl((t) => t && t.type))
              .pipe(et(new T()));
            r.connect(), (this.events = r);
          } else
            this.worker =
              this.events =
              this.registration =
                gu(() =>
                  yu(
                    new Error(
                      "Service workers are disabled or not supported by this browser"
                    )
                  )
                );
        }
        postMessage(t, e) {
          return this.worker
            .pipe(
              ku(1),
              Ou((n) => {
                n.postMessage(Object.assign({ action: t }, e));
              })
            )
            .toPromise()
            .then(() => {});
        }
        postMessageWithStatus(t, e, n) {
          const r = this.waitForStatus(n),
            s = this.postMessage(t, e);
          return Promise.all([r, s]).then(() => {});
        }
        generateNonce() {
          return Math.round(1e7 * Math.random());
        }
        eventsOfType(t) {
          return this.events.pipe(Nl((e) => e.type === t));
        }
        nextEventOfType(t) {
          return this.eventsOfType(t).pipe(ku(1));
        }
        waitForStatus(t) {
          return this.eventsOfType("STATUS")
            .pipe(
              Nl((e) => e.nonce === t),
              ku(1),
              L((t) => {
                if (!t.status) throw new Error(t.error);
              })
            )
            .toPromise();
        }
        get isEnabled() {
          return !!this.serviceWorker;
        }
      }
      let zu = (() => {
          class t {
            constructor(t) {
              if (
                ((this.sw = t),
                (this.subscriptionChanges = new T()),
                !t.isEnabled)
              )
                return (
                  (this.messages = Su),
                  (this.notificationClicks = Su),
                  void (this.subscription = Su)
                );
              (this.messages = this.sw
                .eventsOfType("PUSH")
                .pipe(L((t) => t.data))),
                (this.notificationClicks = this.sw
                  .eventsOfType("NOTIFICATION_CLICK")
                  .pipe(L((t) => t.data))),
                (this.pushManager = this.sw.registration.pipe(
                  L((t) => t.pushManager)
                ));
              const e = this.pushManager.pipe(Cu((t) => t.getSubscription()));
              this.subscription = K(e, this.subscriptionChanges);
            }
            get isEnabled() {
              return this.sw.isEnabled;
            }
            requestSubscription(t) {
              if (!this.sw.isEnabled) return Promise.reject(new Error(Hu));
              const e = { userVisibleOnly: !0 };
              let n = this.decodeBase64(
                  t.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+")
                ),
                r = new Uint8Array(new ArrayBuffer(n.length));
              for (let s = 0; s < n.length; s++) r[s] = n.charCodeAt(s);
              return (
                (e.applicationServerKey = r),
                this.pushManager
                  .pipe(
                    Cu((t) => t.subscribe(e)),
                    ku(1)
                  )
                  .toPromise()
                  .then((t) => (this.subscriptionChanges.next(t), t))
              );
            }
            unsubscribe() {
              return this.sw.isEnabled
                ? this.subscription
                    .pipe(
                      ku(1),
                      Cu((t) => {
                        if (null === t)
                          throw new Error(
                            "Not subscribed to push notifications."
                          );
                        return t.unsubscribe().then((t) => {
                          if (!t) throw new Error("Unsubscribe failed!");
                          this.subscriptionChanges.next(null);
                        });
                      })
                    )
                    .toPromise()
                : Promise.reject(new Error(Hu));
            }
            decodeBase64(t) {
              return atob(t);
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)(Kt(qu));
            }),
            (t.??prov = ht({ token: t, factory: t.??fac })),
            t
          );
        })(),
        Bu = (() => {
          class t {
            constructor(t) {
              if (((this.sw = t), !t.isEnabled))
                return (this.available = Su), void (this.activated = Su);
              (this.available = this.sw.eventsOfType("UPDATE_AVAILABLE")),
                (this.activated = this.sw.eventsOfType("UPDATE_ACTIVATED"));
            }
            get isEnabled() {
              return this.sw.isEnabled;
            }
            checkForUpdate() {
              if (!this.sw.isEnabled) return Promise.reject(new Error(Hu));
              const t = this.sw.generateNonce();
              return this.sw.postMessageWithStatus(
                "CHECK_FOR_UPDATES",
                { statusNonce: t },
                t
              );
            }
            activateUpdate() {
              if (!this.sw.isEnabled) return Promise.reject(new Error(Hu));
              const t = this.sw.generateNonce();
              return this.sw.postMessageWithStatus(
                "ACTIVATE_UPDATE",
                { statusNonce: t },
                t
              );
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)(Kt(qu));
            }),
            (t.??prov = ht({ token: t, factory: t.??fac })),
            t
          );
        })();
      class Qu {}
      const Wu = new Ut("NGSW_REGISTER_SCRIPT");
      function Ku(t, e, n, r) {
        return () => {
          if (!(tl(r) && "serviceWorker" in navigator && !1 !== n.enabled))
            return;
          let s;
          if (
            (navigator.serviceWorker.addEventListener(
              "controllerchange",
              () => {
                null !== navigator.serviceWorker.controller &&
                  navigator.serviceWorker.controller.postMessage({
                    action: "INITIALIZE",
                  });
              }
            ),
            "function" == typeof n.registrationStrategy)
          )
            s = n.registrationStrategy();
          else {
            const [e, ...r] = (
              n.registrationStrategy || "registerWhenStable"
            ).split(":");
            switch (e) {
              case "registerImmediately":
                s = Il(null);
                break;
              case "registerWithDelay":
                s = Il(null).pipe(
                  (function (t, e = Lu) {
                    var n;
                    const r =
                      (n = t) instanceof Date && !isNaN(+n)
                        ? +t - e.now()
                        : Math.abs(t);
                    return (t) => t.lift(new Vu(r, e));
                  })(+r[0] || 0)
                );
                break;
              case "registerWhenStable":
                s = t.get(ha).isStable.pipe(Nl((t) => t));
                break;
              default:
                throw new Error(
                  `Unknown ServiceWorker registration strategy: ${n.registrationStrategy}`
                );
            }
          }
          s.pipe(ku(1)).subscribe(() =>
            navigator.serviceWorker
              .register(e, { scope: n.scope })
              .catch((t) =>
                console.error("Service worker registration failed with:", t)
              )
          );
        };
      }
      function Zu(t, e) {
        return new qu(
          tl(e) && !1 !== t.enabled ? navigator.serviceWorker : void 0
        );
      }
      let Gu = (() => {
        class t {
          static register(e, n = {}) {
            return {
              ngModule: t,
              providers: [
                { provide: Wu, useValue: e },
                { provide: Qu, useValue: n },
                { provide: qu, useFactory: Zu, deps: [Qu, Po] },
                {
                  provide: Co,
                  useFactory: Ku,
                  deps: [zs, Wu, Qu, Po],
                  multi: !0,
                },
              ],
            };
          }
        }
        return (
          (t.??mod = pe({ type: t })),
          (t.??inj = dt({
            factory: function (e) {
              return new (e || t)();
            },
            providers: [zu, Bu],
          })),
          t
        );
      })();
      class Ju extends T {
        constructor(t) {
          super(), (this._value = t);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(t) {
          const e = super._subscribe(t);
          return e && !e.closed && t.next(this._value), e;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new S();
          return this._value;
        }
        next(t) {
          super.next((this._value = t));
        }
      }
      const Yu = (() => {
          function t() {
            return (
              Error.call(this),
              (this.message = "no elements in sequence"),
              (this.name = "EmptyError"),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        Xu = {};
      class tc {
        constructor(t) {
          this.resultSelector = t;
        }
        call(t, e) {
          return e.subscribe(new ec(t, this.resultSelector));
        }
      }
      class ec extends F {
        constructor(t, e) {
          super(t),
            (this.resultSelector = e),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(t) {
          this.values.push(Xu), this.observables.push(t);
        }
        _complete() {
          const t = this.observables,
            e = t.length;
          if (0 === e) this.destination.complete();
          else {
            (this.active = e), (this.toRespond = e);
            for (let n = 0; n < e; n++) {
              const e = t[n];
              this.add(j(this, e, e, n));
            }
          }
        }
        notifyComplete(t) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(t, e, n, r, s) {
          const i = this.values,
            o = this.toRespond
              ? i[n] === Xu
                ? --this.toRespond
                : this.toRespond
              : 0;
          (i[n] = e),
            0 === o &&
              (this.resultSelector
                ? this._tryResultSelector(i)
                : this.destination.next(i.slice()));
        }
        _tryResultSelector(t) {
          let e;
          try {
            e = this.resultSelector.apply(this, t);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      function nc(t) {
        return function (e) {
          return 0 === t ? mu() : e.lift(new rc(t));
        };
      }
      class rc {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new xu();
        }
        call(t, e) {
          return e.subscribe(new sc(t, this.total));
        }
      }
      class sc extends f {
        constructor(t, e) {
          super(t),
            (this.total = e),
            (this.ring = new Array()),
            (this.count = 0);
        }
        _next(t) {
          const e = this.ring,
            n = this.total,
            r = this.count++;
          e.length < n ? e.push(t) : (e[r % n] = t);
        }
        _complete() {
          const t = this.destination;
          let e = this.count;
          if (e > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring;
            for (let s = 0; s < n; s++) {
              const s = e++ % n;
              t.next(r[s]);
            }
          }
          t.complete();
        }
      }
      function ic(t = lc) {
        return (e) => e.lift(new oc(t));
      }
      class oc {
        constructor(t) {
          this.errorFactory = t;
        }
        call(t, e) {
          return e.subscribe(new ac(t, this.errorFactory));
        }
      }
      class ac extends f {
        constructor(t, e) {
          super(t), (this.errorFactory = e), (this.hasValue = !1);
        }
        _next(t) {
          (this.hasValue = !0), this.destination.next(t);
        }
        _complete() {
          if (this.hasValue) return this.destination.complete();
          {
            let e;
            try {
              e = this.errorFactory();
            } catch (t) {
              e = t;
            }
            this.destination.error(e);
          }
        }
      }
      function lc() {
        return new Yu();
      }
      function uc(t = null) {
        return (e) => e.lift(new cc(t));
      }
      class cc {
        constructor(t) {
          this.defaultValue = t;
        }
        call(t, e) {
          return e.subscribe(new hc(t, this.defaultValue));
        }
      }
      class hc extends f {
        constructor(t, e) {
          super(t), (this.defaultValue = e), (this.isEmpty = !0);
        }
        _next(t) {
          (this.isEmpty = !1), this.destination.next(t);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete();
        }
      }
      function dc(t, e) {
        const n = arguments.length >= 2;
        return (r) =>
          r.pipe(
            t ? Nl((e, n) => t(e, n, r)) : B,
            nc(1),
            n ? uc(e) : ic(() => new Yu())
          );
      }
      function pc(t) {
        return function (e) {
          const n = new fc(t),
            r = e.lift(n);
          return (n.caught = r);
        };
      }
      class fc {
        constructor(t) {
          this.selector = t;
        }
        call(t, e) {
          return e.subscribe(new mc(t, this.selector, this.caught));
        }
      }
      class mc extends F {
        constructor(t, e, n) {
          super(t), (this.selector = e), (this.caught = n);
        }
        error(t) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(t, this.caught);
            } catch (e) {
              return void super.error(e);
            }
            this._unsubscribeAndRecycle();
            const r = new A(this, void 0, void 0);
            this.add(r);
            const s = j(this, n, void 0, void 0, r);
            s !== r && this.add(s);
          }
        }
      }
      function gc(t, e) {
        const n = arguments.length >= 2;
        return (r) =>
          r.pipe(
            t ? Nl((e, n) => t(e, n, r)) : B,
            ku(1),
            n ? uc(e) : ic(() => new Yu())
          );
      }
      class yc {
        constructor(t, e, n) {
          (this.predicate = t), (this.thisArg = e), (this.source = n);
        }
        call(t, e) {
          return e.subscribe(
            new _c(t, this.predicate, this.thisArg, this.source)
          );
        }
      }
      class _c extends f {
        constructor(t, e, n, r) {
          super(t),
            (this.predicate = e),
            (this.thisArg = n),
            (this.source = r),
            (this.index = 0),
            (this.thisArg = n || this);
        }
        notifyComplete(t) {
          this.destination.next(t), this.destination.complete();
        }
        _next(t) {
          let e = !1;
          try {
            e = this.predicate.call(this.thisArg, t, this.index++, this.source);
          } catch (n) {
            return void this.destination.error(n);
          }
          e || this.notifyComplete(!1);
        }
        _complete() {
          this.notifyComplete(!0);
        }
      }
      function vc(t, e) {
        let n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new wc(t, e, n));
          }
        );
      }
      class wc {
        constructor(t, e, n = !1) {
          (this.accumulator = t), (this.seed = e), (this.hasSeed = n);
        }
        call(t, e) {
          return e.subscribe(
            new bc(t, this.accumulator, this.seed, this.hasSeed)
          );
        }
      }
      class bc extends f {
        constructor(t, e, n, r) {
          super(t),
            (this.accumulator = e),
            (this._seed = n),
            (this.hasSeed = r),
            (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(t) {
          (this.hasSeed = !0), (this._seed = t);
        }
        _next(t) {
          if (this.hasSeed) return this._tryNext(t);
          (this.seed = t), this.destination.next(t);
        }
        _tryNext(t) {
          const e = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, t, e);
          } catch (r) {
            this.destination.error(r);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      class Sc {
        constructor(t) {
          this.callback = t;
        }
        call(t, e) {
          return e.subscribe(new Cc(t, this.callback));
        }
      }
      class Cc extends f {
        constructor(t, e) {
          super(t), this.add(new h(e));
        }
      }
      class Ec {
        constructor(t, e) {
          (this.id = t), (this.url = e);
        }
      }
      class Tc extends Ec {
        constructor(t, e, n = "imperative", r = null) {
          super(t, e), (this.navigationTrigger = n), (this.restoredState = r);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class xc extends Ec {
        constructor(t, e, n) {
          super(t, e), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class kc extends Ec {
        constructor(t, e, n) {
          super(t, e), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Ac extends Ec {
        constructor(t, e, n) {
          super(t, e), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Pc extends Ec {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Oc extends Ec {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Ic extends Ec {
        constructor(t, e, n, r, s) {
          super(t, e),
            (this.urlAfterRedirects = n),
            (this.state = r),
            (this.shouldActivate = s);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Rc extends Ec {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Nc extends Ec {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Dc {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class jc {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Fc {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Lc {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Uc {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Vc {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Mc {
        constructor(t, e, n) {
          (this.routerEvent = t), (this.position = e), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      let $c = (() => {
        class t {}
        return (
          (t.??fac = function (e) {
            return new (e || t)();
          }),
          (t.??cmp = ue({
            type: t,
            selectors: [["ng-component"]],
            decls: 1,
            vars: 0,
            template: function (t, e) {
              1 & t && hi(0, "router-outlet");
            },
            directives: function () {
              return [Bd];
            },
            encapsulation: 2,
          })),
          t
        );
      })();
      class Hc {
        constructor(t) {
          this.params = t || {};
        }
        has(t) {
          return this.params.hasOwnProperty(t);
        }
        get(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e[0] : e;
          }
          return null;
        }
        getAll(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e : [e];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function qc(t) {
        return new Hc(t);
      }
      function zc(t) {
        const e = Error("NavigationCancelingError: " + t);
        return (e.ngNavigationCancelingError = !0), e;
      }
      function Bc(t, e, n) {
        const r = n.path.split("/");
        if (r.length > t.length) return null;
        if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length))
          return null;
        const s = {};
        for (let i = 0; i < r.length; i++) {
          const e = r[i],
            n = t[i];
          if (e.startsWith(":")) s[e.substring(1)] = n;
          else if (e !== n.path) return null;
        }
        return { consumed: t.slice(0, r.length), posParams: s };
      }
      class Qc {
        constructor(t, e) {
          (this.routes = t), (this.module = e);
        }
      }
      function Wc(t, e = "") {
        for (let n = 0; n < t.length; n++) {
          const r = t[n];
          Kc(r, Zc(e, r));
        }
      }
      function Kc(t, e) {
        if (!t)
          throw new Error(
            `\n      Invalid configuration of route '${e}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
          );
        if (Array.isArray(t))
          throw new Error(
            `Invalid configuration of route '${e}': Array cannot be specified`
          );
        if (
          !t.component &&
          !t.children &&
          !t.loadChildren &&
          t.outlet &&
          "primary" !== t.outlet
        )
          throw new Error(
            `Invalid configuration of route '${e}': a componentless route without children or loadChildren cannot have a named outlet set`
          );
        if (t.redirectTo && t.children)
          throw new Error(
            `Invalid configuration of route '${e}': redirectTo and children cannot be used together`
          );
        if (t.redirectTo && t.loadChildren)
          throw new Error(
            `Invalid configuration of route '${e}': redirectTo and loadChildren cannot be used together`
          );
        if (t.children && t.loadChildren)
          throw new Error(
            `Invalid configuration of route '${e}': children and loadChildren cannot be used together`
          );
        if (t.redirectTo && t.component)
          throw new Error(
            `Invalid configuration of route '${e}': redirectTo and component cannot be used together`
          );
        if (t.path && t.matcher)
          throw new Error(
            `Invalid configuration of route '${e}': path and matcher cannot be used together`
          );
        if (
          void 0 === t.redirectTo &&
          !t.component &&
          !t.children &&
          !t.loadChildren
        )
          throw new Error(
            `Invalid configuration of route '${e}'. One of the following must be provided: component, redirectTo, children or loadChildren`
          );
        if (void 0 === t.path && void 0 === t.matcher)
          throw new Error(
            `Invalid configuration of route '${e}': routes must have either a path or a matcher specified`
          );
        if ("string" == typeof t.path && "/" === t.path.charAt(0))
          throw new Error(
            `Invalid configuration of route '${e}': path cannot start with a slash`
          );
        if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch)
          throw new Error(
            `Invalid configuration of route '{path: "${e}", redirectTo: "${t.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
          );
        if (
          void 0 !== t.pathMatch &&
          "full" !== t.pathMatch &&
          "prefix" !== t.pathMatch
        )
          throw new Error(
            `Invalid configuration of route '${e}': pathMatch can only be set to 'prefix' or 'full'`
          );
        t.children && Wc(t.children, e);
      }
      function Zc(t, e) {
        return e
          ? t || e.path
            ? t && !e.path
              ? `${t}/`
              : !t && e.path
              ? e.path
              : `${t}/${e.path}`
            : ""
          : t;
      }
      function Gc(t) {
        const e = t.children && t.children.map(Gc),
          n = e
            ? Object.assign(Object.assign({}, t), { children: e })
            : Object.assign({}, t);
        return (
          !n.component &&
            (e || n.loadChildren) &&
            n.outlet &&
            "primary" !== n.outlet &&
            (n.component = $c),
          n
        );
      }
      function Jc(t, e) {
        const n = Object.keys(t),
          r = Object.keys(e);
        if (!n || !r || n.length != r.length) return !1;
        let s;
        for (let i = 0; i < n.length; i++)
          if (((s = n[i]), !Yc(t[s], e[s]))) return !1;
        return !0;
      }
      function Yc(t, e) {
        return Array.isArray(t) && Array.isArray(e)
          ? t.length == e.length && t.every((t) => e.indexOf(t) > -1)
          : t === e;
      }
      function Xc(t) {
        return Array.prototype.concat.apply([], t);
      }
      function th(t) {
        return t.length > 0 ? t[t.length - 1] : null;
      }
      function eh(t, e) {
        for (const n in t) t.hasOwnProperty(n) && e(t[n], n);
      }
      function nh(t) {
        return pi(t) ? t : di(t) ? $(Promise.resolve(t)) : Il(t);
      }
      function rh(t, e, n) {
        return n
          ? (function (t, e) {
              return Jc(t, e);
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                if (!ah(e.segments, n.segments)) return !1;
                if (e.numberOfChildren !== n.numberOfChildren) return !1;
                for (const r in n.children) {
                  if (!e.children[r]) return !1;
                  if (!t(e.children[r], n.children[r])) return !1;
                }
                return !0;
              })(t.root, e.root)
          : (function (t, e) {
              return (
                Object.keys(e).length <= Object.keys(t).length &&
                Object.keys(e).every((n) => Yc(t[n], e[n]))
              );
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                return (function e(n, r, s) {
                  if (n.segments.length > s.length)
                    return (
                      !!ah(n.segments.slice(0, s.length), s) && !r.hasChildren()
                    );
                  if (n.segments.length === s.length) {
                    if (!ah(n.segments, s)) return !1;
                    for (const e in r.children) {
                      if (!n.children[e]) return !1;
                      if (!t(n.children[e], r.children[e])) return !1;
                    }
                    return !0;
                  }
                  {
                    const t = s.slice(0, n.segments.length),
                      i = s.slice(n.segments.length);
                    return (
                      !!ah(n.segments, t) &&
                      !!n.children.primary &&
                      e(n.children.primary, r, i)
                    );
                  }
                })(e, n, n.segments);
              })(t.root, e.root);
      }
      class sh {
        constructor(t, e, n) {
          (this.root = t), (this.queryParams = e), (this.fragment = n);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = qc(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return hh.serialize(this);
        }
      }
      class ih {
        constructor(t, e) {
          (this.segments = t),
            (this.children = e),
            (this.parent = null),
            eh(e, (t, e) => (t.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return dh(this);
        }
      }
      class oh {
        constructor(t, e) {
          (this.path = t), (this.parameters = e);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = qc(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return _h(this);
        }
      }
      function ah(t, e) {
        return t.length === e.length && t.every((t, n) => t.path === e[n].path);
      }
      function lh(t, e) {
        let n = [];
        return (
          eh(t.children, (t, r) => {
            "primary" === r && (n = n.concat(e(t, r)));
          }),
          eh(t.children, (t, r) => {
            "primary" !== r && (n = n.concat(e(t, r)));
          }),
          n
        );
      }
      class uh {}
      class ch {
        parse(t) {
          const e = new Ch(t);
          return new sh(
            e.parseRootSegment(),
            e.parseQueryParams(),
            e.parseFragment()
          );
        }
        serialize(t) {
          var e;
          return `${`/${(function t(e, n) {
            if (!e.hasChildren()) return dh(e);
            if (n) {
              const n = e.children.primary ? t(e.children.primary, !1) : "",
                r = [];
              return (
                eh(e.children, (e, n) => {
                  "primary" !== n && r.push(`${n}:${t(e, !1)}`);
                }),
                r.length > 0 ? `${n}(${r.join("//")})` : n
              );
            }
            {
              const n = lh(e, (n, r) =>
                "primary" === r
                  ? [t(e.children.primary, !1)]
                  : [`${r}:${t(n, !1)}`]
              );
              return `${dh(e)}/(${n.join("//")})`;
            }
          })(t.root, !0)}`}${(function (t) {
            const e = Object.keys(t).map((e) => {
              const n = t[e];
              return Array.isArray(n)
                ? n.map((t) => `${fh(e)}=${fh(t)}`).join("&")
                : `${fh(e)}=${fh(n)}`;
            });
            return e.length ? `?${e.join("&")}` : "";
          })(t.queryParams)}${
            "string" == typeof t.fragment
              ? `#${((e = t.fragment), encodeURI(e))}`
              : ""
          }`;
        }
      }
      const hh = new ch();
      function dh(t) {
        return t.segments.map((t) => _h(t)).join("/");
      }
      function ph(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function fh(t) {
        return ph(t).replace(/%3B/gi, ";");
      }
      function mh(t) {
        return ph(t)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function gh(t) {
        return decodeURIComponent(t);
      }
      function yh(t) {
        return gh(t.replace(/\+/g, "%20"));
      }
      function _h(t) {
        return `${mh(t.path)}${
          ((e = t.parameters),
          Object.keys(e)
            .map((t) => `;${mh(t)}=${mh(e[t])}`)
            .join(""))
        }`;
        var e;
      }
      const vh = /^[^\/()?;=#]+/;
      function wh(t) {
        const e = t.match(vh);
        return e ? e[0] : "";
      }
      const bh = /^[^=?&#]+/,
        Sh = /^[^?&#]+/;
      class Ch {
        constructor(t) {
          (this.url = t), (this.remaining = t);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new ih([], {})
              : new ih([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const t = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(t);
            } while (this.consumeOptional("&"));
          return t;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const t = [];
          for (
            this.peekStartsWith("(") || t.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), t.push(this.parseSegment());
          let e = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (e = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith("(") && (n = this.parseParens(!1)),
            (t.length > 0 || Object.keys(e).length > 0) &&
              (n.primary = new ih(t, e)),
            n
          );
        }
        parseSegment() {
          const t = wh(this.remaining);
          if ("" === t && this.peekStartsWith(";"))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(t), new oh(gh(t), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(";"); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const e = wh(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = "";
          if (this.consumeOptional("=")) {
            const t = wh(this.remaining);
            t && ((n = t), this.capture(n));
          }
          t[gh(e)] = gh(n);
        }
        parseQueryParam(t) {
          const e = (function (t) {
            const e = t.match(bh);
            return e ? e[0] : "";
          })(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = "";
          if (this.consumeOptional("=")) {
            const t = (function (t) {
              const e = t.match(Sh);
              return e ? e[0] : "";
            })(this.remaining);
            t && ((n = t), this.capture(n));
          }
          const r = yh(e),
            s = yh(n);
          if (t.hasOwnProperty(r)) {
            let e = t[r];
            Array.isArray(e) || ((e = [e]), (t[r] = e)), e.push(s);
          } else t[r] = s;
        }
        parseParens(t) {
          const e = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const n = wh(this.remaining),
              r = this.remaining[n.length];
            if ("/" !== r && ")" !== r && ";" !== r)
              throw new Error(`Cannot parse url '${this.url}'`);
            let s = void 0;
            n.indexOf(":") > -1
              ? ((s = n.substr(0, n.indexOf(":"))),
                this.capture(s),
                this.capture(":"))
              : t && (s = "primary");
            const i = this.parseChildren();
            (e[s] = 1 === Object.keys(i).length ? i.primary : new ih([], i)),
              this.consumeOptional("//");
          }
          return e;
        }
        peekStartsWith(t) {
          return this.remaining.startsWith(t);
        }
        consumeOptional(t) {
          return (
            !!this.peekStartsWith(t) &&
            ((this.remaining = this.remaining.substring(t.length)), !0)
          );
        }
        capture(t) {
          if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`);
        }
      }
      class Eh {
        constructor(t) {
          this._root = t;
        }
        get root() {
          return this._root.value;
        }
        parent(t) {
          const e = this.pathFromRoot(t);
          return e.length > 1 ? e[e.length - 2] : null;
        }
        children(t) {
          const e = Th(t, this._root);
          return e ? e.children.map((t) => t.value) : [];
        }
        firstChild(t) {
          const e = Th(t, this._root);
          return e && e.children.length > 0 ? e.children[0].value : null;
        }
        siblings(t) {
          const e = xh(t, this._root);
          return e.length < 2
            ? []
            : e[e.length - 2].children
                .map((t) => t.value)
                .filter((e) => e !== t);
        }
        pathFromRoot(t) {
          return xh(t, this._root).map((t) => t.value);
        }
      }
      function Th(t, e) {
        if (t === e.value) return e;
        for (const n of e.children) {
          const e = Th(t, n);
          if (e) return e;
        }
        return null;
      }
      function xh(t, e) {
        if (t === e.value) return [e];
        for (const n of e.children) {
          const r = xh(t, n);
          if (r.length) return r.unshift(e), r;
        }
        return [];
      }
      class kh {
        constructor(t, e) {
          (this.value = t), (this.children = e);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Ah(t) {
        const e = {};
        return t && t.children.forEach((t) => (e[t.value.outlet] = t)), e;
      }
      class Ph extends Eh {
        constructor(t, e) {
          super(t), (this.snapshot = e), jh(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function Oh(t, e) {
        const n = (function (t, e) {
            const n = new Nh(
              [],
              {},
              {},
              "",
              {},
              "primary",
              e,
              null,
              t.root,
              -1,
              {}
            );
            return new Dh("", new kh(n, []));
          })(t, e),
          r = new Ju([new oh("", {})]),
          s = new Ju({}),
          i = new Ju({}),
          o = new Ju({}),
          a = new Ju(""),
          l = new Ih(r, s, o, a, i, "primary", e, n.root);
        return (l.snapshot = n.root), new Ph(new kh(l, []), n);
      }
      class Ih {
        constructor(t, e, n, r, s, i, o, a) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this._futureSnapshot = a);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe(L((t) => qc(t)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(L((t) => qc(t)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function Rh(t, e = "emptyOnly") {
        const n = t.pathFromRoot;
        let r = 0;
        if ("always" !== e)
          for (r = n.length - 1; r >= 1; ) {
            const t = n[r],
              e = n[r - 1];
            if (t.routeConfig && "" === t.routeConfig.path) r--;
            else {
              if (e.component) break;
              r--;
            }
          }
        return (function (t) {
          return t.reduce(
            (t, e) => ({
              params: Object.assign(Object.assign({}, t.params), e.params),
              data: Object.assign(Object.assign({}, t.data), e.data),
              resolve: Object.assign(
                Object.assign({}, t.resolve),
                e._resolvedData
              ),
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      class Nh {
        constructor(t, e, n, r, s, i, o, a, l, u, c) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this.routeConfig = a),
            (this._urlSegment = l),
            (this._lastPathIndex = u),
            (this._resolve = c);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = qc(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = qc(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((t) => t.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class Dh extends Eh {
        constructor(t, e) {
          super(e), (this.url = t), jh(this, e);
        }
        toString() {
          return Fh(this._root);
        }
      }
      function jh(t, e) {
        (e.value._routerState = t), e.children.forEach((e) => jh(t, e));
      }
      function Fh(t) {
        const e =
          t.children.length > 0 ? ` { ${t.children.map(Fh).join(", ")} } ` : "";
        return `${t.value}${e}`;
      }
      function Lh(t) {
        if (t.snapshot) {
          const e = t.snapshot,
            n = t._futureSnapshot;
          (t.snapshot = n),
            Jc(e.queryParams, n.queryParams) ||
              t.queryParams.next(n.queryParams),
            e.fragment !== n.fragment && t.fragment.next(n.fragment),
            Jc(e.params, n.params) || t.params.next(n.params),
            (function (t, e) {
              if (t.length !== e.length) return !1;
              for (let n = 0; n < t.length; ++n) if (!Jc(t[n], e[n])) return !1;
              return !0;
            })(e.url, n.url) || t.url.next(n.url),
            Jc(e.data, n.data) || t.data.next(n.data);
        } else
          (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
      }
      function Uh(t, e) {
        var n, r;
        return (
          Jc(t.params, e.params) &&
          ah((n = t.url), (r = e.url)) &&
          n.every((t, e) => Jc(t.parameters, r[e].parameters)) &&
          !(!t.parent != !e.parent) &&
          (!t.parent || Uh(t.parent, e.parent))
        );
      }
      function Vh(t) {
        return (
          "object" == typeof t && null != t && !t.outlets && !t.segmentPath
        );
      }
      function Mh(t, e, n, r, s) {
        let i = {};
        return (
          r &&
            eh(r, (t, e) => {
              i[e] = Array.isArray(t) ? t.map((t) => `${t}`) : `${t}`;
            }),
          new sh(
            n.root === t
              ? e
              : (function t(e, n, r) {
                  const s = {};
                  return (
                    eh(e.children, (e, i) => {
                      s[i] = e === n ? r : t(e, n, r);
                    }),
                    new ih(e.segments, s)
                  );
                })(n.root, t, e),
            i,
            s
          )
        );
      }
      class $h {
        constructor(t, e, n) {
          if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = e),
            (this.commands = n),
            t && n.length > 0 && Vh(n[0]))
          )
            throw new Error("Root segment cannot have matrix parameters");
          const r = n.find(
            (t) => "object" == typeof t && null != t && t.outlets
          );
          if (r && r !== th(n))
            throw new Error("{outlets:{}} has to be the last command");
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class Hh {
        constructor(t, e, n) {
          (this.segmentGroup = t), (this.processChildren = e), (this.index = n);
        }
      }
      function qh(t) {
        return "object" == typeof t && null != t && t.outlets
          ? t.outlets.primary
          : `${t}`;
      }
      function zh(t, e, n) {
        if (
          (t || (t = new ih([], {})),
          0 === t.segments.length && t.hasChildren())
        )
          return Bh(t, e, n);
        const r = (function (t, e, n) {
            let r = 0,
              s = e;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; s < t.segments.length; ) {
              if (r >= n.length) return i;
              const e = t.segments[s],
                o = qh(n[r]),
                a = r < n.length - 1 ? n[r + 1] : null;
              if (s > 0 && void 0 === o) break;
              if (o && a && "object" == typeof a && void 0 === a.outlets) {
                if (!Zh(o, a, e)) return i;
                r += 2;
              } else {
                if (!Zh(o, {}, e)) return i;
                r++;
              }
              s++;
            }
            return { match: !0, pathIndex: s, commandIndex: r };
          })(t, e, n),
          s = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < t.segments.length) {
          const e = new ih(t.segments.slice(0, r.pathIndex), {});
          return (
            (e.children.primary = new ih(
              t.segments.slice(r.pathIndex),
              t.children
            )),
            Bh(e, 0, s)
          );
        }
        return r.match && 0 === s.length
          ? new ih(t.segments, {})
          : r.match && !t.hasChildren()
          ? Qh(t, e, n)
          : r.match
          ? Bh(t, 0, s)
          : Qh(t, e, n);
      }
      function Bh(t, e, n) {
        if (0 === n.length) return new ih(t.segments, {});
        {
          const r = (function (t) {
              return "object" != typeof t[0]
                ? { primary: t }
                : void 0 === t[0].outlets
                ? { primary: t }
                : t[0].outlets;
            })(n),
            s = {};
          return (
            eh(r, (n, r) => {
              null !== n && (s[r] = zh(t.children[r], e, n));
            }),
            eh(t.children, (t, e) => {
              void 0 === r[e] && (s[e] = t);
            }),
            new ih(t.segments, s)
          );
        }
      }
      function Qh(t, e, n) {
        const r = t.segments.slice(0, e);
        let s = 0;
        for (; s < n.length; ) {
          if ("object" == typeof n[s] && void 0 !== n[s].outlets) {
            const t = Wh(n[s].outlets);
            return new ih(r, t);
          }
          if (0 === s && Vh(n[0])) {
            r.push(new oh(t.segments[e].path, n[0])), s++;
            continue;
          }
          const i = qh(n[s]),
            o = s < n.length - 1 ? n[s + 1] : null;
          i && o && Vh(o)
            ? (r.push(new oh(i, Kh(o))), (s += 2))
            : (r.push(new oh(i, {})), s++);
        }
        return new ih(r, {});
      }
      function Wh(t) {
        const e = {};
        return (
          eh(t, (t, n) => {
            null !== t && (e[n] = Qh(new ih([], {}), 0, t));
          }),
          e
        );
      }
      function Kh(t) {
        const e = {};
        return eh(t, (t, n) => (e[n] = `${t}`)), e;
      }
      function Zh(t, e, n) {
        return t == n.path && Jc(e, n.parameters);
      }
      class Gh {
        constructor(t, e, n, r) {
          (this.routeReuseStrategy = t),
            (this.futureState = e),
            (this.currState = n),
            (this.forwardEvent = r);
        }
        activate(t) {
          const e = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(e, n, t),
            Lh(this.futureState.root),
            this.activateChildRoutes(e, n, t);
        }
        deactivateChildRoutes(t, e, n) {
          const r = Ah(e);
          t.children.forEach((t) => {
            const e = t.value.outlet;
            this.deactivateRoutes(t, r[e], n), delete r[e];
          }),
            eh(r, (t, e) => {
              this.deactivateRouteAndItsChildren(t, n);
            });
        }
        deactivateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if (r === s)
            if (r.component) {
              const s = n.getContext(r.outlet);
              s && this.deactivateChildRoutes(t, e, s.children);
            } else this.deactivateChildRoutes(t, e, n);
          else s && this.deactivateRouteAndItsChildren(e, n);
        }
        deactivateRouteAndItsChildren(t, e) {
          this.routeReuseStrategy.shouldDetach(t.value.snapshot)
            ? this.detachAndStoreRouteSubtree(t, e)
            : this.deactivateRouteAndOutlet(t, e);
        }
        detachAndStoreRouteSubtree(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n && n.outlet) {
            const e = n.outlet.detach(),
              r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, {
              componentRef: e,
              route: t,
              contexts: r,
            });
          }
        }
        deactivateRouteAndOutlet(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n) {
            const r = Ah(t),
              s = t.value.component ? n.children : e;
            eh(r, (t, e) => this.deactivateRouteAndItsChildren(t, s)),
              n.outlet &&
                (n.outlet.deactivate(), n.children.onOutletDeactivated());
          }
        }
        activateChildRoutes(t, e, n) {
          const r = Ah(e);
          t.children.forEach((t) => {
            this.activateRoutes(t, r[t.value.outlet], n),
              this.forwardEvent(new Vc(t.value.snapshot));
          }),
            t.children.length && this.forwardEvent(new Lc(t.value.snapshot));
        }
        activateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if ((Lh(r), r === s))
            if (r.component) {
              const s = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(t, e, s.children);
            } else this.activateChildRoutes(t, e, n);
          else if (r.component) {
            const e = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const t = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                e.children.onOutletReAttached(t.contexts),
                (e.attachRef = t.componentRef),
                (e.route = t.route.value),
                e.outlet && e.outlet.attach(t.componentRef, t.route.value),
                Jh(t.route);
            } else {
              const n = (function (t) {
                  for (let e = t.parent; e; e = e.parent) {
                    const t = e.routeConfig;
                    if (t && t._loadedConfig) return t._loadedConfig;
                    if (t && t.component) return null;
                  }
                  return null;
                })(r.snapshot),
                s = n ? n.module.componentFactoryResolver : null;
              (e.attachRef = null),
                (e.route = r),
                (e.resolver = s),
                e.outlet && e.outlet.activateWith(r, s),
                this.activateChildRoutes(t, null, e.children);
            }
          } else this.activateChildRoutes(t, null, n);
        }
      }
      function Jh(t) {
        Lh(t.value), t.children.forEach(Jh);
      }
      function Yh(t) {
        return "function" == typeof t;
      }
      function Xh(t) {
        return t instanceof sh;
      }
      class td {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class ed {
        constructor(t) {
          this.urlTree = t;
        }
      }
      function nd(t) {
        return new w((e) => e.error(new td(t)));
      }
      function rd(t) {
        return new w((e) => e.error(new ed(t)));
      }
      function sd(t) {
        return new w((e) =>
          e.error(
            new Error(
              `Only absolute redirects can have named outlets. redirectTo: '${t}'`
            )
          )
        );
      }
      class id {
        constructor(t, e, n, r, s) {
          (this.configLoader = e),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = s),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(Yt));
        }
        apply() {
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            this.urlTree.root,
            "primary"
          )
            .pipe(
              L((t) =>
                this.createUrlTree(
                  t,
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              pc((t) => {
                if (t instanceof ed)
                  return (this.allowRedirects = !1), this.match(t.urlTree);
                if (t instanceof td) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        match(t) {
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            t.root,
            "primary"
          )
            .pipe(L((e) => this.createUrlTree(e, t.queryParams, t.fragment)))
            .pipe(
              pc((t) => {
                if (t instanceof td) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        noMatchError(t) {
          return new Error(
            `Cannot match any routes. URL Segment: '${t.segmentGroup}'`
          );
        }
        createUrlTree(t, e, n) {
          const r = t.segments.length > 0 ? new ih([], { primary: t }) : t;
          return new sh(r, e, n);
        }
        expandSegmentGroup(t, e, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(t, e, n).pipe(L((t) => new ih([], t)))
            : this.expandSegment(t, n, e, n.segments, r, !0);
        }
        expandChildren(t, e, n) {
          return (function (t, e) {
            if (0 === Object.keys(t).length) return Il({});
            const n = [],
              r = [],
              s = {};
            return (
              eh(t, (t, i) => {
                const o = e(i, t).pipe(L((t) => (s[i] = t)));
                "primary" === i ? n.push(o) : r.push(o);
              }),
              Il.apply(null, n.concat(r)).pipe(
                wu(),
                dc(),
                L(() => s)
              )
            );
          })(n.children, (n, r) => this.expandSegmentGroup(t, e, r, n));
        }
        expandSegment(t, e, n, r, s, i) {
          return Il(...n).pipe(
            L((o) =>
              this.expandSegmentAgainstRoute(t, e, n, o, r, s, i).pipe(
                pc((t) => {
                  if (t instanceof td) return Il(null);
                  throw t;
                })
              )
            ),
            wu(),
            gc((t) => !!t),
            pc((t, n) => {
              if (t instanceof Yu || "EmptyError" === t.name) {
                if (this.noLeftoversInUrl(e, r, s)) return Il(new ih([], {}));
                throw new td(e);
              }
              throw t;
            })
          );
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n];
        }
        expandSegmentAgainstRoute(t, e, n, r, s, i, o) {
          return ud(r) !== i
            ? nd(e)
            : void 0 === r.redirectTo
            ? this.matchSegmentAgainstRoute(t, e, r, s)
            : o && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i)
            : nd(e);
        }
        expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          return "**" === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                t,
                e,
                n,
                r,
                s,
                i
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, r) {
          const s = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith("/")
            ? rd(s)
            : this.lineralizeSegments(n, s).pipe(
                H((n) => {
                  const s = new ih(n, {});
                  return this.expandSegment(t, s, e, n, r, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          const {
            matched: o,
            consumedSegments: a,
            lastChild: l,
            positionalParamSegments: u,
          } = od(e, r, s);
          if (!o) return nd(e);
          const c = this.applyRedirectCommands(a, r.redirectTo, u);
          return r.redirectTo.startsWith("/")
            ? rd(c)
            : this.lineralizeSegments(r, c).pipe(
                H((r) =>
                  this.expandSegment(t, e, n, r.concat(s.slice(l)), i, !1)
                )
              );
        }
        matchSegmentAgainstRoute(t, e, n, r) {
          if ("**" === n.path)
            return n.loadChildren
              ? this.configLoader
                  .load(t.injector, n)
                  .pipe(L((t) => ((n._loadedConfig = t), new ih(r, {}))))
              : Il(new ih(r, {}));
          const { matched: s, consumedSegments: i, lastChild: o } = od(e, n, r);
          if (!s) return nd(e);
          const a = r.slice(o);
          return this.getChildConfig(t, n, r).pipe(
            H((t) => {
              const n = t.module,
                r = t.routes,
                { segmentGroup: s, slicedSegments: o } = (function (
                  t,
                  e,
                  n,
                  r
                ) {
                  return n.length > 0 &&
                    (function (t, e, n) {
                      return n.some((n) => ld(t, e, n) && "primary" !== ud(n));
                    })(t, n, r)
                    ? {
                        segmentGroup: ad(
                          new ih(
                            e,
                            (function (t, e) {
                              const n = {};
                              n.primary = e;
                              for (const r of t)
                                "" === r.path &&
                                  "primary" !== ud(r) &&
                                  (n[ud(r)] = new ih([], {}));
                              return n;
                            })(r, new ih(n, t.children))
                          )
                        ),
                        slicedSegments: [],
                      }
                    : 0 === n.length &&
                      (function (t, e, n) {
                        return n.some((n) => ld(t, e, n));
                      })(t, n, r)
                    ? {
                        segmentGroup: ad(
                          new ih(
                            t.segments,
                            (function (t, e, n, r) {
                              const s = {};
                              for (const i of n)
                                ld(t, e, i) &&
                                  !r[ud(i)] &&
                                  (s[ud(i)] = new ih([], {}));
                              return Object.assign(Object.assign({}, r), s);
                            })(t, n, r, t.children)
                          )
                        ),
                        slicedSegments: n,
                      }
                    : { segmentGroup: t, slicedSegments: n };
                })(e, i, a, r);
              return 0 === o.length && s.hasChildren()
                ? this.expandChildren(n, r, s).pipe(L((t) => new ih(i, t)))
                : 0 === r.length && 0 === o.length
                ? Il(new ih(i, {}))
                : this.expandSegment(n, s, r, o, "primary", !0).pipe(
                    L((t) => new ih(i.concat(t.segments), t.children))
                  );
            })
          );
        }
        getChildConfig(t, e, n) {
          return e.children
            ? Il(new Qc(e.children, t))
            : e.loadChildren
            ? void 0 !== e._loadedConfig
              ? Il(e._loadedConfig)
              : (function (t, e, n) {
                  const r = e.canLoad;
                  return r && 0 !== r.length
                    ? $(r)
                        .pipe(
                          L((r) => {
                            const s = t.get(r);
                            let i;
                            if (
                              (function (t) {
                                return t && Yh(t.canLoad);
                              })(s)
                            )
                              i = s.canLoad(e, n);
                            else {
                              if (!Yh(s))
                                throw new Error("Invalid CanLoad guard");
                              i = s(e, n);
                            }
                            return nh(i);
                          })
                        )
                        .pipe(
                          wu(),
                          ((s = (t) => !0 === t),
                          (t) => t.lift(new yc(s, void 0, t)))
                        )
                    : Il(!0);
                  var s;
                })(t.injector, e, n).pipe(
                  H((n) =>
                    n
                      ? this.configLoader
                          .load(t.injector, e)
                          .pipe(L((t) => ((e._loadedConfig = t), t)))
                      : (function (t) {
                          return new w((e) =>
                            e.error(
                              zc(
                                `Cannot load children because the guard of the route "path: '${t.path}'" returned false`
                              )
                            )
                          );
                        })(e)
                  )
                )
            : Il(new Qc([], t));
        }
        lineralizeSegments(t, e) {
          let n = [],
            r = e.root;
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
              return Il(n);
            if (r.numberOfChildren > 1 || !r.children.primary)
              return sd(t.redirectTo);
            r = r.children.primary;
          }
        }
        applyRedirectCommands(t, e, n) {
          return this.applyRedirectCreatreUrlTree(
            e,
            this.urlSerializer.parse(e),
            t,
            n
          );
        }
        applyRedirectCreatreUrlTree(t, e, n, r) {
          const s = this.createSegmentGroup(t, e.root, n, r);
          return new sh(
            s,
            this.createQueryParams(e.queryParams, this.urlTree.queryParams),
            e.fragment
          );
        }
        createQueryParams(t, e) {
          const n = {};
          return (
            eh(t, (t, r) => {
              if ("string" == typeof t && t.startsWith(":")) {
                const s = t.substring(1);
                n[r] = e[s];
              } else n[r] = t;
            }),
            n
          );
        }
        createSegmentGroup(t, e, n, r) {
          const s = this.createSegments(t, e.segments, n, r);
          let i = {};
          return (
            eh(e.children, (e, s) => {
              i[s] = this.createSegmentGroup(t, e, n, r);
            }),
            new ih(s, i)
          );
        }
        createSegments(t, e, n, r) {
          return e.map((e) =>
            e.path.startsWith(":")
              ? this.findPosParam(t, e, r)
              : this.findOrReturn(e, n)
          );
        }
        findPosParam(t, e, n) {
          const r = n[e.path.substring(1)];
          if (!r)
            throw new Error(
              `Cannot redirect to '${t}'. Cannot find '${e.path}'.`
            );
          return r;
        }
        findOrReturn(t, e) {
          let n = 0;
          for (const r of e) {
            if (r.path === t.path) return e.splice(n), r;
            n++;
          }
          return t;
        }
      }
      function od(t, e, n) {
        if ("" === e.path)
          return "full" === e.pathMatch && (t.hasChildren() || n.length > 0)
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
        const r = (e.matcher || Bc)(n, t, e);
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
      function ad(t) {
        if (1 === t.numberOfChildren && t.children.primary) {
          const e = t.children.primary;
          return new ih(t.segments.concat(e.segments), e.children);
        }
        return t;
      }
      function ld(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path &&
          void 0 !== n.redirectTo
        );
      }
      function ud(t) {
        return t.outlet || "primary";
      }
      class cd {
        constructor(t) {
          (this.path = t), (this.route = this.path[this.path.length - 1]);
        }
      }
      class hd {
        constructor(t, e) {
          (this.component = t), (this.route = e);
        }
      }
      function dd(t, e, n) {
        const r = t._root;
        return (function t(
          e,
          n,
          r,
          s,
          i = { canDeactivateChecks: [], canActivateChecks: [] }
        ) {
          const o = Ah(n);
          return (
            e.children.forEach((e) => {
              !(function (
                e,
                n,
                r,
                s,
                i = { canDeactivateChecks: [], canActivateChecks: [] }
              ) {
                const o = e.value,
                  a = n ? n.value : null,
                  l = r ? r.getContext(e.value.outlet) : null;
                if (a && o.routeConfig === a.routeConfig) {
                  const u = (function (t, e, n) {
                    if ("function" == typeof n) return n(t, e);
                    switch (n) {
                      case "pathParamsChange":
                        return !ah(t.url, e.url);
                      case "pathParamsOrQueryParamsChange":
                        return (
                          !ah(t.url, e.url) || !Jc(t.queryParams, e.queryParams)
                        );
                      case "always":
                        return !0;
                      case "paramsOrQueryParamsChange":
                        return !Uh(t, e) || !Jc(t.queryParams, e.queryParams);
                      case "paramsChange":
                      default:
                        return !Uh(t, e);
                    }
                  })(a, o, o.routeConfig.runGuardsAndResolvers);
                  u
                    ? i.canActivateChecks.push(new cd(s))
                    : ((o.data = a.data), (o._resolvedData = a._resolvedData)),
                    t(e, n, o.component ? (l ? l.children : null) : r, s, i),
                    u &&
                      i.canDeactivateChecks.push(
                        new hd((l && l.outlet && l.outlet.component) || null, a)
                      );
                } else
                  a && fd(n, l, i),
                    i.canActivateChecks.push(new cd(s)),
                    t(e, null, o.component ? (l ? l.children : null) : r, s, i);
              })(e, o[e.value.outlet], r, s.concat([e.value]), i),
                delete o[e.value.outlet];
            }),
            eh(o, (t, e) => fd(t, r.getContext(e), i)),
            i
          );
        })(r, e ? e._root : null, n, [r.value]);
      }
      function pd(t, e, n) {
        const r = (function (t) {
          if (!t) return null;
          for (let e = t.parent; e; e = e.parent) {
            const t = e.routeConfig;
            if (t && t._loadedConfig) return t._loadedConfig;
          }
          return null;
        })(e);
        return (r ? r.module.injector : n).get(t);
      }
      function fd(t, e, n) {
        const r = Ah(t),
          s = t.value;
        eh(r, (t, r) => {
          fd(t, s.component ? (e ? e.children.getContext(r) : null) : e, n);
        }),
          n.canDeactivateChecks.push(
            new hd(
              s.component && e && e.outlet && e.outlet.isActivated
                ? e.outlet.component
                : null,
              s
            )
          );
      }
      const md = Symbol("INITIAL_VALUE");
      function gd() {
        return Cu((t) =>
          (function (...t) {
            let e = null,
              n = null;
            return (
              k(t[t.length - 1]) && (n = t.pop()),
              "function" == typeof t[t.length - 1] && (e = t.pop()),
              1 === t.length && l(t[0]) && (t = t[0]),
              W(t, n).lift(new tc(e))
            );
          })(
            ...t.map((t) =>
              t.pipe(
                ku(1),
                (function (...t) {
                  const e = t[t.length - 1];
                  return k(e) ? (t.pop(), (n) => bu(t, n, e)) : (e) => bu(t, e);
                })(md)
              )
            )
          ).pipe(
            vc((t, e) => {
              let n = !1;
              return e.reduce((t, r, s) => {
                if (t !== md) return t;
                if ((r === md && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (s === e.length - 1 || Xh(r)) return r;
                }
                return t;
              }, t);
            }, md),
            Nl((t) => t !== md),
            L((t) => (Xh(t) ? t : !0 === t)),
            ku(1)
          )
        );
      }
      function yd(t, e) {
        return null !== t && e && e(new Uc(t)), Il(!0);
      }
      function _d(t, e) {
        return null !== t && e && e(new Fc(t)), Il(!0);
      }
      function vd(t, e, n) {
        const r = e.routeConfig ? e.routeConfig.canActivate : null;
        return r && 0 !== r.length
          ? Il(
              r.map((r) =>
                gu(() => {
                  const s = pd(r, e, n);
                  let i;
                  if (
                    (function (t) {
                      return t && Yh(t.canActivate);
                    })(s)
                  )
                    i = nh(s.canActivate(e, t));
                  else {
                    if (!Yh(s)) throw new Error("Invalid CanActivate guard");
                    i = nh(s(e, t));
                  }
                  return i.pipe(gc());
                })
              )
            ).pipe(gd())
          : Il(!0);
      }
      function wd(t, e, n) {
        const r = e[e.length - 1],
          s = e
            .slice(0, e.length - 1)
            .reverse()
            .map((t) =>
              (function (t) {
                const e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                return e && 0 !== e.length ? { node: t, guards: e } : null;
              })(t)
            )
            .filter((t) => null !== t)
            .map((e) =>
              gu(() =>
                Il(
                  e.guards.map((s) => {
                    const i = pd(s, e.node, n);
                    let o;
                    if (
                      (function (t) {
                        return t && Yh(t.canActivateChild);
                      })(i)
                    )
                      o = nh(i.canActivateChild(r, t));
                    else {
                      if (!Yh(i))
                        throw new Error("Invalid CanActivateChild guard");
                      o = nh(i(r, t));
                    }
                    return o.pipe(gc());
                  })
                ).pipe(gd())
              )
            );
        return Il(s).pipe(gd());
      }
      class bd {}
      class Sd {
        constructor(t, e, n, r, s, i) {
          (this.rootComponentType = t),
            (this.config = e),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = s),
            (this.relativeLinkResolution = i);
        }
        recognize() {
          try {
            const t = Td(
                this.urlTree.root,
                [],
                [],
                this.config,
                this.relativeLinkResolution
              ).segmentGroup,
              e = this.processSegmentGroup(this.config, t, "primary"),
              n = new Nh(
                [],
                Object.freeze({}),
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                {},
                "primary",
                this.rootComponentType,
                null,
                this.urlTree.root,
                -1,
                {}
              ),
              r = new kh(n, e),
              s = new Dh(this.url, r);
            return this.inheritParamsAndData(s._root), Il(s);
          } catch (t) {
            return new w((e) => e.error(t));
          }
        }
        inheritParamsAndData(t) {
          const e = t.value,
            n = Rh(e, this.paramsInheritanceStrategy);
          (e.params = Object.freeze(n.params)),
            (e.data = Object.freeze(n.data)),
            t.children.forEach((t) => this.inheritParamsAndData(t));
        }
        processSegmentGroup(t, e, n) {
          return 0 === e.segments.length && e.hasChildren()
            ? this.processChildren(t, e)
            : this.processSegment(t, e, e.segments, n);
        }
        processChildren(t, e) {
          const n = lh(e, (e, n) => this.processSegmentGroup(t, e, n));
          return (
            (function (t) {
              const e = {};
              t.forEach((t) => {
                const n = e[t.value.outlet];
                if (n) {
                  const e = n.url.map((t) => t.toString()).join("/"),
                    r = t.value.url.map((t) => t.toString()).join("/");
                  throw new Error(
                    `Two segments cannot have the same outlet name: '${e}' and '${r}'.`
                  );
                }
                e[t.value.outlet] = t.value;
              });
            })(n),
            n.sort((t, e) =>
              "primary" === t.value.outlet
                ? -1
                : "primary" === e.value.outlet
                ? 1
                : t.value.outlet.localeCompare(e.value.outlet)
            ),
            n
          );
        }
        processSegment(t, e, n, r) {
          for (const i of t)
            try {
              return this.processSegmentAgainstRoute(i, e, n, r);
            } catch (s) {
              if (!(s instanceof bd)) throw s;
            }
          if (this.noLeftoversInUrl(e, n, r)) return [];
          throw new bd();
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n];
        }
        processSegmentAgainstRoute(t, e, n, r) {
          if (t.redirectTo) throw new bd();
          if ((t.outlet || "primary") !== r) throw new bd();
          let s,
            i = [],
            o = [];
          if ("**" === t.path) {
            const i = n.length > 0 ? th(n).parameters : {};
            s = new Nh(
              n,
              i,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              Ad(t),
              r,
              t.component,
              t,
              Cd(e),
              Ed(e) + n.length,
              Pd(t)
            );
          } else {
            const a = (function (t, e, n) {
              if ("" === e.path) {
                if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0))
                  throw new bd();
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              const r = (e.matcher || Bc)(n, t, e);
              if (!r) throw new bd();
              const s = {};
              eh(r.posParams, (t, e) => {
                s[e] = t.path;
              });
              const i =
                r.consumed.length > 0
                  ? Object.assign(
                      Object.assign({}, s),
                      r.consumed[r.consumed.length - 1].parameters
                    )
                  : s;
              return {
                consumedSegments: r.consumed,
                lastChild: r.consumed.length,
                parameters: i,
              };
            })(e, t, n);
            (i = a.consumedSegments),
              (o = n.slice(a.lastChild)),
              (s = new Nh(
                i,
                a.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                Ad(t),
                r,
                t.component,
                t,
                Cd(e),
                Ed(e) + i.length,
                Pd(t)
              ));
          }
          const a = (function (t) {
              return t.children
                ? t.children
                : t.loadChildren
                ? t._loadedConfig.routes
                : [];
            })(t),
            { segmentGroup: l, slicedSegments: u } = Td(
              e,
              i,
              o,
              a,
              this.relativeLinkResolution
            );
          if (0 === u.length && l.hasChildren()) {
            const t = this.processChildren(a, l);
            return [new kh(s, t)];
          }
          if (0 === a.length && 0 === u.length) return [new kh(s, [])];
          const c = this.processSegment(a, l, u, "primary");
          return [new kh(s, c)];
        }
      }
      function Cd(t) {
        let e = t;
        for (; e._sourceSegment; ) e = e._sourceSegment;
        return e;
      }
      function Ed(t) {
        let e = t,
          n = e._segmentIndexShift ? e._segmentIndexShift : 0;
        for (; e._sourceSegment; )
          (e = e._sourceSegment),
            (n += e._segmentIndexShift ? e._segmentIndexShift : 0);
        return n - 1;
      }
      function Td(t, e, n, r, s) {
        if (
          n.length > 0 &&
          (function (t, e, n) {
            return n.some((n) => xd(t, e, n) && "primary" !== kd(n));
          })(t, n, r)
        ) {
          const s = new ih(
            e,
            (function (t, e, n, r) {
              const s = {};
              (s.primary = r),
                (r._sourceSegment = t),
                (r._segmentIndexShift = e.length);
              for (const i of n)
                if ("" === i.path && "primary" !== kd(i)) {
                  const n = new ih([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift = e.length),
                    (s[kd(i)] = n);
                }
              return s;
            })(t, e, r, new ih(n, t.children))
          );
          return (
            (s._sourceSegment = t),
            (s._segmentIndexShift = e.length),
            { segmentGroup: s, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function (t, e, n) {
            return n.some((n) => xd(t, e, n));
          })(t, n, r)
        ) {
          const i = new ih(
            t.segments,
            (function (t, e, n, r, s, i) {
              const o = {};
              for (const a of r)
                if (xd(t, n, a) && !s[kd(a)]) {
                  const n = new ih([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift =
                      "legacy" === i ? t.segments.length : e.length),
                    (o[kd(a)] = n);
                }
              return Object.assign(Object.assign({}, s), o);
            })(t, e, n, r, t.children, s)
          );
          return (
            (i._sourceSegment = t),
            (i._segmentIndexShift = e.length),
            { segmentGroup: i, slicedSegments: n }
          );
        }
        const i = new ih(t.segments, t.children);
        return (
          (i._sourceSegment = t),
          (i._segmentIndexShift = e.length),
          { segmentGroup: i, slicedSegments: n }
        );
      }
      function xd(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path &&
          void 0 === n.redirectTo
        );
      }
      function kd(t) {
        return t.outlet || "primary";
      }
      function Ad(t) {
        return t.data || {};
      }
      function Pd(t) {
        return t.resolve || {};
      }
      function Od(t, e, n, r) {
        const s = pd(t, e, r);
        return nh(s.resolve ? s.resolve(e, n) : s(e, n));
      }
      function Id(t) {
        return function (e) {
          return e.pipe(
            Cu((e) => {
              const n = t(e);
              return n ? $(n).pipe(L(() => e)) : $([e]);
            })
          );
        };
      }
      class Rd {
        shouldDetach(t) {
          return !1;
        }
        store(t, e) {}
        shouldAttach(t) {
          return !1;
        }
        retrieve(t) {
          return null;
        }
        shouldReuseRoute(t, e) {
          return t.routeConfig === e.routeConfig;
        }
      }
      const Nd = new Ut("ROUTES");
      class Dd {
        constructor(t, e, n, r) {
          (this.loader = t),
            (this.compiler = e),
            (this.onLoadStartListener = n),
            (this.onLoadEndListener = r);
        }
        load(t, e) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(e),
            this.loadModuleFactory(e.loadChildren).pipe(
              L((n) => {
                this.onLoadEndListener && this.onLoadEndListener(e);
                const r = n.create(t);
                return new Qc(Xc(r.injector.get(Nd)).map(Gc), r);
              })
            )
          );
        }
        loadModuleFactory(t) {
          return "string" == typeof t
            ? $(this.loader.load(t))
            : nh(t()).pipe(
                H((t) =>
                  t instanceof Xt
                    ? Il(t)
                    : $(this.compiler.compileModuleAsync(t))
                )
              );
        }
      }
      class jd {
        shouldProcessUrl(t) {
          return !0;
        }
        extract(t) {
          return t;
        }
        merge(t, e) {
          return t;
        }
      }
      function Fd(t) {
        throw t;
      }
      function Ld(t, e, n) {
        return e.parse("/");
      }
      function Ud(t, e) {
        return Il(null);
      }
      let Vd = (() => {
          class t {
            constructor(t, e, n, r, s, i, o, a) {
              (this.rootComponentType = t),
                (this.urlSerializer = e),
                (this.rootContexts = n),
                (this.location = r),
                (this.config = a),
                (this.lastSuccessfulNavigation = null),
                (this.currentNavigation = null),
                (this.navigationId = 0),
                (this.isNgZoneEnabled = !1),
                (this.events = new T()),
                (this.errorHandler = Fd),
                (this.malformedUriErrorHandler = Ld),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.hooks = {
                  beforePreactivation: Ud,
                  afterPreactivation: Ud,
                }),
                (this.urlHandlingStrategy = new jd()),
                (this.routeReuseStrategy = new Rd()),
                (this.onSameUrlNavigation = "ignore"),
                (this.paramsInheritanceStrategy = "emptyOnly"),
                (this.urlUpdateStrategy = "deferred"),
                (this.relativeLinkResolution = "legacy"),
                (this.ngModule = s.get(Yt)),
                (this.console = s.get(Io));
              const l = s.get(Bo);
              (this.isNgZoneEnabled = l instanceof Bo),
                this.resetConfig(a),
                (this.currentUrlTree = new sh(new ih([], {}), {}, null)),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.configLoader = new Dd(
                  i,
                  o,
                  (t) => this.triggerEvent(new Dc(t)),
                  (t) => this.triggerEvent(new jc(t))
                )),
                (this.routerState = Oh(
                  this.currentUrlTree,
                  this.rootComponentType
                )),
                (this.transitions = new Ju({
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
            setupNavigations(t) {
              const e = this.events;
              return t.pipe(
                Nl((t) => 0 !== t.id),
                L((t) =>
                  Object.assign(Object.assign({}, t), {
                    extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl),
                  })
                ),
                Cu((t) => {
                  let n = !1,
                    r = !1;
                  return Il(t).pipe(
                    Ou((t) => {
                      this.currentNavigation = {
                        id: t.id,
                        initialUrl: t.currentRawUrl,
                        extractedUrl: t.extractedUrl,
                        trigger: t.source,
                        extras: t.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? Object.assign(
                              Object.assign({}, this.lastSuccessfulNavigation),
                              { previousNavigation: null }
                            )
                          : null,
                      };
                    }),
                    Cu((t) => {
                      const n =
                        !this.navigated ||
                        t.extractedUrl.toString() !==
                          this.browserUrlTree.toString();
                      if (
                        ("reload" === this.onSameUrlNavigation || n) &&
                        this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                      )
                        return Il(t).pipe(
                          Cu((t) => {
                            const n = this.transitions.getValue();
                            return (
                              e.next(
                                new Tc(
                                  t.id,
                                  this.serializeUrl(t.extractedUrl),
                                  t.source,
                                  t.restoredState
                                )
                              ),
                              n !== this.transitions.getValue() ? fu : [t]
                            );
                          }),
                          Cu((t) => Promise.resolve(t)),
                          ((r = this.ngModule.injector),
                          (s = this.configLoader),
                          (i = this.urlSerializer),
                          (o = this.config),
                          function (t) {
                            return t.pipe(
                              Cu((t) =>
                                (function (t, e, n, r, s) {
                                  return new id(t, e, n, r, s).apply();
                                })(r, s, i, t.extractedUrl, o).pipe(
                                  L((e) =>
                                    Object.assign(Object.assign({}, t), {
                                      urlAfterRedirects: e,
                                    })
                                  )
                                )
                              )
                            );
                          }),
                          Ou((t) => {
                            this.currentNavigation = Object.assign(
                              Object.assign({}, this.currentNavigation),
                              { finalUrl: t.urlAfterRedirects }
                            );
                          }),
                          (function (t, e, n, r, s) {
                            return function (i) {
                              return i.pipe(
                                H((i) =>
                                  (function (
                                    t,
                                    e,
                                    n,
                                    r,
                                    s = "emptyOnly",
                                    i = "legacy"
                                  ) {
                                    return new Sd(t, e, n, r, s, i).recognize();
                                  })(
                                    t,
                                    e,
                                    i.urlAfterRedirects,
                                    n(i.urlAfterRedirects),
                                    r,
                                    s
                                  ).pipe(
                                    L((t) =>
                                      Object.assign(Object.assign({}, i), {
                                        targetSnapshot: t,
                                      })
                                    )
                                  )
                                )
                              );
                            };
                          })(
                            this.rootComponentType,
                            this.config,
                            (t) => this.serializeUrl(t),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          Ou((t) => {
                            "eager" === this.urlUpdateStrategy &&
                              (t.extras.skipLocationChange ||
                                this.setBrowserUrl(
                                  t.urlAfterRedirects,
                                  !!t.extras.replaceUrl,
                                  t.id,
                                  t.extras.state
                                ),
                              (this.browserUrlTree = t.urlAfterRedirects));
                          }),
                          Ou((t) => {
                            const n = new Pc(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            e.next(n);
                          })
                        );
                      var r, s, i, o;
                      if (
                        n &&
                        this.rawUrlTree &&
                        this.urlHandlingStrategy.shouldProcessUrl(
                          this.rawUrlTree
                        )
                      ) {
                        const {
                            id: n,
                            extractedUrl: r,
                            source: s,
                            restoredState: i,
                            extras: o,
                          } = t,
                          a = new Tc(n, this.serializeUrl(r), s, i);
                        e.next(a);
                        const l = Oh(r, this.rootComponentType).snapshot;
                        return Il(
                          Object.assign(Object.assign({}, t), {
                            targetSnapshot: l,
                            urlAfterRedirects: r,
                            extras: Object.assign(Object.assign({}, o), {
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            }),
                          })
                        );
                      }
                      return (
                        (this.rawUrlTree = t.rawUrl),
                        (this.browserUrlTree = t.urlAfterRedirects),
                        t.resolve(null),
                        fu
                      );
                    }),
                    Id((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o },
                      } = t;
                      return this.hooks.beforePreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o,
                      });
                    }),
                    Ou((t) => {
                      const e = new Oc(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot
                      );
                      this.triggerEvent(e);
                    }),
                    L((t) =>
                      Object.assign(Object.assign({}, t), {
                        guards: dd(
                          t.targetSnapshot,
                          t.currentSnapshot,
                          this.rootContexts
                        ),
                      })
                    ),
                    (function (t, e) {
                      return function (n) {
                        return n.pipe(
                          H((n) => {
                            const {
                              targetSnapshot: r,
                              currentSnapshot: s,
                              guards: {
                                canActivateChecks: i,
                                canDeactivateChecks: o,
                              },
                            } = n;
                            return 0 === o.length && 0 === i.length
                              ? Il(
                                  Object.assign(Object.assign({}, n), {
                                    guardsResult: !0,
                                  })
                                )
                              : (function (t, e, n, r) {
                                  return $(t).pipe(
                                    H((t) =>
                                      (function (t, e, n, r, s) {
                                        const i =
                                          e && e.routeConfig
                                            ? e.routeConfig.canDeactivate
                                            : null;
                                        return i && 0 !== i.length
                                          ? Il(
                                              i.map((i) => {
                                                const o = pd(i, e, s);
                                                let a;
                                                if (
                                                  (function (t) {
                                                    return (
                                                      t && Yh(t.canDeactivate)
                                                    );
                                                  })(o)
                                                )
                                                  a = nh(
                                                    o.canDeactivate(t, e, n, r)
                                                  );
                                                else {
                                                  if (!Yh(o))
                                                    throw new Error(
                                                      "Invalid CanDeactivate guard"
                                                    );
                                                  a = nh(o(t, e, n, r));
                                                }
                                                return a.pipe(gc());
                                              })
                                            ).pipe(gd())
                                          : Il(!0);
                                      })(t.component, t.route, n, e, r)
                                    ),
                                    gc((t) => !0 !== t, !0)
                                  );
                                })(o, r, s, t).pipe(
                                  H((n) =>
                                    n && "boolean" == typeof n
                                      ? (function (t, e, n, r) {
                                          return $(e).pipe(
                                            Rl((e) =>
                                              $([
                                                _d(e.route.parent, r),
                                                yd(e.route, r),
                                                wd(t, e.path, n),
                                                vd(t, e.route, n),
                                              ]).pipe(
                                                wu(),
                                                gc((t) => !0 !== t, !0)
                                              )
                                            ),
                                            gc((t) => !0 !== t, !0)
                                          );
                                        })(r, i, t, e)
                                      : Il(n)
                                  ),
                                  L((t) =>
                                    Object.assign(Object.assign({}, n), {
                                      guardsResult: t,
                                    })
                                  )
                                );
                          })
                        );
                      };
                    })(this.ngModule.injector, (t) => this.triggerEvent(t)),
                    Ou((t) => {
                      if (Xh(t.guardsResult)) {
                        const e = zc(
                          `Redirecting to "${this.serializeUrl(
                            t.guardsResult
                          )}"`
                        );
                        throw ((e.url = t.guardsResult), e);
                      }
                    }),
                    Ou((t) => {
                      const e = new Ic(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot,
                        !!t.guardsResult
                      );
                      this.triggerEvent(e);
                    }),
                    Nl((t) => {
                      if (!t.guardsResult) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new kc(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          ""
                        );
                        return e.next(n), t.resolve(!1), !1;
                      }
                      return !0;
                    }),
                    Id((t) => {
                      if (t.guards.canActivateChecks.length)
                        return Il(t).pipe(
                          Ou((t) => {
                            const e = new Rc(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          }),
                          ((e = this.paramsInheritanceStrategy),
                          (n = this.ngModule.injector),
                          function (t) {
                            return t.pipe(
                              H((t) => {
                                const {
                                  targetSnapshot: r,
                                  guards: { canActivateChecks: s },
                                } = t;
                                return s.length
                                  ? $(s).pipe(
                                      Rl((t) =>
                                        (function (t, e, n, r) {
                                          return (function (t, e, n, r) {
                                            const s = Object.keys(t);
                                            if (0 === s.length) return Il({});
                                            if (1 === s.length) {
                                              const i = s[0];
                                              return Od(t[i], e, n, r).pipe(
                                                L((t) => ({ [i]: t }))
                                              );
                                            }
                                            const i = {};
                                            return $(s)
                                              .pipe(
                                                H((s) =>
                                                  Od(t[s], e, n, r).pipe(
                                                    L((t) => ((i[s] = t), t))
                                                  )
                                                )
                                              )
                                              .pipe(
                                                dc(),
                                                L(() => i)
                                              );
                                          })(t._resolve, t, e, r).pipe(
                                            L(
                                              (e) => (
                                                (t._resolvedData = e),
                                                (t.data = Object.assign(
                                                  Object.assign({}, t.data),
                                                  Rh(t, n).resolve
                                                )),
                                                null
                                              )
                                            )
                                          );
                                        })(t.route, r, e, n)
                                      ),
                                      (function (t, e) {
                                        return arguments.length >= 2
                                          ? function (n) {
                                              return _(
                                                vc(t, e),
                                                nc(1),
                                                uc(e)
                                              )(n);
                                            }
                                          : function (e) {
                                              return _(
                                                vc((e, n, r) => t(e, n, r + 1)),
                                                nc(1)
                                              )(e);
                                            };
                                      })((t, e) => t),
                                      L((e) => t)
                                    )
                                  : Il(t);
                              })
                            );
                          }),
                          Ou((t) => {
                            const e = new Nc(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          })
                        );
                      var e, n;
                    }),
                    Id((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o },
                      } = t;
                      return this.hooks.afterPreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o,
                      });
                    }),
                    L((t) => {
                      const e = (function (t, e, n) {
                        const r = (function t(e, n, r) {
                          if (
                            r &&
                            e.shouldReuseRoute(n.value, r.value.snapshot)
                          ) {
                            const s = r.value;
                            s._futureSnapshot = n.value;
                            const i = (function (e, n, r) {
                              return n.children.map((n) => {
                                for (const s of r.children)
                                  if (
                                    e.shouldReuseRoute(
                                      s.value.snapshot,
                                      n.value
                                    )
                                  )
                                    return t(e, n, s);
                                return t(e, n);
                              });
                            })(e, n, r);
                            return new kh(s, i);
                          }
                          {
                            const r = e.retrieve(n.value);
                            if (r) {
                              const t = r.route;
                              return (
                                (function t(e, n) {
                                  if (
                                    e.value.routeConfig !== n.value.routeConfig
                                  )
                                    throw new Error(
                                      "Cannot reattach ActivatedRouteSnapshot created from a different route"
                                    );
                                  if (e.children.length !== n.children.length)
                                    throw new Error(
                                      "Cannot reattach ActivatedRouteSnapshot with a different number of children"
                                    );
                                  n.value._futureSnapshot = e.value;
                                  for (let r = 0; r < e.children.length; ++r)
                                    t(e.children[r], n.children[r]);
                                })(n, t),
                                t
                              );
                            }
                            {
                              const r = new Ih(
                                  new Ju((s = n.value).url),
                                  new Ju(s.params),
                                  new Ju(s.queryParams),
                                  new Ju(s.fragment),
                                  new Ju(s.data),
                                  s.outlet,
                                  s.component,
                                  s
                                ),
                                i = n.children.map((n) => t(e, n));
                              return new kh(r, i);
                            }
                          }
                          var s;
                        })(t, e._root, n ? n._root : void 0);
                        return new Ph(r, e);
                      })(
                        this.routeReuseStrategy,
                        t.targetSnapshot,
                        t.currentRouterState
                      );
                      return Object.assign(Object.assign({}, t), {
                        targetRouterState: e,
                      });
                    }),
                    Ou((t) => {
                      (this.currentUrlTree = t.urlAfterRedirects),
                        (this.rawUrlTree = this.urlHandlingStrategy.merge(
                          this.currentUrlTree,
                          t.rawUrl
                        )),
                        (this.routerState = t.targetRouterState),
                        "deferred" === this.urlUpdateStrategy &&
                          (t.extras.skipLocationChange ||
                            this.setBrowserUrl(
                              this.rawUrlTree,
                              !!t.extras.replaceUrl,
                              t.id,
                              t.extras.state
                            ),
                          (this.browserUrlTree = t.urlAfterRedirects));
                    }),
                    ((i = this.rootContexts),
                    (o = this.routeReuseStrategy),
                    (a = (t) => this.triggerEvent(t)),
                    L(
                      (t) => (
                        new Gh(
                          o,
                          t.targetRouterState,
                          t.currentRouterState,
                          a
                        ).activate(i),
                        t
                      )
                    )),
                    Ou({
                      next() {
                        n = !0;
                      },
                      complete() {
                        n = !0;
                      },
                    }),
                    ((s = () => {
                      if (!n && !r) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new kc(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`
                        );
                        e.next(n), t.resolve(!1);
                      }
                      this.currentNavigation = null;
                    }),
                    (t) => t.lift(new Sc(s))),
                    pc((n) => {
                      if (((r = !0), (s = n) && s.ngNavigationCancelingError)) {
                        const r = Xh(n.url);
                        r ||
                          ((this.navigated = !0),
                          this.resetStateAndUrl(
                            t.currentRouterState,
                            t.currentUrlTree,
                            t.rawUrl
                          ));
                        const s = new kc(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n.message
                        );
                        e.next(s),
                          r
                            ? setTimeout(() => {
                                const e = this.urlHandlingStrategy.merge(
                                  n.url,
                                  this.rawUrlTree
                                );
                                return this.scheduleNavigation(
                                  e,
                                  "imperative",
                                  null,
                                  {
                                    skipLocationChange:
                                      t.extras.skipLocationChange,
                                    replaceUrl:
                                      "eager" === this.urlUpdateStrategy,
                                  },
                                  {
                                    resolve: t.resolve,
                                    reject: t.reject,
                                    promise: t.promise,
                                  }
                                );
                              }, 0)
                            : t.resolve(!1);
                      } else {
                        this.resetStateAndUrl(
                          t.currentRouterState,
                          t.currentUrlTree,
                          t.rawUrl
                        );
                        const r = new Ac(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n
                        );
                        e.next(r);
                        try {
                          t.resolve(this.errorHandler(n));
                        } catch (i) {
                          t.reject(i);
                        }
                      }
                      var s;
                      return fu;
                    })
                  );
                  var s, i, o, a;
                })
              );
            }
            resetRootComponentType(t) {
              (this.rootComponentType = t),
                (this.routerState.root.component = this.rootComponentType);
            }
            getTransition() {
              const t = this.transitions.value;
              return (t.urlAfterRedirects = this.browserUrlTree), t;
            }
            setTransition(t) {
              this.transitions.next(
                Object.assign(Object.assign({}, this.getTransition()), t)
              );
            }
            initialNavigation() {
              this.setUpLocationChangeListener(),
                0 === this.navigationId &&
                  this.navigateByUrl(this.location.path(!0), {
                    replaceUrl: !0,
                  });
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((t) => {
                  let e = this.parseUrl(t.url);
                  const n = "popstate" === t.type ? "popstate" : "hashchange",
                    r = t.state && t.state.navigationId ? t.state : null;
                  setTimeout(() => {
                    this.scheduleNavigation(e, n, r, { replaceUrl: !0 });
                  }, 0);
                }));
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.currentNavigation;
            }
            triggerEvent(t) {
              this.events.next(t);
            }
            resetConfig(t) {
              Wc(t),
                (this.config = t.map(Gc)),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(),
                (this.locationSubscription = null));
            }
            createUrlTree(t, e = {}) {
              const {
                relativeTo: n,
                queryParams: r,
                fragment: s,
                preserveQueryParams: i,
                queryParamsHandling: o,
                preserveFragment: a,
              } = e;
              Mn() &&
                i &&
                console &&
                console.warn &&
                console.warn(
                  "preserveQueryParams is deprecated, use queryParamsHandling instead."
                );
              const l = n || this.routerState.root,
                u = a ? this.currentUrlTree.fragment : s;
              let c = null;
              if (o)
                switch (o) {
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
              else c = i ? this.currentUrlTree.queryParams : r || null;
              return (
                null !== c && (c = this.removeEmptyProps(c)),
                (function (t, e, n, r, s) {
                  if (0 === n.length) return Mh(e.root, e.root, e, r, s);
                  const i = (function (t) {
                    if (
                      "string" == typeof t[0] &&
                      1 === t.length &&
                      "/" === t[0]
                    )
                      return new $h(!0, 0, t);
                    let e = 0,
                      n = !1;
                    const r = t.reduce((t, r, s) => {
                      if ("object" == typeof r && null != r) {
                        if (r.outlets) {
                          const e = {};
                          return (
                            eh(r.outlets, (t, n) => {
                              e[n] = "string" == typeof t ? t.split("/") : t;
                            }),
                            [...t, { outlets: e }]
                          );
                        }
                        if (r.segmentPath) return [...t, r.segmentPath];
                      }
                      return "string" != typeof r
                        ? [...t, r]
                        : 0 === s
                        ? (r.split("/").forEach((r, s) => {
                            (0 == s && "." === r) ||
                              (0 == s && "" === r
                                ? (n = !0)
                                : ".." === r
                                ? e++
                                : "" != r && t.push(r));
                          }),
                          t)
                        : [...t, r];
                    }, []);
                    return new $h(n, e, r);
                  })(n);
                  if (i.toRoot()) return Mh(e.root, new ih([], {}), e, r, s);
                  const o = (function (t, e, n) {
                      if (t.isAbsolute) return new Hh(e.root, !0, 0);
                      if (-1 === n.snapshot._lastPathIndex)
                        return new Hh(n.snapshot._urlSegment, !0, 0);
                      const r = Vh(t.commands[0]) ? 0 : 1;
                      return (function (t, e, n) {
                        let r = t,
                          s = e,
                          i = n;
                        for (; i > s; ) {
                          if (((i -= s), (r = r.parent), !r))
                            throw new Error("Invalid number of '../'");
                          s = r.segments.length;
                        }
                        return new Hh(r, !1, s - i);
                      })(
                        n.snapshot._urlSegment,
                        n.snapshot._lastPathIndex + r,
                        t.numberOfDoubleDots
                      );
                    })(i, e, t),
                    a = o.processChildren
                      ? Bh(o.segmentGroup, o.index, i.commands)
                      : zh(o.segmentGroup, o.index, i.commands);
                  return Mh(o.segmentGroup, a, e, r, s);
                })(l, this.currentUrlTree, t, c, u)
              );
            }
            navigateByUrl(t, e = { skipLocationChange: !1 }) {
              Mn() &&
                this.isNgZoneEnabled &&
                !Bo.isInAngularZone() &&
                this.console.warn(
                  "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
                );
              const n = Xh(t) ? t : this.parseUrl(t),
                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
              return this.scheduleNavigation(r, "imperative", null, e);
            }
            navigate(t, e = { skipLocationChange: !1 }) {
              return (
                (function (t) {
                  for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    if (null == n)
                      throw new Error(
                        `The requested path contains ${n} segment at index ${e}`
                      );
                  }
                })(t),
                this.navigateByUrl(this.createUrlTree(t, e), e)
              );
            }
            serializeUrl(t) {
              return this.urlSerializer.serialize(t);
            }
            parseUrl(t) {
              let e;
              try {
                e = this.urlSerializer.parse(t);
              } catch (n) {
                e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
              }
              return e;
            }
            isActive(t, e) {
              if (Xh(t)) return rh(this.currentUrlTree, t, e);
              const n = this.parseUrl(t);
              return rh(this.currentUrlTree, n, e);
            }
            removeEmptyProps(t) {
              return Object.keys(t).reduce((e, n) => {
                const r = t[n];
                return null != r && (e[n] = r), e;
              }, {});
            }
            processNavigations() {
              this.navigations.subscribe(
                (t) => {
                  (this.navigated = !0),
                    (this.lastSuccessfulId = t.id),
                    this.events.next(
                      new xc(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(this.currentUrlTree)
                      )
                    ),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    (this.currentNavigation = null),
                    t.resolve(!0);
                },
                (t) => {
                  this.console.warn("Unhandled Navigation Error: ");
                }
              );
            }
            scheduleNavigation(t, e, n, r, s) {
              const i = this.getTransition();
              if (
                i &&
                "imperative" !== e &&
                "imperative" === i.source &&
                i.rawUrl.toString() === t.toString()
              )
                return Promise.resolve(!0);
              if (
                i &&
                "hashchange" == e &&
                "popstate" === i.source &&
                i.rawUrl.toString() === t.toString()
              )
                return Promise.resolve(!0);
              if (
                i &&
                "popstate" == e &&
                "hashchange" === i.source &&
                i.rawUrl.toString() === t.toString()
              )
                return Promise.resolve(!0);
              let o, a, l;
              s
                ? ((o = s.resolve), (a = s.reject), (l = s.promise))
                : (l = new Promise((t, e) => {
                    (o = t), (a = e);
                  }));
              const u = ++this.navigationId;
              return (
                this.setTransition({
                  id: u,
                  source: e,
                  restoredState: n,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.rawUrlTree,
                  rawUrl: t,
                  extras: r,
                  resolve: o,
                  reject: a,
                  promise: l,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                l.catch((t) => Promise.reject(t))
              );
            }
            setBrowserUrl(t, e, n, r) {
              const s = this.urlSerializer.serialize(t);
              (r = r || {}),
                this.location.isCurrentPathEqualTo(s) || e
                  ? this.location.replaceState(
                      s,
                      "",
                      Object.assign(Object.assign({}, r), { navigationId: n })
                    )
                  : this.location.go(
                      s,
                      "",
                      Object.assign(Object.assign({}, r), { navigationId: n })
                    );
            }
            resetStateAndUrl(t, e, n) {
              (this.routerState = t),
                (this.currentUrlTree = e),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  n
                )),
                this.resetUrlToCurrentUrlTree();
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                "",
                { navigationId: this.lastSuccessfulId }
              );
            }
          }
          return (
            (t.??fac = function (t) {
              oi();
            }),
            (t.??dir = me({ type: t })),
            t
          );
        })(),
        Md = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.router = t),
                (this.route = e),
                (this.commands = []),
                null == n && r.setAttribute(s.nativeElement, "tabindex", "0");
            }
            set routerLink(t) {
              this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
            }
            set preserveQueryParams(t) {
              Mn() &&
                console &&
                console.warn &&
                console.warn(
                  "preserveQueryParams is deprecated!, use queryParamsHandling instead."
                ),
                (this.preserve = t);
            }
            onClick() {
              const t = {
                skipLocationChange: Hd(this.skipLocationChange),
                replaceUrl: Hd(this.replaceUrl),
              };
              return this.router.navigateByUrl(this.urlTree, t), !0;
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: Hd(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Hd(this.preserveFragment),
              });
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)(
                si(Vd),
                si(Ih),
                ii("tabindex"),
                si(Di),
                si(Oi)
              );
            }),
            (t.??dir = me({
              type: t,
              selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
              hostBindings: function (t, e) {
                1 & t &&
                  fi("click", function (t) {
                    return e.onClick();
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
            t
          );
        })(),
        $d = (() => {
          class t {
            constructor(t, e, n) {
              (this.router = t),
                (this.route = e),
                (this.locationStrategy = n),
                (this.commands = []),
                (this.subscription = t.events.subscribe((t) => {
                  t instanceof xc && this.updateTargetUrlAndHref();
                }));
            }
            set routerLink(t) {
              this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
            }
            set preserveQueryParams(t) {
              Mn() &&
                console &&
                console.warn &&
                console.warn(
                  "preserveQueryParams is deprecated, use queryParamsHandling instead."
                ),
                (this.preserve = t);
            }
            ngOnChanges(t) {
              this.updateTargetUrlAndHref();
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            onClick(t, e, n, r) {
              if (0 !== t || e || n || r) return !0;
              if ("string" == typeof this.target && "_self" != this.target)
                return !0;
              const s = {
                skipLocationChange: Hd(this.skipLocationChange),
                replaceUrl: Hd(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, s), !1;
            }
            updateTargetUrlAndHref() {
              this.href = this.locationStrategy.prepareExternalUrl(
                this.router.serializeUrl(this.urlTree)
              );
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: Hd(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Hd(this.preserveFragment),
              });
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)(si(Vd), si(Ih), si(Na));
            }),
            (t.??dir = me({
              type: t,
              selectors: [
                ["a", "routerLink", ""],
                ["area", "routerLink", ""],
              ],
              hostVars: 2,
              hostBindings: function (t, e) {
                1 & t &&
                  fi("click", function (t) {
                    return e.onClick(
                      t.button,
                      t.ctrlKey,
                      t.metaKey,
                      t.shiftKey
                    );
                  }),
                  2 & t && (wi("href", e.href, zn), ri("target", e.target));
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
              features: [Ci()],
            })),
            t
          );
        })();
      function Hd(t) {
        return "" === t || !!t;
      }
      class qd {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new zd()),
            (this.attachRef = null);
        }
      }
      class zd {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(t, e) {
          const n = this.getOrCreateContext(t);
          (n.outlet = e), this.contexts.set(t, n);
        }
        onChildOutletDestroyed(t) {
          const e = this.getContext(t);
          e && (e.outlet = null);
        }
        onOutletDeactivated() {
          const t = this.contexts;
          return (this.contexts = new Map()), t;
        }
        onOutletReAttached(t) {
          this.contexts = t;
        }
        getOrCreateContext(t) {
          let e = this.getContext(t);
          return e || ((e = new qd()), this.contexts.set(t, e)), e;
        }
        getContext(t) {
          return this.contexts.get(t) || null;
        }
      }
      let Bd = (() => {
        class t {
          constructor(t, e, n, r, s) {
            (this.parentContexts = t),
              (this.location = e),
              (this.resolver = n),
              (this.changeDetector = s),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new So()),
              (this.deactivateEvents = new So()),
              (this.name = r || "primary"),
              t.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const t = this.parentContexts.getContext(this.name);
              t &&
                t.route &&
                (t.attachRef
                  ? this.attach(t.attachRef, t.route)
                  : this.activateWith(t.route, t.resolver || null));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new Error("Outlet is not activated");
            this.location.detach();
            const t = this.activated;
            return (this.activated = null), (this._activatedRoute = null), t;
          }
          attach(t, e) {
            (this.activated = t),
              (this._activatedRoute = e),
              this.location.insert(t.hostView);
          }
          deactivate() {
            if (this.activated) {
              const t = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(t);
            }
          }
          activateWith(t, e) {
            if (this.isActivated)
              throw new Error("Cannot activate an already activated outlet");
            this._activatedRoute = t;
            const n = (e = e || this.resolver).resolveComponentFactory(
                t._futureSnapshot.routeConfig.component
              ),
              r = this.parentContexts.getOrCreateContext(this.name).children,
              s = new Qd(t, r, this.location.injector);
            (this.activated = this.location.createComponent(
              n,
              this.location.length,
              s
            )),
              this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)(si(zd), si(no), si(Pi), ii("name"), si(Ps));
          }),
          (t.??dir = me({
            type: t,
            selectors: [["router-outlet"]],
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
            },
            exportAs: ["outlet"],
          })),
          t
        );
      })();
      class Qd {
        constructor(t, e, n) {
          (this.route = t), (this.childContexts = e), (this.parent = n);
        }
        get(t, e) {
          return t === Ih
            ? this.route
            : t === zd
            ? this.childContexts
            : this.parent.get(t, e);
        }
      }
      class Wd {}
      class Kd {
        preload(t, e) {
          return Il(null);
        }
      }
      let Zd = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.router = t),
                (this.injector = r),
                (this.preloadingStrategy = s),
                (this.loader = new Dd(
                  e,
                  n,
                  (e) => t.triggerEvent(new Dc(e)),
                  (e) => t.triggerEvent(new jc(e))
                ));
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  Nl((t) => t instanceof xc),
                  Rl(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              const t = this.injector.get(Yt);
              return this.processRoutes(t, this.router.config);
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            processRoutes(t, e) {
              const n = [];
              for (const r of e)
                if (r.loadChildren && !r.canLoad && r._loadedConfig) {
                  const t = r._loadedConfig;
                  n.push(this.processRoutes(t.module, t.routes));
                } else
                  r.loadChildren && !r.canLoad
                    ? n.push(this.preloadConfig(t, r))
                    : r.children && n.push(this.processRoutes(t, r.children));
              return $(n).pipe(
                Q(),
                L((t) => {})
              );
            }
            preloadConfig(t, e) {
              return this.preloadingStrategy.preload(e, () =>
                this.loader
                  .load(t.injector, e)
                  .pipe(
                    H(
                      (t) => (
                        (e._loadedConfig = t),
                        this.processRoutes(t.module, t.routes)
                      )
                    )
                  )
              );
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)(Kt(Vd), Kt(pa), Kt($o), Kt(zs), Kt(Wd));
            }),
            (t.??prov = ht({ token: t, factory: t.??fac })),
            t
          );
        })(),
        Gd = (() => {
          class t {
            constructor(t, e, n = {}) {
              (this.router = t),
                (this.viewportScroller = e),
                (this.options = n),
                (this.lastId = 0),
                (this.lastSource = "imperative"),
                (this.restoredId = 0),
                (this.store = {}),
                (n.scrollPositionRestoration =
                  n.scrollPositionRestoration || "disabled"),
                (n.anchorScrolling = n.anchorScrolling || "disabled");
            }
            init() {
              "disabled" !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration("manual"),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof Tc
                  ? ((this.store[this.lastId] =
                      this.viewportScroller.getScrollPosition()),
                    (this.lastSource = t.navigationTrigger),
                    (this.restoredId = t.restoredState
                      ? t.restoredState.navigationId
                      : 0))
                  : t instanceof xc &&
                    ((this.lastId = t.id),
                    this.scheduleScrollEvent(
                      t,
                      this.router.parseUrl(t.urlAfterRedirects).fragment
                    ));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof Mc &&
                  (t.position
                    ? "top" === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : "enabled" === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(t.position)
                    : t.anchor && "enabled" === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(t.anchor)
                    : "disabled" !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(t, e) {
              this.router.triggerEvent(
                new Mc(
                  t,
                  "popstate" === this.lastSource
                    ? this.store[this.restoredId]
                    : null,
                  e
                )
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription &&
                this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription &&
                  this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (t.??fac = function (t) {
              oi();
            }),
            (t.??dir = me({ type: t })),
            t
          );
        })();
      const Jd = new Ut("ROUTER_CONFIGURATION"),
        Yd = new Ut("ROUTER_FORROOT_GUARD"),
        Xd = [
          Ua,
          { provide: uh, useClass: ch },
          {
            provide: Vd,
            useFactory: function (t, e, n, r, s, i, o, a, l = {}, u, c) {
              const h = new Vd(null, e, n, r, s, i, o, Xc(a));
              if (
                (u && (h.urlHandlingStrategy = u),
                c && (h.routeReuseStrategy = c),
                l.errorHandler && (h.errorHandler = l.errorHandler),
                l.malformedUriErrorHandler &&
                  (h.malformedUriErrorHandler = l.malformedUriErrorHandler),
                l.enableTracing)
              ) {
                const t = Sa();
                h.events.subscribe((e) => {
                  t.logGroup(`Router Event: ${e.constructor.name}`),
                    t.log(e.toString()),
                    t.log(e),
                    t.logGroupEnd();
                });
              }
              return (
                l.onSameUrlNavigation &&
                  (h.onSameUrlNavigation = l.onSameUrlNavigation),
                l.paramsInheritanceStrategy &&
                  (h.paramsInheritanceStrategy = l.paramsInheritanceStrategy),
                l.urlUpdateStrategy &&
                  (h.urlUpdateStrategy = l.urlUpdateStrategy),
                l.relativeLinkResolution &&
                  (h.relativeLinkResolution = l.relativeLinkResolution),
                h
              );
            },
            deps: [
              ha,
              uh,
              zd,
              Ua,
              zs,
              pa,
              $o,
              Nd,
              Jd,
              [class {}, new ot()],
              [class {}, new ot()],
            ],
          },
          zd,
          {
            provide: Ih,
            useFactory: function (t) {
              return t.routerState.root;
            },
            deps: [Vd],
          },
          { provide: pa, useClass: ga },
          Zd,
          Kd,
          class {
            preload(t, e) {
              return e().pipe(pc(() => Il(null)));
            }
          },
          { provide: Jd, useValue: { enableTracing: !1 } },
        ];
      function tp() {
        return new oa("Router", Vd);
      }
      let ep = (() => {
        class t {
          constructor(t, e) {}
          static forRoot(e, n) {
            return {
              ngModule: t,
              providers: [
                Xd,
                ip(e),
                {
                  provide: Yd,
                  useFactory: sp,
                  deps: [[Vd, new ot(), new lt()]],
                },
                { provide: Jd, useValue: n || {} },
                {
                  provide: Na,
                  useFactory: rp,
                  deps: [Ea, [new it(ja), new ot()], Jd],
                },
                { provide: Gd, useFactory: np, deps: [Vd, el, Jd] },
                {
                  provide: Wd,
                  useExisting:
                    n && n.preloadingStrategy ? n.preloadingStrategy : Kd,
                },
                { provide: oa, multi: !0, useFactory: tp },
                [
                  op,
                  { provide: Co, multi: !0, useFactory: ap, deps: [op] },
                  { provide: up, useFactory: lp, deps: [op] },
                  { provide: Oo, multi: !0, useExisting: up },
                ],
              ],
            };
          }
          static forChild(e) {
            return { ngModule: t, providers: [ip(e)] };
          }
        }
        return (
          (t.??mod = pe({ type: t })),
          (t.??inj = dt({
            factory: function (e) {
              return new (e || t)(Kt(Yd, 8), Kt(Vd, 8));
            },
          })),
          t
        );
      })();
      function np(t, e, n) {
        return n.scrollOffset && e.setOffset(n.scrollOffset), new Gd(t, e, n);
      }
      function rp(t, e, n = {}) {
        return n.useHash ? new La(t, e) : new Fa(t, e);
      }
      function sp(t) {
        if (t)
          throw new Error(
            "RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead."
          );
        return "guarded";
      }
      function ip(t) {
        return [
          { provide: Bs, multi: !0, useValue: t },
          { provide: Nd, multi: !0, useValue: t },
        ];
      }
      let op = (() => {
        class t {
          constructor(t) {
            (this.injector = t),
              (this.initNavigation = !1),
              (this.resultOfPreactivationDone = new T());
          }
          appInitializer() {
            return this.injector.get(xa, Promise.resolve(null)).then(() => {
              let t = null;
              const e = new Promise((e) => (t = e)),
                n = this.injector.get(Vd),
                r = this.injector.get(Jd);
              if (this.isLegacyDisabled(r) || this.isLegacyEnabled(r)) t(!0);
              else if ("disabled" === r.initialNavigation)
                n.setUpLocationChangeListener(), t(!0);
              else {
                if ("enabled" !== r.initialNavigation)
                  throw new Error(
                    `Invalid initialNavigation options: '${r.initialNavigation}'`
                  );
                (n.hooks.afterPreactivation = () =>
                  this.initNavigation
                    ? Il(null)
                    : ((this.initNavigation = !0),
                      t(!0),
                      this.resultOfPreactivationDone)),
                  n.initialNavigation();
              }
              return e;
            });
          }
          bootstrapListener(t) {
            const e = this.injector.get(Jd),
              n = this.injector.get(Zd),
              r = this.injector.get(Gd),
              s = this.injector.get(Vd),
              i = this.injector.get(ha);
            t === i.components[0] &&
              (this.isLegacyEnabled(e)
                ? s.initialNavigation()
                : this.isLegacyDisabled(e) && s.setUpLocationChangeListener(),
              n.setUpPreloading(),
              r.init(),
              s.resetRootComponentType(i.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
          isLegacyEnabled(t) {
            return (
              "legacy_enabled" === t.initialNavigation ||
              !0 === t.initialNavigation ||
              void 0 === t.initialNavigation
            );
          }
          isLegacyDisabled(t) {
            return (
              "legacy_disabled" === t.initialNavigation ||
              !1 === t.initialNavigation
            );
          }
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)(Kt(zs));
          }),
          (t.??prov = ht({ token: t, factory: t.??fac })),
          t
        );
      })();
      function ap(t) {
        return t.appInitializer.bind(t);
      }
      function lp(t) {
        return t.bootstrapListener.bind(t);
      }
      const up = new Ut("Router Initializer");
      let cp = (() => {
          class t {
            constructor(t) {
              this.swUpdate = t;
            }
            ngOnInit() {
              this.swUpdate.isEnabled &&
                this.swUpdate.available.subscribe(() => {
                  confirm("New version available. Load New Version?") &&
                    window.location.reload();
                });
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)(si(Bu));
            }),
            (t.??cmp = ue({
              type: t,
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
              template: function (t, e) {
                1 & t &&
                  (ui(0, "header", 0),
                  ui(1, "ul", 1),
                  ui(2, "li", 2),
                  ui(3, "a", 3),
                  hi(4, "img", 4),
                  ci(),
                  ci(),
                  ui(5, "li"),
                  ui(6, "a", 5),
                  yi(7, "Lessons"),
                  ci(),
                  ci(),
                  ci(),
                  ci(),
                  ui(8, "main"),
                  ui(9, "div", 6),
                  ui(10, "h3"),
                  yi(11, "Angular PWA Course"),
                  ci(),
                  hi(12, "img", 7),
                  ci(),
                  hi(13, "router-outlet"),
                  ci());
              },
              directives: [$d, Bd],
              styles: [
                ".l-header[_ngcontent-%COMP%]{display:block}main[_ngcontent-%COMP%]{padding-top:50px;margin:0 auto;width:300px}.course-header[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:30px}.course-header[_ngcontent-%COMP%], .course-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center}.pwa-logo[_ngcontent-%COMP%]{height:140px}  body{background:#fff}",
              ],
            })),
            t
          );
        })(),
        hp = (() => {
          class t {
            constructor(t) {
              this.http = t;
            }
            loadAllLessons() {
              return this.http.get("/api/lessons").pipe(L((t) => t.lessons));
            }
            findLessonById(t) {
              return this.http.get("/api/lessons/" + t);
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)(Kt(Yl));
            }),
            (t.??prov = ht({ token: t, factory: t.??fac })),
            t
          );
        })();
      function dp(t, e) {
        return new w((n) => {
          const r = t.length;
          if (0 === r) return void n.complete();
          const s = new Array(r);
          let i = 0,
            o = 0;
          for (let a = 0; a < r; a++) {
            const l = $(t[a]);
            let u = !1;
            n.add(
              l.subscribe({
                next: (t) => {
                  u || ((u = !0), o++), (s[a] = t);
                },
                error: (t) => n.error(t),
                complete: () => {
                  i++,
                    (i !== r && u) ||
                      (o === r &&
                        n.next(
                          e ? e.reduce((t, e, n) => ((t[e] = s[n]), t), {}) : s
                        ),
                      n.complete());
                },
              })
            );
          }
        });
      }
      function pp(t) {
        return null == t || 0 === t.length;
      }
      const fp =
        /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class mp {
        static min(t) {
          return (e) => {
            if (pp(e.value) || pp(t)) return null;
            const n = parseFloat(e.value);
            return !isNaN(n) && n < t
              ? { min: { min: t, actual: e.value } }
              : null;
          };
        }
        static max(t) {
          return (e) => {
            if (pp(e.value) || pp(t)) return null;
            const n = parseFloat(e.value);
            return !isNaN(n) && n > t
              ? { max: { max: t, actual: e.value } }
              : null;
          };
        }
        static required(t) {
          return pp(t.value) ? { required: !0 } : null;
        }
        static requiredTrue(t) {
          return !0 === t.value ? null : { required: !0 };
        }
        static email(t) {
          return pp(t.value) ? null : fp.test(t.value) ? null : { email: !0 };
        }
        static minLength(t) {
          return (e) => {
            if (pp(e.value)) return null;
            const n = e.value ? e.value.length : 0;
            return n < t
              ? { minlength: { requiredLength: t, actualLength: n } }
              : null;
          };
        }
        static maxLength(t) {
          return (e) => {
            const n = e.value ? e.value.length : 0;
            return n > t
              ? { maxlength: { requiredLength: t, actualLength: n } }
              : null;
          };
        }
        static pattern(t) {
          if (!t) return mp.nullValidator;
          let e, n;
          return (
            "string" == typeof t
              ? ((n = ""),
                "^" !== t.charAt(0) && (n += "^"),
                (n += t),
                "$" !== t.charAt(t.length - 1) && (n += "$"),
                (e = new RegExp(n)))
              : ((n = t.toString()), (e = t)),
            (t) => {
              if (pp(t.value)) return null;
              const r = t.value;
              return e.test(r)
                ? null
                : { pattern: { requiredPattern: n, actualValue: r } };
            }
          );
        }
        static nullValidator(t) {
          return null;
        }
        static compose(t) {
          if (!t) return null;
          const e = t.filter(gp);
          return 0 == e.length
            ? null
            : function (t) {
                return _p(
                  (function (t, e) {
                    return e.map((e) => e(t));
                  })(t, e)
                );
              };
        }
        static composeAsync(t) {
          if (!t) return null;
          const e = t.filter(gp);
          return 0 == e.length
            ? null
            : function (t) {
                return (function (...t) {
                  if (1 === t.length) {
                    const e = t[0];
                    if (l(e)) return dp(e, null);
                    if (u(e) && Object.getPrototypeOf(e) === Object.prototype) {
                      const t = Object.keys(e);
                      return dp(
                        t.map((t) => e[t]),
                        t
                      );
                    }
                  }
                  if ("function" == typeof t[t.length - 1]) {
                    const e = t.pop();
                    return dp(
                      (t = 1 === t.length && l(t[0]) ? t[0] : t),
                      null
                    ).pipe(L((t) => e(...t)));
                  }
                  return dp(t, null);
                })(
                  (function (t, e) {
                    return e.map((e) => e(t));
                  })(t, e).map(yp)
                ).pipe(L(_p));
              };
        }
      }
      function gp(t) {
        return null != t;
      }
      function yp(t) {
        const e = di(t) ? $(t) : t;
        if (!pi(e))
          throw new Error(
            "Expected validator to return Promise or Observable."
          );
        return e;
      }
      function _p(t) {
        let e = {};
        return (
          t.forEach((t) => {
            e = null != t ? Object.assign(Object.assign({}, e), t) : e;
          }),
          0 === Object.keys(e).length ? null : e
        );
      }
      function vp(t) {
        return t.validate ? (e) => t.validate(e) : t;
      }
      function wp(t) {
        return t.validate ? (e) => t.validate(e) : t;
      }
      let bp = (() => {
        class t {
          constructor() {
            this._accessors = [];
          }
          add(t, e) {
            this._accessors.push([t, e]);
          }
          remove(t) {
            for (let e = this._accessors.length - 1; e >= 0; --e)
              if (this._accessors[e][1] === t)
                return void this._accessors.splice(e, 1);
          }
          select(t) {
            this._accessors.forEach((e) => {
              this._isSameGroup(e, t) &&
                e[1] !== t &&
                e[1].fireUncheck(t.value);
            });
          }
          _isSameGroup(t, e) {
            return (
              !!t[0].control &&
              t[0]._parent === e._control._parent &&
              t[1].name === e.name
            );
          }
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)();
          }),
          (t.??prov = ht({ token: t, factory: t.??fac })),
          t
        );
      })();
      function Sp(t) {
        const e = Ep(t) ? t.validators : t;
        return Array.isArray(e)
          ? null != (n = e)
            ? mp.compose(n.map(vp))
            : null
          : e || null;
        var n;
      }
      function Cp(t, e) {
        const n = Ep(e) ? e.asyncValidators : t;
        return Array.isArray(n)
          ? null != (r = n)
            ? mp.composeAsync(r.map(wp))
            : null
          : n || null;
        var r;
      }
      function Ep(t) {
        return null != t && !Array.isArray(t) && "object" == typeof t;
      }
      class Tp {
        constructor(t, e) {
          (this.validator = t),
            (this.asyncValidator = e),
            (this._onCollectionChange = () => {}),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []);
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return "VALID" === this.status;
        }
        get invalid() {
          return "INVALID" === this.status;
        }
        get pending() {
          return "PENDING" == this.status;
        }
        get disabled() {
          return "DISABLED" === this.status;
        }
        get enabled() {
          return "DISABLED" !== this.status;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : "change";
        }
        setValidators(t) {
          this.validator = Sp(t);
        }
        setAsyncValidators(t) {
          this.asyncValidator = Cp(t);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(t = {}) {
          (this.touched = !0),
            this._parent && !t.onlySelf && this._parent.markAsTouched(t);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((t) => t.markAllAsTouched());
        }
        markAsUntouched(t = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((t) => {
              t.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        markAsDirty(t = {}) {
          (this.pristine = !1),
            this._parent && !t.onlySelf && this._parent.markAsDirty(t);
        }
        markAsPristine(t = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((t) => {
              t.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        markAsPending(t = {}) {
          (this.status = "PENDING"),
            !1 !== t.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !t.onlySelf && this._parent.markAsPending(t);
        }
        disable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = "DISABLED"),
            (this.errors = null),
            this._forEachChild((e) => {
              e.disable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors(
              Object.assign(Object.assign({}, t), { skipPristineCheck: e })
            ),
            this._onDisabledChange.forEach((t) => t(!0));
        }
        enable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = "VALID"),
            this._forEachChild((e) => {
              e.enable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent,
            }),
            this._updateAncestors(
              Object.assign(Object.assign({}, t), { skipPristineCheck: e })
            ),
            this._onDisabledChange.forEach((t) => t(!1));
        }
        _updateAncestors(t) {
          this._parent &&
            !t.onlySelf &&
            (this._parent.updateValueAndValidity(t),
            t.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(t) {
          this._parent = t;
        }
        updateValueAndValidity(t = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              ("VALID" !== this.status && "PENDING" !== this.status) ||
                this._runAsyncValidator(t.emitEvent)),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !t.onlySelf &&
              this._parent.updateValueAndValidity(t);
        }
        _updateTreeValidity(t = { emitEvent: !0 }) {
          this._forEachChild((e) => e._updateTreeValidity(t)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? "DISABLED" : "VALID";
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t) {
          if (this.asyncValidator) {
            this.status = "PENDING";
            const e = yp(this.asyncValidator(this));
            this._asyncValidationSubscription = e.subscribe((e) =>
              this.setErrors(e, { emitEvent: t })
            );
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            this._asyncValidationSubscription.unsubscribe();
        }
        setErrors(t, e = {}) {
          (this.errors = t), this._updateControlsErrors(!1 !== e.emitEvent);
        }
        get(t) {
          return (function (t, e, n) {
            if (null == e) return null;
            if (
              (Array.isArray(e) || (e = e.split(".")),
              Array.isArray(e) && 0 === e.length)
            )
              return null;
            let r = t;
            return (
              e.forEach((t) => {
                r =
                  r instanceof kp
                    ? r.controls.hasOwnProperty(t)
                      ? r.controls[t]
                      : null
                    : (r instanceof Ap && r.at(t)) || null;
              }),
              r
            );
          })(this, t);
        }
        getError(t, e) {
          const n = e ? this.get(e) : this;
          return n && n.errors ? n.errors[t] : null;
        }
        hasError(t, e) {
          return !!this.getError(t, e);
        }
        get root() {
          let t = this;
          for (; t._parent; ) t = t._parent;
          return t;
        }
        _updateControlsErrors(t) {
          (this.status = this._calculateStatus()),
            t && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(t);
        }
        _initObservables() {
          (this.valueChanges = new So()), (this.statusChanges = new So());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? "DISABLED"
            : this.errors
            ? "INVALID"
            : this._anyControlsHaveStatus("PENDING")
            ? "PENDING"
            : this._anyControlsHaveStatus("INVALID")
            ? "INVALID"
            : "VALID";
        }
        _anyControlsHaveStatus(t) {
          return this._anyControls((e) => e.status === t);
        }
        _anyControlsDirty() {
          return this._anyControls((t) => t.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((t) => t.touched);
        }
        _updatePristine(t = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        _updateTouched(t = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        _isBoxedValue(t) {
          return (
            "object" == typeof t &&
            null !== t &&
            2 === Object.keys(t).length &&
            "value" in t &&
            "disabled" in t
          );
        }
        _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
          Ep(t) && null != t.updateOn && (this._updateOn = t.updateOn);
        }
        _parentMarkedDirty(t) {
          return (
            !t &&
            this._parent &&
            this._parent.dirty &&
            !this._parent._anyControlsDirty()
          );
        }
      }
      class xp extends Tp {
        constructor(t = null, e, n) {
          super(Sp(e), Cp(n, e)),
            (this._onChange = []),
            this._applyFormState(t),
            this._setUpdateStrategy(e),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
            this._initObservables();
        }
        setValue(t, e = {}) {
          (this.value = this._pendingValue = t),
            this._onChange.length &&
              !1 !== e.emitModelToViewChange &&
              this._onChange.forEach((t) =>
                t(this.value, !1 !== e.emitViewToModelChange)
              ),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          this.setValue(t, e);
        }
        reset(t = null, e = {}) {
          this._applyFormState(t),
            this.markAsPristine(e),
            this.markAsUntouched(e),
            this.setValue(this.value, e),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(t) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(t) {
          this._onChange.push(t);
        }
        _clearChangeFns() {
          (this._onChange = []),
            (this._onDisabledChange = []),
            (this._onCollectionChange = () => {});
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _forEachChild(t) {}
        _syncPendingControls() {
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
        }
        _applyFormState(t) {
          this._isBoxedValue(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
        }
      }
      class kp extends Tp {
        constructor(t, e, n) {
          super(Sp(e), Cp(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        registerControl(t, e) {
          return this.controls[t]
            ? this.controls[t]
            : ((this.controls[t] = e),
              e.setParent(this),
              e._registerOnCollectionChange(this._onCollectionChange),
              e);
        }
        addControl(t, e) {
          this.registerControl(t, e),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        removeControl(t) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        setControl(t, e) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            e && this.registerControl(t, e),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        contains(t) {
          return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            Object.keys(t).forEach((n) => {
              this._throwIfControlMissing(n),
                this.controls[n].setValue(t[n], {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          Object.keys(t).forEach((n) => {
            this.controls[n] &&
              this.controls[n].patchValue(t[n], {
                onlySelf: !0,
                emitEvent: e.emitEvent,
              });
          }),
            this.updateValueAndValidity(e);
        }
        reset(t = {}, e = {}) {
          this._forEachChild((n, r) => {
            n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (t, e, n) => (
              (t[n] = e instanceof xp ? e.value : e.getRawValue()), t
            )
          );
        }
        _syncPendingControls() {
          let t = this._reduceChildren(
            !1,
            (t, e) => !!e._syncPendingControls() || t
          );
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!Object.keys(this.controls).length)
            throw new Error(
              "\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.controls[t])
            throw new Error(`Cannot find form control with name: ${t}.`);
        }
        _forEachChild(t) {
          Object.keys(this.controls).forEach((e) => t(this.controls[e], e));
        }
        _setUpControls() {
          this._forEachChild((t) => {
            t.setParent(this),
              t._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(t) {
          let e = !1;
          return (
            this._forEachChild((n, r) => {
              e = e || (this.contains(r) && t(n));
            }),
            e
          );
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (t, e, n) => ((e.enabled || this.disabled) && (t[n] = e.value), t)
          );
        }
        _reduceChildren(t, e) {
          let n = t;
          return (
            this._forEachChild((t, r) => {
              n = e(n, t, r);
            }),
            n
          );
        }
        _allControlsDisabled() {
          for (const t of Object.keys(this.controls))
            if (this.controls[t].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n])
              throw new Error(
                `Must supply a value for form control with name: '${n}'.`
              );
          });
        }
      }
      class Ap extends Tp {
        constructor(t, e, n) {
          super(Sp(e), Cp(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        at(t) {
          return this.controls[t];
        }
        push(t) {
          this.controls.push(t),
            this._registerControl(t),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        insert(t, e) {
          this.controls.splice(t, 0, e),
            this._registerControl(e),
            this.updateValueAndValidity();
        }
        removeAt(t) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            this.updateValueAndValidity();
        }
        setControl(t, e) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            e && (this.controls.splice(t, 0, e), this._registerControl(e)),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            t.forEach((t, n) => {
              this._throwIfControlMissing(n),
                this.at(n).setValue(t, {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          t.forEach((t, n) => {
            this.at(n) &&
              this.at(n).patchValue(t, {
                onlySelf: !0,
                emitEvent: e.emitEvent,
              });
          }),
            this.updateValueAndValidity(e);
        }
        reset(t = [], e = {}) {
          this._forEachChild((n, r) => {
            n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this.controls.map((t) =>
            t instanceof xp ? t.value : t.getRawValue()
          );
        }
        clear() {
          this.controls.length < 1 ||
            (this._forEachChild((t) => t._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity());
        }
        _syncPendingControls() {
          let t = this.controls.reduce(
            (t, e) => !!e._syncPendingControls() || t,
            !1
          );
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!this.controls.length)
            throw new Error(
              "\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.at(t))
            throw new Error(`Cannot find form control at index ${t}`);
        }
        _forEachChild(t) {
          this.controls.forEach((e, n) => {
            t(e, n);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter((t) => t.enabled || this.disabled)
            .map((t) => t.value);
        }
        _anyControls(t) {
          return this.controls.some((e) => e.enabled && t(e));
        }
        _setUpControls() {
          this._forEachChild((t) => this._registerControl(t));
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n])
              throw new Error(
                `Must supply a value for form control at index: ${n}.`
              );
          });
        }
        _allControlsDisabled() {
          for (const t of this.controls) if (t.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(t) {
          t.setParent(this),
            t._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const Pp = new Ut("NgModelWithFormControlWarning");
      let Op = (() => {
          class t {}
          return (
            (t.??mod = pe({ type: t })),
            (t.??inj = dt({
              factory: function (e) {
                return new (e || t)();
              },
            })),
            t
          );
        })(),
        Ip = (() => {
          class t {
            group(t, e = null) {
              const n = this._reduceControls(t);
              let r = null,
                s = null,
                i = void 0;
              return (
                null != e &&
                  ((function (t) {
                    return (
                      void 0 !== t.asyncValidators ||
                      void 0 !== t.validators ||
                      void 0 !== t.updateOn
                    );
                  })(e)
                    ? ((r = null != e.validators ? e.validators : null),
                      (s =
                        null != e.asyncValidators ? e.asyncValidators : null),
                      (i = null != e.updateOn ? e.updateOn : void 0))
                    : ((r = null != e.validator ? e.validator : null),
                      (s =
                        null != e.asyncValidator ? e.asyncValidator : null))),
                new kp(n, { asyncValidators: s, updateOn: i, validators: r })
              );
            }
            control(t, e, n) {
              return new xp(t, e, n);
            }
            array(t, e, n) {
              const r = t.map((t) => this._createControl(t));
              return new Ap(r, e, n);
            }
            _reduceControls(t) {
              const e = {};
              return (
                Object.keys(t).forEach((n) => {
                  e[n] = this._createControl(t[n]);
                }),
                e
              );
            }
            _createControl(t) {
              return t instanceof xp || t instanceof kp || t instanceof Ap
                ? t
                : Array.isArray(t)
                ? this.control(
                    t[0],
                    t.length > 1 ? t[1] : null,
                    t.length > 2 ? t[2] : null
                  )
                : this.control(t);
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)();
            }),
            (t.??prov = ht({ token: t, factory: t.??fac })),
            t
          );
        })(),
        Rp = (() => {
          class t {
            static withConfig(e) {
              return {
                ngModule: t,
                providers: [
                  { provide: Pp, useValue: e.warnOnNgModelWithFormControl },
                ],
              };
            }
          }
          return (
            (t.??mod = pe({ type: t })),
            (t.??inj = dt({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [Ip, bp],
              imports: [Op],
            })),
            t
          );
        })();
      class Np {}
      function Dp(t, e = null) {
        return { type: 2, steps: t, options: e };
      }
      function jp(t) {
        return { type: 6, styles: t, offset: null };
      }
      function Fp(t) {
        Promise.resolve(null).then(t);
      }
      class Lp {
        constructor(t = 0, e = 0) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this.parentPlayer = null),
            (this.totalTime = t + e);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []));
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        hasStarted() {
          return this._started;
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
            (this._started = !0);
        }
        triggerMicrotask() {
          Fp(() => this._onFinish());
        }
        _onStart() {
          this._onStartFns.forEach((t) => t()), (this._onStartFns = []);
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish();
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []));
        }
        reset() {}
        setPosition(t) {}
        getPosition() {
          return 0;
        }
        triggerCallback(t) {
          const e = "start" == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
      }
      class Up {
        constructor(t) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = t);
          let e = 0,
            n = 0,
            r = 0;
          const s = this.players.length;
          0 == s
            ? Fp(() => this._onFinish())
            : this.players.forEach((t) => {
                t.onDone(() => {
                  ++e == s && this._onFinish();
                }),
                  t.onDestroy(() => {
                    ++n == s && this._onDestroy();
                  }),
                  t.onStart(() => {
                    ++r == s && this._onStart();
                  });
              }),
            (this.totalTime = this.players.reduce(
              (t, e) => Math.max(t, e.totalTime),
              0
            ));
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []));
        }
        init() {
          this.players.forEach((t) => t.init());
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        _onStart() {
          this.hasStarted() ||
            ((this._started = !0),
            this._onStartFns.forEach((t) => t()),
            (this._onStartFns = []));
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this.parentPlayer || this.init(),
            this._onStart(),
            this.players.forEach((t) => t.play());
        }
        pause() {
          this.players.forEach((t) => t.pause());
        }
        restart() {
          this.players.forEach((t) => t.restart());
        }
        finish() {
          this._onFinish(), this.players.forEach((t) => t.finish());
        }
        destroy() {
          this._onDestroy();
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach((t) => t.destroy()),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []));
        }
        reset() {
          this.players.forEach((t) => t.reset()),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        setPosition(t) {
          const e = t * this.totalTime;
          this.players.forEach((t) => {
            const n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
            t.setPosition(n);
          });
        }
        getPosition() {
          let t = 0;
          return (
            this.players.forEach((e) => {
              const n = e.getPosition();
              t = Math.min(n, t);
            }),
            t
          );
        }
        beforeDestroy() {
          this.players.forEach((t) => {
            t.beforeDestroy && t.beforeDestroy();
          });
        }
        triggerCallback(t) {
          const e = "start" == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
      }
      function Vp() {
        return "undefined" != typeof process;
      }
      function Mp(t) {
        switch (t.length) {
          case 0:
            return new Lp();
          case 1:
            return t[0];
          default:
            return new Up(t);
        }
      }
      function $p(t, e, n, r, s = {}, i = {}) {
        const o = [],
          a = [];
        let l = -1,
          u = null;
        if (
          (r.forEach((t) => {
            const n = t.offset,
              r = n == l,
              c = (r && u) || {};
            Object.keys(t).forEach((n) => {
              let r = n,
                a = t[n];
              if ("offset" !== n)
                switch (((r = e.normalizePropertyName(r, o)), a)) {
                  case "!":
                    a = s[n];
                    break;
                  case "*":
                    a = i[n];
                    break;
                  default:
                    a = e.normalizeStyleValue(n, r, a, o);
                }
              c[r] = a;
            }),
              r || a.push(c),
              (u = c),
              (l = n);
          }),
          o.length)
        ) {
          const t = "\n - ";
          throw new Error(
            `Unable to animate due to the following errors:${t}${o.join(t)}`
          );
        }
        return a;
      }
      function Hp(t, e, n, r) {
        switch (e) {
          case "start":
            t.onStart(() => r(n && qp(n, "start", t)));
            break;
          case "done":
            t.onDone(() => r(n && qp(n, "done", t)));
            break;
          case "destroy":
            t.onDestroy(() => r(n && qp(n, "destroy", t)));
        }
      }
      function qp(t, e, n) {
        const r = n.totalTime,
          s = zp(
            t.element,
            t.triggerName,
            t.fromState,
            t.toState,
            e || t.phaseName,
            null == r ? t.totalTime : r,
            !!n.disabled
          ),
          i = t._data;
        return null != i && (s._data = i), s;
      }
      function zp(t, e, n, r, s = "", i = 0, o) {
        return {
          element: t,
          triggerName: e,
          fromState: n,
          toState: r,
          phaseName: s,
          totalTime: i,
          disabled: !!o,
        };
      }
      function Bp(t, e, n) {
        let r;
        return (
          t instanceof Map
            ? ((r = t.get(e)), r || t.set(e, (r = n)))
            : ((r = t[e]), r || (r = t[e] = n)),
          r
        );
      }
      function Qp(t) {
        const e = t.indexOf(":");
        return [t.substring(1, e), t.substr(e + 1)];
      }
      let Wp = (t, e) => !1,
        Kp = (t, e) => !1,
        Zp = (t, e, n) => [];
      const Gp = Vp();
      (Gp || "undefined" != typeof Element) &&
        ((Wp = (t, e) => t.contains(e)),
        (Kp = (() => {
          if (Gp || Element.prototype.matches) return (t, e) => t.matches(e);
          {
            const t = Element.prototype,
              e =
                t.matchesSelector ||
                t.mozMatchesSelector ||
                t.msMatchesSelector ||
                t.oMatchesSelector ||
                t.webkitMatchesSelector;
            return e ? (t, n) => e.apply(t, [n]) : Kp;
          }
        })()),
        (Zp = (t, e, n) => {
          let r = [];
          if (n) r.push(...t.querySelectorAll(e));
          else {
            const n = t.querySelector(e);
            n && r.push(n);
          }
          return r;
        }));
      let Jp = null,
        Yp = !1;
      function Xp(t) {
        Jp ||
          ((Jp = ("undefined" != typeof document ? document.body : null) || {}),
          (Yp = !!Jp.style && "WebkitAppearance" in Jp.style));
        let e = !0;
        return (
          Jp.style &&
            !(function (t) {
              return "ebkit" == t.substring(1, 6);
            })(t) &&
            ((e = t in Jp.style), !e && Yp) &&
            (e =
              "Webkit" + t.charAt(0).toUpperCase() + t.substr(1) in Jp.style),
          e
        );
      }
      const tf = Kp,
        ef = Wp,
        nf = Zp;
      function rf(t) {
        const e = {};
        return (
          Object.keys(t).forEach((n) => {
            const r = n.replace(/([a-z])([A-Z])/g, "$1-$2");
            e[r] = t[n];
          }),
          e
        );
      }
      let sf = (() => {
          class t {
            validateStyleProperty(t) {
              return Xp(t);
            }
            matchesElement(t, e) {
              return tf(t, e);
            }
            containsElement(t, e) {
              return ef(t, e);
            }
            query(t, e, n) {
              return nf(t, e, n);
            }
            computeStyle(t, e, n) {
              return n || "";
            }
            animate(t, e, n, r, s, i = [], o) {
              return new Lp(n, r);
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)();
            }),
            (t.??prov = ht({ token: t, factory: t.??fac })),
            t
          );
        })(),
        of = (() => {
          class t {}
          return (t.NOOP = new sf()), t;
        })();
      function af(t) {
        if ("number" == typeof t) return t;
        const e = t.match(/^(-?[\.\d]+)(m?s)/);
        return !e || e.length < 2 ? 0 : lf(parseFloat(e[1]), e[2]);
      }
      function lf(t, e) {
        switch (e) {
          case "s":
            return 1e3 * t;
          default:
            return t;
        }
      }
      function uf(t, e, n) {
        return t.hasOwnProperty("duration")
          ? t
          : (function (t, e, n) {
              let r,
                s = 0,
                i = "";
              if ("string" == typeof t) {
                const n = t.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === n)
                  return (
                    e.push(`The provided timing value "${t}" is invalid.`),
                    { duration: 0, delay: 0, easing: "" }
                  );
                r = lf(parseFloat(n[1]), n[2]);
                const o = n[3];
                null != o && (s = lf(parseFloat(o), n[4]));
                const a = n[5];
                a && (i = a);
              } else r = t;
              if (!n) {
                let n = !1,
                  i = e.length;
                r < 0 &&
                  (e.push(
                    "Duration values below 0 are not allowed for this animation step."
                  ),
                  (n = !0)),
                  s < 0 &&
                    (e.push(
                      "Delay values below 0 are not allowed for this animation step."
                    ),
                    (n = !0)),
                  n &&
                    e.splice(
                      i,
                      0,
                      `The provided timing value "${t}" is invalid.`
                    );
              }
              return { duration: r, delay: s, easing: i };
            })(t, e, n);
      }
      function cf(t, e = {}) {
        return (
          Object.keys(t).forEach((n) => {
            e[n] = t[n];
          }),
          e
        );
      }
      function hf(t, e, n = {}) {
        if (e) for (let r in t) n[r] = t[r];
        else cf(t, n);
        return n;
      }
      function df(t, e, n) {
        return n ? e + ":" + n + ";" : "";
      }
      function pf(t) {
        let e = "";
        for (let n = 0; n < t.style.length; n++) {
          const r = t.style.item(n);
          e += df(0, r, t.style.getPropertyValue(r));
        }
        for (const n in t.style)
          t.style.hasOwnProperty(n) &&
            !n.startsWith("_") &&
            (e += df(
              0,
              n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
              t.style[n]
            ));
        t.setAttribute("style", e);
      }
      function ff(t, e, n) {
        t.style &&
          (Object.keys(e).forEach((r) => {
            const s = Sf(r);
            n && !n.hasOwnProperty(r) && (n[r] = t.style[s]),
              (t.style[s] = e[r]);
          }),
          Vp() && pf(t));
      }
      function mf(t, e) {
        t.style &&
          (Object.keys(e).forEach((e) => {
            const n = Sf(e);
            t.style[n] = "";
          }),
          Vp() && pf(t));
      }
      function gf(t) {
        return Array.isArray(t) ? (1 == t.length ? t[0] : Dp(t)) : t;
      }
      const yf = new RegExp("{{\\s*(.+?)\\s*}}", "g");
      function _f(t) {
        let e = [];
        if ("string" == typeof t) {
          let n;
          for (; (n = yf.exec(t)); ) e.push(n[1]);
          yf.lastIndex = 0;
        }
        return e;
      }
      function vf(t, e, n) {
        const r = t.toString(),
          s = r.replace(yf, (t, r) => {
            let s = e[r];
            return (
              e.hasOwnProperty(r) ||
                (n.push(`Please provide a value for the animation param ${r}`),
                (s = "")),
              s.toString()
            );
          });
        return s == r ? t : s;
      }
      function wf(t) {
        const e = [];
        let n = t.next();
        for (; !n.done; ) e.push(n.value), (n = t.next());
        return e;
      }
      const bf = /-+([a-z0-9])/g;
      function Sf(t) {
        return t.replace(bf, (...t) => t[1].toUpperCase());
      }
      function Cf(t, e) {
        return 0 === t || 0 === e;
      }
      function Ef(t, e, n) {
        const r = Object.keys(n);
        if (r.length && e.length) {
          let i = e[0],
            o = [];
          if (
            (r.forEach((t) => {
              i.hasOwnProperty(t) || o.push(t), (i[t] = n[t]);
            }),
            o.length)
          )
            for (var s = 1; s < e.length; s++) {
              let n = e[s];
              o.forEach(function (e) {
                n[e] = xf(t, e);
              });
            }
        }
        return e;
      }
      function Tf(t, e, n) {
        switch (e.type) {
          case 7:
            return t.visitTrigger(e, n);
          case 0:
            return t.visitState(e, n);
          case 1:
            return t.visitTransition(e, n);
          case 2:
            return t.visitSequence(e, n);
          case 3:
            return t.visitGroup(e, n);
          case 4:
            return t.visitAnimate(e, n);
          case 5:
            return t.visitKeyframes(e, n);
          case 6:
            return t.visitStyle(e, n);
          case 8:
            return t.visitReference(e, n);
          case 9:
            return t.visitAnimateChild(e, n);
          case 10:
            return t.visitAnimateRef(e, n);
          case 11:
            return t.visitQuery(e, n);
          case 12:
            return t.visitStagger(e, n);
          default:
            throw new Error(
              `Unable to resolve animation metadata node #${e.type}`
            );
        }
      }
      function xf(t, e) {
        return window.getComputedStyle(t)[e];
      }
      function kf(t, e) {
        const n = [];
        return (
          "string" == typeof t
            ? t.split(/\s*,\s*/).forEach((t) =>
                (function (t, e, n) {
                  if (":" == t[0]) {
                    const r = (function (t, e) {
                      switch (t) {
                        case ":enter":
                          return "void => *";
                        case ":leave":
                          return "* => void";
                        case ":increment":
                          return (t, e) => parseFloat(e) > parseFloat(t);
                        case ":decrement":
                          return (t, e) => parseFloat(e) < parseFloat(t);
                        default:
                          return (
                            e.push(
                              `The transition alias value "${t}" is not supported`
                            ),
                            "* => *"
                          );
                      }
                    })(t, n);
                    if ("function" == typeof r) return void e.push(r);
                    t = r;
                  }
                  const r = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == r || r.length < 4)
                    return (
                      n.push(
                        `The provided transition expression "${t}" is not supported`
                      ),
                      e
                    );
                  const s = r[1],
                    i = r[2],
                    o = r[3];
                  e.push(Of(s, o)),
                    "<" != i[0] || ("*" == s && "*" == o) || e.push(Of(o, s));
                })(t, n, e)
              )
            : n.push(t),
          n
        );
      }
      const Af = new Set(["true", "1"]),
        Pf = new Set(["false", "0"]);
      function Of(t, e) {
        const n = Af.has(t) || Pf.has(t),
          r = Af.has(e) || Pf.has(e);
        return (s, i) => {
          let o = "*" == t || t == s,
            a = "*" == e || e == i;
          return (
            !o && n && "boolean" == typeof s && (o = s ? Af.has(t) : Pf.has(t)),
            !a && r && "boolean" == typeof i && (a = i ? Af.has(e) : Pf.has(e)),
            o && a
          );
        };
      }
      const If = new RegExp("s*:selfs*,?", "g");
      function Rf(t, e, n) {
        return new Nf(t).build(e, n);
      }
      class Nf {
        constructor(t) {
          this._driver = t;
        }
        build(t, e) {
          const n = new Df(e);
          return this._resetContextStyleTimingState(n), Tf(this, gf(t), n);
        }
        _resetContextStyleTimingState(t) {
          (t.currentQuerySelector = ""),
            (t.collectedStyles = {}),
            (t.collectedStyles[""] = {}),
            (t.currentTime = 0);
        }
        visitTrigger(t, e) {
          let n = (e.queryCount = 0),
            r = (e.depCount = 0);
          const s = [],
            i = [];
          return (
            "@" == t.name.charAt(0) &&
              e.errors.push(
                "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"
              ),
            t.definitions.forEach((t) => {
              if ((this._resetContextStyleTimingState(e), 0 == t.type)) {
                const n = t,
                  r = n.name;
                r
                  .toString()
                  .split(/\s*,\s*/)
                  .forEach((t) => {
                    (n.name = t), s.push(this.visitState(n, e));
                  }),
                  (n.name = r);
              } else if (1 == t.type) {
                const s = this.visitTransition(t, e);
                (n += s.queryCount), (r += s.depCount), i.push(s);
              } else
                e.errors.push(
                  "only state() and transition() definitions can sit inside of a trigger()"
                );
            }),
            {
              type: 7,
              name: t.name,
              states: s,
              transitions: i,
              queryCount: n,
              depCount: r,
              options: null,
            }
          );
        }
        visitState(t, e) {
          const n = this.visitStyle(t.styles, e),
            r = (t.options && t.options.params) || null;
          if (n.containsDynamicStyles) {
            const s = new Set(),
              i = r || {};
            if (
              (n.styles.forEach((t) => {
                if (jf(t)) {
                  const e = t;
                  Object.keys(e).forEach((t) => {
                    _f(e[t]).forEach((t) => {
                      i.hasOwnProperty(t) || s.add(t);
                    });
                  });
                }
              }),
              s.size)
            ) {
              const n = wf(s.values());
              e.errors.push(
                `state("${
                  t.name
                }", ...) must define default values for all the following style substitutions: ${n.join(
                  ", "
                )}`
              );
            }
          }
          return {
            type: 0,
            name: t.name,
            style: n,
            options: r ? { params: r } : null,
          };
        }
        visitTransition(t, e) {
          (e.queryCount = 0), (e.depCount = 0);
          const n = Tf(this, gf(t.animation), e);
          return {
            type: 1,
            matchers: kf(t.expr, e.errors),
            animation: n,
            queryCount: e.queryCount,
            depCount: e.depCount,
            options: Ff(t.options),
          };
        }
        visitSequence(t, e) {
          return {
            type: 2,
            steps: t.steps.map((t) => Tf(this, t, e)),
            options: Ff(t.options),
          };
        }
        visitGroup(t, e) {
          const n = e.currentTime;
          let r = 0;
          const s = t.steps.map((t) => {
            e.currentTime = n;
            const s = Tf(this, t, e);
            return (r = Math.max(r, e.currentTime)), s;
          });
          return (
            (e.currentTime = r), { type: 3, steps: s, options: Ff(t.options) }
          );
        }
        visitAnimate(t, e) {
          const n = (function (t, e) {
            let n = null;
            if (t.hasOwnProperty("duration")) n = t;
            else if ("number" == typeof t) return Lf(uf(t, e).duration, 0, "");
            const r = t;
            if (
              r
                .split(/\s+/)
                .some((t) => "{" == t.charAt(0) && "{" == t.charAt(1))
            ) {
              const t = Lf(0, 0, "");
              return (t.dynamic = !0), (t.strValue = r), t;
            }
            return (n = n || uf(r, e)), Lf(n.duration, n.delay, n.easing);
          })(t.timings, e.errors);
          let r;
          e.currentAnimateTimings = n;
          let s = t.styles ? t.styles : jp({});
          if (5 == s.type) r = this.visitKeyframes(s, e);
          else {
            let s = t.styles,
              i = !1;
            if (!s) {
              i = !0;
              const t = {};
              n.easing && (t.easing = n.easing), (s = jp(t));
            }
            e.currentTime += n.duration + n.delay;
            const o = this.visitStyle(s, e);
            (o.isEmptyStep = i), (r = o);
          }
          return (
            (e.currentAnimateTimings = null),
            { type: 4, timings: n, style: r, options: null }
          );
        }
        visitStyle(t, e) {
          const n = this._makeStyleAst(t, e);
          return this._validateStyleAst(n, e), n;
        }
        _makeStyleAst(t, e) {
          const n = [];
          Array.isArray(t.styles)
            ? t.styles.forEach((t) => {
                "string" == typeof t
                  ? "*" == t
                    ? n.push(t)
                    : e.errors.push(
                        `The provided style string value ${t} is not allowed.`
                      )
                  : n.push(t);
              })
            : n.push(t.styles);
          let r = !1,
            s = null;
          return (
            n.forEach((t) => {
              if (jf(t)) {
                const e = t,
                  n = e.easing;
                if ((n && ((s = n), delete e.easing), !r))
                  for (let t in e)
                    if (e[t].toString().indexOf("{{") >= 0) {
                      r = !0;
                      break;
                    }
              }
            }),
            {
              type: 6,
              styles: n,
              easing: s,
              offset: t.offset,
              containsDynamicStyles: r,
              options: null,
            }
          );
        }
        _validateStyleAst(t, e) {
          const n = e.currentAnimateTimings;
          let r = e.currentTime,
            s = e.currentTime;
          n && s > 0 && (s -= n.duration + n.delay),
            t.styles.forEach((t) => {
              "string" != typeof t &&
                Object.keys(t).forEach((n) => {
                  if (!this._driver.validateStyleProperty(n))
                    return void e.errors.push(
                      `The provided animation property "${n}" is not a supported CSS property for animations`
                    );
                  const i = e.collectedStyles[e.currentQuerySelector],
                    o = i[n];
                  let a = !0;
                  o &&
                    (s != r &&
                      s >= o.startTime &&
                      r <= o.endTime &&
                      (e.errors.push(
                        `The CSS property "${n}" that exists between the times of "${o.startTime}ms" and "${o.endTime}ms" is also being animated in a parallel animation between the times of "${s}ms" and "${r}ms"`
                      ),
                      (a = !1)),
                    (s = o.startTime)),
                    a && (i[n] = { startTime: s, endTime: r }),
                    e.options &&
                      (function (t, e, n) {
                        const r = e.params || {},
                          s = _f(t);
                        s.length &&
                          s.forEach((t) => {
                            r.hasOwnProperty(t) ||
                              n.push(
                                `Unable to resolve the local animation param ${t} in the given list of values`
                              );
                          });
                      })(t[n], e.options, e.errors);
                });
            });
        }
        visitKeyframes(t, e) {
          const n = { type: 5, styles: [], options: null };
          if (!e.currentAnimateTimings)
            return (
              e.errors.push(
                "keyframes() must be placed inside of a call to animate()"
              ),
              n
            );
          let r = 0;
          const s = [];
          let i = !1,
            o = !1,
            a = 0;
          const l = t.steps.map((t) => {
            const n = this._makeStyleAst(t, e);
            let l =
                null != n.offset
                  ? n.offset
                  : (function (t) {
                      if ("string" == typeof t) return null;
                      let e = null;
                      if (Array.isArray(t))
                        t.forEach((t) => {
                          if (jf(t) && t.hasOwnProperty("offset")) {
                            const n = t;
                            (e = parseFloat(n.offset)), delete n.offset;
                          }
                        });
                      else if (jf(t) && t.hasOwnProperty("offset")) {
                        const n = t;
                        (e = parseFloat(n.offset)), delete n.offset;
                      }
                      return e;
                    })(n.styles),
              u = 0;
            return (
              null != l && (r++, (u = n.offset = l)),
              (o = o || u < 0 || u > 1),
              (i = i || u < a),
              (a = u),
              s.push(u),
              n
            );
          });
          o &&
            e.errors.push(
              "Please ensure that all keyframe offsets are between 0 and 1"
            ),
            i &&
              e.errors.push(
                "Please ensure that all keyframe offsets are in order"
              );
          const u = t.steps.length;
          let c = 0;
          r > 0 && r < u
            ? e.errors.push(
                "Not all style() steps within the declared keyframes() contain offsets"
              )
            : 0 == r && (c = 1 / (u - 1));
          const h = u - 1,
            d = e.currentTime,
            p = e.currentAnimateTimings,
            f = p.duration;
          return (
            l.forEach((t, r) => {
              const i = c > 0 ? (r == h ? 1 : c * r) : s[r],
                o = i * f;
              (e.currentTime = d + p.delay + o),
                (p.duration = o),
                this._validateStyleAst(t, e),
                (t.offset = i),
                n.styles.push(t);
            }),
            n
          );
        }
        visitReference(t, e) {
          return {
            type: 8,
            animation: Tf(this, gf(t.animation), e),
            options: Ff(t.options),
          };
        }
        visitAnimateChild(t, e) {
          return e.depCount++, { type: 9, options: Ff(t.options) };
        }
        visitAnimateRef(t, e) {
          return {
            type: 10,
            animation: this.visitReference(t.animation, e),
            options: Ff(t.options),
          };
        }
        visitQuery(t, e) {
          const n = e.currentQuerySelector,
            r = t.options || {};
          e.queryCount++, (e.currentQuery = t);
          const [s, i] = (function (t) {
            const e = !!t.split(/\s*,\s*/).find((t) => ":self" == t);
            return (
              e && (t = t.replace(If, "")),
              [
                (t = t
                  .replace(/@\*/g, ".ng-trigger")
                  .replace(/@\w+/g, (t) => ".ng-trigger-" + t.substr(1))
                  .replace(/:animating/g, ".ng-animating")),
                e,
              ]
            );
          })(t.selector);
          (e.currentQuerySelector = n.length ? n + " " + s : s),
            Bp(e.collectedStyles, e.currentQuerySelector, {});
          const o = Tf(this, gf(t.animation), e);
          return (
            (e.currentQuery = null),
            (e.currentQuerySelector = n),
            {
              type: 11,
              selector: s,
              limit: r.limit || 0,
              optional: !!r.optional,
              includeSelf: i,
              animation: o,
              originalSelector: t.selector,
              options: Ff(t.options),
            }
          );
        }
        visitStagger(t, e) {
          e.currentQuery ||
            e.errors.push("stagger() can only be used inside of query()");
          const n =
            "full" === t.timings
              ? { duration: 0, delay: 0, easing: "full" }
              : uf(t.timings, e.errors, !0);
          return {
            type: 12,
            animation: Tf(this, gf(t.animation), e),
            timings: n,
            options: null,
          };
        }
      }
      class Df {
        constructor(t) {
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
        }
      }
      function jf(t) {
        return !Array.isArray(t) && "object" == typeof t;
      }
      function Ff(t) {
        var e;
        return (
          t
            ? (t = cf(t)).params && (t.params = (e = t.params) ? cf(e) : null)
            : (t = {}),
          t
        );
      }
      function Lf(t, e, n) {
        return { duration: t, delay: e, easing: n };
      }
      function Uf(t, e, n, r, s, i, o = null, a = !1) {
        return {
          type: 1,
          element: t,
          keyframes: e,
          preStyleProps: n,
          postStyleProps: r,
          duration: s,
          delay: i,
          totalTime: s + i,
          easing: o,
          subTimeline: a,
        };
      }
      class Vf {
        constructor() {
          this._map = new Map();
        }
        consume(t) {
          let e = this._map.get(t);
          return e ? this._map.delete(t) : (e = []), e;
        }
        append(t, e) {
          let n = this._map.get(t);
          n || this._map.set(t, (n = [])), n.push(...e);
        }
        has(t) {
          return this._map.has(t);
        }
        clear() {
          this._map.clear();
        }
      }
      const Mf = new RegExp(":enter", "g"),
        $f = new RegExp(":leave", "g");
      function Hf(t, e, n, r, s, i = {}, o = {}, a, l, u = []) {
        return new qf().buildKeyframes(t, e, n, r, s, i, o, a, l, u);
      }
      class qf {
        buildKeyframes(t, e, n, r, s, i, o, a, l, u = []) {
          l = l || new Vf();
          const c = new Bf(t, e, l, r, s, u, []);
          (c.options = a),
            c.currentTimeline.setStyles([i], null, c.errors, a),
            Tf(this, n, c);
          const h = c.timelines.filter((t) => t.containsAnimation());
          if (h.length && Object.keys(o).length) {
            const t = h[h.length - 1];
            t.allowOnlyTimelineStyles() || t.setStyles([o], null, c.errors, a);
          }
          return h.length
            ? h.map((t) => t.buildKeyframes())
            : [Uf(e, [], [], [], 0, 0, "", !1)];
        }
        visitTrigger(t, e) {}
        visitState(t, e) {}
        visitTransition(t, e) {}
        visitAnimateChild(t, e) {
          const n = e.subInstructions.consume(e.element);
          if (n) {
            const r = e.createSubContext(t.options),
              s = e.currentTimeline.currentTime,
              i = this._visitSubInstructions(n, r, r.options);
            s != i && e.transformIntoNewTimeline(i);
          }
          e.previousNode = t;
        }
        visitAnimateRef(t, e) {
          const n = e.createSubContext(t.options);
          n.transformIntoNewTimeline(),
            this.visitReference(t.animation, n),
            e.transformIntoNewTimeline(n.currentTimeline.currentTime),
            (e.previousNode = t);
        }
        _visitSubInstructions(t, e, n) {
          let r = e.currentTimeline.currentTime;
          const s = null != n.duration ? af(n.duration) : null,
            i = null != n.delay ? af(n.delay) : null;
          return (
            0 !== s &&
              t.forEach((t) => {
                const n = e.appendInstructionToTimeline(t, s, i);
                r = Math.max(r, n.duration + n.delay);
              }),
            r
          );
        }
        visitReference(t, e) {
          e.updateOptions(t.options, !0),
            Tf(this, t.animation, e),
            (e.previousNode = t);
        }
        visitSequence(t, e) {
          const n = e.subContextCount;
          let r = e;
          const s = t.options;
          if (
            s &&
            (s.params || s.delay) &&
            ((r = e.createSubContext(s)),
            r.transformIntoNewTimeline(),
            null != s.delay)
          ) {
            6 == r.previousNode.type &&
              (r.currentTimeline.snapshotCurrentStyles(),
              (r.previousNode = zf));
            const t = af(s.delay);
            r.delayNextStep(t);
          }
          t.steps.length &&
            (t.steps.forEach((t) => Tf(this, t, r)),
            r.currentTimeline.applyStylesToKeyframe(),
            r.subContextCount > n && r.transformIntoNewTimeline()),
            (e.previousNode = t);
        }
        visitGroup(t, e) {
          const n = [];
          let r = e.currentTimeline.currentTime;
          const s = t.options && t.options.delay ? af(t.options.delay) : 0;
          t.steps.forEach((i) => {
            const o = e.createSubContext(t.options);
            s && o.delayNextStep(s),
              Tf(this, i, o),
              (r = Math.max(r, o.currentTimeline.currentTime)),
              n.push(o.currentTimeline);
          }),
            n.forEach((t) => e.currentTimeline.mergeTimelineCollectedStyles(t)),
            e.transformIntoNewTimeline(r),
            (e.previousNode = t);
        }
        _visitTiming(t, e) {
          if (t.dynamic) {
            const n = t.strValue;
            return uf(e.params ? vf(n, e.params, e.errors) : n, e.errors);
          }
          return { duration: t.duration, delay: t.delay, easing: t.easing };
        }
        visitAnimate(t, e) {
          const n = (e.currentAnimateTimings = this._visitTiming(t.timings, e)),
            r = e.currentTimeline;
          n.delay && (e.incrementTime(n.delay), r.snapshotCurrentStyles());
          const s = t.style;
          5 == s.type
            ? this.visitKeyframes(s, e)
            : (e.incrementTime(n.duration),
              this.visitStyle(s, e),
              r.applyStylesToKeyframe()),
            (e.currentAnimateTimings = null),
            (e.previousNode = t);
        }
        visitStyle(t, e) {
          const n = e.currentTimeline,
            r = e.currentAnimateTimings;
          !r && n.getCurrentStyleProperties().length && n.forwardFrame();
          const s = (r && r.easing) || t.easing;
          t.isEmptyStep
            ? n.applyEmptyStep(s)
            : n.setStyles(t.styles, s, e.errors, e.options),
            (e.previousNode = t);
        }
        visitKeyframes(t, e) {
          const n = e.currentAnimateTimings,
            r = e.currentTimeline.duration,
            s = n.duration,
            i = e.createSubContext().currentTimeline;
          (i.easing = n.easing),
            t.styles.forEach((t) => {
              i.forwardTime((t.offset || 0) * s),
                i.setStyles(t.styles, t.easing, e.errors, e.options),
                i.applyStylesToKeyframe();
            }),
            e.currentTimeline.mergeTimelineCollectedStyles(i),
            e.transformIntoNewTimeline(r + s),
            (e.previousNode = t);
        }
        visitQuery(t, e) {
          const n = e.currentTimeline.currentTime,
            r = t.options || {},
            s = r.delay ? af(r.delay) : 0;
          s &&
            (6 === e.previousNode.type ||
              (0 == n &&
                e.currentTimeline.getCurrentStyleProperties().length)) &&
            (e.currentTimeline.snapshotCurrentStyles(), (e.previousNode = zf));
          let i = n;
          const o = e.invokeQuery(
            t.selector,
            t.originalSelector,
            t.limit,
            t.includeSelf,
            !!r.optional,
            e.errors
          );
          e.currentQueryTotal = o.length;
          let a = null;
          o.forEach((n, r) => {
            e.currentQueryIndex = r;
            const o = e.createSubContext(t.options, n);
            s && o.delayNextStep(s),
              n === e.element && (a = o.currentTimeline),
              Tf(this, t.animation, o),
              o.currentTimeline.applyStylesToKeyframe(),
              (i = Math.max(i, o.currentTimeline.currentTime));
          }),
            (e.currentQueryIndex = 0),
            (e.currentQueryTotal = 0),
            e.transformIntoNewTimeline(i),
            a &&
              (e.currentTimeline.mergeTimelineCollectedStyles(a),
              e.currentTimeline.snapshotCurrentStyles()),
            (e.previousNode = t);
        }
        visitStagger(t, e) {
          const n = e.parentContext,
            r = e.currentTimeline,
            s = t.timings,
            i = Math.abs(s.duration),
            o = i * (e.currentQueryTotal - 1);
          let a = i * e.currentQueryIndex;
          switch (s.duration < 0 ? "reverse" : s.easing) {
            case "reverse":
              a = o - a;
              break;
            case "full":
              a = n.currentStaggerTime;
          }
          const l = e.currentTimeline;
          a && l.delayNextStep(a);
          const u = l.currentTime;
          Tf(this, t.animation, e),
            (e.previousNode = t),
            (n.currentStaggerTime =
              r.currentTime - u + (r.startTime - n.currentTimeline.startTime));
        }
      }
      const zf = {};
      class Bf {
        constructor(t, e, n, r, s, i, o, a) {
          (this._driver = t),
            (this.element = e),
            (this.subInstructions = n),
            (this._enterClassName = r),
            (this._leaveClassName = s),
            (this.errors = i),
            (this.timelines = o),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = zf),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = a || new Qf(this._driver, e, 0)),
            o.push(this.currentTimeline);
        }
        get params() {
          return this.options.params;
        }
        updateOptions(t, e) {
          if (!t) return;
          const n = t;
          let r = this.options;
          null != n.duration && (r.duration = af(n.duration)),
            null != n.delay && (r.delay = af(n.delay));
          const s = n.params;
          if (s) {
            let t = r.params;
            t || (t = this.options.params = {}),
              Object.keys(s).forEach((n) => {
                (e && t.hasOwnProperty(n)) || (t[n] = vf(s[n], t, this.errors));
              });
          }
        }
        _copyOptions() {
          const t = {};
          if (this.options) {
            const e = this.options.params;
            if (e) {
              const n = (t.params = {});
              Object.keys(e).forEach((t) => {
                n[t] = e[t];
              });
            }
          }
          return t;
        }
        createSubContext(t = null, e, n) {
          const r = e || this.element,
            s = new Bf(
              this._driver,
              r,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(r, n || 0)
            );
          return (
            (s.previousNode = this.previousNode),
            (s.currentAnimateTimings = this.currentAnimateTimings),
            (s.options = this._copyOptions()),
            s.updateOptions(t),
            (s.currentQueryIndex = this.currentQueryIndex),
            (s.currentQueryTotal = this.currentQueryTotal),
            (s.parentContext = this),
            this.subContextCount++,
            s
          );
        }
        transformIntoNewTimeline(t) {
          return (
            (this.previousNode = zf),
            (this.currentTimeline = this.currentTimeline.fork(this.element, t)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          );
        }
        appendInstructionToTimeline(t, e, n) {
          const r = {
              duration: null != e ? e : t.duration,
              delay:
                this.currentTimeline.currentTime +
                (null != n ? n : 0) +
                t.delay,
              easing: "",
            },
            s = new Wf(
              this._driver,
              t.element,
              t.keyframes,
              t.preStyleProps,
              t.postStyleProps,
              r,
              t.stretchStartingKeyframe
            );
          return this.timelines.push(s), r;
        }
        incrementTime(t) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + t);
        }
        delayNextStep(t) {
          t > 0 && this.currentTimeline.delayNextStep(t);
        }
        invokeQuery(t, e, n, r, s, i) {
          let o = [];
          if ((r && o.push(this.element), t.length > 0)) {
            t = (t = t.replace(Mf, "." + this._enterClassName)).replace(
              $f,
              "." + this._leaveClassName
            );
            let e = this._driver.query(this.element, t, 1 != n);
            0 !== n &&
              (e = n < 0 ? e.slice(e.length + n, e.length) : e.slice(0, n)),
              o.push(...e);
          }
          return (
            s ||
              0 != o.length ||
              i.push(
                `\`query("${e}")\` returned zero elements. (Use \`query("${e}", { optional: true })\` if you wish to allow this.)`
              ),
            o
          );
        }
      }
      class Qf {
        constructor(t, e, n, r) {
          (this._driver = t),
            (this.element = e),
            (this.startTime = n),
            (this._elementTimelineStylesLookup = r),
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
              this._elementTimelineStylesLookup.get(e)),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(
                e,
                this._localTimelineStyles
              )),
            this._loadKeyframe();
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.getCurrentStyleProperties().length > 0;
            default:
              return !0;
          }
        }
        getCurrentStyleProperties() {
          return Object.keys(this._currentKeyframe);
        }
        get currentTime() {
          return this.startTime + this.duration;
        }
        delayNextStep(t) {
          const e =
            1 == this._keyframes.size &&
            Object.keys(this._pendingStyles).length;
          this.duration || e
            ? (this.forwardTime(this.currentTime + t),
              e && this.snapshotCurrentStyles())
            : (this.startTime += t);
        }
        fork(t, e) {
          return (
            this.applyStylesToKeyframe(),
            new Qf(
              this._driver,
              t,
              e || this.currentTime,
              this._elementTimelineStylesLookup
            )
          );
        }
        _loadKeyframe() {
          this._currentKeyframe &&
            (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = Object.create(this._backFill, {})),
              this._keyframes.set(this.duration, this._currentKeyframe));
        }
        forwardFrame() {
          (this.duration += 1), this._loadKeyframe();
        }
        forwardTime(t) {
          this.applyStylesToKeyframe(),
            (this.duration = t),
            this._loadKeyframe();
        }
        _updateStyle(t, e) {
          (this._localTimelineStyles[t] = e),
            (this._globalTimelineStyles[t] = e),
            (this._styleSummary[t] = { time: this.currentTime, value: e });
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe;
        }
        applyEmptyStep(t) {
          t && (this._previousKeyframe.easing = t),
            Object.keys(this._globalTimelineStyles).forEach((t) => {
              (this._backFill[t] = this._globalTimelineStyles[t] || "*"),
                (this._currentKeyframe[t] = "*");
            }),
            (this._currentEmptyStepKeyframe = this._currentKeyframe);
        }
        setStyles(t, e, n, r) {
          e && (this._previousKeyframe.easing = e);
          const s = (r && r.params) || {},
            i = (function (t, e) {
              const n = {};
              let r;
              return (
                t.forEach((t) => {
                  "*" === t
                    ? ((r = r || Object.keys(e)),
                      r.forEach((t) => {
                        n[t] = "*";
                      }))
                    : hf(t, !1, n);
                }),
                n
              );
            })(t, this._globalTimelineStyles);
          Object.keys(i).forEach((t) => {
            const e = vf(i[t], s, n);
            (this._pendingStyles[t] = e),
              this._localTimelineStyles.hasOwnProperty(t) ||
                (this._backFill[t] = this._globalTimelineStyles.hasOwnProperty(
                  t
                )
                  ? this._globalTimelineStyles[t]
                  : "*"),
              this._updateStyle(t, e);
          });
        }
        applyStylesToKeyframe() {
          const t = this._pendingStyles,
            e = Object.keys(t);
          0 != e.length &&
            ((this._pendingStyles = {}),
            e.forEach((e) => {
              this._currentKeyframe[e] = t[e];
            }),
            Object.keys(this._localTimelineStyles).forEach((t) => {
              this._currentKeyframe.hasOwnProperty(t) ||
                (this._currentKeyframe[t] = this._localTimelineStyles[t]);
            }));
        }
        snapshotCurrentStyles() {
          Object.keys(this._localTimelineStyles).forEach((t) => {
            const e = this._localTimelineStyles[t];
            (this._pendingStyles[t] = e), this._updateStyle(t, e);
          });
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration);
        }
        get properties() {
          const t = [];
          for (let e in this._currentKeyframe) t.push(e);
          return t;
        }
        mergeTimelineCollectedStyles(t) {
          Object.keys(t._styleSummary).forEach((e) => {
            const n = this._styleSummary[e],
              r = t._styleSummary[e];
            (!n || r.time > n.time) && this._updateStyle(e, r.value);
          });
        }
        buildKeyframes() {
          this.applyStylesToKeyframe();
          const t = new Set(),
            e = new Set(),
            n = 1 === this._keyframes.size && 0 === this.duration;
          let r = [];
          this._keyframes.forEach((s, i) => {
            const o = hf(s, !0);
            Object.keys(o).forEach((n) => {
              const r = o[n];
              "!" == r ? t.add(n) : "*" == r && e.add(n);
            }),
              n || (o.offset = i / this.duration),
              r.push(o);
          });
          const s = t.size ? wf(t.values()) : [],
            i = e.size ? wf(e.values()) : [];
          if (n) {
            const t = r[0],
              e = cf(t);
            (t.offset = 0), (e.offset = 1), (r = [t, e]);
          }
          return Uf(
            this.element,
            r,
            s,
            i,
            this.duration,
            this.startTime,
            this.easing,
            !1
          );
        }
      }
      class Wf extends Qf {
        constructor(t, e, n, r, s, i, o = !1) {
          super(t, e, i.delay),
            (this.element = e),
            (this.keyframes = n),
            (this.preStyleProps = r),
            (this.postStyleProps = s),
            (this._stretchStartingKeyframe = o),
            (this.timings = {
              duration: i.duration,
              delay: i.delay,
              easing: i.easing,
            });
        }
        containsAnimation() {
          return this.keyframes.length > 1;
        }
        buildKeyframes() {
          let t = this.keyframes,
            { delay: e, duration: n, easing: r } = this.timings;
          if (this._stretchStartingKeyframe && e) {
            const s = [],
              i = n + e,
              o = e / i,
              a = hf(t[0], !1);
            (a.offset = 0), s.push(a);
            const l = hf(t[0], !1);
            (l.offset = Kf(o)), s.push(l);
            const u = t.length - 1;
            for (let r = 1; r <= u; r++) {
              let o = hf(t[r], !1);
              (o.offset = Kf((e + o.offset * n) / i)), s.push(o);
            }
            (n = i), (e = 0), (r = ""), (t = s);
          }
          return Uf(
            this.element,
            t,
            this.preStyleProps,
            this.postStyleProps,
            n,
            e,
            r,
            !0
          );
        }
      }
      function Kf(t, e = 3) {
        const n = Math.pow(10, e - 1);
        return Math.round(t * n) / n;
      }
      class Zf {}
      class Gf extends Zf {
        normalizePropertyName(t, e) {
          return Sf(t);
        }
        normalizeStyleValue(t, e, n, r) {
          let s = "";
          const i = n.toString().trim();
          if (Jf[e] && 0 !== n && "0" !== n)
            if ("number" == typeof n) s = "px";
            else {
              const e = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
              e &&
                0 == e[1].length &&
                r.push(`Please provide a CSS unit value for ${t}:${n}`);
            }
          return i + s;
        }
      }
      const Jf = (() =>
        (function (t) {
          const e = {};
          return t.forEach((t) => (e[t] = !0)), e;
        })(
          "width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(
            ","
          )
        ))();
      function Yf(t, e, n, r, s, i, o, a, l, u, c, h, d) {
        return {
          type: 0,
          element: t,
          triggerName: e,
          isRemovalTransition: s,
          fromState: n,
          fromStyles: i,
          toState: r,
          toStyles: o,
          timelines: a,
          queriedElements: l,
          preStyleProps: u,
          postStyleProps: c,
          totalTime: h,
          errors: d,
        };
      }
      const Xf = {};
      class tm {
        constructor(t, e, n) {
          (this._triggerName = t), (this.ast = e), (this._stateStyles = n);
        }
        match(t, e, n, r) {
          return (function (t, e, n, r, s) {
            return t.some((t) => t(e, n, r, s));
          })(this.ast.matchers, t, e, n, r);
        }
        buildStyles(t, e, n) {
          const r = this._stateStyles["*"],
            s = this._stateStyles[t],
            i = r ? r.buildStyles(e, n) : {};
          return s ? s.buildStyles(e, n) : i;
        }
        build(t, e, n, r, s, i, o, a, l, u) {
          const c = [],
            h = (this.ast.options && this.ast.options.params) || Xf,
            d = this.buildStyles(n, (o && o.params) || Xf, c),
            p = (a && a.params) || Xf,
            f = this.buildStyles(r, p, c),
            m = new Set(),
            g = new Map(),
            y = new Map(),
            _ = "void" === r,
            v = { params: Object.assign(Object.assign({}, h), p) },
            w = u ? [] : Hf(t, e, this.ast.animation, s, i, d, f, v, l, c);
          let b = 0;
          if (
            (w.forEach((t) => {
              b = Math.max(t.duration + t.delay, b);
            }),
            c.length)
          )
            return Yf(e, this._triggerName, n, r, _, d, f, [], [], g, y, b, c);
          w.forEach((t) => {
            const n = t.element,
              r = Bp(g, n, {});
            t.preStyleProps.forEach((t) => (r[t] = !0));
            const s = Bp(y, n, {});
            t.postStyleProps.forEach((t) => (s[t] = !0)), n !== e && m.add(n);
          });
          const S = wf(m.values());
          return Yf(e, this._triggerName, n, r, _, d, f, w, S, g, y, b);
        }
      }
      class em {
        constructor(t, e) {
          (this.styles = t), (this.defaultParams = e);
        }
        buildStyles(t, e) {
          const n = {},
            r = cf(this.defaultParams);
          return (
            Object.keys(t).forEach((e) => {
              const n = t[e];
              null != n && (r[e] = n);
            }),
            this.styles.styles.forEach((t) => {
              if ("string" != typeof t) {
                const s = t;
                Object.keys(s).forEach((t) => {
                  let i = s[t];
                  i.length > 1 && (i = vf(i, r, e)), (n[t] = i);
                });
              }
            }),
            n
          );
        }
      }
      class nm {
        constructor(t, e) {
          (this.name = t),
            (this.ast = e),
            (this.transitionFactories = []),
            (this.states = {}),
            e.states.forEach((t) => {
              this.states[t.name] = new em(
                t.style,
                (t.options && t.options.params) || {}
              );
            }),
            rm(this.states, "true", "1"),
            rm(this.states, "false", "0"),
            e.transitions.forEach((e) => {
              this.transitionFactories.push(new tm(t, e, this.states));
            }),
            (this.fallbackTransition = new tm(
              t,
              {
                type: 1,
                animation: { type: 2, steps: [], options: null },
                matchers: [(t, e) => !0],
                options: null,
                queryCount: 0,
                depCount: 0,
              },
              this.states
            ));
        }
        get containsQueries() {
          return this.ast.queryCount > 0;
        }
        matchTransition(t, e, n, r) {
          return (
            this.transitionFactories.find((s) => s.match(t, e, n, r)) || null
          );
        }
        matchStyles(t, e, n) {
          return this.fallbackTransition.buildStyles(t, e, n);
        }
      }
      function rm(t, e, n) {
        t.hasOwnProperty(e)
          ? t.hasOwnProperty(n) || (t[n] = t[e])
          : t.hasOwnProperty(n) && (t[e] = t[n]);
      }
      const sm = new Vf();
      class im {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this._driver = e),
            (this._normalizer = n),
            (this._animations = {}),
            (this._playersById = {}),
            (this.players = []);
        }
        register(t, e) {
          const n = [],
            r = Rf(this._driver, e, n);
          if (n.length)
            throw new Error(
              `Unable to build the animation due to the following errors: ${n.join(
                "\n"
              )}`
            );
          this._animations[t] = r;
        }
        _buildPlayer(t, e, n) {
          const r = t.element,
            s = $p(0, this._normalizer, 0, t.keyframes, e, n);
          return this._driver.animate(
            r,
            s,
            t.duration,
            t.delay,
            t.easing,
            [],
            !0
          );
        }
        create(t, e, n = {}) {
          const r = [],
            s = this._animations[t];
          let i;
          const o = new Map();
          if (
            (s
              ? ((i = Hf(
                  this._driver,
                  e,
                  s,
                  "ng-enter",
                  "ng-leave",
                  {},
                  {},
                  n,
                  sm,
                  r
                )),
                i.forEach((t) => {
                  const e = Bp(o, t.element, {});
                  t.postStyleProps.forEach((t) => (e[t] = null));
                }))
              : (r.push(
                  "The requested animation doesn't exist or has already been destroyed"
                ),
                (i = [])),
            r.length)
          )
            throw new Error(
              `Unable to create the animation due to the following errors: ${r.join(
                "\n"
              )}`
            );
          o.forEach((t, e) => {
            Object.keys(t).forEach((n) => {
              t[n] = this._driver.computeStyle(e, n, "*");
            });
          });
          const a = Mp(
            i.map((t) => {
              const e = o.get(t.element);
              return this._buildPlayer(t, {}, e);
            })
          );
          return (
            (this._playersById[t] = a),
            a.onDestroy(() => this.destroy(t)),
            this.players.push(a),
            a
          );
        }
        destroy(t) {
          const e = this._getPlayer(t);
          e.destroy(), delete this._playersById[t];
          const n = this.players.indexOf(e);
          n >= 0 && this.players.splice(n, 1);
        }
        _getPlayer(t) {
          const e = this._playersById[t];
          if (!e)
            throw new Error(
              `Unable to find the timeline player referenced by ${t}`
            );
          return e;
        }
        listen(t, e, n, r) {
          const s = zp(e, "", "", "");
          return Hp(this._getPlayer(t), n, s, r), () => {};
        }
        command(t, e, n, r) {
          if ("register" == n) return void this.register(t, r[0]);
          if ("create" == n) return void this.create(t, e, r[0] || {});
          const s = this._getPlayer(t);
          switch (n) {
            case "play":
              s.play();
              break;
            case "pause":
              s.pause();
              break;
            case "reset":
              s.reset();
              break;
            case "restart":
              s.restart();
              break;
            case "finish":
              s.finish();
              break;
            case "init":
              s.init();
              break;
            case "setPosition":
              s.setPosition(parseFloat(r[0]));
              break;
            case "destroy":
              this.destroy(t);
          }
        }
      }
      const om = [],
        am = {
          namespaceId: "",
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1,
        },
        lm = {
          namespaceId: "",
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0,
        };
      class um {
        constructor(t, e = "") {
          this.namespaceId = e;
          const n = t && t.hasOwnProperty("value");
          if (((this.value = null != (r = n ? t.value : t) ? r : null), n)) {
            const e = cf(t);
            delete e.value, (this.options = e);
          } else this.options = {};
          var r;
          this.options.params || (this.options.params = {});
        }
        get params() {
          return this.options.params;
        }
        absorbOptions(t) {
          const e = t.params;
          if (e) {
            const t = this.options.params;
            Object.keys(e).forEach((n) => {
              null == t[n] && (t[n] = e[n]);
            });
          }
        }
      }
      const cm = new um("void");
      class hm {
        constructor(t, e, n) {
          (this.id = t),
            (this.hostElement = e),
            (this._engine = n),
            (this.players = []),
            (this._triggers = {}),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = "ng-tns-" + t),
            _m(e, this._hostClassName);
        }
        listen(t, e, n, r) {
          if (!this._triggers.hasOwnProperty(e))
            throw new Error(
              `Unable to listen on the animation trigger event "${n}" because the animation trigger "${e}" doesn't exist!`
            );
          if (null == n || 0 == n.length)
            throw new Error(
              `Unable to listen on the animation trigger "${e}" because the provided event is undefined!`
            );
          if ("start" != (s = n) && "done" != s)
            throw new Error(
              `The provided animation trigger event "${n}" for the animation trigger "${e}" is not supported!`
            );
          var s;
          const i = Bp(this._elementListeners, t, []),
            o = { name: e, phase: n, callback: r };
          i.push(o);
          const a = Bp(this._engine.statesByElement, t, {});
          return (
            a.hasOwnProperty(e) ||
              (_m(t, "ng-trigger"), _m(t, "ng-trigger-" + e), (a[e] = cm)),
            () => {
              this._engine.afterFlush(() => {
                const t = i.indexOf(o);
                t >= 0 && i.splice(t, 1), this._triggers[e] || delete a[e];
              });
            }
          );
        }
        register(t, e) {
          return !this._triggers[t] && ((this._triggers[t] = e), !0);
        }
        _getTrigger(t) {
          const e = this._triggers[t];
          if (!e)
            throw new Error(
              `The provided animation trigger "${t}" has not been registered!`
            );
          return e;
        }
        trigger(t, e, n, r = !0) {
          const s = this._getTrigger(e),
            i = new pm(this.id, e, t);
          let o = this._engine.statesByElement.get(t);
          o ||
            (_m(t, "ng-trigger"),
            _m(t, "ng-trigger-" + e),
            this._engine.statesByElement.set(t, (o = {})));
          let a = o[e];
          const l = new um(n, this.id);
          if (
            (!(n && n.hasOwnProperty("value")) &&
              a &&
              l.absorbOptions(a.options),
            (o[e] = l),
            a || (a = cm),
            "void" !== l.value && a.value === l.value)
          ) {
            if (
              !(function (t, e) {
                const n = Object.keys(t),
                  r = Object.keys(e);
                if (n.length != r.length) return !1;
                for (let s = 0; s < n.length; s++) {
                  const r = n[s];
                  if (!e.hasOwnProperty(r) || t[r] !== e[r]) return !1;
                }
                return !0;
              })(a.params, l.params)
            ) {
              const e = [],
                n = s.matchStyles(a.value, a.params, e),
                r = s.matchStyles(l.value, l.params, e);
              e.length
                ? this._engine.reportError(e)
                : this._engine.afterFlush(() => {
                    mf(t, n), ff(t, r);
                  });
            }
            return;
          }
          const u = Bp(this._engine.playersByElement, t, []);
          u.forEach((t) => {
            t.namespaceId == this.id &&
              t.triggerName == e &&
              t.queued &&
              t.destroy();
          });
          let c = s.matchTransition(a.value, l.value, t, l.params),
            h = !1;
          if (!c) {
            if (!r) return;
            (c = s.fallbackTransition), (h = !0);
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: t,
              triggerName: e,
              transition: c,
              fromState: a,
              toState: l,
              player: i,
              isFallbackTransition: h,
            }),
            h ||
              (_m(t, "ng-animate-queued"),
              i.onStart(() => {
                vm(t, "ng-animate-queued");
              })),
            i.onDone(() => {
              let e = this.players.indexOf(i);
              e >= 0 && this.players.splice(e, 1);
              const n = this._engine.playersByElement.get(t);
              if (n) {
                let t = n.indexOf(i);
                t >= 0 && n.splice(t, 1);
              }
            }),
            this.players.push(i),
            u.push(i),
            i
          );
        }
        deregister(t) {
          delete this._triggers[t],
            this._engine.statesByElement.forEach((e, n) => {
              delete e[t];
            }),
            this._elementListeners.forEach((e, n) => {
              this._elementListeners.set(
                n,
                e.filter((e) => e.name != t)
              );
            });
        }
        clearElementCache(t) {
          this._engine.statesByElement.delete(t),
            this._elementListeners.delete(t);
          const e = this._engine.playersByElement.get(t);
          e &&
            (e.forEach((t) => t.destroy()),
            this._engine.playersByElement.delete(t));
        }
        _signalRemovalForInnerTriggers(t, e) {
          const n = this._engine.driver.query(t, ".ng-trigger", !0);
          n.forEach((t) => {
            if (t.__ng_removed) return;
            const n = this._engine.fetchNamespacesByElement(t);
            n.size
              ? n.forEach((n) => n.triggerLeaveAnimation(t, e, !1, !0))
              : this.clearElementCache(t);
          }),
            this._engine.afterFlushAnimationsDone(() =>
              n.forEach((t) => this.clearElementCache(t))
            );
        }
        triggerLeaveAnimation(t, e, n, r) {
          const s = this._engine.statesByElement.get(t);
          if (s) {
            const i = [];
            if (
              (Object.keys(s).forEach((e) => {
                if (this._triggers[e]) {
                  const n = this.trigger(t, e, "void", r);
                  n && i.push(n);
                }
              }),
              i.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, t, !0, e),
                n && Mp(i).onDone(() => this._engine.processLeaveNode(t)),
                !0
              );
          }
          return !1;
        }
        prepareLeaveAnimationListeners(t) {
          const e = this._elementListeners.get(t);
          if (e) {
            const n = new Set();
            e.forEach((e) => {
              const r = e.name;
              if (n.has(r)) return;
              n.add(r);
              const s = this._triggers[r].fallbackTransition,
                i = this._engine.statesByElement.get(t)[r] || cm,
                o = new um("void"),
                a = new pm(this.id, r, t);
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: t,
                  triggerName: r,
                  transition: s,
                  fromState: i,
                  toState: o,
                  player: a,
                  isFallbackTransition: !0,
                });
            });
          }
        }
        removeNode(t, e) {
          const n = this._engine;
          if (
            (t.childElementCount && this._signalRemovalForInnerTriggers(t, e),
            this.triggerLeaveAnimation(t, e, !0))
          )
            return;
          let r = !1;
          if (n.totalAnimations) {
            const e = n.players.length ? n.playersByQueriedElement.get(t) : [];
            if (e && e.length) r = !0;
            else {
              let e = t;
              for (; (e = e.parentNode); )
                if (n.statesByElement.get(e)) {
                  r = !0;
                  break;
                }
            }
          }
          if ((this.prepareLeaveAnimationListeners(t), r))
            n.markElementAsRemoved(this.id, t, !1, e);
          else {
            const r = t.__ng_removed;
            (r && r !== am) ||
              (n.afterFlush(() => this.clearElementCache(t)),
              n.destroyInnerAnimations(t),
              n._onRemovalComplete(t, e));
          }
        }
        insertNode(t, e) {
          _m(t, this._hostClassName);
        }
        drainQueuedTransitions(t) {
          const e = [];
          return (
            this._queue.forEach((n) => {
              const r = n.player;
              if (r.destroyed) return;
              const s = n.element,
                i = this._elementListeners.get(s);
              i &&
                i.forEach((e) => {
                  if (e.name == n.triggerName) {
                    const r = zp(
                      s,
                      n.triggerName,
                      n.fromState.value,
                      n.toState.value
                    );
                    (r._data = t), Hp(n.player, e.phase, r, e.callback);
                  }
                }),
                r.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      r.destroy();
                    })
                  : e.push(n);
            }),
            (this._queue = []),
            e.sort((t, e) => {
              const n = t.transition.ast.depCount,
                r = e.transition.ast.depCount;
              return 0 == n || 0 == r
                ? n - r
                : this._engine.driver.containsElement(t.element, e.element)
                ? 1
                : -1;
            })
          );
        }
        destroy(t) {
          this.players.forEach((t) => t.destroy()),
            this._signalRemovalForInnerTriggers(this.hostElement, t);
        }
        elementContainsData(t) {
          let e = !1;
          return (
            this._elementListeners.has(t) && (e = !0),
            (e = !!this._queue.find((e) => e.element === t) || e),
            e
          );
        }
      }
      class dm {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this.driver = e),
            (this._normalizer = n),
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
            (this.onRemovalComplete = (t, e) => {});
        }
        _onRemovalComplete(t, e) {
          this.onRemovalComplete(t, e);
        }
        get queuedPlayers() {
          const t = [];
          return (
            this._namespaceList.forEach((e) => {
              e.players.forEach((e) => {
                e.queued && t.push(e);
              });
            }),
            t
          );
        }
        createNamespace(t, e) {
          const n = new hm(t, e, this);
          return (
            e.parentNode
              ? this._balanceNamespaceList(n, e)
              : (this.newHostElements.set(e, n), this.collectEnterElement(e)),
            (this._namespaceLookup[t] = n)
          );
        }
        _balanceNamespaceList(t, e) {
          const n = this._namespaceList.length - 1;
          if (n >= 0) {
            let r = !1;
            for (let s = n; s >= 0; s--)
              if (
                this.driver.containsElement(
                  this._namespaceList[s].hostElement,
                  e
                )
              ) {
                this._namespaceList.splice(s + 1, 0, t), (r = !0);
                break;
              }
            r || this._namespaceList.splice(0, 0, t);
          } else this._namespaceList.push(t);
          return this.namespacesByHostElement.set(e, t), t;
        }
        register(t, e) {
          let n = this._namespaceLookup[t];
          return n || (n = this.createNamespace(t, e)), n;
        }
        registerTrigger(t, e, n) {
          let r = this._namespaceLookup[t];
          r && r.register(e, n) && this.totalAnimations++;
        }
        destroy(t, e) {
          if (!t) return;
          const n = this._fetchNamespace(t);
          this.afterFlush(() => {
            this.namespacesByHostElement.delete(n.hostElement),
              delete this._namespaceLookup[t];
            const e = this._namespaceList.indexOf(n);
            e >= 0 && this._namespaceList.splice(e, 1);
          }),
            this.afterFlushAnimationsDone(() => n.destroy(e));
        }
        _fetchNamespace(t) {
          return this._namespaceLookup[t];
        }
        fetchNamespacesByElement(t) {
          const e = new Set(),
            n = this.statesByElement.get(t);
          if (n) {
            const t = Object.keys(n);
            for (let r = 0; r < t.length; r++) {
              const s = n[t[r]].namespaceId;
              if (s) {
                const t = this._fetchNamespace(s);
                t && e.add(t);
              }
            }
          }
          return e;
        }
        trigger(t, e, n, r) {
          if (fm(e)) {
            const s = this._fetchNamespace(t);
            if (s) return s.trigger(e, n, r), !0;
          }
          return !1;
        }
        insertNode(t, e, n, r) {
          if (!fm(e)) return;
          const s = e.__ng_removed;
          if (s && s.setForRemoval) {
            (s.setForRemoval = !1), (s.setForMove = !0);
            const t = this.collectedLeaveElements.indexOf(e);
            t >= 0 && this.collectedLeaveElements.splice(t, 1);
          }
          if (t) {
            const r = this._fetchNamespace(t);
            r && r.insertNode(e, n);
          }
          r && this.collectEnterElement(e);
        }
        collectEnterElement(t) {
          this.collectedEnterElements.push(t);
        }
        markElementAsDisabled(t, e) {
          e
            ? this.disabledNodes.has(t) ||
              (this.disabledNodes.add(t), _m(t, "ng-animate-disabled"))
            : this.disabledNodes.has(t) &&
              (this.disabledNodes.delete(t), vm(t, "ng-animate-disabled"));
        }
        removeNode(t, e, n, r) {
          if (fm(e)) {
            const s = t ? this._fetchNamespace(t) : null;
            if (
              (s ? s.removeNode(e, r) : this.markElementAsRemoved(t, e, !1, r),
              n)
            ) {
              const n = this.namespacesByHostElement.get(e);
              n && n.id !== t && n.removeNode(e, r);
            }
          } else this._onRemovalComplete(e, r);
        }
        markElementAsRemoved(t, e, n, r) {
          this.collectedLeaveElements.push(e),
            (e.__ng_removed = {
              namespaceId: t,
              setForRemoval: r,
              hasAnimation: n,
              removedBeforeQueried: !1,
            });
        }
        listen(t, e, n, r, s) {
          return fm(e) ? this._fetchNamespace(t).listen(e, n, r, s) : () => {};
        }
        _buildInstruction(t, e, n, r, s) {
          return t.transition.build(
            this.driver,
            t.element,
            t.fromState.value,
            t.toState.value,
            n,
            r,
            t.fromState.options,
            t.toState.options,
            e,
            s
          );
        }
        destroyInnerAnimations(t) {
          let e = this.driver.query(t, ".ng-trigger", !0);
          e.forEach((t) => this.destroyActiveAnimationsForElement(t)),
            0 != this.playersByQueriedElement.size &&
              ((e = this.driver.query(t, ".ng-animating", !0)),
              e.forEach((t) => this.finishActiveQueriedAnimationOnElement(t)));
        }
        destroyActiveAnimationsForElement(t) {
          const e = this.playersByElement.get(t);
          e &&
            e.forEach((t) => {
              t.queued ? (t.markedForDestroy = !0) : t.destroy();
            });
        }
        finishActiveQueriedAnimationOnElement(t) {
          const e = this.playersByQueriedElement.get(t);
          e && e.forEach((t) => t.finish());
        }
        whenRenderingDone() {
          return new Promise((t) => {
            if (this.players.length) return Mp(this.players).onDone(() => t());
            t();
          });
        }
        processLeaveNode(t) {
          const e = t.__ng_removed;
          if (e && e.setForRemoval) {
            if (((t.__ng_removed = am), e.namespaceId)) {
              this.destroyInnerAnimations(t);
              const n = this._fetchNamespace(e.namespaceId);
              n && n.clearElementCache(t);
            }
            this._onRemovalComplete(t, e.setForRemoval);
          }
          this.driver.matchesElement(t, ".ng-animate-disabled") &&
            this.markElementAsDisabled(t, !1),
            this.driver.query(t, ".ng-animate-disabled", !0).forEach((t) => {
              this.markElementAsDisabled(t, !1);
            });
        }
        flush(t = -1) {
          let e = [];
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((t, e) =>
                this._balanceNamespaceList(t, e)
              ),
              this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let n = 0; n < this.collectedEnterElements.length; n++)
              _m(this.collectedEnterElements[n], "ng-star-inserted");
          if (
            this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)
          ) {
            const n = [];
            try {
              e = this._flushAnimations(n, t);
            } finally {
              for (let t = 0; t < n.length; t++) n[t]();
            }
          } else
            for (let n = 0; n < this.collectedLeaveElements.length; n++)
              this.processLeaveNode(this.collectedLeaveElements[n]);
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach((t) => t()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const t = this._whenQuietFns;
            (this._whenQuietFns = []),
              e.length
                ? Mp(e).onDone(() => {
                    t.forEach((t) => t());
                  })
                : t.forEach((t) => t());
          }
        }
        reportError(t) {
          throw new Error(
            `Unable to process animations due to the following failed trigger transitions\n ${t.join(
              "\n"
            )}`
          );
        }
        _flushAnimations(t, e) {
          const n = new Vf(),
            r = [],
            s = new Map(),
            i = [],
            o = new Map(),
            a = new Map(),
            l = new Map(),
            u = new Set();
          this.disabledNodes.forEach((t) => {
            u.add(t);
            const e = this.driver.query(t, ".ng-animate-queued", !0);
            for (let n = 0; n < e.length; n++) u.add(e[n]);
          });
          const c = this.bodyNode,
            h = Array.from(this.statesByElement.keys()),
            d = ym(h, this.collectedEnterElements),
            p = new Map();
          let f = 0;
          d.forEach((t, e) => {
            const n = "ng-enter" + f++;
            p.set(e, n), t.forEach((t) => _m(t, n));
          });
          const m = [],
            g = new Set(),
            y = new Set();
          for (let O = 0; O < this.collectedLeaveElements.length; O++) {
            const t = this.collectedLeaveElements[O],
              e = t.__ng_removed;
            e &&
              e.setForRemoval &&
              (m.push(t),
              g.add(t),
              e.hasAnimation
                ? this.driver
                    .query(t, ".ng-star-inserted", !0)
                    .forEach((t) => g.add(t))
                : y.add(t));
          }
          const _ = new Map(),
            v = ym(h, Array.from(g));
          v.forEach((t, e) => {
            const n = "ng-leave" + f++;
            _.set(e, n), t.forEach((t) => _m(t, n));
          }),
            t.push(() => {
              d.forEach((t, e) => {
                const n = p.get(e);
                t.forEach((t) => vm(t, n));
              }),
                v.forEach((t, e) => {
                  const n = _.get(e);
                  t.forEach((t) => vm(t, n));
                }),
                m.forEach((t) => {
                  this.processLeaveNode(t);
                });
            });
          const w = [],
            b = [];
          for (let O = this._namespaceList.length - 1; O >= 0; O--)
            this._namespaceList[O].drainQueuedTransitions(e).forEach((t) => {
              const e = t.player,
                s = t.element;
              if ((w.push(e), this.collectedEnterElements.length)) {
                const t = s.__ng_removed;
                if (t && t.setForMove) return void e.destroy();
              }
              const u = !c || !this.driver.containsElement(c, s),
                h = _.get(s),
                d = p.get(s),
                f = this._buildInstruction(t, n, d, h, u);
              if (!f.errors || !f.errors.length)
                return u
                  ? (e.onStart(() => mf(s, f.fromStyles)),
                    e.onDestroy(() => ff(s, f.toStyles)),
                    void r.push(e))
                  : t.isFallbackTransition
                  ? (e.onStart(() => mf(s, f.fromStyles)),
                    e.onDestroy(() => ff(s, f.toStyles)),
                    void r.push(e))
                  : (f.timelines.forEach(
                      (t) => (t.stretchStartingKeyframe = !0)
                    ),
                    n.append(s, f.timelines),
                    i.push({ instruction: f, player: e, element: s }),
                    f.queriedElements.forEach((t) => Bp(o, t, []).push(e)),
                    f.preStyleProps.forEach((t, e) => {
                      const n = Object.keys(t);
                      if (n.length) {
                        let t = a.get(e);
                        t || a.set(e, (t = new Set())),
                          n.forEach((e) => t.add(e));
                      }
                    }),
                    void f.postStyleProps.forEach((t, e) => {
                      const n = Object.keys(t);
                      let r = l.get(e);
                      r || l.set(e, (r = new Set())),
                        n.forEach((t) => r.add(t));
                    }));
              b.push(f);
            });
          if (b.length) {
            const t = [];
            b.forEach((e) => {
              t.push(`@${e.triggerName} has failed due to:\n`),
                e.errors.forEach((e) => t.push(`- ${e}\n`));
            }),
              w.forEach((t) => t.destroy()),
              this.reportError(t);
          }
          const S = new Map(),
            C = new Map();
          i.forEach((t) => {
            const e = t.element;
            n.has(e) &&
              (C.set(e, e),
              this._beforeAnimationBuild(
                t.player.namespaceId,
                t.instruction,
                S
              ));
          }),
            r.forEach((t) => {
              const e = t.element;
              this._getPreviousPlayers(
                e,
                !1,
                t.namespaceId,
                t.triggerName,
                null
              ).forEach((t) => {
                Bp(S, e, []).push(t), t.destroy();
              });
            });
          const E = m.filter((t) => bm(t, a, l)),
            T = new Map();
          gm(T, this.driver, y, l, "*").forEach((t) => {
            bm(t, a, l) && E.push(t);
          });
          const x = new Map();
          d.forEach((t, e) => {
            gm(x, this.driver, new Set(t), a, "!");
          }),
            E.forEach((t) => {
              const e = T.get(t),
                n = x.get(t);
              T.set(t, Object.assign(Object.assign({}, e), n));
            });
          const k = [],
            A = [],
            P = {};
          i.forEach((t) => {
            const { element: e, player: i, instruction: o } = t;
            if (n.has(e)) {
              if (u.has(e))
                return (
                  i.onDestroy(() => ff(e, o.toStyles)),
                  (i.disabled = !0),
                  i.overrideTotalTime(o.totalTime),
                  void r.push(i)
                );
              let t = P;
              if (C.size > 1) {
                let n = e;
                const r = [];
                for (; (n = n.parentNode); ) {
                  const e = C.get(n);
                  if (e) {
                    t = e;
                    break;
                  }
                  r.push(n);
                }
                r.forEach((e) => C.set(e, t));
              }
              const n = this._buildAnimation(i.namespaceId, o, S, s, x, T);
              if ((i.setRealPlayer(n), t === P)) k.push(i);
              else {
                const e = this.playersByElement.get(t);
                e && e.length && (i.parentPlayer = Mp(e)), r.push(i);
              }
            } else
              mf(e, o.fromStyles),
                i.onDestroy(() => ff(e, o.toStyles)),
                A.push(i),
                u.has(e) && r.push(i);
          }),
            A.forEach((t) => {
              const e = s.get(t.element);
              if (e && e.length) {
                const n = Mp(e);
                t.setRealPlayer(n);
              }
            }),
            r.forEach((t) => {
              t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy();
            });
          for (let O = 0; O < m.length; O++) {
            const t = m[O],
              e = t.__ng_removed;
            if ((vm(t, "ng-leave"), e && e.hasAnimation)) continue;
            let n = [];
            if (o.size) {
              let e = o.get(t);
              e && e.length && n.push(...e);
              let r = this.driver.query(t, ".ng-animating", !0);
              for (let t = 0; t < r.length; t++) {
                let e = o.get(r[t]);
                e && e.length && n.push(...e);
              }
            }
            const r = n.filter((t) => !t.destroyed);
            r.length ? wm(this, t, r) : this.processLeaveNode(t);
          }
          return (
            (m.length = 0),
            k.forEach((t) => {
              this.players.push(t),
                t.onDone(() => {
                  t.destroy();
                  const e = this.players.indexOf(t);
                  this.players.splice(e, 1);
                }),
                t.play();
            }),
            k
          );
        }
        elementContainsData(t, e) {
          let n = !1;
          const r = e.__ng_removed;
          return (
            r && r.setForRemoval && (n = !0),
            this.playersByElement.has(e) && (n = !0),
            this.playersByQueriedElement.has(e) && (n = !0),
            this.statesByElement.has(e) && (n = !0),
            this._fetchNamespace(t).elementContainsData(e) || n
          );
        }
        afterFlush(t) {
          this._flushFns.push(t);
        }
        afterFlushAnimationsDone(t) {
          this._whenQuietFns.push(t);
        }
        _getPreviousPlayers(t, e, n, r, s) {
          let i = [];
          if (e) {
            const e = this.playersByQueriedElement.get(t);
            e && (i = e);
          } else {
            const e = this.playersByElement.get(t);
            if (e) {
              const t = !s || "void" == s;
              e.forEach((e) => {
                e.queued || ((t || e.triggerName == r) && i.push(e));
              });
            }
          }
          return (
            (n || r) &&
              (i = i.filter(
                (t) => !((n && n != t.namespaceId) || (r && r != t.triggerName))
              )),
            i
          );
        }
        _beforeAnimationBuild(t, e, n) {
          const r = e.element,
            s = e.isRemovalTransition ? void 0 : t,
            i = e.isRemovalTransition ? void 0 : e.triggerName;
          for (const o of e.timelines) {
            const t = o.element,
              a = t !== r,
              l = Bp(n, t, []);
            this._getPreviousPlayers(t, a, s, i, e.toState).forEach((t) => {
              const e = t.getRealPlayer();
              e.beforeDestroy && e.beforeDestroy(), t.destroy(), l.push(t);
            });
          }
          mf(r, e.fromStyles);
        }
        _buildAnimation(t, e, n, r, s, i) {
          const o = e.triggerName,
            a = e.element,
            l = [],
            u = new Set(),
            c = new Set(),
            h = e.timelines.map((e) => {
              const h = e.element;
              u.add(h);
              const d = h.__ng_removed;
              if (d && d.removedBeforeQueried)
                return new Lp(e.duration, e.delay);
              const p = h !== a,
                f = (function (t) {
                  const e = [];
                  return (
                    (function t(e, n) {
                      for (let r = 0; r < e.length; r++) {
                        const s = e[r];
                        s instanceof Up ? t(s.players, n) : n.push(s);
                      }
                    })(t, e),
                    e
                  );
                })((n.get(h) || om).map((t) => t.getRealPlayer())).filter(
                  (t) => !!t.element && t.element === h
                ),
                m = s.get(h),
                g = i.get(h),
                y = $p(0, this._normalizer, 0, e.keyframes, m, g),
                _ = this._buildPlayer(e, y, f);
              if ((e.subTimeline && r && c.add(h), p)) {
                const e = new pm(t, o, h);
                e.setRealPlayer(_), l.push(e);
              }
              return _;
            });
          l.forEach((t) => {
            Bp(this.playersByQueriedElement, t.element, []).push(t),
              t.onDone(() =>
                (function (t, e, n) {
                  let r;
                  if (t instanceof Map) {
                    if (((r = t.get(e)), r)) {
                      if (r.length) {
                        const t = r.indexOf(n);
                        r.splice(t, 1);
                      }
                      0 == r.length && t.delete(e);
                    }
                  } else if (((r = t[e]), r)) {
                    if (r.length) {
                      const t = r.indexOf(n);
                      r.splice(t, 1);
                    }
                    0 == r.length && delete t[e];
                  }
                  return r;
                })(this.playersByQueriedElement, t.element, t)
              );
          }),
            u.forEach((t) => _m(t, "ng-animating"));
          const d = Mp(h);
          return (
            d.onDestroy(() => {
              u.forEach((t) => vm(t, "ng-animating")), ff(a, e.toStyles);
            }),
            c.forEach((t) => {
              Bp(r, t, []).push(d);
            }),
            d
          );
        }
        _buildPlayer(t, e, n) {
          return e.length > 0
            ? this.driver.animate(
                t.element,
                e,
                t.duration,
                t.delay,
                t.easing,
                n
              )
            : new Lp(t.duration, t.delay);
        }
      }
      class pm {
        constructor(t, e, n) {
          (this.namespaceId = t),
            (this.triggerName = e),
            (this.element = n),
            (this._player = new Lp()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = {}),
            (this.destroyed = !1),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0);
        }
        setRealPlayer(t) {
          this._containsRealPlayer ||
            ((this._player = t),
            Object.keys(this._queuedCallbacks).forEach((e) => {
              this._queuedCallbacks[e].forEach((n) => Hp(t, e, void 0, n));
            }),
            (this._queuedCallbacks = {}),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(t.totalTime),
            (this.queued = !1));
        }
        getRealPlayer() {
          return this._player;
        }
        overrideTotalTime(t) {
          this.totalTime = t;
        }
        syncPlayerEvents(t) {
          const e = this._player;
          e.triggerCallback && t.onStart(() => e.triggerCallback("start")),
            t.onDone(() => this.finish()),
            t.onDestroy(() => this.destroy());
        }
        _queueEvent(t, e) {
          Bp(this._queuedCallbacks, t, []).push(e);
        }
        onDone(t) {
          this.queued && this._queueEvent("done", t), this._player.onDone(t);
        }
        onStart(t) {
          this.queued && this._queueEvent("start", t), this._player.onStart(t);
        }
        onDestroy(t) {
          this.queued && this._queueEvent("destroy", t),
            this._player.onDestroy(t);
        }
        init() {
          this._player.init();
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted();
        }
        play() {
          !this.queued && this._player.play();
        }
        pause() {
          !this.queued && this._player.pause();
        }
        restart() {
          !this.queued && this._player.restart();
        }
        finish() {
          this._player.finish();
        }
        destroy() {
          (this.destroyed = !0), this._player.destroy();
        }
        reset() {
          !this.queued && this._player.reset();
        }
        setPosition(t) {
          this.queued || this._player.setPosition(t);
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition();
        }
        triggerCallback(t) {
          const e = this._player;
          e.triggerCallback && e.triggerCallback(t);
        }
      }
      function fm(t) {
        return t && 1 === t.nodeType;
      }
      function mm(t, e) {
        const n = t.style.display;
        return (t.style.display = null != e ? e : "none"), n;
      }
      function gm(t, e, n, r, s) {
        const i = [];
        n.forEach((t) => i.push(mm(t)));
        const o = [];
        r.forEach((n, r) => {
          const i = {};
          n.forEach((t) => {
            const n = (i[t] = e.computeStyle(r, t, s));
            (n && 0 != n.length) || ((r.__ng_removed = lm), o.push(r));
          }),
            t.set(r, i);
        });
        let a = 0;
        return n.forEach((t) => mm(t, i[a++])), o;
      }
      function ym(t, e) {
        const n = new Map();
        if ((t.forEach((t) => n.set(t, [])), 0 == e.length)) return n;
        const r = new Set(e),
          s = new Map();
        return (
          e.forEach((t) => {
            const e = (function t(e) {
              if (!e) return 1;
              let i = s.get(e);
              if (i) return i;
              const o = e.parentNode;
              return (i = n.has(o) ? o : r.has(o) ? 1 : t(o)), s.set(e, i), i;
            })(t);
            1 !== e && n.get(e).push(t);
          }),
          n
        );
      }
      function _m(t, e) {
        if (t.classList) t.classList.add(e);
        else {
          let n = t.$$classes;
          n || (n = t.$$classes = {}), (n[e] = !0);
        }
      }
      function vm(t, e) {
        if (t.classList) t.classList.remove(e);
        else {
          let n = t.$$classes;
          n && delete n[e];
        }
      }
      function wm(t, e, n) {
        Mp(n).onDone(() => t.processLeaveNode(e));
      }
      function bm(t, e, n) {
        const r = n.get(t);
        if (!r) return !1;
        let s = e.get(t);
        return s ? r.forEach((t) => s.add(t)) : e.set(t, r), n.delete(t), !0;
      }
      class Sm {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this._driver = e),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (t, e) => {}),
            (this._transitionEngine = new dm(t, e, n)),
            (this._timelineEngine = new im(t, e, n)),
            (this._transitionEngine.onRemovalComplete = (t, e) =>
              this.onRemovalComplete(t, e));
        }
        registerTrigger(t, e, n, r, s) {
          const i = t + "-" + r;
          let o = this._triggerCache[i];
          if (!o) {
            const t = [],
              e = Rf(this._driver, s, t);
            if (t.length)
              throw new Error(
                `The animation trigger "${r}" has failed to build due to the following errors:\n - ${t.join(
                  "\n - "
                )}`
              );
            (o = (function (t, e) {
              return new nm(t, e);
            })(r, e)),
              (this._triggerCache[i] = o);
          }
          this._transitionEngine.registerTrigger(e, r, o);
        }
        register(t, e) {
          this._transitionEngine.register(t, e);
        }
        destroy(t, e) {
          this._transitionEngine.destroy(t, e);
        }
        onInsert(t, e, n, r) {
          this._transitionEngine.insertNode(t, e, n, r);
        }
        onRemove(t, e, n, r) {
          this._transitionEngine.removeNode(t, e, r || !1, n);
        }
        disableAnimations(t, e) {
          this._transitionEngine.markElementAsDisabled(t, e);
        }
        process(t, e, n, r) {
          if ("@" == n.charAt(0)) {
            const [t, s] = Qp(n);
            this._timelineEngine.command(t, e, s, r);
          } else this._transitionEngine.trigger(t, e, n, r);
        }
        listen(t, e, n, r, s) {
          if ("@" == n.charAt(0)) {
            const [t, r] = Qp(n);
            return this._timelineEngine.listen(t, e, r, s);
          }
          return this._transitionEngine.listen(t, e, n, r, s);
        }
        flush(t = -1) {
          this._transitionEngine.flush(t);
        }
        get players() {
          return this._transitionEngine.players.concat(
            this._timelineEngine.players
          );
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone();
        }
      }
      function Cm(t, e) {
        let n = null,
          r = null;
        return (
          Array.isArray(e) && e.length
            ? ((n = Tm(e[0])), e.length > 1 && (r = Tm(e[e.length - 1])))
            : e && (n = Tm(e)),
          n || r ? new Em(t, n, r) : null
        );
      }
      let Em = (() => {
        class t {
          constructor(e, n, r) {
            (this._element = e),
              (this._startStyles = n),
              (this._endStyles = r),
              (this._state = 0);
            let s = t.initialStylesByElement.get(e);
            s || t.initialStylesByElement.set(e, (s = {})),
              (this._initialStyles = s);
          }
          start() {
            this._state < 1 &&
              (this._startStyles &&
                ff(this._element, this._startStyles, this._initialStyles),
              (this._state = 1));
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (ff(this._element, this._initialStyles),
                this._endStyles &&
                  (ff(this._element, this._endStyles),
                  (this._endStyles = null)),
                (this._state = 1));
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (t.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  (mf(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  (mf(this._element, this._endStyles),
                  (this._endStyles = null)),
                ff(this._element, this._initialStyles),
                (this._state = 3));
          }
        }
        return (t.initialStylesByElement = new WeakMap()), t;
      })();
      function Tm(t) {
        let e = null;
        const n = Object.keys(t);
        for (let r = 0; r < n.length; r++) {
          const s = n[r];
          xm(s) && ((e = e || {}), (e[s] = t[s]));
        }
        return e;
      }
      function xm(t) {
        return "display" === t || "position" === t;
      }
      class km {
        constructor(t, e, n, r, s, i, o) {
          (this._element = t),
            (this._name = e),
            (this._duration = n),
            (this._delay = r),
            (this._easing = s),
            (this._fillMode = i),
            (this._onDoneFn = o),
            (this._finished = !1),
            (this._destroyed = !1),
            (this._startTime = 0),
            (this._position = 0),
            (this._eventFn = (t) => this._handleCallback(t));
        }
        apply() {
          !(function (t, e) {
            const n = Nm(t, "").trim();
            n.length &&
              ((function (t, e) {
                let n = 0;
                for (let r = 0; r < t.length; r++) "," === t.charAt(r) && n++;
              })(n),
              (e = `${n}, ${e}`)),
              Rm(t, "", e);
          })(
            this._element,
            `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`
          ),
            Im(this._element, this._eventFn, !1),
            (this._startTime = Date.now());
        }
        pause() {
          Am(this._element, this._name, "paused");
        }
        resume() {
          Am(this._element, this._name, "running");
        }
        setPosition(t) {
          const e = Pm(this._element, this._name);
          (this._position = t * this._duration),
            Rm(this._element, "Delay", `-${this._position}ms`, e);
        }
        getPosition() {
          return this._position;
        }
        _handleCallback(t) {
          const e = t._ngTestManualTimestamp || Date.now(),
            n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
          t.animationName == this._name &&
            Math.max(e - this._startTime, 0) >= this._delay &&
            n >= this._duration &&
            this.finish();
        }
        finish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFn(),
            Im(this._element, this._eventFn, !0));
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.finish(),
            (function (t, e) {
              const n = Nm(t, "").split(","),
                r = Om(n, e);
              r >= 0 && (n.splice(r, 1), Rm(t, "", n.join(",")));
            })(this._element, this._name));
        }
      }
      function Am(t, e, n) {
        Rm(t, "PlayState", n, Pm(t, e));
      }
      function Pm(t, e) {
        const n = Nm(t, "");
        return n.indexOf(",") > 0 ? Om(n.split(","), e) : Om([n], e);
      }
      function Om(t, e) {
        for (let n = 0; n < t.length; n++) if (t[n].indexOf(e) >= 0) return n;
        return -1;
      }
      function Im(t, e, n) {
        n
          ? t.removeEventListener("animationend", e)
          : t.addEventListener("animationend", e);
      }
      function Rm(t, e, n, r) {
        const s = "animation" + e;
        if (null != r) {
          const e = t.style[s];
          if (e.length) {
            const t = e.split(",");
            (t[r] = n), (n = t.join(","));
          }
        }
        t.style[s] = n;
      }
      function Nm(t, e) {
        return t.style["animation" + e];
      }
      class Dm {
        constructor(t, e, n, r, s, i, o, a) {
          (this.element = t),
            (this.keyframes = e),
            (this.animationName = n),
            (this._duration = r),
            (this._delay = s),
            (this._finalStyles = o),
            (this._specialStyles = a),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this.currentSnapshot = {}),
            (this._state = 0),
            (this.easing = i || "linear"),
            (this.totalTime = r + s),
            this._buildStyler();
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        destroy() {
          this.init(),
            this._state >= 4 ||
              ((this._state = 4),
              this._styler.destroy(),
              this._flushStartFns(),
              this._flushDoneFns(),
              this._specialStyles && this._specialStyles.destroy(),
              this._onDestroyFns.forEach((t) => t()),
              (this._onDestroyFns = []));
        }
        _flushDoneFns() {
          this._onDoneFns.forEach((t) => t()), (this._onDoneFns = []);
        }
        _flushStartFns() {
          this._onStartFns.forEach((t) => t()), (this._onStartFns = []);
        }
        finish() {
          this.init(),
            this._state >= 3 ||
              ((this._state = 3),
              this._styler.finish(),
              this._flushStartFns(),
              this._specialStyles && this._specialStyles.finish(),
              this._flushDoneFns());
        }
        setPosition(t) {
          this._styler.setPosition(t);
        }
        getPosition() {
          return this._styler.getPosition();
        }
        hasStarted() {
          return this._state >= 2;
        }
        init() {
          this._state >= 1 ||
            ((this._state = 1),
            this._styler.apply(),
            this._delay && this._styler.pause());
        }
        play() {
          this.init(),
            this.hasStarted() ||
              (this._flushStartFns(),
              (this._state = 2),
              this._specialStyles && this._specialStyles.start()),
            this._styler.resume();
        }
        pause() {
          this.init(), this._styler.pause();
        }
        restart() {
          this.reset(), this.play();
        }
        reset() {
          this._styler.destroy(), this._buildStyler(), this._styler.apply();
        }
        _buildStyler() {
          this._styler = new km(
            this.element,
            this.animationName,
            this._duration,
            this._delay,
            this.easing,
            "forwards",
            () => this.finish()
          );
        }
        triggerCallback(t) {
          const e = "start" == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
        beforeDestroy() {
          this.init();
          const t = {};
          if (this.hasStarted()) {
            const e = this._state >= 3;
            Object.keys(this._finalStyles).forEach((n) => {
              "offset" != n &&
                (t[n] = e ? this._finalStyles[n] : xf(this.element, n));
            });
          }
          this.currentSnapshot = t;
        }
      }
      class jm extends Lp {
        constructor(t, e) {
          super(),
            (this.element = t),
            (this._startingStyles = {}),
            (this.__initialized = !1),
            (this._styles = rf(e));
        }
        init() {
          !this.__initialized &&
            this._startingStyles &&
            ((this.__initialized = !0),
            Object.keys(this._styles).forEach((t) => {
              this._startingStyles[t] = this.element.style[t];
            }),
            super.init());
        }
        play() {
          this._startingStyles &&
            (this.init(),
            Object.keys(this._styles).forEach((t) =>
              this.element.style.setProperty(t, this._styles[t])
            ),
            super.play());
        }
        destroy() {
          this._startingStyles &&
            (Object.keys(this._startingStyles).forEach((t) => {
              const e = this._startingStyles[t];
              e
                ? this.element.style.setProperty(t, e)
                : this.element.style.removeProperty(t);
            }),
            (this._startingStyles = null),
            super.destroy());
        }
      }
      class Fm {
        constructor() {
          (this._count = 0),
            (this._head = document.querySelector("head")),
            (this._warningIssued = !1);
        }
        validateStyleProperty(t) {
          return Xp(t);
        }
        matchesElement(t, e) {
          return tf(t, e);
        }
        containsElement(t, e) {
          return ef(t, e);
        }
        query(t, e, n) {
          return nf(t, e, n);
        }
        computeStyle(t, e, n) {
          return window.getComputedStyle(t)[e];
        }
        buildKeyframeElement(t, e, n) {
          n = n.map((t) => rf(t));
          let r = `@keyframes ${e} {\n`,
            s = "";
          n.forEach((t) => {
            s = " ";
            const e = parseFloat(t.offset);
            (r += `${s}${100 * e}% {\n`),
              (s += " "),
              Object.keys(t).forEach((e) => {
                const n = t[e];
                switch (e) {
                  case "offset":
                    return;
                  case "easing":
                    return void (
                      n && (r += `${s}animation-timing-function: ${n};\n`)
                    );
                  default:
                    return void (r += `${s}${e}: ${n};\n`);
                }
              }),
              (r += `${s}}\n`);
          }),
            (r += "}\n");
          const i = document.createElement("style");
          return (i.innerHTML = r), i;
        }
        animate(t, e, n, r, s, i = [], o) {
          o && this._notifyFaultyScrubber();
          const a = i.filter((t) => t instanceof Dm),
            l = {};
          Cf(n, r) &&
            a.forEach((t) => {
              let e = t.currentSnapshot;
              Object.keys(e).forEach((t) => (l[t] = e[t]));
            });
          const u = (function (t) {
            let e = {};
            return (
              t &&
                (Array.isArray(t) ? t : [t]).forEach((t) => {
                  Object.keys(t).forEach((n) => {
                    "offset" != n && "easing" != n && (e[n] = t[n]);
                  });
                }),
              e
            );
          })((e = Ef(t, e, l)));
          if (0 == n) return new jm(t, u);
          const c = `gen_css_kf_${this._count++}`,
            h = this.buildKeyframeElement(t, c, e);
          document.querySelector("head").appendChild(h);
          const d = Cm(t, e),
            p = new Dm(t, e, c, n, r, s, u, d);
          return (
            p.onDestroy(() => {
              var t;
              (t = h).parentNode.removeChild(t);
            }),
            p
          );
        }
        _notifyFaultyScrubber() {
          this._warningIssued ||
            (console.warn(
              "@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n",
              "  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."
            ),
            (this._warningIssued = !0));
        }
      }
      class Lm {
        constructor(t, e, n, r) {
          (this.element = t),
            (this.keyframes = e),
            (this.options = n),
            (this._specialStyles = r),
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
            (this._duration = n.duration),
            (this._delay = n.delay || 0),
            (this.time = this._duration + this._delay);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []));
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart();
        }
        _buildPlayer() {
          if (this._initialized) return;
          this._initialized = !0;
          const t = this.keyframes;
          (this.domPlayer = this._triggerWebAnimation(
            this.element,
            t,
            this.options
          )),
            (this._finalKeyframe = t.length ? t[t.length - 1] : {}),
            this.domPlayer.addEventListener("finish", () => this._onFinish());
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
        }
        _triggerWebAnimation(t, e, n) {
          return t.animate(e, n);
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach((t) => t()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play();
        }
        pause() {
          this.init(), this.domPlayer.pause();
        }
        finish() {
          this.init(),
            this._specialStyles && this._specialStyles.finish(),
            this._onFinish(),
            this.domPlayer.finish();
        }
        reset() {
          this._resetDomPlayerState(),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel();
        }
        restart() {
          this.reset(), this.play();
        }
        hasStarted() {
          return this._started;
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []));
        }
        setPosition(t) {
          this.domPlayer.currentTime = t * this.time;
        }
        getPosition() {
          return this.domPlayer.currentTime / this.time;
        }
        get totalTime() {
          return this._delay + this._duration;
        }
        beforeDestroy() {
          const t = {};
          this.hasStarted() &&
            Object.keys(this._finalKeyframe).forEach((e) => {
              "offset" != e &&
                (t[e] = this._finished
                  ? this._finalKeyframe[e]
                  : xf(this.element, e));
            }),
            (this.currentSnapshot = t);
        }
        triggerCallback(t) {
          const e = "start" == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
      }
      class Um {
        constructor() {
          (this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(
            Vm().toString()
          )),
            (this._cssKeyframesDriver = new Fm());
        }
        validateStyleProperty(t) {
          return Xp(t);
        }
        matchesElement(t, e) {
          return tf(t, e);
        }
        containsElement(t, e) {
          return ef(t, e);
        }
        query(t, e, n) {
          return nf(t, e, n);
        }
        computeStyle(t, e, n) {
          return window.getComputedStyle(t)[e];
        }
        overrideWebAnimationsSupport(t) {
          this._isNativeImpl = t;
        }
        animate(t, e, n, r, s, i = [], o) {
          if (!o && !this._isNativeImpl)
            return this._cssKeyframesDriver.animate(t, e, n, r, s, i);
          const a = {
            duration: n,
            delay: r,
            fill: 0 == r ? "both" : "forwards",
          };
          s && (a.easing = s);
          const l = {},
            u = i.filter((t) => t instanceof Lm);
          Cf(n, r) &&
            u.forEach((t) => {
              let e = t.currentSnapshot;
              Object.keys(e).forEach((t) => (l[t] = e[t]));
            });
          const c = Cm(t, (e = Ef(t, (e = e.map((t) => hf(t, !1))), l)));
          return new Lm(t, e, a, c);
        }
      }
      function Vm() {
        return (
          ("undefined" != typeof window &&
            void 0 !== window.document &&
            Element.prototype.animate) ||
          {}
        );
      }
      let Mm = (() => {
        class t extends Np {
          constructor(t, e) {
            super(),
              (this._nextAnimationId = 0),
              (this._renderer = t.createRenderer(e.body, {
                id: "0",
                encapsulation: se.None,
                styles: [],
                data: { animation: [] },
              }));
          }
          build(t) {
            const e = this._nextAnimationId.toString();
            this._nextAnimationId++;
            const n = Array.isArray(t) ? Dp(t) : t;
            return (
              qm(this._renderer, null, e, "register", [n]),
              new $m(e, this._renderer)
            );
          }
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)(Kt(Ri), Kt(Ca));
          }),
          (t.??prov = ht({ token: t, factory: t.??fac })),
          t
        );
      })();
      class $m extends class {} {
        constructor(t, e) {
          super(), (this._id = t), (this._renderer = e);
        }
        create(t, e) {
          return new Hm(this._id, t, e || {}, this._renderer);
        }
      }
      class Hm {
        constructor(t, e, n, r) {
          (this.id = t),
            (this.element = e),
            (this._renderer = r),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command("create", n);
        }
        _listen(t, e) {
          return this._renderer.listen(this.element, `@@${this.id}:${t}`, e);
        }
        _command(t, ...e) {
          return qm(this._renderer, this.element, this.id, t, e);
        }
        onDone(t) {
          this._listen("done", t);
        }
        onStart(t) {
          this._listen("start", t);
        }
        onDestroy(t) {
          this._listen("destroy", t);
        }
        init() {
          this._command("init");
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this._command("play"), (this._started = !0);
        }
        pause() {
          this._command("pause");
        }
        restart() {
          this._command("restart");
        }
        finish() {
          this._command("finish");
        }
        destroy() {
          this._command("destroy");
        }
        reset() {
          this._command("reset");
        }
        setPosition(t) {
          this._command("setPosition", t);
        }
        getPosition() {
          return 0;
        }
      }
      function qm(t, e, n, r, s) {
        return t.setProperty(e, `@@${n}:${r}`, s);
      }
      let zm = (() => {
        class t {
          constructor(t, e, n) {
            (this.delegate = t),
              (this.engine = e),
              (this._zone = n),
              (this._currentId = 0),
              (this._microtaskId = 1),
              (this._animationCallbacksBuffer = []),
              (this._rendererCache = new Map()),
              (this._cdRecurDepth = 0),
              (this.promise = Promise.resolve(0)),
              (e.onRemovalComplete = (t, e) => {
                e && e.parentNode(t) && e.removeChild(t.parentNode, t);
              });
          }
          createRenderer(t, e) {
            const n = this.delegate.createRenderer(t, e);
            if (!(t && e && e.data && e.data.animation)) {
              let t = this._rendererCache.get(n);
              return (
                t ||
                  ((t = new Bm("", n, this.engine)),
                  this._rendererCache.set(n, t)),
                t
              );
            }
            const r = e.id,
              s = e.id + "-" + this._currentId;
            this._currentId++, this.engine.register(s, t);
            const i = (e) => {
              Array.isArray(e)
                ? e.forEach(i)
                : this.engine.registerTrigger(r, s, t, e.name, e);
            };
            return e.data.animation.forEach(i), new Qm(this, s, n, this.engine);
          }
          begin() {
            this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
          }
          _scheduleCountTask() {
            this.promise.then(() => {
              this._microtaskId++;
            });
          }
          scheduleListenerCallback(t, e, n) {
            t >= 0 && t < this._microtaskId
              ? this._zone.run(() => e(n))
              : (0 == this._animationCallbacksBuffer.length &&
                  Promise.resolve(null).then(() => {
                    this._zone.run(() => {
                      this._animationCallbacksBuffer.forEach((t) => {
                        const [e, n] = t;
                        e(n);
                      }),
                        (this._animationCallbacksBuffer = []);
                    });
                  }),
                this._animationCallbacksBuffer.push([e, n]));
          }
          end() {
            this._cdRecurDepth--,
              0 == this._cdRecurDepth &&
                this._zone.runOutsideAngular(() => {
                  this._scheduleCountTask(),
                    this.engine.flush(this._microtaskId);
                }),
              this.delegate.end && this.delegate.end();
          }
          whenRenderingDone() {
            return this.engine.whenRenderingDone();
          }
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)(Kt(Ri), Kt(Sm), Kt(Bo));
          }),
          (t.??prov = ht({ token: t, factory: t.??fac })),
          t
        );
      })();
      class Bm {
        constructor(t, e, n) {
          (this.namespaceId = t),
            (this.delegate = e),
            (this.engine = n),
            (this.destroyNode = this.delegate.destroyNode
              ? (t) => e.destroyNode(t)
              : null);
        }
        get data() {
          return this.delegate.data;
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate),
            this.delegate.destroy();
        }
        createElement(t, e) {
          return this.delegate.createElement(t, e);
        }
        createComment(t) {
          return this.delegate.createComment(t);
        }
        createText(t) {
          return this.delegate.createText(t);
        }
        appendChild(t, e) {
          this.delegate.appendChild(t, e),
            this.engine.onInsert(this.namespaceId, e, t, !1);
        }
        insertBefore(t, e, n) {
          this.delegate.insertBefore(t, e, n),
            this.engine.onInsert(this.namespaceId, e, t, !0);
        }
        removeChild(t, e, n) {
          this.engine.onRemove(this.namespaceId, e, this.delegate, n);
        }
        selectRootElement(t, e) {
          return this.delegate.selectRootElement(t, e);
        }
        parentNode(t) {
          return this.delegate.parentNode(t);
        }
        nextSibling(t) {
          return this.delegate.nextSibling(t);
        }
        setAttribute(t, e, n, r) {
          this.delegate.setAttribute(t, e, n, r);
        }
        removeAttribute(t, e, n) {
          this.delegate.removeAttribute(t, e, n);
        }
        addClass(t, e) {
          this.delegate.addClass(t, e);
        }
        removeClass(t, e) {
          this.delegate.removeClass(t, e);
        }
        setStyle(t, e, n, r) {
          this.delegate.setStyle(t, e, n, r);
        }
        removeStyle(t, e, n) {
          this.delegate.removeStyle(t, e, n);
        }
        setProperty(t, e, n) {
          "@" == e.charAt(0) && "@.disabled" == e
            ? this.disableAnimations(t, !!n)
            : this.delegate.setProperty(t, e, n);
        }
        setValue(t, e) {
          this.delegate.setValue(t, e);
        }
        listen(t, e, n) {
          return this.delegate.listen(t, e, n);
        }
        disableAnimations(t, e) {
          this.engine.disableAnimations(t, e);
        }
      }
      class Qm extends Bm {
        constructor(t, e, n, r) {
          super(e, n, r), (this.factory = t), (this.namespaceId = e);
        }
        setProperty(t, e, n) {
          "@" == e.charAt(0)
            ? "." == e.charAt(1) && "@.disabled" == e
              ? this.disableAnimations(t, (n = void 0 === n || !!n))
              : this.engine.process(this.namespaceId, t, e.substr(1), n)
            : this.delegate.setProperty(t, e, n);
        }
        listen(t, e, n) {
          if ("@" == e.charAt(0)) {
            const r = (function (t) {
              switch (t) {
                case "body":
                  return document.body;
                case "document":
                  return document;
                case "window":
                  return window;
                default:
                  return t;
              }
            })(t);
            let s = e.substr(1),
              i = "";
            return (
              "@" != s.charAt(0) &&
                ([s, i] = (function (t) {
                  const e = t.indexOf(".");
                  return [t.substring(0, e), t.substr(e + 1)];
                })(s)),
              this.engine.listen(this.namespaceId, r, s, i, (t) => {
                this.factory.scheduleListenerCallback(t._data || -1, n, t);
              })
            );
          }
          return this.delegate.listen(t, e, n);
        }
      }
      let Wm = (() => {
        class t extends Sm {
          constructor(t, e, n) {
            super(t.body, e, n);
          }
        }
        return (
          (t.??fac = function (e) {
            return new (e || t)(Kt(Ca), Kt(of), Kt(Zf));
          }),
          (t.??prov = ht({ token: t, factory: t.??fac })),
          t
        );
      })();
      const Km = [
        {
          provide: of,
          useFactory: function () {
            return "function" == typeof Vm() ? new Um() : new Fm();
          },
        },
        {
          provide: new Ut("AnimationModuleType"),
          useValue: "BrowserAnimations",
        },
        { provide: Np, useClass: Mm },
        {
          provide: Zf,
          useFactory: function () {
            return new Gf();
          },
        },
        { provide: Sm, useClass: Wm },
        {
          provide: Ri,
          useFactory: function (t, e, n) {
            return new zm(t, e, n);
          },
          deps: [_l, Sm, Bo],
        },
      ];
      let Zm = (() => {
          class t {}
          return (
            (t.??mod = pe({ type: t })),
            (t.??inj = dt({
              factory: function (e) {
                return new (e || t)();
              },
              providers: Km,
              imports: [Ol],
            })),
            t
          );
        })(),
        Gm = (() => {
          class t {
            constructor(t) {
              this.http = t;
            }
            addPushSubscriber(t) {
              return this.http.post("/api/notifications", t);
            }
            send() {
              return this.http.post("/api/newsletter", null);
            }
          }
          return (
            (t.??fac = function (e) {
              return new (e || t)(Kt(Yl));
            }),
            (t.??prov = ht({ token: t, factory: t.??fac })),
            t
          );
        })();
      const Jm = function (t) {
        return ["/lessons", t];
      };
      function Ym(t, e) {
        if (
          (1 & t &&
            (ui(0, "tr", 6),
            ui(1, "td", 7),
            yi(2),
            ci(),
            ui(3, "td", 8),
            ui(4, "i", 9),
            yi(5, "access_time"),
            ci(),
            ui(6, "span"),
            yi(7),
            ci(),
            ci(),
            ci()),
          2 & t)
        ) {
          const t = e.$implicit;
          ai(
            "routerLink",
            (3, (n = Jm), (r = t.id), bo(Pe(), Fe(), 3, n, r, void 0))
          ),
            fr(2),
            _i(t.description),
            fr(5),
            _i(t.duration);
        }
        var n, r;
      }
      const Xm = [
        {
          path: "",
          component: (() => {
            class t {
              constructor(t, e, n) {
                (this.lessonsService = t),
                  (this.swPush = e),
                  (this.newsletterService = n),
                  (this.VAPID_PUBLIC_KEY =
                    "BLnVk1MBGFBW4UxL44fuoM2xxQ4o9CuxocVzKn9UVmnXZEyPCTEFjI4sALMB8qN5ee67yZ6MeQWjd5iyS8lINAg");
              }
              ngOnInit() {
                this.loadLessons();
              }
              loadLessons() {
                this.lessons$ = this.lessonsService
                  .loadAllLessons()
                  .pipe(pc((t) => Il([])));
              }
              subscribeToNotifications() {
                this.swPush
                  .requestSubscription({
                    serverPublicKey: this.VAPID_PUBLIC_KEY,
                  })
                  .then((t) => {
                    (this.sub = t),
                      console.log("Notification Subscription: ", t),
                      this.newsletterService.addPushSubscriber(t).subscribe(
                        () =>
                          console.log(
                            "Sent push subscription object to server."
                          ),
                        (t) =>
                          console.log(
                            "Could not send subscription object to server, reason: ",
                            t
                          )
                      );
                  })
                  .catch((t) =>
                    console.error("Could not subscribe to notifications", t)
                  );
              }
              sendNewsletter() {
                console.log("Sending Newsletter to all Subscribers ..."),
                  this.newsletterService.send().subscribe();
              }
            }
            return (
              (t.??fac = function (e) {
                return new (e || t)(si(hp), si(zu), si(Gm));
              }),
              (t.??cmp = ue({
                type: t,
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
                template: function (t, e) {
                  1 & t &&
                    (ui(0, "div", 0),
                    ui(1, "div", 1),
                    ui(2, "button", 2),
                    fi("click", function (t) {
                      return e.subscribeToNotifications();
                    }),
                    yi(3, " Subscribe "),
                    ci(),
                    ui(4, "button", 3),
                    fi("click", function (t) {
                      return e.sendNewsletter();
                    }),
                    yi(5, " Send "),
                    ci(),
                    ci(),
                    ui(6, "h2"),
                    yi(7, "All Lessons - V11"),
                    ci(),
                    ui(8, "table", 4),
                    ui(9, "tbody"),
                    (function (t, e, n, r, s, i, o, a) {
                      const l = Pe(),
                        u = Oe(),
                        c = u.firstCreatePass
                          ? (function (t, e, n, r, s, i, o, a, l) {
                              const u = e.consts,
                                c = vr(e, n[6], 10, 0, "tr", Yn(u, 5));
                              Ir(e, n, c, Yn(u, void 0)), Ke(e, c);
                              const h = (c.tViews = kr(
                                  2,
                                  -1,
                                  r,
                                  8,
                                  5,
                                  e.directiveRegistry,
                                  e.pipeRegistry,
                                  null,
                                  e.schemas,
                                  u
                                )),
                                d = Ar(0, null, 2, -1, null, null);
                              return (
                                (d.injectorIndex = c.injectorIndex),
                                (h.node = d),
                                null !== e.queries &&
                                  (e.queries.template(e, c),
                                  (h.queries = e.queries.embeddedTView(c))),
                                c
                              );
                            })(0, u, l, e)
                          : u.data[29];
                      Re(c, !1);
                      const h = l[11].createComment("");
                      ms(u, l, h, c),
                        tr(h, l),
                        Wr(l, (l[29] = qr(h, l, h, c))),
                        Ee(c) && Er(u, l, c);
                    })(0, Ym),
                    (function (t, e) {
                      const n = Oe();
                      let r;
                      n.firstCreatePass
                        ? ((r = (function (t, e) {
                            if (e)
                              for (let n = e.length - 1; n >= 0; n--) {
                                const t = e[n];
                                if ("async" === t.name) return t;
                              }
                            throw new Error(
                              "The pipe 'async' could not be found!"
                            );
                          })(0, n.pipeRegistry)),
                          (n.data[30] = r),
                          r.onDestroy &&
                            (n.destroyHooks || (n.destroyHooks = [])).push(
                              30,
                              r.onDestroy
                            ))
                        : (r = n.data[30]);
                      const s = (r.factory || (r.factory = _e(r.type)))();
                      !(function (t, e, n, r) {
                        30 >= t.data.length &&
                          ((t.data[30] = null), (t.blueprint[30] = null)),
                          (e[30] = r);
                      })(n, Pe(), 0, s);
                    })(),
                    ci(),
                    ci(),
                    ci()),
                    2 & t &&
                      (fr(2),
                      ai("disabled", e.sub),
                      fr(8),
                      ai(
                        "ngForOf",
                        (function (t, e, n) {
                          const r = Pe(),
                            s = (function (t, e) {
                              return t[e + 19];
                            })(r, t);
                          return (function (t, e) {
                            return (
                              Xs.isWrapped(e) &&
                                ((e = Xs.unwrap(e)),
                                (t[ke.lFrame.bindingIndex] = dr)),
                              e
                            );
                          })(
                            r,
                            (function (t, e) {
                              return t[1].data[e + 19].pure;
                            })(r, t)
                              ? bo(r, Fe(), e, s.transform, n, s)
                              : s.transform(n)
                          );
                        })(11, 2, e.lessons$)
                      ));
                },
                directives: [Qa, Md],
                pipes: [Ya],
                styles: [
                  ".buttons[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-align:center}.buttons[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}",
                ],
              })),
              t
            );
          })(),
        },
      ];
      let tg = (() => {
          class t {}
          return (
            (t.??mod = pe({ type: t })),
            (t.??inj = dt({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[ep.forRoot(Xm)], ep],
            })),
            t
          );
        })(),
        eg = (() => {
          class t {}
          return (
            (t.??mod = pe({ type: t, bootstrap: [cp] })),
            (t.??inj = dt({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [hp, Gm],
              imports: [
                [
                  Ol.withServerTransition({ appId: "serverApp" }),
                  pu,
                  Zm,
                  tg,
                  Rp,
                  Gu.register("/pruebaRepo/ngsw-worker.js", {
                    enabled: !0,
                    registrationStrategy: "registerImmediately",
                  }),
                ],
              ],
            })),
            t
          );
        })();
      (function () {
        if (Vn)
          throw new Error("Cannot enable prod mode after platform setup.");
        Un = !1;
      })(),
        document.addEventListener("DOMContentLoaded", () => {
          Al().bootstrapModule(eg);
        });
    },
  },
  [[0, 0]],
]);
