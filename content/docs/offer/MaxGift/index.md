---
title: 礼物的最大值
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

在一个 `m*n` 的棋盘中的每一个格都放一个礼物，每个礼物都有一定的价值（价值大于0）.你可以从棋盘的左上角开始拿各种里的礼物，并每次向左或者向下移动一格，直到到达棋盘的右下角。给定一个棋盘及上面个的礼物，请计算你最多能拿走多少价值的礼物？

比如说现在有一个如下的棋盘:

```log
  [1,3,1]
  [1,5,1]
  [4,2,1]
```

在这个棋盘中，按照 `1 -> 3 -> 5 -> 2 -> 1` 可以拿到最多价值的礼物。

## 解题思路

  1. 动态规划，定义 {{<katex>}}f(x,y){{</katex>}} 表示`x,y`点上能获取的最大数
  2. 状态转移方程：{{<katex>}}f(x,y)=\max(f(x-1,y),f(x,y-1))+g(x,y){{</katex>}}
  3. 可以考虑使用一维数组进行记录

```
public int maxGift(int[][] matrix) {
    for (int i = 0; i < matrix.length; i++) {
        for (int j = 0; j < matrix[i].length; j++) {
            int a = i > 0 ? matrix[i - 1][j] : 0;
            int b = j > 0 ? matrix[i][j - 1] : 0;

            matrix[i][j] += Math.max(a, b);
        }
    }

    System.out.println(Arrays.deepToString(matrix));

    return matrix[matrix.length - 1][matrix[0].length - 1];
}
```
