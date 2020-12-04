# unit-admin-compound

## Project setup

```shell
yarn install
```

### Compiles and hot-reloads for development

```shell
yarn serve
```

### Compiles and minifies for production

```shell
yarn build
```

### Lints and fixes files

```shell
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

vscode setting.json

```json
{

  "workbench.iconTheme": "vscode-icons",
  "workbench.colorTheme": "Dracula Soft",
  "typescript.tsdk": "./node_modules/typescript/lib",
  //===========================================
  //============= Editor ======================
  //===========================================
  "explorer.openEditors.visible": 0,
  "editor.minimap.renderCharacters": false,
  "editor.minimap.maxColumn": 300,
  "editor.minimap.showSlider": "always",
  "editor.smoothScrolling": true,
  "editor.cursorBlinking": "phase",
  "editor.cursorSmoothCaretAnimation": true,
  "editor.detectIndentation": false, // vscode默认启用了根据文件类型自动设置tabsize的选项
  "diffEditor.ignoreTrimWhitespace": false,
  "editor.formatOnPaste": true, //自动格式化粘贴的内容
  // "editor.formatOnSave": true, //保存自动格式化
  "editor.suggestSelection": "first",
  "editor.trimAutoWhitespace": true,
  "editor.quickSuggestions": {
    //   快速提示
    "other": true,
    "comments": true,
    "strings": true
  },
  //===========================================
  //============= Other =======================
  //===========================================
  "breadcrumbs.enabled": true, // 启用/禁用导航路径
  "open-in-browser.default": "chrome", // 默认浏览器
  //===========================================
  //============= emmet =======================
  //===========================================
  "emmet.triggerExpansionOnTab": true, // 配置emmet是否启用tab展开缩写
  "emmet.showAbbreviationSuggestions": true,
  "emmet.showExpandedAbbreviation": "always",
  "emmet.syntaxProfiles": {
    // 配置emmet对文件类型的支持，比如vue后缀文件按照html文件来进行emmet扩写
    "vue-html": "html",
    "vue": "html",
    "javascript": "javascriptreact",
    // xml类型文件默认都是单引号，开启对非单引号的emmet识别
    "xml": {
      "attr_quotes": "single"
    }
  },
  "emmet.includeLanguages": {
    // 在react的jsx中添加对emmet的支持
    "jsx-sublime-babel-tags": "javascriptreact"
  },
  //===========================================
  //============= files =======================
  //===========================================
  // "files.autoSave": "onWindowChange", // 窗口失去焦点自动保存
  // "files.autoSaveDelay": 1000, // 自动保存时间
  "files.trimTrailingWhitespace": true, // 启用后，将在保存文件时剪裁尾随空格。
  // 文件末尾插入新行
  "files.insertFinalNewline": true,
  // 删除文件末尾多余的新行
  "files.trimFinalNewlines": true,
  "files.eol": "\n",
  "search.exclude": {
    // 搜索排除这些区域
    "**/node_modules": true,
    "**/*.log": true,
    "**/*.log*": true,
    "**/bower_components": true,
    "**/dist": true,
    "**/elehukouben": true,
    "**/.git": true,
    "**/.gitignore": true,
    "**/.svn": true,
    "**/.DS_Store": true,
    "**/.idea": true,
    "**/.vscode": false,
    "**/yarn.lock": true,
    "**/tmp": true
  },
  "files.exclude": {
    // 排除文件搜索区域，比如node_modules(默认设置已经屏蔽了)
    // "**/node_modules": true,
    "**/bower_components": true,
    "**/.idea": true,
    "**/yarn.lock": true,
    "**/tmp": true,
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true
  },
  "files.watcherExclude": {
    // 文件监视排除
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/.vscode/**": true,
    "**/node_modules/**": true,
    "**/tmp/**": true,
    "**/bower_components/**": true,
    "**/dist/**": true,
    "**/yarn.lock": true
  },
  "files.associations": {
    // 配置文件关联，以便启用对应的智能提示，比如wxss使用css
    "*.vue": "vue",
    "*.wxss": "css"
  },
  "stylelint.enable": true,
  "stylelint.packageManager": "yarn",
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  // ↓↓↓↓↓↓↓↓↓↓↓↓↓ 以下为插件设置 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  // ↓↓↓↓↓↓↓↓↓↓↓↓↓ 需要安装对应的插件 ↓↓↓↓↓↓↓↓↓↓↓↓
  // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  // ===========================================
  // ================ Eslint ===================
  // ===========================================
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue-html",
    "typescript"
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  // "eslint.run": "onSave",
  // "eslint.autoFixOnSave": true,
  // ===========================================
  // ================ Vetur ====================
  // ===========================================
  // "vetur.experimental.templateInterpolationService": true,
  // "vetur.format.options.tabSize": 2,
  // "vetur.languageFeatures.codeActions": false,
  // "vetur.useWorkspaceDependencies": true,
  // 函数注释
  //===========================================
  //============= Code Runner =================
  //===========================================
  "javascript.updateImportsOnFileMove.enabled": "never",
  "liveServer.settings.donotShowInfoMsg": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "terminal.integrated.rendererType": "dom", //关闭liveserver提示
  "telemetry.enableCrashReporter": false,
  "telemetry.enableTelemetry": false,
  "workbench.settings.enableNaturalLanguageSearch": false,
  // 引用路径设置
  "path-intellisense.mappings": {
    "@/": "${workspaceRoot}/src"
  },
  "prettier.requireConfig": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "workbench.sideBar.location": "left",
  "explorer.confirmDelete": false,
  "editor.tabSize": 2,
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
docs：文档更新
feat：新增功能
merge：分支合并 Merge branch ? of ?
fix：bug 修复
perf：性能, 体验优化
refactor：重构代码(既没有新增功能，也没有修复 bug)
style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
test：新增测试用例或是更新现有测试
revert：回滚某个更早之前的提交
chore：不属于以上类型的其他类型
