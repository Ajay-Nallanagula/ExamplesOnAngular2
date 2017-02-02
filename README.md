
https://medium.com/@menezes.carlos/angular-2-setting-up-your-working-environment-52b985d1d341#.4mg4c3kp7
http://www.typescriptlang.org/docs/handbook/tsconfig-json.html
http://www.typescriptlang.org/docs/handbook/compiler-options.html 
http://www.typescriptlang.org/docs/handbook/module-resolution.html#classic
https://angular.io/docs/ts/latest/guide/typescript-configuration.html
https://angular.io/docs/ts/latest/guide/typescript-configuration.html#!#typings

Install TypeScript Latest Version from Node : npm install -g typescript@next 

To Create tsconfig.json : tsc init [--optional commands]
To Create package.json : npm init

What is typings.json??
  a) https://www.npmjs.com/package/typings
  b) install typings : npm install -g typings.
  c) goto project root folder :enter the command  typings init--> will create typings.json.
  d) 



To Install Angular: ALL THESE COMMANDS WILL MAKE AN ENTRY IN package.json
    a)  npm install angular2 --save  //dependencies section
    b)  npm install systemjs --save  //dependencies section
    c)  npm install typings --save-dev //devdependencies section 
    d)  npm install concurrently --save-dev //devdependencies section 
    e)  npm install lite-server --save-dev  //devdependencies section 


What is a Shim ? http://stackoverflow.com/questions/6599815/what-is-the-difference-between-a-shim-and-a-polyfill