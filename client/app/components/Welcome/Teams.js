import React, { Component } from 'react';

class Teams extends Component {
    render() {
        return(
            <div id="content" class="w-100">
              <div class="container table-group">
              <table class="table table-bordered table-hover span2">
                 <thead><tr><th>Stimuli</th><th>Deviants</th><th>Cluster Champs</th><th>AI Parking</th></tr></thead>
                 <tbody>
                   <tr><td>Ayush Goel</td>      <td>Rajat Nigam</td>        <td>Kuldeep Yadav</td>      <td>Gomtesh Jain </td></tr>
                   <tr><td>Ayush Nigam</td>     <td>Aayush Singh</td>       <td>Sasmita Panda</td>      <td>Sumit Chopra</td></tr>
                   <tr><td>Nishita Jain</td>    <td>Kamlesh</td>            <td>Nidhi Dagar</td>        <td>Deepak Kumar</td></tr>
                   <tr><td>Rohit Gupta</td>     <td>Aditya Sharma</td>      <td>Naveen</td>             <td>Hitesh Sharma</td></tr>
                   <tr><td>Nishant</td>         <td>Ajay Kumar Mehar</td>   <td>Tripti Bansal</td>      <td>Rajit Sharma</td></tr>
                   <tr><td>Vikas Bhadwal</td>   <td>Vishal Deep Gupta</td>  <td>Devinder kumar</td>     <td></td></tr>
                   <tr><td></td>                <td> </td>                  <td> </td>                  <td> </td></tr>
                 </tbody>
              </table>

              <table class="table table-bordered table-hover span2">
                  <thead><tr><th>HackSlash</th><th>I We Ours (IVR's)</th><th>Hacking Bad</th><th>Gear:Automata</th></tr></thead>
                  <tbody>
                    <tr><td>Shailja Tiwari</td>       <td> Swati </td>      <td>Devendra Tiwari</td>    <td>David Morgan </td></tr>
                    <tr><td>Pradeep Mishra *</td>       <td> Krishna</td>     <td> Ritesh Chopra</td>     <td> Nikhil Agarwal</td></tr>
                    <tr><td>Hema Joshi </td>           <td>Himanshu </td>    <td> Aditya Mishra</td>     <td> Sneha *</td></tr>
                    <tr><td>Dheeraj Kumar</td>        <td>Shahnawaz </td>   <td> Shalini</td>           <td> Smritta Singh</td></tr>
                    <tr><td>Manoj Kumar *</td>          <td> Rishi</td>       <td> Anita</td>             <td> Sagar</td></tr>
                    <tr><td>Lokesh Yadva</td>         <td> Damini</td>      <td>Somya </td>             <td> Pulkit</td></tr>
                    <tr><td>Meenakshi Das</td>        <td> </td>            <td> Udham</td>             <td>Sandeep Uppal * </td></tr>
                  </tbody>
              </table>
              <table>
                <tr><td colspan="2">* Resources available partially.</td></tr>
                <tr><td># Resources not part of any team till now: </td><td><div style={{color: 'rgb(255,0,23)'}}>Anshuman Rawat, Chitwan Malhotra, Manali Khare, Rahul Malhotra</div></td></tr>
              </table>
             </div>
            </div>
        );
    }
}
export default Teams;
