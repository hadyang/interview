
---
title: 数字序列中的某一位的数字
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

数字以`0123456789101112131415…`的格式序列化到一个字符序列中。在这个序列中，第5位（从0开始计数，即从第0位开始）是5，第13位是1，第19位是4，等等。请写一个函数，求任意第n位对应的数字。

## 解题思路

  1. 可以将 n 进行拆分，1位数一共10个数字、10位，2位数一共90个数字、180位，依此类推
  2. 当确定 n 所在位数范围时，对位数取商，计算出 n 位对应的数字 a，再取余，计算出结果位于 a 的第几位

```
public int nOfNumberSerialize(int n) {
    int i = 1;
    int count = 0;
    int nLeft = n;

    while (true) {
        nLeft -= count;
        count = countOfIntegers(i) * i;

        if (nLeft < count) {
            break;
        }

        i++;
    }

    int a = nLeft / i;
    String s = String.valueOf(a);

    return s.charAt(nLeft % i) - '0';
}

private int countOfIntegers(int n) {
    int sum = 0;

    if (n == 1) {
        sum = 10;
    } else {
        sum = (int) (9 * Math.pow(10, n - 1));
    }

    return sum;
}
```
