var random = Math.floor(Math.random() * 11);
var merchant = {
  setmechantspeech : function(speech) {
  document.querySelector(".merchantspeech").innerHTML = speech;
  }
  givemesomething : function() {
    random = Math.floor(Math.random() * 11);
    if (random == 0) {
    merchant.setmerchantspeech("Here's a jumper flavored doggo! <br> They taste good.")
    } else if (random == 1) {
    merchant.setmerchantspeech("Here's a watermelon flavored dorito. <br> i never tried them, but i'm sure they taste good.")
    } else if (random == 2) {
    merchant.setmerchantspeech("Here's a lemon! eat them, your mouth will hurt. <br> but i think you can squirt the juice to a mob <br> and it'll get easier to defeat it.")
    }
  }
}
