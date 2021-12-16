Feature('Click me');

const range = (count) => [...Array(count)];

Scenario('Click me test', ({ I }) => {
 I.amOnPage('/');

 I.see('(0)');

 range(5).forEach(() => I.click('Click me'));

 I.see('(5)');
});

Scenario('Click 1 test', ({ I }) => {
 I.amOnPage('/');

 I.see('(0)');

 range(5).forEach(() => I.click('1'));

 I.see('(5)');
});

Scenario('Click 2 test', ({ I }) => {
 I.amOnPage('/');

 I.see('(0)');

 range(5).forEach(() => I.click('2'));

 I.see('(10)');
});

Scenario('Click 3 test', ({ I }) => {
 I.amOnPage('/');

 I.see('(0)');

 range(5).forEach(() => I.click('3'));

 I.see('(15)');
});

Scenario('Click 4 test', ({ I }) => {
 I.amOnPage('/');

 I.see('(0)');

 range(5).forEach(() => I.click('4'));

 I.see('(20)');
});

Scenario('Click 5 test', ({ I }) => {
 I.amOnPage('/');

 I.see('(0)');

 range(5).forEach(() => I.click('5'));

 I.see('(25)');
});
