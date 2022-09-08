import {prettyFormat} from "@testing-library/react";

describe('testing numbers', () => {
    it('testing number', () => {
        const data = {a: 1}
        data['b'] = 2;
        expect(data).toEqual({a: 1, b: 2})
    })

    test('null', () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    });

    test('zero', () => {
        const z = 0;
        expect(z).not.toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeFalsy();
    });
})

describe('testing more numbers', () => {
    const value = 5;
    const decimal = 1.6 + 0.7;
    expect(value).toBeGreaterThan(3)
    expect(value).toBeLessThan(8)
    expect(decimal).toBeCloseTo(2.3)

    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
    });

    test('but there is a "stop" in Christoph', () => {
        expect('Christoph').toMatch(/stop/);
    });

    test('Kunhan kirjoittelen jotain liirum laarumia tai sillain', () => {
        expect('laarumia').toMatch(/laarumia/)
    })
})

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
});

expect.extend({
    async toBeModulated(value1) {
        const value2 = 10;
        if(value1 % value2 === 0) {
           return {
               message: () => ('value was modulated'),
               pass:true
           }
        } else {
            return {
                message: () => ('value was not modulated'),
                pass:false
            }
        }
    }
})

test('just testing and shit', async () => {
    await expect(10).toBeModulated();
    await expect(11).not.toBeModulated();
})

test('dummy test',() => {
    expect(2).toEqual(2)
})

function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

test('mock testing',() => {
    const mockCallback = jest.fn(x => 11 + x);
    forEach([0, 1], mockCallback);

// The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

// The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

// The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(11);
})

test('some mock testing', () => {
    const {format: prettyFormat} = require('pretty-format');

    const myMockFn = jest
        .fn(() => false)
        .mockImplementationOnce(() => true)
        .mockImplementationOnce(() => true);

    console.log(prettyFormat(myMockFn(), myMockFn(), myMockFn(), myMockFn()));

})
