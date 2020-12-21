let template = require("./example-with-partials.handlebars");
import renderHTML from 'react-render-html';

export const PartialsExample = ({persons}) => {
    return renderHTML(template({ persons: persons }));
}
