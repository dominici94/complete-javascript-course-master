import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkupButtonPrev(page) {
    return `
    <button class="btn--inline pagination__btn--prev">
      <span>Page ${page}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
    </button>
    `;
  }
  _generateMarkupButtonNext(page) {
    return `
    <button class="btn--inline pagination__btn--next">
      <span>Page ${page}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
    `;
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const prevPage = curPage - 1;
    const nextPage = curPage + 1;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButtonNext(nextPage);
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButtonPrev(prevPage);
    }
    // Other page
    if (curPage < numPages) {
      return (
        this._generateMarkupButtonPrev(prevPage) +
        this._generateMarkupButtonNext(nextPage)
      );
    }

    // Page 1, and there are NO other pages
    return '';
  }
}

export default new PaginationView();
