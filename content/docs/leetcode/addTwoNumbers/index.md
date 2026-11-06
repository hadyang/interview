---
title: 两数相加
date: 2019-08-21T11:00:41+08:00
draft: false
categories: leetcode
---

# [两数相加](https://leetcode-cn.com/explore/interview/card/bytedance/244/linked-list-and-tree/1022/)

**头条重点**

## 题目

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

```
示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

## 解题思路

```
public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    if (l1 == null || l2 == null) {
        return null;
    }

    StringBuilder builder1 = new StringBuilder();
    while (l1 != null) {
        builder1.append(l1.val);
        l1 = l1.next;
    }

    StringBuilder builder2 = new StringBuilder();
    while (l2 != null) {
        builder2.append(l2.val);
        l2 = l2.next;
    }

    BigDecimal bigDecimal1 = new BigDecimal(builder1.reverse().toString());
    BigDecimal bigDecimal2 = new BigDecimal(builder2.reverse().toString());

    String resStr = bigDecimal1.add(bigDecimal2).toPlainString();

    ListNode head = new ListNode(Integer.parseInt(String.valueOf(resStr.charAt(resStr.length() - 1))));
    ListNode cur = head;
    for (int i = resStr.length() - 2; i >= 0; i--) {
        cur.next = new ListNode(Integer.parseInt(String.valueOf(resStr.charAt(i))));
        cur = cur.next;
    }

    return head;
}
```
