// import React from "react";
// import { useStaticQuery, graphql } from 'gatsby';

// import HomeBanner from '../HomeBanner/HomeBanner.js';
// import Portfolio from '../Portfolio/Portfolio.js';
// import Services from '../Services/Services.js';
// import Story from '../Story/Story.js';
// import Technologies from '../Technologies/Technologies.js';
// import Contact from '../Contact/Contact.js';
// import Footer from '../Footer/Footer.js';


// import SEO from '../SEO.js';


// function HomePage(props) {

//   const query = useStaticQuery(graphql`
//     query HomePageQuery ($lang : String)
//   {
//     homeBanner:allMarkdownRemark(filter : {
//       frontmatter: {
//         fileName : { regex: "/HOME_TITLE\\b/" }
//         lang : { eq: $lang }} 
//     } ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             position
//             buttonTextCTA
//           }

//           html
//         }
//       }
//     }

//   }
// `,
// { "lang" : props.lang });


//   return(

//     <div>

//     <SEO lang={props.lang} title={query.homeBanner.edges[0].node.frontmatter.title} />
		
// 		<HomeBanner context={{
// 					title:query.homeBanner.edges[0].node.frontmatter.title,
// 					position:query.homeBanner.edges[0].node.frontmatter.position,
// 					buttonText:query.homeBanner.edges[0].node.frontmatter.buttonTextHomeBanner,
// 					html:query.homeBanner.edges[0].node.html
// 				}} 
// 		/>

// 		<Portfolio lang={props.lang} />

// 		<Services lang={props.lang} />

// 		<Story lang={props.lang} />

// 		<Technologies lang={props.lang} />

// 		<Contact lang={props.lang} />

// 		<Footer lang={props.lang} />

// 	</div>
  
//   )
// };


// export default HomePage;