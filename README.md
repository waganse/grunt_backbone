# Rff

## Structure
```
rff/
├── app/                   : Application files
│   ├── inc/               : SSI partials
│   ├── _stylus/           : Stylesheets
│   ├── js/                : Scripts
│   └── img/               : Images
│       ├── _sprites/      : Base images for spritesheet
│       └── _glyphs/       : Base SVG files for icon font
├── dist/                  : Distributed files (Not tracked in Git)
├── grunt/                 : Grunt config scripts
│   ├── aliases.js         : Task registration script
│   └── xxxxx.js           : Separated Grunt task
├── package.json           : Development packages installed by npm
├── bower.json             : Front-end packages installed by bower
├── README.md              : Readme document for the project
└── Gruntfile.js           : Base Grunt config
```

### Naming Rules
* Directories begin with `_` aren't copied to "dist" directory. - e.g. `_sass`
* Files begin with `_` aren't compiled by themselves. They work as partials for import. - e.g. `_scaffolding.scss`

## Getting Started
This project uses [Grunt](http://gruntjs.com/) as task runner, and [Bower](http://bower.io/) as component manager.  
You have to set them up on your PC, before start coding.

### 1. Install Node.js
[Download from Node.js official site](http://nodejs.org/), or use your package management software.

### 2. Install Grunt and Bower
Execute the following command.
If you have installed old Grunt (ver. -0.3) already, run `npm uninstall -g grunt` to uninstall it at first.

```shell
$ npm install -g grunt-cli bower
```

### 3. Install Dependencies
Execute the install command in the root directory of "rff" repository.

```shell
$ cd path/to/rff
$ npm install && bower install
```

After that, you can use `grunt` and `bower` commands in the project root directory.

## Build Tasks
* `grunt`  
  Distribute files after testing.

* `grunt serve`  
  Start localhost server with BrowserSync.
  Type [Cntl + C] to exit.

* `grunt serve:dist`  
  Start localhost server using distributed files.  
  This task doesn't contain the build task. Run `grunt` at first as needed.

* `grunt test`  
  Validate source codes and run unit testing.

See "grunt/aliases.js" for more details or customizing the tasks.

## Library Management
See the [Bower document](http://bower.io/#usage) for details.

### Installation

* `bower install --save <package>`  
  Install a package.

* `bower install --save <package>#<version>`  
  Install a specific version of package.

Installed library will be included in HTML automatically using [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep).
You don't need to update the reference manually.

### Search Packages
[Bower - Search](http://bower.io/search/)

----

This project is created on 2016-02-14 using [generator-rff](https://github.com/rakuten-frontend/generator-rff) v0.7.4.
