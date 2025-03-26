import Link from 'next/link';
import Image from 'next/image';
export default function Home() {
  return (
    <div className="min-h-screen pt-[60px]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src="/images/ultra_2_2.mp4"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-6">未来已来</h1>
          <p className="text-xl mb-8">科技与艺术的完美融合</p>
          <Link
            href="/products"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            了解更多
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">产品特性</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6 w-full aspect-square mx-auto hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                <Image
                  src="/images/section3_1x1281.jpg"
                  alt="智能科技"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">智能科技</h3>
              <p className="text-gray-600">
                搭载新一代智能驾驶系统，让出行更安全、更轻松
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6 w-full aspect-square mx-auto hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                <Image
                  src="/images/section3_2x1281.jpg"
                  alt="环保设计"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">环保设计</h3>
              <p className="text-gray-600">
                零排放纯电动技术，为地球环保贡献一份力量
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6 w-full aspect-square mx-auto hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                <Image
                  src="/images/section3_3x1281.jpg"
                  alt="优雅外观"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">优雅外观</h3>
              <p className="text-gray-600">
                流线型设计，彰显现代美学与科技感的完美结合
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">开启智能出行新时代</h2>
          <p className="text-xl text-gray-600 mb-12">
            立即预约试驾，体验未来科技
          </p>
          <Link
            href="/register"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            立即预约
          </Link>
        </div>
      </section>
    </div>
  );
}
