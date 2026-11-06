
---
title: 和为
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/c451a3fd84b64cb19485dad758a55ebe?tpId=13&tqId=11194&tPage=2&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking)

输出所有和为S的连续正数序列。序列内按照从小至大的顺序，序列间按照开始数字从小到大的顺序

## 解题思路

  1. 与上一个题目类似，需要确定的是序列的最大值，不超过 `sum`
  2. 使用窗口模式，两个指针定义一个窗口，和为 `t`

```
public ArrayList<ArrayList<Integer>> FindContinuousSequence(int sum) {
    ArrayList<ArrayList<Integer>> res = new ArrayList<>();
    if (sum == 1) {
        return res;
    }

    int start = 1, end = 2;
    int t = start + end;

    while (start < end) {
        if (t == sum) {
            ArrayList<Integer> ints = new ArrayList<>();
            for (int i = start; i <= end; i++) {
                ints.add(i);
            }
            res.add(ints);
            t -= start;
            start++;
        } else if (t > sum) {
            t -= start;
            start++;
        } else {
            if (end >= sum) break;

            end++;
            t += end;
        }
    }

    return res;
}
```
