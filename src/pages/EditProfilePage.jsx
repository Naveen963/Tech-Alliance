import React ,{useState}from 'react'
import { useGetUser } from '../authentication/useGetUser';
import { useGetUserDetails } from '../authentication/useGetUserDetail';
import "../displayprofile.css"
import {BiSolidEdit} from 'react-icons/bi'
import { BsLinkedin } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
import {CgCloseR} from 'react-icons/cg'
import {DiHtml5} from 'react-icons/di';
import {FaCss3Alt} from 'react-icons/fa';
import {BiLogoJavascript} from 'react-icons/bi';
import TextField from '@mui/material/TextField';
  export default function EditProfilePage(){
    const { user } = useGetUser();
    const { userData } = useGetUserDetails(user?.id);
    const[state,setState] = useState(true);
    const[links,setLinks]=useState(true);
    const[Name,setName] = useState(userData?.[0].name);
    const[Email,setEmail] =useState(userData?.[0].email);
    const[Year,setYear] = useState(userData?.[0].year);
    const [selectedButton, setSelectedButton] = useState('enrolled');
    const handleButtonToggle = (buttonType) => {

setSelectedButton(buttonType);


};
if(links===true){
    return (
      <>
      <div className='main-div'>
      <div className='display-profile'>
            <div className='profile'>
              <div className ="image-container">
                <img className="profile-image" src="profile-image.png" alt="profile" />
              </div>
              <form className="form-cont" action="">
              <div>
                <BiSolidEdit onClick={()=>setState(false)} className='edit-symbol' size={20}/>
                </div>
              <label htmlFor="username">Name: <input className='input-box' type="text" id="username" value={Name} disabled={state} onChange={(e)=>setName(e.target.value)} /></label>

              <label htmlFor="regNo">RegNo:<input className='input-box'  type="text" id="regNo"  value={userData?.[0].reg_no} disabled={true}/></label>

              <label htmlFor="email">E-mail:<input className='input-box'  type="email" id="email" onChange={(e)=>setEmail(e.target.value)} value={Email} disabled={state}/></label>

              <label htmlFor="year">Year:
                  <select  onChange={(e)=>setYear(e.target.value)} value={Year} disabled={state} name="Year" id="yearr" >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  </select>
              <label htmlFor='sec'>Section:
              <select    name="sec" id="sec" disabled={true} value={userData?.[0].section} >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="D">E</option>
                    <option value="D">F</option>
                    </select>
              </label>
              </label> 
                  

                <label htmlFor="branch">Branch:<input className='input-box' disabled={true} type="text" value={userData?.[0].branch} id="branch" /> 
                </label>
                <div className='save'><button className='save-button' onClick={()=>setState(true)} disabled={state}>Save</button></div>
                </form>
            </div>
            <div className='sub-div'>
              <div className='accounts'>
              <h1 className='h1-class'>Social Links</h1>
                <div className="edit">
                <BiSolidEdit onClick={()=>setLinks(false)} size={20}/>
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
              <div className='inner-div'>
                        <div>
                        <button className="btnenrolled " onClick={() => handleButtonToggle('enrolled')}>Enrolled</button>
                        <button className="btncompleted" onClick={() => handleButtonToggle('completed')}>Completed</button>
                        </div>
                        {selectedButton === 'enrolled' && (
                        <div>
                        <div>
                        <button className='btnjs'>Javascript</button>

                        </div>
                        <div>
                        <button className='btnreact'>Reactjs</button>
                        </div>

                        </div>
                        )}

                        {selectedButton === 'completed' && (
                        <div>
                        <button className='btnhtml'>HTML&CSS</button>
                        </div>
                        )}

                        </div>
            </div>
              </div>
        </div>
      </div>
      </>
      );}
    else{
      
      return(
        <>
     <div className='edit-links-out'>
      <div className='edit-links'>
        <div className='edit-head'>
          <h3 className='social-head'>Social-links</h3>
          <CgCloseR  size={22} onClick={()=>setLinks(true)} className='links-close'/>
        </div>
        <hr/>
        <div className='mt-5'>
          <div className="editlinkedin"><BsLinkedin color='#0A66C2' size={40}  className='logoedit' /> <TextField id="filled-basic"  label="Linkedin" variant="filled"  
          InputLabelProps={{style: {fontSize: 15}}} inputProps={{style: {fontSize: 15}}}/>
          </div>
          <div className="editgithub"><AiOutlineGithub size={40} className='logoedit' /> <TextField id="filled-basic" label="Github" variant="filled" 
          InputLabelProps={{style: {fontSize: 15}}}  inputProps={{style: {fontSize: 15}}}/>
          </div>
          <div className="editinsta"><AiOutlineInstagram color='#E4405F' size={40}  className='logoedit'/> <TextField id="filled-basic" label="Instagram" variant="filled"
           InputLabelProps={{style: {fontSize: 15}}} inputProps={{style: {fontSize: 15}}}/>
          </div>
          <div className="editleetcode"><SiLeetcode size={40} className='logoedit'/> <TextField id="filled-basic" label="Leetcode" variant="filled"
           InputLabelProps={{style: {fontSize: 15}}} inputProps={{style: {fontSize: 15}}}/>
          </div>
        </div>
      <div className="links-save">
        <button className='links-cancelbtn' onClick={()=>setLinks(true)}>Cancel</button>
        <button className='links-savebtn' onClick={()=>setLinks(true)}>Update</button>
      </div>
      </div>
      </div>
      </>
    );
      }
  }
