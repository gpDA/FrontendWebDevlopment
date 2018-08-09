

(function (window) {
    'use strict';
    var App = window.App || {};
  
    function Truck(truckId, db) {
      this.truckId = truckId;
      this.db = db;
    }
  
    Truck.prototype.createOrder = function (order) {
      console.log('Adding order for ' + order.emailAddress);
      return this.db.add(order.emailAddress, order);
    };
    //TEST
    //var myTruck = new App.Truck('007', new App.DataStore());
    //myTruck.createOrder({emailAddress: 'dr2@no.com',coffee:'decaf'});  
    Truck.prototype.deliverOrder = function(customerId) {
      console.log('Delivering order for' + customerId);
      return this.db.remove(customerId);
    };
    Truck.prototype.printOrders = function (){
        var customerIdArray = Object.keys(this.db.getAll());
        console.log(this.truckId + 'has pedning orders:');
        customerIdArray.forEach(function(id){
            console.log(this.db.get(id));
        }.bind(this));
    };
  
    App.Truck = Truck;
    window.App = App;
  })(window);