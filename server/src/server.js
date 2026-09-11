import { app } from "./app.js";
import { config } from "./config/env.js";

const server = app.listen(config.port, () => {
  console.log(`[Airbnb Clone API] Server running on port ${config.port} in ${config.nodeEnv} mode`);
  console.log(`[Health] http://localhost:${config.port}/health`);
  console.log(`[Listings API] http://localhost:${config.port}/api/v1/listings/listing-candolim-mirashya-ug10`);
});

export default server;
