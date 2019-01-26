!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          n.d(
            r,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 719));
})([
  function(e, t, n) {
    'use strict';
    e.exports = n(17);
  },
  function(e, t, n) {
    'use strict';
    var r = function(e) {};
    e.exports = function(e, t, n, a, i, o, s, l) {
      if ((r(t), !e)) {
        var c;
        if (void 0 === t)
          c = new Error(
            'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
          );
        else {
          var d = [n, a, i, o, s, l],
            u = 0;
          (c = new Error(
            t.replace(/%s/g, function() {
              return d[u++];
            })
          )).name = 'Invariant Violation';
        }
        throw ((c.framesToPop = 1), c);
      }
    };
  },
  function(e, t, n) {
    'use strict';
    e.exports = function(e) {
      for (
        var t = arguments.length - 1,
          n =
            'Minified React error #' +
            e +
            '; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=' +
            e,
          r = 0;
        r < t;
        r++
      )
        n += '&args[]=' + encodeURIComponent(arguments[r + 1]);
      n +=
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.';
      var a = new Error(n);
      throw ((a.name = 'Invariant Violation'), (a.framesToPop = 1), a);
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(8);
    e.exports = r;
  },
  function(e, t, n) {
    'use strict';
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r =
        Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;
    e.exports = (function() {
      try {
        if (!Object.assign) return !1;
        var e = new String('abc');
        if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var t = {}, n = 0; n < 10; n++)
          t['_' + String.fromCharCode(n)] = n;
        if (
          '0123456789' !==
          Object.getOwnPropertyNames(t)
            .map(function(e) {
              return t[e];
            })
            .join('')
        )
          return !1;
        var r = {};
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function(e) {
            r[e] = e;
          }),
          'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function(e, t) {
          for (
            var n,
              o,
              s = (function(e) {
                if (null == e)
                  throw new TypeError(
                    'Object.assign cannot be called with null or undefined'
                  );
                return Object(e);
              })(e),
              l = 1;
            l < arguments.length;
            l++
          ) {
            for (var c in (n = Object(arguments[l])))
              a.call(n, c) && (s[c] = n[c]);
            if (r) {
              o = r(n);
              for (var d = 0; d < o.length; d++)
                i.call(n, o[d]) && (s[o[d]] = n[o[d]]);
            }
          }
          return s;
        };
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = n(19),
      i = n(64),
      o = (n(1), a.ID_ATTRIBUTE_NAME),
      s = i,
      l =
        '__reactInternalInstance$' +
        Math.random()
          .toString(36)
          .slice(2);
    function c(e, t) {
      return (
        (1 === e.nodeType && e.getAttribute(o) === String(t)) ||
        (8 === e.nodeType && e.nodeValue === ' react-text: ' + t + ' ') ||
        (8 === e.nodeType && e.nodeValue === ' react-empty: ' + t + ' ')
      );
    }
    function d(e) {
      for (var t; (t = e._renderedComponent); ) e = t;
      return e;
    }
    function u(e, t) {
      var n = d(e);
      (n._hostNode = t), (t[l] = n);
    }
    function p(e, t) {
      if (!(e._flags & s.hasCachedChildNodes)) {
        var n = e._renderedChildren,
          a = t.firstChild;
        e: for (var i in n)
          if (n.hasOwnProperty(i)) {
            var o = n[i],
              l = d(o)._domID;
            if (0 !== l) {
              for (; null !== a; a = a.nextSibling)
                if (c(a, l)) {
                  u(o, a);
                  continue e;
                }
              r('32', l);
            }
          }
        e._flags |= s.hasCachedChildNodes;
      }
    }
    function m(e) {
      if (e[l]) return e[l];
      for (var t, n, r = []; !e[l]; ) {
        if ((r.push(e), !e.parentNode)) return null;
        e = e.parentNode;
      }
      for (; e && (n = e[l]); e = r.pop()) (t = n), r.length && p(n, e);
      return t;
    }
    var g = {
      getClosestInstanceFromNode: m,
      getInstanceFromNode: function(e) {
        var t = m(e);
        return null != t && t._hostNode === e ? t : null;
      },
      getNodeFromInstance: function(e) {
        if ((void 0 === e._hostNode && r('33'), e._hostNode))
          return e._hostNode;
        for (var t = []; !e._hostNode; )
          t.push(e), e._hostParent || r('34'), (e = e._hostParent);
        for (; t.length; e = t.pop()) p(e, e._hostNode);
        return e._hostNode;
      },
      precacheChildNodes: p,
      precacheNode: u,
      uncacheNode: function(e) {
        var t = e._hostNode;
        t && (delete t[l], (e._hostNode = null));
      }
    };
    e.exports = g;
  },
  function(e, t, n) {
    'use strict';
    var r = !(
        'undefined' == typeof window ||
        !window.document ||
        !window.document.createElement
      ),
      a = {
        canUseDOM: r,
        canUseWorkers: 'undefined' != typeof Worker,
        canUseEventListeners:
          r && !(!window.addEventListener && !window.attachEvent),
        canUseViewport: r && !!window.screen,
        isInWorker: !r
      };
    e.exports = a;
  },
  function(e, t, n) {
    'use strict';
    e.exports = { debugTool: null };
  },
  function(e, t, n) {
    'use strict';
    function r(e) {
      return function() {
        return e;
      };
    }
    var a = function() {};
    (a.thatReturns = r),
      (a.thatReturnsFalse = r(!1)),
      (a.thatReturnsTrue = r(!0)),
      (a.thatReturnsNull = r(null)),
      (a.thatReturnsThis = function() {
        return this;
      }),
      (a.thatReturnsArgument = function(e) {
        return e;
      }),
      (e.exports = a);
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = n(4),
      i = n(68),
      o = n(15),
      s = n(69),
      l = n(20),
      c = n(31),
      d = n(1),
      u = [],
      p = 0,
      m = i.getPooled(),
      g = !1,
      f = null;
    function _() {
      (S.ReactReconcileTransaction && f) || r('123');
    }
    var b = [
      {
        initialize: function() {
          this.dirtyComponentsLength = u.length;
        },
        close: function() {
          this.dirtyComponentsLength !== u.length
            ? (u.splice(0, this.dirtyComponentsLength), y())
            : (u.length = 0);
        }
      },
      {
        initialize: function() {
          this.callbackQueue.reset();
        },
        close: function() {
          this.callbackQueue.notifyAll();
        }
      }
    ];
    function h() {
      this.reinitializeTransaction(),
        (this.dirtyComponentsLength = null),
        (this.callbackQueue = i.getPooled()),
        (this.reconcileTransaction = S.ReactReconcileTransaction.getPooled(!0));
    }
    function v(e, t) {
      return e._mountOrder - t._mountOrder;
    }
    function E(e) {
      var t = e.dirtyComponentsLength;
      t !== u.length && r('124', t, u.length), u.sort(v), p++;
      for (var n = 0; n < t; n++) {
        var a,
          i = u[n],
          o = i._pendingCallbacks;
        if (((i._pendingCallbacks = null), s.logTopLevelRenders)) {
          var c = i;
          i._currentElement.type.isReactTopLevelWrapper &&
            (c = i._renderedComponent),
            (a = 'React update: ' + c.getName()),
            console.time(a);
        }
        if (
          (l.performUpdateIfNecessary(i, e.reconcileTransaction, p),
          a && console.timeEnd(a),
          o)
        )
          for (var d = 0; d < o.length; d++)
            e.callbackQueue.enqueue(o[d], i.getPublicInstance());
      }
    }
    a(h.prototype, c, {
      getTransactionWrappers: function() {
        return b;
      },
      destructor: function() {
        (this.dirtyComponentsLength = null),
          i.release(this.callbackQueue),
          (this.callbackQueue = null),
          S.ReactReconcileTransaction.release(this.reconcileTransaction),
          (this.reconcileTransaction = null);
      },
      perform: function(e, t, n) {
        return c.perform.call(
          this,
          this.reconcileTransaction.perform,
          this.reconcileTransaction,
          e,
          t,
          n
        );
      }
    }),
      o.addPoolingTo(h);
    var y = function() {
      for (; u.length || g; ) {
        if (u.length) {
          var e = h.getPooled();
          e.perform(E, null, e), h.release(e);
        }
        if (g) {
          g = !1;
          var t = m;
          (m = i.getPooled()), t.notifyAll(), i.release(t);
        }
      }
    };
    var S = {
      ReactReconcileTransaction: null,
      batchedUpdates: function(e, t, n, r, a, i) {
        return _(), f.batchedUpdates(e, t, n, r, a, i);
      },
      enqueueUpdate: function e(t) {
        _(),
          f.isBatchingUpdates
            ? (u.push(t),
              null == t._updateBatchNumber && (t._updateBatchNumber = p + 1))
            : f.batchedUpdates(e, t);
      },
      flushBatchedUpdates: y,
      injection: {
        injectReconcileTransaction: function(e) {
          e || r('126'), (S.ReactReconcileTransaction = e);
        },
        injectBatchingStrategy: function(e) {
          e || r('127'),
            'function' != typeof e.batchedUpdates && r('128'),
            'boolean' != typeof e.isBatchingUpdates && r('129'),
            (f = e);
        }
      },
      asap: function(e, t) {
        d(
          f.isBatchingUpdates,
          "ReactUpdates.asap: Can't enqueue an asap callback in a context whereupdates are not being batched."
        ),
          m.enqueue(e, t),
          (g = !0);
      }
    };
    e.exports = S;
  },
  ,
  function(e, t, n) {
    'use strict';
    e.exports = { current: null };
  },
  function(e, t, n) {
    'use strict';
    var r = n(4),
      a = n(15),
      i = n(8),
      o = (n(3),
      [
        'dispatchConfig',
        '_targetInst',
        'nativeEvent',
        'isDefaultPrevented',
        'isPropagationStopped',
        '_dispatchListeners',
        '_dispatchInstances'
      ]),
      s = {
        type: null,
        target: null,
        currentTarget: i.thatReturnsNull,
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: null,
        isTrusted: null
      };
    function l(e, t, n, r) {
      (this.dispatchConfig = e), (this._targetInst = t), (this.nativeEvent = n);
      var a = this.constructor.Interface;
      for (var o in a)
        if (a.hasOwnProperty(o)) {
          0;
          var s = a[o];
          s
            ? (this[o] = s(n))
            : 'target' === o
            ? (this.target = r)
            : (this[o] = n[o]);
        }
      var l =
        null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue;
      return (
        (this.isDefaultPrevented = l ? i.thatReturnsTrue : i.thatReturnsFalse),
        (this.isPropagationStopped = i.thatReturnsFalse),
        this
      );
    }
    r(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = i.thatReturnsTrue));
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = i.thatReturnsTrue));
      },
      persist: function() {
        this.isPersistent = i.thatReturnsTrue;
      },
      isPersistent: i.thatReturnsFalse,
      destructor: function() {
        var e = this.constructor.Interface;
        for (var t in e) this[t] = null;
        for (var n = 0; n < o.length; n++) this[o[n]] = null;
      }
    }),
      (l.Interface = s),
      (l.augmentClass = function(e, t) {
        var n = function() {};
        n.prototype = this.prototype;
        var i = new n();
        r(i, e.prototype),
          (e.prototype = i),
          (e.prototype.constructor = e),
          (e.Interface = r({}, this.Interface, t)),
          (e.augmentClass = this.augmentClass),
          a.addPoolingTo(e, a.fourArgumentPooler);
      }),
      a.addPoolingTo(l, a.fourArgumentPooler),
      (e.exports = l);
  },
  ,
  ,
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = (n(1),
      function(e) {
        if (this.instancePool.length) {
          var t = this.instancePool.pop();
          return this.call(t, e), t;
        }
        return new this(e);
      }),
      i = function(e) {
        e instanceof this || r('25'),
          e.destructor(),
          this.instancePool.length < this.poolSize && this.instancePool.push(e);
      },
      o = a,
      s = {
        addPoolingTo: function(e, t) {
          var n = e;
          return (
            (n.instancePool = []),
            (n.getPooled = t || o),
            n.poolSize || (n.poolSize = 10),
            (n.release = i),
            n
          );
        },
        oneArgumentPooler: a,
        twoArgumentPooler: function(e, t) {
          if (this.instancePool.length) {
            var n = this.instancePool.pop();
            return this.call(n, e, t), n;
          }
          return new this(e, t);
        },
        threeArgumentPooler: function(e, t, n) {
          if (this.instancePool.length) {
            var r = this.instancePool.pop();
            return this.call(r, e, t, n), r;
          }
          return new this(e, t, n);
        },
        fourArgumentPooler: function(e, t, n, r) {
          if (this.instancePool.length) {
            var a = this.instancePool.pop();
            return this.call(a, e, t, n, r), a;
          }
          return new this(e, t, n, r);
        }
      };
    e.exports = s;
  },
  ,
  function(e, t, n) {
    'use strict';
    var r = n(4),
      a = n(59),
      i = n(105),
      o = n(110),
      s = n(18),
      l = n(111),
      c = n(114),
      d = n(115),
      u = n(117),
      p = s.createElement,
      m = s.createFactory,
      g = s.cloneElement,
      f = r,
      _ = {
        Children: {
          map: i.map,
          forEach: i.forEach,
          count: i.count,
          toArray: i.toArray,
          only: u
        },
        Component: a.Component,
        PureComponent: a.PureComponent,
        createElement: p,
        cloneElement: g,
        isValidElement: s.isValidElement,
        PropTypes: l,
        createClass: d,
        createFactory: m,
        createMixin: function(e) {
          return e;
        },
        DOM: o,
        version: c,
        __spread: f
      };
    e.exports = _;
  },
  function(e, t, n) {
    'use strict';
    var r = n(4),
      a = n(11),
      i = (n(3), n(61), Object.prototype.hasOwnProperty),
      o = n(62),
      s = { key: !0, ref: !0, __self: !0, __source: !0 };
    function l(e) {
      return void 0 !== e.ref;
    }
    function c(e) {
      return void 0 !== e.key;
    }
    var d = function(e, t, n, r, a, i, s) {
      return { $$typeof: o, type: e, key: t, ref: n, props: s, _owner: i };
    };
    (d.createElement = function(e, t, n) {
      var r,
        o = {},
        u = null,
        p = null;
      if (null != t)
        for (r in (l(t) && (p = t.ref),
        c(t) && (u = '' + t.key),
        void 0 === t.__self ? null : t.__self,
        void 0 === t.__source ? null : t.__source,
        t))
          i.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
      var m = arguments.length - 2;
      if (1 === m) o.children = n;
      else if (m > 1) {
        for (var g = Array(m), f = 0; f < m; f++) g[f] = arguments[f + 2];
        0, (o.children = g);
      }
      if (e && e.defaultProps) {
        var _ = e.defaultProps;
        for (r in _) void 0 === o[r] && (o[r] = _[r]);
      }
      return d(e, u, p, 0, 0, a.current, o);
    }),
      (d.createFactory = function(e) {
        var t = d.createElement.bind(null, e);
        return (t.type = e), t;
      }),
      (d.cloneAndReplaceKey = function(e, t) {
        return d(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
      }),
      (d.cloneElement = function(e, t, n) {
        var o,
          u,
          p = r({}, e.props),
          m = e.key,
          g = e.ref,
          f = (e._self, e._source, e._owner);
        if (null != t)
          for (o in (l(t) && ((g = t.ref), (f = a.current)),
          c(t) && (m = '' + t.key),
          e.type && e.type.defaultProps && (u = e.type.defaultProps),
          t))
            i.call(t, o) &&
              !s.hasOwnProperty(o) &&
              (void 0 === t[o] && void 0 !== u ? (p[o] = u[o]) : (p[o] = t[o]));
        var _ = arguments.length - 2;
        if (1 === _) p.children = n;
        else if (_ > 1) {
          for (var b = Array(_), h = 0; h < _; h++) b[h] = arguments[h + 2];
          p.children = b;
        }
        return d(e.type, m, g, 0, 0, f, p);
      }),
      (d.isValidElement = function(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === o;
      }),
      (e.exports = d);
  },
  function(e, t, n) {
    'use strict';
    var r = n(2);
    n(1);
    function a(e, t) {
      return (e & t) === t;
    }
    var i = {
        MUST_USE_PROPERTY: 1,
        HAS_BOOLEAN_VALUE: 4,
        HAS_NUMERIC_VALUE: 8,
        HAS_POSITIVE_NUMERIC_VALUE: 24,
        HAS_OVERLOADED_BOOLEAN_VALUE: 32,
        injectDOMPropertyConfig: function(e) {
          var t = i,
            n = e.Properties || {},
            o = e.DOMAttributeNamespaces || {},
            l = e.DOMAttributeNames || {},
            c = e.DOMPropertyNames || {},
            d = e.DOMMutationMethods || {};
          for (var u in (e.isCustomAttribute &&
            s._isCustomAttributeFunctions.push(e.isCustomAttribute),
          n)) {
            s.properties.hasOwnProperty(u) && r('48', u);
            var p = u.toLowerCase(),
              m = n[u],
              g = {
                attributeName: p,
                attributeNamespace: null,
                propertyName: u,
                mutationMethod: null,
                mustUseProperty: a(m, t.MUST_USE_PROPERTY),
                hasBooleanValue: a(m, t.HAS_BOOLEAN_VALUE),
                hasNumericValue: a(m, t.HAS_NUMERIC_VALUE),
                hasPositiveNumericValue: a(m, t.HAS_POSITIVE_NUMERIC_VALUE),
                hasOverloadedBooleanValue: a(m, t.HAS_OVERLOADED_BOOLEAN_VALUE)
              };
            if (
              (g.hasBooleanValue +
                g.hasNumericValue +
                g.hasOverloadedBooleanValue <=
                1 || r('50', u),
              l.hasOwnProperty(u))
            ) {
              var f = l[u];
              g.attributeName = f;
            }
            o.hasOwnProperty(u) && (g.attributeNamespace = o[u]),
              c.hasOwnProperty(u) && (g.propertyName = c[u]),
              d.hasOwnProperty(u) && (g.mutationMethod = d[u]),
              (s.properties[u] = g);
          }
        }
      },
      o =
        ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD',
      s = {
        ID_ATTRIBUTE_NAME: 'data-reactid',
        ROOT_ATTRIBUTE_NAME: 'data-reactroot',
        ATTRIBUTE_NAME_START_CHAR: o,
        ATTRIBUTE_NAME_CHAR: o + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',
        properties: {},
        getPossibleStandardName: null,
        _isCustomAttributeFunctions: [],
        isCustomAttribute: function(e) {
          for (var t = 0; t < s._isCustomAttributeFunctions.length; t++) {
            if ((0, s._isCustomAttributeFunctions[t])(e)) return !0;
          }
          return !1;
        },
        injection: i
      };
    e.exports = s;
  },
  function(e, t, n) {
    'use strict';
    var r = n(126);
    n(7), n(3);
    function a() {
      r.attachRefs(this, this._currentElement);
    }
    var i = {
      mountComponent: function(e, t, n, r, i, o) {
        var s = e.mountComponent(t, n, r, i, o);
        return (
          e._currentElement &&
            null != e._currentElement.ref &&
            t.getReactMountReady().enqueue(a, e),
          s
        );
      },
      getHostNode: function(e) {
        return e.getHostNode();
      },
      unmountComponent: function(e, t) {
        r.detachRefs(e, e._currentElement), e.unmountComponent(t);
      },
      receiveComponent: function(e, t, n, i) {
        var o = e._currentElement;
        if (t !== o || i !== e._context) {
          0;
          var s = r.shouldUpdateRefs(o, t);
          s && r.detachRefs(e, o),
            e.receiveComponent(t, n, i),
            s &&
              e._currentElement &&
              null != e._currentElement.ref &&
              n.getReactMountReady().enqueue(a, e);
        }
      },
      performUpdateIfNecessary: function(e, t, n) {
        e._updateBatchNumber === n && e.performUpdateIfNecessary(t);
      }
    };
    e.exports = i;
  },
  function(e, t, n) {
    'use strict';
    var r = n(45),
      a = n(33),
      i = n(46),
      o = n(73),
      s =
        ('undefined' != typeof document &&
          'number' == typeof document.documentMode) ||
        ('undefined' != typeof navigator &&
          'string' == typeof navigator.userAgent &&
          /\bEdge\/\d/.test(navigator.userAgent));
    function l(e) {
      if (s) {
        var t = e.node,
          n = e.children;
        if (n.length) for (var r = 0; r < n.length; r++) c(t, n[r], null);
        else null != e.html ? a(t, e.html) : null != e.text && o(t, e.text);
      }
    }
    var c = i(function(e, t, n) {
      11 === t.node.nodeType ||
      (1 === t.node.nodeType &&
        'object' === t.node.nodeName.toLowerCase() &&
        (null == t.node.namespaceURI || t.node.namespaceURI === r.html))
        ? (l(t), e.insertBefore(t.node, n))
        : (e.insertBefore(t.node, n), l(t));
    });
    function d() {
      return this.node.nodeName;
    }
    function u(e) {
      return { node: e, children: [], html: null, text: null, toString: d };
    }
    (u.insertTreeBefore = c),
      (u.replaceChildWithTree = function(e, t) {
        e.parentNode.replaceChild(t.node, e), l(t);
      }),
      (u.queueChild = function(e, t) {
        s ? e.children.push(t) : e.node.appendChild(t.node);
      }),
      (u.queueHTML = function(e, t) {
        s ? (e.html = t) : a(e.node, t);
      }),
      (u.queueText = function(e, t) {
        s ? (e.text = t) : o(e.node, t);
      }),
      (e.exports = u);
  },
  ,
  ,
  function(e, t, n) {
    'use strict';
    e.exports = function(e) {
      for (
        var t = arguments.length - 1,
          n =
            'Minified React error #' +
            e +
            '; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=' +
            e,
          r = 0;
        r < t;
        r++
      )
        n += '&args[]=' + encodeURIComponent(arguments[r + 1]);
      n +=
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.';
      var a = new Error(n);
      throw ((a.name = 'Invariant Violation'), (a.framesToPop = 1), a);
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(26),
      a = n(39),
      i = n(65),
      o = n(66),
      s = (n(3), r.getListener);
    function l(e, t, n) {
      var r = (function(e, t, n) {
        var r = t.dispatchConfig.phasedRegistrationNames[n];
        return s(e, r);
      })(e, n, t);
      r &&
        ((n._dispatchListeners = i(n._dispatchListeners, r)),
        (n._dispatchInstances = i(n._dispatchInstances, e)));
    }
    function c(e) {
      e &&
        e.dispatchConfig.phasedRegistrationNames &&
        a.traverseTwoPhase(e._targetInst, l, e);
    }
    function d(e) {
      if (e && e.dispatchConfig.phasedRegistrationNames) {
        var t = e._targetInst,
          n = t ? a.getParentInstance(t) : null;
        a.traverseTwoPhase(n, l, e);
      }
    }
    function u(e, t, n) {
      if (n && n.dispatchConfig.registrationName) {
        var r = n.dispatchConfig.registrationName,
          a = s(e, r);
        a &&
          ((n._dispatchListeners = i(n._dispatchListeners, a)),
          (n._dispatchInstances = i(n._dispatchInstances, e)));
      }
    }
    function p(e) {
      e && e.dispatchConfig.registrationName && u(e._targetInst, 0, e);
    }
    var m = {
      accumulateTwoPhaseDispatches: function(e) {
        o(e, c);
      },
      accumulateTwoPhaseDispatchesSkipTarget: function(e) {
        o(e, d);
      },
      accumulateDirectDispatches: function(e) {
        o(e, p);
      },
      accumulateEnterLeaveDispatches: function(e, t, n, r) {
        a.traverseEnterLeave(n, r, u, e, t);
      }
    };
    e.exports = m;
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = n(38),
      i = n(39),
      o = n(40),
      s = n(65),
      l = n(66),
      c = (n(1), {}),
      d = null,
      u = function(e, t) {
        e &&
          (i.executeDispatchesInOrder(e, t),
          e.isPersistent() || e.constructor.release(e));
      },
      p = function(e) {
        return u(e, !0);
      },
      m = function(e) {
        return u(e, !1);
      },
      g = function(e) {
        return '.' + e._rootNodeID;
      };
    var f = {
      injection: {
        injectEventPluginOrder: a.injectEventPluginOrder,
        injectEventPluginsByName: a.injectEventPluginsByName
      },
      putListener: function(e, t, n) {
        'function' != typeof n && r('94', t, typeof n);
        var i = g(e);
        (c[t] || (c[t] = {}))[i] = n;
        var o = a.registrationNameModules[t];
        o && o.didPutListener && o.didPutListener(e, t, n);
      },
      getListener: function(e, t) {
        var n = c[t];
        if (
          (function(e, t, n) {
            switch (e) {
              case 'onClick':
              case 'onClickCapture':
              case 'onDoubleClick':
              case 'onDoubleClickCapture':
              case 'onMouseDown':
              case 'onMouseDownCapture':
              case 'onMouseMove':
              case 'onMouseMoveCapture':
              case 'onMouseUp':
              case 'onMouseUpCapture':
                return !(
                  !n.disabled ||
                  ((r = t),
                  'button' !== r &&
                    'input' !== r &&
                    'select' !== r &&
                    'textarea' !== r)
                );
              default:
                return !1;
            }
            var r;
          })(t, e._currentElement.type, e._currentElement.props)
        )
          return null;
        var r = g(e);
        return n && n[r];
      },
      deleteListener: function(e, t) {
        var n = a.registrationNameModules[t];
        n && n.willDeleteListener && n.willDeleteListener(e, t);
        var r = c[t];
        r && delete r[g(e)];
      },
      deleteAllListeners: function(e) {
        var t = g(e);
        for (var n in c)
          if (c.hasOwnProperty(n) && c[n][t]) {
            var r = a.registrationNameModules[n];
            r && r.willDeleteListener && r.willDeleteListener(e, n),
              delete c[n][t];
          }
      },
      extractEvents: function(e, t, n, r) {
        for (var i, o = a.plugins, l = 0; l < o.length; l++) {
          var c = o[l];
          if (c) {
            var d = c.extractEvents(e, t, n, r);
            d && (i = s(i, d));
          }
        }
        return i;
      },
      enqueueEvents: function(e) {
        e && (d = s(d, e));
      },
      processEventQueue: function(e) {
        var t = d;
        (d = null), l(t, e ? p : m), d && r('95'), o.rethrowCaughtError();
      },
      __purge: function() {
        c = {};
      },
      __getListenerBank: function() {
        return c;
      }
    };
    e.exports = f;
  },
  function(e, t, n) {
    'use strict';
    var r = n(12),
      a = n(41),
      i = {
        view: function(e) {
          if (e.view) return e.view;
          var t = a(e);
          if (t.window === t) return t;
          var n = t.ownerDocument;
          return n ? n.defaultView || n.parentWindow : window;
        },
        detail: function(e) {
          return e.detail || 0;
        }
      };
    function o(e, t, n, a) {
      return r.call(this, e, t, n, a);
    }
    r.augmentClass(o, i), (e.exports = o);
  },
  function(e, t, n) {
    'use strict';
    var r = {
      remove: function(e) {
        e._reactInternalInstance = void 0;
      },
      get: function(e) {
        return e._reactInternalInstance;
      },
      has: function(e) {
        return void 0 !== e._reactInternalInstance;
      },
      set: function(e, t) {
        e._reactInternalInstance = t;
      }
    };
    e.exports = r;
  },
  ,
  function(e, t, n) {
    'use strict';
    e.exports = {};
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = (n(1), {}),
      i = {
        reinitializeTransaction: function() {
          (this.transactionWrappers = this.getTransactionWrappers()),
            this.wrapperInitData
              ? (this.wrapperInitData.length = 0)
              : (this.wrapperInitData = []),
            (this._isInTransaction = !1);
        },
        _isInTransaction: !1,
        getTransactionWrappers: null,
        isInTransaction: function() {
          return !!this._isInTransaction;
        },
        perform: function(e, t, n, a, i, o, s, l) {
          var c, d;
          this.isInTransaction() && r('27');
          try {
            (this._isInTransaction = !0),
              (c = !0),
              this.initializeAll(0),
              (d = e.call(t, n, a, i, o, s, l)),
              (c = !1);
          } finally {
            try {
              if (c)
                try {
                  this.closeAll(0);
                } catch (e) {}
              else this.closeAll(0);
            } finally {
              this._isInTransaction = !1;
            }
          }
          return d;
        },
        initializeAll: function(e) {
          for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
            var r = t[n];
            try {
              (this.wrapperInitData[n] = a),
                (this.wrapperInitData[n] = r.initialize
                  ? r.initialize.call(this)
                  : null);
            } finally {
              if (this.wrapperInitData[n] === a)
                try {
                  this.initializeAll(n + 1);
                } catch (e) {}
            }
          }
        },
        closeAll: function(e) {
          this.isInTransaction() || r('28');
          for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
            var i,
              o = t[n],
              s = this.wrapperInitData[n];
            try {
              (i = !0), s !== a && o.close && o.close.call(this, s), (i = !1);
            } finally {
              if (i)
                try {
                  this.closeAll(n + 1);
                } catch (e) {}
            }
          }
          this.wrapperInitData.length = 0;
        }
      };
    e.exports = i;
  },
  function(e, t, n) {
    'use strict';
    var r = n(27),
      a = n(72),
      i = {
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: n(43),
        button: function(e) {
          var t = e.button;
          return 'which' in e ? t : 2 === t ? 2 : 4 === t ? 1 : 0;
        },
        buttons: null,
        relatedTarget: function(e) {
          return (
            e.relatedTarget ||
            (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
          );
        },
        pageX: function(e) {
          return 'pageX' in e ? e.pageX : e.clientX + a.currentScrollLeft;
        },
        pageY: function(e) {
          return 'pageY' in e ? e.pageY : e.clientY + a.currentScrollTop;
        }
      };
    function o(e, t, n, a) {
      return r.call(this, e, t, n, a);
    }
    r.augmentClass(o, i), (e.exports = o);
  },
  function(e, t, n) {
    'use strict';
    var r,
      a = n(6),
      i = n(45),
      o = /^[ \r\n\t\f]/,
      s = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,
      l = n(46)(function(e, t) {
        if (e.namespaceURI !== i.svg || 'innerHTML' in e) e.innerHTML = t;
        else {
          (r = r || document.createElement('div')).innerHTML =
            '<svg>' + t + '</svg>';
          for (var n = r.firstChild; n.firstChild; )
            e.appendChild(n.firstChild);
        }
      });
    if (a.canUseDOM) {
      var c = document.createElement('div');
      (c.innerHTML = ' '),
        '' === c.innerHTML &&
          (l = function(e, t) {
            if (
              (e.parentNode && e.parentNode.replaceChild(e, e),
              o.test(t) || ('<' === t[0] && s.test(t)))
            ) {
              e.innerHTML = String.fromCharCode(65279) + t;
              var n = e.firstChild;
              1 === n.data.length ? e.removeChild(n) : n.deleteData(0, 1);
            } else e.innerHTML = t;
          }),
        (c = null);
    }
    e.exports = l;
  },
  function(e, t, n) {
    'use strict';
    var r = /["'&<>]/;
    e.exports = function(e) {
      return 'boolean' == typeof e || 'number' == typeof e
        ? '' + e
        : (function(e) {
            var t,
              n = '' + e,
              a = r.exec(n);
            if (!a) return n;
            var i = '',
              o = 0,
              s = 0;
            for (o = a.index; o < n.length; o++) {
              switch (n.charCodeAt(o)) {
                case 34:
                  t = '&quot;';
                  break;
                case 38:
                  t = '&amp;';
                  break;
                case 39:
                  t = '&#x27;';
                  break;
                case 60:
                  t = '&lt;';
                  break;
                case 62:
                  t = '&gt;';
                  break;
                default:
                  continue;
              }
              s !== o && (i += n.substring(s, o)), (s = o + 1), (i += t);
            }
            return s !== o ? i + n.substring(s, o) : i;
          })(e);
    };
  },
  function(e, t, n) {
    'use strict';
    var r,
      a = n(4),
      i = n(38),
      o = n(147),
      s = n(72),
      l = n(148),
      c = n(42),
      d = {},
      u = !1,
      p = 0,
      m = {
        topAbort: 'abort',
        topAnimationEnd: l('animationend') || 'animationend',
        topAnimationIteration: l('animationiteration') || 'animationiteration',
        topAnimationStart: l('animationstart') || 'animationstart',
        topBlur: 'blur',
        topCanPlay: 'canplay',
        topCanPlayThrough: 'canplaythrough',
        topChange: 'change',
        topClick: 'click',
        topCompositionEnd: 'compositionend',
        topCompositionStart: 'compositionstart',
        topCompositionUpdate: 'compositionupdate',
        topContextMenu: 'contextmenu',
        topCopy: 'copy',
        topCut: 'cut',
        topDoubleClick: 'dblclick',
        topDrag: 'drag',
        topDragEnd: 'dragend',
        topDragEnter: 'dragenter',
        topDragExit: 'dragexit',
        topDragLeave: 'dragleave',
        topDragOver: 'dragover',
        topDragStart: 'dragstart',
        topDrop: 'drop',
        topDurationChange: 'durationchange',
        topEmptied: 'emptied',
        topEncrypted: 'encrypted',
        topEnded: 'ended',
        topError: 'error',
        topFocus: 'focus',
        topInput: 'input',
        topKeyDown: 'keydown',
        topKeyPress: 'keypress',
        topKeyUp: 'keyup',
        topLoadedData: 'loadeddata',
        topLoadedMetadata: 'loadedmetadata',
        topLoadStart: 'loadstart',
        topMouseDown: 'mousedown',
        topMouseMove: 'mousemove',
        topMouseOut: 'mouseout',
        topMouseOver: 'mouseover',
        topMouseUp: 'mouseup',
        topPaste: 'paste',
        topPause: 'pause',
        topPlay: 'play',
        topPlaying: 'playing',
        topProgress: 'progress',
        topRateChange: 'ratechange',
        topScroll: 'scroll',
        topSeeked: 'seeked',
        topSeeking: 'seeking',
        topSelectionChange: 'selectionchange',
        topStalled: 'stalled',
        topSuspend: 'suspend',
        topTextInput: 'textInput',
        topTimeUpdate: 'timeupdate',
        topTouchCancel: 'touchcancel',
        topTouchEnd: 'touchend',
        topTouchMove: 'touchmove',
        topTouchStart: 'touchstart',
        topTransitionEnd: l('transitionend') || 'transitionend',
        topVolumeChange: 'volumechange',
        topWaiting: 'waiting',
        topWheel: 'wheel'
      },
      g = '_reactListenersID' + String(Math.random()).slice(2);
    var f = a({}, o, {
      ReactEventListener: null,
      injection: {
        injectReactEventListener: function(e) {
          e.setHandleTopLevel(f.handleTopLevel), (f.ReactEventListener = e);
        }
      },
      setEnabled: function(e) {
        f.ReactEventListener && f.ReactEventListener.setEnabled(e);
      },
      isEnabled: function() {
        return !(!f.ReactEventListener || !f.ReactEventListener.isEnabled());
      },
      listenTo: function(e, t) {
        for (
          var n = t,
            r = (function(e) {
              return (
                Object.prototype.hasOwnProperty.call(e, g) ||
                  ((e[g] = p++), (d[e[g]] = {})),
                d[e[g]]
              );
            })(n),
            a = i.registrationNameDependencies[e],
            o = 0;
          o < a.length;
          o++
        ) {
          var s = a[o];
          (r.hasOwnProperty(s) && r[s]) ||
            ('topWheel' === s
              ? c('wheel')
                ? f.ReactEventListener.trapBubbledEvent('topWheel', 'wheel', n)
                : c('mousewheel')
                ? f.ReactEventListener.trapBubbledEvent(
                    'topWheel',
                    'mousewheel',
                    n
                  )
                : f.ReactEventListener.trapBubbledEvent(
                    'topWheel',
                    'DOMMouseScroll',
                    n
                  )
              : 'topScroll' === s
              ? c('scroll', !0)
                ? f.ReactEventListener.trapCapturedEvent(
                    'topScroll',
                    'scroll',
                    n
                  )
                : f.ReactEventListener.trapBubbledEvent(
                    'topScroll',
                    'scroll',
                    f.ReactEventListener.WINDOW_HANDLE
                  )
              : 'topFocus' === s || 'topBlur' === s
              ? (c('focus', !0)
                  ? (f.ReactEventListener.trapCapturedEvent(
                      'topFocus',
                      'focus',
                      n
                    ),
                    f.ReactEventListener.trapCapturedEvent(
                      'topBlur',
                      'blur',
                      n
                    ))
                  : c('focusin') &&
                    (f.ReactEventListener.trapBubbledEvent(
                      'topFocus',
                      'focusin',
                      n
                    ),
                    f.ReactEventListener.trapBubbledEvent(
                      'topBlur',
                      'focusout',
                      n
                    )),
                (r.topBlur = !0),
                (r.topFocus = !0))
              : m.hasOwnProperty(s) &&
                f.ReactEventListener.trapBubbledEvent(s, m[s], n),
            (r[s] = !0));
        }
      },
      trapBubbledEvent: function(e, t, n) {
        return f.ReactEventListener.trapBubbledEvent(e, t, n);
      },
      trapCapturedEvent: function(e, t, n) {
        return f.ReactEventListener.trapCapturedEvent(e, t, n);
      },
      supportsEventPageXY: function() {
        if (!document.createEvent) return !1;
        var e = document.createEvent('MouseEvent');
        return null != e && 'pageX' in e;
      },
      ensureScrollValueMonitoring: function() {
        if ((void 0 === r && (r = f.supportsEventPageXY()), !r && !u)) {
          var e = s.refreshScrollValues;
          f.ReactEventListener.monitorScrollValue(e), (u = !0);
        }
      }
    });
    e.exports = f;
  },
  function(e, t, n) {
    var r = n(56);
    e.exports = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
          (a = a.concat(
            Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })
          )),
          a.forEach(function(t) {
            r(e, t, n[t]);
          });
      }
      return e;
    };
  },
  function(e, t, n) {
    'use strict';
    e.exports = n(118);
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = (n(1), null),
      i = {};
    function o() {
      if (a)
        for (var e in i) {
          var t = i[e],
            n = a.indexOf(e);
          if ((n > -1 || r('96', e), !c.plugins[n])) {
            t.extractEvents || r('97', e), (c.plugins[n] = t);
            var o = t.eventTypes;
            for (var l in o) s(o[l], t, l) || r('98', l, e);
          }
        }
    }
    function s(e, t, n) {
      c.eventNameDispatchConfigs.hasOwnProperty(n) && r('99', n),
        (c.eventNameDispatchConfigs[n] = e);
      var a = e.phasedRegistrationNames;
      if (a) {
        for (var i in a) {
          if (a.hasOwnProperty(i)) l(a[i], t, n);
        }
        return !0;
      }
      return !!e.registrationName && (l(e.registrationName, t, n), !0);
    }
    function l(e, t, n) {
      c.registrationNameModules[e] && r('100', e),
        (c.registrationNameModules[e] = t),
        (c.registrationNameDependencies[e] = t.eventTypes[n].dependencies);
    }
    var c = {
      plugins: [],
      eventNameDispatchConfigs: {},
      registrationNameModules: {},
      registrationNameDependencies: {},
      possibleRegistrationNames: null,
      injectEventPluginOrder: function(e) {
        a && r('101'), (a = Array.prototype.slice.call(e)), o();
      },
      injectEventPluginsByName: function(e) {
        var t = !1;
        for (var n in e)
          if (e.hasOwnProperty(n)) {
            var a = e[n];
            (i.hasOwnProperty(n) && i[n] === a) ||
              (i[n] && r('102', n), (i[n] = a), (t = !0));
          }
        t && o();
      },
      getPluginModuleForEvent: function(e) {
        var t = e.dispatchConfig;
        if (t.registrationName)
          return c.registrationNameModules[t.registrationName] || null;
        if (void 0 !== t.phasedRegistrationNames) {
          var n = t.phasedRegistrationNames;
          for (var r in n)
            if (n.hasOwnProperty(r)) {
              var a = c.registrationNameModules[n[r]];
              if (a) return a;
            }
        }
        return null;
      },
      _resetEventPlugins: function() {
        for (var e in ((a = null), i)) i.hasOwnProperty(e) && delete i[e];
        c.plugins.length = 0;
        var t = c.eventNameDispatchConfigs;
        for (var n in t) t.hasOwnProperty(n) && delete t[n];
        var r = c.registrationNameModules;
        for (var o in r) r.hasOwnProperty(o) && delete r[o];
      }
    };
    e.exports = c;
  },
  function(e, t, n) {
    'use strict';
    var r,
      a,
      i = n(2),
      o = n(40);
    n(1), n(3);
    function s(e, t, n, r) {
      var a = e.type || 'unknown-event';
      (e.currentTarget = l.getNodeFromInstance(r)),
        t
          ? o.invokeGuardedCallbackWithCatch(a, n, e)
          : o.invokeGuardedCallback(a, n, e),
        (e.currentTarget = null);
    }
    var l = {
      isEndish: function(e) {
        return (
          'topMouseUp' === e || 'topTouchEnd' === e || 'topTouchCancel' === e
        );
      },
      isMoveish: function(e) {
        return 'topMouseMove' === e || 'topTouchMove' === e;
      },
      isStartish: function(e) {
        return 'topMouseDown' === e || 'topTouchStart' === e;
      },
      executeDirectDispatch: function(e) {
        var t = e._dispatchListeners,
          n = e._dispatchInstances;
        Array.isArray(t) && i('103'),
          (e.currentTarget = t ? l.getNodeFromInstance(n) : null);
        var r = t ? t(e) : null;
        return (
          (e.currentTarget = null),
          (e._dispatchListeners = null),
          (e._dispatchInstances = null),
          r
        );
      },
      executeDispatchesInOrder: function(e, t) {
        var n = e._dispatchListeners,
          r = e._dispatchInstances;
        if (Array.isArray(n))
          for (var a = 0; a < n.length && !e.isPropagationStopped(); a++)
            s(e, t, n[a], r[a]);
        else n && s(e, t, n, r);
        (e._dispatchListeners = null), (e._dispatchInstances = null);
      },
      executeDispatchesInOrderStopAtTrue: function(e) {
        var t = (function(e) {
          var t = e._dispatchListeners,
            n = e._dispatchInstances;
          if (Array.isArray(t)) {
            for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
              if (t[r](e, n[r])) return n[r];
          } else if (t && t(e, n)) return n;
          return null;
        })(e);
        return (e._dispatchInstances = null), (e._dispatchListeners = null), t;
      },
      hasDispatches: function(e) {
        return !!e._dispatchListeners;
      },
      getInstanceFromNode: function(e) {
        return r.getInstanceFromNode(e);
      },
      getNodeFromInstance: function(e) {
        return r.getNodeFromInstance(e);
      },
      isAncestor: function(e, t) {
        return a.isAncestor(e, t);
      },
      getLowestCommonAncestor: function(e, t) {
        return a.getLowestCommonAncestor(e, t);
      },
      getParentInstance: function(e) {
        return a.getParentInstance(e);
      },
      traverseTwoPhase: function(e, t, n) {
        return a.traverseTwoPhase(e, t, n);
      },
      traverseEnterLeave: function(e, t, n, r, i) {
        return a.traverseEnterLeave(e, t, n, r, i);
      },
      injection: {
        injectComponentTree: function(e) {
          r = e;
        },
        injectTreeTraversal: function(e) {
          a = e;
        }
      }
    };
    e.exports = l;
  },
  function(e, t, n) {
    'use strict';
    var r = null;
    function a(e, t, n) {
      try {
        t(n);
      } catch (e) {
        null === r && (r = e);
      }
    }
    var i = {
      invokeGuardedCallback: a,
      invokeGuardedCallbackWithCatch: a,
      rethrowCaughtError: function() {
        if (r) {
          var e = r;
          throw ((r = null), e);
        }
      }
    };
    e.exports = i;
  },
  function(e, t, n) {
    'use strict';
    e.exports = function(e) {
      var t = e.target || e.srcElement || window;
      return (
        t.correspondingUseElement && (t = t.correspondingUseElement),
        3 === t.nodeType ? t.parentNode : t
      );
    };
  },
  function(e, t, n) {
    'use strict';
    var r,
      a = n(6);
    a.canUseDOM &&
      (r =
        document.implementation &&
        document.implementation.hasFeature &&
        !0 !== document.implementation.hasFeature('', '')),
      /**
       * Checks if an event is supported in the current execution environment.
       *
       * NOTE: This will not work correctly for non-generic events such as `change`,
       * `reset`, `load`, `error`, and `select`.
       *
       * Borrows from Modernizr.
       *
       * @param {string} eventNameSuffix Event name, e.g. "click".
       * @param {?boolean} capture Check if the capture phase is supported.
       * @return {boolean} True if the event is supported.
       * @internal
       * @license Modernizr 3.0.0pre (Custom Build) | MIT
       */ (e.exports = function(e, t) {
        if (!a.canUseDOM || (t && !('addEventListener' in document))) return !1;
        var n = 'on' + e,
          i = n in document;
        if (!i) {
          var o = document.createElement('div');
          o.setAttribute(n, 'return;'), (i = 'function' == typeof o[n]);
        }
        return (
          !i &&
            r &&
            'wheel' === e &&
            (i = document.implementation.hasFeature('Events.wheel', '3.0')),
          i
        );
      });
  },
  function(e, t, n) {
    'use strict';
    var r = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey'
    };
    function a(e) {
      var t = this.nativeEvent;
      if (t.getModifierState) return t.getModifierState(e);
      var n = r[e];
      return !!n && !!t[n];
    }
    e.exports = function(e) {
      return a;
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(21),
      a = n(132),
      i = (n(5), n(7), n(46)),
      o = n(33),
      s = n(73);
    function l(e, t) {
      return Array.isArray(t) && (t = t[1]), t ? t.nextSibling : e.firstChild;
    }
    var c = i(function(e, t, n) {
      e.insertBefore(t, n);
    });
    function d(e, t, n) {
      r.insertTreeBefore(e, t, n);
    }
    function u(e, t, n) {
      Array.isArray(t)
        ? (function(e, t, n, r) {
            var a = t;
            for (;;) {
              var i = a.nextSibling;
              if ((c(e, a, r), a === n)) break;
              a = i;
            }
          })(e, t[0], t[1], n)
        : c(e, t, n);
    }
    function p(e, t) {
      if (Array.isArray(t)) {
        var n = t[1];
        m(e, (t = t[0]), n), e.removeChild(n);
      }
      e.removeChild(t);
    }
    function m(e, t, n) {
      for (;;) {
        var r = t.nextSibling;
        if (r === n) break;
        e.removeChild(r);
      }
    }
    var g = {
      dangerouslyReplaceNodeWithMarkup: a.dangerouslyReplaceNodeWithMarkup,
      replaceDelimitedText: function(e, t, n) {
        var r = e.parentNode,
          a = e.nextSibling;
        a === t
          ? n && c(r, document.createTextNode(n), a)
          : n
          ? (s(a, n), m(r, a, t))
          : m(r, e, t);
      },
      processUpdates: function(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          switch (r.type) {
            case 'INSERT_MARKUP':
              d(e, r.content, l(e, r.afterNode));
              break;
            case 'MOVE_EXISTING':
              u(e, r.fromNode, l(e, r.afterNode));
              break;
            case 'SET_MARKUP':
              o(e, r.content);
              break;
            case 'TEXT_CONTENT':
              s(e, r.content);
              break;
            case 'REMOVE_NODE':
              p(e, r.fromNode);
          }
        }
      }
    };
    e.exports = g;
  },
  function(e, t, n) {
    'use strict';
    e.exports = {
      html: 'http://www.w3.org/1999/xhtml',
      mathml: 'http://www.w3.org/1998/Math/MathML',
      svg: 'http://www.w3.org/2000/svg'
    };
  },
  function(e, t, n) {
    'use strict';
    e.exports = function(e) {
      return 'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
        ? function(t, n, r, a) {
            MSApp.execUnsafeLocalFunction(function() {
              return e(t, n, r, a);
            });
          }
        : e;
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = n(150),
      i = n(63)(n(17).isValidElement),
      o = (n(1),
      n(3),
      {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0
      });
    function s(e) {
      null != e.checkedLink && null != e.valueLink && r('87');
    }
    function l(e) {
      s(e), (null != e.value || null != e.onChange) && r('88');
    }
    function c(e) {
      s(e), (null != e.checked || null != e.onChange) && r('89');
    }
    var d = {
        value: function(e, t, n) {
          return !e[t] || o[e.type] || e.onChange || e.readOnly || e.disabled
            ? null
            : new Error(
                'You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.'
              );
        },
        checked: function(e, t, n) {
          return !e[t] || e.onChange || e.readOnly || e.disabled
            ? null
            : new Error(
                'You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.'
              );
        },
        onChange: i.func
      },
      u = {};
    function p(e) {
      if (e) {
        var t = e.getName();
        if (t) return ' Check the render method of `' + t + '`.';
      }
      return '';
    }
    var m = {
      checkPropTypes: function(e, t, n) {
        for (var r in d) {
          if (d.hasOwnProperty(r)) var i = d[r](t, r, e, 'prop', null, a);
          if (i instanceof Error && !(i.message in u)) {
            u[i.message] = !0;
            p(n);
          }
        }
      },
      getValue: function(e) {
        return e.valueLink ? (l(e), e.valueLink.value) : e.value;
      },
      getChecked: function(e) {
        return e.checkedLink ? (c(e), e.checkedLink.value) : e.checked;
      },
      executeOnChange: function(e, t) {
        return e.valueLink
          ? (l(e), e.valueLink.requestChange(t.target.value))
          : e.checkedLink
          ? (c(e), e.checkedLink.requestChange(t.target.checked))
          : e.onChange
          ? e.onChange.call(void 0, t)
          : void 0;
      }
    };
    e.exports = m;
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = (n(1), !1),
      i = {
        replaceNodeWithMarkup: null,
        processChildrenUpdates: null,
        injection: {
          injectEnvironment: function(e) {
            a && r('104'),
              (i.replaceNodeWithMarkup = e.replaceNodeWithMarkup),
              (i.processChildrenUpdates = e.processChildrenUpdates),
              (a = !0);
          }
        }
      };
    e.exports = i;
  },
  function(e, t, n) {
    'use strict';
    var r = Object.prototype.hasOwnProperty;
    function a(e, t) {
      return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
    }
    e.exports = function(e, t) {
      if (a(e, t)) return !0;
      if (
        'object' != typeof e ||
        null === e ||
        'object' != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        i = Object.keys(t);
      if (n.length !== i.length) return !1;
      for (var o = 0; o < n.length; o++)
        if (!r.call(t, n[o]) || !a(e[n[o]], t[n[o]])) return !1;
      return !0;
    };
  },
  function(e, t, n) {
    'use strict';
    e.exports = function(e, t) {
      var n = null === e || !1 === e,
        r = null === t || !1 === t;
      if (n || r) return n === r;
      var a = typeof e,
        i = typeof t;
      return 'string' === a || 'number' === a
        ? 'string' === i || 'number' === i
        : 'object' === i && e.type === t.type && e.key === t.key;
    };
  },
  function(e, t, n) {
    'use strict';
    var r = {
      escape: function(e) {
        var t = { '=': '=0', ':': '=2' };
        return (
          '$' +
          ('' + e).replace(/[=:]/g, function(e) {
            return t[e];
          })
        );
      },
      unescape: function(e) {
        var t = { '=0': '=', '=2': ':' };
        return (
          '' + ('.' === e[0] && '$' === e[1] ? e.substring(2) : e.substring(1))
        ).replace(/(=0|=2)/g, function(e) {
          return t[e];
        });
      }
    };
    e.exports = r;
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = (n(11), n(28)),
      i = (n(7), n(9));
    n(1), n(3);
    function o(e) {
      i.enqueueUpdate(e);
    }
    function s(e, t) {
      var n = a.get(e);
      return n || null;
    }
    var l = {
      isMounted: function(e) {
        var t = a.get(e);
        return !!t && !!t._renderedComponent;
      },
      enqueueCallback: function(e, t, n) {
        l.validateCallback(t, n);
        var r = s(e);
        if (!r) return null;
        r._pendingCallbacks
          ? r._pendingCallbacks.push(t)
          : (r._pendingCallbacks = [t]),
          o(r);
      },
      enqueueCallbackInternal: function(e, t) {
        e._pendingCallbacks
          ? e._pendingCallbacks.push(t)
          : (e._pendingCallbacks = [t]),
          o(e);
      },
      enqueueForceUpdate: function(e) {
        var t = s(e);
        t && ((t._pendingForceUpdate = !0), o(t));
      },
      enqueueReplaceState: function(e, t, n) {
        var r = s(e);
        r &&
          ((r._pendingStateQueue = [t]),
          (r._pendingReplaceState = !0),
          null != n &&
            (l.validateCallback(n, 'replaceState'),
            r._pendingCallbacks
              ? r._pendingCallbacks.push(n)
              : (r._pendingCallbacks = [n])),
          o(r));
      },
      enqueueSetState: function(e, t) {
        var n = s(e);
        n &&
          ((n._pendingStateQueue || (n._pendingStateQueue = [])).push(t), o(n));
      },
      enqueueElementInternal: function(e, t, n) {
        (e._pendingElement = t), (e._context = n), o(e);
      },
      validateCallback: function(e, t) {
        e &&
          'function' != typeof e &&
          r(
            '122',
            t,
            (function(e) {
              var t = typeof e;
              if ('object' !== t) return t;
              var n = (e.constructor && e.constructor.name) || t,
                r = Object.keys(e);
              return r.length > 0 && r.length < 20
                ? n + ' (keys: ' + r.join(', ') + ')'
                : n;
            })(e)
          );
      }
    };
    e.exports = l;
  },
  function(e, t, n) {
    'use strict';
    n(4);
    var r = n(8),
      a = (n(3), r);
    e.exports = a;
  },
  function(e, t, n) {
    'use strict';
    e.exports = function(e) {
      var t,
        n = e.keyCode;
      return (
        'charCode' in e
          ? 0 === (t = e.charCode) && 13 === n && (t = 13)
          : (t = n),
        t >= 32 || 13 === t ? t : 0
      );
    };
  },
  ,
  function(e, t) {
    e.exports = function(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    };
  },
  ,
  function(e, t) {
    function n() {
      return (
        (e.exports = n =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
        n.apply(this, arguments)
      );
    }
    e.exports = n;
  },
  function(e, t, n) {
    'use strict';
    var r = n(24),
      a = n(4),
      i = n(60),
      o = (n(61), n(30));
    n(1), n(104);
    function s(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = o),
        (this.updater = n || i);
    }
    function l(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = o),
        (this.updater = n || i);
    }
    function c() {}
    (s.prototype.isReactComponent = {}),
      (s.prototype.setState = function(e, t) {
        'object' != typeof e && 'function' != typeof e && null != e && r('85'),
          this.updater.enqueueSetState(this, e),
          t && this.updater.enqueueCallback(this, t, 'setState');
      }),
      (s.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this),
          e && this.updater.enqueueCallback(this, e, 'forceUpdate');
      }),
      (c.prototype = s.prototype),
      (l.prototype = new c()),
      (l.prototype.constructor = l),
      a(l.prototype, s.prototype),
      (l.prototype.isPureReactComponent = !0),
      (e.exports = { Component: s, PureComponent: l });
  },
  function(e, t, n) {
    'use strict';
    n(3);
    var r = {
      isMounted: function(e) {
        return !1;
      },
      enqueueCallback: function(e, t) {},
      enqueueForceUpdate: function(e) {},
      enqueueReplaceState: function(e, t) {},
      enqueueSetState: function(e, t) {}
    };
    e.exports = r;
  },
  function(e, t, n) {
    'use strict';
    e.exports = !1;
  },
  function(e, t, n) {
    'use strict';
    var r =
      ('function' == typeof Symbol &&
        Symbol.for &&
        Symbol.for('react.element')) ||
      60103;
    e.exports = r;
  },
  function(e, t, n) {
    'use strict';
    var r = n(112);
    e.exports = function(e) {
      return r(e, !1);
    };
  },
  function(e, t, n) {
    'use strict';
    e.exports = { hasCachedChildNodes: 1 };
  },
  function(e, t, n) {
    'use strict';
    var r = n(2);
    n(1);
    e.exports = function(e, t) {
      return (
        null == t && r('30'),
        null == e
          ? t
          : Array.isArray(e)
          ? Array.isArray(t)
            ? (e.push.apply(e, t), e)
            : (e.push(t), e)
          : Array.isArray(t)
          ? [e].concat(t)
          : [e, t]
      );
    };
  },
  function(e, t, n) {
    'use strict';
    e.exports = function(e, t, n) {
      Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(6),
      a = null;
    e.exports = function() {
      return (
        !a &&
          r.canUseDOM &&
          (a =
            'textContent' in document.documentElement
              ? 'textContent'
              : 'innerText'),
        a
      );
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(2);
    var a = n(15),
      i = (n(1),
      (function() {
        function e(t) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this._callbacks = null),
            (this._contexts = null),
            (this._arg = t);
        }
        return (
          (e.prototype.enqueue = function(e, t) {
            (this._callbacks = this._callbacks || []),
              this._callbacks.push(e),
              (this._contexts = this._contexts || []),
              this._contexts.push(t);
          }),
          (e.prototype.notifyAll = function() {
            var e = this._callbacks,
              t = this._contexts,
              n = this._arg;
            if (e && t) {
              e.length !== t.length && r('24'),
                (this._callbacks = null),
                (this._contexts = null);
              for (var a = 0; a < e.length; a++) e[a].call(t[a], n);
              (e.length = 0), (t.length = 0);
            }
          }),
          (e.prototype.checkpoint = function() {
            return this._callbacks ? this._callbacks.length : 0;
          }),
          (e.prototype.rollback = function(e) {
            this._callbacks &&
              this._contexts &&
              ((this._callbacks.length = e), (this._contexts.length = e));
          }),
          (e.prototype.reset = function() {
            (this._callbacks = null), (this._contexts = null);
          }),
          (e.prototype.destructor = function() {
            this.reset();
          }),
          e
        );
      })());
    e.exports = a.addPoolingTo(i);
  },
  function(e, t, n) {
    'use strict';
    e.exports = { logTopLevelRenders: !1 };
  },
  function(e, t, n) {
    'use strict';
    var r = n(5);
    function a(e) {
      var t = e.type,
        n = e.nodeName;
      return (
        n && 'input' === n.toLowerCase() && ('checkbox' === t || 'radio' === t)
      );
    }
    function i(e) {
      return e._wrapperState.valueTracker;
    }
    var o = {
      _getTrackerFromNode: function(e) {
        return i(r.getInstanceFromNode(e));
      },
      track: function(e) {
        if (!i(e)) {
          var t = r.getNodeFromInstance(e),
            n = a(t) ? 'checked' : 'value',
            o = Object.getOwnPropertyDescriptor(t.constructor.prototype, n),
            s = '' + t[n];
          t.hasOwnProperty(n) ||
            'function' != typeof o.get ||
            'function' != typeof o.set ||
            (Object.defineProperty(t, n, {
              enumerable: o.enumerable,
              configurable: !0,
              get: function() {
                return o.get.call(this);
              },
              set: function(e) {
                (s = '' + e), o.set.call(this, e);
              }
            }),
            (function(e, t) {
              e._wrapperState.valueTracker = t;
            })(e, {
              getValue: function() {
                return s;
              },
              setValue: function(e) {
                s = '' + e;
              },
              stopTracking: function() {
                !(function(e) {
                  e._wrapperState.valueTracker = null;
                })(e),
                  delete t[n];
              }
            }));
        }
      },
      updateValueIfChanged: function(e) {
        if (!e) return !1;
        var t = i(e);
        if (!t) return o.track(e), !0;
        var n,
          s,
          l = t.getValue(),
          c = ((n = r.getNodeFromInstance(e)) &&
            (s = a(n) ? '' + n.checked : n.value),
          s);
        return c !== l && (t.setValue(c), !0);
      },
      stopTracking: function(e) {
        var t = i(e);
        t && t.stopTracking();
      }
    };
    e.exports = o;
  },
  function(e, t, n) {
    'use strict';
    var r = {
      color: !0,
      date: !0,
      datetime: !0,
      'datetime-local': !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    e.exports = function(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return 'input' === t ? !!r[e.type] : 'textarea' === t;
    };
  },
  function(e, t, n) {
    'use strict';
    var r = {
      currentScrollLeft: 0,
      currentScrollTop: 0,
      refreshScrollValues: function(e) {
        (r.currentScrollLeft = e.x), (r.currentScrollTop = e.y);
      }
    };
    e.exports = r;
  },
  function(e, t, n) {
    'use strict';
    var r = n(6),
      a = n(34),
      i = n(33),
      o = function(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType)
            return void (n.nodeValue = t);
        }
        e.textContent = t;
      };
    r.canUseDOM &&
      ('textContent' in document.documentElement ||
        (o = function(e, t) {
          3 !== e.nodeType ? i(e, a(t)) : (e.nodeValue = t);
        })),
      (e.exports = o);
  },
  function(e, t, n) {
    'use strict';
    e.exports = function(e) {
      try {
        e.focus();
      } catch (e) {}
    };
  },
  function(e, t, n) {
    'use strict';
    var r = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    var a = ['Webkit', 'ms', 'Moz', 'O'];
    Object.keys(r).forEach(function(e) {
      a.forEach(function(t) {
        r[
          (function(e, t) {
            return e + t.charAt(0).toUpperCase() + t.substring(1);
          })(t, e)
        ] = r[e];
      });
    });
    var i = {
      isUnitlessNumber: r,
      shorthandPropertyExpansions: {
        background: {
          backgroundAttachment: !0,
          backgroundColor: !0,
          backgroundImage: !0,
          backgroundPositionX: !0,
          backgroundPositionY: !0,
          backgroundRepeat: !0
        },
        backgroundPosition: {
          backgroundPositionX: !0,
          backgroundPositionY: !0
        },
        border: { borderWidth: !0, borderStyle: !0, borderColor: !0 },
        borderBottom: {
          borderBottomWidth: !0,
          borderBottomStyle: !0,
          borderBottomColor: !0
        },
        borderLeft: {
          borderLeftWidth: !0,
          borderLeftStyle: !0,
          borderLeftColor: !0
        },
        borderRight: {
          borderRightWidth: !0,
          borderRightStyle: !0,
          borderRightColor: !0
        },
        borderTop: {
          borderTopWidth: !0,
          borderTopStyle: !0,
          borderTopColor: !0
        },
        font: {
          fontStyle: !0,
          fontVariant: !0,
          fontWeight: !0,
          fontSize: !0,
          lineHeight: !0,
          fontFamily: !0
        },
        outline: { outlineWidth: !0, outlineStyle: !0, outlineColor: !0 }
      }
    };
    e.exports = i;
  },
  function(e, t, n) {
    'use strict';
    var r = n(19),
      a = (n(5), n(7), n(146)),
      i = (n(3),
      new RegExp(
        '^[' +
          r.ATTRIBUTE_NAME_START_CHAR +
          '][' +
          r.ATTRIBUTE_NAME_CHAR +
          ']*$'
      )),
      o = {},
      s = {};
    function l(e) {
      return (
        !!s.hasOwnProperty(e) ||
        (!o.hasOwnProperty(e) &&
          (i.test(e) ? ((s[e] = !0), !0) : ((o[e] = !0), !1)))
      );
    }
    function c(e, t) {
      return (
        null == t ||
        (e.hasBooleanValue && !t) ||
        (e.hasNumericValue && isNaN(t)) ||
        (e.hasPositiveNumericValue && t < 1) ||
        (e.hasOverloadedBooleanValue && !1 === t)
      );
    }
    var d = {
      createMarkupForID: function(e) {
        return r.ID_ATTRIBUTE_NAME + '=' + a(e);
      },
      setAttributeForID: function(e, t) {
        e.setAttribute(r.ID_ATTRIBUTE_NAME, t);
      },
      createMarkupForRoot: function() {
        return r.ROOT_ATTRIBUTE_NAME + '=""';
      },
      setAttributeForRoot: function(e) {
        e.setAttribute(r.ROOT_ATTRIBUTE_NAME, '');
      },
      createMarkupForProperty: function(e, t) {
        var n = r.properties.hasOwnProperty(e) ? r.properties[e] : null;
        if (n) {
          if (c(n, t)) return '';
          var i = n.attributeName;
          return n.hasBooleanValue || (n.hasOverloadedBooleanValue && !0 === t)
            ? i + '=""'
            : i + '=' + a(t);
        }
        return r.isCustomAttribute(e)
          ? null == t
            ? ''
            : e + '=' + a(t)
          : null;
      },
      createMarkupForCustomAttribute: function(e, t) {
        return l(e) && null != t ? e + '=' + a(t) : '';
      },
      setValueForProperty: function(e, t, n) {
        var a = r.properties.hasOwnProperty(t) ? r.properties[t] : null;
        if (a) {
          var i = a.mutationMethod;
          if (i) i(e, n);
          else {
            if (c(a, n)) return void this.deleteValueForProperty(e, t);
            if (a.mustUseProperty) e[a.propertyName] = n;
            else {
              var o = a.attributeName,
                s = a.attributeNamespace;
              s
                ? e.setAttributeNS(s, o, '' + n)
                : a.hasBooleanValue || (a.hasOverloadedBooleanValue && !0 === n)
                ? e.setAttribute(o, '')
                : e.setAttribute(o, '' + n);
            }
          }
        } else if (r.isCustomAttribute(t))
          return void d.setValueForAttribute(e, t, n);
      },
      setValueForAttribute: function(e, t, n) {
        l(t) && (null == n ? e.removeAttribute(t) : e.setAttribute(t, '' + n));
      },
      deleteValueForAttribute: function(e, t) {
        e.removeAttribute(t);
      },
      deleteValueForProperty: function(e, t) {
        var n = r.properties.hasOwnProperty(t) ? r.properties[t] : null;
        if (n) {
          var a = n.mutationMethod;
          if (a) a(e, void 0);
          else if (n.mustUseProperty) {
            var i = n.propertyName;
            n.hasBooleanValue ? (e[i] = !1) : (e[i] = '');
          } else e.removeAttribute(n.attributeName);
        } else r.isCustomAttribute(t) && e.removeAttribute(t);
      }
    };
    e.exports = d;
  },
  function(e, t, n) {
    'use strict';
    var r = n(4),
      a = n(47),
      i = n(5),
      o = n(9),
      s = (n(3), !1);
    function l() {
      if (this._rootNodeID && this._wrapperState.pendingUpdate) {
        this._wrapperState.pendingUpdate = !1;
        var e = this._currentElement.props,
          t = a.getValue(e);
        null != t && c(this, Boolean(e.multiple), t);
      }
    }
    function c(e, t, n) {
      var r,
        a,
        o = i.getNodeFromInstance(e).options;
      if (t) {
        for (r = {}, a = 0; a < n.length; a++) r['' + n[a]] = !0;
        for (a = 0; a < o.length; a++) {
          var s = r.hasOwnProperty(o[a].value);
          o[a].selected !== s && (o[a].selected = s);
        }
      } else {
        for (r = '' + n, a = 0; a < o.length; a++)
          if (o[a].value === r) return void (o[a].selected = !0);
        o.length && (o[0].selected = !0);
      }
    }
    var d = {
      getHostProps: function(e, t) {
        return r({}, t, { onChange: e._wrapperState.onChange, value: void 0 });
      },
      mountWrapper: function(e, t) {
        var n = a.getValue(t);
        (e._wrapperState = {
          pendingUpdate: !1,
          initialValue: null != n ? n : t.defaultValue,
          listeners: null,
          onChange: function(e) {
            var t = this._currentElement.props,
              n = a.executeOnChange(t, e);
            this._rootNodeID && (this._wrapperState.pendingUpdate = !0);
            return o.asap(l, this), n;
          }.bind(e),
          wasMultiple: Boolean(t.multiple)
        }),
          void 0 === t.value || void 0 === t.defaultValue || s || (s = !0);
      },
      getSelectValueContext: function(e) {
        return e._wrapperState.initialValue;
      },
      postUpdateWrapper: function(e) {
        var t = e._currentElement.props;
        e._wrapperState.initialValue = void 0;
        var n = e._wrapperState.wasMultiple;
        e._wrapperState.wasMultiple = Boolean(t.multiple);
        var r = a.getValue(t);
        null != r
          ? ((e._wrapperState.pendingUpdate = !1), c(e, Boolean(t.multiple), r))
          : n !== Boolean(t.multiple) &&
            (null != t.defaultValue
              ? c(e, Boolean(t.multiple), t.defaultValue)
              : c(e, Boolean(t.multiple), t.multiple ? [] : ''));
      }
    };
    e.exports = d;
  },
  function(e, t) {
    var n,
      r,
      a = (e.exports = {});
    function i() {
      throw new Error('setTimeout has not been defined');
    }
    function o() {
      throw new Error('clearTimeout has not been defined');
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === i || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function() {
      try {
        n = 'function' == typeof setTimeout ? setTimeout : i;
      } catch (e) {
        n = i;
      }
      try {
        r = 'function' == typeof clearTimeout ? clearTimeout : o;
      } catch (e) {
        r = o;
      }
    })();
    var l,
      c = [],
      d = !1,
      u = -1;
    function p() {
      d &&
        l &&
        ((d = !1), l.length ? (c = l.concat(c)) : (u = -1), c.length && m());
    }
    function m() {
      if (!d) {
        var e = s(p);
        d = !0;
        for (var t = c.length; t; ) {
          for (l = c, c = []; ++u < t; ) l && l[u].run();
          (u = -1), (t = c.length);
        }
        (l = null),
          (d = !1),
          (function(e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === o || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function g(e, t) {
      (this.fun = e), (this.array = t);
    }
    function f() {}
    (a.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      c.push(new g(e, t)), 1 !== c.length || d || s(m);
    }),
      (g.prototype.run = function() {
        this.fun.apply(null, this.array);
      }),
      (a.title = 'browser'),
      (a.browser = !0),
      (a.env = {}),
      (a.argv = []),
      (a.version = ''),
      (a.versions = {}),
      (a.on = f),
      (a.addListener = f),
      (a.once = f),
      (a.off = f),
      (a.removeListener = f),
      (a.removeAllListeners = f),
      (a.emit = f),
      (a.prependListener = f),
      (a.prependOnceListener = f),
      (a.listeners = function(e) {
        return [];
      }),
      (a.binding = function(e) {
        throw new Error('process.binding is not supported');
      }),
      (a.cwd = function() {
        return '/';
      }),
      (a.chdir = function(e) {
        throw new Error('process.chdir is not supported');
      }),
      (a.umask = function() {
        return 0;
      });
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = n(4),
      i = n(155),
      o = n(81),
      s = n(82),
      l = (n(156),
      n(1),
      n(3),
      function(e) {
        this.construct(e);
      });
    function c(e, t) {
      var n;
      if (null === e || !1 === e) n = o.create(c);
      else if ('object' == typeof e) {
        var a = e,
          i = a.type;
        if ('function' != typeof i && 'string' != typeof i) {
          var d = '';
          0,
            (d += (function(e) {
              if (e) {
                var t = e.getName();
                if (t) return ' Check the render method of `' + t + '`.';
              }
              return '';
            })(a._owner)),
            r('130', null == i ? i : typeof i, d);
        }
        'string' == typeof a.type
          ? (n = s.createInternalComponent(a))
          : !(function(e) {
              return (
                'function' == typeof e &&
                void 0 !== e.prototype &&
                'function' == typeof e.prototype.mountComponent &&
                'function' == typeof e.prototype.receiveComponent
              );
            })(a.type)
          ? (n = new l(a))
          : (n = new a.type(a)).getHostNode ||
            (n.getHostNode = n.getNativeNode);
      } else
        'string' == typeof e || 'number' == typeof e
          ? (n = s.createInstanceForText(e))
          : r('131', typeof e);
      return (n._mountIndex = 0), (n._mountImage = null), n;
    }
    a(l.prototype, i, { _instantiateReactComponent: c }), (e.exports = c);
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = n(17),
      i = (n(1),
      {
        HOST: 0,
        COMPOSITE: 1,
        EMPTY: 2,
        getType: function(e) {
          return null === e || !1 === e
            ? i.EMPTY
            : a.isValidElement(e)
            ? 'function' == typeof e.type
              ? i.COMPOSITE
              : i.HOST
            : void r('26', e);
        }
      });
    e.exports = i;
  },
  function(e, t, n) {
    'use strict';
    var r,
      a = {
        injectEmptyComponentFactory: function(e) {
          r = e;
        }
      },
      i = {
        create: function(e) {
          return r(e);
        }
      };
    (i.injection = a), (e.exports = i);
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = (n(1), null),
      i = null;
    var o = {
      createInternalComponent: function(e) {
        return a || r('111', e.type), new a(e);
      },
      createInstanceForText: function(e) {
        return new i(e);
      },
      isTextComponent: function(e) {
        return e instanceof i;
      },
      injection: {
        injectGenericComponentClass: function(e) {
          a = e;
        },
        injectTextComponentClass: function(e) {
          i = e;
        }
      }
    };
    e.exports = o;
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = (n(11), n(157)),
      i = n(158),
      o = (n(1), n(51)),
      s = (n(3), '.'),
      l = ':';
    function c(e, t) {
      return e && 'object' == typeof e && null != e.key
        ? o.escape(e.key)
        : t.toString(36);
    }
    e.exports = function(e, t, n) {
      return null == e
        ? 0
        : (function e(t, n, d, u) {
            var p,
              m = typeof t;
            if (
              (('undefined' !== m && 'boolean' !== m) || (t = null),
              null === t ||
                'string' === m ||
                'number' === m ||
                ('object' === m && t.$$typeof === a))
            )
              return d(u, t, '' === n ? s + c(t, 0) : n), 1;
            var g = 0,
              f = '' === n ? s : n + l;
            if (Array.isArray(t))
              for (var _ = 0; _ < t.length; _++)
                g += e((p = t[_]), f + c(p, _), d, u);
            else {
              var b = i(t);
              if (b) {
                var h,
                  v = b.call(t);
                if (b !== t.entries)
                  for (var E = 0; !(h = v.next()).done; )
                    g += e((p = h.value), f + c(p, E++), d, u);
                else
                  for (; !(h = v.next()).done; ) {
                    var y = h.value;
                    y &&
                      (g += e(
                        (p = y[1]),
                        f + o.escape(y[0]) + l + c(p, 0),
                        d,
                        u
                      ));
                  }
              } else if ('object' === m) {
                var S = String(t);
                r(
                  '31',
                  '[object Object]' === S
                    ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                    : S,
                  ''
                );
              }
            }
            return g;
          })(e, '', t, n);
    };
  },
  function(e, t, n) {
    'use strict';
    var r,
      a,
      i,
      o,
      s,
      l,
      c,
      d = n(24),
      u = n(11);
    n(1), n(3);
    function p(e) {
      var t = Function.prototype.toString,
        n = Object.prototype.hasOwnProperty,
        r = RegExp(
          '^' +
            t
              .call(n)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        );
      try {
        var a = t.call(e);
        return r.test(a);
      } catch (e) {
        return !1;
      }
    }
    if (
      'function' == typeof Array.from &&
      'function' == typeof Map &&
      p(Map) &&
      null != Map.prototype &&
      'function' == typeof Map.prototype.keys &&
      p(Map.prototype.keys) &&
      'function' == typeof Set &&
      p(Set) &&
      null != Set.prototype &&
      'function' == typeof Set.prototype.keys &&
      p(Set.prototype.keys)
    ) {
      var m = new Map(),
        g = new Set();
      (r = function(e, t) {
        m.set(e, t);
      }),
        (a = function(e) {
          return m.get(e);
        }),
        (i = function(e) {
          m.delete(e);
        }),
        (o = function() {
          return Array.from(m.keys());
        }),
        (s = function(e) {
          g.add(e);
        }),
        (l = function(e) {
          g.delete(e);
        }),
        (c = function() {
          return Array.from(g.keys());
        });
    } else {
      var f = {},
        _ = {},
        b = function(e) {
          return '.' + e;
        },
        h = function(e) {
          return parseInt(e.substr(1), 10);
        };
      (r = function(e, t) {
        var n = b(e);
        f[n] = t;
      }),
        (a = function(e) {
          var t = b(e);
          return f[t];
        }),
        (i = function(e) {
          var t = b(e);
          delete f[t];
        }),
        (o = function() {
          return Object.keys(f).map(h);
        }),
        (s = function(e) {
          var t = b(e);
          _[t] = !0;
        }),
        (l = function(e) {
          var t = b(e);
          delete _[t];
        }),
        (c = function() {
          return Object.keys(_).map(h);
        });
    }
    var v = [];
    function E(e) {
      var t = a(e);
      if (t) {
        var n = t.childIDs;
        i(e), n.forEach(E);
      }
    }
    function y(e, t, n) {
      return (
        '\n    in ' +
        (e || 'Unknown') +
        (t
          ? ' (at ' +
            t.fileName.replace(/^.*[\\\/]/, '') +
            ':' +
            t.lineNumber +
            ')'
          : n
          ? ' (created by ' + n + ')'
          : '')
      );
    }
    function S(e) {
      return null == e
        ? '#empty'
        : 'string' == typeof e || 'number' == typeof e
        ? '#text'
        : 'string' == typeof e.type
        ? e.type
        : e.type.displayName || e.type.name || 'Unknown';
    }
    function C(e) {
      var t,
        n = x.getDisplayName(e),
        r = x.getElement(e),
        a = x.getOwnerID(e);
      return a && (t = x.getDisplayName(a)), y(n, r && r._source, t);
    }
    var x = {
      onSetChildren: function(e, t) {
        var n = a(e);
        n || d('144'), (n.childIDs = t);
        for (var r = 0; r < t.length; r++) {
          var i = t[r],
            o = a(i);
          o || d('140'),
            null == o.childIDs &&
              'object' == typeof o.element &&
              null != o.element &&
              d('141'),
            o.isMounted || d('71'),
            null == o.parentID && (o.parentID = e),
            o.parentID !== e && d('142', i, o.parentID, e);
        }
      },
      onBeforeMountComponent: function(e, t, n) {
        r(e, {
          element: t,
          parentID: n,
          text: null,
          childIDs: [],
          isMounted: !1,
          updateCount: 0
        });
      },
      onBeforeUpdateComponent: function(e, t) {
        var n = a(e);
        n && n.isMounted && (n.element = t);
      },
      onMountComponent: function(e) {
        var t = a(e);
        t || d('144'), (t.isMounted = !0), 0 === t.parentID && s(e);
      },
      onUpdateComponent: function(e) {
        var t = a(e);
        t && t.isMounted && t.updateCount++;
      },
      onUnmountComponent: function(e) {
        var t = a(e);
        t && ((t.isMounted = !1), 0 === t.parentID && l(e));
        v.push(e);
      },
      purgeUnmountedComponents: function() {
        if (!x._preventPurging) {
          for (var e = 0; e < v.length; e++) {
            E(v[e]);
          }
          v.length = 0;
        }
      },
      isMounted: function(e) {
        var t = a(e);
        return !!t && t.isMounted;
      },
      getCurrentStackAddendum: function(e) {
        var t = '';
        if (e) {
          var n = S(e),
            r = e._owner;
          t += y(n, e._source, r && r.getName());
        }
        var a = u.current,
          i = a && a._debugID;
        return (t += x.getStackAddendumByID(i));
      },
      getStackAddendumByID: function(e) {
        for (var t = ''; e; ) (t += C(e)), (e = x.getParentID(e));
        return t;
      },
      getChildIDs: function(e) {
        var t = a(e);
        return t ? t.childIDs : [];
      },
      getDisplayName: function(e) {
        var t = x.getElement(e);
        return t ? S(t) : null;
      },
      getElement: function(e) {
        var t = a(e);
        return t ? t.element : null;
      },
      getOwnerID: function(e) {
        var t = x.getElement(e);
        return t && t._owner ? t._owner._debugID : null;
      },
      getParentID: function(e) {
        var t = a(e);
        return t ? t.parentID : null;
      },
      getSource: function(e) {
        var t = a(e),
          n = t ? t.element : null;
        return null != n ? n._source : null;
      },
      getText: function(e) {
        var t = x.getElement(e);
        return 'string' == typeof t ? t : 'number' == typeof t ? '' + t : null;
      },
      getUpdateCount: function(e) {
        var t = a(e);
        return t ? t.updateCount : 0;
      },
      getRootIDs: c,
      getRegisteredIDs: o,
      pushNonStandardWarningStack: function(e, t) {
        if ('function' == typeof console.reactStack) {
          var n = [],
            r = u.current,
            a = r && r._debugID;
          try {
            for (
              e &&
              n.push({
                name: a ? x.getDisplayName(a) : null,
                fileName: t ? t.fileName : null,
                lineNumber: t ? t.lineNumber : null
              });
              a;

            ) {
              var i = x.getElement(a),
                o = x.getParentID(a),
                s = x.getOwnerID(a),
                l = s ? x.getDisplayName(s) : null,
                c = i && i._source;
              n.push({
                name: l,
                fileName: c ? c.fileName : null,
                lineNumber: c ? c.lineNumber : null
              }),
                (a = o);
            }
          } catch (e) {}
          console.reactStack(n);
        }
      },
      popNonStandardWarningStack: function() {
        'function' == typeof console.reactStackEnd && console.reactStackEnd();
      }
    };
    e.exports = x;
  },
  function(e, t, n) {
    'use strict';
    var r = n(8),
      a = {
        listen: function(e, t, n) {
          return e.addEventListener
            ? (e.addEventListener(t, n, !1),
              {
                remove: function() {
                  e.removeEventListener(t, n, !1);
                }
              })
            : e.attachEvent
            ? (e.attachEvent('on' + t, n),
              {
                remove: function() {
                  e.detachEvent('on' + t, n);
                }
              })
            : void 0;
        },
        capture: function(e, t, n) {
          return e.addEventListener
            ? (e.addEventListener(t, n, !0),
              {
                remove: function() {
                  e.removeEventListener(t, n, !0);
                }
              })
            : { remove: r };
        },
        registerDefault: function() {}
      };
    e.exports = a;
  },
  function(e, t, n) {
    'use strict';
    var r = n(170),
      a = n(172),
      i = n(74),
      o = n(87);
    var s = {
      hasSelectionCapabilities: function(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (('input' === t && 'text' === e.type) ||
            'textarea' === t ||
            'true' === e.contentEditable)
        );
      },
      getSelectionInformation: function() {
        var e = o();
        return {
          focusedElem: e,
          selectionRange: s.hasSelectionCapabilities(e)
            ? s.getSelection(e)
            : null
        };
      },
      restoreSelection: function(e) {
        var t,
          n = o(),
          r = e.focusedElem,
          l = e.selectionRange;
        n !== r &&
          ((t = r), a(document.documentElement, t)) &&
          (s.hasSelectionCapabilities(r) && s.setSelection(r, l), i(r));
      },
      getSelection: function(e) {
        var t;
        if ('selectionStart' in e)
          t = { start: e.selectionStart, end: e.selectionEnd };
        else if (
          document.selection &&
          e.nodeName &&
          'input' === e.nodeName.toLowerCase()
        ) {
          var n = document.selection.createRange();
          n.parentElement() === e &&
            (t = {
              start: -n.moveStart('character', -e.value.length),
              end: -n.moveEnd('character', -e.value.length)
            });
        } else t = r.getOffsets(e);
        return t || { start: 0, end: 0 };
      },
      setSelection: function(e, t) {
        var n = t.start,
          a = t.end;
        if ((void 0 === a && (a = n), 'selectionStart' in e))
          (e.selectionStart = n),
            (e.selectionEnd = Math.min(a, e.value.length));
        else if (
          document.selection &&
          e.nodeName &&
          'input' === e.nodeName.toLowerCase()
        ) {
          var i = e.createTextRange();
          i.collapse(!0),
            i.moveStart('character', n),
            i.moveEnd('character', a - n),
            i.select();
        } else r.setOffsets(e, t);
      }
    };
    e.exports = s;
  },
  function(e, t, n) {
    'use strict';
    e.exports = function(e) {
      if (
        void 0 ===
        (e = e || ('undefined' != typeof document ? document : void 0))
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = n(21),
      i = n(19),
      o = n(17),
      s = n(35),
      l = (n(11), n(5)),
      c = n(187),
      d = n(188),
      u = n(69),
      p = n(28),
      m = (n(7), n(189)),
      g = n(20),
      f = n(52),
      _ = n(9),
      b = n(30),
      h = n(79),
      v = (n(1), n(33)),
      E = n(50),
      y = (n(3), i.ID_ATTRIBUTE_NAME),
      S = i.ROOT_ATTRIBUTE_NAME,
      C = 1,
      x = 9,
      T = 11,
      N = {};
    function w(e) {
      return e ? (e.nodeType === x ? e.documentElement : e.firstChild) : null;
    }
    function M(e, t, n, r, a) {
      var i;
      if (u.logTopLevelRenders) {
        var o = e._currentElement.props.child.type;
        (i =
          'React mount: ' +
          ('string' == typeof o ? o : o.displayName || o.name)),
          console.time(i);
      }
      var s = g.mountComponent(e, n, null, c(e, t), a, 0);
      i && console.timeEnd(i),
        (e._renderedComponent._topLevelWrapper = e),
        P._mountImageIntoNode(s, t, e, r, n);
    }
    function D(e, t, n, r) {
      var a = _.ReactReconcileTransaction.getPooled(!n && d.useCreateElement);
      a.perform(M, null, e, t, a, n, r), _.ReactReconcileTransaction.release(a);
    }
    function O(e, t, n) {
      for (
        0,
          g.unmountComponent(e, n),
          t.nodeType === x && (t = t.documentElement);
        t.lastChild;

      )
        t.removeChild(t.lastChild);
    }
    function A(e) {
      var t = w(e);
      if (t) {
        var n = l.getInstanceFromNode(t);
        return !(!n || !n._hostParent);
      }
    }
    function I(e) {
      return !(
        !e ||
        (e.nodeType !== C && e.nodeType !== x && e.nodeType !== T)
      );
    }
    function R(e) {
      var t = (function(e) {
        var t = w(e),
          n = t && l.getInstanceFromNode(t);
        return n && !n._hostParent ? n : null;
      })(e);
      return t ? t._hostContainerInfo._topLevelWrapper : null;
    }
    var k = 1,
      L = function() {
        this.rootID = k++;
      };
    (L.prototype.isReactComponent = {}),
      (L.prototype.render = function() {
        return this.props.child;
      }),
      (L.isReactTopLevelWrapper = !0);
    var P = {
      TopLevelWrapper: L,
      _instancesByReactRootID: N,
      scrollMonitor: function(e, t) {
        t();
      },
      _updateRootComponent: function(e, t, n, r, a) {
        return (
          P.scrollMonitor(r, function() {
            f.enqueueElementInternal(e, t, n),
              a && f.enqueueCallbackInternal(e, a);
          }),
          e
        );
      },
      _renderNewRootComponent: function(e, t, n, a) {
        I(t) || r('37'), s.ensureScrollValueMonitoring();
        var i = h(e, !1);
        _.batchedUpdates(D, i, t, n, a);
        var o = i._instance.rootID;
        return (N[o] = i), i;
      },
      renderSubtreeIntoContainer: function(e, t, n, a) {
        return (
          (null != e && p.has(e)) || r('38'),
          P._renderSubtreeIntoContainer(e, t, n, a)
        );
      },
      _renderSubtreeIntoContainer: function(e, t, n, a) {
        f.validateCallback(a, 'ReactDOM.render'),
          o.isValidElement(t) ||
            r(
              '39',
              'string' == typeof t
                ? " Instead of passing a string like 'div', pass React.createElement('div') or <div />."
                : 'function' == typeof t
                ? ' Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />.'
                : null != t && void 0 !== t.props
                ? ' This may be caused by unintentionally loading two independent copies of React.'
                : ''
            );
        var i,
          s = o.createElement(L, { child: t });
        if (e) {
          var l = p.get(e);
          i = l._processChildContext(l._context);
        } else i = b;
        var c = R(n);
        if (c) {
          var d = c._currentElement.props.child;
          if (E(d, t)) {
            var u = c._renderedComponent.getPublicInstance(),
              m =
                a &&
                function() {
                  a.call(u);
                };
            return P._updateRootComponent(c, s, i, n, m), u;
          }
          P.unmountComponentAtNode(n);
        }
        var g,
          _ = w(n),
          h = _ && !(!(g = _).getAttribute || !g.getAttribute(y)),
          v = A(n),
          S = h && !c && !v,
          C = P._renderNewRootComponent(
            s,
            n,
            S,
            i
          )._renderedComponent.getPublicInstance();
        return a && a.call(C), C;
      },
      render: function(e, t, n) {
        return P._renderSubtreeIntoContainer(null, e, t, n);
      },
      unmountComponentAtNode: function(e) {
        I(e) || r('40');
        var t = R(e);
        if (!t) {
          A(e), 1 === e.nodeType && e.hasAttribute(S);
          return !1;
        }
        return delete N[t._instance.rootID], _.batchedUpdates(O, t, e, !1), !0;
      },
      _mountImageIntoNode: function(e, t, n, i, o) {
        if ((I(t) || r('41'), i)) {
          var s = w(t);
          if (m.canReuseMarkup(e, s)) return void l.precacheNode(n, s);
          var c = s.getAttribute(m.CHECKSUM_ATTR_NAME);
          s.removeAttribute(m.CHECKSUM_ATTR_NAME);
          var d = s.outerHTML;
          s.setAttribute(m.CHECKSUM_ATTR_NAME, c);
          var u = e,
            p = (function(e, t) {
              for (var n = Math.min(e.length, t.length), r = 0; r < n; r++)
                if (e.charAt(r) !== t.charAt(r)) return r;
              return e.length === t.length ? -1 : n;
            })(u, d),
            g =
              ' (client) ' +
              u.substring(p - 20, p + 20) +
              '\n (server) ' +
              d.substring(p - 20, p + 20);
          t.nodeType === x && r('42', g);
        }
        if ((t.nodeType === x && r('43'), o.useCreateElement)) {
          for (; t.lastChild; ) t.removeChild(t.lastChild);
          a.insertTreeBefore(t, e, null);
        } else v(t, e), l.precacheNode(n, t.firstChild);
      }
    };
    e.exports = P;
  },
  function(e, t, n) {
    'use strict';
    var r = n(80);
    e.exports = function(e) {
      for (var t; (t = e._renderedNodeType) === r.COMPOSITE; )
        e = e._renderedComponent;
      return t === r.HOST
        ? e._renderedComponent
        : t === r.EMPTY
        ? null
        : void 0;
    };
  },
  ,
  ,
  function(e, t, n) {
    'use strict';
    var r = n(0),
      a = n.n(r),
      i = { fontSize: 42, color: 'aliceblue' };
    t.a = function() {
      return a.a.createElement(
        'div',
        null,
        a.a.createElement('h1', { style: i }, 'Other examples: '),
        a.a.createElement(
          'ul',
          null,
          a.a.createElement(
            'li',
            null,
            a.a.createElement('a', { href: './index.html' }, 'Default')
          ),
          a.a.createElement(
            'li',
            null,
            a.a.createElement('a', { href: './prism.html' }, 'Demo With Prism')
          ),
          a.a.createElement(
            'li',
            null,
            a.a.createElement('a', { href: './diff.html' }, 'Diff')
          ),
          a.a.createElement(
            'li',
            null,
            a.a.createElement(
              'a',
              { href: './virtualized.html' },
              'Virtualized'
            )
          ),
          a.a.createElement(
            'li',
            null,
            a.a.createElement(
              'a',
              { href: './prism-async-light.html' },
              'Prism async light'
            )
          )
        )
      );
    };
  },
  function(e, t, n) {
    var r = n(194);
    e.exports = function(e, t) {
      if (null == e) return {};
      var n,
        a,
        i = r(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (a = 0; a < o.length; a++)
          (n = o[a]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]));
      }
      return i;
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(93),
      a = n.n(r),
      i = n(0),
      o = n.n(i),
      s = n(58),
      l = n.n(s),
      c = n(36),
      d = n.n(c);
    function u(e) {
      var t,
        n = e.node,
        r = e.stylesheet,
        a = e.style,
        i = void 0 === a ? {} : a,
        s = e.useInlineStyles,
        c = e.key,
        p = n.properties,
        m = n.type,
        g = n.tagName,
        f = n.value;
      if ('text' === m) return f;
      if (g) {
        var _ = (function(e, t) {
            var n = 0;
            return function(r) {
              return (
                (n += 1),
                r.map(function(r, a) {
                  return u({
                    node: r,
                    stylesheet: e,
                    useInlineStyles: t,
                    key: 'code-segment-'.concat(n, '-').concat(a)
                  });
                })
              );
            };
          })(r, s),
          b =
            s &&
            p.className &&
            p.className.filter(function(e) {
              return !r[e];
            }),
          h = b && b.length ? b : void 0,
          v = s
            ? d()(
                {},
                p,
                { className: h },
                {
                  style: (function(e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      n = arguments.length > 2 ? arguments[2] : void 0;
                    return e.reduce(function(e, t) {
                      return d()({}, e, n[t]);
                    }, t);
                  })(p.className, Object.assign({}, p.style, i), r)
                }
              )
            : d()({}, p, { className: ((t = p.className), t.join(' ')) }),
          E = _(n.children);
        return o.a.createElement(g, l()({ key: c }, v), E);
      }
    }
    var p = /\n/g;
    function m(e) {
      var t = e.codeString,
        n = e.codeStyle,
        r = e.containerStyle,
        a = void 0 === r ? { float: 'left', paddingRight: '10px' } : r,
        i = e.numberStyle,
        s = void 0 === i ? {} : i,
        l = e.startingLineNumber;
      return o.a.createElement(
        'code',
        { style: Object.assign({}, n, a) },
        (function(e) {
          var t = e.lines,
            n = e.startingLineNumber,
            r = e.style;
          return t.map(function(e, t) {
            var a = t + n;
            return o.a.createElement(
              'span',
              {
                key: 'line-'.concat(t),
                className: 'react-syntax-highlighter-line-number',
                style: 'function' == typeof r ? r(a) : r
              },
              ''.concat(a, '\n')
            );
          });
        })({
          lines: t.replace(/\n$/, '').split('\n'),
          style: s,
          startingLineNumber: l
        })
      );
    }
    function g(e) {
      var t = e.children,
        n = e.lineNumber,
        r = e.lineProps,
        a = e.className,
        i = void 0 === a ? [] : a,
        o = ('function' == typeof r ? r(n) : r) || {};
      return (
        (o.className = o.className ? i.concat(o.className) : i),
        { type: 'element', tagName: 'span', properties: o, children: t }
      );
    }
    function f(e, t) {
      for (
        var n = (function e(t) {
            for (
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : [],
                a = 0;
              a < t.length;
              a++
            ) {
              var i = t[a];
              if ('text' === i.type) r.push(g({ children: [i], className: n }));
              else if (i.children) {
                var o = n.concat(i.properties.className);
                r = r.concat(e(i.children, o));
              }
            }
            return r;
          })(e.value),
          r = [],
          a = -1,
          i = 0,
          o = function() {
            var e = n[i],
              o = e.children[0].value;
            if (o.match(p)) {
              var s = o.split('\n');
              s.forEach(function(o, l) {
                var c = r.length + 1,
                  d = { type: 'text', value: ''.concat(o, '\n') };
                if (0 === l) {
                  var u = n
                    .slice(a + 1, i)
                    .concat(
                      g({ children: [d], className: e.properties.className })
                    );
                  r.push(g({ children: u, lineNumber: c, lineProps: t }));
                } else if (l === s.length - 1) {
                  if (n[i + 1] && n[i + 1].children && n[i + 1].children[0]) {
                    var p = g({
                      children: [{ type: 'text', value: ''.concat(o) }],
                      className: e.properties.className
                    });
                    n.splice(i + 1, 0, p);
                  } else
                    r.push(
                      g({
                        children: [d],
                        lineNumber: c,
                        lineProps: t,
                        className: e.properties.className
                      })
                    );
                } else
                  r.push(
                    g({
                      children: [d],
                      lineNumber: c,
                      lineProps: t,
                      className: e.properties.className
                    })
                  );
              }),
                (a = i);
            }
            i++;
          };
        i < n.length;

      )
        o();
      if (a !== n.length - 1) {
        var s = n.slice(a + 1, n.length);
        s &&
          s.length &&
          r.push(g({ children: s, lineNumber: r.length + 1, lineProps: t }));
      }
      return r;
    }
    function _(e) {
      var t = e.rows,
        n = e.stylesheet,
        r = e.useInlineStyles;
      return t.map(function(e, t) {
        return u({
          node: e,
          stylesheet: n,
          useInlineStyles: r,
          key: 'code-segement'.concat(t)
        });
      });
    }
    t.a = function(e, t) {
      return function(n) {
        var r = n.language,
          i = n.children,
          s = n.style,
          l = void 0 === s ? t : s,
          c = n.customStyle,
          d = void 0 === c ? {} : c,
          u = n.codeTagProps,
          p = void 0 === u ? { style: l['code[class*="language-"]'] } : u,
          g = n.useInlineStyles,
          b = void 0 === g || g,
          h = n.showLineNumbers,
          v = void 0 !== h && h,
          E = n.startingLineNumber,
          y = void 0 === E ? 1 : E,
          S = n.lineNumberContainerStyle,
          C = n.lineNumberStyle,
          x = n.wrapLines,
          T = n.lineProps,
          N = void 0 === T ? {} : T,
          w = n.renderer,
          M = n.PreTag,
          D = void 0 === M ? 'pre' : M,
          O = n.CodeTag,
          A = void 0 === O ? 'code' : O,
          I = n.code,
          R = void 0 === I ? (Array.isArray(i) ? i[0] : i) : I,
          k = n.astGenerator,
          L = a()(n, [
            'language',
            'children',
            'style',
            'customStyle',
            'codeTagProps',
            'useInlineStyles',
            'showLineNumbers',
            'startingLineNumber',
            'lineNumberContainerStyle',
            'lineNumberStyle',
            'wrapLines',
            'lineProps',
            'renderer',
            'PreTag',
            'CodeTag',
            'code',
            'astGenerator'
          ]);
        k = k || e;
        var P = v
            ? o.a.createElement(m, {
                containerStyle: S,
                codeStyle: p.style || {},
                numberStyle: C,
                startingLineNumber: y,
                codeString: R
              })
            : null,
          F = l.hljs ||
            l['pre[class*="language-"]'] || { backgroundColor: '#fff' },
          B = b
            ? Object.assign({}, L, { style: Object.assign({}, F, d) })
            : Object.assign({}, L, { className: 'hljs' });
        if (!k) return o.a.createElement(D, B, P, o.a.createElement(A, p, R));
        (x = !(!w || void 0 !== x) || x), (w = w || _);
        var U = [{ type: 'text', value: R }],
          G = (function(e) {
            var t = e.astGenerator,
              n = e.language,
              r = e.code,
              a = e.defaultCodeValue;
            if (t.getLanguage) {
              var i = n && t.getLanguage(n);
              return 'text' === n
                ? { value: a, language: 'text' }
                : i
                ? t.highlight(n, r)
                : t.highlightAuto(r);
            }
            try {
              return n && 'text' !== n
                ? { value: t.highlight(r, n) }
                : { value: a };
            } catch (e) {
              return { value: a };
            }
          })({ astGenerator: k, language: r, code: R, defaultCodeValue: U });
        null === G.language && (G.value = U);
        var q = x ? f(G, N) : G.value;
        return o.a.createElement(
          D,
          B,
          P,
          o.a.createElement(
            A,
            p,
            w({ rows: q, stylesheet: l, useInlineStyles: b })
          )
        );
      };
    };
  },
  ,
  ,
  ,
  ,
  ,
  function(e, t, n) {
    'use strict';
    e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  },
  ,
  ,
  ,
  function(e, t, n) {
    'use strict';
    e.exports = function() {};
  },
  function(e, t, n) {
    'use strict';
    var r = n(106),
      a = n(18),
      i = n(8),
      o = n(107),
      s = r.twoArgumentPooler,
      l = r.fourArgumentPooler,
      c = /\/+/g;
    function d(e) {
      return ('' + e).replace(c, '$&/');
    }
    function u(e, t) {
      (this.func = e), (this.context = t), (this.count = 0);
    }
    function p(e, t, n) {
      var r = e.func,
        a = e.context;
      r.call(a, t, e.count++);
    }
    function m(e, t, n, r) {
      (this.result = e),
        (this.keyPrefix = t),
        (this.func = n),
        (this.context = r),
        (this.count = 0);
    }
    function g(e, t, n) {
      var r = e.result,
        o = e.keyPrefix,
        s = e.func,
        l = e.context,
        c = s.call(l, t, e.count++);
      Array.isArray(c)
        ? f(c, r, n, i.thatReturnsArgument)
        : null != c &&
          (a.isValidElement(c) &&
            (c = a.cloneAndReplaceKey(
              c,
              o + (!c.key || (t && t.key === c.key) ? '' : d(c.key) + '/') + n
            )),
          r.push(c));
    }
    function f(e, t, n, r, a) {
      var i = '';
      null != n && (i = d(n) + '/');
      var s = m.getPooled(t, i, r, a);
      o(e, g, s), m.release(s);
    }
    function _(e, t, n) {
      return null;
    }
    (u.prototype.destructor = function() {
      (this.func = null), (this.context = null), (this.count = 0);
    }),
      r.addPoolingTo(u, s),
      (m.prototype.destructor = function() {
        (this.result = null),
          (this.keyPrefix = null),
          (this.func = null),
          (this.context = null),
          (this.count = 0);
      }),
      r.addPoolingTo(m, l);
    var b = {
      forEach: function(e, t, n) {
        if (null == e) return e;
        var r = u.getPooled(t, n);
        o(e, p, r), u.release(r);
      },
      map: function(e, t, n) {
        if (null == e) return e;
        var r = [];
        return f(e, r, null, t, n), r;
      },
      mapIntoWithKeyPrefixInternal: f,
      count: function(e, t) {
        return o(e, _, null);
      },
      toArray: function(e) {
        var t = [];
        return f(e, t, null, i.thatReturnsArgument), t;
      }
    };
    e.exports = b;
  },
  function(e, t, n) {
    'use strict';
    var r = n(24),
      a = (n(1),
      function(e) {
        if (this.instancePool.length) {
          var t = this.instancePool.pop();
          return this.call(t, e), t;
        }
        return new this(e);
      }),
      i = function(e) {
        e instanceof this || r('25'),
          e.destructor(),
          this.instancePool.length < this.poolSize && this.instancePool.push(e);
      },
      o = a,
      s = {
        addPoolingTo: function(e, t) {
          var n = e;
          return (
            (n.instancePool = []),
            (n.getPooled = t || o),
            n.poolSize || (n.poolSize = 10),
            (n.release = i),
            n
          );
        },
        oneArgumentPooler: a,
        twoArgumentPooler: function(e, t) {
          if (this.instancePool.length) {
            var n = this.instancePool.pop();
            return this.call(n, e, t), n;
          }
          return new this(e, t);
        },
        threeArgumentPooler: function(e, t, n) {
          if (this.instancePool.length) {
            var r = this.instancePool.pop();
            return this.call(r, e, t, n), r;
          }
          return new this(e, t, n);
        },
        fourArgumentPooler: function(e, t, n, r) {
          if (this.instancePool.length) {
            var a = this.instancePool.pop();
            return this.call(a, e, t, n, r), a;
          }
          return new this(e, t, n, r);
        }
      };
    e.exports = s;
  },
  function(e, t, n) {
    'use strict';
    var r = n(24),
      a = (n(11), n(62)),
      i = n(108),
      o = (n(1), n(109)),
      s = (n(3), '.'),
      l = ':';
    function c(e, t) {
      return e && 'object' == typeof e && null != e.key
        ? o.escape(e.key)
        : t.toString(36);
    }
    e.exports = function(e, t, n) {
      return null == e
        ? 0
        : (function e(t, n, d, u) {
            var p,
              m = typeof t;
            if (
              (('undefined' !== m && 'boolean' !== m) || (t = null),
              null === t ||
                'string' === m ||
                'number' === m ||
                ('object' === m && t.$$typeof === a))
            )
              return d(u, t, '' === n ? s + c(t, 0) : n), 1;
            var g = 0,
              f = '' === n ? s : n + l;
            if (Array.isArray(t))
              for (var _ = 0; _ < t.length; _++)
                g += e((p = t[_]), f + c(p, _), d, u);
            else {
              var b = i(t);
              if (b) {
                var h,
                  v = b.call(t);
                if (b !== t.entries)
                  for (var E = 0; !(h = v.next()).done; )
                    g += e((p = h.value), f + c(p, E++), d, u);
                else
                  for (; !(h = v.next()).done; ) {
                    var y = h.value;
                    y &&
                      (g += e(
                        (p = y[1]),
                        f + o.escape(y[0]) + l + c(p, 0),
                        d,
                        u
                      ));
                  }
              } else if ('object' === m) {
                var S = String(t);
                r(
                  '31',
                  '[object Object]' === S
                    ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                    : S,
                  ''
                );
              }
            }
            return g;
          })(e, '', t, n);
    };
  },
  function(e, t, n) {
    'use strict';
    var r = 'function' == typeof Symbol && Symbol.iterator,
      a = '@@iterator';
    e.exports = function(e) {
      var t = e && ((r && e[r]) || e[a]);
      if ('function' == typeof t) return t;
    };
  },
  function(e, t, n) {
    'use strict';
    var r = {
      escape: function(e) {
        var t = { '=': '=0', ':': '=2' };
        return (
          '$' +
          ('' + e).replace(/[=:]/g, function(e) {
            return t[e];
          })
        );
      },
      unescape: function(e) {
        var t = { '=0': '=', '=2': ':' };
        return (
          '' + ('.' === e[0] && '$' === e[1] ? e.substring(2) : e.substring(1))
        ).replace(/(=0|=2)/g, function(e) {
          return t[e];
        });
      }
    };
    e.exports = r;
  },
  function(e, t, n) {
    'use strict';
    var r = n(18).createFactory,
      a = {
        a: r('a'),
        abbr: r('abbr'),
        address: r('address'),
        area: r('area'),
        article: r('article'),
        aside: r('aside'),
        audio: r('audio'),
        b: r('b'),
        base: r('base'),
        bdi: r('bdi'),
        bdo: r('bdo'),
        big: r('big'),
        blockquote: r('blockquote'),
        body: r('body'),
        br: r('br'),
        button: r('button'),
        canvas: r('canvas'),
        caption: r('caption'),
        cite: r('cite'),
        code: r('code'),
        col: r('col'),
        colgroup: r('colgroup'),
        data: r('data'),
        datalist: r('datalist'),
        dd: r('dd'),
        del: r('del'),
        details: r('details'),
        dfn: r('dfn'),
        dialog: r('dialog'),
        div: r('div'),
        dl: r('dl'),
        dt: r('dt'),
        em: r('em'),
        embed: r('embed'),
        fieldset: r('fieldset'),
        figcaption: r('figcaption'),
        figure: r('figure'),
        footer: r('footer'),
        form: r('form'),
        h1: r('h1'),
        h2: r('h2'),
        h3: r('h3'),
        h4: r('h4'),
        h5: r('h5'),
        h6: r('h6'),
        head: r('head'),
        header: r('header'),
        hgroup: r('hgroup'),
        hr: r('hr'),
        html: r('html'),
        i: r('i'),
        iframe: r('iframe'),
        img: r('img'),
        input: r('input'),
        ins: r('ins'),
        kbd: r('kbd'),
        keygen: r('keygen'),
        label: r('label'),
        legend: r('legend'),
        li: r('li'),
        link: r('link'),
        main: r('main'),
        map: r('map'),
        mark: r('mark'),
        menu: r('menu'),
        menuitem: r('menuitem'),
        meta: r('meta'),
        meter: r('meter'),
        nav: r('nav'),
        noscript: r('noscript'),
        object: r('object'),
        ol: r('ol'),
        optgroup: r('optgroup'),
        option: r('option'),
        output: r('output'),
        p: r('p'),
        param: r('param'),
        picture: r('picture'),
        pre: r('pre'),
        progress: r('progress'),
        q: r('q'),
        rp: r('rp'),
        rt: r('rt'),
        ruby: r('ruby'),
        s: r('s'),
        samp: r('samp'),
        script: r('script'),
        section: r('section'),
        select: r('select'),
        small: r('small'),
        source: r('source'),
        span: r('span'),
        strong: r('strong'),
        style: r('style'),
        sub: r('sub'),
        summary: r('summary'),
        sup: r('sup'),
        table: r('table'),
        tbody: r('tbody'),
        td: r('td'),
        textarea: r('textarea'),
        tfoot: r('tfoot'),
        th: r('th'),
        thead: r('thead'),
        time: r('time'),
        title: r('title'),
        tr: r('tr'),
        track: r('track'),
        u: r('u'),
        ul: r('ul'),
        var: r('var'),
        video: r('video'),
        wbr: r('wbr'),
        circle: r('circle'),
        clipPath: r('clipPath'),
        defs: r('defs'),
        ellipse: r('ellipse'),
        g: r('g'),
        image: r('image'),
        line: r('line'),
        linearGradient: r('linearGradient'),
        mask: r('mask'),
        path: r('path'),
        pattern: r('pattern'),
        polygon: r('polygon'),
        polyline: r('polyline'),
        radialGradient: r('radialGradient'),
        rect: r('rect'),
        stop: r('stop'),
        svg: r('svg'),
        text: r('text'),
        tspan: r('tspan')
      };
    e.exports = a;
  },
  function(e, t, n) {
    'use strict';
    var r = n(18).isValidElement,
      a = n(63);
    e.exports = a(r);
  },
  function(e, t, n) {
    'use strict';
    var r = n(4),
      a = n(100),
      i = n(113),
      o = function() {};
    function s() {
      return null;
    }
    e.exports = function(e, t) {
      var n = 'function' == typeof Symbol && Symbol.iterator,
        l = '@@iterator';
      var c = '<<anonymous>>',
        d = {
          array: g('array'),
          bool: g('boolean'),
          func: g('function'),
          number: g('number'),
          object: g('object'),
          string: g('string'),
          symbol: g('symbol'),
          any: m(s),
          arrayOf: function(e) {
            return m(function(t, n, r, i, o) {
              if ('function' != typeof e)
                return new p(
                  'Property `' +
                    o +
                    '` of component `' +
                    r +
                    '` has invalid PropType notation inside arrayOf.'
                );
              var s = t[n];
              if (!Array.isArray(s)) {
                var l = _(s);
                return new p(
                  'Invalid ' +
                    i +
                    ' `' +
                    o +
                    '` of type `' +
                    l +
                    '` supplied to `' +
                    r +
                    '`, expected an array.'
                );
              }
              for (var c = 0; c < s.length; c++) {
                var d = e(s, c, r, i, o + '[' + c + ']', a);
                if (d instanceof Error) return d;
              }
              return null;
            });
          },
          element: (function() {
            return m(function(t, n, r, a, i) {
              var o = t[n];
              if (!e(o)) {
                var s = _(o);
                return new p(
                  'Invalid ' +
                    a +
                    ' `' +
                    i +
                    '` of type `' +
                    s +
                    '` supplied to `' +
                    r +
                    '`, expected a single ReactElement.'
                );
              }
              return null;
            });
          })(),
          instanceOf: function(e) {
            return m(function(t, n, r, a, i) {
              if (!(t[n] instanceof e)) {
                var o = e.name || c,
                  s = (function(e) {
                    if (!e.constructor || !e.constructor.name) return c;
                    return e.constructor.name;
                  })(t[n]);
                return new p(
                  'Invalid ' +
                    a +
                    ' `' +
                    i +
                    '` of type `' +
                    s +
                    '` supplied to `' +
                    r +
                    '`, expected instance of `' +
                    o +
                    '`.'
                );
              }
              return null;
            });
          },
          node: (function() {
            return m(function(e, t, n, r, a) {
              if (!f(e[t]))
                return new p(
                  'Invalid ' +
                    r +
                    ' `' +
                    a +
                    '` supplied to `' +
                    n +
                    '`, expected a ReactNode.'
                );
              return null;
            });
          })(),
          objectOf: function(e) {
            return m(function(t, n, r, i, o) {
              if ('function' != typeof e)
                return new p(
                  'Property `' +
                    o +
                    '` of component `' +
                    r +
                    '` has invalid PropType notation inside objectOf.'
                );
              var s = t[n],
                l = _(s);
              if ('object' !== l)
                return new p(
                  'Invalid ' +
                    i +
                    ' `' +
                    o +
                    '` of type `' +
                    l +
                    '` supplied to `' +
                    r +
                    '`, expected an object.'
                );
              for (var c in s)
                if (s.hasOwnProperty(c)) {
                  var d = e(s, c, r, i, o + '.' + c, a);
                  if (d instanceof Error) return d;
                }
              return null;
            });
          },
          oneOf: function(e) {
            if (!Array.isArray(e)) return s;
            return m(function(t, n, r, a, i) {
              for (var o = t[n], s = 0; s < e.length; s++)
                if (u(o, e[s])) return null;
              var l = JSON.stringify(e);
              return new p(
                'Invalid ' +
                  a +
                  ' `' +
                  i +
                  '` of value `' +
                  o +
                  '` supplied to `' +
                  r +
                  '`, expected one of ' +
                  l +
                  '.'
              );
            });
          },
          oneOfType: function(e) {
            if (!Array.isArray(e)) return s;
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              if ('function' != typeof n)
                return (
                  o(
                    'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                      h(n) +
                      ' at index ' +
                      t +
                      '.'
                  ),
                  s
                );
            }
            return m(function(t, n, r, i, o) {
              for (var s = 0; s < e.length; s++) {
                var l = e[s];
                if (null == l(t, n, r, i, o, a)) return null;
              }
              return new p(
                'Invalid ' + i + ' `' + o + '` supplied to `' + r + '`.'
              );
            });
          },
          shape: function(e) {
            return m(function(t, n, r, i, o) {
              var s = t[n],
                l = _(s);
              if ('object' !== l)
                return new p(
                  'Invalid ' +
                    i +
                    ' `' +
                    o +
                    '` of type `' +
                    l +
                    '` supplied to `' +
                    r +
                    '`, expected `object`.'
                );
              for (var c in e) {
                var d = e[c];
                if (d) {
                  var u = d(s, c, r, i, o + '.' + c, a);
                  if (u) return u;
                }
              }
              return null;
            });
          },
          exact: function(e) {
            return m(function(t, n, i, o, s) {
              var l = t[n],
                c = _(l);
              if ('object' !== c)
                return new p(
                  'Invalid ' +
                    o +
                    ' `' +
                    s +
                    '` of type `' +
                    c +
                    '` supplied to `' +
                    i +
                    '`, expected `object`.'
                );
              var d = r({}, t[n], e);
              for (var u in d) {
                var m = e[u];
                if (!m)
                  return new p(
                    'Invalid ' +
                      o +
                      ' `' +
                      s +
                      '` key `' +
                      u +
                      '` supplied to `' +
                      i +
                      '`.\nBad object: ' +
                      JSON.stringify(t[n], null, '  ') +
                      '\nValid keys: ' +
                      JSON.stringify(Object.keys(e), null, '  ')
                  );
                var g = m(l, u, i, o, s + '.' + u, a);
                if (g) return g;
              }
              return null;
            });
          }
        };
      function u(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      }
      function p(e) {
        (this.message = e), (this.stack = '');
      }
      function m(e) {
        function n(n, r, i, o, s, l, d) {
          if (((o = o || c), (l = l || i), d !== a) && t) {
            var u = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
            );
            throw ((u.name = 'Invariant Violation'), u);
          }
          return null == r[i]
            ? n
              ? null === r[i]
                ? new p(
                    'The ' +
                      s +
                      ' `' +
                      l +
                      '` is marked as required in `' +
                      o +
                      '`, but its value is `null`.'
                  )
                : new p(
                    'The ' +
                      s +
                      ' `' +
                      l +
                      '` is marked as required in `' +
                      o +
                      '`, but its value is `undefined`.'
                  )
              : null
            : e(r, i, o, s, l);
        }
        var r = n.bind(null, !1);
        return (r.isRequired = n.bind(null, !0)), r;
      }
      function g(e) {
        return m(function(t, n, r, a, i, o) {
          var s = t[n];
          return _(s) !== e
            ? new p(
                'Invalid ' +
                  a +
                  ' `' +
                  i +
                  '` of type `' +
                  b(s) +
                  '` supplied to `' +
                  r +
                  '`, expected `' +
                  e +
                  '`.'
              )
            : null;
        });
      }
      function f(t) {
        switch (typeof t) {
          case 'number':
          case 'string':
          case 'undefined':
            return !0;
          case 'boolean':
            return !t;
          case 'object':
            if (Array.isArray(t)) return t.every(f);
            if (null === t || e(t)) return !0;
            var r = (function(e) {
              var t = e && ((n && e[n]) || e[l]);
              if ('function' == typeof t) return t;
            })(t);
            if (!r) return !1;
            var a,
              i = r.call(t);
            if (r !== t.entries) {
              for (; !(a = i.next()).done; ) if (!f(a.value)) return !1;
            } else
              for (; !(a = i.next()).done; ) {
                var o = a.value;
                if (o && !f(o[1])) return !1;
              }
            return !0;
          default:
            return !1;
        }
      }
      function _(e) {
        var t = typeof e;
        return Array.isArray(e)
          ? 'array'
          : e instanceof RegExp
          ? 'object'
          : (function(e, t) {
              return (
                'symbol' === e ||
                'Symbol' === t['@@toStringTag'] ||
                ('function' == typeof Symbol && t instanceof Symbol)
              );
            })(t, e)
          ? 'symbol'
          : t;
      }
      function b(e) {
        if (null == e) return '' + e;
        var t = _(e);
        if ('object' === t) {
          if (e instanceof Date) return 'date';
          if (e instanceof RegExp) return 'regexp';
        }
        return t;
      }
      function h(e) {
        var t = b(e);
        switch (t) {
          case 'array':
          case 'object':
            return 'an ' + t;
          case 'boolean':
          case 'date':
          case 'regexp':
            return 'a ' + t;
          default:
            return t;
        }
      }
      return (
        (p.prototype = Error.prototype),
        (d.checkPropTypes = i),
        (d.PropTypes = d),
        d
      );
    };
  },
  function(e, t, n) {
    'use strict';
    e.exports = function(e, t, n, r, a) {};
  },
  function(e, t, n) {
    'use strict';
    e.exports = '15.6.2';
  },
  function(e, t, n) {
    'use strict';
    var r = n(59).Component,
      a = n(18).isValidElement,
      i = n(60),
      o = n(116);
    e.exports = o(r, a, i);
  },
  function(e, t, n) {
    'use strict';
    var r = n(4),
      a = n(30),
      i = n(1),
      o = 'mixins';
    e.exports = function(e, t, n) {
      var s = [],
        l = {
          mixins: 'DEFINE_MANY',
          statics: 'DEFINE_MANY',
          propTypes: 'DEFINE_MANY',
          contextTypes: 'DEFINE_MANY',
          childContextTypes: 'DEFINE_MANY',
          getDefaultProps: 'DEFINE_MANY_MERGED',
          getInitialState: 'DEFINE_MANY_MERGED',
          getChildContext: 'DEFINE_MANY_MERGED',
          render: 'DEFINE_ONCE',
          componentWillMount: 'DEFINE_MANY',
          componentDidMount: 'DEFINE_MANY',
          componentWillReceiveProps: 'DEFINE_MANY',
          shouldComponentUpdate: 'DEFINE_ONCE',
          componentWillUpdate: 'DEFINE_MANY',
          componentDidUpdate: 'DEFINE_MANY',
          componentWillUnmount: 'DEFINE_MANY',
          UNSAFE_componentWillMount: 'DEFINE_MANY',
          UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',
          UNSAFE_componentWillUpdate: 'DEFINE_MANY',
          updateComponent: 'OVERRIDE_BASE'
        },
        c = { getDerivedStateFromProps: 'DEFINE_MANY_MERGED' },
        d = {
          displayName: function(e, t) {
            e.displayName = t;
          },
          mixins: function(e, t) {
            if (t) for (var n = 0; n < t.length; n++) p(e, t[n]);
          },
          childContextTypes: function(e, t) {
            e.childContextTypes = r({}, e.childContextTypes, t);
          },
          contextTypes: function(e, t) {
            e.contextTypes = r({}, e.contextTypes, t);
          },
          getDefaultProps: function(e, t) {
            e.getDefaultProps
              ? (e.getDefaultProps = g(e.getDefaultProps, t))
              : (e.getDefaultProps = t);
          },
          propTypes: function(e, t) {
            e.propTypes = r({}, e.propTypes, t);
          },
          statics: function(e, t) {
            !(function(e, t) {
              if (t)
                for (var n in t) {
                  var r = t[n];
                  if (t.hasOwnProperty(n)) {
                    var a = n in d;
                    i(
                      !a,
                      'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
                      n
                    );
                    var o = n in e;
                    if (o) {
                      var s = c.hasOwnProperty(n) ? c[n] : null;
                      return (
                        i(
                          'DEFINE_MANY_MERGED' === s,
                          'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',
                          n
                        ),
                        void (e[n] = g(e[n], r))
                      );
                    }
                    e[n] = r;
                  }
                }
            })(e, t);
          },
          autobind: function() {}
        };
      function u(e, t) {
        var n = l.hasOwnProperty(t) ? l[t] : null;
        v.hasOwnProperty(t) &&
          i(
            'OVERRIDE_BASE' === n,
            'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.',
            t
          ),
          e &&
            i(
              'DEFINE_MANY' === n || 'DEFINE_MANY_MERGED' === n,
              'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',
              t
            );
      }
      function p(e, n) {
        if (n) {
          i(
            'function' != typeof n,
            "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."
          ),
            i(
              !t(n),
              "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object."
            );
          var r = e.prototype,
            a = r.__reactAutoBindPairs;
          for (var s in (n.hasOwnProperty(o) && d.mixins(e, n.mixins), n))
            if (n.hasOwnProperty(s) && s !== o) {
              var c = n[s],
                p = r.hasOwnProperty(s);
              if ((u(p, s), d.hasOwnProperty(s))) d[s](e, c);
              else {
                var m = l.hasOwnProperty(s);
                if ('function' != typeof c || m || p || !1 === n.autobind)
                  if (p) {
                    var _ = l[s];
                    i(
                      m && ('DEFINE_MANY_MERGED' === _ || 'DEFINE_MANY' === _),
                      'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.',
                      _,
                      s
                    ),
                      'DEFINE_MANY_MERGED' === _
                        ? (r[s] = g(r[s], c))
                        : 'DEFINE_MANY' === _ && (r[s] = f(r[s], c));
                  } else r[s] = c;
                else a.push(s, c), (r[s] = c);
              }
            }
        }
      }
      function m(e, t) {
        for (var n in (i(
          e && t && 'object' == typeof e && 'object' == typeof t,
          'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
        ),
        t))
          t.hasOwnProperty(n) &&
            (i(
              void 0 === e[n],
              'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.',
              n
            ),
            (e[n] = t[n]));
        return e;
      }
      function g(e, t) {
        return function() {
          var n = e.apply(this, arguments),
            r = t.apply(this, arguments);
          if (null == n) return r;
          if (null == r) return n;
          var a = {};
          return m(a, n), m(a, r), a;
        };
      }
      function f(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function _(e, t) {
        return t.bind(e);
      }
      var b = {
          componentDidMount: function() {
            this.__isMounted = !0;
          }
        },
        h = {
          componentWillUnmount: function() {
            this.__isMounted = !1;
          }
        },
        v = {
          replaceState: function(e, t) {
            this.updater.enqueueReplaceState(this, e, t);
          },
          isMounted: function() {
            return !!this.__isMounted;
          }
        },
        E = function() {};
      return (
        r(E.prototype, e.prototype, v),
        function(e) {
          var t = function(e, r, o) {
            this.__reactAutoBindPairs.length &&
              (function(e) {
                for (
                  var t = e.__reactAutoBindPairs, n = 0;
                  n < t.length;
                  n += 2
                ) {
                  var r = t[n],
                    a = t[n + 1];
                  e[r] = _(e, a);
                }
              })(this),
              (this.props = e),
              (this.context = r),
              (this.refs = a),
              (this.updater = o || n),
              (this.state = null);
            var s = this.getInitialState ? this.getInitialState() : null;
            i(
              'object' == typeof s && !Array.isArray(s),
              '%s.getInitialState(): must return an object or null',
              t.displayName || 'ReactCompositeComponent'
            ),
              (this.state = s);
          };
          for (var r in ((t.prototype = new E()),
          (t.prototype.constructor = t),
          (t.prototype.__reactAutoBindPairs = []),
          s.forEach(p.bind(null, t)),
          p(t, b),
          p(t, e),
          p(t, h),
          t.getDefaultProps && (t.defaultProps = t.getDefaultProps()),
          i(
            t.prototype.render,
            'createClass(...): Class specification must implement a `render` method.'
          ),
          l))
            t.prototype[r] || (t.prototype[r] = null);
          return t;
        }
      );
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(24),
      a = n(18);
    n(1);
    e.exports = function(e) {
      return a.isValidElement(e) || r('143'), e;
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(5),
      a = n(119),
      i = n(88),
      o = n(20),
      s = n(9),
      l = n(191),
      c = n(192),
      d = n(89),
      u = n(193);
    n(3);
    a.inject();
    var p = {
      findDOMNode: c,
      render: i.render,
      unmountComponentAtNode: i.unmountComponentAtNode,
      version: l,
      unstable_batchedUpdates: s.batchedUpdates,
      unstable_renderSubtreeIntoContainer: u
    };
    'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
        ComponentTree: {
          getClosestInstanceFromNode: r.getClosestInstanceFromNode,
          getNodeFromInstance: function(e) {
            return (
              e._renderedComponent && (e = d(e)),
              e ? r.getNodeFromInstance(e) : null
            );
          }
        },
        Mount: i,
        Reconciler: o
      }),
      (e.exports = p);
  },
  function(e, t, n) {
    'use strict';
    var r = n(120),
      a = n(121),
      i = n(125),
      o = n(128),
      s = n(129),
      l = n(130),
      c = n(131),
      d = n(137),
      u = n(5),
      p = n(162),
      m = n(163),
      g = n(164),
      f = n(165),
      _ = n(166),
      b = n(168),
      h = n(169),
      v = n(175),
      E = n(176),
      y = n(177),
      S = !1;
    e.exports = {
      inject: function() {
        S ||
          ((S = !0),
          b.EventEmitter.injectReactEventListener(_),
          b.EventPluginHub.injectEventPluginOrder(o),
          b.EventPluginUtils.injectComponentTree(u),
          b.EventPluginUtils.injectTreeTraversal(m),
          b.EventPluginHub.injectEventPluginsByName({
            SimpleEventPlugin: y,
            EnterLeaveEventPlugin: s,
            ChangeEventPlugin: i,
            SelectEventPlugin: E,
            BeforeInputEventPlugin: a
          }),
          b.HostComponent.injectGenericComponentClass(d),
          b.HostComponent.injectTextComponentClass(g),
          b.DOMProperty.injectDOMPropertyConfig(r),
          b.DOMProperty.injectDOMPropertyConfig(l),
          b.DOMProperty.injectDOMPropertyConfig(v),
          b.EmptyComponent.injectEmptyComponentFactory(function(e) {
            return new p(e);
          }),
          b.Updates.injectReconcileTransaction(h),
          b.Updates.injectBatchingStrategy(f),
          b.Component.injectEnvironment(c));
      }
    };
  },
  function(e, t, n) {
    'use strict';
    e.exports = {
      Properties: {
        'aria-current': 0,
        'aria-details': 0,
        'aria-disabled': 0,
        'aria-hidden': 0,
        'aria-invalid': 0,
        'aria-keyshortcuts': 0,
        'aria-label': 0,
        'aria-roledescription': 0,
        'aria-autocomplete': 0,
        'aria-checked': 0,
        'aria-expanded': 0,
        'aria-haspopup': 0,
        'aria-level': 0,
        'aria-modal': 0,
        'aria-multiline': 0,
        'aria-multiselectable': 0,
        'aria-orientation': 0,
        'aria-placeholder': 0,
        'aria-pressed': 0,
        'aria-readonly': 0,
        'aria-required': 0,
        'aria-selected': 0,
        'aria-sort': 0,
        'aria-valuemax': 0,
        'aria-valuemin': 0,
        'aria-valuenow': 0,
        'aria-valuetext': 0,
        'aria-atomic': 0,
        'aria-busy': 0,
        'aria-live': 0,
        'aria-relevant': 0,
        'aria-dropeffect': 0,
        'aria-grabbed': 0,
        'aria-activedescendant': 0,
        'aria-colcount': 0,
        'aria-colindex': 0,
        'aria-colspan': 0,
        'aria-controls': 0,
        'aria-describedby': 0,
        'aria-errormessage': 0,
        'aria-flowto': 0,
        'aria-labelledby': 0,
        'aria-owns': 0,
        'aria-posinset': 0,
        'aria-rowcount': 0,
        'aria-rowindex': 0,
        'aria-rowspan': 0,
        'aria-setsize': 0
      },
      DOMAttributeNames: {},
      DOMPropertyNames: {}
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(25),
      a = n(6),
      i = n(122),
      o = n(123),
      s = n(124),
      l = [9, 13, 27, 32],
      c = 229,
      d = a.canUseDOM && 'CompositionEvent' in window,
      u = null;
    a.canUseDOM && 'documentMode' in document && (u = document.documentMode);
    var p,
      m =
        a.canUseDOM &&
        'TextEvent' in window &&
        !u &&
        !(
          'object' == typeof (p = window.opera) &&
          'function' == typeof p.version &&
          parseInt(p.version(), 10) <= 12
        ),
      g = a.canUseDOM && (!d || (u && u > 8 && u <= 11));
    var f = 32,
      _ = String.fromCharCode(f),
      b = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: 'onBeforeInput',
            captured: 'onBeforeInputCapture'
          },
          dependencies: [
            'topCompositionEnd',
            'topKeyPress',
            'topTextInput',
            'topPaste'
          ]
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionEnd',
            captured: 'onCompositionEndCapture'
          },
          dependencies: [
            'topBlur',
            'topCompositionEnd',
            'topKeyDown',
            'topKeyPress',
            'topKeyUp',
            'topMouseDown'
          ]
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionStart',
            captured: 'onCompositionStartCapture'
          },
          dependencies: [
            'topBlur',
            'topCompositionStart',
            'topKeyDown',
            'topKeyPress',
            'topKeyUp',
            'topMouseDown'
          ]
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionUpdate',
            captured: 'onCompositionUpdateCapture'
          },
          dependencies: [
            'topBlur',
            'topCompositionUpdate',
            'topKeyDown',
            'topKeyPress',
            'topKeyUp',
            'topMouseDown'
          ]
        }
      },
      h = !1;
    function v(e, t) {
      switch (e) {
        case 'topKeyUp':
          return -1 !== l.indexOf(t.keyCode);
        case 'topKeyDown':
          return t.keyCode !== c;
        case 'topKeyPress':
        case 'topMouseDown':
        case 'topBlur':
          return !0;
        default:
          return !1;
      }
    }
    function E(e) {
      var t = e.detail;
      return 'object' == typeof t && 'data' in t ? t.data : null;
    }
    var y = null;
    function S(e, t, n, a) {
      var s, l;
      if (
        (d
          ? (s = (function(e) {
              switch (e) {
                case 'topCompositionStart':
                  return b.compositionStart;
                case 'topCompositionEnd':
                  return b.compositionEnd;
                case 'topCompositionUpdate':
                  return b.compositionUpdate;
              }
            })(e))
          : y
          ? v(e, n) && (s = b.compositionEnd)
          : (function(e, t) {
              return 'topKeyDown' === e && t.keyCode === c;
            })(e, n) && (s = b.compositionStart),
        !s)
      )
        return null;
      g &&
        (y || s !== b.compositionStart
          ? s === b.compositionEnd && y && (l = y.getData())
          : (y = i.getPooled(a)));
      var u = o.getPooled(s, t, n, a);
      if (l) u.data = l;
      else {
        var p = E(n);
        null !== p && (u.data = p);
      }
      return r.accumulateTwoPhaseDispatches(u), u;
    }
    function C(e, t, n, a) {
      var o;
      if (
        !(o = m
          ? (function(e, t) {
              switch (e) {
                case 'topCompositionEnd':
                  return E(t);
                case 'topKeyPress':
                  return t.which !== f ? null : ((h = !0), _);
                case 'topTextInput':
                  var n = t.data;
                  return n === _ && h ? null : n;
                default:
                  return null;
              }
            })(e, n)
          : (function(e, t) {
              if (y) {
                if ('topCompositionEnd' === e || (!d && v(e, t))) {
                  var n = y.getData();
                  return i.release(y), (y = null), n;
                }
                return null;
              }
              switch (e) {
                case 'topPaste':
                  return null;
                case 'topKeyPress':
                  return t.which &&
                    !(function(e) {
                      return (
                        (e.ctrlKey || e.altKey || e.metaKey) &&
                        !(e.ctrlKey && e.altKey)
                      );
                    })(t)
                    ? String.fromCharCode(t.which)
                    : null;
                case 'topCompositionEnd':
                  return g ? null : t.data;
                default:
                  return null;
              }
            })(e, n))
      )
        return null;
      var l = s.getPooled(b.beforeInput, t, n, a);
      return (l.data = o), r.accumulateTwoPhaseDispatches(l), l;
    }
    var x = {
      eventTypes: b,
      extractEvents: function(e, t, n, r) {
        return [S(e, t, n, r), C(e, t, n, r)];
      }
    };
    e.exports = x;
  },
  function(e, t, n) {
    'use strict';
    var r = n(4),
      a = n(15),
      i = n(67);
    function o(e) {
      (this._root = e),
        (this._startText = this.getText()),
        (this._fallbackText = null);
    }
    r(o.prototype, {
      destructor: function() {
        (this._root = null),
          (this._startText = null),
          (this._fallbackText = null);
      },
      getText: function() {
        return 'value' in this._root ? this._root.value : this._root[i()];
      },
      getData: function() {
        if (this._fallbackText) return this._fallbackText;
        var e,
          t,
          n = this._startText,
          r = n.length,
          a = this.getText(),
          i = a.length;
        for (e = 0; e < r && n[e] === a[e]; e++);
        var o = r - e;
        for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
        var s = t > 1 ? 1 - t : void 0;
        return (this._fallbackText = a.slice(e, s)), this._fallbackText;
      }
    }),
      a.addPoolingTo(o),
      (e.exports = o);
  },
  function(e, t, n) {
    'use strict';
    var r = n(12);
    function a(e, t, n, a) {
      return r.call(this, e, t, n, a);
    }
    r.augmentClass(a, { data: null }), (e.exports = a);
  },
  function(e, t, n) {
    'use strict';
    var r = n(12);
    function a(e, t, n, a) {
      return r.call(this, e, t, n, a);
    }
    r.augmentClass(a, { data: null }), (e.exports = a);
  },
  function(e, t, n) {
    'use strict';
    var r = n(26),
      a = n(25),
      i = n(6),
      o = n(5),
      s = n(9),
      l = n(12),
      c = n(70),
      d = n(41),
      u = n(42),
      p = n(71),
      m = {
        change: {
          phasedRegistrationNames: {
            bubbled: 'onChange',
            captured: 'onChangeCapture'
          },
          dependencies: [
            'topBlur',
            'topChange',
            'topClick',
            'topFocus',
            'topInput',
            'topKeyDown',
            'topKeyUp',
            'topSelectionChange'
          ]
        }
      };
    function g(e, t, n) {
      var r = l.getPooled(m.change, e, t, n);
      return (r.type = 'change'), a.accumulateTwoPhaseDispatches(r), r;
    }
    var f = null,
      _ = null;
    var b = !1;
    function h(e) {
      var t = g(_, e, d(e));
      s.batchedUpdates(v, t);
    }
    function v(e) {
      r.enqueueEvents(e), r.processEventQueue(!1);
    }
    function E() {
      f && (f.detachEvent('onchange', h), (f = null), (_ = null));
    }
    function y(e, t) {
      var n = c.updateValueIfChanged(e),
        r = !0 === t.simulated && A._allowSimulatedPassThrough;
      if (n || r) return e;
    }
    function S(e, t) {
      if ('topChange' === e) return t;
    }
    function C(e, t, n) {
      'topFocus' === e
        ? (E(),
          (function(e, t) {
            (_ = t), (f = e).attachEvent('onchange', h);
          })(t, n))
        : 'topBlur' === e && E();
    }
    i.canUseDOM &&
      (b =
        u('change') && (!document.documentMode || document.documentMode > 8));
    var x = !1;
    function T() {
      f && (f.detachEvent('onpropertychange', N), (f = null), (_ = null));
    }
    function N(e) {
      'value' === e.propertyName && y(_, e) && h(e);
    }
    function w(e, t, n) {
      'topFocus' === e
        ? (T(),
          (function(e, t) {
            (_ = t), (f = e).attachEvent('onpropertychange', N);
          })(t, n))
        : 'topBlur' === e && T();
    }
    function M(e, t, n) {
      if ('topSelectionChange' === e || 'topKeyUp' === e || 'topKeyDown' === e)
        return y(_, n);
    }
    function D(e, t, n) {
      if ('topClick' === e) return y(t, n);
    }
    function O(e, t, n) {
      if ('topInput' === e || 'topChange' === e) return y(t, n);
    }
    i.canUseDOM &&
      (x = u('input') && (!document.documentMode || document.documentMode > 9));
    var A = {
      eventTypes: m,
      _allowSimulatedPassThrough: !0,
      _isInputEventSupported: x,
      extractEvents: function(e, t, n, r) {
        var a,
          i,
          s,
          l,
          c = t ? o.getNodeFromInstance(t) : window;
        if (
          ('select' === (l = (s = c).nodeName && s.nodeName.toLowerCase()) ||
          ('input' === l && 'file' === s.type)
            ? b
              ? (a = S)
              : (i = C)
            : p(c)
            ? x
              ? (a = O)
              : ((a = M), (i = w))
            : (function(e) {
                var t = e.nodeName;
                return (
                  t &&
                  'input' === t.toLowerCase() &&
                  ('checkbox' === e.type || 'radio' === e.type)
                );
              })(c) && (a = D),
          a)
        ) {
          var d = a(e, t, n);
          if (d) return g(d, n, r);
        }
        i && i(e, c, t),
          'topBlur' === e &&
            (function(e, t) {
              if (null != e) {
                var n = e._wrapperState || t._wrapperState;
                if (n && n.controlled && 'number' === t.type) {
                  var r = '' + t.value;
                  t.getAttribute('value') !== r && t.setAttribute('value', r);
                }
              }
            })(t, c);
      }
    };
    e.exports = A;
  },
  function(e, t, n) {
    'use strict';
    var r = n(127),
      a = {};
    (a.attachRefs = function(e, t) {
      if (null !== t && 'object' == typeof t) {
        var n = t.ref;
        null != n &&
          (function(e, t, n) {
            'function' == typeof e
              ? e(t.getPublicInstance())
              : r.addComponentAsRefTo(t, e, n);
          })(n, e, t._owner);
      }
    }),
      (a.shouldUpdateRefs = function(e, t) {
        var n = null,
          r = null;
        null !== e && 'object' == typeof e && ((n = e.ref), (r = e._owner));
        var a = null,
          i = null;
        return (
          null !== t && 'object' == typeof t && ((a = t.ref), (i = t._owner)),
          n !== a || ('string' == typeof a && i !== r)
        );
      }),
      (a.detachRefs = function(e, t) {
        if (null !== t && 'object' == typeof t) {
          var n = t.ref;
          null != n &&
            (function(e, t, n) {
              'function' == typeof e
                ? e(null)
                : r.removeComponentAsRefFrom(t, e, n);
            })(n, e, t._owner);
        }
      }),
      (e.exports = a);
  },
  function(e, t, n) {
    'use strict';
    var r = n(2);
    n(1);
    function a(e) {
      return !(
        !e ||
        'function' != typeof e.attachRef ||
        'function' != typeof e.detachRef
      );
    }
    var i = {
      addComponentAsRefTo: function(e, t, n) {
        a(n) || r('119'), n.attachRef(t, e);
      },
      removeComponentAsRefFrom: function(e, t, n) {
        a(n) || r('120');
        var i = n.getPublicInstance();
        i && i.refs[t] === e.getPublicInstance() && n.detachRef(t);
      }
    };
    e.exports = i;
  },
  function(e, t, n) {
    'use strict';
    e.exports = [
      'ResponderEventPlugin',
      'SimpleEventPlugin',
      'TapEventPlugin',
      'EnterLeaveEventPlugin',
      'ChangeEventPlugin',
      'SelectEventPlugin',
      'BeforeInputEventPlugin'
    ];
  },
  function(e, t, n) {
    'use strict';
    var r = n(25),
      a = n(5),
      i = n(32),
      o = {
        mouseEnter: {
          registrationName: 'onMouseEnter',
          dependencies: ['topMouseOut', 'topMouseOver']
        },
        mouseLeave: {
          registrationName: 'onMouseLeave',
          dependencies: ['topMouseOut', 'topMouseOver']
        }
      },
      s = {
        eventTypes: o,
        extractEvents: function(e, t, n, s) {
          if ('topMouseOver' === e && (n.relatedTarget || n.fromElement))
            return null;
          if ('topMouseOut' !== e && 'topMouseOver' !== e) return null;
          var l, c, d;
          if (s.window === s) l = s;
          else {
            var u = s.ownerDocument;
            l = u ? u.defaultView || u.parentWindow : window;
          }
          if ('topMouseOut' === e) {
            c = t;
            var p = n.relatedTarget || n.toElement;
            d = p ? a.getClosestInstanceFromNode(p) : null;
          } else (c = null), (d = t);
          if (c === d) return null;
          var m = null == c ? l : a.getNodeFromInstance(c),
            g = null == d ? l : a.getNodeFromInstance(d),
            f = i.getPooled(o.mouseLeave, c, n, s);
          (f.type = 'mouseleave'), (f.target = m), (f.relatedTarget = g);
          var _ = i.getPooled(o.mouseEnter, d, n, s);
          return (
            (_.type = 'mouseenter'),
            (_.target = g),
            (_.relatedTarget = m),
            r.accumulateEnterLeaveDispatches(f, _, c, d),
            [f, _]
          );
        }
      };
    e.exports = s;
  },
  function(e, t, n) {
    'use strict';
    var r = n(19),
      a = r.injection.MUST_USE_PROPERTY,
      i = r.injection.HAS_BOOLEAN_VALUE,
      o = r.injection.HAS_NUMERIC_VALUE,
      s = r.injection.HAS_POSITIVE_NUMERIC_VALUE,
      l = r.injection.HAS_OVERLOADED_BOOLEAN_VALUE,
      c = {
        isCustomAttribute: RegExp.prototype.test.bind(
          new RegExp('^(data|aria)-[' + r.ATTRIBUTE_NAME_CHAR + ']*$')
        ),
        Properties: {
          accept: 0,
          acceptCharset: 0,
          accessKey: 0,
          action: 0,
          allowFullScreen: i,
          allowTransparency: 0,
          alt: 0,
          as: 0,
          async: i,
          autoComplete: 0,
          autoPlay: i,
          capture: i,
          cellPadding: 0,
          cellSpacing: 0,
          charSet: 0,
          challenge: 0,
          checked: a | i,
          cite: 0,
          classID: 0,
          className: 0,
          cols: s,
          colSpan: 0,
          content: 0,
          contentEditable: 0,
          contextMenu: 0,
          controls: i,
          controlsList: 0,
          coords: 0,
          crossOrigin: 0,
          data: 0,
          dateTime: 0,
          default: i,
          defer: i,
          dir: 0,
          disabled: i,
          download: l,
          draggable: 0,
          encType: 0,
          form: 0,
          formAction: 0,
          formEncType: 0,
          formMethod: 0,
          formNoValidate: i,
          formTarget: 0,
          frameBorder: 0,
          headers: 0,
          height: 0,
          hidden: i,
          high: 0,
          href: 0,
          hrefLang: 0,
          htmlFor: 0,
          httpEquiv: 0,
          icon: 0,
          id: 0,
          inputMode: 0,
          integrity: 0,
          is: 0,
          keyParams: 0,
          keyType: 0,
          kind: 0,
          label: 0,
          lang: 0,
          list: 0,
          loop: i,
          low: 0,
          manifest: 0,
          marginHeight: 0,
          marginWidth: 0,
          max: 0,
          maxLength: 0,
          media: 0,
          mediaGroup: 0,
          method: 0,
          min: 0,
          minLength: 0,
          multiple: a | i,
          muted: a | i,
          name: 0,
          nonce: 0,
          noValidate: i,
          open: i,
          optimum: 0,
          pattern: 0,
          placeholder: 0,
          playsInline: i,
          poster: 0,
          preload: 0,
          profile: 0,
          radioGroup: 0,
          readOnly: i,
          referrerPolicy: 0,
          rel: 0,
          required: i,
          reversed: i,
          role: 0,
          rows: s,
          rowSpan: o,
          sandbox: 0,
          scope: 0,
          scoped: i,
          scrolling: 0,
          seamless: i,
          selected: a | i,
          shape: 0,
          size: s,
          sizes: 0,
          span: s,
          spellCheck: 0,
          src: 0,
          srcDoc: 0,
          srcLang: 0,
          srcSet: 0,
          start: o,
          step: 0,
          style: 0,
          summary: 0,
          tabIndex: 0,
          target: 0,
          title: 0,
          type: 0,
          useMap: 0,
          value: 0,
          width: 0,
          wmode: 0,
          wrap: 0,
          about: 0,
          datatype: 0,
          inlist: 0,
          prefix: 0,
          property: 0,
          resource: 0,
          typeof: 0,
          vocab: 0,
          autoCapitalize: 0,
          autoCorrect: 0,
          autoSave: 0,
          color: 0,
          itemProp: 0,
          itemScope: i,
          itemType: 0,
          itemID: 0,
          itemRef: 0,
          results: 0,
          security: 0,
          unselectable: 0
        },
        DOMAttributeNames: {
          acceptCharset: 'accept-charset',
          className: 'class',
          htmlFor: 'for',
          httpEquiv: 'http-equiv'
        },
        DOMPropertyNames: {},
        DOMMutationMethods: {
          value: function(e, t) {
            if (null == t) return e.removeAttribute('value');
            'number' !== e.type || !1 === e.hasAttribute('value')
              ? e.setAttribute('value', '' + t)
              : e.validity &&
                !e.validity.badInput &&
                e.ownerDocument.activeElement !== e &&
                e.setAttribute('value', '' + t);
          }
        }
      };
    e.exports = c;
  },
  function(e, t, n) {
    'use strict';
    var r = n(44),
      a = {
        processChildrenUpdates: n(136).dangerouslyProcessChildrenUpdates,
        replaceNodeWithMarkup: r.dangerouslyReplaceNodeWithMarkup
      };
    e.exports = a;
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = n(21),
      i = n(6),
      o = n(133),
      s = n(8),
      l = (n(1),
      {
        dangerouslyReplaceNodeWithMarkup: function(e, t) {
          if (
            (i.canUseDOM || r('56'),
            t || r('57'),
            'HTML' === e.nodeName && r('58'),
            'string' == typeof t)
          ) {
            var n = o(t, s)[0];
            e.parentNode.replaceChild(n, e);
          } else a.replaceChildWithTree(e, t);
        }
      });
    e.exports = l;
  },
  function(e, t, n) {
    'use strict';
    var r = n(6),
      a = n(134),
      i = n(135),
      o = n(1),
      s = r.canUseDOM ? document.createElement('div') : null,
      l = /^\s*<(\w+)/;
    e.exports = function(e, t) {
      var n = s;
      s || o(!1);
      var r = (function(e) {
          var t = e.match(l);
          return t && t[1].toLowerCase();
        })(e),
        c = r && i(r);
      if (c) {
        n.innerHTML = c[1] + e + c[2];
        for (var d = c[0]; d--; ) n = n.lastChild;
      } else n.innerHTML = e;
      var u = n.getElementsByTagName('script');
      u.length && (t || o(!1), a(u).forEach(t));
      for (var p = Array.from(n.childNodes); n.lastChild; )
        n.removeChild(n.lastChild);
      return p;
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(1);
    e.exports = function(e) {
      return (function(e) {
        return (
          !!e &&
          ('object' == typeof e || 'function' == typeof e) &&
          'length' in e &&
          !('setInterval' in e) &&
          'number' != typeof e.nodeType &&
          (Array.isArray(e) || 'callee' in e || 'item' in e)
        );
      })(e)
        ? Array.isArray(e)
          ? e.slice()
          : (function(e) {
              var t = e.length;
              if (
                ((Array.isArray(e) ||
                  ('object' != typeof e && 'function' != typeof e)) &&
                  r(!1),
                'number' != typeof t && r(!1),
                0 === t || t - 1 in e || r(!1),
                'function' == typeof e.callee && r(!1),
                e.hasOwnProperty)
              )
                try {
                  return Array.prototype.slice.call(e);
                } catch (e) {}
              for (var n = Array(t), a = 0; a < t; a++) n[a] = e[a];
              return n;
            })(e)
        : [e];
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(6),
      a = n(1),
      i = r.canUseDOM ? document.createElement('div') : null,
      o = {},
      s = [1, '<select multiple="true">', '</select>'],
      l = [1, '<table>', '</table>'],
      c = [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      d = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'],
      u = {
        '*': [1, '?<div>', '</div>'],
        area: [1, '<map>', '</map>'],
        col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
        legend: [1, '<fieldset>', '</fieldset>'],
        param: [1, '<object>', '</object>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        optgroup: s,
        option: s,
        caption: l,
        colgroup: l,
        tbody: l,
        tfoot: l,
        thead: l,
        td: c,
        th: c
      };
    [
      'circle',
      'clipPath',
      'defs',
      'ellipse',
      'g',
      'image',
      'line',
      'linearGradient',
      'mask',
      'path',
      'pattern',
      'polygon',
      'polyline',
      'radialGradient',
      'rect',
      'stop',
      'text',
      'tspan'
    ].forEach(function(e) {
      (u[e] = d), (o[e] = !0);
    }),
      (e.exports = function(e) {
        return (
          i || a(!1),
          u.hasOwnProperty(e) || (e = '*'),
          o.hasOwnProperty(e) ||
            ((i.innerHTML = '*' === e ? '<link />' : '<' + e + '></' + e + '>'),
            (o[e] = !i.firstChild)),
          o[e] ? u[e] : null
        );
      });
  },
  function(e, t, n) {
    'use strict';
    var r = n(44),
      a = n(5),
      i = {
        dangerouslyProcessChildrenUpdates: function(e, t) {
          var n = a.getNodeFromInstance(e);
          r.processUpdates(n, t);
        }
      };
    e.exports = i;
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = n(4),
      i = n(138),
      o = n(139),
      s = n(21),
      l = n(45),
      c = n(19),
      d = n(76),
      u = n(26),
      p = n(38),
      m = n(35),
      g = n(64),
      f = n(5),
      _ = n(149),
      b = n(151),
      h = n(77),
      v = n(152),
      E = (n(7), n(153)),
      y = n(160),
      S = (n(8), n(34)),
      C = (n(1), n(42), n(49), n(70)),
      x = (n(53), n(3), g),
      T = u.deleteListener,
      N = f.getNodeFromInstance,
      w = m.listenTo,
      M = p.registrationNameModules,
      D = { string: !0, number: !0 },
      O = '__html',
      A = {
        children: null,
        dangerouslySetInnerHTML: null,
        suppressContentEditableWarning: null
      },
      I = 11;
    function R(e, t) {
      t &&
        ($[e._tag] &&
          (null != t.children || null != t.dangerouslySetInnerHTML) &&
          r(
            '137',
            e._tag,
            e._currentElement._owner
              ? ' Check the render method of ' +
                  e._currentElement._owner.getName() +
                  '.'
              : ''
          ),
        null != t.dangerouslySetInnerHTML &&
          (null != t.children && r('60'),
          ('object' == typeof t.dangerouslySetInnerHTML &&
            O in t.dangerouslySetInnerHTML) ||
            r('61')),
        null != t.style &&
          'object' != typeof t.style &&
          r(
            '62',
            (function(e) {
              if (e) {
                var t = e._currentElement._owner || null;
                if (t) {
                  var n = t.getName();
                  if (n) return ' This DOM node was rendered by `' + n + '`.';
                }
              }
              return '';
            })(e)
          ));
    }
    function k(e, t, n, r) {
      if (!(r instanceof y)) {
        0;
        var a = e._hostContainerInfo,
          i = a._node && a._node.nodeType === I ? a._node : a._ownerDocument;
        w(t, i),
          r
            .getReactMountReady()
            .enqueue(L, { inst: e, registrationName: t, listener: n });
      }
    }
    function L() {
      u.putListener(this.inst, this.registrationName, this.listener);
    }
    function P() {
      _.postMountWrapper(this);
    }
    function F() {
      v.postMountWrapper(this);
    }
    function B() {
      b.postMountWrapper(this);
    }
    var U = {
      topAbort: 'abort',
      topCanPlay: 'canplay',
      topCanPlayThrough: 'canplaythrough',
      topDurationChange: 'durationchange',
      topEmptied: 'emptied',
      topEncrypted: 'encrypted',
      topEnded: 'ended',
      topError: 'error',
      topLoadedData: 'loadeddata',
      topLoadedMetadata: 'loadedmetadata',
      topLoadStart: 'loadstart',
      topPause: 'pause',
      topPlay: 'play',
      topPlaying: 'playing',
      topProgress: 'progress',
      topRateChange: 'ratechange',
      topSeeked: 'seeked',
      topSeeking: 'seeking',
      topStalled: 'stalled',
      topSuspend: 'suspend',
      topTimeUpdate: 'timeupdate',
      topVolumeChange: 'volumechange',
      topWaiting: 'waiting'
    };
    function G() {
      C.track(this);
    }
    function q() {
      this._rootNodeID || r('63');
      var e = N(this);
      switch ((e || r('64'), this._tag)) {
        case 'iframe':
        case 'object':
          this._wrapperState.listeners = [
            m.trapBubbledEvent('topLoad', 'load', e)
          ];
          break;
        case 'video':
        case 'audio':
          for (var t in ((this._wrapperState.listeners = []), U))
            U.hasOwnProperty(t) &&
              this._wrapperState.listeners.push(m.trapBubbledEvent(t, U[t], e));
          break;
        case 'source':
          this._wrapperState.listeners = [
            m.trapBubbledEvent('topError', 'error', e)
          ];
          break;
        case 'img':
          this._wrapperState.listeners = [
            m.trapBubbledEvent('topError', 'error', e),
            m.trapBubbledEvent('topLoad', 'load', e)
          ];
          break;
        case 'form':
          this._wrapperState.listeners = [
            m.trapBubbledEvent('topReset', 'reset', e),
            m.trapBubbledEvent('topSubmit', 'submit', e)
          ];
          break;
        case 'input':
        case 'select':
        case 'textarea':
          this._wrapperState.listeners = [
            m.trapBubbledEvent('topInvalid', 'invalid', e)
          ];
      }
    }
    function z() {
      h.postUpdateWrapper(this);
    }
    var H = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
      },
      V = { listing: !0, pre: !0, textarea: !0 },
      $ = a({ menuitem: !0 }, H),
      W = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
      j = {},
      K = {}.hasOwnProperty;
    function Q(e, t) {
      return e.indexOf('-') >= 0 || null != t.is;
    }
    var Z = 1;
    function X(e) {
      var t = e.type;
      !(function(e) {
        K.call(j, e) || (W.test(e) || r('65', e), (j[e] = !0));
      })(t),
        (this._currentElement = e),
        (this._tag = t.toLowerCase()),
        (this._namespaceURI = null),
        (this._renderedChildren = null),
        (this._previousStyle = null),
        (this._previousStyleCopy = null),
        (this._hostNode = null),
        (this._hostParent = null),
        (this._rootNodeID = 0),
        (this._domID = 0),
        (this._hostContainerInfo = null),
        (this._wrapperState = null),
        (this._topLevelWrapper = null),
        (this._flags = 0);
    }
    (X.displayName = 'ReactDOMComponent'),
      (X.Mixin = {
        mountComponent: function(e, t, n, r) {
          (this._rootNodeID = Z++),
            (this._domID = n._idCounter++),
            (this._hostParent = t),
            (this._hostContainerInfo = n);
          var a,
            o,
            c,
            u = this._currentElement.props;
          switch (this._tag) {
            case 'audio':
            case 'form':
            case 'iframe':
            case 'img':
            case 'link':
            case 'object':
            case 'source':
            case 'video':
              (this._wrapperState = { listeners: null }),
                e.getReactMountReady().enqueue(q, this);
              break;
            case 'input':
              _.mountWrapper(this, u, t),
                (u = _.getHostProps(this, u)),
                e.getReactMountReady().enqueue(G, this),
                e.getReactMountReady().enqueue(q, this);
              break;
            case 'option':
              b.mountWrapper(this, u, t), (u = b.getHostProps(this, u));
              break;
            case 'select':
              h.mountWrapper(this, u, t),
                (u = h.getHostProps(this, u)),
                e.getReactMountReady().enqueue(q, this);
              break;
            case 'textarea':
              v.mountWrapper(this, u, t),
                (u = v.getHostProps(this, u)),
                e.getReactMountReady().enqueue(G, this),
                e.getReactMountReady().enqueue(q, this);
          }
          if (
            (R(this, u),
            null != t
              ? ((a = t._namespaceURI), (o = t._tag))
              : n._tag && ((a = n._namespaceURI), (o = n._tag)),
            (null == a || (a === l.svg && 'foreignobject' === o)) &&
              (a = l.html),
            a === l.html &&
              ('svg' === this._tag
                ? (a = l.svg)
                : 'math' === this._tag && (a = l.mathml)),
            (this._namespaceURI = a),
            e.useCreateElement)
          ) {
            var p,
              m = n._ownerDocument;
            if (a === l.html)
              if ('script' === this._tag) {
                var g = m.createElement('div'),
                  E = this._currentElement.type;
                (g.innerHTML = '<' + E + '></' + E + '>'),
                  (p = g.removeChild(g.firstChild));
              } else
                p = u.is
                  ? m.createElement(this._currentElement.type, u.is)
                  : m.createElement(this._currentElement.type);
            else p = m.createElementNS(a, this._currentElement.type);
            f.precacheNode(this, p),
              (this._flags |= x.hasCachedChildNodes),
              this._hostParent || d.setAttributeForRoot(p),
              this._updateDOMProperties(null, u, e);
            var y = s(p);
            this._createInitialChildren(e, u, r, y), (c = y);
          } else {
            var S = this._createOpenTagMarkupAndPutListeners(e, u),
              C = this._createContentMarkup(e, u, r);
            c =
              !C && H[this._tag]
                ? S + '/>'
                : S + '>' + C + '</' + this._currentElement.type + '>';
          }
          switch (this._tag) {
            case 'input':
              e.getReactMountReady().enqueue(P, this),
                u.autoFocus &&
                  e.getReactMountReady().enqueue(i.focusDOMComponent, this);
              break;
            case 'textarea':
              e.getReactMountReady().enqueue(F, this),
                u.autoFocus &&
                  e.getReactMountReady().enqueue(i.focusDOMComponent, this);
              break;
            case 'select':
            case 'button':
              u.autoFocus &&
                e.getReactMountReady().enqueue(i.focusDOMComponent, this);
              break;
            case 'option':
              e.getReactMountReady().enqueue(B, this);
          }
          return c;
        },
        _createOpenTagMarkupAndPutListeners: function(e, t) {
          var n = '<' + this._currentElement.type;
          for (var r in t)
            if (t.hasOwnProperty(r)) {
              var i = t[r];
              if (null != i)
                if (M.hasOwnProperty(r)) i && k(this, r, i, e);
                else {
                  'style' === r &&
                    (i && (i = this._previousStyleCopy = a({}, t.style)),
                    (i = o.createMarkupForStyles(i, this)));
                  var s = null;
                  null != this._tag && Q(this._tag, t)
                    ? A.hasOwnProperty(r) ||
                      (s = d.createMarkupForCustomAttribute(r, i))
                    : (s = d.createMarkupForProperty(r, i)),
                    s && (n += ' ' + s);
                }
            }
          return e.renderToStaticMarkup
            ? n
            : (this._hostParent || (n += ' ' + d.createMarkupForRoot()),
              (n += ' ' + d.createMarkupForID(this._domID)));
        },
        _createContentMarkup: function(e, t, n) {
          var r = '',
            a = t.dangerouslySetInnerHTML;
          if (null != a) null != a.__html && (r = a.__html);
          else {
            var i = D[typeof t.children] ? t.children : null,
              o = null != i ? null : t.children;
            if (null != i) r = S(i);
            else if (null != o) {
              r = this.mountChildren(o, e, n).join('');
            }
          }
          return V[this._tag] && '\n' === r.charAt(0) ? '\n' + r : r;
        },
        _createInitialChildren: function(e, t, n, r) {
          var a = t.dangerouslySetInnerHTML;
          if (null != a) null != a.__html && s.queueHTML(r, a.__html);
          else {
            var i = D[typeof t.children] ? t.children : null,
              o = null != i ? null : t.children;
            if (null != i) '' !== i && s.queueText(r, i);
            else if (null != o)
              for (
                var l = this.mountChildren(o, e, n), c = 0;
                c < l.length;
                c++
              )
                s.queueChild(r, l[c]);
          }
        },
        receiveComponent: function(e, t, n) {
          var r = this._currentElement;
          (this._currentElement = e), this.updateComponent(t, r, e, n);
        },
        updateComponent: function(e, t, n, r) {
          var a = t.props,
            i = this._currentElement.props;
          switch (this._tag) {
            case 'input':
              (a = _.getHostProps(this, a)), (i = _.getHostProps(this, i));
              break;
            case 'option':
              (a = b.getHostProps(this, a)), (i = b.getHostProps(this, i));
              break;
            case 'select':
              (a = h.getHostProps(this, a)), (i = h.getHostProps(this, i));
              break;
            case 'textarea':
              (a = v.getHostProps(this, a)), (i = v.getHostProps(this, i));
          }
          switch (
            (R(this, i),
            this._updateDOMProperties(a, i, e),
            this._updateDOMChildren(a, i, e, r),
            this._tag)
          ) {
            case 'input':
              _.updateWrapper(this), C.updateValueIfChanged(this);
              break;
            case 'textarea':
              v.updateWrapper(this);
              break;
            case 'select':
              e.getReactMountReady().enqueue(z, this);
          }
        },
        _updateDOMProperties: function(e, t, n) {
          var r, i, s;
          for (r in e)
            if (!t.hasOwnProperty(r) && e.hasOwnProperty(r) && null != e[r])
              if ('style' === r) {
                var l = this._previousStyleCopy;
                for (i in l) l.hasOwnProperty(i) && ((s = s || {})[i] = '');
                this._previousStyleCopy = null;
              } else
                M.hasOwnProperty(r)
                  ? e[r] && T(this, r)
                  : Q(this._tag, e)
                  ? A.hasOwnProperty(r) || d.deleteValueForAttribute(N(this), r)
                  : (c.properties[r] || c.isCustomAttribute(r)) &&
                    d.deleteValueForProperty(N(this), r);
          for (r in t) {
            var u = t[r],
              p =
                'style' === r
                  ? this._previousStyleCopy
                  : null != e
                  ? e[r]
                  : void 0;
            if (t.hasOwnProperty(r) && u !== p && (null != u || null != p))
              if ('style' === r)
                if (
                  (u
                    ? (u = this._previousStyleCopy = a({}, u))
                    : (this._previousStyleCopy = null),
                  p)
                ) {
                  for (i in p)
                    !p.hasOwnProperty(i) ||
                      (u && u.hasOwnProperty(i)) ||
                      ((s = s || {})[i] = '');
                  for (i in u)
                    u.hasOwnProperty(i) &&
                      p[i] !== u[i] &&
                      ((s = s || {})[i] = u[i]);
                } else s = u;
              else if (M.hasOwnProperty(r))
                u ? k(this, r, u, n) : p && T(this, r);
              else if (Q(this._tag, t))
                A.hasOwnProperty(r) || d.setValueForAttribute(N(this), r, u);
              else if (c.properties[r] || c.isCustomAttribute(r)) {
                var m = N(this);
                null != u
                  ? d.setValueForProperty(m, r, u)
                  : d.deleteValueForProperty(m, r);
              }
          }
          s && o.setValueForStyles(N(this), s, this);
        },
        _updateDOMChildren: function(e, t, n, r) {
          var a = D[typeof e.children] ? e.children : null,
            i = D[typeof t.children] ? t.children : null,
            o = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html,
            s = t.dangerouslySetInnerHTML && t.dangerouslySetInnerHTML.__html,
            l = null != a ? null : e.children,
            c = null != i ? null : t.children,
            d = null != a || null != o,
            u = null != i || null != s;
          null != l && null == c
            ? this.updateChildren(null, n, r)
            : d && !u && this.updateTextContent(''),
            null != i
              ? a !== i && this.updateTextContent('' + i)
              : null != s
              ? o !== s && this.updateMarkup('' + s)
              : null != c && this.updateChildren(c, n, r);
        },
        getHostNode: function() {
          return N(this);
        },
        unmountComponent: function(e) {
          switch (this._tag) {
            case 'audio':
            case 'form':
            case 'iframe':
            case 'img':
            case 'link':
            case 'object':
            case 'source':
            case 'video':
              var t = this._wrapperState.listeners;
              if (t) for (var n = 0; n < t.length; n++) t[n].remove();
              break;
            case 'input':
            case 'textarea':
              C.stopTracking(this);
              break;
            case 'html':
            case 'head':
            case 'body':
              r('66', this._tag);
          }
          this.unmountChildren(e),
            f.uncacheNode(this),
            u.deleteAllListeners(this),
            (this._rootNodeID = 0),
            (this._domID = 0),
            (this._wrapperState = null);
        },
        getPublicInstance: function() {
          return N(this);
        }
      }),
      a(X.prototype, X.Mixin, E.Mixin),
      (e.exports = X);
  },
  function(e, t, n) {
    'use strict';
    var r = n(5),
      a = n(74),
      i = {
        focusDOMComponent: function() {
          a(r.getNodeFromInstance(this));
        }
      };
    e.exports = i;
  },
  function(e, t, n) {
    'use strict';
    var r = n(75),
      a = n(6),
      i = (n(7), n(140), n(142)),
      o = n(143),
      s = n(145),
      l = (n(3),
      s(function(e) {
        return o(e);
      })),
      c = !1,
      d = 'cssFloat';
    if (a.canUseDOM) {
      var u = document.createElement('div').style;
      try {
        u.font = '';
      } catch (e) {
        c = !0;
      }
      void 0 === document.documentElement.style.cssFloat && (d = 'styleFloat');
    }
    var p = {
      createMarkupForStyles: function(e, t) {
        var n = '';
        for (var r in e)
          if (e.hasOwnProperty(r)) {
            var a = 0 === r.indexOf('--'),
              o = e[r];
            0, null != o && ((n += l(r) + ':'), (n += i(r, o, t, a) + ';'));
          }
        return n || null;
      },
      setValueForStyles: function(e, t, n) {
        var a = e.style;
        for (var o in t)
          if (t.hasOwnProperty(o)) {
            var s = 0 === o.indexOf('--');
            0;
            var l = i(o, t[o], n, s);
            if ((('float' !== o && 'cssFloat' !== o) || (o = d), s))
              a.setProperty(o, l);
            else if (l) a[o] = l;
            else {
              var u = c && r.shorthandPropertyExpansions[o];
              if (u) for (var p in u) a[p] = '';
              else a[o] = '';
            }
          }
      }
    };
    e.exports = p;
  },
  function(e, t, n) {
    'use strict';
    var r = n(141),
      a = /^-ms-/;
    e.exports = function(e) {
      return r(e.replace(a, 'ms-'));
    };
  },
  function(e, t, n) {
    'use strict';
    var r = /-(.)/g;
    e.exports = function(e) {
      return e.replace(r, function(e, t) {
        return t.toUpperCase();
      });
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(75),
      a = (n(3), r.isUnitlessNumber);
    e.exports = function(e, t, n, r) {
      if (null == t || 'boolean' == typeof t || '' === t) return '';
      var i = isNaN(t);
      return r || i || 0 === t || (a.hasOwnProperty(e) && a[e])
        ? '' + t
        : ('string' == typeof t && (t = t.trim()), t + 'px');
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(144),
      a = /^ms-/;
    e.exports = function(e) {
      return r(e).replace(a, '-ms-');
    };
  },
  function(e, t, n) {
    'use strict';
    var r = /([A-Z])/g;
    e.exports = function(e) {
      return e.replace(r, '-$1').toLowerCase();
    };
  },
  function(e, t, n) {
    'use strict';
    e.exports = function(e) {
      var t = {};
      return function(n) {
        return t.hasOwnProperty(n) || (t[n] = e.call(this, n)), t[n];
      };
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(34);
    e.exports = function(e) {
      return '"' + r(e) + '"';
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(26);
    var a = {
      handleTopLevel: function(e, t, n, a) {
        !(function(e) {
          r.enqueueEvents(e), r.processEventQueue(!1);
        })(r.extractEvents(e, t, n, a));
      }
    };
    e.exports = a;
  },
  function(e, t, n) {
    'use strict';
    var r = n(6);
    function a(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n['Webkit' + e] = 'webkit' + t),
        (n['Moz' + e] = 'moz' + t),
        (n['ms' + e] = 'MS' + t),
        (n['O' + e] = 'o' + t.toLowerCase()),
        n
      );
    }
    var i = {
        animationend: a('Animation', 'AnimationEnd'),
        animationiteration: a('Animation', 'AnimationIteration'),
        animationstart: a('Animation', 'AnimationStart'),
        transitionend: a('Transition', 'TransitionEnd')
      },
      o = {},
      s = {};
    r.canUseDOM &&
      ((s = document.createElement('div').style),
      'AnimationEvent' in window ||
        (delete i.animationend.animation,
        delete i.animationiteration.animation,
        delete i.animationstart.animation),
      'TransitionEvent' in window || delete i.transitionend.transition),
      (e.exports = function(e) {
        if (o[e]) return o[e];
        if (!i[e]) return e;
        var t = i[e];
        for (var n in t)
          if (t.hasOwnProperty(n) && n in s) return (o[e] = t[n]);
        return '';
      });
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = n(4),
      i = n(76),
      o = n(47),
      s = n(5),
      l = n(9);
    n(1), n(3);
    function c() {
      this._rootNodeID && d.updateWrapper(this);
    }
    var d = {
      getHostProps: function(e, t) {
        var n = o.getValue(t),
          r = o.getChecked(t);
        return a({ type: void 0, step: void 0, min: void 0, max: void 0 }, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: null != n ? n : e._wrapperState.initialValue,
          checked: null != r ? r : e._wrapperState.initialChecked,
          onChange: e._wrapperState.onChange
        });
      },
      mountWrapper: function(e, t) {
        var n = t.defaultValue;
        e._wrapperState = {
          initialChecked: null != t.checked ? t.checked : t.defaultChecked,
          initialValue: null != t.value ? t.value : n,
          listeners: null,
          onChange: function(e) {
            var t = this._currentElement.props,
              n = o.executeOnChange(t, e);
            l.asap(c, this);
            var a = t.name;
            if ('radio' === t.type && null != a) {
              for (var i = s.getNodeFromInstance(this), d = i; d.parentNode; )
                d = d.parentNode;
              for (
                var u = d.querySelectorAll(
                    'input[name=' + JSON.stringify('' + a) + '][type="radio"]'
                  ),
                  p = 0;
                p < u.length;
                p++
              ) {
                var m = u[p];
                if (m !== i && m.form === i.form) {
                  var g = s.getInstanceFromNode(m);
                  g || r('90'), l.asap(c, g);
                }
              }
            }
            return n;
          }.bind(e),
          controlled: (function(e) {
            return 'checkbox' === e.type || 'radio' === e.type
              ? null != e.checked
              : null != e.value;
          })(t)
        };
      },
      updateWrapper: function(e) {
        var t = e._currentElement.props,
          n = t.checked;
        null != n &&
          i.setValueForProperty(s.getNodeFromInstance(e), 'checked', n || !1);
        var r = s.getNodeFromInstance(e),
          a = o.getValue(t);
        if (null != a)
          if (0 === a && '' === r.value) r.value = '0';
          else if ('number' === t.type) {
            var l = parseFloat(r.value, 10) || 0;
            (a != l || (a == l && r.value != a)) && (r.value = '' + a);
          } else r.value !== '' + a && (r.value = '' + a);
        else
          null == t.value &&
            null != t.defaultValue &&
            r.defaultValue !== '' + t.defaultValue &&
            (r.defaultValue = '' + t.defaultValue),
            null == t.checked &&
              null != t.defaultChecked &&
              (r.defaultChecked = !!t.defaultChecked);
      },
      postMountWrapper: function(e) {
        var t = e._currentElement.props,
          n = s.getNodeFromInstance(e);
        switch (t.type) {
          case 'submit':
          case 'reset':
            break;
          case 'color':
          case 'date':
          case 'datetime':
          case 'datetime-local':
          case 'month':
          case 'time':
          case 'week':
            (n.value = ''), (n.value = n.defaultValue);
            break;
          default:
            n.value = n.value;
        }
        var r = n.name;
        '' !== r && (n.name = ''),
          (n.defaultChecked = !n.defaultChecked),
          (n.defaultChecked = !n.defaultChecked),
          '' !== r && (n.name = r);
      }
    };
    e.exports = d;
  },
  function(e, t, n) {
    'use strict';
    e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  },
  function(e, t, n) {
    'use strict';
    var r = n(4),
      a = n(17),
      i = n(5),
      o = n(77),
      s = (n(3), !1);
    function l(e) {
      var t = '';
      return (
        a.Children.forEach(e, function(e) {
          null != e &&
            ('string' == typeof e || 'number' == typeof e
              ? (t += e)
              : s || (s = !0));
        }),
        t
      );
    }
    var c = {
      mountWrapper: function(e, t, n) {
        var r = null;
        if (null != n) {
          var a = n;
          'optgroup' === a._tag && (a = a._hostParent),
            null != a &&
              'select' === a._tag &&
              (r = o.getSelectValueContext(a));
        }
        var i,
          s = null;
        if (null != r)
          if (
            ((i = null != t.value ? t.value + '' : l(t.children)),
            (s = !1),
            Array.isArray(r))
          ) {
            for (var c = 0; c < r.length; c++)
              if ('' + r[c] === i) {
                s = !0;
                break;
              }
          } else s = '' + r === i;
        e._wrapperState = { selected: s };
      },
      postMountWrapper: function(e) {
        var t = e._currentElement.props;
        null != t.value &&
          i.getNodeFromInstance(e).setAttribute('value', t.value);
      },
      getHostProps: function(e, t) {
        var n = r({ selected: void 0, children: void 0 }, t);
        null != e._wrapperState.selected &&
          (n.selected = e._wrapperState.selected);
        var a = l(t.children);
        return a && (n.children = a), n;
      }
    };
    e.exports = c;
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = n(4),
      i = n(47),
      o = n(5),
      s = n(9);
    n(1), n(3);
    function l() {
      this._rootNodeID && c.updateWrapper(this);
    }
    var c = {
      getHostProps: function(e, t) {
        return (
          null != t.dangerouslySetInnerHTML && r('91'),
          a({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
            onChange: e._wrapperState.onChange
          })
        );
      },
      mountWrapper: function(e, t) {
        var n = i.getValue(t),
          a = n;
        if (null == n) {
          var o = t.defaultValue,
            c = t.children;
          null != c &&
            (null != o && r('92'),
            Array.isArray(c) && (c.length <= 1 || r('93'), (c = c[0])),
            (o = '' + c)),
            null == o && (o = ''),
            (a = o);
        }
        e._wrapperState = {
          initialValue: '' + a,
          listeners: null,
          onChange: function(e) {
            var t = this._currentElement.props,
              n = i.executeOnChange(t, e);
            return s.asap(l, this), n;
          }.bind(e)
        };
      },
      updateWrapper: function(e) {
        var t = e._currentElement.props,
          n = o.getNodeFromInstance(e),
          r = i.getValue(t);
        if (null != r) {
          var a = '' + r;
          a !== n.value && (n.value = a),
            null == t.defaultValue && (n.defaultValue = a);
        }
        null != t.defaultValue && (n.defaultValue = t.defaultValue);
      },
      postMountWrapper: function(e) {
        var t = o.getNodeFromInstance(e),
          n = t.textContent;
        n === e._wrapperState.initialValue && (t.value = n);
      }
    };
    e.exports = c;
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = n(48),
      i = (n(28), n(7), n(11), n(20)),
      o = n(154),
      s = (n(8), n(159));
    n(1);
    function l(e, t) {
      return t && (e = e || []).push(t), e;
    }
    function c(e, t) {
      a.processChildrenUpdates(e, t);
    }
    var d = {
      Mixin: {
        _reconcilerInstantiateChildren: function(e, t, n) {
          return o.instantiateChildren(e, t, n);
        },
        _reconcilerUpdateChildren: function(e, t, n, r, a, i) {
          var l;
          return (
            (l = s(t, 0)),
            o.updateChildren(
              e,
              l,
              n,
              r,
              a,
              this,
              this._hostContainerInfo,
              i,
              0
            ),
            l
          );
        },
        mountChildren: function(e, t, n) {
          var r = this._reconcilerInstantiateChildren(e, t, n);
          this._renderedChildren = r;
          var a = [],
            o = 0;
          for (var s in r)
            if (r.hasOwnProperty(s)) {
              var l = r[s];
              0;
              var c = i.mountComponent(
                l,
                t,
                this,
                this._hostContainerInfo,
                n,
                0
              );
              (l._mountIndex = o++), a.push(c);
            }
          return a;
        },
        updateTextContent: function(e) {
          var t,
            n = this._renderedChildren;
          for (var a in (o.unmountChildren(n, !1), n))
            n.hasOwnProperty(a) && r('118');
          c(this, [
            ((t = e),
            {
              type: 'TEXT_CONTENT',
              content: t,
              fromIndex: null,
              fromNode: null,
              toIndex: null,
              afterNode: null
            })
          ]);
        },
        updateMarkup: function(e) {
          var t,
            n = this._renderedChildren;
          for (var a in (o.unmountChildren(n, !1), n))
            n.hasOwnProperty(a) && r('118');
          c(this, [
            ((t = e),
            {
              type: 'SET_MARKUP',
              content: t,
              fromIndex: null,
              fromNode: null,
              toIndex: null,
              afterNode: null
            })
          ]);
        },
        updateChildren: function(e, t, n) {
          this._updateChildren(e, t, n);
        },
        _updateChildren: function(e, t, n) {
          var r = this._renderedChildren,
            a = {},
            o = [],
            s = this._reconcilerUpdateChildren(r, e, o, a, t, n);
          if (s || r) {
            var d,
              u = null,
              p = 0,
              m = 0,
              g = 0,
              f = null;
            for (d in s)
              if (s.hasOwnProperty(d)) {
                var _ = r && r[d],
                  b = s[d];
                _ === b
                  ? ((u = l(u, this.moveChild(_, f, p, m))),
                    (m = Math.max(_._mountIndex, m)),
                    (_._mountIndex = p))
                  : (_ && (m = Math.max(_._mountIndex, m)),
                    (u = l(u, this._mountChildAtIndex(b, o[g], f, p, t, n))),
                    g++),
                  p++,
                  (f = i.getHostNode(b));
              }
            for (d in a)
              a.hasOwnProperty(d) && (u = l(u, this._unmountChild(r[d], a[d])));
            u && c(this, u), (this._renderedChildren = s);
          }
        },
        unmountChildren: function(e) {
          var t = this._renderedChildren;
          o.unmountChildren(t, e), (this._renderedChildren = null);
        },
        moveChild: function(e, t, n, r) {
          if (e._mountIndex < r)
            return (function(e, t, n) {
              return {
                type: 'MOVE_EXISTING',
                content: null,
                fromIndex: e._mountIndex,
                fromNode: i.getHostNode(e),
                toIndex: n,
                afterNode: t
              };
            })(e, t, n);
        },
        createChild: function(e, t, n) {
          return (function(e, t, n) {
            return {
              type: 'INSERT_MARKUP',
              content: e,
              fromIndex: null,
              fromNode: null,
              toIndex: n,
              afterNode: t
            };
          })(n, t, e._mountIndex);
        },
        removeChild: function(e, t) {
          return (function(e, t) {
            return {
              type: 'REMOVE_NODE',
              content: null,
              fromIndex: e._mountIndex,
              fromNode: t,
              toIndex: null,
              afterNode: null
            };
          })(e, t);
        },
        _mountChildAtIndex: function(e, t, n, r, a, i) {
          return (e._mountIndex = r), this.createChild(e, n, t);
        },
        _unmountChild: function(e, t) {
          var n = this.removeChild(e, t);
          return (e._mountIndex = null), n;
        }
      }
    };
    e.exports = d;
  },
  function(e, t, n) {
    'use strict';
    (function(t) {
      var r = n(20),
        a = n(79),
        i = (n(51), n(50)),
        o = n(83);
      n(3);
      function s(e, t, n, r) {
        var i = void 0 === e[n];
        null != t && i && (e[n] = a(t, !0));
      }
      void 0 !== t && t.env;
      var l = {
        instantiateChildren: function(e, t, n, r) {
          if (null == e) return null;
          var a = {};
          return o(e, s, a), a;
        },
        updateChildren: function(e, t, n, o, s, l, c, d, u) {
          if (t || e) {
            var p, m;
            for (p in t)
              if (t.hasOwnProperty(p)) {
                var g = (m = e && e[p]) && m._currentElement,
                  f = t[p];
                if (null != m && i(g, f))
                  r.receiveComponent(m, f, s, d), (t[p] = m);
                else {
                  m && ((o[p] = r.getHostNode(m)), r.unmountComponent(m, !1));
                  var _ = a(f, !0);
                  t[p] = _;
                  var b = r.mountComponent(_, s, l, c, d, u);
                  n.push(b);
                }
              }
            for (p in e)
              !e.hasOwnProperty(p) ||
                (t && t.hasOwnProperty(p)) ||
                ((m = e[p]),
                (o[p] = r.getHostNode(m)),
                r.unmountComponent(m, !1));
          }
        },
        unmountChildren: function(e, t) {
          for (var n in e)
            if (e.hasOwnProperty(n)) {
              var a = e[n];
              r.unmountComponent(a, t);
            }
        }
      };
      e.exports = l;
    }.call(this, n(78)));
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = n(4),
      i = n(17),
      o = n(48),
      s = n(11),
      l = n(40),
      c = n(28),
      d = (n(7), n(80)),
      u = n(20),
      p = n(30),
      m = (n(1), n(49)),
      g = n(50),
      f = (n(3), 0),
      _ = 1,
      b = 2;
    function h(e) {}
    function v(e, t) {
      0;
    }
    h.prototype.render = function() {
      var e = c.get(this)._currentElement.type,
        t = e(this.props, this.context, this.updater);
      return v(e, t), t;
    };
    var E = 1,
      y = {
        construct: function(e) {
          (this._currentElement = e),
            (this._rootNodeID = 0),
            (this._compositeType = null),
            (this._instance = null),
            (this._hostParent = null),
            (this._hostContainerInfo = null),
            (this._updateBatchNumber = null),
            (this._pendingElement = null),
            (this._pendingStateQueue = null),
            (this._pendingReplaceState = !1),
            (this._pendingForceUpdate = !1),
            (this._renderedNodeType = null),
            (this._renderedComponent = null),
            (this._context = null),
            (this._mountOrder = 0),
            (this._topLevelWrapper = null),
            (this._pendingCallbacks = null),
            (this._calledComponentWillUnmount = !1);
        },
        mountComponent: function(e, t, n, a) {
          (this._context = a),
            (this._mountOrder = E++),
            (this._hostParent = t),
            (this._hostContainerInfo = n);
          var o,
            s = this._currentElement.props,
            l = this._processContext(a),
            d = this._currentElement.type,
            u = e.getUpdateQueue(),
            m = (function(e) {
              return !(!e.prototype || !e.prototype.isReactComponent);
            })(d),
            g = this._constructComponent(m, s, l, u);
          m || (null != g && null != g.render)
            ? !(function(e) {
                return !(!e.prototype || !e.prototype.isPureReactComponent);
              })(d)
              ? (this._compositeType = f)
              : (this._compositeType = _)
            : ((o = g),
              v(),
              null === g ||
                !1 === g ||
                i.isValidElement(g) ||
                r('105', d.displayName || d.name || 'Component'),
              (g = new h(d)),
              (this._compositeType = b)),
            (g.props = s),
            (g.context = l),
            (g.refs = p),
            (g.updater = u),
            (this._instance = g),
            c.set(g, this);
          var y,
            S = g.state;
          return (
            void 0 === S && (g.state = S = null),
            ('object' != typeof S || Array.isArray(S)) &&
              r('106', this.getName() || 'ReactCompositeComponent'),
            (this._pendingStateQueue = null),
            (this._pendingReplaceState = !1),
            (this._pendingForceUpdate = !1),
            (y = g.unstable_handleError
              ? this.performInitialMountWithErrorHandling(o, t, n, e, a)
              : this.performInitialMount(o, t, n, e, a)),
            g.componentDidMount &&
              e.getReactMountReady().enqueue(g.componentDidMount, g),
            y
          );
        },
        _constructComponent: function(e, t, n, r) {
          return this._constructComponentWithoutOwner(e, t, n, r);
        },
        _constructComponentWithoutOwner: function(e, t, n, r) {
          var a = this._currentElement.type;
          return e ? new a(t, n, r) : a(t, n, r);
        },
        performInitialMountWithErrorHandling: function(e, t, n, r, a) {
          var i,
            o = r.checkpoint();
          try {
            i = this.performInitialMount(e, t, n, r, a);
          } catch (s) {
            r.rollback(o),
              this._instance.unstable_handleError(s),
              this._pendingStateQueue &&
                (this._instance.state = this._processPendingState(
                  this._instance.props,
                  this._instance.context
                )),
              (o = r.checkpoint()),
              this._renderedComponent.unmountComponent(!0),
              r.rollback(o),
              (i = this.performInitialMount(e, t, n, r, a));
          }
          return i;
        },
        performInitialMount: function(e, t, n, r, a) {
          var i = this._instance;
          i.componentWillMount &&
            (i.componentWillMount(),
            this._pendingStateQueue &&
              (i.state = this._processPendingState(i.props, i.context))),
            void 0 === e && (e = this._renderValidatedComponent());
          var o = d.getType(e);
          this._renderedNodeType = o;
          var s = this._instantiateReactComponent(e, o !== d.EMPTY);
          return (
            (this._renderedComponent = s),
            u.mountComponent(s, r, t, n, this._processChildContext(a), 0)
          );
        },
        getHostNode: function() {
          return u.getHostNode(this._renderedComponent);
        },
        unmountComponent: function(e) {
          if (this._renderedComponent) {
            var t = this._instance;
            if (t.componentWillUnmount && !t._calledComponentWillUnmount)
              if (((t._calledComponentWillUnmount = !0), e)) {
                var n = this.getName() + '.componentWillUnmount()';
                l.invokeGuardedCallback(n, t.componentWillUnmount.bind(t));
              } else t.componentWillUnmount();
            this._renderedComponent &&
              (u.unmountComponent(this._renderedComponent, e),
              (this._renderedNodeType = null),
              (this._renderedComponent = null),
              (this._instance = null)),
              (this._pendingStateQueue = null),
              (this._pendingReplaceState = !1),
              (this._pendingForceUpdate = !1),
              (this._pendingCallbacks = null),
              (this._pendingElement = null),
              (this._context = null),
              (this._rootNodeID = 0),
              (this._topLevelWrapper = null),
              c.remove(t);
          }
        },
        _maskContext: function(e) {
          var t = this._currentElement.type.contextTypes;
          if (!t) return p;
          var n = {};
          for (var r in t) n[r] = e[r];
          return n;
        },
        _processContext: function(e) {
          return this._maskContext(e);
        },
        _processChildContext: function(e) {
          var t,
            n = this._currentElement.type,
            i = this._instance;
          if ((i.getChildContext && (t = i.getChildContext()), t)) {
            for (var o in ('object' != typeof n.childContextTypes &&
              r('107', this.getName() || 'ReactCompositeComponent'),
            t))
              o in n.childContextTypes ||
                r('108', this.getName() || 'ReactCompositeComponent', o);
            return a({}, e, t);
          }
          return e;
        },
        _checkContextTypes: function(e, t, n) {
          0;
        },
        receiveComponent: function(e, t, n) {
          var r = this._currentElement,
            a = this._context;
          (this._pendingElement = null), this.updateComponent(t, r, e, a, n);
        },
        performUpdateIfNecessary: function(e) {
          null != this._pendingElement
            ? u.receiveComponent(this, this._pendingElement, e, this._context)
            : null !== this._pendingStateQueue || this._pendingForceUpdate
            ? this.updateComponent(
                e,
                this._currentElement,
                this._currentElement,
                this._context,
                this._context
              )
            : (this._updateBatchNumber = null);
        },
        updateComponent: function(e, t, n, a, i) {
          var o = this._instance;
          null == o && r('136', this.getName() || 'ReactCompositeComponent');
          var s,
            l = !1;
          this._context === i
            ? (s = o.context)
            : ((s = this._processContext(i)), (l = !0));
          var c = t.props,
            d = n.props;
          t !== n && (l = !0),
            l &&
              o.componentWillReceiveProps &&
              o.componentWillReceiveProps(d, s);
          var u = this._processPendingState(d, s),
            p = !0;
          this._pendingForceUpdate ||
            (o.shouldComponentUpdate
              ? (p = o.shouldComponentUpdate(d, u, s))
              : this._compositeType === _ && (p = !m(c, d) || !m(o.state, u))),
            (this._updateBatchNumber = null),
            p
              ? ((this._pendingForceUpdate = !1),
                this._performComponentUpdate(n, d, u, s, e, i))
              : ((this._currentElement = n),
                (this._context = i),
                (o.props = d),
                (o.state = u),
                (o.context = s));
        },
        _processPendingState: function(e, t) {
          var n = this._instance,
            r = this._pendingStateQueue,
            i = this._pendingReplaceState;
          if (
            ((this._pendingReplaceState = !1),
            (this._pendingStateQueue = null),
            !r)
          )
            return n.state;
          if (i && 1 === r.length) return r[0];
          for (
            var o = a({}, i ? r[0] : n.state), s = i ? 1 : 0;
            s < r.length;
            s++
          ) {
            var l = r[s];
            a(o, 'function' == typeof l ? l.call(n, o, e, t) : l);
          }
          return o;
        },
        _performComponentUpdate: function(e, t, n, r, a, i) {
          var o,
            s,
            l,
            c = this._instance,
            d = Boolean(c.componentDidUpdate);
          d && ((o = c.props), (s = c.state), (l = c.context)),
            c.componentWillUpdate && c.componentWillUpdate(t, n, r),
            (this._currentElement = e),
            (this._context = i),
            (c.props = t),
            (c.state = n),
            (c.context = r),
            this._updateRenderedComponent(a, i),
            d &&
              a
                .getReactMountReady()
                .enqueue(c.componentDidUpdate.bind(c, o, s, l), c);
        },
        _updateRenderedComponent: function(e, t) {
          var n = this._renderedComponent,
            r = n._currentElement,
            a = this._renderValidatedComponent();
          if (g(r, a))
            u.receiveComponent(n, a, e, this._processChildContext(t));
          else {
            var i = u.getHostNode(n);
            u.unmountComponent(n, !1);
            var o = d.getType(a);
            this._renderedNodeType = o;
            var s = this._instantiateReactComponent(a, o !== d.EMPTY);
            this._renderedComponent = s;
            var l = u.mountComponent(
              s,
              e,
              this._hostParent,
              this._hostContainerInfo,
              this._processChildContext(t),
              0
            );
            this._replaceNodeWithMarkup(i, l, n);
          }
        },
        _replaceNodeWithMarkup: function(e, t, n) {
          o.replaceNodeWithMarkup(e, t, n);
        },
        _renderValidatedComponentWithoutOwnerOrContext: function() {
          return this._instance.render();
        },
        _renderValidatedComponent: function() {
          var e;
          if (this._compositeType !== b) {
            s.current = this;
            try {
              e = this._renderValidatedComponentWithoutOwnerOrContext();
            } finally {
              s.current = null;
            }
          } else e = this._renderValidatedComponentWithoutOwnerOrContext();
          return (
            null === e ||
              !1 === e ||
              i.isValidElement(e) ||
              r('109', this.getName() || 'ReactCompositeComponent'),
            e
          );
        },
        attachRef: function(e, t) {
          var n = this.getPublicInstance();
          null == n && r('110');
          var a = t.getPublicInstance();
          (n.refs === p ? (n.refs = {}) : n.refs)[e] = a;
        },
        detachRef: function(e) {
          delete this.getPublicInstance().refs[e];
        },
        getName: function() {
          var e = this._currentElement.type,
            t = this._instance && this._instance.constructor;
          return (
            e.displayName ||
            (t && t.displayName) ||
            e.name ||
            (t && t.name) ||
            null
          );
        },
        getPublicInstance: function() {
          var e = this._instance;
          return this._compositeType === b ? null : e;
        },
        _instantiateReactComponent: null
      };
    e.exports = y;
  },
  function(e, t, n) {
    'use strict';
    var r = 1;
    e.exports = function() {
      return r++;
    };
  },
  function(e, t, n) {
    'use strict';
    var r =
      ('function' == typeof Symbol &&
        Symbol.for &&
        Symbol.for('react.element')) ||
      60103;
    e.exports = r;
  },
  function(e, t, n) {
    'use strict';
    var r = 'function' == typeof Symbol && Symbol.iterator,
      a = '@@iterator';
    e.exports = function(e) {
      var t = e && ((r && e[r]) || e[a]);
      if ('function' == typeof t) return t;
    };
  },
  function(e, t, n) {
    'use strict';
    (function(t) {
      n(51);
      var r = n(83);
      n(3);
      function a(e, t, n, r) {
        if (e && 'object' == typeof e) {
          var a = e;
          0, void 0 === a[n] && null != t && (a[n] = t);
        }
      }
      void 0 !== t && t.env,
        (e.exports = function(e, t) {
          if (null == e) return e;
          var n = {};
          return r(e, a, n), n;
        });
    }.call(this, n(78)));
  },
  function(e, t, n) {
    'use strict';
    var r = n(4),
      a = n(15),
      i = n(31),
      o = (n(7), n(161)),
      s = [];
    var l = { enqueue: function() {} };
    function c(e) {
      this.reinitializeTransaction(),
        (this.renderToStaticMarkup = e),
        (this.useCreateElement = !1),
        (this.updateQueue = new o(this));
    }
    var d = {
      getTransactionWrappers: function() {
        return s;
      },
      getReactMountReady: function() {
        return l;
      },
      getUpdateQueue: function() {
        return this.updateQueue;
      },
      destructor: function() {},
      checkpoint: function() {},
      rollback: function() {}
    };
    r(c.prototype, i, d), a.addPoolingTo(c), (e.exports = c);
  },
  function(e, t, n) {
    'use strict';
    var r = n(52);
    n(3);
    var a = (function() {
      function e(t) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this.transaction = t);
      }
      return (
        (e.prototype.isMounted = function(e) {
          return !1;
        }),
        (e.prototype.enqueueCallback = function(e, t, n) {
          this.transaction.isInTransaction() && r.enqueueCallback(e, t, n);
        }),
        (e.prototype.enqueueForceUpdate = function(e) {
          this.transaction.isInTransaction() && r.enqueueForceUpdate(e);
        }),
        (e.prototype.enqueueReplaceState = function(e, t) {
          this.transaction.isInTransaction() && r.enqueueReplaceState(e, t);
        }),
        (e.prototype.enqueueSetState = function(e, t) {
          this.transaction.isInTransaction() && r.enqueueSetState(e, t);
        }),
        e
      );
    })();
    e.exports = a;
  },
  function(e, t, n) {
    'use strict';
    var r = n(4),
      a = n(21),
      i = n(5),
      o = function(e) {
        (this._currentElement = null),
          (this._hostNode = null),
          (this._hostParent = null),
          (this._hostContainerInfo = null),
          (this._domID = 0);
      };
    r(o.prototype, {
      mountComponent: function(e, t, n, r) {
        var o = n._idCounter++;
        (this._domID = o),
          (this._hostParent = t),
          (this._hostContainerInfo = n);
        var s = ' react-empty: ' + this._domID + ' ';
        if (e.useCreateElement) {
          var l = n._ownerDocument.createComment(s);
          return i.precacheNode(this, l), a(l);
        }
        return e.renderToStaticMarkup ? '' : '\x3c!--' + s + '--\x3e';
      },
      receiveComponent: function() {},
      getHostNode: function() {
        return i.getNodeFromInstance(this);
      },
      unmountComponent: function() {
        i.uncacheNode(this);
      }
    }),
      (e.exports = o);
  },
  function(e, t, n) {
    'use strict';
    var r = n(2);
    n(1);
    function a(e, t) {
      '_hostNode' in e || r('33'), '_hostNode' in t || r('33');
      for (var n = 0, a = e; a; a = a._hostParent) n++;
      for (var i = 0, o = t; o; o = o._hostParent) i++;
      for (; n - i > 0; ) (e = e._hostParent), n--;
      for (; i - n > 0; ) (t = t._hostParent), i--;
      for (var s = n; s--; ) {
        if (e === t) return e;
        (e = e._hostParent), (t = t._hostParent);
      }
      return null;
    }
    e.exports = {
      isAncestor: function(e, t) {
        '_hostNode' in e || r('35'), '_hostNode' in t || r('35');
        for (; t; ) {
          if (t === e) return !0;
          t = t._hostParent;
        }
        return !1;
      },
      getLowestCommonAncestor: a,
      getParentInstance: function(e) {
        return '_hostNode' in e || r('36'), e._hostParent;
      },
      traverseTwoPhase: function(e, t, n) {
        for (var r, a = []; e; ) a.push(e), (e = e._hostParent);
        for (r = a.length; r-- > 0; ) t(a[r], 'captured', n);
        for (r = 0; r < a.length; r++) t(a[r], 'bubbled', n);
      },
      traverseEnterLeave: function(e, t, n, r, i) {
        for (var o = e && t ? a(e, t) : null, s = []; e && e !== o; )
          s.push(e), (e = e._hostParent);
        for (var l, c = []; t && t !== o; ) c.push(t), (t = t._hostParent);
        for (l = 0; l < s.length; l++) n(s[l], 'bubbled', r);
        for (l = c.length; l-- > 0; ) n(c[l], 'captured', i);
      }
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = n(4),
      i = n(44),
      o = n(21),
      s = n(5),
      l = n(34),
      c = (n(1),
      n(53),
      function(e) {
        (this._currentElement = e),
          (this._stringText = '' + e),
          (this._hostNode = null),
          (this._hostParent = null),
          (this._domID = 0),
          (this._mountIndex = 0),
          (this._closingComment = null),
          (this._commentNodes = null);
      });
    a(c.prototype, {
      mountComponent: function(e, t, n, r) {
        var a = n._idCounter++,
          i = ' react-text: ' + a + ' ';
        if (((this._domID = a), (this._hostParent = t), e.useCreateElement)) {
          var c = n._ownerDocument,
            d = c.createComment(i),
            u = c.createComment(' /react-text '),
            p = o(c.createDocumentFragment());
          return (
            o.queueChild(p, o(d)),
            this._stringText &&
              o.queueChild(p, o(c.createTextNode(this._stringText))),
            o.queueChild(p, o(u)),
            s.precacheNode(this, d),
            (this._closingComment = u),
            p
          );
        }
        var m = l(this._stringText);
        return e.renderToStaticMarkup
          ? m
          : '\x3c!--' + i + '--\x3e' + m + '\x3c!-- /react-text --\x3e';
      },
      receiveComponent: function(e, t) {
        if (e !== this._currentElement) {
          this._currentElement = e;
          var n = '' + e;
          if (n !== this._stringText) {
            this._stringText = n;
            var r = this.getHostNode();
            i.replaceDelimitedText(r[0], r[1], n);
          }
        }
      },
      getHostNode: function() {
        var e = this._commentNodes;
        if (e) return e;
        if (!this._closingComment)
          for (var t = s.getNodeFromInstance(this).nextSibling; ; ) {
            if (
              (null == t && r('67', this._domID),
              8 === t.nodeType && ' /react-text ' === t.nodeValue)
            ) {
              this._closingComment = t;
              break;
            }
            t = t.nextSibling;
          }
        return (
          (e = [this._hostNode, this._closingComment]),
          (this._commentNodes = e),
          e
        );
      },
      unmountComponent: function() {
        (this._closingComment = null),
          (this._commentNodes = null),
          s.uncacheNode(this);
      }
    }),
      (e.exports = c);
  },
  function(e, t, n) {
    'use strict';
    var r = n(4),
      a = n(9),
      i = n(31),
      o = n(8),
      s = {
        initialize: o,
        close: function() {
          u.isBatchingUpdates = !1;
        }
      },
      l = [{ initialize: o, close: a.flushBatchedUpdates.bind(a) }, s];
    function c() {
      this.reinitializeTransaction();
    }
    r(c.prototype, i, {
      getTransactionWrappers: function() {
        return l;
      }
    });
    var d = new c(),
      u = {
        isBatchingUpdates: !1,
        batchedUpdates: function(e, t, n, r, a, i) {
          var o = u.isBatchingUpdates;
          return (
            (u.isBatchingUpdates = !0),
            o ? e(t, n, r, a, i) : d.perform(e, null, t, n, r, a, i)
          );
        }
      };
    e.exports = u;
  },
  function(e, t, n) {
    'use strict';
    var r = n(4),
      a = n(85),
      i = n(6),
      o = n(15),
      s = n(5),
      l = n(9),
      c = n(41),
      d = n(167);
    function u(e) {
      for (; e._hostParent; ) e = e._hostParent;
      var t = s.getNodeFromInstance(e).parentNode;
      return s.getClosestInstanceFromNode(t);
    }
    function p(e, t) {
      (this.topLevelType = e), (this.nativeEvent = t), (this.ancestors = []);
    }
    function m(e) {
      var t = c(e.nativeEvent),
        n = s.getClosestInstanceFromNode(t),
        r = n;
      do {
        e.ancestors.push(r), (r = r && u(r));
      } while (r);
      for (var a = 0; a < e.ancestors.length; a++)
        (n = e.ancestors[a]),
          g._handleTopLevel(e.topLevelType, n, e.nativeEvent, c(e.nativeEvent));
    }
    r(p.prototype, {
      destructor: function() {
        (this.topLevelType = null),
          (this.nativeEvent = null),
          (this.ancestors.length = 0);
      }
    }),
      o.addPoolingTo(p, o.twoArgumentPooler);
    var g = {
      _enabled: !0,
      _handleTopLevel: null,
      WINDOW_HANDLE: i.canUseDOM ? window : null,
      setHandleTopLevel: function(e) {
        g._handleTopLevel = e;
      },
      setEnabled: function(e) {
        g._enabled = !!e;
      },
      isEnabled: function() {
        return g._enabled;
      },
      trapBubbledEvent: function(e, t, n) {
        return n ? a.listen(n, t, g.dispatchEvent.bind(null, e)) : null;
      },
      trapCapturedEvent: function(e, t, n) {
        return n ? a.capture(n, t, g.dispatchEvent.bind(null, e)) : null;
      },
      monitorScrollValue: function(e) {
        var t = function(e) {
          e(d(window));
        }.bind(null, e);
        a.listen(window, 'scroll', t);
      },
      dispatchEvent: function(e, t) {
        if (g._enabled) {
          var n = p.getPooled(e, t);
          try {
            l.batchedUpdates(m, n);
          } finally {
            p.release(n);
          }
        }
      }
    };
    e.exports = g;
  },
  function(e, t, n) {
    'use strict';
    e.exports = function(e) {
      return e.Window && e instanceof e.Window
        ? {
            x: e.pageXOffset || e.document.documentElement.scrollLeft,
            y: e.pageYOffset || e.document.documentElement.scrollTop
          }
        : { x: e.scrollLeft, y: e.scrollTop };
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(19),
      a = n(26),
      i = n(39),
      o = n(48),
      s = n(81),
      l = n(35),
      c = n(82),
      d = n(9),
      u = {
        Component: o.injection,
        DOMProperty: r.injection,
        EmptyComponent: s.injection,
        EventPluginHub: a.injection,
        EventPluginUtils: i.injection,
        EventEmitter: l.injection,
        HostComponent: c.injection,
        Updates: d.injection
      };
    e.exports = u;
  },
  function(e, t, n) {
    'use strict';
    var r = n(4),
      a = n(68),
      i = n(15),
      o = n(35),
      s = n(86),
      l = (n(7), n(31)),
      c = n(52),
      d = [
        { initialize: s.getSelectionInformation, close: s.restoreSelection },
        {
          initialize: function() {
            var e = o.isEnabled();
            return o.setEnabled(!1), e;
          },
          close: function(e) {
            o.setEnabled(e);
          }
        },
        {
          initialize: function() {
            this.reactMountReady.reset();
          },
          close: function() {
            this.reactMountReady.notifyAll();
          }
        }
      ];
    function u(e) {
      this.reinitializeTransaction(),
        (this.renderToStaticMarkup = !1),
        (this.reactMountReady = a.getPooled(null)),
        (this.useCreateElement = e);
    }
    var p = {
      getTransactionWrappers: function() {
        return d;
      },
      getReactMountReady: function() {
        return this.reactMountReady;
      },
      getUpdateQueue: function() {
        return c;
      },
      checkpoint: function() {
        return this.reactMountReady.checkpoint();
      },
      rollback: function(e) {
        this.reactMountReady.rollback(e);
      },
      destructor: function() {
        a.release(this.reactMountReady), (this.reactMountReady = null);
      }
    };
    r(u.prototype, l, p), i.addPoolingTo(u), (e.exports = u);
  },
  function(e, t, n) {
    'use strict';
    var r = n(6),
      a = n(171),
      i = n(67);
    function o(e, t, n, r) {
      return e === n && t === r;
    }
    var s =
        r.canUseDOM && 'selection' in document && !('getSelection' in window),
      l = {
        getOffsets: s
          ? function(e) {
              var t = document.selection.createRange(),
                n = t.text.length,
                r = t.duplicate();
              r.moveToElementText(e), r.setEndPoint('EndToStart', t);
              var a = r.text.length;
              return { start: a, end: a + n };
            }
          : function(e) {
              var t = window.getSelection && window.getSelection();
              if (!t || 0 === t.rangeCount) return null;
              var n = t.anchorNode,
                r = t.anchorOffset,
                a = t.focusNode,
                i = t.focusOffset,
                s = t.getRangeAt(0);
              try {
                s.startContainer.nodeType, s.endContainer.nodeType;
              } catch (e) {
                return null;
              }
              var l = o(
                  t.anchorNode,
                  t.anchorOffset,
                  t.focusNode,
                  t.focusOffset
                )
                  ? 0
                  : s.toString().length,
                c = s.cloneRange();
              c.selectNodeContents(e),
                c.setEnd(s.startContainer, s.startOffset);
              var d = o(
                  c.startContainer,
                  c.startOffset,
                  c.endContainer,
                  c.endOffset
                )
                  ? 0
                  : c.toString().length,
                u = d + l,
                p = document.createRange();
              p.setStart(n, r), p.setEnd(a, i);
              var m = p.collapsed;
              return { start: m ? u : d, end: m ? d : u };
            },
        setOffsets: s
          ? function(e, t) {
              var n,
                r,
                a = document.selection.createRange().duplicate();
              void 0 === t.end
                ? (r = n = t.start)
                : t.start > t.end
                ? ((n = t.end), (r = t.start))
                : ((n = t.start), (r = t.end)),
                a.moveToElementText(e),
                a.moveStart('character', n),
                a.setEndPoint('EndToStart', a),
                a.moveEnd('character', r - n),
                a.select();
            }
          : function(e, t) {
              if (window.getSelection) {
                var n = window.getSelection(),
                  r = e[i()].length,
                  o = Math.min(t.start, r),
                  s = void 0 === t.end ? o : Math.min(t.end, r);
                if (!n.extend && o > s) {
                  var l = s;
                  (s = o), (o = l);
                }
                var c = a(e, o),
                  d = a(e, s);
                if (c && d) {
                  var u = document.createRange();
                  u.setStart(c.node, c.offset),
                    n.removeAllRanges(),
                    o > s
                      ? (n.addRange(u), n.extend(d.node, d.offset))
                      : (u.setEnd(d.node, d.offset), n.addRange(u));
                }
              }
            }
      };
    e.exports = l;
  },
  function(e, t, n) {
    'use strict';
    function r(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function a(e) {
      for (; e; ) {
        if (e.nextSibling) return e.nextSibling;
        e = e.parentNode;
      }
    }
    e.exports = function(e, t) {
      for (var n = r(e), i = 0, o = 0; n; ) {
        if (3 === n.nodeType) {
          if (((o = i + n.textContent.length), i <= t && o >= t))
            return { node: n, offset: t - i };
          i = o;
        }
        n = r(a(n));
      }
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(173);
    e.exports = function e(t, n) {
      return (
        !(!t || !n) &&
        (t === n ||
          (!r(t) &&
            (r(n)
              ? e(t, n.parentNode)
              : 'contains' in t
              ? t.contains(n)
              : !!t.compareDocumentPosition &&
                !!(16 & t.compareDocumentPosition(n)))))
      );
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(174);
    e.exports = function(e) {
      return r(e) && 3 == e.nodeType;
    };
  },
  function(e, t, n) {
    'use strict';
    e.exports = function(e) {
      var t = (e ? e.ownerDocument || e : document).defaultView || window;
      return !(
        !e ||
        !('function' == typeof t.Node
          ? e instanceof t.Node
          : 'object' == typeof e &&
            'number' == typeof e.nodeType &&
            'string' == typeof e.nodeName)
      );
    };
  },
  function(e, t, n) {
    'use strict';
    var r = 'http://www.w3.org/1999/xlink',
      a = 'http://www.w3.org/XML/1998/namespace',
      i = {
        accentHeight: 'accent-height',
        accumulate: 0,
        additive: 0,
        alignmentBaseline: 'alignment-baseline',
        allowReorder: 'allowReorder',
        alphabetic: 0,
        amplitude: 0,
        arabicForm: 'arabic-form',
        ascent: 0,
        attributeName: 'attributeName',
        attributeType: 'attributeType',
        autoReverse: 'autoReverse',
        azimuth: 0,
        baseFrequency: 'baseFrequency',
        baseProfile: 'baseProfile',
        baselineShift: 'baseline-shift',
        bbox: 0,
        begin: 0,
        bias: 0,
        by: 0,
        calcMode: 'calcMode',
        capHeight: 'cap-height',
        clip: 0,
        clipPath: 'clip-path',
        clipRule: 'clip-rule',
        clipPathUnits: 'clipPathUnits',
        colorInterpolation: 'color-interpolation',
        colorInterpolationFilters: 'color-interpolation-filters',
        colorProfile: 'color-profile',
        colorRendering: 'color-rendering',
        contentScriptType: 'contentScriptType',
        contentStyleType: 'contentStyleType',
        cursor: 0,
        cx: 0,
        cy: 0,
        d: 0,
        decelerate: 0,
        descent: 0,
        diffuseConstant: 'diffuseConstant',
        direction: 0,
        display: 0,
        divisor: 0,
        dominantBaseline: 'dominant-baseline',
        dur: 0,
        dx: 0,
        dy: 0,
        edgeMode: 'edgeMode',
        elevation: 0,
        enableBackground: 'enable-background',
        end: 0,
        exponent: 0,
        externalResourcesRequired: 'externalResourcesRequired',
        fill: 0,
        fillOpacity: 'fill-opacity',
        fillRule: 'fill-rule',
        filter: 0,
        filterRes: 'filterRes',
        filterUnits: 'filterUnits',
        floodColor: 'flood-color',
        floodOpacity: 'flood-opacity',
        focusable: 0,
        fontFamily: 'font-family',
        fontSize: 'font-size',
        fontSizeAdjust: 'font-size-adjust',
        fontStretch: 'font-stretch',
        fontStyle: 'font-style',
        fontVariant: 'font-variant',
        fontWeight: 'font-weight',
        format: 0,
        from: 0,
        fx: 0,
        fy: 0,
        g1: 0,
        g2: 0,
        glyphName: 'glyph-name',
        glyphOrientationHorizontal: 'glyph-orientation-horizontal',
        glyphOrientationVertical: 'glyph-orientation-vertical',
        glyphRef: 'glyphRef',
        gradientTransform: 'gradientTransform',
        gradientUnits: 'gradientUnits',
        hanging: 0,
        horizAdvX: 'horiz-adv-x',
        horizOriginX: 'horiz-origin-x',
        ideographic: 0,
        imageRendering: 'image-rendering',
        in: 0,
        in2: 0,
        intercept: 0,
        k: 0,
        k1: 0,
        k2: 0,
        k3: 0,
        k4: 0,
        kernelMatrix: 'kernelMatrix',
        kernelUnitLength: 'kernelUnitLength',
        kerning: 0,
        keyPoints: 'keyPoints',
        keySplines: 'keySplines',
        keyTimes: 'keyTimes',
        lengthAdjust: 'lengthAdjust',
        letterSpacing: 'letter-spacing',
        lightingColor: 'lighting-color',
        limitingConeAngle: 'limitingConeAngle',
        local: 0,
        markerEnd: 'marker-end',
        markerMid: 'marker-mid',
        markerStart: 'marker-start',
        markerHeight: 'markerHeight',
        markerUnits: 'markerUnits',
        markerWidth: 'markerWidth',
        mask: 0,
        maskContentUnits: 'maskContentUnits',
        maskUnits: 'maskUnits',
        mathematical: 0,
        mode: 0,
        numOctaves: 'numOctaves',
        offset: 0,
        opacity: 0,
        operator: 0,
        order: 0,
        orient: 0,
        orientation: 0,
        origin: 0,
        overflow: 0,
        overlinePosition: 'overline-position',
        overlineThickness: 'overline-thickness',
        paintOrder: 'paint-order',
        panose1: 'panose-1',
        pathLength: 'pathLength',
        patternContentUnits: 'patternContentUnits',
        patternTransform: 'patternTransform',
        patternUnits: 'patternUnits',
        pointerEvents: 'pointer-events',
        points: 0,
        pointsAtX: 'pointsAtX',
        pointsAtY: 'pointsAtY',
        pointsAtZ: 'pointsAtZ',
        preserveAlpha: 'preserveAlpha',
        preserveAspectRatio: 'preserveAspectRatio',
        primitiveUnits: 'primitiveUnits',
        r: 0,
        radius: 0,
        refX: 'refX',
        refY: 'refY',
        renderingIntent: 'rendering-intent',
        repeatCount: 'repeatCount',
        repeatDur: 'repeatDur',
        requiredExtensions: 'requiredExtensions',
        requiredFeatures: 'requiredFeatures',
        restart: 0,
        result: 0,
        rotate: 0,
        rx: 0,
        ry: 0,
        scale: 0,
        seed: 0,
        shapeRendering: 'shape-rendering',
        slope: 0,
        spacing: 0,
        specularConstant: 'specularConstant',
        specularExponent: 'specularExponent',
        speed: 0,
        spreadMethod: 'spreadMethod',
        startOffset: 'startOffset',
        stdDeviation: 'stdDeviation',
        stemh: 0,
        stemv: 0,
        stitchTiles: 'stitchTiles',
        stopColor: 'stop-color',
        stopOpacity: 'stop-opacity',
        strikethroughPosition: 'strikethrough-position',
        strikethroughThickness: 'strikethrough-thickness',
        string: 0,
        stroke: 0,
        strokeDasharray: 'stroke-dasharray',
        strokeDashoffset: 'stroke-dashoffset',
        strokeLinecap: 'stroke-linecap',
        strokeLinejoin: 'stroke-linejoin',
        strokeMiterlimit: 'stroke-miterlimit',
        strokeOpacity: 'stroke-opacity',
        strokeWidth: 'stroke-width',
        surfaceScale: 'surfaceScale',
        systemLanguage: 'systemLanguage',
        tableValues: 'tableValues',
        targetX: 'targetX',
        targetY: 'targetY',
        textAnchor: 'text-anchor',
        textDecoration: 'text-decoration',
        textRendering: 'text-rendering',
        textLength: 'textLength',
        to: 0,
        transform: 0,
        u1: 0,
        u2: 0,
        underlinePosition: 'underline-position',
        underlineThickness: 'underline-thickness',
        unicode: 0,
        unicodeBidi: 'unicode-bidi',
        unicodeRange: 'unicode-range',
        unitsPerEm: 'units-per-em',
        vAlphabetic: 'v-alphabetic',
        vHanging: 'v-hanging',
        vIdeographic: 'v-ideographic',
        vMathematical: 'v-mathematical',
        values: 0,
        vectorEffect: 'vector-effect',
        version: 0,
        vertAdvY: 'vert-adv-y',
        vertOriginX: 'vert-origin-x',
        vertOriginY: 'vert-origin-y',
        viewBox: 'viewBox',
        viewTarget: 'viewTarget',
        visibility: 0,
        widths: 0,
        wordSpacing: 'word-spacing',
        writingMode: 'writing-mode',
        x: 0,
        xHeight: 'x-height',
        x1: 0,
        x2: 0,
        xChannelSelector: 'xChannelSelector',
        xlinkActuate: 'xlink:actuate',
        xlinkArcrole: 'xlink:arcrole',
        xlinkHref: 'xlink:href',
        xlinkRole: 'xlink:role',
        xlinkShow: 'xlink:show',
        xlinkTitle: 'xlink:title',
        xlinkType: 'xlink:type',
        xmlBase: 'xml:base',
        xmlns: 0,
        xmlnsXlink: 'xmlns:xlink',
        xmlLang: 'xml:lang',
        xmlSpace: 'xml:space',
        y: 0,
        y1: 0,
        y2: 0,
        yChannelSelector: 'yChannelSelector',
        z: 0,
        zoomAndPan: 'zoomAndPan'
      },
      o = {
        Properties: {},
        DOMAttributeNamespaces: {
          xlinkActuate: r,
          xlinkArcrole: r,
          xlinkHref: r,
          xlinkRole: r,
          xlinkShow: r,
          xlinkTitle: r,
          xlinkType: r,
          xmlBase: a,
          xmlLang: a,
          xmlSpace: a
        },
        DOMAttributeNames: {}
      };
    Object.keys(i).forEach(function(e) {
      (o.Properties[e] = 0), i[e] && (o.DOMAttributeNames[e] = i[e]);
    }),
      (e.exports = o);
  },
  function(e, t, n) {
    'use strict';
    var r = n(25),
      a = n(6),
      i = n(5),
      o = n(86),
      s = n(12),
      l = n(87),
      c = n(71),
      d = n(49),
      u =
        a.canUseDOM &&
        'documentMode' in document &&
        document.documentMode <= 11,
      p = {
        select: {
          phasedRegistrationNames: {
            bubbled: 'onSelect',
            captured: 'onSelectCapture'
          },
          dependencies: [
            'topBlur',
            'topContextMenu',
            'topFocus',
            'topKeyDown',
            'topKeyUp',
            'topMouseDown',
            'topMouseUp',
            'topSelectionChange'
          ]
        }
      },
      m = null,
      g = null,
      f = null,
      _ = !1,
      b = !1;
    function h(e, t) {
      if (_ || null == m || m !== l()) return null;
      var n = (function(e) {
        if ('selectionStart' in e && o.hasSelectionCapabilities(e))
          return { start: e.selectionStart, end: e.selectionEnd };
        if (window.getSelection) {
          var t = window.getSelection();
          return {
            anchorNode: t.anchorNode,
            anchorOffset: t.anchorOffset,
            focusNode: t.focusNode,
            focusOffset: t.focusOffset
          };
        }
        if (document.selection) {
          var n = document.selection.createRange();
          return {
            parentElement: n.parentElement(),
            text: n.text,
            top: n.boundingTop,
            left: n.boundingLeft
          };
        }
      })(m);
      if (!f || !d(f, n)) {
        f = n;
        var a = s.getPooled(p.select, g, e, t);
        return (
          (a.type = 'select'),
          (a.target = m),
          r.accumulateTwoPhaseDispatches(a),
          a
        );
      }
      return null;
    }
    var v = {
      eventTypes: p,
      extractEvents: function(e, t, n, r) {
        if (!b) return null;
        var a = t ? i.getNodeFromInstance(t) : window;
        switch (e) {
          case 'topFocus':
            (c(a) || 'true' === a.contentEditable) &&
              ((m = a), (g = t), (f = null));
            break;
          case 'topBlur':
            (m = null), (g = null), (f = null);
            break;
          case 'topMouseDown':
            _ = !0;
            break;
          case 'topContextMenu':
          case 'topMouseUp':
            return (_ = !1), h(n, r);
          case 'topSelectionChange':
            if (u) break;
          case 'topKeyDown':
          case 'topKeyUp':
            return h(n, r);
        }
        return null;
      },
      didPutListener: function(e, t, n) {
        'onSelect' === t && (b = !0);
      }
    };
    e.exports = v;
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = n(85),
      i = n(25),
      o = n(5),
      s = n(178),
      l = n(179),
      c = n(12),
      d = n(180),
      u = n(181),
      p = n(32),
      m = n(183),
      g = n(184),
      f = n(185),
      _ = n(27),
      b = n(186),
      h = n(8),
      v = n(54),
      E = (n(1), {}),
      y = {};
    [
      'abort',
      'animationEnd',
      'animationIteration',
      'animationStart',
      'blur',
      'canPlay',
      'canPlayThrough',
      'click',
      'contextMenu',
      'copy',
      'cut',
      'doubleClick',
      'drag',
      'dragEnd',
      'dragEnter',
      'dragExit',
      'dragLeave',
      'dragOver',
      'dragStart',
      'drop',
      'durationChange',
      'emptied',
      'encrypted',
      'ended',
      'error',
      'focus',
      'input',
      'invalid',
      'keyDown',
      'keyPress',
      'keyUp',
      'load',
      'loadedData',
      'loadedMetadata',
      'loadStart',
      'mouseDown',
      'mouseMove',
      'mouseOut',
      'mouseOver',
      'mouseUp',
      'paste',
      'pause',
      'play',
      'playing',
      'progress',
      'rateChange',
      'reset',
      'scroll',
      'seeked',
      'seeking',
      'stalled',
      'submit',
      'suspend',
      'timeUpdate',
      'touchCancel',
      'touchEnd',
      'touchMove',
      'touchStart',
      'transitionEnd',
      'volumeChange',
      'waiting',
      'wheel'
    ].forEach(function(e) {
      var t = e[0].toUpperCase() + e.slice(1),
        n = 'on' + t,
        r = 'top' + t,
        a = {
          phasedRegistrationNames: { bubbled: n, captured: n + 'Capture' },
          dependencies: [r]
        };
      (E[e] = a), (y[r] = a);
    });
    var S = {};
    function C(e) {
      return '.' + e._rootNodeID;
    }
    function x(e) {
      return (
        'button' === e || 'input' === e || 'select' === e || 'textarea' === e
      );
    }
    var T = {
      eventTypes: E,
      extractEvents: function(e, t, n, a) {
        var o,
          h = y[e];
        if (!h) return null;
        switch (e) {
          case 'topAbort':
          case 'topCanPlay':
          case 'topCanPlayThrough':
          case 'topDurationChange':
          case 'topEmptied':
          case 'topEncrypted':
          case 'topEnded':
          case 'topError':
          case 'topInput':
          case 'topInvalid':
          case 'topLoad':
          case 'topLoadedData':
          case 'topLoadedMetadata':
          case 'topLoadStart':
          case 'topPause':
          case 'topPlay':
          case 'topPlaying':
          case 'topProgress':
          case 'topRateChange':
          case 'topReset':
          case 'topSeeked':
          case 'topSeeking':
          case 'topStalled':
          case 'topSubmit':
          case 'topSuspend':
          case 'topTimeUpdate':
          case 'topVolumeChange':
          case 'topWaiting':
            o = c;
            break;
          case 'topKeyPress':
            if (0 === v(n)) return null;
          case 'topKeyDown':
          case 'topKeyUp':
            o = u;
            break;
          case 'topBlur':
          case 'topFocus':
            o = d;
            break;
          case 'topClick':
            if (2 === n.button) return null;
          case 'topDoubleClick':
          case 'topMouseDown':
          case 'topMouseMove':
          case 'topMouseUp':
          case 'topMouseOut':
          case 'topMouseOver':
          case 'topContextMenu':
            o = p;
            break;
          case 'topDrag':
          case 'topDragEnd':
          case 'topDragEnter':
          case 'topDragExit':
          case 'topDragLeave':
          case 'topDragOver':
          case 'topDragStart':
          case 'topDrop':
            o = m;
            break;
          case 'topTouchCancel':
          case 'topTouchEnd':
          case 'topTouchMove':
          case 'topTouchStart':
            o = g;
            break;
          case 'topAnimationEnd':
          case 'topAnimationIteration':
          case 'topAnimationStart':
            o = s;
            break;
          case 'topTransitionEnd':
            o = f;
            break;
          case 'topScroll':
            o = _;
            break;
          case 'topWheel':
            o = b;
            break;
          case 'topCopy':
          case 'topCut':
          case 'topPaste':
            o = l;
        }
        o || r('86', e);
        var E = o.getPooled(h, t, n, a);
        return i.accumulateTwoPhaseDispatches(E), E;
      },
      didPutListener: function(e, t, n) {
        if ('onClick' === t && !x(e._tag)) {
          var r = C(e),
            i = o.getNodeFromInstance(e);
          S[r] || (S[r] = a.listen(i, 'click', h));
        }
      },
      willDeleteListener: function(e, t) {
        if ('onClick' === t && !x(e._tag)) {
          var n = C(e);
          S[n].remove(), delete S[n];
        }
      }
    };
    e.exports = T;
  },
  function(e, t, n) {
    'use strict';
    var r = n(12);
    function a(e, t, n, a) {
      return r.call(this, e, t, n, a);
    }
    r.augmentClass(a, {
      animationName: null,
      elapsedTime: null,
      pseudoElement: null
    }),
      (e.exports = a);
  },
  function(e, t, n) {
    'use strict';
    var r = n(12),
      a = {
        clipboardData: function(e) {
          return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        }
      };
    function i(e, t, n, a) {
      return r.call(this, e, t, n, a);
    }
    r.augmentClass(i, a), (e.exports = i);
  },
  function(e, t, n) {
    'use strict';
    var r = n(27);
    function a(e, t, n, a) {
      return r.call(this, e, t, n, a);
    }
    r.augmentClass(a, { relatedTarget: null }), (e.exports = a);
  },
  function(e, t, n) {
    'use strict';
    var r = n(27),
      a = n(54),
      i = {
        key: n(182),
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: n(43),
        charCode: function(e) {
          return 'keypress' === e.type ? a(e) : 0;
        },
        keyCode: function(e) {
          return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
        which: function(e) {
          return 'keypress' === e.type
            ? a(e)
            : 'keydown' === e.type || 'keyup' === e.type
            ? e.keyCode
            : 0;
        }
      };
    function o(e, t, n, a) {
      return r.call(this, e, t, n, a);
    }
    r.augmentClass(o, i), (e.exports = o);
  },
  function(e, t, n) {
    'use strict';
    var r = n(54),
      a = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified'
      },
      i = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta'
      };
    e.exports = function(e) {
      if (e.key) {
        var t = a[e.key] || e.key;
        if ('Unidentified' !== t) return t;
      }
      if ('keypress' === e.type) {
        var n = r(e);
        return 13 === n ? 'Enter' : String.fromCharCode(n);
      }
      return 'keydown' === e.type || 'keyup' === e.type
        ? i[e.keyCode] || 'Unidentified'
        : '';
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(32);
    function a(e, t, n, a) {
      return r.call(this, e, t, n, a);
    }
    r.augmentClass(a, { dataTransfer: null }), (e.exports = a);
  },
  function(e, t, n) {
    'use strict';
    var r = n(27),
      a = {
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: n(43)
      };
    function i(e, t, n, a) {
      return r.call(this, e, t, n, a);
    }
    r.augmentClass(i, a), (e.exports = i);
  },
  function(e, t, n) {
    'use strict';
    var r = n(12);
    function a(e, t, n, a) {
      return r.call(this, e, t, n, a);
    }
    r.augmentClass(a, {
      propertyName: null,
      elapsedTime: null,
      pseudoElement: null
    }),
      (e.exports = a);
  },
  function(e, t, n) {
    'use strict';
    var r = n(32);
    function a(e, t, n, a) {
      return r.call(this, e, t, n, a);
    }
    r.augmentClass(a, {
      deltaX: function(e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function(e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: null,
      deltaMode: null
    }),
      (e.exports = a);
  },
  function(e, t, n) {
    'use strict';
    n(53);
    var r = 9;
    e.exports = function(e, t) {
      return {
        _topLevelWrapper: e,
        _idCounter: 1,
        _ownerDocument: t ? (t.nodeType === r ? t : t.ownerDocument) : null,
        _node: t,
        _tag: t ? t.nodeName.toLowerCase() : null,
        _namespaceURI: t ? t.namespaceURI : null
      };
    };
  },
  function(e, t, n) {
    'use strict';
    e.exports = { useCreateElement: !0, useFiber: !1 };
  },
  function(e, t, n) {
    'use strict';
    var r = n(190),
      a = /\/?>/,
      i = /^<\!\-\-/,
      o = {
        CHECKSUM_ATTR_NAME: 'data-react-checksum',
        addChecksumToMarkup: function(e) {
          var t = r(e);
          return i.test(e)
            ? e
            : e.replace(a, ' ' + o.CHECKSUM_ATTR_NAME + '="' + t + '"$&');
        },
        canReuseMarkup: function(e, t) {
          var n = t.getAttribute(o.CHECKSUM_ATTR_NAME);
          return (n = n && parseInt(n, 10)), r(e) === n;
        }
      };
    e.exports = o;
  },
  function(e, t, n) {
    'use strict';
    var r = 65521;
    e.exports = function(e) {
      for (var t = 1, n = 0, a = 0, i = e.length, o = -4 & i; a < o; ) {
        for (var s = Math.min(a + 4096, o); a < s; a += 4)
          n +=
            (t += e.charCodeAt(a)) +
            (t += e.charCodeAt(a + 1)) +
            (t += e.charCodeAt(a + 2)) +
            (t += e.charCodeAt(a + 3));
        (t %= r), (n %= r);
      }
      for (; a < i; a++) n += t += e.charCodeAt(a);
      return (t %= r) | ((n %= r) << 16);
    };
  },
  function(e, t, n) {
    'use strict';
    e.exports = '15.6.2';
  },
  function(e, t, n) {
    'use strict';
    var r = n(2),
      a = (n(11), n(5)),
      i = n(28),
      o = n(89);
    n(1), n(3);
    e.exports = function(e) {
      if (null == e) return null;
      if (1 === e.nodeType) return e;
      var t = i.get(e);
      if (t) return (t = o(t)) ? a.getNodeFromInstance(t) : null;
      'function' == typeof e.render ? r('44') : r('45', Object.keys(e));
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(88);
    e.exports = r.renderSubtreeIntoContainer;
  },
  function(e, t) {
    e.exports = function(e, t) {
      if (null == e) return {};
      var n,
        r,
        a = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
    };
  },
  function(e, t, n) {
    'use strict';
    var r = n(215);
    (e.exports = r),
      r.registerLanguage('1c', n(219)),
      r.registerLanguage('abnf', n(220)),
      r.registerLanguage('accesslog', n(221)),
      r.registerLanguage('actionscript', n(222)),
      r.registerLanguage('ada', n(223)),
      r.registerLanguage('apache', n(224)),
      r.registerLanguage('applescript', n(225)),
      r.registerLanguage('cpp', n(226)),
      r.registerLanguage('arduino', n(227)),
      r.registerLanguage('armasm', n(228)),
      r.registerLanguage('xml', n(229)),
      r.registerLanguage('asciidoc', n(230)),
      r.registerLanguage('aspectj', n(231)),
      r.registerLanguage('autohotkey', n(232)),
      r.registerLanguage('autoit', n(233)),
      r.registerLanguage('avrasm', n(234)),
      r.registerLanguage('awk', n(235)),
      r.registerLanguage('axapta', n(236)),
      r.registerLanguage('bash', n(237)),
      r.registerLanguage('basic', n(238)),
      r.registerLanguage('bnf', n(239)),
      r.registerLanguage('brainfuck', n(240)),
      r.registerLanguage('cal', n(241)),
      r.registerLanguage('capnproto', n(242)),
      r.registerLanguage('ceylon', n(243)),
      r.registerLanguage('clean', n(244)),
      r.registerLanguage('clojure', n(245)),
      r.registerLanguage('clojure-repl', n(246)),
      r.registerLanguage('cmake', n(247)),
      r.registerLanguage('coffeescript', n(248)),
      r.registerLanguage('coq', n(249)),
      r.registerLanguage('cos', n(250)),
      r.registerLanguage('crmsh', n(251)),
      r.registerLanguage('crystal', n(252)),
      r.registerLanguage('cs', n(253)),
      r.registerLanguage('csp', n(254)),
      r.registerLanguage('css', n(255)),
      r.registerLanguage('d', n(256)),
      r.registerLanguage('markdown', n(257)),
      r.registerLanguage('dart', n(258)),
      r.registerLanguage('delphi', n(259)),
      r.registerLanguage('diff', n(260)),
      r.registerLanguage('django', n(261)),
      r.registerLanguage('dns', n(262)),
      r.registerLanguage('dockerfile', n(263)),
      r.registerLanguage('dos', n(264)),
      r.registerLanguage('dsconfig', n(265)),
      r.registerLanguage('dts', n(266)),
      r.registerLanguage('dust', n(267)),
      r.registerLanguage('ebnf', n(268)),
      r.registerLanguage('elixir', n(269)),
      r.registerLanguage('elm', n(270)),
      r.registerLanguage('ruby', n(271)),
      r.registerLanguage('erb', n(272)),
      r.registerLanguage('erlang-repl', n(273)),
      r.registerLanguage('erlang', n(274)),
      r.registerLanguage('excel', n(275)),
      r.registerLanguage('fix', n(276)),
      r.registerLanguage('flix', n(277)),
      r.registerLanguage('fortran', n(278)),
      r.registerLanguage('fsharp', n(279)),
      r.registerLanguage('gams', n(280)),
      r.registerLanguage('gauss', n(281)),
      r.registerLanguage('gcode', n(282)),
      r.registerLanguage('gherkin', n(283)),
      r.registerLanguage('glsl', n(284)),
      r.registerLanguage('go', n(285)),
      r.registerLanguage('golo', n(286)),
      r.registerLanguage('gradle', n(287)),
      r.registerLanguage('groovy', n(288)),
      r.registerLanguage('haml', n(289)),
      r.registerLanguage('handlebars', n(290)),
      r.registerLanguage('haskell', n(291)),
      r.registerLanguage('haxe', n(292)),
      r.registerLanguage('hsp', n(293)),
      r.registerLanguage('htmlbars', n(294)),
      r.registerLanguage('http', n(295)),
      r.registerLanguage('hy', n(296)),
      r.registerLanguage('inform7', n(297)),
      r.registerLanguage('ini', n(298)),
      r.registerLanguage('irpf90', n(299)),
      r.registerLanguage('java', n(300)),
      r.registerLanguage('javascript', n(301)),
      r.registerLanguage('jboss-cli', n(302)),
      r.registerLanguage('json', n(303)),
      r.registerLanguage('julia', n(304)),
      r.registerLanguage('julia-repl', n(305)),
      r.registerLanguage('kotlin', n(306)),
      r.registerLanguage('lasso', n(307)),
      r.registerLanguage('ldif', n(308)),
      r.registerLanguage('leaf', n(309)),
      r.registerLanguage('less', n(310)),
      r.registerLanguage('lisp', n(311)),
      r.registerLanguage('livecodeserver', n(312)),
      r.registerLanguage('livescript', n(313)),
      r.registerLanguage('llvm', n(314)),
      r.registerLanguage('lsl', n(315)),
      r.registerLanguage('lua', n(316)),
      r.registerLanguage('makefile', n(317)),
      r.registerLanguage('mathematica', n(318)),
      r.registerLanguage('matlab', n(319)),
      r.registerLanguage('maxima', n(320)),
      r.registerLanguage('mel', n(321)),
      r.registerLanguage('mercury', n(322)),
      r.registerLanguage('mipsasm', n(323)),
      r.registerLanguage('mizar', n(324)),
      r.registerLanguage('perl', n(325)),
      r.registerLanguage('mojolicious', n(326)),
      r.registerLanguage('monkey', n(327)),
      r.registerLanguage('moonscript', n(328)),
      r.registerLanguage('n1ql', n(329)),
      r.registerLanguage('nginx', n(330)),
      r.registerLanguage('nimrod', n(331)),
      r.registerLanguage('nix', n(332)),
      r.registerLanguage('nsis', n(333)),
      r.registerLanguage('objectivec', n(334)),
      r.registerLanguage('ocaml', n(335)),
      r.registerLanguage('openscad', n(336)),
      r.registerLanguage('oxygene', n(337)),
      r.registerLanguage('parser3', n(338)),
      r.registerLanguage('pf', n(339)),
      r.registerLanguage('php', n(340)),
      r.registerLanguage('pony', n(341)),
      r.registerLanguage('powershell', n(342)),
      r.registerLanguage('processing', n(343)),
      r.registerLanguage('profile', n(344)),
      r.registerLanguage('prolog', n(345)),
      r.registerLanguage('protobuf', n(346)),
      r.registerLanguage('puppet', n(347)),
      r.registerLanguage('purebasic', n(348)),
      r.registerLanguage('python', n(349)),
      r.registerLanguage('q', n(350)),
      r.registerLanguage('qml', n(351)),
      r.registerLanguage('r', n(352)),
      r.registerLanguage('rib', n(353)),
      r.registerLanguage('roboconf', n(354)),
      r.registerLanguage('routeros', n(355)),
      r.registerLanguage('rsl', n(356)),
      r.registerLanguage('ruleslanguage', n(357)),
      r.registerLanguage('rust', n(358)),
      r.registerLanguage('scala', n(359)),
      r.registerLanguage('scheme', n(360)),
      r.registerLanguage('scilab', n(361)),
      r.registerLanguage('scss', n(362)),
      r.registerLanguage('shell', n(363)),
      r.registerLanguage('smali', n(364)),
      r.registerLanguage('smalltalk', n(365)),
      r.registerLanguage('sml', n(366)),
      r.registerLanguage('sqf', n(367)),
      r.registerLanguage('sql', n(368)),
      r.registerLanguage('stan', n(369)),
      r.registerLanguage('stata', n(370)),
      r.registerLanguage('step21', n(371)),
      r.registerLanguage('stylus', n(372)),
      r.registerLanguage('subunit', n(373)),
      r.registerLanguage('swift', n(374)),
      r.registerLanguage('taggerscript', n(375)),
      r.registerLanguage('yaml', n(376)),
      r.registerLanguage('tap', n(377)),
      r.registerLanguage('tcl', n(378)),
      r.registerLanguage('tex', n(379)),
      r.registerLanguage('thrift', n(380)),
      r.registerLanguage('tp', n(381)),
      r.registerLanguage('twig', n(382)),
      r.registerLanguage('typescript', n(383)),
      r.registerLanguage('vala', n(384)),
      r.registerLanguage('vbnet', n(385)),
      r.registerLanguage('vbscript', n(386)),
      r.registerLanguage('vbscript-html', n(387)),
      r.registerLanguage('verilog', n(388)),
      r.registerLanguage('vhdl', n(389)),
      r.registerLanguage('vim', n(390)),
      r.registerLanguage('x86asm', n(391)),
      r.registerLanguage('xl', n(392)),
      r.registerLanguage('xquery', n(393)),
      r.registerLanguage('zephir', n(394));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = {
        hljs: {
          display: 'block',
          overflowX: 'auto',
          padding: '0.5em',
          color: '#000',
          background: '#f8f8ff'
        },
        'hljs-comment': { color: '#408080', fontStyle: 'italic' },
        'hljs-quote': { color: '#408080', fontStyle: 'italic' },
        'hljs-keyword': { color: '#954121' },
        'hljs-selector-tag': { color: '#954121' },
        'hljs-literal': { color: '#954121' },
        'hljs-subst': { color: '#954121' },
        'hljs-number': { color: '#40a070' },
        'hljs-string': { color: '#219161' },
        'hljs-doctag': { color: '#219161' },
        'hljs-selector-id': { color: '#19469d' },
        'hljs-selector-class': { color: '#19469d' },
        'hljs-section': { color: '#19469d' },
        'hljs-type': { color: '#19469d' },
        'hljs-params': { color: '#00f' },
        'hljs-title': { color: '#458', fontWeight: 'bold' },
        'hljs-tag': { color: '#000080', fontWeight: 'normal' },
        'hljs-name': { color: '#000080', fontWeight: 'normal' },
        'hljs-attribute': { color: '#000080', fontWeight: 'normal' },
        'hljs-variable': { color: '#008080' },
        'hljs-template-variable': { color: '#008080' },
        'hljs-regexp': { color: '#b68' },
        'hljs-link': { color: '#b68' },
        'hljs-symbol': { color: '#990073' },
        'hljs-bullet': { color: '#990073' },
        'hljs-built_in': { color: '#0086b3' },
        'hljs-builtin-name': { color: '#0086b3' },
        'hljs-meta': { color: '#999', fontWeight: 'bold' },
        'hljs-deletion': { background: '#fdd' },
        'hljs-addition': { background: '#dfd' },
        'hljs-emphasis': { fontStyle: 'italic' },
        'hljs-strong': { fontWeight: 'bold' }
      });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, n) {
    'use strict';
    var r = n(94),
      a = n(195),
      i = n.n(a),
      o = Object(r.a)(i.a, {
        hljs: {
          display: 'block',
          overflowX: 'auto',
          padding: '0.5em',
          background: '#F0F0F0',
          color: '#444'
        },
        'hljs-subst': { color: '#444' },
        'hljs-comment': { color: '#888888' },
        'hljs-keyword': { fontWeight: 'bold' },
        'hljs-attribute': { fontWeight: 'bold' },
        'hljs-selector-tag': { fontWeight: 'bold' },
        'hljs-meta-keyword': { fontWeight: 'bold' },
        'hljs-doctag': { fontWeight: 'bold' },
        'hljs-name': { fontWeight: 'bold' },
        'hljs-type': { color: '#880000' },
        'hljs-string': { color: '#880000' },
        'hljs-number': { color: '#880000' },
        'hljs-selector-id': { color: '#880000' },
        'hljs-selector-class': { color: '#880000' },
        'hljs-quote': { color: '#880000' },
        'hljs-template-tag': { color: '#880000' },
        'hljs-deletion': { color: '#880000' },
        'hljs-title': { color: '#880000', fontWeight: 'bold' },
        'hljs-section': { color: '#880000', fontWeight: 'bold' },
        'hljs-regexp': { color: '#BC6060' },
        'hljs-symbol': { color: '#BC6060' },
        'hljs-variable': { color: '#BC6060' },
        'hljs-template-variable': { color: '#BC6060' },
        'hljs-link': { color: '#BC6060' },
        'hljs-selector-attr': { color: '#BC6060' },
        'hljs-selector-pseudo': { color: '#BC6060' },
        'hljs-literal': { color: '#78A960' },
        'hljs-built_in': { color: '#397300' },
        'hljs-bullet': { color: '#397300' },
        'hljs-code': { color: '#397300' },
        'hljs-addition': { color: '#397300' },
        'hljs-meta': { color: '#1f7199' },
        'hljs-meta-string': { color: '#4d99bf' },
        'hljs-emphasis': { fontStyle: 'italic' },
        'hljs-strong': { fontWeight: 'bold' }
      });
    o.supportedLanguages = [
      '1c',
      'abnf',
      'accesslog',
      'actionscript',
      'ada',
      'apache',
      'applescript',
      'arduino',
      'armasm',
      'asciidoc',
      'aspectj',
      'autohotkey',
      'autoit',
      'avrasm',
      'awk',
      'axapta',
      'bash',
      'basic',
      'bnf',
      'brainfuck',
      'cal',
      'capnproto',
      'ceylon',
      'clean',
      'clojure-repl',
      'clojure',
      'cmake',
      'coffeescript',
      'coq',
      'cos',
      'cpp',
      'crmsh',
      'crystal',
      'cs',
      'csp',
      'css',
      'd',
      'dart',
      'delphi',
      'diff',
      'django',
      'dns',
      'dockerfile',
      'dos',
      'dsconfig',
      'dts',
      'dust',
      'ebnf',
      'elixir',
      'elm',
      'erb',
      'erlang-repl',
      'erlang',
      'excel',
      'fix',
      'flix',
      'fortran',
      'fsharp',
      'gams',
      'gauss',
      'gcode',
      'gherkin',
      'glsl',
      'go',
      'golo',
      'gradle',
      'groovy',
      'haml',
      'handlebars',
      'haskell',
      'haxe',
      'hsp',
      'htmlbars',
      'http',
      'hy',
      'inform7',
      'ini',
      'irpf90',
      'java',
      'javascript',
      'jboss-cli',
      'json',
      'julia-repl',
      'julia',
      'kotlin',
      'lasso',
      'ldif',
      'leaf',
      'less',
      'lisp',
      'livecodeserver',
      'livescript',
      'llvm',
      'lsl',
      'lua',
      'makefile',
      'markdown',
      'mathematica',
      'matlab',
      'maxima',
      'mel',
      'mercury',
      'mipsasm',
      'mizar',
      'mojolicious',
      'monkey',
      'moonscript',
      'n1ql',
      'nginx',
      'nimrod',
      'nix',
      'nsis',
      'objectivec',
      'ocaml',
      'openscad',
      'oxygene',
      'parser3',
      'perl',
      'pf',
      'php',
      'pony',
      'powershell',
      'processing',
      'profile',
      'prolog',
      'protobuf',
      'puppet',
      'purebasic',
      'python',
      'q',
      'qml',
      'r',
      'rib',
      'roboconf',
      'routeros',
      'rsl',
      'ruby',
      'ruleslanguage',
      'rust',
      'scala',
      'scheme',
      'scilab',
      'scss',
      'shell',
      'smali',
      'smalltalk',
      'sml',
      'sqf',
      'sql',
      'stan',
      'stata',
      'step21',
      'stylus',
      'subunit',
      'swift',
      'taggerscript',
      'tap',
      'tcl',
      'tex',
      'thrift',
      'tp',
      'twig',
      'typescript',
      'vala',
      'vbnet',
      'vbscript-html',
      'vbscript',
      'verilog',
      'vhdl',
      'vim',
      'x86asm',
      'xl',
      'xml',
      'xquery',
      'yaml',
      'zephir'
    ];
    t.a = o;
  },
  ,
  function(e, t, n) {
    'use strict';
    var r = n(216),
      a = n(217);
    function i() {}
    i.prototype = r;
    var o = new i();
    (e.exports = o),
      (o.highlight = function(e, t, n) {
        var r = (n || {}).prefix;
        null == r && (r = d);
        return C(S(e, t, !0, r));
      }),
      (o.highlightAuto = y),
      (o.registerLanguage = function(e, t) {
        var n = t(o),
          r = n.aliases,
          a = r && r.length,
          i = -1;
        (v[e] = n), h.push(e);
        for (; ++i < a; ) E[r[i]] = e;
      }),
      (o.getLanguage = N);
    var s = r.inherit,
      l = {}.hasOwnProperty,
      c = [].concat,
      d = 'hljs-',
      u = 'case_insensitive',
      p = 'cached_variants',
      m = ' ',
      g = '|',
      f = 'element',
      _ = 'text',
      b = 'span',
      h = [],
      v = {},
      E = {};
    function y(e, t) {
      var n,
        r,
        i,
        o,
        s = t || {},
        l = s.subset || h,
        c = s.prefix,
        u = l.length,
        p = -1;
      if ((null == c && (c = d), 'string' != typeof e))
        throw a('Expected `string` for value, got `%s`', e);
      for (r = C({}), n = C({}); ++p < u; )
        N((o = l[p])) &&
          (((i = C(S(o, e, !1, c))).language = o),
          i.relevance > r.relevance && (r = i),
          i.relevance > n.relevance && ((r = n), (n = i)));
      return r.language && (n.secondBest = r), n;
    }
    function S(e, t, n, r, i) {
      var o,
        d,
        h,
        E,
        C,
        w,
        M,
        D,
        O = {},
        A = [],
        I = '',
        R = 0;
      if ('string' != typeof e)
        throw a('Expected `string` for name, got `%s`', e);
      if ('string' != typeof t)
        throw a('Expected `string` for value, got `%s`', t);
      if (((o = N(e)), (h = d = i || o), (E = D = []), !o))
        throw a('Unknown language: `%s` is not registered', e);
      !(function(e) {
        function t(t, r) {
          return new RegExp(n(t), 'm' + (e[u] ? 'i' : '') + (r ? 'g' : ''));
        }
        function n(e) {
          return (e && e.source) || e;
        }
        !(function r(a, i) {
          var o = {};
          var l;
          if (a.compiled) return;
          a.compiled = !0;
          a.keywords = a.keywords || a.beginKeywords;
          a.keywords &&
            ('string' == typeof a.keywords
              ? d('keyword', a.keywords)
              : Object.keys(a.keywords).forEach(function(e) {
                  d(e, a.keywords[e]);
                }),
            (a.keywords = o));
          a.lexemesRe = t(a.lexemes || /\w+/, !0);
          i &&
            (a.beginKeywords &&
              (a.begin = '\\b(' + a.beginKeywords.split(m).join(g) + ')\\b'),
            a.begin || (a.begin = /\B|\b/),
            (a.beginRe = t(a.begin)),
            a.end || a.endsWithParent || (a.end = /\B|\b/),
            a.end && (a.endRe = t(a.end)),
            (a.terminatorEnd = n(a.end) || ''),
            a.endsWithParent &&
              i.terminatorEnd &&
              (a.terminatorEnd += (a.end ? g : '') + i.terminatorEnd));
          a.illegal && (a.illegalRe = t(a.illegal));
          void 0 === a.relevance && (a.relevance = 1);
          a.contains || (a.contains = []);
          a.contains = c.apply(
            [],
            a.contains.map(function(e) {
              return (function(e) {
                var t, n, r, a;
                if (e.variants && !e[p]) {
                  for (r = e.variants, t = r.length, n = -1, a = []; ++n < t; )
                    a[n] = s(e, { variants: null }, r[n]);
                  e[p] = a;
                }
                return e[p] || (e.endsWithParent ? [s(e)] : [e]);
              })('self' === e ? a : e);
            })
          );
          a.contains.forEach(function(e) {
            r(e, a);
          });
          a.starts && r(a.starts, i);
          l = a.contains
            .map(function(e) {
              return e.beginKeywords ? '\\.?(' + e.begin + ')\\.?' : e.begin;
            })
            .concat([a.terminatorEnd, a.illegal])
            .map(n)
            .filter(Boolean);
          a.terminators = l.length ? t(l.join(g), !0) : { exec: T };
          function d(t, n) {
            var r, a, i, s;
            for (
              e[u] && (n = n.toLowerCase()),
                r = n.split(m),
                s = r.length,
                i = -1;
              ++i < s;

            )
              (a = r[i].split(g)), (o[a[0]] = [t, a[1] ? Number(a[1]) : 1]);
          }
        })(e);
      })(o);
      try {
        for (d.terminators.lastIndex = 0, C = 0, M = d.terminators.exec(t); M; )
          (w = k(t.substring(C, M.index), M[0])),
            (C = M.index + w),
            (d.terminators.lastIndex = C),
            (M = d.terminators.exec(t));
        for (k(t.substr(C)), h = d; h.parent; )
          h.className && q(), (h = h.parent);
        return { relevance: R, value: E, language: e, top: d };
      } catch (e) {
        if (-1 === e.message.indexOf('Illegal')) throw e;
        return { relevance: 0, value: B(t, []) };
      }
      function k(e, t) {
        var r, i, o;
        if (((I += e), void 0 === t)) return F(P(), E), 0;
        if (
          (r = (function(e, t) {
            var n = t.contains,
              r = n.length,
              a = -1;
            for (; ++a < r; ) if (x(n[a].beginRe, e)) return n[a];
          })(t, d))
        )
          return F(P(), E), L(r, t), r.returnBegin ? 0 : t.length;
        if (
          (i = (function e(t, n) {
            if (x(t.endRe, n)) {
              for (; t.endsParent && t.parent; ) t = t.parent;
              return t;
            }
            if (t.endsWithParent) return e(t.parent, n);
          })(d, t))
        ) {
          (o = d).returnEnd || o.excludeEnd || (I += t), F(P(), E);
          do {
            d.className && q(), (R += d.relevance), (d = d.parent);
          } while (d !== i.parent);
          return (
            o.excludeEnd && B(t, E),
            (I = ''),
            i.starts && L(i.starts, ''),
            o.returnEnd ? 0 : t.length
          );
        }
        if (
          (function(e, t) {
            return !n && x(t.illegalRe, e);
          })(t, d)
        )
          throw a(
            'Illegal lexeme "%s" for mode "%s"',
            t,
            d.className || '<unnamed>'
          );
        return (I += t), t.length || 1;
      }
      function L(e, t) {
        var n;
        e.className && (n = U(e.className, [])),
          e.returnBegin
            ? (I = '')
            : e.excludeBegin
            ? (B(t, E), (I = ''))
            : (I = t),
          n && (E.push(n), A.push(E), (E = n.children)),
          (d = Object.create(e, { parent: { value: d } }));
      }
      function P() {
        var e = d.subLanguage
          ? (function() {
              var e,
                t = 'string' == typeof d.subLanguage;
              if (t && !v[d.subLanguage]) return B(I, []);
              e = t
                ? S(d.subLanguage, I, !0, r, O[d.subLanguage])
                : y(I, {
                    subset: d.subLanguage.length ? d.subLanguage : void 0,
                    prefix: r
                  });
              d.relevance > 0 && (R += e.relevance);
              t && (O[d.subLanguage] = e.top);
              return [U(e.language, e.value, !0)];
            })()
          : (function() {
              var e,
                t,
                n,
                r,
                a = [];
              if (!d.keywords) return B(I, a);
              (e = 0), (d.lexemesRe.lastIndex = 0), (t = d.lexemesRe.exec(I));
              for (; t; )
                B(I.substring(e, t.index), a),
                  (r = G(d, t))
                    ? ((R += r[1]),
                      (n = U(r[0], [])),
                      a.push(n),
                      B(t[0], n.children))
                    : B(t[0], a),
                  (e = d.lexemesRe.lastIndex),
                  (t = d.lexemesRe.exec(I));
              return B(I.substr(e), a), a;
            })();
        return (I = ''), e;
      }
      function F(e, t) {
        for (var n, r = e.length, a = -1; ++a < r; )
          (n = e[a]).type === _ ? B(n.value, t) : t.push(n);
      }
      function B(e, t) {
        var n;
        return (
          e &&
            ((n = t[t.length - 1]) && n.type === _
              ? (n.value += e)
              : t.push(
                  (function(e) {
                    return { type: _, value: e };
                  })(e)
                )),
          t
        );
      }
      function U(e, t, n) {
        return {
          type: f,
          tagName: b,
          properties: { className: [(n ? '' : r) + e] },
          children: t
        };
      }
      function G(e, t) {
        var n = t[0];
        return (
          o[u] && (n = n.toLowerCase()), l.call(e.keywords, n) && e.keywords[n]
        );
      }
      function q() {
        E = A.pop() || D;
      }
    }
    function C(e) {
      return {
        relevance: e.relevance || 0,
        language: e.language || null,
        value: e.value || []
      };
    }
    function x(e, t) {
      var n = e && e.exec(t);
      return n && 0 === n.index;
    }
    function T() {
      return null;
    }
    function N(e) {
      return (e = e.toLowerCase()), v[e] || v[E[e]];
    }
  },
  function(e, t, n) {
    !(function(e) {
      ('object' == typeof window && window) ||
        ('object' == typeof self && self);
      (function(e) {
        var t = [],
          n = Object.keys,
          r = {},
          a = {},
          i = /^(no-?highlight|plain|text)$/i,
          o = /\blang(?:uage)?-([\w-]+)\b/i,
          s = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
          l = '</span>',
          c = {
            classPrefix: 'hljs-',
            tabReplace: null,
            useBR: !1,
            languages: void 0
          };
        function d(e) {
          return e
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        }
        function u(e) {
          return e.nodeName.toLowerCase();
        }
        function p(e, t) {
          var n = e && e.exec(t);
          return n && 0 === n.index;
        }
        function m(e) {
          return i.test(e);
        }
        function g(e) {
          var t,
            n = {},
            r = Array.prototype.slice.call(arguments, 1);
          for (t in e) n[t] = e[t];
          return (
            r.forEach(function(e) {
              for (t in e) n[t] = e[t];
            }),
            n
          );
        }
        function f(e) {
          var t = [];
          return (
            (function e(n, r) {
              for (var a = n.firstChild; a; a = a.nextSibling)
                3 === a.nodeType
                  ? (r += a.nodeValue.length)
                  : 1 === a.nodeType &&
                    (t.push({ event: 'start', offset: r, node: a }),
                    (r = e(a, r)),
                    u(a).match(/br|hr|img|input/) ||
                      t.push({ event: 'stop', offset: r, node: a }));
              return r;
            })(e, 0),
            t
          );
        }
        function _(e) {
          function t(e) {
            return (e && e.source) || e;
          }
          function r(n, r) {
            return new RegExp(
              t(n),
              'm' + (e.case_insensitive ? 'i' : '') + (r ? 'g' : '')
            );
          }
          !(function a(i, o) {
            if (i.compiled) return;
            i.compiled = !0;
            i.keywords = i.keywords || i.beginKeywords;
            if (i.keywords) {
              var s = {},
                l = function(t, n) {
                  e.case_insensitive && (n = n.toLowerCase()),
                    n.split(' ').forEach(function(e) {
                      var n = e.split('|');
                      s[n[0]] = [t, n[1] ? Number(n[1]) : 1];
                    });
                };
              'string' == typeof i.keywords
                ? l('keyword', i.keywords)
                : n(i.keywords).forEach(function(e) {
                    l(e, i.keywords[e]);
                  }),
                (i.keywords = s);
            }
            i.lexemesRe = r(i.lexemes || /\w+/, !0);
            o &&
              (i.beginKeywords &&
                (i.begin =
                  '\\b(' + i.beginKeywords.split(' ').join('|') + ')\\b'),
              i.begin || (i.begin = /\B|\b/),
              (i.beginRe = r(i.begin)),
              i.end || i.endsWithParent || (i.end = /\B|\b/),
              i.end && (i.endRe = r(i.end)),
              (i.terminator_end = t(i.end) || ''),
              i.endsWithParent &&
                o.terminator_end &&
                (i.terminator_end += (i.end ? '|' : '') + o.terminator_end));
            i.illegal && (i.illegalRe = r(i.illegal));
            null == i.relevance && (i.relevance = 1);
            i.contains || (i.contains = []);
            i.contains = Array.prototype.concat.apply(
              [],
              i.contains.map(function(e) {
                return (function(e) {
                  e.variants &&
                    !e.cached_variants &&
                    (e.cached_variants = e.variants.map(function(t) {
                      return g(e, { variants: null }, t);
                    }));
                  return (
                    e.cached_variants || (e.endsWithParent && [g(e)]) || [e]
                  );
                })('self' === e ? i : e);
              })
            );
            i.contains.forEach(function(e) {
              a(e, i);
            });
            i.starts && a(i.starts, o);
            var c = i.contains
              .map(function(e) {
                return e.beginKeywords ? '\\.?(' + e.begin + ')\\.?' : e.begin;
              })
              .concat([i.terminator_end, i.illegal])
              .map(t)
              .filter(Boolean);
            i.terminators = c.length
              ? r(c.join('|'), !0)
              : {
                  exec: function() {
                    return null;
                  }
                };
          })(e);
        }
        function b(e, t, n, a) {
          function i(e, t) {
            var n = g.case_insensitive ? t[0].toLowerCase() : t[0];
            return e.keywords.hasOwnProperty(n) && e.keywords[n];
          }
          function o(e, t, n, r) {
            var a = r ? '' : c.classPrefix,
              i = '<span class="' + a,
              o = n ? '' : l;
            return (i += e + '">') + t + o;
          }
          function s() {
            (y +=
              null != v.subLanguage
                ? (function() {
                    var e = 'string' == typeof v.subLanguage;
                    if (e && !r[v.subLanguage]) return d(C);
                    var t = e
                      ? b(v.subLanguage, C, !0, E[v.subLanguage])
                      : h(C, v.subLanguage.length ? v.subLanguage : void 0);
                    v.relevance > 0 && (x += t.relevance);
                    e && (E[v.subLanguage] = t.top);
                    return o(t.language, t.value, !1, !0);
                  })()
                : (function() {
                    var e, t, n, r;
                    if (!v.keywords) return d(C);
                    (r = ''),
                      (t = 0),
                      (v.lexemesRe.lastIndex = 0),
                      (n = v.lexemesRe.exec(C));
                    for (; n; )
                      (r += d(C.substring(t, n.index))),
                        (e = i(v, n))
                          ? ((x += e[1]), (r += o(e[0], d(n[0]))))
                          : (r += d(n[0])),
                        (t = v.lexemesRe.lastIndex),
                        (n = v.lexemesRe.exec(C));
                    return r + d(C.substr(t));
                  })()),
              (C = '');
          }
          function u(e) {
            (y += e.className ? o(e.className, '', !0) : ''),
              (v = Object.create(e, { parent: { value: v } }));
          }
          function m(e, t) {
            if (((C += e), null == t)) return s(), 0;
            var r = (function(e, t) {
              var n, r;
              for (n = 0, r = t.contains.length; n < r; n++)
                if (p(t.contains[n].beginRe, e)) return t.contains[n];
            })(t, v);
            if (r)
              return (
                r.skip
                  ? (C += t)
                  : (r.excludeBegin && (C += t),
                    s(),
                    r.returnBegin || r.excludeBegin || (C = t)),
                u(r),
                r.returnBegin ? 0 : t.length
              );
            var a = (function e(t, n) {
              if (p(t.endRe, n)) {
                for (; t.endsParent && t.parent; ) t = t.parent;
                return t;
              }
              if (t.endsWithParent) return e(t.parent, n);
            })(v, t);
            if (a) {
              var i = v;
              i.skip
                ? (C += t)
                : (i.returnEnd || i.excludeEnd || (C += t),
                  s(),
                  i.excludeEnd && (C = t));
              do {
                v.className && (y += l),
                  v.skip || (x += v.relevance),
                  (v = v.parent);
              } while (v !== a.parent);
              return a.starts && u(a.starts), i.returnEnd ? 0 : t.length;
            }
            if (
              (function(e, t) {
                return !n && p(t.illegalRe, e);
              })(t, v)
            )
              throw new Error(
                'Illegal lexeme "' +
                  t +
                  '" for mode "' +
                  (v.className || '<unnamed>') +
                  '"'
              );
            return (C += t), t.length || 1;
          }
          var g = S(e);
          if (!g) throw new Error('Unknown language: "' + e + '"');
          _(g);
          var f,
            v = a || g,
            E = {},
            y = '';
          for (f = v; f !== g; f = f.parent)
            f.className && (y = o(f.className, '', !0) + y);
          var C = '',
            x = 0;
          try {
            for (
              var T, N, w = 0;
              (v.terminators.lastIndex = w), (T = v.terminators.exec(t));

            )
              (N = m(t.substring(w, T.index), T[0])), (w = T.index + N);
            for (m(t.substr(w)), f = v; f.parent; f = f.parent)
              f.className && (y += l);
            return { relevance: x, value: y, language: e, top: v };
          } catch (e) {
            if (e.message && -1 !== e.message.indexOf('Illegal'))
              return { relevance: 0, value: d(t) };
            throw e;
          }
        }
        function h(e, t) {
          t = t || c.languages || n(r);
          var a = { relevance: 0, value: d(e) },
            i = a;
          return (
            t.filter(S).forEach(function(t) {
              var n = b(t, e, !1);
              (n.language = t),
                n.relevance > i.relevance && (i = n),
                n.relevance > a.relevance && ((i = a), (a = n));
            }),
            i.language && (a.second_best = i),
            a
          );
        }
        function v(e) {
          return c.tabReplace || c.useBR
            ? e.replace(s, function(e, t) {
                return c.useBR && '\n' === e
                  ? '<br>'
                  : c.tabReplace
                  ? t.replace(/\t/g, c.tabReplace)
                  : '';
              })
            : e;
        }
        function E(e) {
          var n,
            r,
            i,
            s,
            l,
            p = (function(e) {
              var t,
                n,
                r,
                a,
                i = e.className + ' ';
              if (
                ((i += e.parentNode ? e.parentNode.className : ''),
                (n = o.exec(i)))
              )
                return S(n[1]) ? n[1] : 'no-highlight';
              for (i = i.split(/\s+/), t = 0, r = i.length; t < r; t++)
                if (m((a = i[t])) || S(a)) return a;
            })(e);
          m(p) ||
            (c.useBR
              ? ((n = document.createElementNS(
                  'http://www.w3.org/1999/xhtml',
                  'div'
                )).innerHTML = e.innerHTML
                  .replace(/\n/g, '')
                  .replace(/<br[ \/]*>/g, '\n'))
              : (n = e),
            (l = n.textContent),
            (i = p ? b(p, l, !0) : h(l)),
            (r = f(n)).length &&
              (((s = document.createElementNS(
                'http://www.w3.org/1999/xhtml',
                'div'
              )).innerHTML = i.value),
              (i.value = (function(e, n, r) {
                var a = 0,
                  i = '',
                  o = [];
                function s() {
                  return e.length && n.length
                    ? e[0].offset !== n[0].offset
                      ? e[0].offset < n[0].offset
                        ? e
                        : n
                      : 'start' === n[0].event
                      ? e
                      : n
                    : e.length
                    ? e
                    : n;
                }
                function l(e) {
                  i +=
                    '<' +
                    u(e) +
                    t.map
                      .call(e.attributes, function(e) {
                        return (
                          ' ' +
                          e.nodeName +
                          '="' +
                          d(e.value).replace('"', '&quot;') +
                          '"'
                        );
                      })
                      .join('') +
                    '>';
                }
                function c(e) {
                  i += '</' + u(e) + '>';
                }
                function p(e) {
                  ('start' === e.event ? l : c)(e.node);
                }
                for (; e.length || n.length; ) {
                  var m = s();
                  if (
                    ((i += d(r.substring(a, m[0].offset))),
                    (a = m[0].offset),
                    m === e)
                  ) {
                    o.reverse().forEach(c);
                    do {
                      p(m.splice(0, 1)[0]), (m = s());
                    } while (m === e && m.length && m[0].offset === a);
                    o.reverse().forEach(l);
                  } else
                    'start' === m[0].event ? o.push(m[0].node) : o.pop(),
                      p(m.splice(0, 1)[0]);
                }
                return i + d(r.substr(a));
              })(r, f(s), l))),
            (i.value = v(i.value)),
            (e.innerHTML = i.value),
            (e.className = (function(e, t, n) {
              var r = t ? a[t] : n,
                i = [e.trim()];
              e.match(/\bhljs\b/) || i.push('hljs');
              -1 === e.indexOf(r) && i.push(r);
              return i.join(' ').trim();
            })(e.className, p, i.language)),
            (e.result = { language: i.language, re: i.relevance }),
            i.second_best &&
              (e.second_best = {
                language: i.second_best.language,
                re: i.second_best.relevance
              }));
        }
        function y() {
          if (!y.called) {
            y.called = !0;
            var e = document.querySelectorAll('pre code');
            t.forEach.call(e, E);
          }
        }
        function S(e) {
          return (e = (e || '').toLowerCase()), r[e] || r[a[e]];
        }
        (e.highlight = b),
          (e.highlightAuto = h),
          (e.fixMarkup = v),
          (e.highlightBlock = E),
          (e.configure = function(e) {
            c = g(c, e);
          }),
          (e.initHighlighting = y),
          (e.initHighlightingOnLoad = function() {
            addEventListener('DOMContentLoaded', y, !1),
              addEventListener('load', y, !1);
          }),
          (e.registerLanguage = function(t, n) {
            var i = (r[t] = n(e));
            i.aliases &&
              i.aliases.forEach(function(e) {
                a[e] = t;
              });
          }),
          (e.listLanguages = function() {
            return n(r);
          }),
          (e.getLanguage = S),
          (e.inherit = g),
          (e.IDENT_RE = '[a-zA-Z]\\w*'),
          (e.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*'),
          (e.NUMBER_RE = '\\b\\d+(\\.\\d+)?'),
          (e.C_NUMBER_RE =
            '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'),
          (e.BINARY_NUMBER_RE = '\\b(0b[01]+)'),
          (e.RE_STARTERS_RE =
            '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~'),
          (e.BACKSLASH_ESCAPE = { begin: '\\\\[\\s\\S]', relevance: 0 }),
          (e.APOS_STRING_MODE = {
            className: 'string',
            begin: "'",
            end: "'",
            illegal: '\\n',
            contains: [e.BACKSLASH_ESCAPE]
          }),
          (e.QUOTE_STRING_MODE = {
            className: 'string',
            begin: '"',
            end: '"',
            illegal: '\\n',
            contains: [e.BACKSLASH_ESCAPE]
          }),
          (e.PHRASAL_WORDS_MODE = {
            begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
          }),
          (e.COMMENT = function(t, n, r) {
            var a = e.inherit(
              { className: 'comment', begin: t, end: n, contains: [] },
              r || {}
            );
            return (
              a.contains.push(e.PHRASAL_WORDS_MODE),
              a.contains.push({
                className: 'doctag',
                begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
                relevance: 0
              }),
              a
            );
          }),
          (e.C_LINE_COMMENT_MODE = e.COMMENT('//', '$')),
          (e.C_BLOCK_COMMENT_MODE = e.COMMENT('/\\*', '\\*/')),
          (e.HASH_COMMENT_MODE = e.COMMENT('#', '$')),
          (e.NUMBER_MODE = {
            className: 'number',
            begin: e.NUMBER_RE,
            relevance: 0
          }),
          (e.C_NUMBER_MODE = {
            className: 'number',
            begin: e.C_NUMBER_RE,
            relevance: 0
          }),
          (e.BINARY_NUMBER_MODE = {
            className: 'number',
            begin: e.BINARY_NUMBER_RE,
            relevance: 0
          }),
          (e.CSS_NUMBER_MODE = {
            className: 'number',
            begin:
              e.NUMBER_RE +
              '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
            relevance: 0
          }),
          (e.REGEXP_MODE = {
            className: 'regexp',
            begin: /\//,
            end: /\/[gimuy]*/,
            illegal: /\n/,
            contains: [
              e.BACKSLASH_ESCAPE,
              {
                begin: /\[/,
                end: /\]/,
                relevance: 0,
                contains: [e.BACKSLASH_ESCAPE]
              }
            ]
          }),
          (e.TITLE_MODE = {
            className: 'title',
            begin: e.IDENT_RE,
            relevance: 0
          }),
          (e.UNDERSCORE_TITLE_MODE = {
            className: 'title',
            begin: e.UNDERSCORE_IDENT_RE,
            relevance: 0
          }),
          (e.METHOD_GUARD = {
            begin: '\\.\\s*' + e.UNDERSCORE_IDENT_RE,
            relevance: 0
          });
      })(t);
    })();
  },
  function(e, t, n) {
    'use strict';
    var r = n(218),
      a = i(Error);
    function i(e) {
      return (t.displayName = e.displayName || e.name), t;
      function t(t) {
        return t && (t = r.apply(null, arguments)), new e(t);
      }
    }
    (e.exports = a),
      (a.eval = i(EvalError)),
      (a.range = i(RangeError)),
      (a.reference = i(ReferenceError)),
      (a.syntax = i(SyntaxError)),
      (a.type = i(TypeError)),
      (a.uri = i(URIError)),
      (a.create = i);
  },
  function(e, t, n) {
    !(function() {
      var t;
      function n(e) {
        for (
          var t,
            n,
            r,
            a,
            i = 1,
            o = [].slice.call(arguments),
            s = 0,
            l = e.length,
            c = '',
            d = !1,
            u = !1,
            p = function() {
              return o[i++];
            },
            m = function() {
              for (var n = ''; /\d/.test(e[s]); ) (n += e[s++]), (t = e[s]);
              return n.length > 0 ? parseInt(n) : null;
            };
          s < l;
          ++s
        )
          if (((t = e[s]), d))
            switch (
              ((d = !1),
              '.' == t
                ? ((u = !1), (t = e[++s]))
                : '0' == t && '.' == e[s + 1]
                ? ((u = !0), (t = e[(s += 2)]))
                : (u = !0),
              (a = m()),
              t)
            ) {
              case 'b':
                c += parseInt(p(), 10).toString(2);
                break;
              case 'c':
                'string' == typeof (n = p()) || n instanceof String
                  ? (c += n)
                  : (c += String.fromCharCode(parseInt(n, 10)));
                break;
              case 'd':
                c += parseInt(p(), 10);
                break;
              case 'f':
                (r = String(parseFloat(p()).toFixed(a || 6))),
                  (c += u ? r : r.replace(/^0/, ''));
                break;
              case 'j':
                c += JSON.stringify(p());
                break;
              case 'o':
                c += '0' + parseInt(p(), 10).toString(8);
                break;
              case 's':
                c += p();
                break;
              case 'x':
                c += '0x' + parseInt(p(), 10).toString(16);
                break;
              case 'X':
                c +=
                  '0x' +
                  parseInt(p(), 10)
                    .toString(16)
                    .toUpperCase();
                break;
              default:
                c += t;
            }
          else '%' === t ? (d = !0) : (c += t);
        return c;
      }
      ((t = e.exports = n).format = n),
        (t.vsprintf = function(e, t) {
          return n.apply(null, [e].concat(t));
        }),
        'undefined' != typeof console &&
          'function' == typeof console.log &&
          (t.printf = function() {
            console.log(n.apply(null, arguments));
          });
    })();
  },
  function(e, t) {
    e.exports = function(e) {
      var t = '[A-Za-zА-Яа-яёЁ_][A-Za-zА-Яа-яёЁ_0-9]+',
        n =
          'далее возврат вызватьисключение выполнить для если и из или иначе иначеесли исключение каждого конецесли конецпопытки конеццикла не новый перейти перем по пока попытка прервать продолжить тогда цикл экспорт ',
        r = 'null истина ложь неопределено',
        a = e.inherit(e.NUMBER_MODE),
        i = {
          className: 'string',
          begin: '"|\\|',
          end: '"|$',
          contains: [{ begin: '""' }]
        },
        o = {
          begin: "'",
          end: "'",
          excludeBegin: !0,
          excludeEnd: !0,
          contains: [
            { className: 'number', begin: '\\d{4}([\\.\\\\/:-]?\\d{2}){0,5}' }
          ]
        },
        s = e.inherit(e.C_LINE_COMMENT_MODE);
      return {
        case_insensitive: !0,
        lexemes: t,
        keywords: {
          keyword: n,
          built_in:
            'разделительстраниц разделительстрок символтабуляции ansitooem oemtoansi ввестивидсубконто ввестиперечисление ввестипериод ввестиплансчетов выбранныйплансчетов датагод датамесяц датачисло заголовоксистемы значениевстроку значениеизстроки каталогиб каталогпользователя кодсимв конгода конецпериодаби конецрассчитанногопериодаби конецстандартногоинтервала конквартала конмесяца коннедели лог лог10 максимальноеколичествосубконто названиеинтерфейса названиенабораправ назначитьвид назначитьсчет найтиссылки началопериодаби началостандартногоинтервала начгода начквартала начмесяца начнедели номерднягода номерднянедели номернеделигода обработкаожидания основнойжурналрасчетов основнойплансчетов основнойязык очиститьокносообщений периодстр получитьвремята получитьдатута получитьдокументта получитьзначенияотбора получитьпозициюта получитьпустоезначение получитьта префиксавтонумерации пропись пустоезначение разм разобратьпозициюдокумента рассчитатьрегистрына рассчитатьрегистрыпо симв создатьобъект статусвозврата стрколичествострок сформироватьпозициюдокумента счетпокоду текущеевремя типзначения типзначениястр установитьтана установитьтапо фиксшаблон шаблон acos asin atan base64значение base64строка cos exp log log10 pow sin sqrt tan xmlзначение xmlстрока xmlтип xmlтипзнч активноеокно безопасныйрежим безопасныйрежимразделенияданных булево ввестидату ввестизначение ввестистроку ввестичисло возможностьчтенияxml вопрос восстановитьзначение врег выгрузитьжурналрегистрации выполнитьобработкуоповещения выполнитьпроверкуправдоступа вычислить год данныеформывзначение дата день деньгода деньнедели добавитьмесяц заблокироватьданныедляредактирования заблокироватьработупользователя завершитьработусистемы загрузитьвнешнююкомпоненту закрытьсправку записатьjson записатьxml записатьдатуjson записьжурналарегистрации заполнитьзначениясвойств запроситьразрешениепользователя запуститьприложение запуститьсистему зафиксироватьтранзакцию значениевданныеформы значениевстрокувнутр значениевфайл значениезаполнено значениеизстрокивнутр значениеизфайла изxmlтипа импортмоделиxdto имякомпьютера имяпользователя инициализироватьпредопределенныеданные информацияобошибке каталогбиблиотекимобильногоустройства каталогвременныхфайлов каталогдокументов каталогпрограммы кодироватьстроку кодлокализацииинформационнойбазы кодсимвола командасистемы конецгода конецдня конецквартала конецмесяца конецминуты конецнедели конецчаса конфигурациябазыданныхизмененадинамически конфигурацияизменена копироватьданныеформы копироватьфайл краткоепредставлениеошибки лев макс местноевремя месяц мин минута монопольныйрежим найти найтинедопустимыесимволыxml найтиокнопонавигационнойссылке найтипомеченныенаудаление найтипоссылкам найтифайлы началогода началодня началоквартала началомесяца началоминуты началонедели началочаса начатьзапросразрешенияпользователя начатьзапускприложения начатькопированиефайла начатьперемещениефайла начатьподключениевнешнейкомпоненты начатьподключениерасширенияработыскриптографией начатьподключениерасширенияработысфайлами начатьпоискфайлов начатьполучениекаталогавременныхфайлов начатьполучениекаталогадокументов начатьполучениерабочегокаталогаданныхпользователя начатьполучениефайлов начатьпомещениефайла начатьпомещениефайлов начатьсозданиедвоичныхданныхизфайла начатьсозданиекаталога начатьтранзакцию начатьудалениефайлов начатьустановкувнешнейкомпоненты начатьустановкурасширенияработыскриптографией начатьустановкурасширенияработысфайлами неделягода необходимостьзавершениясоединения номерсеансаинформационнойбазы номерсоединенияинформационнойбазы нрег нстр обновитьинтерфейс обновитьнумерациюобъектов обновитьповторноиспользуемыезначения обработкапрерыванияпользователя объединитьфайлы окр описаниеошибки оповестить оповеститьобизменении отключитьобработчикзапросанастроекклиенталицензирования отключитьобработчикожидания отключитьобработчикоповещения открытьзначение открытьиндекссправки открытьсодержаниесправки открытьсправку открытьформу открытьформумодально отменитьтранзакцию очиститьжурналрегистрации очиститьнастройкипользователя очиститьсообщения параметрыдоступа перейтипонавигационнойссылке переместитьфайл подключитьвнешнююкомпоненту подключитьобработчикзапросанастроекклиенталицензирования подключитьобработчикожидания подключитьобработчикоповещения подключитьрасширениеработыскриптографией подключитьрасширениеработысфайлами подробноепредставлениеошибки показатьвводдаты показатьвводзначения показатьвводстроки показатьвводчисла показатьвопрос показатьзначение показатьинформациюобошибке показатьнакарте показатьоповещениепользователя показатьпредупреждение полноеимяпользователя получитьcomобъект получитьxmlтип получитьадреспоместоположению получитьблокировкусеансов получитьвремязавершенияспящегосеанса получитьвремязасыпанияпассивногосеанса получитьвремяожиданияблокировкиданных получитьданныевыбора получитьдополнительныйпараметрклиенталицензирования получитьдопустимыекодылокализации получитьдопустимыечасовыепояса получитьзаголовокклиентскогоприложения получитьзаголовоксистемы получитьзначенияотборажурналарегистрации получитьидентификаторконфигурации получитьизвременногохранилища получитьимявременногофайла получитьимяклиенталицензирования получитьинформациюэкрановклиента получитьиспользованиежурналарегистрации получитьиспользованиесобытияжурналарегистрации получитькраткийзаголовокприложения получитьмакетоформления получитьмаскувсефайлы получитьмаскувсефайлыклиента получитьмаскувсефайлысервера получитьместоположениепоадресу получитьминимальнуюдлинупаролейпользователей получитьнавигационнуюссылку получитьнавигационнуюссылкуинформационнойбазы получитьобновлениеконфигурациибазыданных получитьобновлениепредопределенныхданныхинформационнойбазы получитьобщиймакет получитьобщуюформу получитьокна получитьоперативнуюотметкувремени получитьотключениебезопасногорежима получитьпараметрыфункциональныхопцийинтерфейса получитьполноеимяпредопределенногозначения получитьпредставлениянавигационныхссылок получитьпроверкусложностипаролейпользователей получитьразделительпути получитьразделительпутиклиента получитьразделительпутисервера получитьсеансыинформационнойбазы получитьскоростьклиентскогосоединения получитьсоединенияинформационнойбазы получитьсообщенияпользователю получитьсоответствиеобъектаиформы получитьсоставстандартногоинтерфейсаodata получитьструктурухранениябазыданных получитьтекущийсеансинформационнойбазы получитьфайл получитьфайлы получитьформу получитьфункциональнуюопцию получитьфункциональнуюопциюинтерфейса получитьчасовойпоясинформационнойбазы пользователиос поместитьвовременноехранилище поместитьфайл поместитьфайлы прав праводоступа предопределенноезначение представлениекодалокализации представлениепериода представлениеправа представлениеприложения представлениесобытияжурналарегистрации представлениечасовогопояса предупреждение прекратитьработусистемы привилегированныйрежим продолжитьвызов прочитатьjson прочитатьxml прочитатьдатуjson пустаястрока рабочийкаталогданныхпользователя разблокироватьданныедляредактирования разделитьфайл разорватьсоединениесвнешнимисточникомданных раскодироватьстроку рольдоступна секунда сигнал символ скопироватьжурналрегистрации смещениелетнеговремени смещениестандартноговремени соединитьбуферыдвоичныхданных создатькаталог создатьфабрикуxdto сокрл сокрлп сокрп сообщить состояние сохранитьзначение сохранитьнастройкипользователя сред стрдлина стрзаканчиваетсяна стрзаменить стрнайти стрначинаетсяс строка строкасоединенияинформационнойбазы стрполучитьстроку стрразделить стрсоединить стрсравнить стрчисловхождений стрчислострок стршаблон текущаядата текущаядатасеанса текущаяуниверсальнаядата текущаяуниверсальнаядатавмиллисекундах текущийвариантинтерфейсаклиентскогоприложения текущийвариантосновногошрифтаклиентскогоприложения текущийкодлокализации текущийрежимзапуска текущийязык текущийязыксистемы тип типзнч транзакцияактивна трег удалитьданныеинформационнойбазы удалитьизвременногохранилища удалитьобъекты удалитьфайлы универсальноевремя установитьбезопасныйрежим установитьбезопасныйрежимразделенияданных установитьблокировкусеансов установитьвнешнююкомпоненту установитьвремязавершенияспящегосеанса установитьвремязасыпанияпассивногосеанса установитьвремяожиданияблокировкиданных установитьзаголовокклиентскогоприложения установитьзаголовоксистемы установитьиспользованиежурналарегистрации установитьиспользованиесобытияжурналарегистрации установитькраткийзаголовокприложения установитьминимальнуюдлинупаролейпользователей установитьмонопольныйрежим установитьнастройкиклиенталицензирования установитьобновлениепредопределенныхданныхинформационнойбазы установитьотключениебезопасногорежима установитьпараметрыфункциональныхопцийинтерфейса установитьпривилегированныйрежим установитьпроверкусложностипаролейпользователей установитьрасширениеработыскриптографией установитьрасширениеработысфайлами установитьсоединениесвнешнимисточникомданных установитьсоответствиеобъектаиформы установитьсоставстандартногоинтерфейсаodata установитьчасовойпоясинформационнойбазы установитьчасовойпояссеанса формат цел час часовойпояс часовойпояссеанса число числопрописью этоадресвременногохранилища wsссылки библиотекакартинок библиотекамакетовоформлениякомпоновкиданных библиотекастилей бизнеспроцессы внешниеисточникиданных внешниеобработки внешниеотчеты встроенныепокупки главныйинтерфейс главныйстиль документы доставляемыеуведомления журналыдокументов задачи информацияобинтернетсоединении использованиерабочейдаты историяработыпользователя константы критерииотбора метаданные обработки отображениерекламы отправкадоставляемыхуведомлений отчеты панельзадачос параметрзапуска параметрысеанса перечисления планывидоврасчета планывидовхарактеристик планыобмена планысчетов полнотекстовыйпоиск пользователиинформационнойбазы последовательности проверкавстроенныхпокупок рабочаядата расширенияконфигурации регистрыбухгалтерии регистрынакопления регистрырасчета регистрысведений регламентныезадания сериализаторxdto справочники средствагеопозиционирования средствакриптографии средствамультимедиа средстваотображениярекламы средствапочты средствателефонии фабрикаxdto файловыепотоки фоновыезадания хранилищанастроек хранилищевариантовотчетов хранилищенастроекданныхформ хранилищеобщихнастроек хранилищепользовательскихнастроекдинамическихсписков хранилищепользовательскихнастроекотчетов хранилищесистемныхнастроек ',
          class:
            'webцвета windowsцвета windowsшрифты библиотекакартинок рамкистиля символы цветастиля шрифтыстиля автоматическоесохранениеданныхформывнастройках автонумерациявформе автораздвижениесерий анимациядиаграммы вариантвыравниванияэлементовизаголовков вариантуправлениявысотойтаблицы вертикальнаяпрокруткаформы вертикальноеположение вертикальноеположениеэлемента видгруппыформы виддекорацииформы виддополненияэлементаформы видизмененияданных видкнопкиформы видпереключателя видподписейкдиаграмме видполяформы видфлажка влияниеразмеранапузырекдиаграммы горизонтальноеположение горизонтальноеположениеэлемента группировкаколонок группировкаподчиненныхэлементовформы группыиэлементы действиеперетаскивания дополнительныйрежимотображения допустимыедействияперетаскивания интервалмеждуэлементамиформы использованиевывода использованиеполосыпрокрутки используемоезначениеточкибиржевойдиаграммы историявыборапривводе источникзначенийоситочекдиаграммы источникзначенияразмерапузырькадиаграммы категориягруппыкоманд максимумсерий начальноеотображениедерева начальноеотображениесписка обновлениетекстаредактирования ориентациядендрограммы ориентациядиаграммы ориентацияметокдиаграммы ориентацияметоксводнойдиаграммы ориентацияэлементаформы отображениевдиаграмме отображениевлегендедиаграммы отображениегруппыкнопок отображениезаголовкашкалыдиаграммы отображениезначенийсводнойдиаграммы отображениезначенияизмерительнойдиаграммы отображениеинтерваладиаграммыганта отображениекнопки отображениекнопкивыбора отображениеобсужденийформы отображениеобычнойгруппы отображениеотрицательныхзначенийпузырьковойдиаграммы отображениепанелипоиска отображениеподсказки отображениепредупрежденияприредактировании отображениеразметкиполосырегулирования отображениестраницформы отображениетаблицы отображениетекстазначениядиаграммыганта отображениеуправленияобычнойгруппы отображениефигурыкнопки палитрацветовдиаграммы поведениеобычнойгруппы поддержкамасштабадендрограммы поддержкамасштабадиаграммыганта поддержкамасштабасводнойдиаграммы поисквтаблицепривводе положениезаголовкаэлементаформы положениекартинкикнопкиформы положениекартинкиэлементаграфическойсхемы положениекоманднойпанелиформы положениекоманднойпанелиэлементаформы положениеопорнойточкиотрисовки положениеподписейкдиаграмме положениеподписейшкалызначенийизмерительнойдиаграммы положениесостоянияпросмотра положениестрокипоиска положениетекстасоединительнойлинии положениеуправленияпоиском положениешкалывремени порядокотображенияточекгоризонтальнойгистограммы порядоксерийвлегендедиаграммы размеркартинки расположениезаголовкашкалыдиаграммы растягиваниеповертикалидиаграммыганта режимавтоотображениясостояния режимвводастроктаблицы режимвыборанезаполненного режимвыделениядаты режимвыделениястрокитаблицы режимвыделениятаблицы режимизмененияразмера режимизменениясвязанногозначения режимиспользованиядиалогапечати режимиспользованияпараметракоманды режиммасштабированияпросмотра режимосновногоокнаклиентскогоприложения режимоткрытияокнаформы режимотображениявыделения режимотображениягеографическойсхемы режимотображениязначенийсерии режимотрисовкисеткиграфическойсхемы режимполупрозрачностидиаграммы режимпробеловдиаграммы режимразмещениянастранице режимредактированияколонки режимсглаживаниядиаграммы режимсглаживанияиндикатора режимсписказадач сквозноевыравнивание сохранениеданныхформывнастройках способзаполнениятекстазаголовкашкалыдиаграммы способопределенияограничивающегозначениядиаграммы стандартнаягруппакоманд стандартноеоформление статусоповещенияпользователя стильстрелки типаппроксимациилиниитрендадиаграммы типдиаграммы типединицышкалывремени типимпортасерийслоягеографическойсхемы типлиниигеографическойсхемы типлиниидиаграммы типмаркерагеографическойсхемы типмаркерадиаграммы типобластиоформления типорганизацииисточникаданныхгеографическойсхемы типотображениясериислоягеографическойсхемы типотображенияточечногообъектагеографическойсхемы типотображенияшкалыэлементалегендыгеографическойсхемы типпоискаобъектовгеографическойсхемы типпроекциигеографическойсхемы типразмещенияизмерений типразмещенияреквизитовизмерений типрамкиэлементауправления типсводнойдиаграммы типсвязидиаграммыганта типсоединениязначенийпосериямдиаграммы типсоединенияточекдиаграммы типсоединительнойлинии типстороныэлементаграфическойсхемы типформыотчета типшкалырадарнойдиаграммы факторлиниитрендадиаграммы фигуракнопки фигурыграфическойсхемы фиксациявтаблице форматдняшкалывремени форматкартинки ширинаподчиненныхэлементовформы виддвижениябухгалтерии виддвижениянакопления видпериодарегистрарасчета видсчета видточкимаршрутабизнеспроцесса использованиеагрегатарегистранакопления использованиегруппиэлементов использованиережимапроведения использованиесреза периодичностьагрегатарегистранакопления режимавтовремя режимзаписидокумента режимпроведениядокумента авторегистрацияизменений допустимыйномерсообщения отправкаэлементаданных получениеэлементаданных использованиерасшифровкитабличногодокумента ориентациястраницы положениеитоговколоноксводнойтаблицы положениеитоговстроксводнойтаблицы положениетекстаотносительнокартинки расположениезаголовкагруппировкитабличногодокумента способчтениязначенийтабличногодокумента типдвустороннейпечати типзаполненияобластитабличногодокумента типкурсоровтабличногодокумента типлиниирисункатабличногодокумента типлинииячейкитабличногодокумента типнаправленияпереходатабличногодокумента типотображениявыделениятабличногодокумента типотображениялинийсводнойтаблицы типразмещениятекстатабличногодокумента типрисункатабличногодокумента типсмещениятабличногодокумента типузоратабличногодокумента типфайлатабличногодокумента точностьпечати чередованиерасположениястраниц отображениевремениэлементовпланировщика типфайлаформатированногодокумента обходрезультатазапроса типзаписизапроса видзаполнениярасшифровкипостроителяотчета типдобавленияпредставлений типизмеренияпостроителяотчета типразмещенияитогов доступкфайлу режимдиалогавыборафайла режимоткрытияфайла типизмеренияпостроителязапроса видданныханализа методкластеризации типединицыинтервалавременианализаданных типзаполнениятаблицырезультатаанализаданных типиспользованиячисловыхзначенийанализаданных типисточникаданныхпоискаассоциаций типколонкианализаданныхдереворешений типколонкианализаданныхкластеризация типколонкианализаданныхобщаястатистика типколонкианализаданныхпоискассоциаций типколонкианализаданныхпоискпоследовательностей типколонкимоделипрогноза типмерырасстоянияанализаданных типотсеченияправилассоциации типполяанализаданных типстандартизациианализаданных типупорядочиванияправилассоциациианализаданных типупорядочиванияшаблоновпоследовательностейанализаданных типупрощениядереварешений wsнаправлениепараметра вариантxpathxs вариантзаписидатыjson вариантпростоготипаxs видгруппымоделиxs видфасетаxdto действиепостроителяdom завершенностьпростоготипаxs завершенностьсоставноготипаxs завершенностьсхемыxs запрещенныеподстановкиxs исключениягруппподстановкиxs категорияиспользованияатрибутаxs категорияограниченияидентичностиxs категорияограниченияпространствименxs методнаследованияxs модельсодержимогоxs назначениетипаxml недопустимыеподстановкиxs обработкапробельныхсимволовxs обработкасодержимогоxs ограничениезначенияxs параметрыотбораузловdom переносстрокjson позициявдокументеdom пробельныесимволыxml типатрибутаxml типзначенияjson типканоническогоxml типкомпонентыxs типпроверкиxml типрезультатаdomxpath типузлаdom типузлаxml формаxml формапредставленияxs форматдатыjson экранированиесимволовjson видсравнениякомпоновкиданных действиеобработкирасшифровкикомпоновкиданных направлениесортировкикомпоновкиданных расположениевложенныхэлементоврезультатакомпоновкиданных расположениеитоговкомпоновкиданных расположениегруппировкикомпоновкиданных расположениеполейгруппировкикомпоновкиданных расположениеполякомпоновкиданных расположениереквизитовкомпоновкиданных расположениересурсовкомпоновкиданных типбухгалтерскогоостаткакомпоновкиданных типвыводатекстакомпоновкиданных типгруппировкикомпоновкиданных типгруппыэлементовотборакомпоновкиданных типдополненияпериодакомпоновкиданных типзаголовкаполейкомпоновкиданных типмакетагруппировкикомпоновкиданных типмакетаобластикомпоновкиданных типостаткакомпоновкиданных типпериодакомпоновкиданных типразмещениятекстакомпоновкиданных типсвязинаборовданныхкомпоновкиданных типэлементарезультатакомпоновкиданных расположениелегендыдиаграммыкомпоновкиданных типпримененияотборакомпоновкиданных режимотображенияэлементанастройкикомпоновкиданных режимотображениянастроеккомпоновкиданных состояниеэлементанастройкикомпоновкиданных способвосстановлениянастроеккомпоновкиданных режимкомпоновкирезультата использованиепараметракомпоновкиданных автопозицияресурсовкомпоновкиданных вариантиспользованиягруппировкикомпоновкиданных расположениересурсоввдиаграммекомпоновкиданных фиксациякомпоновкиданных использованиеусловногооформлениякомпоновкиданных важностьинтернетпочтовогосообщения обработкатекстаинтернетпочтовогосообщения способкодированияинтернетпочтовоговложения способкодированиянеasciiсимволовинтернетпочтовогосообщения типтекстапочтовогосообщения протоколинтернетпочты статусразборапочтовогосообщения режимтранзакциизаписижурналарегистрации статустранзакциизаписижурналарегистрации уровеньжурналарегистрации расположениехранилищасертификатовкриптографии режимвключениясертификатовкриптографии режимпроверкисертификатакриптографии типхранилищасертификатовкриптографии кодировкаименфайловвzipфайле методсжатияzip методшифрованияzip режимвосстановленияпутейфайловzip режимобработкиподкаталоговzip режимсохраненияпутейzip уровеньсжатияzip звуковоеоповещение направлениепереходакстроке позициявпотоке порядокбайтов режимблокировкиданных режимуправленияблокировкойданных сервисвстроенныхпокупок состояниефоновогозадания типподписчикадоставляемыхуведомлений уровеньиспользованиязащищенногосоединенияftp направлениепорядкасхемызапроса типдополненияпериодамисхемызапроса типконтрольнойточкисхемызапроса типобъединениясхемызапроса типпараметрадоступнойтаблицысхемызапроса типсоединениясхемызапроса httpметод автоиспользованиеобщегореквизита автопрефиксномеразадачи вариантвстроенногоязыка видиерархии видрегистранакопления видтаблицывнешнегоисточникаданных записьдвиженийприпроведении заполнениепоследовательностей индексирование использованиебазыпланавидоврасчета использованиебыстроговыбора использованиеобщегореквизита использованиеподчинения использованиеполнотекстовогопоиска использованиеразделяемыхданныхобщегореквизита использованиереквизита назначениеиспользованияприложения назначениерасширенияконфигурации направлениепередачи обновлениепредопределенныхданных оперативноепроведение основноепредставлениевидарасчета основноепредставлениевидахарактеристики основноепредставлениезадачи основноепредставлениепланаобмена основноепредставлениесправочника основноепредставлениесчета перемещениеграницыприпроведении периодичностьномерабизнеспроцесса периодичностьномерадокумента периодичностьрегистрарасчета периодичностьрегистрасведений повторноеиспользованиевозвращаемыхзначений полнотекстовыйпоискпривводепостроке принадлежностьобъекта проведение разделениеаутентификацииобщегореквизита разделениеданныхобщегореквизита разделениерасширенийконфигурацииобщегореквизита режимавтонумерацииобъектов режимзаписирегистра режимиспользованиямодальности режимиспользованиясинхронныхвызововрасширенийплатформыивнешнихкомпонент режимповторногоиспользованиясеансов режимполученияданныхвыборапривводепостроке режимсовместимости режимсовместимостиинтерфейса режимуправленияблокировкойданныхпоумолчанию сериикодовпланавидовхарактеристик сериикодовпланасчетов сериикодовсправочника созданиепривводе способвыбора способпоискастрокипривводепостроке способредактирования типданныхтаблицывнешнегоисточникаданных типкодапланавидоврасчета типкодасправочника типмакета типномерабизнеспроцесса типномерадокумента типномеразадачи типформы удалениедвижений важностьпроблемыприменениярасширенияконфигурации вариантинтерфейсаклиентскогоприложения вариантмасштабаформклиентскогоприложения вариантосновногошрифтаклиентскогоприложения вариантстандартногопериода вариантстандартнойдатыначала видграницы видкартинки видотображенияполнотекстовогопоиска видрамки видсравнения видцвета видчисловогозначения видшрифта допустимаядлина допустимыйзнак использованиеbyteordermark использованиеметаданныхполнотекстовогопоиска источникрасширенийконфигурации клавиша кодвозвратадиалога кодировкаxbase кодировкатекста направлениепоиска направлениесортировки обновлениепредопределенныхданных обновлениеприизмененииданных отображениепанелиразделов проверказаполнения режимдиалогавопрос режимзапускаклиентскогоприложения режимокругления режимоткрытияформприложения режимполнотекстовогопоиска скоростьклиентскогосоединения состояниевнешнегоисточникаданных состояниеобновленияконфигурациибазыданных способвыборасертификатаwindows способкодированиястроки статуссообщения типвнешнейкомпоненты типплатформы типповеденияклавишиenter типэлементаинформацииовыполненииобновленияконфигурациибазыданных уровеньизоляциитранзакций хешфункция частидаты',
          type:
            'comобъект ftpсоединение httpзапрос httpсервисответ httpсоединение wsопределения wsпрокси xbase анализданных аннотацияxs блокировкаданных буфердвоичныхданных включениеxs выражениекомпоновкиданных генераторслучайныхчисел географическаясхема географическиекоординаты графическаясхема группамоделиxs данныерасшифровкикомпоновкиданных двоичныеданные дендрограмма диаграмма диаграммаганта диалогвыборафайла диалогвыборацвета диалогвыборашрифта диалограсписаниярегламентногозадания диалогредактированиястандартногопериода диапазон документdom документhtml документацияxs доставляемоеуведомление записьdom записьfastinfoset записьhtml записьjson записьxml записьzipфайла записьданных записьтекста записьузловdom запрос защищенноесоединениеopenssl значенияполейрасшифровкикомпоновкиданных извлечениетекста импортxs интернетпочта интернетпочтовоесообщение интернетпочтовыйпрофиль интернетпрокси интернетсоединение информациядляприложенияxs использованиеатрибутаxs использованиесобытияжурналарегистрации источникдоступныхнастроеккомпоновкиданных итераторузловdom картинка квалификаторыдаты квалификаторыдвоичныхданных квалификаторыстроки квалификаторычисла компоновщикмакетакомпоновкиданных компоновщикнастроеккомпоновкиданных конструктормакетаоформлениякомпоновкиданных конструкторнастроеккомпоновкиданных конструкторформатнойстроки линия макеткомпоновкиданных макетобластикомпоновкиданных макетоформлениякомпоновкиданных маскаxs менеджеркриптографии наборсхемxml настройкикомпоновкиданных настройкисериализацииjson обработкакартинок обработкарасшифровкикомпоновкиданных обходдереваdom объявлениеатрибутаxs объявлениенотацииxs объявлениеэлементаxs описаниеиспользованиясобытиядоступжурналарегистрации описаниеиспользованиясобытияотказвдоступежурналарегистрации описаниеобработкирасшифровкикомпоновкиданных описаниепередаваемогофайла описаниетипов определениегруппыатрибутовxs определениегруппымоделиxs определениеограниченияидентичностиxs определениепростоготипаxs определениесоставноготипаxs определениетипадокументаdom определенияxpathxs отборкомпоновкиданных пакетотображаемыхдокументов параметрвыбора параметркомпоновкиданных параметрызаписиjson параметрызаписиxml параметрычтенияxml переопределениеxs планировщик полеанализаданных полекомпоновкиданных построительdom построительзапроса построительотчета построительотчетаанализаданных построительсхемxml поток потоквпамяти почта почтовоесообщение преобразованиеxsl преобразованиекканоническомуxml процессорвыводарезультатакомпоновкиданныхвколлекциюзначений процессорвыводарезультатакомпоновкиданныхвтабличныйдокумент процессоркомпоновкиданных разыменовательпространствименdom рамка расписаниерегламентногозадания расширенноеимяxml результатчтенияданных своднаядиаграмма связьпараметравыбора связьпотипу связьпотипукомпоновкиданных сериализаторxdto сертификатклиентаwindows сертификатклиентафайл сертификаткриптографии сертификатыудостоверяющихцентровwindows сертификатыудостоверяющихцентровфайл сжатиеданных системнаяинформация сообщениепользователю сочетаниеклавиш сравнениезначений стандартнаядатаначала стандартныйпериод схемаxml схемакомпоновкиданных табличныйдокумент текстовыйдокумент тестируемоеприложение типданныхxml уникальныйидентификатор фабрикаxdto файл файловыйпоток фасетдлиныxs фасетколичестваразрядовдробнойчастиxs фасетмаксимальноговключающегозначенияxs фасетмаксимальногоисключающегозначенияxs фасетмаксимальнойдлиныxs фасетминимальноговключающегозначенияxs фасетминимальногоисключающегозначенияxs фасетминимальнойдлиныxs фасетобразцаxs фасетобщегоколичестваразрядовxs фасетперечисленияxs фасетпробельныхсимволовxs фильтрузловdom форматированнаястрока форматированныйдокумент фрагментxs хешированиеданных хранилищезначения цвет чтениеfastinfoset чтениеhtml чтениеjson чтениеxml чтениеzipфайла чтениеданных чтениетекста чтениеузловdom шрифт элементрезультатакомпоновкиданных comsafearray деревозначений массив соответствие списокзначений структура таблицазначений фиксированнаяструктура фиксированноесоответствие фиксированныймассив ',
          literal: r
        },
        contains: [
          {
            className: 'meta',
            lexemes: t,
            begin: '#|&',
            end: '$',
            keywords: {
              'meta-keyword':
                n +
                'загрузитьизфайла вебклиент вместо внешнеесоединение клиент конецобласти мобильноеприложениеклиент мобильноеприложениесервер наклиенте наклиентенасервере наклиентенасерверебезконтекста насервере насерверебезконтекста область перед после сервер толстыйклиентобычноеприложение толстыйклиентуправляемоеприложение тонкийклиент '
            },
            contains: [s]
          },
          {
            className: 'function',
            lexemes: t,
            variants: [
              {
                begin: 'процедура|функция',
                end: '\\)',
                keywords: 'процедура функция'
              },
              {
                begin: 'конецпроцедуры|конецфункции',
                keywords: 'конецпроцедуры конецфункции'
              }
            ],
            contains: [
              {
                begin: '\\(',
                end: '\\)',
                endsParent: !0,
                contains: [
                  {
                    className: 'params',
                    lexemes: t,
                    begin: t,
                    end: ',',
                    excludeEnd: !0,
                    endsWithParent: !0,
                    keywords: { keyword: 'знач', literal: r },
                    contains: [a, i, o]
                  },
                  s
                ]
              },
              e.inherit(e.TITLE_MODE, { begin: t })
            ]
          },
          s,
          { className: 'symbol', begin: '~', end: ';|:', excludeEnd: !0 },
          a,
          i,
          o
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = '^[a-zA-Z][a-zA-Z0-9-]*',
        n = "[!@#$^&',?+~`|:]",
        r = e.COMMENT(';', '$'),
        a = {
          begin: t + '\\s*=',
          returnBegin: !0,
          end: /=/,
          relevance: 0,
          contains: [{ className: 'attribute', begin: t }]
        };
      return {
        illegal: n,
        keywords: [
          'ALPHA',
          'BIT',
          'CHAR',
          'CR',
          'CRLF',
          'CTL',
          'DIGIT',
          'DQUOTE',
          'HEXDIG',
          'HTAB',
          'LF',
          'LWSP',
          'OCTET',
          'SP',
          'VCHAR',
          'WSP'
        ].join(' '),
        contains: [
          a,
          r,
          { className: 'symbol', begin: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/ },
          { className: 'symbol', begin: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/ },
          {
            className: 'symbol',
            begin: /%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/
          },
          { className: 'symbol', begin: /%[si]/ },
          e.QUOTE_STRING_MODE,
          e.NUMBER_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        contains: [
          {
            className: 'number',
            begin: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
          },
          { className: 'number', begin: '\\b\\d+\\b', relevance: 0 },
          {
            className: 'string',
            begin: '"(GET|POST|HEAD|PUT|DELETE|CONNECT|OPTIONS|PATCH|TRACE)',
            end: '"',
            keywords: 'GET POST HEAD PUT DELETE CONNECT OPTIONS PATCH TRACE',
            illegal: '\\n',
            relevance: 10
          },
          { className: 'string', begin: /\[/, end: /\]/, illegal: '\\n' },
          { className: 'string', begin: '"', end: '"', illegal: '\\n' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
        className: 'rest_arg',
        begin: '[.]{3}',
        end: '[a-zA-Z_$][a-zA-Z0-9_$]*',
        relevance: 10
      };
      return {
        aliases: ['as'],
        keywords: {
          keyword:
            'as break case catch class const continue default delete do dynamic each else extends final finally for function get if implements import in include instanceof interface internal is namespace native new override package private protected public return set static super switch this throw try typeof use var void while with',
          literal: 'true false null undefined'
        },
        contains: [
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.C_NUMBER_MODE,
          {
            className: 'class',
            beginKeywords: 'package',
            end: '{',
            contains: [e.TITLE_MODE]
          },
          {
            className: 'class',
            beginKeywords: 'class interface',
            end: '{',
            excludeEnd: !0,
            contains: [{ beginKeywords: 'extends implements' }, e.TITLE_MODE]
          },
          {
            className: 'meta',
            beginKeywords: 'import include',
            end: ';',
            keywords: { 'meta-keyword': 'import include' }
          },
          {
            className: 'function',
            beginKeywords: 'function',
            end: '[{;]',
            excludeEnd: !0,
            illegal: '\\S',
            contains: [
              e.TITLE_MODE,
              {
                className: 'params',
                begin: '\\(',
                end: '\\)',
                contains: [
                  e.APOS_STRING_MODE,
                  e.QUOTE_STRING_MODE,
                  e.C_LINE_COMMENT_MODE,
                  e.C_BLOCK_COMMENT_MODE,
                  t
                ]
              },
              { begin: ':\\s*([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)' }
            ]
          },
          e.METHOD_GUARD
        ],
        illegal: /#/
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = '[A-Za-z](_?[A-Za-z0-9.])*',
        n = e.COMMENT('--', '$'),
        r = {
          begin: '\\s+:\\s+',
          end: '\\s*(:=|;|\\)|=>|$)',
          illegal: '[]{}%#\'"',
          contains: [
            { beginKeywords: 'loop for declare others', endsParent: !0 },
            {
              className: 'keyword',
              beginKeywords:
                'not null constant access function procedure in out aliased exception'
            },
            { className: 'type', begin: t, endsParent: !0, relevance: 0 }
          ]
        };
      return {
        case_insensitive: !0,
        keywords: {
          keyword:
            'abort else new return abs elsif not reverse abstract end accept entry select access exception of separate aliased exit or some all others subtype and for out synchronized array function overriding at tagged generic package task begin goto pragma terminate body private then if procedure type case in protected constant interface is raise use declare range delay limited record when delta loop rem while digits renames with do mod requeue xor',
          literal: 'True False'
        },
        contains: [
          n,
          {
            className: 'string',
            begin: /"/,
            end: /"/,
            contains: [{ begin: /""/, relevance: 0 }]
          },
          { className: 'string', begin: /'.'/ },
          {
            className: 'number',
            begin:
              '\\b(\\d(_|\\d)*#\\w+(\\.\\w+)?#([eE][-+]?\\d(_|\\d)*)?|\\d(_|\\d)*(\\.\\d(_|\\d)*)?([eE][-+]?\\d(_|\\d)*)?)',
            relevance: 0
          },
          { className: 'symbol', begin: "'" + t },
          {
            className: 'title',
            begin:
              '(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?',
            end: '(is|$)',
            keywords: 'package body',
            excludeBegin: !0,
            excludeEnd: !0,
            illegal: '[]{}%#\'"'
          },
          {
            begin: '(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+',
            end: '(\\bis|\\bwith|\\brenames|\\)\\s*;)',
            keywords: 'overriding function procedure with is renames return',
            returnBegin: !0,
            contains: [
              n,
              {
                className: 'title',
                begin: '(\\bwith\\s+)?\\b(function|procedure)\\s+',
                end: '(\\(|\\s+|$)',
                excludeBegin: !0,
                excludeEnd: !0,
                illegal: '[]{}%#\'"'
              },
              r,
              {
                className: 'type',
                begin: '\\breturn\\s+',
                end: '(\\s+|;|$)',
                keywords: 'return',
                excludeBegin: !0,
                excludeEnd: !0,
                endsParent: !0,
                illegal: '[]{}%#\'"'
              }
            ]
          },
          {
            className: 'type',
            begin: '\\b(sub)?type\\s+',
            end: '\\s+',
            keywords: 'type',
            excludeBegin: !0,
            illegal: '[]{}%#\'"'
          },
          r
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = { className: 'number', begin: '[\\$%]\\d+' };
      return {
        aliases: ['apacheconf'],
        case_insensitive: !0,
        contains: [
          e.HASH_COMMENT_MODE,
          { className: 'section', begin: '</?', end: '>' },
          {
            className: 'attribute',
            begin: /\w+/,
            relevance: 0,
            keywords: {
              nomarkup:
                'order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername'
            },
            starts: {
              end: /$/,
              relevance: 0,
              keywords: { literal: 'on off all' },
              contains: [
                { className: 'meta', begin: '\\s\\[', end: '\\]$' },
                {
                  className: 'variable',
                  begin: '[\\$%]\\{',
                  end: '\\}',
                  contains: ['self', t]
                },
                t,
                e.QUOTE_STRING_MODE
              ]
            }
          }
        ],
        illegal: /\S/
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = e.inherit(e.QUOTE_STRING_MODE, { illegal: '' }),
        n = {
          className: 'params',
          begin: '\\(',
          end: '\\)',
          contains: ['self', e.C_NUMBER_MODE, t]
        },
        r = e.COMMENT('--', '$'),
        a = [
          r,
          e.COMMENT('\\(\\*', '\\*\\)', { contains: ['self', r] }),
          e.HASH_COMMENT_MODE
        ];
      return {
        aliases: ['osascript'],
        keywords: {
          keyword:
            'about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without',
          literal:
            'AppleScript false linefeed return pi quote result space tab true',
          built_in:
            'alias application boolean class constant date file integer list number real record string text activate beep count delay launch log offset read round run say summarize write character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year'
        },
        contains: [
          t,
          e.C_NUMBER_MODE,
          {
            className: 'built_in',
            begin:
              '\\b(clipboard info|the clipboard|info for|list (disks|folder)|mount volume|path to|(close|open for) access|(get|set) eof|current date|do shell script|get volume settings|random number|set volume|system attribute|system info|time to GMT|(load|run|store) script|scripting components|ASCII (character|number)|localized string|choose (application|color|file|file name|folder|from list|remote application|URL)|display (alert|dialog))\\b|^\\s*return\\b'
          },
          {
            className: 'literal',
            begin:
              '\\b(text item delimiters|current application|missing value)\\b'
          },
          {
            className: 'keyword',
            begin:
              "\\b(apart from|aside from|instead of|out of|greater than|isn't|(doesn't|does not) (equal|come before|come after|contain)|(greater|less) than( or equal)?|(starts?|ends|begins?) with|contained by|comes (before|after)|a (ref|reference)|POSIX file|POSIX path|(date|time) string|quoted form)\\b"
          },
          {
            beginKeywords: 'on',
            illegal: '[${=;\\n]',
            contains: [e.UNDERSCORE_TITLE_MODE, n]
          }
        ].concat(a),
        illegal: '//|->|=>|\\[\\['
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = { className: 'keyword', begin: '\\b[a-z\\d_]*_t\\b' },
        n = {
          className: 'string',
          variants: [
            {
              begin: '(u8?|U)?L?"',
              end: '"',
              illegal: '\\n',
              contains: [e.BACKSLASH_ESCAPE]
            },
            { begin: '(u8?|U)?R"', end: '"', contains: [e.BACKSLASH_ESCAPE] },
            { begin: "'\\\\?.", end: "'", illegal: '.' }
          ]
        },
        r = {
          className: 'number',
          variants: [
            { begin: "\\b(0b[01']+)" },
            {
              begin:
                "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
            },
            {
              begin:
                "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
            }
          ],
          relevance: 0
        },
        a = {
          className: 'meta',
          begin: /#\s*[a-z]+\b/,
          end: /$/,
          keywords: {
            'meta-keyword':
              'if else elif endif define undef warning error line pragma ifdef ifndef include'
          },
          contains: [
            { begin: /\\\n/, relevance: 0 },
            e.inherit(n, { className: 'meta-string' }),
            {
              className: 'meta-string',
              begin: /<[^\n>]*>/,
              end: /$/,
              illegal: '\\n'
            },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        i = e.IDENT_RE + '\\s*\\(',
        o = {
          keyword:
            'int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and or not',
          built_in:
            'std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr',
          literal: 'true false nullptr NULL'
        },
        s = [t, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, r, n];
      return {
        aliases: ['c', 'cc', 'h', 'c++', 'h++', 'hpp'],
        keywords: o,
        illegal: '</',
        contains: s.concat([
          a,
          {
            begin:
              '\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<',
            end: '>',
            keywords: o,
            contains: ['self', t]
          },
          { begin: e.IDENT_RE + '::', keywords: o },
          {
            variants: [
              { begin: /=/, end: /;/ },
              { begin: /\(/, end: /\)/ },
              { beginKeywords: 'new throw return else', end: /;/ }
            ],
            keywords: o,
            contains: s.concat([
              {
                begin: /\(/,
                end: /\)/,
                keywords: o,
                contains: s.concat(['self']),
                relevance: 0
              }
            ]),
            relevance: 0
          },
          {
            className: 'function',
            begin: '(' + e.IDENT_RE + '[\\*&\\s]+)+' + i,
            returnBegin: !0,
            end: /[{;=]/,
            excludeEnd: !0,
            keywords: o,
            illegal: /[^\w\s\*&]/,
            contains: [
              {
                begin: i,
                returnBegin: !0,
                contains: [e.TITLE_MODE],
                relevance: 0
              },
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                keywords: o,
                relevance: 0,
                contains: [
                  e.C_LINE_COMMENT_MODE,
                  e.C_BLOCK_COMMENT_MODE,
                  n,
                  r,
                  t
                ]
              },
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              a
            ]
          },
          {
            className: 'class',
            beginKeywords: 'class struct',
            end: /[{;:]/,
            contains: [
              { begin: /</, end: />/, contains: ['self'] },
              e.TITLE_MODE
            ]
          }
        ]),
        exports: { preprocessor: a, strings: n, keywords: o }
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = e.getLanguage('cpp').exports;
      return {
        keywords: {
          keyword:
            'boolean byte word string String array ' + t.keywords.keyword,
          built_in:
            'setup loop while catch for if do goto try switch case else default break continue return KeyboardController MouseController SoftwareSerial EthernetServer EthernetClient LiquidCrystal RobotControl GSMVoiceCall EthernetUDP EsploraTFT HttpClient RobotMotor WiFiClient GSMScanner FileSystem Scheduler GSMServer YunClient YunServer IPAddress GSMClient GSMModem Keyboard Ethernet Console GSMBand Esplora Stepper Process WiFiUDP GSM_SMS Mailbox USBHost Firmata PImage Client Server GSMPIN FileIO Bridge Serial EEPROM Stream Mouse Audio Servo File Task GPRS WiFi Wire TFT GSM SPI SD runShellCommandAsynchronously analogWriteResolution retrieveCallingNumber printFirmwareVersion analogReadResolution sendDigitalPortPair noListenOnLocalhost readJoystickButton setFirmwareVersion readJoystickSwitch scrollDisplayRight getVoiceCallStatus scrollDisplayLeft writeMicroseconds delayMicroseconds beginTransmission getSignalStrength runAsynchronously getAsynchronously listenOnLocalhost getCurrentCarrier readAccelerometer messageAvailable sendDigitalPorts lineFollowConfig countryNameWrite runShellCommand readStringUntil rewindDirectory readTemperature setClockDivider readLightSensor endTransmission analogReference detachInterrupt countryNameRead attachInterrupt encryptionType readBytesUntil robotNameWrite readMicrophone robotNameRead cityNameWrite userNameWrite readJoystickY readJoystickX mouseReleased openNextFile scanNetworks noInterrupts digitalWrite beginSpeaker mousePressed isActionDone mouseDragged displayLogos noAutoscroll addParameter remoteNumber getModifiers keyboardRead userNameRead waitContinue processInput parseCommand printVersion readNetworks writeMessage blinkVersion cityNameRead readMessage setDataMode parsePacket isListening setBitOrder beginPacket isDirectory motorsWrite drawCompass digitalRead clearScreen serialEvent rightToLeft setTextSize leftToRight requestFrom keyReleased compassRead analogWrite interrupts WiFiServer disconnect playMelody parseFloat autoscroll getPINUsed setPINUsed setTimeout sendAnalog readSlider analogRead beginWrite createChar motorsStop keyPressed tempoWrite readButton subnetMask debugPrint macAddress writeGreen randomSeed attachGPRS readString sendString remotePort releaseAll mouseMoved background getXChange getYChange answerCall getResult voiceCall endPacket constrain getSocket writeJSON getButton available connected findUntil readBytes exitValue readGreen writeBlue startLoop IPAddress isPressed sendSysex pauseMode gatewayIP setCursor getOemKey tuneWrite noDisplay loadImage switchPIN onRequest onReceive changePIN playFile noBuffer parseInt overflow checkPIN knobRead beginTFT bitClear updateIR bitWrite position writeRGB highByte writeRed setSpeed readBlue noStroke remoteIP transfer shutdown hangCall beginSMS endWrite attached maintain noCursor checkReg checkPUK shiftOut isValid shiftIn pulseIn connect println localIP pinMode getIMEI display noBlink process getBand running beginSD drawBMP lowByte setBand release bitRead prepare pointTo readRed setMode noFill remove listen stroke detach attach noTone exists buffer height bitSet circle config cursor random IRread setDNS endSMS getKey micros millis begin print write ready flush width isPIN blink clear press mkdir rmdir close point yield image BSSID click delay read text move peek beep rect line open seek fill size turn stop home find step tone sqrt RSSI SSID end bit tan cos sin pow map abs max min get run put',
          literal:
            'DIGITAL_MESSAGE FIRMATA_STRING ANALOG_MESSAGE REPORT_DIGITAL REPORT_ANALOG INPUT_PULLUP SET_PIN_MODE INTERNAL2V56 SYSTEM_RESET LED_BUILTIN INTERNAL1V1 SYSEX_START INTERNAL EXTERNAL DEFAULT OUTPUT INPUT HIGH LOW'
        },
        contains: [
          t.preprocessor,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          e.C_NUMBER_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        case_insensitive: !0,
        aliases: ['arm'],
        lexemes: '\\.?' + e.IDENT_RE,
        keywords: {
          meta:
            '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS SN SPACE SUBT THUMB THUMBX TTL WHILE WEND ',
          built_in:
            'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 pc lr sp ip sl sb fp a1 a2 a3 a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf s0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13 s14 s15 s16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 d0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 d16 d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 {PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @'
        },
        contains: [
          {
            className: 'keyword',
            begin:
              '\\b(adc|(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|wfe|wfi|yield)(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?[sptrx]?',
            end: '\\s'
          },
          e.COMMENT('[;@]', '$', { relevance: 0 }),
          e.C_BLOCK_COMMENT_MODE,
          e.QUOTE_STRING_MODE,
          { className: 'string', begin: "'", end: "[^\\\\]'", relevance: 0 },
          {
            className: 'title',
            begin: '\\|',
            end: '\\|',
            illegal: '\\n',
            relevance: 0
          },
          {
            className: 'number',
            variants: [
              { begin: '[#$=]?0x[0-9a-f]+' },
              { begin: '[#$=]?0b[01]+' },
              { begin: '[#$=]\\d+' },
              { begin: '\\b\\d+' }
            ],
            relevance: 0
          },
          {
            className: 'symbol',
            variants: [
              { begin: '^[a-z_\\.\\$][a-z0-9_\\.\\$]+' },
              { begin: '^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:' },
              { begin: '[=#]\\w+' }
            ],
            relevance: 0
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
        endsWithParent: !0,
        illegal: /</,
        relevance: 0,
        contains: [
          { className: 'attr', begin: '[A-Za-z0-9\\._:-]+', relevance: 0 },
          {
            begin: /=\s*/,
            relevance: 0,
            contains: [
              {
                className: 'string',
                endsParent: !0,
                variants: [
                  { begin: /"/, end: /"/ },
                  { begin: /'/, end: /'/ },
                  { begin: /[^\s"'=<>`]+/ }
                ]
              }
            ]
          }
        ]
      };
      return {
        aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist'],
        case_insensitive: !0,
        contains: [
          {
            className: 'meta',
            begin: '<!DOCTYPE',
            end: '>',
            relevance: 10,
            contains: [{ begin: '\\[', end: '\\]' }]
          },
          e.COMMENT('\x3c!--', '--\x3e', { relevance: 10 }),
          { begin: '<\\!\\[CDATA\\[', end: '\\]\\]>', relevance: 10 },
          {
            begin: /<\?(php)?/,
            end: /\?>/,
            subLanguage: 'php',
            contains: [{ begin: '/\\*', end: '\\*/', skip: !0 }]
          },
          {
            className: 'tag',
            begin: '<style(?=\\s|>|$)',
            end: '>',
            keywords: { name: 'style' },
            contains: [t],
            starts: {
              end: '</style>',
              returnEnd: !0,
              subLanguage: ['css', 'xml']
            }
          },
          {
            className: 'tag',
            begin: '<script(?=\\s|>|$)',
            end: '>',
            keywords: { name: 'script' },
            contains: [t],
            starts: {
              end: '</script>',
              returnEnd: !0,
              subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
            }
          },
          {
            className: 'meta',
            variants: [
              { begin: /<\?xml/, end: /\?>/, relevance: 10 },
              { begin: /<\?\w+/, end: /\?>/ }
            ]
          },
          {
            className: 'tag',
            begin: '</?',
            end: '/?>',
            contains: [
              { className: 'name', begin: /[^\/><\s]+/, relevance: 0 },
              t
            ]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['adoc'],
        contains: [
          e.COMMENT('^/{4,}\\n', '\\n/{4,}$', { relevance: 10 }),
          e.COMMENT('^//', '$', { relevance: 0 }),
          { className: 'title', begin: '^\\.\\w.*$' },
          { begin: '^[=\\*]{4,}\\n', end: '\\n^[=\\*]{4,}$', relevance: 10 },
          {
            className: 'section',
            relevance: 10,
            variants: [
              { begin: '^(={1,5}) .+?( \\1)?$' },
              { begin: '^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$' }
            ]
          },
          {
            className: 'meta',
            begin: '^:.+?:',
            end: '\\s',
            excludeEnd: !0,
            relevance: 10
          },
          { className: 'meta', begin: '^\\[.+?\\]$', relevance: 0 },
          {
            className: 'quote',
            begin: '^_{4,}\\n',
            end: '\\n_{4,}$',
            relevance: 10
          },
          {
            className: 'code',
            begin: '^[\\-\\.]{4,}\\n',
            end: '\\n[\\-\\.]{4,}$',
            relevance: 10
          },
          {
            begin: '^\\+{4,}\\n',
            end: '\\n\\+{4,}$',
            contains: [
              { begin: '<', end: '>', subLanguage: 'xml', relevance: 0 }
            ],
            relevance: 10
          },
          { className: 'bullet', begin: '^(\\*+|\\-+|\\.+|[^\\n]+?::)\\s+' },
          {
            className: 'symbol',
            begin: '^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+',
            relevance: 10
          },
          {
            className: 'strong',
            begin: '\\B\\*(?![\\*\\s])',
            end: '(\\n{2}|\\*)',
            contains: [{ begin: '\\\\*\\w', relevance: 0 }]
          },
          {
            className: 'emphasis',
            begin: "\\B'(?!['\\s])",
            end: "(\\n{2}|')",
            contains: [{ begin: "\\\\'\\w", relevance: 0 }],
            relevance: 0
          },
          {
            className: 'emphasis',
            begin: '_(?![_\\s])',
            end: '(\\n{2}|_)',
            relevance: 0
          },
          {
            className: 'string',
            variants: [{ begin: "``.+?''" }, { begin: "`.+?'" }]
          },
          { className: 'code', begin: '(`.+?`|\\+.+?\\+)', relevance: 0 },
          { className: 'code', begin: '^[ \\t]', end: '$', relevance: 0 },
          { begin: "^'{3,}[ \\t]*$", relevance: 10 },
          {
            begin: '(link:)?(http|https|ftp|file|irc|image:?):\\S+\\[.*?\\]',
            returnBegin: !0,
            contains: [
              { begin: '(link|image:?):', relevance: 0 },
              { className: 'link', begin: '\\w', end: '[^\\[]+', relevance: 0 },
              {
                className: 'string',
                begin: '\\[',
                end: '\\]',
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0
              }
            ],
            relevance: 10
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t =
        'false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else extends implements break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws privileged aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization staticinitialization withincode target within execution getWithinTypeName handler thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents warning error soft precedence thisAspectInstance';
      return {
        keywords: t,
        illegal: /<\/|#/,
        contains: [
          e.COMMENT('/\\*\\*', '\\*/', {
            relevance: 0,
            contains: [
              { begin: /\w+@/, relevance: 0 },
              { className: 'doctag', begin: '@[A-Za-z]+' }
            ]
          }),
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          {
            className: 'class',
            beginKeywords: 'aspect',
            end: /[{;=]/,
            excludeEnd: !0,
            illegal: /[:;"\[\]]/,
            contains: [
              {
                beginKeywords:
                  'extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton'
              },
              e.UNDERSCORE_TITLE_MODE,
              {
                begin: /\([^\)]*/,
                end: /[)]+/,
                keywords: t + ' get set args call',
                excludeEnd: !1
              }
            ]
          },
          {
            className: 'class',
            beginKeywords: 'class interface',
            end: /[{;=]/,
            excludeEnd: !0,
            relevance: 0,
            keywords: 'class interface',
            illegal: /[:"\[\]]/,
            contains: [
              { beginKeywords: 'extends implements' },
              e.UNDERSCORE_TITLE_MODE
            ]
          },
          {
            beginKeywords: 'pointcut after before around throwing returning',
            end: /[)]/,
            excludeEnd: !1,
            illegal: /["\[\]]/,
            contains: [
              {
                begin: e.UNDERSCORE_IDENT_RE + '\\s*\\(',
                returnBegin: !0,
                contains: [e.UNDERSCORE_TITLE_MODE]
              }
            ]
          },
          {
            begin: /[:]/,
            returnBegin: !0,
            end: /[{;]/,
            relevance: 0,
            excludeEnd: !1,
            keywords: t,
            illegal: /["\[\]]/,
            contains: [
              {
                begin: e.UNDERSCORE_IDENT_RE + '\\s*\\(',
                keywords: t + ' get set args call',
                relevance: 0
              },
              e.QUOTE_STRING_MODE
            ]
          },
          { beginKeywords: 'new throw', relevance: 0 },
          {
            className: 'function',
            begin: /\w+ +\w+(\.)?\w+\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,
            returnBegin: !0,
            end: /[{;=]/,
            keywords: t,
            excludeEnd: !0,
            contains: [
              {
                begin: e.UNDERSCORE_IDENT_RE + '\\s*\\(',
                returnBegin: !0,
                relevance: 0,
                contains: [e.UNDERSCORE_TITLE_MODE]
              },
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                relevance: 0,
                keywords: t,
                contains: [
                  e.APOS_STRING_MODE,
                  e.QUOTE_STRING_MODE,
                  e.C_NUMBER_MODE,
                  e.C_BLOCK_COMMENT_MODE
                ]
              },
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          e.C_NUMBER_MODE,
          { className: 'meta', begin: '@[A-Za-z]+' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = { begin: '`[\\s\\S]' };
      return {
        case_insensitive: !0,
        aliases: ['ahk'],
        keywords: {
          keyword:
            'Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group',
          literal: 'A|0 true false NOT AND OR',
          built_in: 'ComSpec Clipboard ClipboardAll ErrorLevel'
        },
        contains: [
          { className: 'built_in', begin: 'A_[a-zA-Z0-9]+' },
          t,
          e.inherit(e.QUOTE_STRING_MODE, { contains: [t] }),
          e.COMMENT(';', '$', { relevance: 0 }),
          e.C_BLOCK_COMMENT_MODE,
          { className: 'number', begin: e.NUMBER_RE, relevance: 0 },
          {
            className: 'subst',
            begin: '%(?=[a-zA-Z0-9#_$@])',
            end: '%',
            illegal: '[^a-zA-Z0-9#_$@]'
          },
          { className: 'built_in', begin: '^\\s*\\w+\\s*,' },
          { className: 'meta', begin: '^\\s*#w+', end: '$', relevance: 0 },
          {
            className: 'symbol',
            contains: [t],
            variants: [
              { begin: '^[^\\n";]+::(?!=)' },
              { begin: '^[^\\n";]+:(?!=)', relevance: 0 }
            ]
          },
          { begin: ',\\s*,' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          variants: [
            e.COMMENT(';', '$', { relevance: 0 }),
            e.COMMENT('#cs', '#ce'),
            e.COMMENT('#comments-start', '#comments-end')
          ]
        },
        n = { begin: '\\$[A-z0-9_]+' },
        r = {
          className: 'string',
          variants: [
            { begin: /"/, end: /"/, contains: [{ begin: /""/, relevance: 0 }] },
            { begin: /'/, end: /'/, contains: [{ begin: /''/, relevance: 0 }] }
          ]
        },
        a = { variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE] };
      return {
        case_insensitive: !0,
        illegal: /\/\*/,
        keywords: {
          keyword:
            'ByRef Case Const ContinueCase ContinueLoop Default Dim Do Else ElseIf EndFunc EndIf EndSelect EndSwitch EndWith Enum Exit ExitLoop For Func Global If In Local Next ReDim Return Select Static Step Switch Then To Until Volatile WEnd While With',
          built_in:
            'Abs ACos AdlibRegister AdlibUnRegister Asc AscW ASin Assign ATan AutoItSetOption AutoItWinGetTitle AutoItWinSetTitle Beep Binary BinaryLen BinaryMid BinaryToString BitAND BitNOT BitOR BitRotate BitShift BitXOR BlockInput Break Call CDTray Ceiling Chr ChrW ClipGet ClipPut ConsoleRead ConsoleWrite ConsoleWriteError ControlClick ControlCommand ControlDisable ControlEnable ControlFocus ControlGetFocus ControlGetHandle ControlGetPos ControlGetText ControlHide ControlListView ControlMove ControlSend ControlSetText ControlShow ControlTreeView Cos Dec DirCopy DirCreate DirGetSize DirMove DirRemove DllCall DllCallAddress DllCallbackFree DllCallbackGetPtr DllCallbackRegister DllClose DllOpen DllStructCreate DllStructGetData DllStructGetPtr DllStructGetSize DllStructSetData DriveGetDrive DriveGetFileSystem DriveGetLabel DriveGetSerial DriveGetType DriveMapAdd DriveMapDel DriveMapGet DriveSetLabel DriveSpaceFree DriveSpaceTotal DriveStatus EnvGet EnvSet EnvUpdate Eval Execute Exp FileChangeDir FileClose FileCopy FileCreateNTFSLink FileCreateShortcut FileDelete FileExists FileFindFirstFile FileFindNextFile FileFlush FileGetAttrib FileGetEncoding FileGetLongName FileGetPos FileGetShortcut FileGetShortName FileGetSize FileGetTime FileGetVersion FileInstall FileMove FileOpen FileOpenDialog FileRead FileReadLine FileReadToArray FileRecycle FileRecycleEmpty FileSaveDialog FileSelectFolder FileSetAttrib FileSetEnd FileSetPos FileSetTime FileWrite FileWriteLine Floor FtpSetProxy FuncName GUICreate GUICtrlCreateAvi GUICtrlCreateButton GUICtrlCreateCheckbox GUICtrlCreateCombo GUICtrlCreateContextMenu GUICtrlCreateDate GUICtrlCreateDummy GUICtrlCreateEdit GUICtrlCreateGraphic GUICtrlCreateGroup GUICtrlCreateIcon GUICtrlCreateInput GUICtrlCreateLabel GUICtrlCreateList GUICtrlCreateListView GUICtrlCreateListViewItem GUICtrlCreateMenu GUICtrlCreateMenuItem GUICtrlCreateMonthCal GUICtrlCreateObj GUICtrlCreatePic GUICtrlCreateProgress GUICtrlCreateRadio GUICtrlCreateSlider GUICtrlCreateTab GUICtrlCreateTabItem GUICtrlCreateTreeView GUICtrlCreateTreeViewItem GUICtrlCreateUpdown GUICtrlDelete GUICtrlGetHandle GUICtrlGetState GUICtrlRead GUICtrlRecvMsg GUICtrlRegisterListViewSort GUICtrlSendMsg GUICtrlSendToDummy GUICtrlSetBkColor GUICtrlSetColor GUICtrlSetCursor GUICtrlSetData GUICtrlSetDefBkColor GUICtrlSetDefColor GUICtrlSetFont GUICtrlSetGraphic GUICtrlSetImage GUICtrlSetLimit GUICtrlSetOnEvent GUICtrlSetPos GUICtrlSetResizing GUICtrlSetState GUICtrlSetStyle GUICtrlSetTip GUIDelete GUIGetCursorInfo GUIGetMsg GUIGetStyle GUIRegisterMsg GUISetAccelerators GUISetBkColor GUISetCoord GUISetCursor GUISetFont GUISetHelp GUISetIcon GUISetOnEvent GUISetState GUISetStyle GUIStartGroup GUISwitch Hex HotKeySet HttpSetProxy HttpSetUserAgent HWnd InetClose InetGet InetGetInfo InetGetSize InetRead IniDelete IniRead IniReadSection IniReadSectionNames IniRenameSection IniWrite IniWriteSection InputBox Int IsAdmin IsArray IsBinary IsBool IsDeclared IsDllStruct IsFloat IsFunc IsHWnd IsInt IsKeyword IsNumber IsObj IsPtr IsString Log MemGetStats Mod MouseClick MouseClickDrag MouseDown MouseGetCursor MouseGetPos MouseMove MouseUp MouseWheel MsgBox Number ObjCreate ObjCreateInterface ObjEvent ObjGet ObjName OnAutoItExitRegister OnAutoItExitUnRegister Ping PixelChecksum PixelGetColor PixelSearch ProcessClose ProcessExists ProcessGetStats ProcessList ProcessSetPriority ProcessWait ProcessWaitClose ProgressOff ProgressOn ProgressSet Ptr Random RegDelete RegEnumKey RegEnumVal RegRead RegWrite Round Run RunAs RunAsWait RunWait Send SendKeepActive SetError SetExtended ShellExecute ShellExecuteWait Shutdown Sin Sleep SoundPlay SoundSetWaveVolume SplashImageOn SplashOff SplashTextOn Sqrt SRandom StatusbarGetText StderrRead StdinWrite StdioClose StdoutRead String StringAddCR StringCompare StringFormat StringFromASCIIArray StringInStr StringIsAlNum StringIsAlpha StringIsASCII StringIsDigit StringIsFloat StringIsInt StringIsLower StringIsSpace StringIsUpper StringIsXDigit StringLeft StringLen StringLower StringMid StringRegExp StringRegExpReplace StringReplace StringReverse StringRight StringSplit StringStripCR StringStripWS StringToASCIIArray StringToBinary StringTrimLeft StringTrimRight StringUpper Tan TCPAccept TCPCloseSocket TCPConnect TCPListen TCPNameToIP TCPRecv TCPSend TCPShutdown, UDPShutdown TCPStartup, UDPStartup TimerDiff TimerInit ToolTip TrayCreateItem TrayCreateMenu TrayGetMsg TrayItemDelete TrayItemGetHandle TrayItemGetState TrayItemGetText TrayItemSetOnEvent TrayItemSetState TrayItemSetText TraySetClick TraySetIcon TraySetOnEvent TraySetPauseIcon TraySetState TraySetToolTip TrayTip UBound UDPBind UDPCloseSocket UDPOpen UDPRecv UDPSend VarGetType WinActivate WinActive WinClose WinExists WinFlash WinGetCaretPos WinGetClassList WinGetClientSize WinGetHandle WinGetPos WinGetProcess WinGetState WinGetText WinGetTitle WinKill WinList WinMenuSelectItem WinMinimizeAll WinMinimizeAllUndo WinMove WinSetOnTop WinSetState WinSetTitle WinSetTrans WinWait',
          literal: 'True False And Null Not Or'
        },
        contains: [
          t,
          n,
          r,
          a,
          {
            className: 'meta',
            begin: '#',
            end: '$',
            keywords: {
              'meta-keyword':
                'comments include include-once NoTrayIcon OnAutoItStartRegister pragma compile RequireAdmin'
            },
            contains: [
              { begin: /\\\n/, relevance: 0 },
              {
                beginKeywords: 'include',
                keywords: { 'meta-keyword': 'include' },
                end: '$',
                contains: [
                  r,
                  {
                    className: 'meta-string',
                    variants: [
                      { begin: '<', end: '>' },
                      {
                        begin: /"/,
                        end: /"/,
                        contains: [{ begin: /""/, relevance: 0 }]
                      },
                      {
                        begin: /'/,
                        end: /'/,
                        contains: [{ begin: /''/, relevance: 0 }]
                      }
                    ]
                  }
                ]
              },
              r,
              t
            ]
          },
          { className: 'symbol', begin: '@[A-z0-9_]+' },
          {
            className: 'function',
            beginKeywords: 'Func',
            end: '$',
            illegal: '\\$|\\[|%',
            contains: [
              e.UNDERSCORE_TITLE_MODE,
              {
                className: 'params',
                begin: '\\(',
                end: '\\)',
                contains: [n, r, a]
              }
            ]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        case_insensitive: !0,
        lexemes: '\\.?' + e.IDENT_RE,
        keywords: {
          keyword:
            'adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub subi swap tst wdr',
          built_in:
            'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf',
          meta:
            '.byte .cseg .db .def .device .dseg .dw .endmacro .equ .eseg .exit .include .list .listmac .macro .nolist .org .set'
        },
        contains: [
          e.C_BLOCK_COMMENT_MODE,
          e.COMMENT(';', '$', { relevance: 0 }),
          e.C_NUMBER_MODE,
          e.BINARY_NUMBER_MODE,
          { className: 'number', begin: '\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)' },
          e.QUOTE_STRING_MODE,
          {
            className: 'string',
            begin: "'",
            end: "[^\\\\]'",
            illegal: "[^\\\\][^']"
          },
          { className: 'symbol', begin: '^[A-Za-z0-9_.$]+:' },
          { className: 'meta', begin: '#', end: '$' },
          { className: 'subst', begin: '@[0-9]+' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        keywords: {
          keyword:
            'BEGIN END if else while do for in break continue delete next nextfile function func exit|10'
        },
        contains: [
          {
            className: 'variable',
            variants: [{ begin: /\$[\w\d#@][\w\d_]*/ }, { begin: /\$\{(.*?)}/ }]
          },
          {
            className: 'string',
            contains: [e.BACKSLASH_ESCAPE],
            variants: [
              { begin: /(u|b)?r?'''/, end: /'''/, relevance: 10 },
              { begin: /(u|b)?r?"""/, end: /"""/, relevance: 10 },
              { begin: /(u|r|ur)'/, end: /'/, relevance: 10 },
              { begin: /(u|r|ur)"/, end: /"/, relevance: 10 },
              { begin: /(b|br)'/, end: /'/ },
              { begin: /(b|br)"/, end: /"/ },
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE
            ]
          },
          e.REGEXP_MODE,
          e.HASH_COMMENT_MODE,
          e.NUMBER_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        keywords:
          'false int abstract private char boolean static null if for true while long throw finally protected final return void enum else break new catch byte super case short default double public try this switch continue reverse firstfast firstonly forupdate nofetch sum avg minof maxof count order group by asc desc index hint like dispaly edit client server ttsbegin ttscommit str real date container anytype common div mod',
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          e.C_NUMBER_MODE,
          { className: 'meta', begin: '#', end: '$' },
          {
            className: 'class',
            beginKeywords: 'class interface',
            end: '{',
            excludeEnd: !0,
            illegal: ':',
            contains: [
              { beginKeywords: 'extends implements' },
              e.UNDERSCORE_TITLE_MODE
            ]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          className: 'variable',
          variants: [{ begin: /\$[\w\d#@][\w\d_]*/ }, { begin: /\$\{(.*?)}/ }]
        },
        n = {
          className: 'string',
          begin: /"/,
          end: /"/,
          contains: [
            e.BACKSLASH_ESCAPE,
            t,
            {
              className: 'variable',
              begin: /\$\(/,
              end: /\)/,
              contains: [e.BACKSLASH_ESCAPE]
            }
          ]
        };
      return {
        aliases: ['sh', 'zsh'],
        lexemes: /\b-?[a-z\._]+\b/,
        keywords: {
          keyword:
            'if then else elif fi for while in do done case esac function',
          literal: 'true false',
          built_in:
            'break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp',
          _: '-ne -eq -lt -gt -f -d -e -s -l -a'
        },
        contains: [
          { className: 'meta', begin: /^#![^\n]+sh\s*$/, relevance: 10 },
          {
            className: 'function',
            begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            returnBegin: !0,
            contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
            relevance: 0
          },
          e.HASH_COMMENT_MODE,
          n,
          { className: 'string', begin: /'/, end: /'/ },
          t
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        case_insensitive: !0,
        illegal: '^.',
        lexemes: '[a-zA-Z][a-zA-Z0-9_$%!#]*',
        keywords: {
          keyword:
            'ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO HEX$ IF|0 THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE WEND WIDTH WINDOW WRITE XOR'
        },
        contains: [
          e.QUOTE_STRING_MODE,
          e.COMMENT('REM', '$', { relevance: 10 }),
          e.COMMENT("'", '$', { relevance: 0 }),
          { className: 'symbol', begin: '^[0-9]+ ', relevance: 10 },
          {
            className: 'number',
            begin: '\\b([0-9]+[0-9edED.]*[#!]?)',
            relevance: 0
          },
          { className: 'number', begin: '(&[hH][0-9a-fA-F]{1,4})' },
          { className: 'number', begin: '(&[oO][0-7]{1,6})' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        contains: [
          { className: 'attribute', begin: /</, end: />/ },
          {
            begin: /::=/,
            starts: {
              end: /$/,
              contains: [
                { begin: /</, end: />/ },
                e.C_LINE_COMMENT_MODE,
                e.C_BLOCK_COMMENT_MODE,
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE
              ]
            }
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = { className: 'literal', begin: '[\\+\\-]', relevance: 0 };
      return {
        aliases: ['bf'],
        contains: [
          e.COMMENT('[^\\[\\]\\.,\\+\\-<> \r\n]', '[\\[\\]\\.,\\+\\-<> \r\n]', {
            returnEnd: !0,
            relevance: 0
          }),
          { className: 'title', begin: '[\\[\\]]', relevance: 0 },
          { className: 'string', begin: '[\\.,]', relevance: 0 },
          { begin: /\+\+|\-\-/, returnBegin: !0, contains: [t] },
          t
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t =
          'div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to until while with var',
        n = [
          e.C_LINE_COMMENT_MODE,
          e.COMMENT(/\{/, /\}/, { relevance: 0 }),
          e.COMMENT(/\(\*/, /\*\)/, { relevance: 10 })
        ],
        r = {
          className: 'string',
          begin: /'/,
          end: /'/,
          contains: [{ begin: /''/ }]
        },
        a = { className: 'string', begin: /(#\d+)+/ },
        i = {
          className: 'function',
          beginKeywords: 'procedure',
          end: /[:;]/,
          keywords: 'procedure|10',
          contains: [
            e.TITLE_MODE,
            {
              className: 'params',
              begin: /\(/,
              end: /\)/,
              keywords: t,
              contains: [r, a]
            }
          ].concat(n)
        },
        o = {
          className: 'class',
          begin:
            'OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)',
          returnBegin: !0,
          contains: [e.TITLE_MODE, i]
        };
      return {
        case_insensitive: !0,
        keywords: { keyword: t, literal: 'false true' },
        illegal: /\/\*/,
        contains: [
          r,
          a,
          {
            className: 'number',
            begin: '\\b\\d+(\\.\\d+)?(DT|D|T)',
            relevance: 0
          },
          { className: 'string', begin: '"', end: '"' },
          e.NUMBER_MODE,
          o,
          i
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['capnp'],
        keywords: {
          keyword:
            'struct enum interface union group import using const annotation extends in of on as with from fixed',
          built_in:
            'Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 Text Data AnyPointer AnyStruct Capability List',
          literal: 'true false'
        },
        contains: [
          e.QUOTE_STRING_MODE,
          e.NUMBER_MODE,
          e.HASH_COMMENT_MODE,
          { className: 'meta', begin: /@0x[\w\d]{16};/, illegal: /\n/ },
          { className: 'symbol', begin: /@\d+\b/ },
          {
            className: 'class',
            beginKeywords: 'struct enum',
            end: /\{/,
            illegal: /\n/,
            contains: [
              e.inherit(e.TITLE_MODE, {
                starts: { endsWithParent: !0, excludeEnd: !0 }
              })
            ]
          },
          {
            className: 'class',
            beginKeywords: 'interface',
            end: /\{/,
            illegal: /\n/,
            contains: [
              e.inherit(e.TITLE_MODE, {
                starts: { endsWithParent: !0, excludeEnd: !0 }
              })
            ]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t =
          'assembly module package import alias class interface object given value assign void function new of extends satisfies abstracts in out return break continue throw assert dynamic if else switch case for while try catch finally then let this outer super is exists nonempty',
        n = {
          className: 'subst',
          excludeBegin: !0,
          excludeEnd: !0,
          begin: /``/,
          end: /``/,
          keywords: t,
          relevance: 10
        },
        r = [
          { className: 'string', begin: '"""', end: '"""', relevance: 10 },
          { className: 'string', begin: '"', end: '"', contains: [n] },
          { className: 'string', begin: "'", end: "'" },
          {
            className: 'number',
            begin:
              '#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?',
            relevance: 0
          }
        ];
      return (
        (n.contains = r),
        {
          keywords: {
            keyword:
              t +
              ' shared abstract formal default actual variable late native deprecatedfinal sealed annotation suppressWarnings small',
            meta: 'doc by license see throws tagged'
          },
          illegal: '\\$[^01]|#[^0-9a-fA-F]',
          contains: [
            e.C_LINE_COMMENT_MODE,
            e.COMMENT('/\\*', '\\*/', { contains: ['self'] }),
            { className: 'meta', begin: '@[a-z]\\w*(?:\\:"[^"]*")?' }
          ].concat(r)
        }
      );
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['clean', 'icl', 'dcl'],
        keywords: {
          keyword:
            'if let in with where case of class instance otherwise implementation definition system module from import qualified as special code inline foreign export ccall stdcall generic derive infix infixl infixr',
          literal: 'True False'
        },
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          e.C_NUMBER_MODE,
          { begin: '->|<-[|:]?|::|#!?|>>=|\\{\\||\\|\\}|:==|=:|\\.\\.|<>|`' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = "[a-zA-Z_\\-!.?+*=<>&#'][a-zA-Z_\\-!.?+*=<>&#'0-9/;:]*",
        n = { begin: t, relevance: 0 },
        r = { className: 'number', begin: '[-+]?\\d+(\\.\\d+)?', relevance: 0 },
        a = e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
        i = e.COMMENT(';', '$', { relevance: 0 }),
        o = { className: 'literal', begin: /\b(true|false|nil)\b/ },
        s = { begin: '[\\[\\{]', end: '[\\]\\}]' },
        l = { className: 'comment', begin: '\\^' + t },
        c = e.COMMENT('\\^\\{', '\\}'),
        d = { className: 'symbol', begin: '[:]{1,2}' + t },
        u = { begin: '\\(', end: '\\)' },
        p = { endsWithParent: !0, relevance: 0 },
        m = {
          keywords: {
            'builtin-name':
              'def defonce cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize'
          },
          lexemes: t,
          className: 'name',
          begin: t,
          starts: p
        },
        g = [u, a, l, c, i, d, s, r, o, n];
      return (
        (u.contains = [e.COMMENT('comment', ''), m, p]),
        (p.contains = g),
        (s.contains = g),
        (c.contains = [s]),
        {
          aliases: ['clj'],
          illegal: /\S/,
          contains: [u, a, l, c, i, d, s, r, o]
        }
      );
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        contains: [
          {
            className: 'meta',
            begin: /^([\w.-]+|\s*#_)=>/,
            starts: { end: /$/, subLanguage: 'clojure' }
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['cmake.in'],
        case_insensitive: !0,
        keywords: {
          keyword:
            'add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_subdirectory add_test aux_source_directory break build_command cmake_minimum_required cmake_policy configure_file create_test_sourcelist define_property else elseif enable_language enable_testing endforeach endfunction endif endmacro endwhile execute_process export find_file find_library find_package find_path find_program fltk_wrap_ui foreach function get_cmake_property get_directory_property get_filename_component get_property get_source_file_property get_target_property get_test_property if include include_directories include_external_msproject include_regular_expression install link_directories load_cache load_command macro mark_as_advanced message option output_required_files project qt_wrap_cpp qt_wrap_ui remove_definitions return separate_arguments set set_directory_properties set_property set_source_files_properties set_target_properties set_tests_properties site_name source_group string target_link_libraries try_compile try_run unset variable_watch while build_name exec_program export_library_dependencies install_files install_programs install_targets link_libraries make_directory remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or equal less greater strless strgreater strequal matches'
        },
        contains: [
          { className: 'variable', begin: '\\${', end: '}' },
          e.HASH_COMMENT_MODE,
          e.QUOTE_STRING_MODE,
          e.NUMBER_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          keyword:
            'in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not',
          literal: 'true false null undefined yes no on off',
          built_in: 'npm require console print module global window document'
        },
        n = '[A-Za-z$_][0-9A-Za-z$_]*',
        r = { className: 'subst', begin: /#\{/, end: /}/, keywords: t },
        a = [
          e.BINARY_NUMBER_MODE,
          e.inherit(e.C_NUMBER_MODE, {
            starts: { end: '(\\s*/)?', relevance: 0 }
          }),
          {
            className: 'string',
            variants: [
              { begin: /'''/, end: /'''/, contains: [e.BACKSLASH_ESCAPE] },
              { begin: /'/, end: /'/, contains: [e.BACKSLASH_ESCAPE] },
              { begin: /"""/, end: /"""/, contains: [e.BACKSLASH_ESCAPE, r] },
              { begin: /"/, end: /"/, contains: [e.BACKSLASH_ESCAPE, r] }
            ]
          },
          {
            className: 'regexp',
            variants: [
              { begin: '///', end: '///', contains: [r, e.HASH_COMMENT_MODE] },
              { begin: '//[gim]*', relevance: 0 },
              { begin: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/ }
            ]
          },
          { begin: '@' + n },
          {
            subLanguage: 'javascript',
            excludeBegin: !0,
            excludeEnd: !0,
            variants: [{ begin: '```', end: '```' }, { begin: '`', end: '`' }]
          }
        ];
      r.contains = a;
      var i = e.inherit(e.TITLE_MODE, { begin: n }),
        o = {
          className: 'params',
          begin: '\\([^\\(]',
          returnBegin: !0,
          contains: [
            {
              begin: /\(/,
              end: /\)/,
              keywords: t,
              contains: ['self'].concat(a)
            }
          ]
        };
      return {
        aliases: ['coffee', 'cson', 'iced'],
        keywords: t,
        illegal: /\/\*/,
        contains: a.concat([
          e.COMMENT('###', '###'),
          e.HASH_COMMENT_MODE,
          {
            className: 'function',
            begin: '^\\s*' + n + '\\s*=\\s*(\\(.*\\))?\\s*\\B[-=]>',
            end: '[-=]>',
            returnBegin: !0,
            contains: [i, o]
          },
          {
            begin: /[:\(,=]\s*/,
            relevance: 0,
            contains: [
              {
                className: 'function',
                begin: '(\\(.*\\))?\\s*\\B[-=]>',
                end: '[-=]>',
                returnBegin: !0,
                contains: [o]
              }
            ]
          },
          {
            className: 'class',
            beginKeywords: 'class',
            end: '$',
            illegal: /[:="\[\]]/,
            contains: [
              {
                beginKeywords: 'extends',
                endsWithParent: !0,
                illegal: /[:="\[\]]/,
                contains: [i]
              },
              i
            ]
          },
          {
            begin: n + ':',
            end: ':',
            returnBegin: !0,
            returnEnd: !0,
            relevance: 0
          }
        ])
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        keywords: {
          keyword:
            '_ as at cofix else end exists exists2 fix for forall fun if IF in let match mod Prop return Set then Type using where with Abort About Add Admit Admitted All Arguments Assumptions Axiom Back BackTo Backtrack Bind Blacklist Canonical Cd Check Class Classes Close Coercion Coercions CoFixpoint CoInductive Collection Combined Compute Conjecture Conjectures Constant constr Constraint Constructors Context Corollary CreateHintDb Cut Declare Defined Definition Delimit Dependencies DependentDerive Drop eauto End Equality Eval Example Existential Existentials Existing Export exporting Extern Extract Extraction Fact Field Fields File Fixpoint Focus for From Function Functional Generalizable Global Goal Grab Grammar Graph Guarded Heap Hint HintDb Hints Hypotheses Hypothesis ident Identity If Immediate Implicit Import Include Inductive Infix Info Initial Inline Inspect Instance Instances Intro Intros Inversion Inversion_clear Language Left Lemma Let Libraries Library Load LoadPath Local Locate Ltac ML Mode Module Modules Monomorphic Morphism Next NoInline Notation Obligation Obligations Opaque Open Optimize Options Parameter Parameters Parametric Path Paths pattern Polymorphic Preterm Print Printing Program Projections Proof Proposition Pwd Qed Quit Rec Record Recursive Redirect Relation Remark Remove Require Reserved Reset Resolve Restart Rewrite Right Ring Rings Save Scheme Scope Scopes Script Search SearchAbout SearchHead SearchPattern SearchRewrite Section Separate Set Setoid Show Solve Sorted Step Strategies Strategy Structure SubClass Table Tables Tactic Term Test Theorem Time Timeout Transparent Type Typeclasses Types Undelimit Undo Unfocus Unfocused Unfold Universe Universes Unset Unshelve using Variable Variables Variant Verbose Visibility where with',
          built_in:
            'abstract absurd admit after apply as assert assumption at auto autorewrite autounfold before bottom btauto by case case_eq cbn cbv change classical_left classical_right clear clearbody cofix compare compute congruence constr_eq constructor contradict contradiction cut cutrewrite cycle decide decompose dependent destruct destruction dintuition discriminate discrR do double dtauto eapply eassumption eauto ecase econstructor edestruct ediscriminate eelim eexact eexists einduction einjection eleft elim elimtype enough equality erewrite eright esimplify_eq esplit evar exact exactly_once exfalso exists f_equal fail field field_simplify field_simplify_eq first firstorder fix fold fourier functional generalize generalizing gfail give_up has_evar hnf idtac in induction injection instantiate intro intro_pattern intros intuition inversion inversion_clear is_evar is_var lapply lazy left lia lra move native_compute nia nsatz omega once pattern pose progress proof psatz quote record red refine reflexivity remember rename repeat replace revert revgoals rewrite rewrite_strat right ring ring_simplify rtauto set setoid_reflexivity setoid_replace setoid_rewrite setoid_symmetry setoid_transitivity shelve shelve_unifiable simpl simple simplify_eq solve specialize split split_Rabs split_Rmult stepl stepr subst sum swap symmetry tactic tauto time timeout top transitivity trivial try tryif unfold unify until using vm_compute with'
        },
        contains: [
          e.QUOTE_STRING_MODE,
          e.COMMENT('\\(\\*', '\\*\\)'),
          e.C_NUMBER_MODE,
          {
            className: 'type',
            excludeBegin: !0,
            begin: '\\|\\s*',
            end: '\\w+'
          },
          { begin: /[-=]>/ }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        case_insensitive: !0,
        aliases: ['cos', 'cls'],
        keywords:
          'property parameter class classmethod clientmethod extends as break catch close continue do d|0 else elseif for goto halt hang h|0 if job j|0 kill k|0 lock l|0 merge new open quit q|0 read r|0 return set s|0 tcommit throw trollback try tstart use view while write w|0 xecute x|0 zkill znspace zn ztrap zwrite zw zzdump zzwrite print zbreak zinsert zload zprint zremove zsave zzprint mv mvcall mvcrt mvdim mvprint zquit zsync ascii',
        contains: [
          {
            className: 'number',
            begin: '\\b(\\d+(\\.\\d*)?|\\.\\d+)',
            relevance: 0
          },
          {
            className: 'string',
            variants: [
              {
                begin: '"',
                end: '"',
                contains: [{ begin: '""', relevance: 0 }]
              }
            ]
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          { className: 'comment', begin: /;/, end: '$', relevance: 0 },
          { className: 'built_in', begin: /(?:\$\$?|\.\.)\^?[a-zA-Z]+/ },
          { className: 'built_in', begin: /\$\$\$[a-zA-Z]+/ },
          { className: 'built_in', begin: /%[a-z]+(?:\.[a-z]+)*/ },
          { className: 'symbol', begin: /\^%?[a-zA-Z][\w]*/ },
          { className: 'keyword', begin: /##class|##super|#define|#dim/ },
          {
            begin: /&sql\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            subLanguage: 'sql'
          },
          {
            begin: /&(js|jscript|javascript)</,
            end: />/,
            excludeBegin: !0,
            excludeEnd: !0,
            subLanguage: 'javascript'
          },
          { begin: /&html<\s*</, end: />\s*>/, subLanguage: 'xml' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t =
        'group clone ms master location colocation order fencing_topology rsc_ticket acl_target acl_group user role tag xml';
      return {
        aliases: ['crm', 'pcmk'],
        case_insensitive: !0,
        keywords: {
          keyword:
            'params meta operations op rule attributes utilization read write deny defined not_defined in_range date spec in ref reference attribute type xpath version and or lt gt tag lte gte eq ne \\ number string',
          literal:
            'Master Started Slave Stopped start promote demote stop monitor true false'
        },
        contains: [
          e.HASH_COMMENT_MODE,
          {
            beginKeywords: 'node',
            starts: {
              end: '\\s*([\\w_-]+:)?',
              starts: { className: 'title', end: '\\s*[\\$\\w_][\\w_-]*' }
            }
          },
          {
            beginKeywords: 'primitive rsc_template',
            starts: {
              className: 'title',
              end: '\\s*[\\$\\w_][\\w_-]*',
              starts: { end: '\\s*@?[\\w_][\\w_\\.:-]*' }
            }
          },
          {
            begin: '\\b(' + t.split(' ').join('|') + ')\\s+',
            keywords: t,
            starts: { className: 'title', end: '[\\$\\w_][\\w_-]*' }
          },
          {
            beginKeywords: 'property rsc_defaults op_defaults',
            starts: { className: 'title', end: '\\s*([\\w_-]+:)?' }
          },
          e.QUOTE_STRING_MODE,
          {
            className: 'meta',
            begin: '(ocf|systemd|service|lsb):[\\w_:-]+',
            relevance: 0
          },
          {
            className: 'number',
            begin: '\\b\\d+(\\.\\d+)?(ms|s|h|m)?',
            relevance: 0
          },
          { className: 'literal', begin: '[-]?(infinity|inf)', relevance: 0 },
          { className: 'attr', begin: /([A-Za-z\$_\#][\w_-]+)=/, relevance: 0 },
          { className: 'tag', begin: '</?', end: '/?>', relevance: 0 }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = '(_[uif](8|16|32|64))?',
        n =
          '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\][=?]?',
        r = {
          keyword:
            'abstract alias as as? asm begin break case class def do else elsif end ensure enum extend for fun if include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? return require select self sizeof struct super then type typeof union uninitialized unless until when while with yield __DIR__ __END_LINE__ __FILE__ __LINE__',
          literal: 'false nil true'
        },
        a = { className: 'subst', begin: '#{', end: '}', keywords: r },
        i = {
          className: 'template-variable',
          variants: [
            { begin: '\\{\\{', end: '\\}\\}' },
            { begin: '\\{%', end: '%\\}' }
          ],
          keywords: r
        };
      function o(e, t) {
        var n = [{ begin: e, end: t }];
        return (n[0].contains = n), n;
      }
      var s = {
          className: 'string',
          contains: [e.BACKSLASH_ESCAPE, a],
          variants: [
            { begin: /'/, end: /'/ },
            { begin: /"/, end: /"/ },
            { begin: /`/, end: /`/ },
            { begin: '%w?\\(', end: '\\)', contains: o('\\(', '\\)') },
            { begin: '%w?\\[', end: '\\]', contains: o('\\[', '\\]') },
            { begin: '%w?{', end: '}', contains: o('{', '}') },
            { begin: '%w?<', end: '>', contains: o('<', '>') },
            { begin: '%w?/', end: '/' },
            { begin: '%w?%', end: '%' },
            { begin: '%w?-', end: '-' },
            { begin: '%w?\\|', end: '\\|' },
            { begin: /<<-\w+$/, end: /^\s*\w+$/ }
          ],
          relevance: 0
        },
        l = [
          i,
          s,
          {
            className: 'string',
            variants: [
              { begin: '%q\\(', end: '\\)', contains: o('\\(', '\\)') },
              { begin: '%q\\[', end: '\\]', contains: o('\\[', '\\]') },
              { begin: '%q{', end: '}', contains: o('{', '}') },
              { begin: '%q<', end: '>', contains: o('<', '>') },
              { begin: '%q/', end: '/' },
              { begin: '%q%', end: '%' },
              { begin: '%q-', end: '-' },
              { begin: '%q\\|', end: '\\|' },
              { begin: /<<-'\w+'$/, end: /^\s*\w+$/ }
            ],
            relevance: 0
          },
          {
            begin:
              '(!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~)\\s*',
            contains: [
              {
                className: 'regexp',
                contains: [e.BACKSLASH_ESCAPE, a],
                variants: [
                  { begin: '//[a-z]*', relevance: 0 },
                  { begin: '/', end: '/[a-z]*' },
                  { begin: '%r\\(', end: '\\)', contains: o('\\(', '\\)') },
                  { begin: '%r\\[', end: '\\]', contains: o('\\[', '\\]') },
                  { begin: '%r{', end: '}', contains: o('{', '}') },
                  { begin: '%r<', end: '>', contains: o('<', '>') },
                  { begin: '%r/', end: '/' },
                  { begin: '%r%', end: '%' },
                  { begin: '%r-', end: '-' },
                  { begin: '%r\\|', end: '\\|' }
                ]
              }
            ],
            relevance: 0
          },
          {
            className: 'regexp',
            contains: [e.BACKSLASH_ESCAPE, a],
            variants: [
              { begin: '%r\\(', end: '\\)', contains: o('\\(', '\\)') },
              { begin: '%r\\[', end: '\\]', contains: o('\\[', '\\]') },
              { begin: '%r{', end: '}', contains: o('{', '}') },
              { begin: '%r<', end: '>', contains: o('<', '>') },
              { begin: '%r/', end: '/' },
              { begin: '%r%', end: '%' },
              { begin: '%r-', end: '-' },
              { begin: '%r\\|', end: '\\|' }
            ],
            relevance: 0
          },
          {
            className: 'meta',
            begin: '@\\[',
            end: '\\]',
            contains: [
              e.inherit(e.QUOTE_STRING_MODE, { className: 'meta-string' })
            ]
          },
          e.HASH_COMMENT_MODE,
          {
            className: 'class',
            beginKeywords: 'class module struct',
            end: '$|;',
            illegal: /=/,
            contains: [
              e.HASH_COMMENT_MODE,
              e.inherit(e.TITLE_MODE, {
                begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?'
              }),
              { begin: '<' }
            ]
          },
          {
            className: 'class',
            beginKeywords: 'lib enum union',
            end: '$|;',
            illegal: /=/,
            contains: [
              e.HASH_COMMENT_MODE,
              e.inherit(e.TITLE_MODE, {
                begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?'
              })
            ],
            relevance: 10
          },
          {
            className: 'function',
            beginKeywords: 'def',
            end: /\B\b/,
            contains: [e.inherit(e.TITLE_MODE, { begin: n, endsParent: !0 })]
          },
          {
            className: 'function',
            beginKeywords: 'fun macro',
            end: /\B\b/,
            contains: [e.inherit(e.TITLE_MODE, { begin: n, endsParent: !0 })],
            relevance: 5
          },
          {
            className: 'symbol',
            begin: e.UNDERSCORE_IDENT_RE + '(\\!|\\?)?:',
            relevance: 0
          },
          {
            className: 'symbol',
            begin: ':',
            contains: [s, { begin: n }],
            relevance: 0
          },
          {
            className: 'number',
            variants: [
              { begin: '\\b0b([01_]*[01])' + t },
              { begin: '\\b0o([0-7_]*[0-7])' + t },
              { begin: '\\b0x([A-Fa-f0-9_]*[A-Fa-f0-9])' + t },
              {
                begin:
                  '\\b(([0-9][0-9_]*[0-9]|[0-9])(\\.[0-9_]*[0-9])?([eE][+-]?[0-9_]*[0-9])?)' +
                  t
              }
            ],
            relevance: 0
          }
        ];
      return (
        (a.contains = l),
        (i.contains = l.slice(1)),
        {
          aliases: ['cr'],
          lexemes: '[a-zA-Z_]\\w*[!?=]?',
          keywords: r,
          contains: l
        }
      );
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          keyword:
            'abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield',
          literal: 'null false true'
        },
        n = {
          className: 'string',
          begin: '@"',
          end: '"',
          contains: [{ begin: '""' }]
        },
        r = e.inherit(n, { illegal: /\n/ }),
        a = { className: 'subst', begin: '{', end: '}', keywords: t },
        i = e.inherit(a, { illegal: /\n/ }),
        o = {
          className: 'string',
          begin: /\$"/,
          end: '"',
          illegal: /\n/,
          contains: [{ begin: '{{' }, { begin: '}}' }, e.BACKSLASH_ESCAPE, i]
        },
        s = {
          className: 'string',
          begin: /\$@"/,
          end: '"',
          contains: [{ begin: '{{' }, { begin: '}}' }, { begin: '""' }, a]
        },
        l = e.inherit(s, {
          illegal: /\n/,
          contains: [{ begin: '{{' }, { begin: '}}' }, { begin: '""' }, i]
        });
      (a.contains = [
        s,
        o,
        n,
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        e.C_NUMBER_MODE,
        e.C_BLOCK_COMMENT_MODE
      ]),
        (i.contains = [
          l,
          o,
          r,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          e.C_NUMBER_MODE,
          e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })
        ]);
      var c = { variants: [s, o, n, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE] },
        d =
          e.IDENT_RE +
          '(<' +
          e.IDENT_RE +
          '(\\s*,\\s*' +
          e.IDENT_RE +
          ')*>)?(\\[\\])?';
      return {
        aliases: ['csharp'],
        keywords: t,
        illegal: /::/,
        contains: [
          e.COMMENT('///', '$', {
            returnBegin: !0,
            contains: [
              {
                className: 'doctag',
                variants: [
                  { begin: '///', relevance: 0 },
                  { begin: '\x3c!--|--\x3e' },
                  { begin: '</?', end: '>' }
                ]
              }
            ]
          }),
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          {
            className: 'meta',
            begin: '#',
            end: '$',
            keywords: {
              'meta-keyword':
                'if else elif endif define undef warning error line region endregion pragma checksum'
            }
          },
          c,
          e.C_NUMBER_MODE,
          {
            beginKeywords: 'class interface',
            end: /[{;=]/,
            illegal: /[^\s:]/,
            contains: [
              e.TITLE_MODE,
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          {
            beginKeywords: 'namespace',
            end: /[{;=]/,
            illegal: /[^\s:]/,
            contains: [
              e.inherit(e.TITLE_MODE, { begin: '[a-zA-Z](\\.?\\w)*' }),
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          {
            className: 'meta',
            begin: '^\\s*\\[',
            excludeBegin: !0,
            end: '\\]',
            excludeEnd: !0,
            contains: [{ className: 'meta-string', begin: /"/, end: /"/ }]
          },
          { beginKeywords: 'new return throw await else', relevance: 0 },
          {
            className: 'function',
            begin: '(' + d + '\\s+)+' + e.IDENT_RE + '\\s*\\(',
            returnBegin: !0,
            end: /[{;=]/,
            excludeEnd: !0,
            keywords: t,
            contains: [
              {
                begin: e.IDENT_RE + '\\s*\\(',
                returnBegin: !0,
                contains: [e.TITLE_MODE],
                relevance: 0
              },
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: t,
                relevance: 0,
                contains: [c, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE]
              },
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE
            ]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        case_insensitive: !1,
        lexemes: '[a-zA-Z][a-zA-Z0-9_-]*',
        keywords: {
          keyword:
            'base-uri child-src connect-src default-src font-src form-action frame-ancestors frame-src img-src media-src object-src plugin-types report-uri sandbox script-src style-src'
        },
        contains: [
          { className: 'string', begin: "'", end: "'" },
          {
            className: 'attribute',
            begin: '^Content',
            end: ':',
            excludeEnd: !0
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
        begin: /[A-Z\_\.\-]+\s*:/,
        returnBegin: !0,
        end: ';',
        endsWithParent: !0,
        contains: [
          {
            className: 'attribute',
            begin: /\S/,
            end: ':',
            excludeEnd: !0,
            starts: {
              endsWithParent: !0,
              excludeEnd: !0,
              contains: [
                {
                  begin: /[\w-]+\(/,
                  returnBegin: !0,
                  contains: [
                    { className: 'built_in', begin: /[\w-]+/ },
                    {
                      begin: /\(/,
                      end: /\)/,
                      contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                    }
                  ]
                },
                e.CSS_NUMBER_MODE,
                e.QUOTE_STRING_MODE,
                e.APOS_STRING_MODE,
                e.C_BLOCK_COMMENT_MODE,
                { className: 'number', begin: '#[0-9A-Fa-f]+' },
                { className: 'meta', begin: '!important' }
              ]
            }
          }
        ]
      };
      return {
        case_insensitive: !0,
        illegal: /[=\/|'\$]/,
        contains: [
          e.C_BLOCK_COMMENT_MODE,
          { className: 'selector-id', begin: /#[A-Za-z0-9_-]+/ },
          { className: 'selector-class', begin: /\.[A-Za-z0-9_-]+/ },
          { className: 'selector-attr', begin: /\[/, end: /\]/, illegal: '$' },
          {
            className: 'selector-pseudo',
            begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
          },
          {
            begin: '@(font-face|page)',
            lexemes: '[a-z-]+',
            keywords: 'font-face page'
          },
          {
            begin: '@',
            end: '[{;]',
            illegal: /:/,
            contains: [
              { className: 'keyword', begin: /\w+/ },
              {
                begin: /\s/,
                endsWithParent: !0,
                excludeEnd: !0,
                relevance: 0,
                contains: [
                  e.APOS_STRING_MODE,
                  e.QUOTE_STRING_MODE,
                  e.CSS_NUMBER_MODE
                ]
              }
            ]
          },
          {
            className: 'selector-tag',
            begin: '[a-zA-Z-][a-zA-Z0-9_-]*',
            relevance: 0
          },
          {
            begin: '{',
            end: '}',
            illegal: /\S/,
            contains: [e.C_BLOCK_COMMENT_MODE, t]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t =
          '((0|[1-9][\\d_]*)|0[bB][01_]+|0[xX]([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*))',
        n =
          '\\\\([\'"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};',
        r = {
          className: 'number',
          begin: '\\b' + t + '(L|u|U|Lu|LU|uL|UL)?',
          relevance: 0
        },
        a = {
          className: 'number',
          begin:
            '\\b(((0[xX](([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)\\.([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)|\\.?([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*))[pP][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))|((0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)(\\.\\d*|([eE][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)))|\\d+\\.(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)|\\.(0|[1-9][\\d_]*)([eE][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))?))([fF]|L|i|[fF]i|Li)?|' +
            t +
            '(i|[fF]i|Li))',
          relevance: 0
        },
        i = {
          className: 'string',
          begin: "'(" + n + '|.)',
          end: "'",
          illegal: '.'
        },
        o = {
          className: 'string',
          begin: '"',
          contains: [{ begin: n, relevance: 0 }],
          end: '"[cwd]?'
        },
        s = e.COMMENT('\\/\\+', '\\+\\/', {
          contains: ['self'],
          relevance: 10
        });
      return {
        lexemes: e.UNDERSCORE_IDENT_RE,
        keywords: {
          keyword:
            'abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__',
          built_in:
            'bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring',
          literal: 'false null true'
        },
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          s,
          {
            className: 'string',
            begin: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
            relevance: 10
          },
          o,
          { className: 'string', begin: '[rq]"', end: '"[cwd]?', relevance: 5 },
          { className: 'string', begin: '`', end: '`[cwd]?' },
          { className: 'string', begin: 'q"\\{', end: '\\}"' },
          a,
          r,
          i,
          { className: 'meta', begin: '^#!', end: '$', relevance: 5 },
          { className: 'meta', begin: '#(line)', end: '$', relevance: 5 },
          { className: 'keyword', begin: '@[a-zA-Z_][a-zA-Z_\\d]*' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['md', 'mkdown', 'mkd'],
        contains: [
          {
            className: 'section',
            variants: [
              { begin: '^#{1,6}', end: '$' },
              { begin: '^.+?\\n[=-]{2,}$' }
            ]
          },
          { begin: '<', end: '>', subLanguage: 'xml', relevance: 0 },
          { className: 'bullet', begin: '^([*+-]|(\\d+\\.))\\s+' },
          { className: 'strong', begin: '[*_]{2}.+?[*_]{2}' },
          {
            className: 'emphasis',
            variants: [{ begin: '\\*.+?\\*' }, { begin: '_.+?_', relevance: 0 }]
          },
          { className: 'quote', begin: '^>\\s+', end: '$' },
          {
            className: 'code',
            variants: [
              { begin: '^```w*s*$', end: '^```s*$' },
              { begin: '`.+?`' },
              { begin: '^( {4}|\t)', end: '$', relevance: 0 }
            ]
          },
          { begin: '^[-\\*]{3,}', end: '$' },
          {
            begin: '\\[.+?\\][\\(\\[].*?[\\)\\]]',
            returnBegin: !0,
            contains: [
              {
                className: 'string',
                begin: '\\[',
                end: '\\]',
                excludeBegin: !0,
                returnEnd: !0,
                relevance: 0
              },
              {
                className: 'link',
                begin: '\\]\\(',
                end: '\\)',
                excludeBegin: !0,
                excludeEnd: !0
              },
              {
                className: 'symbol',
                begin: '\\]\\[',
                end: '\\]',
                excludeBegin: !0,
                excludeEnd: !0
              }
            ],
            relevance: 10
          },
          {
            begin: /^\[[^\n]+\]:/,
            returnBegin: !0,
            contains: [
              {
                className: 'symbol',
                begin: /\[/,
                end: /\]/,
                excludeBegin: !0,
                excludeEnd: !0
              },
              { className: 'link', begin: /:\s*/, end: /$/, excludeBegin: !0 }
            ]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          className: 'subst',
          begin: '\\$\\{',
          end: '}',
          keywords: 'true false null this is new super'
        },
        n = {
          className: 'string',
          variants: [
            { begin: "r'''", end: "'''" },
            { begin: 'r"""', end: '"""' },
            { begin: "r'", end: "'", illegal: '\\n' },
            { begin: 'r"', end: '"', illegal: '\\n' },
            { begin: "'''", end: "'''", contains: [e.BACKSLASH_ESCAPE, t] },
            { begin: '"""', end: '"""', contains: [e.BACKSLASH_ESCAPE, t] },
            {
              begin: "'",
              end: "'",
              illegal: '\\n',
              contains: [e.BACKSLASH_ESCAPE, t]
            },
            {
              begin: '"',
              end: '"',
              illegal: '\\n',
              contains: [e.BACKSLASH_ESCAPE, t]
            }
          ]
        };
      t.contains = [e.C_NUMBER_MODE, n];
      return {
        keywords: {
          keyword:
            'assert async await break case catch class const continue default do else enum extends false final finally for if in is new null rethrow return super switch sync this throw true try var void while with yield abstract as dynamic export external factory get implements import library operator part set static typedef',
          built_in:
            'print Comparable DateTime Duration Function Iterable Iterator List Map Match Null Object Pattern RegExp Set Stopwatch String StringBuffer StringSink Symbol Type Uri bool double int num document window querySelector querySelectorAll Element ElementList'
        },
        contains: [
          n,
          e.COMMENT('/\\*\\*', '\\*/', { subLanguage: 'markdown' }),
          e.COMMENT('///', '$', { subLanguage: 'markdown' }),
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          {
            className: 'class',
            beginKeywords: 'class interface',
            end: '{',
            excludeEnd: !0,
            contains: [
              { beginKeywords: 'extends implements' },
              e.UNDERSCORE_TITLE_MODE
            ]
          },
          e.C_NUMBER_MODE,
          { className: 'meta', begin: '@[A-Za-z]+' },
          { begin: '=>' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t =
          'exports register file shl array record property for mod while set ally label uses raise not stored class safecall var interface or private static exit index inherited to else stdcall override shr asm far resourcestring finalization packed virtual out and protected library do xorwrite goto near function end div overload object unit begin string on inline repeat until destructor write message program with read initialization except default nil if case cdecl in downto threadvar of try pascal const external constructor type public then implementation finally published procedure absolute reintroduce operator as is abstract alias assembler bitpacked break continue cppdecl cvar enumerator experimental platform deprecated unimplemented dynamic export far16 forward generic helper implements interrupt iochecks local name nodefault noreturn nostackframe oldfpccall otherwise saveregisters softfloat specialize strict unaligned varargs ',
        n = [
          e.C_LINE_COMMENT_MODE,
          e.COMMENT(/\{/, /\}/, { relevance: 0 }),
          e.COMMENT(/\(\*/, /\*\)/, { relevance: 10 })
        ],
        r = {
          className: 'meta',
          variants: [
            { begin: /\{\$/, end: /\}/ },
            { begin: /\(\*\$/, end: /\*\)/ }
          ]
        },
        a = {
          className: 'string',
          begin: /'/,
          end: /'/,
          contains: [{ begin: /''/ }]
        },
        i = { className: 'string', begin: /(#\d+)+/ },
        o = {
          begin: e.IDENT_RE + '\\s*=\\s*class\\s*\\(',
          returnBegin: !0,
          contains: [e.TITLE_MODE]
        },
        s = {
          className: 'function',
          beginKeywords: 'function constructor destructor procedure',
          end: /[:;]/,
          keywords: 'function constructor|10 destructor|10 procedure|10',
          contains: [
            e.TITLE_MODE,
            {
              className: 'params',
              begin: /\(/,
              end: /\)/,
              keywords: t,
              contains: [a, i, r].concat(n)
            },
            r
          ].concat(n)
        };
      return {
        aliases: [
          'dpr',
          'dfm',
          'pas',
          'pascal',
          'freepascal',
          'lazarus',
          'lpr',
          'lfm'
        ],
        case_insensitive: !0,
        keywords: t,
        illegal: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
        contains: [a, i, e.NUMBER_MODE, o, s, r].concat(n)
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['patch'],
        contains: [
          {
            className: 'meta',
            relevance: 10,
            variants: [
              { begin: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/ },
              { begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/ },
              { begin: /^\-\-\- +\d+,\d+ +\-\-\-\-$/ }
            ]
          },
          {
            className: 'comment',
            variants: [
              { begin: /Index: /, end: /$/ },
              { begin: /={3,}/, end: /$/ },
              { begin: /^\-{3}/, end: /$/ },
              { begin: /^\*{3} /, end: /$/ },
              { begin: /^\+{3}/, end: /$/ },
              { begin: /\*{5}/, end: /\*{5}$/ }
            ]
          },
          { className: 'addition', begin: '^\\+', end: '$' },
          { className: 'deletion', begin: '^\\-', end: '$' },
          { className: 'addition', begin: '^\\!', end: '$' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
        begin: /\|[A-Za-z]+:?/,
        keywords: {
          name:
            'truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone'
        },
        contains: [e.QUOTE_STRING_MODE, e.APOS_STRING_MODE]
      };
      return {
        aliases: ['jinja'],
        case_insensitive: !0,
        subLanguage: 'xml',
        contains: [
          e.COMMENT(/\{%\s*comment\s*%}/, /\{%\s*endcomment\s*%}/),
          e.COMMENT(/\{#/, /#}/),
          {
            className: 'template-tag',
            begin: /\{%/,
            end: /%}/,
            contains: [
              {
                className: 'name',
                begin: /\w+/,
                keywords: {
                  name:
                    'comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim'
                },
                starts: {
                  endsWithParent: !0,
                  keywords: 'in by as',
                  contains: [t],
                  relevance: 0
                }
              }
            ]
          },
          {
            className: 'template-variable',
            begin: /\{\{/,
            end: /}}/,
            contains: [t]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['bind', 'zone'],
        keywords: {
          keyword:
            'IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX LOC MX NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT'
        },
        contains: [
          e.COMMENT(';', '$', { relevance: 0 }),
          { className: 'meta', begin: /^\$(TTL|GENERATE|INCLUDE|ORIGIN)\b/ },
          {
            className: 'number',
            begin:
              '((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b'
          },
          {
            className: 'number',
            begin:
              '((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b'
          },
          e.inherit(e.NUMBER_MODE, { begin: /\b\d+[dhwm]?/ })
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['docker'],
        case_insensitive: !0,
        keywords: 'from maintainer expose env arg user onbuild stopsignal',
        contains: [
          e.HASH_COMMENT_MODE,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          e.NUMBER_MODE,
          {
            beginKeywords:
              'run cmd entrypoint volume add copy workdir label healthcheck shell',
            starts: { end: /[^\\]\n/, subLanguage: 'bash' }
          }
        ],
        illegal: '</'
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = e.COMMENT(/^\s*@?rem\b/, /$/, { relevance: 10 });
      return {
        aliases: ['bat', 'cmd'],
        case_insensitive: !0,
        illegal: /\/\*/,
        keywords: {
          keyword:
            'if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq',
          built_in:
            'prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux shift cd dir echo setlocal endlocal set pause copy append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color comp compact convert date dir diskcomp diskcopy doskey erase fs find findstr format ftype graftabl help keyb label md mkdir mode more move path pause print popd pushd promt rd recover rem rename replace restore rmdir shiftsort start subst time title tree type ver verify vol ping net ipconfig taskkill xcopy ren del'
        },
        contains: [
          { className: 'variable', begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/ },
          {
            className: 'function',
            begin: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)',
            end: 'goto:eof',
            contains: [
              e.inherit(e.TITLE_MODE, {
                begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'
              }),
              t
            ]
          },
          { className: 'number', begin: '\\b\\d+', relevance: 0 },
          t
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        keywords: 'dsconfig',
        contains: [
          {
            className: 'keyword',
            begin: '^dsconfig',
            end: '\\s',
            excludeEnd: !0,
            relevance: 10
          },
          {
            className: 'built_in',
            begin: '(list|create|get|set|delete)-(\\w+)',
            end: '\\s',
            excludeEnd: !0,
            illegal: '!@#$%^&*()',
            relevance: 10
          },
          {
            className: 'built_in',
            begin: '--(\\w+)',
            end: '\\s',
            excludeEnd: !0
          },
          { className: 'string', begin: /"/, end: /"/ },
          { className: 'string', begin: /'/, end: /'/ },
          {
            className: 'string',
            begin: '[\\w-?]+:\\w+',
            end: '\\W',
            relevance: 0
          },
          {
            className: 'string',
            begin: '\\w+-?\\w+',
            end: '\\W',
            relevance: 0
          },
          e.HASH_COMMENT_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          className: 'string',
          variants: [
            e.inherit(e.QUOTE_STRING_MODE, { begin: '((u8?|U)|L)?"' }),
            { begin: '(u8?|U)?R"', end: '"', contains: [e.BACKSLASH_ESCAPE] },
            { begin: "'\\\\?.", end: "'", illegal: '.' }
          ]
        },
        n = {
          className: 'number',
          variants: [
            { begin: '\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)' },
            { begin: e.C_NUMBER_RE }
          ],
          relevance: 0
        },
        r = {
          className: 'meta',
          begin: '#',
          end: '$',
          keywords: {
            'meta-keyword': 'if else elif endif define undef ifdef ifndef'
          },
          contains: [
            { begin: /\\\n/, relevance: 0 },
            {
              beginKeywords: 'include',
              end: '$',
              keywords: { 'meta-keyword': 'include' },
              contains: [
                e.inherit(t, { className: 'meta-string' }),
                {
                  className: 'meta-string',
                  begin: '<',
                  end: '>',
                  illegal: '\\n'
                }
              ]
            },
            t,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        a = { className: 'variable', begin: '\\&[a-z\\d_]*\\b' },
        i = { className: 'meta-keyword', begin: '/[a-z][a-z\\d-]*/' },
        o = { className: 'symbol', begin: '^\\s*[a-zA-Z_][a-zA-Z\\d_]*:' },
        s = { className: 'params', begin: '<', end: '>', contains: [n, a] },
        l = {
          className: 'class',
          begin: /[a-zA-Z_][a-zA-Z\d_@]*\s{/,
          end: /[{;=]/,
          returnBegin: !0,
          excludeEnd: !0
        };
      return {
        keywords: '',
        contains: [
          {
            className: 'class',
            begin: '/\\s*{',
            end: '};',
            relevance: 10,
            contains: [
              a,
              i,
              o,
              l,
              s,
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              n,
              t
            ]
          },
          a,
          i,
          o,
          l,
          s,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          n,
          t,
          r,
          { begin: e.IDENT_RE + '::', keywords: '' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['dst'],
        case_insensitive: !0,
        subLanguage: 'xml',
        contains: [
          {
            className: 'template-tag',
            begin: /\{[#\/]/,
            end: /\}/,
            illegal: /;/,
            contains: [
              {
                className: 'name',
                begin: /[a-zA-Z\.-]+/,
                starts: {
                  endsWithParent: !0,
                  relevance: 0,
                  contains: [e.QUOTE_STRING_MODE]
                }
              }
            ]
          },
          {
            className: 'template-variable',
            begin: /\{/,
            end: /\}/,
            illegal: /;/,
            keywords: 'if eq ne lt lte gt gte select default math sep'
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = e.COMMENT(/\(\*/, /\*\)/);
      return {
        illegal: /\S/,
        contains: [
          t,
          {
            className: 'attribute',
            begin: /^[ ]*[a-zA-Z][a-zA-Z-]*([\s-]+[a-zA-Z][a-zA-Z]*)*/
          },
          {
            begin: /=/,
            end: /;/,
            contains: [
              t,
              { className: 'meta', begin: /\?.*\?/ },
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE
            ]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = '[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?',
        n =
          'and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote',
        r = {
          className: 'subst',
          begin: '#\\{',
          end: '}',
          lexemes: t,
          keywords: n
        },
        a = {
          className: 'string',
          contains: [e.BACKSLASH_ESCAPE, r],
          variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }]
        },
        i = {
          className: 'function',
          beginKeywords: 'def defp defmacro',
          end: /\B\b/,
          contains: [e.inherit(e.TITLE_MODE, { begin: t, endsParent: !0 })]
        },
        o = e.inherit(i, {
          className: 'class',
          beginKeywords: 'defimpl defmodule defprotocol defrecord',
          end: /\bdo\b|$|;/
        }),
        s = [
          a,
          e.HASH_COMMENT_MODE,
          o,
          i,
          {
            className: 'symbol',
            begin: ':(?!\\s)',
            contains: [
              a,
              {
                begin:
                  '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?'
              }
            ],
            relevance: 0
          },
          { className: 'symbol', begin: t + ':', relevance: 0 },
          {
            className: 'number',
            begin:
              '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
            relevance: 0
          },
          { className: 'variable', begin: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))' },
          { begin: '->' },
          {
            begin: '(' + e.RE_STARTERS_RE + ')\\s*',
            contains: [
              e.HASH_COMMENT_MODE,
              {
                className: 'regexp',
                illegal: '\\n',
                contains: [e.BACKSLASH_ESCAPE, r],
                variants: [
                  { begin: '/', end: '/[a-z]*' },
                  { begin: '%r\\[', end: '\\][a-z]*' }
                ]
              }
            ],
            relevance: 0
          }
        ];
      return (r.contains = s), { lexemes: t, keywords: n, contains: s };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          variants: [
            e.COMMENT('--', '$'),
            e.COMMENT('{-', '-}', { contains: ['self'] })
          ]
        },
        n = { className: 'type', begin: "\\b[A-Z][\\w']*", relevance: 0 },
        r = {
          begin: '\\(',
          end: '\\)',
          illegal: '"',
          contains: [
            {
              className: 'type',
              begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'
            },
            t
          ]
        };
      return {
        keywords:
          'let in if then else case of where module import exposing type alias as infix infixl infixr port effect command subscription',
        contains: [
          {
            beginKeywords: 'port effect module',
            end: 'exposing',
            keywords: 'port effect module where command subscription exposing',
            contains: [r, t],
            illegal: '\\W\\.|;'
          },
          {
            begin: 'import',
            end: '$',
            keywords: 'import as exposing',
            contains: [r, t],
            illegal: '\\W\\.|;'
          },
          {
            begin: 'type',
            end: '$',
            keywords: 'type alias',
            contains: [n, r, { begin: '{', end: '}', contains: r.contains }, t]
          },
          {
            beginKeywords: 'infix infixl infixr',
            end: '$',
            contains: [e.C_NUMBER_MODE, t]
          },
          { begin: 'port', end: '$', keywords: 'port', contains: [t] },
          e.QUOTE_STRING_MODE,
          e.C_NUMBER_MODE,
          n,
          e.inherit(e.TITLE_MODE, { begin: "^[_a-z][\\w']*" }),
          t,
          { begin: '->|<-' }
        ],
        illegal: /;/
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t =
          '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?',
        n = {
          keyword:
            'and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor',
          literal: 'true false nil'
        },
        r = { className: 'doctag', begin: '@[A-Za-z]+' },
        a = { begin: '#<', end: '>' },
        i = [
          e.COMMENT('#', '$', { contains: [r] }),
          e.COMMENT('^\\=begin', '^\\=end', { contains: [r], relevance: 10 }),
          e.COMMENT('^__END__', '\\n$')
        ],
        o = { className: 'subst', begin: '#\\{', end: '}', keywords: n },
        s = {
          className: 'string',
          contains: [e.BACKSLASH_ESCAPE, o],
          variants: [
            { begin: /'/, end: /'/ },
            { begin: /"/, end: /"/ },
            { begin: /`/, end: /`/ },
            { begin: '%[qQwWx]?\\(', end: '\\)' },
            { begin: '%[qQwWx]?\\[', end: '\\]' },
            { begin: '%[qQwWx]?{', end: '}' },
            { begin: '%[qQwWx]?<', end: '>' },
            { begin: '%[qQwWx]?/', end: '/' },
            { begin: '%[qQwWx]?%', end: '%' },
            { begin: '%[qQwWx]?-', end: '-' },
            { begin: '%[qQwWx]?\\|', end: '\\|' },
            {
              begin: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
            },
            { begin: /<<(-?)\w+$/, end: /^\s*\w+$/ }
          ]
        },
        l = {
          className: 'params',
          begin: '\\(',
          end: '\\)',
          endsParent: !0,
          keywords: n
        },
        c = [
          s,
          a,
          {
            className: 'class',
            beginKeywords: 'class module',
            end: '$|;',
            illegal: /=/,
            contains: [
              e.inherit(e.TITLE_MODE, {
                begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?'
              }),
              {
                begin: '<\\s*',
                contains: [{ begin: '(' + e.IDENT_RE + '::)?' + e.IDENT_RE }]
              }
            ].concat(i)
          },
          {
            className: 'function',
            beginKeywords: 'def',
            end: '$|;',
            contains: [e.inherit(e.TITLE_MODE, { begin: t }), l].concat(i)
          },
          { begin: e.IDENT_RE + '::' },
          {
            className: 'symbol',
            begin: e.UNDERSCORE_IDENT_RE + '(\\!|\\?)?:',
            relevance: 0
          },
          {
            className: 'symbol',
            begin: ':(?!\\s)',
            contains: [s, { begin: t }],
            relevance: 0
          },
          {
            className: 'number',
            begin:
              '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
            relevance: 0
          },
          { begin: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))' },
          { className: 'params', begin: /\|/, end: /\|/, keywords: n },
          {
            begin: '(' + e.RE_STARTERS_RE + '|unless)\\s*',
            keywords: 'unless',
            contains: [
              a,
              {
                className: 'regexp',
                contains: [e.BACKSLASH_ESCAPE, o],
                illegal: /\n/,
                variants: [
                  { begin: '/', end: '/[a-z]*' },
                  { begin: '%r{', end: '}[a-z]*' },
                  { begin: '%r\\(', end: '\\)[a-z]*' },
                  { begin: '%r!', end: '![a-z]*' },
                  { begin: '%r\\[', end: '\\][a-z]*' }
                ]
              }
            ].concat(i),
            relevance: 0
          }
        ].concat(i);
      (o.contains = c), (l.contains = c);
      var d = [
        { begin: /^\s*=>/, starts: { end: '$', contains: c } },
        {
          className: 'meta',
          begin:
            '^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)',
          starts: { end: '$', contains: c }
        }
      ];
      return {
        aliases: ['rb', 'gemspec', 'podspec', 'thor', 'irb'],
        keywords: n,
        illegal: /\/\*/,
        contains: i.concat(d).concat(c)
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        subLanguage: 'xml',
        contains: [
          e.COMMENT('<%#', '%>'),
          {
            begin: '<%[%=-]?',
            end: '[%-]?%>',
            subLanguage: 'ruby',
            excludeBegin: !0,
            excludeEnd: !0
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        keywords: {
          built_in: 'spawn spawn_link self',
          keyword:
            'after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor'
        },
        contains: [
          { className: 'meta', begin: '^[0-9]+> ', relevance: 10 },
          e.COMMENT('%', '$'),
          {
            className: 'number',
            begin: '\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)',
            relevance: 0
          },
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          { begin: '\\?(::)?([A-Z]\\w*(::)?)+' },
          { begin: '->' },
          { begin: 'ok' },
          { begin: '!' },
          {
            begin:
              "(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",
            relevance: 0
          },
          { begin: "[A-Z][a-zA-Z0-9_']*", relevance: 0 }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = "[a-z'][a-zA-Z0-9_']*",
        n = '(' + t + ':' + t + '|' + t + ')',
        r = {
          keyword:
            'after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor',
          literal: 'false true'
        },
        a = e.COMMENT('%', '$'),
        i = {
          className: 'number',
          begin: '\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)',
          relevance: 0
        },
        o = { begin: 'fun\\s+' + t + '/\\d+' },
        s = {
          begin: n + '\\(',
          end: '\\)',
          returnBegin: !0,
          relevance: 0,
          contains: [
            { begin: n, relevance: 0 },
            {
              begin: '\\(',
              end: '\\)',
              endsWithParent: !0,
              returnEnd: !0,
              relevance: 0
            }
          ]
        },
        l = { begin: '{', end: '}', relevance: 0 },
        c = { begin: '\\b_([A-Z][A-Za-z0-9_]*)?', relevance: 0 },
        d = { begin: '[A-Z][a-zA-Z0-9_]*', relevance: 0 },
        u = {
          begin: '#' + e.UNDERSCORE_IDENT_RE,
          relevance: 0,
          returnBegin: !0,
          contains: [
            { begin: '#' + e.UNDERSCORE_IDENT_RE, relevance: 0 },
            { begin: '{', end: '}', relevance: 0 }
          ]
        },
        p = {
          beginKeywords: 'fun receive if try case',
          end: 'end',
          keywords: r
        };
      p.contains = [
        a,
        o,
        e.inherit(e.APOS_STRING_MODE, { className: '' }),
        p,
        s,
        e.QUOTE_STRING_MODE,
        i,
        l,
        c,
        d,
        u
      ];
      var m = [a, o, p, s, e.QUOTE_STRING_MODE, i, l, c, d, u];
      (s.contains[1].contains = m),
        (l.contains = m),
        (u.contains[1].contains = m);
      var g = { className: 'params', begin: '\\(', end: '\\)', contains: m };
      return {
        aliases: ['erl'],
        keywords: r,
        illegal: '(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))',
        contains: [
          {
            className: 'function',
            begin: '^' + t + '\\s*\\(',
            end: '->',
            returnBegin: !0,
            illegal: '\\(|#|//|/\\*|\\\\|:|;',
            contains: [g, e.inherit(e.TITLE_MODE, { begin: t })],
            starts: { end: ';|\\.', keywords: r, contains: m }
          },
          a,
          {
            begin: '^-',
            end: '\\.',
            relevance: 0,
            excludeEnd: !0,
            returnBegin: !0,
            lexemes: '-' + e.IDENT_RE,
            keywords:
              '-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn -import -include -include_lib -compile -define -else -endif -file -behaviour -behavior -spec',
            contains: [g]
          },
          i,
          e.QUOTE_STRING_MODE,
          u,
          c,
          d,
          l,
          { begin: /\.$/ }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['xlsx', 'xls'],
        case_insensitive: !0,
        lexemes: /[a-zA-Z][\w\.]*/,
        keywords: {
          built_in:
            'ABS ACCRINT ACCRINTM ACOS ACOSH ACOT ACOTH AGGREGATE ADDRESS AMORDEGRC AMORLINC AND ARABIC AREAS ASC ASIN ASINH ATAN ATAN2 ATANH AVEDEV AVERAGE AVERAGEA AVERAGEIF AVERAGEIFS BAHTTEXT BASE BESSELI BESSELJ BESSELK BESSELY BETADIST BETA.DIST BETAINV BETA.INV BIN2DEC BIN2HEX BIN2OCT BINOMDIST BINOM.DIST BINOM.DIST.RANGE BINOM.INV BITAND BITLSHIFT BITOR BITRSHIFT BITXOR CALL CEILING CEILING.MATH CEILING.PRECISE CELL CHAR CHIDIST CHIINV CHITEST CHISQ.DIST CHISQ.DIST.RT CHISQ.INV CHISQ.INV.RT CHISQ.TEST CHOOSE CLEAN CODE COLUMN COLUMNS COMBIN COMBINA COMPLEX CONCAT CONCATENATE CONFIDENCE CONFIDENCE.NORM CONFIDENCE.T CONVERT CORREL COS COSH COT COTH COUNT COUNTA COUNTBLANK COUNTIF COUNTIFS COUPDAYBS COUPDAYS COUPDAYSNC COUPNCD COUPNUM COUPPCD COVAR COVARIANCE.P COVARIANCE.S CRITBINOM CSC CSCH CUBEKPIMEMBER CUBEMEMBER CUBEMEMBERPROPERTY CUBERANKEDMEMBER CUBESET CUBESETCOUNT CUBEVALUE CUMIPMT CUMPRINC DATE DATEDIF DATEVALUE DAVERAGE DAY DAYS DAYS360 DB DBCS DCOUNT DCOUNTA DDB DEC2BIN DEC2HEX DEC2OCT DECIMAL DEGREES DELTA DEVSQ DGET DISC DMAX DMIN DOLLAR DOLLARDE DOLLARFR DPRODUCT DSTDEV DSTDEVP DSUM DURATION DVAR DVARP EDATE EFFECT ENCODEURL EOMONTH ERF ERF.PRECISE ERFC ERFC.PRECISE ERROR.TYPE EUROCONVERT EVEN EXACT EXP EXPON.DIST EXPONDIST FACT FACTDOUBLE FALSE|0 F.DIST FDIST F.DIST.RT FILTERXML FIND FINDB F.INV F.INV.RT FINV FISHER FISHERINV FIXED FLOOR FLOOR.MATH FLOOR.PRECISE FORECAST FORECAST.ETS FORECAST.ETS.CONFINT FORECAST.ETS.SEASONALITY FORECAST.ETS.STAT FORECAST.LINEAR FORMULATEXT FREQUENCY F.TEST FTEST FV FVSCHEDULE GAMMA GAMMA.DIST GAMMADIST GAMMA.INV GAMMAINV GAMMALN GAMMALN.PRECISE GAUSS GCD GEOMEAN GESTEP GETPIVOTDATA GROWTH HARMEAN HEX2BIN HEX2DEC HEX2OCT HLOOKUP HOUR HYPERLINK HYPGEOM.DIST HYPGEOMDIST IF|0 IFERROR IFNA IFS IMABS IMAGINARY IMARGUMENT IMCONJUGATE IMCOS IMCOSH IMCOT IMCSC IMCSCH IMDIV IMEXP IMLN IMLOG10 IMLOG2 IMPOWER IMPRODUCT IMREAL IMSEC IMSECH IMSIN IMSINH IMSQRT IMSUB IMSUM IMTAN INDEX INDIRECT INFO INT INTERCEPT INTRATE IPMT IRR ISBLANK ISERR ISERROR ISEVEN ISFORMULA ISLOGICAL ISNA ISNONTEXT ISNUMBER ISODD ISREF ISTEXT ISO.CEILING ISOWEEKNUM ISPMT JIS KURT LARGE LCM LEFT LEFTB LEN LENB LINEST LN LOG LOG10 LOGEST LOGINV LOGNORM.DIST LOGNORMDIST LOGNORM.INV LOOKUP LOWER MATCH MAX MAXA MAXIFS MDETERM MDURATION MEDIAN MID MIDBs MIN MINIFS MINA MINUTE MINVERSE MIRR MMULT MOD MODE MODE.MULT MODE.SNGL MONTH MROUND MULTINOMIAL MUNIT N NA NEGBINOM.DIST NEGBINOMDIST NETWORKDAYS NETWORKDAYS.INTL NOMINAL NORM.DIST NORMDIST NORMINV NORM.INV NORM.S.DIST NORMSDIST NORM.S.INV NORMSINV NOT NOW NPER NPV NUMBERVALUE OCT2BIN OCT2DEC OCT2HEX ODD ODDFPRICE ODDFYIELD ODDLPRICE ODDLYIELD OFFSET OR PDURATION PEARSON PERCENTILE.EXC PERCENTILE.INC PERCENTILE PERCENTRANK.EXC PERCENTRANK.INC PERCENTRANK PERMUT PERMUTATIONA PHI PHONETIC PI PMT POISSON.DIST POISSON POWER PPMT PRICE PRICEDISC PRICEMAT PROB PRODUCT PROPER PV QUARTILE QUARTILE.EXC QUARTILE.INC QUOTIENT RADIANS RAND RANDBETWEEN RANK.AVG RANK.EQ RANK RATE RECEIVED REGISTER.ID REPLACE REPLACEB REPT RIGHT RIGHTB ROMAN ROUND ROUNDDOWN ROUNDUP ROW ROWS RRI RSQ RTD SEARCH SEARCHB SEC SECH SECOND SERIESSUM SHEET SHEETS SIGN SIN SINH SKEW SKEW.P SLN SLOPE SMALL SQL.REQUEST SQRT SQRTPI STANDARDIZE STDEV STDEV.P STDEV.S STDEVA STDEVP STDEVPA STEYX SUBSTITUTE SUBTOTAL SUM SUMIF SUMIFS SUMPRODUCT SUMSQ SUMX2MY2 SUMX2PY2 SUMXMY2 SWITCH SYD T TAN TANH TBILLEQ TBILLPRICE TBILLYIELD T.DIST T.DIST.2T T.DIST.RT TDIST TEXT TEXTJOIN TIME TIMEVALUE T.INV T.INV.2T TINV TODAY TRANSPOSE TREND TRIM TRIMMEAN TRUE|0 TRUNC T.TEST TTEST TYPE UNICHAR UNICODE UPPER VALUE VAR VAR.P VAR.S VARA VARP VARPA VDB VLOOKUP WEBSERVICE WEEKDAY WEEKNUM WEIBULL WEIBULL.DIST WORKDAY WORKDAY.INTL XIRR XNPV XOR YEAR YEARFRAC YIELD YIELDDISC YIELDMAT Z.TEST ZTEST'
        },
        contains: [
          {
            begin: /^=/,
            end: /[^=]/,
            returnEnd: !0,
            illegal: /=/,
            relevance: 10
          },
          {
            className: 'symbol',
            begin: /\b[A-Z]{1,2}\d+\b/,
            end: /[^\d]/,
            excludeEnd: !0,
            relevance: 0
          },
          {
            className: 'symbol',
            begin: /[A-Z]{0,2}\d*:[A-Z]{0,2}\d*/,
            relevance: 0
          },
          e.BACKSLASH_ESCAPE,
          e.QUOTE_STRING_MODE,
          { className: 'number', begin: e.NUMBER_RE + '(%)?', relevance: 0 },
          e.COMMENT(/\bN\(/, /\)/, {
            excludeBegin: !0,
            excludeEnd: !0,
            illegal: /\n/
          })
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        contains: [
          {
            begin: /[^\u2401\u0001]+/,
            end: /[\u2401\u0001]/,
            excludeEnd: !0,
            returnBegin: !0,
            returnEnd: !1,
            contains: [
              {
                begin: /([^\u2401\u0001=]+)/,
                end: /=([^\u2401\u0001=]+)/,
                returnEnd: !0,
                returnBegin: !1,
                className: 'attr'
              },
              {
                begin: /=/,
                end: /([\u2401\u0001])/,
                excludeEnd: !0,
                excludeBegin: !0,
                className: 'string'
              }
            ]
          }
        ],
        case_insensitive: !0
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
        className: 'function',
        beginKeywords: 'def',
        end: /[:={\[(\n;]/,
        excludeEnd: !0,
        contains: [
          {
            className: 'title',
            begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/
          }
        ]
      };
      return {
        keywords: {
          literal: 'true false',
          keyword:
            'case class def else enum if impl import in lat rel index let match namespace switch type yield with'
        },
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          { className: 'string', begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/ },
          { className: 'string', variants: [{ begin: '"', end: '"' }] },
          t,
          e.C_NUMBER_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        case_insensitive: !0,
        aliases: ['f90', 'f95'],
        keywords: {
          literal: '.False. .True.',
          keyword:
            'kind do while private call intrinsic where elsewhere type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. goto save else use module select case access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit continue format pause cycle exit c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg synchronous nopass non_overridable pass protected volatile abstract extends import non_intrinsic value deferred generic final enumerator class associate bind enum c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure integer real character complex logical dimension allocatable|10 parameter external implicit|10 none double precision assign intent optional pointer target in out common equivalence data',
          built_in:
            'alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_ofacosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr num_images parity popcnt poppar shifta shiftl shiftr this_image'
        },
        illegal: /\/\*/,
        contains: [
          e.inherit(e.APOS_STRING_MODE, { className: 'string', relevance: 0 }),
          e.inherit(e.QUOTE_STRING_MODE, { className: 'string', relevance: 0 }),
          {
            className: 'function',
            beginKeywords: 'subroutine function program',
            illegal: '[${=\\n]',
            contains: [
              e.UNDERSCORE_TITLE_MODE,
              { className: 'params', begin: '\\(', end: '\\)' }
            ]
          },
          e.COMMENT('!', '$', { relevance: 0 }),
          {
            className: 'number',
            begin:
              '(?=\\b|\\+|\\-|\\.)(?=\\.\\d|\\d)(?:\\d+)?(?:\\.?\\d*)(?:[de][+-]?\\d+)?\\b\\.?',
            relevance: 0
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
        begin: '<',
        end: '>',
        contains: [e.inherit(e.TITLE_MODE, { begin: /'[a-zA-Z0-9_]+/ })]
      };
      return {
        aliases: ['fs'],
        keywords:
          'abstract and as assert base begin class default delegate do done downcast downto elif else end exception extern false finally for fun function global if in inherit inline interface internal lazy let match member module mutable namespace new null of open or override private public rec return sig static struct then to true try type upcast use val void when while with yield',
        illegal: /\/\*/,
        contains: [
          { className: 'keyword', begin: /\b(yield|return|let|do)!/ },
          {
            className: 'string',
            begin: '@"',
            end: '"',
            contains: [{ begin: '""' }]
          },
          { className: 'string', begin: '"""', end: '"""' },
          e.COMMENT('\\(\\*', '\\*\\)'),
          {
            className: 'class',
            beginKeywords: 'type',
            end: '\\(|=|$',
            excludeEnd: !0,
            contains: [e.UNDERSCORE_TITLE_MODE, t]
          },
          { className: 'meta', begin: '\\[<', end: '>\\]', relevance: 10 },
          {
            className: 'symbol',
            begin: "\\B('[A-Za-z])\\b",
            contains: [e.BACKSLASH_ESCAPE]
          },
          e.C_LINE_COMMENT_MODE,
          e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
          e.C_NUMBER_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          keyword:
            'abort acronym acronyms alias all and assign binary card diag display else eq file files for free ge gt if integer le loop lt maximizing minimizing model models ne negative no not option options or ord positive prod put putpage puttl repeat sameas semicont semiint smax smin solve sos1 sos2 sum system table then until using while xor yes',
          literal: 'eps inf na',
          'built-in':
            'abs arccos arcsin arctan arctan2 Beta betaReg binomial ceil centropy cos cosh cvPower div div0 eDist entropy errorf execSeed exp fact floor frac gamma gammaReg log logBeta logGamma log10 log2 mapVal max min mod ncpCM ncpF ncpVUpow ncpVUsin normal pi poly power randBinomial randLinear randTriangle round rPower sigmoid sign signPower sin sinh slexp sllog10 slrec sqexp sqlog10 sqr sqrec sqrt tan tanh trunc uniform uniformInt vcPower bool_and bool_eqv bool_imp bool_not bool_or bool_xor ifThen rel_eq rel_ge rel_gt rel_le rel_lt rel_ne gday gdow ghour gleap gmillisec gminute gmonth gsecond gyear jdate jnow jstart jtime errorLevel execError gamsRelease gamsVersion handleCollect handleDelete handleStatus handleSubmit heapFree heapLimit heapSize jobHandle jobKill jobStatus jobTerminate licenseLevel licenseStatus maxExecError sleep timeClose timeComp timeElapsed timeExec timeStart'
        },
        n = {
          className: 'symbol',
          variants: [{ begin: /\=[lgenxc]=/ }, { begin: /\$/ }]
        },
        r = {
          className: 'comment',
          variants: [{ begin: "'", end: "'" }, { begin: '"', end: '"' }],
          illegal: '\\n',
          contains: [e.BACKSLASH_ESCAPE]
        },
        a = {
          begin: '/',
          end: '/',
          keywords: t,
          contains: [
            r,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            e.QUOTE_STRING_MODE,
            e.APOS_STRING_MODE,
            e.C_NUMBER_MODE
          ]
        },
        i = {
          begin: /[a-z][a-z0-9_]*(\([a-z0-9_, ]*\))?[ \t]+/,
          excludeBegin: !0,
          end: '$',
          endsWithParent: !0,
          contains: [
            r,
            a,
            {
              className: 'comment',
              begin: /([ ]*[a-z0-9&#*=?@>\\<:\-,()$\[\]_.{}!+%^]+)+/,
              relevance: 0
            }
          ]
        };
      return {
        aliases: ['gms'],
        case_insensitive: !0,
        keywords: t,
        contains: [
          e.COMMENT(/^\$ontext/, /^\$offtext/),
          {
            className: 'meta',
            begin: '^\\$[a-z0-9]+',
            end: '$',
            returnBegin: !0,
            contains: [{ className: 'meta-keyword', begin: '^\\$[a-z0-9]+' }]
          },
          e.COMMENT('^\\*', '$'),
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          {
            beginKeywords:
              'set sets parameter parameters variable variables scalar scalars equation equations',
            end: ';',
            contains: [
              e.COMMENT('^\\*', '$'),
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              e.QUOTE_STRING_MODE,
              e.APOS_STRING_MODE,
              a,
              i
            ]
          },
          {
            beginKeywords: 'table',
            end: ';',
            returnBegin: !0,
            contains: [
              { beginKeywords: 'table', end: '$', contains: [i] },
              e.COMMENT('^\\*', '$'),
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              e.QUOTE_STRING_MODE,
              e.APOS_STRING_MODE,
              e.C_NUMBER_MODE
            ]
          },
          {
            className: 'function',
            begin: /^[a-z][a-z0-9_,\-+' ()$]+\.{2}/,
            returnBegin: !0,
            contains: [
              { className: 'title', begin: /^[a-z0-9_]+/ },
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0
              },
              n
            ]
          },
          e.C_NUMBER_MODE,
          n
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          keyword:
            'and bool break call callexe checkinterrupt clear clearg closeall cls comlog compile continue create debug declare delete disable dlibrary dllcall do dos ed edit else elseif enable end endfor endif endp endo errorlog errorlogat expr external fn for format goto gosub graph if keyword let lib library line load loadarray loadexe loadf loadk loadm loadp loads loadx local locate loopnextindex lprint lpwidth lshow matrix msym ndpclex new not open or output outwidth plot plotsym pop prcsn print printdos proc push retp return rndcon rndmod rndmult rndseed run save saveall screen scroll setarray show sparse stop string struct system trace trap threadfor threadendfor threadbegin threadjoin threadstat threadend until use while winprint',
          built_in:
            'abs acf aconcat aeye amax amean AmericanBinomCall AmericanBinomCall_Greeks AmericanBinomCall_ImpVol AmericanBinomPut AmericanBinomPut_Greeks AmericanBinomPut_ImpVol AmericanBSCall AmericanBSCall_Greeks AmericanBSCall_ImpVol AmericanBSPut AmericanBSPut_Greeks AmericanBSPut_ImpVol amin amult annotationGetDefaults annotationSetBkd annotationSetFont annotationSetLineColor annotationSetLineStyle annotationSetLineThickness annualTradingDays arccos arcsin areshape arrayalloc arrayindex arrayinit arraytomat asciiload asclabel astd astds asum atan atan2 atranspose axmargin balance band bandchol bandcholsol bandltsol bandrv bandsolpd bar base10 begwind besselj bessely beta box boxcox cdfBeta cdfBetaInv cdfBinomial cdfBinomialInv cdfBvn cdfBvn2 cdfBvn2e cdfCauchy cdfCauchyInv cdfChic cdfChii cdfChinc cdfChincInv cdfExp cdfExpInv cdfFc cdfFnc cdfFncInv cdfGam cdfGenPareto cdfHyperGeo cdfLaplace cdfLaplaceInv cdfLogistic cdfLogisticInv cdfmControlCreate cdfMvn cdfMvn2e cdfMvnce cdfMvne cdfMvt2e cdfMvtce cdfMvte cdfN cdfN2 cdfNc cdfNegBinomial cdfNegBinomialInv cdfNi cdfPoisson cdfPoissonInv cdfRayleigh cdfRayleighInv cdfTc cdfTci cdfTnc cdfTvn cdfWeibull cdfWeibullInv cdir ceil ChangeDir chdir chiBarSquare chol choldn cholsol cholup chrs close code cols colsf combinate combinated complex con cond conj cons ConScore contour conv convertsatostr convertstrtosa corrm corrms corrvc corrx corrxs cos cosh counts countwts crossprd crout croutp csrcol csrlin csvReadM csvReadSA cumprodc cumsumc curve cvtos datacreate datacreatecomplex datalist dataload dataloop dataopen datasave date datestr datestring datestrymd dayinyr dayofweek dbAddDatabase dbClose dbCommit dbCreateQuery dbExecQuery dbGetConnectOptions dbGetDatabaseName dbGetDriverName dbGetDrivers dbGetHostName dbGetLastErrorNum dbGetLastErrorText dbGetNumericalPrecPolicy dbGetPassword dbGetPort dbGetTableHeaders dbGetTables dbGetUserName dbHasFeature dbIsDriverAvailable dbIsOpen dbIsOpenError dbOpen dbQueryBindValue dbQueryClear dbQueryCols dbQueryExecPrepared dbQueryFetchAllM dbQueryFetchAllSA dbQueryFetchOneM dbQueryFetchOneSA dbQueryFinish dbQueryGetBoundValue dbQueryGetBoundValues dbQueryGetField dbQueryGetLastErrorNum dbQueryGetLastErrorText dbQueryGetLastInsertID dbQueryGetLastQuery dbQueryGetPosition dbQueryIsActive dbQueryIsForwardOnly dbQueryIsNull dbQueryIsSelect dbQueryIsValid dbQueryPrepare dbQueryRows dbQuerySeek dbQuerySeekFirst dbQuerySeekLast dbQuerySeekNext dbQuerySeekPrevious dbQuerySetForwardOnly dbRemoveDatabase dbRollback dbSetConnectOptions dbSetDatabaseName dbSetHostName dbSetNumericalPrecPolicy dbSetPort dbSetUserName dbTransaction DeleteFile delif delrows denseToSp denseToSpRE denToZero design det detl dfft dffti diag diagrv digamma doswin DOSWinCloseall DOSWinOpen dotfeq dotfeqmt dotfge dotfgemt dotfgt dotfgtmt dotfle dotflemt dotflt dotfltmt dotfne dotfnemt draw drop dsCreate dstat dstatmt dstatmtControlCreate dtdate dtday dttime dttodtv dttostr dttoutc dtvnormal dtvtodt dtvtoutc dummy dummybr dummydn eig eigh eighv eigv elapsedTradingDays endwind envget eof eqSolve eqSolvemt eqSolvemtControlCreate eqSolvemtOutCreate eqSolveset erf erfc erfccplx erfcplx error etdays ethsec etstr EuropeanBinomCall EuropeanBinomCall_Greeks EuropeanBinomCall_ImpVol EuropeanBinomPut EuropeanBinomPut_Greeks EuropeanBinomPut_ImpVol EuropeanBSCall EuropeanBSCall_Greeks EuropeanBSCall_ImpVol EuropeanBSPut EuropeanBSPut_Greeks EuropeanBSPut_ImpVol exctsmpl exec execbg exp extern eye fcheckerr fclearerr feq feqmt fflush fft ffti fftm fftmi fftn fge fgemt fgets fgetsa fgetsat fgetst fgt fgtmt fileinfo filesa fle flemt floor flt fltmt fmod fne fnemt fonts fopen formatcv formatnv fputs fputst fseek fstrerror ftell ftocv ftos ftostrC gamma gammacplx gammaii gausset gdaAppend gdaCreate gdaDStat gdaDStatMat gdaGetIndex gdaGetName gdaGetNames gdaGetOrders gdaGetType gdaGetTypes gdaGetVarInfo gdaIsCplx gdaLoad gdaPack gdaRead gdaReadByIndex gdaReadSome gdaReadSparse gdaReadStruct gdaReportVarInfo gdaSave gdaUpdate gdaUpdateAndPack gdaVars gdaWrite gdaWrite32 gdaWriteSome getarray getdims getf getGAUSShome getmatrix getmatrix4D getname getnamef getNextTradingDay getNextWeekDay getnr getorders getpath getPreviousTradingDay getPreviousWeekDay getRow getscalar3D getscalar4D getTrRow getwind glm gradcplx gradMT gradMTm gradMTT gradMTTm gradp graphprt graphset hasimag header headermt hess hessMT hessMTg hessMTgw hessMTm hessMTmw hessMTT hessMTTg hessMTTgw hessMTTm hessMTw hessp hist histf histp hsec imag indcv indexcat indices indices2 indicesf indicesfn indnv indsav integrate1d integrateControlCreate intgrat2 intgrat3 inthp1 inthp2 inthp3 inthp4 inthpControlCreate intquad1 intquad2 intquad3 intrleav intrleavsa intrsect intsimp inv invpd invswp iscplx iscplxf isden isinfnanmiss ismiss key keyav keyw lag lag1 lagn lapEighb lapEighi lapEighvb lapEighvi lapgEig lapgEigh lapgEighv lapgEigv lapgSchur lapgSvdcst lapgSvds lapgSvdst lapSvdcusv lapSvds lapSvdusv ldlp ldlsol linSolve listwise ln lncdfbvn lncdfbvn2 lncdfmvn lncdfn lncdfn2 lncdfnc lnfact lngammacplx lnpdfmvn lnpdfmvt lnpdfn lnpdft loadd loadstruct loadwind loess loessmt loessmtControlCreate log loglog logx logy lower lowmat lowmat1 ltrisol lu lusol machEpsilon make makevars makewind margin matalloc matinit mattoarray maxbytes maxc maxindc maxv maxvec mbesselei mbesselei0 mbesselei1 mbesseli mbesseli0 mbesseli1 meanc median mergeby mergevar minc minindc minv miss missex missrv moment momentd movingave movingaveExpwgt movingaveWgt nextindex nextn nextnevn nextwind ntos null null1 numCombinations ols olsmt olsmtControlCreate olsqr olsqr2 olsqrmt ones optn optnevn orth outtyp pacf packedToSp packr parse pause pdfCauchy pdfChi pdfExp pdfGenPareto pdfHyperGeo pdfLaplace pdfLogistic pdfn pdfPoisson pdfRayleigh pdfWeibull pi pinv pinvmt plotAddArrow plotAddBar plotAddBox plotAddHist plotAddHistF plotAddHistP plotAddPolar plotAddScatter plotAddShape plotAddTextbox plotAddTS plotAddXY plotArea plotBar plotBox plotClearLayout plotContour plotCustomLayout plotGetDefaults plotHist plotHistF plotHistP plotLayout plotLogLog plotLogX plotLogY plotOpenWindow plotPolar plotSave plotScatter plotSetAxesPen plotSetBar plotSetBarFill plotSetBarStacked plotSetBkdColor plotSetFill plotSetGrid plotSetLegend plotSetLineColor plotSetLineStyle plotSetLineSymbol plotSetLineThickness plotSetNewWindow plotSetTitle plotSetWhichYAxis plotSetXAxisShow plotSetXLabel plotSetXRange plotSetXTicInterval plotSetXTicLabel plotSetYAxisShow plotSetYLabel plotSetYRange plotSetZAxisShow plotSetZLabel plotSurface plotTS plotXY polar polychar polyeval polygamma polyint polymake polymat polymroot polymult polyroot pqgwin previousindex princomp printfm printfmt prodc psi putarray putf putvals pvCreate pvGetIndex pvGetParNames pvGetParVector pvLength pvList pvPack pvPacki pvPackm pvPackmi pvPacks pvPacksi pvPacksm pvPacksmi pvPutParVector pvTest pvUnpack QNewton QNewtonmt QNewtonmtControlCreate QNewtonmtOutCreate QNewtonSet QProg QProgmt QProgmtInCreate qqr qqre qqrep qr qre qrep qrsol qrtsol qtyr qtyre qtyrep quantile quantiled qyr qyre qyrep qz rank rankindx readr real reclassify reclassifyCuts recode recserar recsercp recserrc rerun rescale reshape rets rev rfft rffti rfftip rfftn rfftnp rfftp rndBernoulli rndBeta rndBinomial rndCauchy rndChiSquare rndCon rndCreateState rndExp rndGamma rndGeo rndGumbel rndHyperGeo rndi rndKMbeta rndKMgam rndKMi rndKMn rndKMnb rndKMp rndKMu rndKMvm rndLaplace rndLCbeta rndLCgam rndLCi rndLCn rndLCnb rndLCp rndLCu rndLCvm rndLogNorm rndMTu rndMVn rndMVt rndn rndnb rndNegBinomial rndp rndPoisson rndRayleigh rndStateSkip rndu rndvm rndWeibull rndWishart rotater round rows rowsf rref sampleData satostrC saved saveStruct savewind scale scale3d scalerr scalinfnanmiss scalmiss schtoc schur searchsourcepath seekr select selif seqa seqm setdif setdifsa setvars setvwrmode setwind shell shiftr sin singleindex sinh sleep solpd sortc sortcc sortd sorthc sorthcc sortind sortindc sortmc sortr sortrc spBiconjGradSol spChol spConjGradSol spCreate spDenseSubmat spDiagRvMat spEigv spEye spLDL spline spLU spNumNZE spOnes spreadSheetReadM spreadSheetReadSA spreadSheetWrite spScale spSubmat spToDense spTrTDense spTScalar spZeros sqpSolve sqpSolveMT sqpSolveMTControlCreate sqpSolveMTlagrangeCreate sqpSolveMToutCreate sqpSolveSet sqrt statements stdc stdsc stocv stof strcombine strindx strlen strput strrindx strsect strsplit strsplitPad strtodt strtof strtofcplx strtriml strtrimr strtrunc strtruncl strtruncpad strtruncr submat subscat substute subvec sumc sumr surface svd svd1 svd2 svdcusv svds svdusv sysstate tab tan tanh tempname threadBegin threadEnd threadEndFor threadFor threadJoin threadStat time timedt timestr timeutc title tkf2eps tkf2ps tocart todaydt toeplitz token topolar trapchk trigamma trimr trunc type typecv typef union unionsa uniqindx uniqindxsa unique uniquesa upmat upmat1 upper utctodt utctodtv utrisol vals varCovMS varCovXS varget vargetl varmall varmares varput varputl vartypef vcm vcms vcx vcxs vec vech vecr vector vget view viewxyz vlist vnamecv volume vput vread vtypecv wait waitc walkindex where window writer xlabel xlsGetSheetCount xlsGetSheetSize xlsGetSheetTypes xlsMakeRange xlsReadM xlsReadSA xlsWrite xlsWriteM xlsWriteSA xpnd xtics xy xyz ylabel ytics zeros zeta zlabel ztics cdfEmpirical dot h5create h5open h5read h5readAttribute h5write h5writeAttribute ldl plotAddErrorBar plotAddSurface plotCDFEmpirical plotSetColormap plotSetContourLabels plotSetLegendFont plotSetTextInterpreter plotSetXTicCount plotSetYTicCount plotSetZLevels powerm strjoin strtrim sylvester',
          literal:
            'DB_AFTER_LAST_ROW DB_ALL_TABLES DB_BATCH_OPERATIONS DB_BEFORE_FIRST_ROW DB_BLOB DB_EVENT_NOTIFICATIONS DB_FINISH_QUERY DB_HIGH_PRECISION DB_LAST_INSERT_ID DB_LOW_PRECISION_DOUBLE DB_LOW_PRECISION_INT32 DB_LOW_PRECISION_INT64 DB_LOW_PRECISION_NUMBERS DB_MULTIPLE_RESULT_SETS DB_NAMED_PLACEHOLDERS DB_POSITIONAL_PLACEHOLDERS DB_PREPARED_QUERIES DB_QUERY_SIZE DB_SIMPLE_LOCKING DB_SYSTEM_TABLES DB_TABLES DB_TRANSACTIONS DB_UNICODE DB_VIEWS'
        },
        n = {
          className: 'meta',
          begin: '#',
          end: '$',
          keywords: {
            'meta-keyword':
              'define definecs|10 undef ifdef ifndef iflight ifdllcall ifmac ifos2win ifunix else endif lineson linesoff srcfile srcline'
          },
          contains: [
            { begin: /\\\n/, relevance: 0 },
            {
              beginKeywords: 'include',
              end: '$',
              keywords: { 'meta-keyword': 'include' },
              contains: [
                {
                  className: 'meta-string',
                  begin: '"',
                  end: '"',
                  illegal: '\\n'
                }
              ]
            },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        r = e.UNDERSCORE_IDENT_RE + '\\s*\\(?',
        a = [
          {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            keywords: t,
            relevance: 0,
            contains: [
              e.C_NUMBER_MODE,
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE
            ]
          }
        ];
      return {
        aliases: ['gss'],
        case_insensitive: !0,
        keywords: t,
        illegal: '(\\{[%#]|[%#]\\})',
        contains: [
          e.C_NUMBER_MODE,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.COMMENT('@', '@'),
          n,
          {
            className: 'string',
            begin: '"',
            end: '"',
            contains: [e.BACKSLASH_ESCAPE]
          },
          {
            className: 'function',
            beginKeywords: 'proc keyword',
            end: ';',
            excludeEnd: !0,
            keywords: t,
            contains: [
              {
                begin: r,
                returnBegin: !0,
                contains: [e.UNDERSCORE_TITLE_MODE],
                relevance: 0
              },
              e.C_NUMBER_MODE,
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              n
            ].concat(a)
          },
          {
            className: 'function',
            beginKeywords: 'fn',
            end: ';',
            excludeEnd: !0,
            keywords: t,
            contains: [
              {
                begin: r + e.IDENT_RE + '\\)?\\s*\\=\\s*',
                returnBegin: !0,
                contains: [e.UNDERSCORE_TITLE_MODE],
                relevance: 0
              },
              e.C_NUMBER_MODE,
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE
            ].concat(a)
          },
          {
            className: 'function',
            begin: '\\bexternal (proc|keyword|fn)\\s+',
            end: ';',
            excludeEnd: !0,
            keywords: t,
            contains: [
              {
                begin: r,
                returnBegin: !0,
                contains: [e.UNDERSCORE_TITLE_MODE],
                relevance: 0
              },
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          {
            className: 'function',
            begin:
              '\\bexternal (matrix|string|array|sparse matrix|struct ' +
              e.IDENT_RE +
              ')\\s+',
            end: ';',
            excludeEnd: !0,
            keywords: t,
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = [
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        e.COMMENT(/\(/, /\)/),
        e.inherit(e.C_NUMBER_MODE, {
          begin: '([-+]?([0-9]*\\.?[0-9]+\\.?))|' + e.C_NUMBER_RE
        }),
        e.inherit(e.APOS_STRING_MODE, { illegal: null }),
        e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
        { className: 'name', begin: '([G])([0-9]+\\.?[0-9]?)' },
        { className: 'name', begin: '([M])([0-9]+\\.?[0-9]?)' },
        { className: 'attr', begin: '(VC|VS|#)', end: '(\\d+)' },
        { className: 'attr', begin: '(VZOFX|VZOFY|VZOFZ)' },
        {
          className: 'built_in',
          begin: '(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)',
          end: '([-+]?([0-9]*\\.?[0-9]+\\.?))(\\])'
        },
        {
          className: 'symbol',
          variants: [{ begin: 'N', end: '\\d+', illegal: '\\W' }]
        }
      ];
      return {
        aliases: ['nc'],
        case_insensitive: !0,
        lexemes: '[A-Z_][A-Z0-9_.]*',
        keywords:
          'IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT EQ LT GT NE GE LE OR XOR',
        contains: [
          { className: 'meta', begin: '\\%' },
          { className: 'meta', begin: '([O])([0-9]+)' }
        ].concat(t)
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['feature'],
        keywords:
          'Feature Background Ability Business Need Scenario Scenarios Scenario Outline Scenario Template Examples Given And Then But When',
        contains: [
          { className: 'symbol', begin: '\\*', relevance: 0 },
          { className: 'meta', begin: '@[^@\\s]+' },
          {
            begin: '\\|',
            end: '\\|\\w*$',
            contains: [{ className: 'string', begin: '[^|]+' }]
          },
          { className: 'variable', begin: '<', end: '>' },
          e.HASH_COMMENT_MODE,
          { className: 'string', begin: '"""', end: '"""' },
          e.QUOTE_STRING_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        keywords: {
          keyword:
            'break continue discard do else for if return while switch case default attribute binding buffer ccw centroid centroid varying coherent column_major const cw depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip triangles triangles_adjacency uniform varying vertices volatile writeonly',
          type:
            'atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBufferiimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void',
          built_in:
            'gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow',
          literal: 'true false'
        },
        illegal: '"',
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.C_NUMBER_MODE,
          { className: 'meta', begin: '#', end: '$' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
        keyword:
          'break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune',
        literal: 'true false iota nil',
        built_in:
          'append cap close complex copy imag len make new panic print println real recover delete'
      };
      return {
        aliases: ['golang'],
        keywords: t,
        illegal: '</',
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          {
            className: 'string',
            variants: [
              e.QUOTE_STRING_MODE,
              { begin: "'", end: "[^\\\\]'" },
              { begin: '`', end: '`' }
            ]
          },
          {
            className: 'number',
            variants: [
              { begin: e.C_NUMBER_RE + '[dflsi]', relevance: 1 },
              e.C_NUMBER_MODE
            ]
          },
          { begin: /:=/ },
          {
            className: 'function',
            beginKeywords: 'func',
            end: /\s*\{/,
            excludeEnd: !0,
            contains: [
              e.TITLE_MODE,
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                keywords: t,
                illegal: /["']/
              }
            ]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        keywords: {
          keyword:
            'println readln print import module function local return let var while for foreach times in case when match with break continue augment augmentation each find filter reduce if then else otherwise try catch finally raise throw orIfNull DynamicObject|10 DynamicVariable struct Observable map set vector list array',
          literal: 'true false null'
        },
        contains: [
          e.HASH_COMMENT_MODE,
          e.QUOTE_STRING_MODE,
          e.C_NUMBER_MODE,
          { className: 'meta', begin: '@[A-Za-z]+' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        case_insensitive: !0,
        keywords: {
          keyword:
            'task project allprojects subprojects artifacts buildscript configurations dependencies repositories sourceSets description delete from into include exclude source classpath destinationDir includes options sourceCompatibility targetCompatibility group flatDir doLast doFirst flatten todir fromdir ant def abstract break case catch continue default do else extends final finally for if implements instanceof native new private protected public return static switch synchronized throw throws transient try volatile while strictfp package import false null super this true antlrtask checkstyle codenarc copy boolean byte char class double float int interface long short void compile runTime file fileTree abs any append asList asWritable call collect compareTo count div dump each eachByte eachFile eachLine every find findAll flatten getAt getErr getIn getOut getText grep immutable inject inspect intersect invokeMethods isCase join leftShift minus multiply newInputStream newOutputStream newPrintWriter newReader newWriter next plus pop power previous print println push putAt read readBytes readLines reverse reverseEach round size sort splitEachLine step subMap times toInteger toList tokenize upto waitForOrKill withPrintWriter withReader withStream withWriter withWriterAppend write writeLine'
        },
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          e.NUMBER_MODE,
          e.REGEXP_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        keywords: {
          literal: 'true false null',
          keyword:
            'byte short char int long boolean float double void def as in assert trait super this abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof'
        },
        contains: [
          e.COMMENT('/\\*\\*', '\\*/', {
            relevance: 0,
            contains: [
              { begin: /\w+@/, relevance: 0 },
              { className: 'doctag', begin: '@[A-Za-z]+' }
            ]
          }),
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          { className: 'string', begin: '"""', end: '"""' },
          { className: 'string', begin: "'''", end: "'''" },
          { className: 'string', begin: '\\$/', end: '/\\$', relevance: 10 },
          e.APOS_STRING_MODE,
          {
            className: 'regexp',
            begin: /~?\/[^\/\n]+\//,
            contains: [e.BACKSLASH_ESCAPE]
          },
          e.QUOTE_STRING_MODE,
          {
            className: 'meta',
            begin: '^#!/usr/bin/env',
            end: '$',
            illegal: '\n'
          },
          e.BINARY_NUMBER_MODE,
          {
            className: 'class',
            beginKeywords: 'class interface trait enum',
            end: '{',
            illegal: ':',
            contains: [
              { beginKeywords: 'extends implements' },
              e.UNDERSCORE_TITLE_MODE
            ]
          },
          e.C_NUMBER_MODE,
          { className: 'meta', begin: '@[A-Za-z]+' },
          { className: 'string', begin: /[^\?]{0}[A-Za-z0-9_$]+ *:/ },
          { begin: /\?/, end: /\:/ },
          { className: 'symbol', begin: '^\\s*[A-Za-z0-9_$]+:', relevance: 0 }
        ],
        illegal: /#|<\//
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        case_insensitive: !0,
        contains: [
          {
            className: 'meta',
            begin:
              '^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$',
            relevance: 10
          },
          e.COMMENT('^\\s*(!=#|=#|-#|/).*$', !1, { relevance: 0 }),
          {
            begin: '^\\s*(-|=|!=)(?!#)',
            starts: { end: '\\n', subLanguage: 'ruby' }
          },
          {
            className: 'tag',
            begin: '^\\s*%',
            contains: [
              { className: 'selector-tag', begin: '\\w+' },
              { className: 'selector-id', begin: '#[\\w-]+' },
              { className: 'selector-class', begin: '\\.[\\w-]+' },
              {
                begin: '{\\s*',
                end: '\\s*}',
                contains: [
                  {
                    begin: ':\\w+\\s*=>',
                    end: ',\\s+',
                    returnBegin: !0,
                    endsWithParent: !0,
                    contains: [
                      { className: 'attr', begin: ':\\w+' },
                      e.APOS_STRING_MODE,
                      e.QUOTE_STRING_MODE,
                      { begin: '\\w+', relevance: 0 }
                    ]
                  }
                ]
              },
              {
                begin: '\\(\\s*',
                end: '\\s*\\)',
                excludeEnd: !0,
                contains: [
                  {
                    begin: '\\w+\\s*=',
                    end: '\\s+',
                    returnBegin: !0,
                    endsWithParent: !0,
                    contains: [
                      { className: 'attr', begin: '\\w+', relevance: 0 },
                      e.APOS_STRING_MODE,
                      e.QUOTE_STRING_MODE,
                      { begin: '\\w+', relevance: 0 }
                    ]
                  }
                ]
              }
            ]
          },
          { begin: '^\\s*[=~]\\s*' },
          { begin: '#{', starts: { end: '}', subLanguage: 'ruby' } }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
        'builtin-name':
          'each in with if else unless bindattr action collection debugger log outlet template unbound view yield'
      };
      return {
        aliases: ['hbs', 'html.hbs', 'html.handlebars'],
        case_insensitive: !0,
        subLanguage: 'xml',
        contains: [
          e.COMMENT('{{!(--)?', '(--)?}}'),
          {
            className: 'template-tag',
            begin: /\{\{[#\/]/,
            end: /\}\}/,
            contains: [
              {
                className: 'name',
                begin: /[a-zA-Z\.-]+/,
                keywords: t,
                starts: {
                  endsWithParent: !0,
                  relevance: 0,
                  contains: [e.QUOTE_STRING_MODE]
                }
              }
            ]
          },
          {
            className: 'template-variable',
            begin: /\{\{/,
            end: /\}\}/,
            keywords: t
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          variants: [
            e.COMMENT('--', '$'),
            e.COMMENT('{-', '-}', { contains: ['self'] })
          ]
        },
        n = { className: 'meta', begin: '{-#', end: '#-}' },
        r = { className: 'meta', begin: '^#', end: '$' },
        a = { className: 'type', begin: "\\b[A-Z][\\w']*", relevance: 0 },
        i = {
          begin: '\\(',
          end: '\\)',
          illegal: '"',
          contains: [
            n,
            r,
            {
              className: 'type',
              begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'
            },
            e.inherit(e.TITLE_MODE, { begin: "[_a-z][\\w']*" }),
            t
          ]
        };
      return {
        aliases: ['hs'],
        keywords:
          'let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec',
        contains: [
          {
            beginKeywords: 'module',
            end: 'where',
            keywords: 'module where',
            contains: [i, t],
            illegal: '\\W\\.|;'
          },
          {
            begin: '\\bimport\\b',
            end: '$',
            keywords: 'import qualified as hiding',
            contains: [i, t],
            illegal: '\\W\\.|;'
          },
          {
            className: 'class',
            begin: '^(\\s*)?(class|instance)\\b',
            end: 'where',
            keywords: 'class family instance where',
            contains: [a, i, t]
          },
          {
            className: 'class',
            begin: '\\b(data|(new)?type)\\b',
            end: '$',
            keywords: 'data family type newtype deriving',
            contains: [
              n,
              a,
              i,
              { begin: '{', end: '}', contains: i.contains },
              t
            ]
          },
          { beginKeywords: 'default', end: '$', contains: [a, i, t] },
          {
            beginKeywords: 'infix infixl infixr',
            end: '$',
            contains: [e.C_NUMBER_MODE, t]
          },
          {
            begin: '\\bforeign\\b',
            end: '$',
            keywords:
              'foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe',
            contains: [a, e.QUOTE_STRING_MODE, t]
          },
          {
            className: 'meta',
            begin: '#!\\/usr\\/bin\\/env runhaskell',
            end: '$'
          },
          n,
          r,
          e.QUOTE_STRING_MODE,
          e.C_NUMBER_MODE,
          a,
          e.inherit(e.TITLE_MODE, { begin: "^[_a-z][\\w']*" }),
          t,
          { begin: '->|<-' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['hx'],
        keywords: {
          keyword:
            'break case cast catch continue default do dynamic else enum extern for function here if import in inline never new override package private get set public return static super switch this throw trace try typedef untyped using var while Int Float String Bool Dynamic Void Array ',
          built_in: 'trace this',
          literal: 'true false null _'
        },
        contains: [
          {
            className: 'string',
            begin: "'",
            end: "'",
            contains: [
              e.BACKSLASH_ESCAPE,
              { className: 'subst', begin: '\\$\\{', end: '\\}' },
              { className: 'subst', begin: '\\$', end: '\\W}' }
            ]
          },
          e.QUOTE_STRING_MODE,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.C_NUMBER_MODE,
          { className: 'meta', begin: '@:', end: '$' },
          {
            className: 'meta',
            begin: '#',
            end: '$',
            keywords: { 'meta-keyword': 'if else elseif end error' }
          },
          {
            className: 'type',
            begin: ':[ \t]*',
            end: '[^A-Za-z0-9_ \t\\->]',
            excludeBegin: !0,
            excludeEnd: !0,
            relevance: 0
          },
          {
            className: 'type',
            begin: ':[ \t]*',
            end: '\\W',
            excludeBegin: !0,
            excludeEnd: !0
          },
          {
            className: 'type',
            begin: 'new *',
            end: '\\W',
            excludeBegin: !0,
            excludeEnd: !0
          },
          {
            className: 'class',
            beginKeywords: 'enum',
            end: '\\{',
            contains: [e.TITLE_MODE]
          },
          {
            className: 'class',
            beginKeywords: 'abstract',
            end: '[\\{$]',
            contains: [
              {
                className: 'type',
                begin: '\\(',
                end: '\\)',
                excludeBegin: !0,
                excludeEnd: !0
              },
              {
                className: 'type',
                begin: 'from +',
                end: '\\W',
                excludeBegin: !0,
                excludeEnd: !0
              },
              {
                className: 'type',
                begin: 'to +',
                end: '\\W',
                excludeBegin: !0,
                excludeEnd: !0
              },
              e.TITLE_MODE
            ],
            keywords: { keyword: 'abstract from to' }
          },
          {
            className: 'class',
            begin: '\\b(class|interface) +',
            end: '[\\{$]',
            excludeEnd: !0,
            keywords: 'class interface',
            contains: [
              {
                className: 'keyword',
                begin: '\\b(extends|implements) +',
                keywords: 'extends implements',
                contains: [
                  { className: 'type', begin: e.IDENT_RE, relevance: 0 }
                ]
              },
              e.TITLE_MODE
            ]
          },
          {
            className: 'function',
            beginKeywords: 'function',
            end: '\\(',
            excludeEnd: !0,
            illegal: '\\S',
            contains: [e.TITLE_MODE]
          }
        ],
        illegal: /<\//
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        case_insensitive: !0,
        lexemes: /[\w\._]+/,
        keywords:
          'goto gosub return break repeat loop continue wait await dim sdim foreach dimtype dup dupptr end stop newmod delmod mref run exgoto on mcall assert logmes newlab resume yield onexit onerror onkey onclick oncmd exist delete mkdir chdir dirlist bload bsave bcopy memfile if else poke wpoke lpoke getstr chdpm memexpand memcpy memset notesel noteadd notedel noteload notesave randomize noteunsel noteget split strrep setease button chgdisp exec dialog mmload mmplay mmstop mci pset pget syscolor mes print title pos circle cls font sysfont objsize picload color palcolor palette redraw width gsel gcopy gzoom gmode bmpsave hsvcolor getkey listbox chkbox combox input mesbox buffer screen bgscr mouse objsel groll line clrobj boxf objprm objmode stick grect grotate gsquare gradf objimage objskip objenable celload celdiv celput newcom querycom delcom cnvstow comres axobj winobj sendmsg comevent comevarg sarrayconv callfunc cnvwtos comevdisp libptr system hspstat hspver stat cnt err strsize looplev sublev iparam wparam lparam refstr refdval int rnd strlen length length2 length3 length4 vartype gettime peek wpeek lpeek varptr varuse noteinfo instr abs limit getease str strmid strf getpath strtrim sin cos tan atan sqrt double absf expf logf limitf powf geteasef mousex mousey mousew hwnd hinstance hdc ginfo objinfo dirinfo sysinfo thismod __hspver__ __hsp30__ __date__ __time__ __line__ __file__ _debug __hspdef__ and or xor not screen_normal screen_palette screen_hide screen_fixedsize screen_tool screen_frame gmode_gdi gmode_mem gmode_rgb0 gmode_alpha gmode_rgb0alpha gmode_add gmode_sub gmode_pixela ginfo_mx ginfo_my ginfo_act ginfo_sel ginfo_wx1 ginfo_wy1 ginfo_wx2 ginfo_wy2 ginfo_vx ginfo_vy ginfo_sizex ginfo_sizey ginfo_winx ginfo_winy ginfo_mesx ginfo_mesy ginfo_r ginfo_g ginfo_b ginfo_paluse ginfo_dispx ginfo_dispy ginfo_cx ginfo_cy ginfo_intid ginfo_newid ginfo_sx ginfo_sy objinfo_mode objinfo_bmscr objinfo_hwnd notemax notesize dir_cur dir_exe dir_win dir_sys dir_cmdline dir_desktop dir_mydoc dir_tv font_normal font_bold font_italic font_underline font_strikeout font_antialias objmode_normal objmode_guifont objmode_usefont gsquare_grad msgothic msmincho do until while wend for next _break _continue switch case default swbreak swend ddim ldim alloc m_pi rad2deg deg2rad ease_linear ease_quad_in ease_quad_out ease_quad_inout ease_cubic_in ease_cubic_out ease_cubic_inout ease_quartic_in ease_quartic_out ease_quartic_inout ease_bounce_in ease_bounce_out ease_bounce_inout ease_shake_in ease_shake_out ease_shake_inout ease_loop',
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          {
            className: 'string',
            begin: '{"',
            end: '"}',
            contains: [e.BACKSLASH_ESCAPE]
          },
          e.COMMENT(';', '$', { relevance: 0 }),
          {
            className: 'meta',
            begin: '#',
            end: '$',
            keywords: {
              'meta-keyword':
                'addion cfunc cmd cmpopt comfunc const defcfunc deffunc define else endif enum epack func global if ifdef ifndef include modcfunc modfunc modinit modterm module pack packopt regcmd runtime undef usecom uselib'
            },
            contains: [
              e.inherit(e.QUOTE_STRING_MODE, { className: 'meta-string' }),
              e.NUMBER_MODE,
              e.C_NUMBER_MODE,
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          { className: 'symbol', begin: '^\\*(\\w+|@)' },
          e.NUMBER_MODE,
          e.C_NUMBER_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t =
          'action collection component concat debugger each each-in else get hash if input link-to loc log mut outlet partial query-params render textarea unbound unless with yield view',
        n = (e.QUOTE_STRING_MODE,
        {
          endsWithParent: !0,
          relevance: 0,
          keywords: { keyword: 'as', built_in: t },
          contains: [
            e.QUOTE_STRING_MODE,
            {
              illegal: /\}\}/,
              begin: /[a-zA-Z0-9_]+=/,
              returnBegin: !0,
              relevance: 0,
              contains: [{ className: 'attr', begin: /[a-zA-Z0-9_]+/ }]
            },
            e.NUMBER_MODE
          ]
        });
      return {
        case_insensitive: !0,
        subLanguage: 'xml',
        contains: [
          e.COMMENT('{{!(--)?', '(--)?}}'),
          {
            className: 'template-tag',
            begin: /\{\{[#\/]/,
            end: /\}\}/,
            contains: [
              {
                className: 'name',
                begin: /[a-zA-Z\.\-]+/,
                keywords: { 'builtin-name': t },
                starts: n
              }
            ]
          },
          {
            className: 'template-variable',
            begin: /\{\{[a-zA-Z][a-zA-Z\-]+/,
            end: /\}\}/,
            keywords: { keyword: 'as', built_in: t },
            contains: [e.QUOTE_STRING_MODE]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = 'HTTP/[0-9\\.]+';
      return {
        aliases: ['https'],
        illegal: '\\S',
        contains: [
          {
            begin: '^' + t,
            end: '$',
            contains: [{ className: 'number', begin: '\\b\\d{3}\\b' }]
          },
          {
            begin: '^[A-Z]+ (.*?) ' + t + '$',
            returnBegin: !0,
            end: '$',
            contains: [
              {
                className: 'string',
                begin: ' ',
                end: ' ',
                excludeBegin: !0,
                excludeEnd: !0
              },
              { begin: t },
              { className: 'keyword', begin: '[A-Z]+' }
            ]
          },
          {
            className: 'attribute',
            begin: '^\\w',
            end: ': ',
            excludeEnd: !0,
            illegal: '\\n|\\s|=',
            starts: { end: '$', relevance: 0 }
          },
          { begin: '\\n\\n', starts: { subLanguage: [], endsWithParent: !0 } }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = "[a-zA-Z_\\-!.?+*=<>&#'][a-zA-Z_\\-!.?+*=<>&#'0-9/;:]*",
        n = { begin: t, relevance: 0 },
        r = { className: 'number', begin: '[-+]?\\d+(\\.\\d+)?', relevance: 0 },
        a = e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
        i = e.COMMENT(';', '$', { relevance: 0 }),
        o = { className: 'literal', begin: /\b([Tt]rue|[Ff]alse|nil|None)\b/ },
        s = { begin: '[\\[\\{]', end: '[\\]\\}]' },
        l = { className: 'comment', begin: '\\^' + t },
        c = e.COMMENT('\\^\\{', '\\}'),
        d = { className: 'symbol', begin: '[:]{1,2}' + t },
        u = { begin: '\\(', end: '\\)' },
        p = { endsWithParent: !0, relevance: 0 },
        m = {
          keywords: {
            'builtin-name':
              '!= % %= & &= * ** **= *= *map + += , --build-class-- --import-- -= . / // //= /= < << <<= <= = > >= >> >>= @ @= ^ ^= abs accumulate all and any ap-compose ap-dotimes ap-each ap-each-while ap-filter ap-first ap-if ap-last ap-map ap-map-when ap-pipe ap-reduce ap-reject apply as-> ascii assert assoc bin break butlast callable calling-module-name car case cdr chain chr coll? combinations compile compress cond cons cons? continue count curry cut cycle dec def default-method defclass defmacro defmacro-alias defmacro/g! defmain defmethod defmulti defn defn-alias defnc defnr defreader defseq del delattr delete-route dict-comp dir disassemble dispatch-reader-macro distinct divmod do doto drop drop-last drop-while empty? end-sequence eval eval-and-compile eval-when-compile even? every? except exec filter first flatten float? fn fnc fnr for for* format fraction genexpr gensym get getattr global globals group-by hasattr hash hex id identity if if* if-not if-python2 import in inc input instance? integer integer-char? integer? interleave interpose is is-coll is-cons is-empty is-even is-every is-float is-instance is-integer is-integer-char is-iterable is-iterator is-keyword is-neg is-none is-not is-numeric is-odd is-pos is-string is-symbol is-zero isinstance islice issubclass iter iterable? iterate iterator? keyword keyword? lambda last len let lif lif-not list* list-comp locals loop macro-error macroexpand macroexpand-1 macroexpand-all map max merge-with method-decorator min multi-decorator multicombinations name neg? next none? nonlocal not not-in not? nth numeric? oct odd? open or ord partition permutations pos? post-route postwalk pow prewalk print product profile/calls profile/cpu put-route quasiquote quote raise range read read-str recursive-replace reduce remove repeat repeatedly repr require rest round route route-with-methods rwm second seq set-comp setattr setv some sorted string string? sum switch symbol? take take-nth take-while tee try unless unquote unquote-splicing vars walk when while with with* with-decorator with-gensyms xi xor yield yield-from zero? zip zip-longest | |= ~'
          },
          lexemes: t,
          className: 'name',
          begin: t,
          starts: p
        },
        g = [u, a, l, c, i, d, s, r, o, n];
      return (
        (u.contains = [e.COMMENT('comment', ''), m, p]),
        (p.contains = g),
        (s.contains = g),
        {
          aliases: ['hylang'],
          illegal: /\S/,
          contains: [
            { className: 'meta', begin: '^#!', end: '$' },
            u,
            a,
            l,
            c,
            i,
            d,
            s,
            r,
            o
          ]
        }
      );
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['i7'],
        case_insensitive: !0,
        keywords: {
          keyword:
            'thing room person man woman animal container supporter backdrop door scenery open closed locked inside gender is are say understand kind of rule'
        },
        contains: [
          {
            className: 'string',
            begin: '"',
            end: '"',
            relevance: 0,
            contains: [{ className: 'subst', begin: '\\[', end: '\\]' }]
          },
          {
            className: 'section',
            begin: /^(Volume|Book|Part|Chapter|Section|Table)\b/,
            end: '$'
          },
          {
            begin: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\b/,
            end: ':',
            contains: [{ begin: '\\(This', end: '\\)' }]
          },
          { className: 'comment', begin: '\\[', end: '\\]', contains: ['self'] }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
        className: 'string',
        contains: [e.BACKSLASH_ESCAPE],
        variants: [
          { begin: "'''", end: "'''", relevance: 10 },
          { begin: '"""', end: '"""', relevance: 10 },
          { begin: '"', end: '"' },
          { begin: "'", end: "'" }
        ]
      };
      return {
        aliases: ['toml'],
        case_insensitive: !0,
        illegal: /\S/,
        contains: [
          e.COMMENT(';', '$'),
          e.HASH_COMMENT_MODE,
          { className: 'section', begin: /^\s*\[+/, end: /\]+/ },
          {
            begin: /^[a-z0-9\[\]_-]+\s*=\s*/,
            end: '$',
            returnBegin: !0,
            contains: [
              { className: 'attr', begin: /[a-z0-9\[\]_-]+/ },
              {
                begin: /=/,
                endsWithParent: !0,
                relevance: 0,
                contains: [
                  {
                    className: 'literal',
                    begin: /\bon|off|true|false|yes|no\b/
                  },
                  {
                    className: 'variable',
                    variants: [
                      { begin: /\$[\w\d"][\w\d_]*/ },
                      { begin: /\$\{(.*?)}/ }
                    ]
                  },
                  t,
                  { className: 'number', begin: /([\+\-]+)?[\d]+_[\d_]+/ },
                  e.NUMBER_MODE
                ]
              }
            ]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        case_insensitive: !0,
        keywords: {
          literal: '.False. .True.',
          keyword:
            'kind do while private call intrinsic where elsewhere type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. goto save else use module select case access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit continue format pause cycle exit c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg synchronous nopass non_overridable pass protected volatile abstract extends import non_intrinsic value deferred generic final enumerator class associate bind enum c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure integer real character complex logical dimension allocatable|10 parameter external implicit|10 none double precision assign intent optional pointer target in out common equivalence data begin_provider &begin_provider end_provider begin_shell end_shell begin_template end_template subst assert touch soft_touch provide no_dep free irp_if irp_else irp_endif irp_write irp_read',
          built_in:
            'alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_ofacosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr num_images parity popcnt poppar shifta shiftl shiftr this_image IRP_ALIGN irp_here'
        },
        illegal: /\/\*/,
        contains: [
          e.inherit(e.APOS_STRING_MODE, { className: 'string', relevance: 0 }),
          e.inherit(e.QUOTE_STRING_MODE, { className: 'string', relevance: 0 }),
          {
            className: 'function',
            beginKeywords: 'subroutine function program',
            illegal: '[${=\\n]',
            contains: [
              e.UNDERSCORE_TITLE_MODE,
              { className: 'params', begin: '\\(', end: '\\)' }
            ]
          },
          e.COMMENT('!', '$', { relevance: 0 }),
          e.COMMENT('begin_doc', 'end_doc', { relevance: 10 }),
          {
            className: 'number',
            begin:
              '(?=\\b|\\+|\\-|\\.)(?=\\.\\d|\\d)(?:\\d+)?(?:\\.?\\d*)(?:[de][+-]?\\d+)?\\b\\.?',
            relevance: 0
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t =
          'false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do',
        n = {
          className: 'number',
          begin:
            '\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?',
          relevance: 0
        };
      return {
        aliases: ['jsp'],
        keywords: t,
        illegal: /<\/|#/,
        contains: [
          e.COMMENT('/\\*\\*', '\\*/', {
            relevance: 0,
            contains: [
              { begin: /\w+@/, relevance: 0 },
              { className: 'doctag', begin: '@[A-Za-z]+' }
            ]
          }),
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          {
            className: 'class',
            beginKeywords: 'class interface',
            end: /[{;=]/,
            excludeEnd: !0,
            keywords: 'class interface',
            illegal: /[:"\[\]]/,
            contains: [
              { beginKeywords: 'extends implements' },
              e.UNDERSCORE_TITLE_MODE
            ]
          },
          { beginKeywords: 'new throw return else', relevance: 0 },
          {
            className: 'function',
            begin:
              '([À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(<[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*)*>)?\\s+)+' +
              e.UNDERSCORE_IDENT_RE +
              '\\s*\\(',
            returnBegin: !0,
            end: /[{;=]/,
            excludeEnd: !0,
            keywords: t,
            contains: [
              {
                begin: e.UNDERSCORE_IDENT_RE + '\\s*\\(',
                returnBegin: !0,
                relevance: 0,
                contains: [e.UNDERSCORE_TITLE_MODE]
              },
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                keywords: t,
                relevance: 0,
                contains: [
                  e.APOS_STRING_MODE,
                  e.QUOTE_STRING_MODE,
                  e.C_NUMBER_MODE,
                  e.C_BLOCK_COMMENT_MODE
                ]
              },
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          n,
          { className: 'meta', begin: '@[A-Za-z]+' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = '[A-Za-z$_][0-9A-Za-z$_]*',
        n = {
          keyword:
            'in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as',
          literal: 'true false null undefined NaN Infinity',
          built_in:
            'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise'
        },
        r = {
          className: 'number',
          variants: [
            { begin: '\\b(0[bB][01]+)' },
            { begin: '\\b(0[oO][0-7]+)' },
            { begin: e.C_NUMBER_RE }
          ],
          relevance: 0
        },
        a = {
          className: 'subst',
          begin: '\\$\\{',
          end: '\\}',
          keywords: n,
          contains: []
        },
        i = {
          className: 'string',
          begin: '`',
          end: '`',
          contains: [e.BACKSLASH_ESCAPE, a]
        };
      a.contains = [
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        i,
        r,
        e.REGEXP_MODE
      ];
      var o = a.contains.concat([
        e.C_BLOCK_COMMENT_MODE,
        e.C_LINE_COMMENT_MODE
      ]);
      return {
        aliases: ['js', 'jsx'],
        keywords: n,
        contains: [
          {
            className: 'meta',
            relevance: 10,
            begin: /^\s*['"]use (strict|asm)['"]/
          },
          { className: 'meta', begin: /^#!/, end: /$/ },
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          i,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          r,
          {
            begin: /[{,]\s*/,
            relevance: 0,
            contains: [
              {
                begin: t + '\\s*:',
                returnBegin: !0,
                relevance: 0,
                contains: [{ className: 'attr', begin: t, relevance: 0 }]
              }
            ]
          },
          {
            begin: '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
            keywords: 'return throw case',
            contains: [
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              e.REGEXP_MODE,
              {
                className: 'function',
                begin: '(\\(.*?\\)|' + t + ')\\s*=>',
                returnBegin: !0,
                end: '\\s*=>',
                contains: [
                  {
                    className: 'params',
                    variants: [
                      { begin: t },
                      { begin: /\(\s*\)/ },
                      {
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: n,
                        contains: o
                      }
                    ]
                  }
                ]
              },
              {
                begin: /</,
                end: /(\/\w+|\w+\/)>/,
                subLanguage: 'xml',
                contains: [
                  { begin: /<\w+\s*\/>/, skip: !0 },
                  {
                    begin: /<\w+/,
                    end: /(\/\w+|\w+\/)>/,
                    skip: !0,
                    contains: [{ begin: /<\w+\s*\/>/, skip: !0 }, 'self']
                  }
                ]
              }
            ],
            relevance: 0
          },
          {
            className: 'function',
            beginKeywords: 'function',
            end: /\{/,
            excludeEnd: !0,
            contains: [
              e.inherit(e.TITLE_MODE, { begin: t }),
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                contains: o
              }
            ],
            illegal: /\[|%/
          },
          { begin: /\$[(.]/ },
          e.METHOD_GUARD,
          {
            className: 'class',
            beginKeywords: 'class',
            end: /[{;=]/,
            excludeEnd: !0,
            illegal: /[:"\[\]]/,
            contains: [{ beginKeywords: 'extends' }, e.UNDERSCORE_TITLE_MODE]
          },
          { beginKeywords: 'constructor', end: /\{/, excludeEnd: !0 }
        ],
        illegal: /#(?!!)/
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        contains: [
          {
            begin: /[\w-]+ *=/,
            returnBegin: !0,
            relevance: 0,
            contains: [{ className: 'attr', begin: /[\w-]+/ }]
          }
        ],
        relevance: 0
      };
      return {
        aliases: ['wildfly-cli'],
        lexemes: '[a-z-]+',
        keywords: {
          keyword:
            'alias batch cd clear command connect connection-factory connection-info data-source deploy deployment-info deployment-overlay echo echo-dmr help history if jdbc-driver-info jms-queue|20 jms-topic|20 ls patch pwd quit read-attribute read-operation reload rollout-plan run-batch set shutdown try unalias undeploy unset version xa-data-source',
          literal: 'true false'
        },
        contains: [
          e.HASH_COMMENT_MODE,
          e.QUOTE_STRING_MODE,
          { className: 'params', begin: /--[\w\-=\/]+/ },
          { className: 'function', begin: /:[\w\-.]+/, relevance: 0 },
          { className: 'string', begin: /\B(([\/.])[\w\-.\/=]+)+/ },
          t
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = { literal: 'true false null' },
        n = [e.QUOTE_STRING_MODE, e.C_NUMBER_MODE],
        r = {
          end: ',',
          endsWithParent: !0,
          excludeEnd: !0,
          contains: n,
          keywords: t
        },
        a = {
          begin: '{',
          end: '}',
          contains: [
            {
              className: 'attr',
              begin: /"/,
              end: /"/,
              contains: [e.BACKSLASH_ESCAPE],
              illegal: '\\n'
            },
            e.inherit(r, { begin: /:/ })
          ],
          illegal: '\\S'
        },
        i = {
          begin: '\\[',
          end: '\\]',
          contains: [e.inherit(r)],
          illegal: '\\S'
        };
      return (
        n.splice(n.length, 0, a, i),
        { contains: n, keywords: t, illegal: '\\S' }
      );
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          keyword:
            'in isa where baremodule begin break catch ccall const continue do else elseif end export false finally for function global if import importall let local macro module quote return true try using while type immutable abstract bitstype typealias ',
          literal:
            'true false ARGS C_NULL DevNull ENDIAN_BOM ENV I Inf Inf16 Inf32 Inf64 InsertionSort JULIA_HOME LOAD_PATH MergeSort NaN NaN16 NaN32 NaN64 PROGRAM_FILE QuickSort RoundDown RoundFromZero RoundNearest RoundNearestTiesAway RoundNearestTiesUp RoundToZero RoundUp STDERR STDIN STDOUT VERSION catalan e|0 eu|0 eulergamma golden im nothing pi γ π φ ',
          built_in:
            'ANY AbstractArray AbstractChannel AbstractFloat AbstractMatrix AbstractRNG AbstractSerializer AbstractSet AbstractSparseArray AbstractSparseMatrix AbstractSparseVector AbstractString AbstractUnitRange AbstractVecOrMat AbstractVector Any ArgumentError Array AssertionError Associative Base64DecodePipe Base64EncodePipe Bidiagonal BigFloat BigInt BitArray BitMatrix BitVector Bool BoundsError BufferStream CachingPool CapturedException CartesianIndex CartesianRange Cchar Cdouble Cfloat Channel Char Cint Cintmax_t Clong Clonglong ClusterManager Cmd CodeInfo Colon Complex Complex128 Complex32 Complex64 CompositeException Condition ConjArray ConjMatrix ConjVector Cptrdiff_t Cshort Csize_t Cssize_t Cstring Cuchar Cuint Cuintmax_t Culong Culonglong Cushort Cwchar_t Cwstring DataType Date DateFormat DateTime DenseArray DenseMatrix DenseVecOrMat DenseVector Diagonal Dict DimensionMismatch Dims DirectIndexString Display DivideError DomainError EOFError EachLine Enum Enumerate ErrorException Exception ExponentialBackOff Expr Factorization FileMonitor Float16 Float32 Float64 Function Future GlobalRef GotoNode HTML Hermitian IO IOBuffer IOContext IOStream IPAddr IPv4 IPv6 IndexCartesian IndexLinear IndexStyle InexactError InitError Int Int128 Int16 Int32 Int64 Int8 IntSet Integer InterruptException InvalidStateException Irrational KeyError LabelNode LinSpace LineNumberNode LoadError LowerTriangular MIME Matrix MersenneTwister Method MethodError MethodTable Module NTuple NewvarNode NullException Nullable Number ObjectIdDict OrdinalRange OutOfMemoryError OverflowError Pair ParseError PartialQuickSort PermutedDimsArray Pipe PollingFileWatcher ProcessExitedException Ptr QuoteNode RandomDevice Range RangeIndex Rational RawFD ReadOnlyMemoryError Real ReentrantLock Ref Regex RegexMatch RemoteChannel RemoteException RevString RoundingMode RowVector SSAValue SegmentationFault SerializationState Set SharedArray SharedMatrix SharedVector Signed SimpleVector Slot SlotNumber SparseMatrixCSC SparseVector StackFrame StackOverflowError StackTrace StepRange StepRangeLen StridedArray StridedMatrix StridedVecOrMat StridedVector String SubArray SubString SymTridiagonal Symbol Symmetric SystemError TCPSocket Task Text TextDisplay Timer Tridiagonal Tuple Type TypeError TypeMapEntry TypeMapLevel TypeName TypeVar TypedSlot UDPSocket UInt UInt128 UInt16 UInt32 UInt64 UInt8 UndefRefError UndefVarError UnicodeError UniformScaling Union UnionAll UnitRange Unsigned UpperTriangular Val Vararg VecElement VecOrMat Vector VersionNumber Void WeakKeyDict WeakRef WorkerConfig WorkerPool '
        },
        n = '[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*',
        r = { lexemes: n, keywords: t, illegal: /<\// },
        a = { className: 'subst', begin: /\$\(/, end: /\)/, keywords: t },
        i = { className: 'variable', begin: '\\$' + n },
        o = {
          className: 'string',
          contains: [e.BACKSLASH_ESCAPE, a, i],
          variants: [
            { begin: /\w*"""/, end: /"""\w*/, relevance: 10 },
            { begin: /\w*"/, end: /"\w*/ }
          ]
        },
        s = {
          className: 'string',
          contains: [e.BACKSLASH_ESCAPE, a, i],
          begin: '`',
          end: '`'
        },
        l = { className: 'meta', begin: '@' + n };
      return (
        (r.contains = [
          {
            className: 'number',
            begin: /(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,
            relevance: 0
          },
          { className: 'string', begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/ },
          o,
          s,
          l,
          {
            className: 'comment',
            variants: [
              { begin: '#=', end: '=#', relevance: 10 },
              { begin: '#', end: '$' }
            ]
          },
          e.HASH_COMMENT_MODE,
          {
            className: 'keyword',
            begin: '\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b'
          },
          { begin: /<:/ }
        ]),
        (a.contains = r.contains),
        r
      );
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        contains: [
          {
            className: 'meta',
            begin: /^julia>/,
            relevance: 10,
            starts: { end: /^(?![ ]{6})/, subLanguage: 'julia' },
            aliases: ['jldoctest']
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          keyword:
            'abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit initinterface annotation data sealed internal infix operator out by constructor super trait volatile transient native default',
          built_in:
            'Byte Short Char Int Long Boolean Float Double Void Unit Nothing',
          literal: 'true false null'
        },
        n = { className: 'symbol', begin: e.UNDERSCORE_IDENT_RE + '@' },
        r = {
          className: 'subst',
          begin: '\\${',
          end: '}',
          contains: [e.APOS_STRING_MODE, e.C_NUMBER_MODE]
        },
        a = { className: 'variable', begin: '\\$' + e.UNDERSCORE_IDENT_RE },
        i = {
          className: 'string',
          variants: [
            { begin: '"""', end: '"""', contains: [a, r] },
            {
              begin: "'",
              end: "'",
              illegal: /\n/,
              contains: [e.BACKSLASH_ESCAPE]
            },
            {
              begin: '"',
              end: '"',
              illegal: /\n/,
              contains: [e.BACKSLASH_ESCAPE, a, r]
            }
          ]
        },
        o = {
          className: 'meta',
          begin:
            '@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*' +
            e.UNDERSCORE_IDENT_RE +
            ')?'
        },
        s = {
          className: 'meta',
          begin: '@' + e.UNDERSCORE_IDENT_RE,
          contains: [
            {
              begin: /\(/,
              end: /\)/,
              contains: [e.inherit(i, { className: 'meta-string' })]
            }
          ]
        };
      return {
        keywords: t,
        contains: [
          e.COMMENT('/\\*\\*', '\\*/', {
            relevance: 0,
            contains: [{ className: 'doctag', begin: '@[A-Za-z]+' }]
          }),
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          {
            className: 'keyword',
            begin: /\b(break|continue|return|this)\b/,
            starts: { contains: [{ className: 'symbol', begin: /@\w+/ }] }
          },
          n,
          o,
          s,
          {
            className: 'function',
            beginKeywords: 'fun',
            end: '[(]|$',
            returnBegin: !0,
            excludeEnd: !0,
            keywords: t,
            illegal: /fun\s+(<.*>)?[^\s\(]+(\s+[^\s\(]+)\s*=/,
            relevance: 5,
            contains: [
              {
                begin: e.UNDERSCORE_IDENT_RE + '\\s*\\(',
                returnBegin: !0,
                relevance: 0,
                contains: [e.UNDERSCORE_TITLE_MODE]
              },
              {
                className: 'type',
                begin: /</,
                end: />/,
                keywords: 'reified',
                relevance: 0
              },
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                endsParent: !0,
                keywords: t,
                relevance: 0,
                contains: [
                  {
                    begin: /:/,
                    end: /[=,\/]/,
                    endsWithParent: !0,
                    contains: [
                      { className: 'type', begin: e.UNDERSCORE_IDENT_RE },
                      e.C_LINE_COMMENT_MODE,
                      e.C_BLOCK_COMMENT_MODE
                    ],
                    relevance: 0
                  },
                  e.C_LINE_COMMENT_MODE,
                  e.C_BLOCK_COMMENT_MODE,
                  o,
                  s,
                  i,
                  e.C_NUMBER_MODE
                ]
              },
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          {
            className: 'class',
            beginKeywords: 'class interface trait',
            end: /[:\{(]|$/,
            excludeEnd: !0,
            illegal: 'extends implements',
            contains: [
              {
                beginKeywords: 'public protected internal private constructor'
              },
              e.UNDERSCORE_TITLE_MODE,
              {
                className: 'type',
                begin: /</,
                end: />/,
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0
              },
              {
                className: 'type',
                begin: /[,:]\s*/,
                end: /[<\(,]|$/,
                excludeBegin: !0,
                returnEnd: !0
              },
              o,
              s
            ]
          },
          i,
          {
            className: 'meta',
            begin: '^#!/usr/bin/env',
            end: '$',
            illegal: '\n'
          },
          e.C_NUMBER_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = '\\]|\\?>',
        n = {
          literal:
            'true false none minimal full all void and or not bw nbw ew new cn ncn lt lte gt gte eq neq rx nrx ft',
          built_in:
            'array date decimal duration integer map pair string tag xml null boolean bytes keyword list locale queue set stack staticarray local var variable global data self inherited currentcapture givenblock',
          keyword:
            'cache database_names database_schemanames database_tablenames define_tag define_type email_batch encode_set html_comment handle handle_error header if inline iterate ljax_target link link_currentaction link_currentgroup link_currentrecord link_detail link_firstgroup link_firstrecord link_lastgroup link_lastrecord link_nextgroup link_nextrecord link_prevgroup link_prevrecord log loop namespace_using output_none portal private protect records referer referrer repeating resultset rows search_args search_arguments select sort_args sort_arguments thread_atomic value_list while abort case else fail_if fail_ifnot fail if_empty if_false if_null if_true loop_abort loop_continue loop_count params params_up return return_value run_children soap_definetag soap_lastrequest soap_lastresponse tag_name ascending average by define descending do equals frozen group handle_failure import in into join let match max min on order parent protected provide public require returnhome skip split_thread sum take thread to trait type where with yield yieldhome'
        },
        r = e.COMMENT('\x3c!--', '--\x3e', { relevance: 0 }),
        a = {
          className: 'meta',
          begin: '\\[noprocess\\]',
          starts: { end: '\\[/noprocess\\]', returnEnd: !0, contains: [r] }
        },
        i = {
          className: 'meta',
          begin: '\\[/noprocess|<\\?(lasso(script)?|=)'
        },
        o = { className: 'symbol', begin: "'[a-zA-Z_][\\w.]*'" },
        s = [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.inherit(e.C_NUMBER_MODE, {
            begin: e.C_NUMBER_RE + '|(-?infinity|NaN)\\b'
          }),
          e.inherit(e.APOS_STRING_MODE, { illegal: null }),
          e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
          { className: 'string', begin: '`', end: '`' },
          {
            variants: [
              { begin: '[#$][a-zA-Z_][\\w.]*' },
              { begin: '#', end: '\\d+', illegal: '\\W' }
            ]
          },
          {
            className: 'type',
            begin: '::\\s*',
            end: '[a-zA-Z_][\\w.]*',
            illegal: '\\W'
          },
          {
            className: 'params',
            variants: [
              { begin: '-(?!infinity)[a-zA-Z_][\\w.]*', relevance: 0 },
              { begin: '(\\.\\.\\.)' }
            ]
          },
          { begin: /(->|\.)\s*/, relevance: 0, contains: [o] },
          {
            className: 'class',
            beginKeywords: 'define',
            returnEnd: !0,
            end: '\\(|=>',
            contains: [
              e.inherit(e.TITLE_MODE, {
                begin: '[a-zA-Z_][\\w.]*(=(?!>))?|[-+*/%](?!>)'
              })
            ]
          }
        ];
      return {
        aliases: ['ls', 'lassoscript'],
        case_insensitive: !0,
        lexemes: '[a-zA-Z_][\\w.]*|&[lg]t;',
        keywords: n,
        contains: [
          {
            className: 'meta',
            begin: t,
            relevance: 0,
            starts: {
              end: '\\[|<\\?(lasso(script)?|=)',
              returnEnd: !0,
              relevance: 0,
              contains: [r]
            }
          },
          a,
          i,
          {
            className: 'meta',
            begin: '\\[no_square_brackets',
            starts: {
              end: '\\[/no_square_brackets\\]',
              lexemes: '[a-zA-Z_][\\w.]*|&[lg]t;',
              keywords: n,
              contains: [
                {
                  className: 'meta',
                  begin: t,
                  relevance: 0,
                  starts: {
                    end: '\\[noprocess\\]|<\\?(lasso(script)?|=)',
                    returnEnd: !0,
                    contains: [r]
                  }
                },
                a,
                i
              ].concat(s)
            }
          },
          { className: 'meta', begin: '\\[', relevance: 0 },
          { className: 'meta', begin: '^#!', end: 'lasso9$', relevance: 10 }
        ].concat(s)
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        contains: [
          {
            className: 'attribute',
            begin: '^dn',
            end: ': ',
            excludeEnd: !0,
            starts: { end: '$', relevance: 0 },
            relevance: 10
          },
          {
            className: 'attribute',
            begin: '^\\w',
            end: ': ',
            excludeEnd: !0,
            starts: { end: '$', relevance: 0 }
          },
          { className: 'literal', begin: '^-', end: '$' },
          e.HASH_COMMENT_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        contains: [
          {
            className: 'function',
            begin: '#+[A-Za-z_0-9]*\\(',
            end: ' {',
            returnBegin: !0,
            excludeEnd: !0,
            contains: [
              { className: 'keyword', begin: '#+' },
              { className: 'title', begin: '[A-Za-z_][A-Za-z_0-9]*' },
              {
                className: 'params',
                begin: '\\(',
                end: '\\)',
                endsParent: !0,
                contains: [
                  { className: 'string', begin: '"', end: '"' },
                  { className: 'variable', begin: '[A-Za-z_][A-Za-z_0-9]*' }
                ]
              }
            ]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = '([\\w-]+|@{[\\w-]+})',
        n = [],
        r = [],
        a = function(e) {
          return { className: 'string', begin: '~?' + e + '.*?' + e };
        },
        i = function(e, t, n) {
          return { className: e, begin: t, relevance: n };
        },
        o = { begin: '\\(', end: '\\)', contains: r, relevance: 0 };
      r.push(
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        a("'"),
        a('"'),
        e.CSS_NUMBER_MODE,
        {
          begin: '(url|data-uri)\\(',
          starts: { className: 'string', end: '[\\)\\n]', excludeEnd: !0 }
        },
        i('number', '#[0-9A-Fa-f]+\\b'),
        o,
        i('variable', '@@?[\\w-]+', 10),
        i('variable', '@{[\\w-]+}'),
        i('built_in', '~?`[^`]*?`'),
        {
          className: 'attribute',
          begin: '[\\w-]+\\s*:',
          end: ':',
          returnBegin: !0,
          excludeEnd: !0
        },
        { className: 'meta', begin: '!important' }
      );
      var s = r.concat({ begin: '{', end: '}', contains: n }),
        l = {
          beginKeywords: 'when',
          endsWithParent: !0,
          contains: [{ beginKeywords: 'and not' }].concat(r)
        },
        c = {
          begin: t + '\\s*:',
          returnBegin: !0,
          end: '[;}]',
          relevance: 0,
          contains: [
            {
              className: 'attribute',
              begin: t,
              end: ':',
              excludeEnd: !0,
              starts: {
                endsWithParent: !0,
                illegal: '[<=$]',
                relevance: 0,
                contains: r
              }
            }
          ]
        },
        d = {
          className: 'keyword',
          begin:
            '@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b',
          starts: { end: '[;{}]', returnEnd: !0, contains: r, relevance: 0 }
        },
        u = {
          className: 'variable',
          variants: [
            { begin: '@[\\w-]+\\s*:', relevance: 15 },
            { begin: '@[\\w-]+' }
          ],
          starts: { end: '[;}]', returnEnd: !0, contains: s }
        },
        p = {
          variants: [
            { begin: '[\\.#:&\\[>]', end: '[;{}]' },
            { begin: t, end: '{' }
          ],
          returnBegin: !0,
          returnEnd: !0,
          illegal: '[<=\'$"]',
          relevance: 0,
          contains: [
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            l,
            i('keyword', 'all\\b'),
            i('variable', '@{[\\w-]+}'),
            i('selector-tag', t + '%?', 0),
            i('selector-id', '#' + t),
            i('selector-class', '\\.' + t, 0),
            i('selector-tag', '&', 0),
            { className: 'selector-attr', begin: '\\[', end: '\\]' },
            {
              className: 'selector-pseudo',
              begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
            },
            { begin: '\\(', end: '\\)', contains: s },
            { begin: '!important' }
          ]
        };
      return (
        n.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, d, u, c, p),
        { case_insensitive: !0, illegal: '[=>\'/<($"]', contains: n }
      );
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t =
          '[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*',
        n =
          '(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?',
        r = { className: 'literal', begin: '\\b(t{1}|nil)\\b' },
        a = {
          className: 'number',
          variants: [
            { begin: n, relevance: 0 },
            { begin: '#(b|B)[0-1]+(/[0-1]+)?' },
            { begin: '#(o|O)[0-7]+(/[0-7]+)?' },
            { begin: '#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?' },
            { begin: '#(c|C)\\(' + n + ' +' + n, end: '\\)' }
          ]
        },
        i = e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
        o = e.COMMENT(';', '$', { relevance: 0 }),
        s = { begin: '\\*', end: '\\*' },
        l = { className: 'symbol', begin: '[:&]' + t },
        c = { begin: t, relevance: 0 },
        d = { begin: '\\|[^]*?\\|' },
        u = {
          contains: [
            a,
            i,
            s,
            l,
            { begin: '\\(', end: '\\)', contains: ['self', r, i, a, c] },
            c
          ],
          variants: [
            { begin: "['`]\\(", end: '\\)' },
            { begin: '\\(quote ', end: '\\)', keywords: { name: 'quote' } },
            { begin: "'\\|[^]*?\\|" }
          ]
        },
        p = {
          variants: [{ begin: "'" + t }, { begin: "#'" + t + '(::' + t + ')*' }]
        },
        m = { begin: '\\(\\s*', end: '\\)' },
        g = { endsWithParent: !0, relevance: 0 };
      return (
        (m.contains = [
          {
            className: 'name',
            variants: [{ begin: t }, { begin: '\\|[^]*?\\|' }]
          },
          g
        ]),
        (g.contains = [u, p, m, r, a, i, o, s, l, d, c]),
        {
          illegal: /\S/,
          contains: [
            a,
            { className: 'meta', begin: '^#!', end: '$' },
            r,
            i,
            o,
            u,
            p,
            m,
            c
          ]
        }
      );
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          begin: '\\b[gtps][A-Z]+[A-Za-z0-9_\\-]*\\b|\\$_[A-Z]+',
          relevance: 0
        },
        n = [
          e.C_BLOCK_COMMENT_MODE,
          e.HASH_COMMENT_MODE,
          e.COMMENT('--', '$'),
          e.COMMENT('[^:]//', '$')
        ],
        r = e.inherit(e.TITLE_MODE, {
          variants: [
            { begin: '\\b_*rig[A-Z]+[A-Za-z0-9_\\-]*' },
            { begin: '\\b_[a-z0-9\\-]+' }
          ]
        }),
        a = e.inherit(e.TITLE_MODE, { begin: '\\b([A-Za-z0-9_\\-]+)\\b' });
      return {
        case_insensitive: !1,
        keywords: {
          keyword:
            '$_COOKIE $_FILES $_GET $_GET_BINARY $_GET_RAW $_POST $_POST_BINARY $_POST_RAW $_SESSION $_SERVER codepoint codepoints segment segments codeunit codeunits sentence sentences trueWord trueWords paragraph after byte bytes english the until http forever descending using line real8 with seventh for stdout finally element word words fourth before black ninth sixth characters chars stderr uInt1 uInt1s uInt2 uInt2s stdin string lines relative rel any fifth items from middle mid at else of catch then third it file milliseconds seconds second secs sec int1 int1s int4 int4s internet int2 int2s normal text item last long detailed effective uInt4 uInt4s repeat end repeat URL in try into switch to words https token binfile each tenth as ticks tick system real4 by dateItems without char character ascending eighth whole dateTime numeric short first ftp integer abbreviated abbr abbrev private case while if div mod wrap and or bitAnd bitNot bitOr bitXor among not in a an within contains ends with begins the keys of keys',
          literal:
            'SIX TEN FORMFEED NINE ZERO NONE SPACE FOUR FALSE COLON CRLF PI COMMA ENDOFFILE EOF EIGHT FIVE QUOTE EMPTY ONE TRUE RETURN CR LINEFEED RIGHT BACKSLASH NULL SEVEN TAB THREE TWO six ten formfeed nine zero none space four false colon crlf pi comma endoffile eof eight five quote empty one true return cr linefeed right backslash null seven tab three two RIVERSION RISTATE FILE_READ_MODE FILE_WRITE_MODE FILE_WRITE_MODE DIR_WRITE_MODE FILE_READ_UMASK FILE_WRITE_UMASK DIR_READ_UMASK DIR_WRITE_UMASK',
          built_in:
            'put abs acos aliasReference annuity arrayDecode arrayEncode asin atan atan2 average avg avgDev base64Decode base64Encode baseConvert binaryDecode binaryEncode byteOffset byteToNum cachedURL cachedURLs charToNum cipherNames codepointOffset codepointProperty codepointToNum codeunitOffset commandNames compound compress constantNames cos date dateFormat decompress directories diskSpace DNSServers exp exp1 exp2 exp10 extents files flushEvents folders format functionNames geometricMean global globals hasMemory harmonicMean hostAddress hostAddressToName hostName hostNameToAddress isNumber ISOToMac itemOffset keys len length libURLErrorData libUrlFormData libURLftpCommand libURLLastHTTPHeaders libURLLastRHHeaders libUrlMultipartFormAddPart libUrlMultipartFormData libURLVersion lineOffset ln ln1 localNames log log2 log10 longFilePath lower macToISO matchChunk matchText matrixMultiply max md5Digest median merge millisec millisecs millisecond milliseconds min monthNames nativeCharToNum normalizeText num number numToByte numToChar numToCodepoint numToNativeChar offset open openfiles openProcesses openProcessIDs openSockets paragraphOffset paramCount param params peerAddress pendingMessages platform popStdDev populationStandardDeviation populationVariance popVariance processID random randomBytes replaceText result revCreateXMLTree revCreateXMLTreeFromFile revCurrentRecord revCurrentRecordIsFirst revCurrentRecordIsLast revDatabaseColumnCount revDatabaseColumnIsNull revDatabaseColumnLengths revDatabaseColumnNames revDatabaseColumnNamed revDatabaseColumnNumbered revDatabaseColumnTypes revDatabaseConnectResult revDatabaseCursors revDatabaseID revDatabaseTableNames revDatabaseType revDataFromQuery revdb_closeCursor revdb_columnbynumber revdb_columncount revdb_columnisnull revdb_columnlengths revdb_columnnames revdb_columntypes revdb_commit revdb_connect revdb_connections revdb_connectionerr revdb_currentrecord revdb_cursorconnection revdb_cursorerr revdb_cursors revdb_dbtype revdb_disconnect revdb_execute revdb_iseof revdb_isbof revdb_movefirst revdb_movelast revdb_movenext revdb_moveprev revdb_query revdb_querylist revdb_recordcount revdb_rollback revdb_tablenames revGetDatabaseDriverPath revNumberOfRecords revOpenDatabase revOpenDatabases revQueryDatabase revQueryDatabaseBlob revQueryResult revQueryIsAtStart revQueryIsAtEnd revUnixFromMacPath revXMLAttribute revXMLAttributes revXMLAttributeValues revXMLChildContents revXMLChildNames revXMLCreateTreeFromFileWithNamespaces revXMLCreateTreeWithNamespaces revXMLDataFromXPathQuery revXMLEvaluateXPath revXMLFirstChild revXMLMatchingNode revXMLNextSibling revXMLNodeContents revXMLNumberOfChildren revXMLParent revXMLPreviousSibling revXMLRootNode revXMLRPC_CreateRequest revXMLRPC_Documents revXMLRPC_Error revXMLRPC_GetHost revXMLRPC_GetMethod revXMLRPC_GetParam revXMLText revXMLRPC_Execute revXMLRPC_GetParamCount revXMLRPC_GetParamNode revXMLRPC_GetParamType revXMLRPC_GetPath revXMLRPC_GetPort revXMLRPC_GetProtocol revXMLRPC_GetRequest revXMLRPC_GetResponse revXMLRPC_GetSocket revXMLTree revXMLTrees revXMLValidateDTD revZipDescribeItem revZipEnumerateItems revZipOpenArchives round sampVariance sec secs seconds sentenceOffset sha1Digest shell shortFilePath sin specialFolderPath sqrt standardDeviation statRound stdDev sum sysError systemVersion tan tempName textDecode textEncode tick ticks time to tokenOffset toLower toUpper transpose truewordOffset trunc uniDecode uniEncode upper URLDecode URLEncode URLStatus uuid value variableNames variance version waitDepth weekdayNames wordOffset xsltApplyStylesheet xsltApplyStylesheetFromFile xsltLoadStylesheet xsltLoadStylesheetFromFile add breakpoint cancel clear local variable file word line folder directory URL close socket process combine constant convert create new alias folder directory decrypt delete variable word line folder directory URL dispatch divide do encrypt filter get include intersect kill libURLDownloadToFile libURLFollowHttpRedirects libURLftpUpload libURLftpUploadFile libURLresetAll libUrlSetAuthCallback libURLSetCustomHTTPHeaders libUrlSetExpect100 libURLSetFTPListCommand libURLSetFTPMode libURLSetFTPStopTime libURLSetStatusCallback load multiply socket prepare process post seek rel relative read from process rename replace require resetAll resolve revAddXMLNode revAppendXML revCloseCursor revCloseDatabase revCommitDatabase revCopyFile revCopyFolder revCopyXMLNode revDeleteFolder revDeleteXMLNode revDeleteAllXMLTrees revDeleteXMLTree revExecuteSQL revGoURL revInsertXMLNode revMoveFolder revMoveToFirstRecord revMoveToLastRecord revMoveToNextRecord revMoveToPreviousRecord revMoveToRecord revMoveXMLNode revPutIntoXMLNode revRollBackDatabase revSetDatabaseDriverPath revSetXMLAttribute revXMLRPC_AddParam revXMLRPC_DeleteAllDocuments revXMLAddDTD revXMLRPC_Free revXMLRPC_FreeAll revXMLRPC_DeleteDocument revXMLRPC_DeleteParam revXMLRPC_SetHost revXMLRPC_SetMethod revXMLRPC_SetPort revXMLRPC_SetProtocol revXMLRPC_SetSocket revZipAddItemWithData revZipAddItemWithFile revZipAddUncompressedItemWithData revZipAddUncompressedItemWithFile revZipCancel revZipCloseArchive revZipDeleteItem revZipExtractItemToFile revZipExtractItemToVariable revZipSetProgressCallback revZipRenameItem revZipReplaceItemWithData revZipReplaceItemWithFile revZipOpenArchive send set sort split start stop subtract union unload wait write'
        },
        contains: [
          t,
          { className: 'keyword', begin: '\\bend\\sif\\b' },
          {
            className: 'function',
            beginKeywords: 'function',
            end: '$',
            contains: [
              t,
              a,
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
              e.BINARY_NUMBER_MODE,
              e.C_NUMBER_MODE,
              r
            ]
          },
          {
            className: 'function',
            begin: '\\bend\\s+',
            end: '$',
            keywords: 'end',
            contains: [a, r],
            relevance: 0
          },
          {
            beginKeywords: 'command on',
            end: '$',
            contains: [
              t,
              a,
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
              e.BINARY_NUMBER_MODE,
              e.C_NUMBER_MODE,
              r
            ]
          },
          {
            className: 'meta',
            variants: [
              { begin: '<\\?(rev|lc|livecode)', relevance: 10 },
              { begin: '<\\?' },
              { begin: '\\?>' }
            ]
          },
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          e.BINARY_NUMBER_MODE,
          e.C_NUMBER_MODE,
          r
        ].concat(n),
        illegal: ';$|^\\[|^=|&|{'
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          keyword:
            'in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger case default function var with then unless until loop of by when and or is isnt not it that otherwise from to til fallthrough super case default function var void const let enum export import native __hasProp __extends __slice __bind __indexOf',
          literal: 'true false null undefined yes no on off it that void',
          built_in: 'npm require console print module global window document'
        },
        n = '[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*',
        r = e.inherit(e.TITLE_MODE, { begin: n }),
        a = { className: 'subst', begin: /#\{/, end: /}/, keywords: t },
        i = {
          className: 'subst',
          begin: /#[A-Za-z$_]/,
          end: /(?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
          keywords: t
        },
        o = [
          e.BINARY_NUMBER_MODE,
          {
            className: 'number',
            begin:
              '(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)',
            relevance: 0,
            starts: { end: '(\\s*/)?', relevance: 0 }
          },
          {
            className: 'string',
            variants: [
              { begin: /'''/, end: /'''/, contains: [e.BACKSLASH_ESCAPE] },
              { begin: /'/, end: /'/, contains: [e.BACKSLASH_ESCAPE] },
              {
                begin: /"""/,
                end: /"""/,
                contains: [e.BACKSLASH_ESCAPE, a, i]
              },
              { begin: /"/, end: /"/, contains: [e.BACKSLASH_ESCAPE, a, i] },
              { begin: /\\/, end: /(\s|$)/, excludeEnd: !0 }
            ]
          },
          {
            className: 'regexp',
            variants: [
              {
                begin: '//',
                end: '//[gim]*',
                contains: [a, e.HASH_COMMENT_MODE]
              },
              { begin: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/ }
            ]
          },
          { begin: '@' + n },
          {
            begin: '``',
            end: '``',
            excludeBegin: !0,
            excludeEnd: !0,
            subLanguage: 'javascript'
          }
        ];
      a.contains = o;
      var s = {
        className: 'params',
        begin: '\\(',
        returnBegin: !0,
        contains: [
          { begin: /\(/, end: /\)/, keywords: t, contains: ['self'].concat(o) }
        ]
      };
      return {
        aliases: ['ls'],
        keywords: t,
        illegal: /\/\*/,
        contains: o.concat([
          e.COMMENT('\\/\\*', '\\*\\/'),
          e.HASH_COMMENT_MODE,
          {
            className: 'function',
            contains: [r, s],
            returnBegin: !0,
            variants: [
              {
                begin: '(' + n + '\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B\\->\\*?',
                end: '\\->\\*?'
              },
              {
                begin:
                  '(' +
                  n +
                  '\\s*(?:=|:=)\\s*)?!?(\\(.*\\))?\\s*\\B[-~]{1,2}>\\*?',
                end: '[-~]{1,2}>\\*?'
              },
              {
                begin:
                  '(' +
                  n +
                  '\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B!?[-~]{1,2}>\\*?',
                end: '!?[-~]{1,2}>\\*?'
              }
            ]
          },
          {
            className: 'class',
            beginKeywords: 'class',
            end: '$',
            illegal: /[:="\[\]]/,
            contains: [
              {
                beginKeywords: 'extends',
                endsWithParent: !0,
                illegal: /[:="\[\]]/,
                contains: [r]
              },
              r
            ]
          },
          {
            begin: n + ':',
            end: ':',
            returnBegin: !0,
            returnEnd: !0,
            relevance: 0
          }
        ])
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = '([-a-zA-Z$._][\\w\\-$.]*)';
      return {
        keywords:
          'begin end true false declare define global constant private linker_private internal available_externally linkonce linkonce_odr weak weak_odr appending dllimport dllexport common default hidden protected extern_weak external thread_local zeroinitializer undef null to tail target triple datalayout volatile nuw nsw nnan ninf nsz arcp fast exact inbounds align addrspace section alias module asm sideeffect gc dbg linker_private_weak attributes blockaddress initialexec localdynamic localexec prefix unnamed_addr ccc fastcc coldcc x86_stdcallcc x86_fastcallcc arm_apcscc arm_aapcscc arm_aapcs_vfpcc ptx_device ptx_kernel intel_ocl_bicc msp430_intrcc spir_func spir_kernel x86_64_sysvcc x86_64_win64cc x86_thiscallcc cc c signext zeroext inreg sret nounwind noreturn noalias nocapture byval nest readnone readonly inlinehint noinline alwaysinline optsize ssp sspreq noredzone noimplicitfloat naked builtin cold nobuiltin noduplicate nonlazybind optnone returns_twice sanitize_address sanitize_memory sanitize_thread sspstrong uwtable returned type opaque eq ne slt sgt sle sge ult ugt ule uge oeq one olt ogt ole oge ord uno ueq une x acq_rel acquire alignstack atomic catch cleanup filter inteldialect max min monotonic nand personality release seq_cst singlethread umax umin unordered xchg add fadd sub fsub mul fmul udiv sdiv fdiv urem srem frem shl lshr ashr and or xor icmp fcmp phi call trunc zext sext fptrunc fpext uitofp sitofp fptoui fptosi inttoptr ptrtoint bitcast addrspacecast select va_arg ret br switch invoke unwind unreachable indirectbr landingpad resume malloc alloca free load store getelementptr extractelement insertelement shufflevector getresult extractvalue insertvalue atomicrmw cmpxchg fence argmemonly double',
        contains: [
          { className: 'keyword', begin: 'i\\d+' },
          e.COMMENT(';', '\\n', { relevance: 0 }),
          e.QUOTE_STRING_MODE,
          {
            className: 'string',
            variants: [{ begin: '"', end: '[^\\\\]"' }],
            relevance: 0
          },
          {
            className: 'title',
            variants: [
              { begin: '@' + t },
              { begin: '@\\d+' },
              { begin: '!' + t },
              { begin: '!\\d+' + t }
            ]
          },
          {
            className: 'symbol',
            variants: [
              { begin: '%' + t },
              { begin: '%\\d+' },
              { begin: '#\\d+' }
            ]
          },
          {
            className: 'number',
            variants: [
              { begin: '0[xX][a-fA-F0-9]+' },
              { begin: '-?\\d+(?:[.]\\d+)?(?:[eE][-+]?\\d+(?:[.]\\d+)?)?' }
            ],
            relevance: 0
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          className: 'string',
          begin: '"',
          end: '"',
          contains: [{ className: 'subst', begin: /\\[tn"\\]/ }]
        },
        n = { className: 'number', begin: e.C_NUMBER_RE };
      return {
        illegal: ':',
        contains: [
          t,
          {
            className: 'comment',
            variants: [e.COMMENT('//', '$'), e.COMMENT('/\\*', '\\*/')]
          },
          n,
          {
            className: 'section',
            variants: [
              { begin: '\\b(?:state|default)\\b' },
              {
                begin:
                  '\\b(?:state_(?:entry|exit)|touch(?:_(?:start|end))?|(?:land_)?collision(?:_(?:start|end))?|timer|listen|(?:no_)?sensor|control|(?:not_)?at_(?:rot_)?target|money|email|experience_permissions(?:_denied)?|run_time_permissions|changed|attach|dataserver|moving_(?:start|end)|link_message|(?:on|object)_rez|remote_data|http_re(?:sponse|quest)|path_update|transaction_result)\\b'
              }
            ]
          },
          {
            className: 'built_in',
            begin:
              '\\b(?:ll(?:AgentInExperience|(?:Create|DataSize|Delete|KeyCount|Keys|Read|Update)KeyValue|GetExperience(?:Details|ErrorMessage)|ReturnObjectsBy(?:ID|Owner)|Json(?:2List|[GS]etValue|ValueType)|Sin|Cos|Tan|Atan2|Sqrt|Pow|Abs|Fabs|Frand|Floor|Ceil|Round|Vec(?:Mag|Norm|Dist)|Rot(?:Between|2(?:Euler|Fwd|Left|Up))|(?:Euler|Axes)2Rot|Whisper|(?:Region|Owner)?Say|Shout|Listen(?:Control|Remove)?|Sensor(?:Repeat|Remove)?|Detected(?:Name|Key|Owner|Type|Pos|Vel|Grab|Rot|Group|LinkNumber)|Die|Ground|Wind|(?:[GS]et)(?:AnimationOverride|MemoryLimit|PrimMediaParams|ParcelMusicURL|Object(?:Desc|Name)|PhysicsMaterial|Status|Scale|Color|Alpha|Texture|Pos|Rot|Force|Torque)|ResetAnimationOverride|(?:Scale|Offset|Rotate)Texture|(?:Rot)?Target(?:Remove)?|(?:Stop)?MoveToTarget|Apply(?:Rotational)?Impulse|Set(?:KeyframedMotion|ContentType|RegionPos|(?:Angular)?Velocity|Buoyancy|HoverHeight|ForceAndTorque|TimerEvent|ScriptState|Damage|TextureAnim|Sound(?:Queueing|Radius)|Vehicle(?:Type|(?:Float|Vector|Rotation)Param)|(?:Touch|Sit)?Text|Camera(?:Eye|At)Offset|PrimitiveParams|ClickAction|Link(?:Alpha|Color|PrimitiveParams(?:Fast)?|Texture(?:Anim)?|Camera|Media)|RemoteScriptAccessPin|PayPrice|LocalRot)|ScaleByFactor|Get(?:(?:Max|Min)ScaleFactor|ClosestNavPoint|StaticPath|SimStats|Env|PrimitiveParams|Link(?:PrimitiveParams|Number(?:OfSides)?|Key|Name|Media)|HTTPHeader|FreeURLs|Object(?:Details|PermMask|PrimCount)|Parcel(?:MaxPrims|Details|Prim(?:Count|Owners))|Attached(?:List)?|(?:SPMax|Free|Used)Memory|Region(?:Name|TimeDilation|FPS|Corner|AgentCount)|Root(?:Position|Rotation)|UnixTime|(?:Parcel|Region)Flags|(?:Wall|GMT)clock|SimulatorHostname|BoundingBox|GeometricCenter|Creator|NumberOf(?:Prims|NotecardLines|Sides)|Animation(?:List)?|(?:Camera|Local)(?:Pos|Rot)|Vel|Accel|Omega|Time(?:stamp|OfDay)|(?:Object|CenterOf)?Mass|MassMKS|Energy|Owner|(?:Owner)?Key|SunDirection|Texture(?:Offset|Scale|Rot)|Inventory(?:Number|Name|Key|Type|Creator|PermMask)|Permissions(?:Key)?|StartParameter|List(?:Length|EntryType)|Date|Agent(?:Size|Info|Language|List)|LandOwnerAt|NotecardLine|Script(?:Name|State))|(?:Get|Reset|GetAndReset)Time|PlaySound(?:Slave)?|LoopSound(?:Master|Slave)?|(?:Trigger|Stop|Preload)Sound|(?:(?:Get|Delete)Sub|Insert)String|To(?:Upper|Lower)|Give(?:InventoryList|Money)|RezObject|(?:Stop)?LookAt|Sleep|CollisionFilter|(?:Take|Release)Controls|DetachFromAvatar|AttachToAvatar(?:Temp)?|InstantMessage|(?:GetNext)?Email|StopHover|MinEventDelay|RotLookAt|String(?:Length|Trim)|(?:Start|Stop)Animation|TargetOmega|Request(?:Experience)?Permissions|(?:Create|Break)Link|BreakAllLinks|(?:Give|Remove)Inventory|Water|PassTouches|Request(?:Agent|Inventory)Data|TeleportAgent(?:Home|GlobalCoords)?|ModifyLand|CollisionSound|ResetScript|MessageLinked|PushObject|PassCollisions|AxisAngle2Rot|Rot2(?:Axis|Angle)|A(?:cos|sin)|AngleBetween|AllowInventoryDrop|SubStringIndex|List2(?:CSV|Integer|Json|Float|String|Key|Vector|Rot|List(?:Strided)?)|DeleteSubList|List(?:Statistics|Sort|Randomize|(?:Insert|Find|Replace)List)|EdgeOfWorld|AdjustSoundVolume|Key2Name|TriggerSoundLimited|EjectFromLand|(?:CSV|ParseString)2List|OverMyLand|SameGroup|UnSit|Ground(?:Slope|Normal|Contour)|GroundRepel|(?:Set|Remove)VehicleFlags|(?:AvatarOn)?(?:Link)?SitTarget|Script(?:Danger|Profiler)|Dialog|VolumeDetect|ResetOtherScript|RemoteLoadScriptPin|(?:Open|Close)RemoteDataChannel|SendRemoteData|RemoteDataReply|(?:Integer|String)ToBase64|XorBase64|Log(?:10)?|Base64To(?:String|Integer)|ParseStringKeepNulls|RezAtRoot|RequestSimulatorData|ForceMouselook|(?:Load|Release|(?:E|Une)scape)URL|ParcelMedia(?:CommandList|Query)|ModPow|MapDestination|(?:RemoveFrom|AddTo|Reset)Land(?:Pass|Ban)List|(?:Set|Clear)CameraParams|HTTP(?:Request|Response)|TextBox|DetectedTouch(?:UV|Face|Pos|(?:N|Bin)ormal|ST)|(?:MD5|SHA1|DumpList2)String|Request(?:Secure)?URL|Clear(?:Prim|Link)Media|(?:Link)?ParticleSystem|(?:Get|Request)(?:Username|DisplayName)|RegionSayTo|CastRay|GenerateKey|TransferLindenDollars|ManageEstateAccess|(?:Create|Delete)Character|ExecCharacterCmd|Evade|FleeFrom|NavigateTo|PatrolPoints|Pursue|UpdateCharacter|WanderWithin))\\b'
          },
          {
            className: 'literal',
            variants: [
              {
                begin:
                  '\\b(?:PI|TWO_PI|PI_BY_TWO|DEG_TO_RAD|RAD_TO_DEG|SQRT2)\\b'
              },
              {
                begin:
                  '\\b(?:XP_ERROR_(?:EXPERIENCES_DISABLED|EXPERIENCE_(?:DISABLED|SUSPENDED)|INVALID_(?:EXPERIENCE|PARAMETERS)|KEY_NOT_FOUND|MATURITY_EXCEEDED|NONE|NOT_(?:FOUND|PERMITTED(?:_LAND)?)|NO_EXPERIENCE|QUOTA_EXCEEDED|RETRY_UPDATE|STORAGE_EXCEPTION|STORE_DISABLED|THROTTLED|UNKNOWN_ERROR)|JSON_APPEND|STATUS_(?:PHYSICS|ROTATE_[XYZ]|PHANTOM|SANDBOX|BLOCK_GRAB(?:_OBJECT)?|(?:DIE|RETURN)_AT_EDGE|CAST_SHADOWS|OK|MALFORMED_PARAMS|TYPE_MISMATCH|BOUNDS_ERROR|NOT_(?:FOUND|SUPPORTED)|INTERNAL_ERROR|WHITELIST_FAILED)|AGENT(?:_(?:BY_(?:LEGACY_|USER)NAME|FLYING|ATTACHMENTS|SCRIPTED|MOUSELOOK|SITTING|ON_OBJECT|AWAY|WALKING|IN_AIR|TYPING|CROUCHING|BUSY|ALWAYS_RUN|AUTOPILOT|LIST_(?:PARCEL(?:_OWNER)?|REGION)))?|CAMERA_(?:PITCH|DISTANCE|BEHINDNESS_(?:ANGLE|LAG)|(?:FOCUS|POSITION)(?:_(?:THRESHOLD|LOCKED|LAG))?|FOCUS_OFFSET|ACTIVE)|ANIM_ON|LOOP|REVERSE|PING_PONG|SMOOTH|ROTATE|SCALE|ALL_SIDES|LINK_(?:ROOT|SET|ALL_(?:OTHERS|CHILDREN)|THIS)|ACTIVE|PASS(?:IVE|_(?:ALWAYS|IF_NOT_HANDLED|NEVER))|SCRIPTED|CONTROL_(?:FWD|BACK|(?:ROT_)?(?:LEFT|RIGHT)|UP|DOWN|(?:ML_)?LBUTTON)|PERMISSION_(?:RETURN_OBJECTS|DEBIT|OVERRIDE_ANIMATIONS|SILENT_ESTATE_MANAGEMENT|TAKE_CONTROLS|TRIGGER_ANIMATION|ATTACH|CHANGE_LINKS|(?:CONTROL|TRACK)_CAMERA|TELEPORT)|INVENTORY_(?:TEXTURE|SOUND|OBJECT|SCRIPT|LANDMARK|CLOTHING|NOTECARD|BODYPART|ANIMATION|GESTURE|ALL|NONE)|CHANGED_(?:INVENTORY|COLOR|SHAPE|SCALE|TEXTURE|LINK|ALLOWED_DROP|OWNER|REGION(?:_START)?|TELEPORT|MEDIA)|OBJECT_(?:CLICK_ACTION|HOVER_HEIGHT|LAST_OWNER_ID|(?:PHYSICS|SERVER|STREAMING)_COST|UNKNOWN_DETAIL|CHARACTER_TIME|PHANTOM|PHYSICS|TEMP_ON_REZ|NAME|DESC|POS|PRIM_(?:COUNT|EQUIVALENCE)|RETURN_(?:PARCEL(?:_OWNER)?|REGION)|REZZER_KEY|ROO?T|VELOCITY|OMEGA|OWNER|GROUP|CREATOR|ATTACHED_POINT|RENDER_WEIGHT|(?:BODY_SHAPE|PATHFINDING)_TYPE|(?:RUNNING|TOTAL)_SCRIPT_COUNT|TOTAL_INVENTORY_COUNT|SCRIPT_(?:MEMORY|TIME))|TYPE_(?:INTEGER|FLOAT|STRING|KEY|VECTOR|ROTATION|INVALID)|(?:DEBUG|PUBLIC)_CHANNEL|ATTACH_(?:AVATAR_CENTER|CHEST|HEAD|BACK|PELVIS|MOUTH|CHIN|NECK|NOSE|BELLY|[LR](?:SHOULDER|HAND|FOOT|EAR|EYE|[UL](?:ARM|LEG)|HIP)|(?:LEFT|RIGHT)_PEC|HUD_(?:CENTER_[12]|TOP_(?:RIGHT|CENTER|LEFT)|BOTTOM(?:_(?:RIGHT|LEFT))?)|[LR]HAND_RING1|TAIL_(?:BASE|TIP)|[LR]WING|FACE_(?:JAW|[LR]EAR|[LR]EYE|TOUNGE)|GROIN|HIND_[LR]FOOT)|LAND_(?:LEVEL|RAISE|LOWER|SMOOTH|NOISE|REVERT)|DATA_(?:ONLINE|NAME|BORN|SIM_(?:POS|STATUS|RATING)|PAYINFO)|PAYMENT_INFO_(?:ON_FILE|USED)|REMOTE_DATA_(?:CHANNEL|REQUEST|REPLY)|PSYS_(?:PART_(?:BF_(?:ZERO|ONE(?:_MINUS_(?:DEST_COLOR|SOURCE_(ALPHA|COLOR)))?|DEST_COLOR|SOURCE_(ALPHA|COLOR))|BLEND_FUNC_(DEST|SOURCE)|FLAGS|(?:START|END)_(?:COLOR|ALPHA|SCALE|GLOW)|MAX_AGE|(?:RIBBON|WIND|INTERP_(?:COLOR|SCALE)|BOUNCE|FOLLOW_(?:SRC|VELOCITY)|TARGET_(?:POS|LINEAR)|EMISSIVE)_MASK)|SRC_(?:MAX_AGE|PATTERN|ANGLE_(?:BEGIN|END)|BURST_(?:RATE|PART_COUNT|RADIUS|SPEED_(?:MIN|MAX))|ACCEL|TEXTURE|TARGET_KEY|OMEGA|PATTERN_(?:DROP|EXPLODE|ANGLE(?:_CONE(?:_EMPTY)?)?)))|VEHICLE_(?:REFERENCE_FRAME|TYPE_(?:NONE|SLED|CAR|BOAT|AIRPLANE|BALLOON)|(?:LINEAR|ANGULAR)_(?:FRICTION_TIMESCALE|MOTOR_DIRECTION)|LINEAR_MOTOR_OFFSET|HOVER_(?:HEIGHT|EFFICIENCY|TIMESCALE)|BUOYANCY|(?:LINEAR|ANGULAR)_(?:DEFLECTION_(?:EFFICIENCY|TIMESCALE)|MOTOR_(?:DECAY_)?TIMESCALE)|VERTICAL_ATTRACTION_(?:EFFICIENCY|TIMESCALE)|BANKING_(?:EFFICIENCY|MIX|TIMESCALE)|FLAG_(?:NO_DEFLECTION_UP|LIMIT_(?:ROLL_ONLY|MOTOR_UP)|HOVER_(?:(?:WATER|TERRAIN|UP)_ONLY|GLOBAL_HEIGHT)|MOUSELOOK_(?:STEER|BANK)|CAMERA_DECOUPLED))|PRIM_(?:ALPHA_MODE(?:_(?:BLEND|EMISSIVE|MASK|NONE))?|NORMAL|SPECULAR|TYPE(?:_(?:BOX|CYLINDER|PRISM|SPHERE|TORUS|TUBE|RING|SCULPT))?|HOLE_(?:DEFAULT|CIRCLE|SQUARE|TRIANGLE)|MATERIAL(?:_(?:STONE|METAL|GLASS|WOOD|FLESH|PLASTIC|RUBBER))?|SHINY_(?:NONE|LOW|MEDIUM|HIGH)|BUMP_(?:NONE|BRIGHT|DARK|WOOD|BARK|BRICKS|CHECKER|CONCRETE|TILE|STONE|DISKS|GRAVEL|BLOBS|SIDING|LARGETILE|STUCCO|SUCTION|WEAVE)|TEXGEN_(?:DEFAULT|PLANAR)|SCULPT_(?:TYPE_(?:SPHERE|TORUS|PLANE|CYLINDER|MASK)|FLAG_(?:MIRROR|INVERT))|PHYSICS(?:_(?:SHAPE_(?:CONVEX|NONE|PRIM|TYPE)))?|(?:POS|ROT)_LOCAL|SLICE|TEXT|FLEXIBLE|POINT_LIGHT|TEMP_ON_REZ|PHANTOM|POSITION|SIZE|ROTATION|TEXTURE|NAME|OMEGA|DESC|LINK_TARGET|COLOR|BUMP_SHINY|FULLBRIGHT|TEXGEN|GLOW|MEDIA_(?:ALT_IMAGE_ENABLE|CONTROLS|(?:CURRENT|HOME)_URL|AUTO_(?:LOOP|PLAY|SCALE|ZOOM)|FIRST_CLICK_INTERACT|(?:WIDTH|HEIGHT)_PIXELS|WHITELIST(?:_ENABLE)?|PERMS_(?:INTERACT|CONTROL)|PARAM_MAX|CONTROLS_(?:STANDARD|MINI)|PERM_(?:NONE|OWNER|GROUP|ANYONE)|MAX_(?:URL_LENGTH|WHITELIST_(?:SIZE|COUNT)|(?:WIDTH|HEIGHT)_PIXELS)))|MASK_(?:BASE|OWNER|GROUP|EVERYONE|NEXT)|PERM_(?:TRANSFER|MODIFY|COPY|MOVE|ALL)|PARCEL_(?:MEDIA_COMMAND_(?:STOP|PAUSE|PLAY|LOOP|TEXTURE|URL|TIME|AGENT|UNLOAD|AUTO_ALIGN|TYPE|SIZE|DESC|LOOP_SET)|FLAG_(?:ALLOW_(?:FLY|(?:GROUP_)?SCRIPTS|LANDMARK|TERRAFORM|DAMAGE|CREATE_(?:GROUP_)?OBJECTS)|USE_(?:ACCESS_(?:GROUP|LIST)|BAN_LIST|LAND_PASS_LIST)|LOCAL_SOUND_ONLY|RESTRICT_PUSHOBJECT|ALLOW_(?:GROUP|ALL)_OBJECT_ENTRY)|COUNT_(?:TOTAL|OWNER|GROUP|OTHER|SELECTED|TEMP)|DETAILS_(?:NAME|DESC|OWNER|GROUP|AREA|ID|SEE_AVATARS))|LIST_STAT_(?:MAX|MIN|MEAN|MEDIAN|STD_DEV|SUM(?:_SQUARES)?|NUM_COUNT|GEOMETRIC_MEAN|RANGE)|PAY_(?:HIDE|DEFAULT)|REGION_FLAG_(?:ALLOW_DAMAGE|FIXED_SUN|BLOCK_TERRAFORM|SANDBOX|DISABLE_(?:COLLISIONS|PHYSICS)|BLOCK_FLY|ALLOW_DIRECT_TELEPORT|RESTRICT_PUSHOBJECT)|HTTP_(?:METHOD|MIMETYPE|BODY_(?:MAXLENGTH|TRUNCATED)|CUSTOM_HEADER|PRAGMA_NO_CACHE|VERBOSE_THROTTLE|VERIFY_CERT)|STRING_(?:TRIM(?:_(?:HEAD|TAIL))?)|CLICK_ACTION_(?:NONE|TOUCH|SIT|BUY|PAY|OPEN(?:_MEDIA)?|PLAY|ZOOM)|TOUCH_INVALID_FACE|PROFILE_(?:NONE|SCRIPT_MEMORY)|RC_(?:DATA_FLAGS|DETECT_PHANTOM|GET_(?:LINK_NUM|NORMAL|ROOT_KEY)|MAX_HITS|REJECT_(?:TYPES|AGENTS|(?:NON)?PHYSICAL|LAND))|RCERR_(?:CAST_TIME_EXCEEDED|SIM_PERF_LOW|UNKNOWN)|ESTATE_ACCESS_(?:ALLOWED_(?:AGENT|GROUP)_(?:ADD|REMOVE)|BANNED_AGENT_(?:ADD|REMOVE))|DENSITY|FRICTION|RESTITUTION|GRAVITY_MULTIPLIER|KFM_(?:COMMAND|CMD_(?:PLAY|STOP|PAUSE)|MODE|FORWARD|LOOP|PING_PONG|REVERSE|DATA|ROTATION|TRANSLATION)|ERR_(?:GENERIC|PARCEL_PERMISSIONS|MALFORMED_PARAMS|RUNTIME_PERMISSIONS|THROTTLED)|CHARACTER_(?:CMD_(?:(?:SMOOTH_)?STOP|JUMP)|DESIRED_(?:TURN_)?SPEED|RADIUS|STAY_WITHIN_PARCEL|LENGTH|ORIENTATION|ACCOUNT_FOR_SKIPPED_FRAMES|AVOIDANCE_MODE|TYPE(?:_(?:[ABCD]|NONE))?|MAX_(?:DECEL|TURN_RADIUS|(?:ACCEL|SPEED)))|PURSUIT_(?:OFFSET|FUZZ_FACTOR|GOAL_TOLERANCE|INTERCEPT)|REQUIRE_LINE_OF_SIGHT|FORCE_DIRECT_PATH|VERTICAL|HORIZONTAL|AVOID_(?:CHARACTERS|DYNAMIC_OBSTACLES|NONE)|PU_(?:EVADE_(?:HIDDEN|SPOTTED)|FAILURE_(?:DYNAMIC_PATHFINDING_DISABLED|INVALID_(?:GOAL|START)|NO_(?:NAVMESH|VALID_DESTINATION)|OTHER|TARGET_GONE|(?:PARCEL_)?UNREACHABLE)|(?:GOAL|SLOWDOWN_DISTANCE)_REACHED)|TRAVERSAL_TYPE(?:_(?:FAST|NONE|SLOW))?|CONTENT_TYPE_(?:ATOM|FORM|HTML|JSON|LLSD|RSS|TEXT|XHTML|XML)|GCNP_(?:RADIUS|STATIC)|(?:PATROL|WANDER)_PAUSE_AT_WAYPOINTS|OPT_(?:AVATAR|CHARACTER|EXCLUSION_VOLUME|LEGACY_LINKSET|MATERIAL_VOLUME|OTHER|STATIC_OBSTACLE|WALKABLE)|SIM_STAT_PCT_CHARS_STEPPED)\\b'
              },
              { begin: '\\b(?:FALSE|TRUE)\\b' },
              { begin: '\\b(?:ZERO_ROTATION)\\b' },
              {
                begin:
                  '\\b(?:EOF|JSON_(?:ARRAY|DELETE|FALSE|INVALID|NULL|NUMBER|OBJECT|STRING|TRUE)|NULL_KEY|TEXTURE_(?:BLANK|DEFAULT|MEDIA|PLYWOOD|TRANSPARENT)|URL_REQUEST_(?:GRANTED|DENIED))\\b'
              },
              {
                begin: '\\b(?:ZERO_VECTOR|TOUCH_INVALID_(?:TEXCOORD|VECTOR))\\b'
              }
            ]
          },
          {
            className: 'type',
            begin:
              '\\b(?:integer|float|string|key|vector|quaternion|rotation|list)\\b'
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = { begin: '\\[=*\\[', end: '\\]=*\\]', contains: ['self'] },
        n = [
          e.COMMENT('--(?!\\[=*\\[)', '$'),
          e.COMMENT('--\\[=*\\[', '\\]=*\\]', { contains: [t], relevance: 10 })
        ];
      return {
        lexemes: e.UNDERSCORE_IDENT_RE,
        keywords: {
          literal: 'true false nil',
          keyword:
            'and break do else elseif end for goto if in local not or repeat return then until while',
          built_in:
            '_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstringmodule next pairs pcall print rawequal rawget rawset require select setfenvsetmetatable tonumber tostring type unpack xpcall arg selfcoroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove'
        },
        contains: n.concat([
          {
            className: 'function',
            beginKeywords: 'function',
            end: '\\)',
            contains: [
              e.inherit(e.TITLE_MODE, {
                begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'
              }),
              {
                className: 'params',
                begin: '\\(',
                endsWithParent: !0,
                contains: n
              }
            ].concat(n)
          },
          e.C_NUMBER_MODE,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          {
            className: 'string',
            begin: '\\[=*\\[',
            end: '\\]=*\\]',
            contains: [t],
            relevance: 5
          }
        ])
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          className: 'variable',
          variants: [
            {
              begin: '\\$\\(' + e.UNDERSCORE_IDENT_RE + '\\)',
              contains: [e.BACKSLASH_ESCAPE]
            },
            { begin: /\$[@%<?\^\+\*]/ }
          ]
        },
        n = {
          className: 'string',
          begin: /"/,
          end: /"/,
          contains: [e.BACKSLASH_ESCAPE, t]
        },
        r = {
          className: 'variable',
          begin: /\$\([\w-]+\s/,
          end: /\)/,
          keywords: {
            built_in:
              'subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value'
          },
          contains: [t]
        },
        a = {
          begin: '^' + e.UNDERSCORE_IDENT_RE + '\\s*[:+?]?=',
          illegal: '\\n',
          returnBegin: !0,
          contains: [
            {
              begin: '^' + e.UNDERSCORE_IDENT_RE,
              end: '[:+?]?=',
              excludeEnd: !0
            }
          ]
        },
        i = {
          className: 'section',
          begin: /^[^\s]+:/,
          end: /$/,
          contains: [t]
        };
      return {
        aliases: ['mk', 'mak'],
        keywords:
          'define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath',
        lexemes: /[\w-]+/,
        contains: [
          e.HASH_COMMENT_MODE,
          t,
          n,
          r,
          a,
          {
            className: 'meta',
            begin: /^\.PHONY:/,
            end: /$/,
            keywords: { 'meta-keyword': '.PHONY' },
            lexemes: /[\.\w]+/
          },
          i
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['mma'],
        lexemes: '(\\$|\\b)' + e.IDENT_RE + '\\b',
        keywords:
          'AbelianGroup Abort AbortKernels AbortProtect Above Abs Absolute AbsoluteCorrelation AbsoluteCorrelationFunction AbsoluteCurrentValue AbsoluteDashing AbsoluteFileName AbsoluteOptions AbsolutePointSize AbsoluteThickness AbsoluteTime AbsoluteTiming AccountingForm Accumulate Accuracy AccuracyGoal ActionDelay ActionMenu ActionMenuBox ActionMenuBoxOptions Active ActiveItem ActiveStyle AcyclicGraphQ AddOnHelpPath AddTo AdjacencyGraph AdjacencyList AdjacencyMatrix AdjustmentBox AdjustmentBoxOptions AdjustTimeSeriesForecast AffineTransform After AiryAi AiryAiPrime AiryAiZero AiryBi AiryBiPrime AiryBiZero AlgebraicIntegerQ AlgebraicNumber AlgebraicNumberDenominator AlgebraicNumberNorm AlgebraicNumberPolynomial AlgebraicNumberTrace AlgebraicRules AlgebraicRulesData Algebraics AlgebraicUnitQ Alignment AlignmentMarker AlignmentPoint All AllowedDimensions AllowGroupClose AllowInlineCells AllowKernelInitialization AllowReverseGroupClose AllowScriptLevelChange AlphaChannel AlternatingGroup AlternativeHypothesis Alternatives AmbientLight Analytic AnchoredSearch And AndersonDarlingTest AngerJ AngleBracket AngularGauge Animate AnimationCycleOffset AnimationCycleRepetitions AnimationDirection AnimationDisplayTime AnimationRate AnimationRepetitions AnimationRunning Animator AnimatorBox AnimatorBoxOptions AnimatorElements Annotation Annuity AnnuityDue Antialiasing Antisymmetric Apart ApartSquareFree Appearance AppearanceElements AppellF1 Append AppendTo Apply ArcCos ArcCosh ArcCot ArcCoth ArcCsc ArcCsch ArcSec ArcSech ArcSin ArcSinDistribution ArcSinh ArcTan ArcTanh Arg ArgMax ArgMin ArgumentCountQ ARIMAProcess ArithmeticGeometricMean ARMAProcess ARProcess Array ArrayComponents ArrayDepth ArrayFlatten ArrayPad ArrayPlot ArrayQ ArrayReshape ArrayRules Arrays Arrow Arrow3DBox ArrowBox Arrowheads AspectRatio AspectRatioFixed Assert Assuming Assumptions AstronomicalData Asynchronous AsynchronousTaskObject AsynchronousTasks AtomQ Attributes AugmentedSymmetricPolynomial AutoAction AutoDelete AutoEvaluateEvents AutoGeneratedPackage AutoIndent AutoIndentSpacings AutoItalicWords AutoloadPath AutoMatch Automatic AutomaticImageSize AutoMultiplicationSymbol AutoNumberFormatting AutoOpenNotebooks AutoOpenPalettes AutorunSequencing AutoScaling AutoScroll AutoSpacing AutoStyleOptions AutoStyleWords Axes AxesEdge AxesLabel AxesOrigin AxesStyle Axis BabyMonsterGroupB Back Background BackgroundTasksSettings Backslash Backsubstitution Backward Band BandpassFilter BandstopFilter BarabasiAlbertGraphDistribution BarChart BarChart3D BarLegend BarlowProschanImportance BarnesG BarOrigin BarSpacing BartlettHannWindow BartlettWindow BaseForm Baseline BaselinePosition BaseStyle BatesDistribution BattleLemarieWavelet Because BeckmannDistribution Beep Before Begin BeginDialogPacket BeginFrontEndInteractionPacket BeginPackage BellB BellY Below BenfordDistribution BeniniDistribution BenktanderGibratDistribution BenktanderWeibullDistribution BernoulliB BernoulliDistribution BernoulliGraphDistribution BernoulliProcess BernsteinBasis BesselFilterModel BesselI BesselJ BesselJZero BesselK BesselY BesselYZero Beta BetaBinomialDistribution BetaDistribution BetaNegativeBinomialDistribution BetaPrimeDistribution BetaRegularized BetweennessCentrality BezierCurve BezierCurve3DBox BezierCurve3DBoxOptions BezierCurveBox BezierCurveBoxOptions BezierFunction BilateralFilter Binarize BinaryFormat BinaryImageQ BinaryRead BinaryReadList BinaryWrite BinCounts BinLists Binomial BinomialDistribution BinomialProcess BinormalDistribution BiorthogonalSplineWavelet BipartiteGraphQ BirnbaumImportance BirnbaumSaundersDistribution BitAnd BitClear BitGet BitLength BitNot BitOr BitSet BitShiftLeft BitShiftRight BitXor Black BlackmanHarrisWindow BlackmanNuttallWindow BlackmanWindow Blank BlankForm BlankNullSequence BlankSequence Blend Block BlockRandom BlomqvistBeta BlomqvistBetaTest Blue Blur BodePlot BohmanWindow Bold Bookmarks Boole BooleanConsecutiveFunction BooleanConvert BooleanCountingFunction BooleanFunction BooleanGraph BooleanMaxterms BooleanMinimize BooleanMinterms Booleans BooleanTable BooleanVariables BorderDimensions BorelTannerDistribution Bottom BottomHatTransform BoundaryStyle Bounds Box BoxBaselineShift BoxData BoxDimensions Boxed Boxes BoxForm BoxFormFormatTypes BoxFrame BoxID BoxMargins BoxMatrix BoxRatios BoxRotation BoxRotationPoint BoxStyle BoxWhiskerChart Bra BracketingBar BraKet BrayCurtisDistance BreadthFirstScan Break Brown BrownForsytheTest BrownianBridgeProcess BrowserCategory BSplineBasis BSplineCurve BSplineCurve3DBox BSplineCurveBox BSplineCurveBoxOptions BSplineFunction BSplineSurface BSplineSurface3DBox BubbleChart BubbleChart3D BubbleScale BubbleSizes BulletGauge BusinessDayQ ButterflyGraph ButterworthFilterModel Button ButtonBar ButtonBox ButtonBoxOptions ButtonCell ButtonContents ButtonData ButtonEvaluator ButtonExpandable ButtonFrame ButtonFunction ButtonMargins ButtonMinHeight ButtonNote ButtonNotebook ButtonSource ButtonStyle ButtonStyleMenuListing Byte ByteCount ByteOrdering C CachedValue CacheGraphics CalendarData CalendarType CallPacket CanberraDistance Cancel CancelButton CandlestickChart Cap CapForm CapitalDifferentialD CardinalBSplineBasis CarmichaelLambda Cases Cashflow Casoratian Catalan CatalanNumber Catch CauchyDistribution CauchyWindow CayleyGraph CDF CDFDeploy CDFInformation CDFWavelet Ceiling Cell CellAutoOverwrite CellBaseline CellBoundingBox CellBracketOptions CellChangeTimes CellContents CellContext CellDingbat CellDynamicExpression CellEditDuplicate CellElementsBoundingBox CellElementSpacings CellEpilog CellEvaluationDuplicate CellEvaluationFunction CellEventActions CellFrame CellFrameColor CellFrameLabelMargins CellFrameLabels CellFrameMargins CellGroup CellGroupData CellGrouping CellGroupingRules CellHorizontalScrolling CellID CellLabel CellLabelAutoDelete CellLabelMargins CellLabelPositioning CellMargins CellObject CellOpen CellPrint CellProlog Cells CellSize CellStyle CellTags CellularAutomaton CensoredDistribution Censoring Center CenterDot CentralMoment CentralMomentGeneratingFunction CForm ChampernowneNumber ChanVeseBinarize Character CharacterEncoding CharacterEncodingsPath CharacteristicFunction CharacteristicPolynomial CharacterRange Characters ChartBaseStyle ChartElementData ChartElementDataFunction ChartElementFunction ChartElements ChartLabels ChartLayout ChartLegends ChartStyle Chebyshev1FilterModel Chebyshev2FilterModel ChebyshevDistance ChebyshevT ChebyshevU Check CheckAbort CheckAll Checkbox CheckboxBar CheckboxBox CheckboxBoxOptions ChemicalData ChessboardDistance ChiDistribution ChineseRemainder ChiSquareDistribution ChoiceButtons ChoiceDialog CholeskyDecomposition Chop Circle CircleBox CircleDot CircleMinus CirclePlus CircleTimes CirculantGraph CityData Clear ClearAll ClearAttributes ClearSystemCache ClebschGordan ClickPane Clip ClipboardNotebook ClipFill ClippingStyle ClipPlanes ClipRange Clock ClockGauge ClockwiseContourIntegral Close Closed CloseKernels ClosenessCentrality Closing ClosingAutoSave ClosingEvent ClusteringComponents CMYKColor Coarse Coefficient CoefficientArrays CoefficientDomain CoefficientList CoefficientRules CoifletWavelet Collect Colon ColonForm ColorCombine ColorConvert ColorData ColorDataFunction ColorFunction ColorFunctionScaling Colorize ColorNegate ColorOutput ColorProfileData ColorQuantize ColorReplace ColorRules ColorSelectorSettings ColorSeparate ColorSetter ColorSetterBox ColorSetterBoxOptions ColorSlider ColorSpace Column ColumnAlignments ColumnBackgrounds ColumnForm ColumnLines ColumnsEqual ColumnSpacings ColumnWidths CommonDefaultFormatTypes Commonest CommonestFilter CommonUnits CommunityBoundaryStyle CommunityGraphPlot CommunityLabels CommunityRegionStyle CompatibleUnitQ CompilationOptions CompilationTarget Compile Compiled CompiledFunction Complement CompleteGraph CompleteGraphQ CompleteKaryTree CompletionsListPacket Complex Complexes ComplexExpand ComplexInfinity ComplexityFunction ComponentMeasurements ComponentwiseContextMenu Compose ComposeList ComposeSeries Composition CompoundExpression CompoundPoissonDistribution CompoundPoissonProcess CompoundRenewalProcess Compress CompressedData Condition ConditionalExpression Conditioned Cone ConeBox ConfidenceLevel ConfidenceRange ConfidenceTransform ConfigurationPath Congruent Conjugate ConjugateTranspose Conjunction Connect ConnectedComponents ConnectedGraphQ ConnesWindow ConoverTest ConsoleMessage ConsoleMessagePacket ConsolePrint Constant ConstantArray Constants ConstrainedMax ConstrainedMin ContentPadding ContentsBoundingBox ContentSelectable ContentSize Context ContextMenu Contexts ContextToFilename ContextToFileName Continuation Continue ContinuedFraction ContinuedFractionK ContinuousAction ContinuousMarkovProcess ContinuousTimeModelQ ContinuousWaveletData ContinuousWaveletTransform ContourDetect ContourGraphics ContourIntegral ContourLabels ContourLines ContourPlot ContourPlot3D Contours ContourShading ContourSmoothing ContourStyle ContraharmonicMean Control ControlActive ControlAlignment ControllabilityGramian ControllabilityMatrix ControllableDecomposition ControllableModelQ ControllerDuration ControllerInformation ControllerInformationData ControllerLinking ControllerManipulate ControllerMethod ControllerPath ControllerState ControlPlacement ControlsRendering ControlType Convergents ConversionOptions ConversionRules ConvertToBitmapPacket ConvertToPostScript ConvertToPostScriptPacket Convolve ConwayGroupCo1 ConwayGroupCo2 ConwayGroupCo3 CoordinateChartData CoordinatesToolOptions CoordinateTransform CoordinateTransformData CoprimeQ Coproduct CopulaDistribution Copyable CopyDirectory CopyFile CopyTag CopyToClipboard CornerFilter CornerNeighbors Correlation CorrelationDistance CorrelationFunction CorrelationTest Cos Cosh CoshIntegral CosineDistance CosineWindow CosIntegral Cot Coth Count CounterAssignments CounterBox CounterBoxOptions CounterClockwiseContourIntegral CounterEvaluator CounterFunction CounterIncrements CounterStyle CounterStyleMenuListing CountRoots CountryData Covariance CovarianceEstimatorFunction CovarianceFunction CoxianDistribution CoxIngersollRossProcess CoxModel CoxModelFit CramerVonMisesTest CreateArchive CreateDialog CreateDirectory CreateDocument CreateIntermediateDirectories CreatePalette CreatePalettePacket CreateScheduledTask CreateTemporary CreateWindow CriticalityFailureImportance CriticalitySuccessImportance CriticalSection Cross CrossingDetect CrossMatrix Csc Csch CubeRoot Cubics Cuboid CuboidBox Cumulant CumulantGeneratingFunction Cup CupCap Curl CurlyDoubleQuote CurlyQuote CurrentImage CurrentlySpeakingPacket CurrentValue CurvatureFlowFilter CurveClosed Cyan CycleGraph CycleIndexPolynomial Cycles CyclicGroup Cyclotomic Cylinder CylinderBox CylindricalDecomposition D DagumDistribution DamerauLevenshteinDistance DampingFactor Darker Dashed Dashing DataCompression DataDistribution DataRange DataReversed Date DateDelimiters DateDifference DateFunction DateList DateListLogPlot DateListPlot DatePattern DatePlus DateRange DateString DateTicksFormat DaubechiesWavelet DavisDistribution DawsonF DayCount DayCountConvention DayMatchQ DayName DayPlus DayRange DayRound DeBruijnGraph Debug DebugTag Decimal DeclareKnownSymbols DeclarePackage Decompose Decrement DedekindEta Default DefaultAxesStyle DefaultBaseStyle DefaultBoxStyle DefaultButton DefaultColor DefaultControlPlacement DefaultDuplicateCellStyle DefaultDuration DefaultElement DefaultFaceGridsStyle DefaultFieldHintStyle DefaultFont DefaultFontProperties DefaultFormatType DefaultFormatTypeForStyle DefaultFrameStyle DefaultFrameTicksStyle DefaultGridLinesStyle DefaultInlineFormatType DefaultInputFormatType DefaultLabelStyle DefaultMenuStyle DefaultNaturalLanguage DefaultNewCellStyle DefaultNewInlineCellStyle DefaultNotebook DefaultOptions DefaultOutputFormatType DefaultStyle DefaultStyleDefinitions DefaultTextFormatType DefaultTextInlineFormatType DefaultTicksStyle DefaultTooltipStyle DefaultValues Defer DefineExternal DefineInputStreamMethod DefineOutputStreamMethod Definition Degree DegreeCentrality DegreeGraphDistribution DegreeLexicographic DegreeReverseLexicographic Deinitialization Del Deletable Delete DeleteBorderComponents DeleteCases DeleteContents DeleteDirectory DeleteDuplicates DeleteFile DeleteSmallComponents DeleteWithContents DeletionWarning Delimiter DelimiterFlashTime DelimiterMatching Delimiters Denominator DensityGraphics DensityHistogram DensityPlot DependentVariables Deploy Deployed Depth DepthFirstScan Derivative DerivativeFilter DescriptorStateSpace DesignMatrix Det DGaussianWavelet DiacriticalPositioning Diagonal DiagonalMatrix Dialog DialogIndent DialogInput DialogLevel DialogNotebook DialogProlog DialogReturn DialogSymbols Diamond DiamondMatrix DiceDissimilarity DictionaryLookup DifferenceDelta DifferenceOrder DifferenceRoot DifferenceRootReduce Differences DifferentialD DifferentialRoot DifferentialRootReduce DifferentiatorFilter DigitBlock DigitBlockMinimum DigitCharacter DigitCount DigitQ DihedralGroup Dilation Dimensions DiracComb DiracDelta DirectedEdge DirectedEdges DirectedGraph DirectedGraphQ DirectedInfinity Direction Directive Directory DirectoryName DirectoryQ DirectoryStack DirichletCharacter DirichletConvolve DirichletDistribution DirichletL DirichletTransform DirichletWindow DisableConsolePrintPacket DiscreteChirpZTransform DiscreteConvolve DiscreteDelta DiscreteHadamardTransform DiscreteIndicator DiscreteLQEstimatorGains DiscreteLQRegulatorGains DiscreteLyapunovSolve DiscreteMarkovProcess DiscretePlot DiscretePlot3D DiscreteRatio DiscreteRiccatiSolve DiscreteShift DiscreteTimeModelQ DiscreteUniformDistribution DiscreteVariables DiscreteWaveletData DiscreteWaveletPacketTransform DiscreteWaveletTransform Discriminant Disjunction Disk DiskBox DiskMatrix Dispatch DispersionEstimatorFunction Display DisplayAllSteps DisplayEndPacket DisplayFlushImagePacket DisplayForm DisplayFunction DisplayPacket DisplayRules DisplaySetSizePacket DisplayString DisplayTemporary DisplayWith DisplayWithRef DisplayWithVariable DistanceFunction DistanceTransform Distribute Distributed DistributedContexts DistributeDefinitions DistributionChart DistributionDomain DistributionFitTest DistributionParameterAssumptions DistributionParameterQ Dithering Div Divergence Divide DivideBy Dividers Divisible Divisors DivisorSigma DivisorSum DMSList DMSString Do DockedCells DocumentNotebook DominantColors DOSTextFormat Dot DotDashed DotEqual Dotted DoubleBracketingBar DoubleContourIntegral DoubleDownArrow DoubleLeftArrow DoubleLeftRightArrow DoubleLeftTee DoubleLongLeftArrow DoubleLongLeftRightArrow DoubleLongRightArrow DoubleRightArrow DoubleRightTee DoubleUpArrow DoubleUpDownArrow DoubleVerticalBar DoublyInfinite Down DownArrow DownArrowBar DownArrowUpArrow DownLeftRightVector DownLeftTeeVector DownLeftVector DownLeftVectorBar DownRightTeeVector DownRightVector DownRightVectorBar Downsample DownTee DownTeeArrow DownValues DragAndDrop DrawEdges DrawFrontFaces DrawHighlighted Drop DSolve Dt DualLinearProgramming DualSystemsModel DumpGet DumpSave DuplicateFreeQ Dynamic DynamicBox DynamicBoxOptions DynamicEvaluationTimeout DynamicLocation DynamicModule DynamicModuleBox DynamicModuleBoxOptions DynamicModuleParent DynamicModuleValues DynamicName DynamicNamespace DynamicReference DynamicSetting DynamicUpdating DynamicWrapper DynamicWrapperBox DynamicWrapperBoxOptions E EccentricityCentrality EdgeAdd EdgeBetweennessCentrality EdgeCapacity EdgeCapForm EdgeColor EdgeConnectivity EdgeCost EdgeCount EdgeCoverQ EdgeDashing EdgeDelete EdgeDetect EdgeForm EdgeIndex EdgeJoinForm EdgeLabeling EdgeLabels EdgeLabelStyle EdgeList EdgeOpacity EdgeQ EdgeRenderingFunction EdgeRules EdgeShapeFunction EdgeStyle EdgeThickness EdgeWeight Editable EditButtonSettings EditCellTagsSettings EditDistance EffectiveInterest Eigensystem Eigenvalues EigenvectorCentrality Eigenvectors Element ElementData Eliminate EliminationOrder EllipticE EllipticExp EllipticExpPrime EllipticF EllipticFilterModel EllipticK EllipticLog EllipticNomeQ EllipticPi EllipticReducedHalfPeriods EllipticTheta EllipticThetaPrime EmitSound EmphasizeSyntaxErrors EmpiricalDistribution Empty EmptyGraphQ EnableConsolePrintPacket Enabled Encode End EndAdd EndDialogPacket EndFrontEndInteractionPacket EndOfFile EndOfLine EndOfString EndPackage EngineeringForm Enter EnterExpressionPacket EnterTextPacket Entropy EntropyFilter Environment Epilog Equal EqualColumns EqualRows EqualTilde EquatedTo Equilibrium EquirippleFilterKernel Equivalent Erf Erfc Erfi ErlangB ErlangC ErlangDistribution Erosion ErrorBox ErrorBoxOptions ErrorNorm ErrorPacket ErrorsDialogSettings EstimatedDistribution EstimatedProcess EstimatorGains EstimatorRegulator EuclideanDistance EulerE EulerGamma EulerianGraphQ EulerPhi Evaluatable Evaluate Evaluated EvaluatePacket EvaluationCell EvaluationCompletionAction EvaluationElements EvaluationMode EvaluationMonitor EvaluationNotebook EvaluationObject EvaluationOrder Evaluator EvaluatorNames EvenQ EventData EventEvaluator EventHandler EventHandlerTag EventLabels ExactBlackmanWindow ExactNumberQ ExactRootIsolation ExampleData Except ExcludedForms ExcludePods Exclusions ExclusionsStyle Exists Exit ExitDialog Exp Expand ExpandAll ExpandDenominator ExpandFileName ExpandNumerator Expectation ExpectationE ExpectedValue ExpGammaDistribution ExpIntegralE ExpIntegralEi Exponent ExponentFunction ExponentialDistribution ExponentialFamily ExponentialGeneratingFunction ExponentialMovingAverage ExponentialPowerDistribution ExponentPosition ExponentStep Export ExportAutoReplacements ExportPacket ExportString Expression ExpressionCell ExpressionPacket ExpToTrig ExtendedGCD Extension ExtentElementFunction ExtentMarkers ExtentSize ExternalCall ExternalDataCharacterEncoding Extract ExtractArchive ExtremeValueDistribution FaceForm FaceGrids FaceGridsStyle Factor FactorComplete Factorial Factorial2 FactorialMoment FactorialMomentGeneratingFunction FactorialPower FactorInteger FactorList FactorSquareFree FactorSquareFreeList FactorTerms FactorTermsList Fail FailureDistribution False FARIMAProcess FEDisableConsolePrintPacket FeedbackSector FeedbackSectorStyle FeedbackType FEEnableConsolePrintPacket Fibonacci FieldHint FieldHintStyle FieldMasked FieldSize File FileBaseName FileByteCount FileDate FileExistsQ FileExtension FileFormat FileHash FileInformation FileName FileNameDepth FileNameDialogSettings FileNameDrop FileNameJoin FileNames FileNameSetter FileNameSplit FileNameTake FilePrint FileType FilledCurve FilledCurveBox Filling FillingStyle FillingTransform FilterRules FinancialBond FinancialData FinancialDerivative FinancialIndicator Find FindArgMax FindArgMin FindClique FindClusters FindCurvePath FindDistributionParameters FindDivisions FindEdgeCover FindEdgeCut FindEulerianCycle FindFaces FindFile FindFit FindGeneratingFunction FindGeoLocation FindGeometricTransform FindGraphCommunities FindGraphIsomorphism FindGraphPartition FindHamiltonianCycle FindIndependentEdgeSet FindIndependentVertexSet FindInstance FindIntegerNullVector FindKClan FindKClique FindKClub FindKPlex FindLibrary FindLinearRecurrence FindList FindMaximum FindMaximumFlow FindMaxValue FindMinimum FindMinimumCostFlow FindMinimumCut FindMinValue FindPermutation FindPostmanTour FindProcessParameters FindRoot FindSequenceFunction FindSettings FindShortestPath FindShortestTour FindThreshold FindVertexCover FindVertexCut Fine FinishDynamic FiniteAbelianGroupCount FiniteGroupCount FiniteGroupData First FirstPassageTimeDistribution FischerGroupFi22 FischerGroupFi23 FischerGroupFi24Prime FisherHypergeometricDistribution FisherRatioTest FisherZDistribution Fit FitAll FittedModel FixedPoint FixedPointList FlashSelection Flat Flatten FlattenAt FlatTopWindow FlipView Floor FlushPrintOutputPacket Fold FoldList Font FontColor FontFamily FontForm FontName FontOpacity FontPostScriptName FontProperties FontReencoding FontSize FontSlant FontSubstitutions FontTracking FontVariations FontWeight For ForAll Format FormatRules FormatType FormatTypeAutoConvert FormatValues FormBox FormBoxOptions FortranForm Forward ForwardBackward Fourier FourierCoefficient FourierCosCoefficient FourierCosSeries FourierCosTransform FourierDCT FourierDCTFilter FourierDCTMatrix FourierDST FourierDSTMatrix FourierMatrix FourierParameters FourierSequenceTransform FourierSeries FourierSinCoefficient FourierSinSeries FourierSinTransform FourierTransform FourierTrigSeries FractionalBrownianMotionProcess FractionalPart FractionBox FractionBoxOptions FractionLine Frame FrameBox FrameBoxOptions Framed FrameInset FrameLabel Frameless FrameMargins FrameStyle FrameTicks FrameTicksStyle FRatioDistribution FrechetDistribution FreeQ FrequencySamplingFilterKernel FresnelC FresnelS Friday FrobeniusNumber FrobeniusSolve FromCharacterCode FromCoefficientRules FromContinuedFraction FromDate FromDigits FromDMS Front FrontEndDynamicExpression FrontEndEventActions FrontEndExecute FrontEndObject FrontEndResource FrontEndResourceString FrontEndStackSize FrontEndToken FrontEndTokenExecute FrontEndValueCache FrontEndVersion FrontFaceColor FrontFaceOpacity Full FullAxes FullDefinition FullForm FullGraphics FullOptions FullSimplify Function FunctionExpand FunctionInterpolation FunctionSpace FussellVeselyImportance GaborFilter GaborMatrix GaborWavelet GainMargins GainPhaseMargins Gamma GammaDistribution GammaRegularized GapPenalty Gather GatherBy GaugeFaceElementFunction GaugeFaceStyle GaugeFrameElementFunction GaugeFrameSize GaugeFrameStyle GaugeLabels GaugeMarkers GaugeStyle GaussianFilter GaussianIntegers GaussianMatrix GaussianWindow GCD GegenbauerC General GeneralizedLinearModelFit GenerateConditions GeneratedCell GeneratedParameters GeneratingFunction Generic GenericCylindricalDecomposition GenomeData GenomeLookup GeodesicClosing GeodesicDilation GeodesicErosion GeodesicOpening GeoDestination GeodesyData GeoDirection GeoDistance GeoGridPosition GeometricBrownianMotionProcess GeometricDistribution GeometricMean GeometricMeanFilter GeometricTransformation GeometricTransformation3DBox GeometricTransformation3DBoxOptions GeometricTransformationBox GeometricTransformationBoxOptions GeoPosition GeoPositionENU GeoPositionXYZ GeoProjectionData GestureHandler GestureHandlerTag Get GetBoundingBoxSizePacket GetContext GetEnvironment GetFileName GetFrontEndOptionsDataPacket GetLinebreakInformationPacket GetMenusPacket GetPageBreakInformationPacket Glaisher GlobalClusteringCoefficient GlobalPreferences GlobalSession Glow GoldenRatio GompertzMakehamDistribution GoodmanKruskalGamma GoodmanKruskalGammaTest Goto Grad Gradient GradientFilter GradientOrientationFilter Graph GraphAssortativity GraphCenter GraphComplement GraphData GraphDensity GraphDiameter GraphDifference GraphDisjointUnion GraphDistance GraphDistanceMatrix GraphElementData GraphEmbedding GraphHighlight GraphHighlightStyle GraphHub Graphics Graphics3D Graphics3DBox Graphics3DBoxOptions GraphicsArray GraphicsBaseline GraphicsBox GraphicsBoxOptions GraphicsColor GraphicsColumn GraphicsComplex GraphicsComplex3DBox GraphicsComplex3DBoxOptions GraphicsComplexBox GraphicsComplexBoxOptions GraphicsContents GraphicsData GraphicsGrid GraphicsGridBox GraphicsGroup GraphicsGroup3DBox GraphicsGroup3DBoxOptions GraphicsGroupBox GraphicsGroupBoxOptions GraphicsGrouping GraphicsHighlightColor GraphicsRow GraphicsSpacing GraphicsStyle GraphIntersection GraphLayout GraphLinkEfficiency GraphPeriphery GraphPlot GraphPlot3D GraphPower GraphPropertyDistribution GraphQ GraphRadius GraphReciprocity GraphRoot GraphStyle GraphUnion Gray GrayLevel GreatCircleDistance Greater GreaterEqual GreaterEqualLess GreaterFullEqual GreaterGreater GreaterLess GreaterSlantEqual GreaterTilde Green Grid GridBaseline GridBox GridBoxAlignment GridBoxBackground GridBoxDividers GridBoxFrame GridBoxItemSize GridBoxItemStyle GridBoxOptions GridBoxSpacings GridCreationSettings GridDefaultElement GridElementStyleOptions GridFrame GridFrameMargins GridGraph GridLines GridLinesStyle GroebnerBasis GroupActionBase GroupCentralizer GroupElementFromWord GroupElementPosition GroupElementQ GroupElements GroupElementToWord GroupGenerators GroupMultiplicationTable GroupOrbits GroupOrder GroupPageBreakWithin GroupSetwiseStabilizer GroupStabilizer GroupStabilizerChain Gudermannian GumbelDistribution HaarWavelet HadamardMatrix HalfNormalDistribution HamiltonianGraphQ HammingDistance HammingWindow HankelH1 HankelH2 HankelMatrix HannPoissonWindow HannWindow HaradaNortonGroupHN HararyGraph HarmonicMean HarmonicMeanFilter HarmonicNumber Hash HashTable Haversine HazardFunction Head HeadCompose Heads HeavisideLambda HeavisidePi HeavisideTheta HeldGroupHe HeldPart HelpBrowserLookup HelpBrowserNotebook HelpBrowserSettings HermiteDecomposition HermiteH HermitianMatrixQ HessenbergDecomposition Hessian HexadecimalCharacter Hexahedron HexahedronBox HexahedronBoxOptions HiddenSurface HighlightGraph HighlightImage HighpassFilter HigmanSimsGroupHS HilbertFilter HilbertMatrix Histogram Histogram3D HistogramDistribution HistogramList HistogramTransform HistogramTransformInterpolation HitMissTransform HITSCentrality HodgeDual HoeffdingD HoeffdingDTest Hold HoldAll HoldAllComplete HoldComplete HoldFirst HoldForm HoldPattern HoldRest HolidayCalendar HomeDirectory HomePage Horizontal HorizontalForm HorizontalGauge HorizontalScrollPosition HornerForm HotellingTSquareDistribution HoytDistribution HTMLSave Hue HumpDownHump HumpEqual HurwitzLerchPhi HurwitzZeta HyperbolicDistribution HypercubeGraph HyperexponentialDistribution Hyperfactorial Hypergeometric0F1 Hypergeometric0F1Regularized Hypergeometric1F1 Hypergeometric1F1Regularized Hypergeometric2F1 Hypergeometric2F1Regularized HypergeometricDistribution HypergeometricPFQ HypergeometricPFQRegularized HypergeometricU Hyperlink HyperlinkCreationSettings Hyphenation HyphenationOptions HypoexponentialDistribution HypothesisTestData I Identity IdentityMatrix If IgnoreCase Im Image Image3D Image3DSlices ImageAccumulate ImageAdd ImageAdjust ImageAlign ImageApply ImageAspectRatio ImageAssemble ImageCache ImageCacheValid ImageCapture ImageChannels ImageClip ImageColorSpace ImageCompose ImageConvolve ImageCooccurrence ImageCorners ImageCorrelate ImageCorrespondingPoints ImageCrop ImageData ImageDataPacket ImageDeconvolve ImageDemosaic ImageDifference ImageDimensions ImageDistance ImageEffect ImageFeatureTrack ImageFileApply ImageFileFilter ImageFileScan ImageFilter ImageForestingComponents ImageForwardTransformation ImageHistogram ImageKeypoints ImageLevels ImageLines ImageMargins ImageMarkers ImageMeasurements ImageMultiply ImageOffset ImagePad ImagePadding ImagePartition ImagePeriodogram ImagePerspectiveTransformation ImageQ ImageRangeCache ImageReflect ImageRegion ImageResize ImageResolution ImageRotate ImageRotated ImageScaled ImageScan ImageSize ImageSizeAction ImageSizeCache ImageSizeMultipliers ImageSizeRaw ImageSubtract ImageTake ImageTransformation ImageTrim ImageType ImageValue ImageValuePositions Implies Import ImportAutoReplacements ImportString ImprovementImportance In IncidenceGraph IncidenceList IncidenceMatrix IncludeConstantBasis IncludeFileExtension IncludePods IncludeSingularTerm Increment Indent IndentingNewlineSpacings IndentMaxFraction IndependenceTest IndependentEdgeSetQ IndependentUnit IndependentVertexSetQ Indeterminate IndexCreationOptions Indexed IndexGraph IndexTag Inequality InexactNumberQ InexactNumbers Infinity Infix Information Inherited InheritScope Initialization InitializationCell InitializationCellEvaluation InitializationCellWarning InlineCounterAssignments InlineCounterIncrements InlineRules Inner Inpaint Input InputAliases InputAssumptions InputAutoReplacements InputField InputFieldBox InputFieldBoxOptions InputForm InputGrouping InputNamePacket InputNotebook InputPacket InputSettings InputStream InputString InputStringPacket InputToBoxFormPacket Insert InsertionPointObject InsertResults Inset Inset3DBox Inset3DBoxOptions InsetBox InsetBoxOptions Install InstallService InString Integer IntegerDigits IntegerExponent IntegerLength IntegerPart IntegerPartitions IntegerQ Integers IntegerString Integral Integrate Interactive InteractiveTradingChart Interlaced Interleaving InternallyBalancedDecomposition InterpolatingFunction InterpolatingPolynomial Interpolation InterpolationOrder InterpolationPoints InterpolationPrecision Interpretation InterpretationBox InterpretationBoxOptions InterpretationFunction InterpretTemplate InterquartileRange Interrupt InterruptSettings Intersection Interval IntervalIntersection IntervalMemberQ IntervalUnion Inverse InverseBetaRegularized InverseCDF InverseChiSquareDistribution InverseContinuousWaveletTransform InverseDistanceTransform InverseEllipticNomeQ InverseErf InverseErfc InverseFourier InverseFourierCosTransform InverseFourierSequenceTransform InverseFourierSinTransform InverseFourierTransform InverseFunction InverseFunctions InverseGammaDistribution InverseGammaRegularized InverseGaussianDistribution InverseGudermannian InverseHaversine InverseJacobiCD InverseJacobiCN InverseJacobiCS InverseJacobiDC InverseJacobiDN InverseJacobiDS InverseJacobiNC InverseJacobiND InverseJacobiNS InverseJacobiSC InverseJacobiSD InverseJacobiSN InverseLaplaceTransform InversePermutation InverseRadon InverseSeries InverseSurvivalFunction InverseWaveletTransform InverseWeierstrassP InverseZTransform Invisible InvisibleApplication InvisibleTimes IrreduciblePolynomialQ IsolatingInterval IsomorphicGraphQ IsotopeData Italic Item ItemBox ItemBoxOptions ItemSize ItemStyle ItoProcess JaccardDissimilarity JacobiAmplitude Jacobian JacobiCD JacobiCN JacobiCS JacobiDC JacobiDN JacobiDS JacobiNC JacobiND JacobiNS JacobiP JacobiSC JacobiSD JacobiSN JacobiSymbol JacobiZeta JankoGroupJ1 JankoGroupJ2 JankoGroupJ3 JankoGroupJ4 JarqueBeraALMTest JohnsonDistribution Join Joined JoinedCurve JoinedCurveBox JoinForm JordanDecomposition JordanModelDecomposition K KagiChart KaiserBesselWindow KaiserWindow KalmanEstimator KalmanFilter KarhunenLoeveDecomposition KaryTree KatzCentrality KCoreComponents KDistribution KelvinBei KelvinBer KelvinKei KelvinKer KendallTau KendallTauTest KernelExecute KernelMixtureDistribution KernelObject Kernels Ket Khinchin KirchhoffGraph KirchhoffMatrix KleinInvariantJ KnightTourGraph KnotData KnownUnitQ KolmogorovSmirnovTest KroneckerDelta KroneckerModelDecomposition KroneckerProduct KroneckerSymbol KuiperTest KumaraswamyDistribution Kurtosis KuwaharaFilter Label Labeled LabeledSlider LabelingFunction LabelStyle LaguerreL LambdaComponents LambertW LanczosWindow LandauDistribution Language LanguageCategory LaplaceDistribution LaplaceTransform Laplacian LaplacianFilter LaplacianGaussianFilter Large Larger Last Latitude LatitudeLongitude LatticeData LatticeReduce Launch LaunchKernels LayeredGraphPlot LayerSizeFunction LayoutInformation LCM LeafCount LeapYearQ LeastSquares LeastSquaresFilterKernel Left LeftArrow LeftArrowBar LeftArrowRightArrow LeftDownTeeVector LeftDownVector LeftDownVectorBar LeftRightArrow LeftRightVector LeftTee LeftTeeArrow LeftTeeVector LeftTriangle LeftTriangleBar LeftTriangleEqual LeftUpDownVector LeftUpTeeVector LeftUpVector LeftUpVectorBar LeftVector LeftVectorBar LegendAppearance Legended LegendFunction LegendLabel LegendLayout LegendMargins LegendMarkers LegendMarkerSize LegendreP LegendreQ LegendreType Length LengthWhile LerchPhi Less LessEqual LessEqualGreater LessFullEqual LessGreater LessLess LessSlantEqual LessTilde LetterCharacter LetterQ Level LeveneTest LeviCivitaTensor LevyDistribution Lexicographic LibraryFunction LibraryFunctionError LibraryFunctionInformation LibraryFunctionLoad LibraryFunctionUnload LibraryLoad LibraryUnload LicenseID LiftingFilterData LiftingWaveletTransform LightBlue LightBrown LightCyan Lighter LightGray LightGreen Lighting LightingAngle LightMagenta LightOrange LightPink LightPurple LightRed LightSources LightYellow Likelihood Limit LimitsPositioning LimitsPositioningTokens LindleyDistribution Line Line3DBox LinearFilter LinearFractionalTransform LinearModelFit LinearOffsetFunction LinearProgramming LinearRecurrence LinearSolve LinearSolveFunction LineBox LineBreak LinebreakAdjustments LineBreakChart LineBreakWithin LineColor LineForm LineGraph LineIndent LineIndentMaxFraction LineIntegralConvolutionPlot LineIntegralConvolutionScale LineLegend LineOpacity LineSpacing LineWrapParts LinkActivate LinkClose LinkConnect LinkConnectedQ LinkCreate LinkError LinkFlush LinkFunction LinkHost LinkInterrupt LinkLaunch LinkMode LinkObject LinkOpen LinkOptions LinkPatterns LinkProtocol LinkRead LinkReadHeld LinkReadyQ Links LinkWrite LinkWriteHeld LiouvilleLambda List Listable ListAnimate ListContourPlot ListContourPlot3D ListConvolve ListCorrelate ListCurvePathPlot ListDeconvolve ListDensityPlot Listen ListFourierSequenceTransform ListInterpolation ListLineIntegralConvolutionPlot ListLinePlot ListLogLinearPlot ListLogLogPlot ListLogPlot ListPicker ListPickerBox ListPickerBoxBackground ListPickerBoxOptions ListPlay ListPlot ListPlot3D ListPointPlot3D ListPolarPlot ListQ ListStreamDensityPlot ListStreamPlot ListSurfacePlot3D ListVectorDensityPlot ListVectorPlot ListVectorPlot3D ListZTransform Literal LiteralSearch LocalClusteringCoefficient LocalizeVariables LocationEquivalenceTest LocationTest Locator LocatorAutoCreate LocatorBox LocatorBoxOptions LocatorCentering LocatorPane LocatorPaneBox LocatorPaneBoxOptions LocatorRegion Locked Log Log10 Log2 LogBarnesG LogGamma LogGammaDistribution LogicalExpand LogIntegral LogisticDistribution LogitModelFit LogLikelihood LogLinearPlot LogLogisticDistribution LogLogPlot LogMultinormalDistribution LogNormalDistribution LogPlot LogRankTest LogSeriesDistribution LongEqual Longest LongestAscendingSequence LongestCommonSequence LongestCommonSequencePositions LongestCommonSubsequence LongestCommonSubsequencePositions LongestMatch LongForm Longitude LongLeftArrow LongLeftRightArrow LongRightArrow Loopback LoopFreeGraphQ LowerCaseQ LowerLeftArrow LowerRightArrow LowerTriangularize LowpassFilter LQEstimatorGains LQGRegulator LQOutputRegulatorGains LQRegulatorGains LUBackSubstitution LucasL LuccioSamiComponents LUDecomposition LyapunovSolve LyonsGroupLy MachineID MachineName MachineNumberQ MachinePrecision MacintoshSystemPageSetup Magenta Magnification Magnify MainSolve MaintainDynamicCaches Majority MakeBoxes MakeExpression MakeRules MangoldtLambda ManhattanDistance Manipulate Manipulator MannWhitneyTest MantissaExponent Manual Map MapAll MapAt MapIndexed MAProcess MapThread MarcumQ MardiaCombinedTest MardiaKurtosisTest MardiaSkewnessTest MarginalDistribution MarkovProcessProperties Masking MatchingDissimilarity MatchLocalNameQ MatchLocalNames MatchQ Material MathematicaNotation MathieuC MathieuCharacteristicA MathieuCharacteristicB MathieuCharacteristicExponent MathieuCPrime MathieuGroupM11 MathieuGroupM12 MathieuGroupM22 MathieuGroupM23 MathieuGroupM24 MathieuS MathieuSPrime MathMLForm MathMLText Matrices MatrixExp MatrixForm MatrixFunction MatrixLog MatrixPlot MatrixPower MatrixQ MatrixRank Max MaxBend MaxDetect MaxExtraBandwidths MaxExtraConditions MaxFeatures MaxFilter Maximize MaxIterations MaxMemoryUsed MaxMixtureKernels MaxPlotPoints MaxPoints MaxRecursion MaxStableDistribution MaxStepFraction MaxSteps MaxStepSize MaxValue MaxwellDistribution McLaughlinGroupMcL Mean MeanClusteringCoefficient MeanDegreeConnectivity MeanDeviation MeanFilter MeanGraphDistance MeanNeighborDegree MeanShift MeanShiftFilter Median MedianDeviation MedianFilter Medium MeijerG MeixnerDistribution MemberQ MemoryConstrained MemoryInUse Menu MenuAppearance MenuCommandKey MenuEvaluator MenuItem MenuPacket MenuSortingValue MenuStyle MenuView MergeDifferences Mesh MeshFunctions MeshRange MeshShading MeshStyle Message MessageDialog MessageList MessageName MessageOptions MessagePacket Messages MessagesNotebook MetaCharacters MetaInformation Method MethodOptions MexicanHatWavelet MeyerWavelet Min MinDetect MinFilter MinimalPolynomial MinimalStateSpaceModel Minimize Minors MinRecursion MinSize MinStableDistribution Minus MinusPlus MinValue Missing MissingDataMethod MittagLefflerE MixedRadix MixedRadixQuantity MixtureDistribution Mod Modal Mode Modular ModularLambda Module Modulus MoebiusMu Moment Momentary MomentConvert MomentEvaluate MomentGeneratingFunction Monday Monitor MonomialList MonomialOrder MonsterGroupM MorletWavelet MorphologicalBinarize MorphologicalBranchPoints MorphologicalComponents MorphologicalEulerNumber MorphologicalGraph MorphologicalPerimeter MorphologicalTransform Most MouseAnnotation MouseAppearance MouseAppearanceTag MouseButtons Mouseover MousePointerNote MousePosition MovingAverage MovingMedian MoyalDistribution MultiedgeStyle MultilaunchWarning MultiLetterItalics MultiLetterStyle MultilineFunction Multinomial MultinomialDistribution MultinormalDistribution MultiplicativeOrder Multiplicity Multiselection MultivariateHypergeometricDistribution MultivariatePoissonDistribution MultivariateTDistribution N NakagamiDistribution NameQ Names NamespaceBox Nand NArgMax NArgMin NBernoulliB NCache NDSolve NDSolveValue Nearest NearestFunction NeedCurrentFrontEndPackagePacket NeedCurrentFrontEndSymbolsPacket NeedlemanWunschSimilarity Needs Negative NegativeBinomialDistribution NegativeMultinomialDistribution NeighborhoodGraph Nest NestedGreaterGreater NestedLessLess NestedScriptRules NestList NestWhile NestWhileList NevilleThetaC NevilleThetaD NevilleThetaN NevilleThetaS NewPrimitiveStyle NExpectation Next NextPrime NHoldAll NHoldFirst NHoldRest NicholsGridLines NicholsPlot NIntegrate NMaximize NMaxValue NMinimize NMinValue NominalVariables NonAssociative NoncentralBetaDistribution NoncentralChiSquareDistribution NoncentralFRatioDistribution NoncentralStudentTDistribution NonCommutativeMultiply NonConstants None NonlinearModelFit NonlocalMeansFilter NonNegative NonPositive Nor NorlundB Norm Normal NormalDistribution NormalGrouping Normalize NormalizedSquaredEuclideanDistance NormalsFunction NormFunction Not NotCongruent NotCupCap NotDoubleVerticalBar Notebook NotebookApply NotebookAutoSave NotebookClose NotebookConvertSettings NotebookCreate NotebookCreateReturnObject NotebookDefault NotebookDelete NotebookDirectory NotebookDynamicExpression NotebookEvaluate NotebookEventActions NotebookFileName NotebookFind NotebookFindReturnObject NotebookGet NotebookGetLayoutInformationPacket NotebookGetMisspellingsPacket NotebookInformation NotebookInterfaceObject NotebookLocate NotebookObject NotebookOpen NotebookOpenReturnObject NotebookPath NotebookPrint NotebookPut NotebookPutReturnObject NotebookRead NotebookResetGeneratedCells Notebooks NotebookSave NotebookSaveAs NotebookSelection NotebookSetupLayoutInformationPacket NotebooksMenu NotebookWrite NotElement NotEqualTilde NotExists NotGreater NotGreaterEqual NotGreaterFullEqual NotGreaterGreater NotGreaterLess NotGreaterSlantEqual NotGreaterTilde NotHumpDownHump NotHumpEqual NotLeftTriangle NotLeftTriangleBar NotLeftTriangleEqual NotLess NotLessEqual NotLessFullEqual NotLessGreater NotLessLess NotLessSlantEqual NotLessTilde NotNestedGreaterGreater NotNestedLessLess NotPrecedes NotPrecedesEqual NotPrecedesSlantEqual NotPrecedesTilde NotReverseElement NotRightTriangle NotRightTriangleBar NotRightTriangleEqual NotSquareSubset NotSquareSubsetEqual NotSquareSuperset NotSquareSupersetEqual NotSubset NotSubsetEqual NotSucceeds NotSucceedsEqual NotSucceedsSlantEqual NotSucceedsTilde NotSuperset NotSupersetEqual NotTilde NotTildeEqual NotTildeFullEqual NotTildeTilde NotVerticalBar NProbability NProduct NProductFactors NRoots NSolve NSum NSumTerms Null NullRecords NullSpace NullWords Number NumberFieldClassNumber NumberFieldDiscriminant NumberFieldFundamentalUnits NumberFieldIntegralBasis NumberFieldNormRepresentatives NumberFieldRegulator NumberFieldRootsOfUnity NumberFieldSignature NumberForm NumberFormat NumberMarks NumberMultiplier NumberPadding NumberPoint NumberQ NumberSeparator NumberSigns NumberString Numerator NumericFunction NumericQ NuttallWindow NValues NyquistGridLines NyquistPlot O ObservabilityGramian ObservabilityMatrix ObservableDecomposition ObservableModelQ OddQ Off Offset OLEData On ONanGroupON OneIdentity Opacity Open OpenAppend Opener OpenerBox OpenerBoxOptions OpenerView OpenFunctionInspectorPacket Opening OpenRead OpenSpecialOptions OpenTemporary OpenWrite Operate OperatingSystem OptimumFlowData Optional OptionInspectorSettings OptionQ Options OptionsPacket OptionsPattern OptionValue OptionValueBox OptionValueBoxOptions Or Orange Order OrderDistribution OrderedQ Ordering Orderless OrnsteinUhlenbeckProcess Orthogonalize Out Outer OutputAutoOverwrite OutputControllabilityMatrix OutputControllableModelQ OutputForm OutputFormData OutputGrouping OutputMathEditExpression OutputNamePacket OutputResponse OutputSizeLimit OutputStream Over OverBar OverDot Overflow OverHat Overlaps Overlay OverlayBox OverlayBoxOptions Overscript OverscriptBox OverscriptBoxOptions OverTilde OverVector OwenT OwnValues PackingMethod PaddedForm Padding PadeApproximant PadLeft PadRight PageBreakAbove PageBreakBelow PageBreakWithin PageFooterLines PageFooters PageHeaderLines PageHeaders PageHeight PageRankCentrality PageWidth PairedBarChart PairedHistogram PairedSmoothHistogram PairedTTest PairedZTest PaletteNotebook PalettePath Pane PaneBox PaneBoxOptions Panel PanelBox PanelBoxOptions Paneled PaneSelector PaneSelectorBox PaneSelectorBoxOptions PaperWidth ParabolicCylinderD ParagraphIndent ParagraphSpacing ParallelArray ParallelCombine ParallelDo ParallelEvaluate Parallelization Parallelize ParallelMap ParallelNeeds ParallelProduct ParallelSubmit ParallelSum ParallelTable ParallelTry Parameter ParameterEstimator ParameterMixtureDistribution ParameterVariables ParametricFunction ParametricNDSolve ParametricNDSolveValue ParametricPlot ParametricPlot3D ParentConnect ParentDirectory ParentForm Parenthesize ParentList ParetoDistribution Part PartialCorrelationFunction PartialD ParticleData Partition PartitionsP PartitionsQ ParzenWindow PascalDistribution PassEventsDown PassEventsUp Paste PasteBoxFormInlineCells PasteButton Path PathGraph PathGraphQ Pattern PatternSequence PatternTest PauliMatrix PaulWavelet Pause PausedTime PDF PearsonChiSquareTest PearsonCorrelationTest PearsonDistribution PerformanceGoal PeriodicInterpolation Periodogram PeriodogramArray PermutationCycles PermutationCyclesQ PermutationGroup PermutationLength PermutationList PermutationListQ PermutationMax PermutationMin PermutationOrder PermutationPower PermutationProduct PermutationReplace Permutations PermutationSupport Permute PeronaMalikFilter Perpendicular PERTDistribution PetersenGraph PhaseMargins Pi Pick PIDData PIDDerivativeFilter PIDFeedforward PIDTune Piecewise PiecewiseExpand PieChart PieChart3D PillaiTrace PillaiTraceTest Pink Pivoting PixelConstrained PixelValue PixelValuePositions Placed Placeholder PlaceholderReplace Plain PlanarGraphQ Play PlayRange Plot Plot3D Plot3Matrix PlotDivision PlotJoined PlotLabel PlotLayout PlotLegends PlotMarkers PlotPoints PlotRange PlotRangeClipping PlotRangePadding PlotRegion PlotStyle Plus PlusMinus Pochhammer PodStates PodWidth Point Point3DBox PointBox PointFigureChart PointForm PointLegend PointSize PoissonConsulDistribution PoissonDistribution PoissonProcess PoissonWindow PolarAxes PolarAxesOrigin PolarGridLines PolarPlot PolarTicks PoleZeroMarkers PolyaAeppliDistribution PolyGamma Polygon Polygon3DBox Polygon3DBoxOptions PolygonBox PolygonBoxOptions PolygonHoleScale PolygonIntersections PolygonScale PolyhedronData PolyLog PolynomialExtendedGCD PolynomialForm PolynomialGCD PolynomialLCM PolynomialMod PolynomialQ PolynomialQuotient PolynomialQuotientRemainder PolynomialReduce PolynomialRemainder Polynomials PopupMenu PopupMenuBox PopupMenuBoxOptions PopupView PopupWindow Position Positive PositiveDefiniteMatrixQ PossibleZeroQ Postfix PostScript Power PowerDistribution PowerExpand PowerMod PowerModList PowerSpectralDensity PowersRepresentations PowerSymmetricPolynomial Precedence PrecedenceForm Precedes PrecedesEqual PrecedesSlantEqual PrecedesTilde Precision PrecisionGoal PreDecrement PredictionRoot PreemptProtect PreferencesPath Prefix PreIncrement Prepend PrependTo PreserveImageOptions Previous PriceGraphDistribution PrimaryPlaceholder Prime PrimeNu PrimeOmega PrimePi PrimePowerQ PrimeQ Primes PrimeZetaP PrimitiveRoot PrincipalComponents PrincipalValue Print PrintAction PrintForm PrintingCopies PrintingOptions PrintingPageRange PrintingStartingPageNumber PrintingStyleEnvironment PrintPrecision PrintTemporary Prism PrismBox PrismBoxOptions PrivateCellOptions PrivateEvaluationOptions PrivateFontOptions PrivateFrontEndOptions PrivateNotebookOptions PrivatePaths Probability ProbabilityDistribution ProbabilityPlot ProbabilityPr ProbabilityScalePlot ProbitModelFit ProcessEstimator ProcessParameterAssumptions ProcessParameterQ ProcessStateDomain ProcessTimeDomain Product ProductDistribution ProductLog ProgressIndicator ProgressIndicatorBox ProgressIndicatorBoxOptions Projection Prolog PromptForm Properties Property PropertyList PropertyValue Proportion Proportional Protect Protected ProteinData Pruning PseudoInverse Purple Put PutAppend Pyramid PyramidBox PyramidBoxOptions QBinomial QFactorial QGamma QHypergeometricPFQ QPochhammer QPolyGamma QRDecomposition QuadraticIrrationalQ Quantile QuantilePlot Quantity QuantityForm QuantityMagnitude QuantityQ QuantityUnit Quartics QuartileDeviation Quartiles QuartileSkewness QueueingNetworkProcess QueueingProcess QueueProperties Quiet Quit Quotient QuotientRemainder RadialityCentrality RadicalBox RadicalBoxOptions RadioButton RadioButtonBar RadioButtonBox RadioButtonBoxOptions Radon RamanujanTau RamanujanTauL RamanujanTauTheta RamanujanTauZ Random RandomChoice RandomComplex RandomFunction RandomGraph RandomImage RandomInteger RandomPermutation RandomPrime RandomReal RandomSample RandomSeed RandomVariate RandomWalkProcess Range RangeFilter RangeSpecification RankedMax RankedMin Raster Raster3D Raster3DBox Raster3DBoxOptions RasterArray RasterBox RasterBoxOptions Rasterize RasterSize Rational RationalFunctions Rationalize Rationals Ratios Raw RawArray RawBoxes RawData RawMedium RayleighDistribution Re Read ReadList ReadProtected Real RealBlockDiagonalForm RealDigits RealExponent Reals Reap Record RecordLists RecordSeparators Rectangle RectangleBox RectangleBoxOptions RectangleChart RectangleChart3D RecurrenceFilter RecurrenceTable RecurringDigitsForm Red Reduce RefBox ReferenceLineStyle ReferenceMarkers ReferenceMarkerStyle Refine ReflectionMatrix ReflectionTransform Refresh RefreshRate RegionBinarize RegionFunction RegionPlot RegionPlot3D RegularExpression Regularization Reinstall Release ReleaseHold ReliabilityDistribution ReliefImage ReliefPlot Remove RemoveAlphaChannel RemoveAsynchronousTask Removed RemoveInputStreamMethod RemoveOutputStreamMethod RemoveProperty RemoveScheduledTask RenameDirectory RenameFile RenderAll RenderingOptions RenewalProcess RenkoChart Repeated RepeatedNull RepeatedString Replace ReplaceAll ReplaceHeldPart ReplaceImageValue ReplaceList ReplacePart ReplacePixelValue ReplaceRepeated Resampling Rescale RescalingTransform ResetDirectory ResetMenusPacket ResetScheduledTask Residue Resolve Rest Resultant ResumePacket Return ReturnExpressionPacket ReturnInputFormPacket ReturnPacket ReturnTextPacket Reverse ReverseBiorthogonalSplineWavelet ReverseElement ReverseEquilibrium ReverseGraph ReverseUpEquilibrium RevolutionAxis RevolutionPlot3D RGBColor RiccatiSolve RiceDistribution RidgeFilter RiemannR RiemannSiegelTheta RiemannSiegelZ Riffle Right RightArrow RightArrowBar RightArrowLeftArrow RightCosetRepresentative RightDownTeeVector RightDownVector RightDownVectorBar RightTee RightTeeArrow RightTeeVector RightTriangle RightTriangleBar RightTriangleEqual RightUpDownVector RightUpTeeVector RightUpVector RightUpVectorBar RightVector RightVectorBar RiskAchievementImportance RiskReductionImportance RogersTanimotoDissimilarity Root RootApproximant RootIntervals RootLocusPlot RootMeanSquare RootOfUnityQ RootReduce Roots RootSum Rotate RotateLabel RotateLeft RotateRight RotationAction RotationBox RotationBoxOptions RotationMatrix RotationTransform Round RoundImplies RoundingRadius Row RowAlignments RowBackgrounds RowBox RowHeights RowLines RowMinHeight RowReduce RowsEqual RowSpacings RSolve RudvalisGroupRu Rule RuleCondition RuleDelayed RuleForm RulerUnits Run RunScheduledTask RunThrough RuntimeAttributes RuntimeOptions RussellRaoDissimilarity SameQ SameTest SampleDepth SampledSoundFunction SampledSoundList SampleRate SamplingPeriod SARIMAProcess SARMAProcess SatisfiabilityCount SatisfiabilityInstances SatisfiableQ Saturday Save Saveable SaveAutoDelete SaveDefinitions SawtoothWave Scale Scaled ScaleDivisions ScaledMousePosition ScaleOrigin ScalePadding ScaleRanges ScaleRangeStyle ScalingFunctions ScalingMatrix ScalingTransform Scan ScheduledTaskActiveQ ScheduledTaskData ScheduledTaskObject ScheduledTasks SchurDecomposition ScientificForm ScreenRectangle ScreenStyleEnvironment ScriptBaselineShifts ScriptLevel ScriptMinSize ScriptRules ScriptSizeMultipliers Scrollbars ScrollingOptions ScrollPosition Sec Sech SechDistribution SectionGrouping SectorChart SectorChart3D SectorOrigin SectorSpacing SeedRandom Select Selectable SelectComponents SelectedCells SelectedNotebook Selection SelectionAnimate SelectionCell SelectionCellCreateCell SelectionCellDefaultStyle SelectionCellParentStyle SelectionCreateCell SelectionDebuggerTag SelectionDuplicateCell SelectionEvaluate SelectionEvaluateCreateCell SelectionMove SelectionPlaceholder SelectionSetStyle SelectWithContents SelfLoops SelfLoopStyle SemialgebraicComponentInstances SendMail Sequence SequenceAlignment SequenceForm SequenceHold SequenceLimit Series SeriesCoefficient SeriesData SessionTime Set SetAccuracy SetAlphaChannel SetAttributes Setbacks SetBoxFormNamesPacket SetDelayed SetDirectory SetEnvironment SetEvaluationNotebook SetFileDate SetFileLoadingContext SetNotebookStatusLine SetOptions SetOptionsPacket SetPrecision SetProperty SetSelectedNotebook SetSharedFunction SetSharedVariable SetSpeechParametersPacket SetStreamPosition SetSystemOptions Setter SetterBar SetterBox SetterBoxOptions Setting SetValue Shading Shallow ShannonWavelet ShapiroWilkTest Share Sharpen ShearingMatrix ShearingTransform ShenCastanMatrix Short ShortDownArrow Shortest ShortestMatch ShortestPathFunction ShortLeftArrow ShortRightArrow ShortUpArrow Show ShowAutoStyles ShowCellBracket ShowCellLabel ShowCellTags ShowClosedCellArea ShowContents ShowControls ShowCursorTracker ShowGroupOpenCloseIcon ShowGroupOpener ShowInvisibleCharacters ShowPageBreaks ShowPredictiveInterface ShowSelection ShowShortBoxForm ShowSpecialCharacters ShowStringCharacters ShowSyntaxStyles ShrinkingDelay ShrinkWrapBoundingBox SiegelTheta SiegelTukeyTest Sign Signature SignedRankTest SignificanceLevel SignPadding SignTest SimilarityRules SimpleGraph SimpleGraphQ Simplify Sin Sinc SinghMaddalaDistribution SingleEvaluation SingleLetterItalics SingleLetterStyle SingularValueDecomposition SingularValueList SingularValuePlot SingularValues Sinh SinhIntegral SinIntegral SixJSymbol Skeleton SkeletonTransform SkellamDistribution Skewness SkewNormalDistribution Skip SliceDistribution Slider Slider2D Slider2DBox Slider2DBoxOptions SliderBox SliderBoxOptions SlideView Slot SlotSequence Small SmallCircle Smaller SmithDelayCompensator SmithWatermanSimilarity SmoothDensityHistogram SmoothHistogram SmoothHistogram3D SmoothKernelDistribution SocialMediaData Socket SokalSneathDissimilarity Solve SolveAlways SolveDelayed Sort SortBy Sound SoundAndGraphics SoundNote SoundVolume Sow Space SpaceForm Spacer Spacings Span SpanAdjustments SpanCharacterRounding SpanFromAbove SpanFromBoth SpanFromLeft SpanLineThickness SpanMaxSize SpanMinSize SpanningCharacters SpanSymmetric SparseArray SpatialGraphDistribution Speak SpeakTextPacket SpearmanRankTest SpearmanRho Spectrogram SpectrogramArray Specularity SpellingCorrection SpellingDictionaries SpellingDictionariesPath SpellingOptions SpellingSuggestionsPacket Sphere SphereBox SphericalBesselJ SphericalBesselY SphericalHankelH1 SphericalHankelH2 SphericalHarmonicY SphericalPlot3D SphericalRegion SpheroidalEigenvalue SpheroidalJoiningFactor SpheroidalPS SpheroidalPSPrime SpheroidalQS SpheroidalQSPrime SpheroidalRadialFactor SpheroidalS1 SpheroidalS1Prime SpheroidalS2 SpheroidalS2Prime Splice SplicedDistribution SplineClosed SplineDegree SplineKnots SplineWeights Split SplitBy SpokenString Sqrt SqrtBox SqrtBoxOptions Square SquaredEuclideanDistance SquareFreeQ SquareIntersection SquaresR SquareSubset SquareSubsetEqual SquareSuperset SquareSupersetEqual SquareUnion SquareWave StabilityMargins StabilityMarginsStyle StableDistribution Stack StackBegin StackComplete StackInhibit StandardDeviation StandardDeviationFilter StandardForm Standardize StandbyDistribution Star StarGraph StartAsynchronousTask StartingStepSize StartOfLine StartOfString StartScheduledTask StartupSound StateDimensions StateFeedbackGains StateOutputEstimator StateResponse StateSpaceModel StateSpaceRealization StateSpaceTransform StationaryDistribution StationaryWaveletPacketTransform StationaryWaveletTransform StatusArea StatusCentrality StepMonitor StieltjesGamma StirlingS1 StirlingS2 StopAsynchronousTask StopScheduledTask StrataVariables StratonovichProcess StreamColorFunction StreamColorFunctionScaling StreamDensityPlot StreamPlot StreamPoints StreamPosition Streams StreamScale StreamStyle String StringBreak StringByteCount StringCases StringCount StringDrop StringExpression StringForm StringFormat StringFreeQ StringInsert StringJoin StringLength StringMatchQ StringPosition StringQ StringReplace StringReplaceList StringReplacePart StringReverse StringRotateLeft StringRotateRight StringSkeleton StringSplit StringTake StringToStream StringTrim StripBoxes StripOnInput StripWrapperBoxes StrokeForm StructuralImportance StructuredArray StructuredSelection StruveH StruveL Stub StudentTDistribution Style StyleBox StyleBoxAutoDelete StyleBoxOptions StyleData StyleDefinitions StyleForm StyleKeyMapping StyleMenuListing StyleNameDialogSettings StyleNames StylePrint StyleSheetPath Subfactorial Subgraph SubMinus SubPlus SubresultantPolynomialRemainders SubresultantPolynomials Subresultants Subscript SubscriptBox SubscriptBoxOptions Subscripted Subset SubsetEqual Subsets SubStar Subsuperscript SubsuperscriptBox SubsuperscriptBoxOptions Subtract SubtractFrom SubValues Succeeds SucceedsEqual SucceedsSlantEqual SucceedsTilde SuchThat Sum SumConvergence Sunday SuperDagger SuperMinus SuperPlus Superscript SuperscriptBox SuperscriptBoxOptions Superset SupersetEqual SuperStar Surd SurdForm SurfaceColor SurfaceGraphics SurvivalDistribution SurvivalFunction SurvivalModel SurvivalModelFit SuspendPacket SuzukiDistribution SuzukiGroupSuz SwatchLegend Switch Symbol SymbolName SymletWavelet Symmetric SymmetricGroup SymmetricMatrixQ SymmetricPolynomial SymmetricReduction Symmetrize SymmetrizedArray SymmetrizedArrayRules SymmetrizedDependentComponents SymmetrizedIndependentComponents SymmetrizedReplacePart SynchronousInitialization SynchronousUpdating Syntax SyntaxForm SyntaxInformation SyntaxLength SyntaxPacket SyntaxQ SystemDialogInput SystemException SystemHelpPath SystemInformation SystemInformationData SystemOpen SystemOptions SystemsModelDelay SystemsModelDelayApproximate SystemsModelDelete SystemsModelDimensions SystemsModelExtract SystemsModelFeedbackConnect SystemsModelLabels SystemsModelOrder SystemsModelParallelConnect SystemsModelSeriesConnect SystemsModelStateFeedbackConnect SystemStub Tab TabFilling Table TableAlignments TableDepth TableDirections TableForm TableHeadings TableSpacing TableView TableViewBox TabSpacings TabView TabViewBox TabViewBoxOptions TagBox TagBoxNote TagBoxOptions TaggingRules TagSet TagSetDelayed TagStyle TagUnset Take TakeWhile Tally Tan Tanh TargetFunctions TargetUnits TautologyQ TelegraphProcess TemplateBox TemplateBoxOptions TemplateSlotSequence TemporalData Temporary TemporaryVariable TensorContract TensorDimensions TensorExpand TensorProduct TensorQ TensorRank TensorReduce TensorSymmetry TensorTranspose TensorWedge Tetrahedron TetrahedronBox TetrahedronBoxOptions TeXForm TeXSave Text Text3DBox Text3DBoxOptions TextAlignment TextBand TextBoundingBox TextBox TextCell TextClipboardType TextData TextForm TextJustification TextLine TextPacket TextParagraph TextRecognize TextRendering TextStyle Texture TextureCoordinateFunction TextureCoordinateScaling Therefore ThermometerGauge Thick Thickness Thin Thinning ThisLink ThompsonGroupTh Thread ThreeJSymbol Threshold Through Throw Thumbnail Thursday Ticks TicksStyle Tilde TildeEqual TildeFullEqual TildeTilde TimeConstrained TimeConstraint Times TimesBy TimeSeriesForecast TimeSeriesInvertibility TimeUsed TimeValue TimeZone Timing Tiny TitleGrouping TitsGroupT ToBoxes ToCharacterCode ToColor ToContinuousTimeModel ToDate ToDiscreteTimeModel ToeplitzMatrix ToExpression ToFileName Together Toggle ToggleFalse Toggler TogglerBar TogglerBox TogglerBoxOptions ToHeldExpression ToInvertibleTimeSeries TokenWords Tolerance ToLowerCase ToNumberField TooBig Tooltip TooltipBox TooltipBoxOptions TooltipDelay TooltipStyle Top TopHatTransform TopologicalSort ToRadicals ToRules ToString Total TotalHeight TotalVariationFilter TotalWidth TouchscreenAutoZoom TouchscreenControlPlacement ToUpperCase Tr Trace TraceAbove TraceAction TraceBackward TraceDepth TraceDialog TraceForward TraceInternal TraceLevel TraceOff TraceOn TraceOriginal TracePrint TraceScan TrackedSymbols TradingChart TraditionalForm TraditionalFunctionNotation TraditionalNotation TraditionalOrder TransferFunctionCancel TransferFunctionExpand TransferFunctionFactor TransferFunctionModel TransferFunctionPoles TransferFunctionTransform TransferFunctionZeros TransformationFunction TransformationFunctions TransformationMatrix TransformedDistribution TransformedField Translate TranslationTransform TransparentColor Transpose TreeForm TreeGraph TreeGraphQ TreePlot TrendStyle TriangleWave TriangularDistribution Trig TrigExpand TrigFactor TrigFactorList Trigger TrigReduce TrigToExp TrimmedMean True TrueQ TruncatedDistribution TsallisQExponentialDistribution TsallisQGaussianDistribution TTest Tube TubeBezierCurveBox TubeBezierCurveBoxOptions TubeBox TubeBSplineCurveBox TubeBSplineCurveBoxOptions Tuesday TukeyLambdaDistribution TukeyWindow Tuples TuranGraph TuringMachine Transparent UnateQ Uncompress Undefined UnderBar Underflow Underlined Underoverscript UnderoverscriptBox UnderoverscriptBoxOptions Underscript UnderscriptBox UnderscriptBoxOptions UndirectedEdge UndirectedGraph UndirectedGraphQ UndocumentedTestFEParserPacket UndocumentedTestGetSelectionPacket Unequal Unevaluated UniformDistribution UniformGraphDistribution UniformSumDistribution Uninstall Union UnionPlus Unique UnitBox UnitConvert UnitDimensions Unitize UnitRootTest UnitSimplify UnitStep UnitTriangle UnitVector Unprotect UnsameQ UnsavedVariables Unset UnsetShared UntrackedVariables Up UpArrow UpArrowBar UpArrowDownArrow Update UpdateDynamicObjects UpdateDynamicObjectsSynchronous UpdateInterval UpDownArrow UpEquilibrium UpperCaseQ UpperLeftArrow UpperRightArrow UpperTriangularize Upsample UpSet UpSetDelayed UpTee UpTeeArrow UpValues URL URLFetch URLFetchAsynchronous URLSave URLSaveAsynchronous UseGraphicsRange Using UsingFrontEnd V2Get ValidationLength Value ValueBox ValueBoxOptions ValueForm ValueQ ValuesData Variables Variance VarianceEquivalenceTest VarianceEstimatorFunction VarianceGammaDistribution VarianceTest VectorAngle VectorColorFunction VectorColorFunctionScaling VectorDensityPlot VectorGlyphData VectorPlot VectorPlot3D VectorPoints VectorQ Vectors VectorScale VectorStyle Vee Verbatim Verbose VerboseConvertToPostScriptPacket VerifyConvergence VerifySolutions VerifyTestAssumptions Version VersionNumber VertexAdd VertexCapacity VertexColors VertexComponent VertexConnectivity VertexCoordinateRules VertexCoordinates VertexCorrelationSimilarity VertexCosineSimilarity VertexCount VertexCoverQ VertexDataCoordinates VertexDegree VertexDelete VertexDiceSimilarity VertexEccentricity VertexInComponent VertexInDegree VertexIndex VertexJaccardSimilarity VertexLabeling VertexLabels VertexLabelStyle VertexList VertexNormals VertexOutComponent VertexOutDegree VertexQ VertexRenderingFunction VertexReplace VertexShape VertexShapeFunction VertexSize VertexStyle VertexTextureCoordinates VertexWeight Vertical VerticalBar VerticalForm VerticalGauge VerticalSeparator VerticalSlider VerticalTilde ViewAngle ViewCenter ViewMatrix ViewPoint ViewPointSelectorSettings ViewPort ViewRange ViewVector ViewVertical VirtualGroupData Visible VisibleCell VoigtDistribution VonMisesDistribution WaitAll WaitAsynchronousTask WaitNext WaitUntil WakebyDistribution WalleniusHypergeometricDistribution WaringYuleDistribution WatershedComponents WatsonUSquareTest WattsStrogatzGraphDistribution WaveletBestBasis WaveletFilterCoefficients WaveletImagePlot WaveletListPlot WaveletMapIndexed WaveletMatrixPlot WaveletPhi WaveletPsi WaveletScale WaveletScalogram WaveletThreshold WeaklyConnectedComponents WeaklyConnectedGraphQ WeakStationarity WeatherData WeberE Wedge Wednesday WeibullDistribution WeierstrassHalfPeriods WeierstrassInvariants WeierstrassP WeierstrassPPrime WeierstrassSigma WeierstrassZeta WeightedAdjacencyGraph WeightedAdjacencyMatrix WeightedData WeightedGraphQ Weights WelchWindow WheelGraph WhenEvent Which While White Whitespace WhitespaceCharacter WhittakerM WhittakerW WienerFilter WienerProcess WignerD WignerSemicircleDistribution WilksW WilksWTest WindowClickSelect WindowElements WindowFloating WindowFrame WindowFrameElements WindowMargins WindowMovable WindowOpacity WindowSelected WindowSize WindowStatusArea WindowTitle WindowToolbars WindowWidth With WolframAlpha WolframAlphaDate WolframAlphaQuantity WolframAlphaResult Word WordBoundary WordCharacter WordData WordSearch WordSeparators WorkingPrecision Write WriteString Wronskian XMLElement XMLObject Xnor Xor Yellow YuleDissimilarity ZernikeR ZeroSymmetric ZeroTest ZeroWidthTimes Zeta ZetaZero ZipfDistribution ZTest ZTransform $Aborted $ActivationGroupID $ActivationKey $ActivationUserRegistered $AddOnsDirectory $AssertFunction $Assumptions $AsynchronousTask $BaseDirectory $BatchInput $BatchOutput $BoxForms $ByteOrdering $Canceled $CharacterEncoding $CharacterEncodings $CommandLine $CompilationTarget $ConditionHold $ConfiguredKernels $Context $ContextPath $ControlActiveSetting $CreationDate $CurrentLink $DateStringFormat $DefaultFont $DefaultFrontEnd $DefaultImagingDevice $DefaultPath $Display $DisplayFunction $DistributedContexts $DynamicEvaluation $Echo $Epilog $ExportFormats $Failed $FinancialDataSource $FormatType $FrontEnd $FrontEndSession $GeoLocation $HistoryLength $HomeDirectory $HTTPCookies $IgnoreEOF $ImagingDevices $ImportFormats $InitialDirectory $Input $InputFileName $InputStreamMethods $Inspector $InstallationDate $InstallationDirectory $InterfaceEnvironment $IterationLimit $KernelCount $KernelID $Language $LaunchDirectory $LibraryPath $LicenseExpirationDate $LicenseID $LicenseProcesses $LicenseServer $LicenseSubprocesses $LicenseType $Line $Linked $LinkSupported $LoadedFiles $MachineAddresses $MachineDomain $MachineDomains $MachineEpsilon $MachineID $MachineName $MachinePrecision $MachineType $MaxExtraPrecision $MaxLicenseProcesses $MaxLicenseSubprocesses $MaxMachineNumber $MaxNumber $MaxPiecewiseCases $MaxPrecision $MaxRootDegree $MessageGroups $MessageList $MessagePrePrint $Messages $MinMachineNumber $MinNumber $MinorReleaseNumber $MinPrecision $ModuleNumber $NetworkLicense $NewMessage $NewSymbol $Notebooks $NumberMarks $Off $OperatingSystem $Output $OutputForms $OutputSizeLimit $OutputStreamMethods $Packages $ParentLink $ParentProcessID $PasswordFile $PatchLevelID $Path $PathnameSeparator $PerformanceGoal $PipeSupported $Post $Pre $PreferencesDirectory $PrePrint $PreRead $PrintForms $PrintLiteral $ProcessID $ProcessorCount $ProcessorType $ProductInformation $ProgramName $RandomState $RecursionLimit $ReleaseNumber $RootDirectory $ScheduledTask $ScriptCommandLine $SessionID $SetParentLink $SharedFunctions $SharedVariables $SoundDisplay $SoundDisplayFunction $SuppressInputFormHeads $SynchronousEvaluation $SyntaxHandler $System $SystemCharacterEncoding $SystemID $SystemWordLength $TemporaryDirectory $TemporaryPrefix $TextStyle $TimedOut $TimeUnit $TimeZone $TopDirectory $TraceOff $TraceOn $TracePattern $TracePostAction $TracePreAction $Urgent $UserAddOnsDirectory $UserBaseDirectory $UserDocumentsDirectory $UserName $Version $VersionNumber',
        contains: [
          { className: 'comment', begin: /\(\*/, end: /\*\)/ },
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          e.C_NUMBER_MODE,
          { begin: /\{/, end: /\}/, illegal: /:/ }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = [
          e.C_NUMBER_MODE,
          {
            className: 'string',
            begin: "'",
            end: "'",
            contains: [e.BACKSLASH_ESCAPE, { begin: "''" }]
          }
        ],
        n = { relevance: 0, contains: [{ begin: /'['\.]*/ }] };
      return {
        keywords: {
          keyword:
            'break case catch classdef continue else elseif end enumerated events for function global if methods otherwise parfor persistent properties return spmd switch try while',
          built_in:
            'sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson'
        },
        illegal: '(//|"|#|/\\*|\\s+/\\w+)',
        contains: [
          {
            className: 'function',
            beginKeywords: 'function',
            end: '$',
            contains: [
              e.UNDERSCORE_TITLE_MODE,
              {
                className: 'params',
                variants: [
                  { begin: '\\(', end: '\\)' },
                  { begin: '\\[', end: '\\]' }
                ]
              }
            ]
          },
          {
            begin: /[a-zA-Z_][a-zA-Z_0-9]*'['\.]*/,
            returnBegin: !0,
            relevance: 0,
            contains: [
              { begin: /[a-zA-Z_][a-zA-Z_0-9]*/, relevance: 0 },
              n.contains[0]
            ]
          },
          { begin: '\\[', end: '\\]', contains: t, relevance: 0, starts: n },
          { begin: '\\{', end: /}/, contains: t, relevance: 0, starts: n },
          { begin: /\)/, relevance: 0, starts: n },
          e.COMMENT('^\\s*\\%\\{\\s*$', '^\\s*\\%\\}\\s*$'),
          e.COMMENT('\\%', '$')
        ].concat(t)
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        lexemes: '[A-Za-z_%][0-9A-Za-z_%]*',
        keywords: {
          keyword:
            'if then else elseif for thru do while unless step in and or not',
          literal: 'true false unknown inf minf ind und %e %i %pi %phi %gamma',
          built_in:
            ' abasep abs absint absolute_real_time acos acosh acot acoth acsc acsch activate addcol add_edge add_edges addmatrices addrow add_vertex add_vertices adjacency_matrix adjoin adjoint af agd airy airy_ai airy_bi airy_dai airy_dbi algsys alg_type alias allroots alphacharp alphanumericp amortization %and annuity_fv annuity_pv antid antidiff AntiDifference append appendfile apply apply1 apply2 applyb1 apropos args arit_amortization arithmetic arithsum array arrayapply arrayinfo arraymake arraysetapply ascii asec asech asin asinh askinteger asksign assoc assoc_legendre_p assoc_legendre_q assume assume_external_byte_order asympa at atan atan2 atanh atensimp atom atvalue augcoefmatrix augmented_lagrangian_method av average_degree backtrace bars barsplot barsplot_description base64 base64_decode bashindices batch batchload bc2 bdvac belln benefit_cost bern bernpoly bernstein_approx bernstein_expand bernstein_poly bessel bessel_i bessel_j bessel_k bessel_simplify bessel_y beta beta_incomplete beta_incomplete_generalized beta_incomplete_regularized bezout bfallroots bffac bf_find_root bf_fmin_cobyla bfhzeta bfloat bfloatp bfpsi bfpsi0 bfzeta biconnected_components bimetric binomial bipartition block blockmatrixp bode_gain bode_phase bothcoef box boxplot boxplot_description break bug_report build_info|10 buildq build_sample burn cabs canform canten cardinality carg cartan cartesian_product catch cauchy_matrix cbffac cdf_bernoulli cdf_beta cdf_binomial cdf_cauchy cdf_chi2 cdf_continuous_uniform cdf_discrete_uniform cdf_exp cdf_f cdf_gamma cdf_general_finite_discrete cdf_geometric cdf_gumbel cdf_hypergeometric cdf_laplace cdf_logistic cdf_lognormal cdf_negative_binomial cdf_noncentral_chi2 cdf_noncentral_student_t cdf_normal cdf_pareto cdf_poisson cdf_rank_sum cdf_rayleigh cdf_signed_rank cdf_student_t cdf_weibull cdisplay ceiling central_moment cequal cequalignore cf cfdisrep cfexpand cgeodesic cgreaterp cgreaterpignore changename changevar chaosgame charat charfun charfun2 charlist charp charpoly chdir chebyshev_t chebyshev_u checkdiv check_overlaps chinese cholesky christof chromatic_index chromatic_number cint circulant_graph clear_edge_weight clear_rules clear_vertex_label clebsch_gordan clebsch_graph clessp clesspignore close closefile cmetric coeff coefmatrix cograd col collapse collectterms columnop columnspace columnswap columnvector combination combine comp2pui compare compfile compile compile_file complement_graph complete_bipartite_graph complete_graph complex_number_p components compose_functions concan concat conjugate conmetderiv connected_components connect_vertices cons constant constantp constituent constvalue cont2part content continuous_freq contortion contour_plot contract contract_edge contragrad contrib_ode convert coord copy copy_file copy_graph copylist copymatrix cor cos cosh cot coth cov cov1 covdiff covect covers crc24sum create_graph create_list csc csch csetup cspline ctaylor ct_coordsys ctransform ctranspose cube_graph cuboctahedron_graph cunlisp cv cycle_digraph cycle_graph cylindrical days360 dblint deactivate declare declare_constvalue declare_dimensions declare_fundamental_dimensions declare_fundamental_units declare_qty declare_translated declare_unit_conversion declare_units declare_weights decsym defcon define define_alt_display define_variable defint defmatch defrule defstruct deftaylor degree_sequence del delete deleten delta demo demoivre denom depends derivdegree derivlist describe desolve determinant dfloat dgauss_a dgauss_b dgeev dgemm dgeqrf dgesv dgesvd diag diagmatrix diag_matrix diagmatrixp diameter diff digitcharp dimacs_export dimacs_import dimension dimensionless dimensions dimensions_as_list direct directory discrete_freq disjoin disjointp disolate disp dispcon dispform dispfun dispJordan display disprule dispterms distrib divide divisors divsum dkummer_m dkummer_u dlange dodecahedron_graph dotproduct dotsimp dpart draw draw2d draw3d drawdf draw_file draw_graph dscalar echelon edge_coloring edge_connectivity edges eigens_by_jacobi eigenvalues eigenvectors eighth einstein eivals eivects elapsed_real_time elapsed_run_time ele2comp ele2polynome ele2pui elem elementp elevation_grid elim elim_allbut eliminate eliminate_using ellipse elliptic_e elliptic_ec elliptic_eu elliptic_f elliptic_kc elliptic_pi ematrix empty_graph emptyp endcons entermatrix entertensor entier equal equalp equiv_classes erf erfc erf_generalized erfi errcatch error errormsg errors euler ev eval_string evenp every evolution evolution2d evundiff example exp expand expandwrt expandwrt_factored expint expintegral_chi expintegral_ci expintegral_e expintegral_e1 expintegral_ei expintegral_e_simplify expintegral_li expintegral_shi expintegral_si explicit explose exponentialize express expt exsec extdiff extract_linear_equations extremal_subset ezgcd %f f90 facsum factcomb factor factorfacsum factorial factorout factorsum facts fast_central_elements fast_linsolve fasttimes featurep fernfale fft fib fibtophi fifth filename_merge file_search file_type fillarray findde find_root find_root_abs find_root_error find_root_rel first fix flatten flength float floatnump floor flower_snark flush flush1deriv flushd flushnd flush_output fmin_cobyla forget fortran fourcos fourexpand fourier fourier_elim fourint fourintcos fourintsin foursimp foursin fourth fposition frame_bracket freeof freshline fresnel_c fresnel_s from_adjacency_matrix frucht_graph full_listify fullmap fullmapl fullratsimp fullratsubst fullsetify funcsolve fundamental_dimensions fundamental_units fundef funmake funp fv g0 g1 gamma gamma_greek gamma_incomplete gamma_incomplete_generalized gamma_incomplete_regularized gauss gauss_a gauss_b gaussprob gcd gcdex gcdivide gcfac gcfactor gd generalized_lambert_w genfact gen_laguerre genmatrix gensym geo_amortization geo_annuity_fv geo_annuity_pv geomap geometric geometric_mean geosum get getcurrentdirectory get_edge_weight getenv get_lu_factors get_output_stream_string get_pixel get_plot_option get_tex_environment get_tex_environment_default get_vertex_label gfactor gfactorsum ggf girth global_variances gn gnuplot_close gnuplot_replot gnuplot_reset gnuplot_restart gnuplot_start go Gosper GosperSum gr2d gr3d gradef gramschmidt graph6_decode graph6_encode graph6_export graph6_import graph_center graph_charpoly graph_eigenvalues graph_flow graph_order graph_periphery graph_product graph_size graph_union great_rhombicosidodecahedron_graph great_rhombicuboctahedron_graph grid_graph grind grobner_basis grotzch_graph hamilton_cycle hamilton_path hankel hankel_1 hankel_2 harmonic harmonic_mean hav heawood_graph hermite hessian hgfred hilbertmap hilbert_matrix hipow histogram histogram_description hodge horner hypergeometric i0 i1 %ibes ic1 ic2 ic_convert ichr1 ichr2 icosahedron_graph icosidodecahedron_graph icurvature ident identfor identity idiff idim idummy ieqn %if ifactors iframes ifs igcdex igeodesic_coords ilt image imagpart imetric implicit implicit_derivative implicit_plot indexed_tensor indices induced_subgraph inferencep inference_result infix info_display init_atensor init_ctensor in_neighbors innerproduct inpart inprod inrt integerp integer_partitions integrate intersect intersection intervalp intopois intosum invariant1 invariant2 inverse_fft inverse_jacobi_cd inverse_jacobi_cn inverse_jacobi_cs inverse_jacobi_dc inverse_jacobi_dn inverse_jacobi_ds inverse_jacobi_nc inverse_jacobi_nd inverse_jacobi_ns inverse_jacobi_sc inverse_jacobi_sd inverse_jacobi_sn invert invert_by_adjoint invert_by_lu inv_mod irr is is_biconnected is_bipartite is_connected is_digraph is_edge_in_graph is_graph is_graph_or_digraph ishow is_isomorphic isolate isomorphism is_planar isqrt isreal_p is_sconnected is_tree is_vertex_in_graph items_inference %j j0 j1 jacobi jacobian jacobi_cd jacobi_cn jacobi_cs jacobi_dc jacobi_dn jacobi_ds jacobi_nc jacobi_nd jacobi_ns jacobi_p jacobi_sc jacobi_sd jacobi_sn JF jn join jordan julia julia_set julia_sin %k kdels kdelta kill killcontext kostka kron_delta kronecker_product kummer_m kummer_u kurtosis kurtosis_bernoulli kurtosis_beta kurtosis_binomial kurtosis_chi2 kurtosis_continuous_uniform kurtosis_discrete_uniform kurtosis_exp kurtosis_f kurtosis_gamma kurtosis_general_finite_discrete kurtosis_geometric kurtosis_gumbel kurtosis_hypergeometric kurtosis_laplace kurtosis_logistic kurtosis_lognormal kurtosis_negative_binomial kurtosis_noncentral_chi2 kurtosis_noncentral_student_t kurtosis_normal kurtosis_pareto kurtosis_poisson kurtosis_rayleigh kurtosis_student_t kurtosis_weibull label labels lagrange laguerre lambda lambert_w laplace laplacian_matrix last lbfgs lc2kdt lcharp lc_l lcm lc_u ldefint ldisp ldisplay legendre_p legendre_q leinstein length let letrules letsimp levi_civita lfreeof lgtreillis lhs li liediff limit Lindstedt linear linearinterpol linear_program linear_regression line_graph linsolve listarray list_correlations listify list_matrix_entries list_nc_monomials listoftens listofvars listp lmax lmin load loadfile local locate_matrix_entry log logcontract log_gamma lopow lorentz_gauge lowercasep lpart lratsubst lreduce lriemann lsquares_estimates lsquares_estimates_approximate lsquares_estimates_exact lsquares_mse lsquares_residual_mse lsquares_residuals lsum ltreillis lu_backsub lucas lu_factor %m macroexpand macroexpand1 make_array makebox makefact makegamma make_graph make_level_picture makelist makeOrders make_poly_continent make_poly_country make_polygon make_random_state make_rgb_picture makeset make_string_input_stream make_string_output_stream make_transform mandelbrot mandelbrot_set map mapatom maplist matchdeclare matchfix mat_cond mat_fullunblocker mat_function mathml_display mat_norm matrix matrixmap matrixp matrix_size mattrace mat_trace mat_unblocker max max_clique max_degree max_flow maximize_lp max_independent_set max_matching maybe md5sum mean mean_bernoulli mean_beta mean_binomial mean_chi2 mean_continuous_uniform mean_deviation mean_discrete_uniform mean_exp mean_f mean_gamma mean_general_finite_discrete mean_geometric mean_gumbel mean_hypergeometric mean_laplace mean_logistic mean_lognormal mean_negative_binomial mean_noncentral_chi2 mean_noncentral_student_t mean_normal mean_pareto mean_poisson mean_rayleigh mean_student_t mean_weibull median median_deviation member mesh metricexpandall mgf1_sha1 min min_degree min_edge_cut minfactorial minimalPoly minimize_lp minimum_spanning_tree minor minpack_lsquares minpack_solve min_vertex_cover min_vertex_cut mkdir mnewton mod mode_declare mode_identity ModeMatrix moebius mon2schur mono monomial_dimensions multibernstein_poly multi_display_for_texinfo multi_elem multinomial multinomial_coeff multi_orbit multiplot_mode multi_pui multsym multthru mycielski_graph nary natural_unit nc_degree ncexpt ncharpoly negative_picture neighbors new newcontext newdet new_graph newline newton new_variable next_prime nicedummies niceindices ninth nofix nonarray noncentral_moment nonmetricity nonnegintegerp nonscalarp nonzeroandfreeof notequal nounify nptetrad npv nroots nterms ntermst nthroot nullity nullspace num numbered_boundaries numberp number_to_octets num_distinct_partitions numerval numfactor num_partitions nusum nzeta nzetai nzetar octets_to_number octets_to_oid odd_girth oddp ode2 ode_check odelin oid_to_octets op opena opena_binary openr openr_binary openw openw_binary operatorp opsubst optimize %or orbit orbits ordergreat ordergreatp orderless orderlessp orthogonal_complement orthopoly_recur orthopoly_weight outermap out_neighbors outofpois pade parabolic_cylinder_d parametric parametric_surface parg parGosper parse_string parse_timedate part part2cont partfrac partition partition_set partpol path_digraph path_graph pathname_directory pathname_name pathname_type pdf_bernoulli pdf_beta pdf_binomial pdf_cauchy pdf_chi2 pdf_continuous_uniform pdf_discrete_uniform pdf_exp pdf_f pdf_gamma pdf_general_finite_discrete pdf_geometric pdf_gumbel pdf_hypergeometric pdf_laplace pdf_logistic pdf_lognormal pdf_negative_binomial pdf_noncentral_chi2 pdf_noncentral_student_t pdf_normal pdf_pareto pdf_poisson pdf_rank_sum pdf_rayleigh pdf_signed_rank pdf_student_t pdf_weibull pearson_skewness permanent permut permutation permutations petersen_graph petrov pickapart picture_equalp picturep piechart piechart_description planar_embedding playback plog plot2d plot3d plotdf ploteq plsquares pochhammer points poisdiff poisexpt poisint poismap poisplus poissimp poissubst poistimes poistrim polar polarform polartorect polar_to_xy poly_add poly_buchberger poly_buchberger_criterion poly_colon_ideal poly_content polydecomp poly_depends_p poly_elimination_ideal poly_exact_divide poly_expand poly_expt poly_gcd polygon poly_grobner poly_grobner_equal poly_grobner_member poly_grobner_subsetp poly_ideal_intersection poly_ideal_polysaturation poly_ideal_polysaturation1 poly_ideal_saturation poly_ideal_saturation1 poly_lcm poly_minimization polymod poly_multiply polynome2ele polynomialp poly_normal_form poly_normalize poly_normalize_list poly_polysaturation_extension poly_primitive_part poly_pseudo_divide poly_reduced_grobner poly_reduction poly_saturation_extension poly_s_polynomial poly_subtract polytocompanion pop postfix potential power_mod powerseries powerset prefix prev_prime primep primes principal_components print printf printfile print_graph printpois printprops prodrac product properties propvars psi psubst ptriangularize pui pui2comp pui2ele pui2polynome pui_direct puireduc push put pv qput qrange qty quad_control quad_qag quad_qagi quad_qagp quad_qags quad_qawc quad_qawf quad_qawo quad_qaws quadrilateral quantile quantile_bernoulli quantile_beta quantile_binomial quantile_cauchy quantile_chi2 quantile_continuous_uniform quantile_discrete_uniform quantile_exp quantile_f quantile_gamma quantile_general_finite_discrete quantile_geometric quantile_gumbel quantile_hypergeometric quantile_laplace quantile_logistic quantile_lognormal quantile_negative_binomial quantile_noncentral_chi2 quantile_noncentral_student_t quantile_normal quantile_pareto quantile_poisson quantile_rayleigh quantile_student_t quantile_weibull quartile_skewness quit qunit quotient racah_v racah_w radcan radius random random_bernoulli random_beta random_binomial random_bipartite_graph random_cauchy random_chi2 random_continuous_uniform random_digraph random_discrete_uniform random_exp random_f random_gamma random_general_finite_discrete random_geometric random_graph random_graph1 random_gumbel random_hypergeometric random_laplace random_logistic random_lognormal random_negative_binomial random_network random_noncentral_chi2 random_noncentral_student_t random_normal random_pareto random_permutation random_poisson random_rayleigh random_regular_graph random_student_t random_tournament random_tree random_weibull range rank rat ratcoef ratdenom ratdiff ratdisrep ratexpand ratinterpol rational rationalize ratnumer ratnump ratp ratsimp ratsubst ratvars ratweight read read_array read_binary_array read_binary_list read_binary_matrix readbyte readchar read_hashed_array readline read_list read_matrix read_nested_list readonly read_xpm real_imagpart_to_conjugate realpart realroots rearray rectangle rectform rectform_log_if_constant recttopolar rediff reduce_consts reduce_order region region_boundaries region_boundaries_plus rem remainder remarray rembox remcomps remcon remcoord remfun remfunction remlet remove remove_constvalue remove_dimensions remove_edge remove_fundamental_dimensions remove_fundamental_units remove_plot_option remove_vertex rempart remrule remsym remvalue rename rename_file reset reset_displays residue resolvante resolvante_alternee1 resolvante_bipartite resolvante_diedrale resolvante_klein resolvante_klein3 resolvante_produit_sym resolvante_unitaire resolvante_vierer rest resultant return reveal reverse revert revert2 rgb2level rhs ricci riemann rinvariant risch rk rmdir rncombine romberg room rootscontract round row rowop rowswap rreduce run_testsuite %s save saving scalarp scaled_bessel_i scaled_bessel_i0 scaled_bessel_i1 scalefactors scanmap scatterplot scatterplot_description scene schur2comp sconcat scopy scsimp scurvature sdowncase sec sech second sequal sequalignore set_alt_display setdifference set_draw_defaults set_edge_weight setelmx setequalp setify setp set_partitions set_plot_option set_prompt set_random_state set_tex_environment set_tex_environment_default setunits setup_autoload set_up_dot_simplifications set_vertex_label seventh sexplode sf sha1sum sha256sum shortest_path shortest_weighted_path show showcomps showratvars sierpinskiale sierpinskimap sign signum similaritytransform simp_inequality simplify_sum simplode simpmetderiv simtran sin sinh sinsert sinvertcase sixth skewness skewness_bernoulli skewness_beta skewness_binomial skewness_chi2 skewness_continuous_uniform skewness_discrete_uniform skewness_exp skewness_f skewness_gamma skewness_general_finite_discrete skewness_geometric skewness_gumbel skewness_hypergeometric skewness_laplace skewness_logistic skewness_lognormal skewness_negative_binomial skewness_noncentral_chi2 skewness_noncentral_student_t skewness_normal skewness_pareto skewness_poisson skewness_rayleigh skewness_student_t skewness_weibull slength smake small_rhombicosidodecahedron_graph small_rhombicuboctahedron_graph smax smin smismatch snowmap snub_cube_graph snub_dodecahedron_graph solve solve_rec solve_rec_rat some somrac sort sparse6_decode sparse6_encode sparse6_export sparse6_import specint spherical spherical_bessel_j spherical_bessel_y spherical_hankel1 spherical_hankel2 spherical_harmonic spherical_to_xyz splice split sposition sprint sqfr sqrt sqrtdenest sremove sremovefirst sreverse ssearch ssort sstatus ssubst ssubstfirst staircase standardize standardize_inverse_trig starplot starplot_description status std std1 std_bernoulli std_beta std_binomial std_chi2 std_continuous_uniform std_discrete_uniform std_exp std_f std_gamma std_general_finite_discrete std_geometric std_gumbel std_hypergeometric std_laplace std_logistic std_lognormal std_negative_binomial std_noncentral_chi2 std_noncentral_student_t std_normal std_pareto std_poisson std_rayleigh std_student_t std_weibull stemplot stirling stirling1 stirling2 strim striml strimr string stringout stringp strong_components struve_h struve_l sublis sublist sublist_indices submatrix subsample subset subsetp subst substinpart subst_parallel substpart substring subvar subvarp sum sumcontract summand_to_rec supcase supcontext symbolp symmdifference symmetricp system take_channel take_inference tan tanh taylor taylorinfo taylorp taylor_simplifier taytorat tcl_output tcontract tellrat tellsimp tellsimpafter tentex tenth test_mean test_means_difference test_normality test_proportion test_proportions_difference test_rank_sum test_sign test_signed_rank test_variance test_variance_ratio tex tex1 tex_display texput %th third throw time timedate timer timer_info tldefint tlimit todd_coxeter toeplitz tokens to_lisp topological_sort to_poly to_poly_solve totaldisrep totalfourier totient tpartpol trace tracematrix trace_options transform_sample translate translate_file transpose treefale tree_reduce treillis treinat triangle triangularize trigexpand trigrat trigreduce trigsimp trunc truncate truncated_cube_graph truncated_dodecahedron_graph truncated_icosahedron_graph truncated_tetrahedron_graph tr_warnings_get tube tutte_graph ueivects uforget ultraspherical underlying_graph undiff union unique uniteigenvectors unitp units unit_step unitvector unorder unsum untellrat untimer untrace uppercasep uricci uriemann uvect vandermonde_matrix var var1 var_bernoulli var_beta var_binomial var_chi2 var_continuous_uniform var_discrete_uniform var_exp var_f var_gamma var_general_finite_discrete var_geometric var_gumbel var_hypergeometric var_laplace var_logistic var_lognormal var_negative_binomial var_noncentral_chi2 var_noncentral_student_t var_normal var_pareto var_poisson var_rayleigh var_student_t var_weibull vector vectorpotential vectorsimp verbify vers vertex_coloring vertex_connectivity vertex_degree vertex_distance vertex_eccentricity vertex_in_degree vertex_out_degree vertices vertices_to_cycle vertices_to_path %w weyl wheel_graph wiener_index wigner_3j wigner_6j wigner_9j with_stdout write_binary_data writebyte write_data writefile wronskian xreduce xthru %y Zeilberger zeroequiv zerofor zeromatrix zeromatrixp zeta zgeev zheev zlange zn_add_table zn_carmichael_lambda zn_characteristic_factors zn_determinant zn_factor_generators zn_invert_by_lu zn_log zn_mult_table absboxchar activecontexts adapt_depth additive adim aform algebraic algepsilon algexact aliases allbut all_dotsimp_denoms allocation allsym alphabetic animation antisymmetric arrays askexp assume_pos assume_pos_pred assumescalar asymbol atomgrad atrig1 axes axis_3d axis_bottom axis_left axis_right axis_top azimuth background background_color backsubst berlefact bernstein_explicit besselexpand beta_args_sum_to_integer beta_expand bftorat bftrunc bindtest border boundaries_array box boxchar breakup %c capping cauchysum cbrange cbtics center cflength cframe_flag cnonmet_flag color color_bar color_bar_tics colorbox columns commutative complex cone context contexts contour contour_levels cosnpiflag ctaypov ctaypt ctayswitch ctayvar ct_coords ctorsion_flag ctrgsimp cube current_let_rule_package cylinder data_file_name debugmode decreasing default_let_rule_package delay dependencies derivabbrev derivsubst detout diagmetric diff dim dimensions dispflag display2d|10 display_format_internal distribute_over doallmxops domain domxexpt domxmxops domxnctimes dontfactor doscmxops doscmxplus dot0nscsimp dot0simp dot1simp dotassoc dotconstrules dotdistrib dotexptsimp dotident dotscrules draw_graph_program draw_realpart edge_color edge_coloring edge_partition edge_type edge_width %edispflag elevation %emode endphi endtheta engineering_format_floats enhanced3d %enumer epsilon_lp erfflag erf_representation errormsg error_size error_syms error_type %e_to_numlog eval even evenfun evflag evfun ev_point expandwrt_denom expintexpand expintrep expon expop exptdispflag exptisolate exptsubst facexpand facsum_combine factlim factorflag factorial_expand factors_only fb feature features file_name file_output_append file_search_demo file_search_lisp file_search_maxima|10 file_search_tests file_search_usage file_type_lisp file_type_maxima|10 fill_color fill_density filled_func fixed_vertices flipflag float2bf font font_size fortindent fortspaces fpprec fpprintprec functions gamma_expand gammalim gdet genindex gensumnum GGFCFMAX GGFINFINITY globalsolve gnuplot_command gnuplot_curve_styles gnuplot_curve_titles gnuplot_default_term_command gnuplot_dumb_term_command gnuplot_file_args gnuplot_file_name gnuplot_out_file gnuplot_pdf_term_command gnuplot_pm3d gnuplot_png_term_command gnuplot_postamble gnuplot_preamble gnuplot_ps_term_command gnuplot_svg_term_command gnuplot_term gnuplot_view_args Gosper_in_Zeilberger gradefs grid grid2d grind halfangles head_angle head_both head_length head_type height hypergeometric_representation %iargs ibase icc1 icc2 icounter idummyx ieqnprint ifb ifc1 ifc2 ifg ifgi ifr iframe_bracket_form ifri igeowedge_flag ikt1 ikt2 imaginary inchar increasing infeval infinity inflag infolists inm inmc1 inmc2 intanalysis integer integervalued integrate_use_rootsof integration_constant integration_constant_counter interpolate_color intfaclim ip_grid ip_grid_in irrational isolate_wrt_times iterations itr julia_parameter %k1 %k2 keepfloat key key_pos kinvariant kt label label_alignment label_orientation labels lassociative lbfgs_ncorrections lbfgs_nfeval_max leftjust legend letrat let_rule_packages lfg lg lhospitallim limsubst linear linear_solver linechar linel|10 linenum line_type linewidth line_width linsolve_params linsolvewarn lispdisp listarith listconstvars listdummyvars lmxchar load_pathname loadprint logabs logarc logcb logconcoeffp logexpand lognegint logsimp logx logx_secondary logy logy_secondary logz lriem m1pbranch macroexpansion macros mainvar manual_demo maperror mapprint matrix_element_add matrix_element_mult matrix_element_transpose maxapplydepth maxapplyheight maxima_tempdir|10 maxima_userdir|10 maxnegex MAX_ORD maxposex maxpsifracdenom maxpsifracnum maxpsinegint maxpsiposint maxtayorder mesh_lines_color method mod_big_prime mode_check_errorp mode_checkp mode_check_warnp mod_test mod_threshold modular_linear_solver modulus multiplicative multiplicities myoptions nary negdistrib negsumdispflag newline newtonepsilon newtonmaxiter nextlayerfactor niceindicespref nm nmc noeval nolabels nonegative_lp noninteger nonscalar noun noundisp nouns np npi nticks ntrig numer numer_pbranch obase odd oddfun opacity opproperties opsubst optimprefix optionset orientation origin orthopoly_returns_intervals outative outchar packagefile palette partswitch pdf_file pfeformat phiresolution %piargs piece pivot_count_sx pivot_max_sx plot_format plot_options plot_realpart png_file pochhammer_max_index points pointsize point_size points_joined point_type poislim poisson poly_coefficient_ring poly_elimination_order polyfactor poly_grobner_algorithm poly_grobner_debug poly_monomial_order poly_primary_elimination_order poly_return_term_list poly_secondary_elimination_order poly_top_reduction_only posfun position powerdisp pred prederror primep_number_of_tests product_use_gamma program programmode promote_float_to_bigfloat prompt proportional_axes props psexpand ps_file radexpand radius radsubstflag rassociative ratalgdenom ratchristof ratdenomdivide rateinstein ratepsilon ratfac rational ratmx ratprint ratriemann ratsimpexpons ratvarswitch ratweights ratweyl ratwtlvl real realonly redraw refcheck resolution restart resultant ric riem rmxchar %rnum_list rombergabs rombergit rombergmin rombergtol rootsconmode rootsepsilon run_viewer same_xy same_xyz savedef savefactors scalar scalarmatrixp scale scale_lp setcheck setcheckbreak setval show_edge_color show_edges show_edge_type show_edge_width show_id show_label showtime show_vertex_color show_vertex_size show_vertex_type show_vertices show_weight simp simplified_output simplify_products simpproduct simpsum sinnpiflag solvedecomposes solveexplicit solvefactors solvenullwarn solveradcan solvetrigwarn space sparse sphere spring_embedding_depth sqrtdispflag stardisp startphi starttheta stats_numer stringdisp structures style sublis_apply_lambda subnumsimp sumexpand sumsplitfact surface surface_hide svg_file symmetric tab taylordepth taylor_logexpand taylor_order_coefficients taylor_truncate_polynomials tensorkill terminal testsuite_files thetaresolution timer_devalue title tlimswitch tr track transcompile transform transform_xy translate_fast_arrays transparent transrun tr_array_as_ref tr_bound_function_applyp tr_file_tty_messagesp tr_float_can_branch_complex tr_function_call_default trigexpandplus trigexpandtimes triginverses trigsign trivial_solutions tr_numer tr_optimize_max_loop tr_semicompile tr_state_vars tr_warn_bad_function_calls tr_warn_fexpr tr_warn_meval tr_warn_mode tr_warn_undeclared tr_warn_undefined_variable tstep ttyoff tube_extremes ufg ug %unitexpand unit_vectors uric uriem use_fast_arrays user_preamble usersetunits values vect_cross verbose vertex_color vertex_coloring vertex_partition vertex_size vertex_type view warnings weyl width windowname windowtitle wired_surface wireframe xaxis xaxis_color xaxis_secondary xaxis_type xaxis_width xlabel xlabel_secondary xlength xrange xrange_secondary xtics xtics_axis xtics_rotate xtics_rotate_secondary xtics_secondary xtics_secondary_axis xu_grid x_voxel xy_file xyplane xy_scale yaxis yaxis_color yaxis_secondary yaxis_type yaxis_width ylabel ylabel_secondary ylength yrange yrange_secondary ytics ytics_axis ytics_rotate ytics_rotate_secondary ytics_secondary ytics_secondary_axis yv_grid y_voxel yx_ratio zaxis zaxis_color zaxis_type zaxis_width zeroa zerob zerobern zeta%pi zlabel zlabel_rotate zlength zmin zn_primroot_limit zn_primroot_pretest',
          symbol: '_ __ %|0 %%|0'
        },
        contains: [
          {
            className: 'comment',
            begin: '/\\*',
            end: '\\*/',
            contains: ['self']
          },
          e.QUOTE_STRING_MODE,
          {
            className: 'number',
            relevance: 0,
            variants: [
              {
                begin: '\\b(\\d+|\\d+\\.|\\.\\d+|\\d+\\.\\d+)[Ee][-+]?\\d+\\b'
              },
              {
                begin: '\\b(\\d+|\\d+\\.|\\.\\d+|\\d+\\.\\d+)[Bb][-+]?\\d+\\b',
                relevance: 10
              },
              { begin: '\\b(\\.\\d+|\\d+\\.\\d+)\\b' },
              { begin: '\\b(\\d+|0[0-9A-Za-z]+)\\.?\\b' }
            ]
          }
        ],
        illegal: /@/
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        keywords:
          'int float string vector matrix if else switch case default while do for in break continue global proc return about abs addAttr addAttributeEditorNodeHelp addDynamic addNewShelfTab addPP addPanelCategory addPrefixToName advanceToNextDrivenKey affectedNet affects aimConstraint air alias aliasAttr align alignCtx alignCurve alignSurface allViewFit ambientLight angle angleBetween animCone animCurveEditor animDisplay animView annotate appendStringArray applicationName applyAttrPreset applyTake arcLenDimContext arcLengthDimension arclen arrayMapper art3dPaintCtx artAttrCtx artAttrPaintVertexCtx artAttrSkinPaintCtx artAttrTool artBuildPaintMenu artFluidAttrCtx artPuttyCtx artSelectCtx artSetPaintCtx artUserPaintCtx assignCommand assignInputDevice assignViewportFactories attachCurve attachDeviceAttr attachSurface attrColorSliderGrp attrCompatibility attrControlGrp attrEnumOptionMenu attrEnumOptionMenuGrp attrFieldGrp attrFieldSliderGrp attrNavigationControlGrp attrPresetEditWin attributeExists attributeInfo attributeMenu attributeQuery autoKeyframe autoPlace bakeClip bakeFluidShading bakePartialHistory bakeResults bakeSimulation basename basenameEx batchRender bessel bevel bevelPlus binMembership bindSkin blend2 blendShape blendShapeEditor blendShapePanel blendTwoAttr blindDataType boneLattice boundary boxDollyCtx boxZoomCtx bufferCurve buildBookmarkMenu buildKeyframeMenu button buttonManip CBG cacheFile cacheFileCombine cacheFileMerge cacheFileTrack camera cameraView canCreateManip canvas capitalizeString catch catchQuiet ceil changeSubdivComponentDisplayLevel changeSubdivRegion channelBox character characterMap characterOutlineEditor characterize chdir checkBox checkBoxGrp checkDefaultRenderGlobals choice circle circularFillet clamp clear clearCache clip clipEditor clipEditorCurrentTimeCtx clipSchedule clipSchedulerOutliner clipTrimBefore closeCurve closeSurface cluster cmdFileOutput cmdScrollFieldExecuter cmdScrollFieldReporter cmdShell coarsenSubdivSelectionList collision color colorAtPoint colorEditor colorIndex colorIndexSliderGrp colorSliderButtonGrp colorSliderGrp columnLayout commandEcho commandLine commandPort compactHairSystem componentEditor compositingInterop computePolysetVolume condition cone confirmDialog connectAttr connectControl connectDynamic connectJoint connectionInfo constrain constrainValue constructionHistory container containsMultibyte contextInfo control convertFromOldLayers convertIffToPsd convertLightmap convertSolidTx convertTessellation convertUnit copyArray copyFlexor copyKey copySkinWeights cos cpButton cpCache cpClothSet cpCollision cpConstraint cpConvClothToMesh cpForces cpGetSolverAttr cpPanel cpProperty cpRigidCollisionFilter cpSeam cpSetEdit cpSetSolverAttr cpSolver cpSolverTypes cpTool cpUpdateClothUVs createDisplayLayer createDrawCtx createEditor createLayeredPsdFile createMotionField createNewShelf createNode createRenderLayer createSubdivRegion cross crossProduct ctxAbort ctxCompletion ctxEditMode ctxTraverse currentCtx currentTime currentTimeCtx currentUnit curve curveAddPtCtx curveCVCtx curveEPCtx curveEditorCtx curveIntersect curveMoveEPCtx curveOnSurface curveSketchCtx cutKey cycleCheck cylinder dagPose date defaultLightListCheckBox defaultNavigation defineDataServer defineVirtualDevice deformer deg_to_rad delete deleteAttr deleteShadingGroupsAndMaterials deleteShelfTab deleteUI deleteUnusedBrushes delrandstr detachCurve detachDeviceAttr detachSurface deviceEditor devicePanel dgInfo dgdirty dgeval dgtimer dimWhen directKeyCtx directionalLight dirmap dirname disable disconnectAttr disconnectJoint diskCache displacementToPoly displayAffected displayColor displayCull displayLevelOfDetail displayPref displayRGBColor displaySmoothness displayStats displayString displaySurface distanceDimContext distanceDimension doBlur dolly dollyCtx dopeSheetEditor dot dotProduct doubleProfileBirailSurface drag dragAttrContext draggerContext dropoffLocator duplicate duplicateCurve duplicateSurface dynCache dynControl dynExport dynExpression dynGlobals dynPaintEditor dynParticleCtx dynPref dynRelEdPanel dynRelEditor dynamicLoad editAttrLimits editDisplayLayerGlobals editDisplayLayerMembers editRenderLayerAdjustment editRenderLayerGlobals editRenderLayerMembers editor editorTemplate effector emit emitter enableDevice encodeString endString endsWith env equivalent equivalentTol erf error eval evalDeferred evalEcho event exactWorldBoundingBox exclusiveLightCheckBox exec executeForEachObject exists exp expression expressionEditorListen extendCurve extendSurface extrude fcheck fclose feof fflush fgetline fgetword file fileBrowserDialog fileDialog fileExtension fileInfo filetest filletCurve filter filterCurve filterExpand filterStudioImport findAllIntersections findAnimCurves findKeyframe findMenuItem findRelatedSkinCluster finder firstParentOf fitBspline flexor floatEq floatField floatFieldGrp floatScrollBar floatSlider floatSlider2 floatSliderButtonGrp floatSliderGrp floor flow fluidCacheInfo fluidEmitter fluidVoxelInfo flushUndo fmod fontDialog fopen formLayout format fprint frameLayout fread freeFormFillet frewind fromNativePath fwrite gamma gauss geometryConstraint getApplicationVersionAsFloat getAttr getClassification getDefaultBrush getFileList getFluidAttr getInputDeviceRange getMayaPanelTypes getModifiers getPanel getParticleAttr getPluginResource getenv getpid glRender glRenderEditor globalStitch gmatch goal gotoBindPose grabColor gradientControl gradientControlNoAttr graphDollyCtx graphSelectContext graphTrackCtx gravity grid gridLayout group groupObjectsByName HfAddAttractorToAS HfAssignAS HfBuildEqualMap HfBuildFurFiles HfBuildFurImages HfCancelAFR HfConnectASToHF HfCreateAttractor HfDeleteAS HfEditAS HfPerformCreateAS HfRemoveAttractorFromAS HfSelectAttached HfSelectAttractors HfUnAssignAS hardenPointCurve hardware hardwareRenderPanel headsUpDisplay headsUpMessage help helpLine hermite hide hilite hitTest hotBox hotkey hotkeyCheck hsv_to_rgb hudButton hudSlider hudSliderButton hwReflectionMap hwRender hwRenderLoad hyperGraph hyperPanel hyperShade hypot iconTextButton iconTextCheckBox iconTextRadioButton iconTextRadioCollection iconTextScrollList iconTextStaticLabel ikHandle ikHandleCtx ikHandleDisplayScale ikSolver ikSplineHandleCtx ikSystem ikSystemInfo ikfkDisplayMethod illustratorCurves image imfPlugins inheritTransform insertJoint insertJointCtx insertKeyCtx insertKnotCurve insertKnotSurface instance instanceable instancer intField intFieldGrp intScrollBar intSlider intSliderGrp interToUI internalVar intersect iprEngine isAnimCurve isConnected isDirty isParentOf isSameObject isTrue isValidObjectName isValidString isValidUiName isolateSelect itemFilter itemFilterAttr itemFilterRender itemFilterType joint jointCluster jointCtx jointDisplayScale jointLattice keyTangent keyframe keyframeOutliner keyframeRegionCurrentTimeCtx keyframeRegionDirectKeyCtx keyframeRegionDollyCtx keyframeRegionInsertKeyCtx keyframeRegionMoveKeyCtx keyframeRegionScaleKeyCtx keyframeRegionSelectKeyCtx keyframeRegionSetKeyCtx keyframeRegionTrackCtx keyframeStats lassoContext lattice latticeDeformKeyCtx launch launchImageEditor layerButton layeredShaderPort layeredTexturePort layout layoutDialog lightList lightListEditor lightListPanel lightlink lineIntersection linearPrecision linstep listAnimatable listAttr listCameras listConnections listDeviceAttachments listHistory listInputDeviceAxes listInputDeviceButtons listInputDevices listMenuAnnotation listNodeTypes listPanelCategories listRelatives listSets listTransforms listUnselected listerEditor loadFluid loadNewShelf loadPlugin loadPluginLanguageResources loadPrefObjects localizedPanelLabel lockNode loft log longNameOf lookThru ls lsThroughFilter lsType lsUI Mayatomr mag makeIdentity makeLive makePaintable makeRoll makeSingleSurface makeTubeOn makebot manipMoveContext manipMoveLimitsCtx manipOptions manipRotateContext manipRotateLimitsCtx manipScaleContext manipScaleLimitsCtx marker match max memory menu menuBarLayout menuEditor menuItem menuItemToShelf menuSet menuSetPref messageLine min minimizeApp mirrorJoint modelCurrentTimeCtx modelEditor modelPanel mouse movIn movOut move moveIKtoFK moveKeyCtx moveVertexAlongDirection multiProfileBirailSurface mute nParticle nameCommand nameField namespace namespaceInfo newPanelItems newton nodeCast nodeIconButton nodeOutliner nodePreset nodeType noise nonLinear normalConstraint normalize nurbsBoolean nurbsCopyUVSet nurbsCube nurbsEditUV nurbsPlane nurbsSelect nurbsSquare nurbsToPoly nurbsToPolygonsPref nurbsToSubdiv nurbsToSubdivPref nurbsUVSet nurbsViewDirectionVector objExists objectCenter objectLayer objectType objectTypeUI obsoleteProc oceanNurbsPreviewPlane offsetCurve offsetCurveOnSurface offsetSurface openGLExtension openMayaPref optionMenu optionMenuGrp optionVar orbit orbitCtx orientConstraint outlinerEditor outlinerPanel overrideModifier paintEffectsDisplay pairBlend palettePort paneLayout panel panelConfiguration panelHistory paramDimContext paramDimension paramLocator parent parentConstraint particle particleExists particleInstancer particleRenderInfo partition pasteKey pathAnimation pause pclose percent performanceOptions pfxstrokes pickWalk picture pixelMove planarSrf plane play playbackOptions playblast plugAttr plugNode pluginInfo pluginResourceUtil pointConstraint pointCurveConstraint pointLight pointMatrixMult pointOnCurve pointOnSurface pointPosition poleVectorConstraint polyAppend polyAppendFacetCtx polyAppendVertex polyAutoProjection polyAverageNormal polyAverageVertex polyBevel polyBlendColor polyBlindData polyBoolOp polyBridgeEdge polyCacheMonitor polyCheck polyChipOff polyClipboard polyCloseBorder polyCollapseEdge polyCollapseFacet polyColorBlindData polyColorDel polyColorPerVertex polyColorSet polyCompare polyCone polyCopyUV polyCrease polyCreaseCtx polyCreateFacet polyCreateFacetCtx polyCube polyCut polyCutCtx polyCylinder polyCylindricalProjection polyDelEdge polyDelFacet polyDelVertex polyDuplicateAndConnect polyDuplicateEdge polyEditUV polyEditUVShell polyEvaluate polyExtrudeEdge polyExtrudeFacet polyExtrudeVertex polyFlipEdge polyFlipUV polyForceUV polyGeoSampler polyHelix polyInfo polyInstallAction polyLayoutUV polyListComponentConversion polyMapCut polyMapDel polyMapSew polyMapSewMove polyMergeEdge polyMergeEdgeCtx polyMergeFacet polyMergeFacetCtx polyMergeUV polyMergeVertex polyMirrorFace polyMoveEdge polyMoveFacet polyMoveFacetUV polyMoveUV polyMoveVertex polyNormal polyNormalPerVertex polyNormalizeUV polyOptUvs polyOptions polyOutput polyPipe polyPlanarProjection polyPlane polyPlatonicSolid polyPoke polyPrimitive polyPrism polyProjection polyPyramid polyQuad polyQueryBlindData polyReduce polySelect polySelectConstraint polySelectConstraintMonitor polySelectCtx polySelectEditCtx polySeparate polySetToFaceNormal polySewEdge polyShortestPathCtx polySmooth polySoftEdge polySphere polySphericalProjection polySplit polySplitCtx polySplitEdge polySplitRing polySplitVertex polyStraightenUVBorder polySubdivideEdge polySubdivideFacet polyToSubdiv polyTorus polyTransfer polyTriangulate polyUVSet polyUnite polyWedgeFace popen popupMenu pose pow preloadRefEd print progressBar progressWindow projFileViewer projectCurve projectTangent projectionContext projectionManip promptDialog propModCtx propMove psdChannelOutliner psdEditTextureFile psdExport psdTextureFile putenv pwd python querySubdiv quit rad_to_deg radial radioButton radioButtonGrp radioCollection radioMenuItemCollection rampColorPort rand randomizeFollicles randstate rangeControl readTake rebuildCurve rebuildSurface recordAttr recordDevice redo reference referenceEdit referenceQuery refineSubdivSelectionList refresh refreshAE registerPluginResource rehash reloadImage removeJoint removeMultiInstance removePanelCategory rename renameAttr renameSelectionList renameUI render renderGlobalsNode renderInfo renderLayerButton renderLayerParent renderLayerPostProcess renderLayerUnparent renderManip renderPartition renderQualityNode renderSettings renderThumbnailUpdate renderWindowEditor renderWindowSelectContext renderer reorder reorderDeformers requires reroot resampleFluid resetAE resetPfxToPolyCamera resetTool resolutionNode retarget reverseCurve reverseSurface revolve rgb_to_hsv rigidBody rigidSolver roll rollCtx rootOf rot rotate rotationInterpolation roundConstantRadius rowColumnLayout rowLayout runTimeCommand runup sampleImage saveAllShelves saveAttrPreset saveFluid saveImage saveInitialState saveMenu savePrefObjects savePrefs saveShelf saveToolSettings scale scaleBrushBrightness scaleComponents scaleConstraint scaleKey scaleKeyCtx sceneEditor sceneUIReplacement scmh scriptCtx scriptEditorInfo scriptJob scriptNode scriptTable scriptToShelf scriptedPanel scriptedPanelType scrollField scrollLayout sculpt searchPathArray seed selLoadSettings select selectContext selectCurveCV selectKey selectKeyCtx selectKeyframeRegionCtx selectMode selectPref selectPriority selectType selectedNodes selectionConnection separator setAttr setAttrEnumResource setAttrMapping setAttrNiceNameResource setConstraintRestPosition setDefaultShadingGroup setDrivenKeyframe setDynamic setEditCtx setEditor setFluidAttr setFocus setInfinity setInputDeviceMapping setKeyCtx setKeyPath setKeyframe setKeyframeBlendshapeTargetWts setMenuMode setNodeNiceNameResource setNodeTypeFlag setParent setParticleAttr setPfxToPolyCamera setPluginResource setProject setStampDensity setStartupMessage setState setToolTo setUITemplate setXformManip sets shadingConnection shadingGeometryRelCtx shadingLightRelCtx shadingNetworkCompare shadingNode shapeCompare shelfButton shelfLayout shelfTabLayout shellField shortNameOf showHelp showHidden showManipCtx showSelectionInTitle showShadingGroupAttrEditor showWindow sign simplify sin singleProfileBirailSurface size sizeBytes skinCluster skinPercent smoothCurve smoothTangentSurface smoothstep snap2to2 snapKey snapMode snapTogetherCtx snapshot soft softMod softModCtx sort sound soundControl source spaceLocator sphere sphrand spotLight spotLightPreviewPort spreadSheetEditor spring sqrt squareSurface srtContext stackTrace startString startsWith stitchAndExplodeShell stitchSurface stitchSurfacePoints strcmp stringArrayCatenate stringArrayContains stringArrayCount stringArrayInsertAtIndex stringArrayIntersector stringArrayRemove stringArrayRemoveAtIndex stringArrayRemoveDuplicates stringArrayRemoveExact stringArrayToString stringToStringArray strip stripPrefixFromName stroke subdAutoProjection subdCleanTopology subdCollapse subdDuplicateAndConnect subdEditUV subdListComponentConversion subdMapCut subdMapSewMove subdMatchTopology subdMirror subdToBlind subdToPoly subdTransferUVsToCache subdiv subdivCrease subdivDisplaySmoothness substitute substituteAllString substituteGeometry substring surface surfaceSampler surfaceShaderList swatchDisplayPort switchTable symbolButton symbolCheckBox sysFile system tabLayout tan tangentConstraint texLatticeDeformContext texManipContext texMoveContext texMoveUVShellContext texRotateContext texScaleContext texSelectContext texSelectShortestPathCtx texSmudgeUVContext texWinToolCtx text textCurves textField textFieldButtonGrp textFieldGrp textManip textScrollList textToShelf textureDisplacePlane textureHairColor texturePlacementContext textureWindow threadCount threePointArcCtx timeControl timePort timerX toNativePath toggle toggleAxis toggleWindowVisibility tokenize tokenizeList tolerance tolower toolButton toolCollection toolDropped toolHasOptions toolPropertyWindow torus toupper trace track trackCtx transferAttributes transformCompare transformLimits translator trim trunc truncateFluidCache truncateHairCache tumble tumbleCtx turbulence twoPointArcCtx uiRes uiTemplate unassignInputDevice undo undoInfo ungroup uniform unit unloadPlugin untangleUV untitledFileName untrim upAxis updateAE userCtx uvLink uvSnapshot validateShelfName vectorize view2dToolCtx viewCamera viewClipPlane viewFit viewHeadOn viewLookAt viewManip viewPlace viewSet visor volumeAxis vortex waitCursor warning webBrowser webBrowserPrefs whatIs window windowPref wire wireContext workspace wrinkle wrinkleContext writeTake xbmLangPathList xform',
        illegal: '</',
        contains: [
          e.C_NUMBER_MODE,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          {
            className: 'string',
            begin: '`',
            end: '`',
            contains: [e.BACKSLASH_ESCAPE]
          },
          { begin: '[\\$\\%\\@](\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)' },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = e.COMMENT('%', '$'),
        n = e.inherit(e.APOS_STRING_MODE, { relevance: 0 }),
        r = e.inherit(e.QUOTE_STRING_MODE, { relevance: 0 });
      r.contains.push({
        className: 'subst',
        begin:
          '\\\\[abfnrtv]\\|\\\\x[0-9a-fA-F]*\\\\\\|%[-+# *.0-9]*[dioxXucsfeEgGp]',
        relevance: 0
      });
      return {
        aliases: ['m', 'moo'],
        keywords: {
          keyword:
            'module use_module import_module include_module end_module initialise mutable initialize finalize finalise interface implementation pred mode func type inst solver any_pred any_func is semidet det nondet multi erroneous failure cc_nondet cc_multi typeclass instance where pragma promise external trace atomic or_else require_complete_switch require_det require_semidet require_multi require_nondet require_cc_multi require_cc_nondet require_erroneous require_failure',
          meta:
            'inline no_inline type_spec source_file fact_table obsolete memo loop_check minimal_model terminates does_not_terminate check_termination promise_equivalent_clauses foreign_proc foreign_decl foreign_code foreign_type foreign_import_module foreign_export_enum foreign_export foreign_enum may_call_mercury will_not_call_mercury thread_safe not_thread_safe maybe_thread_safe promise_pure promise_semipure tabled_for_io local untrailed trailed attach_to_io_state can_pass_as_mercury_type stable will_not_throw_exception may_modify_trail will_not_modify_trail may_duplicate may_not_duplicate affects_liveness does_not_affect_liveness doesnt_affect_liveness no_sharing unknown_sharing sharing',
          built_in:
            'some all not if then else true fail false try catch catch_any semidet_true semidet_false semidet_fail impure_true impure semipure'
        },
        contains: [
          {
            className: 'built_in',
            variants: [
              { begin: '<=>' },
              { begin: '<=', relevance: 0 },
              { begin: '=>', relevance: 0 },
              { begin: '/\\\\' },
              { begin: '\\\\/' }
            ]
          },
          {
            className: 'built_in',
            variants: [{ begin: ':-\\|--\x3e' }, { begin: '=', relevance: 0 }]
          },
          t,
          e.C_BLOCK_COMMENT_MODE,
          { className: 'number', begin: "0'.\\|0[box][0-9a-fA-F]*" },
          e.NUMBER_MODE,
          n,
          r,
          { begin: /:-/ }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        case_insensitive: !0,
        aliases: ['mips'],
        lexemes: '\\.?' + e.IDENT_RE,
        keywords: {
          meta:
            '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .ltorg ',
          built_in:
            '$0 $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11 $12 $13 $14 $15 $16 $17 $18 $19 $20 $21 $22 $23 $24 $25 $26 $27 $28 $29 $30 $31 zero at v0 v1 a0 a1 a2 a3 a4 a5 a6 a7 t0 t1 t2 t3 t4 t5 t6 t7 t8 t9 s0 s1 s2 s3 s4 s5 s6 s7 s8 k0 k1 gp sp fp ra $f0 $f1 $f2 $f2 $f4 $f5 $f6 $f7 $f8 $f9 $f10 $f11 $f12 $f13 $f14 $f15 $f16 $f17 $f18 $f19 $f20 $f21 $f22 $f23 $f24 $f25 $f26 $f27 $f28 $f29 $f30 $f31 Context Random EntryLo0 EntryLo1 Context PageMask Wired EntryHi HWREna BadVAddr Count Compare SR IntCtl SRSCtl SRSMap Cause EPC PRId EBase Config Config1 Config2 Config3 LLAddr Debug DEPC DESAVE CacheErr ECC ErrorEPC TagLo DataLo TagHi DataHi WatchLo WatchHi PerfCtl PerfCnt '
        },
        contains: [
          {
            className: 'keyword',
            begin:
              '\\b(addi?u?|andi?|b(al)?|beql?|bgez(al)?l?|bgtzl?|blezl?|bltz(al)?l?|bnel?|cl[oz]|divu?|ext|ins|j(al)?|jalr(.hb)?|jr(.hb)?|lbu?|lhu?|ll|lui|lw[lr]?|maddu?|mfhi|mflo|movn|movz|move|msubu?|mthi|mtlo|mul|multu?|nop|nor|ori?|rotrv?|sb|sc|se[bh]|sh|sllv?|slti?u?|srav?|srlv?|subu?|sw[lr]?|xori?|wsbh|abs.[sd]|add.[sd]|alnv.ps|bc1[ft]l?|c.(s?f|un|u?eq|[ou]lt|[ou]le|ngle?|seq|l[et]|ng[et]).[sd]|(ceil|floor|round|trunc).[lw].[sd]|cfc1|cvt.d.[lsw]|cvt.l.[dsw]|cvt.ps.s|cvt.s.[dlw]|cvt.s.p[lu]|cvt.w.[dls]|div.[ds]|ldx?c1|luxc1|lwx?c1|madd.[sd]|mfc1|mov[fntz]?.[ds]|msub.[sd]|mth?c1|mul.[ds]|neg.[ds]|nmadd.[ds]|nmsub.[ds]|p[lu][lu].ps|recip.fmt|r?sqrt.[ds]|sdx?c1|sub.[ds]|suxc1|swx?c1|break|cache|d?eret|[de]i|ehb|mfc0|mtc0|pause|prefx?|rdhwr|rdpgpr|sdbbp|ssnop|synci?|syscall|teqi?|tgei?u?|tlb(p|r|w[ir])|tlti?u?|tnei?|wait|wrpgpr)',
            end: '\\s'
          },
          e.COMMENT('[;#]', '$'),
          e.C_BLOCK_COMMENT_MODE,
          e.QUOTE_STRING_MODE,
          { className: 'string', begin: "'", end: "[^\\\\]'", relevance: 0 },
          {
            className: 'title',
            begin: '\\|',
            end: '\\|',
            illegal: '\\n',
            relevance: 0
          },
          {
            className: 'number',
            variants: [{ begin: '0x[0-9a-f]+' }, { begin: '\\b-?\\d+' }],
            relevance: 0
          },
          {
            className: 'symbol',
            variants: [
              { begin: '^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:' },
              { begin: '^\\s*[0-9]+:' },
              { begin: '[0-9]+[bf]' }
            ],
            relevance: 0
          }
        ],
        illegal: '/'
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        keywords:
          'environ vocabularies notations constructors definitions registrations theorems schemes requirements begin end definition registration cluster existence pred func defpred deffunc theorem proof let take assume then thus hence ex for st holds consider reconsider such that and in provided of as from be being by means equals implies iff redefine define now not or attr is mode suppose per cases set thesis contradiction scheme reserve struct correctness compatibility coherence symmetry assymetry reflexivity irreflexivity connectedness uniqueness commutativity idempotence involutiveness projectivity',
        contains: [e.COMMENT('::', '$')]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t =
          'getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when',
        n = { className: 'subst', begin: '[$@]\\{', end: '\\}', keywords: t },
        r = { begin: '->{', end: '}' },
        a = {
          variants: [
            { begin: /\$\d/ },
            { begin: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/ },
            { begin: /[\$%@][^\s\w{]/, relevance: 0 }
          ]
        },
        i = [e.BACKSLASH_ESCAPE, n, a],
        o = [
          a,
          e.HASH_COMMENT_MODE,
          e.COMMENT('^\\=\\w', '\\=cut', { endsWithParent: !0 }),
          r,
          {
            className: 'string',
            contains: i,
            variants: [
              { begin: 'q[qwxr]?\\s*\\(', end: '\\)', relevance: 5 },
              { begin: 'q[qwxr]?\\s*\\[', end: '\\]', relevance: 5 },
              { begin: 'q[qwxr]?\\s*\\{', end: '\\}', relevance: 5 },
              { begin: 'q[qwxr]?\\s*\\|', end: '\\|', relevance: 5 },
              { begin: 'q[qwxr]?\\s*\\<', end: '\\>', relevance: 5 },
              { begin: 'qw\\s+q', end: 'q', relevance: 5 },
              { begin: "'", end: "'", contains: [e.BACKSLASH_ESCAPE] },
              { begin: '"', end: '"' },
              { begin: '`', end: '`', contains: [e.BACKSLASH_ESCAPE] },
              { begin: '{\\w+}', contains: [], relevance: 0 },
              { begin: '-?\\w+\\s*\\=\\>', contains: [], relevance: 0 }
            ]
          },
          {
            className: 'number',
            begin:
              '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
            relevance: 0
          },
          {
            begin:
              '(\\/\\/|' +
              e.RE_STARTERS_RE +
              '|\\b(split|return|print|reverse|grep)\\b)\\s*',
            keywords: 'split return print reverse grep',
            relevance: 0,
            contains: [
              e.HASH_COMMENT_MODE,
              {
                className: 'regexp',
                begin: '(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*',
                relevance: 10
              },
              {
                className: 'regexp',
                begin: '(m|qr)?/',
                end: '/[a-z]*',
                contains: [e.BACKSLASH_ESCAPE],
                relevance: 0
              }
            ]
          },
          {
            className: 'function',
            beginKeywords: 'sub',
            end: '(\\s*\\(.*?\\))?[;{]',
            excludeEnd: !0,
            relevance: 5,
            contains: [e.TITLE_MODE]
          },
          { begin: '-\\w\\b', relevance: 0 },
          {
            begin: '^__DATA__$',
            end: '^__END__$',
            subLanguage: 'mojolicious',
            contains: [{ begin: '^@@.*', end: '$', className: 'comment' }]
          }
        ];
      return (
        (n.contains = o),
        (r.contains = o),
        { aliases: ['pl', 'pm'], lexemes: /[\w\.]+/, keywords: t, contains: o }
      );
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        subLanguage: 'xml',
        contains: [
          { className: 'meta', begin: '^__(END|DATA)__$' },
          { begin: '^\\s*%{1,2}={0,2}', end: '$', subLanguage: 'perl' },
          {
            begin: '<%{1,2}={0,2}',
            end: '={0,1}%>',
            subLanguage: 'perl',
            excludeBegin: !0,
            excludeEnd: !0
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
        className: 'number',
        relevance: 0,
        variants: [{ begin: '[$][a-fA-F0-9]+' }, e.NUMBER_MODE]
      };
      return {
        case_insensitive: !0,
        keywords: {
          keyword:
            'public private property continue exit extern new try catch eachin not abstract final select case default const local global field end if then else elseif endif while wend repeat until forever for to step next return module inline throw import',
          built_in:
            'DebugLog DebugStop Error Print ACos ACosr ASin ASinr ATan ATan2 ATan2r ATanr Abs Abs Ceil Clamp Clamp Cos Cosr Exp Floor Log Max Max Min Min Pow Sgn Sgn Sin Sinr Sqrt Tan Tanr Seed PI HALFPI TWOPI',
          literal: 'true false null and or shl shr mod'
        },
        illegal: /\/\*/,
        contains: [
          e.COMMENT('#rem', '#end'),
          e.COMMENT("'", '$', { relevance: 0 }),
          {
            className: 'function',
            beginKeywords: 'function method',
            end: '[(=:]|$',
            illegal: /\n/,
            contains: [e.UNDERSCORE_TITLE_MODE]
          },
          {
            className: 'class',
            beginKeywords: 'class interface',
            end: '$',
            contains: [
              { beginKeywords: 'extends implements' },
              e.UNDERSCORE_TITLE_MODE
            ]
          },
          { className: 'built_in', begin: '\\b(self|super)\\b' },
          {
            className: 'meta',
            begin: '\\s*#',
            end: '$',
            keywords: { 'meta-keyword': 'if else elseif endif end then' }
          },
          { className: 'meta', begin: '^\\s*strict\\b' },
          {
            beginKeywords: 'alias',
            end: '=',
            contains: [e.UNDERSCORE_TITLE_MODE]
          },
          e.QUOTE_STRING_MODE,
          t
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          keyword:
            'if then not for in while do return else elseif break continue switch and or unless when class extends super local import export from using',
          literal: 'true false nil',
          built_in:
            '_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table'
        },
        n = '[A-Za-z$_][0-9A-Za-z$_]*',
        r = { className: 'subst', begin: /#\{/, end: /}/, keywords: t },
        a = [
          e.inherit(e.C_NUMBER_MODE, {
            starts: { end: '(\\s*/)?', relevance: 0 }
          }),
          {
            className: 'string',
            variants: [
              { begin: /'/, end: /'/, contains: [e.BACKSLASH_ESCAPE] },
              { begin: /"/, end: /"/, contains: [e.BACKSLASH_ESCAPE, r] }
            ]
          },
          { className: 'built_in', begin: '@__' + e.IDENT_RE },
          { begin: '@' + e.IDENT_RE },
          { begin: e.IDENT_RE + '\\\\' + e.IDENT_RE }
        ];
      r.contains = a;
      var i = e.inherit(e.TITLE_MODE, { begin: n }),
        o = {
          className: 'params',
          begin: '\\([^\\(]',
          returnBegin: !0,
          contains: [
            {
              begin: /\(/,
              end: /\)/,
              keywords: t,
              contains: ['self'].concat(a)
            }
          ]
        };
      return {
        aliases: ['moon'],
        keywords: t,
        illegal: /\/\*/,
        contains: a.concat([
          e.COMMENT('--', '$'),
          {
            className: 'function',
            begin: '^\\s*' + n + '\\s*=\\s*(\\(.*\\))?\\s*\\B[-=]>',
            end: '[-=]>',
            returnBegin: !0,
            contains: [i, o]
          },
          {
            begin: /[\(,:=]\s*/,
            relevance: 0,
            contains: [
              {
                className: 'function',
                begin: '(\\(.*\\))?\\s*\\B[-=]>',
                end: '[-=]>',
                returnBegin: !0,
                contains: [o]
              }
            ]
          },
          {
            className: 'class',
            beginKeywords: 'class',
            end: '$',
            illegal: /[:="\[\]]/,
            contains: [
              {
                beginKeywords: 'extends',
                endsWithParent: !0,
                illegal: /[:="\[\]]/,
                contains: [i]
              },
              i
            ]
          },
          {
            className: 'name',
            begin: n + ':',
            end: ':',
            returnBegin: !0,
            returnEnd: !0,
            relevance: 0
          }
        ])
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        case_insensitive: !0,
        contains: [
          {
            beginKeywords:
              'build create index delete drop explain infer|10 insert merge prepare select update upsert|10',
            end: /;/,
            endsWithParent: !0,
            keywords: {
              keyword:
                'all alter analyze and any array as asc begin between binary boolean break bucket build by call case cast cluster collate collection commit connect continue correlate cover create database dataset datastore declare decrement delete derived desc describe distinct do drop each element else end every except exclude execute exists explain fetch first flatten for force from function grant group gsi having if ignore ilike in include increment index infer inline inner insert intersect into is join key keys keyspace known last left let letting like limit lsm map mapping matched materialized merge minus namespace nest not number object offset on option or order outer over parse partition password path pool prepare primary private privilege procedure public raw realm reduce rename return returning revoke right role rollback satisfies schema select self semi set show some start statistics string system then to transaction trigger truncate under union unique unknown unnest unset update upsert use user using validate value valued values via view when where while with within work xor',
              literal: 'true false null missing|5',
              built_in:
                'array_agg array_append array_concat array_contains array_count array_distinct array_ifnull array_length array_max array_min array_position array_prepend array_put array_range array_remove array_repeat array_replace array_reverse array_sort array_sum avg count max min sum greatest least ifmissing ifmissingornull ifnull missingif nullif ifinf ifnan ifnanorinf naninf neginfif posinfif clock_millis clock_str date_add_millis date_add_str date_diff_millis date_diff_str date_part_millis date_part_str date_trunc_millis date_trunc_str duration_to_str millis str_to_millis millis_to_str millis_to_utc millis_to_zone_name now_millis now_str str_to_duration str_to_utc str_to_zone_name decode_json encode_json encoded_size poly_length base64 base64_encode base64_decode meta uuid abs acos asin atan atan2 ceil cos degrees e exp ln log floor pi power radians random round sign sin sqrt tan trunc object_length object_names object_pairs object_inner_pairs object_values object_inner_values object_add object_put object_remove object_unwrap regexp_contains regexp_like regexp_position regexp_replace contains initcap length lower ltrim position repeat replace rtrim split substr title trim upper isarray isatom isboolean isnumber isobject isstring type toarray toatom toboolean tonumber toobject tostring'
            },
            contains: [
              {
                className: 'string',
                begin: "'",
                end: "'",
                contains: [e.BACKSLASH_ESCAPE],
                relevance: 0
              },
              {
                className: 'string',
                begin: '"',
                end: '"',
                contains: [e.BACKSLASH_ESCAPE],
                relevance: 0
              },
              {
                className: 'symbol',
                begin: '`',
                end: '`',
                contains: [e.BACKSLASH_ESCAPE],
                relevance: 2
              },
              e.C_NUMBER_MODE,
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          e.C_BLOCK_COMMENT_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          className: 'variable',
          variants: [
            { begin: /\$\d+/ },
            { begin: /\$\{/, end: /}/ },
            { begin: '[\\$\\@]' + e.UNDERSCORE_IDENT_RE }
          ]
        },
        n = {
          endsWithParent: !0,
          lexemes: '[a-z/_]+',
          keywords: {
            literal:
              'on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll'
          },
          relevance: 0,
          illegal: '=>',
          contains: [
            e.HASH_COMMENT_MODE,
            {
              className: 'string',
              contains: [e.BACKSLASH_ESCAPE, t],
              variants: [{ begin: /"/, end: /"/ }, { begin: /'/, end: /'/ }]
            },
            {
              begin: '([a-z]+):/',
              end: '\\s',
              endsWithParent: !0,
              excludeEnd: !0,
              contains: [t]
            },
            {
              className: 'regexp',
              contains: [e.BACKSLASH_ESCAPE, t],
              variants: [
                { begin: '\\s\\^', end: '\\s|{|;', returnEnd: !0 },
                { begin: '~\\*?\\s+', end: '\\s|{|;', returnEnd: !0 },
                { begin: '\\*(\\.[a-z\\-]+)+' },
                { begin: '([a-z\\-]+\\.)+\\*' }
              ]
            },
            {
              className: 'number',
              begin:
                '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
            },
            {
              className: 'number',
              begin: '\\b\\d+[kKmMgGdshdwy]*\\b',
              relevance: 0
            },
            t
          ]
        };
      return {
        aliases: ['nginxconf'],
        contains: [
          e.HASH_COMMENT_MODE,
          {
            begin: e.UNDERSCORE_IDENT_RE + '\\s+{',
            returnBegin: !0,
            end: '{',
            contains: [{ className: 'section', begin: e.UNDERSCORE_IDENT_RE }],
            relevance: 0
          },
          {
            begin: e.UNDERSCORE_IDENT_RE + '\\s',
            end: ';|{',
            returnBegin: !0,
            contains: [
              {
                className: 'attribute',
                begin: e.UNDERSCORE_IDENT_RE,
                starts: n
              }
            ],
            relevance: 0
          }
        ],
        illegal: '[^\\s\\}]'
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['nim'],
        keywords: {
          keyword:
            'addr and as asm bind block break case cast const continue converter discard distinct div do elif else end enum except export finally for from generic if import in include interface is isnot iterator let macro method mixin mod nil not notin object of or out proc ptr raise ref return shl shr static template try tuple type using var when while with without xor yield',
          literal: 'shared guarded stdin stdout stderr result true false',
          built_in:
            'int int8 int16 int32 int64 uint uint8 uint16 uint32 uint64 float float32 float64 bool char string cstring pointer expr stmt void auto any range array openarray varargs seq set clong culong cchar cschar cshort cint csize clonglong cfloat cdouble clongdouble cuchar cushort cuint culonglong cstringarray semistatic'
        },
        contains: [
          { className: 'meta', begin: /{\./, end: /\.}/, relevance: 10 },
          {
            className: 'string',
            begin: /[a-zA-Z]\w*"/,
            end: /"/,
            contains: [{ begin: /""/ }]
          },
          { className: 'string', begin: /([a-zA-Z]\w*)?"""/, end: /"""/ },
          e.QUOTE_STRING_MODE,
          { className: 'type', begin: /\b[A-Z]\w+\b/, relevance: 0 },
          {
            className: 'number',
            relevance: 0,
            variants: [
              {
                begin: /\b(0[xX][0-9a-fA-F][_0-9a-fA-F]*)('?[iIuU](8|16|32|64))?/
              },
              { begin: /\b(0o[0-7][_0-7]*)('?[iIuUfF](8|16|32|64))?/ },
              { begin: /\b(0(b|B)[01][_01]*)('?[iIuUfF](8|16|32|64))?/ },
              { begin: /\b(\d[_\d]*)('?[iIuUfF](8|16|32|64))?/ }
            ]
          },
          e.HASH_COMMENT_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          keyword: 'rec with let in inherit assert if else then',
          literal: 'true false or and null',
          built_in:
            'import abort baseNameOf dirOf isNull builtins map removeAttrs throw toString derivation'
        },
        n = { className: 'subst', begin: /\$\{/, end: /}/, keywords: t },
        r = {
          className: 'string',
          contains: [n],
          variants: [{ begin: "''", end: "''" }, { begin: '"', end: '"' }]
        },
        a = [
          e.NUMBER_MODE,
          e.HASH_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          r,
          {
            begin: /[a-zA-Z0-9-_]+(\s*=)/,
            returnBegin: !0,
            relevance: 0,
            contains: [{ className: 'attr', begin: /\S+/ }]
          }
        ];
      return (n.contains = a), { aliases: ['nixos'], keywords: t, contains: a };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = { className: 'variable', begin: /\$+{[\w\.:-]+}/ },
        n = { className: 'variable', begin: /\$+\w+/, illegal: /\(\){}/ },
        r = { className: 'variable', begin: /\$+\([\w\^\.:-]+\)/ },
        a = {
          className: 'string',
          variants: [
            { begin: '"', end: '"' },
            { begin: "'", end: "'" },
            { begin: '`', end: '`' }
          ],
          illegal: /\n/,
          contains: [
            { className: 'subst', begin: /\$(\\[nrt]|\$)/ },
            {
              className: 'variable',
              begin: /\$(ADMINTOOLS|APPDATA|CDBURN_AREA|CMDLINE|COMMONFILES32|COMMONFILES64|COMMONFILES|COOKIES|DESKTOP|DOCUMENTS|EXEDIR|EXEFILE|EXEPATH|FAVORITES|FONTS|HISTORY|HWNDPARENT|INSTDIR|INTERNET_CACHE|LANGUAGE|LOCALAPPDATA|MUSIC|NETHOOD|OUTDIR|PICTURES|PLUGINSDIR|PRINTHOOD|PROFILE|PROGRAMFILES32|PROGRAMFILES64|PROGRAMFILES|QUICKLAUNCH|RECENT|RESOURCES_LOCALIZED|RESOURCES|SENDTO|SMPROGRAMS|SMSTARTUP|STARTMENU|SYSDIR|TEMP|TEMPLATES|VIDEOS|WINDIR)/
            },
            t,
            n,
            r
          ]
        };
      return {
        case_insensitive: !1,
        keywords: {
          keyword:
            'Abort AddBrandingImage AddSize AllowRootDirInstall AllowSkipFiles AutoCloseWindow BGFont BGGradient BrandingText BringToFront Call CallInstDLL Caption ChangeUI CheckBitmap ClearErrors CompletedText ComponentText CopyFiles CRCCheck CreateDirectory CreateFont CreateShortCut Delete DeleteINISec DeleteINIStr DeleteRegKey DeleteRegValue DetailPrint DetailsButtonText DirText DirVar DirVerify EnableWindow EnumRegKey EnumRegValue Exch Exec ExecShell ExecWait ExpandEnvStrings File FileBufSize FileClose FileErrorText FileOpen FileRead FileReadByte FileReadUTF16LE FileReadWord FileSeek FileWrite FileWriteByte FileWriteUTF16LE FileWriteWord FindClose FindFirst FindNext FindWindow FlushINI FunctionEnd GetCurInstType GetCurrentAddress GetDlgItem GetDLLVersion GetDLLVersionLocal GetErrorLevel GetFileTime GetFileTimeLocal GetFullPathName GetFunctionAddress GetInstDirError GetLabelAddress GetTempFileName Goto HideWindow Icon IfAbort IfErrors IfFileExists IfRebootFlag IfSilent InitPluginsDir InstallButtonText InstallColors InstallDir InstallDirRegKey InstProgressFlags InstType InstTypeGetText InstTypeSetText IntCmp IntCmpU IntFmt IntOp IsWindow LangString LicenseBkColor LicenseData LicenseForceSelection LicenseLangString LicenseText LoadLanguageFile LockWindow LogSet LogText ManifestDPIAware ManifestSupportedOS MessageBox MiscButtonText Name Nop OutFile Page PageCallbacks PageExEnd Pop Push Quit ReadEnvStr ReadINIStr ReadRegDWORD ReadRegStr Reboot RegDLL Rename RequestExecutionLevel ReserveFile Return RMDir SearchPath SectionEnd SectionGetFlags SectionGetInstTypes SectionGetSize SectionGetText SectionGroupEnd SectionIn SectionSetFlags SectionSetInstTypes SectionSetSize SectionSetText SendMessage SetAutoClose SetBrandingImage SetCompress SetCompressor SetCompressorDictSize SetCtlColors SetCurInstType SetDatablockOptimize SetDateSave SetDetailsPrint SetDetailsView SetErrorLevel SetErrors SetFileAttributes SetFont SetOutPath SetOverwrite SetRebootFlag SetRegView SetShellVarContext SetSilent ShowInstDetails ShowUninstDetails ShowWindow SilentInstall SilentUnInstall Sleep SpaceTexts StrCmp StrCmpS StrCpy StrLen SubCaption Unicode UninstallButtonText UninstallCaption UninstallIcon UninstallSubCaption UninstallText UninstPage UnRegDLL Var VIAddVersionKey VIFileVersion VIProductVersion WindowIcon WriteINIStr WriteRegBin WriteRegDWORD WriteRegExpandStr WriteRegStr WriteUninstaller XPStyle',
          literal:
            'admin all auto both bottom bzip2 colored components current custom directory false force hide highest ifdiff ifnewer instfiles lastused leave left license listonly lzma nevershow none normal notset off on open print right show silent silentlog smooth textonly top true try un.components un.custom un.directory un.instfiles un.license uninstConfirm user Win10 Win7 Win8 WinVista zlib'
        },
        contains: [
          e.HASH_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.COMMENT(';', '$', { relevance: 0 }),
          {
            className: 'function',
            beginKeywords: 'Function PageEx Section SectionGroup',
            end: '$'
          },
          a,
          {
            className: 'keyword',
            begin: /\!(addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversionsystem|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|searchparse|searchreplace|tempfile|undef|verbose|warning)/
          },
          t,
          n,
          r,
          {
            className: 'params',
            begin:
              '(ARCHIVE|FILE_ATTRIBUTE_ARCHIVE|FILE_ATTRIBUTE_NORMAL|FILE_ATTRIBUTE_OFFLINE|FILE_ATTRIBUTE_READONLY|FILE_ATTRIBUTE_SYSTEM|FILE_ATTRIBUTE_TEMPORARY|HKCR|HKCU|HKDD|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_DYN_DATA|HKEY_LOCAL_MACHINE|HKEY_PERFORMANCE_DATA|HKEY_USERS|HKLM|HKPD|HKU|IDABORT|IDCANCEL|IDIGNORE|IDNO|IDOK|IDRETRY|IDYES|MB_ABORTRETRYIGNORE|MB_DEFBUTTON1|MB_DEFBUTTON2|MB_DEFBUTTON3|MB_DEFBUTTON4|MB_ICONEXCLAMATION|MB_ICONINFORMATION|MB_ICONQUESTION|MB_ICONSTOP|MB_OK|MB_OKCANCEL|MB_RETRYCANCEL|MB_RIGHT|MB_RTLREADING|MB_SETFOREGROUND|MB_TOPMOST|MB_USERICON|MB_YESNO|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)'
          },
          { className: 'class', begin: /\w+\:\:\w+/ },
          e.NUMBER_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = /[a-zA-Z@][a-zA-Z0-9_]*/,
        n = '@interface @class @protocol @implementation';
      return {
        aliases: ['mm', 'objc', 'obj-c'],
        keywords: {
          keyword:
            'int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN',
          literal: 'false true FALSE TRUE nil YES NO NULL',
          built_in:
            'BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once'
        },
        lexemes: t,
        illegal: '</',
        contains: [
          {
            className: 'built_in',
            begin:
              '\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+'
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.C_NUMBER_MODE,
          e.QUOTE_STRING_MODE,
          {
            className: 'string',
            variants: [
              {
                begin: '@"',
                end: '"',
                illegal: '\\n',
                contains: [e.BACKSLASH_ESCAPE]
              },
              { begin: "'", end: "[^\\\\]'", illegal: "[^\\\\][^']" }
            ]
          },
          {
            className: 'meta',
            begin: '#',
            end: '$',
            contains: [
              {
                className: 'meta-string',
                variants: [{ begin: '"', end: '"' }, { begin: '<', end: '>' }]
              }
            ]
          },
          {
            className: 'class',
            begin: '(' + n.split(' ').join('|') + ')\\b',
            end: '({|$)',
            excludeEnd: !0,
            keywords: n,
            lexemes: t,
            contains: [e.UNDERSCORE_TITLE_MODE]
          },
          { begin: '\\.' + e.UNDERSCORE_IDENT_RE, relevance: 0 }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['ml'],
        keywords: {
          keyword:
            'and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value',
          built_in:
            'array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref',
          literal: 'true false'
        },
        illegal: /\/\/|>>/,
        lexemes: '[a-z_]\\w*!?',
        contains: [
          {
            className: 'literal',
            begin: '\\[(\\|\\|)?\\]|\\(\\)',
            relevance: 0
          },
          e.COMMENT('\\(\\*', '\\*\\)', { contains: ['self'] }),
          { className: 'symbol', begin: "'[A-Za-z_](?!')[\\w']*" },
          { className: 'type', begin: "`[A-Z][\\w']*" },
          { className: 'type', begin: "\\b[A-Z][\\w']*", relevance: 0 },
          { begin: "[a-z_]\\w*'[\\w']*", relevance: 0 },
          e.inherit(e.APOS_STRING_MODE, { className: 'string', relevance: 0 }),
          e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
          {
            className: 'number',
            begin:
              '\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)',
            relevance: 0
          },
          { begin: /[-=]>/ }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = { className: 'keyword', begin: '\\$(f[asn]|t|vp[rtd]|children)' },
        n = {
          className: 'number',
          begin: '\\b\\d+(\\.\\d+)?(e-?\\d+)?',
          relevance: 0
        },
        r = e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
        a = {
          className: 'function',
          beginKeywords: 'module function',
          end: '\\=|\\{',
          contains: [
            {
              className: 'params',
              begin: '\\(',
              end: '\\)',
              contains: [
                'self',
                n,
                r,
                t,
                { className: 'literal', begin: 'false|true|PI|undef' }
              ]
            },
            e.UNDERSCORE_TITLE_MODE
          ]
        };
      return {
        aliases: ['scad'],
        keywords: {
          keyword:
            'function module include use for intersection_for if else \\%',
          literal: 'false true PI undef',
          built_in:
            'circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign'
        },
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          n,
          {
            className: 'meta',
            keywords: { 'meta-keyword': 'include use' },
            begin: 'include|use <',
            end: '>'
          },
          r,
          t,
          { begin: '[*!#%]', relevance: 0 },
          a
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t =
          'abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained',
        n = e.COMMENT('{', '}', { relevance: 0 }),
        r = e.COMMENT('\\(\\*', '\\*\\)', { relevance: 10 }),
        a = {
          className: 'string',
          begin: "'",
          end: "'",
          contains: [{ begin: "''" }]
        },
        i = { className: 'string', begin: '(#\\d+)+' },
        o = {
          className: 'function',
          beginKeywords: 'function constructor destructor procedure method',
          end: '[:;]',
          keywords:
            'function constructor|10 destructor|10 procedure|10 method|10',
          contains: [
            e.TITLE_MODE,
            {
              className: 'params',
              begin: '\\(',
              end: '\\)',
              keywords: t,
              contains: [a, i]
            },
            n,
            r
          ]
        };
      return {
        case_insensitive: !0,
        lexemes: /\.?\w+/,
        keywords: t,
        illegal: '("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',
        contains: [
          n,
          r,
          e.C_LINE_COMMENT_MODE,
          a,
          i,
          e.NUMBER_MODE,
          o,
          {
            className: 'class',
            begin: '=\\bclass\\b',
            end: 'end;',
            keywords: t,
            contains: [a, i, n, r, e.C_LINE_COMMENT_MODE, o]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = e.COMMENT('{', '}', { contains: ['self'] });
      return {
        subLanguage: 'xml',
        relevance: 0,
        contains: [
          e.COMMENT('^#', '$'),
          e.COMMENT('\\^rem{', '}', { relevance: 10, contains: [t] }),
          {
            className: 'meta',
            begin: '^@(?:BASE|USE|CLASS|OPTIONS)$',
            relevance: 10
          },
          {
            className: 'title',
            begin: '@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$'
          },
          { className: 'variable', begin: '\\$\\{?[\\w\\-\\.\\:]+\\}?' },
          { className: 'keyword', begin: '\\^[\\w\\-\\.\\:]+' },
          { className: 'number', begin: '\\^#[0-9a-fA-F]+' },
          e.C_NUMBER_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['pf.conf'],
        lexemes: /[a-z0-9_<>-]+/,
        keywords: {
          built_in: 'block match pass load anchor|5 antispoof|10 set table',
          keyword:
            'in out log quick on rdomain inet inet6 proto from port os to routeallow-opts divert-packet divert-reply divert-to flags group icmp-typeicmp6-type label once probability recieved-on rtable prio queuetos tag tagged user keep fragment for os dropaf-to|10 binat-to|10 nat-to|10 rdr-to|10 bitmask least-stats random round-robinsource-hash static-portdup-to reply-to route-toparent bandwidth default min max qlimitblock-policy debug fingerprints hostid limit loginterface optimizationreassemble ruleset-optimization basic none profile skip state-defaultsstate-policy timeoutconst counters persistno modulate synproxy state|5 floating if-bound no-sync pflow|10 sloppysource-track global rule max-src-nodes max-src-states max-src-connmax-src-conn-rate overload flushscrub|5 max-mss min-ttl no-df|10 random-id',
          literal: 'all any no-route self urpf-failed egress|5 unknown'
        },
        contains: [
          e.HASH_COMMENT_MODE,
          e.NUMBER_MODE,
          e.QUOTE_STRING_MODE,
          { className: 'variable', begin: /\$[\w\d#@][\w\d_]*/ },
          { className: 'variable', begin: /<(?!\/)/, end: />/ }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = { begin: '\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*' },
        n = { className: 'meta', begin: /<\?(php)?|\?>/ },
        r = {
          className: 'string',
          contains: [e.BACKSLASH_ESCAPE, n],
          variants: [
            { begin: 'b"', end: '"' },
            { begin: "b'", end: "'" },
            e.inherit(e.APOS_STRING_MODE, { illegal: null }),
            e.inherit(e.QUOTE_STRING_MODE, { illegal: null })
          ]
        },
        a = { variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE] };
      return {
        aliases: ['php3', 'php4', 'php5', 'php6'],
        case_insensitive: !0,
        keywords:
          'and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally',
        contains: [
          e.HASH_COMMENT_MODE,
          e.COMMENT('//', '$', { contains: [n] }),
          e.COMMENT('/\\*', '\\*/', {
            contains: [{ className: 'doctag', begin: '@[A-Za-z]+' }]
          }),
          e.COMMENT('__halt_compiler.+?;', !1, {
            endsWithParent: !0,
            keywords: '__halt_compiler',
            lexemes: e.UNDERSCORE_IDENT_RE
          }),
          {
            className: 'string',
            begin: /<<<['"]?\w+['"]?$/,
            end: /^\w+;?$/,
            contains: [
              e.BACKSLASH_ESCAPE,
              {
                className: 'subst',
                variants: [{ begin: /\$\w+/ }, { begin: /\{\$/, end: /\}/ }]
              }
            ]
          },
          n,
          { className: 'keyword', begin: /\$this\b/ },
          t,
          { begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ },
          {
            className: 'function',
            beginKeywords: 'function',
            end: /[;{]/,
            excludeEnd: !0,
            illegal: '\\$|\\[|%',
            contains: [
              e.UNDERSCORE_TITLE_MODE,
              {
                className: 'params',
                begin: '\\(',
                end: '\\)',
                contains: ['self', t, e.C_BLOCK_COMMENT_MODE, r, a]
              }
            ]
          },
          {
            className: 'class',
            beginKeywords: 'class interface',
            end: '{',
            excludeEnd: !0,
            illegal: /[:\(\$"]/,
            contains: [
              { beginKeywords: 'extends implements' },
              e.UNDERSCORE_TITLE_MODE
            ]
          },
          {
            beginKeywords: 'namespace',
            end: ';',
            illegal: /[\.']/,
            contains: [e.UNDERSCORE_TITLE_MODE]
          },
          {
            beginKeywords: 'use',
            end: ';',
            contains: [e.UNDERSCORE_TITLE_MODE]
          },
          { begin: '=>' },
          r,
          a
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          className: 'string',
          begin: '"',
          end: '"',
          contains: [e.BACKSLASH_ESCAPE]
        },
        n = {
          className: 'string',
          begin: "'",
          end: "'",
          contains: [e.BACKSLASH_ESCAPE],
          relevance: 0
        },
        r = { className: 'type', begin: '\\b_?[A-Z][\\w]*', relevance: 0 },
        a = { begin: e.IDENT_RE + "'", relevance: 0 };
      return {
        keywords: {
          keyword:
            'actor addressof and as be break class compile_error compile_intrinsicconsume continue delegate digestof do else elseif embed end errorfor fun if ifdef in interface is isnt lambda let match new not objector primitive recover repeat return struct then trait try type until use var where while with xor',
          meta: 'iso val tag trn box ref',
          literal: 'this false true'
        },
        contains: [
          {
            className: 'class',
            beginKeywords: 'class actor',
            end: '$',
            contains: [e.TITLE_MODE, e.C_LINE_COMMENT_MODE]
          },
          {
            className: 'function',
            beginKeywords: 'new fun',
            end: '=>',
            contains: [
              e.TITLE_MODE,
              {
                begin: /\(/,
                end: /\)/,
                contains: [r, a, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE]
              },
              { begin: /:/, endsWithParent: !0, contains: [r] },
              e.C_LINE_COMMENT_MODE
            ]
          },
          r,
          { className: 'string', begin: '"""', end: '"""', relevance: 10 },
          t,
          n,
          a,
          e.C_NUMBER_MODE,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = { begin: '`[\\s\\S]', relevance: 0 },
        n = {
          className: 'variable',
          variants: [{ begin: /\$[\w\d][\w\d_:]*/ }]
        },
        r = {
          className: 'string',
          variants: [{ begin: /"/, end: /"/ }, { begin: /@"/, end: /^"@/ }],
          contains: [
            t,
            n,
            { className: 'variable', begin: /\$[A-z]/, end: /[^A-z]/ }
          ]
        },
        a = e.inherit(e.COMMENT(null, null), {
          variants: [{ begin: /#/, end: /$/ }, { begin: /<#/, end: /#>/ }],
          contains: [
            {
              className: 'doctag',
              variants: [
                {
                  begin: /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/
                },
                {
                  begin: /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/
                }
              ]
            }
          ]
        });
      return {
        aliases: ['ps'],
        lexemes: /-?[A-z\.\-]+/,
        case_insensitive: !0,
        keywords: {
          keyword:
            'if else foreach return function do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch',
          built_in:
            'Add-Computer Add-Content Add-History Add-JobTrigger Add-Member Add-PSSnapin Add-Type Checkpoint-Computer Clear-Content Clear-EventLog Clear-History Clear-Host Clear-Item Clear-ItemProperty Clear-Variable Compare-Object Complete-Transaction Connect-PSSession Connect-WSMan Convert-Path ConvertFrom-Csv ConvertFrom-Json ConvertFrom-SecureString ConvertFrom-StringData ConvertTo-Csv ConvertTo-Html ConvertTo-Json ConvertTo-SecureString ConvertTo-Xml Copy-Item Copy-ItemProperty Debug-Process Disable-ComputerRestore Disable-JobTrigger Disable-PSBreakpoint Disable-PSRemoting Disable-PSSessionConfiguration Disable-WSManCredSSP Disconnect-PSSession Disconnect-WSMan Disable-ScheduledJob Enable-ComputerRestore Enable-JobTrigger Enable-PSBreakpoint Enable-PSRemoting Enable-PSSessionConfiguration Enable-ScheduledJob Enable-WSManCredSSP Enter-PSSession Exit-PSSession Export-Alias Export-Clixml Export-Console Export-Counter Export-Csv Export-FormatData Export-ModuleMember Export-PSSession ForEach-Object Format-Custom Format-List Format-Table Format-Wide Get-Acl Get-Alias Get-AuthenticodeSignature Get-ChildItem Get-Command Get-ComputerRestorePoint Get-Content Get-ControlPanelItem Get-Counter Get-Credential Get-Culture Get-Date Get-Event Get-EventLog Get-EventSubscriber Get-ExecutionPolicy Get-FormatData Get-Host Get-HotFix Get-Help Get-History Get-IseSnippet Get-Item Get-ItemProperty Get-Job Get-JobTrigger Get-Location Get-Member Get-Module Get-PfxCertificate Get-Process Get-PSBreakpoint Get-PSCallStack Get-PSDrive Get-PSProvider Get-PSSession Get-PSSessionConfiguration Get-PSSnapin Get-Random Get-ScheduledJob Get-ScheduledJobOption Get-Service Get-TraceSource Get-Transaction Get-TypeData Get-UICulture Get-Unique Get-Variable Get-Verb Get-WinEvent Get-WmiObject Get-WSManCredSSP Get-WSManInstance Group-Object Import-Alias Import-Clixml Import-Counter Import-Csv Import-IseSnippet Import-LocalizedData Import-PSSession Import-Module Invoke-AsWorkflow Invoke-Command Invoke-Expression Invoke-History Invoke-Item Invoke-RestMethod Invoke-WebRequest Invoke-WmiMethod Invoke-WSManAction Join-Path Limit-EventLog Measure-Command Measure-Object Move-Item Move-ItemProperty New-Alias New-Event New-EventLog New-IseSnippet New-Item New-ItemProperty New-JobTrigger New-Object New-Module New-ModuleManifest New-PSDrive New-PSSession New-PSSessionConfigurationFile New-PSSessionOption New-PSTransportOption New-PSWorkflowExecutionOption New-PSWorkflowSession New-ScheduledJobOption New-Service New-TimeSpan New-Variable New-WebServiceProxy New-WinEvent New-WSManInstance New-WSManSessionOption Out-Default Out-File Out-GridView Out-Host Out-Null Out-Printer Out-String Pop-Location Push-Location Read-Host Receive-Job Register-EngineEvent Register-ObjectEvent Register-PSSessionConfiguration Register-ScheduledJob Register-WmiEvent Remove-Computer Remove-Event Remove-EventLog Remove-Item Remove-ItemProperty Remove-Job Remove-JobTrigger Remove-Module Remove-PSBreakpoint Remove-PSDrive Remove-PSSession Remove-PSSnapin Remove-TypeData Remove-Variable Remove-WmiObject Remove-WSManInstance Rename-Computer Rename-Item Rename-ItemProperty Reset-ComputerMachinePassword Resolve-Path Restart-Computer Restart-Service Restore-Computer Resume-Job Resume-Service Save-Help Select-Object Select-String Select-Xml Send-MailMessage Set-Acl Set-Alias Set-AuthenticodeSignature Set-Content Set-Date Set-ExecutionPolicy Set-Item Set-ItemProperty Set-JobTrigger Set-Location Set-PSBreakpoint Set-PSDebug Set-PSSessionConfiguration Set-ScheduledJob Set-ScheduledJobOption Set-Service Set-StrictMode Set-TraceSource Set-Variable Set-WmiInstance Set-WSManInstance Set-WSManQuickConfig Show-Command Show-ControlPanelItem Show-EventLog Sort-Object Split-Path Start-Job Start-Process Start-Service Start-Sleep Start-Transaction Start-Transcript Stop-Computer Stop-Job Stop-Process Stop-Service Stop-Transcript Suspend-Job Suspend-Service Tee-Object Test-ComputerSecureChannel Test-Connection Test-ModuleManifest Test-Path Test-PSSessionConfigurationFile Trace-Command Unblock-File Undo-Transaction Unregister-Event Unregister-PSSessionConfiguration Unregister-ScheduledJob Update-FormatData Update-Help Update-List Update-TypeData Use-Transaction Wait-Event Wait-Job Wait-Process Where-Object Write-Debug Write-Error Write-EventLog Write-Host Write-Output Write-Progress Write-Verbose Write-Warning Add-MDTPersistentDrive Disable-MDTMonitorService Enable-MDTMonitorService Get-MDTDeploymentShareStatistics Get-MDTMonitorData Get-MDTOperatingSystemCatalog Get-MDTPersistentDrive Import-MDTApplication Import-MDTDriver Import-MDTOperatingSystem Import-MDTPackage Import-MDTTaskSequence New-MDTDatabase Remove-MDTMonitorData Remove-MDTPersistentDrive Restore-MDTPersistentDrive Set-MDTMonitorData Test-MDTDeploymentShare Test-MDTMonitorData Update-MDTDatabaseSchema Update-MDTDeploymentShare Update-MDTLinkedDS Update-MDTMedia Update-MDTMedia Add-VamtProductKey Export-VamtData Find-VamtManagedMachine Get-VamtConfirmationId Get-VamtProduct Get-VamtProductKey Import-VamtData Initialize-VamtData Install-VamtConfirmationId Install-VamtProductActivation Install-VamtProductKey Update-VamtProduct',
          nomarkup:
            '-ne -eq -lt -gt -ge -le -not -like -notlike -match -notmatch -contains -notcontains -in -notin -replace'
        },
        contains: [
          t,
          e.NUMBER_MODE,
          r,
          {
            className: 'string',
            variants: [{ begin: /'/, end: /'/ }, { begin: /@'/, end: /^'@/ }]
          },
          { className: 'literal', begin: /\$(null|true|false)\b/ },
          n,
          a
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        keywords: {
          keyword:
            'BufferedReader PVector PFont PImage PGraphics HashMap boolean byte char color double float int long String Array FloatDict FloatList IntDict IntList JSONArray JSONObject Object StringDict StringList Table TableRow XML false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private',
          literal: 'P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI',
          title: 'setup draw',
          built_in:
            'displayHeight displayWidth mouseY mouseX mousePressed pmouseX pmouseY key keyCode pixels focused frameCount frameRate height width size createGraphics beginDraw createShape loadShape PShape arc ellipse line point quad rect triangle bezier bezierDetail bezierPoint bezierTangent curve curveDetail curvePoint curveTangent curveTightness shape shapeMode beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight mouseClicked mouseDragged mouseMoved mousePressed mouseReleased mouseWheel keyPressed keyPressedkeyReleased keyTyped print println save saveFrame day hour millis minute month second year background clear colorMode fill noFill noStroke stroke alpha blue brightness color green hue lerpColor red saturation modelX modelY modelZ screenX screenY screenZ ambient emissive shininess specular add createImage beginCamera camera endCamera frustum ortho perspective printCamera printProjection cursor frameRate noCursor exit loop noLoop popStyle pushStyle redraw binary boolean byte char float hex int str unbinary unhex join match matchAll nf nfc nfp nfs split splitTokens trim append arrayCopy concat expand reverse shorten sort splice subset box sphere sphereDetail createInput createReader loadBytes loadJSONArray loadJSONObject loadStrings loadTable loadXML open parseXML saveTable selectFolder selectInput beginRaw beginRecord createOutput createWriter endRaw endRecord PrintWritersaveBytes saveJSONArray saveJSONObject saveStream saveStrings saveXML selectOutput popMatrix printMatrix pushMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate ambientLight directionalLight lightFalloff lights lightSpecular noLights normal pointLight spotLight image imageMode loadImage noTint requestImage tint texture textureMode textureWrap blend copy filter get loadPixels set updatePixels blendMode loadShader PShaderresetShader shader createFont loadFont text textFont textAlign textLeading textMode textSize textWidth textAscent textDescent abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt acos asin atan atan2 cos degrees radians sin tan noise noiseDetail noiseSeed random randomGaussian randomSeed'
        },
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          e.C_NUMBER_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        contains: [
          e.C_NUMBER_MODE,
          {
            begin: '[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}',
            end: ':',
            excludeEnd: !0
          },
          {
            begin: '(ncalls|tottime|cumtime)',
            end: '$',
            keywords: 'ncalls tottime|10 cumtime|10 filename',
            relevance: 10
          },
          {
            begin: 'function calls',
            end: '$',
            contains: [e.C_NUMBER_MODE],
            relevance: 10
          },
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          {
            className: 'string',
            begin: '\\(',
            end: '\\)$',
            excludeBegin: !0,
            excludeEnd: !0,
            relevance: 0
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = { begin: /\(/, end: /\)/, relevance: 0 },
        n = { begin: /\[/, end: /\]/ },
        r = {
          className: 'comment',
          begin: /%/,
          end: /$/,
          contains: [e.PHRASAL_WORDS_MODE]
        },
        a = {
          className: 'string',
          begin: /`/,
          end: /`/,
          contains: [e.BACKSLASH_ESCAPE]
        },
        i = [
          { begin: /[a-z][A-Za-z0-9_]*/, relevance: 0 },
          {
            className: 'symbol',
            variants: [
              { begin: /[A-Z][a-zA-Z0-9_]*/ },
              { begin: /_[A-Za-z0-9_]*/ }
            ],
            relevance: 0
          },
          t,
          { begin: /:-/ },
          n,
          r,
          e.C_BLOCK_COMMENT_MODE,
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          a,
          { className: 'string', begin: /0\'(\\\'|.)/ },
          { className: 'string', begin: /0\'\\s/ },
          e.C_NUMBER_MODE
        ];
      return (
        (t.contains = i),
        (n.contains = i),
        { contains: i.concat([{ begin: /\.$/ }]) }
      );
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        keywords: {
          keyword: 'package import option optional required repeated group',
          built_in:
            'double float int32 int64 uint32 uint64 sint32 sint64 fixed32 fixed64 sfixed32 sfixed64 bool string bytes',
          literal: 'true false'
        },
        contains: [
          e.QUOTE_STRING_MODE,
          e.NUMBER_MODE,
          e.C_LINE_COMMENT_MODE,
          {
            className: 'class',
            beginKeywords: 'message enum service',
            end: /\{/,
            illegal: /\n/,
            contains: [
              e.inherit(e.TITLE_MODE, {
                starts: { endsWithParent: !0, excludeEnd: !0 }
              })
            ]
          },
          {
            className: 'function',
            beginKeywords: 'rpc',
            end: /;/,
            excludeEnd: !0,
            keywords: 'rpc returns'
          },
          { begin: /^\s*[A-Z_]+/, end: /\s*=/, excludeEnd: !0 }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = e.COMMENT('#', '$'),
        n = e.inherit(e.TITLE_MODE, { begin: '([A-Za-z_]|::)(\\w|::)*' }),
        r = { className: 'variable', begin: '\\$([A-Za-z_]|::)(\\w|::)*' },
        a = {
          className: 'string',
          contains: [e.BACKSLASH_ESCAPE, r],
          variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }]
        };
      return {
        aliases: ['pp'],
        contains: [
          t,
          r,
          a,
          {
            beginKeywords: 'class',
            end: '\\{|;',
            illegal: /=/,
            contains: [n, t]
          },
          {
            beginKeywords: 'define',
            end: /\{/,
            contains: [
              { className: 'section', begin: e.IDENT_RE, endsParent: !0 }
            ]
          },
          {
            begin: e.IDENT_RE + '\\s+\\{',
            returnBegin: !0,
            end: /\S/,
            contains: [
              { className: 'keyword', begin: e.IDENT_RE },
              {
                begin: /\{/,
                end: /\}/,
                keywords: {
                  keyword:
                    'and case default else elsif false if in import enherits node or true undef unless main settings $string ',
                  literal:
                    'alias audit before loglevel noop require subscribe tag owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check en_address ip_address realname command environment hour monute month monthday special target weekday creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey sslverify mounted',
                  built_in:
                    'architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version'
                },
                relevance: 0,
                contains: [
                  a,
                  t,
                  {
                    begin: '[a-zA-Z_]+\\s*=>',
                    returnBegin: !0,
                    end: '=>',
                    contains: [{ className: 'attr', begin: e.IDENT_RE }]
                  },
                  {
                    className: 'number',
                    begin:
                      '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
                    relevance: 0
                  },
                  r
                ]
              }
            ],
            relevance: 0
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['pb', 'pbi'],
        keywords:
          'And As Break CallDebugger Case CompilerCase CompilerDefault CompilerElse CompilerEndIf CompilerEndSelect CompilerError CompilerIf CompilerSelect Continue Data DataSection EndDataSection Debug DebugLevel Default Define Dim DisableASM DisableDebugger DisableExplicit Else ElseIf EnableASM EnableDebugger EnableExplicit End EndEnumeration EndIf EndImport EndInterface EndMacro EndProcedure EndSelect EndStructure EndStructureUnion EndWith Enumeration Extends FakeReturn For Next ForEach ForEver Global Gosub Goto If Import ImportC IncludeBinary IncludeFile IncludePath Interface Macro NewList Not Or ProcedureReturn Protected Prototype PrototypeC Read ReDim Repeat Until Restore Return Select Shared Static Step Structure StructureUnion Swap To Wend While With XIncludeFile XOr Procedure ProcedureC ProcedureCDLL ProcedureDLL Declare DeclareC DeclareCDLL DeclareDLL',
        contains: [
          e.COMMENT(';', '$', { relevance: 0 }),
          {
            className: 'function',
            begin: '\\b(Procedure|Declare)(C|CDLL|DLL)?\\b',
            end: '\\(',
            excludeEnd: !0,
            returnBegin: !0,
            contains: [
              {
                className: 'keyword',
                begin: '(Procedure|Declare)(C|CDLL|DLL)?',
                excludeEnd: !0
              },
              { className: 'type', begin: '\\.\\w*' },
              e.UNDERSCORE_TITLE_MODE
            ]
          },
          { className: 'string', begin: '(~)?"', end: '"', illegal: '\\n' },
          { className: 'symbol', begin: '#[a-zA-Z_]\\w*\\$?' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          keyword:
            'and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False',
          built_in: 'Ellipsis NotImplemented'
        },
        n = { className: 'meta', begin: /^(>>>|\.\.\.) / },
        r = {
          className: 'subst',
          begin: /\{/,
          end: /\}/,
          keywords: t,
          illegal: /#/
        },
        a = {
          className: 'string',
          contains: [e.BACKSLASH_ESCAPE],
          variants: [
            { begin: /(u|b)?r?'''/, end: /'''/, contains: [n], relevance: 10 },
            { begin: /(u|b)?r?"""/, end: /"""/, contains: [n], relevance: 10 },
            { begin: /(fr|rf|f)'''/, end: /'''/, contains: [n, r] },
            { begin: /(fr|rf|f)"""/, end: /"""/, contains: [n, r] },
            { begin: /(u|r|ur)'/, end: /'/, relevance: 10 },
            { begin: /(u|r|ur)"/, end: /"/, relevance: 10 },
            { begin: /(b|br)'/, end: /'/ },
            { begin: /(b|br)"/, end: /"/ },
            { begin: /(fr|rf|f)'/, end: /'/, contains: [r] },
            { begin: /(fr|rf|f)"/, end: /"/, contains: [r] },
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE
          ]
        },
        i = {
          className: 'number',
          relevance: 0,
          variants: [
            { begin: e.BINARY_NUMBER_RE + '[lLjJ]?' },
            { begin: '\\b(0o[0-7]+)[lLjJ]?' },
            { begin: e.C_NUMBER_RE + '[lLjJ]?' }
          ]
        },
        o = {
          className: 'params',
          begin: /\(/,
          end: /\)/,
          contains: ['self', n, i, a]
        };
      return (
        (r.contains = [a, i, n]),
        {
          aliases: ['py', 'gyp'],
          keywords: t,
          illegal: /(<\/|->|\?)|=>/,
          contains: [
            n,
            i,
            a,
            e.HASH_COMMENT_MODE,
            {
              variants: [
                { className: 'function', beginKeywords: 'def' },
                { className: 'class', beginKeywords: 'class' }
              ],
              end: /:/,
              illegal: /[${=;\n,]/,
              contains: [
                e.UNDERSCORE_TITLE_MODE,
                o,
                { begin: /->/, endsWithParent: !0, keywords: 'None' }
              ]
            },
            { className: 'meta', begin: /^[\t ]*@/, end: /$/ },
            { begin: /\b(print|exec)\(/ }
          ]
        }
      );
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['k', 'kdb'],
        keywords: {
          keyword: 'do while select delete by update from',
          literal: '0b 1b',
          built_in:
            'neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum',
          type:
            '`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid'
        },
        lexemes: /(`?)[A-Za-z0-9_]+\b/,
        contains: [e.C_LINE_COMMENT_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = '[a-zA-Z_][a-zA-Z0-9\\._]*',
        n = {
          className: 'attribute',
          begin: '\\bid\\s*:',
          starts: { className: 'string', end: t, returnEnd: !1 }
        },
        r = {
          begin: t + '\\s*:',
          returnBegin: !0,
          contains: [
            {
              className: 'attribute',
              begin: t,
              end: '\\s*:',
              excludeEnd: !0,
              relevance: 0
            }
          ],
          relevance: 0
        },
        a = {
          begin: t + '\\s*{',
          end: '{',
          returnBegin: !0,
          relevance: 0,
          contains: [e.inherit(e.TITLE_MODE, { begin: t })]
        };
      return {
        aliases: ['qt'],
        case_insensitive: !1,
        keywords: {
          keyword:
            'in of on if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await import',
          literal: 'true false null undefined NaN Infinity',
          built_in:
            'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Behavior bool color coordinate date double enumeration font geocircle georectangle geoshape int list matrix4x4 parent point quaternion real rect size string url variant vector2d vector3d vector4dPromise'
        },
        contains: [
          { className: 'meta', begin: /^\s*['"]use (strict|asm)['"]/ },
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          {
            className: 'string',
            begin: '`',
            end: '`',
            contains: [
              e.BACKSLASH_ESCAPE,
              { className: 'subst', begin: '\\$\\{', end: '\\}' }
            ]
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          {
            className: 'number',
            variants: [
              { begin: '\\b(0[bB][01]+)' },
              { begin: '\\b(0[oO][0-7]+)' },
              { begin: e.C_NUMBER_RE }
            ],
            relevance: 0
          },
          {
            begin: '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
            keywords: 'return throw case',
            contains: [
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              e.REGEXP_MODE,
              {
                begin: /</,
                end: />\s*[);\]]/,
                relevance: 0,
                subLanguage: 'xml'
              }
            ],
            relevance: 0
          },
          {
            className: 'keyword',
            begin: '\\bsignal\\b',
            starts: {
              className: 'string',
              end: '(\\(|:|=|;|,|//|/\\*|$)',
              returnEnd: !0
            }
          },
          {
            className: 'keyword',
            begin: '\\bproperty\\b',
            starts: {
              className: 'string',
              end: '(:|=|;|,|//|/\\*|$)',
              returnEnd: !0
            }
          },
          {
            className: 'function',
            beginKeywords: 'function',
            end: /\{/,
            excludeEnd: !0,
            contains: [
              e.inherit(e.TITLE_MODE, { begin: /[A-Za-z$_][0-9A-Za-z$_]*/ }),
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
              }
            ],
            illegal: /\[|%/
          },
          { begin: '\\.' + e.IDENT_RE, relevance: 0 },
          n,
          r,
          a
        ],
        illegal: /#/
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = '([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*';
      return {
        contains: [
          e.HASH_COMMENT_MODE,
          {
            begin: t,
            lexemes: t,
            keywords: {
              keyword:
                'function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...',
              literal:
                'NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10'
            },
            relevance: 0
          },
          {
            className: 'number',
            begin: '0[xX][0-9a-fA-F]+[Li]?\\b',
            relevance: 0
          },
          {
            className: 'number',
            begin: '\\d+(?:[eE][+\\-]?\\d*)?L\\b',
            relevance: 0
          },
          {
            className: 'number',
            begin: '\\d+\\.(?!\\d)(?:i\\b)?',
            relevance: 0
          },
          {
            className: 'number',
            begin: '\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b',
            relevance: 0
          },
          {
            className: 'number',
            begin: '\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b',
            relevance: 0
          },
          { begin: '`', end: '`', relevance: 0 },
          {
            className: 'string',
            contains: [e.BACKSLASH_ESCAPE],
            variants: [{ begin: '"', end: '"' }, { begin: "'", end: "'" }]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        keywords:
          'ArchiveRecord AreaLightSource Atmosphere Attribute AttributeBegin AttributeEnd Basis Begin Blobby Bound Clipping ClippingPlane Color ColorSamples ConcatTransform Cone CoordinateSystem CoordSysTransform CropWindow Curves Cylinder DepthOfField Detail DetailRange Disk Displacement Display End ErrorHandler Exposure Exterior Format FrameAspectRatio FrameBegin FrameEnd GeneralPolygon GeometricApproximation Geometry Hider Hyperboloid Identity Illuminate Imager Interior LightSource MakeCubeFaceEnvironment MakeLatLongEnvironment MakeShadow MakeTexture Matte MotionBegin MotionEnd NuPatch ObjectBegin ObjectEnd ObjectInstance Opacity Option Orientation Paraboloid Patch PatchMesh Perspective PixelFilter PixelSamples PixelVariance Points PointsGeneralPolygons PointsPolygons Polygon Procedural Projection Quantize ReadArchive RelativeDetail ReverseOrientation Rotate Scale ScreenWindow ShadingInterpolation ShadingRate Shutter Sides Skew SolidBegin SolidEnd Sphere SubdivisionMesh Surface TextureCoordinates Torus Transform TransformBegin TransformEnd TransformPoints Translate TrimCurve WorldBegin WorldEnd',
        illegal: '</',
        contains: [
          e.HASH_COMMENT_MODE,
          e.C_NUMBER_MODE,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = '[a-zA-Z-_][^\\n{]+\\{',
        n = {
          className: 'attribute',
          begin: /[a-zA-Z-_]+/,
          end: /\s*:/,
          excludeEnd: !0,
          starts: {
            end: ';',
            relevance: 0,
            contains: [
              { className: 'variable', begin: /\.[a-zA-Z-_]+/ },
              { className: 'keyword', begin: /\(optional\)/ }
            ]
          }
        };
      return {
        aliases: ['graph', 'instances'],
        case_insensitive: !0,
        keywords: 'import',
        contains: [
          {
            begin: '^facet ' + t,
            end: '}',
            keywords: 'facet',
            contains: [n, e.HASH_COMMENT_MODE]
          },
          {
            begin: '^\\s*instance of ' + t,
            end: '}',
            keywords:
              'name count channels instance-data instance-state instance of',
            illegal: /\S/,
            contains: ['self', n, e.HASH_COMMENT_MODE]
          },
          { begin: '^' + t, end: '}', contains: [n, e.HASH_COMMENT_MODE] },
          e.HASH_COMMENT_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t =
          'foreach do while for if from to step else on-error and or not in',
        n = 'true false yes no nothing nil null',
        r = {
          className: 'variable',
          variants: [{ begin: /\$[\w\d#@][\w\d_]*/ }, { begin: /\$\{(.*?)}/ }]
        },
        a = {
          className: 'string',
          begin: /"/,
          end: /"/,
          contains: [
            e.BACKSLASH_ESCAPE,
            r,
            {
              className: 'variable',
              begin: /\$\(/,
              end: /\)/,
              contains: [e.BACKSLASH_ESCAPE]
            }
          ]
        },
        i = { className: 'string', begin: /'/, end: /'/ };
      return {
        aliases: ['routeros', 'mikrotik'],
        case_insensitive: !0,
        lexemes: /:?[\w-]+/,
        keywords: {
          literal: n,
          keyword:
            t +
            ' :' +
            t.split(' ').join(' :') +
            ' :' +
            'global local beep delay put len typeof pick log time set find environment terminal error execute parse resolve toarray tobool toid toip toip6 tonum tostr totime'
              .split(' ')
              .join(' :')
        },
        contains: [
          {
            variants: [
              { begin: /^@/, end: /$/ },
              { begin: /\/\*/, end: /\*\// },
              { begin: /%%/, end: /$/ },
              { begin: /^'/, end: /$/ },
              { begin: /^\s*\/[\w-]+=/, end: /$/ },
              { begin: /\/\//, end: /$/ },
              { begin: /^\[\</, end: /\>\]$/ },
              { begin: /<\//, end: />/ },
              { begin: /^facet /, end: /\}/ },
              { begin: '^1\\.\\.(\\d+)$', end: /$/ }
            ],
            illegal: /./
          },
          e.COMMENT('^#', '$'),
          a,
          i,
          r,
          {
            begin: /[\w-]+\=([^\s\{\}\[\]\(\)]+)/,
            relevance: 0,
            returnBegin: !0,
            contains: [
              { className: 'attribute', begin: /[^=]+/ },
              {
                begin: /=/,
                endsWithParent: !0,
                relevance: 0,
                contains: [
                  a,
                  i,
                  r,
                  {
                    className: 'literal',
                    begin: '\\b(' + n.split(' ').join('|') + ')\\b'
                  },
                  { begin: /("[^"]*"|[^\s\{\}\[\]]+)/ }
                ]
              }
            ]
          },
          { className: 'number', begin: /\*[0-9a-fA-F]+/ },
          {
            begin:
              '\\b(' +
              'add remove enable disable set get print export edit find run debug error info warning'
                .split(' ')
                .join('|') +
              ')([\\s[(]|])',
            returnBegin: !0,
            contains: [{ className: 'builtin-name', begin: /\w+/ }]
          },
          {
            className: 'built_in',
            variants: [
              {
                begin:
                  '(\\.\\./|/|\\s)((' +
                  'traffic-flow traffic-generator firewall scheduler aaa accounting address-list address align area bandwidth-server bfd bgp bridge client clock community config connection console customer default dhcp-client dhcp-server discovery dns e-mail ethernet filter firewall firmware gps graphing group hardware health hotspot identity igmp-proxy incoming instance interface ip ipsec ipv6 irq l2tp-server lcd ldp logging mac-server mac-winbox mangle manual mirror mme mpls nat nd neighbor network note ntp ospf ospf-v3 ovpn-server page peer pim ping policy pool port ppp pppoe-client pptp-server prefix profile proposal proxy queue radius resource rip ripng route routing screen script security-profiles server service service-port settings shares smb sms sniffer snmp snooper socks sstp-server system tool tracking type upgrade upnp user-manager users user vlan secret vrrp watchdog web-access wireless pptp pppoe lan wan layer7-protocol lease simple raw'
                    .split(' ')
                    .join('|') +
                  ');?\\s)+',
                relevance: 10
              },
              { begin: /\.\./ }
            ]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        keywords: {
          keyword:
            'float color point normal vector matrix while for if do return else break extern continue',
          built_in:
            'abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp faceforward filterstep floor format fresnel incident length lightsource log match max min mod noise normalize ntransform opposite option phong pnoise pow printf ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan texture textureinfo trace transform vtransform xcomp ycomp zcomp'
        },
        illegal: '</',
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          e.C_NUMBER_MODE,
          { className: 'meta', begin: '#', end: '$' },
          {
            className: 'class',
            beginKeywords: 'surface displacement light volume imager',
            end: '\\('
          },
          { beginKeywords: 'illuminate illuminance gather', end: '\\(' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        keywords: {
          keyword:
            'BILL_PERIOD BILL_START BILL_STOP RS_EFFECTIVE_START RS_EFFECTIVE_STOP RS_JURIS_CODE RS_OPCO_CODE INTDADDATTRIBUTE|5 INTDADDVMSG|5 INTDBLOCKOP|5 INTDBLOCKOPNA|5 INTDCLOSE|5 INTDCOUNT|5 INTDCOUNTSTATUSCODE|5 INTDCREATEMASK|5 INTDCREATEDAYMASK|5 INTDCREATEFACTORMASK|5 INTDCREATEHANDLE|5 INTDCREATEOVERRIDEDAYMASK|5 INTDCREATEOVERRIDEMASK|5 INTDCREATESTATUSCODEMASK|5 INTDCREATETOUPERIOD|5 INTDDELETE|5 INTDDIPTEST|5 INTDEXPORT|5 INTDGETERRORCODE|5 INTDGETERRORMESSAGE|5 INTDISEQUAL|5 INTDJOIN|5 INTDLOAD|5 INTDLOADACTUALCUT|5 INTDLOADDATES|5 INTDLOADHIST|5 INTDLOADLIST|5 INTDLOADLISTDATES|5 INTDLOADLISTENERGY|5 INTDLOADLISTHIST|5 INTDLOADRELATEDCHANNEL|5 INTDLOADSP|5 INTDLOADSTAGING|5 INTDLOADUOM|5 INTDLOADUOMDATES|5 INTDLOADUOMHIST|5 INTDLOADVERSION|5 INTDOPEN|5 INTDREADFIRST|5 INTDREADNEXT|5 INTDRECCOUNT|5 INTDRELEASE|5 INTDREPLACE|5 INTDROLLAVG|5 INTDROLLPEAK|5 INTDSCALAROP|5 INTDSCALE|5 INTDSETATTRIBUTE|5 INTDSETDSTPARTICIPANT|5 INTDSETSTRING|5 INTDSETVALUE|5 INTDSETVALUESTATUS|5 INTDSHIFTSTARTTIME|5 INTDSMOOTH|5 INTDSORT|5 INTDSPIKETEST|5 INTDSUBSET|5 INTDTOU|5 INTDTOURELEASE|5 INTDTOUVALUE|5 INTDUPDATESTATS|5 INTDVALUE|5 STDEV INTDDELETEEX|5 INTDLOADEXACTUAL|5 INTDLOADEXCUT|5 INTDLOADEXDATES|5 INTDLOADEX|5 INTDLOADEXRELATEDCHANNEL|5 INTDSAVEEX|5 MVLOAD|5 MVLOADACCT|5 MVLOADACCTDATES|5 MVLOADACCTHIST|5 MVLOADDATES|5 MVLOADHIST|5 MVLOADLIST|5 MVLOADLISTDATES|5 MVLOADLISTHIST|5 IF FOR NEXT DONE SELECT END CALL ABORT CLEAR CHANNEL FACTOR LIST NUMBER OVERRIDE SET WEEK DISTRIBUTIONNODE ELSE WHEN THEN OTHERWISE IENUM CSV INCLUDE LEAVE RIDER SAVE DELETE NOVALUE SECTION WARN SAVE_UPDATE DETERMINANT LABEL REPORT REVENUE EACH IN FROM TOTAL CHARGE BLOCK AND OR CSV_FILE RATE_CODE AUXILIARY_DEMAND UIDACCOUNT RS BILL_PERIOD_SELECT HOURS_PER_MONTH INTD_ERROR_STOP SEASON_SCHEDULE_NAME ACCOUNTFACTOR ARRAYUPPERBOUND CALLSTOREDPROC GETADOCONNECTION GETCONNECT GETDATASOURCE GETQUALIFIER GETUSERID HASVALUE LISTCOUNT LISTOP LISTUPDATE LISTVALUE PRORATEFACTOR RSPRORATE SETBINPATH SETDBMONITOR WQ_OPEN BILLINGHOURS DATE DATEFROMFLOAT DATETIMEFROMSTRING DATETIMETOSTRING DATETOFLOAT DAY DAYDIFF DAYNAME DBDATETIME HOUR MINUTE MONTH MONTHDIFF MONTHHOURS MONTHNAME ROUNDDATE SAMEWEEKDAYLASTYEAR SECOND WEEKDAY WEEKDIFF YEAR YEARDAY YEARSTR COMPSUM HISTCOUNT HISTMAX HISTMIN HISTMINNZ HISTVALUE MAXNRANGE MAXRANGE MINRANGE COMPIKVA COMPKVA COMPKVARFROMKQKW COMPLF IDATTR FLAG LF2KW LF2KWH MAXKW POWERFACTOR READING2USAGE AVGSEASON MAXSEASON MONTHLYMERGE SEASONVALUE SUMSEASON ACCTREADDATES ACCTTABLELOAD CONFIGADD CONFIGGET CREATEOBJECT CREATEREPORT EMAILCLIENT EXPBLKMDMUSAGE EXPMDMUSAGE EXPORT_USAGE FACTORINEFFECT GETUSERSPECIFIEDSTOP INEFFECT ISHOLIDAY RUNRATE SAVE_PROFILE SETREPORTTITLE USEREXIT WATFORRUNRATE TO TABLE ACOS ASIN ATAN ATAN2 BITAND CEIL COS COSECANT COSH COTANGENT DIVQUOT DIVREM EXP FABS FLOOR FMOD FREPM FREXPN LOG LOG10 MAX MAXN MIN MINNZ MODF POW ROUND ROUND2VALUE ROUNDINT SECANT SIN SINH SQROOT TAN TANH FLOAT2STRING FLOAT2STRINGNC INSTR LEFT LEN LTRIM MID RIGHT RTRIM STRING STRINGNC TOLOWER TOUPPER TRIM NUMDAYS READ_DATE STAGING',
          built_in:
            'IDENTIFIER OPTIONS XML_ELEMENT XML_OP XML_ELEMENT_OF DOMDOCCREATE DOMDOCLOADFILE DOMDOCLOADXML DOMDOCSAVEFILE DOMDOCGETROOT DOMDOCADDPI DOMNODEGETNAME DOMNODEGETTYPE DOMNODEGETVALUE DOMNODEGETCHILDCT DOMNODEGETFIRSTCHILD DOMNODEGETSIBLING DOMNODECREATECHILDELEMENT DOMNODESETATTRIBUTE DOMNODEGETCHILDELEMENTCT DOMNODEGETFIRSTCHILDELEMENT DOMNODEGETSIBLINGELEMENT DOMNODEGETATTRIBUTECT DOMNODEGETATTRIBUTEI DOMNODEGETATTRIBUTEBYNAME DOMNODEGETBYNAME'
        },
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          e.C_NUMBER_MODE,
          {
            className: 'literal',
            variants: [
              { begin: '#\\s+[a-zA-Z\\ \\.]*', relevance: 0 },
              { begin: '#[a-zA-Z\\ \\.]+' }
            ]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = '([ui](8|16|32|64|128|size)|f(32|64))?',
        n =
          'drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!';
      return {
        aliases: ['rs'],
        keywords: {
          keyword:
            'alignof as be box break const continue crate do else enum extern false fn for if impl in let loop match mod mut offsetof once priv proc pub pure ref return self Self sizeof static struct super trait true type typeof unsafe unsized use virtual while where yield move default',
          literal: 'true false Some None Ok Err',
          built_in: n
        },
        lexemes: e.IDENT_RE + '!?',
        illegal: '</',
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.COMMENT('/\\*', '\\*/', { contains: ['self'] }),
          e.inherit(e.QUOTE_STRING_MODE, { begin: /b?"/, illegal: null }),
          {
            className: 'string',
            variants: [
              { begin: /r(#*)"(.|\n)*?"\1(?!#)/ },
              { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ }
            ]
          },
          { className: 'symbol', begin: /'[a-zA-Z_][a-zA-Z0-9_]*/ },
          {
            className: 'number',
            variants: [
              { begin: '\\b0b([01_]+)' + t },
              { begin: '\\b0o([0-7_]+)' + t },
              { begin: '\\b0x([A-Fa-f0-9_]+)' + t },
              { begin: '\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)' + t }
            ],
            relevance: 0
          },
          {
            className: 'function',
            beginKeywords: 'fn',
            end: '(\\(|<)',
            excludeEnd: !0,
            contains: [e.UNDERSCORE_TITLE_MODE]
          },
          {
            className: 'meta',
            begin: '#\\!?\\[',
            end: '\\]',
            contains: [{ className: 'meta-string', begin: /"/, end: /"/ }]
          },
          {
            className: 'class',
            beginKeywords: 'type',
            end: ';',
            contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, { endsParent: !0 })],
            illegal: '\\S'
          },
          {
            className: 'class',
            beginKeywords: 'trait enum struct union',
            end: '{',
            contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, { endsParent: !0 })],
            illegal: '[\\w\\d]'
          },
          { begin: e.IDENT_RE + '::', keywords: { built_in: n } },
          { begin: '->' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          className: 'subst',
          variants: [{ begin: '\\$[A-Za-z0-9_]+' }, { begin: '\\${', end: '}' }]
        },
        n = {
          className: 'string',
          variants: [
            {
              begin: '"',
              end: '"',
              illegal: '\\n',
              contains: [e.BACKSLASH_ESCAPE]
            },
            { begin: '"""', end: '"""', relevance: 10 },
            {
              begin: '[a-z]+"',
              end: '"',
              illegal: '\\n',
              contains: [e.BACKSLASH_ESCAPE, t]
            },
            {
              className: 'string',
              begin: '[a-z]+"""',
              end: '"""',
              contains: [t],
              relevance: 10
            }
          ]
        },
        r = { className: 'type', begin: '\\b[A-Z][A-Za-z0-9_]*', relevance: 0 },
        a = {
          className: 'title',
          begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
          relevance: 0
        },
        i = {
          className: 'class',
          beginKeywords: 'class object trait type',
          end: /[:={\[\n;]/,
          excludeEnd: !0,
          contains: [
            { beginKeywords: 'extends with', relevance: 10 },
            {
              begin: /\[/,
              end: /\]/,
              excludeBegin: !0,
              excludeEnd: !0,
              relevance: 0,
              contains: [r]
            },
            {
              className: 'params',
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              relevance: 0,
              contains: [r]
            },
            a
          ]
        },
        o = {
          className: 'function',
          beginKeywords: 'def',
          end: /[:={\[(\n;]/,
          excludeEnd: !0,
          contains: [a]
        };
      return {
        keywords: {
          literal: 'true false null',
          keyword:
            'type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit'
        },
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          n,
          { className: 'symbol', begin: "'\\w[\\w\\d_]*(?!')" },
          r,
          o,
          i,
          e.C_NUMBER_MODE,
          { className: 'meta', begin: '@[A-Za-z]+' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = '[^\\(\\)\\[\\]\\{\\}",\'`;#|\\\\\\s]+',
        n = { className: 'literal', begin: '(#t|#f|#\\\\' + t + '|#\\\\.)' },
        r = {
          className: 'number',
          variants: [
            { begin: '(\\-|\\+)?\\d+([./]\\d+)?', relevance: 0 },
            {
              begin:
                '(\\-|\\+)?\\d+([./]\\d+)?[+\\-](\\-|\\+)?\\d+([./]\\d+)?i',
              relevance: 0
            },
            { begin: '#b[0-1]+(/[0-1]+)?' },
            { begin: '#o[0-7]+(/[0-7]+)?' },
            { begin: '#x[0-9a-f]+(/[0-9a-f]+)?' }
          ]
        },
        a = e.QUOTE_STRING_MODE,
        i = [e.COMMENT(';', '$', { relevance: 0 }), e.COMMENT('#\\|', '\\|#')],
        o = { begin: t, relevance: 0 },
        s = { className: 'symbol', begin: "'" + t },
        l = { endsWithParent: !0, relevance: 0 },
        c = {
          variants: [{ begin: /'/ }, { begin: '`' }],
          contains: [
            { begin: '\\(', end: '\\)', contains: ['self', n, a, r, o, s] }
          ]
        },
        d = {
          className: 'name',
          begin: t,
          lexemes: t,
          keywords: {
            'builtin-name':
              "case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"
          }
        },
        u = {
          variants: [
            { begin: '\\(', end: '\\)' },
            { begin: '\\[', end: '\\]' }
          ],
          contains: [
            {
              begin: /lambda/,
              endsWithParent: !0,
              returnBegin: !0,
              contains: [
                d,
                { begin: /\(/, end: /\)/, endsParent: !0, contains: [o] }
              ]
            },
            d,
            l
          ]
        };
      return (
        (l.contains = [n, r, a, o, s, c, u].concat(i)),
        {
          illegal: /\S/,
          contains: [
            { className: 'meta', begin: '^#!', end: '$' },
            r,
            a,
            s,
            c,
            u
          ].concat(i)
        }
      );
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = [
        e.C_NUMBER_MODE,
        {
          className: 'string',
          begin: '\'|"',
          end: '\'|"',
          contains: [e.BACKSLASH_ESCAPE, { begin: "''" }]
        }
      ];
      return {
        aliases: ['sci'],
        lexemes: /%?\w+/,
        keywords: {
          keyword:
            'abort break case clear catch continue do elseif else endfunction end for function global if pause return resume select try then while',
          literal: '%f %F %t %T %pi %eps %inf %nan %e %i %z %s',
          built_in:
            'abs and acos asin atan ceil cd chdir clearglobal cosh cos cumprod deff disp error exec execstr exists exp eye gettext floor fprintf fread fsolve imag isdef isempty isinfisnan isvector lasterror length load linspace list listfiles log10 log2 log max min msprintf mclose mopen ones or pathconvert poly printf prod pwd rand real round sinh sin size gsort sprintf sqrt strcat strcmps tring sum system tanh tan type typename warning zeros matrix'
        },
        illegal: '("|#|/\\*|\\s+/\\w+)',
        contains: [
          {
            className: 'function',
            beginKeywords: 'function',
            end: '$',
            contains: [
              e.UNDERSCORE_TITLE_MODE,
              { className: 'params', begin: '\\(', end: '\\)' }
            ]
          },
          {
            begin: "[a-zA-Z_][a-zA-Z_0-9]*('+[\\.']*|[\\.']+)",
            end: '',
            relevance: 0
          },
          { begin: '\\[', end: "\\]'*[\\.']*", relevance: 0, contains: t },
          e.COMMENT('//', '$')
        ].concat(t)
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          className: 'variable',
          begin: '(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b'
        },
        n = { className: 'number', begin: '#[0-9A-Fa-f]+' };
      e.CSS_NUMBER_MODE,
        e.QUOTE_STRING_MODE,
        e.APOS_STRING_MODE,
        e.C_BLOCK_COMMENT_MODE;
      return {
        case_insensitive: !0,
        illegal: "[=/|']",
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          {
            className: 'selector-id',
            begin: '\\#[A-Za-z0-9_-]+',
            relevance: 0
          },
          {
            className: 'selector-class',
            begin: '\\.[A-Za-z0-9_-]+',
            relevance: 0
          },
          {
            className: 'selector-attr',
            begin: '\\[',
            end: '\\]',
            illegal: '$'
          },
          {
            className: 'selector-tag',
            begin:
              '\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b',
            relevance: 0
          },
          {
            begin:
              ':(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)'
          },
          {
            begin:
              '::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)'
          },
          t,
          {
            className: 'attribute',
            begin:
              '\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b',
            illegal: '[^\\s]'
          },
          {
            begin:
              '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b'
          },
          {
            begin: ':',
            end: ';',
            contains: [
              t,
              n,
              e.CSS_NUMBER_MODE,
              e.QUOTE_STRING_MODE,
              e.APOS_STRING_MODE,
              { className: 'meta', begin: '!important' }
            ]
          },
          {
            begin: '@',
            end: '[{;]',
            keywords:
              'mixin include extend for if else each while charset import debug media page content font-face namespace warn',
            contains: [
              t,
              e.QUOTE_STRING_MODE,
              e.APOS_STRING_MODE,
              n,
              e.CSS_NUMBER_MODE,
              { begin: '\\s[A-Za-z0-9_.-]+', relevance: 0 }
            ]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['console'],
        contains: [
          {
            className: 'meta',
            begin: '^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]',
            starts: { end: '$', subLanguage: 'bash' }
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = [
        'add',
        'and',
        'cmp',
        'cmpg',
        'cmpl',
        'const',
        'div',
        'double',
        'float',
        'goto',
        'if',
        'int',
        'long',
        'move',
        'mul',
        'neg',
        'new',
        'nop',
        'not',
        'or',
        'rem',
        'return',
        'shl',
        'shr',
        'sput',
        'sub',
        'throw',
        'ushr',
        'xor'
      ];
      return {
        aliases: ['smali'],
        contains: [
          { className: 'string', begin: '"', end: '"', relevance: 0 },
          e.COMMENT('#', '$', { relevance: 0 }),
          {
            className: 'keyword',
            variants: [
              { begin: '\\s*\\.end\\s[a-zA-Z0-9]*' },
              { begin: '^[ ]*\\.[a-zA-Z]*', relevance: 0 },
              { begin: '\\s:[a-zA-Z_0-9]*', relevance: 0 },
              {
                begin:
                  '\\s(' +
                  [
                    'transient',
                    'constructor',
                    'abstract',
                    'final',
                    'synthetic',
                    'public',
                    'private',
                    'protected',
                    'static',
                    'bridge',
                    'system'
                  ].join('|') +
                  ')'
              }
            ]
          },
          {
            className: 'built_in',
            variants: [
              { begin: '\\s(' + t.join('|') + ')\\s' },
              {
                begin: '\\s(' + t.join('|') + ')((\\-|/)[a-zA-Z0-9]+)+\\s',
                relevance: 10
              },
              {
                begin:
                  '\\s(' +
                  [
                    'aget',
                    'aput',
                    'array',
                    'check',
                    'execute',
                    'fill',
                    'filled',
                    'goto/16',
                    'goto/32',
                    'iget',
                    'instance',
                    'invoke',
                    'iput',
                    'monitor',
                    'packed',
                    'sget',
                    'sparse'
                  ].join('|') +
                  ')((\\-|/)[a-zA-Z0-9]+)*\\s',
                relevance: 10
              }
            ]
          },
          { className: 'class', begin: 'L[^(;:\n]*;', relevance: 0 },
          { begin: '[vp][0-9]+' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = { className: 'string', begin: '\\$.{1}' },
        n = { className: 'symbol', begin: '#' + e.UNDERSCORE_IDENT_RE };
      return {
        aliases: ['st'],
        keywords: 'self super nil true false thisContext',
        contains: [
          e.COMMENT('"', '"'),
          e.APOS_STRING_MODE,
          { className: 'type', begin: '\\b[A-Z][A-Za-z0-9_]*', relevance: 0 },
          { begin: '[a-z][a-zA-Z0-9_]*:', relevance: 0 },
          e.C_NUMBER_MODE,
          n,
          t,
          {
            begin: '\\|[ ]*[a-z][a-zA-Z0-9_]*([ ]+[a-z][a-zA-Z0-9_]*)*[ ]*\\|',
            returnBegin: !0,
            end: /\|/,
            illegal: /\S/,
            contains: [{ begin: '(\\|[ ]*)?[a-z][a-zA-Z0-9_]*' }]
          },
          {
            begin: '\\#\\(',
            end: '\\)',
            contains: [e.APOS_STRING_MODE, t, e.C_NUMBER_MODE, n]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['ml'],
        keywords: {
          keyword:
            'abstype and andalso as case datatype do else end eqtype exception fn fun functor handle if in include infix infixr let local nonfix of op open orelse raise rec sharing sig signature struct structure then type val with withtype where while',
          built_in:
            'array bool char exn int list option order real ref string substring vector unit word',
          literal: 'true false NONE SOME LESS EQUAL GREATER nil'
        },
        illegal: /\/\/|>>/,
        lexemes: '[a-z_]\\w*!?',
        contains: [
          { className: 'literal', begin: /\[(\|\|)?\]|\(\)/, relevance: 0 },
          e.COMMENT('\\(\\*', '\\*\\)', { contains: ['self'] }),
          { className: 'symbol', begin: "'[A-Za-z_](?!')[\\w']*" },
          { className: 'type', begin: "`[A-Z][\\w']*" },
          { className: 'type', begin: "\\b[A-Z][\\w']*", relevance: 0 },
          { begin: "[a-z_]\\w*'[\\w']*" },
          e.inherit(e.APOS_STRING_MODE, { className: 'string', relevance: 0 }),
          e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
          {
            className: 'number',
            begin:
              '\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)',
            relevance: 0
          },
          { begin: /[-=]>/ }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = e.getLanguage('cpp').exports;
      return {
        aliases: ['sqf'],
        case_insensitive: !0,
        keywords: {
          keyword:
            'case catch default do else exit exitWith for forEach from if switch then throw to try waitUntil while with',
          built_in:
            'abs accTime acos action actionIDs actionKeys actionKeysImages actionKeysNames actionKeysNamesArray actionName actionParams activateAddons activatedAddons activateKey add3DENConnection add3DENEventHandler add3DENLayer addAction addBackpack addBackpackCargo addBackpackCargoGlobal addBackpackGlobal addCamShake addCuratorAddons addCuratorCameraArea addCuratorEditableObjects addCuratorEditingArea addCuratorPoints addEditorObject addEventHandler addGoggles addGroupIcon addHandgunItem addHeadgear addItem addItemCargo addItemCargoGlobal addItemPool addItemToBackpack addItemToUniform addItemToVest addLiveStats addMagazine addMagazineAmmoCargo addMagazineCargo addMagazineCargoGlobal addMagazineGlobal addMagazinePool addMagazines addMagazineTurret addMenu addMenuItem addMissionEventHandler addMPEventHandler addMusicEventHandler addOwnedMine addPlayerScores addPrimaryWeaponItem addPublicVariableEventHandler addRating addResources addScore addScoreSide addSecondaryWeaponItem addSwitchableUnit addTeamMember addToRemainsCollector addUniform addVehicle addVest addWaypoint addWeapon addWeaponCargo addWeaponCargoGlobal addWeaponGlobal addWeaponItem addWeaponPool addWeaponTurret agent agents AGLToASL aimedAtTarget aimPos airDensityRTD airportSide AISFinishHeal alive all3DENEntities allControls allCurators allCutLayers allDead allDeadMen allDisplays allGroups allMapMarkers allMines allMissionObjects allow3DMode allowCrewInImmobile allowCuratorLogicIgnoreAreas allowDamage allowDammage allowFileOperations allowFleeing allowGetIn allowSprint allPlayers allSites allTurrets allUnits allUnitsUAV allVariables ammo and animate animateDoor animateSource animationNames animationPhase animationSourcePhase animationState append apply armoryPoints arrayIntersect asin ASLToAGL ASLToATL assert assignAsCargo assignAsCargoIndex assignAsCommander assignAsDriver assignAsGunner assignAsTurret assignCurator assignedCargo assignedCommander assignedDriver assignedGunner assignedItems assignedTarget assignedTeam assignedVehicle assignedVehicleRole assignItem assignTeam assignToAirport atan atan2 atg ATLToASL attachedObject attachedObjects attachedTo attachObject attachTo attackEnabled backpack backpackCargo backpackContainer backpackItems backpackMagazines backpackSpaceFor behaviour benchmark binocular blufor boundingBox boundingBoxReal boundingCenter breakOut breakTo briefingName buildingExit buildingPos buttonAction buttonSetAction cadetMode call callExtension camCommand camCommit camCommitPrepared camCommitted camConstuctionSetParams camCreate camDestroy cameraEffect cameraEffectEnableHUD cameraInterest cameraOn cameraView campaignConfigFile camPreload camPreloaded camPrepareBank camPrepareDir camPrepareDive camPrepareFocus camPrepareFov camPrepareFovRange camPreparePos camPrepareRelPos camPrepareTarget camSetBank camSetDir camSetDive camSetFocus camSetFov camSetFovRange camSetPos camSetRelPos camSetTarget camTarget camUseNVG canAdd canAddItemToBackpack canAddItemToUniform canAddItemToVest cancelSimpleTaskDestination canFire canMove canSlingLoad canStand canSuspend canUnloadInCombat canVehicleCargo captive captiveNum cbChecked cbSetChecked ceil channelEnabled cheatsEnabled checkAIFeature checkVisibility civilian className clearAllItemsFromBackpack clearBackpackCargo clearBackpackCargoGlobal clearGroupIcons clearItemCargo clearItemCargoGlobal clearItemPool clearMagazineCargo clearMagazineCargoGlobal clearMagazinePool clearOverlay clearRadio clearWeaponCargo clearWeaponCargoGlobal clearWeaponPool clientOwner closeDialog closeDisplay closeOverlay collapseObjectTree collect3DENHistory combatMode commandArtilleryFire commandChat commander commandFire commandFollow commandFSM commandGetOut commandingMenu commandMove commandRadio commandStop commandSuppressiveFire commandTarget commandWatch comment commitOverlay compile compileFinal completedFSM composeText configClasses configFile configHierarchy configName configNull configProperties configSourceAddonList configSourceMod configSourceModList connectTerminalToUAV controlNull controlsGroupCtrl copyFromClipboard copyToClipboard copyWaypoints cos count countEnemy countFriendly countSide countType countUnknown create3DENComposition create3DENEntity createAgent createCenter createDialog createDiaryLink createDiaryRecord createDiarySubject createDisplay createGearDialog createGroup createGuardedPoint createLocation createMarker createMarkerLocal createMenu createMine createMissionDisplay createMPCampaignDisplay createSimpleObject createSimpleTask createSite createSoundSource createTask createTeam createTrigger createUnit createVehicle createVehicleCrew createVehicleLocal crew ctrlActivate ctrlAddEventHandler ctrlAngle ctrlAutoScrollDelay ctrlAutoScrollRewind ctrlAutoScrollSpeed ctrlChecked ctrlClassName ctrlCommit ctrlCommitted ctrlCreate ctrlDelete ctrlEnable ctrlEnabled ctrlFade ctrlHTMLLoaded ctrlIDC ctrlIDD ctrlMapAnimAdd ctrlMapAnimClear ctrlMapAnimCommit ctrlMapAnimDone ctrlMapCursor ctrlMapMouseOver ctrlMapScale ctrlMapScreenToWorld ctrlMapWorldToScreen ctrlModel ctrlModelDirAndUp ctrlModelScale ctrlParent ctrlParentControlsGroup ctrlPosition ctrlRemoveAllEventHandlers ctrlRemoveEventHandler ctrlScale ctrlSetActiveColor ctrlSetAngle ctrlSetAutoScrollDelay ctrlSetAutoScrollRewind ctrlSetAutoScrollSpeed ctrlSetBackgroundColor ctrlSetChecked ctrlSetEventHandler ctrlSetFade ctrlSetFocus ctrlSetFont ctrlSetFontH1 ctrlSetFontH1B ctrlSetFontH2 ctrlSetFontH2B ctrlSetFontH3 ctrlSetFontH3B ctrlSetFontH4 ctrlSetFontH4B ctrlSetFontH5 ctrlSetFontH5B ctrlSetFontH6 ctrlSetFontH6B ctrlSetFontHeight ctrlSetFontHeightH1 ctrlSetFontHeightH2 ctrlSetFontHeightH3 ctrlSetFontHeightH4 ctrlSetFontHeightH5 ctrlSetFontHeightH6 ctrlSetFontHeightSecondary ctrlSetFontP ctrlSetFontPB ctrlSetFontSecondary ctrlSetForegroundColor ctrlSetModel ctrlSetModelDirAndUp ctrlSetModelScale ctrlSetPosition ctrlSetScale ctrlSetStructuredText ctrlSetText ctrlSetTextColor ctrlSetTooltip ctrlSetTooltipColorBox ctrlSetTooltipColorShade ctrlSetTooltipColorText ctrlShow ctrlShown ctrlText ctrlTextHeight ctrlType ctrlVisible curatorAddons curatorCamera curatorCameraArea curatorCameraAreaCeiling curatorCoef curatorEditableObjects curatorEditingArea curatorEditingAreaType curatorMouseOver curatorPoints curatorRegisteredObjects curatorSelected curatorWaypointCost current3DENOperation currentChannel currentCommand currentMagazine currentMagazineDetail currentMagazineDetailTurret currentMagazineTurret currentMuzzle currentNamespace currentTask currentTasks currentThrowable currentVisionMode currentWaypoint currentWeapon currentWeaponMode currentWeaponTurret currentZeroing cursorObject cursorTarget customChat customRadio cutFadeOut cutObj cutRsc cutText damage date dateToNumber daytime deActivateKey debriefingText debugFSM debugLog deg delete3DENEntities deleteAt deleteCenter deleteCollection deleteEditorObject deleteGroup deleteIdentity deleteLocation deleteMarker deleteMarkerLocal deleteRange deleteResources deleteSite deleteStatus deleteTeam deleteVehicle deleteVehicleCrew deleteWaypoint detach detectedMines diag_activeMissionFSMs diag_activeScripts diag_activeSQFScripts diag_activeSQSScripts diag_captureFrame diag_captureSlowFrame diag_codePerformance diag_drawMode diag_enable diag_enabled diag_fps diag_fpsMin diag_frameNo diag_list diag_log diag_logSlowFrame diag_mergeConfigFile diag_recordTurretLimits diag_tickTime diag_toggle dialog diarySubjectExists didJIP didJIPOwner difficulty difficultyEnabled difficultyEnabledRTD difficultyOption direction directSay disableAI disableCollisionWith disableConversation disableDebriefingStats disableNVGEquipment disableRemoteSensors disableSerialization disableTIEquipment disableUAVConnectability disableUserInput displayAddEventHandler displayCtrl displayNull displayParent displayRemoveAllEventHandlers displayRemoveEventHandler displaySetEventHandler dissolveTeam distance distance2D distanceSqr distributionRegion do3DENAction doArtilleryFire doFire doFollow doFSM doGetOut doMove doorPhase doStop doSuppressiveFire doTarget doWatch drawArrow drawEllipse drawIcon drawIcon3D drawLine drawLine3D drawLink drawLocation drawPolygon drawRectangle driver drop east echo edit3DENMissionAttributes editObject editorSetEventHandler effectiveCommander emptyPositions enableAI enableAIFeature enableAimPrecision enableAttack enableAudioFeature enableCamShake enableCaustics enableChannel enableCollisionWith enableCopilot enableDebriefingStats enableDiagLegend enableEndDialog enableEngineArtillery enableEnvironment enableFatigue enableGunLights enableIRLasers enableMimics enablePersonTurret enableRadio enableReload enableRopeAttach enableSatNormalOnDetail enableSaving enableSentences enableSimulation enableSimulationGlobal enableStamina enableTeamSwitch enableUAVConnectability enableUAVWaypoints enableVehicleCargo endLoadingScreen endMission engineOn enginesIsOnRTD enginesRpmRTD enginesTorqueRTD entities estimatedEndServerTime estimatedTimeLeft evalObjectArgument everyBackpack everyContainer exec execEditorScript execFSM execVM exp expectedDestination exportJIPMessages eyeDirection eyePos face faction fadeMusic fadeRadio fadeSound fadeSpeech failMission fillWeaponsFromPool find findCover findDisplay findEditorObject findEmptyPosition findEmptyPositionReady findNearestEnemy finishMissionInit finite fire fireAtTarget firstBackpack flag flagOwner flagSide flagTexture fleeing floor flyInHeight flyInHeightASL fog fogForecast fogParams forceAddUniform forcedMap forceEnd forceMap forceRespawn forceSpeed forceWalk forceWeaponFire forceWeatherChange forEachMember forEachMemberAgent forEachMemberTeam format formation formationDirection formationLeader formationMembers formationPosition formationTask formatText formLeader freeLook fromEditor fuel fullCrew gearIDCAmmoCount gearSlotAmmoCount gearSlotData get3DENActionState get3DENAttribute get3DENCamera get3DENConnections get3DENEntity get3DENEntityID get3DENGrid get3DENIconsVisible get3DENLayerEntities get3DENLinesVisible get3DENMissionAttribute get3DENMouseOver get3DENSelected getAimingCoef getAllHitPointsDamage getAllOwnedMines getAmmoCargo getAnimAimPrecision getAnimSpeedCoef getArray getArtilleryAmmo getArtilleryComputerSettings getArtilleryETA getAssignedCuratorLogic getAssignedCuratorUnit getBackpackCargo getBleedingRemaining getBurningValue getCameraViewDirection getCargoIndex getCenterOfMass getClientState getClientStateNumber getConnectedUAV getCustomAimingCoef getDammage getDescription getDir getDirVisual getDLCs getEditorCamera getEditorMode getEditorObjectScope getElevationOffset getFatigue getFriend getFSMVariable getFuelCargo getGroupIcon getGroupIconParams getGroupIcons getHideFrom getHit getHitIndex getHitPointDamage getItemCargo getMagazineCargo getMarkerColor getMarkerPos getMarkerSize getMarkerType getMass getMissionConfig getMissionConfigValue getMissionDLCs getMissionLayerEntities getModelInfo getMousePosition getNumber getObjectArgument getObjectChildren getObjectDLC getObjectMaterials getObjectProxy getObjectTextures getObjectType getObjectViewDistance getOxygenRemaining getPersonUsedDLCs getPilotCameraDirection getPilotCameraPosition getPilotCameraRotation getPilotCameraTarget getPlayerChannel getPlayerScores getPlayerUID getPos getPosASL getPosASLVisual getPosASLW getPosATL getPosATLVisual getPosVisual getPosWorld getRelDir getRelPos getRemoteSensorsDisabled getRepairCargo getResolution getShadowDistance getShotParents getSlingLoad getSpeed getStamina getStatValue getSuppression getTerrainHeightASL getText getUnitLoadout getUnitTrait getVariable getVehicleCargo getWeaponCargo getWeaponSway getWPPos glanceAt globalChat globalRadio goggles goto group groupChat groupFromNetId groupIconSelectable groupIconsVisible groupId groupOwner groupRadio groupSelectedUnits groupSelectUnit grpNull gunner gusts halt handgunItems handgunMagazine handgunWeapon handsHit hasInterface hasPilotCamera hasWeapon hcAllGroups hcGroupParams hcLeader hcRemoveAllGroups hcRemoveGroup hcSelected hcSelectGroup hcSetGroup hcShowBar hcShownBar headgear hideBody hideObject hideObjectGlobal hideSelection hint hintC hintCadet hintSilent hmd hostMission htmlLoad HUDMovementLevels humidity image importAllGroups importance in inArea inAreaArray incapacitatedState independent inflame inflamed inGameUISetEventHandler inheritsFrom initAmbientLife inPolygon inputAction inRangeOfArtillery insertEditorObject intersect is3DEN is3DENMultiplayer isAbleToBreathe isAgent isArray isAutoHoverOn isAutonomous isAutotest isBleeding isBurning isClass isCollisionLightOn isCopilotEnabled isDedicated isDLCAvailable isEngineOn isEqualTo isEqualType isEqualTypeAll isEqualTypeAny isEqualTypeArray isEqualTypeParams isFilePatchingEnabled isFlashlightOn isFlatEmpty isForcedWalk isFormationLeader isHidden isInRemainsCollector isInstructorFigureEnabled isIRLaserOn isKeyActive isKindOf isLightOn isLocalized isManualFire isMarkedForCollection isMultiplayer isMultiplayerSolo isNil isNull isNumber isObjectHidden isObjectRTD isOnRoad isPipEnabled isPlayer isRealTime isRemoteExecuted isRemoteExecutedJIP isServer isShowing3DIcons isSprintAllowed isStaminaEnabled isSteamMission isStreamFriendlyUIEnabled isText isTouchingGround isTurnedOut isTutHintsEnabled isUAVConnectable isUAVConnected isUniformAllowed isVehicleCargo isWalking isWeaponDeployed isWeaponRested itemCargo items itemsWithMagazines join joinAs joinAsSilent joinSilent joinString kbAddDatabase kbAddDatabaseTargets kbAddTopic kbHasTopic kbReact kbRemoveTopic kbTell kbWasSaid keyImage keyName knowsAbout land landAt landResult language laserTarget lbAdd lbClear lbColor lbCurSel lbData lbDelete lbIsSelected lbPicture lbSelection lbSetColor lbSetCurSel lbSetData lbSetPicture lbSetPictureColor lbSetPictureColorDisabled lbSetPictureColorSelected lbSetSelectColor lbSetSelectColorRight lbSetSelected lbSetTooltip lbSetValue lbSize lbSort lbSortByValue lbText lbValue leader leaderboardDeInit leaderboardGetRows leaderboardInit leaveVehicle libraryCredits libraryDisclaimers lifeState lightAttachObject lightDetachObject lightIsOn lightnings limitSpeed linearConversion lineBreak lineIntersects lineIntersectsObjs lineIntersectsSurfaces lineIntersectsWith linkItem list listObjects ln lnbAddArray lnbAddColumn lnbAddRow lnbClear lnbColor lnbCurSelRow lnbData lnbDeleteColumn lnbDeleteRow lnbGetColumnsPosition lnbPicture lnbSetColor lnbSetColumnsPos lnbSetCurSelRow lnbSetData lnbSetPicture lnbSetText lnbSetValue lnbSize lnbText lnbValue load loadAbs loadBackpack loadFile loadGame loadIdentity loadMagazine loadOverlay loadStatus loadUniform loadVest local localize locationNull locationPosition lock lockCameraTo lockCargo lockDriver locked lockedCargo lockedDriver lockedTurret lockIdentity lockTurret lockWP log logEntities logNetwork logNetworkTerminate lookAt lookAtPos magazineCargo magazines magazinesAllTurrets magazinesAmmo magazinesAmmoCargo magazinesAmmoFull magazinesDetail magazinesDetailBackpack magazinesDetailUniform magazinesDetailVest magazinesTurret magazineTurretAmmo mapAnimAdd mapAnimClear mapAnimCommit mapAnimDone mapCenterOnCamera mapGridPosition markAsFinishedOnSteam markerAlpha markerBrush markerColor markerDir markerPos markerShape markerSize markerText markerType max members menuAction menuAdd menuChecked menuClear menuCollapse menuData menuDelete menuEnable menuEnabled menuExpand menuHover menuPicture menuSetAction menuSetCheck menuSetData menuSetPicture menuSetValue menuShortcut menuShortcutText menuSize menuSort menuText menuURL menuValue min mineActive mineDetectedBy missionConfigFile missionDifficulty missionName missionNamespace missionStart missionVersion mod modelToWorld modelToWorldVisual modParams moonIntensity moonPhase morale move move3DENCamera moveInAny moveInCargo moveInCommander moveInDriver moveInGunner moveInTurret moveObjectToEnd moveOut moveTime moveTo moveToCompleted moveToFailed musicVolume name nameSound nearEntities nearestBuilding nearestLocation nearestLocations nearestLocationWithDubbing nearestObject nearestObjects nearestTerrainObjects nearObjects nearObjectsReady nearRoads nearSupplies nearTargets needReload netId netObjNull newOverlay nextMenuItemIndex nextWeatherChange nMenuItems not numberToDate objectCurators objectFromNetId objectParent objNull objStatus onBriefingGroup onBriefingNotes onBriefingPlan onBriefingTeamSwitch onCommandModeChanged onDoubleClick onEachFrame onGroupIconClick onGroupIconOverEnter onGroupIconOverLeave onHCGroupSelectionChanged onMapSingleClick onPlayerConnected onPlayerDisconnected onPreloadFinished onPreloadStarted onShowNewObject onTeamSwitch openCuratorInterface openDLCPage openMap openYoutubeVideo opfor or orderGetIn overcast overcastForecast owner param params parseNumber parseText parsingNamespace particlesQuality pi pickWeaponPool pitch pixelGrid pixelGridBase pixelGridNoUIScale pixelH pixelW playableSlotsNumber playableUnits playAction playActionNow player playerRespawnTime playerSide playersNumber playGesture playMission playMove playMoveNow playMusic playScriptedMission playSound playSound3D position positionCameraToWorld posScreenToWorld posWorldToScreen ppEffectAdjust ppEffectCommit ppEffectCommitted ppEffectCreate ppEffectDestroy ppEffectEnable ppEffectEnabled ppEffectForceInNVG precision preloadCamera preloadObject preloadSound preloadTitleObj preloadTitleRsc preprocessFile preprocessFileLineNumbers primaryWeapon primaryWeaponItems primaryWeaponMagazine priority private processDiaryLink productVersion profileName profileNamespace profileNameSteam progressLoadingScreen progressPosition progressSetPosition publicVariable publicVariableClient publicVariableServer pushBack pushBackUnique putWeaponPool queryItemsPool queryMagazinePool queryWeaponPool rad radioChannelAdd radioChannelCreate radioChannelRemove radioChannelSetCallSign radioChannelSetLabel radioVolume rain rainbow random rank rankId rating rectangular registeredTasks registerTask reload reloadEnabled remoteControl remoteExec remoteExecCall remove3DENConnection remove3DENEventHandler remove3DENLayer removeAction removeAll3DENEventHandlers removeAllActions removeAllAssignedItems removeAllContainers removeAllCuratorAddons removeAllCuratorCameraAreas removeAllCuratorEditingAreas removeAllEventHandlers removeAllHandgunItems removeAllItems removeAllItemsWithMagazines removeAllMissionEventHandlers removeAllMPEventHandlers removeAllMusicEventHandlers removeAllOwnedMines removeAllPrimaryWeaponItems removeAllWeapons removeBackpack removeBackpackGlobal removeCuratorAddons removeCuratorCameraArea removeCuratorEditableObjects removeCuratorEditingArea removeDrawIcon removeDrawLinks removeEventHandler removeFromRemainsCollector removeGoggles removeGroupIcon removeHandgunItem removeHeadgear removeItem removeItemFromBackpack removeItemFromUniform removeItemFromVest removeItems removeMagazine removeMagazineGlobal removeMagazines removeMagazinesTurret removeMagazineTurret removeMenuItem removeMissionEventHandler removeMPEventHandler removeMusicEventHandler removeOwnedMine removePrimaryWeaponItem removeSecondaryWeaponItem removeSimpleTask removeSwitchableUnit removeTeamMember removeUniform removeVest removeWeapon removeWeaponGlobal removeWeaponTurret requiredVersion resetCamShake resetSubgroupDirection resistance resize resources respawnVehicle restartEditorCamera reveal revealMine reverse reversedMouseY roadAt roadsConnectedTo roleDescription ropeAttachedObjects ropeAttachedTo ropeAttachEnabled ropeAttachTo ropeCreate ropeCut ropeDestroy ropeDetach ropeEndPosition ropeLength ropes ropeUnwind ropeUnwound rotorsForcesRTD rotorsRpmRTD round runInitScript safeZoneH safeZoneW safeZoneWAbs safeZoneX safeZoneXAbs safeZoneY save3DENInventory saveGame saveIdentity saveJoysticks saveOverlay saveProfileNamespace saveStatus saveVar savingEnabled say say2D say3D scopeName score scoreSide screenshot screenToWorld scriptDone scriptName scriptNull scudState secondaryWeapon secondaryWeaponItems secondaryWeaponMagazine select selectBestPlaces selectDiarySubject selectedEditorObjects selectEditorObject selectionNames selectionPosition selectLeader selectMax selectMin selectNoPlayer selectPlayer selectRandom selectWeapon selectWeaponTurret sendAUMessage sendSimpleCommand sendTask sendTaskResult sendUDPMessage serverCommand serverCommandAvailable serverCommandExecutable serverName serverTime set set3DENAttribute set3DENAttributes set3DENGrid set3DENIconsVisible set3DENLayer set3DENLinesVisible set3DENMissionAttributes set3DENModelsVisible set3DENObjectType set3DENSelected setAccTime setAirportSide setAmmo setAmmoCargo setAnimSpeedCoef setAperture setApertureNew setArmoryPoints setAttributes setAutonomous setBehaviour setBleedingRemaining setCameraInterest setCamShakeDefParams setCamShakeParams setCamUseTi setCaptive setCenterOfMass setCollisionLight setCombatMode setCompassOscillation setCuratorCameraAreaCeiling setCuratorCoef setCuratorEditingAreaType setCuratorWaypointCost setCurrentChannel setCurrentTask setCurrentWaypoint setCustomAimCoef setDamage setDammage setDate setDebriefingText setDefaultCamera setDestination setDetailMapBlendPars setDir setDirection setDrawIcon setDropInterval setEditorMode setEditorObjectScope setEffectCondition setFace setFaceAnimation setFatigue setFlagOwner setFlagSide setFlagTexture setFog setFormation setFormationTask setFormDir setFriend setFromEditor setFSMVariable setFuel setFuelCargo setGroupIcon setGroupIconParams setGroupIconsSelectable setGroupIconsVisible setGroupId setGroupIdGlobal setGroupOwner setGusts setHideBehind setHit setHitIndex setHitPointDamage setHorizonParallaxCoef setHUDMovementLevels setIdentity setImportance setLeader setLightAmbient setLightAttenuation setLightBrightness setLightColor setLightDayLight setLightFlareMaxDistance setLightFlareSize setLightIntensity setLightnings setLightUseFlare setLocalWindParams setMagazineTurretAmmo setMarkerAlpha setMarkerAlphaLocal setMarkerBrush setMarkerBrushLocal setMarkerColor setMarkerColorLocal setMarkerDir setMarkerDirLocal setMarkerPos setMarkerPosLocal setMarkerShape setMarkerShapeLocal setMarkerSize setMarkerSizeLocal setMarkerText setMarkerTextLocal setMarkerType setMarkerTypeLocal setMass setMimic setMousePosition setMusicEffect setMusicEventHandler setName setNameSound setObjectArguments setObjectMaterial setObjectMaterialGlobal setObjectProxy setObjectTexture setObjectTextureGlobal setObjectViewDistance setOvercast setOwner setOxygenRemaining setParticleCircle setParticleClass setParticleFire setParticleParams setParticleRandom setPilotCameraDirection setPilotCameraRotation setPilotCameraTarget setPilotLight setPiPEffect setPitch setPlayable setPlayerRespawnTime setPos setPosASL setPosASL2 setPosASLW setPosATL setPosition setPosWorld setRadioMsg setRain setRainbow setRandomLip setRank setRectangular setRepairCargo setShadowDistance setShotParents setSide setSimpleTaskAlwaysVisible setSimpleTaskCustomData setSimpleTaskDescription setSimpleTaskDestination setSimpleTaskTarget setSimpleTaskType setSimulWeatherLayers setSize setSkill setSlingLoad setSoundEffect setSpeaker setSpeech setSpeedMode setStamina setStaminaScheme setStatValue setSuppression setSystemOfUnits setTargetAge setTaskResult setTaskState setTerrainGrid setText setTimeMultiplier setTitleEffect setTriggerActivation setTriggerArea setTriggerStatements setTriggerText setTriggerTimeout setTriggerType setType setUnconscious setUnitAbility setUnitLoadout setUnitPos setUnitPosWeak setUnitRank setUnitRecoilCoefficient setUnitTrait setUnloadInCombat setUserActionText setVariable setVectorDir setVectorDirAndUp setVectorUp setVehicleAmmo setVehicleAmmoDef setVehicleArmor setVehicleCargo setVehicleId setVehicleLock setVehiclePosition setVehicleTiPars setVehicleVarName setVelocity setVelocityTransformation setViewDistance setVisibleIfTreeCollapsed setWaves setWaypointBehaviour setWaypointCombatMode setWaypointCompletionRadius setWaypointDescription setWaypointForceBehaviour setWaypointFormation setWaypointHousePosition setWaypointLoiterRadius setWaypointLoiterType setWaypointName setWaypointPosition setWaypointScript setWaypointSpeed setWaypointStatements setWaypointTimeout setWaypointType setWaypointVisible setWeaponReloadingTime setWind setWindDir setWindForce setWindStr setWPPos show3DIcons showChat showCinemaBorder showCommandingMenu showCompass showCuratorCompass showGPS showHUD showLegend showMap shownArtilleryComputer shownChat shownCompass shownCuratorCompass showNewEditorObject shownGPS shownHUD shownMap shownPad shownRadio shownScoretable shownUAVFeed shownWarrant shownWatch showPad showRadio showScoretable showSubtitles showUAVFeed showWarrant showWatch showWaypoint showWaypoints side sideAmbientLife sideChat sideEmpty sideEnemy sideFriendly sideLogic sideRadio sideUnknown simpleTasks simulationEnabled simulCloudDensity simulCloudOcclusion simulInClouds simulWeatherSync sin size sizeOf skill skillFinal skipTime sleep sliderPosition sliderRange sliderSetPosition sliderSetRange sliderSetSpeed sliderSpeed slingLoadAssistantShown soldierMagazines someAmmo sort soundVolume spawn speaker speed speedMode splitString sqrt squadParams stance startLoadingScreen step stop stopEngineRTD stopped str sunOrMoon supportInfo suppressFor surfaceIsWater surfaceNormal surfaceType swimInDepth switchableUnits switchAction switchCamera switchGesture switchLight switchMove synchronizedObjects synchronizedTriggers synchronizedWaypoints synchronizeObjectsAdd synchronizeObjectsRemove synchronizeTrigger synchronizeWaypoint systemChat systemOfUnits tan targetKnowledge targetsAggregate targetsQuery taskAlwaysVisible taskChildren taskCompleted taskCustomData taskDescription taskDestination taskHint taskMarkerOffset taskNull taskParent taskResult taskState taskType teamMember teamMemberNull teamName teams teamSwitch teamSwitchEnabled teamType terminate terrainIntersect terrainIntersectASL text textLog textLogFormat tg time timeMultiplier titleCut titleFadeOut titleObj titleRsc titleText toArray toFixed toLower toString toUpper triggerActivated triggerActivation triggerArea triggerAttachedVehicle triggerAttachObject triggerAttachVehicle triggerStatements triggerText triggerTimeout triggerTimeoutCurrent triggerType turretLocal turretOwner turretUnit tvAdd tvClear tvCollapse tvCount tvCurSel tvData tvDelete tvExpand tvPicture tvSetCurSel tvSetData tvSetPicture tvSetPictureColor tvSetPictureColorDisabled tvSetPictureColorSelected tvSetPictureRight tvSetPictureRightColor tvSetPictureRightColorDisabled tvSetPictureRightColorSelected tvSetText tvSetTooltip tvSetValue tvSort tvSortByValue tvText tvTooltip tvValue type typeName typeOf UAVControl uiNamespace uiSleep unassignCurator unassignItem unassignTeam unassignVehicle underwater uniform uniformContainer uniformItems uniformMagazines unitAddons unitAimPosition unitAimPositionVisual unitBackpack unitIsUAV unitPos unitReady unitRecoilCoefficient units unitsBelowHeight unlinkItem unlockAchievement unregisterTask updateDrawIcon updateMenuItem updateObjectTree useAISteeringComponent useAudioTimeForMoves vectorAdd vectorCos vectorCrossProduct vectorDiff vectorDir vectorDirVisual vectorDistance vectorDistanceSqr vectorDotProduct vectorFromTo vectorMagnitude vectorMagnitudeSqr vectorMultiply vectorNormalized vectorUp vectorUpVisual vehicle vehicleCargoEnabled vehicleChat vehicleRadio vehicles vehicleVarName velocity velocityModelSpace verifySignature vest vestContainer vestItems vestMagazines viewDistance visibleCompass visibleGPS visibleMap visiblePosition visiblePositionASL visibleScoretable visibleWatch waves waypointAttachedObject waypointAttachedVehicle waypointAttachObject waypointAttachVehicle waypointBehaviour waypointCombatMode waypointCompletionRadius waypointDescription waypointForceBehaviour waypointFormation waypointHousePosition waypointLoiterRadius waypointLoiterType waypointName waypointPosition waypoints waypointScript waypointsEnabledUAV waypointShow waypointSpeed waypointStatements waypointTimeout waypointTimeoutCurrent waypointType waypointVisible weaponAccessories weaponAccessoriesCargo weaponCargo weaponDirection weaponInertia weaponLowered weapons weaponsItems weaponsItemsCargo weaponState weaponsTurret weightRTD west WFSideText wind',
          literal: 'true false nil'
        },
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.NUMBER_MODE,
          { className: 'variable', begin: /\b_+[a-zA-Z_]\w*/ },
          { className: 'title', begin: /[a-zA-Z][a-zA-Z0-9]+_fnc_\w*/ },
          {
            className: 'string',
            variants: [
              {
                begin: '"',
                end: '"',
                contains: [{ begin: '""', relevance: 0 }]
              },
              {
                begin: "'",
                end: "'",
                contains: [{ begin: "''", relevance: 0 }]
              }
            ]
          },
          t.preprocessor
        ],
        illegal: /#/
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = e.COMMENT('--', '$');
      return {
        case_insensitive: !0,
        illegal: /[<>{}*#]/,
        contains: [
          {
            beginKeywords:
              'begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment',
            end: /;/,
            endsWithParent: !0,
            lexemes: /[\w\.]+/,
            keywords: {
              keyword:
                'abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek',
              literal: 'true false null',
              built_in:
                'array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void'
            },
            contains: [
              {
                className: 'string',
                begin: "'",
                end: "'",
                contains: [e.BACKSLASH_ESCAPE, { begin: "''" }]
              },
              {
                className: 'string',
                begin: '"',
                end: '"',
                contains: [e.BACKSLASH_ESCAPE, { begin: '""' }]
              },
              {
                className: 'string',
                begin: '`',
                end: '`',
                contains: [e.BACKSLASH_ESCAPE]
              },
              e.C_NUMBER_MODE,
              e.C_BLOCK_COMMENT_MODE,
              t
            ]
          },
          e.C_BLOCK_COMMENT_MODE,
          t
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        contains: [
          e.HASH_COMMENT_MODE,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          {
            begin: e.UNDERSCORE_IDENT_RE,
            lexemes: e.UNDERSCORE_IDENT_RE,
            keywords: {
              name: 'for in while repeat until if then else',
              symbol:
                'bernoulli bernoulli_logit binomial binomial_logit beta_binomial hypergeometric categorical categorical_logit ordered_logistic neg_binomial neg_binomial_2 neg_binomial_2_log poisson poisson_log multinomial normal exp_mod_normal skew_normal student_t cauchy double_exponential logistic gumbel lognormal chi_square inv_chi_square scaled_inv_chi_square exponential inv_gamma weibull frechet rayleigh wiener pareto pareto_type_2 von_mises uniform multi_normal multi_normal_prec multi_normal_cholesky multi_gp multi_gp_cholesky multi_student_t gaussian_dlm_obs dirichlet lkj_corr lkj_corr_cholesky wishart inv_wishart',
              'selector-tag':
                'int real vector simplex unit_vector ordered positive_ordered row_vector matrix cholesky_factor_corr cholesky_factor_cov corr_matrix cov_matrix',
              title:
                'functions model data parameters quantities transformed generated',
              literal: 'true false'
            },
            relevance: 0
          },
          {
            className: 'number',
            begin: '0[xX][0-9a-fA-F]+[Li]?\\b',
            relevance: 0
          },
          {
            className: 'number',
            begin: '0[xX][0-9a-fA-F]+[Li]?\\b',
            relevance: 0
          },
          {
            className: 'number',
            begin: '\\d+(?:[eE][+\\-]?\\d*)?L\\b',
            relevance: 0
          },
          {
            className: 'number',
            begin: '\\d+\\.(?!\\d)(?:i\\b)?',
            relevance: 0
          },
          {
            className: 'number',
            begin: '\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b',
            relevance: 0
          },
          {
            className: 'number',
            begin: '\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b',
            relevance: 0
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['do', 'ado'],
        case_insensitive: !0,
        keywords:
          'if else in foreach for forv forva forval forvalu forvalue forvalues by bys bysort xi quietly qui capture about ac ac_7 acprplot acprplot_7 adjust ado adopath adoupdate alpha ameans an ano anov anova anova_estat anova_terms anovadef aorder ap app appe appen append arch arch_dr arch_estat arch_p archlm areg areg_p args arima arima_dr arima_estat arima_p as asmprobit asmprobit_estat asmprobit_lf asmprobit_mfx__dlg asmprobit_p ass asse asser assert avplot avplot_7 avplots avplots_7 bcskew0 bgodfrey binreg bip0_lf biplot bipp_lf bipr_lf bipr_p biprobit bitest bitesti bitowt blogit bmemsize boot bootsamp bootstrap bootstrap_8 boxco_l boxco_p boxcox boxcox_6 boxcox_p bprobit br break brier bro brow brows browse brr brrstat bs bs_7 bsampl_w bsample bsample_7 bsqreg bstat bstat_7 bstat_8 bstrap bstrap_7 ca ca_estat ca_p cabiplot camat canon canon_8 canon_8_p canon_estat canon_p cap caprojection capt captu captur capture cat cc cchart cchart_7 cci cd censobs_table centile cf char chdir checkdlgfiles checkestimationsample checkhlpfiles checksum chelp ci cii cl class classutil clear cli clis clist clo clog clog_lf clog_p clogi clogi_sw clogit clogit_lf clogit_p clogitp clogl_sw cloglog clonevar clslistarray cluster cluster_measures cluster_stop cluster_tree cluster_tree_8 clustermat cmdlog cnr cnre cnreg cnreg_p cnreg_sw cnsreg codebook collaps4 collapse colormult_nb colormult_nw compare compress conf confi confir confirm conren cons const constr constra constrai constrain constraint continue contract copy copyright copysource cor corc corr corr2data corr_anti corr_kmo corr_smc corre correl correla correlat correlate corrgram cou coun count cox cox_p cox_sw coxbase coxhaz coxvar cprplot cprplot_7 crc cret cretu cretur creturn cross cs cscript cscript_log csi ct ct_is ctset ctst_5 ctst_st cttost cumsp cumsp_7 cumul cusum cusum_7 cutil d|0 datasig datasign datasigna datasignat datasignatu datasignatur datasignature datetof db dbeta de dec deco decod decode deff des desc descr descri describ describe destring dfbeta dfgls dfuller di di_g dir dirstats dis discard disp disp_res disp_s displ displa display distinct do doe doed doedi doedit dotplot dotplot_7 dprobit drawnorm drop ds ds_util dstdize duplicates durbina dwstat dydx e|0 ed edi edit egen eivreg emdef en enc enco encod encode eq erase ereg ereg_lf ereg_p ereg_sw ereghet ereghet_glf ereghet_glf_sh ereghet_gp ereghet_ilf ereghet_ilf_sh ereghet_ip eret eretu eretur ereturn err erro error est est_cfexist est_cfname est_clickable est_expand est_hold est_table est_unhold est_unholdok estat estat_default estat_summ estat_vce_only esti estimates etodow etof etomdy ex exi exit expand expandcl fac fact facto factor factor_estat factor_p factor_pca_rotated factor_rotate factormat fcast fcast_compute fcast_graph fdades fdadesc fdadescr fdadescri fdadescrib fdadescribe fdasav fdasave fdause fh_st file open file read file close file filefilter fillin find_hlp_file findfile findit findit_7 fit fl fli flis flist for5_0 form forma format fpredict frac_154 frac_adj frac_chk frac_cox frac_ddp frac_dis frac_dv frac_in frac_mun frac_pp frac_pq frac_pv frac_wgt frac_xo fracgen fracplot fracplot_7 fracpoly fracpred fron_ex fron_hn fron_p fron_tn fron_tn2 frontier ftodate ftoe ftomdy ftowdate g|0 gamhet_glf gamhet_gp gamhet_ilf gamhet_ip gamma gamma_d2 gamma_p gamma_sw gammahet gdi_hexagon gdi_spokes ge gen gene gener genera generat generate genrank genstd genvmean gettoken gl gladder gladder_7 glim_l01 glim_l02 glim_l03 glim_l04 glim_l05 glim_l06 glim_l07 glim_l08 glim_l09 glim_l10 glim_l11 glim_l12 glim_lf glim_mu glim_nw1 glim_nw2 glim_nw3 glim_p glim_v1 glim_v2 glim_v3 glim_v4 glim_v5 glim_v6 glim_v7 glm glm_6 glm_p glm_sw glmpred glo glob globa global glogit glogit_8 glogit_p gmeans gnbre_lf gnbreg gnbreg_5 gnbreg_p gomp_lf gompe_sw gomper_p gompertz gompertzhet gomphet_glf gomphet_glf_sh gomphet_gp gomphet_ilf gomphet_ilf_sh gomphet_ip gphdot gphpen gphprint gprefs gprobi_p gprobit gprobit_8 gr gr7 gr_copy gr_current gr_db gr_describe gr_dir gr_draw gr_draw_replay gr_drop gr_edit gr_editviewopts gr_example gr_example2 gr_export gr_print gr_qscheme gr_query gr_read gr_rename gr_replay gr_save gr_set gr_setscheme gr_table gr_undo gr_use graph graph7 grebar greigen greigen_7 greigen_8 grmeanby grmeanby_7 gs_fileinfo gs_filetype gs_graphinfo gs_stat gsort gwood h|0 hadimvo hareg hausman haver he heck_d2 heckma_p heckman heckp_lf heckpr_p heckprob hel help hereg hetpr_lf hetpr_p hetprob hettest hexdump hilite hist hist_7 histogram hlogit hlu hmeans hotel hotelling hprobit hreg hsearch icd9 icd9_ff icd9p iis impute imtest inbase include inf infi infil infile infix inp inpu input ins insheet insp inspe inspec inspect integ inten intreg intreg_7 intreg_p intrg2_ll intrg_ll intrg_ll2 ipolate iqreg ir irf irf_create irfm iri is_svy is_svysum isid istdize ivprob_1_lf ivprob_lf ivprobit ivprobit_p ivreg ivreg_footnote ivtob_1_lf ivtob_lf ivtobit ivtobit_p jackknife jacknife jknife jknife_6 jknife_8 jkstat joinby kalarma1 kap kap_3 kapmeier kappa kapwgt kdensity kdensity_7 keep ksm ksmirnov ktau kwallis l|0 la lab labe label labelbook ladder levels levelsof leverage lfit lfit_p li lincom line linktest lis list lloghet_glf lloghet_glf_sh lloghet_gp lloghet_ilf lloghet_ilf_sh lloghet_ip llogi_sw llogis_p llogist llogistic llogistichet lnorm_lf lnorm_sw lnorma_p lnormal lnormalhet lnormhet_glf lnormhet_glf_sh lnormhet_gp lnormhet_ilf lnormhet_ilf_sh lnormhet_ip lnskew0 loadingplot loc loca local log logi logis_lf logistic logistic_p logit logit_estat logit_p loglogs logrank loneway lookfor lookup lowess lowess_7 lpredict lrecomp lroc lroc_7 lrtest ls lsens lsens_7 lsens_x lstat ltable ltable_7 ltriang lv lvr2plot lvr2plot_7 m|0 ma mac macr macro makecns man manova manova_estat manova_p manovatest mantel mark markin markout marksample mat mat_capp mat_order mat_put_rr mat_rapp mata mata_clear mata_describe mata_drop mata_matdescribe mata_matsave mata_matuse mata_memory mata_mlib mata_mosave mata_rename mata_which matalabel matcproc matlist matname matr matri matrix matrix_input__dlg matstrik mcc mcci md0_ md1_ md1debug_ md2_ md2debug_ mds mds_estat mds_p mdsconfig mdslong mdsmat mdsshepard mdytoe mdytof me_derd mean means median memory memsize meqparse mer merg merge mfp mfx mhelp mhodds minbound mixed_ll mixed_ll_reparm mkassert mkdir mkmat mkspline ml ml_5 ml_adjs ml_bhhhs ml_c_d ml_check ml_clear ml_cnt ml_debug ml_defd ml_e0 ml_e0_bfgs ml_e0_cycle ml_e0_dfp ml_e0i ml_e1 ml_e1_bfgs ml_e1_bhhh ml_e1_cycle ml_e1_dfp ml_e2 ml_e2_cycle ml_ebfg0 ml_ebfr0 ml_ebfr1 ml_ebh0q ml_ebhh0 ml_ebhr0 ml_ebr0i ml_ecr0i ml_edfp0 ml_edfr0 ml_edfr1 ml_edr0i ml_eds ml_eer0i ml_egr0i ml_elf ml_elf_bfgs ml_elf_bhhh ml_elf_cycle ml_elf_dfp ml_elfi ml_elfs ml_enr0i ml_enrr0 ml_erdu0 ml_erdu0_bfgs ml_erdu0_bhhh ml_erdu0_bhhhq ml_erdu0_cycle ml_erdu0_dfp ml_erdu0_nrbfgs ml_exde ml_footnote ml_geqnr ml_grad0 ml_graph ml_hbhhh ml_hd0 ml_hold ml_init ml_inv ml_log ml_max ml_mlout ml_mlout_8 ml_model ml_nb0 ml_opt ml_p ml_plot ml_query ml_rdgrd ml_repor ml_s_e ml_score ml_searc ml_technique ml_unhold mleval mlf_ mlmatbysum mlmatsum mlog mlogi mlogit mlogit_footnote mlogit_p mlopts mlsum mlvecsum mnl0_ mor more mov move mprobit mprobit_lf mprobit_p mrdu0_ mrdu1_ mvdecode mvencode mvreg mvreg_estat n|0 nbreg nbreg_al nbreg_lf nbreg_p nbreg_sw nestreg net newey newey_7 newey_p news nl nl_7 nl_9 nl_9_p nl_p nl_p_7 nlcom nlcom_p nlexp2 nlexp2_7 nlexp2a nlexp2a_7 nlexp3 nlexp3_7 nlgom3 nlgom3_7 nlgom4 nlgom4_7 nlinit nllog3 nllog3_7 nllog4 nllog4_7 nlog_rd nlogit nlogit_p nlogitgen nlogittree nlpred no nobreak noi nois noisi noisil noisily note notes notes_dlg nptrend numlabel numlist odbc old_ver olo olog ologi ologi_sw ologit ologit_p ologitp on one onew onewa oneway op_colnm op_comp op_diff op_inv op_str opr opro oprob oprob_sw oprobi oprobi_p oprobit oprobitp opts_exclusive order orthog orthpoly ou out outf outfi outfil outfile outs outsh outshe outshee outsheet ovtest pac pac_7 palette parse parse_dissim pause pca pca_8 pca_display pca_estat pca_p pca_rotate pcamat pchart pchart_7 pchi pchi_7 pcorr pctile pentium pergram pergram_7 permute permute_8 personal peto_st pkcollapse pkcross pkequiv pkexamine pkexamine_7 pkshape pksumm pksumm_7 pl plo plot plugin pnorm pnorm_7 poisgof poiss_lf poiss_sw poisso_p poisson poisson_estat post postclose postfile postutil pperron pr prais prais_e prais_e2 prais_p predict predictnl preserve print pro prob probi probit probit_estat probit_p proc_time procoverlay procrustes procrustes_estat procrustes_p profiler prog progr progra program prop proportion prtest prtesti pwcorr pwd q\\s qby qbys qchi qchi_7 qladder qladder_7 qnorm qnorm_7 qqplot qqplot_7 qreg qreg_c qreg_p qreg_sw qu quadchk quantile quantile_7 que quer query range ranksum ratio rchart rchart_7 rcof recast reclink recode reg reg3 reg3_p regdw regr regre regre_p2 regres regres_p regress regress_estat regriv_p remap ren rena renam rename renpfix repeat replace report reshape restore ret retu retur return rm rmdir robvar roccomp roccomp_7 roccomp_8 rocf_lf rocfit rocfit_8 rocgold rocplot rocplot_7 roctab roctab_7 rolling rologit rologit_p rot rota rotat rotate rotatemat rreg rreg_p ru run runtest rvfplot rvfplot_7 rvpplot rvpplot_7 sa safesum sample sampsi sav save savedresults saveold sc sca scal scala scalar scatter scm_mine sco scob_lf scob_p scobi_sw scobit scor score scoreplot scoreplot_help scree screeplot screeplot_help sdtest sdtesti se search separate seperate serrbar serrbar_7 serset set set_defaults sfrancia sh she shel shell shewhart shewhart_7 signestimationsample signrank signtest simul simul_7 simulate simulate_8 sktest sleep slogit slogit_d2 slogit_p smooth snapspan so sor sort spearman spikeplot spikeplot_7 spikeplt spline_x split sqreg sqreg_p sret sretu sretur sreturn ssc st st_ct st_hc st_hcd st_hcd_sh st_is st_issys st_note st_promo st_set st_show st_smpl st_subid stack statsby statsby_8 stbase stci stci_7 stcox stcox_estat stcox_fr stcox_fr_ll stcox_p stcox_sw stcoxkm stcoxkm_7 stcstat stcurv stcurve stcurve_7 stdes stem stepwise stereg stfill stgen stir stjoin stmc stmh stphplot stphplot_7 stphtest stphtest_7 stptime strate strate_7 streg streg_sw streset sts sts_7 stset stsplit stsum sttocc sttoct stvary stweib su suest suest_8 sum summ summa summar summari summariz summarize sunflower sureg survcurv survsum svar svar_p svmat svy svy_disp svy_dreg svy_est svy_est_7 svy_estat svy_get svy_gnbreg_p svy_head svy_header svy_heckman_p svy_heckprob_p svy_intreg_p svy_ivreg_p svy_logistic_p svy_logit_p svy_mlogit_p svy_nbreg_p svy_ologit_p svy_oprobit_p svy_poisson_p svy_probit_p svy_regress_p svy_sub svy_sub_7 svy_x svy_x_7 svy_x_p svydes svydes_8 svygen svygnbreg svyheckman svyheckprob svyintreg svyintreg_7 svyintrg svyivreg svylc svylog_p svylogit svymarkout svymarkout_8 svymean svymlog svymlogit svynbreg svyolog svyologit svyoprob svyoprobit svyopts svypois svypois_7 svypoisson svyprobit svyprobt svyprop svyprop_7 svyratio svyreg svyreg_p svyregress svyset svyset_7 svyset_8 svytab svytab_7 svytest svytotal sw sw_8 swcnreg swcox swereg swilk swlogis swlogit swologit swoprbt swpois swprobit swqreg swtobit swweib symmetry symmi symplot symplot_7 syntax sysdescribe sysdir sysuse szroeter ta tab tab1 tab2 tab_or tabd tabdi tabdis tabdisp tabi table tabodds tabodds_7 tabstat tabu tabul tabula tabulat tabulate te tempfile tempname tempvar tes test testnl testparm teststd tetrachoric time_it timer tis tob tobi tobit tobit_p tobit_sw token tokeni tokeniz tokenize tostring total translate translator transmap treat_ll treatr_p treatreg trim trnb_cons trnb_mean trpoiss_d2 trunc_ll truncr_p truncreg tsappend tset tsfill tsline tsline_ex tsreport tsrevar tsrline tsset tssmooth tsunab ttest ttesti tut_chk tut_wait tutorial tw tware_st two twoway twoway__fpfit_serset twoway__function_gen twoway__histogram_gen twoway__ipoint_serset twoway__ipoints_serset twoway__kdensity_gen twoway__lfit_serset twoway__normgen_gen twoway__pci_serset twoway__qfit_serset twoway__scatteri_serset twoway__sunflower_gen twoway_ksm_serset ty typ type typeof u|0 unab unabbrev unabcmd update us use uselabel var var_mkcompanion var_p varbasic varfcast vargranger varirf varirf_add varirf_cgraph varirf_create varirf_ctable varirf_describe varirf_dir varirf_drop varirf_erase varirf_graph varirf_ograph varirf_rename varirf_set varirf_table varlist varlmar varnorm varsoc varstable varstable_w varstable_w2 varwle vce vec vec_fevd vec_mkphi vec_p vec_p_w vecirf_create veclmar veclmar_w vecnorm vecnorm_w vecrank vecstable verinst vers versi versio version view viewsource vif vwls wdatetof webdescribe webseek webuse weib1_lf weib2_lf weib_lf weib_lf0 weibhet_glf weibhet_glf_sh weibhet_glfa weibhet_glfa_sh weibhet_gp weibhet_ilf weibhet_ilf_sh weibhet_ilfa weibhet_ilfa_sh weibhet_ip weibu_sw weibul_p weibull weibull_c weibull_s weibullhet wh whelp whi which whil while wilc_st wilcoxon win wind windo window winexec wntestb wntestb_7 wntestq xchart xchart_7 xcorr xcorr_7 xi xi_6 xmlsav xmlsave xmluse xpose xsh xshe xshel xshell xt_iis xt_tis xtab_p xtabond xtbin_p xtclog xtcloglog xtcloglog_8 xtcloglog_d2 xtcloglog_pa_p xtcloglog_re_p xtcnt_p xtcorr xtdata xtdes xtfront_p xtfrontier xtgee xtgee_elink xtgee_estat xtgee_makeivar xtgee_p xtgee_plink xtgls xtgls_p xthaus xthausman xtht_p xthtaylor xtile xtint_p xtintreg xtintreg_8 xtintreg_d2 xtintreg_p xtivp_1 xtivp_2 xtivreg xtline xtline_ex xtlogit xtlogit_8 xtlogit_d2 xtlogit_fe_p xtlogit_pa_p xtlogit_re_p xtmixed xtmixed_estat xtmixed_p xtnb_fe xtnb_lf xtnbreg xtnbreg_pa_p xtnbreg_refe_p xtpcse xtpcse_p xtpois xtpoisson xtpoisson_d2 xtpoisson_pa_p xtpoisson_refe_p xtpred xtprobit xtprobit_8 xtprobit_d2 xtprobit_re_p xtps_fe xtps_lf xtps_ren xtps_ren_8 xtrar_p xtrc xtrc_p xtrchh xtrefe_p xtreg xtreg_be xtreg_fe xtreg_ml xtreg_pa_p xtreg_re xtregar xtrere_p xtset xtsf_ll xtsf_llti xtsum xttab xttest0 xttobit xttobit_8 xttobit_p xttrans yx yxview__barlike_draw yxview_area_draw yxview_bar_draw yxview_dot_draw yxview_dropline_draw yxview_function_draw yxview_iarrow_draw yxview_ilabels_draw yxview_normal_draw yxview_pcarrow_draw yxview_pcbarrow_draw yxview_pccapsym_draw yxview_pcscatter_draw yxview_pcspike_draw yxview_rarea_draw yxview_rbar_draw yxview_rbarm_draw yxview_rcap_draw yxview_rcapsym_draw yxview_rconnected_draw yxview_rline_draw yxview_rscatter_draw yxview_rspike_draw yxview_spike_draw yxview_sunflower_draw zap_s zinb zinb_llf zinb_plf zip zip_llf zip_p zip_plf zt_ct_5 zt_hc_5 zt_hcd_5 zt_is_5 zt_iss_5 zt_sho_5 zt_smp_5 ztbase_5 ztcox_5 ztdes_5 ztereg_5 ztfill_5 ztgen_5 ztir_5 ztjoin_5 ztnb ztnb_p ztp ztp_p zts_5 ztset_5 ztspli_5 ztsum_5 zttoct_5 ztvary_5 ztweib_5',
        contains: [
          { className: 'symbol', begin: /`[a-zA-Z0-9_]+'/ },
          { className: 'variable', begin: /\$\{?[a-zA-Z0-9_]+\}?/ },
          {
            className: 'string',
            variants: [{ begin: '`"[^\r\n]*?"\'' }, { begin: '"[^\r\n"]*"' }]
          },
          {
            className: 'built_in',
            variants: [
              {
                begin:
                  '\\b(abs|acos|asin|atan|atan2|atanh|ceil|cloglog|comb|cos|digamma|exp|floor|invcloglog|invlogit|ln|lnfact|lnfactorial|lngamma|log|log10|max|min|mod|reldif|round|sign|sin|sqrt|sum|tan|tanh|trigamma|trunc|betaden|Binomial|binorm|binormal|chi2|chi2tail|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|F|Fden|Ftail|gammaden|gammap|ibeta|invbinomial|invchi2|invchi2tail|invF|invFtail|invgammap|invibeta|invnchi2|invnFtail|invnibeta|invnorm|invnormal|invttail|nbetaden|nchi2|nFden|nFtail|nibeta|norm|normal|normalden|normd|npnchi2|tden|ttail|uniform|abbrev|char|index|indexnot|length|lower|ltrim|match|plural|proper|real|regexm|regexr|regexs|reverse|rtrim|string|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrtrim|strtrim|strupper|subinstr|subinword|substr|trim|upper|word|wordcount|_caller|autocode|byteorder|chop|clip|cond|e|epsdouble|epsfloat|group|inlist|inrange|irecode|matrix|maxbyte|maxdouble|maxfloat|maxint|maxlong|mi|minbyte|mindouble|minfloat|minint|minlong|missing|r|recode|replay|return|s|scalar|d|date|day|dow|doy|halfyear|mdy|month|quarter|week|year|d|daily|dofd|dofh|dofm|dofq|dofw|dofy|h|halfyearly|hofd|m|mofd|monthly|q|qofd|quarterly|tin|twithin|w|weekly|wofd|y|yearly|yh|ym|yofd|yq|yw|cholesky|colnumb|colsof|corr|det|diag|diag0cnt|el|get|hadamard|I|inv|invsym|issym|issymmetric|J|matmissing|matuniform|mreldif|nullmat|rownumb|rowsof|sweep|syminv|trace|vec|vecdiag)(?=\\(|$)'
              }
            ]
          },
          e.COMMENT('^[ \t]*\\*.*$', !1),
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['p21', 'step', 'stp'],
        case_insensitive: !0,
        lexemes: '[A-Z_][A-Z0-9_.]*',
        keywords: { keyword: 'HEADER ENDSEC DATA' },
        contains: [
          { className: 'meta', begin: 'ISO-10303-21;', relevance: 10 },
          { className: 'meta', begin: 'END-ISO-10303-21;', relevance: 10 },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.COMMENT('/\\*\\*!', '\\*/'),
          e.C_NUMBER_MODE,
          e.inherit(e.APOS_STRING_MODE, { illegal: null }),
          e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
          { className: 'string', begin: "'", end: "'" },
          {
            className: 'symbol',
            variants: [{ begin: '#', end: '\\d+', illegal: '\\W' }]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = { className: 'variable', begin: '\\$' + e.IDENT_RE },
        n = { className: 'number', begin: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})' },
        r = '[\\.\\s\\n\\[\\:,]';
      return {
        aliases: ['styl'],
        case_insensitive: !1,
        keywords: 'if else for in',
        illegal:
          '(' +
          [
            '\\?',
            '(\\bReturn\\b)',
            '(\\bEnd\\b)',
            '(\\bend\\b)',
            '(\\bdef\\b)',
            ';',
            '#\\s',
            '\\*\\s',
            '===\\s',
            '\\|',
            '%'
          ].join('|') +
          ')',
        contains: [
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          n,
          {
            begin: '\\.[a-zA-Z][a-zA-Z0-9_-]*' + r,
            returnBegin: !0,
            contains: [
              {
                className: 'selector-class',
                begin: '\\.[a-zA-Z][a-zA-Z0-9_-]*'
              }
            ]
          },
          {
            begin: '\\#[a-zA-Z][a-zA-Z0-9_-]*' + r,
            returnBegin: !0,
            contains: [
              { className: 'selector-id', begin: '\\#[a-zA-Z][a-zA-Z0-9_-]*' }
            ]
          },
          {
            begin:
              '\\b(' +
              [
                'a',
                'abbr',
                'address',
                'article',
                'aside',
                'audio',
                'b',
                'blockquote',
                'body',
                'button',
                'canvas',
                'caption',
                'cite',
                'code',
                'dd',
                'del',
                'details',
                'dfn',
                'div',
                'dl',
                'dt',
                'em',
                'fieldset',
                'figcaption',
                'figure',
                'footer',
                'form',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'header',
                'hgroup',
                'html',
                'i',
                'iframe',
                'img',
                'input',
                'ins',
                'kbd',
                'label',
                'legend',
                'li',
                'mark',
                'menu',
                'nav',
                'object',
                'ol',
                'p',
                'q',
                'quote',
                'samp',
                'section',
                'span',
                'strong',
                'summary',
                'sup',
                'table',
                'tbody',
                'td',
                'textarea',
                'tfoot',
                'th',
                'thead',
                'time',
                'tr',
                'ul',
                'var',
                'video'
              ].join('|') +
              ')' +
              r,
            returnBegin: !0,
            contains: [
              { className: 'selector-tag', begin: '\\b[a-zA-Z][a-zA-Z0-9_-]*' }
            ]
          },
          {
            begin:
              '&?:?:\\b(' +
              [
                'after',
                'before',
                'first-letter',
                'first-line',
                'active',
                'first-child',
                'focus',
                'hover',
                'lang',
                'link',
                'visited'
              ].join('|') +
              ')' +
              r
          },
          {
            begin:
              '@(' +
              [
                'charset',
                'css',
                'debug',
                'extend',
                'font-face',
                'for',
                'import',
                'include',
                'media',
                'mixin',
                'page',
                'warn',
                'while'
              ].join('|') +
              ')\\b'
          },
          t,
          e.CSS_NUMBER_MODE,
          e.NUMBER_MODE,
          {
            className: 'function',
            begin: '^[a-zA-Z][a-zA-Z0-9_-]*\\(.*\\)',
            illegal: '[\\n]',
            returnBegin: !0,
            contains: [
              { className: 'title', begin: '\\b[a-zA-Z][a-zA-Z0-9_-]*' },
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                contains: [
                  n,
                  t,
                  e.APOS_STRING_MODE,
                  e.CSS_NUMBER_MODE,
                  e.NUMBER_MODE,
                  e.QUOTE_STRING_MODE
                ]
              }
            ]
          },
          {
            className: 'attribute',
            begin:
              '\\b(' +
              [
                'align-content',
                'align-items',
                'align-self',
                'animation',
                'animation-delay',
                'animation-direction',
                'animation-duration',
                'animation-fill-mode',
                'animation-iteration-count',
                'animation-name',
                'animation-play-state',
                'animation-timing-function',
                'auto',
                'backface-visibility',
                'background',
                'background-attachment',
                'background-clip',
                'background-color',
                'background-image',
                'background-origin',
                'background-position',
                'background-repeat',
                'background-size',
                'border',
                'border-bottom',
                'border-bottom-color',
                'border-bottom-left-radius',
                'border-bottom-right-radius',
                'border-bottom-style',
                'border-bottom-width',
                'border-collapse',
                'border-color',
                'border-image',
                'border-image-outset',
                'border-image-repeat',
                'border-image-slice',
                'border-image-source',
                'border-image-width',
                'border-left',
                'border-left-color',
                'border-left-style',
                'border-left-width',
                'border-radius',
                'border-right',
                'border-right-color',
                'border-right-style',
                'border-right-width',
                'border-spacing',
                'border-style',
                'border-top',
                'border-top-color',
                'border-top-left-radius',
                'border-top-right-radius',
                'border-top-style',
                'border-top-width',
                'border-width',
                'bottom',
                'box-decoration-break',
                'box-shadow',
                'box-sizing',
                'break-after',
                'break-before',
                'break-inside',
                'caption-side',
                'clear',
                'clip',
                'clip-path',
                'color',
                'column-count',
                'column-fill',
                'column-gap',
                'column-rule',
                'column-rule-color',
                'column-rule-style',
                'column-rule-width',
                'column-span',
                'column-width',
                'columns',
                'content',
                'counter-increment',
                'counter-reset',
                'cursor',
                'direction',
                'display',
                'empty-cells',
                'filter',
                'flex',
                'flex-basis',
                'flex-direction',
                'flex-flow',
                'flex-grow',
                'flex-shrink',
                'flex-wrap',
                'float',
                'font',
                'font-family',
                'font-feature-settings',
                'font-kerning',
                'font-language-override',
                'font-size',
                'font-size-adjust',
                'font-stretch',
                'font-style',
                'font-variant',
                'font-variant-ligatures',
                'font-weight',
                'height',
                'hyphens',
                'icon',
                'image-orientation',
                'image-rendering',
                'image-resolution',
                'ime-mode',
                'inherit',
                'initial',
                'justify-content',
                'left',
                'letter-spacing',
                'line-height',
                'list-style',
                'list-style-image',
                'list-style-position',
                'list-style-type',
                'margin',
                'margin-bottom',
                'margin-left',
                'margin-right',
                'margin-top',
                'marks',
                'mask',
                'max-height',
                'max-width',
                'min-height',
                'min-width',
                'nav-down',
                'nav-index',
                'nav-left',
                'nav-right',
                'nav-up',
                'none',
                'normal',
                'object-fit',
                'object-position',
                'opacity',
                'order',
                'orphans',
                'outline',
                'outline-color',
                'outline-offset',
                'outline-style',
                'outline-width',
                'overflow',
                'overflow-wrap',
                'overflow-x',
                'overflow-y',
                'padding',
                'padding-bottom',
                'padding-left',
                'padding-right',
                'padding-top',
                'page-break-after',
                'page-break-before',
                'page-break-inside',
                'perspective',
                'perspective-origin',
                'pointer-events',
                'position',
                'quotes',
                'resize',
                'right',
                'tab-size',
                'table-layout',
                'text-align',
                'text-align-last',
                'text-decoration',
                'text-decoration-color',
                'text-decoration-line',
                'text-decoration-style',
                'text-indent',
                'text-overflow',
                'text-rendering',
                'text-shadow',
                'text-transform',
                'text-underline-position',
                'top',
                'transform',
                'transform-origin',
                'transform-style',
                'transition',
                'transition-delay',
                'transition-duration',
                'transition-property',
                'transition-timing-function',
                'unicode-bidi',
                'vertical-align',
                'visibility',
                'white-space',
                'widows',
                'width',
                'word-break',
                'word-spacing',
                'word-wrap',
                'z-index'
              ]
                .reverse()
                .join('|') +
              ')\\b',
            starts: {
              end: /;|$/,
              contains: [
                n,
                t,
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE,
                e.CSS_NUMBER_MODE,
                e.NUMBER_MODE,
                e.C_BLOCK_COMMENT_MODE
              ],
              illegal: /\./,
              relevance: 0
            }
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        case_insensitive: !0,
        contains: [
          { className: 'string', begin: '\\[\n(multipart)?', end: '\\]\n' },
          {
            className: 'string',
            begin: '\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}.\\d+Z'
          },
          { className: 'string', begin: '(\\+|-)\\d+' },
          {
            className: 'keyword',
            relevance: 10,
            variants: [
              {
                begin:
                  '^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?'
              },
              { begin: '^progress(:?)(\\s+)?(pop|push)?' },
              { begin: '^tags:' },
              { begin: '^time:' }
            ]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          keyword:
            '__COLUMN__ __FILE__ __FUNCTION__ __LINE__ as as! as? associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false fileprivate final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating open operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet',
          literal: 'true false nil',
          built_in:
            'abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip'
        },
        n = e.COMMENT('/\\*', '\\*/', { contains: ['self'] }),
        r = {
          className: 'subst',
          begin: /\\\(/,
          end: '\\)',
          keywords: t,
          contains: []
        },
        a = {
          className: 'number',
          begin:
            '\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b',
          relevance: 0
        },
        i = e.inherit(e.QUOTE_STRING_MODE, {
          contains: [r, e.BACKSLASH_ESCAPE]
        });
      return (
        (r.contains = [a]),
        {
          keywords: t,
          contains: [
            i,
            e.C_LINE_COMMENT_MODE,
            n,
            { className: 'type', begin: "\\b[A-Z][\\wÀ-ʸ']*", relevance: 0 },
            a,
            {
              className: 'function',
              beginKeywords: 'func',
              end: '{',
              excludeEnd: !0,
              contains: [
                e.inherit(e.TITLE_MODE, { begin: /[A-Za-z$_][0-9A-Za-z$_]*/ }),
                { begin: /</, end: />/ },
                {
                  className: 'params',
                  begin: /\(/,
                  end: /\)/,
                  endsParent: !0,
                  keywords: t,
                  contains: [
                    'self',
                    a,
                    i,
                    e.C_BLOCK_COMMENT_MODE,
                    { begin: ':' }
                  ],
                  illegal: /["']/
                }
              ],
              illegal: /\[|%/
            },
            {
              className: 'class',
              beginKeywords: 'struct protocol class extension enum',
              keywords: t,
              end: '\\{',
              excludeEnd: !0,
              contains: [
                e.inherit(e.TITLE_MODE, {
                  begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
                })
              ]
            },
            {
              className: 'meta',
              begin:
                '(@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain)'
            },
            {
              beginKeywords: 'import',
              end: /$/,
              contains: [e.C_LINE_COMMENT_MODE, n]
            }
          ]
        }
      );
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        contains: [
          {
            className: 'comment',
            begin: /\$noop\(/,
            end: /\)/,
            contains: [
              { begin: /\(/, end: /\)/, contains: ['self', { begin: /\\./ }] }
            ],
            relevance: 10
          },
          {
            className: 'keyword',
            begin: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,
            end: /\(/,
            excludeEnd: !0
          },
          { className: 'variable', begin: /%[_a-zA-Z0-9:]*/, end: '%' },
          { className: 'symbol', begin: /\\./ }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = '[a-zA-Z_][\\w\\-]*',
        n = {
          className: 'attr',
          variants: [
            { begin: '^[ \\-]*' + t + ':' },
            { begin: '^[ \\-]*"' + t + '":' },
            { begin: "^[ \\-]*'" + t + "':" }
          ]
        },
        r = {
          className: 'string',
          relevance: 0,
          variants: [
            { begin: /'/, end: /'/ },
            { begin: /"/, end: /"/ },
            { begin: /\S+/ }
          ],
          contains: [
            e.BACKSLASH_ESCAPE,
            {
              className: 'template-variable',
              variants: [{ begin: '{{', end: '}}' }, { begin: '%{', end: '}' }]
            }
          ]
        };
      return {
        case_insensitive: !0,
        aliases: ['yml', 'YAML', 'yaml'],
        contains: [
          n,
          { className: 'meta', begin: '^---s*$', relevance: 10 },
          {
            className: 'string',
            begin: '[\\|>] *$',
            returnEnd: !0,
            contains: r.contains,
            end: n.variants[0].begin
          },
          {
            begin: '<%[%=-]?',
            end: '[%-]?%>',
            subLanguage: 'ruby',
            excludeBegin: !0,
            excludeEnd: !0,
            relevance: 0
          },
          { className: 'type', begin: '!!' + e.UNDERSCORE_IDENT_RE },
          { className: 'meta', begin: '&' + e.UNDERSCORE_IDENT_RE + '$' },
          { className: 'meta', begin: '\\*' + e.UNDERSCORE_IDENT_RE + '$' },
          { className: 'bullet', begin: '^ *-', relevance: 0 },
          e.HASH_COMMENT_MODE,
          {
            beginKeywords: 'true false yes no null',
            keywords: { literal: 'true false yes no null' }
          },
          e.C_NUMBER_MODE,
          r
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        case_insensitive: !0,
        contains: [
          e.HASH_COMMENT_MODE,
          {
            className: 'meta',
            variants: [
              { begin: '^TAP version (\\d+)$' },
              { begin: '^1\\.\\.(\\d+)$' }
            ]
          },
          {
            begin: '(s+)?---$',
            end: '\\.\\.\\.$',
            subLanguage: 'yaml',
            relevance: 0
          },
          { className: 'number', begin: ' (\\d+) ' },
          {
            className: 'symbol',
            variants: [{ begin: '^ok' }, { begin: '^not ok' }]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['tk'],
        keywords:
          'after append apply array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd chan clock close concat continue dde dict encoding eof error eval exec exit expr fblocked fconfigure fcopy file fileevent filename flush for foreach format gets glob global history http if incr info interp join lappend|10 lassign|10 lindex|10 linsert|10 list llength|10 load lrange|10 lrepeat|10 lreplace|10 lreverse|10 lsearch|10 lset|10 lsort|10 mathfunc mathop memory msgcat namespace open package parray pid pkg::create pkg_mkIndex platform platform::shell proc puts pwd read refchan regexp registry regsub|10 rename return safe scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_startOfPreviousWord tcl_wordBreakAfter tcl_wordBreakBefore tcltest tclvars tell time tm trace unknown unload unset update uplevel upvar variable vwait while',
        contains: [
          e.COMMENT(';[ \\t]*#', '$'),
          e.COMMENT('^[ \\t]*#', '$'),
          {
            beginKeywords: 'proc',
            end: '[\\{]',
            excludeEnd: !0,
            contains: [
              {
                className: 'title',
                begin: '[ \\t\\n\\r]+(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*',
                end: '[ \\t\\n\\r]',
                endsWithParent: !0,
                excludeEnd: !0
              }
            ]
          },
          {
            excludeEnd: !0,
            variants: [
              {
                begin:
                  '\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*\\(([a-zA-Z0-9_])*\\)',
                end: '[^a-zA-Z0-9_\\}\\$]'
              },
              {
                begin: '\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*',
                end: '(\\))?[^a-zA-Z0-9_\\}\\$]'
              }
            ]
          },
          {
            className: 'string',
            contains: [e.BACKSLASH_ESCAPE],
            variants: [
              e.inherit(e.APOS_STRING_MODE, { illegal: null }),
              e.inherit(e.QUOTE_STRING_MODE, { illegal: null })
            ]
          },
          {
            className: 'number',
            variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
        className: 'tag',
        begin: /\\/,
        relevance: 0,
        contains: [
          {
            className: 'name',
            variants: [
              { begin: /[a-zA-Zа-яА-я]+[*]?/ },
              { begin: /[^a-zA-Zа-яА-я0-9]/ }
            ],
            starts: {
              endsWithParent: !0,
              relevance: 0,
              contains: [
                {
                  className: 'string',
                  variants: [
                    { begin: /\[/, end: /\]/ },
                    { begin: /\{/, end: /\}/ }
                  ]
                },
                {
                  begin: /\s*=\s*/,
                  endsWithParent: !0,
                  relevance: 0,
                  contains: [
                    {
                      className: 'number',
                      begin: /-?\d*\.?\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?/
                    }
                  ]
                }
              ]
            }
          }
        ]
      };
      return {
        contains: [
          t,
          {
            className: 'formula',
            contains: [t],
            relevance: 0,
            variants: [
              { begin: /\$\$/, end: /\$\$/ },
              { begin: /\$/, end: /\$/ }
            ]
          },
          e.COMMENT('%', '$', { relevance: 0 })
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        keywords: {
          keyword:
            'namespace const typedef struct enum service exception void oneway set list map required optional',
          built_in: 'bool byte i16 i32 i64 double string binary',
          literal: 'true false'
        },
        contains: [
          e.QUOTE_STRING_MODE,
          e.NUMBER_MODE,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          {
            className: 'class',
            beginKeywords: 'struct enum service exception',
            end: /\{/,
            illegal: /\n/,
            contains: [
              e.inherit(e.TITLE_MODE, {
                starts: { endsWithParent: !0, excludeEnd: !0 }
              })
            ]
          },
          {
            begin: '\\b(set|list|map)\\s*<',
            end: '>',
            keywords: 'bool byte i16 i32 i64 double string binary',
            contains: ['self']
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = { className: 'number', begin: '[1-9][0-9]*', relevance: 0 },
        n = { className: 'symbol', begin: ':[^\\]]+' };
      return {
        keywords: {
          keyword:
            'ABORT ACC ADJUST AND AP_LD BREAK CALL CNT COL CONDITION CONFIG DA DB DIV DETECT ELSE END ENDFOR ERR_NUM ERROR_PROG FINE FOR GP GUARD INC IF JMP LINEAR_MAX_SPEED LOCK MOD MONITOR OFFSET Offset OR OVERRIDE PAUSE PREG PTH RT_LD RUN SELECT SKIP Skip TA TB TO TOOL_OFFSET Tool_Offset UF UT UFRAME_NUM UTOOL_NUM UNLOCK WAIT X Y Z W P R STRLEN SUBSTR FINDSTR VOFFSET PROG ATTR MN POS',
          literal: 'ON OFF max_speed LPOS JPOS ENABLE DISABLE START STOP RESET'
        },
        contains: [
          {
            className: 'built_in',
            begin:
              '(AR|P|PAYLOAD|PR|R|SR|RSR|LBL|VR|UALM|MESSAGE|UTOOL|UFRAME|TIMER|    TIMER_OVERFLOW|JOINT_MAX_SPEED|RESUME_PROG|DIAG_REC)\\[',
            end: '\\]',
            contains: ['self', t, n]
          },
          {
            className: 'built_in',
            begin: '(AI|AO|DI|DO|F|RI|RO|UI|UO|GI|GO|SI|SO)\\[',
            end: '\\]',
            contains: ['self', t, e.QUOTE_STRING_MODE, n]
          },
          { className: 'keyword', begin: '/(PROG|ATTR|MN|POS|END)\\b' },
          { className: 'keyword', begin: '(CALL|RUN|POINT_LOGIC|LBL)\\b' },
          {
            className: 'keyword',
            begin: '\\b(ACC|CNT|Skip|Offset|PSPD|RT_LD|AP_LD|Tool_Offset)'
          },
          {
            className: 'number',
            begin: '\\d+(sec|msec|mm/sec|cm/min|inch/min|deg/sec|mm|in|cm)?\\b',
            relevance: 0
          },
          e.COMMENT('//', '[;$]'),
          e.COMMENT('!', '[;$]'),
          e.COMMENT('--eg:', '$'),
          e.QUOTE_STRING_MODE,
          { className: 'string', begin: "'", end: "'" },
          e.C_NUMBER_MODE,
          { className: 'variable', begin: '\\$[A-Za-z0-9_]+' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t =
          'attribute block constant cycle date dump include max min parent random range source template_from_string',
        n = {
          beginKeywords: t,
          keywords: { name: t },
          relevance: 0,
          contains: [{ className: 'params', begin: '\\(', end: '\\)' }]
        },
        r = {
          begin: /\|[A-Za-z_]+:?/,
          keywords:
            'abs batch capitalize convert_encoding date date_modify default escape first format join json_encode keys last length lower merge nl2br number_format raw replace reverse round slice sort split striptags title trim upper url_encode',
          contains: [n]
        },
        a =
          'autoescape block do embed extends filter flush for if import include macro sandbox set spaceless use verbatim';
      return (
        (a =
          a +
          ' ' +
          a
            .split(' ')
            .map(function(e) {
              return 'end' + e;
            })
            .join(' ')),
        {
          aliases: ['craftcms'],
          case_insensitive: !0,
          subLanguage: 'xml',
          contains: [
            e.COMMENT(/\{#/, /#}/),
            {
              className: 'template-tag',
              begin: /\{%/,
              end: /%}/,
              contains: [
                {
                  className: 'name',
                  begin: /\w+/,
                  keywords: a,
                  starts: { endsWithParent: !0, contains: [r, n], relevance: 0 }
                }
              ]
            },
            {
              className: 'template-variable',
              begin: /\{\{/,
              end: /}}/,
              contains: ['self', r, n]
            }
          ]
        }
      );
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
        keyword:
          'in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await',
        literal: 'true false null undefined NaN Infinity',
        built_in:
          'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise'
      };
      return {
        aliases: ['ts'],
        keywords: t,
        contains: [
          { className: 'meta', begin: /^\s*['"]use strict['"]/ },
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          {
            className: 'string',
            begin: '`',
            end: '`',
            contains: [
              e.BACKSLASH_ESCAPE,
              { className: 'subst', begin: '\\$\\{', end: '\\}' }
            ]
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          {
            className: 'number',
            variants: [
              { begin: '\\b(0[bB][01]+)' },
              { begin: '\\b(0[oO][0-7]+)' },
              { begin: e.C_NUMBER_RE }
            ],
            relevance: 0
          },
          {
            begin: '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
            keywords: 'return throw case',
            contains: [
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              e.REGEXP_MODE,
              {
                className: 'function',
                begin: '(\\(.*?\\)|' + e.IDENT_RE + ')\\s*=>',
                returnBegin: !0,
                end: '\\s*=>',
                contains: [
                  {
                    className: 'params',
                    variants: [
                      { begin: e.IDENT_RE },
                      { begin: /\(\s*\)/ },
                      {
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: t,
                        contains: [
                          'self',
                          e.C_LINE_COMMENT_MODE,
                          e.C_BLOCK_COMMENT_MODE
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            relevance: 0
          },
          {
            className: 'function',
            begin: 'function',
            end: /[\{;]/,
            excludeEnd: !0,
            keywords: t,
            contains: [
              'self',
              e.inherit(e.TITLE_MODE, { begin: /[A-Za-z$_][0-9A-Za-z$_]*/ }),
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: t,
                contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
                illegal: /["'\(]/
              }
            ],
            illegal: /%/,
            relevance: 0
          },
          {
            beginKeywords: 'constructor',
            end: /\{/,
            excludeEnd: !0,
            contains: [
              'self',
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: t,
                contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
                illegal: /["'\(]/
              }
            ]
          },
          { begin: /module\./, keywords: { built_in: 'module' }, relevance: 0 },
          { beginKeywords: 'module', end: /\{/, excludeEnd: !0 },
          {
            beginKeywords: 'interface',
            end: /\{/,
            excludeEnd: !0,
            keywords: 'interface extends'
          },
          { begin: /\$[(.]/ },
          { begin: '\\.' + e.IDENT_RE, relevance: 0 },
          { className: 'meta', begin: '@[A-Za-z]+' }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        keywords: {
          keyword:
            'char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 uint16 uint32 uint64 float double bool struct enum string void weak unowned owned async signal static abstract interface override virtual delegate if while do for foreach else switch case break default return try catch public private protected internal using new this get set const stdout stdin stderr var',
          built_in: 'DBus GLib CCode Gee Object Gtk Posix',
          literal: 'false true null'
        },
        contains: [
          {
            className: 'class',
            beginKeywords: 'class interface namespace',
            end: '{',
            excludeEnd: !0,
            illegal: '[^,:\\n\\s\\.]',
            contains: [e.UNDERSCORE_TITLE_MODE]
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          { className: 'string', begin: '"""', end: '"""', relevance: 5 },
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          e.C_NUMBER_MODE,
          { className: 'meta', begin: '^#', end: '$', relevance: 2 }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['vb'],
        case_insensitive: !0,
        keywords: {
          keyword:
            'addhandler addressof alias and andalso aggregate ansi as assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into is isfalse isnot istrue join key let lib like loop me mid mod module mustinherit mustoverride mybase myclass namespace narrowing new next not notinheritable notoverridable of off on operator option optional or order orelse overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim rem removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly xor',
          built_in:
            'boolean byte cbool cbyte cchar cdate cdec cdbl char cint clng cobj csbyte cshort csng cstr ctype date decimal directcast double gettype getxmlnamespace iif integer long object sbyte short single string trycast typeof uinteger ulong ushort',
          literal: 'true false nothing'
        },
        illegal: '//|{|}|endif|gosub|variant|wend',
        contains: [
          e.inherit(e.QUOTE_STRING_MODE, { contains: [{ begin: '""' }] }),
          e.COMMENT("'", '$', {
            returnBegin: !0,
            contains: [
              {
                className: 'doctag',
                begin: "'''|\x3c!--|--\x3e",
                contains: [e.PHRASAL_WORDS_MODE]
              },
              {
                className: 'doctag',
                begin: '</?',
                end: '>',
                contains: [e.PHRASAL_WORDS_MODE]
              }
            ]
          }),
          e.C_NUMBER_MODE,
          {
            className: 'meta',
            begin: '#',
            end: '$',
            keywords: {
              'meta-keyword': 'if else elseif end region externalsource'
            }
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['vbs'],
        case_insensitive: !0,
        keywords: {
          keyword:
            'call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto',
          built_in:
            'lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion scriptengine split scriptengineminorversion cint sin datepart ltrim sqr scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw chrw regexp server response request cstr err',
          literal: 'true false null nothing empty'
        },
        illegal: '//',
        contains: [
          e.inherit(e.QUOTE_STRING_MODE, { contains: [{ begin: '""' }] }),
          e.COMMENT(/'/, /$/, { relevance: 0 }),
          e.C_NUMBER_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        subLanguage: 'xml',
        contains: [{ begin: '<%', end: '%>', subLanguage: 'vbscript' }]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        aliases: ['v', 'sv', 'svh'],
        case_insensitive: !1,
        keywords: {
          keyword:
            'accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf|0 bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate|5 genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor',
          literal: 'null',
          built_in:
            '$finish $stop $exit $fatal $error $warning $info $realtime $time $printtimescale $bitstoreal $bitstoshortreal $itor $signed $cast $bits $stime $timeformat $realtobits $shortrealtobits $rtoi $unsigned $asserton $assertkill $assertpasson $assertfailon $assertnonvacuouson $assertoff $assertcontrol $assertpassoff $assertfailoff $assertvacuousoff $isunbounded $sampled $fell $changed $past_gclk $fell_gclk $changed_gclk $rising_gclk $steady_gclk $coverage_control $coverage_get $coverage_save $set_coverage_db_name $rose $stable $past $rose_gclk $stable_gclk $future_gclk $falling_gclk $changing_gclk $display $coverage_get_max $coverage_merge $get_coverage $load_coverage_db $typename $unpacked_dimensions $left $low $increment $clog2 $ln $log10 $exp $sqrt $pow $floor $ceil $sin $cos $tan $countbits $onehot $isunknown $fatal $warning $dimensions $right $high $size $asin $acos $atan $atan2 $hypot $sinh $cosh $tanh $asinh $acosh $atanh $countones $onehot0 $error $info $random $dist_chi_square $dist_erlang $dist_exponential $dist_normal $dist_poisson $dist_t $dist_uniform $q_initialize $q_remove $q_exam $async$and$array $async$nand$array $async$or$array $async$nor$array $sync$and$array $sync$nand$array $sync$or$array $sync$nor$array $q_add $q_full $psprintf $async$and$plane $async$nand$plane $async$or$plane $async$nor$plane $sync$and$plane $sync$nand$plane $sync$or$plane $sync$nor$plane $system $display $displayb $displayh $displayo $strobe $strobeb $strobeh $strobeo $write $readmemb $readmemh $writememh $value$plusargs $dumpvars $dumpon $dumplimit $dumpports $dumpportson $dumpportslimit $writeb $writeh $writeo $monitor $monitorb $monitorh $monitoro $writememb $dumpfile $dumpoff $dumpall $dumpflush $dumpportsoff $dumpportsall $dumpportsflush $fclose $fdisplay $fdisplayb $fdisplayh $fdisplayo $fstrobe $fstrobeb $fstrobeh $fstrobeo $swrite $swriteb $swriteh $swriteo $fscanf $fread $fseek $fflush $feof $fopen $fwrite $fwriteb $fwriteh $fwriteo $fmonitor $fmonitorb $fmonitorh $fmonitoro $sformat $sformatf $fgetc $ungetc $fgets $sscanf $rewind $ftell $ferror'
        },
        lexemes: /[\w\$]+/,
        contains: [
          e.C_BLOCK_COMMENT_MODE,
          e.C_LINE_COMMENT_MODE,
          e.QUOTE_STRING_MODE,
          {
            className: 'number',
            contains: [e.BACKSLASH_ESCAPE],
            variants: [
              { begin: "\\b((\\d+'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)" },
              { begin: "\\B(('(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)" },
              { begin: '\\b([0-9_])+', relevance: 0 }
            ]
          },
          {
            className: 'variable',
            variants: [
              { begin: '#\\((?!parameter).+\\)' },
              { begin: '\\.\\w+', relevance: 0 }
            ]
          },
          {
            className: 'meta',
            begin: '`',
            end: '$',
            keywords: {
              'meta-keyword':
                'define __FILE__ __LINE__ begin_keywords celldefine default_nettype define else elsif end_keywords endcelldefine endif ifdef ifndef include line nounconnected_drive pragma resetall timescale unconnected_drive undef undefineall'
            },
            relevance: 0
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        case_insensitive: !0,
        keywords: {
          keyword:
            'abs access after alias all and architecture array assert assume assume_guarantee attribute begin block body buffer bus case component configuration constant context cover disconnect downto default else elsif end entity exit fairness file for force function generate generic group guarded if impure in inertial inout is label library linkage literal loop map mod nand new next nor not null of on open or others out package port postponed procedure process property protected pure range record register reject release rem report restrict restrict_guarantee return rol ror select sequence severity shared signal sla sll sra srl strong subtype then to transport type unaffected units until use variable vmode vprop vunit wait when while with xnor xor',
          built_in:
            'boolean bit character integer time delay_length natural positive string bit_vector file_open_kind file_open_status std_logic std_logic_vector unsigned signed boolean_vector integer_vector std_ulogic std_ulogic_vector unresolved_unsigned u_unsigned unresolved_signed u_signedreal_vector time_vector',
          literal: 'false true note warning error failure line text side width'
        },
        illegal: '{',
        contains: [
          e.C_BLOCK_COMMENT_MODE,
          e.COMMENT('--', '$'),
          e.QUOTE_STRING_MODE,
          {
            className: 'number',
            begin:
              '\\b(\\d(_|\\d)*#\\w+(\\.\\w+)?#([eE][-+]?\\d(_|\\d)*)?|\\d(_|\\d)*(\\.\\d(_|\\d)*)?([eE][-+]?\\d(_|\\d)*)?)',
            relevance: 0
          },
          {
            className: 'string',
            begin: "'(U|X|0|1|Z|W|L|H|-)'",
            contains: [e.BACKSLASH_ESCAPE]
          },
          {
            className: 'symbol',
            begin: "'[A-Za-z](_?[A-Za-z0-9])*",
            contains: [e.BACKSLASH_ESCAPE]
          }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        lexemes: /[!#@\w]+/,
        keywords: {
          keyword:
            'N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope cp cpf cq cr cs cst cu cuna cunme cw delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu go gr grepa gu gv ha helpf helpg helpt hi hid his ia iabc if ij il im imapc ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf quita qa rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank',
          built_in:
            'synIDtrans atan2 range matcharg did_filetype asin feedkeys xor argv complete_check add getwinposx getqflist getwinposy screencol clearmatches empty extend getcmdpos mzeval garbagecollect setreg ceil sqrt diff_hlID inputsecret get getfperm getpid filewritable shiftwidth max sinh isdirectory synID system inputrestore winline atan visualmode inputlist tabpagewinnr round getregtype mapcheck hasmapto histdel argidx findfile sha256 exists toupper getcmdline taglist string getmatches bufnr strftime winwidth bufexists strtrans tabpagebuflist setcmdpos remote_read printf setloclist getpos getline bufwinnr float2nr len getcmdtype diff_filler luaeval resolve libcallnr foldclosedend reverse filter has_key bufname str2float strlen setline getcharmod setbufvar index searchpos shellescape undofile foldclosed setqflist buflisted strchars str2nr virtcol floor remove undotree remote_expr winheight gettabwinvar reltime cursor tabpagenr finddir localtime acos getloclist search tanh matchend rename gettabvar strdisplaywidth type abs py3eval setwinvar tolower wildmenumode log10 spellsuggest bufloaded synconcealed nextnonblank server2client complete settabwinvar executable input wincol setmatches getftype hlID inputsave searchpair or screenrow line settabvar histadd deepcopy strpart remote_peek and eval getftime submatch screenchar winsaveview matchadd mkdir screenattr getfontname libcall reltimestr getfsize winnr invert pow getbufline byte2line soundfold repeat fnameescape tagfiles sin strwidth spellbadword trunc maparg log lispindent hostname setpos globpath remote_foreground getchar synIDattr fnamemodify cscope_connection stridx winbufnr indent min complete_add nr2char searchpairpos inputdialog values matchlist items hlexists strridx browsedir expand fmod pathshorten line2byte argc count getwinvar glob foldtextresult getreg foreground cosh matchdelete has char2nr simplify histget searchdecl iconv winrestcmd pumvisible writefile foldlevel haslocaldir keys cos matchstr foldtext histnr tan tempname getcwd byteidx getbufvar islocked escape eventhandler remote_send serverlist winrestview synstack pyeval prevnonblank readfile cindent filereadable changenr exp'
        },
        illegal: /;/,
        contains: [
          e.NUMBER_MODE,
          e.APOS_STRING_MODE,
          { className: 'string', begin: /"(\\"|\n\\|[^"\n])*"/ },
          e.COMMENT('"', '$'),
          { className: 'variable', begin: /[bwtglsav]:[\w\d_]*/ },
          {
            className: 'function',
            beginKeywords: 'function function!',
            end: '$',
            relevance: 0,
            contains: [
              e.TITLE_MODE,
              { className: 'params', begin: '\\(', end: '\\)' }
            ]
          },
          { className: 'symbol', begin: /<[\w-]+>/ }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return {
        case_insensitive: !0,
        lexemes: '[.%]?' + e.IDENT_RE,
        keywords: {
          keyword:
            'lock rep repe repz repne repnz xaquire xrelease bnd nobnd aaa aad aam aas adc add and arpl bb0_reset bb1_reset bound bsf bsr bswap bt btc btr bts call cbw cdq cdqe clc cld cli clts cmc cmp cmpsb cmpsd cmpsq cmpsw cmpxchg cmpxchg486 cmpxchg8b cmpxchg16b cpuid cpu_read cpu_write cqo cwd cwde daa das dec div dmint emms enter equ f2xm1 fabs fadd faddp fbld fbstp fchs fclex fcmovb fcmovbe fcmove fcmovnb fcmovnbe fcmovne fcmovnu fcmovu fcom fcomi fcomip fcomp fcompp fcos fdecstp fdisi fdiv fdivp fdivr fdivrp femms feni ffree ffreep fiadd ficom ficomp fidiv fidivr fild fimul fincstp finit fist fistp fisttp fisub fisubr fld fld1 fldcw fldenv fldl2e fldl2t fldlg2 fldln2 fldpi fldz fmul fmulp fnclex fndisi fneni fninit fnop fnsave fnstcw fnstenv fnstsw fpatan fprem fprem1 fptan frndint frstor fsave fscale fsetpm fsin fsincos fsqrt fst fstcw fstenv fstp fstsw fsub fsubp fsubr fsubrp ftst fucom fucomi fucomip fucomp fucompp fxam fxch fxtract fyl2x fyl2xp1 hlt ibts icebp idiv imul in inc incbin insb insd insw int int01 int1 int03 int3 into invd invpcid invlpg invlpga iret iretd iretq iretw jcxz jecxz jrcxz jmp jmpe lahf lar lds lea leave les lfence lfs lgdt lgs lidt lldt lmsw loadall loadall286 lodsb lodsd lodsq lodsw loop loope loopne loopnz loopz lsl lss ltr mfence monitor mov movd movq movsb movsd movsq movsw movsx movsxd movzx mul mwait neg nop not or out outsb outsd outsw packssdw packsswb packuswb paddb paddd paddsb paddsiw paddsw paddusb paddusw paddw pand pandn pause paveb pavgusb pcmpeqb pcmpeqd pcmpeqw pcmpgtb pcmpgtd pcmpgtw pdistib pf2id pfacc pfadd pfcmpeq pfcmpge pfcmpgt pfmax pfmin pfmul pfrcp pfrcpit1 pfrcpit2 pfrsqit1 pfrsqrt pfsub pfsubr pi2fd pmachriw pmaddwd pmagw pmulhriw pmulhrwa pmulhrwc pmulhw pmullw pmvgezb pmvlzb pmvnzb pmvzb pop popa popad popaw popf popfd popfq popfw por prefetch prefetchw pslld psllq psllw psrad psraw psrld psrlq psrlw psubb psubd psubsb psubsiw psubsw psubusb psubusw psubw punpckhbw punpckhdq punpckhwd punpcklbw punpckldq punpcklwd push pusha pushad pushaw pushf pushfd pushfq pushfw pxor rcl rcr rdshr rdmsr rdpmc rdtsc rdtscp ret retf retn rol ror rdm rsdc rsldt rsm rsts sahf sal salc sar sbb scasb scasd scasq scasw sfence sgdt shl shld shr shrd sidt sldt skinit smi smint smintold smsw stc std sti stosb stosd stosq stosw str sub svdc svldt svts swapgs syscall sysenter sysexit sysret test ud0 ud1 ud2b ud2 ud2a umov verr verw fwait wbinvd wrshr wrmsr xadd xbts xchg xlatb xlat xor cmove cmovz cmovne cmovnz cmova cmovnbe cmovae cmovnb cmovb cmovnae cmovbe cmovna cmovg cmovnle cmovge cmovnl cmovl cmovnge cmovle cmovng cmovc cmovnc cmovo cmovno cmovs cmovns cmovp cmovpe cmovnp cmovpo je jz jne jnz ja jnbe jae jnb jb jnae jbe jna jg jnle jge jnl jl jnge jle jng jc jnc jo jno js jns jpo jnp jpe jp sete setz setne setnz seta setnbe setae setnb setnc setb setnae setcset setbe setna setg setnle setge setnl setl setnge setle setng sets setns seto setno setpe setp setpo setnp addps addss andnps andps cmpeqps cmpeqss cmpleps cmpless cmpltps cmpltss cmpneqps cmpneqss cmpnleps cmpnless cmpnltps cmpnltss cmpordps cmpordss cmpunordps cmpunordss cmpps cmpss comiss cvtpi2ps cvtps2pi cvtsi2ss cvtss2si cvttps2pi cvttss2si divps divss ldmxcsr maxps maxss minps minss movaps movhps movlhps movlps movhlps movmskps movntps movss movups mulps mulss orps rcpps rcpss rsqrtps rsqrtss shufps sqrtps sqrtss stmxcsr subps subss ucomiss unpckhps unpcklps xorps fxrstor fxrstor64 fxsave fxsave64 xgetbv xsetbv xsave xsave64 xsaveopt xsaveopt64 xrstor xrstor64 prefetchnta prefetcht0 prefetcht1 prefetcht2 maskmovq movntq pavgb pavgw pextrw pinsrw pmaxsw pmaxub pminsw pminub pmovmskb pmulhuw psadbw pshufw pf2iw pfnacc pfpnacc pi2fw pswapd maskmovdqu clflush movntdq movnti movntpd movdqa movdqu movdq2q movq2dq paddq pmuludq pshufd pshufhw pshuflw pslldq psrldq psubq punpckhqdq punpcklqdq addpd addsd andnpd andpd cmpeqpd cmpeqsd cmplepd cmplesd cmpltpd cmpltsd cmpneqpd cmpneqsd cmpnlepd cmpnlesd cmpnltpd cmpnltsd cmpordpd cmpordsd cmpunordpd cmpunordsd cmppd comisd cvtdq2pd cvtdq2ps cvtpd2dq cvtpd2pi cvtpd2ps cvtpi2pd cvtps2dq cvtps2pd cvtsd2si cvtsd2ss cvtsi2sd cvtss2sd cvttpd2pi cvttpd2dq cvttps2dq cvttsd2si divpd divsd maxpd maxsd minpd minsd movapd movhpd movlpd movmskpd movupd mulpd mulsd orpd shufpd sqrtpd sqrtsd subpd subsd ucomisd unpckhpd unpcklpd xorpd addsubpd addsubps haddpd haddps hsubpd hsubps lddqu movddup movshdup movsldup clgi stgi vmcall vmclear vmfunc vmlaunch vmload vmmcall vmptrld vmptrst vmread vmresume vmrun vmsave vmwrite vmxoff vmxon invept invvpid pabsb pabsw pabsd palignr phaddw phaddd phaddsw phsubw phsubd phsubsw pmaddubsw pmulhrsw pshufb psignb psignw psignd extrq insertq movntsd movntss lzcnt blendpd blendps blendvpd blendvps dppd dpps extractps insertps movntdqa mpsadbw packusdw pblendvb pblendw pcmpeqq pextrb pextrd pextrq phminposuw pinsrb pinsrd pinsrq pmaxsb pmaxsd pmaxud pmaxuw pminsb pminsd pminud pminuw pmovsxbw pmovsxbd pmovsxbq pmovsxwd pmovsxwq pmovsxdq pmovzxbw pmovzxbd pmovzxbq pmovzxwd pmovzxwq pmovzxdq pmuldq pmulld ptest roundpd roundps roundsd roundss crc32 pcmpestri pcmpestrm pcmpistri pcmpistrm pcmpgtq popcnt getsec pfrcpv pfrsqrtv movbe aesenc aesenclast aesdec aesdeclast aesimc aeskeygenassist vaesenc vaesenclast vaesdec vaesdeclast vaesimc vaeskeygenassist vaddpd vaddps vaddsd vaddss vaddsubpd vaddsubps vandpd vandps vandnpd vandnps vblendpd vblendps vblendvpd vblendvps vbroadcastss vbroadcastsd vbroadcastf128 vcmpeq_ospd vcmpeqpd vcmplt_ospd vcmpltpd vcmple_ospd vcmplepd vcmpunord_qpd vcmpunordpd vcmpneq_uqpd vcmpneqpd vcmpnlt_uspd vcmpnltpd vcmpnle_uspd vcmpnlepd vcmpord_qpd vcmpordpd vcmpeq_uqpd vcmpnge_uspd vcmpngepd vcmpngt_uspd vcmpngtpd vcmpfalse_oqpd vcmpfalsepd vcmpneq_oqpd vcmpge_ospd vcmpgepd vcmpgt_ospd vcmpgtpd vcmptrue_uqpd vcmptruepd vcmplt_oqpd vcmple_oqpd vcmpunord_spd vcmpneq_uspd vcmpnlt_uqpd vcmpnle_uqpd vcmpord_spd vcmpeq_uspd vcmpnge_uqpd vcmpngt_uqpd vcmpfalse_ospd vcmpneq_ospd vcmpge_oqpd vcmpgt_oqpd vcmptrue_uspd vcmppd vcmpeq_osps vcmpeqps vcmplt_osps vcmpltps vcmple_osps vcmpleps vcmpunord_qps vcmpunordps vcmpneq_uqps vcmpneqps vcmpnlt_usps vcmpnltps vcmpnle_usps vcmpnleps vcmpord_qps vcmpordps vcmpeq_uqps vcmpnge_usps vcmpngeps vcmpngt_usps vcmpngtps vcmpfalse_oqps vcmpfalseps vcmpneq_oqps vcmpge_osps vcmpgeps vcmpgt_osps vcmpgtps vcmptrue_uqps vcmptrueps vcmplt_oqps vcmple_oqps vcmpunord_sps vcmpneq_usps vcmpnlt_uqps vcmpnle_uqps vcmpord_sps vcmpeq_usps vcmpnge_uqps vcmpngt_uqps vcmpfalse_osps vcmpneq_osps vcmpge_oqps vcmpgt_oqps vcmptrue_usps vcmpps vcmpeq_ossd vcmpeqsd vcmplt_ossd vcmpltsd vcmple_ossd vcmplesd vcmpunord_qsd vcmpunordsd vcmpneq_uqsd vcmpneqsd vcmpnlt_ussd vcmpnltsd vcmpnle_ussd vcmpnlesd vcmpord_qsd vcmpordsd vcmpeq_uqsd vcmpnge_ussd vcmpngesd vcmpngt_ussd vcmpngtsd vcmpfalse_oqsd vcmpfalsesd vcmpneq_oqsd vcmpge_ossd vcmpgesd vcmpgt_ossd vcmpgtsd vcmptrue_uqsd vcmptruesd vcmplt_oqsd vcmple_oqsd vcmpunord_ssd vcmpneq_ussd vcmpnlt_uqsd vcmpnle_uqsd vcmpord_ssd vcmpeq_ussd vcmpnge_uqsd vcmpngt_uqsd vcmpfalse_ossd vcmpneq_ossd vcmpge_oqsd vcmpgt_oqsd vcmptrue_ussd vcmpsd vcmpeq_osss vcmpeqss vcmplt_osss vcmpltss vcmple_osss vcmpless vcmpunord_qss vcmpunordss vcmpneq_uqss vcmpneqss vcmpnlt_usss vcmpnltss vcmpnle_usss vcmpnless vcmpord_qss vcmpordss vcmpeq_uqss vcmpnge_usss vcmpngess vcmpngt_usss vcmpngtss vcmpfalse_oqss vcmpfalsess vcmpneq_oqss vcmpge_osss vcmpgess vcmpgt_osss vcmpgtss vcmptrue_uqss vcmptruess vcmplt_oqss vcmple_oqss vcmpunord_sss vcmpneq_usss vcmpnlt_uqss vcmpnle_uqss vcmpord_sss vcmpeq_usss vcmpnge_uqss vcmpngt_uqss vcmpfalse_osss vcmpneq_osss vcmpge_oqss vcmpgt_oqss vcmptrue_usss vcmpss vcomisd vcomiss vcvtdq2pd vcvtdq2ps vcvtpd2dq vcvtpd2ps vcvtps2dq vcvtps2pd vcvtsd2si vcvtsd2ss vcvtsi2sd vcvtsi2ss vcvtss2sd vcvtss2si vcvttpd2dq vcvttps2dq vcvttsd2si vcvttss2si vdivpd vdivps vdivsd vdivss vdppd vdpps vextractf128 vextractps vhaddpd vhaddps vhsubpd vhsubps vinsertf128 vinsertps vlddqu vldqqu vldmxcsr vmaskmovdqu vmaskmovps vmaskmovpd vmaxpd vmaxps vmaxsd vmaxss vminpd vminps vminsd vminss vmovapd vmovaps vmovd vmovq vmovddup vmovdqa vmovqqa vmovdqu vmovqqu vmovhlps vmovhpd vmovhps vmovlhps vmovlpd vmovlps vmovmskpd vmovmskps vmovntdq vmovntqq vmovntdqa vmovntpd vmovntps vmovsd vmovshdup vmovsldup vmovss vmovupd vmovups vmpsadbw vmulpd vmulps vmulsd vmulss vorpd vorps vpabsb vpabsw vpabsd vpacksswb vpackssdw vpackuswb vpackusdw vpaddb vpaddw vpaddd vpaddq vpaddsb vpaddsw vpaddusb vpaddusw vpalignr vpand vpandn vpavgb vpavgw vpblendvb vpblendw vpcmpestri vpcmpestrm vpcmpistri vpcmpistrm vpcmpeqb vpcmpeqw vpcmpeqd vpcmpeqq vpcmpgtb vpcmpgtw vpcmpgtd vpcmpgtq vpermilpd vpermilps vperm2f128 vpextrb vpextrw vpextrd vpextrq vphaddw vphaddd vphaddsw vphminposuw vphsubw vphsubd vphsubsw vpinsrb vpinsrw vpinsrd vpinsrq vpmaddwd vpmaddubsw vpmaxsb vpmaxsw vpmaxsd vpmaxub vpmaxuw vpmaxud vpminsb vpminsw vpminsd vpminub vpminuw vpminud vpmovmskb vpmovsxbw vpmovsxbd vpmovsxbq vpmovsxwd vpmovsxwq vpmovsxdq vpmovzxbw vpmovzxbd vpmovzxbq vpmovzxwd vpmovzxwq vpmovzxdq vpmulhuw vpmulhrsw vpmulhw vpmullw vpmulld vpmuludq vpmuldq vpor vpsadbw vpshufb vpshufd vpshufhw vpshuflw vpsignb vpsignw vpsignd vpslldq vpsrldq vpsllw vpslld vpsllq vpsraw vpsrad vpsrlw vpsrld vpsrlq vptest vpsubb vpsubw vpsubd vpsubq vpsubsb vpsubsw vpsubusb vpsubusw vpunpckhbw vpunpckhwd vpunpckhdq vpunpckhqdq vpunpcklbw vpunpcklwd vpunpckldq vpunpcklqdq vpxor vrcpps vrcpss vrsqrtps vrsqrtss vroundpd vroundps vroundsd vroundss vshufpd vshufps vsqrtpd vsqrtps vsqrtsd vsqrtss vstmxcsr vsubpd vsubps vsubsd vsubss vtestps vtestpd vucomisd vucomiss vunpckhpd vunpckhps vunpcklpd vunpcklps vxorpd vxorps vzeroall vzeroupper pclmullqlqdq pclmulhqlqdq pclmullqhqdq pclmulhqhqdq pclmulqdq vpclmullqlqdq vpclmulhqlqdq vpclmullqhqdq vpclmulhqhqdq vpclmulqdq vfmadd132ps vfmadd132pd vfmadd312ps vfmadd312pd vfmadd213ps vfmadd213pd vfmadd123ps vfmadd123pd vfmadd231ps vfmadd231pd vfmadd321ps vfmadd321pd vfmaddsub132ps vfmaddsub132pd vfmaddsub312ps vfmaddsub312pd vfmaddsub213ps vfmaddsub213pd vfmaddsub123ps vfmaddsub123pd vfmaddsub231ps vfmaddsub231pd vfmaddsub321ps vfmaddsub321pd vfmsub132ps vfmsub132pd vfmsub312ps vfmsub312pd vfmsub213ps vfmsub213pd vfmsub123ps vfmsub123pd vfmsub231ps vfmsub231pd vfmsub321ps vfmsub321pd vfmsubadd132ps vfmsubadd132pd vfmsubadd312ps vfmsubadd312pd vfmsubadd213ps vfmsubadd213pd vfmsubadd123ps vfmsubadd123pd vfmsubadd231ps vfmsubadd231pd vfmsubadd321ps vfmsubadd321pd vfnmadd132ps vfnmadd132pd vfnmadd312ps vfnmadd312pd vfnmadd213ps vfnmadd213pd vfnmadd123ps vfnmadd123pd vfnmadd231ps vfnmadd231pd vfnmadd321ps vfnmadd321pd vfnmsub132ps vfnmsub132pd vfnmsub312ps vfnmsub312pd vfnmsub213ps vfnmsub213pd vfnmsub123ps vfnmsub123pd vfnmsub231ps vfnmsub231pd vfnmsub321ps vfnmsub321pd vfmadd132ss vfmadd132sd vfmadd312ss vfmadd312sd vfmadd213ss vfmadd213sd vfmadd123ss vfmadd123sd vfmadd231ss vfmadd231sd vfmadd321ss vfmadd321sd vfmsub132ss vfmsub132sd vfmsub312ss vfmsub312sd vfmsub213ss vfmsub213sd vfmsub123ss vfmsub123sd vfmsub231ss vfmsub231sd vfmsub321ss vfmsub321sd vfnmadd132ss vfnmadd132sd vfnmadd312ss vfnmadd312sd vfnmadd213ss vfnmadd213sd vfnmadd123ss vfnmadd123sd vfnmadd231ss vfnmadd231sd vfnmadd321ss vfnmadd321sd vfnmsub132ss vfnmsub132sd vfnmsub312ss vfnmsub312sd vfnmsub213ss vfnmsub213sd vfnmsub123ss vfnmsub123sd vfnmsub231ss vfnmsub231sd vfnmsub321ss vfnmsub321sd rdfsbase rdgsbase rdrand wrfsbase wrgsbase vcvtph2ps vcvtps2ph adcx adox rdseed clac stac xstore xcryptecb xcryptcbc xcryptctr xcryptcfb xcryptofb montmul xsha1 xsha256 llwpcb slwpcb lwpval lwpins vfmaddpd vfmaddps vfmaddsd vfmaddss vfmaddsubpd vfmaddsubps vfmsubaddpd vfmsubaddps vfmsubpd vfmsubps vfmsubsd vfmsubss vfnmaddpd vfnmaddps vfnmaddsd vfnmaddss vfnmsubpd vfnmsubps vfnmsubsd vfnmsubss vfrczpd vfrczps vfrczsd vfrczss vpcmov vpcomb vpcomd vpcomq vpcomub vpcomud vpcomuq vpcomuw vpcomw vphaddbd vphaddbq vphaddbw vphadddq vphaddubd vphaddubq vphaddubw vphaddudq vphadduwd vphadduwq vphaddwd vphaddwq vphsubbw vphsubdq vphsubwd vpmacsdd vpmacsdqh vpmacsdql vpmacssdd vpmacssdqh vpmacssdql vpmacsswd vpmacssww vpmacswd vpmacsww vpmadcsswd vpmadcswd vpperm vprotb vprotd vprotq vprotw vpshab vpshad vpshaq vpshaw vpshlb vpshld vpshlq vpshlw vbroadcasti128 vpblendd vpbroadcastb vpbroadcastw vpbroadcastd vpbroadcastq vpermd vpermpd vpermps vpermq vperm2i128 vextracti128 vinserti128 vpmaskmovd vpmaskmovq vpsllvd vpsllvq vpsravd vpsrlvd vpsrlvq vgatherdpd vgatherqpd vgatherdps vgatherqps vpgatherdd vpgatherqd vpgatherdq vpgatherqq xabort xbegin xend xtest andn bextr blci blcic blsi blsic blcfill blsfill blcmsk blsmsk blsr blcs bzhi mulx pdep pext rorx sarx shlx shrx tzcnt tzmsk t1mskc valignd valignq vblendmpd vblendmps vbroadcastf32x4 vbroadcastf64x4 vbroadcasti32x4 vbroadcasti64x4 vcompresspd vcompressps vcvtpd2udq vcvtps2udq vcvtsd2usi vcvtss2usi vcvttpd2udq vcvttps2udq vcvttsd2usi vcvttss2usi vcvtudq2pd vcvtudq2ps vcvtusi2sd vcvtusi2ss vexpandpd vexpandps vextractf32x4 vextractf64x4 vextracti32x4 vextracti64x4 vfixupimmpd vfixupimmps vfixupimmsd vfixupimmss vgetexppd vgetexpps vgetexpsd vgetexpss vgetmantpd vgetmantps vgetmantsd vgetmantss vinsertf32x4 vinsertf64x4 vinserti32x4 vinserti64x4 vmovdqa32 vmovdqa64 vmovdqu32 vmovdqu64 vpabsq vpandd vpandnd vpandnq vpandq vpblendmd vpblendmq vpcmpltd vpcmpled vpcmpneqd vpcmpnltd vpcmpnled vpcmpd vpcmpltq vpcmpleq vpcmpneqq vpcmpnltq vpcmpnleq vpcmpq vpcmpequd vpcmpltud vpcmpleud vpcmpnequd vpcmpnltud vpcmpnleud vpcmpud vpcmpequq vpcmpltuq vpcmpleuq vpcmpnequq vpcmpnltuq vpcmpnleuq vpcmpuq vpcompressd vpcompressq vpermi2d vpermi2pd vpermi2ps vpermi2q vpermt2d vpermt2pd vpermt2ps vpermt2q vpexpandd vpexpandq vpmaxsq vpmaxuq vpminsq vpminuq vpmovdb vpmovdw vpmovqb vpmovqd vpmovqw vpmovsdb vpmovsdw vpmovsqb vpmovsqd vpmovsqw vpmovusdb vpmovusdw vpmovusqb vpmovusqd vpmovusqw vpord vporq vprold vprolq vprolvd vprolvq vprord vprorq vprorvd vprorvq vpscatterdd vpscatterdq vpscatterqd vpscatterqq vpsraq vpsravq vpternlogd vpternlogq vptestmd vptestmq vptestnmd vptestnmq vpxord vpxorq vrcp14pd vrcp14ps vrcp14sd vrcp14ss vrndscalepd vrndscaleps vrndscalesd vrndscaless vrsqrt14pd vrsqrt14ps vrsqrt14sd vrsqrt14ss vscalefpd vscalefps vscalefsd vscalefss vscatterdpd vscatterdps vscatterqpd vscatterqps vshuff32x4 vshuff64x2 vshufi32x4 vshufi64x2 kandnw kandw kmovw knotw kortestw korw kshiftlw kshiftrw kunpckbw kxnorw kxorw vpbroadcastmb2q vpbroadcastmw2d vpconflictd vpconflictq vplzcntd vplzcntq vexp2pd vexp2ps vrcp28pd vrcp28ps vrcp28sd vrcp28ss vrsqrt28pd vrsqrt28ps vrsqrt28sd vrsqrt28ss vgatherpf0dpd vgatherpf0dps vgatherpf0qpd vgatherpf0qps vgatherpf1dpd vgatherpf1dps vgatherpf1qpd vgatherpf1qps vscatterpf0dpd vscatterpf0dps vscatterpf0qpd vscatterpf0qps vscatterpf1dpd vscatterpf1dps vscatterpf1qpd vscatterpf1qps prefetchwt1 bndmk bndcl bndcu bndcn bndmov bndldx bndstx sha1rnds4 sha1nexte sha1msg1 sha1msg2 sha256rnds2 sha256msg1 sha256msg2 hint_nop0 hint_nop1 hint_nop2 hint_nop3 hint_nop4 hint_nop5 hint_nop6 hint_nop7 hint_nop8 hint_nop9 hint_nop10 hint_nop11 hint_nop12 hint_nop13 hint_nop14 hint_nop15 hint_nop16 hint_nop17 hint_nop18 hint_nop19 hint_nop20 hint_nop21 hint_nop22 hint_nop23 hint_nop24 hint_nop25 hint_nop26 hint_nop27 hint_nop28 hint_nop29 hint_nop30 hint_nop31 hint_nop32 hint_nop33 hint_nop34 hint_nop35 hint_nop36 hint_nop37 hint_nop38 hint_nop39 hint_nop40 hint_nop41 hint_nop42 hint_nop43 hint_nop44 hint_nop45 hint_nop46 hint_nop47 hint_nop48 hint_nop49 hint_nop50 hint_nop51 hint_nop52 hint_nop53 hint_nop54 hint_nop55 hint_nop56 hint_nop57 hint_nop58 hint_nop59 hint_nop60 hint_nop61 hint_nop62 hint_nop63',
          built_in:
            'ip eip rip al ah bl bh cl ch dl dh sil dil bpl spl r8b r9b r10b r11b r12b r13b r14b r15b ax bx cx dx si di bp sp r8w r9w r10w r11w r12w r13w r14w r15w eax ebx ecx edx esi edi ebp esp eip r8d r9d r10d r11d r12d r13d r14d r15d rax rbx rcx rdx rsi rdi rbp rsp r8 r9 r10 r11 r12 r13 r14 r15 cs ds es fs gs ss st st0 st1 st2 st3 st4 st5 st6 st7 mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 xmm0  xmm1  xmm2  xmm3  xmm4  xmm5  xmm6  xmm7  xmm8  xmm9 xmm10  xmm11 xmm12 xmm13 xmm14 xmm15 xmm16 xmm17 xmm18 xmm19 xmm20 xmm21 xmm22 xmm23 xmm24 xmm25 xmm26 xmm27 xmm28 xmm29 xmm30 xmm31 ymm0  ymm1  ymm2  ymm3  ymm4  ymm5  ymm6  ymm7  ymm8  ymm9 ymm10  ymm11 ymm12 ymm13 ymm14 ymm15 ymm16 ymm17 ymm18 ymm19 ymm20 ymm21 ymm22 ymm23 ymm24 ymm25 ymm26 ymm27 ymm28 ymm29 ymm30 ymm31 zmm0  zmm1  zmm2  zmm3  zmm4  zmm5  zmm6  zmm7  zmm8  zmm9 zmm10  zmm11 zmm12 zmm13 zmm14 zmm15 zmm16 zmm17 zmm18 zmm19 zmm20 zmm21 zmm22 zmm23 zmm24 zmm25 zmm26 zmm27 zmm28 zmm29 zmm30 zmm31 k0 k1 k2 k3 k4 k5 k6 k7 bnd0 bnd1 bnd2 bnd3 cr0 cr1 cr2 cr3 cr4 cr8 dr0 dr1 dr2 dr3 dr8 tr3 tr4 tr5 tr6 tr7 r0 r1 r2 r3 r4 r5 r6 r7 r0b r1b r2b r3b r4b r5b r6b r7b r0w r1w r2w r3w r4w r5w r6w r7w r0d r1d r2d r3d r4d r5d r6d r7d r0h r1h r2h r3h r0l r1l r2l r3l r4l r5l r6l r7l r8l r9l r10l r11l r12l r13l r14l r15l db dw dd dq dt ddq do dy dz resb resw resd resq rest resdq reso resy resz incbin equ times byte word dword qword nosplit rel abs seg wrt strict near far a32 ptr',
          meta:
            '%define %xdefine %+ %undef %defstr %deftok %assign %strcat %strlen %substr %rotate %elif %else %endif %if %ifmacro %ifctx %ifidn %ifidni %ifid %ifnum %ifstr %iftoken %ifempty %ifenv %error %warning %fatal %rep %endrep %include %push %pop %repl %pathsearch %depend %use %arg %stacksize %local %line %comment %endcomment .nolist __FILE__ __LINE__ __SECT__  __BITS__ __OUTPUT_FORMAT__ __DATE__ __TIME__ __DATE_NUM__ __TIME_NUM__ __UTC_DATE__ __UTC_TIME__ __UTC_DATE_NUM__ __UTC_TIME_NUM__  __PASS__ struc endstruc istruc at iend align alignb sectalign daz nodaz up down zero default option assume public bits use16 use32 use64 default section segment absolute extern global common cpu float __utf16__ __utf16le__ __utf16be__ __utf32__ __utf32le__ __utf32be__ __float8__ __float16__ __float32__ __float64__ __float80m__ __float80e__ __float128l__ __float128h__ __Infinity__ __QNaN__ __SNaN__ Inf NaN QNaN SNaN float8 float16 float32 float64 float80m float80e float128l float128h __FLOAT_DAZ__ __FLOAT_ROUND__ __FLOAT__'
        },
        contains: [
          e.COMMENT(';', '$', { relevance: 0 }),
          {
            className: 'number',
            variants: [
              {
                begin:
                  '\\b(?:([0-9][0-9_]*)?\\.[0-9_]*(?:[eE][+-]?[0-9_]+)?|(0[Xx])?[0-9][0-9_]*\\.?[0-9_]*(?:[pP](?:[+-]?[0-9_]+)?)?)\\b',
                relevance: 0
              },
              { begin: '\\$[0-9][0-9A-Fa-f]*', relevance: 0 },
              {
                begin:
                  '\\b(?:[0-9A-Fa-f][0-9A-Fa-f_]*[Hh]|[0-9][0-9_]*[DdTt]?|[0-7][0-7_]*[QqOo]|[0-1][0-1_]*[BbYy])\\b'
              },
              {
                begin:
                  '\\b(?:0[Xx][0-9A-Fa-f_]+|0[DdTt][0-9_]+|0[QqOo][0-7_]+|0[BbYy][0-1_]+)\\b'
              }
            ]
          },
          e.QUOTE_STRING_MODE,
          {
            className: 'string',
            variants: [
              { begin: "'", end: "[^\\\\]'" },
              { begin: '`', end: '[^\\\\]`' }
            ],
            relevance: 0
          },
          {
            className: 'symbol',
            variants: [
              { begin: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)' },
              { begin: '^\\s*%%[A-Za-z0-9_$#@~.?]*:' }
            ],
            relevance: 0
          },
          { className: 'subst', begin: '%[0-9]+', relevance: 0 },
          { className: 'subst', begin: '%!S+', relevance: 0 },
          { className: 'meta', begin: /^\s*\.[\w_-]+/ }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          keyword:
            'if then else do while until for loop import with is as where when by data constant integer real text name boolean symbol infix prefix postfix block tree',
          literal: 'true false nil',
          built_in:
            'in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin acos atan exp expm1 log log2 log10 log1p pi at text_length text_range text_find text_replace contains page slide basic_slide title_slide title subtitle fade_in fade_out fade_at clear_color color line_color line_width texture_wrap texture_transform texture scale_?x scale_?y scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y rotate_?z? rectangle circle ellipse sphere path line_to move_to quad_to curve_to theme background contents locally time mouse_?x mouse_?y mouse_buttons ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts'
        },
        n = { className: 'string', begin: '"', end: '"', illegal: '\\n' },
        r = { beginKeywords: 'import', end: '$', keywords: t, contains: [n] },
        a = {
          className: 'function',
          begin: /[a-z][^\n]*->/,
          returnBegin: !0,
          end: /->/,
          contains: [
            e.inherit(e.TITLE_MODE, {
              starts: { endsWithParent: !0, keywords: t }
            })
          ]
        };
      return {
        aliases: ['tao'],
        lexemes: /[a-zA-Z][a-zA-Z0-9_?]*/,
        keywords: t,
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          n,
          { className: 'string', begin: "'", end: "'", illegal: '\\n' },
          { className: 'string', begin: '<<', end: '>>' },
          a,
          r,
          {
            className: 'number',
            begin: '[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?'
          },
          e.NUMBER_MODE
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = { begin: '{', end: '}' },
        n = [
          { begin: /\$[a-zA-Z0-9\-]+/ },
          {
            className: 'string',
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [{ begin: /""/, relevance: 0 }]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [{ begin: /''/, relevance: 0 }]
              }
            ]
          },
          {
            className: 'number',
            begin:
              '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
            relevance: 0
          },
          {
            className: 'comment',
            begin: '\\(:',
            end: ':\\)',
            relevance: 10,
            contains: [{ className: 'doctag', begin: '@\\w+' }]
          },
          { className: 'meta', begin: '%\\w+' },
          t
        ];
      return (
        (t.contains = n),
        {
          aliases: ['xpath', 'xq'],
          case_insensitive: !1,
          lexemes: /[a-zA-Z\$][a-zA-Z0-9_:\-]*/,
          illegal: /(proc)|(abstract)|(extends)|(until)|(#)/,
          keywords: {
            keyword:
              'for let if while then else return where group by xquery encoding versionmodule namespace boundary-space preserve strip default collation base-uri orderingcopy-namespaces order declare import schema namespace function option in allowing emptyat tumbling window sliding window start when only end when previous next stable ascendingdescending empty greatest least some every satisfies switch case typeswitch try catch andor to union intersect instance of treat as castable cast map array delete insert intoreplace value rename copy modify update',
            literal:
              'false true xs:string xs:integer element item xs:date xs:datetime xs:float xs:double xs:decimal QName xs:anyURI xs:long xs:int xs:short xs:byte attribute'
          },
          contains: n
        }
      );
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = {
          className: 'string',
          contains: [e.BACKSLASH_ESCAPE],
          variants: [
            { begin: 'b"', end: '"' },
            { begin: "b'", end: "'" },
            e.inherit(e.APOS_STRING_MODE, { illegal: null }),
            e.inherit(e.QUOTE_STRING_MODE, { illegal: null })
          ]
        },
        n = { variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE] };
      return {
        aliases: ['zep'],
        case_insensitive: !0,
        keywords:
          'and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var let while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally int uint long ulong char uchar double float bool boolean stringlikely unlikely',
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.HASH_COMMENT_MODE,
          e.COMMENT('/\\*', '\\*/', {
            contains: [{ className: 'doctag', begin: '@[A-Za-z]+' }]
          }),
          e.COMMENT('__halt_compiler.+?;', !1, {
            endsWithParent: !0,
            keywords: '__halt_compiler',
            lexemes: e.UNDERSCORE_IDENT_RE
          }),
          {
            className: 'string',
            begin: '<<<[\'"]?\\w+[\'"]?$',
            end: '^\\w+;',
            contains: [e.BACKSLASH_ESCAPE]
          },
          { begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ },
          {
            className: 'function',
            beginKeywords: 'function',
            end: /[;{]/,
            excludeEnd: !0,
            illegal: '\\$|\\[|%',
            contains: [
              e.UNDERSCORE_TITLE_MODE,
              {
                className: 'params',
                begin: '\\(',
                end: '\\)',
                contains: ['self', e.C_BLOCK_COMMENT_MODE, t, n]
              }
            ]
          },
          {
            className: 'class',
            beginKeywords: 'class interface',
            end: '{',
            excludeEnd: !0,
            illegal: /[:\(\$"]/,
            contains: [
              { beginKeywords: 'extends implements' },
              e.UNDERSCORE_TITLE_MODE
            ]
          },
          {
            beginKeywords: 'namespace',
            end: ';',
            illegal: /[\.']/,
            contains: [e.UNDERSCORE_TITLE_MODE]
          },
          {
            beginKeywords: 'use',
            end: ';',
            contains: [e.UNDERSCORE_TITLE_MODE]
          },
          { begin: '=>' },
          t,
          n
        ]
      };
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, n) {
    'use strict';
    n.r(t);
    var r = n(0),
      a = n.n(r),
      i = n(37),
      o = n(213),
      s = n(206),
      l = n.n(s),
      c = n(92),
      d =
        "const woah = fun => fun + 1;\nconst dude = woah(2) + 3;\nfunction thisIsAFunction() {\n  return [1,2,3].map(n => n + 1).filter(n !== 3);\n}\nconsole.log('making up fake code is really hard');\n\nfunction itIs() {\n  return 'no seriously really it is';\n}",
      u = [1, 2],
      p = [6];
    Object(i.render)(
      a.a.createElement(function() {
        var e = { fontSize: 42, color: 'aliceblue' };
        return a.a.createElement(
          'div',
          null,
          a.a.createElement('h1', { style: e }, 'React SyntaxHighlighter'),
          a.a.createElement(c.a, null),
          a.a.createElement(
            'div',
            { style: { paddingTop: 20, display: 'flex' } },
            a.a.createElement(
              'div',
              { style: { flex: 1, width: '100%', flexDirection: 'column' } },
              a.a.createElement(
                o.a,
                {
                  style: l.a,
                  wrapLines: !0,
                  showLineNumbers: !0,
                  lineProps: function(e) {
                    return (
                      u.includes(e)
                        ? (style.backgroundColor = '#dbffdb')
                        : p.includes(e) && (style.backgroundColor = '#ffecec'),
                      { style: { display: 'block' } }
                    );
                  }
                },
                d
              ),
              a.a.createElement(
                'h1',
                { style: e },
                'The code to make this happen'
              ),
              a.a.createElement(
                o.a,
                { style: l.a, wrapLines: !0 },
                "import React from 'react';\nimport { render } from 'react-dom';\nimport SyntaxHighlighter from '../';\nimport docco from '../styles/docco';\n\nconst CODE = `const woah = fun => fun + 1;\nconst dude = woah(2) + 3;\nfunction thisIsAFunction() {\n  return [1,2,3].map(n => n + 1).filter(n !== 3);\n}\nconsole.log('making up fake code is really hard');\n\nfunction itIs() {\n  return 'no seriously really it is';\n}`;\n\n\nconst ADDED = [1, 2];\nconst REMOVED = [6];\n\nfunction DiffHighlight() {\n  const h1Style = {\n    fontSize: 42,\n    color: 'aliceblue'\n  };\n\n  return (\n    <div>\n      <h1 style={h1Style}>React SyntaxHighlighter</h1>\n      <div style={{paddingTop: 20, display: 'flex'}}>\n        <div style={{flex: 1, width: '100%', flexDirection: 'column'}}>\n          <SyntaxHighlighter\n            style={docco}\n            wrapLines={true}\n            lineStyle={lineNumber => {\n              let style = { display: 'block' };\n              if (ADDED.includes(lineNumber)) {\n                style.backgroundColor = '#dbffdb';\n              }\n              else if (REMOVED.includes(lineNumber)) {\n                style.backgroundColor = '#ffecec';\n              }\n              return style;\n            }}\n          >\n            {CODE}\n          </SyntaxHighlighter>\n        </div>\n      </div>\n    </div>\n  );\n}\n\nrender(<DiffHighlight />, document.getElementById('app'));\n"
              )
            )
          )
        );
      }, null),
      document.getElementById('app')
    );
  }
]);
//# sourceMappingURL=diff-build.js.map
