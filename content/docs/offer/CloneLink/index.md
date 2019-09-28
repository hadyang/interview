
---
title: 复杂链表的复制
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/f836b2c43afc4b35ad6adc41ec941dba?tpId=13&tqId=11178&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking&tPage=2)

输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的 head 。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）


## 解题思路


  1. 复制每个节点，如：复制节点 A 得到 A1 ，将 A1 插入节点 A 后面
  2. 遍历链表，并将 `A1->random = A->random->next`;
  3. 将链表拆分成原链表和复制后的链表

```
public RandomListNode Clone(RandomListNode pHead) {
    if (pHead == null) {
        return null;
    }

    RandomListNode cursor = pHead;
    while (cursor != null) {
        RandomListNode copyNode = new RandomListNode(cursor.label);

        RandomListNode nextNode = cursor.next;
        cursor.next = copyNode;
        copyNode.next = nextNode;

        cursor = nextNode;
    }

    cursor = pHead;
    while (cursor != null) {
        RandomListNode copyNode = cursor.next;

        if (cursor.random == null) {
            cursor = copyNode.next;
            continue;
        }

        copyNode.random = cursor.random.next;

        cursor = copyNode.next;
    }

    RandomListNode copyHead = pHead.next;
    cursor = pHead;
    while (cursor.next != null) {
        RandomListNode copyNode = cursor.next;
        cursor.next = copyNode.next;
        cursor = copyNode;
    }

    return copyHead;
}
```
