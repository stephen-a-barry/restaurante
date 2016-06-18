var browseSlideShow = {
  photos: ["slide4","slide5","slide6"],
  startSlideShow: function() {
    var newSlide1 = document.querySelector('#slide1');
    newSlide1.id = browseSlideShow.photos[0];
    var logo = document.querySelector('#logodiv');
    newSlide1.removeChild(logo);

    var newButton1 = document.querySelector('#browse');
    newButton1.innerHTML = "Home";
    newButton1.className = "btn btn-default btn-lg transbutton"

    document.querySelector("#browse").addEventListener('click', browseSlideShow.goBack);
    var newButton2 = document.querySelector('#learnmore');
    newButton2.innerHTML = "Home";
    document.querySelector("#learnmore").addEventListener('click', browseSlideShow.goBack);

    var newSlide2 = document.querySelector('#slide2');
    newSlide2.id = browseSlideShow.photos[1];
    var slide2Caption = document.querySelector('#slide2caption');
    newSlide2.removeChild(slide2Caption);

    var newSlide3 = document.querySelector('#slide3');
    newSlide3.id = browseSlideShow.photos[2];
    var slide3Caption = document.querySelector('#slide3caption');
    var slide3Header = document.querySelector('#slide3header');
    slide3Caption.removeChild(slide3Header);
    var slide3Description = document.querySelector('#slide3description');
    slide3Caption.removeChild(slide3Description);
  },
  goBack: function() {
    location.reload();
  }
};

var learnMoreSlideShow = {
  photos: ["slide7","slide8","slide9"],
  startSlideShow: function() {


    var newButton2 = document.querySelector('#learnmore');
    newButton2.innerHTML = "Home";
    newButton2.className = "btn btn-default btn-lg transbutton"

    var newButton3 = document.querySelector('#browse');
    newButton3.innerHTML = "Home";
    newButton3.className = "btn btn-default btn-lg transbutton"

    document.querySelector("#browse").addEventListener('click', learnMoreSlideShow.goBack);
    var newButton2 = document.querySelector('#learnmore');
    newButton2.innerHTML = "Home";
    document.querySelector("#learnmore").addEventListener('click', learnMoreSlideShow.goBack);


    var newSlide1 = document.querySelector('#slide1');
    newSlide1.id = learnMoreSlideShow.photos[0];
    var logo = document.querySelector('#logodiv');
    newSlide1.removeChild(logo);

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

    var newButton1 = document.querySelector('#imageone');
    newButton1.innerHTML = "Home";
    newButton1.className = "btn btn-default btn-lg transbutton"

    document.querySelector("#imageone").addEventListener('click', learnMoreSlideShow.goBack);

    var slide1Header = document.querySelector('#slide1header');
    slide1Header.innerHTML = "Boosts Local Economy";
    var slide1Description = document.querySelector('#slide1description');
    slide1Description.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    var newSlide3 = document.querySelector('#slide3');
    newSlide3.id = learnMoreSlideShow.photos[2];
    var slide3Header = document.querySelector('#slide3header');
    slide3Header.innerHTML = "Less Waste, More Freshness";
    var slide3Description = document.querySelector('#slide3description');
    slide3Description.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    var newSlide2 = document.querySelector('#slide2');
    newSlide2.id = learnMoreSlideShow.photos[1];
    var slide2Header = document.querySelector('#slide2header');
    slide2Header.innerHTML = "Support Local Farms";
    var slide2Description = document.querySelector('#slide2description');
    slide2Description.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
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
