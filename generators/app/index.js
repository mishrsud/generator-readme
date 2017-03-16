var Generator = require('yeoman-generator');
var fs = require('fs');
var path = require('path');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.option('babel'); // This method adds support for a `--babel` flag
    }

    createReadme() {
        var filename = path.join(__dirname, 'template.md');
        console.log(filename);
        fs.readFile(filename, 'utf-8', function (ex, data) {
            if (ex) {
                throw ex;
            }

            fs.writeFile('README.md', data, function (err) {
                if (err) {
                    throw err;
                }

                console.log('Done creating file');
            });
            console.log('Done reading template');
        });
    }
};