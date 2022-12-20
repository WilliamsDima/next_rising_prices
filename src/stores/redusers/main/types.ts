export interface IProduct {
    name: string
    nds: number
    paymentType: number
    price: number
    productType: number
    productCodeData: {
        gtin: number
        rawProductCode: string
        productIdType: number
        sernum: string
    } | string,
    quantity: number
    sum: number
    date: string
}

export interface ICheck {
    _id: string
    ticket: {
        document: {
            receipt: {
                cashTotalSum: number
                code: number
                creditSum: number
                dateTime: string
                ecashTotalSum: number
                fiscalDocumentFormatVer: number
                fiscalDocumentNumber: number
                fiscalDriveNumber: string
                fiscalSign: string
                fnsUrl: string
                items: IProduct[]
                kktRegId: string
                nds10: number
                nds18: number
                operationType: number
                operator: string
                prepaidSum: number
                provisionSum: number
                requestNumber: number
                retailPlace: string
                retailPlaceAddress: string,
                shiftNumber: number
                taxationType: number
                appliedTaxationType: number
                totalSum: number
                user: string
                userInn: string
            }
        }
    }
}

export interface IStore {
    checks: ICheck[] | null
    products: IProduct[] | null
    selectProduct: IProduct | null
}