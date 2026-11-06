---
title: AtomicInteger
date: 2020-01-22
draft: false
categories: java
---

## AtomicInteger 

`AtomicInteger` 是 Java 中常见的原子类，每种基础类型都对应 `Atomic***`。`AtomicInteger` 中最重要的就属于原子更新操作，这里我们来分析下 `getAndAdd` 的实现。

```java
    private static final Unsafe unsafe = Unsafe.getUnsafe();
    private static final long valueOffset;

    static {
        try {
            //获取 value 的偏移量
            valueOffset = unsafe.objectFieldOffset
                (AtomicInteger.class.getDeclaredField("value"));
        } catch (Exception ex) { throw new Error(ex); }
    }

    private volatile int value;

    public final int getAndAdd(int delta) {
        //调用 unsafe.getAndAddInt
        return unsafe.getAndAddInt(this, valueOffset, delta);
    }
```

`getAndAdd` 中直接调用 `unsafe.getAndAddInt`，原子更新的逻辑都在 `UnSafe` 类中：

```java
  public final int getAndAddInt(Object var1, long var2, int var4) {
    int var5;
    //循环 CAS
    do {
      //获取 volatile 字段值
      var5 = this.getIntVolatile(var1, var2);
    } while(!this.compareAndSwapInt(var1, var2, var5, var5 + var4));

    return var5;
  }
```

`getAndAdd` 就是通过循环CAS，来执行原子更新的逻辑。

## ABA 问题

CAS 并不是万能的，CAS 更新有 ABA 问题。即 T1 读取内存变量为 `A` ,T2 修改内存变量为 `B` ,T2 修改内存变量为 `A` ,这时 T1 再 CAS 操作 `A` 时是可行的。但实际上在 T1 第二次操作 `A` 时，已经被其他线程修改过了。举一个现实情况下的例子：

小明账户上有100元。现在小明取钱，小强汇钱，诈骗分子盗刷三个动作同时进行。
1. 小明取50元。
2. 诈骗分子盗刷50元。
3. 小强给小明汇款50元。

此时，银行交易系统出问题，每笔交易无法通过短信告知小明。ABA问题就是：

1. 小明验证账户上有100元后，取出50元。—— 账上有50元。
2. 小强不会验证小明账户的余额，直接汇款50元。—— 账上有100元。
3. 诈骗分子验证账户有100元后，取出50元。—— 账上有50元。

小强没有告诉小明自己汇钱，小明也没收到短信，那么小明就一直以为只有自己取款操作，最后损失了50元。

## AtomicStampedReference

对于 ABA 问题，比较有效的方案是引入版本号，内存中的值每发生一次变化，版本号都 `+1`；在进行CAS操作时，不仅比较内存中的值，也会比较版本号，只有当二者都没有变化时，CAS才能执行成功。 `AtomicStampedReference` 便是使用版本号来解决ABA问题的。类似的还有 `AtomicMarkableReference` ， `AtomicStampedReference` 是使用 pair 的 `int stamp` 作为计数器使用， `AtomicMarkableReference` 的 pair 使用的是 `boolean mark`。
