import { DUMMY_PRODUCTS } from '../dummy-products.js';
import Product from './Product.jsx';

export default function Shop({children}) {
  return (
    <section id="shop">
     {children}
    </section>
  );
}
