

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
export interface singleTeacherOrAdmin{
  _id:String;
  name: string;
  email: string;
  password: string;
  position: string;
  salary_permoth: number;
  january: boolean;
  february: boolean;
  march: boolean;
  april: boolean;
  may: boolean;
  june: boolean;
  july: boolean;
  august: boolean;
  september: boolean;
  october: boolean;
  november: boolean;
  december: boolean;
  preferred_subject?:String
}
  export interface inidataType{
    loading:Boolean;
    error:Boolean;
    alluserdatas:eachuserInter[];
    allTeacher:singleTeacherOrAdmin[]
}

