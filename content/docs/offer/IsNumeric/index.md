
---
title: 表示数值的字符串
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。


## 解题思路

  1. 数字符合 `A[.[B]][e|EC]` 和 `.B[e|EC]` 的表达式，其中 `A` 表示整数部分，`B` 表示小数部分，`C` 表示指数部分
  2. `A` 可以有正负，但是 `B` 没有
  3. `e|E` 之前、之后都必须有数字

```
public boolean isNumeric(char[] str) {
    if (str == null || str.length == 0) return false;

    int index = scanInteger(str, 0);

    boolean numeric = index != 0;

    //小数
    if (index < str.length && str[index] == '.') {
        index++;
        int pre = index;
        index = scanUnsignedInteger(str, index);

        //1. 小数可以没有整数部分
        //2. 小数后可以没有数字
        //3. 小数后可以有数字
        numeric |= index != pre;
    }

    //指数
    if (index < str.length && (str[index] == 'e' || str[index] == 'E')) {
        index++;
        int pre = index;
        index = scanInteger(str, index);

        //1. e或者E之前必须有数字
        //2. e或者E之后必须有数字
        numeric &= index != pre;
    }

    return numeric && index == str.length;
}

private int scanInteger(char[] str, int s) {
    if (s < str.length && (str[s] == '+' || str[s] == '-'))
        s++;

    return scanUnsignedInteger(str, s);
}


private int scanUnsignedInteger(char[] str, int s) {
    while (s < str.length && str[s] >= '0' && str[s] <= '9') {
        s++;
    }

    return s;
}
```
