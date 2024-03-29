import { AdminNavbar } from "../components/AdminPanel/AdminNavbar";
import { Footer } from "../components/Footer";
import SearchBar from "../components/Searchbar";


export const DataRole =()=> {
    return (
        <div className="h-screen bg-slate-300">
            <AdminNavbar />
            <div className="text-4xl text-gray-500 ml-10 mt-5  pl-10">
                Data According To Role
            </div>
           
            <div>
                
                <button className="text-white border-gray-500 text-2xl text-center mt-4 ml-20 rounded-full bg-orange-300">
                    Add Role +
                </button>
             </div>
             <div>
            </div>
            <div className="text-justify-center pl-20 mt-10">
                <SearchBar/>
            </div>


             <div>
                <Footer/>
             </div>
             </div>
          
    );
}
