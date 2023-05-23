document.getElementById("btn").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var city = document.getElementById("city").value;

  var body='name:'+name+'<br/> email:'+email+'<br/> phone:'+phone+'<br/> city:'+city;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "wahibwa16@gmail.com",
    Password : "B6CFA67BC92F123E1E250F3CFEC826A5E791",
    To : 'wahibahmed68@gmail.com',
    From : "wahibwa16@gmail.com",
    Subject : "contact message",
    Body : body
}).then(
  message => alert(message)
);
});
