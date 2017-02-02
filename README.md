"# ExamplesOnAngular2" 

##TypeScript Configuration along with WebPack
    #References: 
        #WebPack
            https://www.npmjs.com/package/ts-loader 
            http://www.jbrantly.com/typescript-and-webpack/
            http://www.jbrantly.com/es6-modules-with-typescript-and-webpack/
      
        #CommonJs
            http://webpack.github.io/docs/commonjs.html 
      
         #ES6  
            https://hacks.mozilla.org/2015/08/es6-in-depth-modules/ 
            http://www.2ality.com/2014/09/es6-modules-final.html 



##Points To be Noted
a) When you want to import a funtionality from a local file(your code) then we need to mention the file path of the code exisiting as shown below
import greeter = require('./Scripts/greeter');  if the file is in same directory we can just use './' ex : import greeter = require('./greeter');
b) When you want to import librariress like jQuery, Underscore etc which are installed using npm and reside under node_modules then we need import the namespace directly using the name of the library as shown below
import $ = require('jquery'); or import underscore = require('Underscore');