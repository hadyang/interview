# 面试题

### 如何用数组实现队列？

用数组实现队列时要注意 **溢出** 现象，这是我们可以采用循环数组的方式来解决，即将数组收尾相接。使用front指针指向队列首位，tail指针指向队列末位。

***

### 内部类访问局部变量的时候，为什么变量必须加上final修饰？

>Java8不需要加final

在java中，类是封装的，内部类也不例外。我们知道，非静态内部类能够访问外部类成员是因为它持有外部类对象的引用 Outer.this， 就像子类对像能够访问父类成员是持有父类对象引用super一样。局部内部类也和一般内部类一样，只持有了Outer.this，能够访问外部类成员，但是它又是如何访问到局部变量的呢？

**实际上java是将局部变量作为参数传给了局部内部类的构造函数，而将其作为内部类的成员属性封装在了类中。我们看到的内部类访问局部变量实际上只是访问了自己的成员属性而已，这和类的封装性是一致的**。

那么问题又来了，我们写代码的目的是在内部类中直接控制局部变量和引用，但是java这么整我们就不高兴了，我在内部类中整半天想着是在操作外部变量，结果你给整个副本给我，我搞半天丫是整我自己的东西啊？要是java不这么整吧，由破坏了封装性--------你个局部内部类牛啊，啥都没有还能看局部变量呢。这不是java风格，肯定不能这么干。这咋整呢？

想想，类的封装性咱们一定是要遵守的，不能破坏大局啊。但又 **要保证两个东西是一模一样的，包括对象和普通变量，那就使用final嘛，当传递普通变量的之前我把它变成一个常量给你，当传递引用对象的时候加上final就声明了这个引用就只能指着这一个对象了。这样就保证了内外统一**。

***

### long s = 499999999 * 499999999 在上面的代码中，s的值是多少？

根据代码的计算结果，`s`的值应该是`-1371654655`，**这是由于Java中右侧值的计算默认是`int`**，所以要强转。

***

### NIO相关，Channels、Buffers、Selectors

`NIO(Non-blocking IO)`为所有的原始类型提供(Buffer)缓存支持，字符集编码解码解决方案。 `Channel` ：一个新的原始I/O 抽象。 支持锁和内存映射文件的文件访问接口。提供多路(non-bloking) 非阻塞式的高伸缩性网络I/O 。

| IO     | NIO     |
| :----- | :------ |
|面向流  |  面向缓冲|
|阻塞IO |  非阻塞IO|
|无     |    选择器|

##### 流与缓冲

Java NIO和IO之间第一个最大的区别是，**IO是面向流的，NIO是面向缓冲区的**。 Java IO面向流意味着每次从流中读一个或多个字节，直至读取所有字节，它们没有被缓存在任何地方。此外，它不能前后移动流中的数据。如果需要前后移动从流中读取的数据，需要先将它缓存到一个缓冲区。

Java NIO的缓冲导向方法略有不同。**数据读取到一个它稍后处理的缓冲区，需要时可在缓冲区中前后移动。这就增加了处理过程中的灵活性**。但是，还需要检查是否该缓冲区中包含所有您需要处理的数据。而且，需确保当更多的数据读入缓冲区时，不要覆盖缓冲区里尚未处理的数据。

##### 阻塞与非阻塞IO

Java IO的各种流是阻塞的。这意味着，当一个线程调用`read()` 或 `write()`时，该线程被阻塞，直到有一些数据被读取，或数据完全写入。该线程在此期间不能再干任何事情了。 **Java NIO的非阻塞模式，是线程向某通道发送请求读取数据，仅能得到目前可用的数据，如果目前没有数据可用时，就什么都不会获取，当然它不会保持线程阻塞。所以直至数据变的可以读取之前，该线程可以继续做其他的事情**。 非阻塞写也是如此。所以一个单独的线程现在可以管理多个输入和输出通道。

##### 选择器（Selectors）

Java NIO 的 **选择器允许一个单独的线程来监视多个输入通道**，你可以注册多个通道使用一个选择器，然后使用一个单独的线程来“选择”通道：这些通道里已经有可以处理的输入，或者选择已准备写入的通道。这种选择机制，使得一个单独的线程很容易来管理多个通道。

***

### 反射的用途

Java反射机制可以让我们在编译期(Compile Time)之外的运行期(Runtime)检查类，接口，变量以及方法的信息。反射还可以让我们在运行期实例化对象，调用方法，通过调用`get/set`方法获取变量的值。同时我们也可以通过反射来获取泛型信息，以及注解。还有更高级的应用--动态代理和动态类加载（`ClassLoader.loadclass()`）。

下面列举一些比较重要的方法：

  - getFields：获取所有 `public` 的变量。
  - getDeclaredFields：获取所有包括 `private` , `protected` 权限的变量。
  - setAccessible：设置为 true 可以跳过Java权限检查，从而访问`private`权限的变量。
  - getAnnotations：获取注解，不仅可以用在类上。


获取方法的泛型参数：

```Java
method = Myclass.class.getMethod("setStringList", List.class);

Type[] genericParameterTypes = method.getGenericParameterTypes();

for(Type genericParameterType : genericParameterTypes){
    if(genericParameterType instanceof ParameterizedType){
        ParameterizedType aType = (ParameterizedType) genericParameterType;
        Type[] parameterArgTypes = aType.getActualTypeArguments();
        for(Type parameterArgType : parameterArgTypes){
            Class parameterArgClass = (Class) parameterArgType;
            System.out.println("parameterArgClass = " + parameterArgClass);
        }
    }
}
```

动态代理：

```Java
//Main.java
public static void main(String[] args) {
    HelloWorld helloWorld=new HelloWorldImpl();
    InvocationHandler handler=new HelloWorldHandler(helloWorld);

    //创建动态代理对象
    HelloWorld proxy=(HelloWorld)Proxy.newProxyInstance(
            helloWorld.getClass().getClassLoader(),
            helloWorld.getClass().getInterfaces(),
            handler);
    proxy.sayHelloWorld();
}

//HelloWorldHandler.java
public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
    Object result = null;
    //调用之前
    doBefore();
    //调用原始对象的方法
    result=method.invoke(obj, args);
    //调用之后
    doAfter();
    return result;
}
```

通过反射获取方法注解的参数：

```Java
Class aClass = TheClass.class;
Annotation[] annotations = aClass.getAnnotations();

for(Annotation annotation : annotations){
   if(annotation instanceof MyAnnotation){
       MyAnnotation myAnnotation = (MyAnnotation) annotation;
       System.out.println("name: " + myAnnotation.name());
       System.out.println("value: " + myAnnotation.value());
   }
}
```

***

### Java注解的继承

|      |  有@Inherited    |  没有@Inherited      |
| :------------- | :------------- |:------------- |
|子类的类上能否继承到父类的类上的注解？|	否|	能|
|子类实现了父类上的抽象方法|	否|	否|
|子类继承了父类上的方法|	能	|能|
|子类覆盖了父类上的方法|	否	|否|

通过测试结果来看，`@Inherited` 只是可控制对类名上注解是否可以被继承。不能控制方法上的注解是否可以被继承。

### 非静态内部类能定义静态方法吗？

```Java
public class OuterClass{
    private static float f = 1.0f;

    class InnerClass{
        public static float func(){return f;}
    }
}
```

以上代码会出现编译错误，因为只有静态内部类才能定义静态方法。
