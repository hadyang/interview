# 连接

在数据库原理中，关系运算包含 **选择**、**投影**、**连接** 这三种运算。相应的在SQL语句中也有表现，其中Where子句作为选择运算，Select子句作为投影运算，From子句作为连接运算。

连接运算是从两个关系的笛卡尔积中选择属性间满足一定条件的元组，在连接中最常用的是等值连接和自然连接。

  - **等值连接**：关系R、S,取两者笛卡尔积中属性值相等的元组，不要求属性相同。比如 `R.A=S.B`
  - **自然连接（内连接）**：是一种特殊的等值连接，**它要求比较的属性列必须是相同的属性组，并且把结果中重复属性去掉**。

```sql
-- 关系R
-- +----+--------+
-- | A | B   | C |
-- +----+--------+
-- | a1 | b1 | 5 |
-- | a1 | b2 | 6 |
-- | a2 | b3 | 8 |
-- | a2 | b4 | 12|
-- +----+--------+

-- 关系S
-- +----+----+
-- | B   | E |
-- +----+----+
-- | b1 | 3 |
-- | b2 | 7 |
-- | b3 | 10 |
-- | b3 | 2 |
-- | b5 | 2|
-- +----+----+
```

自然连接 R & S的结果为：

```sql
-- +----+----+-----+----+
-- | A | B   | C  | E  |
-- +----+----+-----+----+
-- | a1 | b1  | 5 | 3  |
-- | a1 | b2  | 6 | 7  |
-- | a2 | b3  | 8 | 10 |
-- | a2 | b3 | 8 | 2  |
-- +----+----+-----+----+
```

两个关系在做自然连接时，选择两个关系在公共属性上值相等的元组构成新的关系。此时关系R中某些元组有可能在S中不存在公共属性上相等的元组，从而造成R中这些元组在操作时被舍弃，同样，S中某些元组也可能被舍弃。这些舍弃的元组被称为 **悬浮元组**。

如果把悬浮元组也保存在结果中，而在其他属性上置为NULL，那么这种连接就成为 **外连接**，如果只保留左边关系R中的悬浮元组就叫做 **左外连接（左连接）**，如果只保留右边关系S中的悬浮元组就叫做 **右外连接（右连接）**。

## Join

Join 用于多表中字段之间的联系，语法如下：

```sql
... FROM table1 INNER|LEFT|RIGHT JOIN table2 ON conditiona

-- table1:左表；table2:右表。
```

JOIN 按照功能大致分为如下三类：

  - **INNER JOIN（内连接，或等值连接）**：取得两个表中存在连接匹配关系的记录。
  - **LEFT JOIN（左连接）**：取得左表（table1）完全记录，即是右表（table2）并无对应匹配记录。
  - **RIGHT JOIN（右连接）**：与 LEFT JOIN 相反，取得右表（table2）完全记录，即是左表（table1）并无匹配对应记录。

在下面的示例中使用以下数据：

```sql
mysql> select A.id,A.name,B.name from A,B where A.id=B.id;
-- +----+-----------+-------------+
-- | id | name       | name             |
-- +----+-----------+-------------+
-- |  1 | Pirate       | Rutabaga      |
-- |  2 | Monkey    | Pirate            |
-- |  3 | Ninja         | Darth Vader |
-- |  4 | Spaghetti  | Ninja             |
-- +----+-----------+-------------+
-- 4 rows in set (0.00 sec)
```

### Inner Join

内连接，也叫等值连接，inner join产生同时符合A和B的一组数据。

```sql
mysql> select * from A inner join B on A.name = B.name;
-- +----+--------+----+--------+
-- | id | name   | id | name   |
-- +----+--------+----+--------+
-- |  1 | Pirate |  2 | Pirate |
-- |  3 | Ninja  |  4 | Ninja  |
-- +----+--------+----+--------+
```

![](join_1.png)

### Left Join

```sql
mysql> select * from A left join B on A.name = B.name;
-- 或者：select * from A left outer join B on A.name = B.name;

-- +----+-----------+------+--------+
-- | id | name      | id   | name   |
-- +----+-----------+------+--------+
-- |  1 | Pirate    |    2 | Pirate |
-- |  2 | Monkey    | NULL | NULL   |
-- |  3 | Ninja     |    4 | Ninja  |
-- |  4 | Spaghetti | NULL | NULL   |
-- +----+-----------+------+--------+
-- 4 rows in set (0.00 sec)
```

![](join_2.png)

`left join`，（或`left outer join`:在Mysql中两者等价，推荐使用`left join`）左连接从左表(A)产生一套完整的记录，与匹配的记录(右表(B))。如果没有匹配，右侧将包含null。

如果想只从左表(A)中产生一套记录，但不包含右表(B)的记录，可以通过设置where语句来执行，如下：

```sql
mysql> select * from A left join B on A.name=B.name where A.id is null or B.id is null;
-- +----+-----------+------+------+
-- | id | name      | id   | name |
-- +----+-----------+------+------+
-- |  2 | Monkey    | NULL | NULL |
-- |  4 | Spaghetti | NULL | NULL |
-- +----+-----------+------+------+
-- 2 rows in set (0.00 sec)
```

![](join_3.png)

根据上面的例子可以求差集，如下：

```sql
SELECT * FROM A LEFT JOIN B ON A.name = B.name
WHERE B.id IS NULL
union
SELECT * FROM A right JOIN B ON A.name = B.name
WHERE A.id IS NULL;

-- +------+-----------+------+-------------+
-- | id   | name      | id   | name        |
-- +------+-----------+------+-------------+
-- |    2 | Monkey    | NULL | NULL        |
-- |    4 | Spaghetti | NULL | NULL        |
-- | NULL | NULL      |    1 | Rutabaga    |
-- | NULL | NULL      |    3 | Darth Vader |
-- +------+-----------+------+-------------+
```

>union ：用于合并多个 select 语句的结果集，并去掉重复的值。
>union all ：作用和 union 类似，但不会去掉重复的值。

![](join_4.png)

### Cross join

交叉连接，得到的结果是两个表的乘积，即笛卡尔积。

实际上，在 MySQL 中（**仅限于 MySQL**） `CROSS JOIN` 与 `INNER JOIN` 的表现是一样的，在不指定 ON 条件得到的结果都是笛卡尔积，反之取得两个表完全匹配的结果。

`INNER JOIN` 与 `CROSS JOIN` 可以省略 `INNER` 或 `CROSS` 关键字，因此下面的 SQL 效果是一样的：

```sql
... FROM table1 INNER JOIN table2
... FROM table1 CROSS JOIN table2
... FROM table1 JOIN table2
```
