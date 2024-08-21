import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

interface RtlProps {
  children: React.ReactNode;
}

const Rtl: React.FC<RtlProps> = (props) => {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
};

export default Rtl;
