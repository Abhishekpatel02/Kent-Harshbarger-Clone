// ..............scroll to top button code...............
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // window.scrollTo({top: 0});
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// ............/scroll to top end..................


// .............read more read less button code..............
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("read-more-btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
//.................read more read less button code end...............


// .................form validation ............................
document.getElementById('myForm').addEventListener('submit', function(event) { 
    document.getElementById('nameError').innerText = ''; 
    document.getElementById('emailError').innerText = ''; 
    document.getElementById('phoneError').innerText = ''; 
    document.getElementById('messageError').innerText = ''; 
    document.getElementById('checkboxError').innerText = ''; 
 
    let hasErrors = false; 
 
    // Validate Name 
    const nameInput = document.getElementById('name').value.trim(); 
    if (nameInput === '') { 
        document.getElementById('nameError').innerText = 'Name is required.'; 
        hasErrors = true; 
    } 
 
    // Validate Email 
    const emailInput = document.getElementById('email').value.trim(); 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex 
    if (emailInput === '') { 
        document.getElementById('emailError').innerText = 'Email is required.'; 
        hasErrors = true; 
    } else if (!emailPattern.test(emailInput)) { 
        document.getElementById('emailError').innerText = 'Invalid email format.'; 
        hasErrors = true; 
    } 

    // validate phone number
    const phoneInput = document.getElementById('Phone').value.trim(); 
     const regex = /^(?:\+91[-\s]?)?[789]\d{9}$/; 
    if (phoneInput === '') { 
        document.getElementById('phoneError').innerText = 'Please enter a valid phone number with at least 10 characters.'; 
        hasErrors = true; 
    } else if (!regex.test(phoneInput)) { 
        document.getElementById('phoneError').innerText = 'Invalid phone number.'; 
        hasErrors = true; 
    } 
    // vallidate checkbox 
    const checkboxInput = document.getElementById('checkbox').value.trim(); 
    if (document.querySelectorAll('[type="checkbox"]:checked').length < 1) { 
        document.getElementById('checkboxError').innerText = 'please select atleast one checkbox.'; 
        hasErrors = true; 
    } 

    // vallidate massage 
    const messageInput = document.getElementById('message').value.trim(); 
    if (messageInput === '') { 
        document.getElementById('messageError').innerText = 'please provide some message.'; 
        hasErrors = true; 
    } 
 
    // Prevent form submission if there are errors 
    if (hasErrors) { 
        event.preventDefault(); 
    } 
}); 
// .................form validation end............................


// .................Recommendation section slider...................................... 
 $(document).ready(function(){
        $(".slider").bxSlider();

      });
 // ................./Recommendation section slider...................................... 
 //...................Kent-harshbarger section slider..............................
 $('.bxslider').bxSlider({
  minSlides: 6,
  maxSlides: 6,
  slideWidth: 378,
  ticker: true,
  speed: 40000,
});
//  Fancybox.bind("[data-fancybox]", {
//     Carousel: {
//     transition: "slide",
//   },
// }); 
 //.................../Kent-harshbarger section slider..............................
//....................product launches slider in about......................

  $(document).ready(function(){
   var slidesvar;
    if ($(window).width() >980) {
      slidesvar = 4;
    } else if($(window).width() > 568 && $(window).width() <=980){
        slidesvar = 2;
    }else {
        slidesvar =1;
    }
    $('.slider1').bxSlider({
        slideWidth:400,
        slideMargin: 38,
        responsive: true,
        minSlides: slidesvar,
        maxSlides: slidesvar
    });
    });
//..................../product launches slider in about......................
//.....................slick nav menu hambarger............................. 
    $(function(){
        $('#menu').slicknav({
            prependTo:'.nav-list'
        });
     });
//.....................slick nav menu hambarger............................. 
//...................Meet Kent video section.........................

$(document).ready(function(){
    $('.slider4').bxSlider({
        slideWidth: 980,
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 60,
        responsive: true,
        onSliderLoad: function() {
            if ($(window).width() > 980) {
                $('.slider4').bxSlider({
                    minSlides: 1,
                    maxSlides: 3,
                    slideWidth: 980,
                    moveSlides: 1,
                    slideMargin: 60
                });
            } else {
                $('.slider4').bxSlider({
                    minSlides: 1,
                    maxSlides: 1,
                });
            }
        }
    });
});

// video play button using jquery 
$(document).ready(function() {
  $(".play-btn").on("click", function() {
    const videoId = $(this).attr("video-id");
    $(".overlay").show();
    $(".youtubeVideo").attr("src", videoId + "?autoplay=1");
  });

  $(".close-btn").on("click", function() {
    $(".overlay").hide();
    youtubeVideo.attr("src", "");
  });

  $(".overlay").on("click", function() {
   $(".overlay").hide();
    $(".youtubeVideo").attr("src", "");
  });
});

// video play button using javascript
// const playBtn = document.querySelectorAll(".play-btn");
// const overlay = document.querySelector(".overlay");
// const youtubeVideo = document.querySelector(".youtubeVideo");
// const closeBtn = document.querySelector(".close-btn");

// for (let i = 0; i < playBtn.length; i++) {
//   playBtn[i].addEventListener("click", function(event) {
//     const videoId = this.getAttribute("video-id");
//     overlay.style.display = "block";
//     youtubeVideo.src =  videoId + "?autoplay=1";
//   });
// }
// closeBtn.addEventListener("click", function(event) {
//   overlay.style.display = "none";
//   youtubeVideo.src = ""; 
// });
// overlay.addEventListener("click", function(event) {
//     overlay.style.display = "none";
//     youtubeVideo.src = "";
// });

//.................../Meet Kent video section.........................

// ......................Copyright date year.........................
const date = new Date();
document.getElementById("copyright-year").innerHTML = date.getFullYear();
// ......................Copyright date year.........................



    
