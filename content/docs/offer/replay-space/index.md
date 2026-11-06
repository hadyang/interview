
---
title: 替换空格
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/questionTerminal/4060ac7e3e404ad1a894ef3e17650423)

请实现一个函数，将一个字符串中的每个空格替换成`“%20”`。例如，当字符串为`We Are Happy.`则经过替换之后的字符串为 `We%20Are%20Happy`。

## 解题思路

  1. 通过字符串中空格的个数，计算新字符串长度
  2. 两个指针进行字符串拷贝，当遇到`‘ ’`时替换为 `%20`

```
public String replaceSpace(StringBuffer str) {
    char[] chars = str.toString().toCharArray();
    StringBuilder res = new StringBuilder();
    for (char c : chars) {
        if (c == ' ') res.append("%20");
        else res.append(c);
    }
    return res.toString();
}
```
