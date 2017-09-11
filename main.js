"use strict";
var Card = /** @class */ (function () {
    function Card(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    Card.prototype.toString = function () {
        return this.suit + " " + this.rank;
    };
    Card.prototype.getValue = function () {
        if (this.suit == "spade") {
            return this.rank + 3;
        }
        else if (this.suit == "heart") {
            return this.rank + 2;
        }
        else if (this.suit == "cloves") {
            return this.rank + 1;
        }
        else if (this.suit == "diamond") {
            return this.rank;
        }
        return this.getRank();
    };
    Card.prototype.getRank = function () {
        return this.rank;
    };
    return Card;
}());
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
    }
    Deck.prototype.addCard = function (c) {
        this.cards.push(c);
    };
    Deck.prototype.removeCard = function (c) {
        this.cards.splice(this.cards.indexOf(c), 1);
    };
    Deck.prototype.listCards = function () {
        for (var i = 0; i < this.cards.length; i++) {
            console.log(this.cards[i].toString());
        }
    };
    Deck.prototype.getByValue = function () {
        var temp;
        for (var i = 0; i < this.cards.length; i++) {
            for (var j = 0; j < this.cards.length-1; j++) {
                if (this.cards[j].getRank() > this.cards[j + 1].getRank()) {
                    temp = this.cards[j + 1];
                    this.cards[j + 1] = this.cards[j];
                    this.cards[j] = temp;
                }
                else if (this.cards[j].getRank() == this.cards[j + 1].getRank()) {
                    if (this.cards[j].getValue() > this.cards[j + 1].getValue()) {
                        temp = this.cards[j + 1];
                        this.cards[j + 1] = this.cards[j];
                        this.cards[j] = temp;
                    }
                }
            }
        }
        return this.cards;
    };
    return Deck;
}());
var Driver = /** @class */ (function () {
    function Driver() {
    }
    Driver.Exam = function () {
        var c1 = new Card("heart", 13);
        var c2 = new Card("diamond", 1);
        var c3 = new Card("spade", 13);
        var c4 = new Card("cloves", 13);
        var c5 = new Card("diamond", 13);
        var c6 = new Card("heart", 10);
        var d = new Deck();
        d.addCard(c1);
        d.addCard(c2);
        d.addCard(c3);
        d.addCard(c4);
        d.addCard(c5);
        d.addCard(c6);
        d.listCards();
        d.getByValue();
        d.listCards();
    };
    return Driver;
}());
Driver.Exam();
