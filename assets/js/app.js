const allSideMenu = document.querySelectorAll('.sidebar-menu li a');
const allSideMenudrp = document.querySelectorAll('.sidebar-menu .drop_link a');
// const allSideMenu = document.querySelectorAll('.sidebar-menu .drop_link a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

allSideMenudrp.forEach(item=> {
    const li = item.parentElement;
    
    item.addEventListener('click', function () {
    	allSideMenudrp.forEach(i=> {
    		i.parentElement.classList.remove('active');
    	})
       li.classList.add('active');
    })
});

         // ============= sideBar toggler ===============
const menuBar = document.getElementById('menu_bar');
const sideBar = document.querySelector('.side-navber');


menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('toggle_side_navber');
});


if(window.innerWidth < 575){
    window.onclick = function() {
        if (sideBar.classList.contains('toggle_side_navber')) {
            sideBar.classList.remove('toggle_side_navber');
        }
    }
}


const searchBtn = document.querySelector('.content-body nav .search form button');
// const searchBtnIcon = document.querySelector('.content-body nav form input');
const searchForm = document.querySelector('.content-body nav .search form input');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 992) {
        e.preventDefault;
        searchForm.style.display = "block";
        searchForm.style.width = "200px";
        searchBtn.style.borderRadius = "0 20px 20px 0";
    }
});


        // ========= Dark Mode toggler =========
const toggler = document.getElementById('theme-toggle');


toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});



        // ============== dropdown toggler =============
function myFunction() {
    document.getElementById("profile").classList.toggle("show");
    }

          
          // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("profile");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


var dropdown = document.getElementsByClassName("drop_side_nav");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none"; 
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
