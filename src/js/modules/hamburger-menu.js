const hamburgerButton = document.querySelector('.hamburger');
const hamburgerBox = document.querySelector('.hamburger-box');
const navigation = document.querySelector('.navigation')

hamburgerButton.onclick = () => {
  hamburgerBox.classList.toggle('hamburger-box-active')
  hamburgerButton.classList.toggle('hamburger-active')
  navigation.classList.toggle('navigation-active')
}