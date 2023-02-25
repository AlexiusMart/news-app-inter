import Favicon from '@/components/Head/favicon/Favicon'
import Seo from '@/components/Head/seo/Seo'
import Head from 'next/head'
import MainContainer from '@/components/container/main-conteiner/MainContainer'

const Home = () => {
  return (
    <>
      <Head>
        <Seo />
        <Favicon />
      </Head>

      <MainContainer />
    </>
  )
}

export default Home
