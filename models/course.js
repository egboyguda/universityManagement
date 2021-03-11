const mongoose = require('mongoose');
const Schema = mongoose.Schema; // dd an method na mongoose.schema gn kadto nala sa schema na variable para halipot

//dd nag himu pinaka blueprint sa
//course schema, kun nanu knya mga property
const CourseSchema = new Schema({
    //course name
    name:{
        type:String,
        required:true,
    },
    subjects:[{
        //ngarana sa subject
        subjectName:String,
        subjectYear:Number,
        preSubject:[{subjectId:String}]
    }],
    required:true
})