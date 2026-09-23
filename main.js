const content = document.querySelector('body');

console.log("body", content);

const toggleTheme = () => {
    console.log("clicked theme button");

    if (!content) {
        console.error("Could not find <body> element.");
        return;
    }

    content.classList.toggle("dark-theme")
};

const theButton = document.getElementById("the-button");

theButton.addEventListener('click', () => {
    toggleTheme();
    theButton.classList.toggle("active");
}); 

