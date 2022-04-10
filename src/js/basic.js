export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;

    if (typeof this.name !== 'string' || this.name.length < 2 || this.name.length > 10) {
      throw new Error('Некорректное значение "name"');
    }

    const unit = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].find((a) => a === this.type);

    if (!unit || typeof this.type !== 'string') {
      throw new Error('Некорректное значение "type"');
    }
  }
}
