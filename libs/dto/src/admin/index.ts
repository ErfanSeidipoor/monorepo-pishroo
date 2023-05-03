/* ---------------------------------- auth ---------------------------------- */

export * from "./auth/create-user.inputs";
export * from "./auth/update-user-acivation.inputs";
export * from "./auth/login.inputs";
export * from "./auth/update-user.inputs";
export * from "./auth/get-User-by-id.args";
export * from "./auth/get-users.args";
export * from "./auth/update-user-provinces.inputs";
export * from "./auth/add-image-to-user.inputs";
export * from "./auth/remove-image-from-user.inputs";

/* -------------------------------- products -------------------------------- */

export * from "./product/create-product.inputs";
export * from "./product/update-product.inputs";
export * from "./product/delete-product.inputs";
export * from "./product/update-product-acivation.inputs";
export * from "./product/add-image-to-product-.inputs";
export * from "./product/remove-image-from-product.inputs";
export * from "./product/get-product-by-id.args";
export * from "./product/get-product-property-by-id.args";
export * from "./product/get-products.args";
export * from "./product/get-product-properties.args";
export * from "./product/add-categories-to-product.inputs";
export * from "./product/remove-property-from-product.inputs";
export * from "./product/update-property-of-product.inputs";
export * from "./product/add-property-to-product.inputs";
export * from "./product/add-colors-to-product.inputs";

/* -------------------------------- categories -------------------------------- */

export * from "./category/create-category.inputs";
export * from "./category/update-category.inputs";
export * from "./category/delete-category.inputs";
export * from "./category/update-category-acivation.inputs";
export * from "./category/get-category-by-id.args";
export * from "./category/get-categories.args";

/* -------------------------------- property -------------------------------- */

export * from "./property/create-property.inputs";
export * from "./property/update-property.inputs";
export * from "./property/delete-property.inputs";
export * from "./property/update-property-acivation.inputs";
export * from "./property/get-property-by-id.args";
export * from "./property/get-properties.args";

/* ---------------------------------- color --------------------------------- */

export * from "./color/create-color.inputs";
export * from "./color/delete-color.inputs";
export * from "./color/get-color-by-id.args";
export * from "./color/get-colors.args";
export * from "./color/update-color.inputs";

/* ----------------------------- Project Preview ---------------------------- */

export * from "./productReview/create-product-review.inputs";
export * from "./productReview/delete-product-review.inputs";
export * from "./productReview/update-product-review.inputs";
export * from "./productReview/get-product-review-by-id.args";
export * from "./productReview/get-product-reviews.args";

/* -------------------------------- province -------------------------------- */

export * from "./province/create-province.inputs";
export * from "./province/delete-province.inputs";
export * from "./province/get-province-by-id.args";
export * from "./province/get-provinces.args";
export * from "./province/update-province.inputs";

/* ---------------------------------- city ---------------------------------- */

export * from "./city/create-city.inputs";
export * from "./city/delete-city.inputs";
export * from "./city/get-city-by-id.args";
export * from "./city/get-cities.args";
export * from "./city/update-city.inputs";

/* ------------------------------- transporter ------------------------------ */

export * from "./transporter/create-transporter.inputs";
export * from "./transporter/delete-transporter.inputs";
export * from "./transporter/get-transporters.args";
export * from "./transporter/get-transporter-by-id.args";
export * from "./transporter/update-transporter.inputs";
export * from "./transporter/update-transporter-acivation.inputs";
export * from "./transporter/add-image-to-transporter.inputs";
export * from "./transporter/remove-image-from-transporter.inputs";

/* ---------------------------- transporter agent -------------------------- */

export * from "./transporterAgent/create-transporter-agent.inputs";
export * from "./transporterAgent/delete-transporter-agent.inputs";
export * from "./transporterAgent/update-transporter-agent.inputs";
export * from "./transporterAgent/get-transporter-agents.args";
export * from "./transporterAgent/get-transporter-agent-by-id.args";
export * from "./transporterAgent/update-transporter-agent-acivation.inputs";

/* --------------------------------- producer ------------------------------ */

export * from "./producer/create-producer.inputs";
export * from "./producer/delete-producer.inputs";
export * from "./producer/get-producers.args";
export * from "./producer/get-producer-by-id.args";
export * from "./producer/update-producer.inputs";
export * from "./producer/update-producer-acivation.inputs";
export * from "./producer/add-image-to-producer.inputs";
export * from "./producer/remove-image-from-producer.inputs";

/* ------------------------------ producer agent --------------------------- */

export * from "./producerAgent/create-producer-agent.inputs";
export * from "./producerAgent/delete-producer-agent.inputs";
export * from "./producerAgent/update-producer-agent.inputs";
export * from "./producerAgent/get-producer-agents.args";
export * from "./producerAgent/get-producer-agent-by-id.args";
export * from "./producerAgent/update-producer-agent-acivation.inputs";

/* ---------------------------------- project ------------------------------ */

export * from "./project/create-project.inputs";
export * from "./project/delete-project.inputs";
export * from "./project/get-projects.args";
export * from "./project/get-project-by-id.args";
export * from "./project/update-project.inputs";
export * from "./project/update-project-acivation.inputs";
export * from "./project/add-image-to-project.inputs";
export * from "./project/remove-image-from-project.inputs";

/* ------------------------------ project review --------------------------- */

export * from "./projectReview/create-project-review.inputs";
export * from "./projectReview/update-project-review.inputs";
export * from "./projectReview/delete-project-review.inputs";
export * from "./projectReview/get-project-reviews.args";
export * from "./projectReview/get-project-review-by-id.args";

/* ---------------------------------- customer ----------------------------- */

export * from "./customer/create-customer.inputs";
export * from "./customer/update-customer.inputs";
export * from "./customer/delete-customer.inputs";
export * from "./customer/get-customers.args";
export * from "./customer/get-customer-by-id.args";
export * from "./customer/update-customer-acivation.inputs";

/* --------------------------------- message -------------------------------- */

export * from "./message/create-message.inputs";
export * from "./message/delete-message.inputs";
export * from "./message/get-messages.args";
export * from "./message/get-message-by-id.args";
export * from "./message/update-message.inputs";
export * from "./message/update-message-acivation.inputs";
export * from "./message/update-message-submit.inputs";

/* ---------------------------- customer message ---------------------------- */

export * from "./customerMessage/create-customer-message.inputs";
export * from "./customerMessage/delete-customer-message.inputs";

/* ---------------------------- customer action ----------------------------- */

export * from "./customerAction/create-customer-action.inputs";
export * from "./customerAction/get-customer-action-by-id.args";
export * from "./customerAction/get-customer-actions.args";
export * from "./customerAction/update-customer-action.inputs";
export * from "./customerAction/add-file-to-customer-action.inputs";

/* ---------------------------- transporter action ----------------------------- */

export * from "./transporterAction/create-transporter-action.inputs";
export * from "./transporterAction/get-transporter-action-by-id.args";
export * from "./transporterAction/get-transporter-actions.args";
export * from "./transporterAction/update-transporter-action.inputs";
export * from "./transporterAction/add-file-to-transporter-action.inputs";

/* ---------------------------- producer action ----------------------------- */

export * from "./producerAction/create-producer-action.inputs";
export * from "./producerAction/get-producer-action-by-id.args";
export * from "./producerAction/get-producer-actions.args";
export * from "./producerAction/update-producer-action.inputs";
export * from "./producerAction/add-file-to-producer-action.inputs";
