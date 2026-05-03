
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/online-exam-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-OSABPVT5.js"
    ],
    "route": "/online-exam-app"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OSABPVT5.js"
    ],
    "route": "/online-exam-app/diplomes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFCRCBZR.js",
      "chunk-XECWNP7F.js",
      "chunk-GB3XNEMD.js",
      "chunk-OGD64XIW.js"
    ],
    "route": "/online-exam-app/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFCRCBZR.js",
      "chunk-XECWNP7F.js",
      "chunk-GB3XNEMD.js",
      "chunk-OGD64XIW.js"
    ],
    "redirectTo": "/online-exam-app/register/userEmail",
    "route": "/online-exam-app/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFCRCBZR.js",
      "chunk-XECWNP7F.js",
      "chunk-GB3XNEMD.js",
      "chunk-OGD64XIW.js"
    ],
    "route": "/online-exam-app/register/userEmail"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFCRCBZR.js",
      "chunk-XECWNP7F.js",
      "chunk-GB3XNEMD.js",
      "chunk-OGD64XIW.js"
    ],
    "route": "/online-exam-app/register/verifyEmail"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFCRCBZR.js",
      "chunk-XECWNP7F.js",
      "chunk-GB3XNEMD.js",
      "chunk-OGD64XIW.js"
    ],
    "route": "/online-exam-app/register/userInfo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFCRCBZR.js",
      "chunk-XECWNP7F.js",
      "chunk-GB3XNEMD.js",
      "chunk-OGD64XIW.js"
    ],
    "route": "/online-exam-app/register/userPassword"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFCRCBZR.js",
      "chunk-XECWNP7F.js",
      "chunk-GB3XNEMD.js",
      "chunk-OGD64XIW.js"
    ],
    "route": "/online-exam-app/forgotPassword"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFCRCBZR.js",
      "chunk-XECWNP7F.js",
      "chunk-GB3XNEMD.js",
      "chunk-OGD64XIW.js"
    ],
    "route": "/online-exam-app/resetPassword"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFCRCBZR.js",
      "chunk-XECWNP7F.js",
      "chunk-GB3XNEMD.js",
      "chunk-OGD64XIW.js"
    ],
    "route": "/online-exam-app/newPassword"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OFHD25RE.js"
    ],
    "route": "/online-exam-app/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 17574, hash: '01e2337d6302373211e35eda7e4e5b363f9ac972299aa737362e2d2314fc4044', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1165, hash: 'f6b1ff8c723de9afa4ef20baf67bf0873ead570285f589b8e551a7fdf2ed531a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 288, hash: '7a4099e9f89aa5d79b6c6866fc31e19cb4787c4c4cf9f7b0192b88a3fb821014', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'diplomes/index.html': {size: 288, hash: '7a4099e9f89aa5d79b6c6866fc31e19cb4787c4c4cf9f7b0192b88a3fb821014', text: () => import('./assets-chunks/diplomes_index_html.mjs').then(m => m.default)},
    'register/verifyEmail/index.html': {size: 24498, hash: '63e5f0b626cabd47432c4d6eac9dad8d933afad4c695d82208e084678f37e74a', text: () => import('./assets-chunks/register_verifyEmail_index_html.mjs').then(m => m.default)},
    'register/userInfo/index.html': {size: 33418, hash: 'd71782da038d3fe86e1e342b1bc5080984aeef23b7c2d92eb608788ba3259e9d', text: () => import('./assets-chunks/register_userInfo_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28550, hash: '1eb404e73ee3c8f2165f1c5b35176f30b272ed8c59744df40f1b7c34c2bd983f', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/userPassword/index.html': {size: 29098, hash: '2402b93c0c8d2014248eb5076f6aa58cd6308bf27ce346d968eeaab98f23d699', text: () => import('./assets-chunks/register_userPassword_index_html.mjs').then(m => m.default)},
    'resetPassword/index.html': {size: 26042, hash: 'ae12af2cecd300203b13367af4f02a2c64ee26031a5735a391975888cad48793', text: () => import('./assets-chunks/resetPassword_index_html.mjs').then(m => m.default)},
    'forgotPassword/index.html': {size: 27133, hash: 'ee593eebceca3d77a5d5382936038f55c8ff204b5f08744f0583635683751aab', text: () => import('./assets-chunks/forgotPassword_index_html.mjs').then(m => m.default)},
    'newPassword/index.html': {size: 28737, hash: '723667e3b6e756c916a790eec48a8b3662ebd98b961ae61b564e66881624fdd9', text: () => import('./assets-chunks/newPassword_index_html.mjs').then(m => m.default)},
    'register/userEmail/index.html': {size: 27651, hash: 'd53ec9ac7e05e0b1fd2fb6a738c8526768f29b3bff03c2fa726536f3cb7ae789', text: () => import('./assets-chunks/register_userEmail_index_html.mjs').then(m => m.default)},
    'styles-LXHZR6ZK.css': {size: 84604, hash: 'VWN10tXyoWE', text: () => import('./assets-chunks/styles-LXHZR6ZK_css.mjs').then(m => m.default)}
  },
};
