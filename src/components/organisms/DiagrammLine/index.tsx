import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useAppSelector } from '../../../hooks/hooks'
import { getProductData, randomRgba } from 'helpers'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Рост цен',
    },
  },
}

// https://react-chartjs-2.js.org/examples/line-chart

const DiagrammLine = () => {

  const { checks, products, selectProduct } = useAppSelector(store => store.main)

  // поиск всех товаров по выбранному названию
  const productsSearch = products?.filter((item) => {
    const isProduct = selectProduct?.name.toLocaleLowerCase().trim() === item.name.toLocaleLowerCase().trim()
      if (isProduct) {
        return item
      }
  })


  const labels: string[] = []
  const dataPrice: number[] = []


  const data: any = productsSearch?.length && getProductData(productsSearch)

  type Periods = {}

  if (data) {
    for (const key in data.date.periods) {
      const currentPeriod = data.date.periods[key as keyof Periods]

      labels.push(key)

      if (currentPeriod) {
        dataPrice.push(+currentPeriod)
      }
      
    }
  }


  const datasets = [{
    label: data?.name,
    data: dataPrice,
    borderColor: randomRgba(),
    backgroundColor: randomRgba(),
  }]


  const dataDiagramm = {
    labels,
    datasets,
  }

  useEffect(() => {
    //console.log(labels);

    //console.log(dataDiagramm);
    

  }, [checks, selectProduct])

  return(
    <>
      {!!selectProduct && productsSearch?.length && <Line options={options} data={dataDiagramm} />}
    </>
    
  )
}

export default DiagrammLine
