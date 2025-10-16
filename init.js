
window.addEventListener('resize', () => {realignPerformanceText();});

let cards = [
    {
        name: "Arvin Omidvar",
        img: "arvino.jpg",
        instrument: "Trumpet",
        icon: "🎺",
        desc: "Our first trumpet player has an excellent variety of skills in many different brass instruments. He finds and chooses repertoire for the ensemble, generates different ideas, and adds a bright beautiful sound to the mix.",
        detailedDesc: `<p>An extremely reliant and skilled player, our first trumpet player has experience in all fields of brass. He can create a variety of sound, ranging from bright sound to rip through the quintet to beautiful dark tone! With a deep passion for music, Arvin makes sure to keep the quintet enthusiastic and is a great addition.</p>
                    <br>
                    <p>Arvin is involved in many music-related extracurriculars aside from Brassquake. He is a trumpet player in the Toronto Youth Wind Orchestra, plays in a handful of wind bands and jazz combos, and has a Persian ensemble called "Maze". Arvin also works out and goes to the gym, lifting weights and keeping fit.</p>
                    <br>
                    <p>Starting piano at age 7, Arvin was quickly pulled in by the world of music. He played piano for around 3 years, and then played the flute during grades 6 to 8. In the middle of grade 8, he explored a multitude of brass instruments such as the tuba, eventually settling on the trumpet.</p>
                    <br>
                    <p><strong>"To be the best, you must first believe you're the best"</strong></p>`
    },
    {
        name: "Alex Uchida",
        img: "alex.JPEG",
        instrument: "Trumpet",
        icon: "🎺",
        desc: "Our second trumpet player is a skilled and highly reliant player, using her tonal sound to add beauty to the quintet. An extremely generous person as well, as Alex always lends a helping hand to the quintet.",
        detailedDesc: `<p>Playing trumpet for 4 years, our second player is an extremely talented and kind individual. She has a love for Tim Horton's and Animal Crossing as well. Alex has a deep passion for music and the trumpet, providing the quintet with a beautiful tonal sound through her playing. A highly-reliant player, Alex is sure to impress!</p>
                <br>
                <p>Alex loves to draw and create fun animations in her free time. She also enjoys video games, playing Minecraft to pass the time. A great photographer and video editor as well, and on top of it all, Alex has a sharp mind, being an avid escape room enjoyer.</p>
                <br>
                <p>In grade 6, Alex had a strong liking for percussion instruments, and really wanted to play percussion. However, she changed her choice and has been playing trumpet since grade 6. She did not explore any other instruments, as she had lots of love for the trumpet.</p>
                <br>
                <p><strong>"✨Thousands of light houses stuck at the end of the sky✨" - River Wyles From To The Moon</strong></p>`
    },
    {
        name: "Arwen Leong",
        img: "ArwenImage.png",
        instrument: "French Horn",
        icon: "📯",
        desc: "Bridging the gap between the high and low voices, our french horn player has wonderful harmonies to show. Arwen brings lots of energy to the quintet with her vibrant and outgoing personality, always lightening the mood.",
        detailedDesc: `<p>Playing the most difficult brass instrument of them all, Arwen displays wonderful skill playing the French Horn. Even though she has limited experience with only one year of playing, Arwen quickly surpassed all of her peers through sheer determination and practice. She is a great addition to the ensemble and always nails her parts.</p>
                <br>
                <p>Arwen loves sports! Outside of the quintet and her musical time, Arwen plays sports such as soft ball and football. She is extremely passionate about these sports and also extermely talented, winning many gold medals and MVP awards in her games.</p>
                <br>
                <p>Starting her musical journey with the piano, Arwen played piano for 7 years before giving wind instruments a try. She then gave some time to both woodwind and brass instruments, spending time with the flute and the trumpet. She eventually found her love for the French Horn and has been playing it ever since.</p>
                <br>
                <p><strong>"If you can't beat them, eat them"</strong></p>`
    },
    {
        name: "Brian Weng",
        img: "BrianImage.JPG",
        instrument: "Trombone",
        icon: "🎺",
        desc: "Adding a unique sound and texture to the band, Brian always nails his parts, all while giving the band a great time through his high energy and funny personality. Always adds something interesting to the band!",
        detailedDesc: `<p>Known for being creative and special from his friends in a good and bad way, although he enjoys music a lot, our trombone player does have a life that isn't compleatly focused in music. He does taekwondo has a hobby and is also chronically online.  </p>
                <br>
                <p> He is the second trombone in a Trombone quartet called "Trombone Trombone Trombone Trombone", a trombone quartet from Dr. G.W. Williams Secondary School. </p> 
                <br>
                <p>Musical journey:Classically trained piano student for 10 years. Trombone player for ~3 years.</p>
                <br>
                <p><strong>"5th position is not real"</strong></p>`
        
    },
    {
        name: "Nancy Qiu",
        img: "NancyImage.JPG",
        instrument: "Tuba",
        icon: "🎺",
        desc: "Providing a  big, tonal, and a great bass sound to Brassquake, Nancy never fails to impress the audience and the band! She consistently practices her parts, and creates a positive and welcoming environment for the band!",
        detailedDesc: `<p>Small girl play big instrument.</p>
                <br>
                <p>Extracurriculars (not nessecarily music)</p>
                <br>
                <p>Musical journey:</p>
                <br>
                <p><strong>A quote from them:</strong></p>`
    }
];

let performances = [
    {
        date: "October 24th, 2025",
        location: "The Residences on Yonge, 15520 Yonge St, Aurora, ON",
        summary: "One-hour performance at a retirement home along with many other amazing bands!",
        details: "Backed by the non-profit organization 'The Chords of Care', Brassquake will be performing at a local retirement home, giving a great experience to everyone who watches! With new and intriguing repertoire, you are sure to have a great time!",
        status: "upcoming"
    },
    {
        date: "October 17th, 2025",
        location: "Dr. G.W. Williams Secondary School",
        summary: "Open mic performance! It's free for all audiences, so make sure to come by and watch Brassquake play some fun repertoire!",
        details: "Open mic performance! It's free for all audiences, so make sure to come by and watch Brassquake play some fun repertoire! Yes indeed you should!",
        status: "upcoming",
        photos: [
            {
                title: "⭐⭐",
                file: "images/performance-2.jpg"
            },
        ],
        videos: [
            {
                title: "Bolero - David Marlatt",
                url: "https://www.youtube.com/embed/Cti8e4lQblw?si=6z6wYIRd0vkanALu"
            },
        ]
    },  
    {
        date: "July 26th, 2025",
        location: "Aurora Town Square",
        summary: "Outdoor concert for a live audience. Playing over 30 minutes of repertoire, the people of Aurora greatly enjoyed the band!",
        details: "Outdoor concert for a live audience. Playing over 30 minutes of repertoire, the people of Aurora greatly enjoyed the band! Yes indeed we did!",
        status: "past",
        videos: [
            {
                title: "Bolero - David Marlatt",
                url: "https://www.youtube.com/embed/Cti8e4lQblw?si=6z6wYIRd0vkanALu"
            },
            {
                title: "Pride and Valour - Ryan Meeboer",
                url: "https://www.youtube.com/embed/ve_6N2liHjY?si=v6jKJroCLKBkOQUL"
            }
        ]
    },
   
    {
        date: "May 30th, 2025",
        location: "Dr. G.W. Williams Secondary School",
        summary: "Performance for many past graduates of G.W. as a celebration of the school move. Over an hour of repertoire, the alumni had a great time!",
        details: "Performance for many past graduates of G.W. as a celebration of the school move. Over an hour of repertoire, the alumni had a great time! They did indeed!",
        status: "past",
        photos: [
            {
                title: "The Brassquake Team Taking A Fun Break!",
                file: "images/1NEW-IMG_0090.JPG"
            },
            {
                title: "In The Frame: Alex & Arwen!",
                file: "images/AlumniPerformance1.jpg"
            },
            {
                title: "In The Frame: Arvin!",
                file: "images/IMG_9987.JPG"
            },
            {
                title: "In The Frame: Brian!",
                file: "images/IMG_0081.JPG"
            },
            {
                title: "In The Frame: Arwen, Nancy & Brian!",
                file: "images/AlumniPerformance2.jpg"
            },
            {
                title: "In The Frame: Alex!",
                file: "images/IMG_9986.JPG"
            },
        ]
    },
];

function makeCards() {
    for (let i = 0; i < cards.length; i++) {
        document.querySelector('#members-grid').insertAdjacentHTML('beforeend', `
            <div class="member-card" onclick="changePage('page=member-detail-page&member=${cards[i].name.toLowerCase().replace(/\s+/g, '-')}')">
                <span class="instrument-icon">${cards[i].icon}</span>
                <div class="member-name">${cards[i].name}</div>
                <div class="member-instrument">${cards[i].instrument}</div>
                <div class="member-description">${cards[i].desc}</div>
            </div>
        `);
    }
}

function memberDetails() {
    for (let i = 0; i < cards.length; i++) {
        document.querySelector('#member-detail-page').insertAdjacentHTML('beforeend', `
            <section id="${cards[i].name.toLowerCase().replace(/\s+/g, '-')}-detail" class="section hidden">
                <div class="member-detail">
                    <a href="#" class="back-button" onclick="changePage('page=members')">← Back to Members</a>
                    <span class="instrument-icon">${cards[i].icon}</span>
                    <h2>${cards[i].name}</h2>
                    <div class="member-instrument">${cards[i].instrument}</div>
                    <br>
                    <div style="display: flex; flex-direction: row; gap: 20px; align-items: center;">
                        <div class="image-container" style="width: 50%; text-align: center; margin: 0 100px;">
                            <img class="member-image" src="images/${cards[i].img}" alt="${cards[i].name}" style="width: 100%; height: auto;">
                        </div>
                        <div class="member-detailed-description"style="width: 50%; text-align: left; display: flex; flex-direction: column; align-items: center;">
                            <p>${cards[i].detailedDesc}</p>
                        </div>
                    </div>
                </div>
            </section>
        `);
    }
}

function makePerformances() {
    for (let i = 0; i < performances.length; i++) {
        const perf = performances[i];
        const perfId = `${perf.location}-${perf.date}`.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');

        document.querySelector('#performance-grid').insertAdjacentHTML('beforeend', `
            <div class="member-card" onclick="changePage('page=performance-detail-page&performance=${perfId}')">
                <div class="image-container">
                ${perf.status === "upcoming" ? '<div class="status-tag">Upcoming</div>' : ''}
                    <img class="member-image" src="images/performance-${(performances.length-1)-i}.jpg" alt="${perf.location}">
                </div>
                <div class="member-name">${perf.location}</div>
                <div class="member-instrument">${perf.date}</div>
                <div style="display: flex; justify-content: flex-start; align-items: flex-start;">${perf.summary || 'Details coming soon!'}</div>
            </div>
        `);
    }
}

function performanceDetails() {
    for (let i = 0; i < performances.length; i++) {
        const perf = performances[i];
        const perfId = `${perf.location}-${perf.date}`.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');

        document.querySelector('#performance-detail-page').insertAdjacentHTML('beforeend', `
            <section id="${perfId}-detail" class="section hidden">
                <div class="member-detail">
                    <a href="#" class="back-button" onclick="changePage('page=performances')">← Back to Performances</a>
                    <h2>${perf.location}</h2>
                    <div class="member-instrument">${perf.date}</div>
                    <br>
                    <p style="margin-bottom: 2rem;">${perf.details || 'Details coming soon!'}</p>
                </div>
        
                <!-- Move media outside of .member-detail -->
                <div style="width: 100%; max-width: 1300px; margin: 0 auto;">
                    <div class="member-detailed-description" style="display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center; align-items: flex-start;">
                        ${(perf.videos && perf.videos.length > 0
                            ? perf.videos.map(video => `
                                <div style="flex: 0 1 600px; max-width: 600px;">
                                    <h3 style="color: #ffd700; margin-bottom: 0.5rem; text-align: center;">${video.title}</h3>
                                    <iframe width="100%" height="315" src="${video.url}" frameborder="0" allowfullscreen style="border: 2px solid #ffd700; border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); background-color: rgba(0, 0, 0, 0.2);"></iframe>
                                </div>
                            `).join('')
                            : '') +
                            
                            (perf.photos && perf.photos.length > 0
                            ? perf.photos.map(photo => `
                                <div style="flex: 0 1 600px; max-width: 600px;">
                                    <h3 style="color: #ffd700; margin-bottom: 0.5rem; text-align: center;">${photo.title}</h3>
                                    <img src="${photo.file}" alt="${photo.title}" style="width: 100%; border: 2px solid #ffd700; border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); background-color: rgba(0, 0, 0, 0.2);">
                                </div>
                            `).join('')
                            : '') ||
                        
                            '<p><strong>Media:</strong> Coming soon!</p>'
                        }
                    </div>
                </div>
            </section>
        `);
    }
}

makeCards();
memberDetails();
makePerformances();
performanceDetails();
// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
    });
});

// Create floating musical notes
function createFloatingNotes() {
    const notesContainer = document.querySelector('.music-notes');
    const notes = ['♪', '♫', '♬', '♩', '♭', '♯', '𝄞'];

    for (let i = 0; i < 15; i++) {
        const note = document.createElement('div');
        note.className = 'note';
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        note.style.left = Math.random() * 100 + '%';
        note.style.top = Math.random() * 100 + '%';
        note.style.animationDelay = Math.random() * 6 + 's';
        note.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem';
        notesContainer.appendChild(note);
        console.log('Creating note:', note.textContent);
    }
}

// Add some interactive effects
document.querySelectorAll('.member-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

function alignPerformanceText() {
    const cards = document.querySelectorAll("#performance-grid>.member-card");
    if (!cards.length) return;

    const numChildren = cards[0].children.length; // assume all cards have same number of children

    for (let i = 0; i < numChildren; i++) {
        // Step 1: find max offsetHeight for this child index
        let maxHeight = 0;

        cards.forEach(card => {
            const child = card.children[i];
            if (child.offsetHeight > maxHeight) {
                maxHeight = child.offsetHeight;
            }
        });

        console.log(`Max height for child index ${i}: ${maxHeight}`);

        // Step 2: apply marginTop to align this child across all cards
        cards.forEach(card => {
            const child = card.children[i];
            child.style.height = `${maxHeight}px`;
        });
    }
}


// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    createFloatingNotes();
    updatePage();
    window.scrollTo(0, 0);

    requestAnimationFrame(() => {
        alignPerformanceText();
    });
});
