window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// 1. 初始化：页面加载时，先读取记忆中的缩放比例
(function initZoom() {
    const savedZoom = localStorage.getItem('myAppZoomLevel');
    if (savedZoom) {
        document.body.style.zoom = savedZoom;
        console.log('✅ 已恢复记忆缩放比例:', savedZoom);
    }
})();

// 2. 监听鼠标滚轮事件（保留你原本有效的代码）
window.addEventListener('wheel', function(e) {
    // 检测是否按住了 Ctrl 键
    if (e.ctrlKey) {
        // 阻止浏览器默认的滚动行为
        e.preventDefault();
        
        // 获取当前的缩放比例（默认为 1）
        let currentZoom = document.body.style.zoom || 1;
        
        // 处理字符串格式的 zoom (如 "100%")
        if (typeof currentZoom === 'string') {
            currentZoom = parseFloat(currentZoom);
        }

        // 计算新的缩放比例
        // 滚轮向上(e.deltaY < 0) 放大，向下 缩小
        let newZoom = currentZoom + (e.deltaY < 0 ? 0.1 : -0.1);
        
        // 限制最小缩放为 0.5 (50%)，最大为 3.0 (300%)
        if (newZoom < 0.5) newZoom = 0.5;
        if (newZoom > 3.0) newZoom = 3.0;
        
        // 应用缩放
        document.body.style.zoom = newZoom;
        
        // 3. 关键修改：保存记忆
        localStorage.setItem('myAppZoomLevel', newZoom);
    }
}, { passive: false });
