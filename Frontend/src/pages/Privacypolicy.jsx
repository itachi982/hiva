import React from "react";
import { UserNavbar } from "../components/UserPanel/Usernavbar";
import { Footer } from "../components/Footer";

export const PrivacyPolicyContent = () => {
    return (    
        <div>
            <div style={{ backgroundColor: "#52616b" }}>
                <UserNavbar />
                <div style={{ color: "#fff", textAlign: "center", marginTop: "40px", fontSize: "3rem" }}>
                    Privacy Policy
                </div>
            
                <div style={{ margin: "0 100px", color: "#ff", marginTop: "20px" }}>
                    <p>
                        Last updated October 04, 2021
                        Thank you for choosing to be part of our community at Budibase (“company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at privacy@budibase.com.
                        When you visit our website, use our cloud platform and services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our Sites and our services.
                        This privacy policy applies to all information collected through our website and cloud platform and/or any related services, sales, marketing, or events (we refer to them collectively in this privacy policy as the “Sites”). Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us.
                    </p>

                    <p>
                        What personal data we use
                        Budibase collects data to operate effectively and provide our Services to you.

                        Data provided by You directly: You provide some of this data directly, like when you create a Budibase account in our cloud platform, subscribe to blog updates, administer your organization’s licensing account, register for a Budibase event.
                        Usage data collected automatically: We also get some information by recording how You interact with Our products by, for example, using technologies like cookies and receiving usage data from the Budibase platform used by You.
                        Additional data from third parties: We also obtain data from third parties to whom You’ve provided your information and you’ve given Your consent to be transferred to Us. We protect data obtained from third parties according to the practices described in this statement,
                        plus any additional restrictions imposed by the source of the data. These third-party sources may include: data brokers from which we purchase data to supplement the data we collect; service providers that help us determine a location based on your IP address in order 
                        to customize certain products to your location; and Budibase Partners with which we engage in joint marketing and sales activities.
                        When you are asked to provide personal data, you may decline. However, if you choose not to provide data that is necessary for us to provide Services, you may not be able to use those Services.

                        The data We collect depends on the consent You’ve provided and on the context of your interactions with Budibase, the choices you make, including your privacy settings, and the Services you use. The data we collect can include the following:

                        Name and contact data. We collect your first and last name, email address, phone number, company and position, and other similar contact data.
                        Credentials. We collect passwords, password hints, and similar security information used for authentication and account access to our Services.
                        Usage data. We collect data about your device and how you and your device interact with Budibase and our Services.
                        Location data. For products with location-enhanced features, we collect data about your location, such as a location derived from your IP address or data that indicates where you are located with less precision, such as at a city or postal code level.
                        We also collect information You provide to Us when You contact Us about the Services and the content of messages You send to Us, such as requested feedback and product reviews You write, or questions and information You provide for customer support. When you contact Us, such as for customer support, phone conversations, or chat sessions with Our representatives may be monitored and recorded.

                        Budibase may also receive information about You from other sources, including third parties from whom We have purchased data, and combine this information with information We already have about You. This helps us to update, expand, and analyze our records, identify new customers, and create more tailored content to provide Services that may be of interest to You.
                    </p>

                    <p>
                        Why we collect your personal data
                        Processing Your order: We use the relevant personal information described above to process and deliver Your order, and to notify You of the status of your order.
                        To provide customer support: If You contact our customer service (or vice versa), We will use personal information such as Your order information and contact history to process Your request and provide You with the best service possible. We will process Your personal information in this way if it is necessary for the performance of a contract with Us or if it is required for Us to comply with any legal obligations. If it is not necessary to process Your personal data for either of these reasons, We will process it as it is necessary for the purposes of our legitimate interests in ensuring We can provide the best service possible.
                        To provide information of our events via our APPs.
                        Marketing: When you sign up to receive Budibase emails, create a Budibase single sign-on, order or provide feedback on a Service, register for a Budibase event or use our website, we will use your personal information to create a profile based on the information we hold about you. This is necessary for the purposes of our legitimate interests in ensuring we have accurate information about you in one place.
                        Conducting analytics: We will use the personal information we hold about you (as well as pseudonymized or anonymized information generated from your personal information) to carry out analysis and research. We carry out all such analysis and research on the basis that it is necessary for the purposes of our legitimate interests in understanding our customers and ensuring that our products meet the needs of our customers.
                        Analyzing our business: We will use your personal information (including by anonymizing and aggregating it with other customers’ personal information) for sales, supply chain, and financial analysis purposes, to determine how We are performing, and where improvements can be made and where necessary to report back to our parent or affiliate group companies. This is necessary for the purposes of our legitimate interests in understanding how our business is performing, and considering how to improve our performance.
                        To manage your registration in a Budibase event: we will use your personal information to manage your registration in a Budibase event (virtual or live). The personal information you provide when registering in an event may also be used for Budibase’ marketing purposes.
                    </p>

                    <p>
                        Your Rights
                        Other rights you have include the rights to:

                        Ask for a copy of your Personal Information
                        Ask us to correct your Personal Information that is inaccurate, incomplete, or outdated
                        Ask us to transfer your Personal Information to other organizations.
                        Ask us to erase certain categories or types of information
                        If you choose to remove your Personal Information, you acknowledge that we may retain archived copies of your Personal Information in order to satisfy our legal obligations, or where we reasonably believe that we have a legitimate reason to do so.
                        Ask us to restrict certain processing
                        You have the right to object to processing of Personal Information. Where we have asked for your consent to process information, you have the right to withdraw this consent at any time.
                    </p>  
                </div>

                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    For any enquiries, support, or complaints, contact us at:
                    <div className="ml-20">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                            <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                        </svg>
                        <span>@shbang.com</span>
                    </div>
                </div>          
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}
