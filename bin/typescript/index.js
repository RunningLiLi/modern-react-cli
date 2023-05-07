const path = require("path");
const { copyTmpl, mergeTmpl2JSON } = require("../utils/copy");

function typescriptInit(cmdPath, name, option) {
    if (!option.typescript) {
        return;
    }

    console.log(`@${name}/typescript: init`);
    if(option.eslint){
        mergeTmpl2JSON(
            path.resolve(__dirname, `./template/.eslintrc.json.tmpl`),
            path.resolve(cmdPath, name, ".eslintrc.json"),
            option
        )
    }

    copyTmpl(
        path.resolve(__dirname, `./template/tsconfig.json`),
        path.resolve(cmdPath, name, "tsconfig.json"),
        option
    );

    mergeTmpl2JSON(
        path.resolve(__dirname, `./template/package.json.tmpl`),
        path.resolve(cmdPath, name, "package.json"),
        option
    );
}

module.exports.typescriptInit = typescriptInit;
