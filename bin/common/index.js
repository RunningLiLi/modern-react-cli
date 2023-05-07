const path = require("path");
const { copyDir, copyTmpl } = require("../utils/copy");
function commonInit(cmdPath, name, option) {
    // init root
    copyDir(
        path.resolve(__dirname, `./template/base`),
        path.resolve(cmdPath, name)
    );

    // init html
    copyTmpl(
        path.resolve(__dirname, `./template/index.html.tmpl`),
        path.resolve(cmdPath, name, 'index.html'),
        option,
    );
    // init readme
    copyTmpl(
        path.resolve(__dirname, `./template/README.md.tmpl`),
        path.resolve(cmdPath, name, "README.md"),
        option
    );
    // init package
    copyTmpl(
        path.resolve(__dirname, `./template/package.json.tmpl`),
        path.resolve(cmdPath, name, 'package.json'),
        option,
    );
}

module.exports.commonInit = commonInit;
