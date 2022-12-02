import logo from "./saykot.jpg"
import { BsFillTelephoneFill } from "react-icons/bs"
import { IoIosMail, IoMdMail } from "react-icons/io"
import { ImLocation } from "react-icons/im"
import phone from "./photos/phone-call.png"
import email from "./photos/gmail.png"
import location from "./photos/google-maps.png"
import htmlicon from "./photos/html-5.png"
import cssicon from "./photos/css-3.png"
import javascripticon from "./photos/js.png"
import tailwindcssicon from "./photos/Tailwind_CSS.png"
import reacticon from "./photos/react.png"
import nextjsicon from "./photos/next-js.png"
import typescripticon from "./photos/typescript.png"
import nodejsicon from "./photos/node-js.png"
import expressjsicon from "./photos/express.png"
import mongodbicon from "./photos/mongodb.png"
import linuxicon from "./photos/linux.png"
import awsec2icon from "./photos/aws-ec2.png"
import awss3icon from "./photos/aws-s3.png"
import dockericon from "./photos/docker.png"
import kubernetesicon from "./photos/Kubernetes.png"
import jenkinsicon from "./photos/jenkins.png"
import ansibleicon from "./photos/ansible.png"
import nagiosicon from "./photos/nagios.png"
import { useState } from "react"


function App() {
  const [wordData, setWorkData] = useState([{
    soureCode: "https://github.com/Saykot1997/dataAutomation_server.git",
    link: "http://react.dataautomation.gic.ltd",
    name: "Data Automation - Full Stack Developer",
    duration: "April 2022 - July 2022",
    responsibilities: [
      "Responsive ui created using react js",
      "Create sucure API using node js, express js",
      "Deploy app in Cloud platform and maintain"
    ]
  },
  {
    soureCode: "https://github.com/Saykot1997/airticket-static.git",
    link: "https://airticket.gic.ltd/",
    name: "Air Ticket - Frontend Developer",
    duration: "October 2022 - November 2022",
    responsibilities: [
      "Created responsive ui using react js",
      "Connect to api for flight data",
      "Deploy app in Cloud platform and maintain"
    ]
  },
  {
    soureCode: "https://github.com/Saykot1997/propertysell-public.git",
    link: "https://alfakhama.xyz/",
    name: "Property Sell - Backend Developer",
    duration: "Aujust 2022 - September 2022",
    responsibilities: [
      "Create Api using node js, express js.",
      "Deploy app in Cloud platform and maintain"
    ]
  }
  ])


  const [aboutme, setAboutme] = useState(`As a Full Stack Web Developer. I have clear knowledge of software development life cycle and have working experience on both frontend and backend also some devops tools knowledge like Docker, Kubernetes, Jenkins, Ansible, AWS EC2 and Linux.I have skill to implement CI/CD pipeline. Primarily, I work on Javasctipt but have basic knowledge on several programing languages like Python and Php.`)

  const [portfolioLink, setPortfolioLink] = useState("https://neumorphismportfolio.vercel.app")
  const [editMode, setEditmod] = useState(false)
  const toggleEditMode = () => {
    setEditmod(!editMode)
  }
  const print = () => {
    window.print()
  }

  const changeValue = (index, value, option, resIndex) => {

    const oldData = [...wordData]

    if (option === "res") {
      oldData[index].responsibilities[resIndex] = value
      setWorkData(oldData)
    } else {
      oldData[index][option] = value
      setWorkData(oldData)
    }
  }



  return (
    // <div className=" w-full bg-gray-">
    <div className=" w-full h-full px-60 py-10 print:p-0 font-Roboto bg-gray-300 print:bg-white">
      <div className=" absolute top-5 right-5 print:hidden flex items-center gap-3">
        <button onClick={print} className=" bg-blue-500 py-2 px-2 rounded-md text-white ">Print</button>
        <button onClick={toggleEditMode} className=" bg-purple-500 py-2 px-2 rounded-md text-white">{editMode ? "Save" : "Edit"}</button>
      </div>
      <div className=" w-full h-full grid grid-cols-5">
        <div className=" col-span-2 h-full w-full bg-gray-100">
          {/* desigle area */}
          <div className=" w-full h-60 flex justify-center relative">
            {/* big shadow */}
            <div className="first-clippath bg-blue-300 h-full w-full absolute top-0 left-0">
            </div>
            {/* mid shadow */}
            <div className="secound-clippath w-full h-full bg-blue-500 top-0 left-0 absolute z-[2]">
            </div>
            {/* small shadow */}
            <div className="third-clippath w-full h-full bg-blue-600 top-0 left-0 absolute z-[3]">
            </div>
            {/* photo area */}
            <div className="w-48 h-48 mt-6 overflow-hidden rounded-full border-[10px] border-white z-[5] bg-white shadow">
              <img src={logo} alt="" className="object-cover" />
            </div>
          </div>

          <div className=" p-7 mt-1">

            {/* Contact section */}
            <p className=" text-gray-700 text-lg font-medium ">Contact</p>
            <div className=" mt-3 flex items-center gap-2">
              <img src={phone} alt="" className=" w-[18px] " />
              {/* <BsFillTelephoneFill className=" text-gray-800 " /> */}
              <span className="  text-blue-600">+8801838652572</span>
            </div>
            <div className=" mt-2 flex items-center gap-2">
              <img src={email} alt="" className=" w-3 " />
              {/* <IoMdMail className=" text-gray-800 " /> */}
              <span className="  text-blue-600">saykothossain14@gmail.com</span>
            </div>
            <div className=" mt-2 flex items-center gap-[6px]">
              <img src={location} alt="" className=" w-[14px] " />
              {/* <ImLocation className=" text-gray-800 " /> */}
              <span className="  text-blue-600">Bhulta, Rupgonj, Narayangonj</span>
            </div>
            {/* education */}
            <div className=" mt-5">
              <p className=" text-gray-700 font-medium text-lg">Education</p>
              <div className=" mt-3">
                <p className=" text-gray-700">2018 - 2021</p>
                <p className=" text-blue-600 font-medium text-lg">BA in English</p>
                <p className="  text-gray-700">Victoria Universuty Of Bangladesh</p>
              </div>
              <span className=" w-full h-[1px] inline-block bg-gray-300 mt-3 mb-1"></span>
              <div className="">
                <p className=" text-gray-700">2015 - 2017</p>
                <p className=" text-blue-600 font-medium text-lg">Higher School Certificate</p>
                <p className="  text-gray-700">Bhulta High School and Collage</p>
              </div>
            </div>
            {/* skills */}
            <div className=" mt-5">
              <p className=" text-gray-700 font-medium text-lg">Skills</p>
              <div className=" grid grid-cols-2 gap-[10px] mt-2">
                <div className=" w-full flex items-center gap-2">
                  <img src={htmlicon} alt="" className="h-4 w-4" />
                  <span className=" text-gray-600 font-medium ">HTML</span>
                </div>
                <div className=" w-full flex items-center gap-2">
                  <img src={cssicon} alt="" className="h-4 w-4" />
                  <span className=" text-gray-600 font-medium ">CSS</span>
                </div>
                <div className=" w-full flex items-center gap-2">
                  <img src={tailwindcssicon} alt="" className=" w-[14px]" />
                  <span className=" text-gray-600 font-medium ">Tailwind CSS</span>
                </div>
                <div className=" w-full flex items-center gap-2">
                  <img src={javascripticon} alt="" className="h-4 w-4" />
                  <span className=" text-gray-600 font-medium ">Javascript</span>
                </div>
                <div className=" w-full flex items-center gap-2">
                  <img src={reacticon} alt="" className="h-4 w-4" />
                  <span className=" text-gray-600 font-medium ">React js</span>
                </div>
                <div className=" w-full flex items-center gap-2">
                  <img src={nextjsicon} alt="" className="h-4 w-4" />
                  <span className=" text-gray-600 font-medium ">Next js</span>
                </div>
                <div className=" w-full flex items-center gap-2">
                  <img src={typescripticon} alt="" className="h-[14px] w-[14px]" />
                  <span className=" text-gray-600 font-medium ">Typescript</span>
                </div>
                <div className=" w-full flex items-center gap-2">
                  <img src={nodejsicon} alt="" className="h-4 w-4" />
                  <span className=" text-gray-600 font-medium ">Node js</span>
                </div>
                <div className=" w-full flex items-center gap-2">
                  <img src={expressjsicon} alt="" className=" h-2 w-[14px]" />
                  <span className=" text-gray-600 font-medium ">Express js</span>
                </div>
                <div className=" w-full flex items-center gap-2">
                  <img src={mongodbicon} alt="" className=" h-5 w-[14px]" />
                  <span className=" text-gray-600 font-medium ">Mongodb</span>
                </div>
                <div className=" w-full flex items-center gap-2">
                  <img src={linuxicon} alt="" className="h-4 w-4" />
                  <span className=" text-gray-600 font-medium ">Linux</span>
                </div>
                <div className=" w-full flex items-center gap-2">
                  <img src={awsec2icon} alt="" className=" w-[14px]" />
                  <span className=" text-gray-600 font-medium ">AWS EC2</span>
                </div>
                <div className=" w-full flex items-center gap-2">
                  <img src={awss3icon} alt="" className="h-4 w-4" />
                  <span className=" text-gray-600 font-medium ">AWS S3</span>
                </div>
                <div className=" w-full flex items-center gap-2">
                  <img src={dockericon} alt="" className=" w-[14px]" />
                  <span className=" text-gray-600 font-medium ">Docker</span>
                </div>
                <div className=" w-full flex items-center gap-2">
                  <img src={kubernetesicon} alt="" className="h-4 w-4" />
                  <span className=" text-gray-600 font-medium ">Kubernetes</span>
                </div>
                <div className=" w-full flex items-center gap-2">
                  <img src={jenkinsicon} alt="" className="h-4" />
                  <span className=" text-gray-600 font-medium ">Jenkins</span>
                </div>
                <div className=" w-full flex items-center gap-2">
                  <img src={ansibleicon} alt="" className="w-[15px]" />
                  <span className=" text-gray-600 font-medium ">Ansible</span>
                </div>
                <div className=" w-full flex items-center gap-2">
                  <img src={nagiosicon} alt="" className="w-[14px]" />
                  <span className=" text-gray-600 font-medium ">Nagios</span>
                </div>

              </div>
            </div>
            {/* Language */}
            <div className=" mt-5">
              <p className=" text-gray-700 font-medium text-lg">Language</p>
              {/* <p className=" text-gray-700 text-[10px] mt-2">2018 - 2021</p> */}
              {/* <p className=" text-blue-600 ">BA in English</p> */}
              <p className="  mt-2 text-gray-700">Bangla Native</p>
              <p className=" text-gray-700">English Communicational</p>
            </div>

          </div>
        </div>
        <div className=" col-span-3 p-7 shadow print:shadow-none bg-white">
          <div className=" w-full">
            <p className=" text-4xl font-semibold">Shohel <span className=" text-blue-600">Mia</span></p>
            <p className=" text-gray-600 text-lg font-medium my-[2px]">Full Stack Web Developer</p>
            {
              editMode ?
                <div className="">
                  <span className=" w-full">Portfolio link:</span>
                  <input type="text" className=" p-2 border w-full border-blue-300 rounded focus:outline-none" value={portfolioLink} onChange={(e) => setPortfolioLink(e.target.value)} />
                </div>
                :
                <p className=" text-gray-500">Portfolio link: {portfolioLink}</p>
            }
          </div>
          {/* about */}
          <div className=" mt-5">
            <p className=" text-xl font-medium text-gray-700">About</p>
            {/* <p className=" mt-1 text-justify print:leading-5 text-sm text-gray-600">{aboutme}</p> */}
            <p className=" mt-1 text-justify print:leading-5 text-sm text-gray-600">As a <span className=" font-medium">Full Stack Web Developer</span>. I have clear knowledge of <span className=" font-medium">software development life cycle</span> and have working experience on both <span className=" font-medium">frontend</span> and <span className=" font-medium">backend</span> also some <span className=" font-medium">devops</span> tools knowledge like <span className=" font-medium">Docker, Kubernetes, Jenkins, Ansible, AWS EC2</span> and <span className=" font-medium">Linux</span>.I have skill to implement <span className=" font-medium">CI/CD pipeline</span>. Primarily, I work on <span className=" font-medium">Javasctipt</span> but have basic knowledge on several programing languages like <span className=" font-medium">Python</span> and <span className=" font-medium">Php</span>.</p>
          </div>
          {/* working exprerience */}
          <div className=" mt-5">
            <p className=" text-lg font-medium text-gray-700">Working Experience</p>
            <p className=" text-blue-600  mt-1">Purple Algorithams Ltd. - Junior Web Developer</p>
            <p className=" text-gray-600">April 2022 - Present</p>
            <ul className=" mt-1 text-gray-500 text-sm list-disc pl-10">
              <li className=" my-1">Develop clean and responsive frontend UI</li>
              <li className=" my-1">Develop sucure API using node js, express js</li>
              <li className=" my-1">Deploy app in Cloud platform and maintain</li>
            </ul>
          </div>
          {/* Projects */}
          <div className=" mt-5">
            <p className=" text-lg font-medium text-gray-700">Projects</p>
            {
              wordData.map((work, i) => {
                return (
                  <div key={i}>
                    {
                      editMode ?
                        <>
                          <input type="text" className=" w-full py-1 px-2 border border-blue-500 rounded focus:outline-none" value={work.name} onChange={(e) => { changeValue(i, e.target.value, "name") }} />
                          <input type="text" className=" w-full py-1 px-2 border border-blue-500 rounded focus:outline-none" value={work.duration} onChange={(e) => { changeValue(i, e.target.value, "duration") }} />
                          <ul className=" mt-1 text-gray-500 text-sm list-disc pl-10">
                            {
                              work.responsibilities.map((r, ind) => {
                                return (

                                  <input key={ind} type="text" className=" w-full py-1 px-2 border border-blue-500 rounded focus:outline-none" value={r} onChange={(e) => { changeValue(i, e.target.value, "res", ind) }} />
                                )
                              })
                            }
                          </ul>
                          <input type="text" className=" w-full py-1 px-2 border border-blue-500 rounded focus:outline-none" value={work.link} onChange={(e) => { changeValue(i, e.target.value, "link") }} />
                          <input type="text" className=" w-full py-1 px-2 border border-blue-500 rounded focus:outline-none" value={work.soureCode} onChange={(e) => { changeValue(i, e.target.value, "soureCode") }} />
                          {
                            i < wordData.length - 1 &&
                            <span className=" w-full h-[1px] mt-3 mb-1 inline-block bg-gray-300"></span>
                          }
                        </>
                        :
                        <>
                          <p className=" text-blue-600  mt-1">{work.name}</p>
                          <p className=" text-gray-600">{work.duration}</p>
                          <ul className=" mt-1 text-gray-500 text-sm list-disc pl-10">
                            {
                              work.responsibilities.map((r, i) => {
                                return (
                                  <li className=" my-1" key={i}>{r}</li>
                                )
                              })
                            }
                          </ul>
                          <p className=" mt-2 text-gray-500 text-sm">Link : {work.link}</p>
                          <p className=" mt-1 text-gray-500 text-sm">Code : {work.soureCode}</p>
                          {
                            i < wordData.length - 1 &&
                            <span className=" w-full h-[1px] mt-3 mb-1 inline-block bg-gray-300"></span>
                          }
                        </>
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default App;
