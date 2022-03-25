// creating navbar

let navbarHTMLContent = `<div class="container-fluid">
        <a class="navbar-brand" href="#">Bootstrap 5</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#title" id="home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>

            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>`;

const newNavbar = document.createElement('nav');

newNavbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark');
newNavbar.setAttribute('id','navbar');
newNavbar.innerHTML =navbarHTMLContent;

const body = document.querySelector('body');
body.prepend(newNavbar);

const docUrl = document.URL;

console.log(docUrl);
if(docUrl.includes('index.html')){
    const activeClass = document.querySelector('#home');
    activeClass.classList.add('active');
    activeClass.setAttribute('href', docUrl.split(/[?#]/)[0]);
}
