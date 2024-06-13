import{_ as t,o as a,c as d,a5 as e}from"./chunks/framework.DnJ-_PtE.js";const v=JSON.parse('{"title":"概述","description":"","frontmatter":{},"headers":[],"relativePath":"language/index.md","filePath":"language/index.md","lastUpdated":1717744154000}'),r={name:"language/index.md"},n=e('<h1 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h1><p>个人理解：</p><p>计算机组成原理课程中讲到：计算机硬件由运算器、控制器、存储器、输入设备、输出设备组成，或者CPU、显卡、主板、内存条、硬盘、电源组成</p><p>计算机核心是CPU，CPU就是状态机负责执行指令和执行任务</p><p>数字逻辑课程中讲到：状态机就是是逻辑门的复杂组合，不同的CPU状态机的组成不一样，但是CPU厂商间遵循一个“协议”，就是指令集架构(ISA)，这个要去看汇编语言</p><p>汇编语言课程中讲到：汇编代码与状态机能理解的01字节码一一对应，也就是说想要和机器通信交互，理解这台机器对应的汇编代码，就能通过写汇编代码、将汇编代码转化为01字节码、将01字节码传给机器三个步骤与机器交互，只要理解汇编语言是特定机器能理解的字节码（对应于ISA）的文本表示</p><p>高级语言：js 通过 v8引擎转为汇编代码，<strong>汇编器</strong>将汇编代码转化为机器码也就是01码，让CPU计算</p><p>程序本质就是01，if else 只是重复执行的部分进行封装，函数 递归 在此基础上形成了递归 迭代 循环 switch 封装 集成 模块化符合软件高内聚低耦合的设计思想，提高可移植性，扩展性</p><p>其实前端写的一个项目，本质就是一个index.html 一个index.css 一个index.js 无论什么.vue .react .angular .ts最终都会转为js, 然后去除模块化引入，本质就是一个js文件，编译器从上往下执行</p><p>我们写的编程语言：将所有事物抽象建模，用变量、数据类型、函数、类等概念来抽象地描述实体间的关系 举例：浏览器是个事物，将浏览器分为多个部分，窗口window nav location dom , 每个实体都会对外提供接口 举例：地图是个事物，分为数据源 图层 地图控件，每个实体都会对外提供接口</p><h2 id="高级语言之间比较" tabindex="-1">高级语言之间比较 <a class="header-anchor" href="#高级语言之间比较" aria-label="Permalink to &quot;高级语言之间比较&quot;">​</a></h2><p>C++、 Java、JS 区别 ● 从静态类型还是动态类型来看 静态类型：编译时就知道每个变量类型，编程时也要给定类型，如 Java整型 int，浮点型 float。C、C++、Java 。编译后利用已知类型的优势，如 int 类型，占用 4 个字节，编译后的代码就可以用内存地址加偏移量的方法存取变量，地址加偏移量的算法汇编很容易实现。 动态类型：运行时才知道变量类型，编程无需指定，如JS 的 var、PHP 的$。JS、Ruby、Python 。当做字符串通通存下来，之后存取用字符串匹配。</p><p>● 从编译型还是解释型来看 编译型：C、C++要编译器编译成本地可执行程序后才能运行，由开发人员在编写完成后手动实施。用户只用编译好的本地代码，这些本地代码由系统加载器执行，由操作系统的 CPU 直接执行，无需其他额外的虚拟机等。源代码=》抽象语法树=》中间表示=》本地代码 解释性：JS、Python直接将代码交给用户，用户用脚本解释器将脚本文件解释执行。脚本语言，没有编译过程，也不绝对。源代码=》抽象语法树=》解释器解释执行。 JS，随着 Java 虚拟机 JIT 技术的引入，工作方式也发生改变。可以将抽象语法树转成中间表示（字节码），再转成本地代码，如 JavaScriptCore，这样可以大大提高执行效率。也可以从抽象语法树直接转成本地代码，如 V8 Java 语言，分两个阶段。首先像 C++语言一样，经过编译器编译。和 C++的不同，C++编译生成本地代码，Java 编译后，生成字节码，字节码与平台无关。第二阶段，由 Java的运行环境也就是 Java 虚拟机运行字节码，使用解释器执行这些代码。一般情况下，Java虚拟机都引入了 JIT 技术，将字节码转换成本地代码来提高执行效率。 上述情况中，编译器的编译过程没有时间要求，所以编译器可以做大量的代码优化措施。 ● 对于 JS 与 Java Java 将源代码编译成字节码，这个同执行阶段是分开的。从源代码到抽象语法树到字节码这段时间的长短是无所谓的。 JS，在网页和 JavaScript 文件下载后同执行阶段一起在网页的加载和渲染过程中实施的，对于处理时间有严格要求。</p><h2 id="基于对象和面向对象" tabindex="-1">基于对象和面向对象 <a class="header-anchor" href="#基于对象和面向对象" aria-label="Permalink to &quot;基于对象和面向对象&quot;">​</a></h2><table><thead><tr><th>表头 1</th><th>基于对象js</th><th>面向过程</th><th>面向对象</th></tr></thead><tbody><tr><td>特点</td><td>js本身没有提供只能靠语言模拟,弱类型：定义变量时，不需要什么类型，在程序运行过程中会自动判断类型。较为灵活；</td><td>分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候再一个一个的依次调用</td><td>封装性 继承性 多态性</td></tr><tr><td>把事务分解成为一个个对象，然后由对象之间分工与合作</td><td></td><td></td><td></td></tr><tr><td>是否跨平台，与操作系统无关</td><td>是</td><td>易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统 更加灵活、更加易于维护</td><td>性能比面向对象高，适合跟硬件联系很紧密的东西，例如单片机就采用的面向过程编程。</td></tr><tr><td>行 3 列 1</td><td>脚本语言、解释性语言</td><td>性能比面向过程低</td><td>不易维护、不易复用、不易扩展</td></tr><tr><td>行 4 列 1</td><td>运行在客户端浏览器上</td><td>行 4 列 3</td><td>行 4 列 4</td></tr></tbody></table>',15),o=[n];function s(i,p,h,l,c,_){return a(),d("div",null,o)}const C=t(r,[["render",s]]);export{v as __pageData,C as default};
