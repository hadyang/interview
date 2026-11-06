
---
title: 个骰子的点数
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

把 n 个骰子扔在地上，所有骰子朝上一面的和为 s，输入 n，打印 s 所有可能值的概率

## 解题思路

  1. 首先考虑一个骰子的情况，那么有 1～6 出现的次数均为 1
  2. 再增加一个骰子时，由于各个点数出现的概率一致。用 {{<katex>}}f(n,s)=f(n-1,s-1)+f(n-1,s-2)+f(n-1,s-3)+f(n-1,s-4)+f(n-1,s-5)+f(n-1,s-6){{</katex>}}
  3. 使用两个数组循环求解

```
public void SumOfNDice(int n) {
    if (n < 1) {
        return;
    }

    int[][] nums = new int[2][n * 6 + 1];

    int flag = 0;

    //初始化第一个骰子各总和出现的次数
    int maxLen = nums[0].length;
    for (int i = 1; i < maxLen; i++) {
        nums[flag][i] = 1;
    }

    for (int i = 2; i <= n; i++) {
        int newFlag = flag ^ 0x01;
        Arrays.fill(nums[newFlag], 0);

        for (int j = i; j < maxLen; j++) {
            int sum = 0;

            for (int k = 1; k <= 6 && (j - k >= 0); k++) {
                sum += nums[flag][j - k];
            }

            nums[newFlag][j] = sum;
        }
        flag = newFlag;
    }

    //debug out
    System.out.println(Arrays.toString(nums[flag]));

    int sum = 0;
    for (int i : nums[flag]) {
        sum += i;
    }

    for (int i = 0; i < nums[flag].length; i++) {
        System.out.println(i + ":" + nums[flag][i] * 1.0 / sum);
    }
}
```
