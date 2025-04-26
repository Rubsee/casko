faqItem = document.querySelectorAll('.faq__item');

faqItem.forEach(element => {
    element.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('opened');
    })
})