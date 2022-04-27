const fs = require('fs');
const projectName = process.argv[2];
const rootDir = 'src/webparts/HelloWorld'

const remaneInsideFiles = [
  'config/config.json',
  `${rootDir}/components/HelloWorld/HelloWorld.tsx`,
  `${rootDir}/container/HelloWorldContainer.tsx`,
  `${rootDir}/loc/mystrings.d.ts`,
  `${rootDir}/HelloWorldWebPart.manifest.json`,
  `${rootDir}/HelloWorldWebPart.ts`,
  `${rootDir}/components/index.ts`
];

const renameFilesList = [
  [`${rootDir}/HelloWorldWebPart.ts`, `${rootDir}/${projectName}WebPart.ts`],
  [`${rootDir}/HelloWorldWebPart.manifest.json`, `${rootDir}/${projectName}WebPart.manifest.json`],
  [`${rootDir}/container/HelloWorldContainer.tsx`, `${rootDir}/container/${projectName}Container.tsx`],
  [`${rootDir}/components/HelloWorld/HelloWorld.tsx`, `${rootDir}/components/HelloWorld/${projectName}.tsx`],
  [`${rootDir}/components/HelloWorld`, `${rootDir}/components/${projectName}`],
  [`${rootDir}`, `src/webparts/${projectName}`],
];

const renameNames = [
  ['helloworld-web-part', `${projectName.toLocaleLowerCase()}-web-part`],
  [/HelloWorld/g, `${projectName}`],
  ['Hello World', `${projectName}`]
]

const renameInsideFileSync = () => {
  for (const filePath of remaneInsideFiles) {
     let file = fs.readFileSync(filePath, 'utf8');
     for (const rename of renameNames) {
      file = file.replace(rename[0], rename[1]);
    }

    fs.writeFileSync(filePath, file);
    console.log(`Сontent overwritten in file ${filePath}`)
    }
}

const renameFilesSync = () => {
for (const filePath of renameFilesList) {
  fs.renameSync(filePath[0], filePath[1]);
  console.log(`File renamed from ${filePath[0]} to ${filePath[1]}`)
}
}

renameInsideFileSync();
renameFilesSync();





