
---
title: 正则表达式匹配
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


请实现一个函数用来匹配包括`'.'`和`'*'`的正则表达式。模式中的字符`'.'`表示任意一个字符，而`'*'`表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串`"aaa"`与模式`"a.a"`和`"ab*ac*a"`匹配，但是与`"aa.a"`和`"ab*a"`均不匹配


## 解题思路

  1. 对于 `*` 有三种匹配模式：匹配0次，1次以及多次
  2. 对于 `.` 只有一种匹配模式

```
public boolean match(char[] str, char[] pattern) {
    if (str.length == 0 && new String(pattern).replaceAll(".\\*", "").length() == 0) {
        return true;
    }

    return match(str, 0, pattern, 0);
}

private boolean match(char[] str, int i, char[] pattern, int j) {
    if (i == str.length && j == pattern.length) {
        return true;
    }

    if (j >= pattern.length) return false;

    if (j + 1 < pattern.length && pattern[j + 1] == '*') {
        if ((i < str.length && pattern[j] == str[i]) || (pattern[j] == '.' && i != str.length)) {
            return match(str, i + 1, pattern, j + 2)
                    || match(str, i + 1, pattern, j)
                    || match(str, i, pattern, j + 2);
        } else {
            return match(str, i, pattern, j + 2);
        }
    }

    if ((i < str.length && pattern[j] == str[i])
            || (pattern[j] == '.' && i != str.length)) {
        return match(str, i + 1, pattern, j + 1);
    }

    return false;
}
```
