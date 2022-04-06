function renderAllChannels() {
    
    let contentsURL = `https://api.are.na/v2/channels/000projects?sort=position`;
    
    // Fetch the channel data from the Are.na API
    fetch(contentsURL)
        // Grab the response in JSON
        .then(response => response.json())
    
        .then(channel => {
            // console.log(channel)
        
            document.querySelector('p.nav').innerHTML = `
                ${channel.contents
                .map(block => {
                    return `
                        ${(() => {
                            if ( block.class === 'Channel') {
                                return `<a id="${block.slug}" class="name">${block.title}</a>, `
                            }
                        })()}
                    `;
                })
                .join("")}
            `;

            let nav = document.querySelector('p.nav')
            let links = document.querySelectorAll('p.nav a')

            for (let link of links) {
                link.addEventListener('click', () => {
                    links.forEach(element => element.classList.remove('bold'))
                    link.classList.add('bold')
                    window.scrollTo(0, 0)
                    let channelSlug = link.id
                    renderChannel(channelSlug)
                })
            }

            nav.addEventListener('mouseover', (e) => {
                if (e.target.classList.contains("name")) {
                    let channelSlug = e.target.id
                    renderDescription(channelSlug)
                    document.querySelector('article.description').style.display = 'block'
                }
            })
            nav.addEventListener('mouseout', () => {
                document.querySelector('article.description').style.display = 'none'
            })
        });
    
}


function renderDescription(slug) {
    
    let contentsURL = `https://api.are.na/v2/channels/${slug}?sort=position`;
    
    fetch(contentsURL)

        .then(response => response.json())
    
        .then(channel => {
            // console.log(channel)

            channel.contents.map(block => {
                if (block.position === 1 && block.class === "Text") {
                    document.querySelector('article.description').innerHTML = `
                        <p class="info">${block.description}</p>${block.content_html}
                    `
                }
            }).join("")
        });
}




function renderChannel(slug) {

    let contentsURL = `https://api.are.na/v2/channels/${slug}?sort=position`;

    fetch(contentsURL)
    .then(response => response.json())
    .then(channel => {
        // console.log(channel)

        if (channel.metadata.description === "dark") {
            document.querySelector('header').classList.add("dark-mode")
            document.querySelector('main').classList.add("dark-mode")
        } else {
            document.querySelector('header').classList.remove("dark-mode")
            document.querySelector('main').classList.remove("dark-mode")
        }

        document.querySelector('main.project-container').innerHTML = `
            ${channel.contents
            .map(block => {
                return `
                    ${(() => {
                        switch (block.class) {
                        case "Image":
                            return `
                                ${(() => {
                                    if ( block.position === 2) {
                                        return `
                                        <div class="cover-img img-wrap">
                                            <img src="${block.image.large.url}" />
                                            ${(() => {
                                                if (block.description !== null) {
                                                    let text = block.description.split("]")[0].replace('[', '')
                                                    let link = block.description.split("]")[1].replace('(', '').replace(')', '')
                                                    console.log(text)
                                                    console.log(link)
                                                    return `<p><a href="${link}" target="_blank">${text}</a></p>`
                                                }
                                            })()}
                                        </div>
                                        `
                                    } else if (block.position > 2) {
                                        return `
                                        <div class="img-wrap">
                                            <img src="${block.image.large.url}" />
                                            ${(() => {
                                                if (block.description !== null) {
                                                    let text = block.description.split("]")[0].replace('[', '')
                                                    let link = block.description.split("]")[1].replace('(', '').replace(')', '')
                                                    console.log(text)
                                                    console.log(link)
                                                    return `<p><a href="${link}" target="_blank">${text}</a></p>`
                                                }
                                            })()}
                                        </div>
                                        `
                                    }
                                })()}
                            `;
                        case "Attachment":
                            return `
                            ${(() => {
                                if (block.description === "small") {
                                    return `
                                    <div class="video-wrap">
                                        <video class="contain" loop muted autoplay playsinline>
                                            <source src="${block.attachment.url}" type="video/mp4">
                                        </video>
                                    </div>
                                    `
                                } else {
                                    return `
                                    <div class="video-wrap">
                                        <video class="cover" loop muted autoplay playsinline>
                                            <source src="${block.attachment.url}" type="video/mp4">
                                        </video>
                                        ${(() => {
                                            if (block.description !== null) {
                                                let text = block.description.split("]")[0].replace('[', '')
                                                let link = block.description.split("]")[1].replace('(', '').replace(')', '')
                                                console.log(text)
                                                console.log(link)
                                                return `<p><a href="${link}" target="_blank">${text}</a></p>`
                                            }
                                        })()}
                                    </div>
                                    `
                                }
                            })()}
                            `
                        case "Text":
                            return ``
                        };
                        
                    })()}
                `
            })
            .join("")}
        `
    })
}