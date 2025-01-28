import axios from "axios";

export const getTransactions = async (req, res) => {

    const { token, paymentMethod, invoiceAmount, description, title, fiatCurrency } = req.body;

    // Validar los campos requeridos
    const requiredFields = ['token', 'paymentMethod', 'invoiceAmount', 'description', 'title', 'fiatCurrency'];
    for (const field of requiredFields) {
        if (!req.body[field]) {
            return res.status(400).json({ message: `${field} is required` });
        }
    }

    try {
        const response = await axios.post(`${process.env.API_URL}/invoices`, {
            paymentMethod,
            invoiceAmount,
            description,
            title,
            fiatCurrency
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        return res.status(201).json({
            message: 'Invoice created successfully',
            data: response.data
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error while creating invoice',
            error: error.message
        });
    }
}

export const getTransactionWebhook = async (req, res) => {
    const data = req.body;
    console.log(data);
    res.status(200).json({ message: data});
};