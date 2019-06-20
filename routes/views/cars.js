var keystone = require('keystone');

exports = module.exports = function(req,res){
    var view = new keystone.View(req,res);
    var locals = res.locals;

    //set locals

    locals.section = 'store';


    //load products

    view.query('cars', keystone.list('Car').model.find());

    view.render('cars');
} 