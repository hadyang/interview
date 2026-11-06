
---
title: 合并两个有序链表
date: 2019-08-21T11:00:41+08:00
draft: false
categories: leetcode
---


## 题目

将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

```
示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

## 解题思路


```
public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    if (l1 == null && l2 == null) {
        return null;
    }

    if (l1 == null) {
        return l2;
    }

    if (l2 == null) {
        return l1;
    }

    ListNode head;

    if (l1.val > l2.val) {
        head = l2;
        l2 = l2.next;
    } else {
        head = l1;
        l1 = l1.next;
    }

    ListNode res = head;
    while (true) {
        ListNode cur;
        if (l1 == null && l2 == null) {
            break;
        }

        if (l1 == null) {
            cur = l2;
            l2 = l2.next;
        } else if (l2 == null) {
            cur = l1;
            l1 = l1.next;
        } else if (l1.val > l2.val) {
            cur = l2;
            l2 = l2.next;
        } else {
            cur = l1;
            l1 = l1.next;
        }

        head.next = cur;
        head = head.next;
    }

    return res;
}
```
