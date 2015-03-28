#!/usr/bin/env node

/*global process, require, console*/

var mod = require('literate-programming-cli');

var args = mod.opts.parse();

//console.log(args);

var Folder = mod.Folder;

Folder.prototype.encoding = args.encoding;

Folder.lprc(args.lprc, args);

Folder.cache.firstLoad(args.cache, args.cachefile);

Folder.process(args);

process.on('exit', Folder.exit());
