# Threadlocal原理

ThreadLocal 为解决多线程程序的并发问题提供了一种新的思路。使用这个工具类可以很简洁地编写出优美的多线程程序。当使用 ThreadLocal 维护变量时，ThreadLocal 为每个使用该变量的线程提供独立的变量副本，所以每一个线程都可以独立地改变自己的副本，而不会影响其它线程所对应的副本。

每个线程中都保有一个`ThreadLocalMap`的成员变量，`ThreadLocalMap `内部采用`WeakReference`数组保存，数组的key即为`ThreadLocal `内部的Hash值。
