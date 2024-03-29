import React from 'react';
import { Wrapper, Title } from './singleProductForm.styles';
import componentOptions from '../../InputComponents/componentOptions';
import container from './singleProductFormContainer';

export const SingleProductForm = (props) => {
  const { title, attributes, attributeComponents } = Object.assign(
    { attributes: [], attributeComponents: {} },
    props
  );

  return (
    <Wrapper>
      {title ? <Title>{title}</Title> : null}
      {attributes.map((attr, i) => {
        const Component = Object.values(componentOptions[attr.type] || {})[
          attributeComponents[attr.name] || 0
        ];
        if (!Component) {
          console.log(
            `No default component available for ${attr.type} type Attributes`
          );
          return null;
        }
        return <Component key={i} attribute={attr.name} />;
      })}
    </Wrapper>
  );
};

export default container(SingleProductForm);
