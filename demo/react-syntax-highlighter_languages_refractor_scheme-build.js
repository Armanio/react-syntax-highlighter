(window.webpackJsonp = window.webpackJsonp || []).push([
  [125],
  {
    692: function(e, n, t) {
      'use strict';
      function a(e) {
        e.languages.scheme = {
          comment: /;.*/,
          string: { pattern: /"(?:[^"\\\r\n]|\\.)*"|'[^('\s]*/, greedy: !0 },
          keyword: {
            pattern: /(\()(?:define(?:-syntax|-library|-values)?|(?:case-)?lambda|let(?:\*|rec)?(?:-values)?|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-rules)/,
            lookbehind: !0
          },
          builtin: {
            pattern: /(\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?)/,
            lookbehind: !0
          },
          number: {
            pattern: /(\s|[()])[-+]?\d*\.?\d+(?:\s*[-+]\s*\d*\.?\d+i)?\b/,
            lookbehind: !0
          },
          boolean: /#[tf]/,
          operator: { pattern: /(\()(?:[-+*%\/]|[<>]=?|=>?)/, lookbehind: !0 },
          function: { pattern: /(\()[^\s()]*(?=\s)/, lookbehind: !0 },
          punctuation: /[()]/
        };
      }
      (e.exports = a), (a.displayName = 'scheme'), (a.aliases = []);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_scheme-build.js.map
