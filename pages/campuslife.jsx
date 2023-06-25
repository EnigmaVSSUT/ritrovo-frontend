import React from "react";
import { Typography,Box,ThemeProvider,CssBaseline } from "@mui/material";
import { blueGrey,grey } from "@mui/material/colors";
import Stack from '@mui/material/Stack';
const primary= grey[100];
const accent = blueGrey[100];
function App() {
  
  
  return (
      <div className="App">
        <Stack 
        sx={{backgroundColor:primary}}
        justifyContent="center"
        display="flex"
        flexDirection="column"
        
        marginRight="40px"
        marginLeft="40px"
        borderRadius="14px"
        marginBottom="0%"
        >
        <Box alignItems="center"
        justifyContent="center"
        display={"flex"}
        flexDirection={"column"}
        
        margin="auto"
        marginTop="105px"
        padding="20px"
        boxShadow="0px 3px 2px #9e9e9e"
        borderRadius="5px"
        marginRight="0"
        marginLeft="0"
        marginBottom="0"
        
        
        sx={{backgroundColor: accent}}>
          <Typography 
          variant="h5"
          textAlign="center"
          fontWeight="bold"
          >
            CAMPUS LIFE</Typography>
        </Box>
        <Typography marginLeft="5%"
        marginRight="5%"
        paddingTop="5%"
        paddingBottom="5%"
        
        
        textAlign="left">
          <div className="Description">
            <div className="Text" style={{paddingTop:"20px"}} >
              <h3 style={{lineHeight:"20px"}}>Local Culture</h3>
              <p>The culture and art of Sambalpur is a unique proposition of dance,music, handicraft, beliefs, social values, traditional practices etc.</p>
            </div>
            <div className="Text" style={{paddingTop:"20px"}}>
              <p>Local languages: Odia, Hindi, English. </p>
            </div>
            <div className="Text"  style={{paddingTop:"20px"}}>
              <h3  style={{lineHeight:"30px"}}>Total Area</h3>
              <p>Total area available: 502 Acre<br/>
              Built up area Academics (45896 sqm)+Hostel for boys and girls(87466 sqm)= 133362 sqm.</p>
            </div>
            <div className="Text"style={{paddingTop:"20px"}} >
              <h3 style={{lineHeight:"20px"}}>IT Infrastructure </h3>
              <p>Veer Surendra Sai University of Technology, Burla is a burgeoning university which has an optimized scalable network throughout the university campus and has established a standard policy to evaluate ,design, implement, maintain and utilize the infrastructure. A technical executive commitee has been framed to improve the efficiency and extension of IT infrastructure at par with academic as well as administrative needs of the university.920 nos. of computers with internet facility are available in central facilities and various departments of the university. The university has a central communication facility with adequate facilities created for the benefit of the teachers and research scholars.</p>
            </div>
            <div className="Text" style={{paddingTop:"20px"}}>
              <h3 style={{lineHeight:"20px"}}>Academic Infrastructure</h3>
              <ol style={{ listStyleType: 'disc' }}>
              <li>1200 capacity auditorium </li>
              <li>300 capacity Biju Patnaik E-learning center</li>
              <li>70 nos classrooms, 15 nos tutorial rooms, 10 smart classrooms </li>
              <li>Separate department buildings </li>
              <li>State of the art laboratories </li>
              <li>Central Library,  Workshop,  IGBPS Internet connectivity (BSNL),  NKN sponsored</li>
              <li>Central computing and internet facility, Wi-fi to hostels</li>
              </ol>
            </div>
            <div className="Text" style={{paddingTop:"20px"}}>
              <h3>Research Facilities and Labs</h3>
              <p>Faculty and students of our department are involved in research activities of interest to society and industry. Our curricula derive its strength from the design and project contents. We strive to strengthen further our research programs as well our relationship with industry by supporting our faculty and students to work on sponsored research and industrial projects and consultancy. We encourage collaborative programs, which enhance interaction of our faculty and students with industry. Office of Dean Sponsored Research & Industrial Consultancy provides administrative and managerial support for the operation of Sponsored research, In-house Projects, Consultancy and other activities of the institute. It promotes and manages Institute-Industry interaction and provides helping hand in establishing collaborative programmes of interest to Institute and Industry. Faculty and students are encouraged to take up hands on industrial problems as consultancy projects to enrich their problem solving skills. The University website provides information on its resources and activities.</p>
            </div>
            <div className="Text" style={{paddingTop:"20px"}}>
              <h3>Central Research Facility</h3>
              <p>HITACHI make SU3500 Scanning Electron Microscope (SEM). Energy Dispersive Spectroscopy (EDS) attachmentMATLAB/PSCAD/ETAP software/ANSYS/STAAD - PRO/AUTO – CAD Each department has individual Labs.</p>
              </div>
              <div className="Text" style={{paddingTop:"20px"}}>
                <p>Library Database</p>
                <ol style={{ listStyleType: 'disc' }}>
              <li>Text Books-55483 </li>
              <li>Reference Books-5800</li>
              <li>E-Books-376 </li>
              <li>Journals-9065 </li>
              <li>e-Journals-7067</li>
              <li>Digital Database-03 nos.</li>
              <li>CDs-25nos, Vodeos-431nos.</li>
              <li>Library Automation Software-KOHA</li>
              <li>Plagarism Detection Software:-Turnitin and URKUND</li>
              <li>Ph.D. thesis/Abstract uploaded in UGC INFLIBNET </li>
              <li>SodhGanga and SodhGangotri respectively</li>
              </ol>
              </div>
              <div className="Text" style={{paddingTop:"20px"}}>
                <h3>Halls of Residences for Students</h3>
                <p>Following hostels are available in University campus. First year students stay in separate hostels. Hostel facilities are adequate for 4000 students.</p>
                <ol style={{ listStyleType: 'decimal' }}>
                <li>Anuradha Hall of Residence - 290 girls</li>
                <li>Pulasthya Hall of Residence - 384 boys</li>
                <li>Marichi Hall of Residence - 261 boys</li>
                <li>Atri Hall of Residence - 254 boys</li>
                <li>Kratu Hall of Residence - 254 boys</li>
                <li>Vasistha Hall of Residence - 275 boys</li>
                <li>Pulaha Hall of Residence - 812 boys</li>
                <li>Arundhati Hall of Residence - 319 girls</li>
                <li>Rohini Hall of Residence - 201 girls</li>
                <li>Visakha Hall of Residence - 277 girls</li>
                <li>Vasundhara Hall of Residence - 275 girls</li>
                <li>Angira Hall of Residence - 100 girls</li>
                </ol>
              </div>
              <div className="Text" style={{paddingTop:"20px"}}>
                <p>Apart from all well furnished rooms with modern toilets and other amenities color TV, Computer & wi-fi internet facilities, Newspaper & Magazines are available for the students. The hostel fees are as per the guidelines of the state Govt. of Odisha. The Dean Student Welfare (DSW) is the overall in charge of all students activities of the University. The discipline in the individual hostels is looked after by the Warden and Asst. wardens of the hostels.
                Faculty level Mess and Hostel welfare committee carry out periodical inspection as well as surprise check of the quality of food and modus operandi of food preparation and food servicing by the caterer. The students committee refer the complaint to the faculty committee as above. Breakfast, Lunch, evening snacks and dinner is prepared separately in respective hostels. LPG is used for cooking to maintain the healthy and hygienic conditions,. Washing Machines, TV and equipments for indoor/outdoor games are available. Students are not allowed to cook meals in their rooms.<br/>Following special items are provided in student Canteen</p>
                <ol style={{ listStyleType: 'disc' }}>
                  <li>Dispenser-for Tea and Coffee</li>
                  <li>Hot Case</li>
                  <li>Oven</li>
                  <li>Fridge</li>
                  <li>Dispenser for Cold Drinks etc.</li>
                </ol>
              </div> 
              <div className="Text" style={{paddingTop:"20px"}}>
                <h3>Cuisines of food served</h3>
                <p>Breakfast: Puri, Sabji, Idli, sambhar, Dosa, Upma, Sambhar, Chana Sabji, Poha, Chakuli, Bread, Butter/JAM, Maggi, Epee, Tea/Coffee/Milk/Bournvita, Sprouts, Banana<br/>
                    Lunch : Rice, Fried Rice, Jeera Rice, Dal, Mix fry, Mix Sabji, Chicken, Paneer, fish, Papad, Rajma, pickle, curd/Lassi
                    <br/> Tiffin : Bara, Samosa, Bread Chop, Alu Chop, Pakudi, Jhal Murhi, Chowmin, Lemon Water/Jal Jeera/Tea/Rasna/Veg Pakoda/Pizza/Biscuits
                    <br/>  Dinner : Roti,Tandoori, Rice, Dal, Dal Makhani, Sabji, Mix fry, Egg, Chicken, fish, Mutton, papad, Achar, Salad, Sweets</p>

                </div>
                <div className="Text" style={{paddingTop:"20px"}}>
                  <h3>Sports Facilities</h3>
                  <p>Well Maintained Athletic court- 400m
                  <br/> Basket Ball Court, Lawn Tennis and Badminton Court,Volley Ball Court
                  <br/> Gymnasium with facilities like Cycle Erogometer, Chest Press, Vibrator Machine Belt Motorised, Seated Alternate Leg Press Machine, Twin Arm Pulley, Stepper, Jogger etc.
                  <br/> Hockey and Cricket field, Indoor Table Tennis
                  <br/> The University is going to construct a Swimming Pool Complex by CPWD equipped with all modern facilities.
                    </p>
                </div>
                <div className="Text" style={{paddingTop:"20px"}}>
                  <h3>Festivals Conducted by the Students</h3>
                  <p>For the all round development of the students, the University provides a host of various students activities. These activities range from sports, personal-hobbies to technical interests. The students are encouraged to become the member of these bodies to help broaden their skills and horizons. These student bodies not only help the students explore their hidden talent but also help in areas such as personality development and inculcating in the students the spirit of organization by providing them with a platform for hosting their talents. All Student Activities including the cultural activities and events in University are performed under the guidance and able mentorship of Dean Student Welfare(DSW)- 9439207001</p>
                </div>
                <div className="Text" style={{paddingTop:"20px"}}>
                  <h3>Official Events</h3>
                  <ol style={{ listStyleType: 'disc' }}>
                    <li>Annual Technical meet (Inter College/University meet) called SAMAVESH</li>
                    <li>Annual Cultural Meet VASSUNT</li>
                    <li>Annual Atheletic Meet</li>
                    <li>Inter University Sports Meet</li>
                    <li>Ganesh Puja, Saraswati Puja, Viswakarma Puja</li>
                    <li>University Foundation Day on 1st July</li>
                    <li>Veer Surendra Sai Jayanti on 23rd January along with Netaji Subhash Bose Jayanti</li>
                    <li>Women's Day on 8th March, Yoga Day on 21st June</li>
                    <li>Matrubhasa Divas</li>
                    <li>Alumni Meet</li>
                    <li>NCC Day, Tedex.</li>
                    <li>Independence Day and Republic Day</li>
                  </ol>
                </div>
                <div className="Text" style={{paddingTop:"20px"}}>
                  <h3>Places to visit nearby</h3>
                  <ol style={{ listStyleType: 'disc' }}>
                    <li>Hirakud Dam(6kms)</li>
                    <li>Chiplima Hydro Electric Project(28kms)</li>
                    <li>Samaleswari Temple(10kms)</li>
                    <li>HINDALCO(8kms)</li>
                    <li>Vedanta Aluminium Plant(48kms)</li>
                    <li>IIM Sambalpur(26kms)</li>
                    <li>VIMSAR Medical Institute-1km</li>
                  </ol>
                </div>
         </div>
         </Typography>
        
          </Stack>
          
      </div>
     
  );
}

export default App;