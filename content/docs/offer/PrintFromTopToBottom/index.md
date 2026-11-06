
---
title: 从上往下打印二叉树
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

[牛客网](https://www.nowcoder.com/practice/7fe2212963db4790b57431d9ed259701?tpId=13&tqId=11175&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking&tPage=1)

从上往下打印出二叉树的每个节点，同层节点从左至右打印。


## 解题思路

  1. 层次遍历，通过队列进行辅助遍历

```
public ArrayList<Integer> PrintFromTopToBottom(TreeNode root) {
    ArrayList<Integer> res = new ArrayList<>();
    LinkedList<TreeNode> nodeQueue = new LinkedList<>();

    if (root == null) {
        return res;
    }

    nodeQueue.addLast(root);

    while (!nodeQueue.isEmpty()) {
        TreeNode node = nodeQueue.pollFirst();
        if (node == null) {
            continue;
        }

        nodeQueue.addLast(node.left);
        nodeQueue.addLast(node.right);

        res.add(node.val);
    }

    return res;
}
```
