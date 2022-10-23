
// const navitems = document.getElementsByClassName('navitem');
const cancelbtn = document.querySelector('.cancelbtn');

// const rightnav = document.querySelector('.rightnav');
// const rightnavlist = rightnav.classList;


// const content = document.querySelector('.content').classList;
// console.log(content)
const burgermenu = document.getElementById("burgermenu")
console.log(burgermenu)
const sm_rightnav = document.getElementById("sm_rightnav")
// console.log(sm_rightnav)


cancelbtn.addEventListener('click', () => {
    sm_rightnav.style.top = "-45rem"
})

burgermenu.addEventListener('click', () => {
    sm_rightnav.style.top = "0rem"
})



