
---
title: 把数字翻译成字符串
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

给定一个数字，按照如下规则翻译成字符串：0 翻译成“a”，`1` 翻译成`“b”`… `25`翻译成`“z”`。一个数字有多种翻译可能，例如`12258`一共有`5`种，分别是`bccfi`，`bwfi`，`bczi`，`mcfi`，`mzi`。实现一个函数，用来计算一个数字有多少种不同的翻译方法。

## 解题思路

  1. 定义 {{<katex>}}f(i){{</katex>}} 表示第 `i` 位有多少种翻译的方法，动态规划方程：{{<katex>}}f(i)=f(i+1)+g(i,i+1) \times f(i+2){{</katex>}}
  2. 其中 {{<katex>}}g(i,i+1){{</katex>}} 表示 `i,i+1` 是否能组成 `10 ~ 25`

```
public int translateNumToStr(int num) {
    char[] str = String.valueOf(num).toCharArray();
    int[] res = new int[str.length];

    for (int i = str.length - 1; i >= 0; i--) {
        if (i + 1 >= str.length) {
            res[i] = 1;
            continue;
        }

        res[i] = res[i + 1];

        if (i + 2 < str.length && str[i] <= '2' && str[i] >= '1' && str[i + 1] <= '5') {
            res[i] += res[i + 2];
        }
    }
    return res[0];
}
```
