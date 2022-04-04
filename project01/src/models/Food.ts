export default class Food {
    element: HTMLElement;
  
    constructor() {
      // 获取页面中的food元素并且将其赋值给element
      this.element = document.getElementById("food")!;
    }
  
    // 获取food x轴坐标
    get X() {
      return this.element.offsetLeft;
    }
  
    get Y() {
      return this.element.offsetTop;
    }
  
    change() {
      let top = Math.round(Math.random() * 29) * 10;
      let left = Math.round(Math.random() * 29) * 10;
  
      this.element.style.left = left + "px";
      this.element.style.top = top + "px";
    }
  }