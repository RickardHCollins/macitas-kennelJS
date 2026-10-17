/* ==========================================
   TASK 1: Hello, JavaScript!
   ========================================== */
function showMessage() {
    alert("Hello, JavaScript!");
}

/* ==========================================
   TASK 2: Slumpa fram en hund på startsidan
   ========================================== */
function showRandomDog() {
    const container = document.getElementById("random-dog-container");
    if (!container) return; // Körs bara om vi är på startsidan där rutan finns

    const dogs = [
        {
            name: "Brasse",
            image: "brasse.jpeg",
            alt: "Svart labrador hane vid namn Brasse",
            desc: "En trygg och stabil hane som älskar apportering och skogspromenader."
        },
        {
            name: "Boss",
            image: "Boss.jpg",
            alt: "Svart labrador hane vid namn Boss",
            desc: "Vår yngsta förmåga med mycket energi och ett hjärta av guld. Tränas i viltspår."
        },
        {
            name: "Jasmine",
            image: "JasmineNoir.jpeg",
            alt: "Svart labrador tik Jasmine Noir",
            desc: "Svart tik med bruna anlag som är en fantastisk familjehund och tävlingskamrat."
        }
    ];

    const randomIndex = Math.floor(Math.random() * dogs.length);
    const selectedDog = dogs[randomIndex];

    container.innerHTML = `
        <img src="${selectedDog.image}" alt="${selectedDog.alt}" class="random-dog-img">
        <div class="random-dog-text">
            <h3>${selectedDog.name}</h3>
            <p>${selectedDog.desc}</p>
        </div>
    `;
}

/* ==========================================
   TASK 3: JavaScript och DOM (2 funktioner)
   ========================================== */

// Funktion 1: Ändra utseende på toppmenyn med onmouseover och onmouseout
function initMenuHover() {
    const navLinks = document.querySelectorAll("nav a");
    
    navLinks.forEach(function(link) {
        link.onmouseover = function() {
            this.style.backgroundColor = "#F5F5DC";
            this.style.color = "#2E5936";
            this.style.borderRadius = "4px";
        };
        link.onmouseout = function() {
            this.style.backgroundColor = "transparent";
            this.style.color = "white";
        };
    });
}

// Funktion 2: Ge visuell respons i formulärfält med onfocus och onblur
function initFormFocus() {
    const formInputs = document.querySelectorAll(".contact-form input[type='text'], .contact-form input[type='email'], .contact-form textarea");
    
    formInputs.forEach(function(input) {
        input.onfocus = function() {
            this.style.backgroundColor = "#eef5ef";
            this.style.borderColor = "#2E5936";
            this.style.outline = "2px solid #2E5936";
        };
        input.onblur = function() {
            this.style.backgroundColor = "white";
            this.style.borderColor = "#ccc";
            this.style.outline = "none";
        };
    });
}

// Kör Task 2 och Task 3 när sidan har laddats
window.addEventListener("DOMContentLoaded", function() {
    showRandomDog();
    initMenuHover();
    initFormFocus();
});

/* ==========================================
   TASK 4: jQuery (2 funktioner)
   ========================================== */
$(document).ready(function() {
    
    // jQuery Funktion 1: Visa/dölj hälsotabeller på hundsidan med slideToggle()
    $(".toggle-table-btn").click(function() {
        $(this).next("table").slideToggle(400);
    });

    // jQuery Funktion 2: Ändra opacitet på galleribilder med fadeTo()
    $(".gallery-grid img").hover(
        function() {
            $(this).fadeTo(200, 0.6);
        },
        function() {
            $(this).fadeTo(200, 1.0);
        }
    );

});
