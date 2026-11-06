
---
title: 最长连续序列
date: 2019-08-21T11:00:41+08:00
draft: false
categories: leetcode
---



## 题目

给定一个未排序的整数数组，找出最长连续序列的长度。

要求算法的时间复杂度为 O(n)。

```
示例:

输入: [100, 4, 200, 1, 3, 2]
输出: 4
解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
```

## 解题思路

  1. 用 `Set` 保存所有数字
  2. 遍历数组，查找当前数字之前、之后的数，并计算个数

```
public static int longestConsecutive(int[] nums) {
    if (nums.length <= 1) {
        return nums.length;
    }

    Set<Integer> set = new HashSet<>();

    for (int num : nums) {
        set.add(num);
    }

    int pre, after, max = 0;
    for (int num : nums) {
        int temp = 1;
        set.remove(num);

        pre = num;
        after = num;

        while (set.contains(--pre)) {
            temp++;
            set.remove(pre);
        }

        while (set.contains(++after)) {
            temp++;
            set.remove(after);
        }

        max = Math.max(max, temp);
        if (max > nums.length / 2) {
            return max;
        }
    }

    return max;
}
```
