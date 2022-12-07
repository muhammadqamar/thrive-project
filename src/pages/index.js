import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../assets/styles/Home.module.scss";
import CardModal from "../components/cardModal";

const TabsData = [
  {
    cardimg: "/images/note-card-logo.svg",
    card_heading: "Add a note to people leader",
    card_para: "Check-ins and Insights",
    card_imgTwo: "/images/signal-logo.svg",
  },
  {
    cardimg: "/images/note-card-logo.svg",
    card_heading: "Add a note to collaborator",
    card_para: "Connections and Sync-ups",
    card_imgTwo: "",
  },
  {
    cardimg: "/images/note-card-logo.svg",
    card_heading: "Add a note to self",
    card_para: "Bright ideas and thoughts",
    card_imgTwo: "",
  },
  {
    cardimg: "/images/priority-card-logo.svg",
    card_heading: "Add a priority with people leader",
    card_para: "Project priorities and events",
    card_imgTwo: "/images/signal-logo.svg",
  },
  {
    cardimg: "/images/priority-card-logo.svg",
    card_heading: "Add a priority with collaborator",
    card_para: "Collaborations and partnership",
    card_imgTwo: "",
  },
  {
    cardimg: "/images/to-do-logo.svg",
    card_heading: "Add a To-Do",
    card_para: "Actions and tasks",
    card_imgTwo: "",
  },
];

const agendaContent = [
  {
    heading: "Notes - 05-Dec",
    date: "Monday, December 5, 2028    1:15 PM",
    listHeading: "Agenda:",
    listPara: "",
    listData: [
      {
        agendaPara: "1. My priorities this week.",
      },
      {
        agendaPara: "2. My priorities next sunday.",
      },
      {
        agendaPara: "3. My priorities this week.",
      },
      {
        agendaPara: "4. My priorities next friday.",
      },
      {
        agendaPara: "5. How am i progressing?",
      },
    ],
    editText: "1:1 with Dianne Wilson (my people leader)",
    editedText: "Edited 2 minutes ago",
    emailImg: "/images/email-note.png",
    emailText: "Email note",
  },
  {
    heading: "Notes - 18-Nov",
    date: "Monday, November 18, 2028    1:22 PM",
    listHeading: "",
    listPara:
      "Collaboration improves the way your team works together and problem solves. This leads to more innovation, efficient processes, increased success, and improved communication. Through listening to and learning from team members, you can help each other reach your goals. It takes hard work and a bit of time, but collaboration is worth it for the benefits your team will gain.",
    problemSolve: [
      {
        solveText: "Problem-solving",
      },
      { solveText: "Adaptability" },
      { solveText: " Open communication and participation" },
      { solveText: "Skill-sharing" },
      { solveText: " Goal alignment" },
      { solveText: "Engagement" },
    ],
    solvePara:
      "Some applicable examples of collaboration in the workplace include brainstorming, group discussions, reaching a consensus about processes or analyzing problems, and finding solutions.",
    subPara: "6 examples of colloboration:",
    listData: [
      {
        agendaPara: "1. Document sharing",
      },
      {
        agendaPara: "2. Task managegment",
      },
      {
        agendaPara: "3. Video conferencing",
      },
      {
        agendaPara: "4. Peer training",
      },
      {
        agendaPara: "5. Visual brainstorming",
      },
      {
        agendaPara: "6. Cross-functional team discussion",
      },
    ],
    editText: "1:1 with Dianne Wilson (my people leader)",
    editedText: "Edited 2 minutes ago",
    emailImg: "/images/email-note.png",
    emailText: "Email note",
  },
  {
    heading: "Notes -04-Nov",
    date: "Monday, November 4, 2028    1:12 PM",
    listHeading: "",
    listData: [
      {
        agendaPara: "1. How to get things done more efficiently?",
      },
      {
        agendaPara: "2. Work with network team on the MFA issue",
      },
      {
        agendaPara: "3. Work with procurement team on workflow",
      },
      {
        agendaPara: "4. Review the product summary page",
      },
    ],
    editText: "1:1 with Dianne Wilson (my people leader)",
    editedText: "Edited 2 minutes ago",
    emailImg: "/images/email-note.png",
    emailText: "Email note",
  },
];

const userProfile = [
  {
    userText: "Send a list of assets for virtual conference",
    userImg: "/images/Frame-logo.png",
    userNum: "12/12",
    userProfileLogo: "/images/right-profile-logo.png",
  },
  {
    userText: "Finalize campaign results data analysis in Excel",
    userImg: "/images/Frame-logo.png",
    userNum: "1/13",
    userProfileLogo: "/images/right-profile-logo.png",
  },
  {
    userText: "Share summary of the leadership training with team",
    userImg: "/images/Frame-logo.png",
    userNum: "2/15",
    userProfileLogo: "/images/right-profile-logo.png",
  },
  {
    userText: "Draft status report for tier 1 projects completed in 2024",
    userImg: "/images/Frame-logo.png",
    userNum: "3/16",
    userProfileLogo: "/images/right-profile-logo.png",
  },
  {
    userText: "Create a summary document for Digital Workplace projects",
    userImg: "/images/Frame-logo.png",
    userNum: "3/18",
    userProfileLogo: "/images/right-profile-logo.png",
  },
  {
    userText: "Send invite to all team members for the next town hall meeting",
    userImg: "/images/Frame-logo.png",
    userNum: "4/14",
    userProfileLogo: "/images/right-profile-logo.png",
  },
  {
    userText: "Analyze the KPI metrics for Technology Toolbox",
    userImg: "/images/Frame-logo.png",
    userNum: "4/16",
    userProfileLogo: "/images/right-profile-logo.png",
  },
  {
    userText:
      "Create insight report on software and hardware procurement process",
    userImg: "/images/Frame-logo.png",
    userNum: "5/17",
    userProfileLogo: "/images/right-profile-logo.png",
  },
  {
    userText:
      "Create a customer experience success team’s strategy and process",
    userImg: "/images/Frame-logo.png",
    userNum: "5/26",
    userProfileLogo: "/images/right-profile-logo.png",
  },
];

export default function Home() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.containerTabs}>
        <Tabs
          defaultActiveKey="My thrive"
          // id="fill-tab-example"
          // fill
        >
          <Tab className="tab_style" eventKey="My thrive" title="My thrive">
            {/* <div className="container"> */}
            <div className="tab_flx_box">
              {TabsData.map((item, index) => (
                <div
                  key={index}
                  className="tab_card"
                  onClick={() => setModalShow(true)}
                >
                  <img className="card_img" src={item.cardimg} alt="" />
                  <div className="card_content">
                    <h3 className="card_heading">{item.card_heading}</h3>
                    <p className="card_para">{item.card_para}</p>
                  </div>
                  {(index === 0 && (
                    <img
                      className="card_side_img"
                      src={item.card_imgTwo}
                      alt=""
                    />
                  )) ||
                    (index === 3 && (
                      <img
                        className="card_side_img"
                        src={item.card_imgTwo}
                        alt=""
                      />
                    ))}
                </div>
              ))}
            </div>
            <CardModal show={modalShow} onHide={() => setModalShow(false)} />

            {/* </div> */}
            <div className="check_priorities_bx">
              <div className="check_container">
                <div className="left_priorities">
                  <h4 className="left_priorities_head">Check-in Notes</h4>
                  <div className="left_inner_content">
                    <div className="">
                      <h5 className="left_sub_heading">Notebook</h5>
                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-button-dark-example1"
                          variant="secondary"
                        >
                          1:1 with Diance Wilson (my people leader)
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                          <Dropdown.Item href="#/action-1" active>
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item href="#/action-4">
                            Separated link
                          </Dropdown.Item>
                        </Dropdown.Menu>
                        <img
                          className="down_arrow"
                          src="/images/down-arrow.png"
                          alt=""
                        />
                      </Dropdown>
                    </div>
                    <div className="">
                      <h5 className="left_sub_heading">Period</h5>
                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-button-dark-example1"
                          variant="secondary"
                        >
                          Last 30 days
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                          <Dropdown.Item href="#/action-1" active>
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item href="#/action-4">
                            Separated link
                          </Dropdown.Item>
                        </Dropdown.Menu>
                        <img
                          className="down_arrow"
                          src="/images/down-arrow.png"
                          alt=""
                        />
                      </Dropdown>
                    </div>
                  </div>
                  <InputGroup size="sm" className="mb-3">
                    <Form.Control
                      placeholder="Search with the above filter"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                    <img
                      className="search_icon"
                      src="/images/search-icon.png"
                      alt=""
                    />
                  </InputGroup>
                  {agendaContent.map((item, index) => (
                    <div key={index} className="date_content_bx">
                      <div className="date_content_contain">
                        <h5 className="date_heading">{item.heading}</h5>
                        <p className="date_para">{item.date}</p>
                        {index === 0 && (
                          <h5 className="date_heading date_inner_heading">
                            {item.listHeading}
                          </h5>
                        )}
                        {index === 1 && (
                          <>
                            <p className="list_para">{item.listPara}</p>
                            <div className="list_para">
                              {item.problemSolve?.map((item, index) => (
                                <p key={index}>{item.solveText}</p>
                              ))}
                            </div>
                            <p className="list_para">{item.solvePara}</p>
                            <p>{item.subPara}</p>
                          </>
                        )}
                        <div className="date_para_bx">
                          {item.listData.map((item, index) => (
                            <p key={index} className="date_para agenda_para">
                              {item.agendaPara}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="right_horizontal_line left_line"></div>
                      <div className="edit_info">
                        <p className="edit_para">{item.editText}</p>
                        <span className="edit_para span_border"></span>
                        <p className="edit_para">{item.editedText}</p>
                        <span className="edit_para span_line"></span>
                        <div className="email_note">
                          <img src={item.emailImg} alt="" />
                          <p className="email_note_para">{item.emailText}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="vertical_line"></div>
                <div className="right_priorities left_priorities">
                  <h4 className="left_priorities_head">Priorities</h4>
                  <div className="left_inner_content right_inner_content">
                    {/* <div className=""> */}
                    <h5 className="left_sub_heading">Priority Planner</h5>
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-button-dark-example1"
                        variant="secondary"
                        className="right_priorities_btn"
                      >
                        With Diance Wilson (my people leader)
                      </Dropdown.Toggle>

                      <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/action-1" active>
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                      <img
                        className="down_arrow right_priorities_arrow"
                        src="/images/down-arrow.png"
                        alt=""
                      />
                    </Dropdown>
                    {/* </div> */}
                    {/* <div className=""> */}
                    <h5 className="left_sub_heading">Period</h5>
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-button-dark-example1"
                        variant="secondary"
                      >
                        Last 30 days
                      </Dropdown.Toggle>

                      <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/action-1" active>
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                      <img
                        className="down_arrow"
                        src="/images/down-arrow.png"
                        alt=""
                      />
                    </Dropdown>
                    {/* </div> */}
                  </div>
                  <InputGroup size="sm" className="mb-3">
                    <Form.Control
                      placeholder="Search with the above filter"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                    <img
                      className="search_icon"
                      src="/images/search-icon.png"
                      alt=""
                    />
                  </InputGroup>

                  {userProfile.map((item, index) => (
                    <div key={index} className="right_user_profile">
                      <div className="user_profile_content">
                        <span></span>
                        <p className="user_profile_text">{item.userText}</p>
                      </div>
                      <div className="right_horizontal_line"></div>
                      <div className="user_calender">
                        <div className="calender_bx">
                          <img src={item.userImg} alt="" />
                          <span>{item.userNum}</span>
                        </div>
                        <img src={item.userProfileLogo} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Tab>
          <Tab
            className="tab_style"
            eventKey="Check-in Notes"
            title="Check-in Notes"
          >
            <div className="check_container">
              <h5>Check-in-notes</h5>
            </div>
          </Tab>
          <Tab
            className="tab_style"
            eventKey="Priorrity planner"
            title="Priorrity planner"
          >
            <div className="check_container">
              <h2>Priorrity planner</h2>
            </div>
          </Tab>
          <Tab className="tab_style" eventKey="To-do" title="To-do">
            <div className="check_container">
              <h2>To-do</h2>
            </div>
          </Tab>
          <Tab
            className="tab_style"
            eventKey="About thrive"
            title="About thrive"
          >
            <div className="check_container">
              <h2>About thrive</h2>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
