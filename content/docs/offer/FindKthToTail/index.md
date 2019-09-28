
---
title: 链表中倒数第
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/529d3ae5a407492994ad2a246518148a?tpId=13&tqId=11167&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking&tPage=1)

输入一个链表，输出该链表中倒数第k个结点。

## 解题思路

  1. 两个指针，快指针先走 k 步，然后慢指针在向前移动，当快指针遍历结束，慢指针指向倒数第 k 个节点
  2. 需要考虑倒数 k 个节点不存在的情况

```
public ListNode FindKthToTail(ListNode head, int k) {
    if (head == null) {
        return null;
    }

    ListNode cursor = head;
    ListNode cursorK = head;

    int i = 0;

    while (cursorK != null) {
        cursorK = cursorK.next;

        if (i >= k) {
            cursor = cursor.next;
        }

        i++;
    }

    if (i < k) {
        return null;
    }

    return cursor;
}
```
