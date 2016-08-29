# Activity && Service生命周期

##Activity生命周期

![](activity_life.png)

  - onRestart：当当前Activity从不可见重新变为可见时，该方法会被调用。(比如：Home键)
  - onStart：这时Activity以及可见了，但是还没有出现在前台，**不能与用户交互**。
  - onResume：这时Activity已经可见，并且 **出现在前台** 开始活动。**初始化在onPause中释放的系统资源。**
  - onPause：**表示Activity正在停止**，此时可以做一些 **存储数据**、停止动画等工作，但不能时间太长。进入Paused状态，失去与用户交互的能力，所有状态信息、成员变量还保持着。**释放系统资源(Camera、sensor、receivers)**
  - onStop：**表示Activity即将停止**，可以做一些稍微重量级的回收。进入Stopped状态--不可见，但依然保持了所有状态信息和成员变量。
  - onDestroy：**表示Activity即将被销毁**，我们可以做一些最终的回收工作。进入Killed状态，Activity被回收。

  >在一种特殊情况下：**如果新Activity采用了透明主题**，那么当前Activity **不会回调onStop**。

在整个生命周期来说，onCreate和onDestroy是配对的，分别标示着Activity的创建和销毁，并且只调用一次；onStart和onStop是配对的，对于Activity是否可见来说，随着用户操作或者屏幕的点亮和熄灭，这两个方法可能会调用多次；onResume和onPause是配对的，对于Activity是否在前台来说。

> 旧Activity的onPause先调用，然后调用新的Activity的onResume。

当当前Activity可能被销毁时(eg:屏幕旋转...)，会调用`onSaveInstanceState()`方法保存当前Activity状态。当Activity重建的时候系统会将`onSaveInstanceState()`保存的数据传递给`onRestoreInstanceState()`和`onCreate`方法。**当Activity从可见变为不可见时** 也会调用`onSaveInstanceState()`，但是当Activity重新变为可见时 **不会** 调用`onRestoreInstanceState()`。**保存持久化数据的操作应该放在onPause()中**. `onSaveInstanceState()`方法只适合保存瞬态数据, 比如UI控件的状态, 成员变量的值等.

如果当系统配置改变时，不希望重建Activity，可以给Activity指定`configChanges`属性。当被配置的系统配置发生改变时会调用`onConfigurationChanged()`方法，而不会调用`onSaveInstanceState()`。


## Service生命周期

- Start Service：通过`context.startService()`启动，这种service可以无限制的运行，除非调用`stopSelf()`或者其他组件调用`context.stopService()`。

- Bind Service：通过`context.bindService()`启动，客户可以通过IBinder接口和service通信，客户可以通过`context.unBindService()`取消绑定。一个service可以和多个客户绑定，当所有客户都解除绑定后，service将终止运行。

 >一个通过`context.startService()`方法启动的service，其他组件也可以通过`context.bindService()`与它绑定，在这种情况下，不能使用`stopSelf()`或者`context.stopService()`停止service，只能当所有客户解除绑定在调用`context.stopService()`才会终止。

![](service_life.png)
