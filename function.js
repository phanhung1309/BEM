function toast({
    title = '', 
    message = '', 
    type = 'info', 
    duration = 3000,
    fadeOut = 1000
}) {
    const main = document.getElementById('toast')
    const icons = {
        success: 'fas fa-check-circle',
        info: 'fas fa-info-circle',
        warning: 'fas fa-exclamation-circle',
        error: 'fas fa-exclamation-circle',
    }
    const icon = icons[type]

    if(main) {
        const toast = document.createElement('div')

        // Auto remove toast
        const autoRemove = setTimeout(function() {
            main.removeChild(toast)
        }, duration) 

        // Remove toast when clicked close button
        toast.onclick = function(event) {
            if(event.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoRemove)
            }
        }

        toast.classList.add('toast', `toast--${type}`)
        const delay = (duration/1000).toFixed(2)
        const timeFadeOut = (fadeOut/1000).toFixed(2)

        toast.style.animation = `slideInRight ease .5s, fadeOut linear ${timeFadeOut}s ${delay}s forwards`
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>

            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>

            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `
        main.appendChild(toast)
    }
}


function showSuccessToast() {
    toast({
        title: 'Thành công',
        message: 'Bạn đã đăng ký tài khoản thành công!',
        type: 'success',
        duration: 5000,
        fadeOut: 1000
    });
}

function showErrorToast() {
    toast({
        title: 'Thất bại',
        message: 'Có lỗi xảy ra khi đăng ký. Vui lòng kiểm tra lại thông tin!',
        type: 'error',
        duration: 5000,
        fadeOut: 1000
    });
}
