
---
title: 剪绳子
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

给定一根长度为n的绳子，请把绳子剪成m段（m、n都是整数，n>1并且m>1），每段绳子的长度记为`k[0],k[1],…,k[m]`。请问`k[0]* k[1] * … *k[m]`可能的最大乘积是多少？

## 解题思路

  1. 尽可能剪长度为 3 的绳子
  2. 当长度剩下的为 4 时，不能再减去 3，而是 2*2

```
public int cutRope(int n) {
    if (n < 2) return 0;

    if (n == 2) return 1;

    if (n == 3) return 2;

    int timesOf3 = n / 3;

    if (n - timesOf3 * 3 == 1) {
        timesOf3 = 1;
    }

    int timesOf2 = (n - (timesOf3 * 3)) / 2;

    return (int) (Math.pow(3, timesOf3) * Math.pow((2), timesOf2));
}
```
