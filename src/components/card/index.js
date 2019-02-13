import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

const Card = ({ title, text }) => (
  <div className={styles.root}>
    {title && <h1>{title}</h1>}
    {text && <p>{text}</p>}
  </div>
)

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default Card
