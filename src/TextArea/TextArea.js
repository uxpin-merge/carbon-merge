import React from "react";
import PropTypes from "prop-types";
import { TextArea as TextAreaComponent } from "carbon-components-react";

function TextArea(props) {
  return (
      <TextAreaComponent {...props} />
  );
}

TextArea.propTypes = {
  /**
   * Provide a custom className that is applied directly to the underlying
   * <textarea> node
   */
  className: PropTypes.string,

  /**
   * Specify the `cols` attribute for the underlying <textarea> node
   */
  cols: PropTypes.number,

  /**
   * Optionally provide the default value of the <textarea>
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specify whether the control is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Provide a unique identifier for the control
   */
  id: PropTypes.string,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: PropTypes.node.isRequired,

  /**
   * Optionally provide an `onChange` handler that is called whenever <textarea>
   * is updated
   */
  onChange: PropTypes.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * <textarea> is clicked
   */
  onClick: PropTypes.func,

  /**
   * Specify the placeholder attribute for the <textarea>
   */
  placeholder: PropTypes.string,

  /**
   * Specify the rows attribute for the <textarea>
   */
  rows: PropTypes.number,

  /**
   * Provide the current value of the <textarea>
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specify whether the control is currently invalid
   */
  invalid: PropTypes.bool,

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: PropTypes.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes.node,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes.bool,

  /**
   * Specify whether you want the light version of this control
   */
  light: PropTypes.bool,
};

export default TextArea;
