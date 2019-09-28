
---
title: 最长公共前缀
date: 2019-08-21T11:00:41+08:00
draft: false
categories: leetcode
---


## 题目

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

```
示例 1:
输入: ["flower","flow","flight"]
输出: "fl"
```

## 解题思路

  1. 找到最短字符串
  2. 多个字符串逐个字符比较

```
public String longestCommonPrefix(String[] strs) {
    if (strs.length == 0) {
        return "";
    }

    int minLen = strs[0].length();
    for (String str : strs) {
        minLen = Math.min(minLen, str.length());
    }

    char[][] data = new char[strs.length][minLen];
    for (int i = 0; i < strs.length; i++) {
        char[] chars = strs[i].toCharArray();
        System.arraycopy(chars, 0, data[i], 0, minLen);
    }

    StringBuilder res = new StringBuilder();
    for (int i = 0; i < minLen; i++) {
        for (int j = 1; j < data.length; j++) {
            if (data[j - 1][i] != data[j][i]) {
                return res.toString();
            }
        }
        res.append(data[0][i]);
    }
    return res.toString();
}
```
