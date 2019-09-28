
---
title: 字符串的排列
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/fe6b651b66ae47d7acce78ffdd9a96c7?tpId=13&tqId=11180&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking&tPage=2)


输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。

输入描述:输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。

## 解题思路

  1. 将字符串划分为两个部分，第一个字符以及后面的其他字符
  2. 将第一个字符和后面所有字符进行交换

对于 `abc` 这个字符串，计算出的排列顺序为：

```
abc
acb
bac
bca
cba
cab
```

代码：

```
public ArrayList<String> Permutation(String str) {
    Set<String> res = new HashSet<>();

    if (str == null || str.length() == 0) {
        return new ArrayList<>();
    }

    Permutation(res, str.toCharArray(), 0);

    ArrayList<String> list = new ArrayList<>(res);

    list.sort(String::compareTo);
    return list;
}

private void Permutation(Set<String> res, char[] chars, int start) {
    if (start == chars.length) {
        res.add(new String(chars));
        return;
    }

    for (int i = start; i < chars.length; i++) {
        swap(chars, start, i);

        Permutation(res, chars, start + 1);

        swap(chars, start, i);
    }
}

private void swap(char[] chars, int i, int j) {
    char temp = chars[i];
    chars[i] = chars[j];
    chars[j] = temp;
}
```
