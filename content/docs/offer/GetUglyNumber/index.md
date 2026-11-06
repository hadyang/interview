
---
title: 丑数
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


[牛客网](https://www.nowcoder.com/practice/1c82e8cf713b4bbeb2a5b31cf5b0417c?tpId=13&tqId=11187&tPage=2&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking)

把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。

## 解题思路

  1. 通过保存已有丑数的方式，用空间换时间
  1. 对于已有丑数 {{<katex>}}M{{</katex>}} ，那么下一个丑数 {{<katex>}}M=\min(M_{2}\times2,M_{3}\times3,M_{5}\times5){{</katex>}}
  2. {{<katex>}}M_{max}{{</katex>}} 是目前最大的丑数，那么 {{<katex>}}M_{2}{{</katex>}} 是已有丑数中 {{<katex>}}M_{2}\times2{{</katex>}} 第一个大于 {{<katex>}}M_{max}{{</katex>}} 的丑数

```
public int GetUglyNumber_Solution(int index) {
    if (index == 0) {
        return 0;
    }

    if (index == 1) {
        return 1;
    }

    ArrayList<Integer> list = new ArrayList<>(index);
    list.add(1);

    int preIndex2 = 0;
    int preIndex3 = 0;
    int preIndex5 = 0;
    for (int i = 0; i < index; i++) {
        int next2 = list.get(preIndex2) * 2;
        int next3 = list.get(preIndex3) * 3;
        int next5 = list.get(preIndex5) * 5;

        int nextV = Math.min(Math.min(next2, next3), next5);
        list.add(nextV);

        while (preIndex2 < list.size() - 1 && list.get(preIndex2) * 2 <= nextV) preIndex2++;
        while (preIndex3 < list.size() - 1 && list.get(preIndex3) * 3 <= nextV) preIndex3++;
        while (preIndex5 < list.size() - 1 && list.get(preIndex5) * 5 <= nextV) preIndex5++;
    }

    return list.get(index - 1);
}
```
