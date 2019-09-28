
---
title: 顺时针打印矩阵
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[](https://www.nowcoder.com/practice/9b4c81a02cd34f76be2659fa0d54342a?tpId=13&tqId=11172&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking&tPage=1)

输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： `1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16` 则依次打印出数字`1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10`.

## 解题思路

  1. 通过4个指针，表示可打印区域，并对区域进行收缩
  2. 非 n*n 的矩阵，对于剩余非 4 边遍历的元素，要考虑边界

```
public ArrayList<Integer> printMatrix(int[][] matrix) {
    ArrayList<Integer> res = new ArrayList<>();

    if (matrix.length == 0) {
        return res;
    }

    if (matrix.length == 1) {
        for (int i : matrix[0]) {
            res.add(i);
        }

        return res;
    }

    int top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;

    for (; left <= right && top <= bottom; ) {
        if (top == bottom) {
            for (int i = left; i <= right; i++) {
                res.add(matrix[top][i]);
            }
            break;
        }

        if (left == right) {
            for (int i = top; i <= bottom; i++) {
                res.add(matrix[i][left]);
            }

            break;
        }

        for (int p = left; p <= right; p++) {
            res.add(matrix[top][p]);
        }
        top++;

        for (int p = top; p <= bottom; p++) {
            res.add(matrix[p][right]);
        }
        right--;

        for (int p = right; p >= left; p--) {
            res.add(matrix[bottom][p]);
        }
        bottom--;

        for (int p = bottom; p >= top; p--) {
            res.add(matrix[p][left]);
        }
        left++;
    }
    return res;
}
```
