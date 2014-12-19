var closest = require('..');

describe('closest(elem, selector[, context])', function () {
  var fixture, one, two, three;

  beforeEach(function () {
    fixture = document.createElement('div');
    fixture.innerHTML = '' +
      '<div class="ancestor" id="ancestor1">' +
        '<div class="subject" id="subject1">text</div>' +
      '</div>' +
      '<div id="context">' +
        '<div class="ancestor" id="ancestor2">' +
          '<div class="subject" id="subject2">text</div>' +
        '</div>' +
      '</div>';

    document.body.appendChild(fixture);
  });

  afterEach(function () {
    document.body.removeChild(fixture);
  });

  it('returns the closest ancestor', function () {
    var subjectElement = document.getElementById('subject1');
    var ancestorElement = document.getElementById('ancestor1');
    var result = closest(subjectElement, '.ancestor');
    expect(result).toBe(ancestorElement);
  });

  it('returns the closest ancestor in a given context', function () {
    var subjectElement = document.getElementById('subject2');
    var ancestorElement = document.getElementById('ancestor2');
    var contextElement = document.getElementById('context');
    var result = closest(subjectElement, '.ancestor', contextElement);

    expect(result).toBe(ancestorElement);
  });
});
