import { add } from './operations/add.js';
import { subtract } from './operations/subtract.js';
import { multiply } from './operations/multiply.js';
import { divide } from './operations/divide.js';

export default {
  add,
  subtract,
  multiply,
  divide,
};

// export default class {
//   // constructor() {
//   //   import('./operations/add.js').then((m) => (this.add = m.add));
//   //   import('./operations/subtract.js').then((m) => (this.subtract = m.subtract));
//   //   import('./operations/multiply.js').then((m) => (this.multiply = m.multiply));
//   //   import('./operations/divide.js').then((m) => (this.divide = m.divide));
//   // }
// }

// export default {
//   add: () => import('./operations/add.js').then((m) => m.add),
//   subtract: () => import('./operations/subtract.js').then((m) => m.subtract),
//   multiply: () => import('./operations/multiply.js').then((m) => m.multiply),
//   divide: () => import('./operations/divide.js').then((m) => m.divide),
// };

// export default {
//   add: import('./operations/add.js').then((m) => this.add.bind(m.add)),
//   subtract: import('./operations/subtract.js').then((m) => m.subtract),
//   multiply: import('./operations/multiply.js').then((m) => m.multiply),
//   divide: import('./operations/divide.js').then((m) => m.divide),
// };
