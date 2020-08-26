var doggi = {

    // Variables
    nbrOwned: 0,
    nbrEaten: 0,
    nbrThrown: 0,
    nbrTotal: 0, // The total number we earned in all times
    doggiPerSecond: 1,

    // Functions
    onload: function() {
        doggi.setNbrOwned(0); // We first have 0 doggi
    },

    eat: function() {
        this.setNbrEaten(this.nbrEaten + this.nbrOwned);
        this.setNbrOwned(0);
    },

    setNbrTotal: function(value) {
        this.nbrTotal = value;
    },

    setNbrOwned: function(value) {
        // If this is an increase, we increase nbr total too
        if (value > this.nbrOwned) {
            this.setNbrTotal(this.nbrTotal + value - this.nbrOwned);
        }

        this.nbrOwned = value;
        if (this.nbrOwned != 1) htmlInteraction.setInnerHtml("doggi", "You have " + this.nbrOwned + " doggi!");
        else htmlInteraction.setInnerHtml("doggi", "You have 1 doggo!");
        buttons.checkCandies();
        shop.check();
        cauldron.updateActionsInfoOnPage();
    },

    setNbrEaten: function(value) {
        this.nbrEaten = value;
        if (this.nbrEaten != 1) htmlInteraction.setInnerHtml("doggi_eaten", "You have eaten " + this.nbrEaten + " doggi!");
        else htmlInteraction.setInnerHtml("doggi_eaten", "You have eaten 1 doggo!");
        htmlInteraction.setElementVisibility("doggi_eaten", true);
    },

    setCandiesPerSecond: function(value) {
        this.doggiPerSecond = value;
    },

    setNbrThrown: function(value) {
        this.nbrThrown = value;

        // We choose which smiley we want to add at the end of the sentence
        if (this.nbrThrown <= 10) smiley = ".";
        else if (this.nbrThrown <= 20) smiley = "...";
        else if (this.nbrThrown <= 30) smiley = "...?";
        else if (this.nbrThrown <= 40) smiley = "...? <tt>:|</tt>";
        else if (this.nbrThrown <= 50) smiley = "...? <tt>:/</tt>";
        else if (this.nbrThrown <= 60) smiley = "...? <tt>:(</tt>";
        else if (this.nbrThrown <= 70) smiley = "...? <tt>:[</tt>";
        else if (this.nbrThrown <= 80) smiley = "...? <tt>:{</tt>";
        else if (this.nbrThrown <= 90) smiley = "...? <tt>:'(</tt>";
        else smiley = "...? <tt>(;_;)</tt>";

        darkMode.check();

        if (this.nbrThrown != 1) htmlInteraction.setInnerHtml("doggi_thrown", "You threw " + this.nbrThrown + " doggi on the ground" + smiley);
        else htmlInteraction.setInnerHtml("doggi_thrown", "You threw 1 doggo on the ground" + smiley);
        htmlInteraction.setElementVisibility("doggi_thrown", true);
    },

    throw10Candies: function() {
        if (this.nbrOwned >= 10) { // If we have at least 10 doggi
            this.setNbrOwned(this.nbrOwned - 10);
            this.setNbrThrown(this.nbrThrown + 10);
        }
    }

};