
const tablo ={
    title : "Our Table",
    width: 120,
    columns: [
        {
            key: 'id',
            title: 'ID',
            width: 10
        },
        {
            key: 'name',
            title: 'Name',
            width: 25
        },
        {
            key: 'role',
            title: 'Role',
            width: 50
        }
    ],
    rows: [
        {
        id: 1,
        name: "Zeynep",
        role: "Web Developer"
    },
    {
        id: 2,
        name: "Mustafa",
        role: "QA Tester"
    },
    {
        id: 3,
        name: "Nur",
        role: "Designer"
    }
]

}


class Table{
    constructor({title, width, columns, rows}){
        this.tableTitle = title || "Default Title";
        this.tableWidth = width || process.stdout.columns;
        this.tableColumns =columns || [];
        this.tableRows = rows || [];

    }
    setTitle(title){
        this.tableTitle = title;
        
    }

    createTitle(){
       
        let space = Math.round((this.tableWidth-this.tableTitle.length)/2)-1;
        console.log(`|${" ".repeat(space)}${this.tableTitle}${" ".repeat(space)}|`);
    }



    createColumn(title,columnWidth){
    let space = columnWidth - title.length - 2;
    let template = ` ${title}${" ".repeat(space) }|`;
    return template;
    }



    createHeader(){
        let totalWidth = this.tableWidth;
        let template ="|";  
        this.tableColumns.forEach((value,index)=>{
            if(index=== this.tableColumns.length-1){
                template += this.createColumn(value.title, totalWidth);
            }else{
                template += this.createColumn(value.title, value.width);
            }
            totalWidth -= value.width
            
    });
    console.log(template);
    }



    createDivider(){
    let totalWidth = this.tableWidth;
    let template = "|";
    this.tableColumns.forEach((value,index)=>{
        if(index===this.tableColumns.length -1){
            template +="=".repeat(totalWidth -1) + "|";
        }else{
            template += "=".repeat(value.width-1) + "|";
        }
      totalWidth -= value.width;
    })
    console.log(template);
    }


    createRow(){

        for(let i=0; i<this.tableRows.length; i++){
            let totalWidth = this.tableWidth;
            let template = "|";

            Object.values(this.tableRows[i]).forEach((abc, index)=>{
               // let space = this.tableColumns[index].width - abc.toString().length - 2;

                if(index === this.tableColumns.length - 1){
                    // template += ` ${abc}${" ".repeat(totalWidth - abc.toString().length -2)}|`;
                    template += this.createColumn(abc, totalWidth)
                }else{
                    // template += ` ${abc}${" ".repeat(space)}|`;
                    template += this.createColumn(abc.toString(), this.tableColumns[index].width)

                }
                totalWidth -= this.tableColumns[index].width;
                
            })
            
            console.log(template);
        }
       
    }
}








const neu = new Table(tablo)
neu.createTitle();
neu.createDivider();
neu.createHeader();
neu.createRow();



// const columns = 
// [
//     {
//         key: 'id',
//         title: 'ID',
//         width: 10
//     },
//     {
//         key: 'name',
//         title: 'Name',
//         width: 25
//     },
//     {
//         key: 'role',
//         title: 'Role',
//         width: 50
//     }
// ];

// let title = "Default Titel";
// //let width = process.stdout.columns;
// let width =150;

// function setTitle(neuTitle){
//     return title = neuTitle;

// }

// // Title bölümü space ayarlanarak ortalandi.
// function createTitle(){
//     let space = Math.round((width-title.length)/2)-1;
//     console.log(`|${" ".repeat(space)}${title}${" ".repeat(space)}|`);
// }
// createTitle();

// //Column ilk satiri olusturuldu.
// function createColumn(title, columnWidth){
//     //let template = "|";
//     let space = columnWidth - title.length - 2;
//     let template = ` ${title}${" ".repeat(space) }|`;
//     return template;
// }

// //headerin son column genisligi title genisliginden kücüktü. Her seferinde total genislik azalacak sekilde kodeu yazip son indexin genisligine atamis olduk. Bu sekilde title genisligi ile tamamen ayni hizada oldu.
// function createHeader(){
//     let totalWidth = 150;
//     let template ="|";  
//     columns.forEach((value,index)=>{
//         if(index=== columns.length-1){
//             template += createColumn(value.title, totalWidth);
//         }else{
//             template += createColumn(value.title, value.width);
//         }
//         totalWidth -= value.width
        
// });

// console.log(template);
// }

// createHeader();


// //Divider
// function createDivider(){
//     let totalWidth=150;
//     let template = "|";
//     columns.forEach((value,index)=>{
//         if(index===columns.length -1){
//             template +="=".repeat(totalWidth -1) + "|";
//         }else{
//             template += "=".repeat(value.width-1) + "|";
//         }
//         totalWidth -= value.width;
//     })
//     console.log(template);

// }
// createDivider();




