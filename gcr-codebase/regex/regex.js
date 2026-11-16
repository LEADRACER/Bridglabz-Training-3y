let str = 'Hello World 123';
let pattern = /World/;
console.log(pattern.test(str));

let text = 'The year is 2024';
let regex = /\d+/;
console.log(text.match(regex));

let email = 'test@example.com';
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailRegex.test(email));

let sentence = 'I love cats and dogs';
let replaced = sentence.replace(/cats/g, 'birds');
console.log(replaced);

let input = 'apple,banana,orange';
let parts = input.split(/,/);
console.log(parts);

let globalRegex = /a/g;
let matches = 'banana'.match(globalRegex);
console.log(matches);

let caseInsensitive = /hello/i;
console.log(caseInsensitive.test('HELLO'));

let multiline = /line1\nline2/m;
console.log(multiline.test('line1\nline2'));

let digitsOnly = /^\d+$/;
console.log(digitsOnly.test('12345'));
console.log(digitsOnly.test('12a45'));

let wordBoundary = /\bcat\b/;
console.log(wordBoundary.test('The cat sat'));
console.log(wordBoundary.test('concatenate'));

let optionalChar = /colou?r/;
console.log(optionalChar.test('color'));
console.log(optionalChar.test('colour'));

let groupExample = /(\d{3})-(\d{4})/;
let result = '123-4567'.match(groupExample);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);

let positiveLookahead = /\d+(?= dollars)/;
console.log('100 dollars'.match(positiveLookahead));

let negativeLookahead = /\d+(?! cents)/;
console.log('100 dollars'.match(negativeLookahead));

let positiveLookbehind = /(?<=\$)\d+/;
console.log('$100'.match(positiveLookbehind));

let nonCapturing = /(?:foo|bar)baz/;
console.log(nonCapturing.test('foobaz'));

let quantifiers = /a{2,4}/;
console.log('aa'.match(quantifiers));
console.log('aaaa'.match(quantifiers));
console.log('aaaaa'.match(quantifiers));

let alternation = /cat|dog/;
console.log(alternation.test('I have a dog'));
console.log(alternation.test('I have a bird'));

let charClass = /[aeiou]/g;
console.log('hello'.match(charClass));

let negatedClass = /[^aeiou]/g;
console.log('hello'.match(negatedClass));

let whitespace = /\s+/g;
console.log('a b  c'.replace(whitespace, '-'));

let unicode = /\p{Emoji}/u;
console.log(unicode.test('Hello 😀'));

let flags = /test/gi;
console.log(flags.flags);

let sticky = /abc/y;
sticky.lastIndex = 0;
console.log(sticky.test('abc def'));
