import React from "react";
import Layout from "./src/components/layout";

export const wrapRootElement = ({ element, ...restProps }, ...args) => {
  return (
    <Layout name="wrapRootElement" props={restProps} args={args} mode="browser">
      {element}
    </Layout>
  );
};
export const wrapPageElement = ({ element, ...restProps }, ...args) => {
  return (
    // <Layout name="wrapPageElement" props={{}} args={args} mode="browser">
    <Layout name="wrapPageElement" props={restProps} args={args} mode="browser">
      {element}
    </Layout>
  );
};
