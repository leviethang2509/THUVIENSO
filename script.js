<script>
    document.addEventListener("DOMContentLoaded", function() {
        // 1. Tự động áp dụng style nền Mesh Gradient cho Body
        const bodyStyle = document.body.style;
        document.body.classList.add("flex", "flex-col", "min-h-screen");
        bodyStyle.backgroundColor = "#e2e8f0";
        bodyStyle.backgroundImage = `
            radial-gradient(at 0% 0%, rgba(0, 70, 139, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(30, 58, 138, 0.1) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(0, 70, 139, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(59, 130, 246, 0.1) 0px, transparent 50%)
        `;
        bodyStyle.backgroundAttachment = "fixed";

        // 2. Tự động tìm các khung chính (Cards) và áp dụng hiệu ứng Kính mờ
        // Tìm tất cả các div có màu nền trắng (bg-white) để chuyển sang Glassmorphism
        const mainCards = document.querySelectorAll('.bg-white');
        mainCards.forEach(card => {
            card.classList.remove('bg-white');
            card.classList.add('glass-card');
            // Tăng độ bo góc cho hiện đại
            if (!card.classList.contains('rounded-full')) {
                card.style.borderRadius = "2.5rem";
            }
        });

        // 3. Tự động áp dụng hiệu ứng chuyển động (Animation) khi load trang
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.classList.add('animate-slide-up');
        }

        // 4. Đồng bộ màu sắc nút bấm TDMU Blue
        const primaryButtons = document.querySelectorAll('button');
        primaryButtons.forEach(btn => {
            if (btn.innerText.includes('ĐĂNG KÝ') || btn.innerText.includes('XÁC NHẬN') || btn.innerText.includes('MƯỢN')) {
                btn.classList.add('tdmu-blue', 'shadow-xl', 'hover:scale-[1.02]', 'transition-all');
                btn.style.color = "white";
            }
        });

        console.log("Hệ thống TDMU: Đã tự động áp dụng giao diện Mesh & Glassmorphism.");
    });
</script>
