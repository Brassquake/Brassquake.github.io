let contacts = [
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
    {
        method: "Email",
        url: "https://mail.google.com/mail/u/0/?fs=1&to=brassquakegw@gmail.com",
        icon: "images/instagram.png"
    },
];

for(let i = 0; i < contacts.length; i++) {
    document.querySelector('#contacts-list').insertAdjacentHTML('beforeend', `
        <li>
            <div style="display: flex; justify-content: center; align-items: center; gap: 10px;">
                <img src="${contacts[i].icon}" style="width: 30px;">
                <a style="color: white;" href="${contacts[i].url}" target="_blank" title="${contacts[i].method}">${contacts[i].method}</a>
            </div>
        </li>
    `);
}