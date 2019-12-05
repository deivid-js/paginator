class ProdutoTable extends Table {

    constructor() {
        super();
        
        this.target = 'root';
        this.name = 'Produtos';
        this.route = 'produtos';
        this.key = ['procodigo'];

        // campos
        this.addField({
            name: 'procodigo',
            title: 'Código',
            width: 10
        });
        this.addField({
            name: 'pronome',
            title: 'Nome',
            width: 50
        });
        this.addField({
            name: 'provalorunitario',
            title: 'Valor Unitário',
            width: 20
        });
        this.addField({
            name: 'proativo',
            title: 'Ativo',
            width: 10
        });
        this.addField({
            name: 'lprcodigo',
            title: 'Lista',
            width: 10
        });

        // ações
        this.addAction({
            name: 'store',
            title: 'Novo',
            onValidate: () => true,
            onClick: () => redirect('novo.html')
        });
        this.addAction({
            name: 'show',
            title: 'Visualizar',
            onValidate: me => me.getCountSelectedRows() === 1,
            onClick: me => {
                const [key] = me.getSelectedRows();
                
                redirect(`visualizar.html?key=${key}`);
            }
        });
    }

}
