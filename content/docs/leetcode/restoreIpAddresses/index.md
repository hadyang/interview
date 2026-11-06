
---
title: 复原
date: 2019-08-21T11:00:41+08:00
draft: false
categories: leetcode
---


**头条重点**

## 题目

给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

```
示例:

输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]
```

## 解题思路

  1. 利用回溯法，遍历所有可能的 IP

```
public static List<String> restoreIpAddresses(String s) {
    if (s.length() > 12 || s.length() < 4) {
        return Collections.emptyList();
    }

    List<String> res = new ArrayList<>();
    ArrayList<String> ip = new ArrayList<>();
    for (int i = 0; i < 4; i++) {
        ip.add("");
    }
    p(res, s.toCharArray(), 0, ip, 0);

    return res;
}

private static void p(List<String> res, char[] chars, int startIndex, List<String> ip, int segmentIndex) {
    StringBuilder builder = new StringBuilder();
    for (int i = startIndex; i < chars.length; i++) {
        builder.append(chars[i]);
        String ipStr = builder.toString();
        int parseInt = Integer.parseInt(ipStr);
        if (parseInt > 255) {
            return;
        }
        if (ipStr.length() > 1 && ipStr.startsWith("0")) {
            return;
        }

        ip.set(segmentIndex, ipStr);
        if (segmentIndex == 3 && i == chars.length - 1) {
            res.add(String.join(".", ip));
        }

        if (segmentIndex < 3) {
            p(res, chars, i + 1, ip, segmentIndex + 1);
        }
    }
```
