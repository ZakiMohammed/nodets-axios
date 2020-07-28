# Calling third-party API in NodeTS using Axios
We are using `jsonplaceholder` API to act as a third-party API for our app.

### Initialize project
Run following commands for initialization

#### Initialize NPM
```
npm init
```

#### Initialize Git
```
git init
```

#### Initialize TS
```
tsc init
```

### Install dependencies
```
npm i express
npm i axios
```
For dev dependencies install following packages
```
npm i typescript -D
npm i @types/node -D
npm i @types/express -D
npm i ts-node-dev -D
```

### Folder structure
Create `src` folder. The `src` folder will hold up the project TS files. The structure for `src` will be as follows:
```
src/
|-- models/
    |-- post.ts
|-- routes/
    |-- posts.ts
server.ts
```

### Package.json scripts
```
"scripts": {
    "start": "node dist/server",
    "build": "tsc -p .",
    "watch": "ts-node-dev --respawn --transpile-only ./src/server.ts"
},
```

### Commands to run and build
```
npm run build
npm start
// or
npm run watch
```