/*
Logic.js

A simple bootstrap to allow for logic operations server side to be associated to a particular obj.

*/
var Logic=function(){};
module.exports=Logic;
var Logic=function(xo,xc){
 var xn={
  type:false,
  socket:false,
  database:false
 };Object.keys(xn).forEach(function(key){if(key in xo){xn[key=xo[key];}});
 var xm='Logic';
 var logic={};
 var xerr=function(err){var res=err||xm+'-invalid';if(res.constructor!==String().constructor){res=res.toString();}console.log(res);if(xc){xc(res);}else{return false;}}; 
 if(xn.database!==false){
  MongoClient.connect('mongodb://localhost:27017/'+n.database,function(err,res){
   if(err){console.log(err);}
   else
   if(!err&&res){
    res.collection(n.database,function(err,db){
     Object.keys(Logic).forEach(function(key){
      logic[key]=function(o,c){
       o.db=xdb;o.type=xn.type;
       Logic[key](o,function(e,m,r){c(e,m,r);});
      };
      if(xn.socket!==false){
       xn.socket.on(xn.type+'.'+key,function(o,c){
        logic[key](o,function(e,m,r){
         c(e,m,r);
        });
       });
      }
     });                                                       
    });//end get db
   }
  });//end mongoclient
 }else{xc(logic);}
};
