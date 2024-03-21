import styles from './Sass.module.scss'
import variables from './variables.module.scss'

export default function Sass() {
  return (
    <>
      <p className={styles.hello}>Hello from Sass</p>

      {/* 
      You can also import variables from Sass and use those in inline css! 
      */}
      <p style={{ color: variables.primaryColor }}>Hello from Sass 2</p>
    </>
  )
}
