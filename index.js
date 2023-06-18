const tabs = document.querySelector('.tabs');
const contentEl = document.querySelectorAll('.text-content');
const btnsEl = document.querySelectorAll('.button');
console.log(tabs);
console.log(contentEl);
console.log(btnsEl)


tabs.addEventListener('click', (event) => {
  let id = event.target.dataset.id;
  console.log(id);

  if(id) {
    btnsEl.forEach((btn) => {
      btn.classList.remove('live');
    })
    event.target.classList.add('live')
    contentEl.forEach((content) => {
      content.classList.remove('live')
    })
    const element = document.getElementById(id);
    element.classList.add('live')
  }

})