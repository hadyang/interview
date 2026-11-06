
---
title: 在排序数组中查找数字
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

统计一个数字在排序数组中出现的次数。

## 解题思路

  1. 通过二分查找分别找到 n 的第一个位置和最后一个位置
  2. 再进行计算就可以得出结果

```
public int countOfSortedArray2(int[] nums, int n) {
    if (nums == null || nums.length == 0) return 0;

    int firstN = getFirstN(nums, n);
    int lastN = getLastN(nums, n);

    return lastN - firstN + 1;
}

private int getFirstN(int[] nums, int n) {
    int s = 0, e = nums.length - 1;

    int mid = -1;
    while (s <= e) {
        mid = (s + e) / 2;

        if (mid > 0 && nums[mid - 1] == n) {
            e = mid - 1;
            continue;
        }

        if (nums[mid] > n) {
            e = mid - 1;
            continue;
        }

        if (nums[mid] < n) {
            s = mid + 1;
            continue;
        }

        break;
    }

    return mid;
}

private int getLastN(int[] nums, int n) {
    int s = 0, e = nums.length - 1;

    int mid = -1;
    while (s <= e) {
        mid = (s + e) / 2;

        if (mid < nums.length - 1 && nums[mid + 1] == n) {
            s = mid + 1;
            continue;
        }

        if (nums[mid] > n) {
            e = mid - 1;
            continue;
        }

        if (nums[mid] < n) {
            s = mid + 1;
            continue;
        }

        break;
    }

    return mid;
}
```
