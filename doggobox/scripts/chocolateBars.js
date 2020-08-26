var chocolateBars = {

    // Variables
    nbrOwned: 0,

    setNbrOwned: function(value) {
        this.nbrOwned = value;

        if (this.nbrOwned == 0) htmlInteraction.setInnerHtml("chocolate_bars", "You have 0 chocolate bars :(");
        else if (this.nbrOwned != 1) htmlInteraction.setInnerHtml("chocolate_bars", "You have " + this.nbrOwned + " chocolate bars \^w^ (a bug ? Oo)");
        else htmlInteraction.setInnerHtml("chocolate_bars", "You have 1 chocolate bar \^w^");
        htmlInteraction.setElementVisibility("chocolate_bars", true);
        buttons.checkChocolateBars();
    }

};