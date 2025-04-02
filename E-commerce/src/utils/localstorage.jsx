export const loadState = ()=>{
    try{
        let allData = localStorage.getItem("products");
        if(allData == null)
        {
            return undefined;
        }
        else
        {
            return JSON.parse(allData);
        }
    }catch(err){
        console.log(err);
        return undefined;
    }
}

export const saveState=(state)=>{
    try{
        localStorage.setItem("products",JSON.stringify(state));
    }catch(err){
        console.log(err);
        return undefined;
    }
}