import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

export default class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction: string = "Right";
  isLive: boolean = true;
  constructor() {
    this.food = new Food();
    this.snake = new Snake();
    this.scorePanel = new ScorePanel(2, 5);
    this.init();
  }
  init() {
    // 绑定键盘按键按下的事件
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    this.run();
  }
  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key;
  }

  run() {
    let x = this.snake.X;
    let y = this.snake.Y;
    switch (this.direction) {
      case "ArrowUp":
      case "up":
        y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        x -= 10;
        break;
      case "ArrowRight":
      case "Right":
        x += 10;
        break;

      default:
        break;
    }
    if (this.checkEat(x,y)) {
        console.log("eaten");
        
    }
    try {
      this.snake.X = x;
      this.snake.Y = y;
    } catch (e) {
      alert(e.message);
      this.isLive=false
    }

    this.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  checkEat(X:number,Y:number){
    if( X===this.food.X&&Y===this.food.Y){
        this.snake.addbody()
        this.scorePanel.addScore()
        this.food.change()
        return true
    }
    return false
  }
}
