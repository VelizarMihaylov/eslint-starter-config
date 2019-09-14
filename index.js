module.export = {
  "extends": [
    "standard",
    "standard-react"
  ],
  "parser": "babel-eslint",
  "plugins": [
    "jest"
  ],
  "rules": {
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 2,
        "maxEOF": 1
      }
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }
    ],
    "react/prop-types": [
      0
    ]
  },
  "env": {
    "jest/globals": true
  },
  "globals": {
    "fetch": true,
    "Headers": true
  }
}
