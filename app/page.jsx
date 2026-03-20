export default function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to Lemonade Shop</h1>
      <p style={styles.text}>
        Friske citrondrinks direkte til din dør! 🚚
      </p>
      <a href="/shop" style={styles.button}>
        Shop nu →
      </a>
    </div>
  );
}

const styles = {
  container: {
    padding: '60px 20px',
    textAlign: 'center',
  },
  text: {
    fontSize: '18px',
    color: '#666',
  },
  button: {
    display: 'inline-block',
    padding: '15px 40px',
    backgroundColor: '#51CF66',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    marginTop: '20px',
  },
};