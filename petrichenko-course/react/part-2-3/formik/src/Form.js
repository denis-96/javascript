import {
  /*useFormik, */ Formik,
  Form,
  Field,
  ErrorMessage,
  useField,
} from "formik";
import * as yup from "yup";

/*
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Обязательное поле";
  } else if (values.name.length < 2) {
    errors.name = "Минимум 2 символа";
  }

  if (!values.email) {
    errors.email = "Обязательное поле";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Неправильный email адрес";
  }
  return errors;
};
*/
const validationSchema = yup.object({
  name: yup.string().min(2, "Минимум 2 символа").required("Обязательное поле"),
  email: yup
    .string()
    .email("Неправильный email адрес")
    .required("Обязательное поле"),
  amount: yup.number().min(5, "Не менее 5").required("Обязательное поле"),
  currency: yup.string().required("Выберите валюту"),
  text: yup.string().min(10, "Минимум 10 символов"),
  terms: yup
    .boolean()
    .oneOf([true], "Необходимо согласие")
    .required("Необходимо согласие"),
});

// variant 1
/*
const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      amount: 0,
      currency: "",
      text: "",
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h2>Отправить пожертвование</h2>
      <label htmlFor="name">Ваше имя</label>
      <input
        id="name"
        name="name"
        type="text"
        {...formik.getFieldProps("name")}
      />
      {formik.errors.name && formik.touched.name && (
        <div className="error">{formik.errors.name}</div>
      )}
      <label htmlFor="email">Ваша почта</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.email && formik.touched.email && (
        <div className="error">{formik.errors.email}</div>
      )}
      <label htmlFor="amount">Количество</label>
      <input
        id="amount"
        name="amount"
        type="number"
        value={formik.values.amount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.amount && formik.touched.amount && (
        <div className="error">{formik.errors.amount}</div>
      )}
      <label htmlFor="currency">Валюта</label>
      <select
        id="currency"
        name="currency"
        value={formik.values.currency}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value="">Выберите валюту</option>
        <option value="USD">USD</option>
        <option value="UAH">UAH</option>
        <option value="RUB">RUB</option>
      </select>
      {formik.errors.currency && formik.touched.currency && (
        <div className="error">{formik.errors.currency}</div>
      )}
      <label htmlFor="text">Ваше сообщение</label>
      <textarea
        id="text"
        name="text"
        value={formik.values.text}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.text && formik.touched.text && (
        <div className="error">{formik.errors.text}</div>
      )}
      <label className="checkbox">
        <input
          name="terms"
          type="checkbox"
          value={formik.values.terms}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        Соглашаетесь с политикой конфиденциальности?
      </label>
      {formik.errors.terms && formik.touched.terms && (
        <div className="error">{formik.errors.terms}</div>
      )}
      <button type="submit">Отправить</button>
    </form>
  );
};
*/

// variant 2
const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...props} {...field} />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...props} {...field} />
        {children}
      </label>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

const MyForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        amount: 0,
        currency: "",
        text: "",
        terms: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className="form">
        <h2>Отправить пожертвование</h2>
        <TextInput label="Ваше имя" id="name" name="name" type="text" />
        <TextInput label="Ваша почта" id="email" name="email" type="email" />
        <TextInput label="Количество" id="amount" name="amount" type="number" />
        <label htmlFor="currency">Валюта</label>
        <Field id="currency" name="currency" as="select">
          <option value="">Выберите валюту</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
          <option value="RUB">RUB</option>
        </Field>
        <ErrorMessage className="error" name="currency" component="div" />
        <label htmlFor="text">Ваше сообщение</label>
        <Field id="text" name="text" as="textarea" />
        <ErrorMessage className="error" name="text" component={"div"} />
        <Checkbox name="terms">
          Соглашаетесь с политикой конфиденциальности?
        </Checkbox>
        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};

export default MyForm;
