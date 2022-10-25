## warning:
The image paths in the img/img.JSON file must be changed

## packege install:
 
npm init 
npm install
npm i module-name
npm i --save-dev module-name
npm i --save-dev module-name@1.19
npm i prettier
npm i --save-dev prettier
npm i typescript
npm i typescript --save-dev
npx tsc --init 
npm i jasmine 
npm i jasmine-spec-reporter
npm i --save-dev @types/jasmine
npm i express 
npm i --save-dev @types/express
npm i --save-dev nodemon 
npm install -g ts-node
npm i supertest
npm i --save-dev @types/supertest
npm i eslint
npm init @eslint/config
@typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
Installing @typescript-eslint/eslint-plugin@latest, @typescript-eslint/parser@latest
--------

## Script

    "test": "npm run build && npm run jasmine",
    "prettier": "prettier --config .prettierrc \"src/**/*.ts\" --write",
    "build": "npx tsc",
    "jasmine": "jasmine",
    "start": "nodemon build/index.js",
    "lint": "eslint src/**/*.ts",
    "style":"npm run prettier && npm run lint"
-------------------------------

## Images 

we have only 2 image 
cat
dog 

-------

## requirment for image resizing : 

img=imgName
width=Number
height=Number 

## example:

http://localhost:3000/api/?img=cat&width=100&height=200

## jasmine test
1- Test endpoint responses
http://localhost:3000/api/ 
2-Test if image existe
a) cat
http://localhost:3000/api/?img=cat&width=100&height=200
img exist
b)horse
http://localhost:3000/api/?img=cat&width=100&height=200v
img not exist
3-Test resize Functions
a) if the img done resiz befor 
http://localhost:3000/api/?img=cat&width=100&height=200
the img path found
b) to creat new img resize
http://localhost:3000/api/?img=cat&width=500&height=500
the img path not fount then creat new one 

## another test 
1- http://localhost:3000/api/
width or height shoud be incloud and shoud be numbers
2-http://localhost:3000/api/?img=cat
width or height shoud be incloud and shoud be numbers
3-http://localhost:3000/api/?img=cat&width=300
width or height shoud be incloud and shoud be numbers
4-http://localhost:3000/api/?img=cat&width=300&height=200
return cat img resized
5-http://localhost:3000/api/?img=dog&width=300&height=200
return dog img resized
6-http://localhost:3000/api/?img=horse&width=300&height=200
Image horse not exist
7-http://localhost:3000/api/?img=horse&width=300&height=hi
img or width or height shoud be incloud and shoud be numbers
8-http://localhost:3000/api/?img=horse&width=hi&height=100
img or width or height shoud be incloud and shoud be numbers

-----

Note corrected :

1- in the package.json express and sharp as dependencies and rest as devDependencies fixed
2- Unable to view error messages : 
	a)http://localhost:3000/api/?width=300&height=1000
	You should include image name -> use '?img=' parameter
	b)localhost:3000/api/?img=cat
	width or height shoud be incloud and shoud be ONLY numbers
	c)http://localhost:3000/api/?img=cat&width=300&height=a
	width or height shoud be incloud and shoud be ONLY numbers
	d)localhost:3000/api/?img=cat&width=300&height=0
	width or height shoud be positive numbers
	e)http://localhost:3000/api/?img=cat&width=300&height=500f
	width or height shoud be incloud and shoud be ONLY numbers
	f)http://localhost:3000/api/?img=cat&width=300&height=-1
	width or height shoud be positive numbers
3- function with type parameters fixed
4- Prettier and Lint fixed