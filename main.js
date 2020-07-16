const div = dom.find("#test>.red")[0]; // 获取对应的元素
console.log(div);
dom.style(div, "color", "red");
const divList = dom.find(".red");
console.log(divList);
dom.each(divList, (n) => console.log(n));
