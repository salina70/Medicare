import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const [verifiedStatus, setVerifiedStatus] = useState(null);

  const response = useMemo(() => {
    const data = searchParams.get("data");
    if (!data) return null;
    try {
      return JSON.parse(atob(data));
    } catch (e) {
      console.error("Failed to decode eSewa response", e);
      return null;
    }
  }, [searchParams]);

  useEffect(() => {
    const txn = JSON.parse(
      sessionStorage.getItem("esewa_transaction") || "null",
    );
    if (!txn) return;

    const params = new URLSearchParams({
      product_code: txn.product_code,
      total_amount: String(txn.total_amount),
      transaction_uuid: txn.transaction_uuid,
    });

    fetch(`http://localhost:8000/api/payment/status?${params}`)
      .then((res) => res.json())
      .then((data) => setVerifiedStatus(data))
      .catch((err) => console.error("Status check failed", err));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <div className="text-green-500 text-6xl mb-4">&#10003;</div>
        <h1 className="text-2xl font-bold text-green-600 mb-2">
          Payment Successful
        </h1>
        <p className="text-gray-600 mb-4">
          Your appointment has been booked successfully.
        </p>

        {response && (
          <div className="text-left bg-gray-50 p-4 rounded mb-4 text-sm space-y-1">
            <p>
              <strong>Transaction Code:</strong> {response.transaction_code}
            </p>
            <p>
              <strong>Status:</strong> {response.status}
            </p>
            <p>
              <strong>Total Amount:</strong> Rs {response.total_amount}
            </p>
            <p>
              <strong>Transaction ID:</strong> {response.transaction_uuid}
            </p>
          </div>
        )}

        {verifiedStatus && (
          <p className="text-green-500 text-sm mb-4">
            Verified: {verifiedStatus.status}
          </p>
        )}

        <Link
          to="/"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default PaymentSuccess;
