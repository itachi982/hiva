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
    gender:zod.string().refine(value => value === 'female' || value === 'male', {
        message: 'Value must be either "female" or "male"',
    }),
    jobdataid:zod.number().int()
    
});



const updateUserSchema = zod.object({
    
  employee_id:zod.string().min(1),
  PAN: zod.string().min(10, 'Please Enter Valid PAN Number'),
  employee_name: zod.string(),
  username: zod.string(),
  gender:zod.string().refine(value => value === 'female' || value === 'male', {
      message: 'Value must be either "female" or "male"',
  }).optional(),
  url:zod.string().optional(),
  join_date:zod.string().optional(),
  status:zod.string().optional(),
  access_rights:zod.string().optional(),
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
    gender:zod.string().refine(value => value === 'female' || value === 'male', {
        message: 'Value must be either "female" or "male"',
    })
    
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

const jobDataSchema=zod.object({
  
    job_title:zod.string().min(1),
    base_salary:zod.number().int(),
    transportation_allowance:zod.number().int().optional(),
    meal_allowance:zod.number().int().optional()
})

const jobDataSchemaId=zod.object({

    job_id:zod.number().int(),
    job_title:zod.string().min(1),
    base_salary:zod.number().int(),
    transportation_allowance:zod.number().int().optional(),
    meal_allowance:zod.number().int().optional()
})

module.exports={
    createUserSchema,
    createAdminSchema,
    zod,
    changePasswordSchema,
    changeAdminPasswordSchema,
    jobDataSchema,
    jobDataSchemaId,
    updateUserSchema
}