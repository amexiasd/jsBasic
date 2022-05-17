function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var player = /** @class */ (function () {
    function player(times, power) {
        this.plays = [];
        this.times = times;
        this.power = power;
        this.sum = 0;
    }
    player.prototype.play1 = function () {
        for (var i = 0; i < this.times; i++) {
            var r = rand(this.power, this.power + 50);
            this.plays.push(r);
        }
        this.sum = this.plays.reduce(function (a, b) {
            return a + b;
        });
        console.log(this.sum);
    };
    return player;
}());
var players = [];
for (var i = 0; i < 40; i++) {
    players[i] = new player(15, i + 100);
}
for (var j = 0; j < 40; j++) {
    players[j].play1();
}
