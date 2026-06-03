class Project {
    constructor(id ,name, description, imageLink, url, github) {
        this.id = id,
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