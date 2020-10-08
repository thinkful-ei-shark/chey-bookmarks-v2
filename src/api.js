'use strict';
import $ from 'jquery';
  const URL = 'https://thinkful-list-api.herokuapp.com/cheyenne';
  const listApiFetch = function(...args) {
    // setup promise chain outside of scope
    let error;
    return fetch(...args)
      .then(response => {
        if (!response.ok){
          error = { code: response.status }
          if(!response.headers.get('content-type').includes('json')){
            error.message = response.statusText;
            return Promise.reject(error);
          }
        }
        return response.json()
      })
      .then(data => {
        if(error) {
          error.message = data.message
          return Promise.reject(error)
        }
        // otherwise, return the json as normal resolved Promise
        return data
      })
  };
  // get
  function getBookmarks() {
    return listApiFetch(`${URL}/bookmarks`)
  }
  // post
  function addBookmark(object){
    
    return listApiFetch(`${URL}/bookmarks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: object
    })
  }
  // patch
  function editBookmark(id, updateData){
    return listApiFetch(`${URL}/bookmarks/${id}`, {
      method: 'PATCH',
    })
  }
  // delete
  function deleteBookmark(id){
    return listApiFetch(`${URL}/bookmarks/${id}`, {
        method: 'DELETE'
    });
  };

  $.fn.extend({
    serializeJson: function(form) {
      const formData = new FormData(this[0]);
      const o = {};
      formData.forEach((val, name) => o[name] = val);
      return JSON.stringify(o);
    }
  });

  export default {
    getBookmarks,
    addBookmark,
    editBookmark,
    deleteBookmark,
  };
