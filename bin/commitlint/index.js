const path = require("path");
const { copyTmpl, mergeTmpl2JSON } = require("../utils/copy");

function commitlintInit(cmdPath, name, option) {
    if (!option.commitlint.commitlint) {
        return;
    }
    console.log(`@${name}/commitlint: init`);
    copyTmpl(
        path.resolve(__dirname, `./template/commitlint.config.js`),
        path.resolve(cmdPath, name, "commitlint.config.js")
    );

    mergeTmpl2JSON(
        path.resolve(__dirname, `./template/package.json.tmpl`),
        path.resolve(cmdPath, name, "package.json"),
        option
    );
}

module.exports.commitlintInit = commitlintInit;
