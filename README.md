Run these commands

    npm install
    npm run build

    # parse the output with acorn (should fail)
    npm run verify

The second command fails because of this code:

```
function ee(r, i, a) {
  if (a) {
    var s = [];
    return e.addRange(s, e.map(a.decorators, ne)), e.addRange(s, e.flatMap(a.parameters, ie)),
      function(r, i, a) {
        function(e, r, n) {
          D.emitDecoratorMetadata &&
            (ae(e) && n.push(o(t, "design:type", ce(e))), se(e) && n.push(o(t, "design:paramtypes", ue(e, r))), oe(e) && n.push(o(t, "design:returntype", le(e))));
        }(r, i, a);
      }(r, i, s), s
  }
}
```

Notice that the functions on line 5&6 don't have a name: `function(r, i, a)` `function(e, r, n)`
