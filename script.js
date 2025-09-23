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
        name: "Who we are",
        img: "https://auroraculturalcentre.ca/wp-content/uploads/2025/07/Arvin-and-Brassquake-600x400.jpg",
        desc: "Brassquake is a grade 10 brass quintet at Dr. G.W Wildivams Secondary School."
    },
    {
        name: "Arvin Omidvar",
        img: "arvino.jpg",
        desc: "Trumpet player, bugle horn player, valve trombone player, tuba player, alto sax player etc. he basically plays everything."
    },
    {
        name: "Alex Uchida",
        img: "",
        desc: ""
    },
    {
        name: "Arwen Leong",
        img: "",
        desc: ""
    },
    {
        name: "Nancy Qiu",
        img: "",
        desc: ""
    },
    {
        name: "Brian Weng",
        img: "",
        desc: ""
    }
];

function makeCards() {
    for(let i = 0; i<cards.length; i++) {
        document.querySelector('.container').insertAdjacentHTML('beforeend', `
            <div class="card">
                <div class="card-content">
                    <h2 class="card-title">${cards[i].name}</h2>
                    <div class="image-container">
                        <img src="${cards[i].img}" alt="${cards[i].name}">
                    </div>
                </div>
                <div class="image-text">
                    <p>
                        ${cards[i].desc}
                    </p>
                </div>
            </div>
        `);
    }
}
makeCards();