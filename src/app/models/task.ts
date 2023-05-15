export interface Task {
    id?:number;
    taskName: string;
    date:string;
    situation?:boolean | null;
    description:string;
}
