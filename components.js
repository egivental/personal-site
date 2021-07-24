function loadNav(prefix) {

    let navbar = document.createElement("div");
    navbar.id = "dropdown";

    let navOptions = 
    [
        {
            Name: "Home",
            url: "index.html"
        },
        {
            Name: "Projects",
            url: "projects.html"
        },
        {
            Name: "Interests",
            url: "interests.html"
        },
        {
            Name: "Documents",
            url: "documents.html",
        },
        {
            Name: "Contact Me",
            url: "contact.html"
        },

    ]

    navOptions.forEach((element) => {
        let newChild = document.createElement("div");
        newChild.className = "dropdownOption";
        newChild.innerHTML = element.Name;
        newChild.onclick = () => window.location = prefix + element.url;
        navbar.appendChild(newChild);
    })
    document.body.insertBefore(navbar, document.body.firstChild)
}

if (window.location.href.includes("project-pages")) {
    loadNav("../");
} else {
    loadNav("")
}
