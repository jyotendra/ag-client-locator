import { YELP_API, YELP_KEY } from "./env";

export const getYelpUrl = (q?: string) => q ? `${YELP_API}?${q}` : YELP_API || "";
export const getApiKey = () => YELP_KEY;