const path = require("path");
const { copyTmpl } = require("../utils/copy");

function ciInit(cmdPath, name, option) {
    if (!option.ci) {
        return;
    }
    
    console.log(`@${name}/ci: init`);
    
    if (option.ci === 'github') {
        copyTmpl(
            path.resolve(__dirname, `./template/.github.yml.tmpl`),
            path.resolve(cmdPath, name, ".github/workflows/ci.yml"),
            option
        );
    } else if (option.ci === 'circleci') {
        copyTmpl(
            path.resolve(__dirname, `./template/.circleci.yml.tmpl`),
            path.resolve(cmdPath, name, ".circleci/config.yml"),
            option
        );
    } else if (option.ci === 'travis') {
        copyTmpl(
            path.resolve(__dirname, `./template/.travis.yml`),
            path.resolve(cmdPath, name, ".travis.yml"),
            option
        );
    }
}

module.exports.ciInit = ciInit;
