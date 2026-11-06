
---
title: 无重复字符的最长子串
date: 2019-08-21T11:00:41+08:00
draft: false
categories: leetcode
---


**头条重点**

## 题目

给定一个字符串，请你找出其中不含有重复字符的 **最长子串** 的长度。

```
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```


## 解题思路

  1. 用 Map 记录字符所在位置，当遇到重复字符时，移动 `start` 指针
  2. 替换 Map 中下标，并计算子串长度

```
public int lengthOfLongestSubstring(String str) {
    if (str == null || str.length() == 0) return 0;

    HashMap<Character, Integer> temp = new HashMap<>();
    char[] chars = str.toCharArray();

    int res = 0, start = 0;
    for (int i = 0; i < chars.length; i++) {
        if (temp.containsKey(chars[i])) {
            start = Math.max(temp.put(chars[i], i) + 1, start);
        }

        temp.put(chars[i], i);
        res = Math.max(res, i - start + 1);

    }

    return res;
}
```
