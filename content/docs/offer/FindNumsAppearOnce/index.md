
---
title: 数组中只出现一次的数字
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/e02fdb54d7524710a7d664d082bb7811?tpId=13&tqId=11193&tPage=2&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking)

一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。

## 解题思路

  1. 两个相等的数字进行异或的结果为0
  2. 在这个特殊的数组中，重复出现的数字只能为2次，那么如果将所有数字异或 就等价与将两个不同的数字进行异或
  3. 异或的结果肯定有一位为1，那么这两个不同的数字，在这一位上不同。
  4. 找到第一个为1的位，并将第一位为1的位是否为1作为分组条件，相同的数字一定在同一个分组里，整个数组分组异或
  5. 得到两个结果，即为两个不同的数

```
/**
 * num1,num2分别为长度为1的数组。传出参数。将num1[0],num2[0]设置为返回结果
 * @param array
 * @param num1
 * @param num2
 */
public void FindNumsAppearOnce(int[] array, int num1[], int num2[]) {
    if (array == null || array.length < 3) {
        return;
    }

    int result = array[0];

    for (int i = 1; i < array.length; i++) {
        result ^= array[i];
    }

    //找到第一个为1的位
    int indexOfFirstBit1 = 0;
    int temp = result;
    while (temp != 0) {
        indexOfFirstBit1++;
        temp >>>= 1;
    }

    int mask = 1;
    for (int i = 1; i < indexOfFirstBit1; i++) {
        mask <<= 1;
    }

    //将第一位为1的位是否为1作为分组条件，分组异或
    int n1 = -1, n2 = -1;
    for (int i : array) {
        if ((i & mask) == mask) {
            if (n1 == -1) n1 = i;
            else n1 ^= i;
        } else {
            if (n2 == -1) n2 = i;
            else n2 ^= i;
        }
    }

    num1[0] = n1;
    num2[0] = n2;
}
```
