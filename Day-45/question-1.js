// 404. Sum of Left Leaves

// Given the root of a binary tree, return the sum of all left leaves.

// A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.


// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.


var sumOfLeftLeaves = function(root) {
    let leftSum=0;
      function findLeftSum(current,isLeft){
          if(current===null){
              return;
          }
          if(isLeft&&current.left===null&&current.right===null){
              leftSum+=current.val;
          }
          findLeftSum(current.left,true)
          findLeftSum(current.right,false)
  
      }
      findLeftSum(root)
      return leftSum;
  };