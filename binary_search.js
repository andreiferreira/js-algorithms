const listaN = [1, 30, 44, 56, 100, 111, 222, 245, 300, 333, 350]

function buscaBinaria(list, item, begin=0, end) {
  
  let middle;
  
  if(!end) {
    end = list.length - 1;
}
  
  if(begin <= end) {
    middle = Math.floor((begin + end) / 2);
        
    if(list[middle] == item) {
      return list[middle];
    }
    
    if(item < list[middle]) {
      return buscaBinaria(list, item, begin, middle -1)
    }else {
      return buscaBinaria(list, item, middle + 1, end)
    }
  }

  return 'Item not found'
}
  

buscaBinaria(listaN, 122)