import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'zent/es/button';
import Pop from 'zent/es/pop';

class SKUButton extends PureComponent {
  static contextTypes = {
    prefix: PropTypes.string,
  };

  render() {
    const prefix = `${this.context.prefix}-group`;
    const { disabled } = this.props;

    return (
      <div className={prefix}>
        <h3 className="group-title">
          {typeof disabled === 'string' ? (
            <Pop trigger="hover" position="top-left" content={disabled}>
              <Button onClick={this.props.onClick} disabled={!!disabled}>
                添加规格项目
              </Button>
            </Pop>
          ) : (
            <Button onClick={this.props.onClick} disabled={!!disabled}>
              添加规格项目
            </Button>
          )}
        </h3>
      </div>
    );
  }
}

export default SKUButton;
