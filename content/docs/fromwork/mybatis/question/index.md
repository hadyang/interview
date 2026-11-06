---
title: 面试题
date: 2019-08-21T11:00:41+08:00
draft: false
categories: mybatis
---

# 面试题

## `#{}`和`${}`的区别是什么？


`#{}`是预编译处理，`${}`是字符串替换。

Mybatis 在处理 `#{}` 时，会将sql中的 `#{}` 替换为 `?` 号，调用 `PreparedStatement` 的 `set` 方法来赋值；

Mybatis在处理`${}`时，就是把`${}`替换成变量的值。

使用`#{}`可以有效的防止SQL注入，提高系统安全性。


## 通常一个Xml映射文件，都会写一个Dao接口与之对应，请问，这个Dao接口的工作原理是什么？Dao接口里的方法，参数不同时，方法能重载吗？


Dao 接口，就是人们常说的 Mapper 接口，接口的全限名，就是映射文件中的 `namespace` 的值，接口的方法名，就是映射文件中 `MappedStatement` 的 id 值，接口方法内的参数，就是传递给sql的参数。

Mapper 接口是没有实现类的，当调用接口方法时，`接口全限名+方法名` 拼接字符串作为 key 值，可唯一定位一个MappedStatement。

在Mybatis中，每一个`<select>、<insert>、<update>、<delete>` 标签，都会被解析为一个 `MappedStatement` 对象。

Dao接口里的方法，是 **不能重载** 的，因为是全限名+方法名的保存和寻找策略。

Dao接口的工作原理是 JDK 动态代理， Mybatis 运行时会使用 JDK 动态代理为 Dao 接口生成代理 proxy 对象，代理对象 proxy 会拦截接口方法，转而执行 `MappedStatement` 所代表的sql，然后将sql执行结果返回。


## 参考连接

[Mybatis 的常见面试题](https://blog.csdn.net/eaphyy/article/details/71190441)
