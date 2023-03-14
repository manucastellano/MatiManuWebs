const closeAside = (id) => {
  const $aside = document.getElementById(id);
  $aside.classList.remove('visible')
};

const openAside = (id) => {
  const $aside = document.getElementById(id);
  console.log($aside);
  $aside.classList.add('visible')
}