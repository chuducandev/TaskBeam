import {generateUniqueId} from '../CommonUtils';

describe('generateUniqueId', () => {
  it('should return a string', () => {
    const id = generateUniqueId();
    expect(typeof id).toBe('string');
  });

  it('should return a unique id each time it is called', () => {
    const id1 = generateUniqueId();
    const id2 = generateUniqueId();
    expect(id1).not.toEqual(id2);
  });

  it('should return an id that starts with the given prefix', () => {
    const prefix = 'testPrefix';
    const id = generateUniqueId(prefix);
    expect(id.startsWith(prefix)).toBe(true);
  });

  it('should return an id of correct length without a prefix', () => {
    const id = generateUniqueId();
    expect(id.length).toBe(9);
  });

  it('should return an id of correct length with a prefix', () => {
    const prefix = 'testPrefix';
    const id = generateUniqueId(prefix);
    expect(id.length).toBe(prefix.length + 9);
  });
});
