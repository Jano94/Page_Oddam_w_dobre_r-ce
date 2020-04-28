import FoundationArray from "./InfoArrays/FundacionArray";
import LocalArray from "./InfoArrays/LocalArray";
import OrganizationArray from "./InfoArrays/OrganizationArray";

export const sections = {
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