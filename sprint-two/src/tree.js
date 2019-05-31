var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) { 
  let newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return true;
    }
    if (this.children[i].children.length !== 0) {
      if (this.children[i].contains(target) === true) {
        return true;
      }
    }
  }
  return false;
};

let printObject = function(object) {
  console.log(JSON.stringify(object));
};

// let myTree = Tree();

//  myTree.addChild('Max');
// printObject(myTree.children);
// myTree.addChild('Patrick');
// printObject(myTree.children);
// console.log(myTree.contains('Max'));


// myTree.addChild(5);
// myTree.addChild(6);
// myTree.children[0].addChild(7);
// myTree.children[1].addChild(8);
// printObject(myTree.children);


/*
 * Complexity: What is the time complexity of the above functions?
 */

