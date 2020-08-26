var doggiConverter = {

    // Variables
    activated: false, // If true, the doggiConverter is activated
    speed: 1, // How many doggi the converter can convert into doges each 1/10 seconds. The more the doggi converted without stopping, the more the speed increase.

    // Functions
    checkVisibility: function() {
        // If we have the doggi conveter
        if (objects.list.doggiConverter.have) {
            // We show it on the page
            htmlInteraction.setElementDisplay("doggi_converter", "inline");
        }
    },

    checkedValueChange: function() {
        if (htmlInteraction.getElement("doggi_converter_checkbox").checked) {
            this.setActivated(true);
        } else {
            this.setActivated(false);
        }
    },

    convert: function() {
        var howMany = 0;

        // If we are activated and have doggi to convert
        if (this.activated && doggi.nbrOwned > 0) {
            // We calculate how many doggi we will convert
            if (this.speed > doggi.nbrOwned) {
                howMany = doggi.nbrOwned;
            } else howMany = this.speed;

            // We convert them
            doggi.setNbrOwned(doggi.nbrOwned - howMany);
            doges.setNbrOwned(doges.nbrOwned + howMany);

            // We increment the speed
            if (this.speed < 10000) this.speed += 1;
            else this.speed *= 2;
        }
        // Else
        else {
            // We reset speed
            this.speed = 1;
        }
    },

    setActivated: function(value) {
        this.activated = value;
        htmlInteraction.getElement("doggi_converter_checkbox").checked = value;
    }

};