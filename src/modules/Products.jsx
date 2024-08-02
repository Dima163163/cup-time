import Product from './Product';

import { products } from '../products';


const Products = () => {
	return (
		<section className="products">
			<div className="container">
				<h2 className="products__title">Чай</h2>

				<ul className="products__list">
					{products?.map((product) => (
						<Product key={product.id} data={product} />
					))}
				</ul>
			</div>
		</section>
	);
};
export default Products;
