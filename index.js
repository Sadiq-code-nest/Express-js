const myName = () => 'Sadiqul Islam';
const myAge = () => 25;
const cgpa = 3.45;

// exports.[name can be diffrent or same name doesn't matter]= [this should be similer]

// ----------  Export one by one ------------
exports.name=myName();
exports.age=myAge(); 
exports.result=cgpa; 

// ----------  Export Multiple  ------------
module.exports = {
    myName, myAge, cgpa
}