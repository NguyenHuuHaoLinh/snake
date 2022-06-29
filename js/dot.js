// khoigach = { x: 100, y: 400 };
// khoigach1 = { x: 100, y: 401 };

// setInterval(start, 100);
// function start() {
//   context.clearRect(0, 0, 250, 500);
//   context.fillStyle = "red";
//   context.fillRect(khoigach.x, khoigach.y, 25, 25);

// vacham();
// }
// function vacham() {
//   if (khoigach.x <= 0 || khoigach.x + 25 >= 300) {
//     console.log("thua");
//   } else if (khoigach.y <= 0 || khoigach.y + 25 >= 600) {
//     console.log("thua");
//   }
// }
// $(document).on("keydown", (key) => {
//   switch (key.keyCode) {
//     case 37:
//       if (khoigach.x > 0) {
//         khoigach.x -= 25;
//       }
//       break;

//     case 38:
//       if (khoigach.y > 0) {
//         khoigach.y -= 25;
//       }
//       break;
//     case 39:
//       if (khoigach.x + 25 < 250) {
//         khoigach.x += 25;
//       }
//       break;
//     case 40:
//       if (khoigach.y + 25 < 500) {
//         khoigach.y += 25;
//       }
//       break;
//   }
// });
