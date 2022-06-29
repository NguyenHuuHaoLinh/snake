// class Food {
//   constructor(x1, y1) {
//     this.x1 = x1;
//     this.y1 = y1;
//   }
//   draw() {
//     context.fillStyle = "red";
//     context.fillRect(this.x1, this.y1, UNIT, UNIT);
//   }
//   clear() {
//     context.fillStyle = "black";
//     context.fillRect(this.x1, this.y1, UNIT, UNIT);
//   }
//   getRandomNumber() {
//     let random = Math.floor(Math.random() * WITDH);
//     random -= random % UNIT;
//     return random;
//   }
//   spawn() {
//     this.clear();
//     this.x1 = this.getRandomNumber();
//     this.y1 = this.getRandomNumber();
//     this.draw();
//   }
// }
// let food = new Food();
// food.spawn();
