
---
title: 合并两个排序的链表
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/d8b6b4358f774294a89de2a6ac4d9337?tpId=13&tqId=11169&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking&tPage=1)

输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

## 解题思路

  1. 双指针指向两个链表
  2. 循环选取最小值，加入结果集

```
public ListNode Merge(ListNode list1, ListNode list2) {
    ListNode head = new ListNode(-1);
    ListNode cursor = head;

    while (list1 != null || list2 != null) {
        if (list1 == null) {
            while (list2 != null) {
                cursor.next = list2;
                cursor = cursor.next;
                list2 = list2.next;
            }

            continue;
        }

        if (list2 == null) {
            while (list1 != null) {
                cursor.next = list1;
                cursor = cursor.next;
                list1 = list1.next;
            }

            continue;
        }

        if (list1.val < list2.val) {
            cursor.next = list1;
            cursor = cursor.next;

            list1 = list1.next;
        } else {
            cursor.next = list2;
            cursor = cursor.next;

            list2 = list2.next;
        }
    }

    return head.next;
}
```
