import { Flex } from "antd";
import { MagnifyingGlass } from "react-loader-spinner";

const Loader = () => {
  return (
    <Flex
      justify="center"
      align="center"
      style={{ minHeight: "calc(100vh - 300px)" }}
    >
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </Flex>
  );
};

export default Loader;
