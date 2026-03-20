import Link from 'next/link';

export default function Header() {
  return (
    <header style={styles.header}>
      <h1>Min Webshop</h1>
      <nav style={styles.nav}>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/pages/shop" style={styles.link}>Shop</Link>
        <Link href="pages/cart" style={styles.link}>Kurv</Link>
            <Link href="pages/checkout" style={styles.link}>Chckout</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};