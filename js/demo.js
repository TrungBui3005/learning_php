// alert("hello world");
// //-----------------------
// let add = (a,b)=> a+b;
//         alert(add(3,4));
// for(let i =1;i<=10;i++){
//     if(i%2==0){
//     continue;
//     }
//     console.log(i);
// }
// //-----------------------------
// let tenthanhvien =["Trung"," Xuân", "Minh" , "Huy"];
// let nhom ={
//     ten:"Nhóm 10",
//     tenthanhvien :[]
// };
// for(let i =0; i < tenthanhvien.length ; i++){
//     nhom.tenthanhvien.push(tenthanhvien[i]);
// }
// console.log(nhom);
//--------------------------
// document.getElementById("btnTest").onclick = function(){
//     alert("Nhìn cái chos gì :3");
// };
//----------------------------
// document.getElementById("myForm")
//     .addEventListener("submit", function(event) {
//     let name = document.getElementById("name").value;
//     if(name ===""){
//         alert("vui lòng nhập tên");
//         event.preventDefault();
//     }
// });
//--------------------------------
const form = document.getElementById("formDK");
const fullname = document.getElementById("fullname");
const address = document.getElementById("address");
const gender = document.getElementById("gender");
const email = document.getElementById("email");
const note = document.getElementById("note");

form.addEventListener("submit", function(e) {
    e.preventDefault();

        alert(
            "Họ tên: " + fullname.value +
            "\nĐịa chỉ: " + address.value +
            "\nGiới tính: " + gender.value +
            "\nEmail: " + email.value +
            "\nGhi chú: " + note.value
        );
    });