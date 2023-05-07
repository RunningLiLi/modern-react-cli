#!/usr/bin/env node
const yargs = require("yargs");
const {runInitPrompts} = require("./runInitPrompts/index");
const {init}=require("./init")
yargs
    .command(
        ["create", "c"],
        "新建一个项目",
        function (yargs) {
            return yargs.option("name", {
                alias: "n",
                demand: false,
                default: "modern-react-template",
                describe: "项目名称",
                type: "string",
            });
        },
        function (argv) {
            runInitPrompts(argv._[1], yargs.argv).then(function (answers) {
                init(argv, answers);
                console.success("恭喜你创建成功！");
            });
        }
    )
    .usage("usage: mrc [options]")
    .usage("usage: mrc <command> [options]")
    .example("mrc create project", "新建一个名为project的项目")
    .alias("h", "help")
    .alias("v", "version")
    .demandCommand().argv;
