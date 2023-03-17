import  express  from "express";
import { addLikedMovie, changeUserPassword, deleteLikedMovies, deleteUser, deleteUserProfile, getLikedMovies, getUsers, loginUser, registerUser, updateUserProfile } from "../Controllers/UserController.js";
import { protect, admin } from "../middlewares/Auth.js";

const router = express.Router();

// PUBLIC ROUTES

router.post('/', registerUser);
router.post('/login', loginUser);

// ********** PRIVATE ROUTES ********

router.put('/', protect, updateUserProfile);
router.delete('/',  protect, deleteUserProfile);
router.put('/password', protect, changeUserPassword);
// we need to have movie model yet
router.get('/favorites', protect, getLikedMovies);
router.post('/favorites', protect, addLikedMovie);
router.delete('/favorites', protect, deleteLikedMovies);

// ********* ADMIN ROUTES **********
router.get('/', protect, admin, getUsers);
router.delete('/:id', protect, admin, deleteUser);

export default router;