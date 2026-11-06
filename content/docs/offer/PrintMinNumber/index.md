
---
title: 把数组排成最小的数
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[把数组排成最小的数](https://www.nowcoder.com/practice/8fecd3f8ba334add803bf2a06af1b993?tpId=13&tqId=11185&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking&tPage=2)

输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组`{3，32，321}`，则打印出这三个数字能排成的最小数字为`321323`。

## 解题思路

  1. 最直接的办法就是，找到数组中数字的所有排列组合，找到最小的
  2. 对于 {{<katex>}}m, n{{</katex>}}，可以组成 {{<katex>}}mn , nm{{</katex>}} 这两个数，如果 {{<katex>}}mn < nm{{</katex>}} 那么，{{<katex>}}m{{</katex>}} 应该在 {{<katex>}}n{{</katex>}} 之前
  3. 对于一组数，可以通过上述规则进行排序，依次打印出来就是最小的数
  4. 由于组合之后的数可能超出 int 的表示范围，注意使用字符串来处理大数问题

```
public String PrintMinNumber(int[] numbers) {
    List<String> nums = new ArrayList<>();
    for (int number : numbers) {
        nums.add(String.valueOf(number));
    }

    nums.sort(Comparator.comparing(s -> s, (o1, o2) -> (o1 + o2).compareTo(o2 + o1)));

    StringJoiner joiner = new StringJoiner("");
    nums.forEach(joiner::add);

    return joiner.toString();
}
```
