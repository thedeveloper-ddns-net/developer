# developer
General Code
The logic generator was created to facilitate adding logic to an object in the mongodb.

To add a new logic simply pass in the type, mongo database name, and an optional instance of a websocket to use for that type.

var add_logic_example={};
Logic({type:'customer',database:'company_database',socket:socket},function(e,m,logic){
 add_logic_example.logic=logic;
});

Once your object has logic you can use the properties of logic, add,edit,remove,count,template.





