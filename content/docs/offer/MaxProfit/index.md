
---
title: 股票的最大利润
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

一只股票在某些时间节点的价格为`{9,11,8,5,7,12,16,14}`。如果我们能在价格为 5 的时候买入并在价格为 16 时卖出，则能获得最大的利润为 11.


## 解题思路

  1. 要先买入才能卖出，先找最低价格点
  2. 再找最低价格之后的最高价格，用 `maxProfit` 表示最大利润

```
public int maxProfit(int[] nums) {
    if (nums == null || nums.length == 0) return 0;

    int min = Integer.MAX_VALUE;
    int maxProfit = 0;
    for (int i = 0; i < nums.length; i++) {
        min = Math.min(min, nums[i]);

        maxProfit = Math.max(maxProfit, nums[i] - min);
    }

    return maxProfit;
}
```
