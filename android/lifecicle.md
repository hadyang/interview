# Activity && Service生命周期

## Activity生命周期

![](images/activity-basic-lifecycle.png)

在上面的图中存在不同状态之间的过渡，但是，这些状态中只有三种可以是静态，也就是说 Activity 只能在三种状态之一下存在很长时间。

  - **继续**：在这种状态下，Activity处于前台，且用户可以与其交互（又称为运行态，在调用 `onResume()` 方法调用后）。

  - **暂停**：在这种状态下，Activity被在前台中处于半透明状态或者未覆盖整个屏幕的另一个Activity—部分阻挡。 暂停的Activity不会接收用户输入并且无法执行任何代码。

  - **停止**：在这种状态下，Activity被完全隐藏并且对用户不可见；它被视为处于后台。 停止时，Activity实例及其诸如成员变量等所有状态信息将保留，但它无法执行任何代码。

其他状态（“创建”和“开始”）是瞬态，系统会通过调用下一个生命周期回调方法从这些状态快速移到下一个状态。 也就是说，在系统调用 `onCreate()` 之后，它会快速调用 `onStart()`，紧接着快速调用 `onResume()`。

### 创建和销毁

#### 创建一个新实例

大多数应用包含若干个不同的Activity，用户可通过这些Activity执行不同的操作。无论Activity是用户单击您的应用图标时创建的主Activity还是您的应用在响应用户操作时开始的其他Activity，系统都会通过调用其 `onCreate()` 方法创建 Activity 的每个新实例。

一旦 `onCreate()` 完成执行操作，系统会相继调用 `onStart()` 和 `onResume()` 方法，您的Activity从不会驻留在“已创建”或“已开始”状态。在技术上，**Activity会在 onStart() 被调用时变得可见，但紧接着是 onResume()，且Activity保持“运行”状态，直到有事情发生使其发生变化**，比如当接听来电时，用户导航至另一个Activity，或设备屏幕关闭。

#### 销毁Activity

当Activity的第一个生命周期回调是 `onCreate()` 时，它最终的回调是 `onDestroy()`。**系统会对您的Activity调用此方法，作为Activity实例完全从系统内存删除的最终信号**。

>在所有情况下，系统在调用 `onPause()` 和 `onStop()` 之后都会调用 `onDestroy()` ，只有一个例外：当您从 `onCreate()` 方法内调用 `finish()` 时。在有些情况下，比如当您的Activity作为临时决策工具运行以启动另一个Activity时，您可从 `onCreate()` 内调用 `finish()` 来销毁Activity。 在这种情况下，系统会立刻调用 `onDestroy()`，而不调用任何其他生命周期方法。

### 暂停和继续

在正常使用应用的过程中，前台 Activity 有时会被其他导致 _Activity 暂停_ 的可视组件阻挡。 例如，**当半透明Activity打开时（比如对话框样式中的Activity），上一个Activity会暂停。只要 Activity 仍然部分可见但目前又未处于焦点之中，它会一直暂停。但是，一旦Activity完全被阻挡并且不可见，它便停止**。

当 Activity 进入暂停状态时，系统会对调用 `onPause()` 方法，通过该方法，您可以停止不应在暂停时继续的进行之中的操作（比如视频）或保留任何应该永久保存的信息，以防用户坚持离开应用。如果用户从暂停状态返回到您的 Activity ，系统会重新开始该Activity并调用 `onResume()` 方法。

#### 暂停Activity

当系统为 Activity 调用 `onPause()` 时，它从技术角度看意味着 Activity 仍然处于部分可见状态，但往往说明用户即将离开Activity并且它很快就要进入“停止”状态。 您通常应使用 `onPause()` 回调：

  - 停止动画或其他可能消耗 CPU 的进行之中的操作。

  - 提交未保存的更改，但仅当用户离开时希望永久性保存此类更改（比如电子邮件草稿）。

  - 释放系统资源，比如广播接收器、传感器手柄（比如 GPS） 或当您的Activity暂停且用户不需要它们时仍然可能影响电池寿命的任何其他资源。

避免在 `onPause()` 期间执行 CPU 密集型工作，比如向数据库写入信息，因为这会拖慢向下一 Activity 过渡的过程（应改为在 `onStop()` 期间执行高负载操作。

#### 继续Activity

当用户从“暂停”状态继续您的Activity时，系统会调用 `onResume()` 方法。

请注意，每当 Activity 进入前台时系统便会调用此方法，包括它初次创建之时。 同样地，应实现 `onResume()` 初始化在 `onPause()` 期间释放的组件并且执行每当 Activity 进入“继续”状态时必须进行的任何其他初始化操作（比如开始动画和初始化只在 Activity 具有用户焦点时使用的组件）。

### 停止并重新开始

几种 Activity 停止和重新开始的关键场景：

  - 用户打开“最近应用”窗口并从您的应用切换到另一个应用。当前位于前台的您的应用中的 Activity 将停止。 如果用户从主屏幕启动器图标或“最近应用”窗口返回到您的应用， Activity 会重新开始。

  - 用户在您的应用中执行开始新 Activity 的操作。当第二个 Activity 创建好后，当前 Activity 便停止。如果用户之后按了返回按钮，第一个 Activity 会重新开始。

  - 用户在其手机上使用您的应用的同时接听来电。

**不同于识别部分 UI 阻挡的暂停状态，停止状态保证 UI 不再可见，且用户的焦点在另外的Activity（或完全独立的应用）中**。

#### 停止Activity

当您的Activity收到 `onStop()` 方法的调用时，它不再可见，并且应释放几乎所有用户不使用时不需要的资源。 一旦您的 Activity 停止，如果需要恢复系统内存，系统可能会销毁该实例。 **在极端情况下，系统可能会仅终止应用进程，而不会调用Activity的最终 `onDestroy()` 回调，因此您使用 `onStop()` 释放可能泄露内存的资源非常重要**。

尽管 `onPause()` 方法在 `onStop()`之前调用，您应使用 `onStop()` 执行更大、占用更多 CPU 的关闭操作，比如向数据库写入信息。

当您的Activity停止时， Activity 对象将驻留在内存中并在 Activity 继续时被再次调用。 您无需重新初始化在任何导致进入“继续”状态的回调方法过程中创建的组件。 系统还会在布局中跟踪每个 View 的当前状态，如果用户在 EditText 小工具中输入文本，该内容会保留，因此您无需保存即可恢复它。

> 即使系统在 Activity 停止时销毁了 Activity ，它仍会保留 Bundle（键值对的二进制大对象）中的 View 对象（比如 EditText 中的文本），并在用户导航回 Activity 的相同实例时恢复它们

#### 开始/重新开始Activity

当您的Activity从停止状态返回前台时，它会接收对 `onRestart()` 的调用。系统还会在每次您的Activity变为可见时调用 `onStart()` 方法（无论是正重新开始还是初次创建）。 但是，只会在Activity从停止状态继续时调用 `onRestart()` 方法，因此您可以使用它执行只有在Activity之前停止但未销毁的情况下可能必须执行的特殊恢复工作。**您应经常使用 onStart() 回调方法作为 onStop() 方法的对应部分，因为系统会在它创建您的Activity以及从停止状态重新开始Activity时调用`onStart()`**。

### 重新创建

在有些情况下，您的 Activity 会因正常应用行为而销毁，比如当用户按 _返回按钮_ 或您的 Activity 通过调用`finish()`示意自己的销毁。 如果 Activity 当前被停止或长期未使用，或者前台Activity需要更多资源以致系统必须关闭后台进程恢复内存，系统也可能会销毁Activity。

当您的Activity因用户按了 _返回_  或Activity自行完成而被销毁时，系统的 Activity 实例概念将永久消失。 但是，如果系统因系统局限性（而非正常应用行为）而销毁Activity，尽管 Activity 实际实例已不在，系统会记住其存在，这样，如果用户导航回实例，系统会使用描述 Activity 被销毁时状态的一组已保存数据创建 Activity 的新实例。 系统用于恢复先前状态的已保存数据被称为“实例状态”，并且是 `Bundle` 对象中存储的键值对集合。

默认情况下，系统会使用 `Bundle` 实例状态保存您的 Activity 布局（比如，输入到 `EditText` 对象中的文本值）中有关每个 View 对象的信息。 这样，如果您的Activity实例被销毁并重新创建，布局状态便恢复为其先前的状态，且您无需代码。 但是，您的Activity可能具有您要恢复的更多状态信息，比如跟踪用户在 Activity 中进度的成员变量。

> 为了 Android 系统恢复Activity中视图的状态，每个视图必须具有 android:id 属性提供的唯一 ID。

要保存有关 Activity 状态的其他数据，您必须替代 `onSaveInstanceState()` 回调方法。当用户要离开 Activity 并在 Activity 意外销毁时向其传递将保存的 Bundle 对象时，系统会调用此方法。 如果系统必须稍后重新创建Activity实例，它会将相同的 Bundle 对象同时传递给 `onRestoreInstanceState()` 和 `onCreate()` 方法。

![](images/basic-lifecycle-savestate.png)

#### 保存Activity状态

当您的Activity开始停止时，系统会调用 `onSaveInstanceState()` 以便您的Activity可以保存带有键值对集合的状态信息。 此方法的默认实现保存有关Activity视图层次的状态信息（只保存部分 View ），例如 EditText 小工具中的文本或ListView 的滚动位置。要保存Activity的更多状态信息，您必须实现 `onSaveInstanceState()` 并将键值对添加至 Bundle 对象。

如果当系统配置改变时，不希望重建Activity，可以给Activity指定`configChanges`属性。当被配置的系统配置发生改变时会调用`onConfigurationChanged()`方法，而不会调用`onSaveInstanceState()`。

> onSaveInstanceState() 的调用时机是不明确的，但是如果调用就一定会在 onStop()之前。

#### 恢复Activity状态

当您的Activity在先前销毁之后重新创建时，您可以从系统向Activity传递的 Bundle 恢复已保存的状态。`onCreate()` 和 `onRestoreInstanceState()` 回调方法均接收包含实例状态信息的相同 Bundle。

因为无论系统正在创建Activity的新实例还是重新创建先前的实例，都会调用 `onCreate()` 方法，因此您必须在尝试读取它之前检查状态 Bundle 是否为 null。 如果为 null，则系统将创建Activity的新实例，而不是恢复已销毁的先前实例。

## Service生命周期

- Start Service：通过`context.startService()`启动，这种service可以无限制的运行，除非调用`stopSelf()`或者其他组件调用`context.stopService()`。

- Bind Service：通过`context.bindService()`启动，客户可以通过IBinder接口和service通信，客户可以通过`context.unBindService()`取消绑定。一个service可以和多个客户绑定，当所有客户都解除绑定后，service将终止运行。

 >一个通过`context.startService()`方法启动的service，其他组件也可以通过`context.bindService()`与它绑定，在这种情况下，不能使用`stopSelf()`或者`context.stopService()`停止service，只能当所有客户解除绑定在调用`context.stopService()`才会终止。

![](images/service_life.png)
