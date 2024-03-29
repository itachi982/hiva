
import { BottomWarning, Heading, SubHeading } from "../components/SigninHelper"
import pic from '../assets/vect.png'
import { UserNavbar } from "../components/UserPanel/Usernavbar"
import { Footer } from "../components/Footer"
import { useState } from "react";
import { ReportsDrop } from "../components/Dropdown/Reportsdrop";

export const LicensingContent = () => {
    const [ReportsMenuOpen,setReportsMenuOpen]=useState(false);
   
    const closeAllMenus=()=>{
      setReportsMenuOpen(false);
    
    }
    return (    
    <div>
            <div className=" bg-slate-300">
                <UserNavbar />
                    <div className="text-gray-500 flex justify-center mt-10 text-center font-medium text-5xl">
                         Support
                    </div>
            
                    <div className="border border-gray-300 rounded-lg p-4 mt-8">
    <div className="mb-4">
        <p className="font-bold">Community support</p>
        <p>
            As an open source platform, Budibase offers community support to everyone. This includes responding to GitHub Issues, answering GitHub Discussions, and chatting across a number of public channels on our Discord Server.
        </p>
        <p>
            When interacting with community support you may receive help from either our Customer Success team, or another supportive community member. While this support is not obligated, the Budibase team endeavors to answer what we can, and all community contributions are appreciated!
        </p>
        <p>
            The GitHub repository is a good place to look for FAQs.
        </p>
    </div>

    <div className="mb-4">
        <p className="font-bold">Premium support</p>
        <p>
            In addition to having all of the community resources available, users on the Premium plan can contact support directly via email. This provides a private communication channel for support.
        </p>
        <p className="font-bold">What is supported?</p>
        <ul className="list-disc ml-8">
            <li>✓ Answering questions about building Budibase apps</li>
            <li>✓ Investigating issues relating to the Budibase platform</li>
            <li>✓ Guidance on building custom plugins</li>
            <li>✓ Premium-tier licensed instances</li>
            <li>✓ The most recent version of Budibase</li>
        </ul>
        <p className="font-bold">Not supported</p>
        <ul className="list-disc ml-8">
            <li>- Infrastructure support for self-hosted users</li>
            <li>- Maintaining custom plugins</li>
            <li>- Debugging code, such as JavaScript and SQL, etc</li>
            <li>- Community / open-source licensed instances</li>
        </ul>
    </div>

    <div className="mb-4">
        <p className="font-bold">Enterprise support</p>
        <p>
            The Enterprise tier provides your business with prompt priority support. Furthermore, an Account Manager will be assigned to assist with onboarding.
        </p>
        <p>
            You can view the additional features included in Enterprise on the pricing page.
        </p>
        <p className="font-bold">What is supported?</p>
        <ul className="list-disc ml-8">
            <li>✓ Answering questions about building Budibase apps</li>
            <li>✓ Investigating issues relating to the Budibase platform</li>
            <li>✓ Guidance on building custom plugins</li>
            <li>✓ Onboarding</li>
            <li>✓ Infrastructure support for self-hosted users</li>
            <li>✓ Enterprise licensed instances</li>
            <li>✓ The last 5 minor versions of Budibase</li>
        </ul>
        <p className="font-bold">Not supported</p>
        <ul className="list-disc ml-8">
            <li>- Maintaining custom plugins</li>
            <li>- Debugging code, such as JavaScript and SQL, etc</li>
            <li>- Community/open-source licensed instances</li>
        </ul>
    </div>

    <div className="mb-4">
        <p className="font-bold">SLA</p>
        <ul className="list-disc ml-8">
            <li>✓ Response within two business days</li>
        </ul>
    </div>
</div>


                    
                   
                
            </div>
            <div>
               <Footer/>
            </div>
     </div>
                 
   )
}




















