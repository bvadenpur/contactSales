import React from 'react'
import "./Header.css";
export default function Header() {
  return (
<div>
 <div className='navbar-wrap'>
  <nav className="navbar">
     <div className="navbar-bg"></div>
        <div className="nav">
                   <a href="" className="nav-logo">
                     <div className="logo">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style="max-width: 126px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 126 28" fill="none" xmlnsv="https://vecta.io/nano">
                        <path d="M93.86 7.669a5.84 5.84 0 0 0-4.187 1.78v-6a.35.35 0 0 0-.35-.346H87.19a.35.35 0 0 0-.35.346V19.67a.35.35 0 0 0 .35.346h2.133a.35.35 0 0 0 .35-.346v-1.118a5.81 5.81 0 0 0 4.187 1.779c3.327 0 6.017-2.835 6.017-6.331s-2.69-6.331-6.017-6.331zm-.493 10.126c-2.022 0-3.662-1.669-3.677-3.748v-.095c.032-2.079 1.656-3.748 3.677-3.748 2.038 0 3.677 1.701 3.677 3.795s-1.656 3.795-3.677 3.795zm14.359-10.126c-3.598 0-6.511 2.835-6.511 6.331s2.913 6.331 6.511 6.331 6.511-2.835 6.511-6.331-2.913-6.331-6.511-6.331zm-.016 10.126c-2.038 0-3.677-1.701-3.677-3.795s1.655-3.795 3.677-3.795 3.677 1.701 3.677 3.795-1.655 3.795-3.677 3.795zM67.912 7.984h-2.133a.35.35 0 0 0-.35.346v1.118a5.81 5.81 0 0 0-4.187-1.78c-3.327 0-6.017 2.835-6.017 6.331s2.69 6.331 6.017 6.331a5.84 5.84 0 0 0 4.187-1.78v1.118a.35.35 0 0 0 .35.346h2.133a.35.35 0 0 0 .35-.346V8.331a.35.35 0 0 0-.35-.346zm-6.177 9.811c-2.038 0-3.677-1.701-3.677-3.795s1.656-3.795 3.677-3.795 3.661 1.669 3.677 3.748v.095c-.016 2.079-1.656 3.748-3.677 3.748zM78.562 7.669a5.84 5.84 0 0 0-4.187 1.78V8.331a.35.35 0 0 0-.35-.346h-2.133a.35.35 0 0 0-.35.346v16.22a.35.35 0 0 0 .35.346h2.133a.35.35 0 0 0 .35-.346v-6a5.81 5.81 0 0 0 4.187 1.78c3.327 0 6.017-2.835 6.017-6.331s-2.69-6.331-6.017-6.331zm-.493 10.126c-2.022 0-3.662-1.669-3.677-3.748v-.095c.032-2.079 1.656-3.748 3.677-3.748 2.038 0 3.677 1.701 3.677 3.795s-1.64 3.795-3.677 3.795zM48.841 7.669a4.17 4.17 0 0 0-3.725 2.362c-.78-1.465-2.34-2.378-4.012-2.362a4.1 4.1 0 0 0-3.295 1.669V8.331a.35.35 0 0 0-.35-.346h-2.133a.35.35 0 0 0-.35.346V19.67a.35.35 0 0 0 .35.346h2.133a.35.35 0 0 0 .35-.346v-6.787c.08-1.512 1.146-2.724 2.452-2.724 1.353 0 2.483 1.118 2.483 2.583v6.929a.35.35 0 0 0 .35.346h2.149a.35.35 0 0 0 .35-.346l-.016-7.055c.191-1.386 1.194-2.457 2.42-2.457 1.353 0 2.483 1.118 2.483 2.583v6.929a.35.35 0 0 0 .35.346h2.149a.35.35 0 0 0 .35-.346l-.016-7.795c0-2.331-2.006-4.205-4.473-4.205zm76.873 11.858l-3.693-5.559 3.661-5.512c.096-.142.048-.346-.095-.441-.048-.032-.111-.047-.175-.047h-2.468c-.191 0-.366.094-.461.252l-2.149 3.575-2.15-3.559c-.095-.157-.27-.252-.461-.252h-2.468c-.175 0-.318.142-.318.315 0 .063.016.126.048.173l3.661 5.512-3.693 5.559c-.096.142-.048.346.095.441a.33.33 0 0 0 .175.047h2.468c.191 0 .366-.095.462-.252l2.196-3.622 2.197 3.622c.096.158.271.252.462.252h2.436c.175 0 .318-.142.318-.315 0-.063-.016-.126-.048-.189zM14.152 0C6.336 0 0 6.268 0 14s6.336 14 14.152 14 14.152-6.268 14.152-14S21.969 0 14.152 0zm6.718 17.433c-4.84 4.787-13.484 3.26-13.484 3.26s-1.56-8.535 3.295-13.339c2.69-2.661 7.148-2.551 9.966.22s2.913 7.197.223 9.858zm-5.094-9.228l-1.385 2.819-2.849 1.37 2.849 1.37 1.385 2.819 1.385-2.819 2.85-1.37-2.85-1.37-1.385-2.819z" fill="currentColor"></path>
                        <defs></defs>
                       </svg> */}
                     </div>
                   </a>
             <ul className="nav-links">
                  <li className="nav-item">
                   <div className="m-r-4">Products</div>
                    <div className="arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none" xmlnsv="https://vecta.io/nano">
                          <path d="M1 1L5 5L9 1" stroke="currentColor"></path>
                          <defs></defs>
                      </svg>
                     </div>
                  </li>
                <li className="nav-item">
                    <div className="m-r-4">Developers</div>
                   <div className="arrow">
                       <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none" xmlnsv="https://vecta.io/nano">
                           <path d="M1 1L5 5L9 1" stroke="currentColor"></path>
                           <defs></defs>
                      </svg>
                   </div>
               </li>
                <li className="nav-item">
                  <div className="m-r-4">Company</div>  
                  <div className="arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none" xmlnsv="https://vecta.io/nano">
                        <path d="M1 1L5 5L9 1" stroke="currentColor"></path>
                        <defs></defs>
                      </svg>
                  </div>
                </li>
                <li className="nav-item">
                   <div className="m-r-4">Solutions</div> 
                   <div className="arrow">
                     <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none" xmlnsv="https://vecta.io/nano">
                        <path d="M1 1L5 5L9 1" stroke="currentColor"></path>
                        <defs></defs>
                     </svg>
                   </div>
                </li>
                <li className="nav-item">
                    <a href="#">Customers</a>
                </li>
                <li className="nav-item">
                    <a href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a href="#">Blog</a>
                </li>
            </ul>
            <div className="sign-up">
                <a href="#" className="login">Log in</a>
                <a href="#" className="button">Sign up</a>
                <div className="menu-burger">
                    <div className="burger _1"></div>
                    <div className="burger _2"></div>
                </div>
            </div>
        </div>
   
  </nav>
  </div>
  
 </div>
  )
}