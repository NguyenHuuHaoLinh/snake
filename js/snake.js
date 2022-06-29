class Vector2d {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let control = new Vector2d(-1, 0);
class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    context.fillStyle = "blue";
    context.fillRect(this.x, this.y, UNIT, UNIT);
  }
  clear() {
    context.fillStyle = "black";
    context.fillRect(this.x, this.y, UNIT, UNIT);
  }
  getRandomNumber() {
    let random = Math.floor(Math.random() * WITDH);
    random -= random % UNIT;
    return random;
  }
  spawn() {
    this.clear();
    this.x = this.getRandomNumber();
    this.y = this.getRandomNumber();
    this.draw();
  }
}
let food = new Food();
food.spawn();
class Snake {
  constructor() {
    this.body = [
      new Vector2d(UNIT * 6, UNIT * 4),
      new Vector2d(UNIT * 7, UNIT * 4),
    ];
    this.speed = new Vector2d(-1, 0);
  }

  draw() {
    context.fillStyle = "red";
    context.fillRect(this.body[0].x, this.body[0].y, UNIT, UNIT);
    context.fillStyle = SNAKE_COLOR;
    for (let i = 1; i < this.body.length; i++) {
      context.fillRect(this.body[i].x, this.body[i].y, UNIT, UNIT);
    }
  }
  clear() {
    context.fillStyle = "red";
    context.fillRect(this.body[0].x, this.body[0].y, UNIT, UNIT);
    context.fillStyle = "black";
    for (let i = 1; i < this.body.length; i++) {
      context.fillRect(this.body[i].x, this.body[i].y, UNIT, UNIT);
    }
  }
  vacham() {
    for (let i = 0; i < this.body.length; i++) {
      if (this.body[i].x < 0) {
        this.body[i].x = WITDH - UNIT;
      } else if (this.body[i].x > WITDH - UNIT) {
        this.body[i].x = 0;
      } else if (this.body[i].y < 0) {
        this.body[i].y = WITDH - UNIT;
      } else if (this.body[i].y > WITDH - UNIT) {
        this.body[i].y = 0;
      }
      // if (this.body[i].x < 0 || this.body[i].y < 0) {
      //   this.body[i].x = WITDH - UNIT;
      // }
    }
  }
  move() {
    this.clear();

    for (let i = this.body.length - 1; i >= 1; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    this.body[0].x += this.speed.x * UNIT;
    this.body[0].y += this.speed.y * UNIT;
    this.draw();
    this.vacham();
  }

  checkEat() {
    this.clear();
    let head = this.body[0];
    if (food.x === head.x && food.y === head.y) {
      console.log("đã ăn");
      food.spawn();

      this.body.push(
        new Vector2d(this.body.length.x + 1, this.body.length.y + 1)
      );
    }
    this.draw();
  }
  // checkLive() {
  //   this.checkEat();
  //   let head = this.body[0];
  //   for (let i = 0; i < this.body.length; i++) {
  //     if (head.x === this.body[i].x && head.y === this.body[i].y) {
  //       console.log("ok");
  //     }
  //   }
  // }
}

let player = new Snake();

setInterval(() => {
  player.move();
  player.checkEat();
}, 100);
