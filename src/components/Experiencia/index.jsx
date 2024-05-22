import styles from './Experiencia.module.css'

const Experiencia = ({ children }) => {
  return (
    <section className={styles.experiencia_container}>
      <h2>Experiências De Trabalho</h2>
      <hr />
      <p>
        Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.
      </p>

      <div className={styles.card_container}>
        {children}
      </div>
    </section>
  )
}

export default Experiencia;