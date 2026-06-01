class Project {
    constructor(name, description, imageLink, url, github) {
        this.name = name,
        this.description = description,
        this.imageLink = imageLink,
        this.github = github
        this.url = url
    }
}

export const projects = [
    new Project("Cozied", "Interior Visualization and Modelling", "", "", ""),
    new Project("Sports", "Sport Form Analysis", "", "", ""),
    new Project("Hangee", "Blending streetwear with class", "", "", "")
]