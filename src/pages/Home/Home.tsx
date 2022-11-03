import InputSearch from 'components/InputSearch';
import './styles.css';

export default function Home() {
  return (
    <section className="banner">
      <div className="banner-container">
        <h1>Order your Daily Groceries</h1>
        <span className="subtitle">#Free Delivery</span>
        <InputSearch />
      </div>
    </section>
  );
}
