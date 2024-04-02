import { atom } from "recoil";
import { atomFamily } from 'recoil';

export const CompanyDropAtom=atom({
    key:"CompanyDropAtom",
    default:false
})

export const TransactionDropAtom=atom({
    key:"TransactionAtom",
    default:false
})

export const ReportDropAtom=atom({
    key:"ReportAtom",
    default:false
})



export const DropDownStateFamily = atomFamily({
  key: 'DropDownStateFamily',
  default: false,
});

export const OpenDropdownAtom = atom({
  key: 'openDropdown',
  default: "",
});

export const AdminDropdownAtom=atom({
  key:"AdminDropdownAtom",
  default:""
})