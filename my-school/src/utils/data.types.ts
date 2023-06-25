

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



export interface studentData {
  _id: string;
  name: string;
  fatherName: string;
  motherName: string;
  class: number;
  address: string;
  aadhar: number;
  contact: number;
  DOB: string;
  transport: boolean;
  test_score: number;
  transport_from: string;
  transport_to: string;
  userid: string;
  status: boolean;
  transport_driver?: string;
  transport_conductor?: string;
  class_teacher: string;
  class_teacher_id: string;
  transport_per_month_fees?: number;
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
  transport_fees_january?: boolean;
  transport_fees_february?: boolean;
  transport_fees_march?: boolean;
  transport_fees_april?: boolean;
  transport_fees_may?: boolean;
  transport_fees_june?: boolean;
  transport_fees_july?: boolean;
  transport_fees_august?: boolean;
  transport_fees_september?: boolean;
  transport_fees_october?: boolean;
  transport_fees_november?: boolean;
  transport_fees_december?: boolean;
  __v?: number;
}

export interface RaisesdrequestInter {
  _id: string;
  userid: string;
  student_id: string;
  category: string;
  previous_data: string;
  new_data: string;
  cancel_request: boolean;
  status: boolean;
  reason_message: string;
}

  export interface inidataType{
    loading:Boolean;
    error:Boolean;
    alluserdatas:eachuserInter[];
    allTeacher:singleTeacherOrAdmin[],
    alladmin:singleTeacherOrAdmin[],
    enrolledStudents:studentData[],
    allRequest:RaisesdrequestInter[]
}

