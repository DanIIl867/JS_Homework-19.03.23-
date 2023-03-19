//№1
const pageTitleEl = document.querySelector('.page-title');
pageTitleEl.textContent = 'Новий заголовок';
console.log(pageTitleEl);

//№2
const textEl = document.querySelector('.paragraph');
textEl.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi vero obcaecati provident facere quo ex distinctio voluptates, placeat itaque voluptatum, ipsa, delectus nemo suscipit nihil! Et magni deserunt quod quasi?';
console.log(textEl);

//№3
const listEl = document.querySelectorAll('ul.list');
console.log(listEl);

//№4
const imageEl = document.querySelector('.image');
imageEl.src = 'https://images.pexels.com/photos/12699537/pexels-photo-12699537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
console.log(imageEl);

//№5
const sectionTitleEl = document.querySelectorAll('.section-title');
sectionTitleEl[5].textContent = 'Новий заголовок';
console.log(sectionTitleEl);

//№6
const tableCellEl = document.querySelectorAll('.table-cell');
tableCellEl[17].textContent = 'Оновлене значення';
console.log(tableCellEl);

//№7
const footerTextEl = document.querySelectorAll('.footer-text');
for (footerItems of footerTextEl) {
   footerItems.classList.add("highlight");
}
console.log(footerTextEl);

//№8
const navEl = document.querySelector('.navigation');
navEl.style.backgroundColor = "lightblue"