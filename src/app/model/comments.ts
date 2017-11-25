
export class Comments{
    private id: number;
    private goodsId: number;
    private comment: string;
    private name: string;
    public date: Date;

    constructor(id: number, goodsId: number, comment:string, name:string, date:Date){
        this.id = id;
        this.name = name;
        this.goodsId = goodsId;
        this.comment = comment;
        this.date = date;
    }
}