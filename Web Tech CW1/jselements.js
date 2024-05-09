$(document).ready(function(){
    $("#toggleBanner").click(function(){
        $(".banner2").slideToggle();
        $(this).toggleClass('open');
    });
    $("#contactbutton").click(function(){
        $("#contactform").slideToggle();
    });
    $("input").focusin(function() {
        $(this).css("background-color", "#0b4c007a");
      });
      $("input").focusout(function() {
        $(this).css("background-color", "#FFFFFF");
      });
      $("textarea").focusin(function() {
        $(this).css("background-color", "#0b4c007a");
      });
      $("textarea").focusout(function() {
        $(this).css("background-color", "#FFFFFF");
    });

    var x = document.getElementById("location");

    navigator.geolocation.getCurrentPosition(showPosition);

    function showPosition(position) {
    x.innerHTML = "<p>Latitude: " + position.coords.latitude + "</p>" +
        "<p>Longitude: " + position.coords.longitude + "</p>";
    }


    document.addEventListener('DOMContentLoaded', function() {
        // Check if form data exists in local storage
        const formData = localStorage.getItem('formData');
        if (formData) {
            // Populate form fields with stored data
            const data = JSON.parse(formData);
            document.getElementById('name').value = data.name || '';
            document.getElementById('email').value = data.email || '';
            document.getElementById('subject').value = data.subject || '';
            document.getElementById('message').value = data.message || '';
        }
    
        // Listen for form submission
        document.getElementById('contactform').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
    
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
    
            // Store form data in local storage
            localStorage.setItem('formData', JSON.stringify(formData));
    
            // Optionally, submit form data to server
            // this.submit();
    
            alert('Form data saved!');
        });
    });

    // Function to read the text content of an element aloud
    function readAloud(element) {
        // Create a new SpeechSynthesisUtterance object with the text content of the element
        const speech = new SpeechSynthesisUtterance(element.textContent);

        // Use the default speech synthesis voice
        speech.voice = speechSynthesis.getVoices()[0]; // You can customize the voice by setting this to a specific voice

        // Speak the text content
        speechSynthesis.speak(speech);
    }

    // Add click event listener to the button
    document.getElementById('speakButton').addEventListener('click', function() {
        // Call the readAloud function with the paragraph element
        readAloud(document.querySelector('*'));
    });
});