$(document).on("keydown", (key) => {
  switch (key.keyCode) {
    case left:
      if (control.x === 1) break;
      player.speed = new Vector2d(-1, 0);
      control = new Vector2d(-1, 0);
      break;
    case up:
      if (control.y === 1) break;

      player.speed = new Vector2d(0, -1);
      control = new Vector2d(0, -1);

      break;
    case right:
      if (control.x === -1) break;

      player.speed = new Vector2d(1, 0);
      control = new Vector2d(1, 0);

      break;
    case down:
      if (control.y === -1) break;

      player.speed = new Vector2d(0, 1);
      control = new Vector2d(0, 1);

      break;
    default:
      break;
  }
});
