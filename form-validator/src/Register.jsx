import styles from './Register.module.scss'

function Register() {

  return (
      <div className={styles.container}>
        <form className={styles.formData}>
          <div className={styles.title}>Register with Us</div>
          <div>
            <label>Username</label>
            <input name="username" type="text" placeholder='Enter Username'/>
          </div>
          <div>
            <label>Email</label>
            <input name="email" type="email" placeholder='Enter Email'/>
          </div>
          <div>
            <label>Password</label>
            <input name="password" type="password" placeholder='Enter Password'/>
          </div>
          <div>
            <label>Confirm Password</label>
            <input name="confirmPassword" type="password" placeholder='Enter Password again'/>
          </div>
          <button>Submit</button>
        </form>
      </div>
  )
}

export default Register
