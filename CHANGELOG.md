# 更新日志

## [7.1.2.6] - 2024-04-25

### 新增

- 移除直播间马赛克

### 修复

- 粉丝勋章名单表格相关bug ([8671acf](https://github.com/andywang425/BLTH/commit/8671acf334be25fa89371b091369c960099c9d1b))

## [7.1.2.5] - 2024-01-17

### 调整

- 添加新的大乱斗元素

## [7.1.2.4] - 2024-01-01

### 新增

- 显示高能用户数量

### 调整

- 调整每天任务重新执行时间为0点01分

## [7.1.2.3] - 2023-11-24

### 新增

-   新增移除相同弹幕连续提示模块

## [7.1.2.2] - 2023-10-18

### 新增

-   新增移除连麦状态提示模块

### 删除

-   移除点赞模块

### 调整

-   弹幕任务功能的勋章过滤调整为大于20级，持续点亮20级勋章

## [7.1.2-001] - 2023-10-7

### 新增

-   新增隐身入场模块

### 删除

-   删去APP用户任务模块

### 调整

-   重新使用来自cdn的ajax-hook
-   回调移除直播间幻星派对标志模块

## [7.1.2] - 2023-9-17

### 新增

-   模块运行frame新增选项top

### 修复

-   修复部分模块在特殊直播间不运行的Bug
-   修复领取大会员权益模块在领取前一天会多次运行的Bug
-   修复体验优化和移除元素板块不显示标题的Bug

### 调整

-   直播任务板块UI微调
-   粉丝勋章获取逻辑调整，现在可以获取完整的粉丝勋章列表（但可能会耗费很长时间）
-   粉丝勋章相关任务调整，将执行任务的粉丝勋章数量上调为199

## [7.1.1] - 2023-9-5

### 新增

-   屏蔽挂机检测模块
-   更多模块运行时机
-   支持指定模块运行的frame，以及是否在默认模块运行完后运行

### 调整

-   部分模块微调：运行时机，运行frame，是否在默认模块运行完后运行
-   对体验优化板块中的所有模块进行了优化
-   由于ajax-hook存在一个对脚本影响较大的bug，暂时从cdn改为本地修改后的

### 修复

-   继续尝试修复部分情况下脚本被注入得太早导致完全失效的Bug

## [7.1.0] - 2023-8-30

### 新增

-   移除元素板块，内含多个移除页面元素的功能
-   模块运行时机概念，解决部分模块运行地太早导致的一些问题

### 调整

-   优化拦截日志数据上报和禁用P2P功能
-   将`@include`改为`@match`

### 修复

-   修复部分情况下脚本被注入得太早导致完全失效的Bug

## [7.0.9] - 2023-8-25

### 调整

-   调整了Vue App注入时机和相关逻辑

### 修复

-   适配B站更新，修复点赞功能

## [7.0.8] - 2023-8-19

### 新增

-   拦截日志数据上报功能
-   移除大乱斗元素功能
-   移除直播间水印功能

## [7.0.7] - 2023-8-11

### 新增

-   领取年度大会员权益功能

## [7.0.6] - 2023-8-6

### 新增

-   点赞直播间功能新选项：包含等级≥20的粉丝勋章

## [7.0.5] - 2023-8-5

### 新增

-   禁用P2P。
-   新的工作流，自动编译master分支的脚本。

### 调整

-   移除了自动切换画质的一秒延时。

## [7.0.4] - 2023-8-4

### 新增

-   体验优化板块，自动切换画质功能。
-   `Main BLTH`概念和模块`runMultiple`属性

## [7.0.3] - 2023-7-31

### 调整

-   粉丝勋章相关任务不再过滤账号已注销用户。
-   脚本运行时机（`@run-at`）延后至`document-end`。

## [7.0.2] - 2023-7-29

### 新增

-   粉丝勋章相关任务现在可以通过黑名单/白名单的方式精准指定要执行任务的粉丝勋章。

### 删除

-   暂时禁用了APP用户任务。

## [7.0.1] - 2023-7-27

### 修复

-   解决打开多个直播间页面时脚本会重复运行的问题

## [7.0.0] - 2023-7-26

**重大变化**

新的开始。由于脚本名称发生了变化，用户脚本管理器不会用新脚本去覆盖旧脚本。老用户请不要同时运行新脚本和旧脚本。

### 新增

-   每日任务
    -   主站任务
        -   每日登录
        -   每日观看视频
        -   每日投币
        -   每日分享视频
    -   直播任务
        -   直播签到
        -   给主播点赞
        -   发送弹幕
        -   观看直播
        -   APP用户任务
    -   其它任务
        -   应援团签到
        -   银瓜子换硬币
        -   硬币换银瓜子
