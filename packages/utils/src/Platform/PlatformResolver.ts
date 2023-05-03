import { Platform } from "./Platform";

type PlatformValues<T> = { mobile: T; web: T };

export const PlatformResolver = {
  resolve: <T>(platformValues: PlatformValues<T>) => {
    if (!Platform) {
      throw new Error(
        "The platform was not properly configured, please check the configuration"
      );
    }

    return platformValues[Platform];
  },
};
