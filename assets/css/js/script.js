document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-theme");

    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            document.documentElement.style.setProperty('--bg-color', '#f5f5f5');
            document.documentElement.style.setProperty('--text-color', '#121212');
            document.documentElement.style.setProperty('--nav-bg', '#ffffff');
            document.documentElement.style.setProperty('--footer-bg', '#eeeeee');
            toggleBtn.textContent = "☀️";
        } else {
            document.documentElement.style.setProperty('--bg-color', '#121212');
            document.documentElement.style.setProperty('--text-color', '#ffffff');
            document.documentElement.style.setProperty('--nav-bg', '#1e1e1e');
            document.documentElement.style.setProperty('--footer-bg', '#222');
            toggleBtn.textContent = "🌙";
        }
    });
});
