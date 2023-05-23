import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useTypedSelector } from "store/store";
import useLogin from "hooks/useLogin";

export default function Login() {
  const { login } = useLogin();
  const isAuthenticated = useTypedSelector(state => state.auth.isAuthenticated);
  const [isError, setIsError] = useState(false);
  const history = useHistory();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAuthenticated) history.push("/");
  }, [isAuthenticated, history]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsError(false);
    if (!emailRef.current || !passwordRef.current) return;
    const success = await login(emailRef.current.value, passwordRef.current.value);
    if (!success) setIsError(true);
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>

            {isError && (
              <ul className="error-messages">
                <li>Invalid email or password</li>
              </ul>
            )}

            <form onSubmit={handleSubmit}>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Email" ref={emailRef} />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
