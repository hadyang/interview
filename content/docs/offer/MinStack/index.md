
---
title: 包含
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/4c776177d2c04c2494f2555c9fcc1e49?tpId=13&tqId=11173&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking&tPage=1)

定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的 min 函数（时间复杂度应为O（1））。

## 解题思路

  1. 通过增加最小栈来记录当前最小节点

```
private LinkedList<Integer> stack = new LinkedList<>();
private LinkedList<Integer> min = new LinkedList<>();

public void push(int node) {
    stack.addLast(node);

    if (min.isEmpty()) {
        min.addLast(node);
        return;
    }

    if (node < min.peekLast()) {
        min.addLast(node);
    } else {
        min.addLast(min.peekLast());
    }
}

public void pop() {
    if (stack.isEmpty()) {
        return;
    }
    stack.removeLast();
    min.removeLast();
}

public int top() {
    if (stack.peekLast() == null) {
        return 0;
    }
    return stack.peekLast();
}

public int min() {
    if (min.peekLast() == null) {
        return 0;
    }
    return min.peekLast();
}
```
