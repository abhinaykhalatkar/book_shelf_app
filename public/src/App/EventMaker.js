import { BookContentParser } from './bookContentParser';
import { ContentToggler } from './ContentToggler';
export class EventMaker {
  constructor() {
    // eslint-disable-next-line prefer-const
    let backdrop = document.querySelector('#backdrop');
    const bookShelf = document.querySelector('#book-shelf'),
      pageContent = document.querySelector('#bookPage-content'),
      closeBookBtn = document.querySelector('#closeBtn'),
      nextPageBtn = document.querySelector('#nextBtn'),
      previousPageBtn = document.querySelector('#backBtn');

    bookShelf.addEventListener('mouseover', (event) => {
      if (event.target.parentNode.className === 'figure') {
        event.target.style.cursor = 'pointer';
      } else {
        event.target.style.cursor = 'auto';
      }
    });
    bookShelf.addEventListener('click', (event) => {
      if (event.target.parentNode.className === 'figure') {
        ContentToggler.backdropToggle();
        ContentToggler.bookOpen();
        let pageId = 0;
        const bookId = event.target.closest('div').id,
          bookData = new BookContentParser();
        bookData.sendHttpsRequest(bookId, pageId).then((responseData) => {
          pageContent.previousSibling.previousSibling.textContent = ` Book ${bookId}`;
          pageContent.previousSibling.textContent = `Page ${pageId}`;
          pageContent.textContent = `${responseData}`;
          nextPageBtn.addEventListener('click', () => {
            pageId++;
            if (pageId > 4) {
              pageId = 4;

              return;
            }
            bookData.sendHttpsRequest(bookId, pageId).then((responseData) => {
              pageContent.previousSibling.previousSibling.textContent = ` Book ${bookId}`;
              pageContent.previousSibling.textContent = `Page ${pageId}`;

              pageContent.textContent = `${responseData}`;
            });
          });
          previousPageBtn.addEventListener('click', () => {
            pageId--;
            if (pageId < 0) {
              pageId = 0;

              return;
            }
            bookData.sendHttpsRequest(bookId, pageId).then((responseData) => {
              pageContent.previousSibling.previousSibling.textContent = ` Book ${bookId}`;
              pageContent.previousSibling.textContent = `Page ${pageId}`;
              pageContent.textContent = `${responseData}`;
            });
          });
        });
      }
    });
    backdrop.addEventListener('click', () => {
      ContentToggler.backdropToggle();
      ContentToggler.bookOpen();
    });
    closeBookBtn.addEventListener('click', () => {
      ContentToggler.bookOpen();
      ContentToggler.backdropToggle();
    });
  }
}
