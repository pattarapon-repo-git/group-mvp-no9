import React, { useState } from 'react';

const products = [
  { id: 1, title: 'แพ็กภาพวาดตัวละคร', desc: 'ชุดภาพประกอบสไตล์อะนิเมะ ใช้สำหรับงาน Print-on-demand', tag: 'Ebook', tagColor: 'bg-blue-100 text-blue-700', price: 15, stock: 2048, rating: 4.5, reviews: 97 },
  { id: 2, title: 'Watercolor Akachan', desc: 'ลายน้ำสีน้ำสดใสสำหรับตกแต่งงาน Digital', tag: 'Souvenir', tagColor: 'bg-orange-100 text-orange-700', price: 50, stock: 1461, rating: 4.8, reviews: 134 },
  { id: 3, title: 'แพ็กภาพดินสอ', desc: 'ชุดภาพวาดดินสอ Sketch สไตล์มินิมอล', tag: 'Ebook', tagColor: 'bg-blue-100 text-blue-700', price: 180, stock: 904, rating: 4.2, reviews: 55 },
  { id: 4, title: 'Template ประกอบงาน', desc: 'เทมเพลตพรีเซนต์ชั้นสูง พร้อมใช้งานทันที', tag: 'Template', tagColor: 'bg-purple-100 text-purple-700', price: 900, stock: 500, rating: 4.9, reviews: 210 },
  { id: 5, title: 'Orochi Model X', desc: 'ไฟล์สติกเกอร์ลายมังกรสีดำสำหรับ LINE & Telegram', tag: 'Template', tagColor: 'bg-purple-100 text-purple-700', price: 100, stock: 804, rating: 4.7, reviews: 88 },
  { id: 6, title: 'แพ็กภาพวาดตัวละคร', desc: 'ชุดภาพการ์ตูน Vector ไฟล์ AI พร้อมแก้ไข', tag: 'Ebook', tagColor: 'bg-blue-100 text-blue-700', price: 15, stock: 2048, rating: 4.3, reviews: 97 },
  { id: 7, title: 'ชุดสติกเกอร์ภาษาไทย', desc: 'ลายสติกเกอร์น่ารัก ใช้ใน LINE Official ได้เลย', tag: 'Souvenir', tagColor: 'bg-orange-100 text-orange-700', price: 250, stock: 1704, rating: 4.6, reviews: 321 },
  { id: 8, title: 'CV design', desc: 'เทมเพลต Resume ดีไซน์ทันสมัย แก้ไขง่ายใน Canva', tag: 'Template', tagColor: 'bg-purple-100 text-purple-700', price: 99, stock: 1027, rating: 4.4, reviews: 64 },
  { id: 9, title: 'ชุดสกรีนเสื้อ T-shirt', desc: 'ลายสกรีนเสื้อ Vector ไฟล์ PNG พื้นหลังโปร่งใส', tag: 'T-shirt Design', tagColor: 'bg-green-100 text-green-700', price: 150, stock: 854, rating: 4.5, reviews: 73 },
  { id: 10, title: 'Orochi Dark Pack', desc: 'ชุดกราฟิก Dark Theme สำหรับตกแต่ง Social Media', tag: 'Template', tagColor: 'bg-purple-100 text-purple-700', price: 120, stock: 504, rating: 4.8, reviews: 118 },
  { id: 11, title: 'แพ็กภาพแฟชั่น', desc: 'ชุดภาพประกอบแฟชั่นสไตล์ Illustration', tag: 'Ebook', tagColor: 'bg-blue-100 text-blue-700', price: 99, stock: 1104, rating: 4.1, reviews: 42 },
  { id: 12, title: 'Digital Postcard', desc: '12 ลายโปสการ์ดดิจิทัล แนวเทศกาลไทย ส่งได้ทันที', tag: 'Souvenir', tagColor: 'bg-orange-100 text-orange-700', price: 200, stock: 1704, rating: 4.7, reviews: 89 },
];

const filterTabs = ['All Product', 'Ebook', 'Template', 'Souvenir', 'T-shirt Design'];

const ProductGrid = ({ onAddToCart, activeFilter = 'All Product', setActiveFilter }) => {
  const [search, setSearch] = useState('');

  const filtered = products.filter(p => {
    const matchFilter = activeFilter === 'All Product' || p.tag === activeFilter;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <section id="products" className="w-full px-4 md:px-8 lg:px-12 py-10">

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {filterTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`btn btn-sm rounded-full ${
                activeFilter === tab ? 'btn-neutral' : 'btn-outline'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Search */}
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="ค้นหาสินค้า..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="input input-bordered input-sm pl-9 rounded-full w-full max-w-xs"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {filtered.map(product => (
          <div key={product.id} className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-200 border border-base-200">
            {/* รูปสินค้า (Placeholder สีเทา) */}
            <figure className="w-full aspect-square bg-base-200 flex items-center justify-center text-4xl">
              {product.tag === 'Ebook' ? '📚' : product.tag === 'Template' ? '📄' : product.tag === 'Souvenir' ? '🎁' : '👕'}
            </figure>
            {/* ข้อมูลสินค้า */}
            <div className="card-body p-3 gap-1.5">
              {/* Tag */}
              <div className={`badge badge-sm border-none w-fit ${product.tagColor}`}>
                {product.tag}
              </div>
              {/* ชื่อและคำอธิบาย */}
              <h3 className="card-title text-xs font-semibold leading-snug line-clamp-2 mt-1">{product.title}</h3>
              <p className="text-[10px] text-base-content/60 leading-relaxed line-clamp-2">{product.desc}</p>
              {/* Rating */}
              <div className="flex items-center gap-1 text-[10px] text-base-content/60">
                <span className="text-warning">★</span>
                <span>{product.rating}</span>
                <span className="opacity-70">({product.reviews})</span>
                <span className="ml-auto opacity-70 truncate max-w-[50px]">โหลด {product.stock.toLocaleString()}</span>
              </div>
              {/* ราคา + ปุ่ม Add to Cart */}
              <div className="card-actions justify-between items-center mt-auto pt-2 border-t border-base-200">
                <span className="text-sm font-bold">฿{product.price}</span>
                <button
                  onClick={() => onAddToCart(product)}
                  className="btn btn-primary btn-xs"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <div className="text-4xl mb-3">🔍</div>
          <p>ไม่พบสินค้าที่ตรงกับการค้นหา</p>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
