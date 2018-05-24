import React, { Component } from 'react';

class Rules extends Component {
    render() {
        
        return(
          <div id="content">
            <div class="container">
              <div style={{color: 'rgb(255,0,23)'}}>
                    <small>Remember that hackathon are like marathons. Some people go to compete but most people take part to better themselves and have fun.
                    Whatever the reason is you're at a hackathon, make sure you're upholding the hacker spirit by collaborating with other teams,
                    helping beginners, and having fun.</small>
              </div>
              <div class="list-group">
                  <a href="#" class="list-group-item list-group-item-success">
                    <h4 class="list-group-item-heading">Purpose</h4>
                    <p class="list-group-item-text">
                        The Hackathon is an opportunity for you to innovate, ideate, and rapidly prototype a creative technological solution to a unique challenge.
                        The purpose of the event is to provide a platform for creativity where you can learn, make team bonding and have some fun with technologies.
                    </p>
                  </a>
                  <a href="#" class="list-group-item list-group-item-info">
                    <h4 class="list-group-item-heading">Eligibility</h4>
                    <p class="list-group-item-text">
                        The Hackathon is open to all members of the 3clogic. Doesn't matter if you know the programming or not whether you are in Noida, in MD or working from home.
                    </p>
                  </a>
                  <a href="#" class="list-group-item list-group-item-warning">
                    <h4 class="list-group-item-heading">How to Participate</h4>
                    <p class="list-group-item-text">
                      You just need to submit your ideas here or can email your idea to me. Judges will select top 7 ideas (may be more) out of the provided list.
                      Once your idea is selected, you can ask other members to join your team. If they also like your idea, they can join your team and work with you.
                      Please remember, 24 May is the last date for submitting the ideas. In case you do not have any idea, you can pick one of the selected idea submitted by
                      others who won't be building a team or you can simply join any team.
                    </p>
                  </a>
                  <a href="#" class="list-group-item list-group-item-success">
                    <h4 class="list-group-item-heading">Team Creation</h4>
                    <p class="list-group-item-text">
                      Teams will be build to develop selected ideas. Owner/borrower of the idea can request other resources to join his/her team. Teams can have limited resources
                      from each team. Each team can have 6 to 8 resources. Please see available resources list for more details.
                    </p>
                  </a>
                  <a href="#" class="list-group-item list-group-item-info">
                     <h4 class="list-group-item-heading">Judging Criteria</h4>
                     <p class="list-group-item-text">
                        Winners will be judged based on the following criteria, all being equally important:
                        <ul>
                          <li>Innovative nature and the utility of the idea</li>
                          <li>Idea align with 3clogic goal</li>
                          <li>Cost effective, scalable and out of the box ideas</li>
                          <li>Presentation of the project on Friday afternoon</li>
                        </ul>
                     </p>
                  </a>
                  <a href="#" class="list-group-item list-group-item-warning">
                     <h4 class="list-group-item-heading">Prizes</h4>
                     <p class="list-group-item-text">
                        <ul>
                          <li>For the first time, other than the hackathon winner, 2 more teams  will also be rewarded (More chances to win :))</li>
                          <li>Every member of the winning team will get the brand new Amazon Echo Dot. (Say Hello to Alexa...!!)</li>
                          <li>Other 2 teams will get cash prizes for each of their team members.</li>
                          <li>Not just for the teams, there are more prizes for individual as well. (Best Ideas, Best contributors and so on...)</li>
                        </ul>
                     </p>
                   </a>
              </div>
              </div>
          </div>
        )
    }
}
export default Rules;
