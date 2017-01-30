#References - ES6  
            https://hacks.mozilla.org/2015/08/es6-in-depth-modules/ 
            http://www.2ality.com/2014/09/es6-modules-final.html 

Modules in ES6:
a) ES6 modules are automatically strict-mode code, even if you don’t write "use strict";
b) You can use import and export in modules

Export:
a) You can export any top-level function, class, var, let, or const
    ex:      export class Kittydar {   ... several methods doing image processing ...}
b)  Export Lists: See example
   export {detectCats, Kittydar};
   // no `export` keyword required here
    function detectCats(canvas, options) { ... }
    class Kittydar { ... }
c)  Rename The exports like below:
    function v1() { ... }
    function v2() { ... }
export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
}; 

Import:
a) We can import as shown below:
import {detectCats,[other functions]} from "kittydar.js";
b) Rename the imports as follows:
  import {flip as flipOmelet} from "eggs.js";
  import {flip as flipHouse} from "real-estate.js"; 

When you run a module containing an import declaration, the modules it imports are loaded first, then each module body is executed in a depth-first traversal of the dependency graph,
avoiding cycles by skipping anything already executed.