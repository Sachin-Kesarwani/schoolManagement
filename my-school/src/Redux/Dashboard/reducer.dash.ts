
type data ={
    name:string

}

type inittype= {
    loading:boolean;
    error:boolean;
    data:Array<data>

}

const initialstate:inittype = {
    loading:false,
    error:false,
    data:[]
}




export const Dashreducer=(state=initialstate,{type,payload}:any)=>{




    switch(type){
        default:{
            return {...state}
        }
    }


}