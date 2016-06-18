var browseSlideShow = {
  photos: ["slide4","slide5","slide6"],
  startSlideShow: function() {
    /*SLIDE 1*/
    /*REMOVE LOGO*/
    var newSlide1 = document.querySelector('#slide1');
    newSlide1.id = browseSlideShow.photos[0];
    var logo = document.querySelector('#logodiv');
    newSlide1.removeChild(logo);

    /*CREATE SLIDE*/
    var newDiv = document.createElement("div");
    newSlide1.appendChild(newDiv);
    newDiv.className = "carousel-caption";
    newDiv.id = "slide1caption";
    var newDiv2 = document.createElement("div");
    newDiv.appendChild(newDiv2);
    newDiv2.className = "row center-block but-con";
    var newButton = document.createElement("button");
    newDiv2.appendChild(newButton);
    newButton.type = "button";
    newButton.className = "btn btn-default btn-lg";
    newButton.id = "imageone";

    /*CHANGE BUTTON STYLE*/
    var newButton1 = document.querySelector('#imageone');
    newButton1.innerHTML = "Home";
    newButton1.className = "btn btn-default btn-lg transbutton"
    var slide1Caption = document.querySelector('#slide1caption');
    slide1Caption.style.paddingBottom = "6vh";

    /*RETURN HOME*/
    document.querySelector("#imageone").addEventListener('click', browseSlideShow.goBack);
    /*END SLIDE 1*/

    /*SLIDE 2*/
    /*REMOVE HEADER AND DESCRIPTION*/
    var newSlide2 = document.querySelector('#slide2');
    newSlide2.id = browseSlideShow.photos[1];
    var slide2Caption = document.querySelector('#slide2caption');
    var slide2Header = document.querySelector('#slide2header');
    slide2Caption.removeChild(slide2Header);
    var slide2Description = document.querySelector('#slide2description');
    slide2Caption.removeChild(slide2Description);

    /*CHANGE BUTTON STYLE*/
    var newButton2 = document.querySelector('#learnmore');
    newButton2.innerHTML = "Home";
    newButton2.className = "btn btn-default btn-lg transbutton";
    slide2Caption.style.paddingBottom = "6vh";

    /*RETURN HOME*/
    document.querySelector("#learnmore").addEventListener('click', browseSlideShow.goBack);
    /*END SLIDE 2*/

    /* SLIDE 3*/
    /*REMOVE HEADER AND DESCRIPTION*/
    var newSlide3 = document.querySelector('#slide3');
    newSlide3.id = browseSlideShow.photos[2];
    var slide3Caption = document.querySelector('#slide3caption');
    var slide3Header = document.querySelector('#slide3header');
    slide3Caption.removeChild(slide3Header);
    var slide3Description = document.querySelector('#slide3description');
    slide3Caption.removeChild(slide3Description);

    /*CHANGE BUTTON STYLE*/
    var newButton3 = document.querySelector('#browse');
    newButton3.innerHTML = "Home";
    newButton3.className = "btn btn-default btn-lg transbutton";
    slide3Caption.style.paddingBottom = "6vh";

    /*RETURN HOME*/
    document.querySelector("#browse").addEventListener('click', browseSlideShow.goBack);
    /*END SLIDE 3*/

    /*SLIDE 4*/
    /*CREATE SLIDE*/
    var newItem = document.querySelector("#mothership");
    var slideDiv = document.createElement("div");
    newItem.appendChild(slideDiv);
    slideDiv.className = "item slides";
    slideDiv.id = "slide10";
    var newDiv = document.createElement("div");
    slideDiv.appendChild(newDiv);
    newDiv.className = "carousel-caption";
    newDiv.id = "slide4caption";
    var newDiv2 = document.createElement("div");
    newDiv.appendChild(newDiv2);
    newDiv2.className = "row center-block but-con";
    var newButton = document.createElement("button");
    newDiv2.appendChild(newButton);
    newButton.type = "button";
    newButton.className = "btn btn-default btn-lg";
    newButton.id = "imagefour";

    /*CHANGE BUTTON STYLE*/
    var newButton4 = document.querySelector('#imagefour');
    newButton4.innerHTML = "Home";
    newButton4.className = "btn btn-default btn-lg transbutton"
    var slide4Caption = document.querySelector('#slide4caption');
    slide4Caption.style.paddingBottom = "6vh";

    /*ADD CAROUSEL INDICATOR*/
    var carIndicator = document.querySelector("#dots");
    var newListItem = document.createElement("li");
    carIndicator.appendChild(newListItem);
    newListItem.setAttribute("data-target", "#carousel-example-generic");
    newListItem.setAttribute("data-slide-to", "3");

    /*RETURN HOME*/
    document.querySelector("#imagefour").addEventListener('click', browseSlideShow.goBack);
    /*END SLIDE 4*/

    /*SLIDE 5*/
    /*CREATE SLIDE*/
    var newItem = document.querySelector("#mothership");
    var slideDiv = document.createElement("div");
    newItem.appendChild(slideDiv);
    slideDiv.className = "item slides";
    slideDiv.id = "slide11";
    var newDiv = document.createElement("div");
    slideDiv.appendChild(newDiv);
    newDiv.className = "carousel-caption";
    newDiv.id = "slide5caption";
    var newDiv2 = document.createElement("div");
    newDiv.appendChild(newDiv2);
    newDiv2.className = "row center-block but-con";
    var newButton = document.createElement("button");
    newDiv2.appendChild(newButton);
    newButton.type = "button";
    newButton.className = "btn btn-default btn-lg";
    newButton.id = "imagefive";

    /*CHANGE BUTTON STYLE*/
    var newButton5 = document.querySelector('#imagefive');
    newButton5.innerHTML = "Home";
    newButton5.className = "btn btn-default btn-lg transbutton"
    var slide5Caption = document.querySelector('#slide5caption');
    slide5Caption.style.paddingBottom = "6vh";

    /*ADD CAROUSEL INDICATOR*/
    var carIndicator = document.querySelector("#dots");
    var newListItem = document.createElement("li");
    carIndicator.appendChild(newListItem);
    newListItem.setAttribute("data-target", "#carousel-example-generic");
    newListItem.setAttribute("data-slide-to", "4");

    /*RETURN HOME*/
    document.querySelector("#imagefive").addEventListener('click', browseSlideShow.goBack);
    /*END SLIDE 5*/

  },
  goBack: function() {
    location.reload();
  }
};


var learnMoreSlideShow = {
  photos: ["slide7","slide8","slide9"],
  startSlideShow: function() {
    /*SLIDE 1*/
    /*REMOVE LOGO*/
    var newSlide1 = document.querySelector('#slide1');
    newSlide1.id = learnMoreSlideShow.photos[0];
    var logo = document.querySelector('#logodiv');
    newSlide1.removeChild(logo);

    /*CREATE SLIDE*/
    var newDiv = document.createElement("div");
    newSlide1.appendChild(newDiv);
    newDiv.className = "carousel-caption";
    newDiv.id = "slide1caption";
    var newHeader = document.createElement("h1");
    newDiv.appendChild(newHeader);
    newHeader.id = "slide1header";
    var newDescription = document.createElement("p");
    newDiv.appendChild(newDescription);
    newDescription.id = "slide1description";
    var newDiv2 = document.createElement("div");
    newDiv.appendChild(newDiv2);
    newDiv2.className = "row center-block but-con";
    var newButton = document.createElement("button");
    newDiv2.appendChild(newButton);
    newButton.type = "button";
    newButton.className = "btn btn-default btn-lg";
    newButton.id = "imageone"

    /*CHANGE BUTTON STYLE*/
    var newButton1 = document.querySelector('#imageone');
    newButton1.innerHTML = "Home";
    newButton1.className = "btn btn-default btn-lg transbutton"

    /*ADD SLIDE CONTENT*/
    var slide1Header = document.querySelector('#slide1header');
    slide1Header.innerHTML = "Boost Local Economy";
    var slide1Description = document.querySelector('#slide1description');
    slide1Description.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    /*RETURN HOME*/
    document.querySelector("#imageone").addEventListener('click', learnMoreSlideShow.goBack);
    /*END SLIDE 1*/

    /*SLIDE 2*/
    /*CHANGE BUTTON STYLE*/
    var newButton2 = document.querySelector('#learnmore');
    newButton2.innerHTML = "Home";
    newButton2.className = "btn btn-default btn-lg transbutton"

    /*ADD SLIDE CONTENT*/
    var newSlide2 = document.querySelector('#slide2');
    newSlide2.id = learnMoreSlideShow.photos[1];
    var slide2Header = document.querySelector('#slide2header');
    slide2Header.innerHTML = "Support Local Farms";
    var slide2Description = document.querySelector('#slide2description');
    slide2Description.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    /*RETURN HOME*/
    document.querySelector("#learnmore").addEventListener('click', learnMoreSlideShow.goBack);
    /*END SLIDE 2*/

    /*SLIDE 3*/
    /*CHANGE BUTTON STYLE*/
    var newButton3 = document.querySelector('#browse');
    newButton3.innerHTML = "Home";
    newButton3.className = "btn btn-default btn-lg transbutton"

    /*ADD SLIDE CONTENT*/
    var newSlide3 = document.querySelector('#slide3');
    newSlide3.id = learnMoreSlideShow.photos[2];
    var slide3Header = document.querySelector('#slide3header');
    slide3Header.innerHTML = "Less Waste, More Freshness";
    var slide3Description = document.querySelector('#slide3description');
    slide3Description.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    /*RETURN HOME*/
    document.querySelector("#browse").addEventListener('click', learnMoreSlideShow.goBack);
    /*END SLIDE 3*/

  },
  goBack: function() {
    location.reload();
  }
};

function main(){
  document.querySelector("#browse").addEventListener('click', browseSlideShow.startSlideShow);
  document.querySelector("#learnmore").addEventListener('click', learnMoreSlideShow.startSlideShow);
}

main();
