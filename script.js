const adding = document.querySelector('.add-a-book');
const submit = document.querySelector('.button');
const form = document.querySelector('.bg-form');

adding.addEventListener('click',()=>{
    form.style.display = 'flex';
})

submit.addEventListener('click',()=>{
    /*submitNewBook();
    resetForm();*/
    form.style.display = 'none';
});