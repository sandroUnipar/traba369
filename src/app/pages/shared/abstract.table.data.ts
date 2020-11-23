import { LocalDataSource } from 'ng2-smart-table';

export abstract class AbstractTableData {

    public localDataSource: LocalDataSource = new LocalDataSource();
    public data: any = [];
    public settings = {};
    public perPage: number = 10;

    constructor() {
        this.load();
    }

    abstract getData();
    abstract getColumns(): any;

    onDeleteConfirm(event): void {
        if (window.confirm('Você quer realmente remover esse registro?')) {
            event.confirm.resolve();
            return;
        }
        event.confirm.reject();
    }

    async load() {
        this.loadSettings();
        this.data = await this.getData();
        this.localDataSource.load(this.data);
    }

    private loadSettings() {

        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>'
            },
            actions: {
                columnTitle: 'Ações',
                position: 'right',
                edit: false,
                delete: false,
                add: false
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>'
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true
            },
            columns: this.getColumns(),
            noDataMessage: 'Nenhum registro encontrado.',
            defaultStyle: false,
            pager: {
                perPage: this.perPage,
            },
            attr: {
                class: 'table table-bordered mat-table'
            }
        };
    }
}