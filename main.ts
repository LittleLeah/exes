class Card{
    private suit: string;
    private rank: number;
    constructor(suit: string, rank: number) {
        this.suit = suit;
        this.rank = rank;
    }
    toString() {
        return this.suit + " " + this.rank;
    }
    getValue() {
        if(this.suit == "spade") {
           return this.rank + 3;
        }
        else if(this.suit == "heart") {
           return this.rank +2;
        }
        else if(this.suit == "cloves") {
           return this.rank +1;
        } else if(this.suit == "diamond") {
          return  this.rank;
        }
        return this.getRank();
    }
    getRank() {
        return this.rank;
    }
}
class Deck{
    private cards: Card[];
    constructor(){
        this.cards = [];
    }
    addCard(c: Card){
        this.cards.push(c);
    }
    removeCard(c: Card)
    {
        this.cards.splice(this.cards.indexOf(c), 1);
    }
    listCards(){
        for( let i =0; i < this.cards.length; i++)
        {
            console.log(this.cards[i].toString());
        }
    }
    getByValue() {
        let temp : Card;
        for(let i = 0; i < this.cards.length; i++) {
            for(let j = 0; j < this.cards.length; j++) {
                if(this.cards[j].getRank() > this.cards[j+1].getRank()) {
                    temp = this.cards[j+1];
                    this.cards[j+1] = this.cards[j];
                    this.cards[j] = temp;
                }
                else if(this.cards[j].getRank() == this.cards[j+1].getRank()) {
                    if(this.cards[j].getValue() > this.cards[j+1].getValue()) {
                        temp = this.cards[j+1];
                        this.cards[j+1] = this.cards[j];
                        this.cards[j] = temp; 
                    }
                }
            }
        }
        return this.cards;
    }
}
class Driver{
    static Exam(): void{
        let c1 = new Card("heart", 13);
        let c2 = new Card ("diamond", 1);
        let c3 = new Card ("spade", 13);
        let c4 = new Card ("cloves", 13);
        let c5 = new Card ("diamond", 13);
        let c6 = new Card ("heart", 10);
        let d = new Deck();
        d.addCard(c1);
        d.addCard(c2);
        d.listCards();
        d.getByValue();
        d.listCards();
    }
}
Driver.Exam();