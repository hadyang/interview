
---
title: 二叉树的深度
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/435fb86331474282a3499955f0a41e8b?tpId=13&tqId=11191&tPage=2&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking)

输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。

## 解题思路

  1. 深度优先遍历

```
public int TreeDepth(TreeNode root) {
    int[] max = {0};
    depth(root, max, 1);
    return max[0];
}

private void depth(TreeNode root, int[] max, int curDepth) {
    if (root == null) return;

    if (curDepth > max[0]) max[0] = curDepth;

    depth(root.left, max, curDepth + 1);
    depth(root.right, max, curDepth + 1);
}
```
