const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Go from src/config/ to root, then into data/
const dbPath = path.join(__dirname, '../../data/real_estate.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Could not connect to database', err);
  } else {
    console.log('✅ Connected to SQLite database');
  }
});

module.exports = db;
