import React, { useState } from 'react'
import { BookOpen, FileText, Download, Tag, ShoppingCart } from 'lucide-react'

export default function ProductsPage() {
  const [filter, setFilter] = useState('all')

  const products = [
    {
      id: 1,
      name: 'ชุดแม่แบบใบงานภาษาอังกฤษ สำหรับประถมศึกษา (PDF + Canva Link)',
      category: 'template',
      price: '199',
      tag: 'Template',
      downloads: '142 ครั้ง',
      desc: 'แม่แบบใบงานพร้อมใช้ ปรับแต่งง่าย รองรับการพิมพ์หรือสอนออนไลน์',
    },
    {
      id: 2,
      name: 'E-book: คู่มือเทคนิคการออกแบบกราฟิกสำหรับครูและสถานศึกษา',
      category: 'ebook',
      price: '250',
      tag: 'E-Book',
      downloads: '89 ครั้ง',
      desc: 'รวมเทคนิค เทรนด์สี และไอเดียการสร้างสื่อการเรียนรู้ให้น่าสนใจ',
    },
    {
      id: 3,
      name: 'เซตเวกเตอร์ลายเสื้อเทศกาลสงกรานต์ & ปีใหม่ไทย (AI/SVG/PNG)',
      category: 'template',
      price: '390',
      tag: 'Vector Pack',
      downloads: '210 ครั้ง',
      desc: 'ไฟล์เวกเตอร์ความละเอียดสูง ลายสกรีนพร้อมส่งเข้าเครื่องพิมพ์',
    },
    {
      id: 4,
      name: 'E-book: ปูพื้นฐานการสั่งผลิตและสกรีนของที่ระลึกสำหรับผู้เริ่มต้น',
      category: 'ebook',
      price: '180',
      tag: 'E-Book',
      downloads: '64 ครั้ง',
      desc: 'เรียนรู้เรื่องชนิดผ้า ระบบสกรีน และการคุมงบประมาณสำหรับองค์กร',
    },
  ]

  const filteredProducts = filter === 'all' ? products : products.filter((p) => p.category === filter)

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white">สินค้าดิจิทัล (Digital Products)</h1>
          <p className="text-slate-400 text-sm mt-1">
            เลือกซื้อ E-book และแม่แบบใบงาน/กราฟิก รับไฟล์ดาวน์โหลดได้ทันที
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2 bg-base-200 p-1.5 rounded-xl border border-base-300">
          <button
            onClick={() => setFilter('all')}
            className={`btn btn-sm ${
              filter === 'all' ? 'btn-primary' : 'btn-ghost'
            }`}
          >
            ทั้งหมด
          </button>
          <button
            onClick={() => setFilter('template')}
            className={`btn btn-sm ${
              filter === 'template' ? 'btn-primary' : 'btn-ghost'
            }`}
          >
            แม่แบบ (Templates)
          </button>
          <button
            onClick={() => setFilter('ebook')}
            className={`btn btn-sm ${
              filter === 'ebook' ? 'btn-primary' : 'btn-ghost'
            }`}
          >
            E-book
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="card bg-base-100 border border-base-200 shadow-xl hover:shadow-2xl hover:border-base-content/20 flex flex-col justify-between group transition-all duration-200"
          >
            <div className="card-body p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="badge badge-primary badge-outline gap-1">
                  <Tag className="w-3 h-3" />
                  <span>{p.tag}</span>
                </div>
                <span className="text-xs text-base-content/60 flex items-center space-x-1">
                  <Download className="w-3 h-3" />
                  <span>{p.downloads}</span>
                </span>
              </div>
              <h3 className="card-title text-lg font-bold text-base-content group-hover:text-primary transition-colors">
                {p.name}
              </h3>
              <p className="text-sm text-base-content/70 leading-relaxed">{p.desc}</p>
            </div>

            <div className="card-body p-6 pt-0 flex flex-row items-center justify-between border-t border-base-200 mt-auto">
              <div>
                <span className="text-xs text-base-content/60">ราคา</span>
                <p className="text-2xl font-extrabold text-base-content">฿{p.price}</p>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-sm mt-4"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>สั่งซื้อทันที</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
