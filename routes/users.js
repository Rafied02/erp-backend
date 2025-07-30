const express = require('express');
const router = express.Router();
const {
  getUsers,
  addUser,
  updateUser,
  deleteUser
} = require('../controllers/usersController');

router.get('/', getUsers);         // Ambil semua user
router.post('/', addUser);         // Tambah user
router.put('/:id', updateUser);    // Edit user berdasarkan ID
router.delete('/:id', deleteUser); // Hapus user berdasarkan ID

module.exports = router;
