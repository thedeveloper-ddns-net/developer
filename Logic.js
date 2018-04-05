/*
Logic.js

A simple bootstrap to allow for logic operations server side to be associated to a particular obj.

*/
var Logic=function(xo,xc){
 var xn={
  type:false,
  socket:false,
  use:false
 };xn=mut.n({o:xo,n:xn});
 var xm='Logic';
 var logic={};
 var xerr=function(err){var res=err||xm+'-invalid';if(res.constructor!==String().constructor){res=res.toString();}console.log(res);if(xc){xc(res);}else{return false;}}; 
 if(xn.use!==false){
  ddb.use({use:xn.use},function(e,m,xdb){
   if(!e&&xdb){
    Object.keys(gen.logic2).forEach(function(key){
     logic[key]=function(o,c){
      o.db=xdb;o.type=xn.type;
      gen.logic2[key](o,function(e,m,r){c(e,m,r);});
     };
     if(xn.socket!==false){
      xn.socket.on(xn.type+'.'+key,function(o,c){
       logic[key](o,function(e,m,r){
        if(xn.broadcast!==false){ xn.socket.broadcast.emit(xn.type+'.'+key,r); }
        c(e,m,r);
       });
      });
     }
    });
    xc(logic);
   }else{xc(logic);}
  }); 
 }else{xc(logic);}
};
