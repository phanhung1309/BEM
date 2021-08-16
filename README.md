# BEM
Một số note cần nhớ:
    #syntax: BEM
        .block
        .block__element
        .block--modifier
        .block__element--modifier

js
    1. Truyền tham số cho hàm bằng object ${}
        function toast({
            title = '', 
            message = '', 
            type = 'info', 
            duration = 3000,
            fadeOut = 1000
        }) {
        }
    2. Một số câu lệnh

Các bước 
    B1: Tạo thẻ div 
            const main = document.getElementById('toast')
            if(main) {
                const toast = document.createElement('div')
            }
    
    B2: Thêm class cho thẻ div 
            toast.classList.add('toast', `toast--${type}`)
    
    B3: Thêm các CSS có chứa biến, HTML có chứa biến vào js
        toast.style.animation = `slideInRight ease .5s, fadeOut linear ${timeFadeOut}s ${delay}s forwards`
        <!-- forwards dừng lại tại thời điểm đó -->

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

    B4: Thêm thẻ div toast vào main
        main.appendChild(toast)

    B5: Thêm các hàm onlick vào các button để truyền tham số
        <div onclick="showSuccessToast();" class="btn btn--success">Show success toast</div>

        function showSuccessToast() {
            toast({
                title: 'Thành công',
                message: 'Bạn đã đăng ký tài khoản thành công!',
                type: 'success',
                duration: 5000,
                fadeOut: 1000
            });
        }

    B6: setTimeout và click vào close button thì tắt toast
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


    