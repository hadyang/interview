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
ALTER TABLE table_name ADD column_name datatype

ALTER TABLE table_name DROP COLUMN column_name

ALTER TABLE table_name ALTER COLUMN column_name datatype
```

## 权限分配

```sql
grant select,insert on userdb.userinfo to'zhangsan'@'localhost'
```
