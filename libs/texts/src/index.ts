const TEXTS = {
  /* --------------------------------- general -------------------------------- */
  USERNAME: "Username",
  FIRSTNAME: "First name",
  LASTNAME: "Last name",
  PASSWORD: "Password",
  PRODUCT: "Product",
  DASHBOARD: "Dashboard",
  USER: "User",
  NAME: "Name",
  UNIT: "Unit",
  EMAIL: "Email",
  PHONE: "Phone",
  OFFICE_PHONE: "Office Phone",
  USERNMAE: "Username",
  SLUG: "Slug",
  TEXT: "Text",
  ADDRESS: "Address",
  DESCRIPTION: "Description",
  LATITUDE: "Latitude",
  LONGITUDE: "Longitude",
  ACTIVATION: "ACTIVATION",
  FILTER: "Filter",
  CLEAR_ALL: "Clear All",
  CREATE: "Create",
  UPDATE: "Update",
  VALUE: "Value",
  IS_ACTIVE: "Is Active",
  ROLE: "Role",
  ACTIONS: "Actions",
  DEACTIVE: "Deactive",
  DELETE: "Delete",
  ACTIVE: "Active",
  CONFIRM: "Confirm",
  CANCEL: "Cancel",
  IMAGES: "Images",
  PROVINCE: "Province",
  PROVINCES: "Provinces",
  CITY: "City",
  SEARCH: "Search",
  JOB_TITLE: "Job Title",
  CUSTOMER: "Customer",
  TRANSPORTER: "Transporter",
  TRANSPORTER_AGENT: "Transporter Agent",
  PRODUCER: "Producer",
  PRODUCER_AGENT: "Producer Agent",
  PROJECT: "Project",
  PROJECT_REVIEW: "Project Review",
  PRODUCT_REVIEW: "Product Review",
  PRODUCT_PROPERTY: "Product property",
  REVIEWER: "Reviewer",
  CATEGORY: "Category",
  PROPERTY: "Property",
  PARTNER: "Partner",
  PARTNERS: "Partners",
  CERTIFICATES: "Certificates",
  COLORS: "Colors",
  CATEGORIES: "Categories",
  MESSAGE: "Message",
  ABOUT_US: "About Us",
  CONTACT_US: "Contact Us",
  IS_SUBMITED: "Is Submited",
  DEACTIVE_WARNING_MESSAGE: "Are You Sure to Deactive ?",
  DELETE_WARNING_MESSAGE: "Are You Sure to Delete ?",
  ACTIVE_WARNING_MESSAGE: "Are You Sure to Active ?",

  /* ----------------------------- image compoent ----------------------------- */
  COMPONENT_IMAGE_REMOVED_SUCCESS: "Image removed Succesfully!",

  /* ---------------------------------- login --------------------------------- */
  PAGE_LOGIN__PAGE_TTTLE: "Login | Pishroo ",
  PAGE_LOGIN__WELCOME_BACK: "Hi, Welcome Back",
  PAGE_LOGIN__SIGN_IN: "Sign in to Pishroo",
  PAGE_LOGIN__LOGIN: "Login",
  PAGE_LOGIN__WELCOME: "Welcome",

  /* -------------------------------- Not Found ------------------------------- */
  PAGE_NOT_FOUND__PAGE_TTTLE: " 404 Page Not Found | Pishroo ",
  PAGE_NOT_FOUND__TITLE: "Sorry, page not found!",
  PAGE_NOT_FOUND__DESCRIPTION:
    "Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve  mistyped the URL? Be sure to check your spelling.",
  PAGE_NOT_FOUND__GO_TO_HOME: "Go to Home",

  /* -------------------------------- main page ------------------------------- */
  PAGE_MAIN__PAGE_TTTLE: " Pishroo ",
  PAGE_MAIN__TITLE: "Welcome to Pishroo Admin Panel",
  PAGE_NOT_FOUND__GO_TO_LOGIN_PAGE: "Go to Login",

  /* ---------------------------- dashboard layout ---------------------------- */
  DASHBOARD_LAYOUT__LOGOUT: "Logout",
  DASHBOARD_LAYOUT__HOME: "Home",
  DASHBOARD_LAYOUT__PROFILE: "profile",
  DASHBOARD_LAYOUT__SETTING: "Setting",

  /* --------------------------------- product -------------------------------- */
  PAGE_PRODUCT__PAGE_TITLE: "Prdoduct | Pishroo",
  PAGE_PRODUCT__PRODUCT: "Prdoduct",
  PAGE_PRODUCT__NEW_PRODUCT: "New Prdoduct",

  /* ------------------------------- new product ------------------------------ */
  PAGE_NEW_PRODUCT__PAGE_TITLE: "New Prdoduct | Pishroo",
  PAGE_NEW_PRODUCT__NEW_PRODUCT: "New Prdoduct",
  PAGE_NEW_PRODUCT__SUCCESS: "Product Created Successfully!",

  /* ----------------------------- product details ---------------------------- */
  PAGE_PRODUCT_UPDATE__PAGE_TITLE: "Prdoduct Details | Pishroo",
  PAGE_PRODUCT_UPDATE__UPDATE_PRODUCT: "Update Product",
  PAGE_PRODUCT_UPDATE__SUCCESS: "Product Updated Successfully!",

  /* ---------------------------------- user ---------------------------------- */
  PAGE_USER__PAGE_TITLE: "User | Pishroo",
  PAGE_USER__USER: "User",
  PAGE_USER__NEW_USER: "New User",

  /* -------------------------------- new user -------------------------------- */
  PAGE_NEW_USER__PAGE_TITLE: "New User | Pishroo",
  PAGE_NEW_USER__NEW_USER: "New User",
  PAGE_NEW_USER__SUCCESS: "User Created Successfully!",

  /* ------------------------------ user details ------------------------------ */
  PAGE_USER_UPDATE__PAGE_TITLE: "User Details | Pishroo",
  PAGE_USER_UPDATE__UPDATE_USER: "Update User",
  PAGE_USER_UPDATE__SUCCESS: "User Updated Successfully!",

  /* -------------------------------- province -------------------------------- */

  PAGE_PROVINCE__PAGE_TITLE: "Province | Pishroo",
  PAGE_PROVINCE__PROVINCE: "Province",
  PAGE_PROVINCE__NEW_PROVINCE: "New Province",

  /* ------------------------------- new province ------------------------------ */
  PAGE_NEW_PROVINCE__PAGE_TITLE: "New Province | Pishroo",
  PAGE_NEW_PROVINCE__NEW_PROVINCE: "New Province",
  PAGE_NEW_PROVINCE__SUCCESS: "Province Created Successfully!",

  /* --------------------------- province details ----------------------------- */
  PAGE_PROVINCE_UPDATE__PAGE_TITLE: "Province Details | Pishroo",
  PAGE_PROVINCE_UPDATE__UPDATE_PROVINCE: "Update Province",
  PAGE_PROVINCE_UPDATE__SUCCESS: "Province Updated Successfully!",

  /* ---------------------------------- city ---------------------------------- */

  PAGE_CITY__PAGE_TITLE: "City | Pishroo",
  PAGE_CITY__CITY: "City",
  PAGE_CITY__NEW_CITY: "New City",

  /* -------------------------------- new city -------------------------------- */
  PAGE_NEW_CITY__PAGE_TITLE: "New City | Pishroo",
  PAGE_NEW_CITY__NEW_CITY: "New City",
  PAGE_NEW_CITY__SUCCESS: "City Created Successfully!",

  /* ------------------------------ city details ------------------------------ */

  PAGE_CITY_UPDATE__PAGE_TITLE: "City Details | Pishroo",
  PAGE_CITY_UPDATE__UPDATE_CITY: "Update City",
  PAGE_CITY_UPDATE__SUCCESS: "City Updated Successfully!",

  /* -------------------------------- customer -------------------------------- */

  PAGE_CUSTOMER__PAGE_TITLE: "Customer | Pishroo",
  PAGE_CUSTOMER__CUSTOMER: "Customer",
  PAGE_CUSTOMER__NEW_CUSTOMER: "New Customer",

  /* -----------------------------  customer new  ---------------------------- */

  PAGE_NEW_CUSTOMER__PAGE_TITLE: "New Customer | Pishroo",
  PAGE_NEW_CUSTOMER__NEW_CUSTOMER: "New Customer",
  PAGE_NEW_CUSTOMER__SUCCESS: "Customer Created Successfully!",

  /* ----------------------------- customer update ---------------------------- */

  PAGE_CUSTOMER_UPDATE__PAGE_TITLE: "Customer Details | Pishroo",
  PAGE_CUSTOMER_UPDATE__UPDATE_CUSTOMER: "Update Customer",
  PAGE_CUSTOMER_UPDATE__SUCCESS: "Customer Updated Successfully!",

  /* ------------------------------- transporter ------------------------------ */

  PAGE_TRANSPORTER__PAGE_TITLE: "Transporter | Pishroo",
  PAGE_TRANSPORTER__TRANSPORTER: "Transporter",
  PAGE_TRANSPORTER__NEW_TRANSPORTER: "New Transporter",

  /* ----------------------------- transporter new ---------------------------- */

  PAGE_NEW_TRANSPORTER__PAGE_TITLE: "New Transporter | Pishroo",
  PAGE_NEW_TRANSPORTER__NEW_TRANSPORTER: "New Transporter",
  PAGE_NEW_TRANSPORTER__SUCCESS: "Transporter Created Successfully!",

  /* --------------------------- transporter update --------------------------- */

  PAGE_TRANSPORTER_UPDATE__PAGE_TITLE: "Transporter Details | Pishroo",
  PAGE_TRANSPORTER_UPDATE__UPDATE_TRANSPORTER: "Update Transporter",
  PAGE_TRANSPORTER_UPDATE__SUCCESS: "Transporter Updated Successfully!",

  /* ---------------------------- transporter agent --------------------------- */

  PAGE_TRANSPORTER_AGENT__PAGE_TITLE: "Transporter Agent | Pishroo",
  PAGE_TRANSPORTER_AGENT__TRANSPORTER_AGENT: "Transporter Agent",
  PAGE_TRANSPORTER_AGENT__NEW_TRANSPORTER_AGENT: "New Transporter Agent",

  /* -------------------------- transporter agent new ------------------------- */

  PAGE_NEW_TRANSPORTER_AGENT__PAGE_TITLE: "New Transporter Agent | Pishroo",
  PAGE_NEW_TRANSPORTER_AGENT__NEW_TRANSPORTER_AGENT: "New Transporter Agent",
  PAGE_NEW_TRANSPORTER_AGENT__SUCCESS:
    "Transporter Agent Created Successfully!",

  /* ------------------------ transporter agent update ------------------------ */

  PAGE_TRANSPORTER_AGENT_UPDATE__PAGE_TITLE:
    "Transporter Agent Details | Pishroo",
  PAGE_TRANSPORTER_AGENT_UPDATE__UPDATE_TRANSPORTER_AGENT:
    "Update Transporter Agent",
  PAGE_TRANSPORTER_AGENT_UPDATE__SUCCESS:
    "Transporter Agent Updated Successfully!",

  /* -------------------------------- producer -------------------------------- */

  PAGE_PRODUCER__PAGE_TITLE: "Producer | Pishroo",
  PAGE_PRODUCER__PRODUCER: "Producer",
  PAGE_PRODUCER__NEW_PRODUCER: "New Producer",

  /* ------------------------------ producer new ------------------------------ */

  PAGE_NEW_PRODUCER__PAGE_TITLE: "New Producer | Pishroo",
  PAGE_NEW_PRODUCER__NEW_PRODUCER: "New Producer",
  PAGE_NEW_PRODUCER__SUCCESS: "Producer Created Successfully!",

  /* ----------------------------- producer update ---------------------------- */

  PAGE_PRODUCER_UPDATE__PAGE_TITLE: "Producer Details | Pishroo",
  PAGE_PRODUCER_UPDATE__UPDATE_PRODUCER: "Update Producer",
  PAGE_PRODUCER_UPDATE__SUCCESS: "Producer Updated Successfully!",

  /* ----------------------------- producer agent ----------------------------- */

  PAGE_PRODUCER_AGENT__PAGE_TITLE: "Producer Agent | Pishroo",
  PAGE_PRODUCER_AGENT__PRODUCER_AGENT: "Producer Agent",
  PAGE_PRODUCER_AGENT__NEW_PRODUCER_AGENT: "New Producer Agent",

  /* --------------------------- producer agent new --------------------------- */

  PAGE_NEW_PRODUCER_AGENT__PAGE_TITLE: "New Producer Agent | Pishroo",
  PAGE_NEW_PRODUCER_AGENT__NEW_PRODUCER_AGENT: "New Producer Agent",
  PAGE_NEW_PRODUCER_AGENT__SUCCESS: "Producer Agent Created Successfully!",

  /* -------------------------- producer agent update ------------------------- */

  PAGE_PRODUCER_AGENT_UPDATE__PAGE_TITLE: "Producer Agent Details | Pishroo",
  PAGE_PRODUCER_AGENT_UPDATE__UPDATE_PRODUCER_AGENT: "Update Producer Agent",
  PAGE_PRODUCER_AGENT_UPDATE__SUCCESS: "Producer Agent Updated Successfully!",

  /* --------------------------------- project -------------------------------- */

  PAGE_PROJECT__PAGE_TITLE: "Project | Pishroo",
  PAGE_PROJECT__PROJECT: "Project",
  PAGE_PROJECT__NEW_PROJECT: "New Project",

  /* ------------------------------- new project ------------------------------ */

  PAGE_NEW_PROJECT__PAGE_TITLE: "New Project | Pishroo",
  PAGE_NEW_PROJECT__NEW_PROJECT: "New Project",
  PAGE_NEW_PROJECT__SUCCESS: "Product Created Successfully!",

  /* ----------------------------- project details ---------------------------- */

  PAGE_PROJECT_UPDATE__PAGE_TITLE: "Project Details | Pishroo",
  PAGE_PROJECT_UPDATE__UPDATE_PROJECT: "Update Project",
  PAGE_PROJECT_UPDATE__SUCCESS: "Project Updated Successfully!",

  /* ----------------------------- project review ----------------------------- */

  PAGE_PROJECT_REVIEW__PAGE_TITLE: "Project Review | Pishroo",
  PAGE_PROJECT_REVIEW__PROJECT_REVIEW: "Project Review ",
  PAGE_PROJECT_REVIEW__NEW_PROJECT_REVIEW: "New Project Review ",

  /* --------------------------- new project review --------------------------- */

  PAGE_NEW_PROJECT_REVIEW__PAGE_TITLE: "New Project Review  | Pishroo",
  PAGE_NEW_PROJECT_REVIEW__NEW_PROJECT_REVIEW: "New Project Review ",
  PAGE_NEW_PROJECT_REVIEW__SUCCESS: "Project Review  Created Successfully!",

  /* ------------------------- project review details ------------------------- */

  PAGE_PROJECT_REVIEW_UPDATE__PAGE_TITLE: "Project Review  Details | Pishroo",
  PAGE_PROJECT_REVIEW_UPDATE__UPDATE_PROJECT_REVIEW: "Update Project Review ",
  PAGE_PROJECT_REVIEW_UPDATE__SUCCESS: "Project Review Updated Successfully!",

  /* ----------------------------- product review ----------------------------- */

  PAGE_PRODUCT_REVIEW__PAGE_TITLE: "Product Review | Pishroo",
  PAGE_PRODUCT_REVIEW__PRODUCT_REVIEW: "Product Review ",
  PAGE_PRODUCT_REVIEW__NEW_PRODUCT_REVIEW: "New Product Review ",

  /* --------------------------- new product review --------------------------- */

  PAGE_NEW_PRODUCT_REVIEW__PAGE_TITLE: "New Product Review  | Pishroo",
  PAGE_NEW_PRODUCT_REVIEW__NEW_PRODUCT_REVIEW: "New Product Review ",
  PAGE_NEW_PRODUCT_REVIEW__SUCCESS: "Product Review  Created Successfully!",

  /* ------------------------- product review details ------------------------- */

  PAGE_PRODUCT_REVIEW_UPDATE__PAGE_TITLE: "Product Review  Details | Pishroo",
  PAGE_PRODUCT_REVIEW_UPDATE__UPDATE_PRODUCT_REVIEW: "Update Product Review ",
  PAGE_PRODUCT_REVIEW_UPDATE__SUCCESS: "Product Review Updated Successfully!",

  /* --------------------------- product property --------------------------- */

  PAGE_PRODUCT_PROPERTY__PAGE_TITLE: "Product Property | Pishroo",
  PAGE_PRODUCT_PROPERTY__PRODUCT_PROPERTY: "Product Property ",
  PAGE_PRODUCT_PROPERTY__NEW_PRODUCT_PROPERTY: "New Product Property ",

  /* -------------------------- new product property ------------------------- */

  PAGE_NEW_PRODUCT_PROPERTY__PAGE_TITLE: "New Product Property  | Pishroo",
  PAGE_NEW_PRODUCT_PROPERTY__NEW_PRODUCT_PROPERTY: "New Product Property ",
  PAGE_NEW_PRODUCT_PROPERTY__SUCCESS: "Product Property  Created Successfully!",

  /* ------------------------- product property details ---------------------- */

  PAGE_PRODUCT_PROPERTY_UPDATE__PAGE_TITLE:
    "Product Property  Details | Pishroo",
  PAGE_PRODUCT_PROPERTY_UPDATE__UPDATE_PRODUCT_PROPERTY:
    "Update Product Property ",
  PAGE_PRODUCT_PROPERTY_UPDATE__SUCCESS:
    "Product Property Updated Successfully!",

  /* -------------------------------- category -------------------------------- */

  PAGE_CATEGORY__PAGE_TITLE: "Category | Pishroo",
  PAGE_CATEGORY__CATEGORY: "Category ",
  PAGE_CATEGORY__NEW_CATEGORY: "New Category ",

  /* ------------------------------ new category ------------------------------ */

  PAGE_NEW_CATEGORY__PAGE_TITLE: "New Category | Pishroo",
  PAGE_NEW_CATEGORY__NEW_CATEGORY: "New Category ",
  PAGE_NEW_CATEGORY__SUCCESS: "Category  Created Successfully!",

  /* ---------------------------- category details ---------------------------- */

  PAGE_CATEGORY_UPDATE__PAGE_TITLE: "Category Details | Pishroo",
  PAGE_CATEGORY_UPDATE__UPDATE_CATEGORY: "Update Category ",
  PAGE_CATEGORY_UPDATE__SUCCESS: "Category Updated Successfully!",

  /* -------------------------------- property -------------------------------- */

  PAGE_PROPERTY__PAGE_TITLE: "Property | Pishroo",
  PAGE_PROPERTY__PROPERTY: "Property ",
  PAGE_PROPERTY__NEW_PROPERTY: "New Property ",

  /* ------------------------------ new property ------------------------------ */

  PAGE_NEW_PROPERTY__PAGE_TITLE: "New Property | Pishroo",
  PAGE_NEW_PROPERTY__NEW_PROPERTY: "New Property ",
  PAGE_NEW_PROPERTY__SUCCESS: "Property  Created Successfully!",

  /* ---------------------------- property details ---------------------------- */

  PAGE_PROPERTY_UPDATE__PAGE_TITLE: "Property Details | Pishroo",
  PAGE_PROPERTY_UPDATE__UPDATE_PROPERTY: "Update Property ",
  PAGE_PROPERTY_UPDATE__SUCCESS: "Property Updated Successfully!",

  /* -------------------------------- message -------------------------------- */

  PAGE_MESSAGE__PAGE_TITLE: "Message | Pishroo",
  PAGE_MESSAGE__MESSAGE: "Message ",
  PAGE_MESSAGE__NEW_MESSAGE: "New Message ",

  /* ------------------------------ new message ------------------------------ */

  PAGE_NEW_MESSAGE__PAGE_TITLE: "New Message | Pishroo",
  PAGE_NEW_MESSAGE__NEW_MESSAGE: "New Message ",
  PAGE_NEW_MESSAGE__SUCCESS: "Message  Created Successfully!",

  /* ---------------------------- message details ---------------------------- */

  PAGE_MESSAGE_UPDATE__PAGE_TITLE: "Message Details | Pishroo",
  PAGE_MESSAGE_UPDATE__UPDATE_MESSAGE: "Update Message ",
  PAGE_MESSAGE_UPDATE__SUCCESS: "Message Updated Successfully!",

  /* -------------------------------------------------------------------------- */
  /*                                   Website                                  */
  /* -------------------------------------------------------------------------- */

  /* --------------------------------- layout --------------------------------- */

  WEBSITE_PAGE__LAYOUT__PHONE: "+9893423",
  WEBSITE_PAGE__LAYOUT__LINKS: "Links",
  WEBSITE_PAGE__LAYOUT__SOCIAL_MEDIA: "SocialMedia",
  WEBSITE_PAGE__LAYOUT__SLOGAN: "Beautiful City For All",
  WEBSITE_PAGE__LAYOUT__COPYRIGHT: "©2023 Pishroo. All rights reserved.",
  WEBSITE_PAGE__LAYOUT__INSTAGRAM: "@erfan.seidipoor",
  WEBSITE_PAGE__LAYOUT__WHATSAPP: "+989366996916",
  WEBSITE_PAGE__LAYOUT__EMAIL: "erfan.seidipoor@gmail.com",
  WEBSITE_PAGE__LAYOUT__TELEGRAM: "+989366996916",

  /* -------------------------------- home page ------------------------------- */

  WEBSITE_PAGE__HOME__PAGE_TITLE: "Pishroo",
  WEBSITE_PAGE__HOME__DESCRIPTIOIN__TITLE: "Pishroo",
  WEBSITE_PAGE__HOME__DESCRIPTIOIN__DESCRIPTION:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciuntr",
  WEBSITE_PAGE__HOME__DESCRIPTIOIN__PRODUCT: "Product",
  WEBSITE_PAGE__HOME__DESCRIPTIOIN__SEARCH: "Search",
  WEBSITE_PAGE__HOME__SEARCHBOX__PLACEHOLDER: "Please Search",
  WEBSITE_PAGE__HOME__PRODUCTS__TITLE: "Products",
  WEBSITE_PAGE__HOME__PROJECTS__TITLE: "Projects",
  WEBSITE_PAGE__HOME__PARTNERS__TITLE: "Partners",
  WEBSITE_PAGE__HOME__CERTIFICATES__TITLE: "Certificates",
  WEBSITE_PAGE__HOME__NEWSLETTER__DESCRIPTION:
    "totam rem aperiam, eaque ipsa quae ab illo inventore",
  WEBSITE_PAGE__HOME__NEWSLETTER__EMAIL_PLACEHOLDER: "Email",
  WEBSITE_PAGE__HOME__NEWSLETTER__EMAIL_LET_ME_KNOW: "Let me know",

  /* -------------------------------- About Us page ------------------------------- */

  WEBSITE_PAGE__ABOUT_US__PAGE_TITLE: "About Us | Pishroo",
  WEBSITE_PAGE__ABOUT_US__DESCRIPTIOIN__TITLE: "About Us",
  WEBSITE_PAGE__ABOUT_US__DESCRIPTIOIN__DESCRIPTION:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
  WEBSITE_PAGE__ABOUT_US__CEO__TITLE: "CEO",
  WEBSITE_PAGE__ABOUT_US__CEO__NAME: "Erfan Seidipoor",
  WEBSITE_PAGE__ABOUT_US__CEO__DESCRIPTION:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",

  WEBSITE_PAGE__ABOUT_US__FAQ__TITLE: "FAQ",
  WEBSITE_PAGE__ABOUT_US__FAQ__ITEM_1_QUESTION:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
  WEBSITE_PAGE__ABOUT_US__FAQ__ITEM_1_ANSWER:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  WEBSITE_PAGE__ABOUT_US__FAQ__ITEM_2_QUESTION:
    "Dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam?",
  WEBSITE_PAGE__ABOUT_US__FAQ__ITEM_2_ANSWER:
    "Pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
  WEBSITE_PAGE__ABOUT_US__FAQ__ITEM_3_QUESTION:
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium?",
  WEBSITE_PAGE__ABOUT_US__FAQ__ITEM_3_ANSWER:
    "They cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. ",

  /* ------------------------------- Contact Us ------------------------------- */

  WEBSITE_PAGE__CONTACT_US__PAGE_TITLE: "Contact Us | Pishroo",
  WEBSITE_PAGE__CONTACT_US__DESCRIPTIOIN__TITLE: "Contact Us",
  WEBSITE_PAGE__CONTACT_US__DESCRIPTIOIN__DESCRIPTION:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  WEBSITE_PAGE__CONTACT_US__SALEEXPERTS__TITLE: "Sale Experts",
  WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__PHONE_TITLE: "Phone Number:",
  WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__PHONE_VALUE: "1-983-443-9740 x192",
  WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__MANAGER_PHONE_TITLE:
    "Manager Phone Number:",
  WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__MANAGER_PHONE_VALUE:
    "1-983-443-9740 x192",
  WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__FAX_TITLE: "FAX:",
  WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__FAX_VALUE: "1-710-566-7008 x062",
  WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__EMAIL_TITLE: "Email:",
  WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__EMAIL_VALUE:
    "erfan.seidipoor@gmail.com",
  WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__ADDRESS_TITLE: "Address:",
  WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__ADDRESS_VALUE:
    "They cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through ",
  WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__LOCATION_TITLE: "Location:",

  /* -------------------------------- product page ------------------------------- */

  WEBSITE_PAGE__PRODUCT__PAGE_TITLE: "Product | Pishroo",
  WEBSITE_PAGE__PRODUCT__DESCRIPTIOIN__SEARCH: "Search",
  WEBSITE_PAGE__PRODUCT__SEARCHBOX__PLACEHOLDER: "Please Search",

  /* -------------------------- product details page -------------------------- */

  WEBSITE_PAGE__PRODUCT_DETAILS__PAGE_TITLE: "Product | Pishroo",
  WEBSITE_PAGE__PRODUCT_DETAILS__GENERAL__COLOR: "Color:",
  WEBSITE_PAGE__PRODUCT_DETAILS__GENERAL__DETAILS: "Details:",
  WEBSITE_PAGE__PRODUCT_DETAILS__GENERAL__CONTACT_DESCRIPTION:
    "Call for price and availability",
  WEBSITE_PAGE__PRODUCT_DETAILS__GENERAL__CONTACT_PHONE: "98654",
  WEBSITE_PAGE__PRODUCT_DETAILS__PRODUCTS__TITLE: "Similar products",
  WEBSITE_PAGE__PRODUCT_DETAILS__DESCRIPTIOIN__TITLE: "Description",
  WEBSITE_PAGE__PRODUCT_DETAILS__PRPERTIES__TITLE: "Properties:",
  WEBSITE_PAGE__PRODUCT_DETAILS__REVIEWS__TITLE: "Reviews",
  WEBSITE_PAGE__PRODUCT_DETAILS__PROJECTS__TITLE: "Projects",
  WEBSITE_PAGE__PRODUCT_DETAILS__MORE__TITLE: "Search Product",

  /* ------------------------------ project page ------------------------------ */

  WEBSITE_PAGE__PROJECT__PAGE_TITLE: "Project | Pishroo",
  WEBSITE_PAGE__PROJECT__DESCRIPTIOIN__SEARCH: "Search",
  WEBSITE_PAGE__PROJECT__SEARCHBOX__PLACEHOLDER: "Please Search",

  /* -------------------------- product details page -------------------------- */

  WEBSITE_PAGE__PROJECT_DETAILS__GENERAL__CONTACT_DESCRIPTION:
    "Call for price and availability",
  WEBSITE_PAGE__PROJECT_DETAILS__GENERAL__CONTACT_PHONE: "98654",
  WEBSITE_PAGE__PROJECT_DETAILS__PAGE_TITLE: "Project | Pishroo",
  WEBSITE_PAGE__PROJECT_DETAILS__DESCRIPTIOIN__TITLE: "Description",

  WEBSITE_PAGE__PROJECT_DETAILS__MORE__TITLE: "Search Project",
  WEBSITE_PAGE__PROJECT_DETAILS__PRODUCTS__TITLE: "Products",
  WEBSITE_PAGE__PROJECT_DETAILS__PROJECTS__TITLE: "Similar Project",

  /* -------------------------------- Not Found page -------------------------- */

  WEBSITE_PAGE__NOT_FOUND__PAGE_TITLE: "404 | Pishroo",
  WEBSITE_PAGE__NOT_FOUND__MAIN_TITLE: "Not Found",
  WEBSITE_PAGE__NOT_FOUND__MAIN_HOME: "Home",

  /* -------------------------------- App Login ------------------------------- */

  APP_SCREEN_LOGIN_LOGIN: "Login",
  APP_SCREEN_LOGIN__SUCCESS: "Welcome!",
  APP_SCREEN_LOGIN__LOGIN: "Login",

  /* ---------------------------------- App Logout ---------------------------- */

  APP_SCREEN_LOGOUT__CONFIRMATION: "Are You Sure Want to Logout?",
  APP_SCREEN_LOGOUT__LOGOUT: "Logout",
  APP_SCREEN_LOGOUT__SUCCESS: "Logout Successfully!",

  /* ------------------------------- App Profile ------------------------------ */
};

export default TEXTS;
