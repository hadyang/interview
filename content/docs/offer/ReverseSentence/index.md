
---
title: 翻转单词顺序列
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/3194a4f4cf814f63919d0790578d51f3?tpId=13&tqId=11197&tPage=3&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking)

牛客最近来了一个新员工 `Fish` ，每天早晨总是会拿着一本英文杂志，写些句子在本子上。同事Cat对Fish写的内容颇感兴趣，有一天他向Fish借来翻看，但却读不懂它的意思。例如，“student. a am I”。后来才意识到，这家伙原来把句子单词的顺序翻转了，正确的句子应该是“I am a student.”。Cat对一一的翻转这些单词顺序可不在行，你能帮助他么？

## 解题思路



```
public String ReverseSentence(String str) {
    if(str == null || str.trim().equals("")) return str;

    String[] split = str.split(" ");

    StringBuilder builder = new StringBuilder();
    for (int i = split.length - 1; i >= 0; i--) {
        builder.append(split[i]);

        if (i != 0) builder.append(" ");
    }

    return builder.toString();
}
```
