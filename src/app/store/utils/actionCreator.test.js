import createAction from './actionCreators';

describe('ACTION CREATORS', () => {
  describe('#createAction', () => {
    it('should create an action object', () => {
      const action1 = createAction('FEATURE/FOO_BAR', 42);

      expect(action1).toHaveProperty('type');
      expect(action1).toHaveProperty('payload');
      expect(action1).toHaveProperty('meta');

      expect(action1.type).toBe('FEATURE/FOO_BAR');
      expect(action1.payload).toBe(42);
      expect(action1.meta).toMatchObject({});

      const action2 = createAction('FEATURE/FOO_BAR', [42, 88]);

      expect(Array.isArray(action2.payload)).toBe(true);
      expect(action2.payload).toMatchObject([42, 88]);

      const action3 = createAction('FEATURE/FOO_BAR', { amd: '-20%' });

      expect(typeof action3.payload).toBe('object');

      expect(action3.payload).toMatchObject({ amd: '-20%' });
    });

    it('should add meta params', () => {
      const action1 = createAction('FEATURE/FOO_BAR', 42, {
        foo: 'bar',
        bar: 'blabla',
      });

      expect(action1.meta).toMatchObject({
        foo: 'bar',
        bar: 'blabla',
      });
    });
  });

});
