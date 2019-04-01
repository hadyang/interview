# 分布式锁

## 实现基于数据库的乐观锁

提交数据更新之前，每个事务会先检查在该事务读取数据后，有没有其他事务又修改了该数据。如果其他事务有更新的话，正在提交的事务会进行回滚。

```java
Connection conn = DriverManager.getConnection(url, user, password);
conn.setAutoCommit(false);
Statement stmt = conn.createStatement();
// step 1
int oldVersion = getOldVersion(stmt);

// step 2
// 用这个数据库连接做其他的逻辑

// step 3 可用预编译语句
int i = stmt.executeUpdate(
        "update optimistic_lock set version = " + (oldVersion + 1) + " where version = " + oldVersion);

// step 4
if (i > 0) {
    conn.commit(); // 更新成功表明数据没有被修改，提交事务。
} else {
    conn.rollback(); // 更新失败，数据被修改，回滚。
}
```

乐观锁的缺点：

  - 会带来大数量的无效更新请求、事务回滚，给DB造成不必要的额外压力。
  - 无法保证先到先得，后面的请求可能由于并发压力小了反而有可能处理成功。

## 基于 Redis 的分布式锁

[Redis](../../basic/database/7-redis.md)
