'use client';
import Image from 'next/image';
import { useState } from 'react';
import {
  Descriptions,
  Image as AntImage,
  Tabs,
  InputNumber,
  Button,
  Rate,
  List,
  Avatar,
} from 'antd';

export default function ProductDetail({ params }) {
  const [quantity, setQuantity] = useState(1);

  // 模拟产品数据
  const products = [
    {
      id: 1,
      name: '智能电动汽车 Model X',
      price: 399999,
      description: '全新一代智能驾驶系统，超长续航里程',
      image: '/images/section3_1x1281.jpg',
      category: '电动汽车',
      specs: {
        续航里程: '600公里',
        最高时速: '250km/h',
        充电时间: '40分钟',
        座位数: '5座',
      },
      features: ['智能驾驶辅助系统', '全景天窗', '自动泊车', '空气悬架'],
    },
    {
      id: 2,
      name: '智能家居套装',
      price: 9999,
      description: '一键控制全屋智能设备，打造智慧生活',
      image: '/images/section3_2x1281.jpg',
      category: '智能家居',
      specs: {
        适用面积: '80-120平方米',
        控制方式: '语音/APP/触控',
        设备数量: '12件套',
        续航时间: '待机30天',
      },
      features: ['智能语音控制', '场景联动', '远程控制', '安全防护'],
    },
    {
      id: 3,
      name: '智能机器人助手',
      price: 19999,
      description: 'AI语音交互，家务清洁、陪伴看护多功能',
      image: '/images/section3_3x1281.jpg',
      category: '机器人',
      specs: {
        尺寸: '40x40x120cm',
        续航时间: '8小时',
        充电时间: '2小时',
        负载: '3kg',
      },
      features: ['AI语音交互', '自动充电', '智能避障', '远程监控'],
    },
  ];

  const product = products.find((p) => p.id === parseInt(params.id));
  if (!product) return <div>产品未找到</div>;

  // 模拟评价数据
  const reviews = [
    {
      author: '张三',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1',
      rating: 5,
      content: '产品非常好用，超出预期！',
    },
    {
      author: '李四',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=2',
      rating: 4,
      content: '整体不错，但价格稍贵',
    },
    {
      author: '王五',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
      rating: 5,
      content: '送货快，服务好，产品优质',
    },
  ];

  const handleAddToCart = () => {
    console.log(`添加到购物车：${product.name}，数量：${quantity}`);
  };

  const tabItems = [
    {
      key: '1',
      label: '产品参数',
      children: (
        <Descriptions bordered column={2}>
          {Object.entries(product.specs).map(([key, value]) => (
            <Descriptions.Item key={key} label={key}>
              {value}
            </Descriptions.Item>
          ))}
        </Descriptions>
      ),
    },
    {
      key: '2',
      label: '产品特点',
      children: (
        <ul className="list-disc pl-6">
          {product.features.map((feature, index) => (
            <li key={index} className="mb-2">
              {feature}
            </li>
          ))}
        </ul>
      ),
    },
    {
      key: '3',
      label: '用户评价',
      children: (
        <List
          itemLayout="horizontal"
          dataSource={reviews}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={
                  <div>
                    {item.author} <Rate disabled defaultValue={item.rating} />
                  </div>
                }
                description={item.content}
              />
            </List.Item>
          )}
        />
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 pt-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
          <AntImage
            src={product.image}
            alt={product.name}
            className="object-cover"
            preview={{
              mask: '点击预览',
            }}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="text-3xl font-bold text-blue-600 mb-6">
            ¥{product.price.toLocaleString()}
          </div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-700">购买数量：</span>
            <InputNumber
              min={1}
              max={99}
              value={quantity}
              onChange={setQuantity}
            />
          </div>
          <Button
            type="primary"
            size="large"
            onClick={handleAddToCart}
            className="w-full md:w-auto"
          >
            加入购物车
          </Button>
        </div>
      </div>

      <Tabs items={tabItems} className="mt-8" />
    </div>
  );
}
