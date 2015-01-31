The New Hackfoldr for MozTW
============

Using:

* Compass
* Semantic UI
* Jade
* jQuery
* Handlebars
* Tabletop
* Fire.app or gulp.js

Development
------------
[![devDependency Status](https://david-dm.org/hackfoldr/hackfoldr-2.0/dev-status.svg?style=flat-square)](https://david-dm.org/hackfoldr/hackfoldr-2.0#info=devDependencies)

* development on master branch
* deploy on gh-pages branch (It would auto deploy via travis-ci. You only commit on master branch and push.)

### Fire.app for development

* development:
    * using Fire.app to watch .jade and .sass
    * using Github for Windows or git on linux to sync and commit

### Gulp.js for development

* pre-dev:
    * install: [node](http://nodejs.org/)
    * install: ruby 2.0.0 (use [rubyuinstaller](http://rubyinstaller.org) on windows, use `rvm install 2.0.0` on linux/mac)
    * install compass (`gem install compass`)
    * `npm i`
* devlopment:
    * `npm start`
    * open `http://localhost:3000/` to see the result.


### React Version

```
+-- client
|  +-- index.html
|  +-- global.sass
|  +-- index.js (entry point)
+-- src
|  +-- components
+-- webpack.config.js
```

* development:
    * `$ npm install`
    * `$ npm run react-dev`

Mockup / Prototype
------------

http://hack.etblue.tw/

License
------------

Same as hackfoldr
