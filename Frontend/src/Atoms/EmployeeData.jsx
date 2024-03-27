import { atom } from "recoil";

export const EmployeeDataAtom =atom({
    key:"EmployeeDataAtom",
    default:[]
})

export const currentPageAtom=atom({
    key:"CurrentPageAtom",
    default:1
})  