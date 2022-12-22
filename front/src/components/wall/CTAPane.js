import * as React from "react";

import FormLabel from "../uielements/form/FormLabel";
import FormInput from "../uielements/form/FormInput";
import FormGrid from "../uielements/form/FormGrid";

const CTAPane = ({ ctaTitle, ctaUrl, setCtaTitle, setCtaUrl }) => {
  return (
    <>
      <FormGrid>
        <FormLabel>CTA Title</FormLabel>
        <FormInput
          value={ctaTitle}
          onChange={(e) => {
            setCtaTitle(e.target.value);
          }}
        ></FormInput>
      </FormGrid>
      <FormGrid>
        <FormLabel>CTA URL</FormLabel>
        <FormInput
          value={ctaUrl}
          onChange={(e) => {
            setCtaUrl(e.target.value);
          }}
        ></FormInput>
      </FormGrid>
    </>
  );
};
export default CTAPane;
