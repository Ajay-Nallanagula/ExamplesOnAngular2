"# ExamplesOnAngular2" 

##TypeScript Configuration along with WebPack
    #References: 
        http://www.jbrantly.com/typescript-and-webpack/
        http://www.jbrantly.com/es6-modules-with-typescript-and-webpack/




##Points To be Noted
a) When you want to import a funtionality from a local file(your code) then we need to mention the file path of the code exisiting as shown below
import greeter = require('./Scripts/greeter'); 
b) When you want to import librariress like jQuery, Underscore etc which are installed using npm and reside under node_modules then we need import the namespace directly using the name of the library as shown below
import $ = require('jquery'); or import underscore = require('Underscore');