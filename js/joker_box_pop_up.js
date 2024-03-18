/**
 * JokerBox 弹窗组件，这个组件可以实现自动的弹窗效果
 */
class JokerBox_popUp {

    /**
     * 将弹窗功能装载到一个元素上，这将会把弹窗组件的声明周期与元素的生命周期绑定在一起
     *
     * Load the pop-up function onto an element, which will bind the declaration cycle of the pop-up component to the lifecycle of the element
     * @param dom {HTMLElement} 需要承载弹窗的元素
     *
     * Elements that need to carry pop-ups
     *
     * @param cssFormatter {string} 在弹窗中显示内容时要使用的预制格式，我们允许并支持您使用自己的格式做为弹窗中的展示，请注意，这将会让您的元素被 jokerBox 管理！
     * We allow and support you to use your own pre made format for displaying content in pop ups. Please note that this will allow your elements to be managed by jokerBox!
     *
     * Elements that need to carry pop-ups
     * @param color {{color: string, background: string}} 分别是背景颜色和字体颜色
     *
     *
     * They are background color and font color, respectively
     * @param closeClickAnimation 关闭按钮被点击之后的关闭动画效果 在这里使用的是内置的动画，如果您有自己的动画，可以直接在这里传递动画的名字！
     *
     * The close animation effect after the close button is clicked here uses the built-in animation. If you have your own animation, you can directly pass the name of the animation here!
     */
    constructor(dom,
                color = {},
                closeClickAnimation = 'jokerBox_pop_up_show_display_life_close',
                cssFormatter = undefined) {

        console.info(`jokerBox_v${JokerBox_popUp.getVersion()} -> popUp set ok!!`)

        // 判断背景颜色是否为 空
        if (color['background'] === undefined) {
            color['background'] = '#ccf8bf';
        }

        // 判断字体颜色是否为空
        if (color['color'] === undefined) {
            color['color'] = JokerBoxUtils.invertColor(color['background']);
        }

        let div1, div2, div3;

        if (cssFormatter !== undefined) {
            div1 = document.querySelector(cssFormatter);
            const s1 = cssFormatter + ' > .pop_up_content_text';
            const s2 = cssFormatter + ' > .pop_up_content_close';
            div2 = document.querySelector(s1);
            div3 = document.querySelector(s2);
            if (!(div1 && div2 && div3)) {
                console.error("jokerBox_popUp: subHtml is undefined!!\n" +
                    "You need to ensure that the following two class name elements are included in the format you specify\n" +
                    "\n" +
                    "1. " + s1 + ": Text content display element（There can only be one）\n" +
                    "\n" +
                    "2. " + s2 + ": Close button display element（There can only be one）", {
                    "your pop_up-content_text": div2,
                    "your pop_up-content_close": div3
                });
                return;
            }
        } else {
            div1 = document.createElement("div");
            div2 = document.createElement("div");
            div3 = document.createElement("a");
            div1.classList.add('jokerBox_pop_up_show_div')
            div2.classList.add('pop_up_content_text');
            div3.classList.add('pop_up_content_close');

            div1.appendChild(div3);
            div1.appendChild(div2);
            dom.appendChild(div1);
        }

        div2.innerText = 'welcome to use jokerBox!!!';
        div3.innerText = 'x'
        div3.title = '关闭弹窗'
        div3.href = '#'
        div3.onclick = () => {
            div1.style.animation = closeClickAnimation + ' 1s forwards';
        }


        this.dom = div1;
        this.textDom = div2;

        this.dom.style.background = color['background'];
        this.dom.style.transform = 'scale(0)';
        this.dom.style.height = '0';
        for (let childNode of this.dom.childNodes) {
            if (childNode.style === undefined) {
                continue;
            }
            childNode.style.color = color['color'];
        }

        const invertColor1 = JokerBoxUtils.invertColor(color['color']);
        div3.onmouseover = function () {
            this.style.color = invertColor1;
            this.style.transform = 'scale(150%)';
            this.style.textShadow = '20% 20% 20% 20% #fff';
        }
        div3.onmouseout = function () {
            this.style.color = color['color'];
            this.style.transform = 'scale(100%)';
        }

        this.dom.onanimationend = function () {
            this.style.animation = 'none';
        }
    }

    /**
     * 将弹窗功能装载到一个元素上，这将会把弹窗组件的声明周期与元素的生命周期绑定在一起
     *
     * Load the pop-up function onto an element, which will bind the declaration cycle of the pop-up component to the lifecycle of the element
     * @param dom {HTMLElement} 需要承载弹窗的元素
     *
     *
     * @param cssFormatter {string} 在弹窗中显示内容时要使用的预制格式，我们允许并支持您使用自己的格式做为弹窗中的展示，请注意，这将会让您的元素被 jokerBox 管理！
     * We allow and support you to use your own pre made format for displaying content in pop ups. Please note that this will allow your elements to be managed by jokerBox!
     *
     * Elements that need to carry pop-ups
     * @param color {{color: string, background: string}} 分别是背景颜色和字体颜色
     *
     *
     * They are background color and font color, respectively
     * @param closeClickAnimation 关闭按钮被点击之后的关闭动画效果 在这里使用的是内置的动画，如果您有自己的动画，可以直接在这里传递动画的名字！
     *
     * The close animation effect after the close button is clicked here uses the built-in animation. If you have your own animation, you can directly pass the name of the animation here!
     */
    static createByHtml(dom, cssFormatter,
                        color = {},
                        closeClickAnimation = 'jokerBox_pop_up_show_display_life_close') {
        return new JokerBox_popUp(dom, color, closeClickAnimation, cssFormatter);
    }

    /**
     * 将弹窗功能装载到一个元素上，这将会把弹窗组件的声明周期与元素的生命周期绑定在一起
     *
     * Load the pop-up function onto an element, which will bind the declaration cycle of the pop-up component to the lifecycle of the element
     * @param dom {HTMLElement} 需要承载弹窗的元素
     *
     * Elements that need to carry pop-ups
     * @param color {{color: string, background: string}} 分别是背景颜色和字体颜色
     *
     * They are background color and font color, respectively
     * @param closeClickAnimation 关闭按钮被点击之后的关闭动画效果 在这里使用的是内置的动画，如果您有自己的动画，可以直接在这里传递动画的名字！
     *
     * The close animation effect after the close button is clicked here uses the built-in animation. If you have your own animation, you can directly pass the name of the animation here!
     */
    static create(dom,
                  color = {},
                  closeClickAnimation = 'jokerBox_pop_up_show_display_life_close') {
        return this.createByHtml(dom, undefined, color, closeClickAnimation)
    }

    static getVersion() {
        return '1.0.0';
    }

    /**
     * 弹窗显示框
     * @param msg {string} 需要在弹窗中显示的内容
     * @param timeMs {number} 弹窗动画+显示的总时间 毫秒数值
     */
    show(msg, timeMs = 10000) {
        this.textDom.innerText = msg;
        this.dom.style.animation = `jokerBox_pop_up_show_display_life ${timeMs}ms forwards`;
    }
}

/**
 * JokerBoxUtils 小丑盒 弹窗工具包
 * @class JokerBoxUtils
 * @classdesc JokerBoxUtils
 */
class JokerBoxUtils {

    /**
     * 计算一个颜色数值的反色
     * @param color 需要被计算的颜色数值
     * @return {string} 计算结果 反色的颜色数值 16 进制
     */
    static invertColor(color) {
        // 将颜色值转换为 RGB 格式
        const r = parseInt(color.substring(1, 3), 16);
        const g = parseInt(color.substring(3, 5), 16);
        const b = parseInt(color.substring(5, 7), 16);

        // 计算反色值
        const invertedR = 255 - r;
        const invertedG = 255 - g;
        const invertedB = 255 - b;

        // 将反色值转换为十六进制格式，并返回结果
        return '#' + invertedR.toString(16).padStart(2, '0') + invertedG.toString(16).padStart(2, '0') + invertedB.toString(16).padStart(2, '0');
    }

}