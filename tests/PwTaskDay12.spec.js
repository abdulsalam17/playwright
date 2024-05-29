const { test, expect } = require("@playwright/test")

test.describe('Block1', async () => {

    test.beforeAll(async () => {
        console.log('Inside before all == inside describe')
    })

    test.afterAll(async () => {
        console.log('Inside after all')
    })

    test.afterEach(async () => {
        console.log('Inside afterEach == inside describe')
    })

    test('Test1', async () => {
        console.log('Inside Test1')
    })


    test('Test2', async () => {
        console.log('Inside Test2')
    })
})

/// Test outside describe block

test.beforeAll(async () => {
    console.log('Inside before all ====== outside describe')
})

test.afterAll(async () => {
    console.log('Inside after all ------- outside describe')
})

test.afterEach(async () => {
    console.log('Inside afterEach == outside describe')
})


test('Test3', async () => {
    console.log('Inside Test3')
})

test('Test4', async () => {
    console.log('Inside Test4')
})

test('Test5', async () => {
    console.log('Inside Test5')
})



