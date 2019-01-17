'use strict';

function inserInSortedOrder(sll, item){

  let previous = sll.head;
  let current = sll.head;

  //Inserts at the very beginning
  if(item<sll.head.value){

    this.head = new _Node(item,this.head);

  }

  while(current){
 
    //Normal case
    if(current.value>item){

      previous.next = new _Node(item,current);
      return sll;
 
    }

    previous = current;
    current = current.next;

    //Inserts at the very end
    //if current === null

    previous.next = new _Node(item,null);
    return sll;

  
  }



}