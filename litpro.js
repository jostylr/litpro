#!/usr/bin/env node

/*global process, require */

var mod = require('literate-programming-cli');

var args = mod.opts.parse();

args.build = args.build.map(function (el) {
    if (el.slice(-1) === "/") {
        return el.slice(0, -1);
    } else {
        return el;
    }
});

args.other.forEach(function (arg) {
    var pair = arg.split(":");
    if (pair.length === 1) {
        args[pair[0]] = true;
    } else if (pair.length === 2) {
        args[pair[0]] = pair[1]; 
    } else {
        args[pair[0]] = pair.slice(0);
    }
});

//console.log(args);

var Folder = mod.Folder;

Folder.prototype.encoding = args.encoding;

Folder.lprc(args.lprc, args);

Folder.process(args);

process.on('exit', Folder.exit());
