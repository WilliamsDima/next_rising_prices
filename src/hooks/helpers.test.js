const { clearDublicat, numberConverter } = require("./helpers")

const mockProducts = [
    {name: 'Хлеб'},
    {name: 'Хлеб'},
    {name: 'Хлеб'},
    {name: 'Сок'},
]

describe('Удаления одинаковых товаров', () => {

    // Вызовется перед каждым тестом
    beforeEach(() => {
        // добавить в БД
    })

    // Вызовется один раз перед тестами
    beforeAll(() => {

    })

    test('Проверка длины', () => {
        expect(clearDublicat(mockProducts)).toHaveLength(2)
    })
    test('Проверка содержимого', () => {
        expect(clearDublicat(mockProducts)).toEqual([{name: 'Хлеб'}, {name: 'Сок'}])
    })

    afterEach(() => {
        // Удалили из БД
    })
})



describe('Проверка шаблона чисел', () => {
    test('Правильное значение', () => {
        expect(numberConverter(40000)).toBe('40,000')
    })
    test('Неправильное значение', () => {
        expect(numberConverter(10)).not.toBe('10,00')
    })
})

