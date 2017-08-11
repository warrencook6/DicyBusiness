var currDie = [];

function Dice() {
    this.value = Math.floor(Math.random() * 6) + 1;
    this.div = $("<div class='dice'>" + this.value + "</div>");
    this.div.click(this.roll.bind(this));
    this.div.dblclick(this.remove.bind(this));
    $(".die-container").append(this.div);
}

Dice.prototype.roll = function () {
    this.value = Math.floor(Math.random() * 6) + 1;
    this.div.text(this.value);
}

Dice.prototype.remove = function () {
    this.div.remove();
    currDie.splice(currDie.indexOf(this), 1);
}

//USE TO GET A UNICODE DIE FOR THE TEXT OF YOUR DIV
function charFromValue(value) {
    return String.fromCharCode(9855 + value);
}

function genDice() {
    currDie.push(new Dice());
}

function rollDice() {
    currDie.forEach(function (die) {
        die.roll();
    })
}

function sumDice() {
    var total = 0;
    currDie.forEach(function (die) {
        total += die.value;
    })
    alert(total);
}