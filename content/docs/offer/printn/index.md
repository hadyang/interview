
---
title: 打印最大的
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


输入n，打印出 1 到最大的 n 位十进制数。比如输入3，则打印出1、2、3 直到最大的 3 位数 999。

## 解题思路

  1. n 可能很大，导致输出的数字超过 int 或者 long

```
public void PrintN(int n) {
    if (n <= 0) {
        return;
    }

    String res = "0";

    while (true) {
        boolean all9 = true;

        res = Plus(res, 1);
        System.out.println(res);

        for (int i = 0; i < res.length(); i++) {
            if (res.charAt(i) != '9') {
                all9 = false;
                break;
            }
        }

        if (all9 && res.length() == n) {
            break;
        }
    }
}

private String Plus(String t, int i) {
    char[] chars = t.toCharArray();
    StringBuilder res = new StringBuilder();
    chars[chars.length - 1] += i;

    boolean flag = false;
    for (int j = chars.length - 1; j >= 0; j--) {
        int a = chars[j];
        if (flag) {
            a++;
            flag = false;
        }

        if (a > '9') {
            flag = true;
            a = a - '9' + '0' - 1;
        }

        res.append((char) a);
    }
    if (flag) {
        res.append('1');
    }

    return res.reverse().toString();
}
```
