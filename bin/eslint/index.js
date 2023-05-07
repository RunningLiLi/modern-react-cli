const path = require("path");
const { copyTmpl, mergeTmpl2JSON } = require("../utils/copy");

function eslintInit(cmdPath, name, option) {
    if (!option.eslint) {
        return;
    }
    
    console.log(`@${name}/eslint: init`);

    
    copyTmpl(
        path.resolve(__dirname, `./template/.eslintignore`),
        path.resolve(cmdPath, name, ".eslintignore")
    );

    copyTmpl(
        path.resolve(__dirname, `./template/.eslintrc.json.tmpl`),
        path.resolve(cmdPath, name, ".eslintrc.json"),
        option
    );

    mergeTmpl2JSON(
        path.resolve(__dirname, `./template/package.json.tmpl`),
        path.resolve(cmdPath, name, "package.json"),
        option
    );
}

module.exports.eslintInit = eslintInit;
