let contacts = [
    {
        method: "Email: brassquakegw@gmail.com",
        url: "mailto:brassquakegw@gmail.com",
        icon: "images/Email.png"
    },
    {
        method: "YouTube - @brassquake",
        url: "https://www.youtube.com/@Brassquake",
        icon: "images/youtube.png"
    },
    {
        method: "Instagram - @brassquake",
        url: "https://www.instagram.com/brassquake?igsh=OGw0cXkyOG1xamZ2",
        icon: "images/instagram.png"
    },
];

for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    const isEmail = contact.url.startsWith("mailto:");

    document.querySelector('#contacts-list').insertAdjacentHTML('beforeend', `
        <li>
            <div style="display: flex; justify-content: center; align-items: center; gap: 10px;">
                <img src="${contact.icon}" style="width: 30px; border-radius: 5px;">
                ${isEmail
                    ? `<span style="color: white;">${contact.method}</span>`
                    : `<a style="color: white;" href="${contact.url}" target="_blank" title="${contact.method}">${contact.method}</a>`
                }
            </div>
        </li>
    `);
}
