let navContent = ''
for ( let project of projects ) {
    navContent += `<a id="${project.slug}" class="name">${project.title}</a>,&nbsp;`;
}

document.querySelector('p.nav').innerHTML = navContent;

let nav = document.querySelector('p.nav')
let links = document.querySelectorAll('p.nav a')

for (let link of links) {
    link.addEventListener('click', (e) => {
        links.forEach(element => element.classList.remove('bold'))
        link.classList.add('bold')
        window.scrollTo(0, 0)
        let projectSlug = link.id
        let index = projects.findIndex(project => project.slug === projectSlug)
        // console.log(index)
        renderProject(index)
    })
}

nav.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains("name")) {
        let projectSlug = e.target.id
        let index = projects.findIndex(project => project.slug === projectSlug)
        renderDescription(index)
        document.querySelector('article.description').style.display = 'block'
    }
})

nav.addEventListener('mouseout', () => {
    document.querySelector('article.description').style.display = 'none'
})

function renderDescription(index) {
    document.querySelector('article.description').innerHTML = `
        <p class="info">${projects[index].description}</p>
    `
}

function renderProject(index) {
    if (projects[index].mode === "dark") {
        document.querySelector('header').classList.add("dark-mode")
        document.querySelector('main').classList.add("dark-mode")
        document.querySelector('body').classList.add("dark-mode")
    } else {
        document.querySelector('header').classList.remove("dark-mode")
        document.querySelector('main').classList.remove("dark-mode")
        document.querySelector('body').classList.remove("dark-mode")
    }

    let coverImage = ``
    let coverLink = ``
    let imageLink = ``
    let projectContent = ``

    if (projects[index].cover[1] === "image") {
        coverImage = `<img src="${projects[index].cover[0]}" />`
    } else if (projects[index].cover[1] === "video") {
        coverImage = `
            <video class="${projects[index].cover[2]}" loop muted autoplay playsinline>
                <source src="${projects[index].cover[0]}" type="video/mp4">
            </video>
        `
    }

    if (projects[index].coverLink.length > 0) {
        coverLink = `<p><a href="${projects[index].coverLink[0]}" target="_blank">${projects[index].coverLink[1]}</a></p>`
    }

    if (projects[index].cover.length > 0) {
        projectContent = `
            <div class="cover-img img-wrap">
                ${coverImage}
                ${coverLink}
            </div>
        `
    }
    
    if (projects[index].urls.length > 0) {
        for ( let url of projects[index].urls ) {
            imageLink = ``
            if (url.length > 3) {
                imageLink = `<p><a href="${url[3]}" target="_blank">${url[4]}</a></p>`
            }
            if (url[1] === 'image') {
                projectContent += `
                    <div class="img-wrap">
                        <img src="${url[0]}" />
                        ${imageLink}
                    </div>
                `;
            } else if (url[1] === 'video') {
                projectContent += `
                    <div class="video-wrap">
                        <video class="${url[2]}" loop muted autoplay playsinline>
                            <source src="${url[0]}" type="video/mp4">
                        </video>
                        ${imageLink}
                    </div>
                `;
            }
            
        }
    }
  
    document.querySelector('main.project-container').innerHTML = projectContent

}
