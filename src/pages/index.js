import Head from 'next/head'
import MainContainer from '@/components/container/main-conteiner/MainContainer'

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

      <MainContainer />
    </>
  )
}

export default Home
