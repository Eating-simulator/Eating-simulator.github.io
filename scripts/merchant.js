var random = Math.floor(Math.random() * 11);
var merchant = {
  setmerchantspeech : function(speech) {
  document.querySelector(".merchantspeech").innerHTML = speech;
  } ,
  givemesomething : function() {
    random = Math.floor(Math.random() * 9);
    if (random == 0) {
    merchant.setmerchantspeech("Here's a jumper flavored doggo!   They taste good.")
    } else if (random == 1) {
    merchant.setmerchantspeech("Here's a watermelon flavored dorito.   i never tried them, but i'm sure they taste good.")
    } else if (random == 2) {
    merchant.setmerchantspeech("Here's a lemon! eat them, your mouth will hurt.   but i think you can squirt the juice to a mob   and it'll get easier to defeat it.")
    } else if (random == 3) {
     merchant.setmerchantspeech("Here's a headphone!   wait, why am i giving you a headphone?") 
    } else if (random == 4) {
     merchant.setmerchantspeech("Here you go! it's a pumpkin flavoured apple pie.   now that just doesn't make sense.") 
    } else if (random == 5) {
     merchant.setmerchantspeech("Ahh, let me give you one of my favorites. it's a dorito!") 
    } else if (random == 6) {
     merchant.setmerchantspeech("It's a dorito!") 
    } else if (random == 7) {
     merchant.setmerchantspeech("Here is a scrumticiolamy-yuatizin lollipop!   it's actually a thing.") 
    } else if (random == 8) {
     merchant.setmerchantspeech("Here's my second favorite! it's a watermelon.") 
    }
  }
}
