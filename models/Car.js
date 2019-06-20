var keystone = require('keystone');
var Types = keystone.Field.Types;

var Car = new keystone.List('Car', {
    map:{name:'regofcar'},
    singular:'Car',
    plural:'Cars',
    autokey:{path:'slug',from:'regofcar',unique:true}

});

Car.add ({
    regofcar: {type: String, required: true},
    price:{type:Number},
    make:{type:String},
    model:{type:String},
    enginesize:{type:Number},
    mileage:{type:Number},
    gearbox:{type:Types.Select, options: 'manual, auto, semi-auto'},
    fueltype:{type:Types.Select, options: 'petrol, diesel, gas, hybrid'},
    noofdoors:{type:Types.Select, options: '2,3,4,5' },
    bodycolour:{type:String},
    status: {type:Types.Select, options: 'available, sold, under offer'},
    
    
    
   
    

    description:{type:String},
    image: {type:Types.CloudinaryImage},
   
});

Car.register();
