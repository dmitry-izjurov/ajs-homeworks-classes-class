export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

export class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);
    this.health = 100;
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.health = 100;
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.health = 100;
    this.attack = 10;
    this.defence = 40;
  }
}

export class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.health = 100;
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.health = 100;
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.health = 100;
    this.attack = 40;
    this.defence = 10;
  }
}
