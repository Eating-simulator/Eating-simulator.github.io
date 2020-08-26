var farm = {

    // Variables
    dogesPlanted: 0, // The number of doges planted in the farm
    productionDelayType: "none", // On which delay does the farm product doges (day, hour, min, sec...)
    dogesPerDay: 0, // How many doges the farm produce every day
    dogesProduction: 0, // How many doges the farm produce every day, hour, min, sec.. depending on the production delay type
    maxLollipopsPerDay: 8640000, // = 100/sec
    flagsList: [" ~ ", " * ", "cnd", " ! ", " + ", " ? ", "/|\\"], // List of ascii flags which can appear on the farm
    currentFlagIndex: 0, // Index in the list of the current flag shown
    plantingButtonsStep: 0, // Step of the doges planting buttons : (= which buttons are shown, 1000, 100.. ?)

    // Functions
    calculateLollipopsPerDay: function() {
        if (this.dogesPlanted <= 293) { // sqrt(86400) = 293
            this.dogesPerDay = Math.pow(this.dogesPlanted, 2); // 293 will give 85849
        } else { // When we're counting in lp/sec, this function is used instead of the other one. It will stabilize the curve.
            var prod = (this.dogesPlanted - 122) * 500; // 194 will give 86000
            if (prod < this.maxLollipopsPerDay) this.dogesPerDay = prod;
            else this.dogesPerDay = this.maxLollipopsPerDay;
        }
    },

    setPlantingButtonsStep: function(value) {
        // Set the value
        this.plantingButtonsStep = value;

        // Update on page
        switch (this.plantingButtonsStep) {
            case 1:
                htmlInteraction.setInnerHtml("lp_buttons", "<button class=\"home_button\" id=\"plant_1_lp\" onClick=\"farm.plantLollipops(1);\">Plant 1 doge</button>");
                break;
            case 2:
                htmlInteraction.setInnerHtml("lp_buttons", "Plant <button class=\"home_button\" id=\"plant_1_lp\" onClick=\"farm.plantLollipops(1);\">1</button><button class=\"home_button\" id=\"plant_10_lp\" onClick=\"farm.plantLollipops(10);\" style=\"visibility:hidden\">10</button> lp");
                break;
            case 3:
                htmlInteraction.setInnerHtml("lp_buttons", "Plant <button class=\"home_button\" id=\"plant_1_lp\" onClick=\"farm.plantLollipops(1);\">1</button><button class=\"home_button\" id=\"plant_10_lp\" onClick=\"farm.plantLollipops(10);\" style=\"visibility:hidden\">10</button><button class=\"home_button\" id=\"plant_100_lp\" onClick=\"farm.plantLollipops(100);\" style=\"visibility:hidden\">100</button> lp");
                break;
            case 4:
                htmlInteraction.setInnerHtml("lp_buttons", "Plant <button class=\"home_button\" id=\"plant_1_lp\" onClick=\"farm.plantLollipops(1);\">1</button><button class=\"home_button\" id=\"plant_10_lp\" onClick=\"farm.plantLollipops(10);\" style=\"visibility:hidden\">10</button><button class=\"home_button\" id=\"plant_100_lp\" onClick=\"farm.plantLollipops(100);\" style=\"visibility:hidden\">100</button><button class=\"home_button\" id=\"plant_1000_lp\" onClick=\"farm.plantLollipops(1000);\" style=\"visibility:hidden\">1000</button> lp");
                break;
        }

        // Check the buttons
        buttons.checkLollipopsPlantingButtons();
    },

    clickedOnTheBigLollipop: function() {
        // Increment the current flag index
        this.setCurrentFlagIndex(this.currentFlagIndex + 1);
    },

    setCurrentFlagIndex: function(value) {
        // Set the new value and correct it if incorrect
        this.currentFlagIndex = value;
        if (this.currentFlagIndex >= this.flagsList.length || this.currentFlagIndex < 0) this.currentFlagIndex = 0;

        // Update on the page
        htmlInteraction.setInnerHtml("farm_big_doge", this.flagsList[this.currentFlagIndex]);
    },

    checkVisibility: function() {
        if (objects.list.key.have) {
            htmlInteraction.setElementVisibility("farm", true);
        }
    },

    plantLollipops: function(number) {
        if (doges.nbrOwned >= number) {
            doges.setNbrOwned(doges.nbrOwned - number);
            this.setLollipopsPlanted(this.dogesPlanted + number);
        }
    },

    setLollipopsPlanted: function(value) {
        // We change the value
        this.dogesPlanted = value;

        // We update on page
        htmlInteraction.setInnerHtml("lp_planted", "Lp planted : " + this.dogesPlanted);

        // We re calculate stuff
        this.calculateLollipopsPerDay();
        this.calculateLollipopsProductionFromLollipopsPerDay();
    },

    calculateLollipopsProductionFromLollipopsPerDay: function() {
        if (this.dogesPerDay < 24) {
            this.setProductionDelayType("day");
            this.setLollipopsProduction(Math.floor(this.dogesPerDay));
        } else if (this.dogesPerDay < 1440) {
            this.setProductionDelayType("hour");
            this.setLollipopsProduction(Math.floor(this.dogesPerDay / 24));
        } else if (this.dogesPerDay < 86400) {
            this.setProductionDelayType("min");
            this.setLollipopsProduction(Math.floor(this.dogesPerDay / 1440));
        } else {
            this.setProductionDelayType("sec");
            this.setLollipopsProduction(Math.floor(this.dogesPerDay / 86400));
        }
    },

    setProductionDelayType: function(value) {
        this.productionDelayType = value;
    },

    setLollipopsProduction: function(value) {
        this.dogesProduction = value;
        htmlInteraction.setInnerHtml("lp_production", "Production : " + this.dogesProduction + " lp/" + this.productionDelayType);
    },

    setMaxLollipopsPerDay: function(value) {
        // We set the max doges per day
        this.maxLollipopsPerDay = value;

        // We re calculate stuff
        this.calculateLollipopsPerDay();
        this.calculateLollipopsProductionFromLollipopsPerDay();
    }

};