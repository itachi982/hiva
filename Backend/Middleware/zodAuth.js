const zod=require('zod');

const createUserSchema = zod.object({
    
    employee_id:zod.string().min(1),
    PAN: zod.string().min(10, 'Please Enter Valid PAN Number'),
    employee_name: zod.string(),
    username: zod.string(),
    password: zod.string().min(8, 'Password must be at least 8 characters long')
      .refine((value) => /[A-Z]/.test(value), {
        message: 'Password must contain at least one capital letter',
      }).refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value), {
        message: 'Password must contain at least one special character'
    }),
    gender:zod.string().refine(value => value === 'Female' || value === 'Male', {
        message: 'Value must be either "Female" or "Male"',
    }),
    job_title:zod.string().min(1).max(16),
    
});



const updateUserSchema = zod.object({
    
  employee_id:zod.string().min(1),
  PAN: zod.string().min(10, 'Please Enter Valid PAN Number'),
  employee_name: zod.string(),
  username: zod.string(),
  gender:zod.string().refine(value => value === 'Female' || value === 'Male', {
      message: 'Value must be either "Female" or "Male"',
  }),
  job_title:zod.string().min(1).max(16),
  photo:zod.optional(),
  url:zod.string().optional(),
  join_date:zod.string().optional(),
  status:zod.string().optional(),
  access_rights:zod.string(),
  jobdataid:zod.string().optional()
});


const createAdminSchema = zod.object({
    
    employee_id:zod.string().min(1),
    PAN: zod.string().min(10, 'Please Enter Valid PAN Number'),
    employee_name: zod.string(),
    username: zod.string(),
    password: zod.string().min(8, 'Password must be at least 8 characters long')
      .refine((value) => /[A-Z]/.test(value), {
        message: 'Password must contain at least one capital letter',
      }).refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value), {
        message: 'Password must contain at least one special character'
    }),
    gender:zod.string().refine(value => value === 'Female' || value === 'Male', {
        message: 'Value must be either "Female" or "Male"',
    }),
    job_title:zod.string().min(1).max(16),
    
});


const changePasswordSchema=zod.object({

    oldPassword: zod.string().min(8, 'Password must be at least 8 characters long')
      .refine((value) => /[A-Z]/.test(value), {
        message: 'Password must contain at least one capital letter',
      }).refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value), {
        message: 'Password must contain at least one special character'
    }),
    newPassword: zod.string().min(8, 'Password must be at least 8 characters long')
      .refine((value) => /[A-Z]/.test(value), {
        message: 'Password must contain at least one capital letter',
      }).refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value), {
        message: 'Password must contain at least one special character'
    }),
    confirmPassword: zod.string().min(8, 'Password must be at least 8 characters long')
      .refine((value) => /[A-Z]/.test(value), {
        message: 'Password must contain at least one capital letter',
      }).refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value), {
        message: 'Password must contain at least one special character'
    })

})
const changeAdminPasswordSchema=zod.object({

    // oldPassword: zod.string().min(8, 'Password must be at least 8 characters long')
    //   .refine((value) => /[A-Z]/.test(value), {
    //     message: 'Password must contain at least one capital letter',
    //   }).refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value), {
    //     message: 'Password must contain at least one special character'
    // }),
    newPassword: zod.string().min(8, 'Password must be at least 8 characters long')
      .refine((value) => /[A-Z]/.test(value), {
        message: 'Password must contain at least one capital letter',
      }).refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value), {
        message: 'Password must contain at least one special character'
    }),
    confirmPassword: zod.string().min(8, 'Password must be at least 8 characters long')
      .refine((value) => /[A-Z]/.test(value), {
        message: 'Password must contain at least one capital letter',
      }).refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value), {
        message: 'Password must contain at least one special character'
    })

})

module.exports={
    createUserSchema,
    createAdminSchema,
    zod,
    changePasswordSchema,
    changeAdminPasswordSchema,
    updateUserSchema
}