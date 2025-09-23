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
    //Clear all sections
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
    page = url.get('page') || 'home';

    document.getElementById(page).classList.remove('hidden');
    if(page === 'member-detail-page' && url.get('member')) {
        document.getElementById(`${url.get("member")}-detail`).classList.remove('hidden');
        console.log("hi");
    }

    //Colour button
    document.querySelectorAll("nav a").forEach(link => {
        link.classList.remove('active');
        if(link.textContent.toLowerCase() === page) {
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