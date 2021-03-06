import { Parser } from 'expr-eval';

export default {
  methods: {
    evaluateExpression(expression, type) {
      try {
        if (type === 'expression') {
          return Parser.evaluate(expression, Object.assign({}, this, this.vdata));
        } else {
          return new Function(expression).bind(Object.assign({}, this, this.vdata))();
        }
      } catch (e) {
        e;
      }
    },
  },
};
