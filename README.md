# ![image](https://github.com/BeardedManZhao/JokerBox-popUp/assets/113756063/3d7a44a8-4bfd-489e-b9d0-c1acdb1ac0cf) JokerBox-popUp

小丑盒 弹窗 JS 工具包，此工具是一个小巧的插件包，能够实现在前端页面中的弹窗展示。Joker Box Pop up JS Toolkit, this tool is
a compact plugin package that can achieve pop-up display on front-end pages.

允许您使用自己的 HTML 标签做为弹窗格式，也允许您直接不指定任何 HTML 标签，自动使用内置的格式即可!

## 使用示例

此工具非常小巧，您只需要直接将`joker_box_pop_up.js` 以及 `joker_box_pop_up.css` 引入到您的页面中即可，下面是一个示例！

### 简单使用示例

只需要选一个标签，并将此标签做为弹窗的载体就可以构建出属于你的弹窗啦！

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pop_up</title>
</head>
<body id="b">
<p>这里是原本的网页内容</p>
</body>

<!-- 在下面直接进行引用即可！ -->
<link href="css/joker_box_pop_up.css" rel="stylesheet">
<script src="./js/joker_box_pop_up.js"></script>
<script>
    window.onload = () => {
        // 创建弹窗 传递一个元素进去
        const pop_up = JokerBox_popUp.create(document.getElementById("b"));
        // 显示弹窗 在这里代表显示 10000 毫秒
        pop_up.show("这里是弹窗内容", 10000)
    }
</script>
</html>
```

### 设置样式的使用示例

在这里我们展示的就是直接在构造函数中设置样式的一种操作，当然您也可以直接使用 CSS 选择器直接修改样式！

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pop_up</title>
</head>
<body id="b">
<p>这里是原本的网页内容</p>
</body>

<!-- 在下面直接进行引用即可！ -->
<link href="css/joker_box_pop_up.css" rel="stylesheet">
<script src="./js/joker_box_pop_up.js"></script>
<script>
    window.onload = () => {
        // 创建弹窗 传递一个元素进去
        const pop_up = JokerBox_popUp.create(
                document.getElementById("b"),
                // 在构造函数的第二个参数可以传递一些样式 TODO 当然 您也可以直接使用 CSS 选择器直接修改样式
                {
                    // 背景样式
                    background: "url('https://www.lingyuzhao.top/image/graphic-loading1.jpg')",
                    // 字体颜色样式
                    color: '#fff'
                }
        );
        // 显示弹窗 在这里代表显示 10000 毫秒
        pop_up.show("这里是弹窗内容", 10000)
    }
</script>
</html>
```

### 设置格式的使用示例

您可以直接通过 `JokerBox_popUp.createByHtml` 创建出来一个以您写好的HTML元素做为格式的弹窗对象，这有助于您直接使用您的预制格式，增加灵活性，本示例将为您展示如何使用您自己的自定义
HTML 格式来进行展示！

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pop_up</title>
</head>
<body id="b">
<p>这里是原本的网页内容</p>

<!-- 创建一个自己的自定义样式的元素 在这里我们准备了一个HTML元素 TODO 需要做为我们的预制格式 -->
<div class="my_pop">
    <!-- 如果设置类名为 pop_up_content_text 代表这个元素将做为一个文本展示元素 -->
    <h1 class="pop_up_content_text" style="border: blue solid 1px"></h1>
    <hr>
    <!-- 如果设置类名为 pop_up_content_close 代表这个元素将做为一个关闭按钮元素 -->
    <h3 class="pop_up_content_close" style="border: blueviolet solid 1px"></h3>
</div>

</body>

<!-- 在下面直接进行引用即可！ -->
<link href="css/joker_box_pop_up.css" rel="stylesheet">
<script src="./js/joker_box_pop_up.js"></script>
<script>

    // 创建弹窗 使用静态函数 createByHtml 可以传递一个自定义格式 HTML 元素进去
    const pop_up = JokerBox_popUp.createByHtml(
            // 第一个元素还是用来承载弹窗的元素
            document.getElementById("b"),
            // TODO 第二个元素就是我们准备的自定义格式的 HTML 元素的 CSS 路径！
            ".my_pop",
            // 在构造函数的第二个参数可以传递一些样式 TODO 当然 您也可以直接使用 CSS 选择器直接修改样式
            {
                // 背景样式
                background: "url('https://www.lingyuzhao.top/image/graphic-loading1.jpg')",
                // 字体颜色样式
                color: '#fff'
            }
    );
    // 显示弹窗 在这里代表显示 10000 毫秒
    pop_up.show("这里是弹窗内容", 10000)
</script>
</html>
```

### 测试界面

您可以访问 [小丑盒弹窗 测试工具](https://www.lingyuzhao.top/js/lib/joker_box_pop_up/Test.html)
来进行在线测试！这是个简单的测试界面，您可以在此处进行测试！