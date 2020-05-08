var options = {
  bottom: '32px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '24px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#d1d1d1', // default: '#fff'
  backgroundColor: '#d9d9d9',  // default: '#fff'
  buttonColorDark: '#17153f',  // default: '#100f2c'
  buttonColorLight: '#d9d9d9', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌗', // default: ''🌓
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

//Dark mode for mobile
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      var element = document.body;
      element.classList.toggle('dark-mode');
      /*var element1 = document.header;
      element1.classList.toggle("dark-mode");*/
    } else {
      // do nothing
      var element = document.body;
      element.classList.toggle('dark-mode');
    }
  });
});
