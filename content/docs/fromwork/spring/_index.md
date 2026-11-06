---
title: Spring 基本
date: 2019-08-21T11:00:41+08:00
draft: false
categories: spring
---

# Spring

Spring Framework 是一个开源的Java／Java EE全功能栈（full-stack）的应用程序框架，其提供了一个简易的开发方式，这种开发方式，将避免那些可能致使底层代码变得繁杂混乱的大量的属性文件和帮助类。

## Spring中包含的关键特性

  - 强大的基于JavaBeans的采用 **控制反转** （Inversion of Control，IoC）原则的配置管理，使得应用程序的组建更加快捷简易。
  - 一个可用于 Java EE 等运行环境的核心 **Bean 工厂**。
  - 数据库事务的一般化抽象层，允许声明式（Declarative）事务管理器，简化事务的划分使之与底层无关。
  - 内建的针对 JTA 和单个 JDBC 数据源的一般化策略，使 Spring 的事务支持不要求Java EE环境，这与一般的JTA或者EJB CMT相反。
  - JDBC 抽象层提供了有针对性的异常等级（不再从SQL异常中提取原始代码），简化了错误处理，大大减少了程序员的编码量。再次利用JDBC时，你无需再写出另一个'终止'（finally）模块。并且面向JDBC的异常与Spring通用数据访问对象（Data Access Object）异常等级相一致。
  - 以资源容器，DAO实现和事务策略等形式与 Hibernate，JDO 和 MyBatis、SQL Maps 集成。利用众多的翻转控制方便特性来全面支持，解决了许多典型的 Hibernate 集成问题。所有这些全部遵从 Spring 通用事务处理和通用数据访问对象异常等级规范。
  - 灵活的基于核心 Spring 功能的 MVC 网页应用程序框架。开发者通过策略接口将拥有对该框架的高度控制，因而该框架将适应于多种呈现（View）技术，例如 JSP、FreeMarker、Velocity、Thymeleaf 等。值得注意的是，Spring 中间层可以轻易地结合于任何基于 MVC 框架的网页层，例如 Struts、WebWork 或 Tapestry。
  - 提供诸如事务管理等服务的AOP框架。
