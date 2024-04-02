import { atom } from "recoil"
export const ReportAtom=atom({
    key:"ReportAtom",
    default:""
})

export const AttendanceAtom=atom({
    key:"AttendanceAtom",
    default:['0']
    
})

export const SalaryAtom=atom({
    key:"SalaryAtom",
    default: ['0']
})

export const DeductionAtom=atom({
    key:"DeductionAtom",
    default:['0']
})