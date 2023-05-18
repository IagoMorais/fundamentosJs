class Data {
    constructor(d, m, a) {
        this.d = d;
        this.m = m;
        this.a = a;
    }
    exibir() {
        return `${this.d}/${this.m}/${this.a}`;
    }
}

const d1 = new Data();
d1.d = 2;
d1.m = 3;
d1.a = 3333;
console.log(d1);
console.log(d1.exibir());

const d2 = new Data(31, 12, 2021);
console.log(d2);
console.log(d2.exibir());

console.log(typeof d1);
console.log(typeof d2);
console.log(typeof Data);