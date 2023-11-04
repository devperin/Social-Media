import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header className={styles.headerPost}>
                <div className={styles.author}>
                    <img className={styles.avatar} src="http://github.com/devperin.png" />
                    <div className={styles.authorInfo}>
                        <strong>Igor Perin</strong>
                        <span>Web Developer</span> 
                    </div>
                </div>

                <time className={styles.headerTime}title="1 de novembro de 2023" dateTime="01/11/2023 15:05:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz em react. </p>
                <p>Projeto de uma rede social, falta comentários, curtidas e um sistema de login e senha</p>
                <p>👉{' '}<a href="">github.com/devperin</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#dev</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>
        </article>
    )
}