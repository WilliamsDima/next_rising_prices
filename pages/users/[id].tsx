import { GetServerSideProps } from 'next'
import { FC } from 'react'
import Page from '../../src/components/templates/Page'
import UserTemplate from '../../src/components/templates/User'

type User = {
  id: number,
  name: string
}

interface IUser {
  user: User
}

const User: FC<IUser> = ({user}) => {

  return (
    <Page>
      <UserTemplate data={user}/>
    </Page>
  )
}

export default User

export const getServerSideProps: GetServerSideProps = async ({ query }) =>{

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${query?.id}`)
  const user = await res.json()
  
  return {
    props: {user}, // will be passed to the page component as props
  }
}