describe('advanced tree test', function () {
  let tree;

  beforeEach(function () {
    tree = new Tree(5);
  });

  it('should addChild to the respective node', function () {
    tree.root.addChild(1);
    tree.root.children[0].addChild(2);

    expect(tree.contains(2)).to.equal(true);
    expect(tree.contains(3)).to.equal(false);
  });

  it('should not find nodes that were not added', function () {
    tree.root.addChild(1);
    tree.root.children[0].addChild(2);
    tree.root.children[0].addChild(3);
    tree.root.children[0].children[1].addChild(4);

    expect(tree.contains(10)).to.equal(false);
    expect(tree.contains(123)).to.equal(false);
    expect(tree.contains(31)).to.equal(false);
    expect(tree.contains(23)).to.equal(false);

  });

  it('should use traverse and apply a callback to every node in the tree', function () {
    let expected = [5, 1, 2, 3, 4, 6, 7];

    let actual = [];
    let pushValues = (nodeValue) => {
      actual.push(nodeValue);
    };

    tree.root.addChild(1);
    tree.root.children[0].addChild(2);
    tree.root.children[0].children[0].addChild(3);
    tree.root.children[0].children[0].children[0].addChild(4);
    tree.root.children[0].children[0].children[0].children[0].addChild(6);
    tree.root.children[0].children[0].children[0].children[0].children[0].addChild(7);

    tree.traverse(pushValues);

    expect(actual.length).to.equal(expected.length);
    expect(JSON.stringify(actual)).to.equal(JSON.stringify(expected));
  });
});