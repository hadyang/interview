
---
title: 合并
date: 2019-08-21T11:00:41+08:00
draft: false
categories: leetcode
---


**头条重点**

## 题目

合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

```
示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6
```

## 解题思路

  1. 通过小根堆，将所有元素放入小根堆
  2. 从小根堆依次取出数据

```
public ListNode mergeKLists(ListNode[] lists) {
    if (lists == null) {
        return null;
    }

    Queue<ListNode> set = new PriorityQueue<>(Comparator.comparingInt(o -> o.val));

    for (ListNode node : lists) {
        while (node != null) {
            set.add(node);
            node = node.next;
        }
    }

    ListNode head = new ListNode(-1);
    ListNode res = head;
    ListNode cur;
    while ((cur = set.poll()) != null) {
        head.next = cur;
        head = head.next;
    }

    head.next = null;
    return res.next;
}
```
