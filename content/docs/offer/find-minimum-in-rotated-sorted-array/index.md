
---
title: 旋转数组的最小数字
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/9f3231a991af4f55b95579b44b7a01ba?tpId=13&tqId=11159&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。


## 解题思路

  1. 旋转之后的数组存在两个上升序列，最小元素在两个上升序列的中间
  2. 用两个指针在两个序列中找到最大和最小的值，这样 end 指向的数则为最小

```
public int minNumberInRotateArray(int[] array) {
    if (array.length == 0) {
        return 0;
    }

    int start = 0, end = array.length - 1;

    while (end - start != 1) {
        int mid = (start + end) / 2;
        if (array[mid] >= array[start]) {
            start = mid;
        }

        if (array[mid] <= array[end]) {
            end = mid;
        }
    }

    return array[end];
}
```
