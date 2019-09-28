
---
title: 滑动窗口的最大值
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/1624bc35a45c42c0bc17d17fa0cba788?tpId=13&tqId=11217&tPage=4&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking)

给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。例如，如果输入数组`{2,3,4,2,6,2,5,1}`及滑动窗口的大小3，那么一共存在6个滑动窗口，他们的最大值分别为`{4,4,6,6,6,5}`； 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： `{[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}`。

## 解题思路

  1. 使用一个队列来保存最大值和次大的值

```
public ArrayList<Integer> maxInWindows(int[] num, int size) {
    ArrayList<Integer> res = new ArrayList<>();

    if (size == 0) return res;

    LinkedList<Integer> queue = new LinkedList<>();

    for (int i = 0; i < num.length; i++) {
        while (queue.peekFirst() != null && i - queue.peekFirst() >= size) {
            queue.removeFirst();
        }

        while (queue.peekLast() != null && i - queue.peekLast() >= size) {
            queue.removeLast();
        }

        if (queue.isEmpty()) {
            queue.addFirst(i);
        } else {
            if (num[i] > num[queue.peekFirst()]) {
                queue.clear();
                queue.addFirst(i);
            } else {
                while (num[i] > num[queue.peekLast()]) {
                    queue.removeLast();
                }
                queue.addLast(i);
            }
        }

        if (i >= size - 1) res.add(num[queue.peekFirst()]);
    }

    return res;
}
```
