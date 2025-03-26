'use client';
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const onFinish = (values) => {
    console.log('Success:', values);
    setTimeout(() => {
      router.push('/login');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[url('/images/login-bg-2.png')] bg-cover bg-center flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl">
        <div className="text-center mb-8">
          <Title level={2}>欢迎注册</Title>
          <Text type="secondary">创建账号，开启您的专属体验</Text>
        </div>

        <Form
          name="register"
          onFinish={onFinish}
          size="large"
          layout="vertical"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="用户名" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: '请输入邮箱地址' }]}
          >
            <Input prefix={<MailOutlined />} placeholder="邮箱地址" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: '请输入密码' },
              { min: 6, message: '密码长度不能小于6位' },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="密码" />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={['password']}
            rules={[
              { required: true, message: '请确认密码' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('两次输入的密码不一致'));
                },
              }),
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="确认密码" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full h-10">
              注册
            </Button>
          </Form.Item>

          <div className="text-center">
            <Text type="secondary">
              已有账号？{' '}
              <a href="/login" className="text-blue-600 hover:text-blue-500">
                立即登录
              </a>
            </Text>
          </div>
        </Form>
      </div>
    </div>
  );
}
