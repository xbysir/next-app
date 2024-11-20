import Link from 'next/link';
export default function Products() {
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];
  return (
    <>
      <h1 className="text-3xl font-semibold text-center my-6">Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href={`/products/${product.id}`}>
              <span className="text-xl font-semibold text-blue-600 hover:text-green-800">
                {product.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
