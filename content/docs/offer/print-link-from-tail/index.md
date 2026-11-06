
---
title: 从尾到头打印链表
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035?tpId=13&tqId=11156&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)

输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。

## 解题思路

  1. 栈

```
public ArrayList<Integer> printListFromTailToHead(ListNode listNode) {
LinkedList<Integer> stack = new LinkedList<>();

while (listNode != null) {
    stack.addLast(listNode.val);
    listNode = listNode.next;
}

ArrayList<Integer> res = new ArrayList<>();

while (!stack.isEmpty()) {
    res.add(stack.pollLast());
}

return res;
}
```

  2. 递归：当链表过长时，会导致栈溢出

```
public ArrayList<Integer> printListFromTailToHead(ListNode listNode) {
    ArrayList<Integer> res = new ArrayList<>();

    print(res,listNode);

    return res;
}

private void print(ArrayList<Integer> res, ListNode listNode) {
    if (listNode == null) return;

    print(res, listNode.next);

    res.add(listNode.val);
}
```
