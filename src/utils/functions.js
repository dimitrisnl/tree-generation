export const prepareTree = (text = '') => {
  const root = { title: null, isRoot: true, children: [] };
  let previousNode = null;

  const arr = convertToArray(text);

  arr.forEach((node, index) => {
    const newObj = { title: node.value, isRoot: false, children: [] };

    const parentNode = node.identation === 0 ? root : previousNode;
    parentNode.children.push(newObj);

    if (arr[index + 1] && arr[index + 1].identation > node.identation) {
      previousNode = newObj;
    }
  });

  return root;
};

const convertToArray = string => {
  // Remove Empty lines
  while (string.includes('\n\n')) {
    string = string.replace('\n\n', '\n');
  }

  /*
    Remove initial space, which would result in the first element
    being treated as a 'child' of another node
  */
  string = string.trimLeft();

  // Split by new line character and keep the identation count
  return string.split('\n').map(node => {
    return { value: node.trim(), identation: node.length - node.trim().length };
  });
};
