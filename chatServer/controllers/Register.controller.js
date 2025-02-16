import multer from 'multer'
import UserModel from '../models/User';
import path from 'path';
import bcrypt from 'bcrypt';
const storage=multer.diskStorage({
        destination:(req,res,cb)=>{
                cb(null,'public/images');
        },
        filename:(req,res,cb)=>{
                cb(null,file.fildname+"_"+date.now()+path.extname(file.originalname));
        }
    
})
export const upload =multer({
        storage : storage
})
async function Register(req, res) {
        try{
                const {username, password} = req.body;
                const file = req.file.filename;
                const userExist=await UserModel.findOne({username})
                if(userExist){
                        return res.status(400).json({message:'User already exists'});
                }
                const hashedPassword=await bcrypt.hash(password,10);
                const newUser = new UserModel({
                        username,
                        password:hashedPassword,
                        avatar:file
                })
                await newUser.save();
                return res.status(201).json({message:'User registered successfully'});


        }catch(err){
                console.log(err);
                res.status(500).json({message:err.message});
        }
}
export default Register;