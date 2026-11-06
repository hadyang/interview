
---
title: 用两个栈实现一个队列
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6?tpId=13&tqId=11158&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)

用两个栈来实现一个队列，完成队列的 Push 和 Pop 操作。 队列中的元素为int类型。


## 解题思路

  1. 用 stack1 作为 push 队列，将元素 push 到 stack1
  2. 用 stack2 作为 pop 队列，当 stack2 为空时则将 stack1 的数据 push 到 stack2，否则直接 pop stack2

相当于将两个 stack 拼接：-> stack1 <::> stack2 ->

```
Stack<Integer> pushStack = new Stack<>();
Stack<Integer> popStack = new Stack<>();

public void push(int node) {
    pushStack.push(node);
}

public int pop() {
    if (popStack.isEmpty()) {
        while (!pushStack.isEmpty()) {
            popStack.push(pushStack.pop());
        }
    }
    if (popStack.isEmpty()) return -1;
    else return popStack.pop();
}
```
