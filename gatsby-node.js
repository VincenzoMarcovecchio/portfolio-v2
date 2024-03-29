const path = require("path");
const _ = require("lodash");
const axios = require("axios");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
        slug = `/${_.kebabCase(node.frontmatter.slug)}`;
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter);

        createNodeField({ node, name: "date", value: date.toISOString() });
      }
    }
    createNodeField({ node, name: "slug", value: slug });
  }
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(`/`)) {
    page.context.layout = "landing";
    createPage(page);
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postPage = path.resolve("src/templates/post.jsx");
  const tagPage = path.resolve("src/templates/tag.jsx");
  const categoryPage = path.resolve("src/templates/category.jsx");

  const listingPage = path.resolve("./src/templates/listing.jsx");
  const landingPage = path.resolve("./src/templates/landing.jsx");
  const singleProgram = path.resolve("./src/templates/singleProgram.jsx");
  const singleProgramTwo = path.resolve("./src/templates/singleProgramTwo.jsx");
  const stack = path.resolve("./src/templates/stack.jsx");
  const hacking = path.resolve("./src/templates/hacka.jsx");
  const Ippsec = path.resolve("./src/templates/Ippsec.jsx");

  const baseUrl = "https://hacker-news.firebaseio.com/v0/";
  const newStoriesUrl = `${baseUrl}newstories.json`;
  const storyUrl = `${baseUrl}item/`;

  // Get a full list of markdown posts
  const markdownQueryResult = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
              category
              date
            }
          }
        }
      }
    }
  `);

  const imageQueryResults = await graphql(`
    {
      allFile {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
              }
            }
            name
          }
        }
      }
    }
  `);

  if (markdownQueryResult.errors) {
    console.error(markdownQueryResult.errors);
    throw markdownQueryResult.errors;
  }
  if (imageQueryResults.errors) {
    console.error(imageQueryResults.errors);
    throw imageQueryResults.errors;
  }

  const tagSet = new Set();
  const categorySet = new Set();

  const postsEdges = markdownQueryResult.data.allMarkdownRemark.edges;
  const imageEdges = imageQueryResults.data.allFile.edges;

  // Sort posts
  postsEdges.sort((postA, postB) => {
    const dateA = moment(
      postA.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    const dateB = moment(
      postB.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    if (dateA.isBefore(dateB)) return 1;
    if (dateB.isBefore(dateA)) return -1;

    return 0;
  });

    
   // Post page creating
   postsEdges.forEach((edge, index) => {
    // Generate a list of tags
    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach((tag) => {
        tagSet.add(tag);
      });
    }

    // Generate a list of categories
    if (edge.node.frontmatter.category) {
      categorySet.add(edge.node.frontmatter.category);
    }
    
  // Paging
  const { postsPerPage } = siteConfig;
  if (postsPerPage) {
    const pageCount = Math.ceil(postsEdges.length / postsPerPage);

    [...Array(pageCount)].forEach((_val, pageNum) => {
      createPage({
        path: pageNum === 0 ? `/` : `/${pageNum + 1}/`,
        component: listingPage,
        context: {
          limit: postsPerPage,
          skip: pageNum * postsPerPage,
          pageCount,
          currentPageNum: pageNum + 1,
          tags: tagSet

        },
      });
    });
  } else {

    // Load the landing page instead
     createPage({
      path: `/`,
      component: landingPage,
      tags: tagSet
  });
 
  }



  
   // Post page creating
    postsEdges.forEach((edge, index) => {
    // Generate a list of tags
    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach((tag) => {
        tagSet.add(tag);
      });
    }

    // Generate a list of categories
    if (edge.node.frontmatter.category) {
      categorySet.add(edge.node.frontmatter.category);
    }
   
   

    // Create post pages
    const nextID = index + 1 < postsEdges.length ? index + 1 : 0;
    const prevID = index - 1 >= 0 ? index - 1 : postsEdges.length - 1;
    const nextEdge = postsEdges[nextID];
    const prevEdge = postsEdges[prevID];

    createPage({
      path: edge.node.fields.slug,
      component: postPage,
      context: {
        slug: edge.node.fields.slug,
        nexttitle: nextEdge.node.frontmatter.title,
        nextslug: nextEdge.node.fields.slug,
        prevtitle: prevEdge.node.frontmatter.title,
        prevslug: prevEdge.node.fields.slug,
        image: imageEdges,
      },
    });
    
  });

  //  Create tag pages
  tagSet.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagPage,
      context: { tag },
    });
  });

  // Create category pages
  categorySet.forEach((category) => {
    createPage({
      path: `/categories/${_.kebabCase(category)}/`,
      component: categoryPage,
      context: { category },
    });
  });

  let datacustom = await axios(
    `https://raw.githubusercontent.com/arkadiyt/bounty-targets-data/master/data/yeswehack_data.json`
  );

  datacustom.data.forEach(async (pro) => {
    await createPage({
      path: `/yeswehackdata/${pro.id}/`,
      component: singleProgram,
      context: { pro },
    });
  });
  
  function slugify(str)
{
    str = str.replace(/^\s+|\s+$/g, '');

    // Make the string lowercase
    str = str.toLowerCase();

    // Remove accents, swap ñ for n, etc
    var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
    var to   = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    // Remove invalid chars
    str = str.replace(/[^a-z0-9 -]/g, '') 
    // Collapse whitespace and replace by -
    .replace(/\s+/g, '-') 
    // Collapse dashes
    .replace(/-+/g, '-'); 

    return str.substring(1,40);
}

let postsStack = await axios(`https://api.stackexchange.com/2.3/posts?fromdate=1614556800&todate=1666742400&order=desc&sort=activity&site=stackoverflow&filter=!tM9SCgz7PT0ouoyqBgb6f4qCH5b1Lru`)
  
postsStack.data.items.forEach(async (pro) => {
  await createPage({
    path: await slugify(pro.title),
    component: stack,
    context: { pro },
  });
});



  let datacusti = await axios(
    `https://raw.githubusercontent.com/arkadiyt/bounty-targets-data/master/data/hackerone_data.json`
  );


  datacusti.data.forEach(async (pro) => {
    await createPage({
      path: `/hackeronedata/${pro.name.toLowerCase().replace(/\s+/g, "-")}/`,
      component: singleProgramTwo,
      context: { pro },
    });
  });

  return new Promise((resolve, reject) => {
    axios
      .get(
        "https://raw.githubusercontent.com/projectdiscovery/public-bugbounty-programs/master/chaos-bugbounty-list.json"
      )
      .then((result) => {
        const { data } = result;
        /**
         * creates a dynamic page with the data received
         * injects the data into the context object alongside with some options
         * to configure js-search
         */
        createPage({
          path: "/public-bugbounty-programs",
          component: path.resolve(`./src/templates/ClientSearchTemplate.jsx`),
          context: {
            bugsData: {
              allBugs: data.programs,
              options: {
                indexStrategy: "Prefix match",
                searchSanitizer: "Lower Case",
                TitleIndex: true,
                AuthorIndex: true,
                SearchByTerm: true,
              },
            },
          },
        });
        resolve();
      })
      .catch((err) => {
        console.log("====================================");
        console.log(`error creating Page:${err}`);
        console.log("====================================");
        reject(new Error(`error on page creation:\n${err}`));
      });
  });
};