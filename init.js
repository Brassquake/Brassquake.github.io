function realignText() {
    const cards = document.querySelectorAll('.card .image-container');
    let maxHeight = 0;

    cards.forEach(imgContainer => {
        const height = imgContainer.offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    cards.forEach(imgContainer => {
        const card = imgContainer.parentElement.parentElement;
        const text = card.querySelector('.image-text');
        console.log(text);
        if (text) {
            text.style.marginTop = `${maxHeight - imgContainer.offsetHeight}px`;
        }
    });
}
window.addEventListener('load', realignText);
window.addEventListener('resize', realignText);

let cards = [
    {
        name: "Arvin Omidvar",
        img: "arvino.jpg",
        instrument: "Trumpet",
        icon: "🎺",
        desc: "Trumpet player, bugle horn player, valve trombone player, tuba player, alto sax player etc. he basically plays everything.",
        detailedDesc: `<p>Excellent preformer with crazy range. </p>
                    <br>
                    <p>Always in the trenches</p>
                    <br>
                    <p></p>
                    <br>
                    <p></p>`
    },
    {
        name: "Alex Uchida",
        img: "alex.JPEG",
        instrument: "Trumpet",
        icon: "🎺",
        desc: "Providing harmonic support and countermelodies, our second trumpet adds depth and richness to our brass sound.",
        detailedDesc: `<p>Our second trumpet is an essential voice in the Brassquake quintet, providing crucial harmonic support and beautiful countermelodies. This role requires excellent listening skills and the ability to blend seamlessly with the ensemble.</p>
                <br>
                <p>While supporting the first trumpet, our second trumpet also takes on important solo passages and helps create the rich, full sound that defines our group's character.</p>
                <br>
                <p><strong>Musical Journey:</strong> A dedicated musician with a passion for ensemble playing and collaborative music-making</p>
                <br>
                <p><strong>Favorite Pieces:</strong> Brass quintet arrangements of popular songs and jazz standards</p>`
    },
    {
        name: "Arwen Leong",
        img: "arwen.jpg",
        instrument: "French Horn",
        icon: "📯",
        desc: "The heart of our quintet, bridging the gap between high and low voices with warm, lyrical horn melodies.",
        detailedDesc: `<p>The French horn is often considered the most challenging brass instrument, and our horn player rises to meet that challenge with grace and skill. Serving as the bridge between the high trumpets and low brass, the horn adds warmth and lyrical beauty to our sound.</p>
                    <br>
                    <p>From hunting calls to romantic melodies, our French horn player brings versatility and musicality to every piece Brassquake performs.</p>
                    <br>
                    <p><strong>Musical Journey:</strong> Drawn to the French horn's unique voice and challenging technique</p>
                    <br>
                    <p><strong>Favorite Pieces:</strong> Romantic era compositions and film scores that showcase the horn's lyrical capabilities</p>`
    },
    {
        name: "Brian Weng",
        img: "",
        instrument: "Trombone",
        icon: "🎺",
        desc: "Delivering powerful bass lines and smooth glissandos, our trombonist provides the foundation for our ensemble.",
        detailedDesc: `<p>Our trombonist brings both power and finesse to Brassquake, mastering the unique slide technique that makes the trombone so distinctive. From smooth legato passages to punchy rhythmic figures, they add versatility to our ensemble.</p>
                    <br>
                    <p>The trombone's ability to play both bass and tenor lines makes our trombonist an invaluable member of the quintet, often providing crucial harmonic support and occasional melodic features.</p>
                    <br>
                    <p><strong>Musical Journey:</strong> Loves the trombone's expressive capabilities and its role in various musical styles</p>
                    <br>
                    <p><strong>Favorite Pieces:</strong> Jazz arrangements and pieces that feature the trombone's slide techniques</p>`
    },
    {
        name: "Nancy Qiu",
        img: "",
        instrument: "Tuba",
        icon: "",
        desc: "The foundation of Brassquake! Our tuba player provides the deep, resonant bass that makes our music truly earthquake-worthy.",
        detailedDesc: `<p>The foundation of Brassquake! Our tuba player provides the deep, resonant bass lines that give our quintet its solid foundation. Despite being the largest and lowest instrument, the tuba can be surprisingly agile and expressive in the right hands.</p>
                    <br>
                    <p>From steady bass lines that anchor the harmony to surprising melodic moments, our tuba player proves that the biggest instrument can have the biggest impact on our sound.</p>
                    <br>
                    <p><strong>Musical Journey:</strong> Embraced the challenge of mastering the largest brass instrument</p>
                    <br>
                    <p><strong>Favorite Pieces:</strong> Pieces that showcase the tuba's surprising agility and melodic capabilities</p>`
    }
];

function makeCards() {
    for (let i = 0; i < cards.length; i++) {
        document.querySelector('#members-grid').insertAdjacentHTML('beforeend', `
            <div class="member-card" onclick="changePage('page=member-detail-page&member=${cards[i].name.toLowerCase().replace(/\s+/g, '-')}')">
                <span class="instrument-icon">🎺</span>
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
                            <img src="images/${cards[i].img}" alt="${cards[i].name}" style="width: 100%; height: auto;">
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

makeCards();
memberDetails();

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
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
    }
}

// Add some interactive effects
document.querySelectorAll('.member-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    createFloatingNotes();
    updatePage();
});
