export class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if(!(this.members.has(character))) {
            this.members.add(character);
        } else {
            throw new Error('Персонаж уже в команде!');
        }
    }

    addAll(...characters) {
        characters.forEach(item => {
            this.members.add(item);
        });
    }

    toArray() {
        return Array.from(this.members);
    }
}