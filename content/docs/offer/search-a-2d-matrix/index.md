
---
title: 搜索二维矩阵
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[Leetcode](https://leetcode-cn.com/problems/search-a-2d-matrix-ii/)

编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：

  - 每行的元素从左到右升序排列。
  - 每列的元素从上到下升序排列。

示例:

现有矩阵 matrix 如下：

```
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
```

  - 给定 target = 5，返回 true。
  - 给定 target = 20，返回 false。

## 解题思路

二维数组是有规律的：**右上角的数字是一列中最小的、一行中最大的**，通过这个数字和 target 进行对比，可以将一行或者一列作为候选区域排出，那么 target 可能存在的范围缩小，最终得出结果。

```
public boolean searchMatrix(int[][] matrix, int target) {
    if (matrix.length == 0) {
        return false;
    }

    for (int i = 0, j = matrix[0].length - 1; i < matrix.length && j >= 0; ) {
        if (matrix[i][j] > target) {
            j--;
        } else if (matrix[i][j] < target) {
            i++;
        } else {
            return true;
        }
    }

    return false;
}
```
