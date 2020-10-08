'use strict';
import $ from 'jquery';
import './style.css';
import api from './api';
import store from './store';
import bookmark from './bookmarks';

const main = function(){
    bookmark.render();
    bookmark.eventListeners();

    api.getBookmarks()
      .then((bookmarks) => {
        console.log('bookmarks')
        bookmarks.forEach(bookmark => {store.addBookmark(bookmark)})
        bookmark.render()

      })
      // .catch(err => console.log(err.message))
}
$(main);
