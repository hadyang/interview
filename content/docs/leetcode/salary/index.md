
---
title: 第二高的薪水
date: 2019-08-21T11:00:41+08:00
draft: false
categories: leetcode
---


**头条重点**

## 题目

编写一个 SQL 查询，获取 Employee 表中第二高的薪水（Salary） 。

```
+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
```

例如上述 Employee 表，SQL查询应该返回 200 作为第二高的薪水。如果不存在第二高的薪水，那么查询应返回 null。

```
+---------------------+
| SecondHighestSalary |
+---------------------+
| 200                 |
+---------------------+
```

## 解题思路

  1. 子查询

```
select IFNULL((select Distinct Salary from Employee order by Salary DESC limit 1,1),null)
as SecondHighestSalary
```
