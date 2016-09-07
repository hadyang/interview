# SQL语句

## CRUD

### CREATE TABLE

```sql
CREATE TABLE `user` (
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR (20),
  PRIMARY KEY (`id`)
);
```
>  VARCHAR记得指定长度。

### UPDATE

```sql
UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
```

### INSERT

```sql
INSERT INTO 表名称 VALUES (值1, 值2,....)

INSERT INTO table_name (列1, 列2,...) VALUES (值1, 值2,....)
```

### DELETE

```sql
DELETE FROM 表名称 WHERE 列名称 = 值
```

## 修改表结构

```sql
ALTER TABLE table_name add column_name datatype

ALTER TABLE table_name drop COLUMN column_name

ALTER TABLE table_name modify COLUMN column_name datatype
```

## 权限分配

```sql
grant select,insert on userdb.userinfo to'zhangsan'@'localhost'
```

## 模糊查询

**%**：表示任意0个或多个字符。可匹配任意类型和长度的字符，有些情况下若是中文，请使用两个百分号（%%）表示。

```sql
select * from test where text like '%1%';
```

**_** ： 表示任意单个字符。匹配单个任意字符，它常用来限制表达式的字符长度语句。

```sql
--倒数第三个字符为 1 ，且最小长度为 5
select * from test where text like '__%1__';
```
