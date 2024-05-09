$(document).ready(function(){
    $("#toggleBanner").click(function(){
        $(".banner2").slideToggle();
        $(this).toggleClass('open');
    });
    $("#contactbutton").click(function(){
        $("#contactform").slideToggle();
    });
    $("input").focusin(function() {
        $(this).css("background-color", "#169001bf");
      });
      $("input").focusout(function() {
        $(this).css("background-color", "#FFFFFF");
      });
      $("textarea").focusin(function() {
        $(this).css("background-color", "#169001bf");
      });
      $("textarea").focusout(function() {
        $(this).css("background-color", "#FFFFFF");
    });

    $("fieldset").focusin(function() {
        $(this).css("background-color", "#c50a2cb6");
      });
      $("fieldset").focusout(function() {
        $(this).css("background-color", "#FFFFFF");
    });


    var x = document.getElementById("location");

    navigator.geolocation.getCurrentPosition(showPosition);

    function showPosition(position) {
        "<p>Latitude: " + position.coords.latitude + "</p>" +
        "<p>Longitude: " + position.coords.longitude + "</p>";
    }


    document.addEventListener('DOMContentLoaded', function() {
        // Restore checkbox states from session storage
        for (let i = 1; i <= 11; i++) { // Assuming you have 10 ingredients
            const checkbox = document.getElementById('ingredient' + i);
            const isChecked = sessionStorage.getItem('ingredient' + i) === 'true';
            checkbox.checked = isChecked;

            // Add event listener to save checkbox state when changed
            checkbox.addEventListener('change', function() {
                sessionStorage.setItem('ingredient' + i, checkbox.checked);
            });
        }
    });

    document.getElementById('speakButton').addEventListener('click', function() {
        // Call the readAloud function with the document body, excluding buttons
        readAloud(document.body);
    });
    // Function to read the text content of an element aloud
    function readAloud(element) {
        // Create a new SpeechSynthesisUtterance object with the text content of the element
        const speech = new SpeechSynthesisUtterance(element.textContent);

        // Use the default speech synthesis voice
        speech.voice = speechSynthesis.getVoices()[0]; // You can customize the voice by setting this to a specific voice

        speech.rate = 6;

        // Speak the text content
        speechSynthesis.speak(speech);
    }

    // Show the rating popup when the page is loaded
    $('#ratingPopup').fadeIn();

    // Handle star click event
    $('.star').click(function() {
        $(this).addClass('active').prevAll('.star').addClass('active');
        $(this).nextAll('.star').removeClass('active');
    });

    // Handle submit button click event
    $('#submitRating').click(function() {
        var rating = $('.star.active').length;
        $("#ratingPopup").fadeOut();
        // Here you can send the rating to your server using AJAX if needed
        // For example: $.post('submit-rating.php', { rating: rating });
    });

});

window.onload = updateCounterDisplay;
function updateCounterDisplay() {
    if (localStorage.clickCountLocal) {
        document.getElementById("resultlocal").innerHTML = "You have used this recipe " + localStorage.clickCountLocal + " time(s).";
    } else {
        localStorage.setItem("clickCountLocal", 0);
    }
}

function clickCounterLocal() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickCountLocal) {
            localStorage.clickCountLocal = Number(localStorage.clickCountLocal) + 1;
        } else {
            localStorage.clickCountLocal = 1;
        }
        document.getElementById("resultlocal").innerHTML = "You have used this recipe " + localStorage.clickCountLocal + " time(s).";
    } else {
        document.getElementById("resultlocal").innerHTML = "The browser does not support local storage";

        document.getElementById("resultlocal").innerHTML = "You have used this recipe 0 time(s).";
    }
}