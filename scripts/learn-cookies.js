const [storeCookieBtn, retrieveCookieBtn] = document.querySelectorAll('button');
// console.log(storeCookieBtn, retrieveCookieBtn)

const afterMinutes = (minutes) => {
    const now = new Date()
    return new Date(now.setMinutes(now.getMinutes() + minutes));
}

const doStoreCookie = () => {
  console.log('doStoreCookie');
  const auth01 = `Auth_01=${window.btoa('harish:Brillio@123')}; max-age=30`;
  const auth02 = `Auth_02=${window.btoa('rishi:BlueYonder@123')}; expires=${afterMinutes(10)}`;

  document.cookie = auth01;
  document.cookie = auth02;
  console.log(document.cookie.split('; '));
};
const doRetrieveCookie = () => {
  console.log('doRetrieveCookie');
  console.log(document.cookie.split('; '));
};

storeCookieBtn.addEventListener('click', doStoreCookie);
retrieveCookieBtn.addEventListener('click', doRetrieveCookie);
