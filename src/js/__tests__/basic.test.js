import Bowerman from '../bowerman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
import Zombie from '../zombie';

test('Объект должен создаваться', () => {
  const unit = new Bowerman('Bowman', 'Bowman');
  expect(unit.name).toBe('Bowman');
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
