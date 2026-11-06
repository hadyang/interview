---
title: SQL
date: 2020-02-20
draft: false
categories: database
---

# SQL

## 连接

在 MySQL 中 `JOIN`、 `CROSS JOIN` 、 `INNER JOIN` 是等价的，都是内连接。

### 内连接

- `JOIN`、 `CROSS JOIN` 、 `INNER JOIN` 当使用这三个子句时，其结果都是笛卡尔积；
- 如果以上三个子句加上 `ON`，则为 **等值连接**：只会返回 `ON` 子句相等的结果

### 外连接

外连接分为 `LEFT JOIN` 、 `RIGHT JOIN` 和 `NATURAL JOIN`，所有外连接均可省略 `OUTER` 关键字，即 `LEFT OUTER JOIN...ON...` 与 `LEFT JOIN...ON...`等效。

- `T1 LEFT JOIN T2 ON T1.id=T2.id`：左外连接，返回所有列、T1 所有行、T2 中 条件符合的行
- `T1 RIGHT JOIN T2 ON T1.id=T2.id`：右外连接，返回所有列、T2 所有行、T1 中 条件符合的行
- `T1 NATURAL JOIN T2`：自然连接，返回 T1 所有行、T2 中与 T1 匹配的行，相同的属性被合并

对于自然连接要多做说明，现在有表 `join_test1` 、`join_test2`：

```log
mysql> select * from  join_test1;
+----+------+
| id | name |
+----+------+
|  1 | A    |
|  2 | B    |
|  3 | C    |
+----+------+
3 rows in set (0.00 sec)

mysql> select * from  join_test2;
+----+------+
| id | sex  |
+----+------+
|  1 | 男   |
|  2 | 女   |
|  4 | 男   |
+----+------+
3 rows in set (0.00 sec)
```

自然连接的结果：

```log
mysql> select * from join_test1 NATURAL join join_test2;
+----+------+------+
| id | name | sex  |
+----+------+------+
|  1 | A    | 男   |
|  2 | B    | 女   |
+----+------+------+
```

上面三种子句，又可组合出 `NATURAL LEFT|RIGHT JOIN...`：这种子句就结合了 `NATURAL JOIN` 和 `LEFT|RIGHT JOIN..ON...` 的特点：**在执行左|右连接的同时，将相同属性合并**。

```log
mysql> select * from join_test1 NATURAL left join join_test2;
+----+------+------+
| id | name | sex  |
+----+------+------+
|  1 | A    | 男   |
|  2 | B    | 女   |
|  3 | C    | NULL |
+----+------+------+
3 rows in set (0.00 sec)
```

## 子查询

### 子查询作为标量

```sql
SELECT (SELECT s2 FROM t1);
```

### 子查询比较

`non_subquery_operand comparison_operator (subquery)`

=  >  <  >=  <=  <>  !=  <=> LIKE

### ANY IN SOME

```
operand comparison_operator ANY (subquery)
operand IN (subquery)
operand comparison_operator SOME (subquery)
```

### EXISTS or NOT EXISTS

```sql
SELECT column1 FROM t1 WHERE EXISTS (SELECT * FROM t2);
```

### ALL

operand comparison_operator ALL (subquery)

```sql
SELECT s1 FROM t1 WHERE s1 > ALL (SELECT s1 FROM t2);
```


### 关联查询

```sql
SELECT * FROM t1
  WHERE column1 = ANY (SELECT column1 FROM t2
                       WHERE t2.column2 = t1.column2);

select Score, (select count(distinct Score) from Scores b where b.Score>= s.Score) Rank from Scores s order by Score desc
```

### 派生表

```sql
SELECT ... FROM (subquery) [AS] tbl_name ...
```