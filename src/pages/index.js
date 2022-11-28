import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../assets/styles/Home.module.scss";

const TabsData = [
  {
    cardimg: "/images/powerpoint.png",
    card_heading: "Add a note to people leader",
    card_para: "Check-ins and insights",
    card_imgTwo: "/images/signal.png",
  },
  {
    cardimg: "/images/powerpoint.png",
    card_heading: "Add a note to collaborator",
    card_para: "Connections and Sync-ups",
    card_imgTwo: "",
  },
  {
    cardimg: "/images/powerpoint.png",
    card_heading: "Add a note to self",
    card_para: "Bright ideas and thoughts",
    card_imgTwo: "",
  },
  {
    cardimg: "/images/powerpoint.png",
    card_heading: "Add a Priority with people leader",
    card_para: "Check-ins and insights",
    card_imgTwo: "/images/signal.png",
  },
  {
    cardimg: "/images/powerpoint.png",
    card_heading: "Add a Priority with collaborator",
    card_para: "Check-ins and insights",
    card_imgTwo: "",
  },
  {
    cardimg: "/images/powerpoint.png",
    card_heading: "Add a To-Do",
    card_para: "Actions and tasks",
    card_imgTwo: "",
  },
];

const agendaContent = [
  {
    agendaPara: "1. My priorities this week",
  },
  {
    agendaPara: "2. My priorities this week",
  },
  {
    agendaPara: "3. My priorities this week",
  },
  {
    agendaPara: "4. My priorities this week",
  },
  {
    agendaPara: "5. How am i progressing?",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Tabs
        defaultActiveKey="My thrive"
        // id="fill-tab-example"
        // fill
      >
        <Tab className="tab_style" eventKey="My thrive" title="My thrive">
          <div className="container">
            <div className="tab_flx_box">
              {TabsData.map((item, index) => (
                <div key={index} className="tab_card">
                  <img className="card_img" src={item.cardimg} alt="" />
                  <div
                    className="card_content"
                    style={{
                      color:
                        (index === 0 && "rgb(172, 39, 244)") ||
                        (index === 1 && "rgb(172, 39, 244)") ||
                        (index === 2 && "rgb(172, 39, 244)") ||
                        "rgb(9,225,205)",
                    }}
                  >
                    <h3 className="card_heading">{item.card_heading}</h3>
                    <p className="card_para">{item.card_para}</p>
                  </div>
                  {(index === 0 && (
                    <img
                      className="card_img card_img_two"
                      src={item.card_imgTwo}
                      alt=""
                    />
                  )) ||
                    (index === 3 && (
                      <img
                        className="card_img card_img_two"
                        src={item.card_imgTwo}
                        alt=""
                      />
                    ))}
                </div>
              ))}
            </div>
          </div>
          <div className="check_priorities_bx">
            <div className="container">
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
                  {/* <img
                    className="search_icon"
                    src="/images/search_icon.png"
                    alt=""
                  /> */}
                </InputGroup>
                <div className="date_content_bx">
                  <h5 className="date_heading">Note - 05-Dec</h5>
                  <p className="date_para">
                    Monday December 5, 2028&nbsp;&nbsp; 1:15 PM
                  </p>
                  <h5 className="date_heading date_inner_heading">Agenda:</h5>
                  <div className="date_para_bx">
                    {agendaContent.map((item, index) => (
                      <p key={index} className="date_para agenda_para">
                        {item.agendaPara}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="vertical_line"></div>
              <div className="right_priorities left_priorities">
                <h4 className="left_priorities_head">Priorities</h4>
                <div className="left_inner_content right_inner_content">
                  <div className="">
                    <h5 className="left_sub_heading">Priority Planner</h5>
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-button-dark-example1"
                        variant="secondary"
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
                  {/* <img
                    className="search_icon"
                    src="/images/search_icon.png"
                    alt=""
                  /> */}
                </InputGroup>
              </div>
            </div>
          </div>
        </Tab>
        <Tab
          className="tab_style"
          eventKey="Check-in Notes"
          title="Check-in Notes"
        >
          <h2>Check-in Notes</h2>
        </Tab>
        <Tab
          className="tab_style"
          eventKey="Priorrity planner"
          title="Priorrity planner"
        >
          <h2>Priorrity planner</h2>
        </Tab>
        <Tab className="tab_style" eventKey="To-do" title="To-do">
          <h2>To-do</h2>
        </Tab>
        <Tab className="tab_style" eventKey="About thrive" title="About thrive">
          <h2>About thrive</h2>
        </Tab>
      </Tabs>
    </div>
  );
}
