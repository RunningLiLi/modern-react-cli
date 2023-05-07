const path = require("path");
const { copyTmpl, copyFile, mergeJSON2JSON } = require("../utils/copy");

function prettierInit(cmdPath, name, option) {
    if (!option.prettier) {
        return;
    }
    
    console.log(`@${name}/prettier: init`);


    copyTmpl(
        path.resolve(__dirname, `./template/.prettierignore`),
        path.resolve(cmdPath, name, ".prettierignore"),
        option
    );

    copyFile(
        path.resolve(__dirname, `./template/.prettierrc.json`),
        path.resolve(cmdPath, name, ".prettierrc.json")
    );

    mergeJSON2JSON(
        path.resolve(__dirname, `./template/package.json`),
        path.resolve(cmdPath, name, "package.json")
    );
}

module.exports.prettierInit = prettierInit;
