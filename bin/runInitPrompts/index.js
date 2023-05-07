const inquirer = require("inquirer");
// import inquirer from 'inquirer';

function runInitPrompts(pathname, argv) {
    const { name } = argv;

    const promptList = [
        {
            type: "input",
            message: "project name:",
            name: "name",
            default: pathname || name,
            validate: function (val) {
                if (!val) {
                    return "Please enter name";
                }
                if (val.match(/\s+/g)) {
                    return "Forbidden library name";
                }
                return true;
            },
        },
        {
            type: "confirm",
            name: "typescript",
            message: "use typescript?",
            default: true,
        },
        {
            type: "confirm",
            name: "prettier",
            message: "use prettier?",
            default: true,
        },
        {
            type: "confirm",
            name: "eslint",
            message: "use eslint?",
            default: true,
        },
        {
            type: "checkbox",
            message: "use commitlint:",
            name: "commitlint",
            choices: ["commitlint", "standard-version"],
            default: ["commitlint"],
            filter: function (values) {
                return values.reduce(
                    (res, cur) => ({ ...res, [cur]: true }),
                    {}
                );
            },
        },
        {
            type: "confirm",
            name: "husky",
            message: "use husky?",
            default: true,
        },
        {
            type: "list",
            message: "use ci:",
            name: "ci",
            choices: ["github","none"],
            // choices: ["github", "circleci", "travis", "none"],
            filter: function (value) {
                return {
                    github: "github",
                    circleci: "circleci",
                    travis: "travis",
                    none: null,
                }[value];
            },
        },
        {
            type: 'list',
            message: 'package manager:',
            name: 'manager',
            default: 'pnpm',
            choices: ['npm', 'yarn', 'pnpm'],
            filter: function (value) {
                return ({
                    npm: 'npm',
                    yarn: 'yarn',
                    pnpm: 'pnpm',
                    'no install': null
                }[value])
            }
        }
    ];

    return inquirer.prompt(promptList);
}

exports.runInitPrompts = runInitPrompts;
