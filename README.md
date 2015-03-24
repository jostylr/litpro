# litpro 

This is the thin command-line client for
[literate-programming-lib](https://github.com/jostylr/literate-programming-lib).
It contains the minimal functionality for literate programming, but it does
not have any other modules such as jshint included in it. For a fat client,
check out
[literate-programming](https://github.com/jostylr/literate-programming)

Install using `npm install litpro`

Usage is `./node_modules/bin/litpro file` and it has some command flags. 

If you want a global install so that you just need to write `litpro` then use
`npm install -g litpro`.
## Example usage

 Save the following code to file `project.md` and run `litpro project.md`.

    # Welcome

    So you want to make a literate program? Let's have a program that outputs
    all numbers between 1 to 10.

    Let's save it in file count.js

    [count.js](#Structure "save:")

    ## Structure 

    We have some intial setup. Then we will generate the array of numbers. We
    end with outputting the numbers. 

        var numarr = [], start=1, end = 11, step = 1;

        _"Loop"

        _"Output"

    ## Output 

    At this point, we have the array of numbers. Now we can join them with a
    comma and output that to the console.

        console.log("The numbers are: ", numarr.join(", ") );

    ## Loop

    Set the loop up and push the numbers onto it. 

        var i;
        for (i = start; i < end; i += step) {
            numarr.push(i);
        }


For more on the document format, see 
[literate-programming-lib](https://github.com/jostylr/literate-programming-lib).

## Flags

The various command-line flags are

* -e, --encoding Specify the default encoding. It defaults to utf8, but any
  encoding supported by iconv-lite works. To override that behavior per loaded
  file from a document, one can put the encoding between the colon and pipe in
  the directive title. This applies to both reading and writing. 
* --file A specified file to process. It is possible to have multiple
  files, each proceeded by an option. Also any unclaimed arguments will be
  assumed to be a file that gets added to the list. 
* -l, --lprc This specifies the lprc.js file to use. None need not be
  provided. The lprc file should export a function that takes in as arguments
  the Folder constructor and an args object (what is processed from the
  command line). This allows for quite a bit of sculpting. See more in lprc. 
* -b, --build  The build directory. Defaults to build. Will create it if it
  does not exist. Specifying . will use the current directory. 
* -s, --src  The source directory to look for files from load directives. The
  files specified on the command line are used as is while those loaded from
  those files are prefixed. Shell tab completion is a reason for this
  difference. 
* -c, --cache The cache is a place for assets downloaded from the web.
* --cachefile This gives an alternate name for the cache file that registers
  what is downloaded. Default is `.cache`
* --checksum This gives an alternate name for the file that lists the hash
  for the generate files. If the compiled text matches, then it is not
  written. Default is `.checksum` stored in the build directory.
* -d, --diff This computes the difference between each files from their
  existing versions. There is no saving of files. 
* -o, --out This directs all saved files to standard out; no saving of
  compiled texts will happen. Other saving of files could happen; this just
  prevents those files being saved by the save directive from being saved. 
* -f, --flag This passes in flags that can be used for conditional branching
  within the literate programming. For example, one could have a production
  flag that minimizes the code before saving. 

## Use and Security

This thin client is envisioned to be a developer dependency for projects using
it. Thus one would install it via npm's json package system along with any
litpro plugins. 

The only caveat to this is that it is inherently unsecure to compile literate
program documents. No effort has been made to make it secure. Compiling a
literate program using this program is equivalent to running arbitrary code on
your computer. Only compile from trusted sources, i.e., use the same
precautions as running a node module. 
 
## LICENSE

[MIT-LICENSE](https://github.com/jostylr/literate-programming/blob/master/LICENSE-MIT)
