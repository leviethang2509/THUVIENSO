/**
 * TDMU Library Theme Engine
 * Tự động áp dụng Mesh Gradient, Glassmorphism và cấu hình Button nghiệp vụ
 */
(function() {
    const applyTheme = () => {
        const b = document.body;

        // 1. Xóa bỏ hoàn toàn style nền cũ và áp dụng Mesh Gradient mới
        b.style.removeProperty('background');
        b.style.removeProperty('background-color');
        b.style.removeProperty('background-image');

        b.style.setProperty('background-color', '#e2e8f0', 'important');
        b.style.setProperty('background-image', `
            radial-gradient(at 0% 0%, rgba(0, 70, 139, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(30, 58, 138, 0.1) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(0, 70, 139, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(59, 130, 246, 0.1) 0px, transparent 50%)
        `, 'important');
        b.style.setProperty('background-attachment', 'fixed', 'important');

        // 2. Chuyển đổi các khối bg-white sang hiệu ứng Glassmorphism
        document.querySelectorAll('.bg-white, [style*="background-color: white"], [style*="background-color: rgb(255, 255, 255)"]').forEach(card => {
            card.style.setProperty('background-color', 'rgba(255, 255, 255, 0.8)', 'important');
            card.style.setProperty('backdrop-filter', 'blur(12px)', 'important');
            card.style.setProperty('-webkit-backdrop-filter', 'blur(12px)', 'important');
            card.style.setProperty('border', '1px solid rgba(255, 255, 255, 0.5)', 'important');
            
            if (!card.classList.contains('rounded-full')) {
                card.style.setProperty('border-radius', '2.5rem', 'important');
            }
        });

        // 3. Tự động nhận diện và định dạng nút bấm theo UseCase (A.1, A.2, A.3, A.4)
        document.querySelectorAll('button').forEach(btn => {
            const txt = btn.innerText.toUpperCase();
            // Các từ khóa nghiệp vụ từ tài liệu 
            if (txt.match(/ĐĂNG KÝ|XÁC NHẬN|MƯỢN|ĐĂNG NHẬP|TẢI|TRA CỨU/)) {
                btn.style.setProperty('background-color', '#00468B', 'important');
                btn.style.setProperty('color', 'white', 'important');
                btn.style.setProperty('border-radius', '1rem', 'important');
                btn.classList.add('shadow-2xl', 'hover:scale-[1.05]', 'transition-all', 'duration-300');
            }
        });
    };

    // Chạy ngay khi load để tránh giật giao diện
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyTheme);
    } else {
        applyTheme();
    }
    
    // Đảm bảo chạy lại khi toàn bộ tài nguyên (CSS ngoài) đã tải xong
    window.addEventListener('load', applyTheme);
})();
