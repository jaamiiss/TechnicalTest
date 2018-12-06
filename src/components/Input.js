import React, { PureComponent } from "react";
import { View } from "react-native";
import styles from "../components/Input.style";
import {
  FormInput,
  FormValidationMessage,
  FormLabel
} from "react-native-elements";

class Input extends PureComponent {
  _handleChange = value => {
    this.props.onChange(this.props.name, value);
  };

  _handleTouch = () => {
    this.props.onTouch(this.props.name);
  };

  render() {
    const { label, error, ...rest } = this.props;
    const ifError = error;

    return (
      <View style={styles.root}>
        <FormLabel labelStyle={ifError ? styles.labelError : styles.label}>
          {label}
        </FormLabel>
        <FormInput
          onChangeText={this._handleChange}
          onBlur={this._handleTouch}
          containerStyle={ifError ? styles.inputErrorStyle : styles.inputStyle}
          {...rest}
        />
        {error && <FormValidationMessage>{error}</FormValidationMessage>}
      </View>
    );
  }
}

export default Input;
