'use strict';
var result=new Array();
function createUpdatedCollection(collectionA, objectB) 
{
  return collectionA.map(function (item)
  {
    if(objectB.value.indexOf(item.key)>-1)
    {
        item.count-=1;
    }
    return item;
  });
}
