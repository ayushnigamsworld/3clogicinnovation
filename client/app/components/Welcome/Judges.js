import React, { Component } from 'react';

class Judges extends Component {

    constructor(props){
        super(props);
    }

    render() {
        
        return ( 
            <div id="content">
               <div>
                  <h2>Meet The Panel of Judges.</h2>
               </div>
               <div>
                  <p className="fadeInUp wow carousal-quote" data-wow-delay=".6s">
                    No matter how good the science gets, there are problems that inevitably depend on judgement.
                  </p>
               </div>

               <div class="card">
                 <img src="https://s3.amazonaws.com/3c-hackathon/judges/as.jpg" alt="Avatar" />
                 <div class="container">
                   <h4><b>Amarveer Singh</b></h4>
                   <p>Senior Director - Professional Services</p>
                 </div>
               </div>
               <div class="card">
                 <img src="https://s3.amazonaws.com/3c-hackathon/judges/ym.jpg" alt="Avatar" />
                 <div class="container">
                   <h4><b>Yogesh Mittal</b></h4>
                   <p>Director - Program Management</p>
                 </div>
               </div>
               <div class="card">
                 <img src="https://s3.amazonaws.com/3c-hackathon/judges/vh.jpg" alt="Avatar" />
                 <div class="container">
                   <h4><b>Vani Handa</b></h4>
                   <p>Director - HR</p>
                 </div>
               </div>
               <div class="card">
                 <img src="https://s3.amazonaws.com/3c-hackathon/judges/pkp.jpg" alt="Avatar" />
                 <div class="container">
                   <h4><b>Pankaj Patra</b></h4>
                   <p>Sr. Product Manager</p>
                 </div>
               </div>
            </div>
         )
    }
}
 
export default Judges;
