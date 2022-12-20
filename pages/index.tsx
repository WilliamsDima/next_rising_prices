import { useActions } from '../src/hooks/hooks'
import { FC, useEffect } from 'react'
import { getChecksUrl } from 'src/api/firebase'
import { ICheck, IProduct } from 'src/stores/redusers/main/types'
import HomeTemplate from '../src/components/templates/Home'
import Page from '../src/components/templates/Page'
import style from '../styles/index.module.css'

type Home = {
  data: ICheck[]
  products: IProduct[]
}

const Home: FC<Home> = ({data, products}) => {

  const { setChecks, setProducts } = useActions()

  useEffect(() => {
    setChecks(data)
    setProducts(products)
  }, [])
  return (
    <Page>
      <HomeTemplate />
    </Page>
  )
}

export default Home


export async function getStaticProps() {

  const url = await getChecksUrl()

  const res = await fetch(url)
  const data = await res.json()

  const products = data.map((item: ICheck) => {
    return item.ticket.document.receipt.items.map((it) => {
      it.price = it.price / 100
      it.sum = it.sum / 100
      it.date = item.ticket.document.receipt.dateTime
      return it
    })
  }).flat()

  return {
    props: {data, products}, // will be passed to the page component as props
  }
}