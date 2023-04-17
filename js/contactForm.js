/************** ContactForm **************/
((d) => {
  const $form = d.forms['contactForm'],
    $loader = d.querySelector('.contact-form-loader');

  $form.addEventListener( 'submit', (e) => {
    e.preventDefault();
    $loader.classList.remove('none');
    fetch('https://formsubmit.co/ajax/info@tnmtutors.com', {
      method: 'POST',
      body: new FormData(e.target)
    })
      .then( res => res.ok ? res.json() : Promise.reject(res))
      .then( json => {
        console.log(json);
        // location.hash = '#gracias';
        $form.reset();
      })
      .catch(err => {
        console.error(err);
      })
      .finally( () => {
        $loader.classList.add('none');
        // setTimeout( () => {
        //   location.hash = '#close';
        // }, 3000);
      } );

  } )
})(document);
