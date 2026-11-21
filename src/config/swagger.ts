import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.2",
    tags: [
      {
        name: "Products",
        description: "API operations related to products",
      },
    ],
    info: {
      title: "REST API prodhub_backend",
      version: "1.0.0",
      description: "API Docs for Products",
    },
  },
  apis: ["./src/router.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerUiOptions: SwaggerUiOptions = {
  customCss: `
    html.dark-mode .swagger-ui {
      background: #18181b !important;
    }
    .swagger-ui .topbar {
      background-color: #000000 !important;
      padding: 10px 0 !important;
    }
    .swagger-ui .topbar .topbar-wrapper .link {
      content: url('/prodhub.png');
      flex: 0 0 auto !important;
      width: 48px !important;
      max-width: 48px !important;
      height: 48px !important;
      border-radius: 50%;
    }
    .swagger-ui .topbar .download-url-wrapper {
      display: none !important;
    }
  `,
  customfavIcon: "/prodhub.ico",
  customSiteTitle: "ProdHub REST API Documentation",
};
export default swaggerSpec;
export { swaggerUiOptions };
