function writeCards(arr, event) {
    const writtenCards = [];

    for (let i = 0; i < arr.length; i++) {
        writtenCards.push (`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    }
     
    return writtenCards;

}

function countDown(num) {
  for (let i = 0; num >= i; num--) {
    console.log(num);
}
   
}
