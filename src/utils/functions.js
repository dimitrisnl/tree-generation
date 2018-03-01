export const prepareTree = (text = '') => {
  const base = { title: null, isRoot: true, children: [] };
  let parent = null;

  const arr = text.split('\n').map(page => {
    return { value: page.trim(), identation: page.length - page.trim().length };
  });

  arr.forEach((page, index) => {
    const newObj = { title: page.value, isRoot: false, children: [] };

    if (page.identation === 0) base.children.push(newObj);
    else parent.children.push(newObj);

    if (arr.length > index + 1 && arr[index + 1].identation > page.identation) {
      parent = newObj;
    }
  });

  return base;
};
