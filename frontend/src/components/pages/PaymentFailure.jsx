import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STATUS_LABELS = {
  COMPLETE: "Payment was completed successfully.",
  PENDING: "Payment was initiated but not completed.",
  NOT_FOUND: "Transaction session expired or was not found.",
  CANCELED: "Payment was canceled or reversed by eSewa.",
  AMBIGUOUS: "Payment is in an ambiguous state.",
  FULL_REFUND: "Payment was fully refunded.",
  PARTIAL_REFUND: "Payment was partially refunded.",
};

function PaymentFailure() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

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
      .then((data) => setStatus(data))
      .catch((err) => setError(err.message));
  }, []);

  const statusKey = status?.status;
  const description = STATUS_LABELS[statusKey];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <div className="text-red-500 text-6xl mb-4">&#10007;</div>
        <h1 className="text-2xl font-bold text-red-600 mb-2">
          Payment Failed
        </h1>

        {description ? (
          <p className="text-gray-600 mb-4">{description}</p>
        ) : (
          <p className="text-gray-600 mb-4">
            Your payment could not be processed. Please try again.
          </p>
        )}

        {status && (
          <div className="text-left bg-gray-50 p-4 rounded mb-4 text-sm space-y-1">
            <p>
              <strong>Status:</strong> {status.status}
            </p>
            <p>
              <strong>Transaction ID:</strong> {status.transaction_uuid}
            </p>
            <p>
              <strong>Amount:</strong> Rs {status.total_amount}
            </p>
            {status.ref_id && (
              <p>
                <strong>Ref ID:</strong> {status.ref_id}
              </p>
            )}
          </div>
        )}

        {error && (
          <p className="text-red-400 text-sm mb-4">
            Could not verify transaction status: {error}
          </p>
        )}

        {statusKey === "PENDING" && (
          <p className="text-amber-600 text-sm mb-4">
            Tip: The test account may have insufficient balance. Try a different
            eSewa test ID (9711111112, 9711111114).
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

export default PaymentFailure;
