var keystone = require('keystone');

exports = module.exports = function(req,res){
    var view = new keystone.View(req,res);
    var locals = res.locals;

    //set locals

    locals.section = 'store';
    locals.filters={
        car:req.params.car
    }
    locals.data={
        cars:[]
    }
    
    view.on('init',function(next){
        var q=keystone.list('Car').model.findOne({
            slug: locals.filters.car
        });
        q.exec(function(err,result){
            locals.data.car=result;
            next(err);


        });
        });

    view.render('car');
} 