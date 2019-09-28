
---
title: 不用加减乘除做加法
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/59ac416b4b944300b617d4f7f111b215?tpId=13&tqId=11201&tPage=3&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking)

写一个函数，求两个整数之和，要求在函数体内不得使用`+、-、*、/`四则运算符号。

## 解题思路

  1. 将加法分解成两步
  2. 两个数不计算进位相加得到 `sum`，计算进位 `carry`
  3. 再将进位加上：`sum = sum + carry`
  4. 直到没有进位为止

```
public int Add(int num1, int num2) {
    int sum, carry;
    do {
        sum = num1 ^ num2;
        carry = (num1 & num2) << 1;

        num1 = sum;
        num2 = carry;
    } while (num2 != 0);

    return sum;
}
```
