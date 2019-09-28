
---
title: 二叉搜索树的第
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目


给定一棵二叉搜索树，请找出其中的第 k 小的结点。例如，`5，3，7，2，4，6，8` 中，按结点数值大小顺序第三小结点的值为4。

[牛客网](https://www.nowcoder.com/practice/ef068f602dde4d28aab2b210e859150a?tpId=13&tqId=11215&tPage=4&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking)


## 解题思路

  1. BST 中序遍历的结果就是排序后的结果

```
public TreeNode KthNode(TreeNode pRoot, int k) {
    TreeNode[] nodes = new TreeNode[1];

    int[] ints = {0};

    KthNode(pRoot, k, nodes, ints);

    return nodes[0];
}

private void KthNode(TreeNode root, int k, TreeNode[] res, int[] cursor) {
    if (root == null) return;

    if (res[0] != null) return;

    KthNode(root.left, k, res, cursor);
    cursor[0]++;

    if (cursor[0] == k) {
        res[0] = root;
        return;
    }

    KthNode(root.right, k, res, cursor);
}
```
