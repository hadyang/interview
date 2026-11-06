
---
title: 最长连续递增序列
date: 2019-08-21T11:00:41+08:00
draft: false
categories: leetcode
---


## 题目

给定一个未经排序的整数数组，找到最长且连续的的递增序列。

```
示例 1:

输入: [1,3,5,4,7]
输出: 3
解释: 最长连续递增序列是 [1,3,5], 长度为3。
尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为5和7在原数组里被4隔开。
示例 2:

输入: [2,2,2,2,2]
输出: 1
解释: 最长连续递增序列是 [2], 长度为1。
```

## 解题思路

  1. 用两个变量记录序列开始和结束的下标
  2. 从左到右遍历，如果下一个节点小当前节点则移动 `start`，否则移动`end`，并更新 `max`

```
public static int findLengthOfLCIS(int[] nums) {
    if (nums.length == 0) {
        return 0;
    }

    if (nums.length == 1) {
        return 1;
    }

    int start = 0, end = 0;
    int max = 1;

    for (int i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            end = i;
            max = Math.max(max, end - start + 1);
        } else {
            start = i;
        }
    }

    return max;
}
```
