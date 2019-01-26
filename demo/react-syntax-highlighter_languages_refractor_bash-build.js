(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    593: function(e, a, t) {
      'use strict';
      function s(e) {
        !(function(e) {
          var a = {
            variable: [
              {
                pattern: /\$?\(\([\s\S]+?\)\)/,
                inside: {
                  variable: [
                    { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                    /^\$\(\(/
                  ],
                  number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
                  operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                  punctuation: /\(\(?|\)\)?|,|;/
                }
              },
              {
                pattern: /\$\([^)]+\)|`[^`]+`/,
                greedy: !0,
                inside: { variable: /^\$\(|^`|\)$|`$/ }
              },
              /\$(?:[\w#?*!@]+|\{[^}]+\})/i
            ]
          };
          e.languages.bash = {
            shebang: {
              pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,
              alias: 'important'
            },
            comment: { pattern: /(^|[^"{\\])#.*/, lookbehind: !0 },
            string: [
              {
                pattern: /((?:^|[^<])<<\s*)["']?(\w+?)["']?\s*\r?\n(?:[\s\S])*?\r?\n\2/,
                lookbehind: !0,
                greedy: !0,
                inside: a
              },
              {
                pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
                greedy: !0,
                inside: a
              }
            ],
            variable: a.variable,
            function: {
              pattern: /(^|[\s;|&])(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|[\s;|&])/,
              lookbehind: !0
            },
            keyword: {
              pattern: /(^|[\s;|&])(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|[\s;|&])/,
              lookbehind: !0
            },
            boolean: {
              pattern: /(^|[\s;|&])(?:true|false)(?=$|[\s;|&])/,
              lookbehind: !0
            },
            operator: /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
          };
          var t = a.variable[1].inside;
          (t.string = e.languages.bash.string),
            (t.function = e.languages.bash.function),
            (t.keyword = e.languages.bash.keyword),
            (t.boolean = e.languages.bash.boolean),
            (t.operator = e.languages.bash.operator),
            (t.punctuation = e.languages.bash.punctuation),
            (e.languages.shell = e.languages.bash);
        })(e);
      }
      (e.exports = s), (s.displayName = 'bash'), (s.aliases = ['shell']);
    }
  }
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_bash-build.js.map
