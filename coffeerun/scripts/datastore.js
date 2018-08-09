(function (window){
    'use strict';
    var App = window.App || {};

    function DataStore(){
        this.data = {};
    }
    DataStore.prototype.add = function(key, val){
        this.data[key] = val;
    };
    DataStore.prototype.get = function(key){
        return this.data[key];
    };
    DataStore.prototype.getAll = function(){
        return this.data;
    };        
    DataStore.prototype.remove = function(key){
        delete this.data[key];
    };    

    App.DataStore = DataStore;
    //TEST
    //var dsOne = new App.DataStore();
    //dsOne.data['email'] = 'james@bond.com'
    //inspect data : dsOne.data;
    window.App = App;
})(window);