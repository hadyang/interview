
---
title: 数字在排序数组中出现的次数
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/70610bf967994b22bb1c26f9ae901fa2?tpId=13&tqId=11190&tPage=2&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking)

统计一个数字在排序数组中出现的次数。

## 解题思路

  1. 利用二分查找，找到任意一个 `k`
  2. 由于 `k` 有多个，并且当前找到的 `k` 可能在任意位置。所以，在当前 `k` 的前后进行遍历查找

```
public int GetNumberOfK(int[] array, int k) {
    if (array == null || array.length == 0) {
        return 0;
    }

    //二分查找
    int start = 0, end = array.length - 1;
    int t = -1;
    while (start < end) {
        int mid = (start + end) / 2;
        if (array[mid] == k) {
            t = mid;
            break;
        } else if (array[mid] > k) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    if (array[start] == k) {
        t = start;
    }

    if (t == -1) {
        return 0;
    }

    //左侧
    int sum = 0;
    int a = t;
    while (a >= 0 && array[a] == k) {
        sum++;
        a--;
    }

    //右侧
    a = t + 1;
    while (a < array.length && array[a] == k) {
        sum++;
        a++;
    }

    return sum;
}
```
