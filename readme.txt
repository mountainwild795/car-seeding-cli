npm init -y
npm i typescript -D
npm i commander
npm i @types/comander -D
tsc --init


{

  "compilerOptions": {

    "rootDir": "src",

    "outDir": "dist",

    "target": "es2016",

    "module": "commonjs",

    "esModuleInterop": true,

    "forceConsistentCasingInFileNames": true,

    "strict": true,

    "moduleResolution": "Node"

  }

}


node dist/index.js books --count

node dist/index.js seed

mongosh:

test> use carsdb
switched to db carsdb
carsdb> db.books.deleteMany({})
{ acknowledged: true, deletedCount: 20 }
