function rand(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

class player {
    plays: number[];
    times: number;
    power: number;
    sum: number;

    constructor(times, power) {


        this.plays = [];
        this.times = times;
        this.power = power;
        this.sum = 0;
    }

    play1() {
        for (let i = 0; i < this.times; i++) {
            let r = rand(this.power, this.power + 50);
            this.plays.push(r);

        }

        this.sum = this.plays.reduce(function (a, b) {
            return a + b;
        });
        console.log(this.sum);
    }

}

let players = [];
for (let i = 0; i < 40; i++) {
    players[i] = new player(15, i + 100);

}
for (let j = 0; j < 40; j++) {
    players[j].play1();
}