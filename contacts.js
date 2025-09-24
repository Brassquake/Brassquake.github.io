let contacts = [
    {
        method: "Email: brassquakegw@gmail.com",
        url: "mailto:brassquake@gmail.com",
        icon: "images/Email.png"
    },
    {
        method: "YouTube",
        url: "https://www.youtube.com/@Brassquake",
        icon: "images/youtube.png"
    },
    {
        method: "Instagram",
        url: "https://www.instagram.com/brassquake?igsh=OGw0cXkyOG1xamZ2",
        icon: "images/instagram.png"
    },
];

for(let i = 0; i < contacts.length; i++) {
    document.querySelector('#contacts-list').insertAdjacentHTML('beforeend', `
        <li>
            <div style="display: flex; justify-content: center; align-items: center; gap: 10px;">
                <img src="${contacts[i].icon}" style="width: 30px; border-radius: 5px;">
                <a style="color: white;" href="${contacts[i].url}" target="${(contacts[i].url) ? '_blank' : ''}" title="${contacts[i].method}">${contacts[i].method}</a>
            </div>
        </li>
    `);
}
