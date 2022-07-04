    setInterval(displayNow, 1000);
    
    function displayNow() {

      var now = new Date();
      var days = now.getDate();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();
     
      document.querySelector(".days").innerHTML =  (days < 10 ? '0' : '') + (days);
      document.querySelector(".hours").innerHTML = (hours < 10 ? '0' : '') + (hours);
      document.querySelector(".minutes").innerHTML = (minutes < 10 ? '0' : '') + (minutes);
      document.querySelector(".seconds").innerHTML = (seconds < 10 ? '0' : '') + (seconds);

    }