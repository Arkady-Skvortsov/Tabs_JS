let blocks = document.querySelectorAll('.block');
let tabs = document.querySelectorAll('.tab');

blocks.forEach((block) => {
   block.addEventListener('click', function(e) {
      e.preventDefault();
      let id = block.children[0].getAttribute('href').replace('#', '');

      blocks.forEach((bl) => {
         bl.children[0].classList.remove('block__active');
      });

      tabs.forEach((tab) => {
         tab.classList.remove('tab__active');
      });

      block.children[0].classList.add('block__active');
      document.getElementById(id).classList.add('tab__active');
   });
});

document.querySelector('.block').click();

tabs.forEach((t) => {
   t.children[0].addEventListener('mouseover', () => {
      t.children[0].children[0].classList.add('show'); 
   });

   t.children[0].addEventListener('mouseout', () => {
      t.children[0].children[0].classList.remove('show');
   });
});

