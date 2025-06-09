const tabs = document.querySelectorAll('.tab');
const containers = document.querySelectorAll('.plans-container');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Hide all plan sections
    containers.forEach(c => c.classList.add('hidden'));

    // Show selected
    const selected = tab.getAttribute('data-tab');
    document.getElementById(selected).classList.remove('hidden');
  });
});

let startX = 0;
let endX = 0;

const containerWrapper = document.body; // or specific swipe zone if needed

containerWrapper.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

containerWrapper.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

containerWrapper.addEventListener('touchend', () => {
  const diff = startX - endX;

  if (Math.abs(diff) > 50) {
    const activeTab = document.querySelector('.tab.active');
    const tabsArr = Array.from(document.querySelectorAll('.tab'));
    const index = tabsArr.indexOf(activeTab);
    let newIndex = index;

    if (diff > 0 && index < tabsArr.length - 1) {
      newIndex = index + 1; // swipe left
    } else if (diff < 0 && index > 0) {
      newIndex = index - 1; // swipe right
    }

    if (newIndex !== index) {
      tabsArr[index].classList.remove('active');
      tabsArr[newIndex].classList.add('active');

      containers.forEach(c => c.classList.remove('active'));
      const selectedId = tabsArr[newIndex].getAttribute('data-tab');
      document.getElementById(selectedId).classList.add('active');
    }
  }

  startX = 0;
  endX = 0;
});