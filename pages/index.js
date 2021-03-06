import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import directImportImage from '../public/robert-bye-Fr1t7UHYkJU-unsplash.jpg'
import staticPropImage from '../public/robert-bye--P2SwAbYcbs-unsplash.jpg'

export const getStaticProps = () => ({
  props: { staticPropImage }
})

export default function Home({ staticPropImage }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <table>
          <tr>
            <td>Image with string source</td>
            <td><Image src="/robert-bye-LphK1Oht5NA-unsplash.jpg" alt="[ALT: Image with string source]" width={489.6} height={326.4} layout="fixed" /></td>
          </tr>
          <tr>
            <td>Image from direct import</td>
            <td><Image src={directImportImage} alt="[ALT: Image from direct import]" width={489.6} height={326.4} layout="fixed" /></td>
          </tr>
          <tr>
            <td>Image from static props</td>
            <td><Image src={staticPropImage} alt="[ALT: Image from static props]" width={489.6} height={326.4} layout="fixed" /></td>
          </tr>
        </table>
      </main>
    </div>
  )
}
