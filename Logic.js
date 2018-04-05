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
Logic.count=function(o,c){var n={_id:false,range:false,active:false,type:false,db:false,organization:false};Object.keys(n).forEach(function(key){if(key in o){n[key]=o[key];}});
 var xm='Logic.count';
 var xerr=function(err){var res=err||xm+'-invalid';if(res.constructor!==String().constructor){res=res.toString();}console.log(res);if(c){c(res);}else{return false;}}; 
 var i={i:0};
 if(n.range!==false){
  Logic.count.range(n,function(e,m,r){c(e,m,r);});
 }else{ 
  if(n.active!==false){
   Logic.count.active(n,function(e,m,r){c(e,m,r);});
  }else{
   if(n.organization!==false){
    Logic.count.organization(n,function(e,m,r){c(e,m,r);});
   }else{
    if(n._id!==false){
     if(n._id.constructor===Array().constructor){
      n._id.forEach(function(_id,i){if(require('mongodb').ObjectId.isValid(_id)){n._id[i]=require('mongodb').ObjectId(_id);}});
      n.db.count({_id:{$in:n._id},[n.type]:{$exists:true}},function(err,res){
       if(err){xerr(err);}
       else
       if(!err&&res){i.i=res;if(c){c(null,xm,i);}else{return i;} }
       else
       if(!err&&!res){if(c){c(null,xm,i);}else{return i;}}
      });       
     }else
     if(n._id.constructor===String().constructor){
      if(require('mongodb').ObjectId.isValid(n._id)){n._id=require('mongodb').ObjectId(n._id);}
      n.db.count({_id:n._id,[n.type]:{$exists:true}},function(err,res){
       if(err){xerr(err);}
       else
       if(!err&&res){i.i=res;if(c){c(null,xm,i);}else{return i;} }
       else
       if(!err&&!res){if(c){c(null,xm,i);}else{return i;}}
      });       
     }
    }else{
     n.db.count({[n.type]:{$exists:true}},function(err,res){
      if(err){xerr(err);}
      else
      if(!err&&res){i.i=res;if(c){c(null,xm,i);}else{return i;} }
      else
      if(!err&&!res){if(c){c(null,xm,i);}else{return i;}}
     });     
    }
   }
  }
 }
};
Logic.count.range=function(o,c){var n={_id:false,range:false,active:false,type:false,db:false,organization:false};Object.keys(n).forEach(function(key){if(key in o){n[key]=o[key];}});
 var xm='Logic.count.range';
 var xerr=function(err){var res=err||xm+'-invalid';if(res.constructor!==String().constructor){res=res.toString();}console.log(res);if(c){c(res);}else{return false;}}; 
 var i={i:0};
 c(null,xm,i);
};
Logic.count.active=function(o,c){var n={_id:false,active:false,type:false,db:false,organization:false};Object.keys(n).forEach(function(key){if(key in o){n[key]=o[key];}});
 var xm='Logic.count.active';
 //console.log(xm);
 var xerr=function(err){var res=err||xm+'-invalid';if(res.constructor!==String().constructor){res=res.toString();}console.log(res);if(c){c(res);}else{return false;}}; 
 var i={i:0};
 if(n.organization!==false){
  Logic.count.active.organization(n,function(e,m,r){c(e,m,r);});
 }else{
   if(n._id!==false){
    if(n._id.constructor===Array().constructor){
     n._id.forEach(function(_id,i){if(require('mongodb').ObjectId.isValid(_id)){n._id[i]=require('mongodb').ObjectId(_id);}});
     n.db.count({_id:{$in:r._id},[n.type]:{$exists:true},[n.type+'.active']:true},function(err,res){
      if(err){xerr(err);}
      else
      if(!err&&res){i.i=res;if(c){c(null,xm,i);}else{return i;} }
      else
      if(!err&&!res){if(c){c(null,xm,i);}else{return i;}}
     });       
    }else
    if(n._id.constructor===String().constructor){
     if(require('mongodb').ObjectId.isValid(n._id)){n._id=require('mongodb').ObjectId(n._id);}
     n.db.count({_id:n._id,[n.type]:{$exists:true},[n.type+'.active']:true},function(err,res){
      if(err){xerr(err);}
      else
      if(!err&&res){i.i=res;if(c){c(null,xm,i);}else{return i;} }
      else
      if(!err&&!res){if(c){c(null,xm,i);}else{return i;}}
     }); 
    }
  }else{
   n.db.count({[n.type]:{$exists:true},[n.type+'.active']:true},function(err,res){
    if(err){xerr(err);}
    else
    if(!err&&res){i.i=res;if(c){c(null,xm,i);}else{return i;} }
    else
    if(!err&&!res){if(c){c(null,xm,i);}else{return i;}}
   });     
  }
 }
};
Logic.count.active.organization=function(o,c){var n={_id:false,active:false,type:false,db:false,organization:false};n=mut.n({o:o,n:n});
 var xm='Logic.count.active.organization';
 var xerr=function(err){var res=err||xm+'-invalid';if(res.constructor!==String().constructor){res=res.toString();}console.log(res);if(c){c(res);}else{return false;}}; 
 var i={i:0};
 if(n._id!==false){
  if(n._id.constructor===Array().constructor){
   mut.clean({_id:n._id},function(e,m,r){
    if(!e&&r){
     n.db.count({_id:{$in:r._id},[n.type]:{$exists:true},[n.type+'.active']:true,[n.type+'.organization']:n.organization},function(err,res){
      if(err){xerr(err);}
      else
      if(!err&&res){i.i=res;if(c){c(null,xm,i);}else{return i;} }
      else
      if(!err&&!res){if(c){c(null,xm,i);}else{return i;}}
     });       
    }else{xerr();}
   }); 
  }else
  if(n._id.constructor===String().constructor){
   mut.clean({_id:n._id},function(e,m,r){
    if(!e&&r){
     n.db.count({_id:n._id,[n.type]:{$exists:true},[n.type+'.active']:true,[n.type+'.organization']:n.organization},function(err,res){
      if(err){xerr(err);}
      else
      if(!err&&res){i.i=res;if(c){c(null,xm,i);}else{return i;} }
      else
      if(!err&&!res){if(c){c(null,xm,i);}else{return i;}}
     });       
    }else{xerr();}
   });   
  }
 }else{
  n.db.count({[n.type]:{$exists:true},[n.type+'.active']:true,[n.type+'.organization']:n.organization},function(err,res){
   if(err){xerr(err);}
   else
   if(!err&&res){i.i=res;if(c){c(null,xm,i);}else{return i;} }
   else
   if(!err&&!res){if(c){c(null,xm,i);}else{return i;}}
  });     
 }
};
gen.logic2.count.organization=function(){};
gen.logic2.count.organization.range=function(){};
gen.logic2.count.organization.active=function(){};
