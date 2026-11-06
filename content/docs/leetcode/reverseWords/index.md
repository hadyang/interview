
---
title: 翻转字符串里的单词
date: 2019-08-21T11:00:41+08:00
draft: false
categories: leetcode
---


## 题目

给定一个字符串，逐个翻转字符串中的每个单词。

```
示例 1：

输入: "the sky is blue"
输出: "blue is sky the"
```

说明：

- 无空格字符构成一个单词。
- 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
- 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

## 解题思路

  1. 按空格拆分字符串为字符串数组 `t`
  2. 逆序遍历字符串数组 `t`，并组成新的字符串 

```
public String reverseWords(String s) {
    String trimed = s.trim();

    String[] split = trimed.split(" ");

    StringBuilder builder = new StringBuilder();
    for (int i = split.length - 1; i >= 0; i--) {
        String t = split[i];
        if (t.trim().isEmpty()) {
            continue;
        }

        builder.append(t).append(" ");
    }

    return builder.toString().trim();
}
```
