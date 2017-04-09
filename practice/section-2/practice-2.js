'use strict';
var result=new Array();
function countSameElements(collection)
{
  for(var i=0;i<collection.length;i++)
  {
    var count;
    var object=new Object();
    
    count= collection.lastIndexOf(collection[i])-collection.indexOf(collection[i])+1;
    if(count!=1)
    {
      i=i+count-1;
      object.key=collection[i];
      object.count=count;
      result.push(object);
    }
    else
    {
      var str=collection[i].split("");
      object.key=str[0];
      object.count=parseInt(str[2]);
      result.push(object);
    }
    
   
  }
  return result;
  
}
