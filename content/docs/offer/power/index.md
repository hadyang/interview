
---
title: 题目
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


[牛客网](https://www.nowcoder.com/practice/1a834e5e3e1a4b7ba251417554e07c00?tpId=13&tqId=11165&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)

给定一个 `double` 类型的浮点数 `base` 和 `int` 类型的整数 `exponent` 。求 `base` 的 `exponent` 次方。

## 解题思路

  1. 当 `n` 为偶数时，{{<katex>}}a^n = a^{n/2} * a^{n/2}{{</katex>}}
  2. 当 `n` 为奇数时，{{<katex>}}a^n = a^{n/2} * a^{n/2} * a{{</katex>}}
  3. 可以利用类似斐波纳切的方式，利用递归来进行求解

```
public double Power(double base, int exponent) {
    if (base == 0) {
        return 0;
    }

    if (base == 1) {
        return 1;
    }

    int t_exponent = Math.abs(exponent);

    double t = PositivePower(base, t_exponent);

    return exponent > 0 ? t : 1 / t;
}

private double PositivePower(double base, int exponent) {
    if (exponent == 0) {
        return 1;
    }

    if (exponent == 1) {
        return base;
    }

    double t = PositivePower(base, exponent >> 1);
    t *= t;
    if ((exponent & 0x01) == 1) {
        t *= base;
    }

    return t;
}
```
