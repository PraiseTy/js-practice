import styles from './Register.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Register() {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().min(3).required('Username must be 3 characters'),
      email: Yup.string().email().required('Email is required'),
      password: Yup.string().min(6).required('Password must be at least 6 characters'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'passwords must match')
        .required()
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    }
  });

  return (
    <div className={styles.container}>
      <form className={styles.formData} onSubmit={formik.handleSubmit}>
        <div className={styles.title}>Register with Us</div>
        <div>
          <label>Username</label>
          <input
            name="username"
            type="text"
            placeholder="Enter Username"
            value={formik.values.username}
            className={`${formik.touched.username && formik.errors.username ? styles.input_errors : ''}
                   ${formik.touched.username && !formik.errors.username ? styles.input_success : ''}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username && (
            <div className={styles.errors}>{formik.errors.username ? formik.errors.username : null}</div>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter Email"
            className={`${formik.touched.email && formik.errors.email ? styles.input_errors : ''}
                   ${formik.touched.email && !formik.errors.email ? styles.input_success : ''}`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.errors}>{formik.errors.email}</div>
          ) : (
            ''
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            className={`${formik.touched.password && formik.errors.password ? styles.input_errors : ''}${formik.touched.password && !formik.errors.password ? styles.input_success : ''}`}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className={styles.errors}>{formik.errors.password}</div>
          ) : (
            ''
          )}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Enter Password again"
            className={`${formik.touched.confirmPassword && formik.errors.confirmPassword ? styles.input_errors : ''}${formik.touched.confirmPassword && !formik.errors.confirmPassword ? styles.input_success : ''}`}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className={styles.errors}>{formik.errors.confirmPassword}</div>
          ) : (
            ''
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
