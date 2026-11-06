
---
title: 左旋转字符串
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/12d959b108cb42b1ab72cef4d36af5ec?tpId=13&tqId=11196&tPage=3&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking)

汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。例如，字符序列`S=”abcXYZdef”`,要求输出循环左移3位后的结果，即`“XYZdefabc”`。是不是很简单？OK，搞定它！

## 解题思路

  1. 对于 `abcXYZdef` 左移 3位，可以将字符串分为两个部分：`abc` & `XYZdef`
  2. 分别将两个部分进行反转得到：`cba` & `fedZYX`
  3. 将两部分和在一起再进行反转：`XYZdefabc`

```
public String LeftRotateString(String str, int n) {
    if (str == null || str.trim().equals("")) return str;

    String res = revert(str, 0, n - 1);
    res = revert(res, n, str.length() - 1);
    res = revert(res, 0, str.length() - 1);

    return res;
}

private String revert(String str, int start, int end) {
    char[] chars = str.toCharArray();

    while (start < end) {
        char t = chars[start];
        chars[start] = chars[end];
        chars[end] = t;

        start++;
        end--;
    }

    return new String(chars);
}
```
