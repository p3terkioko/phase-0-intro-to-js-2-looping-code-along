for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  }
  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
     
    }
  
    return gifts;
  }
  
  
  wrapGifts(gifts);
  const cards = [ 'Guadalupe', 'Ollie', 'Aki' ] ;
  function writeCards(cards){
      for (let i = 0; i < cards.length; i++){
          console.log(`Thank you, ${cards[i]} for the wonderful Christmas gift!`)
      }
    return cards;
  }
  writeCards(cards);
  function countDown(i) {
    let countDown = i;
    while (countDown >= 0) {
      console.log(countDown--);
    }}
    countDown(10)