import React, { Component } from "react";
import styles from "../screens/LoginScreen.style";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import { Button, CheckBox } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";

import Input from "../components/Input";
import account from "../consts/user";
import errorMessages from "../consts/messages";

const api = user =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.email === account.email && user.password === account.password) {
        resolve();
      } else {
        if (user.email === account.email) {
          reject({
            password: errorMessages.password
          });
        } else {
          reject({
            email: errorMessages.emailNotExist,
            password: errorMessages.password
          });
        }
      }
    }, 3000);
  });

class LoginScreen extends Component {
  _handleSubmit = async (values, bag) => {
    try {
      await api(values);
      bag.setSubmitting(false);
      this.props.navigation.navigate("Dashboard");
      bag.resetForm();
    } catch (error) {
      bag.setSubmitting(false);
      bag.setErrors(error);
    }
  };

  state = {
    checked: false
  };

  render() {
    return (
      <View style={styles.rootContainer}>
        <KeyboardAvoidingView
          behavior="position"
          contentContainerStyle={styles.contentContainerStyle}
        >
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/images/logo.png")}
            />
            <Text style={styles.headingTitle}>{"TECHNICAL TEST"}</Text>
          </View>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={this._handleSubmit}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email(errorMessages.emailNotValid)
                .required(errorMessages.required),
              password: Yup.string()
                .min(6, errorMessages.minMax)
                .max(12, errorMessages.minMax)
                .required(errorMessages.required)
            })}
            render={({
              values,
              handleSubmit,
              setFieldValue,
              errors,
              touched,
              setFieldTouched,
              isValid,
              isSubmitting
            }) => (
              <React.Fragment>
                <View style={styles.formContainer}>
                  <Input
                    label="Email"
                    autoCapitalize="none"
                    placeholder="Input email address"
                    value={values.email}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="email"
                    error={touched.email && errors.email}
                  />
                  <Input
                    label="Password"
                    autoCapitalize="none"
                    placeholder="Input password"
                    secureTextEntry
                    value={values.password}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="password"
                    error={touched.password && errors.password}
                  />
                  <CheckBox
                    title="Remember Me"
                    containerStyle={styles.checkBox}
                    checked={this.state.checked}
                    checkedColor="#714db2"
                    onPress={() =>
                      this.setState({ checked: !this.state.checked })
                    }
                  />
                  <Button
                    buttonStyle={styles.btnSignIn}
                    onPress={handleSubmit}
                    title="Sign In"
                    disabled={!isValid || isSubmitting}
                    loading={isSubmitting}
                  />
                </View>
              </React.Fragment>
            )}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default LoginScreen;
