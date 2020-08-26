var computer = {

    background: function() {
        window.setTimeout(this.background.bind(this), 1000 + random.getRandomIntUpTo(4000)); // 5000 milliseconds delay

        var index = Math.round(Math.random() * 9);

        var ColorValue = "FFFFFF"; // default color - white (index = 0)

        if (index == 1)
            ColorValue = "FFCCCC"; //peach
        if (index == 2)
            ColorValue = "CCAFFF"; //violet
        if (index == 3)
            ColorValue = "A6BEFF"; //lt blue
        if (index == 4)
            ColorValue = "99FFFF"; //cyan
        if (index == 5)
            ColorValue = "D5CCBB"; //tan
        if (index == 6)
            ColorValue = "99FF99"; //lt green
        if (index == 7)
            ColorValue = "FFFF99"; //lt yellow
        if (index == 8)
            ColorValue = "FFCC99"; //lt orange
        if (index == 9)
            ColorValue = "CCCCCC"; //lt grey

        document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;
    },

    size: function() {
        window.setTimeout(this.size.bind(this), 1000 + random.getRandomIntUpTo(4000));
        document.getElementsByTagName("body")[0].style.fontSize = "" + random.getRandomIntUpTo(72) + "px";
    },

    random: function() {
        window.setTimeout(this.random.bind(this), 1000 + random.getRandomIntUpTo(4000));
        doggi.setNbrOwned(random.pure2());
        doggi.setNbrThrown(random.pure2());
        doggi.setNbrEaten(random.pure2());
        doggi.setCandiesPerSecond(random.pure2());
        doges.setNbrOwned(random.pure2());
        farm.setLollipopsPlanted(random.pure2());
        chocolateBars.setNbrOwned(random.pure2());
        potions.setPotionNbrOwned(potions.list.impInvocationScroll, random.pure2());
        potions.setPotionNbrOwned(potions.list.earthquakeScroll, random.pure2());
        potions.setPotionNbrOwned(potions.list.teleportScroll, random.pure2());
        potions.setPotionNbrOwned(potions.list.fireScroll, random.pure2());
        potions.setPotionNbrOwned(potions.list.acidRainScroll, random.pure2());
        potions.updateOnPage();
        potions.setPotionNbrOwned(potions.list.gmooh, random.pure2());
        potions.setPotionNbrOwned(potions.list.superman, random.pure2());
        potions.setPotionNbrOwned(potions.list.cloning, random.pure2());
        potions.setPotionNbrOwned(potions.list.seed, random.pure2());
        potions.setPotionNbrOwned(potions.list.jelly, random.pure2());
        potions.setPotionNbrOwned(potions.list.turtle, random.pure2());
        potions.setPotionNbrOwned(potions.list.invulnerability, random.pure2());
        potions.setPotionNbrOwned(potions.list.majorHealth, random.pure2());
        potions.setPotionNbrOwned(potions.list.berserk, random.pure2());
        potions.setPotionNbrOwned(potions.list.escape, random.pure2());
        potions.setPotionNbrOwned(potions.list.health, random.pure2());
        potions.updateOnPage();
        sword.setName(random.pickRandomly(['play-doh sword', 'plastic sword', 'solidified rubber sword', 'turtleshell sword', 'depleted uranium sword', 'doggo depleted uranium sword', 'polished doggo depleted uranium sword', 'chocolate sword', 'sharp chocolate sword', 'Sword of Life', 'Sword of Flames', 'Sword of Summoning', 'Sword of Liflamesummoning', 'Sword of Randomness']));
        sword.setSpecialPower(random.pure2());

        objects.setHaveObject("key", random.flipACoin());
        objects.setHaveObject("boots", random.flipACoin());
        objects.setHaveObject("swampMap", random.flipACoin());
        objects.setHaveObject("hutMap", random.flipACoin());
        objects.setHaveObject("wellMap", random.flipACoin());
        objects.setHaveObject("magicianHat", random.flipACoin());
        objects.setHaveObject("pinkRing", random.flipACoin());
        objects.setHaveObject("forgeMap", random.flipACoin());
        objects.setHaveObject("doggiConverter", random.flipACoin());
        objects.setHaveObject("plateArmour", random.flipACoin());
        objects.setHaveObject("cauldron", random.flipACoin());
        objects.setHaveObject("magicalHorn", random.flipACoin());
        objects.setHaveObject("hornOfPlenty", random.flipACoin());
        objects.setHaveObject("oldAmulet", random.flipACoin());

        developperComputer.setWon(random.flipACoin());

        doggiConverter.setActivated(random.flipACoin());

        cauldron.setBookPage(random.getRandomIntUpTo(26));
        cauldron.setCandiesInTheCauldron(random.pure2());
        cauldron.setLollipopsInTheCauldron(random.pure2());

        switch (random.getRandomIntUpTo(4)) {
            case 0:
                cauldron.putInTheCauldron();
                break;
            case 1:
                cauldron.setWeAreMixing(true);
                break;
            case 2:
                cauldron.setWeAreBoiling(true);
                break;
            case 3:
                cauldron.stopActions();
                break;
            case 4:
                cauldron.putIntoBottles();
                break;
        }

        shop.setClickingOnLollipopStep(random.getRandomIntUpTo(15));

        if (random.flipACoin())
            quest.setTiredTime(random.pure2());
        else
            quest.setTiredTime(0);

        inventory.updateOnPage();
    },

    textColor: function() {
        window.setTimeout(this.textColor.bind(this), 1000 + random.getRandomIntUpTo(4000));
        document.getElementsByTagName("body")[0].style.color = this.randomColor();
    },

    randomColor: function() {
        return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
    },

    addTab: function() {
        var text = "<li><button>" + random.pickRandomly(["tab", "i'm a tab", "hey look at me !", "i'm the best tab ever", "tabtab", "tab tab", "tabtabtab", "tab tab tab", "t", "a", "b", "taaaaab", "tabby tabby", "tabs are great", "pony", "mlp is great", "tabs will rule the world", "fake cauldron", "doggo box", "did you found the 3 secrets on the doggo box ?", "did you find the wooden pony ?", "c", "n", "d", "being a tab is all my life", "you're a tab", "i'm a tab", "thanks to Joufflu", "thanks to Cedric", "thanks to dixsept", "thank you", "no credits", "aniwey", "aniwey@gmail.com", "quit", "exit", "i wanna be a tab", "tab forever", "tab forevah", "a tab is like a box of chocolates", "chuck norTAB", "diablo", "usb key", "linux", "archlinux", "tab tab tab tab tab tab", "", "button", "don't click", "click me", "CLICKCK MEEE", "fake", "fake tab", "i'm not a tab", "you're the tab", "bat", "atb", "bta", "bat the tab", "supertab", "megatab", "metatab", "the whale was a fake", "the devil was a fake", "aniwey.net", "doggi.aniwey.net", "1/(vicious circle)", "hp = 100+(doggi_eaten^0.4) * 2.1", "doggi per second <=> fibonacci", "dev = aniwey@gmail.com", "eat the dev", "kill the dev", "doggo", "doggi", "doges", "best tab ever", "i'm clickable ;)", "click a tab", "tabby mabby", "tab01", "tab02", "tab03", "tab04", "tab05", "tab06", "tab07", "tab08", "tab09", "tab10", "tab11", "tab12", "tab13", "tab14", "tab15", "tab16", "tab17", "i'm searching for tab04 ?!", "where's tab15 ??"]) + "</button></li>";

        if (random.flipACoin())
            htmlInteraction.getElement("tabs").innerHTML += text;
        else
            htmlInteraction.getElement("tabs").innerHTML = text + htmlInteraction.getElement("tabs").innerHTML;
    },

    bug1: function() {
        if (doges.nbrOwned >= 1000000) {
            doges.setNbrOwned(doges.nbrOwned - 1000000);
            switch (random.getRandomIntUpTo(3)) {
                case 0:
                    chocolateBars.setNbrOwned(chocolateBars.nbrOwned + 1);
                    htmlInteraction.setInnerHtml("computer_comment_1", "You found 1 chocolate bar !!");
                    break;
                case 1:
                    chocolateBars.setNbrOwned(chocolateBars.nbrOwned + 2);
                    htmlInteraction.setInnerHtml("computer_comment_1", "You found 2 chocolate bars !!! \^w^");
                    break;
                case 2:
                    chocolateBars.setNbrOwned(chocolateBars.nbrOwned + 3);
                    htmlInteraction.setInnerHtml("computer_comment_1", "You found 3 chocolate bars !!!!! \^w^ \^w^ \^w^ \^w^");
                    break;
                case 3:
                    htmlInteraction.setInnerHtml("computer_comment_1", "There's a bug with the bug, it didn't worked :/");
                    break;
            }
        }
    },

    bug2: function() {
        var rndrnd;

        if (doges.nbrOwned >= 10000000) {
            doges.setNbrOwned(doges.nbrOwned - 10000000);
            switch (random.getRandomIntUpTo(2)) {
                case 0:
                    doggi.setNbrOwned(doggi.nbrOwned + doggi.nbrThrown);
                    htmlInteraction.setInnerHtml("computer_comment_2", "You picked up all doggi you have thrown on the floor. (" + doggi.nbrThrown + ")");
                    doggi.setNbrThrown(0);
                    break;
                case 1:
                    rndrnd = 2 + random.getRandomIntUpTo(50000000);
                    doggi.setNbrOwned(doggi.nbrOwned + rndrnd);
                    htmlInteraction.setInnerHtml("computer_comment_2", "You met " + random.pickRandomly(["an architect", "a fireman", "a butcher", "an electrician", "a writer", "a student", "a farmer", "a shoemaker", "a monk", "a journalist", "a reporter", "a priest", "a translator", "a vet"]) + ". He gave you " + rndrnd + " doggi !");
                    break;
                case 2:
                    farm.setMaxLollipopsPerDay(864000000);
                    htmlInteraction.showButton("computer_note");
                    htmlInteraction.setInnerHtml("computer_comment_2", "The production limit of your doge farm has increased ! (*)");
                    break;
            }
        }
    },

    bug3: function() {
        if (doges.nbrOwned >= 100000000) {
            doges.setNbrOwned(doges.nbrOwned - 100000000);
            switch (random.getRandomIntUpTo(2)) {
                case 0:
                    if (sword.name != "Sword of Liflamesummoning" && sword.name != "Sword of Randomness") {
                        sword.setName("Sword of Liflamesummoning");
                        htmlInteraction.setInnerHtml("computer_comment_3", "You found a new sword : the Sword of Liflamesummoning !");
                    } else {
                        htmlInteraction.setInnerHtml("computer_comment_3", "There's a bug with the bug, it didn't work :/");
                    }
                    break;
                case 1:
                    doggi.setNbrOwned(doggi.nbrOwned * 3);
                    htmlInteraction.setInnerHtml("computer_comment_3", "Your doggi were multiplied by 3 !");
                    break;
                case 2:
                    if (sword.specialSword == true) {
                        if (random.oneChanceOutOf(6)) {
                            sword.setSpecialPower(sword.specialPower - 3);
                            htmlInteraction.setInnerHtml("computer_comment_3", "Your sword lost 3 levels.");
                            inventory.updateOnPage();
                        } else {
                            sword.setSpecialPower(sword.specialPower + 1);
                            htmlInteraction.setInnerHtml("computer_comment_3", "The level of your sword increased by 1 !");
                            inventory.updateOnPage();
                        }
                    } else {
                        htmlInteraction.setInnerHtml("computer_comment_3", "There's a bug with the bug, it didn't work :/");
                    }
                    break;
            }
        }
    },

    bug4: function() {
        if (doges.nbrOwned >= 1000000000) {
            doges.setNbrOwned(doges.nbrOwned - 1000000000);
            htmlInteraction.setInnerHtml("computer_comment_4", "Fake bug ! I guess you'll need 10000 mpl :)");
        }
    },

    bug5: function() {
        if (doges.nbrOwned >= 10000000000) {
            doges.setNbrOwned(doges.nbrOwned - 10000000000);
            switch (random.getRandomIntUpTo(1)) {
                case 0:
                    if (land.ponyTime == false) {
                        land.ponyTime = true;
                        htmlInteraction.setInnerHtml("computer_comment_5", "It's pony time !! Everyone is a pony now ! (*)");
                        htmlInteraction.showButton("computer_note");
                    } else {
                        htmlInteraction.setInnerHtml("computer_comment_5", "There's a bug with the bug, it didn't work :/");
                    }
                    break;
                case 1:
                    if (sword.name != "Sword of Randomness") {
                        sword.setName("Sword of Randomness");
                        htmlInteraction.setInnerHtml("computer_comment_5", "You found a new sword : the Sword of Randomness !");
                    } else {
                        htmlInteraction.setInnerHtml("computer_comment_5", "There's a bug with the bug, it didn't work :/");
                    }
                    break;
            }
        }
    },

    updateLollipops: function() {
        htmlInteraction.setInnerHtml("computer_doges", Math.floor(doges.nbrOwned / 100000) / 10);
    },

};