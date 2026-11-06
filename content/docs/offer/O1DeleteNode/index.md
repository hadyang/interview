
---
title: 在
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

给定单向链表的头指针以及待删除的指针，定义一个函数在 O(1) 的时间复杂度下删除

## 解题思路

  1. 待删除节点非尾节点，将后一个节点的值复制到当前节点，然后删除后一个节点
  2. 待删除节点为尾节点，从头节点开始，找到待删除节点的前一个节点进行删除

```
public void O1DeleteNode(ListNode head, ListNode needDelete) {

    if (needDelete.next != null) {
        ListNode next = needDelete.next.next;
        needDelete.val = needDelete.next.val;
        needDelete.next = next;

    } else {
        ListNode cursor = head;

        while (cursor != null) {
            if (cursor.next == needDelete) break;

            cursor = cursor.next;
        }

        if (cursor == null) return;

        cursor.next = needDelete.next;
    }

}
```
