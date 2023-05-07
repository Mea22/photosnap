let parent = document.querySelector(".header-text");
let child = document.querySelector(".hdr");

child.addEventListener('mouseover', function() {
    parent.style.background = "radial-gradient(68.48% 68.48% at 0% 100%, #FFC593 0%, rgba(188, 113, 152, 0.49) 52.36%, rgba(90, 119, 255, 0.0001) 100%)";
    parent.style.mixBlendMode = "normal" ;
    parent.style.opacity = "0.49" ;
    


  });
  
  child.addEventListener('mouseout', function() {
    parent.style.background = 'unset';
    parent.style.opacity = "1"; 

  });

  
