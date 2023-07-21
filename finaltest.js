var expect = chai.expect;


let testDeck = new Deck();


describe('To check if create deck worked', function(){
    it("should create an array of 52 cards", function(){
        
        let testDeck = new Deck();
        let testShuffle = testDeck.createDeck();
        console.log(testDeck.cards.length)
        expect(testDeck.cards.length).to.equal(52)
    })
})