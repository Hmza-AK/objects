//q 1

// var itemsArray = [
//     {
//         name:"juice",
//         price:50, 
//         quantity:3},
//         {
//             name:"cookie",
//             price:30, 
//             quantity:9},
//             {
                
//                     name:"shirt",
//                     price:880, 
//                     quantity:1},

//                 {name:"pen",
//                 price:100, 
//                 quantity:2},
// ];

// //////TOTAL PRICE
// console.log(itemsArray[0].price*3)
// console.log(itemsArray[1].price*9)
// console.log(itemsArray[2].price*1)
// console.log(itemsArray[3].price*2)    


//q 2

// var obj={
//     name: "Hamza Ali",
//     email: "hamzaali.ke0316@@gmail.com",
//     age: 24,
//     password: 000000,
//     gender:"Male",
//     city:"Karachi",
//     country: "Pakistan"
// }
// var check  = "age" in obj
// console.log(check);
// var check  = "country" in obj
// console.log(check);
// var check  = "firstName" in obj
// console.log(check);
// var check  = "lastName" in obj
// console.log(check);

//q 3


    // function Student(Name,age, country){
    //      this.Name=Name
    //      this.age=age;
    //      this.country=country;
    // }

    // var std1 = new Student("HAMZA" , 23 , false)
    // var std2 = new Student("XYZ" , 60 , true)
    // var std3 = new Student("ABC" , 90 , false)

    // console.log(std1);
    // console.log(std2);
    // console.log(std3);


        /////////////////QUESTION 4/////////////


    //     function Data(Name, gender, address, education, profession){
    //          this.Name=Name;
    //          this.gender=gender;
    //          this.address=address;
    //          this. education= education;
    //          this.profession=profession;
    //     }    

    // var person1 = new Data("HAMZA" , "male" , "Karachi", "Graduation", "Engineer");
    // var person2 = new Data("ABC" , "female" , "Karachi", "UnderGraduate", "Student");
    // var person3 = new Data("XYZ" , "female ", "Lahore", "Intermediate", "Student");

    // console.log(person1)

//     var show = true;
  

document.getElementById("slectBox");

Select="<select>"+
"<option>" + "Profession " + "</option>"+
"<option>" + "Engineer"+ "</option>"+
"<option>" + "Doctor"+ "</option>"+
"<option>" + "Student"+ "</option>"

selectBox.innerHTML=Select


document.getElementById("slectBox2");

Select="<select>"+
"<option>" + "Education " + "</option>"+
"<option>" + "Intermediate"+ "</option>"+
"<option>" + "Graduation"+ "</option>"+
"<option>" +"UnderGraduate" + "</option>"

selectBox2.innerHTML=Select
















// function showCheckboxes() {
//     var checkboxes = 
//         document.getElementById("checkBoxes");

//     if (show) {
//         checkboxes.style.display = "block";
//         show = false;
//     } else {
//         checkboxes.style.display = "none";
//         show = true;
//     }
// }

// var show = true;
  
// function showCheck() {
//     var checkboxes = 
//         document.getElementById("Boxes");

//     if (show) {
//         checkboxes.style.display = "block";
//         show = false;
//     } else {
//         checkboxes.style.display = "none";
//         show = true;
//     }
// }

// ///////////RADIO BTN
// const btn = document.querySelector('#btn');
//         // handle button click
//         btn.onclick = function () {
//             const rbs = document.querySelectorAll('input[name="choice"]');
//             let selectedValue;
//             for (const rb of rbs) {
//                 if (rb.checked) {
//                     selectedValue = rb.value;
//                     break;
//                 }
//             }
//             alert(selectedValue);
//         };

