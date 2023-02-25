import Favicon from '@/components/Head/favicon/Favicon'
import Seo from '@/components/Head/seo/Seo'
import NewsContainer from '@/components/news-container/NewsContainer'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <Seo />
        <Favicon />
      </Head>

      <NewsContainer />
    </>
  )
}

export default Home
