import NewsCatalog from '@/component/news-catalog/NewsCatalog'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Актуальные новости в IT</title>
        <meta
          name='description'
          content='Список всех новых актуальных новостей в IT'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NewsCatalog />
    </>
  )
}

export default Home
