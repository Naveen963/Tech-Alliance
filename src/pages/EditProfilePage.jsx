import React from 'react'
import { useGetUser } from '../authentication/useGetUser';
import { useGetUserDetails } from '../authentication/useGetUserDetail';
import "../displayprofile.css"
import {BiSolidEdit} from 'react-icons/bi'
import { BsLinkedin } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
import {DiHtml5} from 'react-icons/di';
import {FaCss3Alt} from 'react-icons/fa';
import {BiLogoJavascript} from 'react-icons/bi';

  export default function EditProfilePage(){
    const { user } = useGetUser();
    const { userData } = useGetUserDetails(user?.id);
    console.log(userData)
    return (
      <>
      <div className='main-div'>
      <div className='display-profile'>
            <div className='profile'>
              <div className ="image-container">
                <img className="profile-image" src="profile-image.png" alt="profile" />
              </div>
              <form className="form-cont" action="">
              <div><BiSolidEdit className='edit-symbol' size={20}/></div>
              <label htmlFor="username">Name: <input className='input-box'  type="text" id="username" value={userData?.[0].name} readOnly/></label>

              <label htmlFor="regNo">RegNo:<input className='input-box'  type="text" id="regNo"  value={userData?.[0].reg_no} readOnly/></label>

              <label htmlFor="email">E-mail:<input className='input-box'  type="email" id="email" value={userData?.[0].email} readOnly/></label>

              <label htmlFor="year">Year:
                  <select  value={userData?.[0].year} name="Year" id="year" readOnly>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  </select>
              <label htmlFor='sec'>Section:
              <select    name="sec" id="sec" value={userData?.[0].section} readOnly>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="D">E</option>
                    <option value="D">F</option>
                    </select>
              </label>
              </label>
                  

                <label htmlFor="branch">Branch:<input className='input-box'  type="text" value={userData?.[0].branch} id="branch" readOnly/> 
                </label>
                </form>
            </div>
            <div className='sub-div'>
              <div className='accounts'>
              <h1 className='h1-class'>Social Links</h1>
                <div className="edit">
                <BiSolidEdit size={20}/>
                </div>
                <hr />
                <div className='icons'>
                <div className='sociallinks'>
                <BsLinkedin color='#0A66C2' size={40} />
                </div>
                <div className='sociallinks'>

                <AiOutlineGithub size={40} />
                </div>
                <div className='sociallinks'>

                <AiOutlineInstagram color='#E4405F' size={40} />
                </div>
                <div className='sociallinks'>

                <SiLeetcode size={40}/>
                </div>
                </div>
            </div>

              <div className="courses">
            
              <div className='main1'>
              <div className='head-div'>
              <h2 className='enheading'>Enrolled Course(s)</h2>
              <div className='edit3'>
              <BiSolidEdit size={25}/>
              </div>
              </div>
              <hr />
              <div className='list'>
              <ul>
              <li className='item'>
              <div className='pt-2'>
              {/* <DiHtml5 size={25}/> */}
              </div>
              <div className='pt-2'>
              <FaCss3Alt size={25}/></div>
              <div className='pl-2'><button className='btnhtm'>HTML&CSS</button></div>
              </li>
              <li className='item'>
              <div className='pt-2 pl-3'>
              <BiLogoJavascript size={25}/>
              </div>
              <div className='pl-7'><button className='btnjs'>JavaScript</button></div>
              </li>
              </ul>
              </div>
              </div>
            </div>
              </div>
        </div>
      </div>
      </>
    );
  }
