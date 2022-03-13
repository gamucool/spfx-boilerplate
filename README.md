# SPFx Boilerplate

Boilerplate for making SPFx project for SharePoint 2019 with updated versions of key component (React, TypeScript) and DI container.

### Usage

```bash
git clone the repo
npm run preinstall
npm install
```

If you use windows OS run 
```bash
npm run fixbuildw
```

for Linux/MacOS run 
```bash
npm run fixbuildu
```
This command you need to run always after package installation for changing version of TypeScript from 2 to 4.

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### CLI options

* gulp clean - Clean bundle and package
* gulp test - Run test (in progress)
* gulp serve - Run for debugging (commonly for using with --nobrowser key and connecting debugger from vs code)
* gulp bundle - Make bundle (for production with --ship param)
* gulp package-solution - Make SPFx package (for production with --ship param)

###Issues
roundedCorner2 Error& Add this line to webpart constructor: ```loadTheme({effects:{roundedCorner2: '0px'}})``` 

