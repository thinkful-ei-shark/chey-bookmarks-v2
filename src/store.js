'use strict';
/* global */

  const setError = function(error) {
    this.error = error;
  };

  const findById = function(id){
    return this.bookmarks.find(bookmark => bookmark.id === id);
  };
  
  const addBookmark = function(bookmark){
    bookmarks.push(bookmark);
  };

  const findAndUpdate = function(id, newData){
    const bookmark = this.findById(id);
    Object.assign(bookmark, newData);
  };

  const findAndDelete = function(id){
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id);
  };
  const bookmarks = [];
  //let minimumRating: 0;

  export default {
    bookmarks,
    minimumRating: 0,

    setError,
    addBookmark,
    findById,
    findAndDelete,
    findAndUpdate,

  };