const btnBlock = document.querySelectorAll('[data-button]');
const sectionBlock = document.querySelectorAll('.choose__item');

btnBlock.forEach(function(item) {
  item.addEventListener('click', showBtnBlock )
})

function showBtnBlock (event) {

  const $this = event.currentTarget;
  const buttonId = $this.getAttribute('data-button');
  const chooseIt = document.getElementById(buttonId);

    btnBlock.forEach(item => {
      item.classList.remove('active');
    })
    $this.classList.add('active')

    sectionBlock.forEach(item => {
      item.classList.remove('active-item');
    })
    chooseIt.classList.add('active-item')
}