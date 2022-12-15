import { FC, useEffect } from 'react'
import Page from '../src/components/templates/Page'
import UsersTemplate from '../src/components/templates/Users'
import { useActions } from '../src/hooks/hooks'
import { User } from '../src/stores/redusers/main/types'

interface IUsers {
  data: User[]
}

const Users: FC<IUsers> = ({data}) => {

  const { setUsers } = useActions()

  useEffect(() => {

    setUsers(data)
    
  }, [])

  return (
    <Page>
      <UsersTemplate />
    </Page>
  )
}

export default Users

export async function getStaticProps() {

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  
  return {
    props: {data}, // will be passed to the page component as props
  }
}