import React, { useState, useEffect } from 'react';

const CustomOrderModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    type: 'illustration',
    details: '',
  });

  // ปิด Modal เมื่อกด Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // ล็อก scroll เมื่อ Modal เปิดอยู่
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: เชื่อมต่อกับ Backend API
    alert(`✅ ส่งคำขอเรียบร้อยแล้ว!\nชื่อ: ${form.name}\nประเภท: ${form.type}`);
    setForm({ name: '', type: 'illustration', details: '' });
    onClose();
  };

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`} onClose={onClose}>
      <div className="modal-box w-11/12 max-w-2xl p-5 md:p-8 rounded-2xl shadow-2xl relative">
        <button 
          onClick={onClose} 
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
          aria-label="ปิด"
        >
          ✕
        </button>
        
        {/* Header */}
        <p className="text-xs text-base-content/50 font-medium tracking-wide mb-1">
          สั่งทำงานออกแบบเฉพาะ
        </p>
        <h2 className="text-3xl font-serif font-bold mb-6 text-base-content">
          Custom Design Order
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-medium">ชื่อ / Name</span>
            </div>
            <input
              type="text"
              required
              placeholder="คุณชื่ออะไร?"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-medium">ประเภทงาน / Type</span>
            </div>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="select select-bordered w-full"
            >
              <option value="illustration">Illustration / ภาพวาด</option>
              <option value="logo">Logo Design / ออกแบบโลโก้</option>
              <option value="brand-kit">Brand Kit / ชุดแบรนด์</option>
              <option value="template">Template / เทมเพลต</option>
              <option value="presentation">Presentation / งานนำเสนอ</option>
              <option value="other">อื่นๆ</option>
            </select>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-medium">รายละเอียด / Details</span>
            </div>
            <textarea
              rows={4}
              placeholder="บอกเราว่าต้องการอะไร..."
              value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })}
              className="textarea textarea-bordered w-full h-24"
            />
          </label>

          <div className="modal-action mt-6">
            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              ส่งคำขอ / Submit Request
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
};

export default CustomOrderModal;
