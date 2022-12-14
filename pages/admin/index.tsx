import type { NextPage } from 'next'
import { WithSideBarProtected } from '../../layout/BaseLayout'
import AdminContainer from '../../containers/AdminContainer'
import Head from 'next/head'

const Admin: NextPage = () => {
  return (
    <>
      <Head>
        <title>房地產網站 | 後台</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/yuantai.ico" />
      </Head>
      <AdminContainer />
    </>
  )
}

export default WithSideBarProtected(Admin)
