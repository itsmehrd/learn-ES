import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

export default {
  add,
  subtract,
  multiply,
  divide,
};

// export default class {
//   // constructor() {
//   //   import('./add.js').then((m) => (this.add = m.add));
//   //   import('./subtract.js').then((m) => (this.subtract = m.subtract));
//   //   import('./multiply.js').then((m) => (this.multiply = m.multiply));
//   //   import('./divide.js').then((m) => (this.divide = m.divide));
//   // }
// }

// export default {
//   add: () => import('./add.js').then((m) => m.add),
//   subtract: () => import('./subtract.js').then((m) => m.subtract),
//   multiply: () => import('./multiply.js').then((m) => m.multiply),
//   divide: () => import('./divide.js').then((m) => m.divide),
// };

// export default {
//   add: import('./add.js').then((m) => this.add.bind(m.add)),
//   subtract: import('./subtract.js').then((m) => m.subtract),
//   multiply: import('./multiply.js').then((m) => m.multiply),
//   divide: import('./divide.js').then((m) => m.divide),
// };
