window.dom = {
  find(selector) {
    return document.querySelectorAll(selector);
  },
  style(node, name, value) {
    if (arguments.length === 3) {
      console.log(name);
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        return node.style[name];
      } else if (typeof name === "object") {
        const obj = name;
        for (let key in obj) {
          node.style[key] = obj[key]; //   obj[key]中的key代表循环中的一个变量，输出obj的value值。
        }
      }
    }
  },
  //each对象调用fn函数，但这时候fn函数没有确定，需要用call()来调用
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]); //函数引用.call(调用者，参数1，参数2，参数3)
    }
  },
};
