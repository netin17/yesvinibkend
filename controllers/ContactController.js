const db = require('../database'); // Import the database connection

// Function to save contact information received from Angular form
const saveContact = (req, res) => {
    const { name, phoneNumber, email, date, timeSlot, communicationType, comments } = req.body;

    // Example query to insert the contact details into a 'contacts' table
    const insertQuery = `
        INSERT INTO contact (name, phone, email, date, timeslot, comm_type, comments)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        insertQuery,
        [name, phoneNumber, email, date, timeSlot, communicationType, comments],
        (err, result) => {
            if (err) {
                console.error('Error saving contact:', err);
                res.status(500).json({ error: 'Error saving contact information' });
                return;
            }
            res.status(201).json({ message: 'Contact information saved successfully' });
        }
    );
};

module.exports = {
    saveContact
};