import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = 5000;
const DATA_FILE = path.join(process.cwd(), 'contacts.json');

// Middleware
app.use(cors());
app.use(express.json());

// Ensure data file exists
const ensureDataFile = async () => {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
  }
};

// Handle form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = { 
      name, 
      email, 
      message, 
      date: new Date().toISOString() 
    };

    // Read existing data
    const data = await fs.readFile(DATA_FILE, 'utf8');
    const contacts = JSON.parse(data);

    // Add new contact
    contacts.push(newContact);

    // Save back to file
    await fs.writeFile(DATA_FILE, JSON.stringify(contacts, null, 2));

    res.json({ message: 'Message saved to file!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Failed to save message' });
  }
});

// Initialize and start server
const startServer = async () => {
  await ensureDataFile();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Data will be saved to: ${DATA_FILE}`);
  });
};

startServer().catch(console.error);