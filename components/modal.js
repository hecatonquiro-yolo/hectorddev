import styles from './modal.module.css'
import {useRef} from 'react'

export default function Modal({children, modal, project}){

    
    const handle = {
        currency: {
          title: 'Currency Converter',
          link: 'https://hecatonquiro-yolo.github.io/Currency-Converter-/',
          description: 'Project aimed at offerign a solution to the disorder in monetary change in Venezuela. It offers easy access to the conversion of USD, VED, COP, BTC... at the current rate by doing web scraping and accessing it by database.'
        },
        simon: {
          title: 'Simon Say',
          link: 'https://hecatonquiro-yolo.github.io/', 
          description: 'Customization of the famous game "Simon Say" made with HTML / CSS / JavaScript, adding some npm modules for better performance.'
        }, 
        batabit: {
          title: 'Batabit',
          link: 'https://github.com/hecatonquiro-yolo/BATABIT',
          description: 'Website for trading based on the responsive design "Mobile First" and the BEM convention.'
        } 
      }

    
    const pRef = useRef(null)


    return(
        <div className={styles.modal_container} ref={pRef}>
          <div className={styles.modal}>
            {children}
            <h3 className={styles.modal_title}>{handle[project].title}</h3>
            <section className={styles.description_container}>
              <p className={styles.modal_description}>{handle[project].description}</p>
            </section>
            <a href={handle[project].link} target="_blank" className={styles.try}>Let's see it</a>
            <div className={styles.technologies}> 
              <code className={styles.node}>Nodejs</code>
              <code className={styles.python}>Python</code>
              <code className={styles.react}>React</code>
              <code className={styles.html}>HTML/CSS/JavaScript</code>
              <code className={styles.mongo}>MongoDB</code>
            </div>
          </div>
        </div> 
       )
}