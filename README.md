<h1 align ="center" >Introducing Hiva: Revolutionizing Employee Management with MERN Stack</h1>
<br/>
<h3>Welcome to Hiva: Your Next Generation Employee Management Solution</h3>
<h5  align ="center">Hiva isn't just another project – it's a testament to our commitment to innovation and excellence in software development. Built on the powerful MERN (MongoDB, Express.js, React.js, Node.js) stack, Hiva redefines employee management for small-sized industries with its cutting-edge features and seamless user experience.</h5>
<br/>

  * [Setting Up on a local machine](#Setting-Up-on-a-local-machine)
  * [Features](#Features)
  * [Tech Stack](#Tech-Stack)
      - Frontend
      - Backend
      - Database
  * [Screenshots](#screenshots)

## Setting Up on a local machine
To Setup Hiva locally , Follow the Following steps 
- Clone the Hiva From Github
- Open Hiva in a Code Editor
- Open two Terminal windows
In First Terminal
```
$ cd Frontend
$ npm i
$ npm run dev
```
In Second Terminal
 - Create a .env file in Backend Folder
```
  # ----- .env -----
  JWTPASS="JWT_KEY"
  DATABASE_URL="YOUR_PRISMA_ACCELERATE_API_KEY"
  DIRECT_DATABASE_URL="YOUR_MYSQL_DB_LINK"
  //Cloudinary Creds (For Pictures Upload)
  cloud_name: '' 
  api_key: '' 
  api_secret: '' 
```

```
# --- Terminal ---- 
$ cd Backend
$ npm i
$ npx nodemon index.js
```
## Features
- Admin Panel
- Employee Panel
- Add Employee
- Edit Employee
- Remove Employee
- Add Job Positions
- Edit Job Positions
- Remove Job Positions
- Admin Dashboard
- Add Attendance
- Edit Attendance
- Deduction Data
- Change Admin/Employee Passwords
- Login Pages for Admin/Employees
- Create Pages for Admin/Employees

## Tech Stack
Frontend
  - [React JS ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
  - [React Hooks  ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
  - [React Router Dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
  - [Axios](https://www.npmjs.com/package/axios) - For making Api calls
  - [Tailwind CSS](https://tailwindcss.com/) - For User Interface
  - [Heroicons](https://heroicons.com/) - For Icons
  - [Recoil](https://recoiljs.org/) - Managing complex application state
  - [React Vite](https://vitejs.dev/guide/) - Improved website speed
  - [ChartJS](https://www.chartjs.org/) - An open source library used to create interactive graphs on websites or web application
  - [Framer Motion](https://www.framer.com/motion/) - For User Interface

Backend
- [Node JS](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express JS](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [Cors](https://www.npmjs.com/package/cors) - Provides a Connect/Express middleware
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero Dependency module that loads environment variables
- [Nodemon](https://www.npmjs.com/package/nodemon) - To monitor changes to the program code that is being developed
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For authentication
- [Argon2](https://www.npmjs.com/package/argon2) - A password-hashing function that summarizes the state of the art in the design of memory-hard functions and can be used to hash passwords for credential storage, key derivation, or other applications.
- [Prisma](https://www.prisma.io/) - Open source Node.js and TypeScript ORM with a readable data model, automated migrations, type-safety, and auto-completion.
- [Prisma Accelerate](https://www.prisma.io/data-platform/accelerate) - Accelerate extends your Prisma Client with an intuitive API offering granular control over established caching patterns on a per-query basis.
- [Cloudinary](https://cloudinary.com/) - Streamline media management and improve user experience by automatically delivering images and videos, enhanced and optimized for every user.
- [multer](https://www.npmjs.com/package/multer) - Multer is a node.js middleware for handling multipart/form-data
- [Json Web Tokens](https://www.npmjs.com/package/jsonwebtoken) - JSON Web Token (JWT) is a compact, URL-safe means of representing
   claims to be transferred between two parties.
- [Zod](https://zod.dev/) - TypeScript-first schema validation with static type inference

DataBase
 - As we use prisma (ORM) for Managing the Database So We can Easily Configure it to use Multiple type of Database
 - Mysql
 - Postgres
 - Maridb
 - Refer to prisma Documentaion for more  [prisma Docs](https://www.prisma.io/docs)

## ScreenShots
![Dashboard](https://github.com/itachi982/hiva/blob/master/ScreenShots/DashBoard.png)
![EmployeeSignin](https://github.com/itachi982/hiva/blob/master/ScreenShots/EmployeeSignin.png)
![Employee Dashboard](https://github.com/itachi982/hiva/blob/master/ScreenShots/Screenshot%20from%202024-04-08%2011-46-25.png)
![Employee ChangePassword](https://github.com/itachi982/hiva/blob/master/ScreenShots/Screenshot%20from%202024-04-08%2011-45-52.png)
![Employee Profile](https://github.com/itachi982/hiva/blob/master/ScreenShots/Screenshot%20from%202024-04-08%2011-45-59.png)
![Admin HomePage](https://github.com/itachi982/hiva/blob/master/ScreenShots/Screenshot%20from%202024-04-08%2011-46-44.png)
![AdminSignup](https://github.com/itachi982/hiva/blob/master/ScreenShots/Screenshot%20from%202024-04-08%2011-46-48.png)
![AdminSignin](https://github.com/itachi982/hiva/blob/master/ScreenShots/Screenshot%20from%202024-04-08%2011-46-54.png)
![AdminDashboard](https://github.com/itachi982/hiva/blob/master/ScreenShots/Screenshot%20from%202024-04-08%2011-51-32.png)
![EmployeesPage](https://github.com/itachi982/hiva/blob/master/ScreenShots/Screenshot%20from%202024-04-08%2011-51-43.png)
![AddEmployee](https://github.com/itachi982/hiva/blob/master/ScreenShots/Screenshot%20from%202024-04-08%2011-51-47.png)
![EditEmployee](https://github.com/itachi982/hiva/blob/master/ScreenShots/Screenshot%20from%202024-04-08%2011-51-56.png)
![EmployeeReport](https://github.com/itachi982/hiva/blob/master/ScreenShots/Screenshot%20from%202024-04-08%2011-52-36.png)
![AttendanceEdit](https://github.com/itachi982/hiva/blob/master/ScreenShots/Screenshot%20from%202024-04-08%2011-52-44.png)
![JobData](https://github.com/itachi982/hiva/blob/master/ScreenShots/Screenshot%20from%202024-04-08%2011-53-06.png)
![EditJobData](https://github.com/itachi982/hiva/blob/master/ScreenShots/Screenshot%20from%202024-04-08%2011-53-02.png)




