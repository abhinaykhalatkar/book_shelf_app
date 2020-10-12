export class ContentToggler {
  static bookOpen() {
    const bookOpen = document.querySelector('#readingContent');
    bookOpen.classList.toggle('visible');
  }

  static backdropToggle() {
    // eslint-disable-next-line prefer-const
    let backdrop = document.querySelector('#backdrop');
    backdrop.classList.toggle('visible');
    document.querySelector('#book-shelf').classList.remove('visible');
  }
}
