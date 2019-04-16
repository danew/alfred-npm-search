# Alfred NPM Search

Search NPM quickly to find a package's size


## Install
Clone the repository somewhere out of the way:
```bash
git clone git@github.com:danew/alfred-npm-search.git
```

Install the Workflow:
```bash
npm install
./node_modules/.bin/alfy-init
```
*Requires [Node.js](https://nodejs.org) 10+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*


## Uninstall
Locate where you cloned the repository and run:
```bash
./node_modules/.bin/alfy-cleanup
```


## Usage

In Alfred, type `npms`, <kbd>Space</kbd>, and your package name.   
This will return you a list of packages if there is no exact package with that name, when it matches an exact package it will show you it's size. If you press <kbd>CMD</kbd> it will provide more information.   
Pressing <kbd>Enter</kbd> will open up the repository in your browser.


## Credits

This tool wouldn't exist without the awsome work from the following projects:
* [NPMS](https://npms.io/) - NPM Package search API
* [BundlePhobia](https://bundlephobia.com/) - NPM Package size API
* [Alfy](https://github.com/sindresorhus/alfy) - Alfred 3 Workflow tool
