export const checkTransactionStatus = async (req, res) => {
  try {
    const { product_code, total_amount, transaction_uuid } = req.query;

    const url = `https://rc.esewa.com.np/api/epay/transaction/status/?product_code=${product_code}&total_amount=${total_amount}&transaction_uuid=${transaction_uuid}`;

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
