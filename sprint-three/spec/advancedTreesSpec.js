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
});