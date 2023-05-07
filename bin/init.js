
const {checkProjectExists}=require("./utils/file")
const {prettierInit}=require("./prettier/index")
const {commonInit}=require("./common/index")
const {eslintInit}=require("./eslint/index")
const {huskyInit}=require("./husky/index")
const {commitlintInit}=require("./commitlint/index")
const {ciInit}=require("./ci/index")
const {typescriptInit}=require("./typescript/index")
const {logInit}=require("./utils/log")
const {progressbarInit}=require("./manager/index")
function init(argv, answers){
    const cmdPath = process.cwd();

    const option = { ...argv, ...answers };
    const { name } = option;

    const pathname = String(
        typeof argv._[1] !== "undefined" ? argv._[1] : name
    );
    logInit()
    // 运行命令
    if (!pathname) {
        console.error("error: mrc create need name");
        return;
    }

    if (checkProjectExists(cmdPath, pathname)) {
        console.error("error: The library is already existed!");
        return;
    }

    [
        commonInit,
        prettierInit,
        eslintInit,
        huskyInit,
        commitlintInit,
        ciInit,
        typescriptInit
    ].map(initFnc=>initFnc(cmdPath,name,option));
    progressbarInit(cmdPath,name,option)
        .then(()=>{
            console.success(`Enter the following command to run 😀!`)
            console.success(`cd ${option.name}`)
            console.success(`${option.manager} run dev`);
        },()=>{
            console.error("install fail😭!")
        })
}
exports.init=init;