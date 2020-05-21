export class student {
    constructor(id) {
        console.log('student constructor init');
        this.id = id;
    }

    info() {
        console.log(`Hi my Id is ${this.id}`);
    }

}

export class seniorstudent extends student{
    constructor(id , discipline) {
        super(id);
        console.log('senior student constructor init');
        this.discipline = discipline;
    }

    info() {
        console.log(`Hi my Id is ${this.id} and I am student of ${this.discipline}`);
    }

}