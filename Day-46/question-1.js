// 129. Sum Root to Leaf Numbers

// You are given the root of a binary tree containing digits from 0 to 9 only.

// Each root-to-leaf path in the tree represents a number.

// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.

// Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

// A leaf node is a node with no children.

// Input: root = [1,2,3]
// Output: 25
// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.



var sumNumbers = function(root) {
    if (!root) return 0;
  
    const dfs = (node, prefix) => {
      if (!node) return 0;
      
      const currentVal = prefix * 10 + node.val;
      if (node.left == null && node.right == null) {
        return currentVal;
      }
      return dfs(node.left, currentVal) + dfs(node.right, currentVal);
    };
  
    return dfs(root, 0);
  };