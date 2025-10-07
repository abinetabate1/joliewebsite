const myselectTyped = document.querySelector('.atyped');
if (myselectTyped) {

    let typed_strings = myselectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.atyped', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

const myselectTypedb = document.querySelector('.btyped');
if (myselectTypedb) {

    let typed_strings = myselectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.btyped', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }