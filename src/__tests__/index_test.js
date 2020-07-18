import {Team} from '../js/index';

const team = new Team();

const bowman = {
    name: 'Лучник',
    type: 'Bowman',
    attack: 25,
    defance: 25
};

const swordsman = {
    name: 'Фектовальщик',
    type: 'Swordsman',
    attack: 25,
    defance: 25
};

const magician = {
    name: 'Маг',
    type: 'Magician',
    attack: 25,
    defance: 25
};

test('Добавление персонажа в команду', () => {
    expect(team.add(bowman)).toStrictEqual({membors: [
        {value: {
                name: 'Лучник',
                type: 'Bowman',
                attack: 25,
                defance: 25
                }
        }
    ]});
});

test('Повторное добавление персонажа в команду', () => {
    expect(() => {
        team.add(bowman)
    }).toThrow();
});

test('Добавление нескольких персонажей', () => {
    expect(team.addAll(swordsman, magician)).toStrictEqual({membors: [
        {value: {
                name: 'Лучник',
                type: 'Bowman',
                attack: 25,
                defance: 25
                }
        },
        {value: {
                name: 'Фектовальщик',
                type: 'Swordsman',
                attack: 25,
                defance: 25
                }
        }, 
        {value: {
                name: 'Маг',
                type: 'Magician',
                attack: 25,
                defance: 25
                }
        }
    ]});
});

test('Повторное добавление нескольких персонажей', () => {
    expect(team.addAll(swordsman, magician)).toStrictEqual({membors: [
        {value: {
                name: 'Лучник',
                type: 'Bowman',
                attack: 25,
                defance: 25
                }
        },
        {value: {
                name: 'Фектовальщик',
                type: 'Swordsman',
                attack: 25,
                defance: 25
                }
        }, 
        {value: {
                name: 'Маг',
                type: 'Magician',
                attack: 25,
                defance: 25
                }
        }
    ]});
});

test('Перевод в массив', () => {
    expect(team.toArray()).toEqual([
        {
            name: 'Лучник',
            type: 'Bowman',
            attack: 25,
            defance: 25
        },
        {
            name: 'Фектовальщик',
            type: 'Swordsman',
            attack: 25,
            defance: 25
        },
        {
            name: 'Маг',
            type: 'Magician',
            attack: 25,
            defance: 25
        }
    ]);
});