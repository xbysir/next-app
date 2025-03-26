'use client';
import { Typography, Timeline, Card, Statistic, List, Carousel } from 'antd';
import {
  UserOutlined,
  TrophyOutlined,
  TeamOutlined,
  RiseOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function About() {
  // 公司数据
  const companyStats = [
    { title: '成立年限', value: 10, prefix: <RiseOutlined /> },
    { title: '服务客户', value: '1000+', prefix: <UserOutlined /> },
    { title: '团队规模', value: '200+', prefix: <TeamOutlined /> },
    { title: '荣誉奖项', value: 50, prefix: <TrophyOutlined /> },
  ];

  // 发展历程
  const timelineItems = [
    { children: '2023年：完成D轮融资，估值超100亿', color: 'blue' },
    { children: '2021年：业务扩展至全球市场，营收突破10亿', color: 'blue' },
    { children: '2019年：推出革命性产品，获得行业认可', color: 'blue' },
    { children: '2017年：公司成立，开启创新征程', color: 'blue' },
  ];

  // 团队成员
  const teamMembers = [
    {
      title: '张三',
      description: 'CEO / 创始人',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1',
    },
    {
      title: '李四',
      description: 'CTO / 技术负责人',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=2',
    },
    {
      title: '王五',
      description: 'COO / 运营总监',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
    },
  ];

  // 合作伙伴
  const partners = [
    'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg',
  ];

  return (
    <div className="container mx-auto px-4 py-8 pt-[60px]">
      {/* 公司简介 */}
      <div className="text-center mb-12">
        <Title>关于我们</Title>
        <Paragraph className="text-lg max-w-3xl mx-auto">
          我们是一家致力于创新和技术突破的科技公司。通过持续的研发投入和优秀的团队协作，
          我们为客户提供最前沿的解决方案，推动行业发展，创造更美好的未来。
        </Paragraph>
      </div>

      {/* 公司数据 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {companyStats.map((stat, index) => (
          <Card key={index} className="text-center">
            <Statistic
              title={stat.title}
              value={stat.value}
              prefix={stat.prefix}
            />
          </Card>
        ))}
      </div>

      {/* 发展历程 */}
      <div className="mb-12">
        <Title level={2} className="text-center mb-8">
          发展历程
        </Title>
        <Timeline mode="alternate" items={timelineItems} />
      </div>

      {/* 团队成员 */}
      <div className="mb-12">
        <Title level={2} className="text-center mb-8">
          核心团队
        </Title>
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={teamMembers}
          renderItem={(item) => (
            <List.Item>
              <Card className="text-center">
                <img
                  src={item.avatar}
                  alt={item.title}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <Card.Meta title={item.title} description={item.description} />
              </Card>
            </List.Item>
          )}
        />
      </div>

      {/* 合作伙伴 */}
      <div>
        <Title level={2} className="text-center mb-8">
          合作伙伴
        </Title>
        <Carousel
          autoplay
          className="bg-gray-100 p-8 rounded-lg"
          dots={true}
          effect="fade"
        >
          {partners.map((partner, index) => (
            <div key={index} className="h-32 flex items-center justify-center">
              <img
                src={partner}
                alt={`Partner ${index + 1}`}
                className="h-16 object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
