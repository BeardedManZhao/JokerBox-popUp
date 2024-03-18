# JokerBox-popUp

小丑盒 弹窗 JS 工具包，此工具是一个小巧的插件包，能够实现在前端页面中的弹窗展示。Joker Box Pop up JS Toolkit, this tool is
a compact plugin package that can achieve pop-up display on front-end pages.

## 使用示例

此工具非常小巧，您只需要直接将`joker_box_pop_up.js` 以及 `joker_box_pop_up.css` 引入到您的页面中即可，下面是一个示例！

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
        const pop_up = new jokerBox_popUp(document.getElementById("b"));
        // 显示弹窗 在这里代表显示 10000 毫秒
        pop_up.show("这里是弹窗内容", 10000)
    }
</script>
</html>
```