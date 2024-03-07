const zod=require('zod');

const createUserSchema = zod.object({
    
    PAN: zod.string().min(11, 'Please Enter Valid PAN Number'),
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
    job_title:string().min(1).max(16),
    
});


const createAdminSchema = zod.object({
    
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
    job_title:string().min(1).max(16),
    
});

module.exports={
    createUserSchema,
    createAdminSchema,
}