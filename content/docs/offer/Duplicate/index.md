
---
title: 数组中重复的数字
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

在一个长度为n的数组里的所有数字都在0到 n-1 的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 例如，如果输入长度为7的数组`{2,3,1,0,2,5,3}`，那么对应的输出是第一个重复的数字2。

## 解题思路

### 解法一

  1. 由于数组内数字在 `0 ~ n-1` 的范围内，可以将数组按 **数字做下标** 进行重排序
  2. 将 `n` 放置到 `num[n]` 上，交换之前再判定在 `num[n]` 上是否为相同数字

```
public boolean duplicate(int numbers[], int length, int[] duplication) {
    if (numbers == null || numbers.length == 0) return false;

    for (int i = 0; i < numbers.length; i++) {

        while (numbers[i] != i) {
            int number = numbers[i];
            int wrongNum = numbers[number];
            if (number == wrongNum) {
                duplication[0] = number;
                return true;
            }

            swap(numbers, i, number);
        }

    }


    return false;
}

private static void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
```

### 解法二

  1. 把数字 `1 ~ n` 划分为 `1 ~ m`、`m+1 ~ n`，统计两个子数组中每个数字在 `1~n` 出现的次数
  2. 如果出现的次数大于 `m`，那么重复数字一定在 `1 ~ m` 中
  3. 继续这样进行划分，可以找到重复数组
