const original = document.querySelector('.original');
  const cloneContainer = document.querySelector('.clone');

  // Clona os ícones originais
  const clone = original.cloneNode(true);
  cloneContainer.appendChild(clone);

  // Calcula a largura total dos ícones originais
  const totalWidth = original.offsetWidth;

  // Aplica a duração proporcional à largura
  const carrossel = document.getElementById('carrossel');
  carrossel.style.animationDuration = `${totalWidth / 20}s`; 




  //MENU
  const menu=document.querySelector("i")
  const list = document.querySelector(".nav_list_mobile")
console.log(menu, ",,,,,,,,,,,,,,", list)
  menu.addEventListener('click', () =>{
   
    list.classList.toggle("open");

    if(list.classList.contains("open")){
      menu.classList.remove("fa-bars")
       menu.classList.add("fa-times"); 
    }else{
        menu.classList.remove("fa-times");
        menu.classList.add("fa-bars")

    
    }
    
  })

