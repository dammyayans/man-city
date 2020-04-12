import React, { Component } from "react";
import Stripes from "../../../Resources/images/stripes.png";
import { Tag } from "../../ui/misc";
import Reveal from "react-reveal/Reveal";
import HomeCards from "./Cards";
class MeetPlayers extends Component {
  state = {
    show: false,
  };
  render() {
    return (
      <Reveal fraction={0.7} onReveal={() => this.setState({ show: true })}>
        <div
          className="home_meetplayers"
          style={{ background: `#fff url(${Stripes})` }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <HomeCards show={this.state.show} />
              </div>
              <div className="home_text_wrapper">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Tag
                    bck="#0e1731"
                    size="6rem"
                    color="#ffffff"
                    add={{
                      marginBottom: "20px",
                    }}
                  >
                    Meet
                  </Tag>
                  <Tag
                    bck="#0e1731"
                    size="6rem"
                    color="#ffffff"
                    add={{
                      marginBottom: "20px",
                    }}
                  >
                    The
                  </Tag>
                  <Tag
                    bck="#0e1731"
                    size="6rem"
                    color="#ffffff"
                    add={{
                      marginBottom: "20px",
                    }}
                  >
                    Players
                  </Tag>
                  <div>
                    <Tag
                      bck="#ffffff"
                      size="24px"
                      add={{
                        display: "inline-block",
                        marginBottom: "27px",
                        border: "1px solid #0e1731",
                      }}
                      color="#0e1731"
                      links={true}
                      linkto="/the_team"
                    >
                      Meet them here
                    </Tag>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default MeetPlayers;
