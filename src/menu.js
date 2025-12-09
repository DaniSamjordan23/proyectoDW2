document.addEventListener('DOMContentLoaded', function () {

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {

        const qtyValue = card.querySelector('.qty-value');
        const restarBtn = card.querySelector('.qty-btn.menos');
        const sumarBtn = card.querySelector('.qty-btn.mas');

        
        if (!qtyValue || !restarBtn || !sumarBtn) return;

       
        sumarBtn.addEventListener('click', () => {
            qtyValue.textContent = Number(qtyValue.textContent) + 1;
        });

       
        restarBtn.addEventListener('click', () => {
            const actual = Number(qtyValue.textContent);
            if (actual > 0) {
                qtyValue.textContent = actual - 1;
            }
        });

    });

});
