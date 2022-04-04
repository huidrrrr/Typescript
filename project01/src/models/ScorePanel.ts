
export default class ScorePanel {
    score: number = 0;
    level: number = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    Maxlevel: number ;
    upScore: number ;
    constructor(upscore:number,maxlevel:number) {
      this.scoreEle = document.getElementById("score");
      this.levelEle = document.getElementById("level");
      
      this.upScore=upscore
      this.Maxlevel=maxlevel
    }
  
    addScore() {
      this.scoreEle.innerHTML = ++this.score + "";
      if (this.score % this.upScore === 0) {
        this.Levelup();
      }
    }
    Levelup() {
      if (this.level < this.Maxlevel) {
        this.levelEle.innerHTML = ++this.level + "";
      }
    }
  }
  