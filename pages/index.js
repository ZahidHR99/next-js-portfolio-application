import Head from 'next/head'
import styles from '../styles/Home.module.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MenuBar from '../component/appBar';
import SliderComponent from '../component/slider';
import CardComponent from '../component/card';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
    

      <MenuBar/>

      <SliderComponent/>

      <CardComponent/>


      </main>

      <footer className={styles.footer}>
      
         
      </footer>
    </div>
  )
}
