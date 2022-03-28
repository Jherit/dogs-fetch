import React from 'react';
import styles from './DogFrame.module.css'

const DogFrame = (props) => { 
    return (
     <div className={styles.dogFrame}>
     <img src={props.dogs} className={styles.dogPic} alt="A dog" loading="lazy" width="350" height="200" />
     </div>
    )
  }

export default DogFrame