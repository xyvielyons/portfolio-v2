export type studentType = {
    name:string;
    age:number;
    isOrphan:boolean;
    course?:string;

}
export type User = {
    name:string,
    email:string,
    password:string,
    verified?:boolean
}
export interface IUser{
    name:string,
    email:string,
    password:string,
    verified?:boolean
}
export interface IEmployee extends IUser{
    id:string,
    taxNumber:number
}
export type ProductProps = {
    title:string,
    price:number
}
export interface IProductProps{
    title:string,
    price:number
}