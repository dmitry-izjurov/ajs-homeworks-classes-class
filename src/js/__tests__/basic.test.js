import Character, {
  Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../basic';

test('Объект должен создаваться', () => {
  const unit = new Character('name', 'type');
  expect(unit.name).toBe('name');
});

test('Объект должен создаваться', () => {
  const unit = new Bowerman('Bowerman', 'Bowerman');
  expect(unit.name).toBe('Bowerman');
});

test('Объект должен создаваться', () => {
  const unit = new Swordsman('Swordsman', 'Swordsman');
  expect(unit.name).toBe('Swordsman');
});

test('Объект должен создаваться', () => {
  const unit = new Magician('Magician', 'Magician');
  expect(unit.name).toBe('Magician');
});

test('Объект должен создаваться', () => {
  const unit = new Daemon('Daemon', 'Daemon');
  expect(unit.name).toBe('Daemon');
});

test('Объект должен создаваться', () => {
  const unit = new Undead('Undead', 'Undead');
  expect(unit.name).toBe('Undead');
});

test('Объект должен создаваться', () => {
  const unit = new Zombie('Zombie', 'Zombie');
  expect(unit.name).toBe('Zombie');
});
