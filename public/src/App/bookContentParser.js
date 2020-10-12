import API_Key from "./API_Key"
export class BookContentParser {
  sendHttpsRequest(bookId, pageId) {
    // console.log('hi');

    return fetch(
      `${API_Key}${bookId}/page${pageId}.json`
    ).then((response) => response.json());
  }
}
