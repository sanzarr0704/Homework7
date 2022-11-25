class Worker {
    #name = '';
    #surname = '';
    #rate = 0;
    #days = 0;

    get getSalary() {
        return console.log(this.#days * this.#rate);
    }
    set setName(value) {
        return this.#name = value;
    }
    set setSurname(value) {
        return this.#surname = value;
    }
    set setRate(value) {
        return this.#rate = value;
    }
    set setDays(value) {
        return this.#days = value;
    }
}

const me = new Worker();
me.setName = "Sanjar";
me.setSurname = "Saparov";
me.setRate = 19;
me.setDays = 32;

me.getSalary;

