import React, {useState} from "react";
import FoundationArray from "./InfoArrays/FundacionArray";
import LocalArray from "./InfoArrays/LocalArray";
import OrganizationArray from "./InfoArrays/OrganizationArray";
import ButtonsHelpInfo from "./ButtonsHelpInfo";
import Pagination from "./Pagination";

const ButtonsHelp = () => {
    const sections = {
        foundation: {
            desc: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy." +
                "Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
            items: FoundationArray
        },
        organization: {
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            items: OrganizationArray
        },
        local: {
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            items: LocalArray
        }
    };
    const [currentSection, setCurrentSection] = useState(sections.foundation);
    const [currentPage, setCurrentPage] = useState(1);

    const postPerSlide = 3;
    const currentSlides = currentSection.items.splice(postPerSlide * currentPage - postPerSlide, postPerSlide  * currentPage)
    const handleClick = key => setCurrentSection(sections[key]);

    const handlePaginate = numberOfPage => setCurrentPage(numberOfPage);
    console.log(currentSlides)



  return (
      <>
          <div className="article-buttons-change">
              <button onClick={() => handleClick('foundation')} className="art-button-change">Fundacjom </button>
              <button onClick={() => handleClick('organization')}  className="art-button-change">Organizacjom pozarządowym </button>
              <button onClick={() => handleClick('local')} className="art-button-change">Lokalnym zbiórkom</button>
          </div>
          <h2 className="container article-head">
              <p>{currentSection.desc}</p>
          </h2>
          {/*<ul>*/}
          {/*    {currentSlides.map(*/}
          {/*        ({title, info, things, ID}) => (<ButtonsHelpInfo*/}
          {/*            key={ID}*/}
          {/*            title={title}*/}
          {/*            info={info}*/}
          {/*            things={things}*/}
          {/*        >*/}
          {/*        </ButtonsHelpInfo>))}*/}
          {/*</ul>*/}
          <Pagination postPerSlide={postPerSlide} slides={currentSection.items} onPaginate={handlePaginate}/>
      </>
  )

};
export default ButtonsHelp;