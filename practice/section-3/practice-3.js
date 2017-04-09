'use strict';
var c=new Array();
function createUpdatedCollection(collectionA, objectB) {
  for(var i=0;i<collectionA.length;i++)
  {
    var count;
    var object=new Object();
    object.key=collectionA[i];
    count= collectionA.lastIndexOf(collectionA[i])-collectionA.indexOf(collectionA[i])+1;
    i=i+count-1;
    object.count=count;
    c.push(object);
   
  }
   return c.map(function (item){
    if(objectB.value.indexOf(item.key)>-1)
    {
        var num1=item.count%3;
        var num2=(item.count-num1)/3;
        item.count-=num2;
    }
    return item;
  });
}
