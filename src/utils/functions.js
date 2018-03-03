export const prepareTree = (text = '') => {
  const root = { title: null, isRoot: true, children: [] };
  let parentNode = root;
  let parentNodeHistory = [root];

  const arr = convertToArray(text);

  arr.forEach((node, index) => {
    const currentNode = { title: node.value, isRoot: false, children: [] };
    const nextNode = arr[index + 1];

    parentNode.children.push(currentNode);

    if (nextNode) {
      if (nextNode.indentation === 0) {
        parentNode = root;
        parentNodeHistory = [root];
        // next node should be nested
      } else if (nextNode.indentation > node.indentation) {
        parentNode = currentNode;
        parentNodeHistory.unshift(parentNode);
      } else {
        // next node belongs to upper level, go back in chain to find the parent
        for (let i = 0; i < node.indentation - nextNode.indentation; i++) {
          parentNodeHistory.shift();
        }
        parentNode = parentNodeHistory[0];
      }
    }
  });

  parentNodeHistory = null;
  return root;
};

const convertToArray = string => {
  // Remove Empty lines
  while (string.includes('\n\n')) {
    string = string.replace('\n\n', '\n');
  }

  //  Trim initial space to avoid any bamboozles
  string = string.trimLeft();

  // Split by new line character and keep the indentation count
  return string.split('\n').map(node => {
    return {
      value: node.trim(),
      indentation: (node.length - node.trimLeft().length) / 2,
    };
  });
};
