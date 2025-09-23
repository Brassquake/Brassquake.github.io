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
        name: "Brassquake",
        img: "Logo Circle.png",
        desc: "Brassquake is a brass quintet that is composed of talented musicians.",
    },
    {
        name: "Arvin Omidvar",
        img: "arvino.jpg",
        instrument: "Trumpet",
        icon: "🎺",
        desc: "Trumpet player, bugle horn player, valve trombone player, tuba player, alto sax player etc. he basically plays everything.",
        Detaileddesc: "",
    },
    {
        name: "Alex Uchida",
        img: "",
        instrument: "Trumpet",
        icon: "🎺",
    {
        name: "Arwen Leong",
        img: "",
        instrument: "French Horn",
        icon: "",
        desc: 
    
    },
    {
        name: "Brian Weng",
        img: "",
        instrument: "Trombone",
        icon: "🎺",
        desc: "Can't find 5th position",
    },
    {
        name: "Nancy Qiu",
        img: "",
        instrument: "Tuba",
        icon: "🎺",
    }
];

function makeCards() {
    for (let i = 0; i < cards.length; i++) {
        document.querySelector('.members-grid').insertAdjacentHTML('beforeend', `
            <div class="member-card" onclick="showMemberDetail('${cards[i].name.toLowerCase().replace(/\s+/g, '-')}')">
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
        document.querySelector('.member-detail-page').insertAdjacentHTML('beforeend', `
            <section id="${cards[i].name.toLowerCase().replace(/\s+/g, '-')}-detail" class="section hidden">
                <div class="member-detail">
                    <a href="#" class="back-button" onclick="showSection('members')">← Back to Members</a>
                    <span class="instrument-icon">${cards[i].icon}</span>
                    <h2>${cards[i].name}</h2>
                    <div class="member-instrument">${cards[i].instrument}</div>
                    <br>
                    <p>${cards[i].detailedDesc}</p>
                </div>
            </section>
        `);
    }
}

makeCards();
memberDetails();
