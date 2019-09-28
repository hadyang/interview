
---
title: 链表中环的入口结点
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。


## 解题思路

  1. 首先通过 **快慢指针**（快：每次走两步；慢：每次走一步）确定是否有环
  2. 当有环时，再从头节点出发，与快指针按 **相同速度** 向前移动，当 `cursor = fast` 则找到环入口

```
public ListNode EntryNodeOfLoop(ListNode pHead) {
    if (pHead == null || pHead.next == null) return null;

    ListNode fast = pHead, slow = pHead;

    while (fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;

        if (fast == slow) break;
    }

    if (fast != slow) return null;

    ListNode cursor = pHead;
    while (cursor != fast) {
        cursor = cursor.next;
        fast = fast.next;
    }

    return cursor;
}
```
