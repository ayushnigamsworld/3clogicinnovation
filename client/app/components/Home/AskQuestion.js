import React, { Component } from 'react';

class AskQuestion extends Component{
    constructor(props){
        super(props);
    }

    render(){
      return <section id="faq" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Ask Question?</h1>
                <p className="wow fadeInDown" data-wow-delay="0.2s"><label class="ccc">#3C Logic</label> <label class="innovation">inNOvatiON</label></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
              <div className="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <div className="header-title" data-toggle="collapse" data-target="#questionOne" aria-expanded="true"
                         aria-controls="collapseOne">
                      <i className="lni-pencil"></i> How do I form or join a team?
                    </div>
                  </div>
                  <div id="questionOne" className="collapse" aria-labelledby="headingOne" data-parent="#question">
                    <div className="card-body">
                      Once your idea is shortlisted, you become the TEAM LEAD <small>(sound fancy right?)</small>. You
                      can
                      then send invitations to other people to join your team, if they also like your idea they will
                      accept
                      it.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <div className="header-title" data-toggle="collapse" data-target="#questionTwo"
                         aria-expanded="false"
                         aria-controls="questionTwo">
                      <i className="lni-pencil"></i> What if I don't have any idea?
                    </div>
                  </div>
                  <div id="questionTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#question">
                    <div className="card-body">
                      No Worries! It's okay to not to have a brilliant idea everytime.
                       As you know everyone can submit their ideas even who won't be able to participate actively (Denis, Vikas, Navya etc.).
                       Those ideas will be open to all, you can select one of them and start building that.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <div className="header-title" data-toggle="collapse" data-target="#questionThree"
                         aria-expanded="false"
                         aria-controls="questionThree">
                      <i className="lni-pencil"></i> What if I don’t know how to code?
                    </div>
                  </div>
                  <div id="questionThree" className="collapse" aria-labelledby="headingThree" data-parent="#question">
                    <div className="card-body">
                      No problem! If you’ve never coded before, it’s a great opportunity to spend a weekend learning.
                      You’ll be surrounded by experienced coders, willing to help you out. Coding can look pretty difficult,
                      but actually it’s easy to get started.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <div className="header-title" data-toggle="collapse" data-target="#questionFour"
                         aria-expanded="false"
                         aria-controls="questionFour">
                      <i className="lni-pencil"></i> What is judging criteria?
                    </div>
                  </div>
                  <div id="questionFour" className="collapse" aria-labelledby="headingThree" data-parent="#question">
                    <div className="card-body">
                      Ideas aligned with 3C Logic goals, cost effective, out of the box, scalable, trendsetter,
                      customer centric will get some extra points. Rest is your idea in action and presentation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
              <div className="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne2">
                    <div className="header-title" data-toggle="collapse" data-target="#questionOne2"
                         aria-expanded="true"
                         aria-controls="collapseOne">
                      <i className="lni-pencil"></i> I am not at 3C Logic Noida, can I still participate?
                    </div>
                  </div>
                  <div id="questionOne2" className="collapse" aria-labelledby="headingOne" data-parent="#question">
                    <div className="card-body">
                      Ofcourse! Infact we encourage you to, but you'll have to sync with IST timings of the event.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo2">
                    <div className="header-title" data-toggle="collapse" data-target="#questionTwo2"
                         aria-expanded="false"
                         aria-controls="questionTwo">
                      <i className="lni-pencil"></i> Can I bring my child?
                    </div>
                  </div>
                  <div id="questionTwo2" className="collapse" aria-labelledby="headingTwo" data-parent="#question">
                    <div className="card-body">
                      We will prefer not, because we know the charm kids bring to office and we are afraid that could cause some distractions.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <div className="header-title" data-toggle="collapse" data-target="#questionFive"
                         aria-expanded="false"
                         aria-controls="questionFive">
                      <i className="lni-pencil"></i>What is prize money?
                    </div>
                  </div>
                  <div id="questionFive" className="collapse" aria-labelledby="headingThree" data-parent="#question">
                    <div className="card-body">
                      Straight to money! I like it. For now monetary prizes are not decided, but all members of the winning
                       team will be getting a brand new Amazon Echo Dot <small>Exciting!!!</small>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <div className="header-title" data-toggle="collapse" data-target="#questionSix"
                         aria-expanded="false"
                         aria-controls="questionSix">
                      <i className="lni-pencil"></i> What is the Program/Timetable?
                    </div>
                  </div>
                  <div id="questionSix" className="collapse" aria-labelledby="headingThree" data-parent="#question">
                    <div className="card-body">
                      The event will start on 31 May at 13:00 PM and will be a 24 hour event.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>;
    }
}

export default AskQuestion;
