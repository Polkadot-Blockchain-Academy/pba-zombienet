import {start} from "@zombienet/orchestrator";
import { readNetworkConfig } from "@zombienet/utils";

const ZOMBIENET_CREDENTIALS = "";

// can be toml or json
const launchConfig = readNetworkConfig("../examples/0001-small-network.toml");
// override config to use native provider
launchConfig.settings = { provider: "native" };

( async () => {
    const network = await start(ZOMBIENET_CREDENTIALS, launchConfig, {
        spawnConcurrency: 5,
    });

    // write your own test, `network` will have all the network info
   console.log(network);
})();
