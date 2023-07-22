function openTab(event, tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = 'none';
    }
  
    const tabButtons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove('active');
    }
  
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
  }
  
  document.getElementById('about').style.display = 'block';
  document.querySelector('.tab-button').classList.add('active');