// function ranger(userNumber) {
//   let outputArray = [];
//   for (let index = 0; index < userNumber + 1; index += 1) {
//     outputArray.push(index);
//   } 
//   return outputArray;
// }

// function replacer(arrayRange) {
//   let newArray = [];
//   arrayRange.forEach(function(element) {
//     element = element.toString();
//     if (element.includes("3")) {
//       element = "Won't you be my neighbor?";
//     } else if (element.includes("2")) {
//       element = "Boop!";
//     } else if (element.includes("1")) {
//       element = "Beep!";
//     }
//     newArray.push(" " + element);
//   });
//   return newArray;
// }

// $(document).ready(function(){
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 6000);
// }
// });

// $(document).ready(function(){
//   $('.carousel').carousel()
// })

// $(document).ready(function(){
//   $('.carousel').carousel('cycle',
//   {interval: 2000}
//   );
// })








//   $(document).ready(function() {
//     $("#number").submit(function(event) {
//       event.preventDefault();

//       const userNumber = parseInt($("#inputNum").val());
  
//       let returnNumber = replacer(ranger(userNumber));

//       $("#returnNumber").text(returnNumber);
//       $("#returnNumber").show();
//     })
// });