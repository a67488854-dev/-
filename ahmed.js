// أنيميشن عداد الأرقام التفاعلي عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 100; // سرعة حركة العداد

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const currentText = counter.innerText.replace('+', '').replace(/,/g, '');
            const count = +currentText;

            // تحديد مقدار الخطوة بناءً على حجم الرقم المستهدف
            const inc = Math.max(Math.ceil(target / speed), 1);

            if (count < target) {
                const nextCount = count + inc;
                if (nextCount >= target) {
                    counter.innerText = '+' + target.toLocaleString('ar-EG');
                } else {
                    counter.innerText = '+' + nextCount.toLocaleString('ar-EG');
                    setTimeout(updateCount, 15);
                }
            } else {
                counter.innerText = '+' + target.toLocaleString('ar-EG');
            }
        };

        updateCount();
    });
});
