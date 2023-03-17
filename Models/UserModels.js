import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Please add a full name'],
    },
    email: {
        type: String,
        required: [true, 'Please add a email'],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: [6, 'Password must be at least 6 characters'], 
    },
    image:{
        type: String
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    likedMovies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movies',
        },
    ],  
  },
  {
    //add time
    timestamps: true,

  }
);

export default mongoose.model('user', UserSchema);