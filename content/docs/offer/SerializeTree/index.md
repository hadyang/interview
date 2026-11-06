
---
title: 序列化二叉树
date: 2019-08-21T11:00:41+08:00
draft: false
categories: offer
---


## 题目

请实现两个函数，分别用来序列化和反序列化二叉树

## 解题思路

  1. 通过前序遍历，进行序列化和反序列化
  2. 对于空节点用 `$` 来代替

```
String Serialize(TreeNode root) {
    if (root==null) return "";

    LinkedList<String> res = new LinkedList<>();

    serialize(res, root);

    StringBuilder builder = new StringBuilder();
    res.forEach(v-> builder.append(v).append(","));

    return builder.toString();
}


private void serialize(LinkedList<String> res, TreeNode root) {
    if (root == null) {
        res.addLast("$");
        return;
    }

    res.addLast(String.valueOf(root.val));
    serialize(res, root.left);
    serialize(res, root.right);
}

TreeNode Deserialize(String str) {
    if (str == null || str.length() == 0) return null;

    return deserialize(str.split(","), new int[]{0});
}


private TreeNode deserialize(String[] str, int[] index) {
    if (index[0] >= str.length) return null;

    String c = str[index[0]++];
    if (c.equals("$")) return null;

    TreeNode node = new TreeNode(Integer.valueOf(c));
    node.left = deserialize(str, index);
    node.right = deserialize(str, index);

    return node;
}
```
