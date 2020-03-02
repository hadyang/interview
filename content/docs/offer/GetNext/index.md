---
title: 二叉树的下一个结点
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。

## 解题思路

```
public TreeLinkNode GetNext(TreeLinkNode pNode) {
    if (pNode == null) return null;

    TreeLinkNode parent = pNode.next;
    if (pNode.right == null) {
        if (parent == null) {
            return null;
        }

        //右节点
        if (parent.right == pNode) {
            TreeLinkNode cursor = parent;
            while (true) {
                TreeLinkNode p = cursor.next;
                if (p == null) return null;

                if (cursor == p.left) return p;

                cursor = p;
            }


        } else {
            return parent;
        }

    } else {
        TreeLinkNode cursor = pNode.right;
        while (cursor.left != null) {
            cursor = cursor.left;
        }

        return cursor;
    }

}
```
