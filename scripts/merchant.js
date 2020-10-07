var random = Math.floor(Math.random() * 11);
var merchant = {
  setSpeech : function(speech) {
  document.querySelector(".merchantspeech").innerHTML = speech;
  } ,
  givemesomething : function() {
    texts = ["Here's a jumper flavored doggo!   They taste good.","Here's a watermelon flavored dorito.   i never tried them, but i'm sure they taste good.","Here's a lemon! eat them, your mouth will hurt.   but i think you can squirt the juice to a mob   and it'll get easier to defeat it.","Here's a headphone!   wait, why am i giving you a headphone?","Here you go! it's a pumpkin flavoured apple pie.   now that just doesn't make sense.","Ahh, let me give you one of my favorites. it's a fake plastic dorito!","It's a dorito!","Here is a scrumticiolamy-yuatizin lollipop!   it's actually a thing.","Here's an Ethan flavor doge! I heard people named Ethan are delicious.", "Here's a unicorn corn horn!", "Cake is outta order. what?"];
    text = texts[Math.floor(Math.random() * texts.length)];
    merchant.setSpeech(text)
  }
}
