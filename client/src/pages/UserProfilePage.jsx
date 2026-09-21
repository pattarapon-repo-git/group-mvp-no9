import React from "react";
import { User, Download, History, Award } from "lucide-react";

const UserProfilePage = () => {
  // Mock data based on the design
  const user = {
    name: "Jane Doe",
    email: "jane@example.com",
    memberSince: "January 2026",
    role: "Gold Member",
    downloads: 42,
  };

  const orders = [
    { id: "ORD-8923", date: "2026-07-28", items: 2, total: 24.99, status: "Completed" },
    { id: "ORD-8711", date: "2026-07-15", items: 1, total: 9.99, status: "Completed" },
    { id: "ORD-8502", date: "2026-06-02", items: 3, total: 45.50, status: "Completed" },
  ];

  const [selectedOrder, setSelectedOrder] = React.useState(null);

  const openReceipt = (order) => {
    setSelectedOrder(order);
    document.getElementById('receipt_modal').showModal();
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-base-200 p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
            <User size={40} strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">{user.name}</h1>
            <p className="text-gray-500">
              {user.email} &bull; Member since {user.memberSince}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-yellow-100/80 border border-yellow-200 text-yellow-700 px-6 py-4 rounded-xl flex flex-col items-center justify-center min-w-[120px]">
            <Award className="mb-1" size={24} />
            <span className="font-semibold text-sm">{user.role}</span>
          </div>
          <div className="bg-purple-100/80 border border-purple-200 text-purple-700 px-6 py-4 rounded-xl flex flex-col items-center justify-center min-w-[120px]">
            <Download className="mb-1" size={24} />
            <span className="font-semibold text-sm">{user.downloads} Downloads</span>
          </div>
        </div>
      </div>

      {/* Order History */}
      <div className="bg-white rounded-2xl shadow-sm border border-base-200 overflow-hidden">
        <div className="p-6 border-b border-base-200 flex items-center gap-2">
          <History className="text-purple-600" size={24} />
          <h2 className="text-xl font-bold text-gray-900">Order History</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-base-50 text-gray-500 text-xs font-semibold uppercase tracking-wider">
              <tr>
                <th className="py-4 px-6">Order ID</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6">Items</th>
                <th className="py-4 px-6">Total</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="hover:bg-base-50/50 border-b border-base-100 last:border-0 text-sm">
                  <td className="py-4 px-6 font-medium text-gray-900">{order.id}</td>
                  <td className="py-4 px-6 text-gray-600">{order.date}</td>
                  <td className="py-4 px-6 text-gray-600">{order.items}</td>
                  <td className="py-4 px-6 font-semibold text-gray-900">฿{order.total.toFixed(2)}</td>
                  <td className="py-4 px-6">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button 
                      onClick={() => openReceipt(order)}
                      className="text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors"
                    >
                      View Receipt
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Receipt Modal */}
      <dialog id="receipt_modal" className="modal">
        <div className="modal-box p-8 max-w-md bg-white rounded-2xl">
          {selectedOrder && (
            <>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-2xl text-gray-900">ใบเสร็จรับเงิน</h3>
                <p className="text-gray-500 mt-1">ขอบคุณที่อุดหนุนสินค้าของเรา</p>
              </div>
              
              <div className="bg-base-50 rounded-xl p-5 mb-6 border border-base-200">
                <div className="flex justify-between mb-3 pb-3 border-b border-base-200">
                  <span className="text-gray-500 text-sm">รหัสคำสั่งซื้อ</span>
                  <span className="font-medium text-gray-900">{selectedOrder.id}</span>
                </div>
                <div className="flex justify-between mb-3 pb-3 border-b border-base-200">
                  <span className="text-gray-500 text-sm">วันที่</span>
                  <span className="font-medium text-gray-900">{selectedOrder.date}</span>
                </div>
                <div className="flex justify-between mb-3 pb-3 border-b border-base-200">
                  <span className="text-gray-500 text-sm">จำนวนสินค้า</span>
                  <span className="font-medium text-gray-900">{selectedOrder.items} ชิ้น</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="font-bold text-gray-900">ยอดรวมทั้งสิ้น</span>
                  <span className="font-bold text-xl text-purple-600">฿{selectedOrder.total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="modal-action flex flex-col gap-3 mt-0">
                <button className="btn btn-primary w-full rounded-xl">ดาวน์โหลดใบเสร็จ (PDF)</button>
                <form method="dialog" className="w-full">
                  <button className="btn btn-outline w-full rounded-xl border-gray-300 text-gray-700">ปิดหน้าต่าง</button>
                </form>
              </div>
            </>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default UserProfilePage;
