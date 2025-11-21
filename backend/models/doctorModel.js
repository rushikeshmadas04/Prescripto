import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: {type:String, required:true},
  email: {type:String, required:true,unique:true},
  password: {type:String, required:true},
  image: {type:String, required:true},
  speciality: {type:String, required:true},
  degree: {type:String, required:true},
  experience: {type:String, required:true},
  about: {type:String, required:true},
  available: {type:Boolean, default:true},
  fees : {type:String, required:true},
  address: {type:Object, required:true},
  date: {type:Number, required:true},
  slots_booked: {type:Object, default: {} },
},{minimize:false}) 

//Setting { minimize: false } in your schema options tells Mongoose:
// “Hey, don’t remove empty objects — save them as they are.”

const doctorModel = mongoose.models.doctor|| mongoose.model('doctor',doctorSchema)

export default doctorModel;