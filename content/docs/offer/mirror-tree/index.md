
---
title: 镜像二叉树
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[镜像二叉树](https://www.nowcoder.com/practice/564f4c26aa584921bc75623e48ca3011?tpId=13&tqId=11171&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking&tPage=1)

操作给定的二叉树，将其变换为源二叉树的镜像。

输入描述:

```
二叉树的镜像定义：源二叉树
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11 9 7  5
```

## 解题思路

  1. 从上到下进行左右节点交换

```
public void Mirror(TreeNode root) {
    if (root == null) return;

    TreeNode temp = root.left;
    root.left = root.right;
    root.right = temp;

    Mirror(root.left);
    Mirror(root.right);
}
```
