const btns = document.querySelectorAll('.btn');
const detailApropos = document.querySelectorAll('.section');


const links = document.querySelectorAll('header nav a');
const showNav = document.querySelector('nav');
const barsMenu = document.querySelector('.btn-menu');
const sections = document.querySelectorAll('section');

barsMenu.addEventListener('click',() =>{
    showNav.classList.toggle('active');
    links.forEach((link) => {
        link.addEventListener('click', () => {
            link.classList.remove('active');
            showNav.classList.remove('active');
        });
        
    });
    // showNav.classList.remove('active');
})

// sections[0].classList.add('active');

// links.forEach((link, index) => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         sections.forEach((sect) => {
//             sect.classList.remove('active');
//             showNav.classList.remove('active');
//         });
//         sections[index].classList.add('active')
//     });
// })



links.forEach((link,idex) => {

    link.addEventListener('click', () => {
        links.forEach(link => {
            link.classList.remove('active');

        });
        link.classList.add('active');
        sections.forEach(det => {
            det.classList.remove('active');
        });
        sections[idex].classList.add('active');
    });
});

// links.forEach(link => {
//     link.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         const targetSection = document.querySelector(targetId);
//         if (targetSection) {
//             targetSection.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });

//             history.pushState(null, null, targetId);
//         }
//     });
// });

btns.forEach((bn, idx) => {
    bn.addEventListener('click', () => {
        btns.forEach(bn => {
            bn.classList.remove('active');

        });
        bn.classList.add('active');
        detailApropos.forEach(detail => {
            detail.classList.remove('active');
        });
        detailApropos[idx].classList.add('active')
    });

    
});