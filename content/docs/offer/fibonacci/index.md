
---
title: 斐波纳切数列
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/c6c7742f5ba7442aada113136ddea0c3?tpId=13&tqId=11160&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking)

大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。`n<=39`


## 解题思路

  1. 递归计算很慢，是最简单的算法

```
public int Fibonacci(int n) {
    if (n == 0) {
        return 0;
    }

    if (n == 1) {
        return 1;
    }

    int l = 1, ll = 0;

    for (int i = 2; i <= n; i++) {
        int t = ll + l;
        ll = l;
        l = t;
    }

    return l;
}
```
