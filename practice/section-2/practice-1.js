'use strict';
var result=new Array();
function countSameElements(collection) {
 //collection.sort();
 
  for(var i=0;i<collection.length;i++)
  {
    var count;
    var object=new Object();
    object.key=collection[i];
    count= collection.lastIndexOf(collection[i])-collection.indexOf(collection[i])+1;
    i=i+count-1;
    object.count=count;
    result.push(object);
   
  }
  return result;
  
}
