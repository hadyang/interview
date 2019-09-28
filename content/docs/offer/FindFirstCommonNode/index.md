
---
title: 两个链表的第一个公共结点
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/6ab1d9a29e88450685099d45c9e31e46?tpId=13&tqId=11189&tPage=2&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking)

输入两个链表，找出它们的第一个公共结点。

## 解决思路

### 空间复杂度 O(n) 的算法

  1. 使用辅助容器，保存第一个链表的所有元素
  2. 遍历第二个链表，并对比当前节点是否在辅助容器中

```
/**
 * 空间 O(n)
 *
 * @param pHead1
 * @param pHead2
 * @return
 */
public ListNode FindFirstCommonNode_1(ListNode pHead1, ListNode pHead2) {
    Set<ListNode> node1s = new HashSet<>();

    while (pHead1 != null) {
        node1s.add(pHead1);
        pHead1 = pHead1.next;
    }

    while (pHead2 != null) {
        if (node1s.contains(pHead2)) {
            return pHead2;
        }

        pHead2 = pHead2.next;
    }

    return null;
}
```

### 空间复杂度 O(1) 的算法

  1. 由于两个链表有可能不一样长，首先通过遍历找到他们的长度
  2. 移动较长的那个链表，使得两个链表长度一致
  3. 同步遍历两个链表

> 原理：如果两个链表相交，那么它们一定有相同的尾节点

```
/**
 * 空间 O(1)
 *
 * @param pHead1
 * @param pHead2
 * @return
 */
public ListNode FindFirstCommonNode_2(ListNode pHead1, ListNode pHead2) {
    int len1 = 0, len2 = 0;
    ListNode cursor1 = pHead1, cursor2 = pHead2;
    while (cursor1 != null) {
        cursor1 = cursor1.next;
        len1++;
    }

    while (cursor2 != null) {
        cursor2 = cursor2.next;
        len2++;
    }

    cursor1 = pHead1;
    cursor2 = pHead2;
    if (len1 > len2) {
        int i = len1;
        while (i != len2) {
            cursor1 = cursor1.next;
            i--;
        }
    } else if (len1 < len2) {
        int i = len2;
        while (i != len1) {
            cursor2 = cursor2.next;
            i--;
        }
    }

    while (cursor1 != null && cursor2 != null) {
        if (cursor1 == cursor2) {
            return cursor1;
        }

        cursor1 = cursor1.next;
        cursor2 = cursor2.next;
    }

    return null;
}
```
