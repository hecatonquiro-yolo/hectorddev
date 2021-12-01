import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Layout, {siteTitle} from '../components/layout'

import Modal from '../components/modal'

import {useState, useRef} from 'react'


export default function Home() {

  const name = 'Hector Marquez'

 

  const [modal, setModal] = useState(false)


  const [project, setProject] = useState(null)

  const aRef = useRef(null)
  const bRef = useRef(null)
  const cRef = useRef(null)
    

  const handleClick = ({target}) => {
    setModal(prev => modal ? false : true)
    setProject(prev => target.id)
  }


  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.hero} id="home">
        <h1 className={styles.hero_title}>Hector Márquez</h1>
          <h2 className={styles.hero_subtitle}>
            Web Developer
          </h2>
        <figure className={styles.hero_fig}>
          <Image 
          priority
          className={styles.hero_img}
          src="/MIFOTO.jpg"
          height={150}
          width={150}
          alt={name}           
          />    
        </figure>
        <div className={styles.hero_presentation}>
        <cite className={styles.paragraph_hero}>The love of art. The love of the unknown. Love when you meet him. Love in zeros and ones :)</cite>
        </div>
      </section>
      <section className={styles.projects} id="projects">
        <div className={styles.projects_header}>
          <h2>Projects</h2>
        </div>
        <div className={styles.projects_sample}>
          <ul className={styles.sample_list}>
            <li className={styles.item1}><a  onClick={handleClick} ref={aRef} name="Currency Converter">
              <Image
                  priority
                  src="/uno.png"
                  width={100}
                  height={100}
                  id="currency"
              />  
            
            </a></li>
            <li className={styles.item2}><a onClick={handleClick} ref={bRef} name="Simon's Say">
            <Image
                  priority
                  src="/dos.png"
                  width={100}
                  height={100}
                  id="simon"
              />    
            </a></li>
            <li className={styles.item3}>
              <a onClick={handleClick} ref={cRef} name="Batabit">
              <Image
                  priority
                  src="/tres.png"
                  width={100}
                  height={100}
                  id="batabit"
              />    
              </a>
            </li>
          </ul>
        </div>
        {
          modal ? <>
            
            <Modal modal={modal} project={project}>
              <span onClick={handleClick} className={styles.btnClose}>x</span>
            </Modal>
            
          </>
           : null
        }
      </section>
      <section className={styles.about} id="about">
        <div className={styles.about_header}>
          <h2>About</h2>
        </div>
        <div className={styles.about_description}>
          <figure>
            <Image 
              priority
              src="/ordenador-personal.png"
              className={styles.about_img}
              width={100}
              height={100}
              alt="Personal Computer"
            />
          </figure>
            <p className={styles.about_dev}>
               Hi! You most likely don't know me, but if you're reading this, Surprise! you are going to meet me.
              My name is Héctor Márquez, born in Venezuela and a 2nd year student in the Computer Engineering career. Nowadays, most things have code behind them. How not to be part of this fantastic world ?.
              <br></br>
              My main language is JavaScript (although I started with Python). I master HTML, CSS, React, NodeJs. And right now I am experimenting with frameworks, such as NEXTJS, with which I created this page.
            </p>
            <figure>
              <Image 
                priority
                src="/nota-musical.png"
                className={styles.about_img}
                width={100}
                height={100}
                alt="Personal Computer"
              />
           </figure>
            <p className={styles.about_music}>
            But I don't just spend it in front of a screen 24/7. Another thing I like is music. Since I was 8 years old I have studied music and it is one of the best ways that exist to transmit much more than 0 and 1. This has helped me to meet many people, create a discipline to learn (which I value a lot) and understand the importance of having a harmony in the team that carries out a task.

            </p>
            <p></p>
        </div>
      </section>
      <section className={styles.contact} id="contact">
        <div className={styles.contact_header}>
          <h2>Contact</h2>
        </div>
        <div className={styles.contact_links}> 
          <span><a href="https://github.com/hecatonquiro-yolo/">
          <Image 
              priority
              src="/linkedin.png"
              width={20}
              height={20}
          /> 
            </a></span>
          <span><a href="https://www.linkedin.com/in/hectordmv">
          <Image 
              priority
              className={styles.logo_github}
              src="/github.png"
              width={20}
              height={20}
          />
            </a></span>
          <span><a href="https://mail.google.com/mail/u/1/?ogbl#inbox">
          <Image 
              priority
              className={styles.logo_github}
              src="/gmail.png"
              width={20}
              height={20}
          />  
          </a></span>
          <span><a href="">
          <Image 
              priority
              className={styles.logo_github}
              src="/whatsapp.png"
              width={20}
              height={20}
          />  
          </a></span>
        </div>
      </section>
    </Layout>
  )
}
