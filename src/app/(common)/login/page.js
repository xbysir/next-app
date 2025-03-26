'use client';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const onFinish = (values) => {
    console.log('Success:', values);
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[url('/images/login-bg-2.png')] bg-cover bg-center flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl">
        <div className="text-center mb-8">
          <Title level={2}>欢迎登录</Title>
          <Text type="secondary">登录后体验更多功能</Text>
        </div>

        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          size="large"
          layout="vertical"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: '请输入邮箱地址' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="邮箱地址" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="密码" />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-between">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住我</Checkbox>
              </Form.Item>
              <a className="text-blue-600 hover:text-blue-500">忘记密码？</a>
            </div>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full h-10">
              登录
            </Button>
          </Form.Item>

          <div className="text-center">
            <Text type="secondary">
              还没有账号？{' '}
              <a href="/register" className="text-blue-600 hover:text-blue-500">
                立即注册
              </a>
            </Text>
          </div>
        </Form>
      </div>
    </div>
  );
}
