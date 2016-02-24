(function() {
  'use strict';
  var AppDispatcher = require('../dispatcher/AppDispatcher'),
    DocsysConstants = require('../constants/DocsysConstants'),
    assign = require('object-assign'),
    BaseStore = require('./BaseStore');

  var UserStore = assign({}, BaseStore, {
    users: null,
    user: null,
    userEdit: null,

    setUsers: function(users) {
      this.users = users;
      this.emitChange('users');
    },

    getUsers: function() {
      return this.users;
    },

    setUser: function(user) {
      this.user = user;
      this.emitChange('user');
    },

    getUser: function() {
      return this.user;
    },

    setUserEdit: function(result) {
      this.userEdit = result;
      this.emitChange('userEdit');
    },

    getUserEdit: function() {
      return this.userEdit;
    }
  });

  AppDispatcher.register(function(action) {
    switch (action.actionType) {
      case DocsysConstants.USER_SIGNUP:
        UserStore.setData(action.data);
        break;
      case DocsysConstants.USER_LOGIN:
        UserStore.setData(action.data);
        break;
      case DocsysConstants.USERS_GET:
        UserStore.setUsers(action.data);
        break;
      case DocsysConstants.USER_GET:
        UserStore.setUser(action.data);
        break;
      case DocsysConstants.USER_EDIT:
        UserStore.setUserEdit(action.data);
        break;
      default:
        // no operation for default
    }

    return true;
  });

  module.exports = UserStore;
})();
