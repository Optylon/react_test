module.exports = {
  root: true,
  globals: {
    preval: false,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:import/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  plugins: ['babel', 'import', 'prettier'],
  rules: {
    'jsx-a11y/heading-has-content' : 'off',
    'linebreak-style': 'off', // Problem with Windows.
    'arrow-body-style': 'off',
    'arrow-parens': 'off', // Incompatible with prettier
    'indent': 'off', // Incompatible with prettier
    'space-before-function-paren': 'off', // Incompatible with prettier
    'no-mixed-operators': 'off', // Incompatible with prettier
    'consistent-this': ['error', 'self'],
    'max-len': ['error', 100, 2, { ignoreUrls: true, },], // airbnb is allowing some edge cases
    'no-console': ['error', { allow: ['warn', 'error'] }], // airbnb is using warn
    'no-alert': 'error', // airbnb is using warn
    'no-param-reassign': 'off',
    'no-prototype-builtins': 'off', // airbnb use error
    'object-curly-spacing': 'off', // use babel plugin rule
    'no-restricted-properties': 'off', // To remove once react-docgen support ** operator.

    'babel/object-curly-spacing': ['error', 'always'],

    'import/unambiguous': 'off', // scripts
    'import/namespace': ['error', { allowComputed: true }],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',

    'react/jsx-indent': 'off', // Incompatible with prettier
    'react/jsx-closing-bracket-location': 'off', // Incompatible with prettier
    'react/jsx-wrap-multilines': 'off', // Incompatible with prettier
    'react/jsx-indent-props': 'off', // Incompatible with prettier
    'react/jsx-handler-names': [
      'error',
      {
        // airbnb is disabling this rule
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/require-default-props': 'off', // airbnb use error
    'react/forbid-prop-types': 'off', // airbnb use error
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }], // airbnb is using .jsx
    'react/no-danger': 'error', // airbnb is using warn
    'react/no-direct-mutation-state': 'error', // airbnb is disabling this rule
    'react/no-find-dom-node': 'off', // I don't know
    'react/sort-prop-types': 'error', // airbnb do nothing here.
    'react/sort-comp': [2, {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        'everything-else',
        '/^render.+$/',
        'render',
      ],
    },],

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'all',
        jsxBracketSameLine: true
      },
    ],
  },
};
