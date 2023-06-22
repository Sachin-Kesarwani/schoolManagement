

export interface signupformdataType{
    name:string,
    email:string,
    password:string
}
export interface eachuserInter{
    email:String,
    name:String,
    position:String,
    Password:String
  }

  export interface inidataType{
    loading:Boolean;
    error:Boolean;
    alluserdata:eachuserInter[];
}