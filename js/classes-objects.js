class Level {
  constructor(levelName, score, speed) {
    this.name = levelName;
    this.minScore = score;
    this.speed = speed;
  }
}
const level1 = new Level("Level 1", 500, 1000);
const level2 = new Level("Level 2", 550, 700);
const level3 = new Level("level 3", 600, 600);
