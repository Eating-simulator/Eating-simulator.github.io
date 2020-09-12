            var menuDisplayed = false;
            var menuBox = null;
           
            window.addEventListener("contextmenu", function() {
                var left = arguments[0].clientX;
                var top = arguments[0].clientY;
               
                menuBox = window.document.querySelector(".menu");
                menuBox.style.left = left + "px";
                menuBox.style.top = top + "px";
                menuBox.style.display = "block";
               
                arguments[0].preventDefault();
               
                menuDisplayed = true;
            }, false);
           
            window.addEventListener("click", function() {
                if(menuDisplayed == true){
                    menuBox.style.display = "none";
                }
            }, true);
