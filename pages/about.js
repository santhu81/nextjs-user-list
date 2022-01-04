import Head from "next/head"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styles from "../styles/About.module.css"

const About = () => {
    return (
        <>
            <Head>
                <title>About us</title>
                <meta name="description" content="This is about us page" />
            </Head>
            <div style={{ minHeight: '380px' }}>
                <h1 className={styles.greenText}>About us</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
        </>
    )
}

export default About