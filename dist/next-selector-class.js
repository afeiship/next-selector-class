(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var NxAbstractDomSelector = nx.AbstractDomSelector || require('next-abstract-dom-selector');

  var NxSelectorClass = nx.declare('nx.SelectorClass', {
    extends: NxAbstractDomSelector,
    methods: {
      exec: function() {
        return this.context.getElementsByClassName(this.selector);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxSelectorClass;
  }
})();
