# developer
General Code

Easy logic generator for server object in the mongodb.

To add a new logic simply pass in the type, mongo database name, and an optional instance of a websocket to use for that type.

var logic_example={}; //this is arbitrary, it could be customer,store,vehicle etc.

Logic({type:'logic_example',database:'company_database',socket:socket},function(e,m,logic){
 //the 'type' variable is the name the database will use searching for
 //and dealing with objects
 //ex: db.find({[type]:{$exists:true}}), db.remove({[type]:{$exists:true}}
 if(logic){
 
  logic_example.logic=logic;
 
 }
 
});

Once your object has logic you can use the properties of logic(add,edit,remove,count,template).

/*
Example of getting a template of an object, then inserting it as a new instance of that object into the database
*/
logic_example.logic.template({},function(e,template){
 logic_example.logic.add({add:template},function(e,_id){
  
 });
});





