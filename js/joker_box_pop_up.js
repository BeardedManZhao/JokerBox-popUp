/**
 * JokerBox 弹窗组件，这个组件可以实现自动的弹窗效果
 */
class jokerBox_popUp {

    /**
     *
     * @param dom {HTMLElement} 需要承载弹窗的元素
     * @param color {{color: string, background: string}} 分别是背景颜色和字体颜色
     */
    constructor(dom, color = {}) {

        console.info(`jokerBox_v${jokerBox_popUp.getVersion()} -> popUp set ok!!`)

        // 判断背景颜色是否为 空
        if (color['background'] === undefined) {
            color['background'] = '#ccf8bf';
        }

        // 判断字体颜色是否为空
        if (color['color'] === undefined) {
            color['color'] = JokerBoxUtils.invertColor(color['background']);
        }

        let div1 = document.createElement("div");
        div1.id = "jokerBox_pop_up_show_div";

        let div2 = document.createElement("div");
        div2.className = "pop_up_content_text";

        let div3 = document.createElement("a");
        div3.className = "pop_up_content_close";
        div3.innerText = 'x'
        div3.title = '关闭弹窗'
        div3.href = '#'
        div3.onclick = () => {
            div1.style.animation = 'jokerBox_pop_up_show_display_life_close 1s forwards';
        }
        div1.appendChild(div3);
        div1.appendChild(div2);
        dom.appendChild(div1);

        this.dom = div1;
        this.textDom = div2;

        this.dom.style.background = color['background'];
        for (let childNode of this.dom.childNodes) {
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
    }

    static getVersion() {
        return '1.0.0';
    }

    /**
     * 弹窗显示框
     * @param msg {string} 需要在弹窗中显示的内容
     * @param timeMs {number} 弹窗动画+显示的总时间 毫秒数值
     */
    show(msg, timeMs = 2000) {
        this.dom.style.animation = `jokerBox_pop_up_show_display_life ${timeMs}ms forwards`;
        this.textDom.innerText = msg;
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
        const r = parseInt(color.substring(1, 2), 16);
        const g = parseInt(color.substring(3, 2), 16);
        const b = parseInt(color.substring(5, 2), 16);

        // 计算反色值
        const invertedR = 255 - r;
        const invertedG = 255 - g;
        const invertedB = 255 - b;

        // 将反色值转换为十六进制格式，并返回结果
        return '#' + invertedR.toString(16).padStart(2, '0') + invertedG.toString(16).padStart(2, '0') + invertedB.toString(16).padStart(2, '0');
    }

}