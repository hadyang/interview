
---
title: 圆圈中最后剩下的数
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/f78a359491e64a50bce2d89cff857eb6?tpId=13&tqId=11199&tPage=3&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking)

每年六一儿童节,牛客都会准备一些小礼物去看望孤儿院的小朋友,今年亦是如此。HF 作为牛客的资深元老,自然也准备了一些小游戏。其中,有个游戏是这样的:首先,让小朋友们围成一个大圈。然后,他随机指定一个数m,让编号为0的小朋友开始报数。每次喊到m-1的那个小朋友要出列唱首歌,然后可以在礼品箱中任意的挑选礼物,并且不再回到圈中,从他的下一个小朋友开始,继续0...m-1报数....这样下去....直到剩下最后一个小朋友,可以不用表演,并且拿到牛客名贵的“名侦探柯南”典藏版。请你试着想下,哪个小朋友会得到这份礼品呢？(注：小朋友的编号是从 `0` 到 `n-1` )

## 解题思路

### 模拟

最简单直接的解法，但是时间效率不够

```
public int LastRemaining_Solution(int n, int m) {
    if (n == 1) return 1;

    LinkedList<Integer> data = new LinkedList<>();
    for (int i = 0; i < n; i++) {
        data.addLast(i);
    }

    while (data.size() != 1) {
        for (int i = 0; i < m; i++) {
            Integer first = data.pollFirst();

            if (i != m - 1) {
                data.addLast(first);
            }
        }
    }


    return data.pollFirst();
}
```

### 通过数学推导的解法

时间效率和空间效率都很高，但是。。。没看懂

$$
f(n,m)=
\begin{cases}
0&n=1 \\
[f(n-1,m)+m]\%n & n>1
\end{cases}
$$

```
public int LastRemaining_Solution(int n, int m) {
    if (n == 0) return -1;

    if (n == 1) return 0;

    int last = 0;
    for (int i = 2; i <= n; i++) {
        last = (last + m) % i;
    }

    return last;
}
```
