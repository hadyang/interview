
---
title: 相交链表
date: 2019-08-21T11:00:41+08:00
draft: false
categories: leetcode
---


## 题目

编写一个程序，找到两个单链表相交的起始节点。

## 解题思路

  1. 首先将两个链表中长的一个向前遍历，直到两个链表长度一致
  2. 两个链表同时向前遍历，便可找到交点

```
public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    if (headA == null || headB == null) {
        return null;
    }

    if (headA == headB) {
        return headA;
    }

    int lenA = 1;
    int lenB = 1;
    ListNode temp = headA;
    while (temp.next != null) {
        temp = temp.next;
        lenA++;
    }

    ListNode tailA = temp;

    temp = headB;
    while (temp.next != null) {
        temp = temp.next;
        lenB++;
    }

    ListNode tailB = temp;
    if (tailB != tailA) {
        return null;
    }

    if (lenA > lenB) {
        for (int i = 0; i < lenA - lenB && headA != null; i++) {
            headA = headA.next;
        }

    } else if (lenA < lenB) {
        for (int i = 0; i < lenB - lenA && headB != null; i++) {
            headB = headB.next;
        }
    }

    while (!headA.equals(headB)) {
        headA = headA.next;
        headB = headB.next;
    }

    return headA;
}
```
