import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import { RadioGroup, Radio } from '@palmerhq/radio-group';
import * as Yup from 'yup';
import './index.css';
import '@palmerhq/radio-group/style.css';

function FRadioGroup(props) {
  const [{ onChange, onBlur, ...field }] = useField(props.name);
  return (
    <RadioGroup
      {...props}
      {...field}
      labelledBy={props.name}
      onBlur={onBlur(props.name)}
      onChange={onChange(props.name)}
    />
  );
}

function App() {
  return (
      <Formik
        initialValues={{ color: '' }}
        validationSchema={Yup.object().shape({
          color: Yup.string().required(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <FRadioGroup name="color">
            <Radio value="red">Foo</Radio>
            <Radio value="green">Biz</Radio>
            <Radio value="blue">Boop</Radio>
          </FRadioGroup>
        </Form>
      </Formik>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
