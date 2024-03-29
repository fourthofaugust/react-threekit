import React from 'react';
import PropTypes from 'prop-types';
import {
  ColorSwatchContent as Content,
  ColorSwatchHeader as Header,
  ColorOption as Option,
} from './colorSwatch.styles';
import { Tooltip } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { regularToKebabCase } from '../../../../utils';
import { ATTRIBUTE_TYPES } from '../../../../constants';
import defaultClassName, { classPrefix } from '../classNames';

export const ColorSwatch = (props) => {
  const {
    attribute,
    title,
    className: classNameRaw,
    options,
    selected,
    hideDisabled,
    handleClick,
    isPlayerLoading,
  } = props;

  let className = `${defaultClassName}-color-swatch`;
  if (attribute) className += ` ${regularToKebabCase(attribute)}`;
  else if (title) className += ` ${regularToKebabCase(attribute)}`;
  if (classNameRaw) className += ` ${classNameRaw}`;
  className += ` ${classPrefix}-color-swatch`;

  return (
    <div className={`${className}-component`}>
      {title && <Header className={`${className}-header`}>{title}</Header>}
      <Content className={`${className}-content`}>
        {options.map((option, i) => {
          if (option.disabled && hideDisabled) return null;
          let cls = `${className}-option option-${i + 1} ${option.value}`;
          return (
            <Tooltip key={i} placement="top" title={option.label}>
              <Option
                className={cls}
                isPlayerLoading={isPlayerLoading}
                color={option.colorValue}
                onClick={() => handleClick(option.value)}
              >
                {option.value === selected && (
                  <div className={`${cls} selected`}>
                    <CheckOutlined />
                  </div>
                )}
              </Option>
            </Tooltip>
          );
        })}
      </Content>
    </div>
  );
};

ColorSwatch.propTypes = {
  /**
   * Is the attribute name on the initialized asset that we are
   * using this component for
   */
  attribute: PropTypes.string,
  /**
   * Used to add a title to the input
   */
  title: PropTypes.string,
  /**
   * Used to add a custom class name to each of the components html elements
   */
  className: PropTypes.string,
  /**
   * Selected value from the option set. Should match the 'value' property
   * of one of the items in the options array.
   */
  selected: PropTypes.string,
  /**
   * NOTE: Input wide hide disabled will be deprecated in favour of option
   * specific control of both 'disabled' and 'visible'.
   *
   * Used to hide the options that have the 'disabled' equal to true.
   */
  hideDisabled: PropTypes.bool,
  /**
   * Change handler function. Passes on the 'value' property of the option
   * selected by the user to the function.
   */
  handleClick: PropTypes.func,
  /**
   * The options set to be displayed for the user
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      colorValue: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ),
};

ColorSwatch.defaultProps = {
  attribute: undefined,
  title: undefined,
  className: undefined,
  selected: undefined,
  hideDisabled: undefined,
  handleClick: undefined,
  options: [],
};

ColorSwatch.compatibleAttributes = new Set([ATTRIBUTE_TYPES.asset]);

export default ColorSwatch;
