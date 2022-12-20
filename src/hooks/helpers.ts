import { IProduct } from "src/stores/redusers/main/types"

// создаю шаблон для чисел, разделяю запятой
export const numberConverter = (num: number) => num && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

// рандобный цвет
export const randomRgba = () => {
    const o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 1 + ')';
}

// убираю дубликаты из массива
export const clearDublicat = (products: IProduct[]) => {
    const dataName: any = {}
    return products.filter((item) => {
        if (!dataName[item.name.trim()]) {
          dataName[item.name.trim()] = true
          return item
        }
    })
}

// сортировка по дате (сначало старые)
export const sortOnDate = (products: IProduct[]) => products?.sort((prev, next) => +new Date(prev.date) - +new Date(next.date))

export type ProductData = {
    name: string
    date: {
        start: number | Date 
        end: number | Date 
        periods: {}
    }
}

export const getProductData = (products: IProduct[]): ProductData => {
    const sortDateProducts = sortOnDate(products)

    const startDate = sortDateProducts?.length &&  new Date(sortDateProducts[0].date)
    const endDate = sortDateProducts?.length &&  new Date(sortDateProducts[sortDateProducts.length - 1].date)

    const periods: any = {}

    const data: ProductData = {
        name: products[0].name,
        date: {
            start: startDate,
            end: endDate,
            periods
        }
    }

    sortDateProducts.forEach((p) => {
        const date = `${new Date(p.date).getMonth()}/${new Date(p.date).getFullYear()}`

        if (!periods[date]) {
            periods[date] = [p.price]
        } else {
            periods[date].push(p.price)
        }
    })

    for (const key in periods) {
        if (periods[key]) {
            periods[key] = (periods[key].reduce((prev: number, next: number) => prev + next, 0) / periods[key].length).toFixed(2)
        }
    }

    return data
}
