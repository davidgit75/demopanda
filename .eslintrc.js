module.exports = {
  "extends": "airbnb",
  "env": {
    browser : true,
    commonjs: true,
    es6     : true
  },
  "plugins": ["react"],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "arrow-body-style"            : [0, "always"],
    "react/forbid-prop-types"     : [0, { "forbid": ["array", "any", "object"] }],
    "import/no-unresolved"        : [0, {commonjs: true, amd: true}]
  }
};
