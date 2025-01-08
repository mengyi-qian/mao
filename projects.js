const projects = [
    {
        title: 'TRASH CAN',
        slug: 'trash-can',
        mode: 'light',
        cover: ['projects/trash-can/cover.jpg','image'],
        coverLink: ['https://web-trash-can.glitch.me/','Visit the website'],
        urls: [],
        description: `
            Website, 2020
            <br>
            trash-can.site is an online shared trash can. Just like the trash can in your computer, you can drag and drop any file into the trash can. When you empty it, upon a click, you’ll be deleting someone else's ‘trash’ from the server – by downloading it onto your computer.
        `,
    },
    {
        title: 'TUNNEL',
        slug: 'tunnel',
        mode: 'dark',
        cover: ['projects/tunnel/cover.mp4','video','fullscreen'],
        coverLink: ['https://vimeo.com/489297492','Watch the full video'],
        urls: [],
        description: `
            Video, 2020
            <br>
            There is a trash tunnel in my apartment building. Every time I throw my trash into it, I can hear a lasting, echoing, muffled sound from the dark, seemingly bottomless tunnel. No one living in this building ever gets to see the other side of this tunnel, as though the tunnel is the terminal of our waste, an intestinal canal of the building.
        `,
    },
    {
        title: 'PIPELINE',
        slug: 'pipeline',
        mode: 'dark',
        cover: [],
        coverLink: [],
        urls: [
            ['projects/pipeline/cover.jpg','image'],
            ['projects/pipeline/1.mp4','video','fullscreen'],
            ['projects/pipeline/2.jpg','image'],
            ['projects/pipeline/3.jpg','image','','https://churongmao.com/pipeline/','Visit the website'],
        ],
        description: `
            Website, 2021
            <br>
            A section of a metal pipeline was exposed on the edge of the pavement, decorated as an alligator. its existence reminds me of all those invisible but larger systems that are crisscrossed, interconnected, operating under the surface. I started to pay attention to pipelines in the city. As an infrastructure of the city machine, these pipelines, like extended organs of our body, spread and grow under ground without seeing the light of day.
        `,
    },
    {
        title: 'EVERYTHING’S FINE',
        slug: 'everything-s-fine',
        mode: 'dark',
        cover: ['projects/everything-s-fine/cover.mp4','video','fullscreen'],
        coverLink: ['https://vimeo.com/499393266','Watch the full video'],
        urls: [],
        description: `
            Video, 2021
            <br>
            A burst of singing coming from the air duct, And the air duct starts to make shape of letters that spells the lyrics. A workshop  presentation that never happened because of the pandemic. New Haven (In heaven), everything's fine.
        `,
    },
    {
        title: 'EXIT',
        slug: 'exit',
        mode: 'light',
        cover: ['projects/exit/cover.jpg','image'],
        coverLink: ['https://churongmao.com/exit/','Visit the website'],
        urls: [],
        description: `
            Website, 2020
            <br>
            A website about a journey of finding the exit, a constant searching for a way out. In the world of the internet you can always exit, close, delete, go back, by a simple click or press whenever you like, the esc key is always there at the top left corner of your keyboard. But there’s no way to exit from what’s happening in the real world.
        `,
    },
    {
        title: 'REFRIGERATOR',
        slug: 'refrigerator',
        mode: 'dark',
        cover: ['projects/refrigerator/cover.jpg','image'],
        coverLink: ['https://churongmao.com/refrigerator/','Visit the website'],
        urls: [
            ['projects/refrigerator/1.jpg','image'],
            ['projects/refrigerator/2.jpg','image','','https://vimeo.com/501337855','Open the book'],
            ['projects/refrigerator/3.jpg','image'],
            ['projects/refrigerator/4.jpg','image'],
        ],
        description: `
            Website, Book, Video Installation, 2020
            <br>
            The habit of constantly checking on your fridge, opening the door, scanning through every item, and staring inside. The light, the whiteness, the freshness, the order--these bring you calmness. And all this has to do with the fact that the refrigerator conceals what it stores: its white and clean exterior look is set over against its dark interior reality.
        `,
    },
    {
        title: 'PASTA',
        slug: 'pasta',
        mode: 'dark',
        cover: [],
        coverLink: [],
        urls: [
            ['projects/pasta/cover.jpg','image'],
            ['projects/pasta/1.jpg','image'],
            ['projects/pasta/2.jpg','image'],
            ['projects/pasta/3.jpg','image'],
        ],
        description: `
            Type family of 4 styles, Regular / Italic / Bold / Bold Italic, 2021
            <br>
            A type family developed from alphabet pasta.
            <br>
            (This website is set in Pasta regular and Pasta BoldOff)
            <br>
            (Available upon request)
        `,
    },
    {
        title: 'A SCREW FELL TO THE GROUND',
        slug: 'a-screw-fell-to-the-ground',
        mode: 'dark',
        cover: ['projects/a-screw-fell-to-the-ground/cover.jpg','image'],
        coverLink: [],
        urls: [
            ['projects/a-screw-fell-to-the-ground/1.mp4','video','fullscreen'],
        ],
        description: `
            Book, 2021
            <br>
            Meandering through the trivial, an anthology about small objects in daily life. <br>
            Images from Amazon product views, printed on plastic vellum by an inkjet printer. Typeset in Pasta New bold, regular and italic.
        `,
    },
    {
        title: 'NOISE',
        slug: 'noise',
        mode: 'light',
        cover: ['projects/noise/cover.jpg','image'],
        coverLink: ['https://churongmao.com/noise/','Visit the website'],
        urls: [],
        description: `
            Website, 2021
            <br>
            A website that responds to your silence.
            <br>
            The website recognizes your speech and detects the moment of pause while you are speaking – as gaps in between lines. Hover over the gap, it appears the words from my writing towards the silence that’s been pulled and inserted into the gaps – a conversation is revealed from the silence.
        `,
    },
    {
        title: 'TONGUE',
        slug: 'tongue',
        mode: 'dark',
        cover: ['projects/tongue/cover.mp4','video','fullscreen'],
        coverLink: ['https://vimeo.com/694172759','Watch the full video'],
        urls: [],
        description: `
            Book, Video, 2022
            <br>
            The record of a silent conversation between me and the lip reading AI AV–HuBERT. <br>
            Over and over, through the mutual, constant translation of me and the computer program, an unexpected dialogue was generated. In this iteration of translations, language failed us.
        `,
    },
    {
        title: 'DISTANCE WHISPER',
        slug: 'distance-whisper',
        mode: 'dark',
        cover: ['projects/distance-whisper/cover.jpg','image'],
        coverLink: [],
        urls: [
            ['projects/distance-whisper/1.jpg','image'],
            ['projects/distance-whisper/2.jpg','image'],
            ['projects/distance-whisper/3.gif','image'],
        ],
        description: `
            Installation, 2022
            <br>
            An air duct was installed on the facade of the building for passing words from one end to the other. A workshop about listening, communication and translation.
        `,
    },
    {
        title: 'IN PARENTHESES',
        slug: 'in-parentheses',
        mode: 'light',
        cover: ['projects/in-parentheses/cover.mp4','video','fullscreen'],
        coverLink: [],
        urls: [
            ['projects/in-parentheses/1.mov','video','fullscreen'],
            ['projects/in-parentheses/2.jpg','image'],
            ['projects/in-parentheses/3.jpg','image'],
            ['projects/in-parentheses/4.jpg','image'],
            ['projects/in-parentheses/5.jpg','image'],
        ],
        description: `
            Objects, Posters, 2021
            <br>
            A set of objects taken shape from the parentheses.  (in), (less), (in), (else).
            <br>
            The enclaves for the slippage and deviation of language to live in.
        `,
    },
    {
        title: 'CLOUD',
        slug: 'cloud',
        mode: 'light',
        cover: ['projects/cloud/cover.jpg','image'],
        coverLink: ['https://churongmao.com/cloud/','Visit the website'],
        urls: [],
        description: `
            Website, 2021
            <br>
            A hybrid experience of visiting the same locations from two opposite perspectives – over the cloud on a flight and on the ground surface in Google maps, based on geographic data from personal photos taken on an iPhone. Two perspectives are collaged and merged as your mouse moves, navigating on the page. In this way, you’ll be constantly shifting and transitioning between the spaces.
        `,
    },
    {
        title: 'THE STARS',
        slug: 'the-stars',
        mode: 'dark',
        cover: ['projects/the-stars/cover.jpg','image'],
        coverLink: ['https://vimeo.com/501335291','Open the book'],
        urls: [],
        description: `
            Book, 2020
            <br>
            A book project based on the research of the Chinese artists' group: The Stars Group. (星星画会). <br>
            The content came from their exhibition in 1979, that’s been reexamined under media censorship in the contemporary context. 2 books as a set paralleling each other. In the first book, all the sensitive words or parts of images are deleted from the original, left in blankness. The second book is the reverse, leaving only the sensitive content in the place where they were missing from the first book.
        `,
    },
    {
        title: 'I’M SITTING IN A ZOOM',
        slug: 'i-m-sitting-in-a-zoom',
        mode: 'dark',
        cover: ['projects/i-m-sitting-in-a-zoom/cover.mp4','video','fullscreen'],
        coverLink: ['https://vimeo.com/663147549','Watch the full video'],
        urls: [],
        description: `
            Video, 2021
            <br>
            I had a zoom meeting with myself during my 21 days of quarantine in a hotel room. During the meeting, I’m constantly seeing, and hearing the jarring echo of myself.
        `,
    },
    {
        title: 'OPEN STUDIO',
        slug: 'open-studio',
        mode: 'dark',
        cover: ['projects/open-studio/cover.mp4','video','fullscreen'],
        coverLink: [],
        urls: [
            ['projects/open-studio/1.mp4','video','fullscreen']
        ],
        description: `
            Visual Identity, 2021
            <br>
            The visual identity design for the Open Studios for Yale School of Art in collaboration with Mengjie Liu (www.mengjieliu.com). The annual event was for the first time hosted virtually due to the COVID in the year 2021. In an effort to bring back an immersive experience, and to address the sense of displacement in the nature of this event, we built a handwritten type into a scalable AR model that’s been placed in different places throughout the school space.
        `,
    },
    {
        title: 'QIQI',
        slug: 'qiqi',
        mode: 'dark',
        cover: ['projects/qiqi/cover.jpg','image'],
        coverLink: [],
        urls: [
            ['projects/qiqi/1.jpg','image'],
            ['projects/qiqi/2.jpg','image'],
            ['projects/qiqi/3.jpg','image'],
        ],
        description: `
            Visual Identity, Package Design, 2022
            <br>
            Visual identity and package design for independent jewellery brand 器炁qìqì.
        `,
    },
    {
        title: 'TRIM, FOLD, COLLATE, STITCH, DRILL, GATHER, STRING, FACE TRIM, BULK PACK, SHRED, STUFF, SEAL',
        slug: 'trim-fold-collate-stitch-drill-gather-string-face-trim-bulk-pack-shred-stuff-seal',
        mode: 'light',
        cover: ['projects/trim-fold-collate-stitch-drill-gather-string-face-trim-bulk-pack-shred-stuff-seal/cover.jpg','image'],
        coverLink: [],
        urls: [
            ['projects/trim-fold-collate-stitch-drill-gather-string-face-trim-bulk-pack-shred-stuff-seal/1.jpg','image'],
            ['projects/trim-fold-collate-stitch-drill-gather-string-face-trim-bulk-pack-shred-stuff-seal/2.jpg','image'],
            ['projects/trim-fold-collate-stitch-drill-gather-string-face-trim-bulk-pack-shred-stuff-seal/3.jpg','image'],
        ],
        description: `
            Book, 2022
            <br>
            The inflated cover of the book is made as a book pillow to hold and display the content book. It is stuffed with shredded paper from the content book. It was inspired by the book pillow from the special collection at Robert B. Haas Family Arts Library of Yale University, where this book, along with all the thesis books of Graphic Design at Yale School of Art are dedicate to. In the content book, the color bar on the edge of each page is aligned with the according color bar and the title on the cover, which will navigate the reader through each project. The name of the book reveals its production process. Through the process, the book feeds back into itself by undoing itself, and tells a story in ways that imply they might be retold differently again and again; they might be recycled and recomposed.
        `,
    },
    
]
