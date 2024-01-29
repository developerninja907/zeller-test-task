import {RADIO_BUTTON_DIMENSIONS, STRING} from '../../../../src/utils/constants';

describe('Constants', () => {
  test('STRING object is defined', () => {
    expect(STRING).toBeDefined();
  });

  test('STRING.USER_TYPE is defined and has a string value', () => {
    expect(STRING.USER_TYPE).toBeDefined();
    expect(typeof STRING.USER_TYPE).toBe('string');
  });

  test('STRING.USER is defined and has a string value', () => {
    expect(STRING.USER).toBeDefined();
    expect(typeof STRING.USER).toBe('string');
  });

  test('STRING.MANAGER is defined and has a string value', () => {
    expect(STRING.MANAGER).toBeDefined();
    expect(typeof STRING.MANAGER).toBe('string');
  });

  test('STRING.ADMIN is defined and has a string value', () => {
    expect(STRING.ADMIN).toBeDefined();
    expect(typeof STRING.ADMIN).toBe('string');
  });

  test('STRING.SEARCH_TEXT is defined and has a string value', () => {
    expect(STRING.SEARCH_TEXT).toBeDefined();
    expect(typeof STRING.SEARCH_TEXT).toBe('string');
  });

  test('RADIO_BUTTON_DIMENSIONS is defined and has a numeric value', () => {
    expect(RADIO_BUTTON_DIMENSIONS).toBeDefined();
    expect(typeof RADIO_BUTTON_DIMENSIONS).toBe('number');
  });
});
