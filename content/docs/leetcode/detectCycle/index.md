---
title: 环形链表 II
date: 2019-08-21T11:00:41+08:00
draft: false
categories: leetcode
---

# [环形链表 II](https://leetcode-cn.com/explore/interview/card/bytedance/244/linked-list-and-tree/1023/)

## 题目

给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。


## 解题思路

  1. 首先通过快慢指针确定链表是否有环
  2. 再使用一个指针从头节点与快慢指针相遇节点同步长前进，最终找到环的入口

```
public ListNode detectCycle(ListNode head) {
    ListNode fast = head, slow = head;

    ListNode meetNode = null;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast == slow) {
            meetNode = fast;
            break;
        }
    }

    if (meetNode == null) {
        return meetNode;
    }

    while (head != meetNode) {
        head = head.next;
        if (head == meetNode) {
            break;
        }

        meetNode = meetNode.next;
    }

    return meetNode;
}
```
