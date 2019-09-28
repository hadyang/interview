---
title: 数组中的第K个最大元素
date: 2019-08-21T11:00:41+08:00
draft: false
categories: leetcode
---

# [数组中的第K个最大元素](https://leetcode-cn.com/explore/interview/card/bytedance/243/array-and-sorting/1018/)

## 题目

在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

```
示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
```

## 解题思路

  1. 利用快排的思想，当排序到 `k` 后，停止排序，输出结果

```
public static int findKthLargest(int[] nums, int k) {
    fastSort(nums, 0, nums.length - 1);
    return nums[nums.length - k];
}

public static void fastSort(int[] nums, int start, int end) {
    if (nums.length <= 1) {
        return;
    }

    if (start > end) {
        return;
    }

    if (end < 0 || start < 0 || end > nums.length - 1 || start > nums.length - 1) {
        return;
    }

    int left = start, right = end;
    int keyIndex = (left + right) / 2;

    while (left < right) {
        while (right > keyIndex && nums[right] > nums[keyIndex]) {
            right--;
        }

        if (right > keyIndex) {
            swap(nums, keyIndex, right);
            keyIndex = right;
        }

        while (left < keyIndex && nums[left] < nums[keyIndex]) {
            left++;
        }

        if (left < keyIndex) {
            swap(nums, left, keyIndex);
            keyIndex = left;
        }
        left++;
    }

    fastSort(nums, keyIndex + 1, end);
    fastSort(nums, start, keyIndex - 1);

}
```
