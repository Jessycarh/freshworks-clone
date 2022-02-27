import React from "react";
import './App.css'
import Logo from "./Image/logo.svg"
import Babe from "./Image/img.png"
import Image2 from "./Image/img2.png"
import Icon1 from "./Image/icon1.jpg"
import Icon2 from "./Image/icon2.jpg"
import Icon3 from "./Image/icon3.jpg" 
import Icon4 from "./Image/icon4.jpg"
import Icon5 from "./Image/icon5.jpg"
import Icon6 from "./Image/icon6.jpg"
import Icon7 from "./Image/icon7.jpg"
import Icon8 from "./Image/icon8.jpg"
import Icon9 from "./Image/icon9.jpg"
import Icon10 from "./Image/icon10.jpg"
import Icon11 from "./Image/icon11.jpg"
import Icon12 from "./Image/icon12.jpg"
import Icon13 from "./Image/icon13.jpg"
import Icon14 from "./Image/icon14.jpg"
import Icon15 from "./Image/icon15.jpg"
import Icon16 from "./Image/icon16.jpg"
import Icon17 from "./Image/icon17.jpg"
import Icon18 from "./Image/icon18.png"
import Icon19 from "./Image/icon19.jpg"
import Icon20 from "./Image/icon20.jpg"
import Icon21 from "./Image/icon21.png"
import Icon22 from "./Image/icon22.jpg"
import Image23 from "./Image/img23.jpg"
import Image24 from "./Image/img24..png"
import Image25 from "./Image/img25.jpg"
import Image26 from "./Image/img26.jpg"
import Facebook from "./Image/facebook.png"
import Twitter from "./Image/twitter.png"
import Youtube from "./Image/youtube.png"


function App (){

  return(
    <div className="Container">
      <div className="Header">
        <div className="HeaderWrapper">
          <div><img src={Logo} className="Logo" / ></div>
          <div className="Nav">
            
            <p>Products</p>
            <p>Plaform</p>
            <p>Company</p>
            <p>Resources</p>
            <p>Customers</p>
            <p>Support</p>

          </div>
        </div>
      </div>


      <div className="HeroHolder">
        <div className="HeroWrapper">
          <div className="Left">
         <h1 className="Heads">Delight made <br/>easy </h1>
         
          <p className="PMan">We make it fast and easy for your business to
            delight customers and employees
          </p>
          <div className="but">
          <button className='but1'>Free Trials</button>
          <button className='but2'>Contact Sales</button>
          </div>

          </div>
          <div>
            <img src={Babe} className="Baby"/>
          </div>
        </div>
      </div>
  

    
      <div className="Secondsection">
        <div className="Secondsectionwrapper">
          <div className="Section2left"> 
         
          <img src={Image2} className="Image2"/>
           
          </div> 
          <div className="Section2right"> 
           <h1>Try the business software used by over 50,000 companies across the globe to exceed customer and employee expectations. </h1>

           <div className="Sectn2but">
           
           <button className="Sectn2but1"> Customer Service</button>
           <button className="Sectn2but2"> IT Service Management</button>
           <button className="Sectn2but3"> HR Management</button>
           <button className="Sectn2but4"> Sales Automation</button>
           <button className="Sectn2but5"> Marketing Automation</button>
           <button className="Sectn2but6"> All products and Trials </button>
           </div>

           
         </div>
         </div>
         </div>

        <div className=" Thirdsection">
        <div className="Thirdsectiontop">
        <h1> Frictionless, simple, easy </h1>
        <p> Freshworks makes it fast and easy for businesses to delight their customers and employees.
          We take a fresh approach to how businesses discover, engage with, and realize value from software throughout their journey.</p> 
        </div>
        

        <div className=" Thirdsectionb">
        <div className=" Thirdsectionboxb"> 
        
        <div> <img src={Icon1} className="Icon1"/> </div>
        <h3>Get up and running with no barriers</h3>
        <p> Try or purchase our software directly from our website, and onboard in a matter of days, not months.</p>
        <div/>


        <div className=" Thirdsectionboxb1"> 
        <div> <img src={Icon2} className="Icon2"/> </div>
        <h3>Build and customize as you go</h3>
        <p> Extend and tailor experiences to meet your unique business needs, with low-code development and over 1,100 custom apps made available on our marketplace.</p>
        </div>
        </div>
        
        <div className=" Thirdsectionboxb">
        <div> <img src={Icon3} className="Icon3"/> </div>
        <h3>Choose your pricing plan</h3>
        <p> Our pricing plans are designed for modern business use cases and affordable for organizations of all sizes.</p>

        <div className=" Thirdsectionboxb1">
        <div><img src={Icon4} className="Icon4"/> </div>
        <h3>Create value, fast</h3>
        <p> Accelerate your team's productivity and efficiency with modern automation and collaboration tools, to get tangible results in no time.</p>
        </div>
        
        </div>
        </div>
        </div>

        <div className="Fourthsection">
        <div className="Fourthsectionwrapper">
        <div className="Fourthsectiontop">
        <h1>Trusted by 50K+ customers big and small</h1>
        <p>We are a leading provider of modern SaaS solutions that solve multiple, complex business problems to companies of all sizes. Businesses from more than 120 countries around the world use Freshworks' products to delight their customers and employees every day.</p>
        
        </div>
        <div className="Fourthspace"></div>
        <div className="Fourthsectionbottom">
        <div> <img src={Icon5} className="Icon5"/> </div>
        <div> <img src={Icon6} className="Icon6"/> </div>
        <div> <img src={Icon7} className="Icon7"/> </div>
        <div> <img src={Icon8} className="Icon8"/> </div>
        <div> <img src={Icon9} className="Icon9"/> </div>
        <div> <img src={Icon10} className="Icon10"/> </div>
        <div> <img src={Icon11} className="Icon11"/> </div>
        <div> <img src={Icon12} className="Icon12"/> </div>
        <div> <img src={Icon13} className="Icon13"/> </div>
        <div> <img src={Icon14} className="Icon14"/> </div>
        <div> <img src={Icon15} className="Icon15"/> </div>
        <div> <img src={Icon16} className="Icon16"/> </div>
        <div> <img src={Icon17} className="Icon17"/> </div>
        <div> <img src={Icon18} className="Icon18"/> </div>
        <div> <img src={Icon19} className="Icon19"/> </div>
        <div> <img src={Icon20} className="Icon20"/> </div>
        <div> <img src={Icon21} className="Icon21"/> </div>
        <div> <img src={Icon22} className="Icon22"/> </div>
        

        </div>
        </div>

        </div>

        <div className="Fifthsection">
        <div className="Fifthwrapper">
        <div className='Fifthheader'>
        <h2>“  W@terstons  ” </h2> 
        </div>

        <div>
          <p>“The Freshworks team was a great asset during implementation and continue to be a key partner for Waterstons as we look to further mature and improve our services to customers, tailored to their specific needs.”</p> 
          </div>

        <div className="Fifthheader1">
        <h3>Alex Bookless, Head of Managed Services, Waterstons </h3>
        </div>

        </div>
        </div>

        <div className='Sixthsection'>
        <div className="Sixthsectionwrapper">
        <div className='SixthTop'>
          <h2>We aspire to be of the most loved companies in the world</h2>
        </div>
        <div className='MainContainer'>


          <div className='HouseContainer'>
            <div className='ImageContainer'>
            <img src ={Image23} className="Images"/>
            </div>
            <h3>Culture</h3>
            <p className='Sixthparagraph'>
            A culture that supports high-quality work, joy and pride in that work, speed to execution, and intense customer focus.
            </p>


          </div>


          <div className='HouseContainer'>
            <div className='ImageContainer'>
            <img src ={Image24} className="Images 1"/>
            </div>
            <h3>Diversity</h3>
            <p className='Sixthparagraph'>
            Full-spectrum diversity, equity, and inclusion are key priorities for us.
            </p>
          </div>


          <div className='HouseContainer'>
            <div className='ImageContainer'>
            <img src ={Image25} className="Images"/>
            </div>
            <h3> Experience </h3>
             <p className='Sixthparagraph'>
             Focus on enhancing the team experience by strengthening our managers’ leadership capabilities.
             </p>
            
          </div>


          <div className='HouseContainer'>
            <div className='ImageContainer'>
            <img src ={Image26} className="Images"/>
            </div>
            <h3> Team</h3> 
            <p className='Sixthparagraph'>
               4,000 employees and growing in offices across India, US, Europe, and Australia
                 </p> 
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div >
          <button className='SixthButtom'>SEE LIFE AT FRESHWORKS</button>
        </div>
        
        </div>
      </div>


      <div className='Seventh'>
      
      <div className='SeventhTop'>
        <h3>Ready to get started?</h3>
      </div>
        
        <div className='SeventhHeader'>
          
        <p className='SeventhHeaderPara'>Join our community of 50,000+ companies of all sizes who use Freshworks’ modern  SaaS products to make it fast and easy to <br/>delight their customers and employees.</p>
        </div>
        <div className='SeventhHeader1'>
          <button className='SeventhButton'>CONTACT SALES</button>
        </div>
        
       
        </div>


        <div className='LastPage'>
          <div  className='FirstColumn'>
          <div><img src={Logo} className="Logo"/> </div>
          <a href="" className='Link'>Freshdesk</a>
          <a href="" className='Link'>Freshsales</a>
          <a href="" className='Link'>Freshmarketer</a>
          <a href="" className='Link'>Freshservice</a>
          <a href="" className='Link'>Freshteam</a>
          </div>


          <div className='SecondColumn'>
            <p className='Company'>Company</p>
            <a href="" className='Link'>About</a>
            <a href="" className='Link'>Leadership</a>
            <a href="" className='Link'>Board of Directors</a>
            <a href="" className='Link'>Investor</a>
             <a href="" className='Link'>Customer</a>
            <a href="" className='Link'>Affiliates</a>
            <a href="" className='Link'>partners</a>
            <a href="" className='Link'>Philanthropy</a>
            <a href="" className='Link'>Careers</a>
            <a href="" className='Link'>News room</a>
             <a href="" className='Link'>Customers</a>
            <a href="" className='Link'>GDPR</a>
            <a href="" className='Link'>Tax FAQs</a>
            <a href="" className='Link'>Contact us</a>
          </div>


          <div className='ThirdColumn'>
            <div>
                 CONNECT WITH US
            </div>
            <br/>
            <div className='ContainerLastLogo'>
            <img src={Facebook} className="LastLogo"/> 
            <img src={Twitter} className="LastLogo"/>
            <img src={Youtube} className="LastLogo"/>
            </div>


          </div>
          
        </div>


        <div className="Footer">
        <div className="FooterContent">
        <div className="BottomNav">
          <p>Terms of service</p>
          <p>Privacy Notice</p>
          <p>Takedown Policy</p>
          <p>GDPR</p>
          <p>Security</p>
          <p>Resources</p>
          <p>CSR policy</p>
          <p>Tax FAQs</p>
          <p>Unsubscribe</p>
        </div>

        <div className='FooterButtom'>
          Copyright&copy; Jessica Eriama, All right reserved.
        </div>

        </div>
        
        </div>


      <div className='Fixed'>
          <button className='FixedButton'>CONTACT SALES</button>
        </div>

        </div>
        
 
  )
}

export default App










