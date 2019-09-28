
---
title: 合并区间
date: 2019-08-21T11:00:41+08:00
draft: false
categories: leetcode
---


## 题目

给出一个区间的集合，请合并所有重叠的区间。

```
示例 1:

输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2:

输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
```

## 解题思路

  1. 将区间按起始地址排序
  2. 遍历所有区间，如果 `Last` 与当前区间没有重合，则将当前区间加入结果集合。
  3. 如果重合，并且 `last.end < t.end`，修改 `Last` 的边界

```
public List<Interval> merge(List<Interval> intervals) {
    if (intervals.size() <= 1) {
        return intervals;
    }

    intervals.sort(Comparator.comparingInt(o -> o.start));

    List<Interval> res = new ArrayList<>();
    res.add(intervals.get(0));

    for (int i = 1; i < intervals.size(); i++) {
        Interval t = intervals.get(i);
        Interval last = res.get(res.size() - 1);
        if (last.end >= t.start) {
            if (last.end < t.end) last.end = t.end;
        } else {
            res.add(t);
        }
    }

    return res;
}
```
