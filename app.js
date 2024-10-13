const loginsec = document.querySelector('.login-section')
const loglink = document.querySelector('.login-link')
const registerlink = document.querySelector('.register-link')

registerlink.addEventListener('click', ()=>{
    loginsec.classList.add('active')
})
loglink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})