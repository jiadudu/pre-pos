'use strict';
/*
var C=new Array();

function createUpdatedCollection(collectionA, objectB) {
  for(var i=0;i<collectionA.length;i++)
  {
    var count;
    var object=new Object();
    
    count= collectionA.lastIndexOf(collectionA[i])-collectionA.indexOf(collectionA[i])+1;
    if(count!=1)
    {
      i=i+count-1;
      object.key=collectionA[i];
      object.count=count;
      C.push(object);
    }
    else
    {
      var str=collectionA[i].split("");
      object.key=str[0];
      object.count=parseInt(str[2]);
      C.push(object);
    }
  }
   return C.map(function (item){
    if(objectB.value.indexOf(item.key)>-1)
    {
        var num1=item.count%3;
        var num2=(item.count-num1)/3;
        item.count-=num2;
    }
    return item;
  });
}
*/
var tempResult=new Array();

function createUpdatedCollection()
{
    const collectionA = [
    'a', 'a', 'a',
    'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
    't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
    'g', 'g', 'g', 'g', 'g', 'g', 'g',
    'b', 'b', 'b', 'b', 'b', 'b',
    'd-5'
  ];
    for(var i=0;i<collectionA.length;i++)
    {
       var number=1;
       var str=collectionA[i].split("-");
       var tempkey=new Array();
      if(str.length>1)
      {
      collectionA[i]=str[0];
      number=parseInt(str[1]);
      }
      if(tempkey.indexOf(collectionA[i])<0)
      {
      tempkey.push(collectionA[i]);
     var obj =new Object();
      obj.key=collectionA[i];
      obj.count= number;
      tempResult.push(obj);
      }
    }
    for(var i=0;i<tempResult.length;i++)
    {
    console.log("key"+tempResult[i].key+" count"+tempResult[i].count);
    }
    
}
//function judgeElement(element)
//{
  
  //return tempResult;
//}
