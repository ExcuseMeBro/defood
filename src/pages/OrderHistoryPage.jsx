import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './OrderHistoryPage.css';

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    // Load orders from localStorage
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <div className="container order-history-page">
      <Link to="/" className="back-btn">
        <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
      </Link>
      
      <h1 className="page-title">Order History</h1>
      
      {orders.length === 0 ? (
        <div className="empty-orders">
          <FontAwesomeIcon icon={faShoppingBag} className="empty-icon" />
          <h2>No Orders Yet</h2>
          <p>You haven't placed any orders yet.</p>
          <Link to="/" className="btn">Start Shopping</Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order, index) => (
            <div key={order.orderId || index} className="order-card">
              <div className="order-header">
                <div>
                  <h3 className="order-id">{order.orderId}</h3>
                  <p className="order-date">{formatDate(order.orderDate)}</p>
                </div>
                <div className="order-total">
                  <span>${order.grandTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="order-items">
                {order.items.map(item => (
                  <div key={item.id} className="order-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p className="item-quantity">Qty: {item.quantity}</p>
                    </div>
                    <div className="item-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="order-summary">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>${order.shipping.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Tax</span>
                  <span>${order.tax.toFixed(2)}</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${order.grandTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="shipping-info">
                <h4>Shipping Information</h4>
                <p>{order.customerInfo.firstName} {order.customerInfo.lastName}</p>
                <p>{order.customerInfo.address}</p>
                <p>{order.customerInfo.city}, {order.customerInfo.zipCode}</p>
                <p>{order.customerInfo.phone}</p>
                <p>{order.customerInfo.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistoryPage;