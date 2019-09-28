
---
title: 求
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/7a0da8fc483247ff8800059e12d7caf1?tpId=13&tqId=11200&tPage=3&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking)

求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

## 解题思路

  1. 利用递归代替循环

```
public int Sum_Solution(int n) {
    int ans = n;
    boolean t = ((ans != 0) && ((ans += Sum_Solution(n - 1)) != 0));
    return ans;
}
```
