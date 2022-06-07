import React from 'react';
import styles from './styles.module.scss';

function Sobre() {
 return(
    <div className={styles.title}>
    <h1>O que é Andrômeda?</h1>
    <h3>Andrômeda é uma plataforma de produtividade onde você <br />
        desenvolve sua prática de organização. O limite do seu <br />
        "espaço" de trabalho é você quem cria.
    </h3>
    </div>
 );
}

export default Sobre;