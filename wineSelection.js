class WineSelection{
    constructor(space){
        this.space = Number(space);
        this.wines = [];
        this.bill = 0;
        
    }
    reserveABottle (wineName, wineType, price) {
        this.space -= 1
        if(this.space < 0){
            throw new Error( "Not enough space in the cellar.")
        }else{

            let obj = {
                wineName,
                wineType,
                price,
                paid: false,
            }
            this.wines.push(obj);
            return `You reserved a bottle of ${wineName} ${wineType} wine.`
        }
    }
    payWineBottle( wineName, price ){
        let currWine = this.wines.find((x) => x.wineName == wineName);
        if(!currWine){
            throw new Error(`${wineName} is not in the cellar.`)
        }
        if(currWine.paid == true){
           
            throw new Error`${wineName} has already been paid.`
            
        }else{
        currWine.paid = true;
        this.bill += price
        return `You bought a ${wineName} for a ${price}$.`
        }
    }
    openBottle(wineName){
        let currWine = this.wines.find((x) => x.wineName == wineName);
        if(!currWine){
            throw new Error("The wine, you're looking for, is not found.")
        }else{
        if(currWine.paid == false){
            throw new Error (`${wineName} need to be paid before open the bottle.`)
        }else{
            const index = this.wines.indexOf(wineName);
            this.wines.splice(index +1,1)
       
        return `You drank a bottle of ${wineName}.`
        }
       
    }
    }
    cellarRevision(wineType) {
  let currWine = this.wines.find((x) => x.wineType == wineType);
let result = []
 
  for (const el of this.wines) {
    
  
    if(el.paid == true){
       let buff = `${el.wineName} > ${el.wineType} - Has Paid.`
       result.push(buff)
    }else{
        let buff = `${el.wineName} > ${el.wineType} - Not Paid.` 
result.push(buff)
    }

  }
  return result.join('\n')
}
    
}
const selection = new WineSelection() 

selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144); 

selection.payWineBottle('Bodegas Godelia Mencía', 144); 

selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50); 

selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120); 

console.log(selection.cellarRevision()); 