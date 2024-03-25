import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,

        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true, 
        },
        profilePicture:{
            type:String,
            default:"https://t4.ftcdn.net/jpg/06/35/83/71/360_F_635837156_8OnNGNg1R4IuiPPKGzOJCNbuMisxcz9a.jpg",
        }

    }, {timestamps:true}
);

const User = mongoose.model('User',userSchema);

export default User;

