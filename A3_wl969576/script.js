function setTheme(scheme) {
    var body = document.body;

    body.classList.remove("light", "ocean");

    if (scheme === "light") {
        body.classList.add("light");
    } else if (scheme === "ocean") {
        body.classList.add("ocean");
    }

    localStorage.setItem("brianTheme", scheme);

    var buttons = document.querySelectorAll(".theme-btn");
    buttons.forEach(function (btn) {
        btn.classList.toggle("active", btn.getAttribute("data-theme") === scheme);
    });
}


function restoreTheme() {
    var saved = localStorage.getItem("brianTheme") || "dark";
    setTheme(saved);
}


function showNotification(message) {
    var banner  = document.getElementById("notification-banner");
    var msgSpan = document.getElementById("notification-msg");
    if (!banner || !msgSpan) return;

    msgSpan.textContent = message;
    banner.classList.add("show");

    setTimeout(function () {
        dismissNotification();
    }, 4000);
}


function dismissNotification() {
    var banner = document.getElementById("notification-banner");
    if (banner) banner.classList.remove("show");
}


function greetVisitor() {
    var hasVisited = localStorage.getItem("brianPortfolioVisited");

    if (hasVisited) {
        showNotification("Welcome back to Brian's Portfolio!");
    } else {
        localStorage.setItem("brianPortfolioVisited", "true");
        showNotification("Welcome to Brian Bui's Portfolio!");
    }
}


function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (!sidebar) return;

    sidebar.classList.toggle("collapsed");

    var isCollapsed = sidebar.classList.contains("collapsed");
    localStorage.setItem("brianSidebar", isCollapsed ? "collapsed" : "open");
}


function restoreSidebar() {
    var saved   = localStorage.getItem("brianSidebar");
    var sidebar = document.getElementById("sidebar");
    if (!sidebar) return;

    if (saved === "collapsed") {
        sidebar.classList.add("collapsed");
    }
}


function initBackToTop() {
    var btn = document.getElementById("back-to-top");
    if (!btn) return;

    window.addEventListener("scroll", function () {
        btn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    btn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


function updateGreeting() {
    var input = document.getElementById("name-input");
    var greetingText = document.getElementById("greeting-text");
    if (!input || !greetingText) return;

    var name = input.value.trim();

    if (name.length > 0) {
        greetingText.textContent = "Hello, " + name + "!";
    } else {
        greetingText.textContent = "";
    }
}


function handleFormSubmit(event) {
    event.preventDefault();

    var name    = document.getElementById("contact-name").value.trim();
    var email   = document.getElementById("contact-email").value.trim();
    var message = document.getElementById("contact-message").value.trim();

    
    if (name === "" || email === "" || message === "") {
        showNotification("Please fill out all required fields.");
        return false;
    }

    
    showNotification("Thanks, " + name + "! Your message has been received.");

    
    document.getElementById("contact-form").reset();

    return false;
}


document.addEventListener("DOMContentLoaded", function () {
    restoreTheme();
    restoreSidebar();
    if (window.location.pathname.endsWith("index.html") ||
        window.location.pathname === "/" ||
        window.location.pathname.endsWith("/")) {
        greetVisitor();
    }
    initBackToTop();
});