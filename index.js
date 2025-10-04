let page = "home";
const url = new URLSearchParams(window.location.search);

function changePage(section) {
    if(section !== "") {
        //Update URL without reloading
        window.location.search = section;
        window.history.pushState({}, '', `${window.location.pathname}?${url}`);
    }
    updatePage();
}

function updatePage() {
    const url = new URLSearchParams(window.location.search);
    const page = url.get('page') || 'home';
    const logo = document.querySelector('.logo');
    const subtitle = document.querySelector('.subtitle');
    const logoImage = document.querySelector('.logo-image');
    
    if (page === 'home') {
        logo.classList.remove('small');
        subtitle.classList.remove('small');
        logoImage.classList.remove('small');
    } else {
        logo.classList.add('small');
        subtitle.classList.add('small');
        logoImage.classList.add('small');
    }

    // Clear all sections
    document.querySelectorAll('main>.section').forEach(sec => sec.classList.add('hidden'));

    // Show main page section
    const mainSection = document.getElementById(page);
    if (mainSection) {
        mainSection.classList.remove('hidden');
    }

    // Show member detail section
    if (page === 'member-detail-page' && url.get('member')) {
        const memberSection = document.getElementById(`${url.get("member")}-detail`);
        if (memberSection) {
            memberSection.classList.remove('hidden');
        }
    }

    // Show performance detail section
    if (page === 'performance-detail-page' && url.get('performance')) {
        const perfSection = document.getElementById(`${url.get("performance")}-detail`);
        if (perfSection) {
            perfSection.classList.remove('hidden');
        }
    }

    // Highlight active nav button
    document.querySelectorAll("nav a").forEach(link => {
        link.classList.remove('active');
        if (link.textContent.toLowerCase() === page) {
            link.classList.add('active');
        }
    });
}

//Turns button to active class when clicked
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener('click', function(e) {
        document.querySelectorAll("nav a").forEach(navLink => {
            navLink.classList.remove('active');
        });
        this.classList.add('active');
    });
});

function showMemberDetail(memberName) {
    const detailSection = document.getElementById(memberName + '-detail');
    if (detailSection) {
        // Hide all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        
        // Show the member detail
        detailSection.classList.remove('hidden');
    }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop default redirect

      const formData = new FormData(form);

      fetch("https://formspree.io/f/xblzywbj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      }).then(response => {
        if (response.ok) {
          alert("Thanks for your message! We'll get back to you soon.");
          form.reset();
        } else {
          alert("Oops! Something went wrong. Please try again.");
        }
      });
    });
  }
});
