// This is going to define the class for what a card is in the game value suit and name of card

class Card {
    constructor(suit, value, name) {
        this.suit = suit;
        this.value = value;
        this.name = name;
    }

}
// this is the class that holds in the info for all cards that will be in the deck
class Deck {
    constructor() {
        this.cards = [];
        this.suits = ["Hearts", "Diamonds","Clubs","Spades"]
        this.names = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace']
        this.values = [2,3,4,5,6,7,8,9,10,11,12,13,14]
    }

    // this is to create the deck. This itterates through every suit and card value pushing one of each into
    // the deck create with the create deck function
    createDeck() {
        console.log("New Deck Being Printed...Cut...Packaged...and .... Completed!!!");
        for(let i = 0; i < this.suits.length; i++) {
            for(let r = 0; r < this.names.length; r++){
                 this.cards.push(new Card(this.suits[i], this.names[r], this.values[r]))
            }
        
        }
    };

    
// this shuffles the deck by splicing in all the cards to a random position in the array
    shuffleDeck() {
        console.log("Shuffling Deck to Randomize Battlefield");
        const shuffledDeck = [];
        for(let i = 0; i < 52; i ++) {
            let randomPosition = Math.floor((this.cards.length - i) *  Math.random());
            let randomCard = this.cards.splice(randomPosition, 1);
            shuffledDeck.push(...randomCard);
        }
        return shuffledDeck;
    }
    //  numberOfCards(){
    //     return this.cards.length
    // }
  // this is another attempt at randomizing cards a different way i was never able  to get to work
  // but still want to work on because the above seems to heavily favor player 2
    // shuffleDeck(){
        
    //     console.log("Shuffling Deck to Randomize Battlefield");
    //      for(let i = this.numberOfCards - 1; i > 0; i-- ){
    //         const newIndex = Math.floor(Math.random() * (i + 1))
    //         const oldValue = this.cards[newIndex]
    //         this.cards[newIndex] = this.cards[i]
    //         this.cards[i] = oldValue
    //      }
    //     
         
    

    // this allowns the cards to be spliced into each players hand creating each hand for the game
    // I found that using math.random here to assisted with not favoring player 2 as much and randomized 
    // it more.

    dealDeck(players, shuffledCards) {
        console.log("Assigning out Weapons and Soldiers")
        let deltCards1 = shuffledCards.splice(Math.random, 26);
        players[0].hands.push(...deltCards1);
        let deltCards2 = shuffledCards.splice(Math.random, 26);
        players[1].hands.push(...deltCards2);
    }


}

// this is going to define what a player is in the game and what will apply to the player
// like cards hands and score

class Players {
    constructor(name){
        this.name = name;
        this.hands = [];
        this.score = 0;
    }
}

// this class just helps assist with the running of the game
class Game {
    constructor(){
        this.players = [];
    }

    start(){
        

        // Allows the User to create two teams to play war against eachother
        // using the prompt so you can create your own teams
             let player1Name = prompt('Enter name for new Player:');
              this.players.push(new Players(player1Name));
              let player2Name = prompt('Enter name for new Player:');
              this.players.push(new Players(player2Name));
              console.log(player1Name + " and " + player2Name +  " DECLARE WAR!!!");

  // creates the deck and shuffles it 

            let myDeck = new Deck();
            myDeck.createDeck();
            let shuffledDeck = myDeck.shuffleDeck();

      // Deals out the cards to players in a random order to assist with keeping it random
      myDeck.dealDeck(this.players, shuffledDeck);
// these are what run after you start the game but the functions are listed and created below
      this.playGame();
      
      this.endGame();


    }
// this is the play game function that keeps score and officiates the game. 
// first up is the assigning of players and creating a loop in order to go through all the cards in the 
// players hands. It then gives a point to whoevers card value is higher. if it is a tie no
// one recieves a point and it continues until all cards are gone.
    playGame(){
        console.log("WAR hath been DECLARED!!!!");
        let player1 = this.players[0];
        let player2 = this.players[1];

        let battleWinner = '';
        let battle = 0;

        while(player1.hands.length !== 0 && player2.hands.length !== 0){
            let player1Card = player1.hands.pop();
            let player2Card = player2.hands.pop();
                if(player1Card.value > player2Card.value){
                    battleWinner = player1.name
                    player1.score += 1;
                    console.log('Battle', (battle += 1), '\n\n Player 1 card', player1Card.value, "of", player1Card.suit, "\n Player 2 card ",  player2Card.value, "of", player2Card.suit, "\n\n" + player1.name + " " + "is Victorious" + "\n\n" + player1.name + " score is " +  player1.score  + "\n" + player2.name + " score is " + player2.score);
                }
                else if(player2Card.value > player1Card.value) {
                    battleWinner = player2.name;
                    player2.score += 1;
                    console.log('Battle', (battle += 1), '\n\n Player 1 card', player1Card.value, "of", player1Card.suit, "\n Player 2 card ",  player2Card.value, "of", player2Card.suit + "\n\n" + player2.name + " " + "is Victorious" + "\n\n" + player1.name + " score is "  + player1.score + "\n" + player2.name + " score is " + player2.score);   
                }
                else {
                    console.log('Battle', (battle += 1), '\n\n Player card', player1Card.value, "of", player1Card.suit, "\n Player 2 card ",  player2Card.value, "of", player2Card.suit +  "\n\n" + "No one is Victorious for there skills are equal\n" + "\n" + player1.name + " score is " + player1.score + "\n" + player2.name + " score is " + player2.score);

                }
    }
}
// this runs once the play game function is done and there is a final score for both players
// this is the function that runs when scores have been tallied up. it just declares a winner
// or a tie based on whos scored the most and it also displays the final score of both players as well

endGame(){
    let supremeRuler = '';
    let player1 = this.players[0];
    let player2 = this.players[1];
    let winningScore = 0;

    if(player1.score > player2.score) {
        supremeRuler = player1.name;
        winningScore = player1.score;
        alert('WAR ended ' + supremeRuler + " Is Supreme Victor of all the land \n" + player1.name + " final score " + player1.score + " \n" + player2.name  + " final score " + player2.score + " \nUntil a new Challenger arrives the time of WAR is over")

    } else if(player2.score > player1.score) {
        supremeRuler = player2.name;
        winningScore = player2.score;
        alert('WAR ended ' + supremeRuler + " Is Supreme Victor of all the land \n" + player1.name + " final score " + player1.score + " \n" + player2.name  + " final score " + player2.score + " \nUntil a new Challenger arrives the time of WAR is over")
    } else {
        alert("War is Over and neither could rule supreme over the battle field \n" + player1.name + " " + player1.score + "\n" + player2.name  + " " + player2.score + "\n Until a worthy challenger is found the WAR has been left undicided and abandoned")
    }
}
}
// this creates the new game object so that the start function can run it.

let game = new Game();
game.start();





