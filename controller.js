module.exports = {
    Create: function(app){
        var db = app.get('db');

        db.create_product(function(err, products){
            console.log(err, products);
        })
    },
    GetOne: function(app){
        var db = app.get('db');

        db.read_products(function(err, products){
            console.log(err, products);
        })
    },
    GetAll: function(app){
        var db = app.get('db');

        db.read_products(function(err, products){
            console.log(err, products);
        })
    },
    Update: function(app){
        var db = app.get('db');

        db.update_product(function(err, products){
            console.log(err, products);
        })
    }
    Delete: function(app){
        var db = app.get('db');

        db.delete_products(function(err, products){
            console.log(err, products);
        })
    },
