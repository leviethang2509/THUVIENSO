<body class="flex flex-col min-h-screen transition-colors duration-500">
    <script>
        (function() {
            const b = document.body;
            // 1. Áp dụng Mesh Gradient trực tiếp
            b.style.backgroundColor = "#e2e8f0";
            b.style.backgroundImage = `
                radial-gradient(at 0% 0%, rgba(0, 70, 139, 0.15) 0px, transparent 50%),
                radial-gradient(at 100% 0%, rgba(30, 58, 138, 0.1) 0px, transparent 50%),
                radial-gradient(at 100% 100%, rgba(0, 70, 139, 0.1) 0px, transparent 50%),
                radial-gradient(at 0% 100%, rgba(59, 130, 246, 0.1) 0px, transparent 50%)
            `;
            b.style.backgroundAttachment = "fixed";

            // 2. Hàm xử lý Glassmorphism cho các Card hiện có
            const applyGlass = () => {
                document.querySelectorAll('.bg-white').forEach(card => {
                    card.classList.remove('bg-white');
                    card.classList.add('glass-card');
                    card.style.borderRadius = "2.5rem";
                    card.style.border = "1px solid rgba(255, 255, 255, 0.5)";
                });
                
                document.querySelectorAll('button').forEach(btn => {
                    const txt = btn.innerText.toUpperCase();
                    if (txt.match(/ĐĂNG KÝ|XÁC NHẬN|MƯỢN|ĐĂNG NHẬP/)) {
                        btn.classList.add('tdmu-blue', 'shadow-2xl', 'hover:scale-[1.05]', 'transition-all', 'duration-300');
                        btn.style.backgroundColor = "#00468B";
                        btn.style.color = "white";
                    }
                });
            };

            // Thực thi ngay và đợi DOM ổn định để xử lý nốt các phần tử con
            window.addEventListener('load', applyGlass);
            console.log("TDMU Auto-Theme: Active");
        })();
    </script>
    
    </body>
