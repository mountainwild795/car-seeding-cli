npm init -y
npm i typescript -D
npm i commander
npm i @types/comander -D
tsc --init

node dist/index.js books --count

node dist/index.js seed



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