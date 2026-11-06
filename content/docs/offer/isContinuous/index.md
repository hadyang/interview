
---
title: 扑克牌顺子
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---



## 题目

[牛客网](https://www.nowcoder.com/practice/762836f4d43d43ca9deb273b3de8e1f4?tpId=13&tqId=11198&tPage=3&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking)

LL今天心情特别好,因为他去买了一副扑克牌,发现里面居然有 2 个大王, 2 个小王(一副牌原本是 `54` 张)...他随机从中抽出了 5 张牌,想测测自己的手气,看看能不能抽到顺子,如果抽到的话,他决定去买体育彩票,嘿嘿！！“`红心A,黑桃3,小王,大王,方片5`”,“Oh My God!”不是顺子.....LL不高兴了,他想了想,决定大\小 王可以看成任何数字,并且`A看作1,J为11,Q为12,K为13`。上面的5张牌就可以变成“`1,2,3,4,5`”(大小王分别看作2和4),“So Lucky!”。LL决定去买体育彩票啦。 现在,要求你使用这幅牌模拟上面的过程,然后告诉我们 LL 的运气如何， 如果牌能组成顺子就输出 true，否则就输出 false。为了方便起见,你可以认为大小王是0。

## 解题思路

  1. 对数组进行排序
  2. 计算非0元素之间的间隔总和
  3. 如果有相同元素则直接认为失败
  4. 如果间隔大于0，那么间隔的总个数等于0的总个数，即为成功

```
public boolean isContinuous(int[] numbers) {
    if (numbers == null || numbers.length < 5) return false;

    Arrays.sort(numbers);

    int count = 0;
    int zeroCount = 0;
    int pre = -1;
    for (int number : numbers) {
        if (number == 0) {
            zeroCount++;
            continue;
        }

        if (pre == -1) pre = number;
        else {
            int t = number - pre - 1;
            if (t > 0) {
                count += t;
            } else if (t < 0) return false;

            pre = number;
        }
    }

    if (count == 0) return true;
    else return count == zeroCount;
}
```
