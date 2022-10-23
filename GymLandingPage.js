
const navitems = document.getElementsByClassName('navitem');
const burgermenu = document.querySelector('.burgermenu');

const rightnav = document.querySelector('.rightnav');
const rightnavlist = rightnav.classList;


const content = document.querySelector('.content').classList;
console.log(content)

burgermenu.addEventListener('click', () => {

    console.log(rightnavlist)
    console.log(rightnavlist.contains('expand'))
    if (rightnavlist.contains('expand')) {
        rightnavlist.add('collapse');
        rightnavlist.remove('expand')
    }
    else {
        rightnavlist.add('expand');
        rightnavlist.remove('collapse')
    }

    for (let items of navitems) {
        // console.log(items)
        items.classList.toggle('opacity');
    }


    if (content.contains('content_resp')) {
        content.remove('content_resp')
    }
    else {
        content.add('content_resp')
    }

})



