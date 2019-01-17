'use strict';
// need node class and linked list class

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    this.head = new _Node(value, this.head);
  }

  insertLast(value) {
    if (this.head === null) {
      this.insertFirst(value);
    }

    else {
      let currentNode = this.head;

      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new _Node(value, null);
    }
  }

  remove(item) {
    //if the list is empty
    if (!this.head){
      return null;
    }
    //if the node to be removed is head, make the next node head
    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  find(item) {
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head){
      return null;
    }
    //Check for the item 
    while(currNode.value !== item) {
      //return null if end of the list 
      // and the item is not on the list
      if (currNode.next === null) {
        console.log('Item not found');
        return null;
      }
      else {
        //otherwise keep looking 
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;

  }


  insertBefore(item, key){

    let curNode = this.head;
    let prevNode = this.head;

    while(curNode !== null && key !== curNode.value){

      prevNode = curNode;
      curNode = curNode.next;

    }

    if(curNode === null){

      console.log('Nothing to insert');
      return;

    }

    prevNode.next = new _Node(item,curNode);
    return;
  }

  insertAfter(item, key) {
    let curNode = this.head;
    let prevNode = this.head;

    while(curNode !== null && key !== prevNode.value){

      prevNode = curNode;
      curNode = curNode.next;

    }

    if(prevNode === null){

      console.log('Nothing to insert');
      return;

    }

    prevNode.next = new _Node(item,curNode);
    console.log('prevNode is', prevNode);
    console.log('prevNode.next is', prevNode.next);
    console.log('curNode is', curNode);
    return;
  }

  insertAt(item, pos){

    let currNode = this.head;
    let prevNode = this.head;
    let count = 0;

    while(count !== pos && currNode !== null){

      prevNode = currNode;

      currNode = currNode.next;

      count ++;
 
    }

    if(currNode === null){

      console.log('cannot insert at');

    }

    prevNode.next = new _Node(item,currNode);

    console.log('prevNode is', prevNode);
    console.log('prevNode.next is', prevNode.next);
    console.log('curNode is', currNode);

    return;

  }


 
}

function main() {
  const SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  

  //Add Tauhida
  SLL.insertLast('Tauhida');

  //Remove squirrel
  SLL.remove('Tauhida');

  //
  // SLL.insertBefore('Athena','Boomer');

  // SLL.insertAfter('Hotdog', 'Helo');

  // SLL.insertAt('Kat',33);

  console.log(displayLL(SLL));

  console.log(countList(SLL));

  console.log(isListEmpty(SLL));

  return SLL;

}

console.log(main());



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

// loop through ssl
// console.log each node first, then push each into an array if that works
function displayLL(ssl) {
  if (ssl.head === null) {
    console.log('no list');
    return;
  }
  let currNode = ssl.head;

  let arrList = [];
  while (currNode !== null) {
    //console.log(currNode);

    arrList.push(currNode.value);

    currNode = currNode.next;
  }
 
  return arrList;

}

function countList(ssl) {

  if(ssl.head === null){

    console.log('no list');
    return;

  }

  let currNode = ssl.head;
  let count = 0;

  while(currNode !== null){

    count ++;

    currNode = currNode.next;
 
  }

  return ('List count = ' + count);

}

function isListEmpty(ssl){

  if(ssl.head !== null){

    console.log('List is not empty');
    
    return false;
     
  } 

  console.log('The list is empty');
  return true;

}