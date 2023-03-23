import { useForm } from "react-hook-form";

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section>
      <div className="center">
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="txt_field">
            <input
              type="email"
              name="email"
              {...register("email", {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}
            />

            {errors.email && errors.email.type === "required" && (
              <p className="errorMsg">Email is required</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="errorMsg">Email is not valid</p>
            )}
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="password"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 25,
              })}
            />

            {/* Validate password */}

            {errors.password && errors.password.type === "required" && (
              <p className="errorMsg">Password is required</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p className="errorMsg">Password must be min 8 characters</p>
            )}
            {errors.password && errors.password.type === "maxLength" && (
              <p className="errorMsg">Password must be max 25 characters</p>
            )}
            <span></span>
            <label>Password</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="confirmPassword"
              {...register("repeatPassword", {
                required: true,
                minLength: 8,
                maxLength: 25,
              })}
            />

            {/* Validate re-password */}

            {errors.password && errors.password.type === "required" && (
              <p className="errorMsg">Repeat password is required</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p className="errorMsg">Password must be min 8 characters</p>
            )}
            {errors.password && errors.password.type === "maxLength" && (
              <p className="errorMsg">Password must be max 25 characters</p>
            )}
            <span></span>
            <label>Repeat Password</label>
          </div>
          <input type="submit" value="Register" />
          <div className="signup_link">
            Already a member? <a href="/login">Log in</a>
          </div>
        </form>
      </div>
    </section>
  );
}
