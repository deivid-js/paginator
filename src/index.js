(function() {

    addEventByClass('menu-item', 'click', ({ target }) => {
        let to = target.getAttribute('to');
        let table = null;

        switch (to) {
            case 'ProdutoTable': {
                table = new ProdutoTable;
                break;
            }
        }

        table.render();

        byClass('menu-item-active').forEach(item => item.classList.remove('menu-item-active'));

        target.classList.add('menu-item-active');
    });

})();