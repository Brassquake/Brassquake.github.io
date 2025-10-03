document.addEventListener("DOMContentLoaded", () => {
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
        <img src="${contact.icon}" alt="${contact.method}">
        ${isEmail
          ? `<span>${contact.method}</span>`
          : `<a href="${contact.url}" target="_blank" title="${contact.method}">${contact.method}</a>`
        }
      </li>
    `);
  }
});
