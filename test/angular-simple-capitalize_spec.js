describe('angular-simple-capitalize', function () {
  beforeEach(module('bv.simple-capitalize'));

  it('returns the capitalized version of the first', inject(function(capitalizeFilter) {
    expect(capitalizeFilter('hello')).toBe('Hello');
  }));

  it('returns an empty string if null', inject(function(capitalizeFilter) {
    expect(capitalizeFilter(null)).toBe('');
  }));

  it('returns an empty string if not a string', inject(function(capitalizeFilter) {
    expect(capitalizeFilter(0)).toBe('');
    expect(capitalizeFilter({})).toBe('');
  }));
});
