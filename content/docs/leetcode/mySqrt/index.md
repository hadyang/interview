
---
title: 的平方根
date: 2019-08-21T11:00:41+08:00
draft: false
categories: leetcode
---


**头条重点**

## 题目

实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

```
示例 1:

输入: 4
输出: 2
示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842...,由于返回类型是整数，小数部分将被舍去。
```

## 解题思路

  1. 牛顿迭代法：{{<katex>}}a_{i}=(x/a_{i-1}+a_{i-1})/2{{</katex>}}

```
public int mySqrt(int x) {
    double a = 1, diff = 0;

    do {
        a = (x / a + a) / 2.0;
        diff = Math.abs(a * a - x);
    } while (diff > 0.1);

    return (int) a;
}
```
