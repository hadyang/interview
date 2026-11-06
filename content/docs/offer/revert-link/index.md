
---
title: 反转链表
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca?tpId=13&tqId=11168&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking&tPage=1)

输入一个链表，反转链表后，输出新链表的表头。

## 解题思路

  1. 三个指针

```
public ListNode ReverseList(ListNode head) {
    if (head == null || head.next == null) {
        return head;
    }

    ListNode pre = head, cur = head.next, next;
    pre.next = null;

    while (cur != null) {
        next = cur.next;
        cur.next = pre;

        pre = cur;
        cur = next;
    }

    return pre;
}
```
