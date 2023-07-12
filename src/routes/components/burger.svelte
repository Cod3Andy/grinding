<script> 
    const burger = document.querySelector('#burger');
    const menu = document.querySelector('#menu');

const burgerCheck = () => { 
    burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden')
    }
})
 }
</script>