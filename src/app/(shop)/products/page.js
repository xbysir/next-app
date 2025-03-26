'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Input, Radio, Card, Button, Pagination } from 'antd';
import { useState } from 'react';

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const pageSize = 6;

  const products = [
    {
      id: 1,
      name: '智能电动汽车 Model X',
      price: 399999,
      description: '全新一代智能驾驶系统，超长续航里程',
      image: '/images/section3_1x1281.jpg',
      category: '电动汽车',
    },
    {
      id: 2,
      name: '智能家居套装',
      price: 9999,
      description: '一键控制全屋智能设备，打造智慧生活',
      image: '/images/section3_2x1281.jpg',
      category: '智能家居',
    },
    {
      id: 3,
      name: '智能机器人助手',
      price: 19999,
      description: 'AI语音交互，家务清洁、陪伴看护多功能',
      image: '/images/section3_3x1281.jpg',
      category: '机器人',
    },
  ];

  const categories = ['全部', '电动汽车', '智能家居', '机器人'];
  const filteredProducts =
    selectedCategory === '全部'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mx-auto px-4 py-8 pt-[60px]">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 mt-4">智能科技产品</h1>
        <Input.Search
          placeholder="搜索产品..."
          className="w-32"
          onSearch={(value) => console.log(value)}
        />
      </div>

      <Radio.Group
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="mb-8 flex space-x-4  pb-4"
      >
        {categories.map((category) => (
          <Radio.Button
            key={category}
            value={category}
            className="whitespace-nowrap"
          >
            {category}
          </Radio.Button>
        ))}
      </Radio.Group>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 mt-4">
        {currentProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="block"
          >
            <Card
              hoverable
              cover={
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              }
              actions={[
                <Button key="details" type="primary" shape="round">
                  了解详情
                </Button>,
              ]}
            >
              <Card.Meta
                title={
                  <div className="text-xl font-semibold text-gray-900">
                    {product.name}
                  </div>
                }
                description={
                  <>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <div className="mt-4">
                      <span className="text-2xl font-bold text-blue-600">
                        ¥{product.price.toLocaleString()}
                      </span>
                    </div>
                  </>
                }
              />
            </Card>
          </Link>
        ))}
      </div>

      <div className="flex justify-center">
        <Pagination
          current={currentPage}
          onChange={setCurrentPage}
          total={filteredProducts.length}
          pageSize={pageSize}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}
