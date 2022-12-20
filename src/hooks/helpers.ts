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

export const getMonth = (startDate: Date, endDate: Date) => {
    let labels = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

    let mouths = [...labels]

    if (startDate.getFullYear() < endDate.getFullYear()) {

        if (endDate.getFullYear() - startDate.getFullYear() > 1) {

            let startMouths = mouths.slice(startDate?.getMonth())
            let endMouths = mouths.slice(0, endDate.getMonth() + 1)
            endMouths[0] = endMouths[0] + ` ${endDate.getFullYear()}`
            startMouths[0] = startMouths[0] + ` ${startDate.getFullYear()}`

            for (let i = 0; i < endDate.getFullYear() - startDate.getFullYear(); i++) {
            const currentYear = startDate.getFullYear() + i
        
            let newYear = [...labels]
            newYear[0] = newYear[0] + ` ${currentYear}`
        
            mouths = [...startMouths, ...newYear, ...endMouths]
            }
        } else {
            let startMouths = mouths.slice(startDate?.getMonth())
            let endMouths = mouths.slice(0, endDate.getMonth() + 1)
            endMouths[0] = endMouths[0] + ` ${endDate.getFullYear()}`
            startMouths[0] = startMouths[0] + ` ${startDate.getFullYear()}`
            mouths = [...startMouths, ...endMouths]
        }
    } else {
        mouths = labels.slice(startDate && startDate?.getMonth(), endDate && endDate?.getMonth() + 1)
    }

    return mouths
}