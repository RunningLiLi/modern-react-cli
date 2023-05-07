# modern-react-cli
用于创建现代react模板的脚手架
## Getting started
```bash
//询问式创建模板，并自动下载依赖
npx modern-react-cli create myproject

cd myproject

//开启项目
npm|pnpm|yarn run dev
```
## 项目结构
├── .gitignore
├── .git
├── .idea
├── bin
│   ├── ci
│   │   ├── index.js
│   │   └── template
│   ├── commitlint
│   │       └── .github.yml.tmpl
│   │   ├── index.js
│   │   └── template
│   │       ├── commitlint.config.js
│   │       └── package.json.tmpl
│   ├── common
│   │   ├── index.js
│   │       ├── base
│   │   └── template
│   │       │   ├── .gitignore
│   │       │   ├── src
│   │       │   ├── CHANGELOG.md
│   │       │   │   ├── App.tsx
│   │       │   │   └── main.tsx
│   │       │   └── vite.config.js
│   │       ├── index.html.tmpl
│   │       │   ├── TODO.md
│   │       ├── package.json.tmpl
│   ├── eslint
│   │       └── README.md.tmpl
│   │   ├── index.js
│   │       ├── .eslintignore
│   │   └── template
│   │       ├── .eslintrc.json.tmpl
│   │       └── package.json.tmpl
│   │   ├── index.js
│   ├── husky
│   │   └── template
│   │       ├── .lintstagedrc.js
│   │       ├── commit-msg.tmpl
│   │       └── pre-commit.tmpl
│   │       ├── package.json.tmpl
│   ├── index.js
│   ├── init.js
│   ├── manager
│   │   └── index.js
│   │   ├── index.js
│   ├── prettier
│   │   └── template
│   │       ├── .prettierignore
│   │       ├── .prettierrc.json
│   │       └── package.json
│   │   └── index.js
│   ├── runInitPrompts
│   ├── typescript
│   │   ├── index.js
│   │       ├── .eslintrc.json.tmpl
│   │   └── template
│   │       ├── package.json.tmpl
│   │       └── tsconfig.json
│   └── utils
│       ├── copy.js
│       └── log.js
│       ├── file.js
├── node_modules
├── package-lock.json
├── package.json
└── pnpm-lock.yaml
