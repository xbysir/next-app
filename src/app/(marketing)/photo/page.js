import React from 'react';

import Link from 'next/link';

const page = async () => {
  // 请将 your_key 替换你真实的可以
  const result = await fetch(
    `https://pixabay.com/api/?key=47177405-94f02f5ebde0c31a775a86826&per_page=100&lang=zh&orientation=horizontal`
  );
  if (!result.ok) return <p></p>;
  const data = await result.json();
  const list = data.hits;
  return (
    <div>
      <section className="max-w-[1440px] mx-auto">
        <ul className="grid grid-cols-4 gap-4 p-4">
          {list.map((item) => {
            return (
              <li
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={`/photo/${item.id}`} className="block">
                  <img
                    src={item.previewURL}
                    alt={item.tags}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-lg font-semibold">{item.tags}</p>
                    <p className="text-gray-600">{item.user}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default page;
