**If you have an error, such as: can not find module './gitignore' do next**

go to frontend folder and type: npm install gitignore
find file frontend/node_modules/globby/index.js 
instead of const gitignore = require('./gitignore'); write const gitignore = require('gitignore')

I don't know why this error