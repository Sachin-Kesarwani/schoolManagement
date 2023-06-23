

export interface signupformdataType{
    name:string,
    email:string,
    password:string
}
export interface eachuserInter{
  _id:String;
    email:String;
    name:String;
    position:String;
    password:String;
    __v:Number;
  }

  export interface inidataType{
    loading:Boolean;
    error:Boolean;
    alluserdatas:eachuserInter[];
}

