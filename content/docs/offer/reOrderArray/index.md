
---
title: 调整数组顺序使奇数位于偶数前面
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/beb5aa231adc45b2a5dcc5b62c93f593?tpId=13&tqId=11166&tPage=1&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking
)

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。


## 解题思路

  1. 需要保证排序的稳定性
  2. 采用冒泡算法进行排序

```
public void reOrderArray(int[] array) {
    if (array.length <= 1) {
        return;
    }

    for (int i = array.length - 1; i >= 0; i--) {
        for (int j = i; j < array.length - 1; j++) {
            if (array[j] % 2 == 0 && array[j + 1] % 2 == 1) swap(array, j, j + 1);
        }
    }
}

private void swap(int[] array, int a, int b) {
    int t = array[a];
    array[a] = array[b];
    array[b] = t;
}
```
