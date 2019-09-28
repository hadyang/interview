
---
title: 二进制中
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[](https://www.nowcoder.com/practice/8ee967e43c2c4ec193b040ea7fbb10b8?tpId=13&tqId=11164&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking&tPage=1)

输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

## 解题思路

  1. 负数是补码表示
  2. `>>>` 为无符号右移，`>>`为有符号右移，当 n 为负数是会增加多余的`1`

```
public int NumberOf1(int n) {
    int mask = 0x01;

    int res = 0;
    int t = n;
    while (t != 0) {
        if ((t & mask) == 1) {
            res++;
        }
        t = t >>> 1;
    }

    return res;
}
```
