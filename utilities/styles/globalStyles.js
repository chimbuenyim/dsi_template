const { createGlobalStyle } = require("styled-components");

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box ;
    }

    body{
        font-family: "Roboto",sans-serif;
        line-height:2 ;
    }

    a,svg {
        color: unset;
        text-decoration: none;
    }

    .app__title{
        margin-bottom: 30px ;
    }

    .row-reverse{
        flex-direction: row-reverse ;
        background-color:${({ theme }) => theme.lightGreyColor} ;
    }
`;

export default GlobalStyles;
